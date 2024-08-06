---
sidebar_position: 4
---

# Manage Catalogue Items

## Obtain Token to Create Catalogue
To create, update, or delete a catalogue entry in the ADeX Catalogue Server, an AIP must obtain a token using the ADeX Authorization Servers [Create Token APIs](https://authorization.ADeX.org.in/apis#operation/post-auth-v1-token).

To obtain a token, an AIP can either specify their clientId and clientSecret in the header or specify a token header. The clientId and clientSecret are generated for an AIP upon their [Successful Registration](https://docs.ADeX.org.in/docs/registration#successful-registration-and-client-id-client-secret).

An AIP can obtain a token using the [Create Token APIs](https://authorization.ADeX.org.in/apis#operation/post-auth-v1-token) with the following request body.

```json
{
  "itemId": "a007f760-8580-4401-81c1-b123da3de06f",
  "itemType": "resource",
  "role": "provider"
}
```

It is important to note that an AIP is entitled to create, update, or delete catalogue entries only on their catalogue instances through an explicit policy specified by the ADeX Admin in the ADeX Authorization Server. An AIP will not obtain any token to perform create, update, or delete operations on the catalogue entries for other catalogue instances in the ADeX Catalogue Server.

## Upload Catalogue Entries to the Catalogue Server
After successfully obtaining a Catalogue Token, an AIP can upload the catalogue entries to the ADeX Catalogue Server.

Assuming the catalogue entries for the AIP and resource server are already uploaded by the ADeX Admin, a provider can now insert the entries for the resource group followed by the entries for the resource to the ADeX Catalogue Server.

The Python script below shows an example of inserting a catalogue entry to the ADeX Catalogue Server using the [Create Item API](https://ts.adex.org.in/cat/apis#tag/Entity/operation/create%20item).

```python
import json
import requests

catalogue_url = '<cat-url-for-adex>'
token = '<token_obtained_from_ADeX_Authorization_Servers>'
path = '<./path_to_the_catalogue_entry_file>'

api = 'https://' + catalogue_url + '/ADeX/cat/v1/item'

headers = {'content-type': 'application/json', 'token': token}

with open(path, 'r') as catalogue_file:
    catalogue_item = json.load(catalogue_file)

r = requests.post(api, json.dumps(catalogue_item), headers=headers)

print(r.status_code)
print(r.json())
```

In this script:

- Replace `<cat-url-for-adex>` with the actual catalogue URL for ADeX.
- Replace `<token_obtained_from_ADeX_Authorization_Servers>` with the token obtained from the ADeX Authorization Servers.
- Replace `<./path_to_the_catalogue_entry_file>` with the actual path to the catalogue entry file.

This script will upload the specified catalogue item to the ADeX Catalogue Server and print the response status code and JSON response.