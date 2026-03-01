---
title: "Cisco Webex Edge Audio Deployment Options"
product: "Edge Audio"
article_id: "4pldzd"
url: "https://help.webex.com/en-us/article/4pldzd/Cisco-Webex-Edge-Audio-Deployment-Options"
last_updated: "2024-09-21"
description: "Edge Audio is a solution where calls originating within the enterprise go
through your company network, over the internet or Webex Edge Connect, and into
the Webex cloud. Similarly, calls that initiate from Webex during a meeting
leverage your on-premises audio routing."
tags: ["edge-audio"]
source: "help.webex.com"
---

# Cisco Webex Edge Audio Deployment Options

Depending on your enterprise's network deployment and requirements, you can configure Edge Audio to route calls using one Expressway-E, a pair of Expressways (E and C), or a Cisco Unified Border Element (CUBE).

## Edge Audio with Expressway-C and Expressway-E

You can use an Expressway-C and Expressway-E and the internet to deploy Edge Audio in your enterprise. Deploying Expressways in a pair creates a DMZ in your network, making audio calls that traverse a public connection more secure.

For more information, see the [Cisco Webex Edge Audio Customer Configuration Guide](https://help.webex.com/article/xmsy7d).

## Edge Audio for Only Expressway-E

You can use a single Expressway-E with [Webex Edge Connect](https://help.webex.com/article/n68tcpb/) to deploy Edge Audio in your enterprise. This configuration provides a more cost effective solution for customers who do not require firewall traversal on the Edge Connect link.

For more information, see the [Cisco Webex Edge Audio for Only Expressway-E Customer Configuration Guide](https://help.webex.com/article/o02v0i).

## Edge Audio for Cisco Unified Border Element (CUBE)

You can use a CUBE to deploy Edge Audio in your organization. This configuration provides the potential for greater scale, depending on the hardware model and security level. We suggest using [Webex Edge Connect](https://help.webex.com/article/n68tcpb/) if you’re planning to configure Edge Audio using CUBE.

For more information, see the [Cisco Webex Edge Audio for CUBE Customer Configuration Guide](https://help.webex.com/b6vrdc/).
