# Build Stage
################################################################################
FROM rust:1.54-slim-buster as builder

RUN rustup component add clippy

RUN apt-get update \
  && apt-get install -y ca-certificates pkg-config libssl-dev \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY crates/control/Cargo.toml ./Cargo.lock ./

# Avoid having to install/build all dependencies by copying the Cargo files and
# making a dummy src/main.rs and empty lib.rs files.
RUN mkdir ./src \
  && echo "fn main() {}" > src/main.rs \
  && touch src/lib.rs \
  # TODO: figure out if there's a way to use `--locked` with these commands.
  # There seems to be an issue with building only this single Cargo.toml, but
  # pulling in the workspace Cargo.lock file.
  && cargo test \
  && cargo build --release \
  && rm -r src

COPY crates/control/src ./src
COPY crates/control/config ./config

# This touch prevents Docker from using a cached empty main.rs file.
RUN touch src/main.rs \
  && touch src/lib.rs \
  && cargo test --locked --offline \
  && cargo clippy --locked --offline \
  && cargo install --path . --locked --offline


# Runtime Stage
################################################################################
FROM gcr.io/distroless/cc-debian10

WORKDIR /app
ENV PATH="/app:$PATH"

# Copy in the connector artifact.
COPY --from=builder /usr/local/cargo/bin/control ./control-plane-server
COPY --from=builder /app/config ./config

# Avoid running the connector as root.
USER nonroot:nonroot

# We can remove this eventually, but for now this is super useful to just set uniformly.
# * tower_http=debug gives us access logs.
ENV RUST_LOG=info,tower_http=debug

ENTRYPOINT ["/app/control-plane-server"]
