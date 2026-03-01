---
title: "Configure Webex Support in Cisco Webex Site Administration"
product: "Webex Support"
article_id: "jvuzur"
url: "https://help.webex.com/en-us/article/jvuzur/Configure-Webex-Support-in-Cisco-Webex-Site-Administration"
last_updated: "2025-11-18"
description: "Webex site administrators can set up Cisco Webex Support options and preferences
for their support representatives and sessions."
tags: ["webex-support"]
source: "help.webex.com"
---

# Configure Webex Support in Cisco Webex Site Administration

## Set Webex Support Download Options

Users must download, install, and configure Webex Support Manager to use Webex Support. It is automatically installed and updated when users access Webex Support by default, however, users can manually download and run the installer when it is required. 

Site administrators can choose to have users use ActiveX or Java to download the Webex Support client:

- Java: Webex Support runs in a standalone client.
- ActiveX: Webex Support runs in a web browser; however, site administrators can also allow users to download and use an ActiveX-based standalone client.
- Temporary Folder Solution (TFS): Use this option if a company does not permit ActiveX and Java downloads.

| 1 | Sign in to Webex Site Administration and go to Configuration \> Webex Support \> Options.                        |
| - | ---------------------------------------------------------------------------------------------------------------- |
| 2 | In the CSR Preferences section, select one of the following: ActiveX Java client Temporary Folder Solution (TFS) |
| 3 | If you selected Active X and want to enable the standalone client, select Standalone client.                     |
| 4 | Select Update.                                                                                                   |

## Allow Customers to Choose Agents

| 1 | Sign in to Webex Site Administration and go to Configuration \> Webex Support \> Options.                                   |
| - | --------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Customer Preferences section, select Allow customers to join a session by selecting from a list of available agents. |
| 3 | Indicate whether you want agents to be listed by their first or by their full names.                                        |
| 4 | Select Update.                                                                                                              |

## Configure the Video Feed for Webex Support

Set up this feature so that agents can permit customers to send live video feeds during their chat sessions.

| 1 | Sign in to Webex Site Administration and go to Configuration \> Webex Support \> Options.          |
| - | -------------------------------------------------------------------------------------------------- |
| 2 | In the Customer Preferences section, check the Allow customer to send webcam video feed check box. |

## Customize the Webex Support Session Window

The Webex Support session window (dashboard) that customers use to enter messages can be customized. Colors, fonts, graphics, and status message wording can be changed, and a photo can be added.

| 1 | Sign in to Webex Site Administration and go to Configuration \> Webex Support \> Branding.                                                                |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Create New Style.                                                                                                                                  |
| 3 | Enter a name for this new style. You can enter up to 40 characters; do not use any of the following characters in the name: % # ^ { } / \\ \* ? : \| " @. |
| 4 | To change the images that appear on the window, select the Images tab.                                                                                    |
| 5 | To change the header, select the Header tab.                                                                                                              |
| 6 | To change the status messages that appear in the dashboard, select the Messages tab and change the text in the Text Message box.                          |
| 7 | To change the fonts and colors used, select the Fonts & Colors tab.                                                                                       |
| 8 | Select Preview to see the results.                                                                                                                        |
| 9 | Select Save.                                                                                                                                              |

## New Style Tabs

### Images Tab

| To change...    | Do this...                                                                                                                                                                                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Webex logo  | Check the box next to the Webex logo.                                                                                                                                                                                                                                                                       |
| The CSR’s photo | Check the box next to Agent photo. The photo that the CSR has saved on the My Profile page appears when this option is selected.                                                                                                                                                                            |
| A generic photo | Check the box next to Generic photo. The photo that the CSR has saved on the My Profile page appears when this option is selected. To upload a different photo, in the CSR Photo section, select Browse, select one, then select Upload File. The uploaded photo cannot be no longer than 130 x 130 pixels. |

### Header Tab

| To change...                          | Do this...                                                                                                                                                           |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The header title                      | At the Header title section, enter the name (up to 50 characters) to appear in the window header area.                                                               |
| The header height                     | At the Header height section, enter the desired number of pixels.                                                                                                    |
| The header type                       | At the Header type section, select Standard or Custom. If Custom is selected, enter the HTML code in the box and select Upload New Images in the Custom Images box.  |
| The header image                      | Select the Upload icon to upload an image.                                                                                                                           |
| The header using HTML code and images | At the Header type section, select Custom, then: Enter the HTML code in the box. Select Upload New Images to upload any images that are referenced in the HTML code. |

### Fonts & Colors Tab

| To change...            | Do this...                                                                                                                                                                                                  |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Header background color | At the Header background color section, enter the hex color value or select the color box and select one from the palette.                                                                                  |
| Header border color     | At the Header border color section, enter the hex color value or select the color box and select one from the palette.                                                                                      |
| Header border width     | At the Border Width section, enter the width of the line that surrounds the header (enter "0" for no border).                                                                                               |
| Header title color      | At the Header title color section, enter the hex color value or select the color box and select one from the palette.                                                                                       |
| Header font             | At the Font, enter the HTML code to specify the default and alternate font, weight and size. For example: font-family: verdana; font-size: 12px; font-weight: bold; padding-right: 12px; padding-top: 12px; |
| Background color        | At Background color (dashboard) and Background color (web page), indicate the color to use for the dashboard and web page; enter a hex color value or select the color box and select one from the palette. |
| Text colors             | At Text color (dashboard) and Text color (web page), indicate the color to use for the dashboard and web page; enter a hex color value or select the color box and select one from the palette.             |

## Specify Options for Sharing CSR Applications

You can override these options for individual support representatives by editing their user accounts. 

| 1 | Sign in to Webex Site Administration and go to Configuration \> Webex Support \> Options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the CSR Preferences section, select the CSR Dash Customization link.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3 | To specify how shared applications appear, select one of the following: Full screen - scale to fit: Display in full-screen view Full screen: Use all available space to display shared application or desktops. Window - scale to fit: Expand to fill the window. Window: Specifies that a shared application or desktop appears in a window on the support representative's or customer's screen. However, the size of the application or desktop does not expand to fill the window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4 | To specify the quality of the color used to display shared applications, select one of the following: 256 colors: Specifies that a shared application or desktop appears in 256 colors in the viewer or the support representative's or customer's screen. This option requires less bandwidth for sharing applications or desktops than does the High color option. Thus, this option is useful if a customer is using a dial-up connection to attend a support session. If this option is selected, select the Screen Sampling display mode as the default mode for your site. A support representative can change the display mode during a support session, by selecting the Session tab on the CSR Dashboard, and then selecting Session Options. High color (16 bit): Specifies that a shared application or desktop appears in 16-bit color in the viewer or the support representative's or customer's screen. This option requires more bandwidth than the 256 color option, but provides better imaging quality |
| 5 | Select Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Document Sharing

Site administrators can specify how to share documents and web content during support sessions: 

- Document sharing: users can view presentation documents, training documents, and meeting handouts.
- Remote printing: documents that reside on a user's computer can be printed on a site administrator's own local printer.

 Remote printing is not available with Document sharing. 

| 1 | Sign in to Webex Site Administration and go to Configuration \> Webex Support \> Options.                                                                                                                                                                                                                                                                                                                                                               |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the CSR Preferences section, select the CSR Dash Customization link.                                                                                                                                                                                                                                                                                                                                                                                 |
| 3 | To specify content sharing, select from the following: Document sharing: Check this check to share documents and presentations. Checking this option unchecks the "Remote printing" option. The default value is enabled. Remote printing: Check this check box to print documentation from the user's computer to your printer. Checking this option unchecks the "Document sharing" and "Web content sharing" options. The default value is disabled. |
| 4 | Select Save.                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Automatically Record CSR Sessions

When sessions end, Webex Support saves the recording to a specified location and with the session number that is indicated in the filename: SessionNumber.wrf. 

If this option is enabled, CSRs cannot start the Webex Recorder manually during support sessions. 

| 1 | Sign in to Webex Site Administration and go to Configuration \> Webex Support \> Options.                         |
| - | ----------------------------------------------------------------------------------------------------------------- |
| 2 | Under CSR Preferences, select the CSR Dash Customization link.                                                    |
| 3 | Check Enforce recording automatically when meeting starts to automatically begin recording when a meeting begins. |
| 4 | Select Network-based recording (NBR) or Save recording at local computer.                                         |
| 5 | Specify the location to save session recordings.                                                                  |
| 6 | Select Save.                                                                                                      |

## Allow Chat Contextual Switching

 This feature is only available if it is provisioned for a Webex site. The default setting is off. 

For Webex Support sessions with only two participants (host and attendee), you can turn on the setting that enters the specific name of the participant receiving a chat: 

- The Send to label changes from "All Participants" to the specific host or attendee name.
- Sent char messages that are are preceded by "...to \[_participant\_name_\]" instead of "...to All Participants."

| 1 | Sign in to Webex Site Administration and go to Configuration \> Webex Support \> Options.                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under CSR Preferences, select the CSR Dash Customization link.                                                                      |
| 3 | Check Allow chat contextual switching to replace the "All Participants" with the actual name of the participant receiving the chat. |
| 4 | Select Save.                                                                                                                        |

## Automatically End Inactive Sessions

If a support representative is inactive for a specified period during a session, Webex Support can automatically end the session. Before the session ends, Webex Support can warn the CSR that the session will automatically end unless the CSR asks that the session is continued. 

| 1 | Sign in to Webex Site Administration and go to Configuration \> Webex Support \> Options.                                                                                  |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the CSR Preferences section, select CSR Dash Customization.                                                                                                             |
| 3 | In the Features section, select Alert the agent if the support session is idle for more than, and then enter the number of minutes to wait before ending the session.      |
| 4 | To have the session end if the CSR doesn’t respond, select Automatically end session if agent doesn’t respond to alert after and then enter the number of minutes to wait. |
| 5 | Select Save.                                                                                                                                                               |

## Customize Instructions for Customer Support Representatives

Webex Support provides instructions that a support representative can follow to help a customer join a support session and to use support options. CSRs can access these instructions by selecting the Instructions link on the CSR Dashboard. 

Plain text or HTML-formatted instructions can be prepared in another application, and then copy and pasted into the box on this page.

| 1 | Sign in to Webex Site Administration and go to Configuration \> Webex Support \> Options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the CSR Preferences section, select CSR Dash Customization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3 | In the Instructions section, select Custom instructions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 4 | Select one of the following: Plain text: the instructions are not formatted. You can enter up to 2000 characters. HTML: you can format the instructions to add numbered lists and bullets, align the text, add horizontal lines, backgrounds, and any formatting possible with HTML coding. You may enter up to 4000 characters.  The default instructions include the variable %SessionID%, which Webex Support automatically replaces with the support session number. If you remove this variable from the message, users have to enter the session ID before they can join a session. Therefore, we recommend that you include this variable in your custom instructions. |
| 5 | Enter your instructions in the box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 6 | Select Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
