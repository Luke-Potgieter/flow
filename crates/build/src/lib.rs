use anyhow::Context;
use futures::{future::BoxFuture, FutureExt};
use proto_flow::{capture, derive, flow, materialize};
use std::{
    collections::BTreeMap,
    path::{Path, PathBuf},
};

/// Map a "--source" argument to a corresponding URL, optionally creating an empty
/// file if one doesn't exist, which is required when producing a canonical file:///
/// URL for a local file.
pub fn arg_source_to_url(source: &str, create_if_not_exists: bool) -> anyhow::Result<url::Url> {
    // Special case that maps stdin into a URL constant.
    if source == "-" {
        return Ok(url::Url::parse(STDIN_URL).unwrap());
    } else if let Ok(url) = url::Url::parse(source) {
        return Ok(url);
    }

    tracing::debug!(
        source = %source,
        "source is not a URL; assuming it's a filesystem path",
    );

    let source = match std::fs::canonicalize(source) {
        Ok(p) => p,
        Err(err) if matches!(err.kind(), std::io::ErrorKind::NotFound) && create_if_not_exists => {
            std::fs::write(source, "{}")
                .with_context(|| format!("failed to create new file {source}"))?;
            std::fs::canonicalize(source).expect("can canonicalize() a file we just wrote")
        }
        Err(err) => {
            return Err(err).context(format!("could not find {source} in the local filesystem"));
        }
    };

    // Safe unwrap since we've canonical-ized the path.
    Ok(url::Url::from_file_path(&source).unwrap())
}

/// Map a `source` into a suitable project root directory.
///
/// If `source` is a local file:// URL, its parent directories are examined
/// for a contained `flow.yaml`, `flow.yml`, or `flow.json` file, and the URL
/// of the root-most directory having such a file is returned.
///
/// Or, if `source` is not a local file://, then the current working directory is returned.
pub fn project_root(source: &url::Url) -> url::Url {
    let current_dir =
        std::env::current_dir().expect("failed to determine current working directory");
    let source_path = source.to_file_path();

    let dir = if let Ok(source_path) = &source_path {
        let mut dir = source_path
            .parent()
            .expect("source path is an absolute filesystem path");

        while let Some(parent) = dir.parent() {
            if ["flow.yaml", "flow.yml", "flow.json"]
                .iter()
                .any(|name| parent.join(name).exists())
            {
                dir = parent;
            } else {
                break;
            }
        }
        dir
    } else {
        // `source` isn't local. Use the current working directory.
        &current_dir
    };

    url::Url::from_file_path(dir).expect("cannot map project directory into a URL")
}

/// Load a source into tables, separately returning source tables and any errors.
pub async fn load(source: &url::Url, file_root: &Path) -> tables::Sources {
    let loader = sources::Loader::new(
        tables::Sources::default(),
        Fetcher {
            file_root: file_root.to_owned(),
        },
    );

    loader
        .load_resource(
            sources::Scope::new(&source),
            &source,
            flow::ContentType::Catalog,
        )
        .await;

    loader.into_tables()
}

/// Build sources by mapping to their inline form, validating all specifications,
/// fetching referenced specs from the control plane, and producing built specifications.
pub async fn validate<L>(
    build_id: &str,
    connector_network: &str,
    control_plane: &dyn validation::ControlPlane,
    generate_ops_collections: bool,
    log_handler: L,
    noop_captures: bool,
    noop_derivations: bool,
    noop_materializations: bool,
    project_root: &url::Url,
    mut sources: tables::Sources,
) -> (tables::Sources, tables::Validations)
where
    L: Fn(&ops::Log) + Send + Sync + Clone + 'static,
{
    // TODO(johnny): We *really* need to kill this, and have ops collections
    // be injected exclusively from the control-plane.
    if generate_ops_collections {
        assemble::generate_ops_collections(&mut sources);
    }
    ::sources::inline_sources(&mut sources);

    let runtime = runtime::Runtime::new(
        connector_network.to_string(),
        log_handler,
        None,
        format!("build/{}", build_id),
    );

    let connectors = Connectors {
        noop_captures,
        noop_derivations,
        noop_materializations,
        runtime,
    };

    let tables::Sources {
        captures,
        collections,
        errors: _,
        fetches,
        imports,
        materializations,
        resources: _,
        storage_mappings,
        tests,
    } = &sources;

    let validations = validation::validate(
        build_id,
        project_root,
        &connectors,
        control_plane,
        &captures,
        &collections,
        &fetches,
        &imports,
        &materializations,
        &storage_mappings,
        &tests,
    )
    .await;

    (sources, validations)
}

pub async fn managed_build<L>(
    build_id: String,
    connector_network: String,
    control_plane: Box<dyn validation::ControlPlane>,
    file_root: PathBuf,
    log_handler: L,
    project_root: url::Url,
    source: url::Url,
) -> Result<(tables::Sources, tables::Validations), tables::Errors>
where
    L: Fn(&ops::Log) + Send + Sync + Clone + 'static,
{
    let (sources, validations) = validate(
        &build_id,
        &connector_network,
        &*control_plane,
        true, // Generate ops collections.
        log_handler,
        false, // Validate captures.
        false, // Validate derivations.
        false, // Validate materializations.
        &project_root,
        load(&source, &file_root).await.into_result()?,
    )
    .await;

    Ok((sources, validations.into_result()?))
}

pub fn persist(
    build_config: proto_flow::flow::build_api::Config,
    db_path: &Path,
    result: &Result<(tables::Sources, tables::Validations), tables::Errors>,
) -> anyhow::Result<()> {
    let db = rusqlite::Connection::open(db_path).context("failed to open catalog database")?;

    match result {
        Ok((sources, validations)) => {
            tables::persist_tables(&db, &sources.as_tables())
                .context("failed to persist catalog sources")?;
            tables::persist_tables(&db, &validations.as_tables())
                .context("failed to persist catalog validations")?;
        }
        Err(errors) => {
            tables::persist_tables(&db, &[errors]).context("failed to persist catalog errors")?;
        }
    }

    // Legacy support: encode and persist a deprecated protobuf build Config.
    // At the moment, these are still covered by Go snapshot tests.
    let mut meta = tables::Meta::new();
    meta.insert_row(build_config);
    tables::persist_tables(&db, &[&meta]).context("failed to persist catalog meta")?;

    tracing::info!(?db_path, "wrote build database");
    Ok(())
}

/// Gather all file URLs and contents generated by validations.
/// Malformed URLs are ignored, as they're already surfaced as validation errors.
pub fn generate_files(
    project_root: &url::Url,
    validations: &tables::Validations,
) -> anyhow::Result<()> {
    let mut files = BTreeMap::new();

    for row in validations.built_collections.iter() {
        let Some(validated) = &row.validated else { continue };

        for (url, content) in &validated.generated_files {
            if let Ok(url) = url::Url::parse(&url) {
                files.insert(url, content.as_bytes());
            }
        }
    }
    let files = files
        .into_iter()
        .map(|(resource, content)| (resource, content.to_vec()))
        .collect();

    write_files(project_root, files)
}

/// Write out files which are located underneath the `project_root`.
pub fn write_files(project_root: &url::Url, files: Vec<(url::Url, Vec<u8>)>) -> anyhow::Result<()> {
    for (resource, content) in files {
        let Ok(path) = resource.to_file_path() else {
            tracing::info!(%resource, "not writing the resource because it's remote and not local");
            continue;
        };
        if !resource.as_str().starts_with(project_root.as_str()) {
            tracing::info!(%resource, %project_root,
                "not writing local resource because it's not under the project root");
            continue;
        }
        if let Some(parent) = path.parent() {
            std::fs::create_dir_all(path.parent().unwrap()).with_context(|| {
                format!("failed to create directory {}", parent.to_string_lossy())
            })?;
        }
        std::fs::write(&path, content).with_context(|| format!("failed to write {resource}"))?;

        tracing::info!(path=%path.to_str().unwrap_or(resource.as_str()), "wrote file");
    }
    Ok(())
}

struct Fetcher {
    file_root: PathBuf,
}

impl sources::Fetcher for Fetcher {
    fn fetch<'a>(
        &'a self,
        resource: &'a url::Url,
        content_type: flow::ContentType,
    ) -> BoxFuture<'a, anyhow::Result<bytes::Bytes>> {
        tracing::debug!(%resource, ?content_type, file_root=?self.file_root, "fetching resource");
        fetch_async(resource.clone(), self.file_root.clone()).boxed()
    }
}

async fn fetch_async(resource: url::Url, mut file_path: PathBuf) -> anyhow::Result<bytes::Bytes> {
    match resource.scheme() {
        "http" | "https" => {
            let resp = reqwest::get(resource.as_str()).await?;
            let status = resp.status();

            if status.is_success() {
                Ok(resp.bytes().await?)
            } else {
                let body = resp.text().await?;
                anyhow::bail!("{status}: {body}");
            }
        }
        "file" => {
            let rel_path = resource
                .to_file_path()
                .map_err(|err| anyhow::anyhow!("failed to convert file uri to path: {:?}", err))?;

            // `rel_path` is absolute, so we must extend `file_path` rather than joining.
            // Skip the first component, which is a RootDir token.
            file_path.extend(rel_path.components().skip(1));

            let bytes = std::fs::read(&file_path)
                .with_context(|| format!("failed to read {file_path:?}"))?;
            Ok(bytes.into())
        }
        "stdin" => {
            use tokio::io::AsyncReadExt;

            let mut bytes = Vec::new();
            tokio::io::stdin()
                .read_to_end(&mut bytes)
                .await
                .context("reading stdin")?;

            Ok(bytes.into())
        }
        _ => Err(anyhow::anyhow!(
            "cannot fetch unsupported URI scheme: '{resource}'"
        )),
    }
}

pub struct Connectors<L>
where
    L: Fn(&ops::Log) + Send + Sync + Clone + 'static,
{
    noop_captures: bool,
    noop_derivations: bool,
    noop_materializations: bool,
    runtime: runtime::Runtime<L>,
}

impl<L> validation::Connectors for Connectors<L>
where
    L: Fn(&ops::Log) + Send + Sync + Clone + 'static,
{
    fn validate_capture<'a>(
        &'a self,
        request: capture::Request,
    ) -> BoxFuture<'a, anyhow::Result<capture::Response>> {
        async move {
            if self.noop_captures {
                validation::NoOpConnectors.validate_capture(request).await
            } else {
                Ok(self
                    .runtime
                    .clone()
                    .unary_capture(request, CONNECTOR_TIMEOUT)
                    .await
                    .map_err(status_to_anyhow)?)
            }
        }
        .boxed()
    }

    fn validate_derivation<'a>(
        &'a self,
        request: derive::Request,
    ) -> BoxFuture<'a, anyhow::Result<derive::Response>> {
        async move {
            if self.noop_derivations {
                validation::NoOpConnectors
                    .validate_derivation(request)
                    .await
            } else {
                Ok(self
                    .runtime
                    .clone()
                    .unary_derive(request, CONNECTOR_TIMEOUT)
                    .await
                    .map_err(status_to_anyhow)?)
            }
        }
        .boxed()
    }

    fn validate_materialization<'a>(
        &'a self,
        request: materialize::Request,
    ) -> BoxFuture<'a, anyhow::Result<materialize::Response>> {
        async move {
            if self.noop_materializations {
                validation::NoOpConnectors
                    .validate_materialization(request)
                    .await
            } else {
                Ok(self
                    .runtime
                    .clone()
                    .unary_materialize(request, CONNECTOR_TIMEOUT)
                    .await
                    .map_err(status_to_anyhow)?)
            }
        }
        .boxed()
    }
}

fn status_to_anyhow(status: tonic::Status) -> anyhow::Error {
    anyhow::anyhow!(status.message().to_string())
}

pub const CONNECTOR_TIMEOUT: std::time::Duration = std::time::Duration::from_secs(300); // Five minutes.
pub const STDIN_URL: &str = "stdin://root/flow.yaml";
