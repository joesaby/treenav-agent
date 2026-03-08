---
title: "Hybrid Calendar Service with Google Calendar integration reference"
product: "Hybrid Services"
article_id: "m2az0i"
url: "https://help.webex.com/en-us/article/m2az0i"
last_updated: "2024-09-15"
description: "You don&#x27;t need to miss meetings because they were scheduled in a different app.
You can use the Hybrid Calendar Service to provides a rich collaboration
experience for users and rooms between Webex Meetings and Webex App with
Google’s G Suite Calendar."
tags: ["hybrid-services"]
source: "help.webex.com"
---

# Hybrid Calendar Service with Google Calendar integration reference

## Hybrid Calendar benefits

Currently, the integration provides the following major features:

1. Provide users the ability to schedule a collaboration meeting with any calendar client that connects to Google’s G Suite Calendar (Google Calendar). You don't need to install plug-ins or extensions. Type a keyword into the Location field (for example, @webex or @meet).
2. Show a meetings list to users in the Webex App app (desktop and mobile) and on physical endpoints.
3. Pop up a notification with a Join button, also known as One Button to Push (OBTP).
4. Update a user’s Webex App presence status when the user turns on the [vacation responder](https://support.google.com/mail/answer/25922) in Gmail (sometimes referred to as out-of-office status).

This article gives an overview of how the cloud-based Hybrid Calendar Service integrates Google Calendar with the Webex cloud to provide these features.

For similar overviews of the other Hybrid Calendar Service integrations, see the following articles:

- [Cisco Webex Hybrid Calendar Service with Office 365 integration reference](https://collaborationhelp.cisco.com/article/niqovwv)
- [Cisco Webex Hybrid Calendar Service with Microsoft Exchange integration reference](https://collaborationhelp.cisco.com/article/mwka5l) (for Expressway-based Calendar Connector deployments)

For the latest feature and deployment information, see <https://www.cisco.com/go/hybrid-services-calendar>.

## Data handling

The Hybrid Calendar receives meeting details from the calendar system and uses them as follows:

- checks the meeting location and body for URIs and URLs to join the meeting
- the title of the invite as the meeting title
- the start and end times to show the meeting slot on the meetings list in Webex App and on some devices
- the invitees to populate the participant list in the meetings list
- the invitees to send them the Join button, when it's time to join
- the meeting invite body to populate the Webex meeting agenda

The service sends encrypted data to the Webex cloud (and stores the data in encrypted form) to provide the meetings list and Join button. 

The service does not store or transmit unencrypted data. Sensitive data such as meeting description, meeting body, and email addresses of invitees is always encrypted when stored and transmitted.

The Hybrid Calendar service retains meeting data for a limited time. The stored data covers meetings from 7 days in the past through 31 days in the future.

For data encryption, the Hybrid Calendar uses the same Webex cloud encryption service that Webex App uses. As such, the cloud Key Management Server (KMS) provides key management. If you choose to deploy Hybrid Data Security, your own on-premises KMS provides the key management. (For more details, see the [Webex App Security Paper](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/esp/cisco-spark-security-white-paper.pdf).)

## Authentication and authorization during deployment

The Hybrid Calendar uses the OAuth 2.0 client credentials grant flow to the Google Authorization Server.

### Application authentication process

The Hybrid Calendar registers as an application with Google. It uses a service account with domain-wide delegation to avoid the need for user consent. (For more details, see <https://developers.google.com/identity/protocols/OAuth2ServiceAccount>.)

The Hybrid Calendar must have the following application permissions:

| Permission                                                                        | Usage                                                                                                   |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Manage user calendars <https://www.googleapis.com/auth/calendar>                  | Update the meeting text with the join details. Determine the user's language for localization purposes. |
| Manage basic mail settings <https://www.googleapis.com/auth/gmail.settings.basic> | Read out-of-office status.                                                                              |

In Control Hub, only administrators with privileged access can provision a customer's organization for the Hybrid Calendar . An administrator must copy and paste the client ID and authorization scopes from Control Hub to the Manage API client access  section of the Google G Suite domain's Admin console.

The flow includes the following high-level steps:

1. Using the service account credentials, the application obtains user-level access tokens from the Google Authorization Server to get access to users' calendars.
2. The application uses the access token in Google Calendar API calls, to get access to Calendar information.

### Provisioning process

## Activating users for Calendar access

After successfully provisioning Hybrid Calendar as a registered application, the administrator must explicitly activate users to allow the service to access their respective G suite calendars.

To successfully activate a user for calendar access, the following conditions must be met:

- The user's email address in Control Hub must match their Google calendar account in the organization's Google G Suite tenant.
- The administrator must have [verified the domain](https://help.webex.com/nxz79m5/) in the user's email address, OR the user needs to have verified their email address by successfully signing into Webex App.

Activating a user notifies Hybrid Calendar to validate that it has the correct permissions to access the user's calendar in G Suite.

Successful validation is a requirement for using the Hybrid Calendar functionality. If the service can't validate a user, it puts the user in error state. The service enforces a policy to access only the calendars of successfully activated users for ongoing processing.

## Ongoing operations

The Hybrid Calendar uses the [Google Calendar REST API](https://developers.google.com/calendar/v3/reference/). This API supports a broad range of operations with Google Calendar. However, the Hybrid Calendar only uses a subset of commands that are related to calendar use cases.

__Table 1\. Operations currently used by Hybrid Calendar Service__
| REST API                                                                                                                       | Usage                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                |                                                                                                                                                                                          |
| [GET calendars/{calendarId}/events](https://developers.google.com/calendar/v3/reference/events/list)                           | List of calendar events.                                                                                                                                                                 |
| [GET calendars/{calendarId}/events/{eventId}/instances](https://developers.google.com/calendar/v3/reference/events/instances)  | Instances of the specified recurring event.                                                                                                                                              |
| [GET /calendars/{calendarId}/events/{eventId}](https://developers.google.com/calendar/v3/reference/events/get)                 | Information on a single event in a calendar.                                                                                                                                             |
| [PATCH /calendars/{calendarId}/events/{eventId}](https://developers.google.com/calendar/v3/reference/events/patch)             | Update properties of calendar events (including join information and extended properties). This operation is also used to set accept/decline/tentatively-accept the status of a meeting. |
| [POST /calendars/{calendarId}/events/quickAdd](https://developers.google.com/calendar/v3/reference/events/quickAdd)            | Creates an event based on a simple text string.                                                                                                                                          |
| [POST /calendars/{calendarId}/events/watch](https://developers.google.com/calendar/v3/reference/events/watch)                  | Subscribe for notifications on changes to a user's calendar.                                                                                                                             |
| [POST /channels/stop](https://developers.google.com/calendar/v3/reference/channels/stop)                                       | Unsubscribe from notifications on changes to a user's calendar.                                                                                                                          |
| [GET /users/me/settings/{setting}](https://developers.google.com/calendar/v3/reference/settings/get)                           | Retrieve the user's locale.                                                                                                                                                              |
| [GET /users/{userId}/settings/vacation](https://developers.google.com/calendar/v3/reference/settings/get)                      | Gets the user's vacation responder settings.                                                                                                                                             |
| [POST /calendars/{calendarId}/acl](https://developers.google.com/calendar/v3/reference/acl/insert)                             | Creates an access control rule.                                                                                                                                                          |
| [DELETE /calendars/{calendarId}/acl](https://developers.google.com/calendar/v3/reference/acl/delete)                           | Deletes an access control rule.                                                                                                                                                          |
| [POST /calendars/{calendarId}/events](https://developers.google.com/calendar/api/v3/reference/events/insert?hl=en)             | Creates an event in the calendar.                                                                                                                                                        |
| [DELETE /calendars/{calendarId}/events/{eventId}](https://developers.google.com/calendar/api/v3/reference/events/delete?hl=en) | Deletes an event from the calendar.                                                                                                                                                      |
| [GET /freeBusy](https://developers.google.com/calendar/api/v3/reference/freebusy/query?hl=en)                                  | Displays the user availability and free/busy status for a specified time range.                                                                                                          |
