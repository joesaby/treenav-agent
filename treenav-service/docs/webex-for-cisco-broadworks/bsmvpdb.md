---
title: "Webex App | Known issues"
product: "Webex for Cisco BroadWorks"
article_id: "bsmvpdb"
url: "https://help.webex.com/en-us/article/bsmvpdb"
last_updated: "2026-01-12"
description: "If you&#x27;re experiencing an issue with Webex App, check to see if it&#x27;s something
that we already know about and have a recommended workaround."
tags: ["webex-for-cisco-broadworks", "webex-calling", "webex-suite"]
source: "help.webex.com"
---

# Webex App | Known issues

We’ve organized issues with Webex Meetings into its own article. Check [Known issues with Webex Meetings](https://help.webex.com/ny3ch3m/Known-Issues-for-Cisco-Webex-Teams-Meetings), to see if your issue is listed there.

- [Windows](#concept%5F9158EC3890142632E3FD7D0F7EC362D9)
- [Mac](#concept%5F428C9674F71E5C6F9D971344200A35BF)
- [iOS](#concept%5FAEFAAB7CE0FA19BA7716A4CA4720EDD8)
- [Android](#concept%5F9ADCF3474652B2BCE7F4A9D666793FD6)
- [Web](#concept%5F98B884A2BEDEAF3F1756CD9B93AE29DC)

**The minimum Windows OS version is Windows 10.** 

## Enterprise Content Management with Microsoft OneDrive or SharePoint Online

- When you use OneDrive or SharePoint and you try to share a file or link a folder, you can't access your Recent files or your SharePoint Online folders.

## Updating

- Sometimes Webex App accesses the Microsoft Outlook OST file and you're unable to start Microsoft Outlook.

**Workaround:** Exit Webex App, start Outlook and then restart Webex App.

## Calling

Below, we've indicated which calling service each issue applies to. If you're not sure what calling service you have, see [Webex App | Find Out What Calling Service You Have](https://help.webex.com/nbtgrzx/).

| The following issues apply to Webex Calling and Calling hosted by a Service Provider |
| ------------------------------------------------------------------------------------ |

- When sharing a single application with others, sometimes the shared content isn't visible if the windows of other applications are placed on top of the application being shared.

**Workaround:** Either minimize the call window or move the window away from the shared application view.
- Some incoming calls display as Unknown Caller.
- If you can't place a call over Wi-Fi, your company's firewall may be blocking UDP packets that contain call media or you're using a third-party VPN that doesn't have phone service.

**Workaround:** [Wi-Fi Connection Problems with Webex app](https://help.webex.com/article/en-us/DOC-15200).
- If you close Webex App while you're on a call, the app closes, but the call doesn't end.

**Workaround:** End the call before closing the app window.
- You may experience audio quality issues when using the app to make calls from some laptops:

  - Lenovo Carbon X1, Generations 1 to 4.

    - Generations 1 to 3 require audio driver updates.
    - Generation 4 does not have a solution.
  - Lenovo W54, T430, T450, and S21e require audio driver updates.

**Workaround:** Update the audio drivers to the latest version.
- When you pull a call, \*11 shows in addition to the number of the call you're on.
- The wrong display name shows for conference calls.
- Caller IDs are inconsistent in the call history.
- Three-way calls to extensions don’t work.
- When you share content in a call, participants see a black screen if you're using Windows with an Intel graphics display card, and the display card driver version is between v31.0.101.5590 on 2024/6/11 and 32.0.101.5768 on 2024/7/25.

**Workaround:** Update your Intel graphics driver to the latest version.

**Alternate workaround:** In Webex App, click Settings on the [navigation sidebar](https://help.webex.com/nx3i8h5/). Go to Sharing content \> Advanced settings and check Revert to classic screen sharing. If you use this workaround and have any Webex App windows open on top of the shared content, participants will see a masked area for these windows.

| The following issues apply to Unified CM |
| ---------------------------------------- |

- If you can't place a call over Wi-Fi, your company's firewall may be blocking UDP packets that contain call media or you're using a third-party VPN that doesn't have phone service.

**Workaround:** [Wi-Fi Connection Problems with Webex app](https://help.webex.com/article/en-us/DOC-15200).
- You may experience audio quality issues when using the app to make calls from some laptops:

  - Lenovo Carbon X1, Generations 1 to 4.

    - Generations 1 to 3 require audio driver updates.
    - Generation 4 doesn’t have a solution.
  - Lenovo W54, T430, T450, and S21e require audio driver updates.

**Workaround:** Update the audio drivers to the latest version.
- When you pull a call, \*11 shows in addition to the number of the call you're on.
- The wrong display name shows for conference calls.
- Caller IDs are inconsistent in the call history when one number is shared by more than one person.
- Three-way calls to extensions don’t work.

## Meetings

- When you use the new Outlook for Windows and choose Microsoft Outlook as your meeting scheduler in the Webex App, you may not be able to schedule Webex meetings in Outlook.

**Workaround:** Use either the Webex Scheduler in Outlook or use the Webex in-app scheduler to schedule meetings.
- When viewing upcoming meetings from Webex App, the list of meeting invitees will be incomplete if the meeting was scheduled from the Webex site. For example, only you and the host may be listed.
- If you join a full-featured Webex meeting from Webex App and specify a SIP URI as the call-back option for audio, when you join the meeting, your audio can’t connect and you only have the option to decline the incoming call or leave the meeting.
- When you click the phone number in a Webex meeting email invite, you may get the error, "Invalid number."
- The Remote Desktop Protocol isn’t supported from the Webex App.
- On meeting platforms that support Edge Video Mesh, meeting participants can send messages to users who don't have Messaging enabled, either by selecting their profile picture in chat or searching for them as a contact. The sender isn't notified that the recipient didn't receive and can't read the messages that they sent.
- If you invite more than 500 people to a meeting, in Meetings  \> Calendar, the meeting information shows only 500 invitees.
- When you share content in a meeting, participants see a black screen if you're using Windows with an Intel graphics display card, and the display card driver version is between v31.0.101.5590 on 2024/6/11 and 32.0.101.5768 on 2024/7/25.

**Workaround:** Update your Intel graphics driver to the latest version.

**Alternate workaround:** In Webex App, click Settings on the [navigation sidebar](https://help.webex.com/nx3i8h5/). Go to Sharing content \> Advanced settings and check Revert to classic screen sharing. If you use this workaround and have any Webex App windows open on top of the shared content, participants will see a masked area for these windows.

## Messaging

- Sometimes when you use Webex App on VMware, the messages area displays a blank white screen.

**Workaround:** Disable 3D graphics. Select the virtual machine, click Settings \> Display, and then uncheck Accelerate 3D graphics. Restart Webex App.
- If you send a message using markdown, then exit the app, when you restart the app and edit your post, markdown is removed.
- You can't turn emoticons to emojis when your language is Chinese, Japanese, or Korean.
- If you have Dell Backup and Recovery software installed, you can't use File Explorer to change your profile photo or select files to send to a space.
- **Duplicate search results when a user has multiple UUIDs:** If a user leaves and later returns to the company, they might get a new unique ID (UUID). Because the system keeps old conversations cached on the client and new conversations on the server, searching for that user can show messages from both their old and new IDs.

## White Boarding

- If you draw several lines on the whiteboard, you might experience delays when opening the whiteboard.
- If you can't create a new whiteboard in Webex App.

**Workaround:** Update OpenGL to version 2.0 or later.

## Room and Desk Devices

- The Webex App doesn't automatically connect to the Webex room device.

**Workaround:** Install the latest drivers or follow the instructions in [Webex for Windows is not Pairing with Cisco Webex Board](https://help.webex.com/uk6ssc/) to avoid these connection issues.

**The minimum macOS version is 10.15** 

## Enterprise Content Management with Microsoft OneDrive or SharePoint Online

- When you use OneDrive or SharePoint and you try to share a file or link a folder, you can't access your Recent files or your SharePoint Online folders.

## Calling

Below, we've indicated which calling service each issue applies to. If you're not sure what calling service you have, see [Webex App | Find Out What Calling Service You Have](https://help.webex.com/nbtgrzx/).

| The following issues apply to Webex Calling and Calling hosted by a Service Provider |
| ------------------------------------------------------------------------------------ |

- When sharing a single application with others, sometimes the shared content isn't visible if the windows of other applications are placed on top of the application being shared.

**Workaround:** Either minimize the call window or move the window away from the shared application view.
- Some incoming calls display as _Unknown Caller_.
- If you can't place a call over Wi-Fi, your company's firewall may be blocking UDP packets that contain call media or you're using a third-party VPN that doesn't have phone service.

**Workaround:** [Wi-Fi Connection Problems with Webex app](https://help.webex.com/article/en-us/DOC-15200).
- If you close Webex App while you're on a call, the app closes, but the call doesn't end.

**Workaround:** Click  before closing the app window.
- You may experience poor audio quality if you allow Webex App to automatically discover nearby room or desk devices.  

**Workaround:** [Stop Automatically Connecting to a Cisco Webex Room or Desk Device or a Cisco Webex Board](https://help.webex.com/p3zicc/).
- When you pull a call, \*11 shows in addition to the number of the call you're on.
- Caller IDs are inconsistent in the call history.
- The wrong display name shows for conference calls.
- Three-way calls to extensions don’t work.

| The following issues apply to Unified CM |
| ---------------------------------------- |

- If you can't place a call over Wi-Fi, your company's firewall may be blocking UDP packets that contain call media or you're using a third-party VPN that doesn't have phone service.

**Workaround:** [Wi-Fi Connection Problems with Webex app](https://help.webex.com/article/en-us/DOC-15200).
- You may experience poor audio quality if you allow Webex App to automatically discover nearby room or desk devices.  

**Workaround:** [Stop Automatically Connecting to a Cisco Webex Room or Desk Device or a Cisco Webex Board](https://help.webex.com/p3zicc/).
- When you pull a call, \*11 shows in addition to the number of the call you're on.
- Caller IDs are inconsistent in the call history when one number is shared by more than one person.
- The wrong display name shows for conference calls.
- Three-way calls to extensions don’t work.

## Messaging

- If you send a message using markdown, then exit the app, when you restart the app and edit your post, markdown is removed.
- When text from OneNote is copied and pasted to Webex App, the copied text is converted into an image file and posted in the app.

**Workaround:** Open System Preferences \>  Keyboard \> Shortcuts \> App shortcuts.  

  - Create a shortcut for Webex Message.  
  Menu Item: Paste and Match Style  
  Keyboard shortcut: command + v
  - Create a second shortcut for Webex Message.  
  Menu Item: Paste  
  Keyboard shortcut: command + shift + v
- You can't turn emoticons to emojis when your language is Chinese, Japanese or Korean.
- When you reach the maximum number of attempts to edit your message, you'll see a notification stating, "Your message can't be updated at this time", this means further edits will not work later, or that your changes will be saved.
- **Duplicate search results when a user has multiple UUIDs:** If a user leaves and later returns to the company, they might get a new unique ID (UUID). Because the system keeps old conversations cached on the client and new conversations on the server, searching for that user can show messages from both their old and new IDs.

## Meetings

- The following are known issues for meetings on macOS Sonoma 14.0:

  - When you use a virtual or blurred background in a Webex meeting, this effects the quality and visibility of reactions and emojis provided by macOS Sonoma.

**Workaround:** Turn off the virtual or blurred background setting in Webex.
  - When you share your screen in a Webex meeting and choose Show me in front of presentation in Webex, if you also choose macOS Sonoma presenter overlay options this can distort the overlay shown in the Webex meeting.  

**Workaround:** Enable only one of the presenter options.
- When viewing upcoming meetings from Webex App, the list of meeting invitees will be incomplete if the meeting was scheduled from the Webex site. For example, only you and the host may be listed.
- If you join a full-featured Webex meeting from Webex App and specify a SIP URI as the call back option for audio, when you join the meeting, your audio cannot connect and you only have the option to decline the incoming call or leave the meeting.
- When you click the phone number in a Webex meeting email invite, you may get the error, "Invalid number."
- On meeting platforms that support Edge Video Mesh, meeting participants can send messages to users who don't have Messaging enabled, either by selecting their profile picture in chat or searching for them as a contact. The sender isn't notified that the recipient didn't receive and can't read the messages that they sent.
- If you invite more than 500 people to a meeting, in Meetings  \> Calendar, the meeting information shows only 500 invitees.

## Room and Desk Devices

- You may experience problems pairing to Webex App room or desk devices if you're using a Bluetooth headset.

**Workaround:** Turn off Bluetooth and try to pair again.

**The minimum iOS is 16 and the minimum iPadOS is 16** 

## Enterprise Content Management with Microsoft OneDrive or SharePoint Online

- When you use OneDrive or SharePoint and you try to share a file or link a folder, you can't access your Recent files or your SharePoint Online folders.

## Notifications on iOS Devices

The app follows new rules to deliver notifications to iOS devices, as required by Apple. The following are some changes that you may notice:

- If you mark a message as read from another Webex app, you will notice notifications are not dismissed immediately on your iOS devices lock screen.
- You will occasionally see new messages or meeting notifications displayed as You have a new message or You have a new meeting, on your lock screen.
- The badge count on your home screen is not updated immediately until you bring the app to the foreground.

## Calling

Below, we've indicated which calling service each issue applies to. If you're not sure what calling service you have, see [Webex App | Find Out What Calling Service You Have](https://help.webex.com/nbtgrzx/).

| The following issues apply to Webex Calling and Calling hosted by a Service Provider |
| ------------------------------------------------------------------------------------ |

- When connected to Norton 360 VPN, you may be unable to make or receive Webex calls on your iPhone.
- Local address book contact isn't resolved on the in-call screen after the transition from CallKit to Webex UI
- When connected to a Webex device using ultrasound, you might experience issues with the audio quality.

**Workaround:** Disable ultrasound and connect to the device manually.
- Call performance hasn't been optimized for iPad yet.
- If you can't place a call over Wi-Fi, your company's firewall may be blocking UDP packets that contain call media or you're using a third-party VPN that doesn't have phone service.

**Workaround:** [Wi-Fi Connection Problems with Webex app](https://help.webex.com/article/en-us/DOC-15200).
- When joining a meeting on your phone using the Call Me option, your default contact number is not listed.

**Workaround:** You have to re-enter your contact information.
- If you’re using Webex Calling in Webex App and Single Sign-On (SSO) you may not be able to sign in to the app because of an SSO certificate issue.

**Workaround**: On your iPhone or iPad go to Settings \> General \> About \> Certificate Trust Settings, and under Enable Full Trust for Root Certificates, enable the SSO certificate.
- The call unexpectedly ends when switching from audio to video, then back to audio.

| The following issues apply to Unified CM |
| ---------------------------------------- |

- There is no missed call badge on Webex App for iPad.
- When accessing the calls list, you might experience a delay displaying profile pictures and numbers.
- When connected to a Webex device using ultrasound, you might experience issues with the audio quality.

**Workaround:** Disable ultrasound and connect to the device manually.
- Call performance hasn't been optimized for iPad yet.
- If you can't place a call over Wi-Fi, your company's firewall may be blocking UDP packets that contain call media or you're using a third-party VPN that doesn't have phone service.

**Workaround:** [Wi-Fi Connection Problems with Webex app](https://help.webex.com/article/en-us/DOC-15200).
- When joining a meeting on your phone using the Call Me option, your default contact number is not listed.

**Workaround:** You have to re-enter your contact information.
- The call unexpectedly ends when switching from audio to video, then back to audio.

## Messaging

- If you have a lot of spaces, you might get a message about decrypting content while the spaces are loading.  

**Workaround:** Leave Webex App open and the spaces will display.
- You might not see the profile pictures of everyone who read your message.

**Workaround:** Leave the space and return to it.
- Sometimes you may see a constantly spinning icon, when trying to preview Microsoft OneDrive and SharePoint Online documents.

**Workaround:** Tap the document icon to show the preview.
- **Duplicate search results when a user has multiple UUIDs:** If a user leaves and later returns to the company, they might get a new unique ID (UUID). Because the system keeps old conversations cached on the client and new conversations on the server, searching for that user can show messages from both their old and new IDs.

## Meetings

- On meeting platforms that support Edge Video Mesh, meeting participants can send messages to users who don't have Messaging enabled, either by selecting their profile picture in chat or searching for them as a contact. The sender isn't notified that the recipient didn't receive and can't read the messages that they sent.
- If you invite more than 500 people to a meeting, in Meetings  \> Calendar, the meeting information shows only 500 invitees.

## Room and Desk Devices

- When you put the Webex App app in the background and you're not on a call, you may see a red activity bar. This is normal. The app is just looking for nearby Webex App room and desk devices.

**Workaround:** [Stop Automatically Connecting to a Cisco Webex Room or Desk Device or a Cisco Webex Board.](https://help.webex.com/p3zicc/)
- You need to give Webex App access to the microphone on your mobile phone to make calls or pair with Webex room and desk devices.

## Feedback

- If you submit feedback, the email address fields may not be automatically populated.

**Workaround:** Manually fill in the details and then <mailto:support@ciscospark.com>.

**The minimum Android OS version is 10** 

## Signing In

- If you use the Webex App installation with Microsoft Intune, you might receive notifications to accept permissions when you sign in.

**Workaround:** Accept the request or your administrator can grant permissions. For more information see [Installation with Microsoft Intune](https://help.webex.com/en-us/article/xj3dmu/Webex-App-%7C-Installation-with-Microsoft-Intune#Cisco%5FTask.dita%5Ff4c4510e-b8e5-4f75-89ce-712960f4d08a).
- You might experience a delay in displaying space names, after you sign in.

**Workaround:** Leave Webex App open and the space names will display.
- Single sign-on may fail even if you've entered the correct username and password.

**Workaround:** If your password contains a special character, some Android phones insert a space in your password during single sign-on. Type your password in another app such as in an email draft, and then copy and paste it into the Webex App single sign-on form.
- When you sign out of Webex App, the app closes.

**Workaround:** To sign in again, restart the app.

## Calling

Below, we've indicated which calling service each issue applies to. If you're not sure what calling service you have, see [Webex App | Find Out What Calling Service You Have](https://help.webex.com/nbtgrzx/).

| The following issue applies to Call on Webex App: |
| ------------------------------------------------- |

- If you're on a call, and get another call, your active call should end if you answer the new call. However, the original call looks like it's put on hold instead.

| The following issues apply to Webex Calling and Calling hosted by a Service Provider |
| ------------------------------------------------------------------------------------ |

- When connected to a Webex device using ultrasound, you might experience issues with the audio quality.

**Workaround:** Disable ultrasound and connect to the device manually.
- If you can't place a call over Wi-Fi, your company's firewall may be blocking UDP packets that contain call media or you're using a third-party VPN that doesn't have phone service.

**Workaround:** [Wi-Fi Connection Problems with Webex app](https://help.webex.com/article/en-us/DOC-15200).
- Some incoming calls display as Unknown Caller.
- When accessing the calls list, you might experience a delay displaying profile pictures and numbers.
- When joining a meeting on your phone using the Call Me option, your default contact number is not listed.

**Workaround:** You have to re-enter your contact information.

| The following issues apply to Unified CM |
| ---------------------------------------- |

- When connected to a Webex device using ultrasound, you might experience issues with the audio quality.

**Workaround:** Disable ultrasound and connect to the device manually.
- If you can't place a call over Wi-Fi, your company's firewall may be blocking UDP packets that contain call media or you're using a third-party VPN that doesn't have phone service.

**Workaround:** [Wi-Fi Connection Problems with Webex app](https://help.webex.com/article/en-us/DOC-15200).
- When accessing the calls list, you might experience a delay displaying profile pictures and numbers.
- When joining a meeting on your phone using the Call Me option, your default contact number is not listed.

**Workaround:** You have to re-enter your contact information.

## Messaging

- While in a meeting or call, the activity menu doesn't appear so you can't send a message.

**Workaround:** Create a new space to send a message or send a message after the meeting or call.
- You might not see the profile pictures of everyone who read your message.

**Workaround:** Leave the space and return to it.
- Sometimes you may see a constantly spinning icon when trying to preview Microsoft OneDrive and SharePoint Online documents.

**Workaround:** Tap the document icon to show the preview.
- **Duplicate search results when a user has multiple UUIDs:** If a user leaves and later returns to the company, they might get a new unique ID (UUID). Because the system keeps old conversations cached on the client and new conversations on the server, searching for that user can show messages from both their old and new IDs.

## Enterprise Content Management with Microsoft OneDrive or SharePoint Online

- When you use OneDrive or SharePoint and you try to share a file or link a folder, you can't access your Recent files or your SharePoint Online folders.

## Meetings

- On meeting platforms that support Edge Video Mesh, meeting participants can send messages to users who don't have Messaging enabled, either by selecting their profile picture in chat or searching for them as a contact. The sender isn't notified that the recipient didn't receive and can't read the messages that they sent.
- If you invite more than 500 people to a meeting, in Meetings  \> Calendar, the meeting information shows only 500 invitees.

## Feedback

- If you submit feedback, the email address fields may not be automatically populated.

**Workaround:** Manually fill in the details and then <mailto:support@ciscospark.com>.
- Audio and video performance vary depending on your Android device. If you experience issues with a specific model, send feedback through the Webex App app.

Use one of the last two major versions of Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge.

You can use the meetings and free calling (Call on Webex) features from Webex App for web using Firefox, Chrome, Safari, and Microsoft Edge only. 

To update Webex App to the latest version, refresh your browser.

## Calling

Below, we've indicated which calling service each issue applies to. If you're not sure what calling service you have, see [Webex App | Find Out What Calling Service You Have](https://help.webex.com/nbtgrzx/).

| The following issues apply to Webex Calling and Calling hosted by a Service Provider |
| ------------------------------------------------------------------------------------ |

- Calls made through Webex App for Web connect using a switching server and do not support mid-call renegotiation. As a result, call quality may drop or even fail as network conditions change.
- If you can't place a call over Wi-Fi, your company's firewall may be blocking UDP packets that contain call media or you're using a third-party VPN that doesn't have phone service.

**Workaround:** [Wi-Fi Connection Problems with Webex app](https://help.webex.com/article/en-us/DOC-15200).
- If you're connected to a VPN, you may not be able to make a call.

**Workaround:** Disconnect from the VPN, and then place the call.
- If you’re connected to a call with someone using an app that supports renegotiation, Webex App for Web constrains the other apps by its upper bandwidth limit. These constraints are especially noticeable for features such as screen sharing.
- Some incoming calls display as Unknown Caller.
- You can only make calls from Mozilla Firefox, Google Chrome, and Safari. If you use Webex App for Web on other browsers, you can see the Call icon, but if you click it, you'll be redirected to download the Webex App app or Firefox, Chrome, or Safari.
- You may experience one-way video when connecting to other applications with Webex App for Web.

**Workaround:** Always enable audio.
- If you have AdBlockPlus, you may need to disable it to open the sign in screen.

| The following issues apply to Unified CM |
| ---------------------------------------- |

- Calls made through Webex App for Web connect using a switching server and do not support mid-call renegotiation. As a result, call quality may drop or even fail as network conditions change.
- If you can't place a call over Wi-Fi, your company's firewall may be blocking UDP packets that contain call media or you're using a third-party VPN that doesn't have phone service.

**Workaround:** [Wi-Fi Connection Problems with Webex app](https://help.webex.com/article/en-us/DOC-15200).
- If you're connected to a VPN, you may not be able to make a call.

**Workaround:** Disconnect from the VPN, and then place the call.
- If you’re connected to a call with someone using an app that supports renegotiation, Webex App for Web constrains the other apps by its upper bandwidth limit. These constraints are especially noticeable for features such as screen sharing.
- You can only make calls from Mozilla Firefox, Google Chrome, and Safari. If you use Webex App for Web on other browsers, you can see the Call icon, but if you click it, you'll be redirected to download the Webex App app or Firefox, Chrome, or Safari.
- You may experience one-way video when connecting to other applications with Webex App for Web.

**Workaround:** Always enable audio.
- If you have AdBlockPlus, you may need to disable it to open the sign in screen.

## Messaging

- We've temporarily turned off the status indicator that appears your profile picture when you use @mentions.
- If someone posts a message from Webex App for iPhone and iPad and uses the Return key to enter a new line, you won't see the new line when you view the message in Webex App for Web.
- If you have a free Webex App account, you won't see results when you search for a message.
- If you lose connection to Webex App, the "Reconnecting" message may not disappear even after you reconnect.

**Workaround:** Refresh the browser.
- If you use Firefox 39.0 on a Windows 7 computer, it may quit suddenly while downloading spaces.

**Workaround:** Use Google Chrome.
- Previews for Excel documents and text files are not currently supported.
- You can't paste images into spaces using Mozilla Firefox.

**Workaround:** Use Google Chrome.
- **Duplicate search results when a user has multiple UUIDs:** If a user leaves and later returns to the company, they might get a new unique ID (UUID). Because the system keeps old conversations cached on the client and new conversations on the server, searching for that user can show messages from both their old and new IDs.

## Meetings

- Webex web app supports meetings and webinars hosted on the Webex Suite meeting platform.  
Webex Events (classic), Webex Training, and Webex Support aren't supported by this application.
- The web app uses Web Real-Time Communication (WebRTC) for video transmission, which doesn’t support end-to-end encryption (E2E) or Zero Trust E2E.
- Remote desktop control isn't supported.
- Hosts and cohosts can't stop a participant’s video by right-clicking on their video and clicking Stop video.
- You can sort the participants list by _Name_ and _Raise hand_ but not by _Who’s speaking_.
- Custom virtual backgrounds aren't supported.
- Gesture reactions aren't supported.
- Grid layout supports up to six videos, with a maximum resolution of 1080p.
- Two smart audio features are available: _Noise removal_ and _Music mode_. _Optimize for my voice_ and _Optimize for all voices_ aren't available.
- Annotate

  - You can annotate on whiteboards, but you can't annotate on a shared file during a meeting.
  - You can annotate on screens shared from other platforms; however, Webex App desktop and mobile users can't annotate on screens shared using the web app.
- Embedded apps

  - Most embedded apps can't be started using the web app but, if you're the host or cohost, you can start Slido.
  - As a participant, the embedded apps panel only appears after the host has started the app.
  - Full-screen view isn't supported for embedded apps.
- Share content

  - File sharing can't be initiated using the web app; however, the web app can receive shared files as a transcoded stream—essentially the web app displays a media stream of the file (not the file itself).
  - You can [share your browser tab, window, or your entire screen only](https://help.webex.com/i62jfl/#id%5F84734).  
  You can't select multiple tabs, windows, or screens to share at one time.
  - Show me in front of presentation isn't supported.
  - You can’t show the active speaker next to shared content.
  - If you use Firefox to join a meeting, all types of sharing is disabled if you or the meeting host has desktop sharing, application sharing, or both disabled in Control Hub. This is due to a limitation in Firefox.
- When using the web app on Windows or with Safari, if your camera is being used by another application, the web app won't be able to access it. Similarly, if camera access is blocked at an OS level, the web app won't be able to access it.

## Browsers

- You can run the web app in one tab/window per browser at a time, with a single user account.
- Webex App for Web app uses Web Real-Time Communication (WebRTC) to send media between Webex App-enabled apps. WebRTC doesn’t have a finalized standard and changes frequently, so every browser interprets it differently. Depending on how your browser interprets the latest version of WebRTC, it may introduce bugs that cause problems for Webex App for Web.
- Webex App for Web is not supported on mobile web browsers, including: Safari, Microsoft Edge, SeaMonkey, Opera, or on the Microsoft Surface tablet.
