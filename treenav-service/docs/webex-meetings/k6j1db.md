---
title: "Configure Third-Party Integrations on a Webex Site"
product: "Webex Meetings"
article_id: "k6j1db"
url: "https://help.webex.com/en-us/article/k6j1db/Configure-Third-Party-Integrations-on-a-Webex-Site"
last_updated: "2024-09-15"
description: "Site administrators can allow their users to integrate Google accounts,
Microsoft Office 365 accounts, Facebook accounts, and other third-party
applications with their Cisco Webex account."
tags: ["webex-meetings", "webex-events-(classic)", "webex-suite", "webex-webinars"]
source: "help.webex.com"
---

# Configure Third-Party Integrations on a Webex Site

## Enable Microsoft Office 365 Account Integration

| 1 | Sign in to Webex Site Administration, and select Configuration \> Common Site Settings \> Options. Scroll to the Third-Party Integration section.                                                                                                                                                                                                                                                                    |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Microsoft Office 365 section, check the Sign in check box to allow users to map their Office 365 credentials with their Webex credentials.                                                                                                                                                                                                                                                                    |
| 3 | If a user's Office 365 and Webex email addresses are the same, select whether to automatically link their accounts together by checking the Automatically link users with this Webex site if their Webex account email address matches their Microsoft Office 365 email address check box. If automatic linking is not enabled, users will have to authorize their Webex account to access their Office 365 account. |
| 4 | Select Update.                                                                                                                                                                                                                                                                                                                                                                                                       |

## Enable G Suite Account Integration

| 1 | Sign in to Webex Site Administration, and select Configuration \> Common Site Settings \> Options. Scroll to the Third-Party Integration section.                                                                                                                                                                                                                                                |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | In the Google section, check the Sign in check box to allow users to map their G Suite credentials with their Webex credentials.                                                                                                                                                                                                                                                                 |
| 3 | To integrate a user's Google Calendar with their Webex account, check the Calendar check box.                                                                                                                                                                                                                                                                                                    |
| 4 | To allow specific users to integrate their G Suite accounts, check the Restrict the integration to users in these G Suite domains: check box, and enter the domains names.                                                                                                                                                                                                                       |
| 5 | If a user's G Suite and Webex email addresses are the same, select whether to automatically link their accounts together by checking the Automatically link users with this Webex site if their Webex account email address matches their G Suite email address check box. If automatic linking is not enabled, users will have to authorize their Webex account to access their Google account. |
| 6 | Select Update.                                                                                                                                                                                                                                                                                                                                                                                   |

## Enable Facebook Account Integration

| 1 | Sign in to Webex Site Administration, and select Configuration \> Common Site Settings \> Options. Scroll to the Third-Party Integration section.  |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Facebook section, check the Sign in check box to allow users to automatically link their Facebook credentials with their Webex credentials. |
| 3 | Select Update.                                                                                                                                     |

## Enable Third-Party Apps Using REST API

Site Administrators can allow integrations developed by customers or third parties to function for users on their site. If disabled, users from this site will be unable to log into any apps or tools that were built by customers or third parties with Webex Meetings integrations that have leveraged a registered Webex OAuth client ID and Webex OAuth authorization code flow to access meeting resources using the REST APIs.

| 1 | Sign in to Webex Site Administration, and select Configuration \> Common Site Settings \> Options. Scroll to the Third-Party Integration section.                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Check the Enable 3rd party apps and developers to integrate with Webex Meetings, using REST APIs box to allow users to use applications or tools developed using Webex REST API. |
| 3 | Select Update.                                                                                                                                                                   |
