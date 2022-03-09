use std::collections::BTreeMap;

use models::Capture;
use models::CaptureBinding;
use models::CaptureDef;
use models::CaptureEndpoint;
use models::Catalog;
use models::Collection;
use models::CollectionDef;
use models::CompositeKey;
use models::Config;
use models::ConnectorConfig;
use models::JsonPointer;
use models::Object;
use models::RelativeUrl;
use models::Schema;
use models::ShardTemplate;

use crate::models::connector_images::ConnectorImage;
use crate::models::connectors::Connector;
use crate::services::connectors::DiscoveryOptions;

#[derive(Debug, Deserialize)]
pub struct DiscoverResponse {
    pub bindings: Vec<DiscoveredBinding>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DiscoveredBinding {
    /// A recommended display name for this discovered binding.
    pub recommended_name: String,
    /// JSON-encoded object which specifies the endpoint resource to be captured.
    #[serde(rename = "resourceSpec")]
    pub resource_spec_json: Object,
    /// JSON schema of documents produced by this binding.
    #[serde(rename = "documentSchema")]
    pub document_schema_json: Object,
    /// Composite key of documents (if known), as JSON-Pointers.
    pub key_ptrs: Vec<String>,
}

impl DiscoveredBinding {
    fn key(&self) -> models::CompositeKey {
        CompositeKey::new(
            self.key_ptrs
                .iter()
                .map(JsonPointer::new)
                .collect::<Vec<JsonPointer>>(),
        )
    }

    pub fn schema_url(&self) -> Schema {
        Schema::Url(RelativeUrl::new(self.schema_name()))
    }

    pub fn schema_name(&self) -> String {
        format!("{}.schema.json", self.recommended_name)
    }
}

pub struct DiscoveredCatalog {
    connector: Connector,
    image: ConnectorImage,
    config: Object,
    bindings: Vec<DiscoveredBinding>,
    options: DiscoveryOptions,
}

impl DiscoveredCatalog {
    pub fn new(
        connector: Connector,
        image: ConnectorImage,
        config: Object,
        bindings: Vec<DiscoveredBinding>,
        options: DiscoveryOptions,
    ) -> Self {
        Self {
            connector,
            image,
            config,
            bindings,
            options,
        }
    }

    pub fn image(&self) -> &ConnectorImage {
        &self.image
    }

    pub fn render_catalog(&self) -> Catalog {
        Catalog {
            captures: self.capture_definitions(),
            collections: self.discovered_collections(),
            ..Default::default()
        }
    }

    pub fn render_config(&self) -> Config {
        Config::Inline(self.config.clone())
    }

    pub fn render_schemas(&self) -> BTreeMap<String, Schema> {
        let mut schemas = BTreeMap::new();
        for binding in self.bindings.iter() {
            schemas.insert(
                binding.schema_name(),
                Schema::Object(binding.document_schema_json.clone()),
            );
        }
        schemas
    }

    pub fn name(&self) -> String {
        format!("{}.flow.json", self.connector.codename())
    }

    pub fn config_name(&self) -> String {
        format!("{}.config.json", self.connector.codename())
    }

    fn capture_definitions(&self) -> BTreeMap<Capture, CaptureDef> {
        let mut captures = BTreeMap::new();
        captures.insert(self.capture_name(), self.capture_def());
        captures
    }

    fn capture_def(&self) -> CaptureDef {
        CaptureDef {
            endpoint: CaptureEndpoint::Connector(ConnectorConfig {
                image: self.image.pinned_version(),
                config: self.config_url(),
            }),
            bindings: self.capture_bindings(),
            interval: CaptureDef::default_interval(),
            shards: ShardTemplate::default(),
        }
    }

    fn capture_bindings(&self) -> Vec<CaptureBinding> {
        let mut capture_bindings = Vec::with_capacity(self.bindings.len());

        for binding in self.bindings.iter() {
            capture_bindings.push(CaptureBinding {
                resource: binding.resource_spec_json.clone(),
                target: self.collection_name(binding),
            });
        }

        capture_bindings
    }

    fn discovered_collections(&self) -> BTreeMap<Collection, CollectionDef> {
        let mut collections = BTreeMap::new();

        for binding in self.bindings.iter() {
            collections.insert(
                self.collection_name(binding),
                CollectionDef {
                    schema: binding.schema_url(),
                    key: binding.key(),
                    projections: Default::default(),
                    derivation: Default::default(),
                    journals: Default::default(),
                },
            );
        }

        collections
    }

    fn config_url(&self) -> Config {
        let name = format!("{}.config.json", self.connector.codename());
        Config::Url(RelativeUrl::new(name))
    }

    fn capture_name(&self) -> Capture {
        let prefix = &self.options.catalog_prefix;
        let name = &self.options.catalog_name;
        Capture::new(format!("{prefix}/{name}"))
    }

    fn collection_name(&self, binding: &DiscoveredBinding) -> Collection {
        let prefix = &self.options.catalog_prefix;
        // TODO: Should this binding's name get wrapped in a `CatalogName::new`
        // to ensure proper unicode handling?
        let name = &binding.recommended_name;
        Collection::new(format!("{prefix}/{name}"))
    }
}
