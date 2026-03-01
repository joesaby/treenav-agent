---
title: "Demand PRT (problem report tool) collection in Control Hub"
product: "Webex Calling"
article_id: "n4hssfr"
url: "https://help.webex.com/en-us/article/n4hssfr/Demand-PRT-problem-report-tool-collection-in-Control-Hub"
last_updated: "2025-07-01"
description: "With the new On-Demand PRT feature for Webex Calling, an Administrator from the
Control Hub portal, can remotely initiate a PRT file collection (compressed set
of support files) from a WxC MPP phone that is actively registered to the
platform. This can be helpful when trying to troubleshoot an issue when no
onsite resources are available to assist with the process."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Demand PRT (problem report tool) collection in Control Hub

## Overview

With PRT Collection, admins and TAC engineers have the flexibility in collecting logs from customer devices (WxC MPP phones and DECT base stations), which should improve our time to resolution on customer cases. This allows admins, who may not be on location with the phone, the ability to provide the resources when needed. The Technical Assistance Center engineer may need newer logs, requiring user intervention again. The Technical Assistance Center can collect logs through helpdesk, to aid in resolving cases.

## Report an issue while online

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                                                       |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Navigate to Devicesand then select the device from the table.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/464001-465000/464557.jpg)                                                                                                                                                                                    |
| 3 | From the settings menu, under actions, click Report Problem.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466560.jpg)                                                                                                                                                                                     |
| 4 | Copy or download details to get help from experts. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466564.jpg)                                                                                                                                                                                              |
| 5 | Click Get Help and select how you want to get help from the following: ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466567.jpg) Webex Status Chat Ask the community Open a Case ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466566.jpg) |

## Report an issue while offline

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                      |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Devices and then select the device from the table. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/464001-465000/464559.jpg) |
| 3 | From the settings menu, under actions, click Reboot. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466565.jpg)           |
| 4 | Click Manage across Device Logs.                                                                                                                                                        |
| 5 | Download the log files for a time of your choice. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466563.jpg)              |

## Remote log collections for DECT devices

Enabling remote log collection improves serviceability support for DECT systems. You can collect the problem report logs from DECT base stations that support the generation and collection of PRT logs. The PRTs contain log information, DECT network connectivity information, handset battery levels, handset wireless power levels, and other useful details.

Perform the following steps to collect the PRT logs for your DECT devices:

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Management \> Devices. Select the device from the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3 | Under Support, click Manage for the device logs.![Collect the PRT logs for your DECT devices](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/490001-500000/490579.png) You can also access this page from: Services \> Calling \> Features \> DECT Network \> Manage. Click the Base Stations Manage and select theMAC address from the table. Go to the device logs under Support section. Under the Device logs, you can view the list of uploaded log, download, and generate the logs. **Limitations:** DECT base stations register over SIP only when a handset is connected. Remote PRT collection requires an active SIP connection, so you can request PRTs only from the base stations with one or more connected handsets. When you trigger a PRT directly on the base station, the system receives and stores the data. The system stores all PRTs under the base station's device ID. |
