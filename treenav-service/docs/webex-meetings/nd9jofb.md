---
title: "Enable CLI Authentication for Cisco Webex Meetings, Cisco Webex Events, and Cisco Webex Training in Webex Site Administration"
product: "Webex Meetings"
article_id: "nd9jofb"
url: "https://help.webex.com/en-us/article/nd9jofb/Enable-CLI-Authentication-for-Cisco-Webex-Meetings-Cisco-Webex-Events-and-Cisco-Webex-Training-in-Webex-Site-Administration"
last_updated: "2024-09-15"
description: "CLI authentication provides your users with more security for their Webex
Meetings, Webex Events, and Webex Training sessions."
tags: ["webex-meetings", "webex-events-(classic)", "webex-training"]
source: "help.webex.com"
---

# Enable CLI Authentication for Cisco Webex Meetings, Cisco Webex Events, and Cisco Webex Training in Webex Site Administration

## Overview

Automatic Number Identification (ANI) or Calling Line Identification (CLI) is a form of caller ID that sends a caller's phone number to the system before the call is answered. This allows you to join a meeting without having to enter a meeting number. When you call in to the audio portion of a meeting, the system verifies the number that you called in from against the number added to your Webex site preferences, and then directs you to the correct meeting.

To enable ANI/CLI Authentication, first enable it on the Webex site, then turn it on for each user. If you enable ANI/CLI authentication for users with host accounts, then they can:

- Schedule a meeting with dial-in ANI/CLI teleconferencing authentication.
- Specify a phone number to be authenticated when they call in to any ANI/CLI-enabled audio conference. However, they'll be authenticated only if they were invited by email during the scheduling process.
- Specify an audio PIN to prevent a person from using a fake number to dial in to meetings.

## Enable CLI Authentication for the Webex Site

You must enable the global setting for the Webex site that you want to allow CLI authentication for.

| 1 | Sign in to Webex Site Administration and go to Configuration \> Common Site Settings \> Options. |
| - | ------------------------------------------------------------------------------------------------ |
| 2 | In the Site Options settings, check the Enable teleconferencing CLI authentication check box.    |
| 3 | Scroll to the bottom and click Update.                                                           |

## Enable CLI Authentication for a User

You can choose which users can join Webex Meetings, Webex Events, and Webex Training sessions with CLI authentication after enabling the global setting for the Webex site.

| 1 | Sign in to Webex Site Administration and go to User Management \> Edit User. To enable CLI authentication when you create a new user, go to User Management \> Add User. |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Select the user that you want to enable CLI authentication for.                                                                                                          |
| 3 | Scroll to Telephony privilege and check the Enable teleconferencing CLI authentication check box.                                                                        |
| 4 | Scroll to the bottom and click Update.                                                                                                                                   |
