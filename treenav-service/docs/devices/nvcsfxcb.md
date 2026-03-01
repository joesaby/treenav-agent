---
title: "Interact with the API of Board, Desk, and Room Devices over WebSocket"
product: "Devices"
article_id: "nvcsfxcb"
url: "https://help.webex.com/en-us/article/nvcsfxcb/Interact-with-the-API-of-a-Webex-Board-Room-or-Desk-Device-over-WebSocket"
last_updated: "2025-06-06"
description: "WebSocket is a protocol that enables two-way communication between a client and
the API of the board, desk or room device. You use JSON-RPC objects to convey
API commands over the WebSocket."
tags: ["devices"]
source: "help.webex.com"
---

# Interact with the API of Board, Desk, and Room Devices over WebSocket

These configurations are available both from the web interface of the device and in the API. Read the [Advanced Settings ](https://help.webex.com/article/n5pqqcm) article for more information on how to access the web interface and use the API.

When the web interface of the device is opened, configure NetworkServices  \> WebSocket  to **FollowHTTPService**. Because WebSocket builds on HTTP, set up NetworkServices  \> HTTP  \> Mode  to **HTTP+HTTPS** or **HTTPS**.

Read the [xAPI over WebSocket Guide ](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/api/collaboration-endpoint-software-api-transport.pdf) for more details on how to set up the WebSocket, and how to use JSON-RPC objects to convey API commands.

Refer to the [API Reference Guide ](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/roomos-115/api-reference-guide-roomos-115.pdf) for a complete description of the xAPI itself.
