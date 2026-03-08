---
title: "Enable planned maintenance mode for devices in Control Hub"
product: "Devices"
article_id: "p5eszb"
url: "https://help.webex.com/en-us/article/p5eszb"
last_updated: "2025-06-27"
description: "Planned maintenance mode allows you to schedule maintenance for devices and
workspaces in Control Hub, ensuring smoother operations and fewer interruptions."
tags: ["devices"]
source: "help.webex.com"
---

# Enable planned maintenance mode for devices in Control Hub

Planned maintenance mode is useful when there are planned activities that may result in unnecessary alerts or issues in Control Hub, such as while doing a device refresh or refurbishing meeting rooms.

You can enable and disable planned maintenance both on individual workspaces and devices, and in bulk. 

When a device is in planned maintenance mode:

- [No device alerts are sent](https://help.webex.com/nvsge9y).
- Offline devices show up in with a _Offline: maintenance_ status instead of _Offline_ status.
- Online devices show up with the _Online_ status regardless if they have issues or not.
- Start and end of the planned maintenance is reflected in [the device history](https://help.webex.com/jhkg7ab).
- When a device is placed in planned maintenance mode, the workspace that it belongs to is set to planned maintenance mode.

When a workspace is in planned maintenance mode:

- It does not show up on [the issue insights ranking page](https://help.webex.com/yuzsuw/#reference-template%5F3a498cde-2b5d-4143-8901-914972e8db0c).
- All devices in the workspace are in planned maintenance mode.
- The maintenance can be scheduled with an optional start and end time.
- Changes are audited in [the administrator activity log](https://help.webex.com/2tc9yx/).

Issues and online/offline status still show up when you go to a specific workspace's or device's details pages.

You can use the filtering to see all workspaces or devices in planned maintenance mode or that is scheduled for planned maintenance. The workspace and device details page shows when planned maintenance is enabled and allows single edit.

Planned maintenance is supported for shared and personal mode devices. If you put a personal device in planned maintenance mode, only that device is affected. It doesn't affect other devices that are connected to that user.

If a device expires after 365 days of inactivity, the device status changes from _Planned Maintenance_ to _Expired_.

Planned maintenance is a Control Hub and administrator tool that does not affect space booking or device functionality.

## Individual workspaces 

| 1 | Go to the Workspaces page in Control Hub and select the workspace that you want to set in planned maintenance mode. Go to Planned maintenance mode and select Edit schedule.                                                                                                                 |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From the dropdown menu, select On and toggle on Scheduled if you want to enable planned maintenance mode for a specific period. If you leave Schedule untoggled, the workspace enters planned maintenance mode immediately and to turn it off you need to select Off from the dropdown menu. |
| 3 | Select Save to apply planned maintenance mode.                                                                                                                                                                                                                                               |

## Individual devices

| 1 | Go to the Devices page in Control Hub and select the device that you want to set in planned maintenance mode. Go to Planned maintenance mode and select Edit schedule.                                                                                                                    |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From the dropdown menu, select On and toggle on Scheduled if you want to enable planned maintenance mode for a specific period. If you leave Schedule untoggled, the device enters planned maintenance mode immediately and to turn it off you need to select Off from the dropdown menu. |
| 3 | Select Save to apply planned maintenance mode.                                                                                                                                                                                                                                            |

## Multiple workspaces

| 1 | Go to the Workspaces page in Control Hub and select the workspaces that you want to set in planned maintenance mode. Select Edit and go to Planned maintenance mode. Select Edit schedule.                                                                                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From the dropdown menu, select On and toggle on Scheduled if you want to enable planned maintenance mode for a specific period. If you leave Schedule untoggled, the workspace enters planned maintenance mode immediately and to turn it off you need to select Off from the dropdown menu. |
| 3 | Select Next and review the configuration. To save, select Apply.                                                                                                                                                                                                                             |

## Multiple devices

| 1 | Go to the Devices page in Control Hub and select the devices that you want to set in planned maintenance mode. Select Edit and go to Planned maintenance mode. Select Edit.                                                                                                               |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From the dropdown menu, select On and toggle on Scheduled if you want to enable planned maintenance mode for a specific period. If you leave Schedule untoggled, the device enters planned maintenance mode immediately and to turn it off you need to select Off from the dropdown menu. |
| 3 | To save, select Confirm.                                                                                                                                                                                                                                                                  |
