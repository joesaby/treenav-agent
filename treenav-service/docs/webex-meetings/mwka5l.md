---
title: "Hybrid Calendar Service with Microsoft Exchange integration reference"
product: "Webex Meetings"
article_id: "mwka5l"
url: "https://help.webex.com/en-us/article/mwka5l"
last_updated: "2024-09-15"
description: "You don&#x27;t need to miss meetings because they were scheduled in a different app.
You can use Hybrid Calendar to provide a rich collaboration experience for users
and rooms between Webex Meetings and Webex App with Microsoft Exchange."
tags: ["webex-meetings", "hybrid-services"]
source: "help.webex.com"
---

# Hybrid Calendar Service with Microsoft Exchange integration reference

## Hybrid Calendar benefits

Currently, the Hybrid Calendar integration with Microsoft Exchange provides the following major features:

1. Provide users the ability to schedule a collaboration meeting with any calendar client connected to Microsoft Exchange. You don't need to install plug-ins or extensions. Type a keyword into the Location field (for example, @webex or @meet) or put a video address URI or meeting address into the meeting body.
2. Show a meetings list in users' Webex App applications—desktop, mobile, and hard endpoints.
3. Pop up a notification with a Join button, also known as One Button to Push (OBTP).
4. Update a user’s Webex App presence status when the user sets up automatic replies in Outlook (sometimes referred to as out-of-office status).

This article gives an overview of how the Expressway-based Calendar Connector integrates on-premises Microsoft Exchange with the Webex cloud.

For similar overviews of the other Hybrid Calendar Service integrations, see the following articles:

- [Cisco Webex Hybrid Calendar Service with Office 365 integration reference](https://collaborationhelp.cisco.com/article/niqovwv)
- [Cisco Webex Hybrid Calendar Service with Google Calendar integration reference](https://collaborationhelp.cisco.com/article/m2az0i)

For the latest feature and deployment information, see [https:/​/​www.cisco.com/​go/​hybrid-services-calendar](https://www.cisco.com/go/hybrid-services-calendar). 

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

Our Expressway-based connector integrates Webex with supported versions of Microsoft Exchange through an impersonation account. The application impersonation management role in Exchange enables applications to impersonate users in an organization to perform tasks for the user. You configure the application impersonation role in Exchange and use it in the calendar connector for the Exchange configuration on the Expressway-C interface.

[The Exchange impersonation account is Microsoft's recommended method for this task](https://msdn.microsoft.com/en-us/library/office/dn722377%28v=exchg.150%29.aspx). Expressway-C administrators don't need to know the password, because an Exchange administrator enters the value in the Expressway-C interface. The interface obscures the password, even if the Expressway-C administrator has root access to the Expressway-C box. The Expressway-C encrypts the password for storage using the same credential encryption mechanism as other passwords on the Expressway-C.

For more security, enable TLS to secure EWS connections on the wire as outlined in the [Deployment Guide for Webex Hybrid Calendar Service](https://www.cisco.com/go/hybrid-services-calendar).

### Provisioning process

## Ongoing operations

The Hybrid Calendar uses [Exchange Web Services (EWS)](https://docs.microsoft.com/en-us/exchange/client-developer/web-service-reference/ews-operations-in-exchange) to access Microsoft Exchange calendar events. EWS supports a broad range of mailbox operations. However, the Hybrid Calendar uses only a subset of commands for calendar use cases.

__Table 1\. Operations currently used by Hybrid Calendar Service__
| EWS operation                                                                                                                         | Usage                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ConvertId](https://msdn.microsoft.com/en-us/library/office/bb799665%28v=exchg.150%29.aspx)                                           | Simple connectivity check.                                                                                                                                                        |
| [FindItem](https://msdn.microsoft.com/en-us/library/office/aa566107%28v=exchg.150%29.aspx)                                            | Search for events in a user's calendar.                                                                                                                                           |
| [GetFolder](https://msdn.microsoft.com/en-us/library/office/aa580274%28v=exchg.150%29.aspx)                                           | Retrieve details about a calendar folder.                                                                                                                                         |
| [GetItem](https://msdn.microsoft.com/en-us/library/office/aa565934%28v=exchg.150%29.aspx)                                             | Retrieve details about events in a calendar folder.                                                                                                                               |
| [GetStreamingEvents](https://msdn.microsoft.com/en-us/library/office/ff406172%28v=exchg.150%29.aspx)                                  | Receive streaming notifications on calendar events.                                                                                                                               |
| [GetUserOofSettings](https://msdn.microsoft.com/en-us/library/office/aa563465%28v=exchg.150%29.aspx)                                  | Retrieve a user's out-of-office settings.                                                                                                                                         |
| [Subscribe](https://msdn.microsoft.com/en-us/library/office/aa566188%28v=exchg.150%29.aspx)                                           | Subscribe for notifications on changes to a user's calendar.                                                                                                                      |
| [SyncFolderItems](https://msdn.microsoft.com/en-us/library/office/aa563967%28v=exchg.150%29.aspx)                                     | Detect changed meetings when not subscribed (missed, upgrades, and so on).                                                                                                        |
| [Unsubscribe](https://msdn.microsoft.com/en-us/library/office/aa564263%28v=exchg.150%29.aspx)                                         | Unsubscribe from notifications on changes to a user's calendar.                                                                                                                   |
| [UpdateItem](https://msdn.microsoft.com/en-us/library/office/aa581084%28v=exchg.150%29.aspx)                                          | Update properties of calendar events (including join information and extended properties).                                                                                        |
| [CreateItem](https://docs.microsoft.com/en-us/exchange/client-developer/web-service-reference/createitem-operation)                   | Create a new meeting request based on the input the user provides in the Webex client. The system creates new meetings for both organizers and users based on their availability. |
| [GetUserAvailability](https://docs.microsoft.com/en-us/exchange/client-developer/web-service-reference/getuseravailability-operation) | Displays the user availability and free/busy status for a specified time range.                                                                                                   |

The Hybrid Calendar also makes periodic calls to the [Autodiscover service](https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/autodiscover-for-exchange) to locate user mailboxes.
