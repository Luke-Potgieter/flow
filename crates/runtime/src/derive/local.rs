use super::extract_endpoint;
use crate::{
    local_connector::{Connector, UnsealFuture, Unsealed},
    unseal,
};
use futures::{FutureExt, Stream, StreamExt};
use proto_flow::{
    derive::{Request, Response},
    runtime::DeriveRequestExt,
};

fn unseal(mut request: Request) -> Result<UnsealFuture<Request>, Request> {
    if !matches!(
        request,
        Request { spec: Some(_), .. }
            | Request {
                validate: Some(_),
                ..
            }
            | Request { open: Some(_), .. }
    ) {
        return Err(request); // Not an unseal-able request.
    };

    Ok(async move {
        let (endpoint, config_json) = extract_endpoint(&mut request)?;

        let models::DeriveUsing::Local(models::LocalConfig {
            command,
            config: sealed_config,
            env,
            protobuf,
        }) = endpoint
        else {
            anyhow::bail!("task connector type has changed and is no longer an image")
        };
        *config_json = unseal::decrypt_sops(&sealed_config).await?.to_string();

        let log_level = match request.get_internal() {
            Ok(DeriveRequestExt {
                labels: Some(labels),
                ..
            }) => Some(labels.log_level()),
            _ => None,
        };

        Ok(Unsealed {
            command,
            env,
            log_level,
            protobuf,
            request,
        })
    }
    .boxed())
}

pub fn connector<L, R>(
    log_handler: L,
    request_rx: R,
) -> impl Stream<Item = anyhow::Result<Response>>
where
    L: Fn(&ops::Log) + Clone + Send + Sync + 'static,
    R: Stream<Item = anyhow::Result<Request>> + Send + 'static,
{
    let request_rx = crate::stream_error_to_status(request_rx).boxed();
    let (connector, response_rx) = Connector::new(log_handler, request_rx, unseal);
    tokio::spawn(async move { connector.run().await });
    crate::stream_status_to_error(response_rx)
}
