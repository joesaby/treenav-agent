---
title: "Schedule and join meetings with Webex for Google Workspace"
product: "Webex Meetings"
article_id: "4tzekz"
url: "https://help.webex.com/en-us/article/4tzekz/Schedule-and-join-meetings-with-Webex-for-Google-Workspace"
last_updated: "2024-09-21"
description: "The Webex integration for Google Workspace lets users schedule Webex meetings
and Webex Personal Room meetings directly from Google Calendar or Gmail, in any
browser. The calendar invite shows the Webex meeting details, including a link
to join the meeting."
tags: ["webex-meetings", "webex-messaging"]
source: "help.webex.com"
---

# Schedule and join meetings with Webex for Google Workspace

This feature is available for Webex Meetings.

If you already installed the Webex app, you'll be upgraded to a new version automatically. We recommend that IT administrators go to the Google Admin console and grant new scopes to provide organization-wide permission, otherwise users will be asked to authorize new permissions when they try to schedule Webex meetings. To grant new scopes, sign in to the Google Admin console and go to Apps \> Marketplace Apps \>  Settings for Cisco Webex and click Revoke data access and then click Grant data access.

[Install the Webex app from Workspace Marketplace](#id%5F83219)

If your administrator hasn’t installed the Webex app for G Suite users but has added it to the approved list of apps, you can go to Google Workspace Marketplace and install the app yourself.

If restrictions are applied to Marketplace apps, your Google administrator can add the Webex app to the approved list of apps or can select Allow users to install any application from Google Workspace Marketplace in Marketplace settings \> Manage Access to apps.

Administrators can install the app for the whole domain through the Google Admin console. Go to [support.google.com](http://support.google.com) and search for `Install Marketplace apps`.

| Go to the [Webex app](https://gsuite.google.com/marketplace/app/cisco%5Fwebex/678783785621) for Google Workspace, and then click Install. Only users with Google Workspace accounts can view this page in Google Workspace Marketplace. After you've installed the app, follow the instructions in _Set Your Webex Site in Google Calendar_. |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[Uninstall the Webex app for Google Workspace](#id%5F83695)

If you no longer want to schedule Webex meetings and Webex Personal Room meetings directly from Google Calendar or Gmail, you can remove the Webex integration for Google Workspace.

Administrators can uninstall the app from the whole domain through the Google Admin console. Go to [support.google.com](http://support.google.com) and search for `Delete a Marketplace app from Google Workspace`.

| 1 | In Google Calendar, select Settings menu \> Settings.                   |
| - | ----------------------------------------------------------------------- |
| 2 | In the Add-ons section, next to Cisco Webex, select Settings \> Remove. |

Google Calendar

[Set your Webex site in Google Calendar](#id%5F83668)

Before you can schedule a Webex meeting or Webex Personal Room meeting, you must specify the Webex site to use with your account.

| 1 | In Google Calendar, select Create event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Event Details, select the Add conferencing drop-down list, and then select Webex meeting. If you don't see these options in the Add conferencing drop-down list, your administrator hasn’t installed the Webex for Google Calendar app. You may be able to install the app yourself. For more information, see _Add the Webex App from Google Workspace Marketplace_.                                                                                                                                                                                    |
| 3 | Under Add location, you'll see either Authorize or Login required: If you see Authorize, it means that you have to authorize the Cisco Webex for Google Calendar app to access your Google account. Select Authorize and go to Step 4.If you see Login required, it means that you use the same email address for your Webex account and for Google Workspace, and that your administrator has already authorized the Webex for Google Calendar app to access your Google account. Select Log In and go to Step 5 to enter the Webex site to use for meetings. |
| 4 | To authorize, choose the Google Workspace account that you want to use with Webex for Google Calendar. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/429001-430000/429646.jpg) Select Allow. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/429001-430000/429647.jpg)                                                                                                                                                                                         |
| 5 | Enter the Webex site that you want to use to schedule meetings and select Next. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/429001-430000/429648.jpg) If you didn't log in earlier, you'll be prompted to log in now. Select Log In. Conferencing details are added to the meeting.                                                                                                                                                                                                                         |
| 6 | If you want to continue to schedule a meeting, see _Schedule a Meeting_, otherwise select Cancel event creation.                                                                                                                                                                                                                                                                                                                                                                                                                                               |

[Schedule a meeting in Google Calendar](#id%5F82937)

After you set your Webex site, you can schedule a Webex meeting or a Webex Personal Room meeting from your Google Calendar.

The Webex meeting or Personal Room meeting details fill in based on the meeting template that you set as your default. Make sure you set your default template to the meeting type you want in the Cisco Webex side panel before you schedule.

When you're creating an event, can go to Cisco Webex in the side panel to change meeting settings, such as the alternate host or cohost and audio type. In Calendar, you can change your Webex site and meeting template from Cisco Webex in the side panel.

| 1 | In Google Calendar, select Create event or select an existing event.                                                                                                                                                                                                                                                                                                                                                      |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Event Details, select the Add conferencing drop-down list, and then select Webex meeting or Webex Personal Room meeting.                                                                                                                                                                                                                                                                                            |
| 3 | Add the meeting title, date, and time.                                                                                                                                                                                                                                                                                                                                                                                    |
| 4 | If you want the meeting to repeat, select Does not repeat and choose how often you want the meeting to repeat, and when you want the repeating meeting to end.                                                                                                                                                                                                                                                            |
| 5 | Add guests.                                                                                                                                                                                                                                                                                                                                                                                                               |
| 6 | To make it easier for people to join a meeting from a Webex room or desk device, select Rooms, and then select the room devices that you want to add. You can choose from suggested rooms or search for a new one. This makes a Join button appear on the device before the meeting starts. Your administrator must set up your account with the Webex Hybrid Calendar Service so you can schedule room devices this way. |
| 7 | (Optional) Edit the meeting options. In the side panel, select Cisco Webex![Webex icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/460001-461000/460017.jpg) and choose the meeting template, allow attendees to join the meeting before the host, assign an alternate host or cohost, and change the audio settings.                                                     |
| 8 | Select Save, and then Send.                                                                                                                                                                                                                                                                                                                                                                                               |

The calendar invite shows the Webex meeting details, including a link to join the meeting. You can copy the link and share it with others.

If your meeting repeats and you must change the date or time of one of the meetings, locate and select that instance of the meeting, select Edit event, make your changes, select Save \> This event, and select OK.

If your meeting repeats and you want to delete an occurrence of the meeting because you're on vacation or it's a public holiday, locate and select that instance of the meeting, select Delete event \> This event, and select OK.

[Start or join a meeting in Google Calendar](#id%5F82952)

It's convenient to start or join a meeting that's been scheduled using Google Calendar.

| Do one of the following: Select the link in the calendar invite in Google Calendar.Join from a video system or application by dialing the video address in the calendar invite.Join by phone by dialing the number in the calendar invite. The global call-in number link is available in the Joining Instructions. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/429001-430000/429366.jpg)If you have a Cisco Webex Hybrid Calendar Service, select Join on your video device. The Join button appears 5 minutes before the meeting starts.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/429001-430000/429395.jpg)From the Webex app, select Join. The Join button appears 5 minutes before the meeting starts, if you're using Cisco Webex Hybrid Calendar Service. |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[Allow someone else to schedule meetings on your behalf](#id%5F83068)

You can delegate someone else to schedule meetings for you in Google Calendar. Having a delegate is useful in situations where you're unable to reach a computer or if you have another person manage your calendar.

The delegate must have a host account in Webex Meetings.

| 1 | Sign in to your Webex site, select Classic View, and select My Webex.                                                                                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Preferences \> Scheduling Options.                                                                                                                            |
| 3 | In the Scheduling permission box, enter the email address of one or more hosts you want to allow to schedule meetings on your behalf.                                |
| 4 | Select Save at the bottom of the Preferences page.                                                                                                                   |
| 5 | In Google Calendar, under My calendars, point to the calendar that you want to create a delegate for and select Options for <calendar name> \> Settings and sharing. |
| 6 | Under Share with specific people, select Add People.                                                                                                                 |
| 7 | Enter the email address of one or more hosts you want to delegate your calendar to.                                                                                  |
| 8 | Select the Permissions box, select the privilege level, and select Send.                                                                                             |

[Change the Webex site you use in Google Calendar](#id%5F82924)

If there's more than one Webex site that you use for meetings, you can specify which site you prefer to use when you schedule meetings in Google Calendar.

| 1 | In Google Calendar, select Cisco Webex ![Webex icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/460001-461000/460017.jpg) in the side panel.             |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Change Webex Site.                                                                                                                                                                                |
| 3 | Enter the Webex site that you want to use to schedule meetings and select Next. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443270.jpg) |
| 4 | Close the browser window.                                                                                                                                                                                |

What to do next

The next time that you create an event, when you add conferencing, you'll have to log in to the Webex site that you've specified to use.

Gmail

[Schedule a meeting in Gmail](#id%5F131978)

After you've set your Webex site, you can schedule a Webex meeting from an email in Gmail. You can schedule a meeting with the email recipients to discuss the content of an email.

| 1 | In Gmail, select an email and select Cisco Webex ![Webex icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/460001-461000/460017.jpg) in the side panel.                                                                                                                                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Schedule a meeting. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443267.jpg)                                                                                                                                                                                                      |
| 3 | Change the meeting topic and select the time zone, date, and time.                                                                                                                                                                                                                                                                                       |
| 4 | Invite participants. By default, the email addresses in the "To" and "From" fields in the email are invited to the meeting. To invite other participants, select ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443273.jpg) under Invite more particpants and enter their email addresses. |
| 5 | Select Create Meeting. The meeting details show. If you want to start the meeting right away, select Start Meeting.                                                                                                                                                                                                                                      |

[Start an instant meeting in Gmail](#id%5F131980)

After you've set your Webex site, you can schedule a Webex meeting from an email in Gmail. You can meet instantly with the email recipients to discuss the content of an email.

| 1 | In Gmail, select an email and select Cisco Webex ![Webex icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/460001-461000/460017.jpg) in the side panel.                                                                                                                                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Start an instant meeting. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443271.jpg)                                                                                                                                                                                                |
| 3 | Select the meeting topic to change it. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443272.jpg)                                                                                                                                                                                          |
| 4 | Invite participants. By default, the email addresses in the "To" and "From" fields in the email are invited to the meeting. To invite other participants, select ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443273.jpg) under Invite more particpants and enter their email addresses. |
| 5 | Select Start Meeting.                                                                                                                                                                                                                                                                                                                                    |

[Start or join a meeting in Gmail](#id%5F131983)

It's convenient to start or join a meeting that's been scheduled using Gmail.

| Do one of the following to start or join a meeting: Select Cisco Webex ![Webex icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/460001-461000/460017.jpg) in the side panel. Under Upcoming Meetings, select Start or Join next to the meeting.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443278.jpg)Select the link in the email invitation in Gmail.Join from a video system or application by dialing the video address in the email invitation.Join by phone by dialing the number in the email invitation.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/429001-430000/429366.jpg)If you have a Cisco Webex Hybrid Calendar Service, select Join on your video device. The Join button appears 5 minutes before the meeting starts.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/429001-430000/429395.jpg)From the Webex App, select Join. The Join button appears 5 minutes before the meeting starts, if you're using Cisco Webex Hybrid Calendar Service. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

[Change the Webex site you use in Gmail](#id%5F131976)

If there's more than one Webex site that you use for meetings, you can specify which site you prefer to use when you schedule meetings in Gmail.

| 1 | In Gmail, select Cisco Webex ![Webex icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/460001-461000/460017.jpg) in the side panel.                                                                                                           |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select More actions ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443265.jpg) and Change Webex Site. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443266.jpg) |
| 3 | Enter the Webex site that you want to use to schedule meetings and select Next. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443270.jpg)                                                                                     |
| 4 | Close the browser window.                                                                                                                                                                                                                                                                    |
