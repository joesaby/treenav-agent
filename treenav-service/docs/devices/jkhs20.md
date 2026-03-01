---
title: "Local user administration on Desk, Board, and Room devices"
product: "Devices"
article_id: "jkhs20"
url: "https://help.webex.com/en-us/article/jkhs20/Local-User-Administration-on-Room-and-Desk-Devices"
last_updated: "2025-06-06"
description: "Site administrators can set up distinct user roles Cisco devices, granting them
access to a wider range of configurations."
tags: ["devices"]
source: "help.webex.com"
---

# Local user administration on Desk, Board, and Room devices

You need a local user on the device to:

- Extend the user interface with in-room controls.
- Extend the user interface to include video sources that are connected through an external Cisco TelePresence Video Switch.
- Give users access the device’s web interface or API without being signed in through Control Hub.

You can manage local users from the Local Users page on the device’s web interface. All local users are listed here, and you can see which user roles are assigned to the user.

Only the _Admin_ user has privileges to create and delete users.

## Overview of User Roles

Users with an _Admin_ role can:

- Have unrestricted access to the device's local web interface.
- Access the API over SSH, serial connection, or HTTP(S).
- Create and manage users with the _Integrator_ and _RoomControl_ roles.

Users with an _Integrator_ role can:

- Access the device’s local web interface. _Integrator_ has the same access as an _Admin_ user, except creation of new users.
- Access the API over SSH, serial connection, or HTTP(S).

Users with a _RoomControl_ role can:

- Access the In-Room Control editor and corresponding development tools on the web interface, to create touch interface extensions (in-room controls).
- Access the API commands that are required to create touch interface extensions.

User with a _User_ role can:

- Make calls and search the People lists.
- Modify a few settings, for example adjust the ringtone volume and set the time and date format.

## Create a Local User

| 1 | From the customer view in [https:/​/​admin.webex.com](https://admin.webex.com), go to the Devices page, and select your device in the list.                                                                                        |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Support and click Launch Local Device Controls. If you have set up an _Admin_ user for the device, you can access the Advanced Settings directly by opening a web browser and typing in http(s)://<endpoint ip or hostname>. |
| 3 | Go to Users \> Create User.                                                                                                                                                                                                        |
| 4 | Enter the information in the corresponding input fields, and click Create user. The new user appears in the list of users on the Users page.                                                                                       |

## Delete a Local User

| 1 | From the customer view in [https:/​/​admin.webex.com](https://admin.webex.com), go to the Devices page, and select your device in the list.                                                                                                |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Go to Support and click Launch next to Local Device Controls. If you have set up an _Admin_ user for the device, you can access the Advanced Settings directly by opening a web browser and typing in http(s)://<endpoint ip or hostname>. |
| 3 | Click on Users and select the user you would like to delete.                                                                                                                                                                               |
| 4 | Click Delete user and confirm your choice.                                                                                                                                                                                                 |
