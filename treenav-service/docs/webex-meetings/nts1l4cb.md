---
title: "Schedule a Webex Private Meeting"
product: "Webex Meetings"
article_id: "nts1l4cb"
url: "https://help.webex.com/en-us/article/nts1l4cb/Schedule-a-Webex-Private-Meeting"
last_updated: "2024-09-13"
description: "A Webex Private Meeting on Video Mesh provides enhanced security by ensuring all
participants belong to the same organization, are all on the corporate network,
and the meeting media is local to your network and never in the cloud."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Schedule a Webex Private Meeting

- [](#webex%5Ft%5Fwrapper-private-mtgs)
- [Desktop](#Cisco%5FTask.dita%5F9ca7c71e-8c1b-477d-9060-d772ae6a10a3)
- [Outlook](#Cisco%5FTask.dita%5F0bfc6018-c35e-40ff-a98f-2522ab6aeff4)
- [Microsoft 365](#webex%5Ft%5Fschedule-private-meeting-ms365)

The following are required for private meetings on Video Mesh: 

- The host organization uses Video Mesh and enables the feature for your organization.
- All participants in a private meeting must belong to the organization hosting the private meeting (the host organization).
- Your administrator has enabled your individual account for private meetings.
- You must be connected to the corporate network of the host organization, either directly or through a VPN.
- You can only join the private meeting from the Webex App app or from an authenticated video system in the host organization.
- If your Webex App app is connected to a video system, it must be an authenticated video system in the host organization.
- For more information, see [Cisco Webex Video Mesh Release Notes](https://help.webex.com/en-us/jgobq2/Cisco-Webex-Video-Mesh-Release-Notes#reference%5FE508B00A7B1E63291ED719D3761FD971).

# Known Limitations

- Private meetings only support VoIP for audio. Webex App Edge Audio and PSTN are not supported.
- You can't use Personal Rooms for private meetings.
- Private meetings are supported for scheduled meetings only.
- Private meetings don't support Webex App features that require a connection to the cloud, such as cloud recording, transcription, and Webex App Assistant.
- You can't join a private meetings from an unauthenticated video system, even one with the Webex App app on it.

| 1 | Sign in to your Webex App site and select Meetings \> Schedule a Meeting. |
| - | ------------------------------------------------------------------------- |
| 2 | In Meeting type, select Webex Meetings Private Meeting (Video Mesh only). |
| 3 | Select Show advanced options \> Audio connection options.                 |
| 4 | In the Audio connection type drop-down list, select None.                 |
| 5 | Click Schedule.                                                           |

You can also use a meeting template to create a private meeting. For more information, see [Make, Save, and Update a Meeting Template in Webex Meetings](https://help.webex.com/8lpohfb/). 

Before you begin

In order to schedule a Webex Private Meeting in Microsoft Outlook, you need a Private Meeting template in your Webex add-in. You can create your own, or an administrator can create one for your organization. For more information, see [Make, Save, and Update a Meeting Template in Webex Meetings](https://help.webex.com/8lpohfb/). 

Your administrator can set the Webex Add-In to default to the Webex Meetings Private Meeting type for all scheduled meetings. For more information, [contact your site administrator](https://collaborationhelp.cisco.com/article/en-us/7ksvf1).

| 1 | Once you have a Private Meeting template, open Microsoft Outlook and click Meeting. If your site administrator has set the Webex Add-In to default to the Webex Meetings Private Meeting (Video Mesh only) type for all scheduled meetings, skip to step 5. |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/438001-439000/438264.jpg) Webex Preferences.                                                                                                           |
| 3 | Under Default meeting type, select Webex meeting from the drop-down list.                                                                                                                                                                                   |
| 4 | In Default Webex Meeting template, select the Private Meeting template that you or your administrator created.                                                                                                                                              |
| 5 | Click Add Webex Meeting.                                                                                                                                                                                                                                    |
| 6 | In the Webex Scheduler pane, under Audio connection type, select None from the drop-down list.                                                                                                                                                              |
| 7 | Specify any other meeting details, then click Update.                                                                                                                                                                                                       |
| 8 | Click ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443899.jpg) Send.                                                                                                                        |

| 1 | Install the Webex Scheduler for the Microsoft 365 account. For more information, see [Deploy and Configure the Cisco Webex Scheduler for Microsoft 365](https://help.webex.com/en-us/pzti9s/Deploy-and-Configure-the-Cisco-Webex-Scheduler-for-Microsoft-365). |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From within Microsoft Outlook, create a new meeting, then click ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/433001-434000/433680.jpg) Add Webex Meeting.                                                    |
| 3 | Click Webex Preferences ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/438001-439000/438264.jpg).                                                                                                              |
| 4 | From Default Webex Meeting Template, select Private Meeting Template.                                                                                                                                                                                          |
| 5 | In Meeting Type, select Webex Meetings Private Meeting (Video Mesh only) from the drop-down list.                                                                                                                                                              |
| 6 | Under Audio connection, select None.                                                                                                                                                                                                                           |
| 7 | Specify any other meeting details, then click Update.                                                                                                                                                                                                          |
| 8 | Click ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443899.jpg) Send.                                                                                                                           |
