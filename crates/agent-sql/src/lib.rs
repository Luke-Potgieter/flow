pub mod connector_tags;
pub mod directives;
pub mod discovers;
pub mod drafts;
pub mod evolutions;
pub mod linked_materializations;
pub mod publications;
use serde::{Deserialize, Serialize};
use std::fmt::{self, Display};

mod id;
pub use id::Id;

mod text_json;
pub use text_json::TextJson;

// Re-exports of fundamental sqlx types.
pub type PgPool = sqlx::postgres::PgPool;
pub type Transaction<'l> = sqlx::Transaction<'l, sqlx::Postgres>;

#[derive(Debug, Copy, Clone, PartialEq, Eq, Serialize, Deserialize, sqlx::Type)]
#[sqlx(type_name = "catalog_spec_type")]
#[sqlx(rename_all = "lowercase")]
pub enum CatalogType {
    Capture,
    Collection,
    Materialization,
    Test,
}

impl Display for CatalogType {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let s = match *self {
            CatalogType::Capture => "capture",
            CatalogType::Collection => "collection",
            CatalogType::Materialization => "materialization",
            CatalogType::Test => "test",
        };
        f.write_str(s)
    }
}

/// Note that the discriminants here align with those in the database type.
#[derive(
    Debug,
    Copy,
    Clone,
    PartialEq,
    Eq,
    PartialOrd,
    Serialize,
    Deserialize,
    sqlx::Type,
    schemars::JsonSchema,
)]
#[sqlx(type_name = "grant_capability")]
#[sqlx(rename_all = "lowercase")]
#[serde(rename_all = "camelCase")]
pub enum Capability {
    Read = 0x10,
    Write = 0x20,
    Admin = 0x30,
}

/// Build a Postgres DB sqlx::Pool.
pub async fn build_pg_pool(
    database_url: &str,
    database_ca: Option<&str>,
    application_name: &str,
) -> sqlx::Result<sqlx::postgres::PgPool> {
    let mut pg_options = database_url
        .parse::<sqlx::postgres::PgConnectOptions>()?
        .application_name(application_name);

    // If a database CA was provided, require that we use TLS with full cert verification.
    if let Some(ca) = database_ca {
        pg_options = pg_options
            .ssl_mode(sqlx::postgres::PgSslMode::VerifyFull)
            .ssl_root_cert(ca);
    } else {
        // Otherwise, prefer TLS but don't require it.
        pg_options = pg_options.ssl_mode(sqlx::postgres::PgSslMode::Prefer);
    }

    let pg_pool = sqlx::postgres::PgPool::connect_with(pg_options).await?;
    Ok(pg_pool)
}
