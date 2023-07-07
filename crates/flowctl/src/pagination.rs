use std::marker::PhantomData;

use page_turner::PageTurner;
use page_turner::PageTurnerOutput;
use page_turner::TurnedPage;
use tonic::async_trait;

use crate::api_exec;

/// A simple wrapper around [`postgrest::Builder`] that lets us keep track of which page
/// it's currently on. Used in [`page_turner::PageTurner`] to implement pagination.
pub struct PaginationRequest {
    builder: postgrest::Builder,
    page: usize,
    page_size: usize,
    /// The original Builder's range value, if set. This is used to make sure we
    /// don't paginate beyond the requested range
    range: Option<(usize, usize)>,
}

impl PaginationRequest {
    pub fn new(builder: postgrest::Builder) -> Self {
        // Extract the limit and offset values out of the builder, if they are defined.
        // We have to do this before calling [`set_page()`] since that will override the range header.
        // Limit and offset live in the Range header, which looks like this:
        // > Range: 4-12
        // Where 4 is the offset, and 12 is the limit.
        let range = match builder
            .clone()
            .build()
            .build()
            .unwrap()
            .headers()
            .get("Range")
        {
            Some(range) => range
                .to_str()
                .ok()
                .and_then(|str| {
                    str.split("-")
                        .map(|num| num.parse::<usize>().ok())
                        .collect::<Option<Vec<usize>>>()
                })
                .and_then(|range| match &range[..] {
                    &[lower, upper] => Some((lower, upper)),
                    _ => None,
                }),
            None => None,
        };

        Self {
            builder,
            page: 0,
            page_size: 1000,
            range,
        }
        .set_page(0)
    }

    fn set_page(mut self, page: usize) -> Self {
        self.page = page;

        let (lower_page, upper_page) = ((page * self.page_size), ((page + 1) * self.page_size));

        match self.range {
            Some((offset, limit)) => {
                self.builder = self.builder.range(
                    (lower_page + offset).min(limit),
                    (upper_page + offset).min(limit),
                )
            }
            None => self.builder = self.builder.range(lower_page, upper_page),
        }
        self
    }
}

/// A placeholder struct onto which we can implement [`page_turner::PageTurner`].
/// Normally this would be the API client responsible for actually executing the requests
/// defined in [`PaginationRequest`], but since a [`postgrest::Builder`] already has
/// its own client and is responsible for making its own requests, this is empty.
pub struct PaginationClient<Item>
where
    Item: serde::de::DeserializeOwned + Send + Sync,
{
    phantom: PhantomData<fn() -> Item>,
}

impl<T> PaginationClient<T>
where
    T: serde::de::DeserializeOwned + Send + Sync,
{
    pub fn new() -> Self {
        Self {
            phantom: PhantomData,
        }
    }
}

#[async_trait]
impl<Item> PageTurner<PaginationRequest> for PaginationClient<Item>
where
    Item: serde::de::DeserializeOwned + Send + Sync,
{
    type PageItem = Item;
    type PageError = anyhow::Error;

    async fn turn_page(
        &self,
        request: PaginationRequest,
    ) -> PageTurnerOutput<Self, PaginationRequest> {
        let resp: Vec<Item> = api_exec::<Vec<Item>>(request.builder.clone()).await?;

        if resp.len() == request.page_size
            // If the original builder had a limit set to the same value as page_size
            // this ensures that we stop right at the limit, instead of issuing an extra
            // request for 0 rows.
            && request.range.map_or(true, |(_, limit)| {
                ((request.page + 1) * request.page_size) < limit
            })
        {
            let current_page = request.page;
            tracing::debug!(
                ?current_page,
                row_count = resp.len(),
                "Got back a full response, progressing to the next page"
            );
            Ok(TurnedPage::next(resp, request.set_page(current_page + 1)))
        } else {
            tracing::debug!(
                current_page = request.page,
                row_count = resp.len(),
                "Got back a non-full response or we reached the builder's original limit so we're done"
            );
            Ok(TurnedPage::last(resp))
        }
    }
}
