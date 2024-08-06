---
sidebar_position: 5
---

# Manage Data Ingestion

## Obtain Token to Ingest Data
To register a resource in the ADeX Resource Server, an AIP must obtain a token using the ADeX Authorization Servers [Create Token APIs](https://authorization.ADeX.org.in/apis#operation/post-auth-v1-token).

To obtain a token, an AIP can either specify their clientId and clientSecret in the header or specify a token header. The clientId and clientSecret are generated for an AIP upon their [Successful Registration](https://docs.ADeX.org.in/docs/registration#successful-registration-and-client-id-client-secret).

An AIP can obtain a token using the [Create Token APIs](https://authorization.ADeX.org.in/apis#operation/post-auth-v1-token) with the following request body.

```json
{
    "itemId": "a007f760-8580-4401-81c1-b123da3de06f",
    "itemType": "resource_group",
    "role": "provider"
}
```

## Register Resource in Resource Server
After successfully obtaining a Data Ingestion Token, an AIP can register a resource in the ADeX Resource Server for data ingestion.

### Register a Resource Group
The [Register Ingestion API](https://rs.ts.adex.org.in/apis#tag/Data-Ingestion-Adaptor/operation/registeradapter) is used to register a data ingestion at a "resource_group level," with the Data Ingestion Token as a header parameter and the following request body.

```json
{
    "entities": [
        "a007f760-8580-4401-81c1-b123da3de06f"
    ]
}
```

### Register a Resource
The [Register Ingestion API](https://rs.ADeX.org.in/apis#operation/registeradapter) is used to register a data ingestion at a "resource level," with the Data Ingestion Token as a header parameter and the following request body.

```json
{
    "entities": [
        "31b3da3a-84da-4923-b425-a9c5469c169f"
    ]
}
```

### Reset Streaming User Password
An AIP can reset the password given to them by the streaming server using the [Reset Streaming Password API](https://rs.ts.adex.org.in/apis#tag/Management/operation/resetPassword). This change will reset all active connections, and the AIP should restart their client applications accordingly.