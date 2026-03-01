---
title: "Schedule a Meeting in Microsoft Outlook Using the Webex Meetings Desktop App"
product: "Webex Meetings"
article_id: "nboahd2"
url: "https://help.webex.com/en-us/article/nboahd2/Schedule-a-Meeting-in-Microsoft-Outlook-Using-the-Webex-Meetings-Desktop-App"
last_updated: "2024-12-05"
description: "Schedule, edit, or cancel meetings from Microsoft Outlook. Learn the
prerequisites for scheduling a meeting and discover the various types of
meetings that you can schedule."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Schedule a Meeting in Microsoft Outlook Using the Webex Meetings Desktop App

[Schedule a Meeting](#task%5F05FF2DF452E252E5AE02CEB444CD395A)

Not all the features available for scheduling meetings on your Webex site are available in the Cisco Webex Meetings desktop app. The integration to Microsoft Outlook does not support all the recurrence options that are available in Microsoft Outlook, for more information see the tables below.

In any meeting invitations that you send from Microsoft Outlook, the meeting start time appears in the time zone that is set on your computer, and may not match the time zone preferences you have set on your Webex site.

| 1 | From the Home ribbon in Microsoft Outlook, select Schedule Meeting.                                                                                                                                                                                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | In the drop-down list, choose from the following: Schedule Webex Meeting–Webex meetings are the standard meeting choice. Schedule Personal Room Meeting–Personal Rooms are your own virtual conference room. It’s always available and you don’t have to book it.                                                                                            |
| 3 | Select To and choose who you want to invite to your meeting. Only people who receive the meeting invitation directly from the host will have the meeting appear in their Webex site or Webex Meetings mobile app calendars. Forwarded invitations, or meeting details copied and pasted and sent in emails, will not be listed in the recipients' calendars. |
| 4 | Add a Subject and Location.                                                                                                                                                                                                                                                                                                                                  |
| 5 | Choose the Start time and End time for your meeting. This includes the date, time, and duration of the meeting.                                                                                                                                                                                                                                              |
| 6 | Enter any other necessary information in the email invitation and select Send.                                                                                                                                                                                                                                                                               |

[Edit a Scheduled Meeting](#task%5FF3348277781A6B1484AD1E0810B50264)

Once you schedule a meeting using the integration to Microsoft Outlook, you can use Microsoft Outlook to edit it at any time. You can change the start time, specify a new password, choose a different audio connection option, and more. 

When you edit a scheduled meeting an updated email invitation is sent to the invitees and the meeting information on your Webex site is updated.

| 1 | On your Microsoft Outlook calendar, open the scheduled meeting item.                                                                                                                                               |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Change any of the following settings: Change Settings–Change your Webex meeting settings. Recurrence–Add or change a recurrence pattern.To edit the text in your email invitation, type in the Appointment window. |
| 3 | Select Send Update.                                                                                                                                                                                                |

[Cancel a Scheduled Meeting](#task%5FF2687A46AFB1D970860BB58706280AB6)

If you schedule a meeting using the integration to Microsoft Outlook, you can cancel the meeting in Microsoft Outlook at any time.

- If you cancel a Webex meeting using your Webex site, your changes will not show in Microsoft Outlook.
- If you cancel a single occurrence of a recurring Webex meeting using Microsoft Outlook, the changes also show on your Webex site.
- If you save the meeting or appointment after canceling your meeting and have not added another Webex meeting, Personal Room meeting, or Personal Conference meeting, it becomes a regular Microsoft Outlook meeting with no Webex information.

| 1 | On your Microsoft Outlook calendar, open the scheduled meeting item. |
| - | -------------------------------------------------------------------- |
| 2 | Select Cancel Meeting.                                               |
| 3 | Select Yes in the confirmation message.                              |
| 4 | Select Send Cancellation.                                            |

## Recurrence Pattern Limitations

The following table shows the differences between Webex and Microsoft Outlook recurrence patterns.

__Table 1\. Webex Meetings__
| Type                                                              | Microsoft Outlook Option                                                                        | Converted to Webex Meeting Option                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weekly                                                            | Every \[X\] weeks on: \[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday\]        | Every week on: \[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday\] The week start always points to the default value Sunday. Customization is not supported, so if you change the week start to a different day, the week start is not synchronized with the Webex site. |
| Monthly                                                           | The \[first, second, third, fourth, last\] day not supported of every month                     | Not supported                                                                                                                                                                                                                                                                           |
| The \[first, second, third, fourth, last\] weekday or weekend day | Not supported                                                                                   |                                                                                                                                                                                                                                                                                         |
| Yearly                                                            | \[first, second, third, fourth, last\] \[day, weekday, weekend day\] of \[January....December\] | Not supported.                                                                                                                                                                                                                                                                          |

__Table 2\. Webex Personal Conference Meetings__
| Type                                                                                                                                                | Microsoft Outlook Option                                             | Converted to Webex Personal Conference Meeting Option                |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Monthly                                                                                                                                             | Day \[X\] of every \[y\] month                                       | Day \[X\] of every month.                                            |
| The \[first, second, third, fourth, last\] weekday or weekend day                                                                                   | Not supported                                                        |                                                                      |
| Yearly                                                                                                                                              | Every \[January....December\] \[1,....31\]                           | Not supported                                                        |
| \[first, second, third, fourth, last\] \[day, weekday, weekend day\] of \[January....December\]                                                     | Not supported                                                        |                                                                      |
| \[first, second, third, fourth, last\] \[Sunday, Not supported. Monday, Tuesday, Wednesday, Thursday, Friday, Saturday\] of \[January....December\] | Not supported                                                        |                                                                      |
| End date                                                                                                                                            | No end date.                                                         | If time period is longer than one year, it is converted to one year. |
| End after \[x\] occurrences.                                                                                                                        | If time period is longer than one year, it is converted to one year. |                                                                      |
| End by \[date input\]                                                                                                                               | If time period is longer than one year, it is converted to one year. |                                                                      |
