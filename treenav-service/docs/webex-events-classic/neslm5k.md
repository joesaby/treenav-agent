---
title: "Customize Events (classic) Email Invitations"
product: "Webex Events (Classic)"
article_id: "neslm5k"
url: "https://help.webex.com/en-us/article/neslm5k/Customize-Webex-Events-Classic-Email-Invitations"
last_updated: "2024-09-16"
description: "You can customize the email invitation that is sent out to the people you invite
in Events (classic). Customize the email that you send out for a specific event
or for future events."
tags: ["webex-events-(classic)"]
source: "help.webex.com"
---

# Customize Events (classic) Email Invitations

## Email Message Customization

### Specific Event

When you are scheduling or editing an event, you can customize an email message template for the specific event by editing, rearranging, or deleting the content and variables—code text that Events (classic) uses to substitute for your specific user or event information. 

### Future Event

You can customize email message templates for all future events you schedule on your Events (classic) Events site. The changes you make on this level automatically apply to any future event that you schedule. 

You can delete or rearrange variables, but never change the text in a variable. For example, in this variable, %ParticipantName%, do not change the text ParticipantName within the percentage signs. If you change it, Events (classic) cannot substitute the correct text from your user or event information. 

Email templates [can't be edited](https://help.webex.com/WBX9000024181/) on new Webex sites.

## Customize an Email Message for a Specific Event

| 1 | Sign in to your Webex site and click Webex Events (classic).                                                                                                                                                                                                                                                     |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Schedule an Event page or Edit Event page, in the Email Messages section, select the email message that you want to customize.                                                                                                                                                                            |
| 3 | Select a template in the Select email message drop-down list, and then select Edit.                                                                                                                                                                                                                              |
| 4 | Make your changes on the Edit Event Email: \[template name\] page.  We recommend that you set up an email account that you can use exclusively for producing events. You can specify that address in the Reply to email box. For example, you can set up an account with the address _events@your\_company.com_. |
| 5 | Select Save > OK.                                                                                                                                                                                                                                                                                                |

## Customize an Email Message for Future Events

| 1 | Sign in to your Webex site and click Webex Events (classic).                                                                                                                      |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Host an Event > Email Templates.                                                                                                                                           |
| 3 | Choose the type of email message you want to edit in the **For:** drop-down list, and then select one of the templates in the HTML or plain text section, depending on your need. |
| 4 | Select Edit.                                                                                                                                                                      |
| 5 | Make your changes on the Template name: \[template name\] page.                                                                                                                   |
| 6 | Select Save. To revert the email message to its original, default state, select Revert to Default.                                                                                |

## About Variables in an Email Template

A variable is composed of text surrounded by two percentage signs. Each variable used in Events (classic) email templates is replaced in actual messages by corresponding information specified in an attendee’s registration data, in your user profile, on the Event Information page, and so on. 

The following table describes the variables that may require further explanation. 

| This variable              | Is replaced by…                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| %Disclaimer%               | The following text: This Webex service includes a feature that allows audio and any documents and other materials exchanged or viewed during the session to be recorded. By joining this session, you automatically consent to such recordings. If you do not consent to the recording, do not join the session.                                                                                        |
| %DownloadInstruction%      | The following instructions for downloading the Events (classic) application: To join the event more quickly, you can set up the software required to join the event before it starts. Go to the URL above, then select Set Up.                                                                                                                                                                          |
| %EmailFooter%              | The following format: http://www.webex.com                                                                                                                                                                                                                                                                                                                                                              |
| %EnrollmentID%             | The registration ID for the attendee Events (classic) Events automatically creates this ID for an attendee after you approve the registration request. If this event does not require registration, this variable is replaced by the following text: This event does not require a registration ID.                                                                                                     |
| %EventAddressURL%          | A hyperlink You can use this in event descriptions.                                                                                                                                                                                                                                                                                                                                                     |
| %EventPassword%            | The event password that you specified when scheduling the event. If you do not require a password, this variable is replaced by following text: This event does not require a password.                                                                                                                                                                                                                 |
| %JoinURL%                  | A hyperlink You can use this in instructions for joining the event.                                                                                                                                                                                                                                                                                                                                     |
| %JoinURLStr%               | a URL that doesn't contain a hyperlink You can use this in instructions for joining the event. Example. You can use the variable in this way: To join the event, <a href="%JoinURLStr%">go here.</a>                                                                                                                                                                                                    |
| %MeetingInfoURL%           | The URL for the Event Information page for the event. Events (classic) automatically creates the URL once you schedule an event.                                                                                                                                                                                                                                                                        |
| %RegistrationPassword%     | The password you specified for attendees to register for the event                                                                                                                                                                                                                                                                                                                                      |
| %SenderEmailAddress%       | The email address specified on the email server for your Events (classic) site. The default address is: messenger@webex.com                                                                                                                                                                                                                                                                             |
| %TeleconferenceInfo%       | The following text: To join the teleconference, call %CallInNumber% and enter the meeting number. The variable %CallInNumber% is replaced by the numbers that you specified when scheduling the event.                                                                                                                                                                                                  |
| %UCFAttendeeVerifyPlayers% | If UCF is turned on for this event, and you select Request Attendees to verify rich media players when scheduling the event, the following displays: The playback of UCF (Universal Communications Format) rich media files requires appropriate players. To view this type of rich media files in the event, please check whether you have the players installed on your computer by going to \[URL\]. |
| %CmrTitle%                 | The text that comes before the video address in the panelist invitation. For example, "Video Address:"                                                                                                                                                                                                                                                                                                  |
| %VideoAddress%             | The video address used by the panelist to join the event from a video device. May also include an IP address and instructions to dial into the event.                                                                                                                                                                                                                                                   |
| %Panelistkey%              | The text that comes before the panelist password for joining from a video device. For example, "Panelist numeric password:"                                                                                                                                                                                                                                                                             |
| %PanelistkeyValue%         | The password used by the panelist to join the event from a video device.                                                                                                                                                                                                                                                                                                                                |
