---
title: "Access the API for Board, Desk, and Room Series devices"
product: "Devices"
article_id: "nzwo1ok"
url: "https://help.webex.com/en-us/article/nzwo1ok/Access-the-API-for-Webex-Room-and-Desk-Devices-and-Webex-Boards"
last_updated: "2025-06-06"
description: "You can use the device&#x27;s API to configure your devices, build integrations, and
create extensions."
tags: ["devices"]
source: "help.webex.com"
---

# Access the API for Board, Desk, and Room Series devices

In order to program against the device, there must be a local user on the device. Read more about creating local users in the [ Local user administration ](https://help.webex.com/en-us/article/jkhs20/Local-User-Administration-on-Desk,-Board,-and-Room-devices) article.

There are several ways to access the API. Regardless of which method you choose, the structure of the API is the same. Choose the connection method that suits your application best:

- SSH (Secure TCP/IP connection. Enabled by default).
- Telnet (Available only for DX80\. Disabled by default).
- HTTP/HTTPS (HTTPS enabled by default).
- Serial connection (Can be used without an IP address, DNS, or a network. Enabled by default).

## API guide

To read more about how to use the API and the command descriptions, visit <https://roomos.cisco.com/>.

The API commands for all products and the syntax and semantics are described in this guide. 

## Commands that are not applicable when a device is registered to Webex

Some of the configurations, commands, and statuses that are available in the API only apply to on-premises registered devices. They don’t apply to Webex registered devices. In the [API guide's ](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/roomos-115/api-reference-guide-roomos-115.pdf)_Supported Commands Matrix_, these items are marked with “On-prem only”.

Among the non-applicable configurations, commands and statuses, are all those related to H.323, H.320, SIP, NTP, CUCM, LDAP, Proximity, and Far End Camera Control.

The nonapplicable configurations and statuses will be removed from the Webex registered devices in a later software release. We recommend you not to program against API commands in these categories.
