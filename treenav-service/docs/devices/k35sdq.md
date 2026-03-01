---
title: "AV integrator license"
product: "Devices"
article_id: "k35sdq"
url: "https://help.webex.com/en-us/article/k35sdq/AV-integrator-license"
last_updated: "2024-12-05"
description: "The AV integrator license for Codec EQ, Board Pro, Board Pro G2, Room Kit EQ,
Room Kit EQX, and Room Bar Pro opens for more audio functionality."
tags: ["devices"]
source: "help.webex.com"
---

# AV integrator license

To enhance the experience and the capabilities of the device when using audio over IP, we have introduced the AV integrator license. The AV integrator license allows for more customization, and you can connect more microphones directly to the device over IP.

**Devices _without_ the AV integrator license**: 

- Cisco IP microphones
- No third-party AES67 compatible microphones
- Standard set of audio commands and settings

**Devices _with_ the AV integrator license**:

- Up to eight AES67 streams for third-party devices
- Full integrator audio API (only Codec EQ, Room Kit EQ, Room Kit EQX)
- Audio console application (only Codec EQ, Room Kit EQ, Room Kit EQX)

Note: 

- _Cisco IP microphone_ refers to the Cisco Table Microphone Pro (CS-MIC-ARRAY-T=) and Cisco Ceiling Microphone Pro (CS-MIC-CLGPRO)
- You can connect the IP microphones either directly to one of the device's PoE ports, or to a compatible IP switch that you have connected to one of the device's PoE ports. Either way, the limits of maximum eight AES67 streams remain.

  - Board Pro and Board Pro G2: One PoE port
  - Room Bar Pro: Three PoE ports
  - Codec EQ: Four PoE++ ports
  - Room Kit EQX: One or two available PoE++ ports  
If using a switch, we recommend the switches covered in the [Configuration of Cisco CBS250, CBS350, and C1200 switches for use with Cisco video collaboration devices ](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/room-series/installation-guide/CBS250-CBS350-switch-configuration-for-collaboration-devices.pdf) technical paper.
- To connect third-party AES67 compatible microphones, read the [AES67 interoperability on Room Devices ](https://help.webex.com/zks7jeb/) article.
- The Audio commands section of the [Cisco Board, Desk, and Room Series API Reference Guide ](https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html) describes the full audio API. Commands that require the AV integrator license are marked with _“AVIntegrator option required."_
- The _audio console application_, familiar from Codec Pro, is a graphical interface for the setup and configuration of audio chains.

## Ordering information

The AV integrator license is part of the Cisco Room License Upgrade Options. Look for **L-ROOM-PAK** on Cisco Commerce and choose **L-KITEQ-AV** for Codec EQ and Room Kit EQ, **L-BARPRO-AV** for Room Bar Pro, or **L-BOARDPRO-AV** for Board Pro and Board Pro G2.

After ordering, you will receive an option key. You can use Control Hub or the local device web interface to install the option key on the device.
