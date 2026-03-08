---
title: "Set up and manage your notifications"
product: "Webex Contact Center"
article_id: "hdoryv"
url: "https://help.webex.com/en-us/article/hdoryv"
last_updated: "2025-11-21"
description: "The way you configure your notifications determines how and when you get
alerted. Set how your notifications appear to help avoid receiving too much
information."
tags: ["webex-contact-center", "webex-suite"]
source: "help.webex.com"
---

# Set up and manage your notifications

## Toaster notifications

Toaster notifications are browser-specific. They appear only when the Desktop browser tab is open in the background and not the active browser window or tab. Desktop becomes inactive in the following circumstances: 

- You’re using other browser windows or tabs.
- You’re using other applications.
- You minimize the Desktop window.

When Desktop isn’t active, a sound notification on the browser taskbar alerts you based on your configured settings. Click the notification to make Desktop active. 

- Your operating system and browser settings determine how the toaster notification appears.
- The operating system and the browser must have toaster notification permissions enabled.
- Allow browser permissions when prompted.
- The position of these notifications depends on your specific operating system.
- Toaster notifications replace existing notification pop-ups.

## Chrome Settings

On Windows 10 and 11, notifications may not appear in the browser. To make the notifications appear correctly and not in the built-in notification pane, 

1. Open your browser's menu and go to Settings.
2. Select Privacy and security.
3. Click Site Settings.
4. Scroll down to the Permissions section and select Notifications.
5. Under 'Default behavior,' choose Don’t allow sites to send notification option.

If you're not using Google Chrome, see your browser's documentation for instructions.

## Desktop notifications

Desktop notifications are displayed in the built-in notification panel. Note the following notification behaviors: 

- Notifications can be stacked.
- Notifications can be automatically dismissed or closed.
- Your administrator sets how many notifications can appear and how long it takes for them to close.

### Handle sensitive data in toaster and desktop notifications

If the administrator has enabled **Senstive data** setting, various types of personally identifiable information (PII) and payment card information (PCI) are masked in toaster and desktop notifications. However, PCI information is masked only for social media channels. The following table provides more detailed information.

| Notification                                            | Restricted data                                                                                                                                                                                                                |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Audio call and SMS                                      | Only the last four digits remain visible and the PII information remains masked.                                                                                                                                               |
| Email                                                   | Only the domain name remains visible. Also, PII and PCI in toaster and desktop notifications remain hidden.                                                                                                                    |
| WhatsApp Business, LiveChat, Apple Message for Business | If the sender's name is set as a number, only the last four digits remain visible. In the case of an email in LiveChat, only the domain name is visible. Also, PII and PCI in toaster and desktop notifications remain hidden. |

## Enable or disable notification settings

Notifications keep you in the loop by alerting you to new events that require your attention, such as alerts, new messages, and state changes on Desktop.

Before you begin

[Sign in to Webex Contact Center Agent Desktop](https://help.webex.com/article/n6lmci8).

| 1 | Click User Profile.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the User Settings section, click Notification Settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3 | Toggle Enable Notifications to on. By default, the Enable Notifications toggle is on and the notification center icon displays in the horizontal header. The changes you make are retained until you clear the browser cache or switch browsers. When you sign out and sign in again, the notification settings revert to their default values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4 | Toggle Enable Silent Notifications  to control the display of alerts. Enabling silent notifications delivers alerts to the notification center. By default, the Enable Silent Notifications toggle is off. The changes you make are retained until you clear the browser cache or switch browsers. When you sign out and sign in again, the notification settings revert to their default values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5 | Toggle Enable Sound Notifications to enable or disable sound notifications. You can adjust the volume using the slider. Click ![Speaker icon.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/500001-600000/510001-520000/510001-511000/510944.jpg) to mute or click ![Speaker off icon.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/500001-600000/510001-520000/510001-511000/510974.jpg) to unmute the sound.Click ![Play icon.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/500001-600000/510001-520000/510001-511000/510945.jpg) to listen to the default sound. By default, the Enable Sound Notifications toggle is on, and the volume is set to 80 percent. The changes you make are retained until you clear the browser cache or switch browsers.                                                                                                                              |
| 6 | Toggle Manage Webex Calling calls in Agent Desktop to on. By default, the Manage Webex Calling calls in Agent Desktop toggle is off. The changes you make are retained until you clear the browser cache or switch browsers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 7 | Toggle Manage Webex Calling calls in Agent Desktop to on. By default, the Manage Webex Calling calls in Agent Desktop toggle is off. If you have Webex Calling enabled, you can answer or decline these calls from a popover notification in Webex Contact Center. Incoming calls will still ring in the Webex App and on your device, if available. When the Agent Desktop browser tab is inactive or minimized, the 'Answer' button for incoming calls will not be visible within the tab itself. To ensure you receive critical alerts and don't miss calls, you must enable system-level browser notifications. The steps to configure these essential notifications are the same whether you are using Webex Calling feature or a pure WebRTC setup. For detailed instructions on how to set up these system-level browser notifications, refer to [WebRTC notification settings](#task-template%5F5257303e-d366-4ee5-9247-baad0f5044a1). |

## WebRTC Notification Settings

To ensure that you receive notifications consistently, you must check your settings, specifically the **Do not disturb** option for notifications. The **Do not disturb** option suppresses notifications to minimize distractions. However, you can configure it to receive notifications. 

To turn on the **Do not disturb** option on Windows:

1. Click Settings \>  System \>  Notifications.
2. Turn on the **Do not disturb** toggle.

**Set notifications on the Chrome browser**

1. Open the Chrome browser and click Settings \>  Privacy and security \>  Site settings \>  Notifications.
2. Click **Add** next to **Allowed to send notifications**.
3. Enter the URL of the site.
4. Click **Add**.

**Set notifications on the Microsoft Edge browser**

1. Open the Edge browser and click Settings \>  Cookies and site permissions \>  Notifications.
2. Under Allow, enter the URL of the site.
3. Click Add.

**Set notifications on the Firefox browser**

1. Open the Firefox browser and click Settings \>  Privacy & Security \>  Permissions.
2. Scroll to Permissions.
3. Click Settings to the right of Notifications.
4. Choose Allow or Block from the Status drop-down for any of the websites.

**Set the duration of notification display on Windows.**

1. Click Settings \>  Accessibility \>  Visual effects.
2. In the **Dismiss notifications after this amount of time** drop-down list, choose an option to define how long notifications are displayed.

If you’re customizing your desktop layout, first download the default desktop layout. Ensure that the time in `"browserNotificationTimer"` of the Desktop Layout is equal to the time you selected above.

- [Agent Desktop ](#agent-desktop)
- [Supervisor Desktop ](#supervisor-desktop)

You can receive notifications from calls, chats, emails, and social messaging conversations. The notification includes the customer's name, phone number, chat message, or request for information. However, if the administrator has enabled **Senstive data** setting, then ANIs, DNIS (for outgoing calls), and username in the email addresses remain masked in the notifications. 

The notification includes the customer's name, phone number, chat message, or request for information. For example:

| Action                                                                                    | Notification                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When a call recording is resumed.                                                         | **Auto Resume Recording** Recording will resume in 5 seconds.                                                                                                                                                                                                                          |
| When multiple users edit the Call Associated Data (CAD) variable values at the same time. | **Customer Information has been Updated** Your changes are overwritten with the updated call data.                                                                                                                                                                                     |
| When a screen pop is delivered successfully to you.                                       | **Screen Pop Delivered** Screen pop has been delivered to you. **Reopen Screen Pop** or <Screen Pop hyperlink> Based on the routing configuration that your administrator has set in Flow Designer, you can see either the customized display text or the Reopen Screen Pop hyperlink. |
| When another agent accepts your consult request.                                          | **Consult Connected** Your consult request has been accepted.                                                                                                                                                                                                                          |
| When another agent accepts your conference request.                                       | **Conference Connected** Your conference request has been accepted.                                                                                                                                                                                                                    |
| When a consult call request is put on hold.                                               | **Consult Call on Hold** Your consult call has been put on hold.                                                                                                                                                                                                                       |
| When a call is automatically wrapped up.                                                  | **Auto Wrap Up** Your call has been wrapped up automatically.                                                                                                                                                                                                                          |
| When you receive a chat message from the customer.                                        | **Messages from John Doe** Ok I got it. Thank you!                                                                                                                                                                                                                                     |
| When you send an attachment to the customer.                                              | **Messages from John Doe** Sent an attachment.                                                                                                                                                                                                                                         |
| When you send the conference chat message to another agent.                               | **Messages from Barbara Hecker** Hey, this is Barbara Hecker. How may I ...                                                                                                                                                                                                            |
| When the customer ends a chat message.                                                    | **End Chat from Jason Welch** Your chat has ended.                                                                                                                                                                                                                                     |
| When you change your team.                                                                | **Changed Team Successfully** You’re now signed in to Sales\_Team.                                                                                                                                                                                                                     |
| When you receive an incoming call from the Webex App.                                     | **Incoming Call from Jane Doe** 00:02                                                                                                                                                                                                                                                  |
| When you receive a chat message from the Webex App.                                       | **Message from John Doe** Ok I got it. Thank you!                                                                                                                                                                                                                                      |
| When you receive a meeting request from the Webex App.                                    | **Incoming Meeting from Jane Doe's Personal Room** 00:02                                                                                                                                                                                                                               |
| When a supervisor changes your state from the Supervisor Desktop.                         | <Supervisor name> changed your state to Available.                                                                                                                                                                                                                                     |
| When a supervisor signs you out from the Supervisor Desktop.                              | **Sign Out** You’ve been signed out by <Supervisor name>. Contact the supervisor or administrator for assistance.                                                                                                                                                                      |

You can receive notifications from calls, chats, emails, and social Messaging conversations. The notification includes the customer's name, phone number, chat message, or request for information. For example: 

| Action                                                                               | Notification                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Your administrator updates the team's list that you manage.                          | Open Managed Teams Your managed teams list is updated by the administrator.                                                                                                                                                                                                                                                               |
| A call recording is resumed.                                                         | Auto Resume Recording Recording will resume in 5 seconds.                                                                                                                                                                                                                                                                                 |
| Multiple users edit the Call Associated Data (CAD) variable values at the same time. | Customer Information has been Updated Your changes are overwritten with the updated call data.                                                                                                                                                                                                                                            |
| A screen pop is delivered successfully to you.                                       | Screen Pop Delivered Screen pop has been delivered to you. Reopen Screen Pop or <Screen Pop hyperlink> Note_: Based on the routing configuration that your administrator has set in Flow Designer, you can see either the customized display text or the Reopen Screen Pop hyperlink._                                                    |
| Another agent accepts your consult request.                                          | Consult Connected Your consult request has been accepted.                                                                                                                                                                                                                                                                                 |
| Another agent accepts your conference request.                                       | Conference Connected Your conference request has been accepted.                                                                                                                                                                                                                                                                           |
| A consult call request is put on hold.                                               | Consult Call on Hold Your consult call has been put on hold.                                                                                                                                                                                                                                                                              |
| A call is automatically wrapped up.                                                  | Auto Wrap-Up Your call has been wrapped up automatically.                                                                                                                                                                                                                                                                                 |
| You receive a chat message from the customer.                                        | Messages from John Doe Ok, I got it. Thank you!                                                                                                                                                                                                                                                                                           |
| You send an attachment to the customer.                                              | Messages from John Doe Sent an attachment.                                                                                                                                                                                                                                                                                                |
| You send the conference chat message to another agent.                               | Messages from Barbara Hecker Hey, this is Barbara Hecker. How may I ...                                                                                                                                                                                                                                                                   |
| The customer ends a chat message.                                                    | End Chat from Jason Welch Your chat has ended.                                                                                                                                                                                                                                                                                            |
| You change your team.                                                                | Changed Team Successfully You are now signed in to Sales\_Team.                                                                                                                                                                                                                                                                           |
| You receive an incoming call from Webex App.                                         | Incoming Call from Jane Doe 00:02                                                                                                                                                                                                                                                                                                         |
| You receive a chat message from Webex App.                                           | Message from John Doe Ok, I got it. Thank you!                                                                                                                                                                                                                                                                                            |
| You receive a meeting request from Webex App.                                        | Incoming Meeting from Jane Doe's Personal Room 00:02                                                                                                                                                                                                                                                                                      |
| You receive a scheduled meeting request from Webex App.                              | Scheduled Meeting for Demo In 5 minutes Note_: When the meeting name for a scheduled meeting is not defined, the default personal room name is displayed as the notification header. For example, Jane Doe's Personal Room._ If the meeting has started, the remaining time is replaced with the text Now. Scheduled Meeting for Demo Now |
| You sign out an agent.                                                               | **Agent Sign Out** <Agent name> is signed out successfully.                                                                                                                                                                                                                                                                               |

## Access your notification center

Desktop notifications inform you when new events occur that may require your attention. If you miss a notification, you can review it later in your notification center. Notifications include alerts, new messages, state changes, and more.

Before you begin

Make sure that you select the Enable Notifications option under the notification section to access the notification center. Learn more about notification settings in [Set up and manage your notifications](https://help.webex.com/article/hdoryv/).

| 1 | Click ![Notification icon.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/500001-600000/510001-520000/510001-511000/510938.jpg) in the horizontal header. The list of all unread notifications is displayed, along with the time elapsed after each notification.                                                                                                                                                                                                                                                                                                                                    |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | (Optional) Click Mark All as Read to mark all of your messages as read and clear the unread notifications. The icon displays a badge indicating the number of unread notifications (for example, ![Notification icon with badge indicator for unread messages.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/500001-600000/510001-520000/510001-511000/510964.jpg)). The desktop notification can be stacked, and can be automatically dismissed or closed by you. Click Ignore Notifications to dismiss the notifications. The desktop notifications are cleared when you sign out of the desktop. |
