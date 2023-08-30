use anyhow::Context;
use futures::channel::oneshot;
use proto_flow::{flow, ops, runtime};
use tokio::io::AsyncBufReadExt;

// Port on which flow-connector-init listens for requests.
// This is its default, made explicit here.
// This number was chosen because it seemed unlikely that a connector would try to use it.
// The main thing is that we want to avoid any common port numbers to avoid conflicts with
// connectors.
const CONNECTOR_INIT_PORT: u16 = 49092;

/// Start an image connector container, returning its description and a dialed tonic Channel.
/// The container is attached to the given `network`, and its logs are dispatched to `log_handler`.
/// `task_name` and `task_type` are used only to label the container.
pub async fn start<L>(
    image: &str,
    log_handler: L,
    network: &str,
    task_name: &str,
    task_type: ops::TaskType,
) -> anyhow::Result<(runtime::Container, tonic::transport::Channel, Guard)>
where
    L: Fn(&ops::Log) + Send + Sync + 'static,
{
    // We can't start a container without flow-connector-init.
    let connector_init = locate_bin::locate("flow-connector-init")
        .context("failed to locate flow-connector-init")?;

    // Generate a unique name for this container instance. Pull and inspect its image.
    let name = unique_container_name();
    let inspect_content = inspect_image(image.to_string()).await?;
    let network_ports = parse_network_ports(&inspect_content)?;

    // Many operational contexts only allow for docker volume mounts
    // from certain locations:
    //  * Docker for Mac restricts file shares to /User, /tmp, and a couple others.
    //  * Estuary's current K8s deployments use a separate docker daemon container
    //    within the pod, having a common /tmp tempdir volume.
    //
    // So, we use temporaries to ensure that files are readable within the container.
    let tmp_connector_init =
        tempfile::NamedTempFile::new().context("creating temp for flow-connector-init")?;
    let mut tmp_docker_inspect =
        tempfile::NamedTempFile::new().context("creating temp for docker inspect output")?;

    // Change mode of `docker_inspect` to be readable by all users.
    // This is required because the effective container user may have a different UID.
    #[cfg(unix)]
    {
        use std::os::unix::prelude::PermissionsExt;
        let mut perms = tmp_docker_inspect.as_file_mut().metadata()?.permissions();
        perms.set_mode(0o644);
        tmp_docker_inspect.as_file_mut().set_permissions(perms)?;
    }

    // Write `inspect_content` output to its temporary file.
    // Copy `flow-connector-init` to its temporary file.
    ((), _) = futures::try_join!(
        tokio::fs::write(tmp_docker_inspect.path(), &inspect_content),
        tokio::fs::copy(connector_init, tmp_connector_init.path())
    )
    .context("writing container temporary file")?;

    // Close our open files but retain a deletion guard.
    let tmp_connector_init = tmp_connector_init.into_temp_path();
    let tmp_docker_inspect = tmp_docker_inspect.into_temp_path();

    // This is default `docker run` behavior if --network is not provided.
    let network = if network == "" { "bridge" } else { network };

    let mut process: async_process::Child = async_process::Command::new("docker")
        .args([
            "run".to_string(),
            // Remove the docker container upon its exit.
            "--rm".to_string(),
            // Addressable name of this connector.
            format!("--name={name}"),
            // Network to which the container should attach.
            format!("--network={}", network),
            // The entrypoint into a connector is always flow-connector-init,
            // which will delegate to the actual entrypoint of the connector.
            "--entrypoint=/flow-connector-init".to_string(),
            // Mount the flow-connector-init binary and `docker inspect` output.
            format!(
                "--mount=type=bind,source={},target=/flow-connector-init",
                tmp_connector_init.to_string_lossy()
            ),
            format!(
                "--mount=type=bind,source={},target=/image-inspect.json",
                tmp_docker_inspect.to_string_lossy(),
            ),
            // Thread-through the logging configuration of the connector.
            "--env=LOG_FORMAT=json".to_string(),
            // Cgroup memory / CPU resource limits.
            // TODO(johnny): we intend to tighten these down further, over time.
            "--memory=1g".to_string(),
            "--cpus=2".to_string(),
            // Attach labels that let us group connector resource usage under a few dimensions.
            format!("--label=image={}", image),
            format!("--label=task-name={}", task_name),
            format!("--label=task-type={}", task_type.as_str_name()),
            // Image to run.
            image.to_string(),
            // The following are arguments of flow-connector-init, not docker.
            "--image-inspect-json-path=/image-inspect.json".to_string(),
            format!("--port={CONNECTOR_INIT_PORT}"),
        ])
        .stdin(async_process::Stdio::null())
        .stdout(async_process::Stdio::null())
        .stderr(async_process::Stdio::piped())
        .spawn()
        .context("failed to docker run the connector")?
        .into();

    // We've started the container and will need to inspect for its IP address.
    // Docker has unfortunate race handling and will happily return an empty IPAddress for
    // a created or even a running container while it's still performing background setup.
    // The only reliable way to determine if the container is "ready" is to wait for
    // our inner flow-connector-init process to produce its startup log.
    let (ready_tx, ready_rx) = oneshot::channel::<()>();

    // Service process stderr by decoding ops::Logs and sending to our handler.
    let stderr = process.stderr.take().unwrap();
    tokio::spawn(async move {
        let mut stderr = tokio::io::BufReader::new(stderr);
        let mut line = String::new();

        // Wait for a non-empty read of stderr to complete or EOF/error.
        // Note that `flow-connector-init` writes a whitespace byte on startup.
        _ = stderr.fill_buf().await;
        std::mem::drop(ready_tx); // Signal that we're ready.

        loop {
            line.clear();

            match stderr.read_line(&mut line).await {
                Err(error) => {
                    tracing::error!(%error, "failed to read from connector stderr");
                    break;
                }
                Ok(0) => break, // Clean EOF.
                Ok(_) => (),
            }

            match serde_json::from_str(&line) {
                Ok(log) => log_handler(&log),
                Err(error) => {
                    tracing::error!(?error, %line, "failed to parse ops::Log from container");
                }
            }
        }
    });

    // Wait for container to become ready, or close its stderr (likely due to a crash),
    // or for thirty seconds to elapse (timeout).
    tokio::select! {
        _ = tokio::time::sleep(std::time::Duration::from_secs(30)) => {
            anyhow::bail!("timeout waiting for the container to become ready");
        }
        _ = ready_rx => (),
    }
    if let Some(exit_status) = process.try_wait().expect("wait should never fail") {
        anyhow::bail!("container crashed unexpectedly on startup: {exit_status:?}");
    }

    // Ask docker for the IP address it assigned to the container.
    let ip_addr = inspect_container_ip(&name)
        .await
        .context("resolving docker container IP")?;

    // Dial the gRPC endpoint hosted by `flow-connector-init` within the container context.
    let channel =
        tonic::transport::Endpoint::new(format!("http://{ip_addr}:{CONNECTOR_INIT_PORT}"))
            .expect("formatting endpoint address")
            .connect_timeout(std::time::Duration::from_secs(5))
            .connect()
            .await
            .context("failed to connect to connector-init inside of container")?;

    tracing::info!(%image, %name, %task_name, ?task_type, "started connector");

    Ok((
        runtime::Container {
            ip_addr: format!("{ip_addr}"),
            network_ports: network_ports.clone(),
        },
        channel,
        Guard {
            _tmp_connector_init: tmp_connector_init,
            _tmp_docker_inspect: tmp_docker_inspect,
            _process: process,
        },
    ))
}

/// Guard contains a running image container instance,
/// which will be stopped and cleaned up when the Guard is dropped.
pub struct Guard {
    _tmp_connector_init: tempfile::TempPath,
    _tmp_docker_inspect: tempfile::TempPath,
    _process: async_process::Child,
}

fn unique_container_name() -> String {
    let n = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap()
        .as_nanos();

    format!("fc-{:x}", n as u32)
}

async fn docker_cmd<S>(args: &[S]) -> anyhow::Result<Vec<u8>>
where
    S: AsRef<std::ffi::OsStr> + std::fmt::Debug,
{
    let output = async_process::output(async_process::Command::new("docker").args(args))
        .await
        .with_context(|| format!("failed to run docker command {args:?}"))?;

    if !output.status.success() {
        anyhow::bail!(
            "docker command {args:?} failed: {}",
            String::from_utf8_lossy(&output.stderr),
        );
    }
    Ok(output.stdout)
}

async fn inspect_image(image: String) -> anyhow::Result<Vec<u8>> {
    if !image.ends_with(":local") {
        _ = docker_cmd(&["pull", &image, "--quiet"]).await?;
    }
    docker_cmd(&["inspect", &image]).await
}

async fn inspect_container_ip(name: &str) -> anyhow::Result<std::net::IpAddr> {
    let output = docker_cmd(&[
        "inspect",
        "--format",
        "{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}",
        name,
    ])
    .await
    .context("failed to run docker inspect")?;

    let ip_addr = String::from_utf8_lossy(&output);
    let ip_addr: std::net::IpAddr = ip_addr.trim_end().parse().with_context(|| {
        format!(
            "failed to parse IP address from docker inspect output {:?}",
            ip_addr.trim_end()
        )
    })?;

    Ok(ip_addr)
}

fn parse_network_ports(content: &[u8]) -> anyhow::Result<Vec<flow::NetworkPort>> {
    use std::collections::BTreeMap;

    #[derive(serde::Deserialize)]
    #[serde(rename_all = "PascalCase")]
    struct InspectConfig {
        /// According to the [OCI spec](https://github.com/opencontainers/image-spec/blob/d60099175f88c47cd379c4738d158884749ed235/config.md?plain=1#L125)
        /// `ExposedPorts` is a map where the keys are in the format `1234/tcp`, `456/udp`, or `789` (implicit default of tcp), and the values are
        /// empty objects. The choice of `serde_json::Value` here is meant to convey that the actual values are irrelevant.
        #[serde(default)]
        exposed_ports: BTreeMap<String, serde_json::Value>,
        #[serde(default)]
        labels: BTreeMap<String, String>,
    }

    #[derive(serde::Deserialize)]
    #[serde(rename_all = "PascalCase")]
    struct InspectJson {
        config: InspectConfig,
    }

    let deserialized: Vec<InspectJson> = serde_json::from_slice(&content).with_context(|| {
        format!(
            "failed to parse `docker inspect` output: {}",
            String::from_utf8_lossy(&content)
        )
    })?;

    if deserialized.len() != 1 {
        anyhow::bail!("expected 1 image, got {}", deserialized.len());
    }

    let mut ports = Vec::new();
    for (exposed_port, _) in deserialized[0].config.exposed_ports.iter() {
        // We're unable to support UDP at this time.
        if exposed_port.ends_with("/udp") {
            continue;
        }
        // Technically, the ports are allowed to appear without the '/tcp' suffix, though
        // I haven't actually observed that in practice.
        let exposed_port = exposed_port.strip_suffix("/tcp").unwrap_or(exposed_port);
        let number = exposed_port.parse::<u16>().with_context(|| {
            format!("invalid key in inspected Config.ExposedPorts '{exposed_port}'")
        })?;

        let protocol_label = format!("dev.estuary.port-proto.{number}");
        let protocol = deserialized[0].config.labels.get(&protocol_label).cloned();

        let public_label = format!("dev.estuary.port-public.{number}");
        let public = deserialized[0]
            .config
            .labels
            .get(&public_label)
            .map(String::as_str)
            .unwrap_or("false");
        let public = public.parse::<bool>()
        .with_context(||  format!("invalid '{public_label}' label value: '{public}', must be either 'true' or 'false'"))?;

        ports.push(flow::NetworkPort {
            number: number as u32,
            protocol: protocol.unwrap_or_default(),
            public,
        });
    }

    Ok(ports)
}

#[cfg(test)]
mod test {
    use super::{parse_network_ports, start};
    use futures::stream::StreamExt;
    use proto_flow::flow;
    use serde_json::json;

    #[tokio::test]
    async fn test_http_ingest_spec() {
        if let Err(_) = locate_bin::locate("flow-connector-init") {
            // Skip if `flow-connector-init` isn't available (yet). We're probably on CI.
            // This test is useful as a sanity check for local development
            // and we have plenty of other coverage during CI.
            return;
        }

        let (container, channel, _guard) = start(
            "ghcr.io/estuary/source-http-ingest:dev",
            ops::tracing_log_handler,
            "",
            "a-task-name",
            proto_flow::ops::TaskType::Capture,
        )
        .await
        .unwrap();

        let mut rx = proto_grpc::capture::connector_client::ConnectorClient::new(channel)
            .capture(futures::stream::once(async move {
                serde_json::from_value(json!({
                    "spec": {"connectorType": "IMAGE", "config": {}}
                }))
                .unwrap()
            }))
            .await
            .unwrap()
            .into_inner();

        let resp = rx
            .next()
            .await
            .expect("should get a spec response")
            .unwrap();

        assert!(resp.spec.is_some());

        assert_eq!(
            container.network_ports,
            [flow::NetworkPort {
                number: 8080,
                protocol: String::new(),
                public: true
            }]
        );
    }

    #[test]
    fn test_parsing_network_ports() {
        let fixture = json!([
            {
                "Id": "foo",
                "Config":{
                    "ExposedPorts": {"567/tcp":{}, "123/udp": {}, "789":{} },
                    "Labels":{"dev.estuary.port-public.567":"true","dev.estuary.port-proto.789":"h2"}
                }
            }
        ]);
        let ports = parse_network_ports(fixture.to_string().as_bytes()).unwrap();

        assert_eq!(
            ports,
            [
                flow::NetworkPort {
                    number: 567,
                    protocol: String::new(),
                    public: true
                },
                flow::NetworkPort {
                    number: 789,
                    protocol: "h2".to_string(),
                    public: false
                },
            ]
        );

        let fixture = json!([{"Invalid": "Inspection"}]);
        parse_network_ports(fixture.to_string().as_bytes()).unwrap_err();
    }
}
