---
title: "IVR options for analog telephone adapters"
product: "Devices"
article_id: "nu9f17c"
url: "https://help.webex.com/en-us/article/nu9f17c/IVR-Options-for-Analog-Telephone-Adapters"
last_updated: "2024-09-14"
description: "ATA adapters enable the connection of analog devices, like phones or fax
machines, to your network."
tags: ["devices"]
source: "help.webex.com"
---

# IVR options for analog telephone adapters

ATA adapters allow you to connect an analog device, such as an analog phone or fax machine, to your network. The connected device can then function like the IP phones in your network. An Interactive Voice Response (IVR) system is available to help you to configure and manage your ATA adapters. Use the phone keypad on the analog phone to select options and make your entries.

| Action                           | IVR Code | Notes                                                                             |
| -------------------------------- | -------- | --------------------------------------------------------------------------------- |
| Show IP address                  | 110      |                                                                                   |
| Configure IP address             | 111      | Available in static IP mode only                                                  |
| Show subnet mask                 | 120      |                                                                                   |
| Configure subnet mask            | 121      | Available in static IP mode only                                                  |
| Show default gateway             | 130      |                                                                                   |
| Configure default gateway        | 131      | Available in static IP mode only                                                  |
| Show VLAN                        | 230      |                                                                                   |
| Configure VLAN                   | 231      | To disable VLAN, set VLAN ID to 4095. To enable VLAN, set VLAN ID from 1 to 4094. |
| Factory reset                    | 73738    |                                                                                   |
| Reset service mode               | 73739    | Erases all user data except network setting and log files.                        |
| Check internet addressing method | 100      | Answer with 0, the default option (DHCP).                                         |
| Set internet addressing method   | 101      | DCHP: 0 Static: 1                                                                 |

For more details on IVR, refer to [Manage the ATA Using the IVR](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cata/191/english/user-guide/at91%5Fb%5Fata191-user-guide-for-cucm/at91%5Fb%5Fata191-user-guide-for-cucm%5Fchapter%5F01.html).
