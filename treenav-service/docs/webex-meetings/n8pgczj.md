---
title: "Configure Teleconferencing Options for a Webex Site in Cisco Webex Control Hub"
product: "Webex Meetings"
article_id: "n8pgczj"
url: "https://help.webex.com/en-us/article/n8pgczj/Configure-Teleconferencing-Options-for-a-Webex-Site-in-Cisco-Webex-Control-Hub"
last_updated: "2024-12-05"
description: "Site administrators can set the default teleconferencing options to show up on a
Webex site."
tags: ["webex-meetings", "webex-events-(classic)", "webex-suite", "webex-webinars"]
source: "help.webex.com"
---

# Configure Teleconferencing Options for a Webex Site in Cisco Webex Control Hub

Set Default Teleconferencing Options for a Webex Site

[Set Default Teleconference Options](#WebEx%5FTK%5FSC717D15%5F00)

This procedure applies to Webex Meetings, Webex Events, and Webex Training only. 

Selections determine only the default settings. Users can select other options as they schedule sessions. Some of the options that are listed may not be available for the site.

Site administrators can specify the default audio options from the available options for their site. These options then appear as the default selection on the Webex scheduling pages, the Microsoft Outlook scheduler, and the One-Click setup wizard.

Site administrators can also specify whether users can automatically join call-back teleconferences without having to press "1" on their phone keypads. This option is useful if participants reside in some European countries where the phone system cannot send keypad tones. 

With the Webex Audio option, Webex can play a sound when participants join and leave audio conferences. 

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/login), go to Services, and under Meeting, select Sites.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Choose the Webex site to change the settings for, and click Configure Site.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3 | Under Common Settings, select Scheduler.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 4 | Scroll down to Default Scheduler Options, and select one of the following options in Telephony entry and exit tone: Beep: Webex plays a simple tone when a participant joins or leaves.  Announce name: Webex asks each participant to state their name as they join the meeting and then announces the name of the participant. No tone: Webex does not play any sound when a participant joins or leaves.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 5 | In the Join teleconference without pressing "1" section, select On to allow users to automatically join call-back teleconferences without pressing "1."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 6 | In the Default site audio options section, select any of the following default options: Integrated VoIP: Check this check box to use Voice over IP (VoIP) where the session audio is sent over the Internet instead of using the phone. None: Select this option to exclude audio conferencing from the site. Webex teleconferencing: Select this option to use the phone for the Webex Events session audio. Select any of the following options: Allow access to teleconference via global call-in numbers: Check this check box to provide a local phone number for participants in other countries to use when calling into Webex sessions. The local numbers that are available depend on how your Webex site is configured. Call-in teleconferencing: Select this option to have users call in to join sessions. Call-back teleconferencing: Select this option to have Webex call users as they join sessions. |
| 7 | Click Update to save any changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

[Set Default Audio Technical Support Options](#WebEx%5FTK%5FS373F115%5F00)

This procedure is for Webex Meetings, Webex Events, and Webex Training only. 

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/login), go to Services, and under Meeting, select Sites.                                             |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Choose the Webex site to change the settings for, and click Configure Site.                                                                                                      |
| 3 | Under Common Settings, select Scheduler.                                                                                                                                         |
| 4 | Scroll down to Default Scheduler Options and check the check boxes to enable the following Audio technical support options: Instant Help. Allow attendee access to instant help. |
| 5 | Click Update.                                                                                                                                                                    |

[Assign Site Default Call-In Numbers](#WebEx%5FTK%5FA9A19C5E%5F00)

This procedure applies to Webex Meetings and Webex Training only. 

Site administrators can enable the option to assign the default call-in numbers for all users on their site. Choose the two default numbers from the numbers that are provisioned for the site.

Site administrators can also allow meeting and session hosts to set the default call-in numbers for their participants. 

Enabling these options provides access to the teleconference using global call-in numbers by default. 

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/login), go to Services, and under Meeting, select Sites.               |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Choose the Webex site to change the settings for, and click Configure Site.                                                                        |
| 3 | Under Common Settings, select Audio Settings.                                                                                                      |
| 4 | Check the Assign default call-in numbers check box.                                                                                                |
| 5 | Select a call-in option from the list on the left and click the Add > button.                                                                      |
| 6 | To set the order in which the options appear on your site, select one of the options and click the Move Up or the Move Down button.                |
| 7 | Click Save. To allow hosts to choose their own default numbers, check the **Allow user to set default call-in numbers** check box in Site Options. |

[Allow Internal Call-Back for Webex Teleconferencing in Control Hub](#WebEx%5FTK%5FAE31977D%5F00)

This setting is only available for CCA-SP, CCA Enterprise, and Edge Audio customers, and only applies to Webex Meetings.

When provisioned for your site, you can turn on the option to allow meeting participants to receive calls at an internal phone number within the same corporate site. You can also edit the label that appears within the Audio Conference dialog when participants join the audio conference.

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/login), go to Services, and under Meeting, select Sites. |
| - | ------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Choose the Webex site to change the settings for, and click Configure Site.                                                          |
| 3 | Under Common Settings, check the Enable internal call-back teleconferencing check box.                                               |
| 4 | In the Internal call-back option label field, enter a descriptive name or phrase to identify the internal call-back option.          |
| 5 | Click Update.                                                                                                                        |

[Change Teleconferencing Privileges for a User](#id%5F86682)

Site administrators can only set a user's privileges if the user has Webex Enterprise Edition.

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/login), go to Users, and under Meeting, select the user to change the privileges for.              |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Under Services, select Meeting.                                                                                                                                                |
| 3 | Under Webex Meeting Sites, select the Webex site to change the privileges for.                                                                                                 |
| 4 | Select User Privileges to view and adjust the user's Telephony privileges.                                                                                                     |
| 5 | A user's Call-in teleconferencing privileges are always enabled. Check the Access to global call-in numbers check box to allow the user access to the default call-in numbers. |
| 6 | Click Save.                                                                                                                                                                    |
