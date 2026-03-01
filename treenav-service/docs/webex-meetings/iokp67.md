---
title: "Configure one-tap joining for audio-only meeting join links"
product: "Webex Meetings"
article_id: "iokp67"
url: "https://help.webex.com/en-us/article/iokp67/Configure-One-Tap-Joining-for-Audio-Only-Meeting-Join-Links"
last_updated: "2025-08-26"
description: "You can set up Webex meeting invitation emails on Android and iOS devices to
include a link to a phone number. Participants can tap this to call in to a
meeting directly."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Configure one-tap joining for audio-only meeting join links

One-tap joining allows people to join the audio conference of a meeting without having to enter their password or use the mobile app. 

To include one-tap joining links in email invitations, meetings can't require attendees to sign in. If the meeting requires a password, it needs to be included in the email invitation. You can set these options for anyone who schedules meetings on your site.

- [Control Hub](#id%5F136521)
- [Site Admin](#id%5F136522)

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Services \> Meeting. |
| - | ----------------------------------------------------------------------------------- |
| 2 | Choose your site, then click Common Settings \> Site Options.                       |
| 3 | Uncheck the box next to Require users to have an account when joining by phone.     |
| 4 | Uncheck the box next to Exclude password from invitation.                           |

| 1 | Sign in to Webex Site Administration and go to Configuration \> Common Site Settings \>  Options. |
| - | ------------------------------------------------------------------------------------------------- |
| 2 | Uncheck the box next to Require users to have an account when joining by phone.                   |
| 3 | Uncheck the box next to Exclude password from invitation.                                         |

The following default email templates support one-tap joining:

- CMR Setup Confirmation\_CMR
- Invitation to a Meeting in Progress
- Invitation to a Meeting in Progress\_PR
- Invitation to a Meeting in Progress\_PR(Productivity Tools)
- MC MeetingInfo For Attendee
- MC MeetingInfo For Attendee(Productivity Tools)
- MC MeetingInfo For Host
- Meeting Information Updated
- Meeting Invitation
- Meeting Registration Confirmed
- Meeting Rescheduled
- Meeting Scheduled
- Updated Meeting Invitation

Custom email templates with the following [variables](https://help.webex.com/06i2j4/) support one-tap joining:

- %JoinByPhoneEntHtml%
- %JoinByPhoneIcs\_Simple%
- %JoinByPhoneHtml\_Simple%
- %AttendeeJoinByPhoneIcs\_Simple%
- %JoinByPhoneText\_Simple%
- %JoinByPhoneEntText%
- %AttendeeJoinByPhoneText\_Simple%

There are no impacts to any text surrounding these variables in customized templates. If your custom templates use any of these variables, review the template look and feel. If you want to change how your template looks, you can remove these variables and manually enter the numbers in your custom template.
