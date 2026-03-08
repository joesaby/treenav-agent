---
title: "Park and unpark calls on 9800/8875 (Multiplatform)"
product: "Devices"
article_id: "5jyhhw"
url: "https://help.webex.com/en-us/article/5jyhhw"
last_updated: "2026-01-13"
description: "This Help article is for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875
registered to Cisco BroadWorks or Webex Calling."
tags: ["devices"]
source: "help.webex.com"
---

# Park and unpark calls on 9800/8875 (Multiplatform)

Call park puts an active call on hold and allows you to continue the conversation from another phone within your organization.

You can use one of the following ways to park and unpark a call:

- Select the call park softkeys displayed on the phone user interface.
- Use the call park codes on any Cisco phone deployed within your organization.

If the call remains parked for too long, you will be prompted to answer, decline, or ignore the call from the original contact on your phone. In the meantime, you can still retrieve it from another phone.

If you don't answer the call within a certain length of time, it's routed to voicemail or another destination, as set by your administrator.

## Park a call

You can park an active call that you answered on your phone and then use another phone in the call control system to retrieve the call. After you park a call, the active call on your phone ends. Then you can retrieve the parked call on your phone, the destination phone, or any other phone in your organization.

Before you begin

Your administrator has configured the call park feature on your phone.

| 1 | On an active call, select More (…) \> Call park. The active call will be put to on hold automatically after you select the feature.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Do one of the following actions depending on your phone model: ![For 9811, 9841,9851, and 9861](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/489001-490000/489180.png) Enter the extension number on the search bar and select Call. ![Icon for 9871 and 8875 for common topics](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/485001-486000/485950.png) Enter the extension number on the search bar and tap ![Call button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/464001-465000/464551.png). The active call ends automatically. |
| 3 | (Optional) Communicate the call park number to the person who needs to answer the call.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

What to do next

Retrieve the call on the destination phone or on any phone within your organization.

## Retrieve a parked call

You can retrieve a call that is parked on another phone.

Before you begin

Your administrator has configured the call park feature on your phone. 

You have a call parked on your line. Typically, the line with parked call shows the "Parked" status.

| 1 | Pick up the parked call. ![For 9811, 9841,9851, and 9861](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/489001-490000/489180.png) **Single line**: Select More (…) \> Call unpark.**Multiple lines**: Press the line key that shows the parked status, and select More (…) \> Call unpark. ![Icon for 9871 and 8875 for common topics](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/485001-486000/485950.png) **Single line**: Swipe on the screen to locate the Park unpark button, and select it.**Multiple lines**: On the line that shows the "Parked" status, select More (…) \> Call unpark. |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Do one of the following actions depending on your phone model: ![For 9811, 9841,9851, and 9861](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/489001-490000/489180.png) Enter the extension number on the search bar and select Call. ![Icon for 9871 and 8875 for common topics](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/485001-486000/485950.png) Enter the extension number on the search bar and tap ![Call button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/464001-465000/464551.png). The parked call is connected.                   |

## Park and retrieve a call with the call park codes

You can park an active call by dialing the call park code with the phone keypad. With the call unpark code, you can pick up the parked call on any phone within your organization.

The call park code is `*68`, and the call unpark code is `*88`.

Before you begin

Your administrator has configured the call park code and the call unpark code.

| 1 | To park an active call with the call park code, do the following: During an active call, locate and select New call. Use the phone keypad to enter \*68 \+ <Destination Ext Number>. Select Call or tap ![Call button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/464001-465000/464551.png). The active call ends automatically. |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | To pick up a parked call with the call unpark code, do the following: Use the phone keypad to enter \*88 \+ <Destination Ext Number>. Select Call or tap ![Call button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/464001-465000/464551.png). The parked call is connected.                                                      |

**Example:** 

You want to park the active call to the phone in a meeting room. The extension in the meeting room is 1234\. 

To park the call, dial `*681234` while you are on the call. To pick up the parked call, you go to the meeting room and dial `*881234` on the phone.

You can also pick up the call by dialing `*881234` on any phone within your organization.

## Park and unpark a call for a monitored user

- [9811 / 9841 / 9851 / 9861 ](#task-template%5F639d5c60-4a41-4a41-bc0b-26f9e3b41b40)
- [9871 / 8875](#task-template%5F532e0d9f-f430-4cf2-ac01-01abbe25bf46)

The Busy Lamp Field (BLF) call park on a line key can be used to monitor a user that is assigned by your administrator. You can quickly park and unpark a call by pressing the configured line key.

The following table lists the status indicators for BLF call park on different phone models:

__Table 1\. Status indicators for BLF call park on Cisco Desk Phone 9811, 9841, 9851, and 9861__
| Icon (9811 / 9841)                                                                                                                                           | Icon (9851 / 9861)                                                                                                                                                               | Line key LED                                                                                                                                                             | Status | Description                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------ |
| ![The parked icon for Espresso Model A](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479690.jpg) | ![Call park status on idle line for ESP model B, C, and D.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/481001-482000/481792.png) | ![the line key in the not-configured status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478723.png)LED off | Idle   | The line key is configured with BLF call park and is in idle mode. |
| ![The parked icon for Espresso Model A](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479690.jpg) | ![The parked icon for Espresso Model B, C, and D.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479691.jpg)          | ![the line key in the busy status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478726.png)Solid red         | Parked | The monitored user has a parked call.                              |

Before you begin

Your administrator has configured the BLF call park feature on a line key. 

| 1 | If there is an active call on the phone, press the BLF line key to park the call for the monitored user.                             |
| - | ------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | If a BLF line key shows that the monitored user has a parked call, press the line key to unpark and continue the call on your phone. |

The Programmable Line Key (PLK) with Busy Lamp Field (BLF) call park can be used to monitor a user that is assigned by your administrator. You can quickly park or unpark the call for the monitored user by selecting the PLK on the phone home screen.

The following table lists the status indicators for the PLK with BLF call park:

__Table 2\. Status indicators for BLF call park on Cisco Desk Phone 9871 and Cisco Video Phone 8875__
| Icon (9871 and 8875)                                                                                                                                                             | Status | Description                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------- |
| ![Call park status on idle line for ESP model B, C, and D.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/481001-482000/481792.png) | Idle   | The PLK is configured with BLF call park and is in idle mode. |
| ![The parked icon for Espresso Model B, C, and D.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479691.jpg)          | Parked | The monitored user has a parked call.                         |

Before you begin

Your administrator has configured the BLF call park feature as a PLK on your phone. 

| 1 | If there is an active call on the phone, select the PLK to park the call for the monitored user.                        |
| - | ----------------------------------------------------------------------------------------------------------------------- |
| 2 | If a PLK shows that the monitored user has a parked call, select the PLK to unpark and continue the call on your phone. |
