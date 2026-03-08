---
title: "ThousandEyes Agent integration for Board, Desk, and Room Series devices"
product: "Devices"
article_id: "gg3kd3"
url: "https://help.webex.com/en-us/article/gg3kd3"
last_updated: "2026-01-23"
description: "Enable ThousandEyes Agent on Cisco collaboration devices to get hop-by-hop
network path visibility when these devices are part of meetings."
tags: ["devices", "webex-meetings", "webex-webinars", "webex-events-(classic)", "webex-training"]
source: "help.webex.com"
---

# ThousandEyes Agent integration for Board, Desk, and Room Series devices

Collaboration devices use the Control Hub integration that is also used for Webex App. ThousandEyes Agent is already part of the RoomOS software, but you need to enable it on selected or all devices in Control Hub. 

The integration for collaboration devices supports:

- Webex Meetings
- 1-to-1 calls with Webex Calling
- WebRTC, Video Integration with Microsoft Teams (VIMT), MTR, and Zoom CRC interop meetings
- On-premises calls on Unified CM

**Prerequisites**

- Activate [ThousandEyes Control Hub integration](https://help.webex.com/en-us/article/nymfj2d/Integrate-ThousandEyes-with-Troubleshooting-in-Control-Hub#task-template%5Fbdd45fbb-9087-45e4-87f1-ec396d886b57).
- Get [ThousandEyes Endpoint Agent licenses](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/endpoint-agent-licensing) (either essential or advantage) You need one endpoint license per device.
- Get the [Connection String](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing/endpoint-agent-installation-reference#connection-string) for the account group that you want the agent on the device to register with. Note that this Account Group must match the one for the Control Hub integration.

**Limitations**

- ThousandEyes Agent integration is not supported in IPv6 only network environments.
- Not available when _Security Fips Mode_ is set to _On_.

**ThousandEyes Endpoint Agent version shipped with RoomOS**

| ThousandEyes version | RoomOS version |
| -------------------- | -------------- |
| 2.25.0               | 26.2.1.5       |
| 2.17.1               | 11.33.1.3      |
| 2.3.3                | 11.31.1.3      |
| 1.236.0              | 11.27.1.7      |
| 1.228.0              | 11.26.1        |
| 1.207.2              | 11.22.1        |
| 1.198                | 11.19.1        |
| 1.198.0              | 11.18.1        |
| 1.195.1              | 11.17.1        |
| 1.181.0              | 11.14.1        |
| 1.181.0              | 11.12.1        |

## Enable on an individual device

| 1 | Sign in to [https://admin.webex.com](https://admin.webex.com/) and go to Devices and click Settings.                                                                                                                                                                              |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the ThousandEyes section, toggle on Enable ThousandEyes Agent.                                                                                                                                                                                                                 |
| 3 | On the Devices page, search and select the device that you want to enable.                                                                                                                                                                                                        |
| 4 | On the device details page, go to the Configuration section and click All Configurations                                                                                                                                                                                          |
| 5 | Go to ThousandEyes Connection String and enter the [Connection String](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing/endpoint-agent-installation-reference#connection-string) for the account group. Click Next and Apply. |

## Enable on all devices in an organization

| 1 | Sign in to [https://admin.webex.com](https://admin.webex.com/), and go to Devices and click Settings.                                                                                                                            |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the ThousandEyes section, toggle on Enable ThousandEyes Agent.                                                                                                                                                                |
| 3 | Click Add and enter the [Connection String](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing/endpoint-agent-installation-reference#connection-string) for the account group. |
| 4 | ThousandEyes Agent will now be activated on all devices. If you add new devices later on, the ThousandEyes Agent activates on those automatically.                                                                               |

## Check ThousandEyes Agent activation

Once the ThousandEyes Agent is activated, you can go to the [ThousandEyes app](https://app.thousandeyes.com/endpoint/agent-settings/?section=agents) and make sure the agent is registered. You see the devices listed by their SEPMAC name (Ethernet address). 

## Disable ThousandEyes

### For an organization

Go to Devices, Settings, and toggle off Enable ThousandEyes Agent. 

### For an individual device

Go to Devices, select the device, and go to All Configurations. Find ThousandEyes Connection String and toggle it to the default setting.

You can disable ThousandEyes on individual devices without disabling it for the whole organization.
