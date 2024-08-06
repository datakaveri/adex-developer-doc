---
sidebar_position: 5
---

# Data Access through Subscription

To register for a subscription, users must request consent from the AIP, obtain a [token](./consumer_obtaining_access_token.md) from the ADeX Auth server, and then access the [Subscription API](https://rs.ts.adex.org.in/apis#tag/Data-Subscriber).

### Obtaining a Token to Subscribe to a Resource

Users can obtain a token using the [Create Token APIs](https://ts.adex.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token) with the following request body. Ensure that the appropriate resource or resource group ID is used to obtain a token.

*Example for a subscription at a resource level:*

```json
{
  "itemId": "31b3da3a-84da-4923-b425-a9c5469c169f",
  "itemType": "resource",
  "role": "consumer"
}
```

*Example for a subscription at a resource group level:*

```json
{
  "itemId": "a007f760-8580-4401-81c1-b123da3de06f",
  "itemType": "resource_group",
  "role": "consumer"
}
```

It should be noted that unless an explicit policy for subscription is specified by the AIP, users cannot obtain an access token for the secure resource.

### Creating a New Subscription

Users can use the [Subscription APIs](https://rs.ts.adex.org.in/apis#tag/Data-Subscriber/operation/createastreamingsubscription) to register a new subscription. Upon registration, information about the streaming server, including URL, port, vHost, subscription ID, username, and apiKey, will be shared. Using this information, users can connect to the streaming server to receive the requested data as a stream.

```python
import pika
import urllib.parse

username = '<username>'  # Change this to your username
password = '<password>'  # Change this to your password
host = 'localhost'
port = 49153
vhost = 'ADeX'
queue_name = '15c7506f-c800-48d6-adeb-0542b03947c6/itms-application'  # Change this to your queue name (ID)
encoded_username = urllib.parse.quote_plus(username)

connection = pika.BlockingConnection(
    pika.URLParameters(f'amqp://{encoded_username}:{password}@{host}:{port}/{vhost}')
)

channel = connection.channel()

print(' [*] Waiting for data. To exit press CTRL+C')

def callback(ch, method, properties, body):
    print(" [x] %r" % body)

channel.basic_consume(
    queue=queue_name, on_message_callback=callback, auto_ack=True
)

channel.start_consuming()
```

### Obtaining a Token to Refresh an Existing Subscription of a Resource

Users can obtain a token to refresh an existing subscription using the same approach mentioned for obtaining a token to subscribe to a resource.

### Refreshing a Subscription

To keep the subscription open and active, users should call the [Refresh Subscription API](https://rs.ts.adex.org.in/apis#tag/Data-Subscriber/operation/updatestreamingsubscription) every 12 hours until policy expiry. Failure to do so will result in access to the subscription being revoked. Users should then use the [Append Subscription API](https://rs.ts.adex.org.in/apis#tag/Data-Subscriber/operation/appendstreamingsubscription) to restart the subscription.

### Adding a New Resource to an Existing Subscription

Users can use the [Append Subscription API](https://rs.ts.adex.org.in/apis#tag/Data-Subscriber/operation/appendstreamingsubscription) to add new resources to an existing subscription. This will enable users to receive more than one resource in the same stream.

**Note:** A resource can be differentiated using the ID available in the data packet.

### Deleting a Subscription

Users can use the [Delete Subscription API](https://rs.ts.adex.org.in/apis#tag/Data-Subscriber/operation/deleteasubscription) to delete a subscription. This action will delete the subscription queue, and all existing resources streamed through the queue will become inaccessible.

### Resetting Streaming User Password

Users can reset the password provided by the streaming server using the [Reset Streaming Password API](https://rs.ts.adex.org.in/apis#tag/Management/operation/resetPassword). This change will reset all active connections, and users should restart their client applications accordingly.