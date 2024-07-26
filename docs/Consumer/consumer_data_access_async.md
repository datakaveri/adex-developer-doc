---
sidebar_position: 6
---

# Data Access through Async APIs

To use the Async Service, users must request consent from the AIP, obtain a [token](./consumer_obtaining_access_token.md) from the ADeX Auth server, and then access the [Async Resource Access API](https://rs.ts.adex.org.in/apis#tag/Async).

## Obtaining Access Token

Users can obtain a token using the [Create Token APIs](https://ts.adex.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token). Ensure that the appropriate resource ID is used to obtain a token.

## Search Using Async API

An [Async Search](https://rs.ts.adex.org.in/apis#tag/Async/operation/async%20search) is used by ADeX Data users to query a resource using a valid ADeX ID and temporal parameters. Async APIs allow users to query resources over a larger temporal period. Upon accepting the request, the server will respond with a search ID, which users can use to check the [status of the search request](https://rs.ts.adex.org.in/apis#tag/Async/operation/async%20search%20status). Once the search is completed, users can download the file specified in the download URL.