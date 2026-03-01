---
title: "Permissions Requested by Webex Add-on for Google Workspace"
product: "Webex Meetings"
article_id: "mrktyt"
url: "https://help.webex.com/en-us/article/mrktyt/Permissions-Requested-by-Webex-Add-on-for-Google-Workspace"
last_updated: "2024-09-21"
description: "When you authorize Webex to access your Google account, the add-on requests
permissions to access user data. This topic lists the permissions we request,
why we need them, and how we handle your data."
tags: ["webex-meetings", "webex-events-(classic)", "webex-training", "webex-webinars"]
source: "help.webex.com"
---

# Permissions Requested by Webex Add-on for Google Workspace

## User Account Permissions

**_Webex Requests These Permissions_**

__Table 1\. Requested permissions and how Webex uses them__
| Permission                                                                         | Scope                  | Data accessed                                                    | What does Webex use it for?                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| View your email message metadata when the add-on is running                        | Gmail                  | Subject line, date and time, invitee list                        | When you schedule a Webex meeting in Gmail, the scheduler reads these pieces of information, which are the essential requirements to schedule the meeting.                                                                   |
| Run as a Gmail add-on                                                              | Gmail                  | —                                                                | Allows the Webex Scheduler to run in a user’s Gmail.                                                                                                                                                                         |
| See the events you open in Google Calendar                                         | Calendar               | Subject line, date and time, invitee list                        | When you open an event in Google Calendar, the scheduler reads these pieces of information, which are the essential requirements to schedule the meeting.                                                                    |
| Edit the events you open in Google Calendar                                        | Calendar               | Subject line                                                     | Add Webex conference data info (card UI/property) into current opened calendar event.                                                                                                                                        |
| Run as a Calendar add-on                                                           | Calendar               | —                                                                | Allows the Webex Scheduler to run in a user’s Google calendar                                                                                                                                                                |
| View and edit events on all your calendars                                         | Calendar               | Read subject line, date and time, invitee list Edit subject line | Allows us to support shared calendar scenarios, in the same way as we read from and write to events in a single user's calendar.                                                                                             |
| View your Calendar settings                                                        | Calendar               | —                                                                | Google OAuth 2.0 requires this scope. See <https://developers.google.com/calendar/api/guides/auth>.                                                                                                                          |
| See info about users on your domain                                                | Google Workspace Admin | Webex siteURL in Google User Info                                | If you have set a Webex siteURL in Google user info, then we can read this URL and login to this site as the user's default.                                                                                                 |
| Connect to an external service                                                     | Apps Script            | Connect to Webex service                                         | The Scheduler needs to call the Webex service to request create/update/delete of the associated Webex meeting.                                                                                                               |
| Allow this application to run when you are not present                             | Apps Script            | Access Google event object based on Google trigger               | This allows the Scheduler to run when you are not present, in response to a Google trigger, for example to update/delete a meeting in your calendar. See <https://developers.google.com/apps-script/guides/triggers/events>. |
| View and manage data associated with the application                               | Apps Script            | Application’s cache                                              | The Scheduler caches some Webex information in Google storage. For example, the Webex site URL and the Webex meeting template.                                                                                               |
| View your country, language, and timezone                                          | Apps Script            | User’s current time                                              | The Scheduler reads your time zone to schedule or update the associated Webex meeting                                                                                                                                        |
| See your primary Google Account email address                                      | Other                  | User’s Gmail account address                                     | The Scheduler reads the user’s email address to bind it to their Webex account.                                                                                                                                              |
| See your personal info, including any personal info you've made publicly available | Other                  | User’s name and preferred language (default)                     | The Scheduler reads the user’s public user information, including full name, and the preferred language to use as the user's default.                                                                                        |

## Webex Scheduler Architecture Overview

1. Your site administrator uses Site Administration or Control Hub to enable Webex add-on for Google Workspace.
2. Each individual authorizes permissions for the Webex add-on for Google Workspace (if your admin doesn’t authorize) and connects their Google account with their Webex account.
3. Webex subscribes to calendar changes from Google.
4. A user adds a Webex meeting to a Google Calendar event, updates the time or topic, or copies an event to another date and time.
5. The Webex add-on client receives Google Calendar notifications and syncs with Webex.

## Google APIs Used by the Webex Scheduler

The tables below provide information on the Google APIs used by the Webex Scheduler.

For most of the cases, the Webex Scheduler uses the Google App Script API. For a few cases, the scheduler uses the Google REST API. Generally, the Google App Script API wraps the associated Google REST API. The _Reference URL_ column points to the Google App Script API where possible but may refer to the Google REST API reference URL if necessary. 

__Table 2\. Google App Script APIs used by Webex Scheduler__
| Google App Script API                           | What it does                                                                                                                  | Reference URL                                                                                                                |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Calendar.getID                                  | Get user calendar ID, the id of default calendar is user’s email address                                                      | <https://developers.google.com/apps-script/reference/calendar/calendar#getId%28%29>                                          |
| Calendar.getName                                | Get the name of the calendar                                                                                                  | <https://developers.google.com/apps-script/reference/calendar/calendar#getName%28%29>                                        |
| Calendar.getTimezone                            | Get the calendar’s timezone                                                                                                   | <https://developers.google.com/apps-script/reference/calendar/calendar#getTimeZone%28%29>                                    |
| Calendar.Events.list                            | Search for specific events that match some criteria                                                                           | <https://developers.google.com/calendar/api/v3/reference/events/list>                                                        |
| Calendar.Events.patch                           | Update the specifical event metadata to store webex meeting info                                                              | <https://developers.google.com/calendar/api/v3/reference/events/patch>                                                       |
| CalendarEvent.attendees                         | The properties to access the calendar attendees                                                                               | <https://developers.google.com/calendar/api/v3/reference/events#resource>                                                    |
| CalendarEvent.conferenceData                    | The properties to access the event conference data                                                                            | <https://developers.google.com/calendar/api/v3/reference/events#resource>                                                    |
| CalendarEvent.getTitle                          | Get the topic of the calendar event.                                                                                          | <https://developers.google.com/apps-script/reference/calendar/calendar-event#getTitle%28%29>                                 |
| CalendarEvent.getCreators                       | Get the calendar event’s creator                                                                                              | <https://developers.google.com/apps-script/reference/calendar/calendar-event#getCreators%28%29>                              |
| CalendarEvent.getStartTime                      | Get event’s start time                                                                                                        | <https://developers.google.com/apps-script/reference/calendar/calendar-event#getStartTime%28%29>                             |
| CalendarEvent.getEndTime                        | Get event’s end time                                                                                                          | <https://developers.google.com/apps-script/reference/calendar/calendar-event#getEndTime%28%29>                               |
| CacheService.getUserCache                       | Get user’s cache to retrieve the user’s preference settings                                                                   | <https://developers.google.com/apps-script/reference/cache/cache-service#getUserCache%28%29>                                 |
| Cache.get                                       | Get specific cache setting by key                                                                                             | <https://developers.google.com/apps-script/reference/cache/cache#get%28String%29>                                            |
| Cache.put                                       | Set some specific cache by key                                                                                                | <https://developers.google.com/apps-script/reference/cache/cache#put%28String,String%29>                                     |
| ConferenceDataService. newConferenceDataBuilder | Create a google specifical data structure to store and display webex meeting info                                             | <https://developers.google.com/apps-script/reference/conference-data/conference-data-service#newConferenceDataBuilder%28%29> |
| ConferenceDataBuilder.build                     | Generate webex meeting info data                                                                                              | <https://developers.google.com/apps-script/reference/conference-data/conference-data-builder#build%28%29>                    |
| GmailApp.getMessageById                         | Retrieve the specifical gmail message                                                                                         | <https://developers.google.com/apps-script/reference/gmail/gmail-app#getMessageById%28String%29>                             |
| GmailApp.createDraft                            | Create a Gmail message which contain the webex email body                                                                     | <https://developers.google.com/apps-script/reference/gmail/gmail-app#createDraft%28String,String,String%29>                  |
| GmailMessage.getFrom                            | Get Gmail sender email                                                                                                        | <https://developers.google.com/apps-script/reference/gmail/gmail-message#getFrom%28%29>                                      |
| GmailMessage.getTo                              | Get gamil receiver                                                                                                            | <https://developers.google.com/apps-script/reference/gmail/gmail-message#getTo%28%29>                                        |
| GmailMessage.getSubject                         | Get Gmail message title                                                                                                       | <https://developers.google.com/apps-script/reference/gmail/gmail-message#getSubject%28%29>                                   |
| GmailMessage.getDate                            | Get Gmail message date and time                                                                                               | <https://developers.google.com/apps-script/reference/gmail/gmail-message#getDate%28%29>                                      |
| PropertiesService.getUserProperties             | Access the persist user perference or setting                                                                                 | <https://developers.google.com/apps-script/reference/properties/properties-service#getUserProperties%28%29>                  |
| Properties.getProperty                          | Get specifical property by key                                                                                                | <https://developers.google.com/apps-script/reference/properties/properties#getProperty%28String%29>                          |
| Properties.setProperty                          | Set new property for key and value                                                                                            | <https://developers.google.com/apps-script/reference/properties/properties#setProperty%28String,String%29>                   |
| Session.getEffectiveUser().getEmail             | Get current user email                                                                                                        | <https://developers.google.com/apps-script/reference/base/user#getEmail%28%29>                                               |
| ScriptApp.newTrigger                            | Set up a new trigger to handle event update                                                                                   | <https://developers.google.com/apps-script/reference/script/script-app#newTrigger%28String%29>                               |
| UrlFetchApp.fetch                               | Use this API to call Webex Addin Service or google API to create/update meeting, we will not call any other 3rd party service | <https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch%28String%29>                              |

__Table 3\. Google REST APIs used by Webex Scheduler__
| Google REST API                                                   | What it does                       | Reference URL                                                                                    |
| ----------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| POST https://accounts.google.com/o/oauth2/token                   | Get Google Authentication token    | <https://developers.google.com/identity/protocols/oauth2/web-server#exchange-authorization-code> |
| GET https://www.googleapis.com/admin/directory/v1/users/{userKey} | Get the configured user Webex site | <https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get>                  |

## Frequently Asked Questions

**How does Webex secure the integration?**

Add-on runs on Google cloud platforms server, and no Google data is saved except for Webex meeting info (subject, invitee list) which is stored in Webex backend and deleted after a scheduled meeting ends. 

See <https://help.webex.com/ituhp0>.

**How do we secure customer data that we “pull” from this integration?**

We only collect data that we need, and we only store it as long as we need to.

We collect Webex meeting information and store it in the Webex cloud. We delete the meeting information after a given period of time, which you control with your Webex retention policy.

**Do we use a public or private API to connect to the Google service ?**

Addon runs on Google cloud platform and access to Google’s built-in libraries directly.

See <https://developers.google.com/apps-script/overview>.
