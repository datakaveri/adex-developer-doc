---
sidebar_position: 4
---

# Data Access through APIs

After [discovering](./consumer_data_discovery.md) resources and obtaining appropriate [access tokens](./consumer_obtaining_access_token.md), users can use the [Resource Access APIs](https://rs.ts.adex.org.in/apis) to query a resource using temporal, spatial, and attribute queries. It should be noted that all the APIs are accessible only through a valid resource ID and an appropriate Public, Private, or Personal access token.

## Get Latest Data

The [Latest Data API](https://rs.ts.adex.org.in/apis#tag/Latest-Entity/operation/latest-entities) is used to get the latest (last published) data of a resource. It uses the ADeX ID, also known as the ID in the _/entities_ endpoint, as a path parameter to query the resource server. To get data, a valid ADeX Auth token is mandatory.

## Temporal Search

A [Temporal Search](https://rs.ts.adex.org.in/apis#tag/Temporal-Entities/operation/temporal-entities) is used by ADeX Data AIUs to query a resource using a valid ADeX ID, temporal, spatial, and attribute parameters. To use this API, a temporal parameter is mandatory. This API can be used to make a temporal, complex (temporal+spatial), complex (temporal+attribute), or complex (temporal+spatial+attribute) query.

If users are looking for an attribute-only query, they should refer to the [Spatial Search](https://rs.ts.adex.org.in/apis#tag/Spatial-Entities/operation/Spatial%20Search).

## Spatial Search

A [Spatial Search](https://rs.ts.adex.org.in/apis#tag/Spatial-Entities/operation/Spatial%20Search) is used by ADeX Data AIUs to query a resource using a valid ADeX ID, spatial, and attribute parameters. This API can be used to make a spatial, attribute, or complex (spatial+attribute) query.

## Complex Search (Post Query)

A [Complex Search (Post Query)](https://rs.ts.adex.org.in/apis#tag/Entities-Post-Query) is an HTTP POST API used by ADeX Data AIUs. For queries that are too long for the HTTP header, a Post query can be used. This API is used to query a resource using a valid ADeX ID, temporal, spatial, and attribute parameters. It can be used to make a temporal, spatial, attribute, complex (temporal+spatial), complex (temporal+attribute), complex (spatial+attribute), or complex (temporal+spatial+attribute) query.