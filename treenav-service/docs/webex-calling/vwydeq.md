---
title: "Decline a ringing call on all devices for a user"
product: "Webex Calling"
article_id: "vwydeq"
url: "https://help.webex.com/en-us/article/vwydeq/Decline-a-ringing-call-on-all-devices-for-a-user"
last_updated: "2025-02-12"
description: "Users can reject incoming calls on multiple devices or shared lines. When
declining on the Webex Client or any device, all devices stop ringing and the
call is then directed based on busy configurations. This feature applies to
Cisco IP phones, Webex room systems, and all Webex Clients."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Decline a ringing call on all devices for a user

## Specifications

Call decline on all devices is set as a user’s default behavior but you can change this setting, per line, in the Control Hub. Choose from the following configuration options:

- Decline for all lines—Stops the call from ringing on all user’s devices for that line.
- Silence for this line—Stops the call from ringing only on that device for that line.

In shared line applications, a call that’s ringing on all devices where the line appears, can be declined on one device and automatically stop ringing the other devices. If this behavior isn’t desired, it must be modified.

If the device was added before the introduction of this feature, the default behavior may differ. 

Call decline doesn't apply in the following cases:

- Click to Dial—When a device rings because the user makes a call.
- Executive Call Push Recall—When an assistant transfers a call to an executive and the executive doesn’t answer, the call rings back to the assistant.
- Call Park Recall—When a call is parked and recalls to the parking user.

## Configure call decline behavior 

Before you begin

Configure a user’s line key assignments before you set the call decline behavior for each line.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                   |
| - | -------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Workspaces \> Devices.                                                                                         |
| 3 | Select the user to modify.                                                                                           |
| 4 | Click Configure Lines from Phone Users and Settings.                                                                 |
| 5 | Select Customized behaviors.                                                                                         |
| 6 | From the Call decline behavior drop-down list, select the option needed: Decline for all lines Silence for this line |
| 7 | Click Save.                                                                                                          |
