---
title: "Configure emergency call notifications in Control Hub"
product: "Webex Calling"
article_id: "nj0abhbb"
url: "https://help.webex.com/en-us/article/nj0abhbb/Configure-Emergency-Call-Notifications-in-Control-Hub"
last_updated: "2025-09-24"
description: "An administrator receives an email notification when calling from an
organization to emergency services, to follow Public Law 115-127, also known as
Kari’s Law. You can enable or disable email emergency call notifications across
all locations or enable notifications for selected locations."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Configure emergency call notifications in Control Hub

## Emergency call notification details

When an emergency call is made, an email notification is sent to the specified email address. Make sure your users are aware of this behavior before you turn this feature on. The notification includes: 

- Date and start time of the emergency call
- Dialed number
- User’s ID, first and last name
- User’s extension (if assigned)
- User’s phone number (if assigned)—The user’s assigned phone number and may not correspond to the phone number set as the caller ID and passed as a callback number to emergency services. If the caller is extension only, only the extension is provided in the notification.
- Location ID and name—The information about the location the user is assigned to.
- Location address—The main address defined for the location the user is assigned to. This location may not correspond to the physical location where the emergency call was placed.

The email generated is available in English only. Translation of the Emergency Call Notification email is not currently supported. 

The From: address in the Notification email is a non-editable do-not-reply email address. 

By default, Emergency Call Notifications is disabled.

Want to see how it's done? Watch this [video demonstration](https://www.youtube.com/watch?v=pTc37U1Cfk4) on how to configure emergency call notifications in Control Hub. 

## Allow individual locations to turn on emergency notifications

You can enable individual locations to turn on Emergency Call Notifications. This is helpful for when individual locations would like the email notification sent to specific email addresses. Before this setting can be configured at the location level, it must first be turned on at the organization level.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                        |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Services \> PSTN & Routing \> Settings, and then scroll to Emergency call notification.                                                                                                                                                                                                                                             |
| 3 | Toggle on Emergency call notification and then choose Allow individual locations to turn on notification.                                                                                                                                                                                                                                 |
| 4 | Once enabled for individual locations to turn on notifications, go to Management \> Locations, and then select the location to modify.                                                                                                                                                                                                    |
| 5 | Under Emergency Calling, click Emergency Call Notification.                                                                                                                                                                                                                                                                               |
| 6 | Toggle on Emergency call notification, if applicable.                                                                                                                                                                                                                                                                                     |
| 7 | Select how you want Emergency Call Notifications to be sent for this location: Location specific email—If you select this option, enter the email address where all emergency call notifications will be sent. Organization’s default email—This option is disabled if it is not set up at the organization level under Service Settings. |

## Turn on email notifications for all locations

You can set up an email notification to apply to all locations within an organization.

| 1 | Toggle on Emergency call notification and then choose Turn on email notifications for all locations. |
| - | ---------------------------------------------------------------------------------------------------- |
| 2 | Enter the email address where all emergency call notifications will be sent.                         |

What to do next

When this setting is applied, emergency call notifications for all locations within this organization go to the email address configured in the previous step. If you wish to choose a different notification email address for a specific location, go to Management \> Locations. Select the Calling tab and choose Emergency Call Notification in the Emergency Calling section and update the changes.

## Testing

Locations in the United States and Canada support the use of 933 as a North American emergency test number. This number allows testing of the emergency call email generation by dialing 933, without alerting public safety personnel.

Depending on you PSTN/emergency services provider, you may have other emergency call test capabilities.
