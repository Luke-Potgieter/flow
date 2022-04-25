use super::{jobs, logs, Handler, Id};

use anyhow::Context;
use chrono::prelude::*;
use serde::{Deserialize, Serialize};
use serde_json::value::RawValue;
use sqlx::types::{Json, Uuid};
use tracing::info;

/// JobStatus is the possible outcomes of a handled connector tag.
#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase", tag = "type")]
pub enum JobStatus {
    Queued,
    PullFailed,
    SpecFailed,
    OpenGraphFailed { error: String },
    Success,
}

/// A TagHandler is a Handler which evaluates tagged connector images.
pub struct TagHandler {
    connector_network: String,
    bindir: String,
    logs_tx: logs::Tx,
}

impl TagHandler {
    pub fn new(connector_network: &str, bindir: &str, logs_tx: &logs::Tx) -> Self {
        Self {
            connector_network: connector_network.to_string(),
            bindir: bindir.to_string(),
            logs_tx: logs_tx.clone(),
        }
    }
}

// Row is the dequeued task shape of a tag connector operation.
#[derive(Debug)]
struct Row {
    connector_id: Id,
    created_at: DateTime<Utc>,
    external_url: String,
    image_name: String,
    image_tag: String,
    logs_token: Uuid,
    tag_id: Id,
    updated_at: DateTime<Utc>,
}

#[async_trait::async_trait]
impl Handler for TagHandler {
    async fn handle(&mut self, pg_pool: &sqlx::PgPool) -> anyhow::Result<std::time::Duration> {
        let mut txn = pg_pool.begin().await?;

        let row: Row = match sqlx::query_as!(
            Row,
            r#"select
                c.id as "connector_id: Id",
                c.external_url,
                c.image_name,
                t.created_at,
                t.id as "tag_id: Id",
                t.image_tag,
                t.logs_token,
                t.updated_at
            from connector_tags as t
            join connectors as c on c.id = t.connector_id
            where t.job_status->>'type' = 'queued'
            order by t.id asc
            limit 1
            for update of t skip locked;
            "#
        )
        .fetch_optional(&mut txn)
        .await?
        {
            None => return Ok(std::time::Duration::from_secs(5)),
            Some(row) => row,
        };

        let (id, status) = self.process(row, &mut txn).await?;
        info!(%id, ?status, "finished");

        sqlx::query_unchecked!(
            r#"update connector_tags set
                job_status = $2,
                updated_at = clock_timestamp()
            where id = $1
            returning 1 as "must_exist";
            "#,
            id,
            Json(status),
        )
        .fetch_one(&mut txn)
        .await?;

        txn.commit().await?;

        Ok(std::time::Duration::ZERO)
    }
}

impl TagHandler {
    #[tracing::instrument(err, skip_all, fields(id=?row.tag_id))]
    async fn process(
        &mut self,
        row: Row,
        txn: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    ) -> anyhow::Result<(Id, JobStatus)> {
        info!(
            %row.image_name,
            %row.created_at,
            %row.image_tag,
            %row.logs_token,
            %row.updated_at,
            "processing connector image tag",
        );
        let image_composed = format!("{}{}", row.image_name, row.image_tag);

        // Pull the image.
        let pull = jobs::run(
            "pull",
            &self.logs_tx,
            row.logs_token,
            tokio::process::Command::new("docker")
                .arg("pull")
                .arg(&image_composed),
        )
        .await?;

        if !pull.success() {
            return Ok((row.tag_id, JobStatus::PullFailed));
        }

        // Fetch its connector specification.
        let spec = jobs::run_with_output(
            "spec",
            &self.logs_tx,
            row.logs_token,
            tokio::process::Command::new(format!("{}/flowctl-go", &self.bindir))
                .arg("api")
                .arg("spec")
                .arg("--image")
                .arg(&image_composed)
                .arg("--network")
                .arg(&self.connector_network),
        )
        .await?;

        if !spec.0.success() {
            return Ok((row.tag_id, JobStatus::SpecFailed));
        }

        let fetch_open_graph = tokio::process::Command::new(format!("{}/fetch-open-graph", &self.bindir))
            .kill_on_drop(true)
            .arg("-url")
            .arg(&row.external_url)
            .output()
            .await?;

        if !fetch_open_graph.status.success() {
            return Ok((
                row.tag_id,
                JobStatus::OpenGraphFailed {
                    error: String::from_utf8_lossy(&fetch_open_graph.stderr).into(),
                },
            ));
        }
        let open_graph_raw: Box<RawValue> = serde_json::from_slice(&fetch_open_graph.stdout)
            .context("parsing open graph response")?;

        sqlx::query_unchecked!(
            r#"update connectors set
                open_graph_raw = $2,
                updated_at = clock_timestamp()
            where id = $1
            returning 1 as "must_exist";
            "#,
            row.connector_id,
            Json(open_graph_raw) as Json<Box<RawValue>>,
        )
        .fetch_one(&mut *txn)
        .await?;

        /// Spec is the output shape of the `flowctl api spec` command.
        #[derive(Deserialize)]
        #[serde(rename_all = "camelCase")]
        struct Spec {
            #[serde(rename = "documentationURL")]
            documentation_url: String,
            endpoint_spec_schema: Box<RawValue>,
            #[serde(rename = "type")]
            protocol: String,
            resource_spec_schema: Box<RawValue>,
        }
        let Spec {
            documentation_url,
            endpoint_spec_schema,
            protocol,
            resource_spec_schema,
        } = serde_json::from_slice(&spec.1).context("parsing connector spec output")?;

        sqlx::query_unchecked!(
            r#"update connector_tags set
                documentation_url = $2,
                endpoint_spec_schema = $3,
                protocol = $4,
                resource_spec_schema = $5
            where id = $1
            returning 1 as "must_exist";
            "#,
            row.tag_id,
            documentation_url,
            Json(endpoint_spec_schema) as Json<Box<RawValue>>,
            protocol,
            Json(resource_spec_schema) as Json<Box<RawValue>>,
        )
        .fetch_one(&mut *txn)
        .await?;

        return Ok((row.tag_id, JobStatus::Success));
    }
}
