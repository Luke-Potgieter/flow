use futures::{channel::oneshot, Stream, StreamExt};
use proto_flow::ops;
use std::sync::Arc;

mod capture;
mod container;
mod derive;
mod materialize;
mod task_service;
mod tokio_context;
mod unary;
mod unseal;

pub use task_service::TaskService;
pub use tokio_context::TokioContext;

// This constant is shared between Rust and Go code.
// See go/protocols/flow/document_extensions.go.
pub const UUID_PLACEHOLDER: &str = "DocUUIDPlaceholder-329Bb50aa48EAa9ef";

fn anyhow_to_status(err: anyhow::Error) -> tonic::Status {
    tonic::Status::internal(format!("{err:?}"))
}

/// Runtime implements the various services that constitute the Flow Runtime.
#[derive(Clone)]
pub struct Runtime<L>
where
    L: Fn(&ops::Log) + Send + Sync + Clone + 'static,
{
    container_network: String,
    log_handler: L,
    set_log_level: Option<Arc<dyn Fn(ops::log::Level) + Send + Sync>>,
    task_name: String,
}

impl<L> Runtime<L>
where
    L: Fn(&ops::Log) + Send + Sync + Clone + 'static,
{
    /// Build a new Runtime.
    /// * `container_network`: the Docker container network used for connector containers.
    /// * `log_handler`: handler to which connector logs are dispatched.
    /// * `set_log_level`: callback for adjusting the log level implied by runtime requests.
    /// * `task_name`: name which is used to label any started connector containers.
    pub fn new(
        container_network: String,
        log_handler: L,
        set_log_level: Option<Arc<dyn Fn(ops::log::Level) + Send + Sync>>,
        task_name: String,
    ) -> Self {
        Self {
            container_network,
            log_handler,
            set_log_level,
            task_name,
        }
    }

    /// Build a tonic Server which includes all of the Runtime's services.
    pub fn build_tonic_server(self) -> tonic::transport::server::Router {
        tonic::transport::Server::builder()
            .add_service(
                proto_grpc::capture::connector_server::ConnectorServer::new(self.clone())
                    .max_decoding_message_size(usize::MAX) // Up from 4MB. Accept whatever the Go runtime sends.
                    .max_encoding_message_size(usize::MAX), // The default, made explicit.
            )
            .add_service(
                proto_grpc::derive::connector_server::ConnectorServer::new(self.clone())
                    .max_decoding_message_size(usize::MAX) // Up from 4MB. Accept whatever the Go runtime sends.
                    .max_encoding_message_size(usize::MAX), // The default, made explicit.
            )
            .add_service(
                proto_grpc::materialize::connector_server::ConnectorServer::new(self)
                    .max_decoding_message_size(usize::MAX) // Up from 4MB. Accept whatever the Go runtime sends.
                    .max_encoding_message_size(usize::MAX), // The default, made explicit.
            )
    }
}

/// Adapt a Stream<Result<Ok, Error>> into Stream<Ok> by mapping the first Error into stream EOF.
/// The Error instance is passed through the returned oneshot Receiver.
fn eof_on_error<S, Ok, Error>(stream: S) -> (impl Stream<Item = Ok>, oneshot::Receiver<Error>)
where
    S: futures::stream::Stream<Item = Result<Ok, Error>> + Send + 'static,
    Error: std::fmt::Debug,
{
    let (error_tx, error_rx) = oneshot::channel();

    let stream = stream.scan(error_tx, |error_tx, item| {
        futures::future::ready(match item {
            Ok(ok) => Some(ok),
            Err(error) => {
                // Replace because send() consumes `error_tx`.
                if let Err(error) = std::mem::replace(error_tx, oneshot::channel().0).send(error) {
                    tracing::warn!(
                        ?error,
                        "request error but the response stream has already closed"
                    )
                }
                None // End of stream.
            }
        })
    });

    (stream, error_rx)
}

/// Adapt a Stream<Result<Ok, Error>> by monitoring a provided oneshot Receiver and,
/// should it ever resolve, injecting its resolved Error into the adapted Stream.
fn inject_error<S, Ok, Error>(
    stream: S,
    error_rx: oneshot::Receiver<Error>,
) -> impl Stream<Item = Result<Ok, Error>>
where
    S: futures::stream::Stream<Item = Result<Ok, Error>> + Send + 'static + Unpin,
{
    let error_rx = futures::stream::unfold(Some(error_rx), |error_rx| async move {
        let Some(error_rx) = error_rx else { return None };

        match error_rx.await {
            Ok(error) => Some((Err(error), None)),
            Err(_cancelled) => None,
        }
    });
    futures::stream::select(stream, error_rx)
}

#[cfg(test)]
mod test {
    use super::*;

    #[tokio::test]
    async fn test_error_pass_through() {
        // Case 1: A stream produces some values and then fails.
        let (stream, err_rx) = eof_on_error(futures::stream::iter(vec![
            Ok(1),
            Ok(2),
            Ok(3),
            Err(99),
            Ok(100),
        ]));
        // We see all values prior to failure.
        assert_eq!(stream.collect::<Vec<_>>().await, vec![1, 2, 3]);
        // We see the error after injecting into an empty stream.
        assert_eq!(
            inject_error(futures::stream::empty::<Result<i32, _>>(), err_rx)
                .collect::<Vec<_>>()
                .await,
            vec![Err(99)]
        );

        // Case 2: A stream produces values and EOF's without failure.
        let (stream, err_rx) = eof_on_error(futures::stream::iter(vec![
            Result::<_, i32>::Ok(1),
            Ok(2),
            Ok(3),
        ]));
        // We see all values.
        assert_eq!(stream.collect::<Vec<_>>().await, vec![1, 2, 3]);
        // We see a clean EOF of our injected stream.
        assert_eq!(
            inject_error(futures::stream::iter(vec![Ok(4), Ok(5)]), err_rx)
                .collect::<Vec<_>>()
                .await,
            vec![Ok(4), Ok(5)]
        );
    }
}
