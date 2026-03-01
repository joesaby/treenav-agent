---
title: "Turn On Silence Detection for an Analog Telephone Adapter"
product: "Devices"
article_id: "b04wjab"
url: "https://help.webex.com/en-us/article/b04wjab/Turn-On-Silence-Detection-for-an-Analog-Telephone-Adapter"
last_updated: "2025-11-12"
description: "If your paging system doesn&#x27;t detect Calling Party Control (CPC), you can
configure silence detection in Cisco Webex Control Hub."
tags: ["devices"]
source: "help.webex.com"
---

# Turn On Silence Detection for an Analog Telephone Adapter

An overhead paging system disconnects the active line at the end of an announcement by detecting one of the following: 

- A Calling Party Control (CPC) signal played by the analog telephone adapter (ATA)
- Silence on the line

By default, after the end of an announcement, the ATA plays a CPC signal after 2 seconds of silence. If your paging system doesn't detect CPC, configure silence detection in Control Hub. When you configure silence detection, the ATA waits for up to 4 minutes before playing CPC. 

You can configure the required silence duration on the paging system itself. This way, the paging system automatically disconnects the call after detecting silence for that amount of time. During this configured duration, the paging system doesn't accept any new announcements.

| 1 | From the customer view in <https://admin.webex.com>, go to Devices, and then choose an ATA device.                 |
| - | ------------------------------------------------------------------------------------------------------------------ |
| 2 | Under Settings, scroll to Silence Detection, and toggle the feature on.                                            |
| 3 | Configure the required silence duration on the paging system. Refer to your paging system user manual for details. |
