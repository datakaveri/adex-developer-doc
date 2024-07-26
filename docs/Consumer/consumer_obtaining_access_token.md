---
sidebar_position: 3
---

# Obtaining Access Token

To access a resource after discovering it from the catalogue, users should obtain an access token using the ADeX Authorization Server's [Create Token APIs](https://ts.adex.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token).

Users can use the clientID and clientSecret obtained through [Registration](../registration.md).

## Obtaining Token for a *PUBLIC* Resource

After discovering a public resource from the catalogue, users can obtain a token using the [Create Token APIs](https://ts.adex.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token) with the following request body. Ensure that the appropriate resource server ID is used to obtain a token.

```json
{
  "itemId": "rs.adex.org.in",
  "itemType": "resource_server",
  "role": "consumer"
}
```
users will not obtain any access token
## Obtaining Token for a *PRIVATE* Resource

After discovering a private resource from the catalogue, users can obtain a token using the [Create Token APIs](https://ts.adex.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token) with the following request body. Ensure that the appropriate resource ID or resource group ID is used to obtain a token.

```json
{
  "itemId": "a007f760-8580-4401-81c1-b123da3de06f",
  "itemType": "resource_group",
  "role": "consumer"
}
```

It should be noted that unless an explicit policy is specified by the AIP in the ADeX Authorization Server,users cannot obtain an access token for the secure resource.