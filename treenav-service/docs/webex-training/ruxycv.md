---
title: "Sending Invitations, Reminders, and Registration Notifications in Cisco Webex Training"
product: "Webex Training"
article_id: "ruxycv"
url: "https://help.webex.com/en-us/article/ruxycv/Sending-Invitations-Reminders-and-Registration-Notifications-in-Cisco-Webex-Training"
last_updated: "2024-09-21"
description: "Keep in touch with your attendees by sending invitations, reminders, and
notifications about your upcoming training session."
tags: ["webex-training"]
source: "help.webex.com"
---

# Sending Invitations, Reminders, and Registration Notifications in Cisco Webex Training

## Selecting Email Messages to Be Sent

While you are scheduling your training session, you can select the default email messages that you send to attendees. You can also customize the Webex Training email message templates by editing, rearranging, or deleting the text and variables—code text that Webex Training recognizes and substitutes with your specific training session information. 

- Under Reminder, you can choose to receive an email when an attendee joins a training session.  

  - Notification to Host Upon Attendee Joining a Session

### Send an Invitation to a Training Session

When you select an email message to send, you can send the default email message or choose to customize the message. For details, See About Customizing Email Messages. 

| 1 | On the Schedule Training Session page or the Edit Scheduled Training Session page, select Email options > Edit Email Options.                                                                   |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Invitations, check the box next to any of the following: Invitation to Join a Training Session Invitation to a Training Session in Progress Invitation to Register for a Training Session |
| 3 | Select Schedule or Update.                                                                                                                                                                      |

### Send an Update to a Scheduled Training Session

| 1 | On the Schedule Training Session page or the Edit Scheduled Training Session page, select Email options > Edit Email Options.                                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Updates, check the box next to any of the following: Training Session Rescheduled Updated Information to Join a Training Session Updated Information to Register for a Training Session Training Session Canceled |
| 3 | Select Schedule or Update.                                                                                                                                                                                              |

### Send a Registration Notification to a Scheduled Training Session

| 1 | On the Schedule Training Session page or the Edit Scheduled Training Session page, select Email options > Edit Email Options.                                                                                                                 |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Registrations, check the box next to any of the following: Registration Notification to Host You cannot change this default email message. Attendee Registration Pending Attendee Registration Confirmed Attendee Registration Rejected |
| 3 | Select Schedule or Update.                                                                                                                                                                                                                    |

### Send a Reminder for a Scheduled Training Session

You can send training session notifications to attendees and presenters and to yourself from 15 minutes to 2 weeks before a scheduled training session. When you select an email message to send, you can send the default email message or choose to customize the message. For details, see About Customizing Email Messages. 

| 1 | On the Schedule Training Session page or the Edit Scheduled Training Session page, select Email options > Edit Email Options.                                                                                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Reminder, check the box next to Training Session Reminder to Attendees.                                                                                                                                                                                              |
| 3 | Select the time before a training session that you want notifications to be sent.                                                                                                                                                                                          |
| 4 | To include additional email notifications, select Add another reminder email, and then select the time before a training session that you want this reminder sent.  You can add up to three notification emails.                                                           |
| 5 | Next to Presenters, in the drop-down list, select the time before a training session that you want notifications sent to presenters.                                                                                                                                       |
| 6 | Next to Host, in the drop-down list, select the time before a training session that you want a notification sent to you.                                                                                                                                                   |
| 7 | After via email address, type the email address to which you want your Webex Training to send you a notification, in the following format: name@domain.com. Do not type multiple email addresses in the box. If you do, your WebexTraining does not send the notification. |
| 8 | Select Schedule or Update.                                                                                                                                                                                                                                                 |

### Receive a Notification When an Attendee Joins a Session

| 1 | On the Schedule Training Session page or the Edit Scheduled Training Session page, select Email options > Edit Email Options. |
| - | ----------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Reminder, check Notification to Host Upon Attendee Joining a Session.                                                   |
| 3 | Select Schedule or Update.                                                                                                    |

### About Customizing Email Messages

You can customize the default email messages for your preferences. You can delete variables, but do not change the text within the percentage signs (example, %ParticipantName%). 

If you change these, Training Manager does not substitute the correct text from your profile or registration information. For descriptions of variables, see Email Message Variables. 

You can edit the following options in the Edit Email message window. 

- Email Subject: Specifies the text that appears in the subject line of the email message.  
To specify a new subject, type it into the box.
- Content: Specifies the content of the email message. The default content contains variables, which Webex Training replaces with your training session information. You can rearrange, delete, or replace variables and text with specific information. Do not change the text within a variable.

Email templates [can't be edited](https://help.webex.com/WBX9000024181/) on new Webex sites.

### Customize an Email Message

Email templates [can't be edited](https://help.webex.com/WBX9000024181/) on new Webex sites.

| 1 | On the Schedule Training Session page or Edit Scheduled Training Session page, under Email options > Edit Email Options.                                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the email message that you want to customize.                                                                                                                       |
| 3 | Edit the email message. Be sure not to change the text within a variable. For descriptions of variables, see Email Message Variables.                                      |
| 4 | To save your edited email message, select Update.                                                                                                                          |
| 5 | (Optional) To return the email message to the default message, select Reset to Default. If you select OK, the default email message replaces any edits that you have made. |

### Email Message Variables

Each variable used in Webex Training Email Messages is replaced by corresponding information you provide when scheduling a training session. The following table includes many of these variables and their meanings. 

| This variable…            | is replaced by…                                                                                                                                                                                                                                                                                          | for use in these Email Messages…                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| %EmailFooter%             | A website's email signature.                                                                                                                                                                                                                                                                             | All                                                                    |
| %HostEmail%               | The email address that you specified your user profile.                                                                                                                                                                                                                                                  | All                                                                    |
| %HostName%                | The first and last name that you specified in your user profile.                                                                                                                                                                                                                                         | All                                                                    |
| %ParticipantName%         | First and last names that the participants specified when either enrolling for or joining a training session.                                                                                                                                                                                            | All                                                                    |
| %PhoneContactInfo%        | If you specified a phone number in your user profile, the following text: call %HostPhone%, where %HostPhone% is replaced by the phone number that you specified in your user profile.                                                                                                                   | Attendee Registration Confirmed Training Session Reminder to Attendees |
| %RegistrationID%          | The enrollment ID for the attendee. OnStage automatically creates this ID for an attendee after you approve their enrollment request. If you do not require enrollment for the training session, this variable is replaced by following text: (This training session does not require an enrollment ID.) | Attendee Registration Confirmed Training Session Reminder to Attendees |
| %SessionDateOrRecurrence% | If the session is a single session, then display: \[SessionDate\] If the session is a recurring session or multiple-session course, display: \[SessionRecurrence\]                                                                                                                                       | Attendee Registration Confirmed Training Session Reminder to Attendees |
| %SessionInfoURL%          | The web address, or URL, for the Training Information page for the training session. Training Manager automatically creates the URL once you schedule a training session.                                                                                                                                | All                                                                    |
| %SessionNumber%           | The number of your session specified by Training Manager.                                                                                                                                                                                                                                                | All                                                                    |
| %SessionPassword%         | The password for the training session that you specified when scheduling the training. If you do not require a password, this variable is replaced by the following text: (This training session does not require a password.)                                                                           | Attendee Registration Confirmed Training Session Reminder to Attendees |
| %SessionTime%             | The time that you specified when scheduling the training session in the following format: HH:MM \[am/pm\]For example: 12:30 pm                                                                                                                                                                           | All                                                                    |
| %TeleconferenceInfo%      | The following text: To join the teleconference, call %CallInNumber% and enter the training session number. Where %CallInNumber% is replaced by the number(s) that you specified in the Phone numbers box when scheduling the training.                                                                   | All                                                                    |
| %TimeZone%                | The time zone that you specified when scheduling the training.                                                                                                                                                                                                                                           | All                                                                    |
| %Topic%                   | The training session topic that you specified when scheduling the training.                                                                                                                                                                                                                              | All                                                                    |
