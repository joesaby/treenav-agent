---
title: "Schedule a Meeting in Microsoft Outlook for Mac"
product: "Webex Meetings"
article_id: "ni9e7ss"
url: "https://help.webex.com/en-us/article/ni9e7ss/Schedule-a-Meeting-in-Microsoft-Outlook-for-Mac"
last_updated: "2025-12-13"
description: "Schedule, edit, or cancel meetings from Microsoft Outlook using Cisco Webex
Productivity Tools on your Mac. Learn the prerequisites for scheduling a meeting
and discover the various types of meetings that you can schedule."
tags: ["webex-meetings", "webex-events-(classic)", "webex-training"]
source: "help.webex.com"
---

# Schedule a Meeting in Microsoft Outlook for Mac

## Final release for Webex Productivity Tools

The June (42.6) release was the final release for Productivity Tools for Windows. The final release for Productivity Tools for Mac was 41.5 as [Microsoft blocked injection-based plugins on Mac](https://support.microsoft.com/en-us/office/outlook-for-mac-%E2%80%93-planned-update-for-injection-based-plugins-dc6f9490-da7d-4d35-8793-835636b954d5).

Microsoft Outlook customers who wish to schedule Webex meetings from Microsoft Outlook should [move to the Webex Scheduler add-in](https://help.webex.com/nvx0mw4/).

The Webex Meetings desktop app and Webex Productivity Tools are provided in two separate packages. For information on the desktop app, see [Webex Meetings Desktop App](https://help.webex.com/ojsyry/).

Productivity Tools no longer supports integrations with IBM Lotus Notes, IBM Sametime, Microsoft Lync, Internet Explorer, and Skype for Business from 41.2.

## Schedule a Meeting Prerequisites

You can schedule Webex meetings or appointments using the Webex Productivity Tools integration to Microsoft Outlook, and the process is very similar for both.

Please be aware of the following:

- Not all the features available for scheduling meetings on your Webex site are available in Productivity Tools. This includes some of the recurrence patterns. For more info see [Recurrence Pattern Limitation for the Webex Integration to Outlook](https://help.webex.com/article/en-us/c15vr2#reference%5F47EBB2A56D10125C0C89215BF3D23DA9).
- If you schedule meetings from Outlook, then the meeting time zone will match the one on your computer, which might be different from the time zone set on your Webex site.

## Schedule a Webex Meeting

| 1 | From the Home ribbon in Microsoft Outlook go to Cisco Webex and click Schedule Webex Meeting. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/441001-442000/441664.jpg) |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click To and select who you would like to invite to the meeting.                                                                                                                                                       |
| 3 | Add a Subject and a Location. To add advanced meetings features like cohosts or breakout sessions for WBS40.9 and later sites, click Change Settings.                                                                  |
| 4 | Click Send. To remove a Webex meeting without cancelling the meeting, first open the meeting and click Cancel Webex or Cancel Personal Room. Then send the update.                                                     |

## Schedule a Personal Room Meeting

Personal rooms are your own virtual conference room. It’s always available and you don’t have to book it. When you schedule a Personal Room meeting, the meeting takes place in your Personal Room, and the link to join the meeting is your Personal Room URL.

| 1 | From the Home ribbon in Microsoft Outlook, go to Cisco Webex and click Schedule Personal Room Meeting. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/441001-442000/441665.jpg) |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click To and select who you would like to invite to the meeting.                                                                                                                                                                |
| 3 | Add a Location, and then Click Send.                                                                                                                                                                                            |

## Edit a Scheduled Meeting

Once you schedule a meeting using Webex integration to Outlook, you can use Outlook to edit it at any time. For example, you can change its start time, specify a new password, choose a different audio connection option, and so on. 

Once you edit a scheduled meeting, integration to Outlook sends an updated meeting invitation to the attendees whom you invited to the meeting and also updates the meeting information on your Webex site.

If you reschedule a single occurrence of a recurring Webex meeting using Microsoft Outlook, the changes will also show on your Webex site.

| 1 | On your Microsoft Outlook calendar, open the item for the scheduled meeting.                                                                                                                                                                                 |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | You can change any of the following: To change Webex meeting settings, select Change Settings.To add or change a recurrence pattern, select Recurrence. To edit the text in the meeting invitation email message, do it on the Appointment window.           |
| 3 | Do one of the following, as appropriate: To send the updated meeting invitation to invited attendees and save the updated meeting in your Outlook calendar, select Send Update. To save the updated meeting to your Outlook calendar, select Save and Close. |

## Cancel a Scheduled Meeting

If you schedule a meeting using the integration to Outlook, you can cancel the meeting in Outlook.

You can use Cancel Webex Meeting, or Cancel Personal Room in the Webex toolbar in Outlook to cancel and remove the Webex information from the Outlook meeting or appointment. You may want to do this if you are changing the type of Webex meeting; for example, if you originally scheduled a Webex meeting and want to change it to a Personal Room meeting.

- If you cancel a Webex meeting using your Webex site, your changes will not show in Microsoft Outlook. For example, if you cancel the meeting using your site, the meeting does not cancel on your Outlook calendar. Therefore, we recommend that you use only Outlook to cancel a meeting. Editing a meeting using your Webex site that was scheduled using Outlook is not an option.
- If you cancel a single occurrence of a recurring Webex meeting using Microsoft Outlook, the changes will also show on your Webex site.
- If you save the meeting or appointment after using one of these canceling buttons and you have not added another Webex meeting, or Personal Room meeting, it becomes a regular Microsoft Outlook meeting with no Webex information.

You can also cancel a meeting from the Microsoft Outlook calendar as described below.

| 1 | On your Microsoft Outlook calendar, open the item for the scheduled meeting. |
| - | ---------------------------------------------------------------------------- |
| 2 | Select Cancel.                                                               |
| 3 | Select Yes in the confirmation message.                                      |
| 4 | Select Send Cancellation.                                                    |

## Recurrence Pattern Limitations for the Webex Integration to Outlook

The following table shows the differences between Webex and Microsoft Outlook recurrence patterns.

__Table 1\. Webex Meetings__
| Type                                                              | Outlook Option                                                                                  | Converted to Webex Meeting Option                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weekly                                                            | Every \[X\] weeks on: \[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday\]        | _For Webex Events and Webex Training sessions:_ Every week on: \[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday\] If you schedule a meeting that repeats every X week, where X is greater than 1, in Microsoft Outlook, the meeting is scheduled in Outlook as you specified, but appears as a weekly meeting on your Webex site. The week start always points to the default value Sunday. Customization is not supported, so if you change the week start to a different day, the week start is not synchronized with the Webex site. |
| Monthly                                                           | The \[first, second, third, fourth, last\] day Not supported of every month                     | Not supported                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| The \[first, second, third, fourth, last\] weekday or weekend day | Not supported                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Yearly                                                            | \[first, second, third, fourth, last\] \[day, weekday, weekend day\] of \[January....December\] | Not supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
