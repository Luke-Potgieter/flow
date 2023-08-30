use super::extract_endpoint;
use crate::{container, eof_on_error, inject_error, unseal};
use futures::{Stream, TryStreamExt};
use proto_flow::capture::{Request, Response};
use proto_flow::ops;

pub async fn image_connector<L, R>(
    image: String,
    log_handler: L,
    network: String,
    request_rx: R,
    task_name: &str,
) -> tonic::Result<impl Stream<Item = tonic::Result<Response>>>
where
    L: Fn(&ops::Log) + Send + Sync + 'static,
    R: Stream<Item = tonic::Result<Request>> + Send + Unpin + 'static,
{
    let (container, channel, guard) = container::start(
        &image,
        log_handler,
        &network,
        task_name,
        ops::TaskType::Capture,
    )
    .await
    .map_err(crate::anyhow_to_status)?;

    // Adapt requests by identifying instances that carry endpoint configuration.
    // Verify they remain compatible with our started container, and then unseal their config.
    // Or if they're not compatible, then map to Status::aborted().
    let request_rx = request_rx.and_then(move |mut request| {
        let must_unseal = if matches!(
            request,
            Request { spec: Some(_), .. }
                | Request {
                    discover: Some(_),
                    ..
                }
                | Request {
                    validate: Some(_),
                    ..
                }
                | Request { apply: Some(_), .. }
                | Request { open: Some(_), .. }
        ) {
            Some(image.clone()) // Outer closure owns `image`.
        } else {
            None
        };

        async move {
            if let Some(expect_image) = must_unseal {
                let (endpoint, config_json) =
                    extract_endpoint(&mut request).map_err(crate::anyhow_to_status)?;

                let sealed_config = match endpoint {
                    models::CaptureEndpoint::Connector(models::ConnectorConfig {
                        image: this_image,
                        config,
                    }) if expect_image == this_image => config,

                    _ => return Err(tonic::Status::aborted("connector image has changed")),
                };

                *config_json = unseal::decrypt_sops(&sealed_config)
                    .await
                    .map_err(crate::anyhow_to_status)?
                    .to_string();
            }

            Ok(request)
        }
    });

    let (request_rx, error_rx) = eof_on_error(request_rx);

    // Start a capture RPC.
    let container_response = proto_grpc::capture::connector_client::ConnectorClient::new(channel)
        .capture(request_rx)
        .await?;
    let response_rx = container_response.into_inner();

    // Adapt responses by enriching the first Response with the image Container.
    let mut container = Some(container);
    let response_rx = response_rx.and_then(move |mut response| {
        _ = &guard; // Move so it's retained while responses are still being read.

        if container.is_some() {
            response
                .set_internal(&mut bytes::BytesMut::new(), |internal| {
                    internal.container = container.take();
                })
                .unwrap();
        }
        futures::future::ready(Ok(response))
    });

    Ok(inject_error(response_rx, error_rx))
}
