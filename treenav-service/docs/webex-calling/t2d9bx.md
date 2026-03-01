---
title: "Hoteling in Control Hub"
product: "Webex Calling"
article_id: "t2d9bx"
url: "https://help.webex.com/en-us/article/t2d9bx/Hoteling-in-Control-Hub"
last_updated: "2025-03-24"
description: "Enable hoteling to temporarily load users&#x27; phone profiles onto a shared (host)
phone, letting them make calls with their work number and access features from
anywhere."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Hoteling in Control Hub

Hoteling is useful for flexible workspaces, such as no assigned seating, employees who travel a lot, or in a call center environment.

You can temporarily load a user's phone profile, such as phone number, features, and calling plan onto a host phone. Designate specific phones as host phones to allow users to sign in as guests and use them as their own. You can enable workspace phones and user phones as hoteling host phones.

- If a user phone has with shared lines, speed dials, and/or monitoring keys like BLF, call pickup, and call park, these features don’t appear on a host phone when the user signs in as a guest. Host phones can have shared lines configured, which are available to all hoteling users.
- For workspaces and users with multiple devices, the hoteling supports only on the workspace’s and user's primary device.

## Enable a workspace device as a hoteling host

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Management \> Workspaces.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3 | Select a workspace to modify.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4 | From the Devices section, select a device.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 5 | From the Hoteling section, turn on the toggle to enable the device as a hoteling host.                                                                                                                                                                                                                                                                                                                                                                                                   |
| 6 | From the drop-down, choose the number of hours the guests can use the device.                                                                                                                                                                                                                                                                                                                                                                                                            |
| 7 | Once configured, choose Apply Changes from the Actions drop-down. The softkey configuration takes effect after the phone reboots. ![Devices screen showing hoteling toggle enabled and hours selected from the drop-down.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473113.jpg) You can perform the same configuration by navigation to Management \> Devices where you get the list of both workspace and user devices. |

## Enable a user device as a hoteling host

Before you begin

You can configure only the user's primary device with a professional license as a hoteling host.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                |
| - | --------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Management \> Users.                                                                                                        |
| 3 | Select a user and click the Devices tab.                                                                                          |
| 4 | From the Devices section, select a device.                                                                                        |
| 5 | From the Hoteling section, turn on the toggle to enable the device as a hoteling host.                                            |
| 6 | From the drop-down, choose the number of hours the guests can use the device.                                                     |
| 7 | Once configured, choose Apply Changes from the Actions drop-down. The softkey configuration takes effect after the phone reboots. |

## Turn on hoteling for a user

Enabling hoteling for a user allows them to use a host phone while maintaining the functionality and features of their main desk phone.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Management \> Users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3 | Select a user and click the Calling tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4 | Go to the Between-user permissionssection, select Hoteling, and turn on the toggle.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 5 | Enter the name or number of the hoteling host in the Hoteling Location search field and choose the hoteling host that you want to assign to the user. A hoteling guest can connect to any hoteling host, but only one at a time, which is the host you select in the Control Hub. You can select only one host for a guest. If you choose another host, the previous one gets removed. When you select a host for a guest, it initiates a hoteling session and makes the host immediately in use by the guest. If you're a location administrator, you can assign only the hoteling host pertaining to your assigned locations. |
| 6 | Choose the number of hours the user can use the hoteling host from the Limit Association Perioddrop-down. The phone automatically logs out the user after the chosen time. An error message displays on the screen if the limit association period specified for the user exceeds the limit association period of the chosen hoteling host. For example, if the hoteling host has a limit association period of 12 hours and the user's limit association period is 24 hours, an error message displays. In such cases, you need to extend the limit association period of the hoteling host if the user needs more time.       |
| 7 | Click Save. A user can also search and locate the hoteling host they want to use from the User Hub. For more information, see [Access your calling profile from anywhere](https://help.webex.com/0ku8qo).                                                                                                                                                                                                                                                                                                                                                                                                                       |

Want to see how it's done? Watch this [video demonstration](https://www.youtube.com/watch?v=Sh9HASUbcjI) on how to configure hoteling in the Control Hub.
