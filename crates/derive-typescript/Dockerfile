FROM denoland/deno:distroless-1.36.3

COPY target/x86_64-unknown-linux-musl/release/derive-typescript /

# Disable Deno's colorized output.
ENV NO_COLOR
ENV DENO_NO_UPDATE_CHECK

ENTRYPOINT ["/derive-typescript"]
LABEL FLOW_RUNTIME_CODEC=json
LABEL FLOW_RUNTIME_PROTOCOL=derive