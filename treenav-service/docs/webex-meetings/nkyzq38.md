---
title: "Microsoft 365 Permissions Requested by Webex"
product: "Webex Meetings"
article_id: "nkyzq38"
url: "https://help.webex.com/en-us/article/nkyzq38/Microsoft-365-Permissions-Requested-by-Webex"
last_updated: "2025-04-16"
description: "When you authorize Webex with a tenant administrator account to access Webex
account information in your Microsoft 365 tenant, we request permissions to
access user data. Find out more information about each permission that we
request and why it&#x27;s required."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Microsoft 365 Permissions Requested by Webex

## Webex Scheduler Authorization Permissions for Tenant Administrators

When you add an authorization for Webex to a Microsoft tenant, we request the following permissions:

The following table describes each permission and why it's required.

| Permission name                            | Claim value         | Permission type | What information does this give Webex access to?                                                                                                       | How is this permission used for Webex Meetings?                                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Read and write calendars in all mailboxes. | Calendars.ReadWrite | Application     | Microsoft 365 add-in to schedule a meeting, Webex app scheduling/list meeting, Microsoft Teams integration, and Calendar Services scheduling (@webex). | Read and write access to create, update, and delete calendars associated with Webex Meetings. Allows scheduling from Microsoft Teams and add, update, and remove corresponding calendar entries.                                                                  |
| Read directory data.                       | Directory.Read.All  | Application     | Required for the People Insights feature and Microsoft Teams integration.                                                                              | Allows People Insights to populate meeting participants' profiles in Webex Meetings and users' People Insights profiles in Webex from the directory. Allows Microsoft Teams integration to populate look-ahead of invitee emails when scheduling a Webex meeting. |
| Sign in and read user profile.             | openid              | Delegated       | Automatically included permission required for the Webex Meetings integration to function properly.                                                    | Allows Webex to identify users over time and access basic information.                                                                                                                                                                                            |
| View users' basic profile                  | profile             | Delegated       | Automatically included permission required for the Webex Meetings integration to function properly.                                                    | Means the user does not have to sign in to their Microsoft account to use the Webex Scheduler.                                                                                                                                                                    |
| Read all users’ full profiles.             | User.Read.All       | Application     | Required for the People Insights feature and Microsoft Teams integration.                                                                              | Enables People Insights for Webex Meetings and Webex users. Identifies users and their email addresses so we can match users’ Webex accounts in the Cisco Webex Meetings bot and tab integration in Microsoft Teams.                                              |

## Webex Scheduler Authorization Permissions for Individual Microsoft 365 Accounts

When you authorize Webex for an individual Microsoft 365 account, we request the following permissions:

The following table describes each permission and why it's required.

| Permission                                           | Claim value         | What information does this give Webex access to?                                                                                                                               | How is this permission used for Webex Meetings?                                                                                                                                                                                                                  |
| ---------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Maintain access to data you have given it access to. | offline\_access     | Allows Webex to access users information in Microsoft without asking for the same permission each time a user performs an action with Webex Meetings integration in Microsoft. | If your app doesn't explicitly request this scope, it won't receive refresh tokens. Maintaining the access is necessary. For example, Webex will call Microsoft APIs to retrieve information such as calendar invites whenever a user is viewing their calendar. |
| Have full access to your calendars.                  | Calendars.ReadWrite | Read events in user calendars.                                                                                                                                                 | Read calendar events associated with Webex Meetings, as well as the event properties, like time, attendees, subject, and Webex meeting options.                                                                                                                  |
| Sign you in and read your profile.                   | User.Read           | Automatically included permission required for the Webex Meetings integration to function properly.                                                                            | Allows Webex to identify users over time and access basic information.                                                                                                                                                                                           |

## Webex Scheduler Architecture Overview

The above diagram shows the site admin and individual authorization scenarios for Webex Meetings from Microsoft 365.

1. The site administrator authorizes Webex to access Microsoft 365 administrator tenant data from Cisco Webex Site Administration or Control Hub (optional).
2. An individual authorizes permission for Webex (if admin doesn’t authorize) and connects their Microsoft account with their Webex account.
3. Webex subscribes to calendar changes from Microsoft.
4. A user adds a Webex meeting to a Microsoft Calendar event, updates the time or topic, or copies an event to another date and time.
5. The Webex add-in service receives Microsoft Calendar notifications and syncs data with Webex.

## APIs Used by the Webex Scheduler

The list below provides information on the source file and URL for some of the APIs used by the Webex Scheduler.

| Graph Operation                                                                                                                              | Usage                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [POST /{version}/subscriptions](https://docs.microsoft.com/graph/api/subscription-post-subscriptions?view=graph-rest-1.0&tabs=http)          | Create subscription for a specific user to listen and receive change notifications when calendar resource is changed in Microsoft Graph. |
| [DELETE /{version}/subscriptions/{subscriptionId}](https://docs.microsoft.com/graph/api/subscription-delete?view=graph-rest-1.0&tabs=http)   | Delete a subscription when user signs out or exceeds expiry time.                                                                        |
| [POST /{tenantId}/oauth2/{version}/token](https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow)       | Get access token of specific tenant ID with Add-in certificate as a credential (**in admin authorization mode**).                        |
| [POST /common/oauth2/{version}/token](https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow)           | Get access token of a specific user with refresh token (**in admin authorization mode**).                                                |
| [GET /{version}/users/{user}/events/{id}](https://docs.microsoft.com/graph/api/event-get?view=graph-rest-1.0&tabs=http)                      | Get graph event properties by event ID.                                                                                                  |
| [GET /{version}/users/{user}/events/{id}/instances](https://docs.microsoft.com/graph/api/event-list-instances?view=graph-rest-1.0&tabs=http) | Get occurrence/exception instances by event ID with given time range.                                                                    |
| [GET /{version}/users?$select=email](https://docs.microsoft.com/graph/api/user-list?view=graph-rest-1.0&tabs=http)                           | Get proxy email address for a specific user.                                                                                             |
| [GET /{version}/subscriptions/{subscriptionId}](https://docs.microsoft.com/graph/api/subscription-get?view=graph-rest-1.0&tabs=http)         | Get subscription properties by ID.                                                                                                       |
| [GET /{version}/me](https://docs.microsoft.com/graph/api/user-get?view=graph-rest-1.0&tabs=http)                                             | Get user's proxy address (**in individual authorization mode**).                                                                         |
| [GET /{version}/users/{user}/events](https://docs.microsoft.com/graph/api/user-list-events?view=graph-rest-1.0&tabs=http)                    | List events of a specific user.                                                                                                          |
| [PATCH /{version}/subscriptions/{subscriptionId}](https://docs.microsoft.com/graph/api/subscription-update?view=graph-rest-1.0&tabs=http)    | Renew subscription for a specific user by extending their expiry time.                                                                   |
| [GET /{version}/users/{email}](https://docs.microsoft.com/graph/api/user-get?view=graph-rest-1.0&tabs=http)                                  | Retrieve the Microsoft UPN to maintain user mapping in Webex.                                                                            |
| [GET /{version}/organization](https://docs.microsoft.com/graph/api/organization-get?view=graph-rest-1.0&tabs=http)                           | To identify if current user's email address from client belongs to the authorized organization.                                          |
|                                                                                                                                              |                                                                                                                                          |
