---
title: "Webex Calling for Chrome"
product: "Webex Calling"
article_id: "a5ormz"
url: "https://help.webex.com/en-us/article/a5ormz/Webex-Calling-for-Chrome-Preview-release"
last_updated: "2025-04-14"
description: "As a Webex Calling user, you can be productive while working in Google Workspace
by placing calls directly from the Google Chrome browser, without the need for a
separate desktop application. Webex Calling for Chrome is available as an
extension in the Google Chrome Web Store. Webex Calling for Chrome delivers a
powerful suite of enterprise calling features through an intuitive,
browser-based softphone."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Webex Calling for Chrome

## Prerequisites

Webex Calling for Chrome is available to all Webex Calling users with a [Professional license](https://help.webex.com/nvzzj7k/). Visit the [Chrome Webstore](https://chrome.google.com/webstore/) and search for Webex Calling for Chrome to add it as an extension into your Chrome and Edge Chromium browser. The extension works on desktop operating systems that support Chrome and Edge Chromium. The following operating systems are supported: 

- Windows 10 and above
- Mac OS version 11 Mountain Lion (or later)
- ChromeOS
- Linux Ubuntu, 22.04.2 or higher

##  Calling features 

Webex Calling for Chrome supports the following calling features:

- Incoming and outgoing calls
- Search for a user in the corporate directory and call from the search results
- Outgoing call from the keypad
- Click to call a phone number from any Google workspace application and Chrome web page
- Receive inbound call notifications in the web client
- Call hold and resume
- View history of placed, received, and missed calls from call history
- Call transfer—Consult first and transfer now
- Voicemail with message waiting indication (MWI) and transcript in the client
- If you have a Webex Calling Professional license, you can now use Webex Calling directly in Chrome.

## Limitations and restrictions

The following are the known limitations and restrictions of Webex Calling for Chrome:

- Calling from the web client uses the system's audio input and output devices. The user cannot select a specific device from the client. If you have multiple devices, for example, a docking station with a monitor, then you must select the audio input or output device of the monitor in the OS settings (such as, Windows settings).
- You can have only one browser client connected to Webex Calling. If you sign in from another instance of the client, you are signed out from the earlier session.
- Web client users in India can’t make or receive PSTN calls.
- For administrators only: If you are using Control Hub to view analytics for Webex Calling for Chrome, the endpoint type within the Call Legs by Endpoint Type section of the Calling Media Quality dashboard displays as Unknown.

The browser application type counts against the per-user limit of 35 shared line appearances. If the Webex Calling for Chrome extension fails to register to Webex Calling, have your administrator do the following: 

1. In Control Hub, go to Calling \> User call experience \> Application line assignment.
2. Check the Web check box.
3. If Web is unchecked, remove some shared line associations.

If you are using an older version of the Webex Call extension, we recommend that you migrate to the Webex Calling for Chrome extension.

- [User](#Cisco%5FReference.dita%5F067c4396-b7da-4b4a-ae5f-7d0ddcfaeac1)
- [Administrator ](#Cisco%5FReference.dita%5F33785217-fb88-4bcc-a544-5a8ff5a57e36)

[Add Webex Calling for Chrome](#ID%5F2703%5F00002540)

Before you begin

You must use the Chrome browser version 104 or later to use Webex Calling for Chrome.

| 1 | Go to the [Google Chrome web store](https://chrome.google.com/webstore/) and search for Webex Calling for Chrome. |
| - | ----------------------------------------------------------------------------------------------------------------- |
| 2 | Click Add to Chrome.                                                                                              |
| 3 | Click Add extension.                                                                                              |
| 4 | (Optional) Pin the extension to the browser tab.                                                                  |

[Sign in to Webex Calling](#ID%5F2703%5F00002540)

| 1 | Click ![Webex icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466809.jpg) on your Chrome browser. |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Enter your email address and click Next.                                                                                                                         |
| 3 | Enter your account password and click Sign in. Once you sign in to Webex Calling for Chrome, you can see your number in the footer.                              |

[Make a call](#reference%5FE3878FEC0609F381BF48A2557A9C851A)

There are several ways to make a call using the Webex Calling for Chrome. 

To call someone, click one of the following menu options:

| Menu          | What to do                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Keypad        | Click ![Dialpad icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466810.jpg). Enter the extension number or the Direct Inward Dial (DID) number of the person you want to call. Click ![Call icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466811.JPG).       |
| Calling       | Click ![Calling icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466812.JPG) on the left navigation bar to navigate to Call History view. Hover over the contact you want to call and click ![Call icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466811.JPG). |
| Click-to-call | Hover over a phone number with E.164 format on Google workspace application and/or web page. Click ![Click-to-call Webex icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469705.jpg).                                                                                                                                         |

[Transfer a call](#wbxch%5Ft%5Ftransfer%5Fa%5Fcall)

There are two ways to transfer a call—Consult First and Transfer Now (known as blind transfer). You can transfer an incoming or outgoing call to another number using Transfer.

To transfer a call, follow these steps:

| 1 | Place a call or answer an incoming call.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From (…), select Transfer. The caller is placed on hold while transferring the call to the intended recipient.                                                                                                                                                                                                                                                                                                                                                                                            |
| 3 | Find or search for the intended recipient during Consult First or Transfer Now using one of the following methods: Directly select the intended recipient in the call history. Type the intended recipient's name in the search bar. If you couldn't find the intended recipient using the above methods, click ![Dialpad icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466810.jpg) and type the phone number of the intended recipient. |
| 4 | Click Transfer Now or Consult First.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5 | If you selected Consult First, wait for the recipient to answer the call. Unanswered calls are forwarded to voicemail.                                                                                                                                                                                                                                                                                                                                                                                    |
| 6 | Once the intended recipient answers the call, click Complete Transfer. After the call transfer, Webex Calling for Chrome displays the initial screen.                                                                                                                                                                                                                                                                                                                                                     |

[Hold or resume a call](#wbxch%5Ft%5Fhold%5Fresume%5Fa%5Fcall)

| 1 | Answer the incoming call.                                                                                         |
| - | ----------------------------------------------------------------------------------------------------------------- |
| 2 | From (…), select Hold. The caller stays connected, but you can't communicate with them until you resume the call. |
| 3 | Click Resume to resume the call.                                                                                  |

[Receive a call](#Cisco%5FTask.dita%5Fad4be3c1-bab2-4f46-a2af-3dddf2270390)

Enable notifications in your operating system and in your Chrome browser to receive a notification on your desktop when there is an incoming call.

To enable notifications in your Chrome browser:

1. Go to Settings \> Privacy and security \> Notifications.
2. Set Default behavior to Sites can ask to send notifications.
3. Add [web.webex.com](http://web.webex.com) under Allowed to send notifications within Customized behaviors.

To enable notifications for your operating system:

- **Windows**—Go to Settings \> Notifications & actions. Make sure that all the required permissions are set in Notifications. Toggle on Google Chrome under Get notifications from these senders.
- **Mac**—Go to System Preferences \> Notifications & Focus. In the application list, click Google Chrome. Toggle on Allow Notifications and select the type of notification Chrome can send.
- **ChromeOS**—Go to the notification area in your system tray or taskbar. Click the clock icon to open a menu. Make sure that the icon Notifications is set to On, all apps. Click Notifications to open the notification settings. Check Chrome Goodies in Allow notifications from the following.

You must allow media permissions for [web.webex.com](http://web.webex.com) to hear the audio notification for a call.

For the chrome extension to autoplay the ringtone while receiving a call, go to Settings \> Privacy and Security \> Site Settigs \> web.webex.com \> Sound and set Sound to Allow.

To answer a call using Webex Calling for Chrome:

| 1 | Click the browser notification on your desktop to restore the Webex Calling for Chrome client. **Browser notification for Windows and ChromeOS** ![Webex Calling for Chrome extension browser notification for Windows and ChromeOS.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469902.jpg) **Browser notification for Mac** ![Webex Calling for Chrome extension browser notification for Mac.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469903.jpg) |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click ![Call icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466811.JPG) to answer the call. ![Webex Calling for Chrome extension Webex window showing an incoming call notification at the top.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469904.jpg)                                                                                                                                                                                                |
| 3 | Click ![End icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469907.jpg) to end the call. ![Webex Calling for Chrome extension active call window.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469905.jpg)                                                                                                                                                                                                                                               |

[Listen to voicemail](#reference%5FE3878FEC0609F381BF48A2557A9C851A)

 shows how many voicemail messages you have. You can listen to your messages at any time. You can also create a personal greeting and customize your voicemail settings from Call Settings.

| Action                              | What to do                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Listen to voicemail                 | Click ![Voicemail icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/380001-390000/381001-382000/381336.jpg) to view and listen to your voice messages. You won't see ![Voicemail icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/380001-390000/381001-382000/381336.jpg), if voicemail isn't enabled for you. Click ![Information icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/472001-473000/472488.png) to go to the voicemail screen. ![Confidential / urgent indicator icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/474001-475000/474700.png) indicates the voicemail is confidential or urgent. You can't forward a confidential voicemail.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| View voicemail actions              | Click ![Play icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466814.JPG) to play your voice message using audio on your computer. Click ![Pause icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/474001-475000/474683.png) to pause and resume the message anytime. Click ![Call icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466811.JPG) to call the person who left this message. Click ![Delete icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/466001-467000/466815.JPG) to delete the voicemail. Click ![More icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/474001-475000/474684.png) and select Mark as Read to mark the voicemail as read. If the voicemail is already read and you want to mark it as unread, click ![More icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/474001-475000/474684.png) and select Mark as Unread. Follow the voice prompts to mark a voicemail as confidential or urgent. |
| View a transcript of your voicemail | A transcript of the voicemail is displayed along with the options listed in the section _View voicemail actions_. You can view the transcript for each of your voicemails while you play the message. The client displays the voicemail transcripts if they are readily available on the server. The following statuses are available for the voicemail transcript: Voicemail is being transcribed. Try again in a few minutes—If the voicemail is still being transcribed. The voicemail could not be transcribed—If there's an issue while transcribing the voicemail. Transcription is not enabled—If transcription is disabled. An error occured while fetching the transcript—If the transcript can't be retrieved from the server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

[Manage call settings](#reference%5FE3878FEC0609F381BF48A2557A9C851A)

You can manage your call settings, such as call forwarding, from [settings.webex.com](https://settings.webex.com/). Go to Call Settings \> More call settings \> Open Webex Calling settings.

| Action                    | What to do                               |
| ------------------------- | ---------------------------------------- |
| View call setting options | At the bottom left, click Call Settings. |

[Access your profile](#Cisco%5FReference.dita%5Ff100da66-19e4-4f6e-992c-8030ae9d56a2)

Click your profile picture in the left navigation bar to access your profile. 

The following actions are available:

| Action        | What to do                                                                             |
| ------------- | -------------------------------------------------------------------------------------- |
| Sign out      | Click Sign out to sign out of Webex Calling.                                           |
| Call settings | Click Call Settings to access and manage call settings for your Webex Calling profile. |

[Minimize Webex Calling for Chrome](#Cisco%5FTask.dita%5F39d6c578-fba2-43a8-9ec9-c3f065749d6b)

You can get notifications for incoming calls while your calling application is in the background.

| 1 | Click Close on your Webex Calling for Chrome client. ![Webex Calling for Chrome extension close notification window with options to 'Minimize Webex' or 'Close Webex'](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469777.jpg) If you don't want this messge to be displayed again, check Don't show this again.                                                                                                                                                                                                                                                                                                                                                         |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Minimize Webex to keep the calling application in the background, or click Close Webex to close it. You won't receive notifications if you select Close Webex. ![Webex Calling for Chrome example of icons that appear in the top, right of your Chrome browser window when Webex is minimized (full-color Webex icon).](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469778.jpg) ![Webex Calling for Chrome examples of icons that appear in the top, right of your Chrome browser window when Webex is closed (white/grayscale Webex icon).](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469779.jpg) |

[Extension options in Webex Calling for Chrome](#Cisco%5FTask.dita%5F15e4b71a-ea2e-46d0-9e1c-564a27833373)

You can customize whether your Webex Calling for Chrome client asks for a confirmation before closing. If this option is enabled, after you click Close, you must confirm that you want to close Webex.

To configure the setting, follow these steps:

| 1 | Right-click the Webex Calling for Chrome icon in your browser. ![Webex Calling for Chrome example of icons that appear in the top, right of your Chrome browser window when Webex is minimized (full-color Webex icon).](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469778.jpg) |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Options. Alternatively, go to Call Settings on your Webex Calling for Chrome client, then click Open Webex extension options.                                                                                                                                                                                                           |
| 3 | Toggle Ask before closing Webex on or off to set your preference. ![Webex Calling for Chrome extension options menu showing the option to 'Ask before closing Webex'](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/470001-471000/470379.jpg)                                                    |

[Disable the desktop browser in Control Hub](#ID%5F2703%5F00002540)

By default, softphone for a browser is enabled for all Webex Calling users with a Professional license. 

To disable it, follow these steps:

| 1 | Sign in to Control Hub, then select Users.                                                                                                                                                                                                                                                                                                                                                                                                |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select a User.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3 | Go to Calling \> User call experience \> Application line assignment.                                                                                                                                                                                                                                                                                                                                                                     |
| 4 | Uncheck Web to disable Webex Calling for Chrome for the selected user. As a Webex Calling administrator, you can use the Chrome Enterprise policy list to push the Webex Calling for Chrome extension remotely to the users' browser. For more information, see [Understand Chrome policy management](https://support.google.com/chrome/a/answer/9037717) and [Chrome Enterprise policy list](https://chromeenterprise.google/policies/). |
