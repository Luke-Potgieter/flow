use crate::{capture, derive, materialize, runtime, Any};
use prost::Message;

macro_rules! impl_internal {
    ($msg_type:ty , $ext_type:ty , $type_url:literal) => {
        impl $msg_type {
            /// Get the internal field, decoded into its corresponding extension type.
            pub fn get_internal(&self) -> Option<Result<$ext_type, String>> {
                let Some(Any{type_url, value}) = &self.internal else { return None };

                if type_url != $type_url {
                    return Some(Err(format!(
                        "internal field has wrong type_url {}, expected {}",
                        type_url, $type_url
                    )));
                }
                match prost::Message::decode(value.clone()) {
                    Ok(m) => Some(Ok(m)),
                    Err(err) => Some(Err(format!(
                        "internal field {} cannot decode: {err:?}",
                        $type_url
                    ))),
                }
            }

            /// Set and inspect the internal field via a callback.
            /// Modifications made by the callback are re-encoded into the
            /// internal Any message, the post-modification value is returned.
            pub fn set_internal<F>(
                &mut self,
                buf: &mut bytes::BytesMut,
                cb: F,
            ) -> Result<$ext_type, String>
            where
                F: FnOnce(&mut $ext_type),
            {
                let mut internal = match self.get_internal() {
                    Some(result) => result?,
                    None => <$ext_type>::default(),
                };
                cb(&mut internal);

                buf.reserve(internal.encoded_len());
                internal.encode(buf).unwrap();

                self.internal = Some(::pbjson_types::Any {
                    type_url: $type_url.to_string(),
                    value: buf.split().freeze(),
                });
                Ok(internal)
            }
        }
    };
}

impl_internal!(
    capture::Request,
    runtime::CaptureRequestExt,
    "flow://runtime.CaptureRequestExt"
);
impl_internal!(
    capture::Response,
    runtime::CaptureResponseExt,
    "flow://runtime.CaptureResponseExt"
);
impl_internal!(
    derive::Request,
    runtime::DeriveRequestExt,
    "flow://runtime.DeriveRequestExt"
);
impl_internal!(
    derive::Response,
    runtime::DeriveResponseExt,
    "flow://runtime.DeriveResponseExt"
);
impl_internal!(
    materialize::Request,
    runtime::MaterializeRequestExt,
    "flow://runtime.MaterializeRequestExt"
);
impl_internal!(
    materialize::Response,
    runtime::MaterializeResponseExt,
    "flow://runtime.MaterializeResponseExt"
);
