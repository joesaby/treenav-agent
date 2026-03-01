---
title: "Release notes for RoomOS software"
product: "Devices"
article_id: "6ger7db"
url: "https://help.webex.com/en-us/article/6ger7db/What-s-new-in-RoomOS-devices"
last_updated: "2020-11-27"
description: "Get an overview of new features and capabilities available for your Webex
registered Board, Desk, and Room Series devices."
tags: ["devices"]
source: "help.webex.com"
---

# Release notes for RoomOS software

## 

Some features may not be available on all Webex registered devices. You can refer to this article to check which features are supported on your device.

For information on RoomOS software upgrades and software channels, see the [RoomOS software upgrades](https://help.webex.com/idba5c/) article.

New features and fixed issues specific for **Cisco collaboration devices for Microsoft Teams Rooms** are covered in [a separate release note](https://roomos.cisco.com/doc/MTR/releasenotesMTR).

### Announcements

- For Cisco collaboration devices for Microsoft Teams Rooms, Microsoft only supports RoomOS software that they have released on Teams Admin Center. RoomOS versions on the Stable channel are therefore not necessarily supported by Microsoft. See: [latest RoomOS software version supported by Microsoft](https://learn.microsoft.com/microsoftteams/devices/certified-hardware-android?tabs=firmware#cisco).  
The latest software version supported by Microsoft: RoomOS 26.2.1.8, based on RoomOS January 2026\. This software version includes Teams Rooms App 1449/1.0.96.2025341701.

- [What's new: RoomOS 26](#reference-template%5Fc76e87ef-617e-41ec-bf9e-2549926eb276)
- [What's new: RoomOS 11](#Cisco%5FReference.dita%5Fb1294883-a8f5-4702-98fd-bb42af91aa5f)
- [Coming Soon](#id%5F119377)
- [Known issues and limitations](#Cisco%5FReference.dita%5F46892300-74b9-41be-8c60-1d2093da9052)
- [Archive](#reference-template%5F72d42bca-8a7e-4661-9f03-c42220ca3f69)

## RoomOS February

### February 2, 2026

**Software version: RoomOS 26.3.1.3** 

### AI notes

AI notes is designed to streamline the capture and summary of your in-person meetings. AI notes transcribes spoken content during your meeting in real time. Every point is captured and organized and you can share summaries and action items with the other participants after the meeting. 

After the meeting ends, the following will be available in the Webex App under the Meeting Recap tab:

- Full transcript of the meeting
- Concise summary of key discussion points
- Clear action items for follow-up

Launch AI notes by selecting the new AI Notes button on your home screen. Then book the meeting room and select a host to receive meeting summaries and action items. The AI Assistant panel appears on the screen, indicating that the Assistant is active and recording meeting notes. Action items are displayed on the full screen once sufficient content is detected. These items refresh every two minutes.

Requirements:

- Cisco AI assistant must be enabled on the device
- Webex App to receive the meeting recap
- Webex Meetings to start the in-person meeting

Note:

- To be selectable as a meeting host, you must be opted in to face recognition, proximity paired to the device, or have your host PIN available.
- If you encounter issues accessing the meeting, ensure your host PIN is available. This can be found in the Webex App.
- To allow your device to access the AI Assistant, it must enter the meeting as a co-host. Make sure that your [personal room meetings](https://help.webex.com/n1bqkbv/#task%5F413B1084E4A622AD1DFCB0CB0A176554) have "All attendees who have host accounts on this site and all authenticated Cisco video devices in this organization become cohosts when they join my Personal Room meetings" enabled.

Read more about [AI Notes](https://help.webex.com/n0l393f/).

### Hot-desking for all rooms

This brings our hot-desking experience that has previously been available on Board and Desk Series to all room series devices. In addition, the feature allows for more flexible sign-in options for workspaces which have existing calendars and are used for more than a single user reservation. 

Read more about [hot-desking](https://help.webex.com/hx8m1o/).

### Digital signage for Room Navigators in scheduler mode

We've added support for digital signage on Room Navigators in scheduler mode, just like on the inside controller. It can be enabled with the same signage configuration URL that has previously been available for other devices. You can turn digital signage on or off for individual Room Navigators in scheduling mode.

Supported on both paired and standalone Room Navigators.

Digital signage is not available when a persistent web app is enable on the Room Navigator.

Read more about [digital signage](https://help.webex.com/nmd8log/).

### 21:9 output resolution support

We've added support for 21:9 ultrawide displays for an enhanced meeting experience.

You can join Webex Meetings and Calls using the full width of 21:9 screens on RoomOS. Cabled share defaults to 16:9 for better compatibility in meetings, but you can configure 21:9-resolution support for connected laptops to prioritize immersive local sharing. 

21:9 output resolution is supported on Room Series devices. 21:9 screens are only supported as a single screen and not in combination with another 16:9 or 21:9 screen.

Read more about [21:9 screen support](https://help.webex.com/kfqdpq/).

### Enhanced simultaneous interpretation

We've increased the number of output streams available for simultaneous interpretation to support situations where multiple languages are requested simultaneously. With this change, we have added new xAPIs which let you select up to 4 available language interpreters in a Webex Meeting and route their audio out separate audio outputs on your Room Kit Pro.

This enhancement allows audio output to separate audio gates for recording, improving inclusivity, accuracy, and compliance in proceedings.

Supported on Room Kit Pro.

Requires that audio console is enabled.

Read more about [simultaneous interpretation with additional channels for Room Kit Pro](https://help.webex.com/n8r5vtc/).

### Changes to device’s user passphrase behavior

When entering the device’s user passphrase, a temporary lockout is enabled for 5 minutes after 5 failed login attempts. This to strengthen the default security of the system and to align with security standards for secure default configurations. Applies to all users roles: _Admin_, _Integrator_, _RoomControl_, and _User_.

The new passphrase behavior can be disabled by setting `xConfiguration Security Session MaxFailedLogins` to `0`, which is accessible from Control Hub. 

### Fixed issues

- CSCws75579 - Joining a Webinar with webcast enabled fails when Webex App connects with a device.
- CSCws39905 - Side camera is not switching as expected in cross-view setup.
- CSCwq01472 - NTP synchronization failure using SHA 256 with Key/ID pair.
- CSCwr00258 - Webex call media disconnect failure with HTTP Proxy.

## RoomOS January

### January 15, 2026

**Software version: RoomOS 26.2.1.5** 

### Zoom Meetings for Cisco Rooms

There are now two additional modes for Zoom Meetings, guest mode and signed-in mode, in addition to CRC and SIP interop that have been available previously.

When either of these modes are enabled, joining to a Zoom Meeting now launches the Zoom App directly on the device with the same call controls and in-meeting features that are available in the Zoom App elsewhere. While the Zoom App is in use, you can still use the RoomOS sharing menu and camera and audio options.

**Guest mode**

- Join using One Button To Push or by entering in the meeting ID and passcode.
- Join as a participant.
- Webinar attendee support.
- Breakout room support.

**Signed-in mode**

- Requires Zoom Rooms license.
- Join using One Button To Push or by entering in the meeting ID and passcode, or start an Instant Meeting from the device.
- Pair from the Zoom App on your mobile or computer to the device which allows you to launch your meeting from the app or to start a Zoom Direct Share Session.
- Join as a host or participant.
- Invite participants to an ongoing meeting from the device.
- Webinar attendee and host support.
- Breakout Room support.

Guest mode and signed-in mode are supported in single and dual-screen scenarios.

**Supported devices**

- Cisco Room Bar
- Cisco Room Bar Pro
- Cisco Board Pro
- Cisco Board Pro G2
- Cisco Desk Pro
- Cisco Room Kit EQ
- Cisco Room Kit EQX
- Cisco Room Kit Pro

**Supported Room Navigator versions**

- CS-T10-TS-L-K9
- CS-T10-WM-L-K9
- CS-T10-TS-C-K9
- CS-T10-WM-C-K9

Read more about how to [administer](https://help.webex.com/zai3j4/) and [join](https://help.webex.com/0lobg6/) Zoom Meetings.

### Improvements to raise hand in meetings

We've made improvements to the raise hand feature in meetings to remove confusion about who’s waiting to speak. 

After you raise your hand and speak, your device will automatically lower your hand 5 seconds after you finish speaking. Auto lowering only reacts to speech, not other background sounds. You can still manually lower your hand from the reactions menu. 

On RoomOS 26, a participant that has raised their hand is automatically moved to stage on the screen layout for better visibility.

Autolower a raised hand is available on Webex Meetings, Webinars, and CMS calls.

Read more about [raise hand in meetings](https://help.webex.com/en-us/article/nasc6bd/).

### Support for Greek language in RoomOS

We're adding support for the Greek language on our device UIs.

### On-premises recording on Video Mesh

RoomOS devices now support on-premises recording on Video Mesh which combines the convenience of recording a Webex meeting with the enhanced security of storing all recorded content on-premises, within the customer's data centers. There are no restrictions on the duration for which recorded content may remain on-premises, allowing customers the flexibility to establish their own retention policies.

Read more about [on-premises recording on Video Mesh](https://help.webex.com/2r5gv7/Dep#concept-template%5F64bd712c-a17e-4c7b-92e8-8d18e2142d9e).

### Active meeting timeout

With this update administrators can now choose how long a meeting remains active before timing out. The choice is from 0-30 minutes with 5 minutes being the default timeout. This toggle is available in Control Hub. 

### Fixed issues

- CSCwq01472 - NTP synchronization failure using SHA 256 with Key/ID pair.  
CSCws30225 - Calls that are escalated to an ad-hoc conference using Unified CM MRGL to a CMS have poor video quality.  
CSCws37589 - Recently manufactured Quad Camera units have wrong lens calibration data, causing incorrect cropping.  
CSCws26034 - Group and speaker mode not working as expected in a Webex meeting.  
CSCwr35720 - In a cross-view setup, the side cameras are not switching to the active speaker correctly.  
CSCwr28709 - Cross-view doesn't work when the _AudioTracking Source_ is external.  
CSCwr79620 - Description for _xConfiguration SystemUnit SoftwareUpgrade TruncateCop_ option is incorrect.  
CSCwp51335 - Music mode results in poor audio quality in Google Meet WebRTC calls.  
CSCws13036 – Auto-share failed after a WebRTC call.  
CSCwr82250 - Diagnostic warning for _SmtpServiceConfiguration_ appears and does not clear.  
CSCwr87680 - Cannot add new camera preset if the last preset has no name.  
CSCwr43707 - UI extension button’s position changes after device reboots.  
CSCws01436 - Meetings may be removed from a device when there are network issues.  
CSCwr95658 - Device reboots OOM (Out Of Memory) after repeated hotplug events.

## RoomOS December

### December 15, 2025

**Software version: RoomOS 26.1.1.5**

### Fixed issues

- CSCws37589 - Recently manufactured Quad Camera units have wrong lens calibration data, causing incorrect cropping.
- CSCws41602 - GPIO Logic for OutputManualState flipped in RoomOS 26.1.1.3.

### December 8, 2025

**Software version: RoomOS 26.1.1.3**

### Audio exclusion zones

Audio exclusion zones allow you to block out distracting background noises or conversations outside your meeting area, ensuring that your audio stays clear and focused. Configure the microphone beams on or off from a Room Navigator, so that audio from only those areas of the meeting room gets picked up.

Supported on Ceiling Microphone Pro.

Read more about [how to set up audio exclusion zone](https://help.webex.com/ngtv51d/).

### Deep sleep for Board Pro and Board Pro G2

Deep sleep mode is designed to further reduce power consumption when the device is not in use. When configured, deep sleep automatically places Board Pro and Board Pro G2 devices into a low-power state outside of office hours. This helps organizations to lower energy costs and support sustainability goals. 

Deep sleep is not on by default.

Read more about [deep sleep mode on Board Pro and Board Pro G2](https://help.webex.com/d4ligeb/).

### Whiteboarding updates

**Active pen always draws**

When you start using an active pen while whiteboarding, your finger will automatically move to selection-tool. Without an active pen, the functionality is the same as before.

**Show cursors from all active users** 

When _Show all cursors_ option is toggled on from whiteboard.webex.com or the Webex App on a whiteboard that's shared in a meeting, the device renders cursors for all active user. The toggle is on by default. Showing the cursors for active users makes it easier to see where the different participants are on the whiteboard.

**Whiteboards on personal mode devices**

Using the Webex App, you can open whiteboards directly on a device, both in and out of meetings. In Webex Meetings that are started from a paired Webex App, the whiteboard is shared as a two-way interactive whiteboard. In other meetings, the whiteboard is not interactive for other participants. Supported on personal mode devices and devices using hot-desking.

Read more about [whiteboarding](https://help.webex.com/zfhy55/).

### Meeting zone improvements

We've made the following improvements to the meeting zone setup UI.

- The meeting zone UI is now visible on the on-screen display, making it easier to view and adjust the configured zone while moving around the room.
- New options let you easily enable or disable overlays according to your preferences.
- The grid view has been updated to a dot pattern for improved clarity.
- People icons have been refreshed for a more modern look.

Read more about [how to set up meeting zone](https://help.webex.com/owp8b5/).

### Customer Satisfaction (CSAT) Survey 

We are now expanding the Customer Satisfaction Survey feature to RoomOS devices. Users will periodically (typically once per 2–3 weeks) be prompted to rate their meeting experience by selecting a star rating 1–5.

This is a Cisco-managed survey designed to anonymously collect feedback on meeting quality. The data helps us identify changes in the meeting experience to continuously enhance quality.

The survey feature is enabled by default to gather insights effectively.

### AI Assistant: Additional Languages Supported in Meeting

Devices now support 15 spoken languages during meetings.

**Supported languages include:**

- Arabic
- Chinese Mandarin (Simplified & Traditional)
- Danish
- Dutch
- English
- French
- German
- Hindi
- Italian
- Japanese
- Korean
- Polish
- Portuguese
- Spanish

Read more about [Cisco AI assistant for devices](https://help.webex.com/e4roeg/).

### Fixed issues

- CSCws13036 - Autoshare failed after a WebRTC call.
- CSCws01436 - Meetings may be removed from a device when there are network issues.
- CSCws32504 - Room Navigator pairing lost after upgrade with PowsConnection on\_connect\_failed: No such file or directory.
- CSCwp51335 - Music Mode results in poor audio quality in WebRTC Google Meet calls.
- CSCwn40835 - In low light environment, image from Quad Camera has a blueish hue.
- CSCwr32607 - _DuplicateAddressDetection_ shown for internal LAN interface.
- CSCwq01551 - Codec Pro crashes during a call due to out of memory caused by memory leak in TShell.
- CSCwq58165 - Analytics events can’t distinguish between VIMT joins and other non-VIMT Microsoft Teams joins.
- CSCwr59077 - Device remains in camera preset view and the camera mode can't be changed.
- CSCwr59987 - Dialog box for a macro doesn't close as expected on the device UI on RoomOS 11.32 and later,
- CSCwr75046 - Codec and Room Navigator lose pairing and are unable to reconnect with each other.
- CSCws02341 - Top of the head is cropped by the side camera in crossview mode.

## RoomOS November

### December 1, 2025

**Software version: RoomOS 26.0.1.5**

### Fixed issues

- [Qt CVE-2025-12385, vulnerability in QML Text markup parsing](https://www.cve.org/CVERecord?id=CVE-2025-12385)
- CSCws01436 - Meetings may be removed from a device when there are network issues.

### November 10, 2025

**Software version: RoomOS 26.0.1.2** 

## Introducing RoomOS 26

We are branching out our newer devices to a new main software version, RoomOS 26\. With RoomOS 26, we can deliver new features that take advantage of the improved memory and performance of the newer hardware.

On RoomOS 26, we've also updated the visual image of our homescreen and menus.

Older devices remain on the RoomOS 11 branch, which continues to receive important bug fixes until April 2027 and security updates until April 2030\. This gives you time to plan for upgrades while still ensuring your devices remain secure.​

We've updated the Devices Software page in Control Hub to reflect these changes. You can toggle the Software upgrade section to see either RoomOS 26, RoomsOS 11, or RoomOS 9.15 software versions and the devices on those versions. Read more about [RoomOS software upgrades](https://help.webex.com/idba5c/).

### Visual updates 

RoomOS 26 has an updated visual identity with changes to backgrounds, wallpapers, and subtle changes to edging of menus. Choose from 12 different wallpapers to better match the environment the device is placed in.

In other updates, we’ve increased the contrast on text elements for better legibility on any background and slightly transparent App buttons that emphasize the icons while harmonizing better with the wallpaper

The top Settings button has been removed, and you can use the side notch to open the control panel. The control panel now opens as in overlay view, helping to focus on the controls.

We’ve also updated the virtual backgrounds that are available on Desk Series devices.

**Wallpapers**

Wallpaper for the homescreen of a device can be configured in bulk, with templates, or for individual devices. 

Use Control Hub or the web interface on the device and set the configuration `UserInterface Theme` with the `Name` of the wallpaper you want to set. The web interface of the device also shows a preview of the wallpaper under Customization \> Personalization.

**Minimize the visual differences between RoomOS 26 and RoomOS 11 devices**

If your organization has a mix of both RoomOS 26 and RoomOS 11 devices, you may want to minimize the visual differences between the devices. To ensure the least possible visual difference between RoomOS 11 and RoomOS 26, we suggest using the following themes. 

- RoomOS 26: First Light
- Room OS 11: Light

You can’t use the wallpapers from RoomOS 26 on RoomOS 11 devices or the other way around.

## Software support for Cisco collaboration devices

| RoomOS 26 (Current generation)     | RoomOS 11 (Previous generation)                       | RoomOS 9.15 |
| ---------------------------------- | ----------------------------------------------------- | ----------- |
| Board Pro 55/75                    | Room Kit                                              | DX80        |
| Board Pro 55/75 G2                 | Room Kit Plus                                         |             |
| Cisco Desk                         | Room Kit Mini                                         |             |
| Desk Mini                          | Room 55                                               |             |
| Desk Pro                           | Room 55 Dual                                          |             |
| Room Bar                           | Room 70 (Single and Dual)                             |             |
| Room Bar Pro                       | Board 55/70                                           |             |
| Room Kit Pro                       | Board 55S/70S/85S                                     |             |
| Room Kit EQ                        | Room USB                                              |             |
| Room Kit EQX                       | Room Kit Pro with Touch 10 and/or SpeakerTrack 60     |             |
| Room 70 G2                         | Room 70 G2 with Touch 10 and/or SpeakerTrack 60       |             |
| Room Panorama                      | Room Panorama with Touch 10 and/or SpeakerTrack 60    |             |
| Room 70 Panorama                   | Room 70 Panorama with Touch 10 and/or SpeakerTrack 60 |             |
| Room Navigator in stand-alone mode |                                                       |             |

Touch panel support:

- RoomOS 11: Touch 10, Room Navigator in controller mode
- RoomOS 26: Room Navigator in controller and stand-alone mode

## Codec Pro based devices

Room Kit Pro, Room 70 G2, and Room Panorama are supported on RoomOS 26 when a Room Navigator is connected, either directly or over the network. If a Touch 10 is connected to these devices, they remain on RoomOS 11.

If you want to upgrade a Codec Pro based device that has previously been connected to a Touch 10 to RoomOS 26, you need to remove the pairing both physically and from either the device's local web interface or through xAPI. 

On the device's local web interface, go to Settings \> Audio and Video - All Peripherals. Remove any peripherals with type _Cisco TelePresence Touch_ and reboot the device. As the device powers up again it upgrades to the latest Stable version of RoomOS 26\. Connect a Room Navigator to the device.

If the upgrade fails, you need to contact Cisco's Technical Assistance Center (TAC).

## Companion mode

Board and Room Series devices that are configured in [companion mode](https://help.webex.com/ogrc5/) need to be running the same software version.

As a short-term solution, you can downgrade the devices to version 11.33.1 or earlier to restore compatibility. For a long-term solution and full support, we recommend replacing the products with models that are supported by either the 11.x or 26.x software versions.

This does not apply to Room Navigators in companion mode.

## Troubleshooting

**Supported device not upgrading to RoomOS 26**

If a device that's supported on RoomOS 26 remains on RoomOS 11, it may have had a Touch 10 connected to it previously. On the device's local web interface, go to Settings \> Audio and Video - All Peripherals. Check if there are peripherals with type _Cisco TelePresence Touch_ on the list, remove them, and reboot the device. 

## Dynamic camera mode

Auto camera mode uses Cisco's advanced camera intelligence to analyze variables such as room size, participant count, seating arrangement, and activity level. Based on these inputs, the director chooses the best camera view for the meeting room. This eliminates the need for manual camera adjustments from users or IT intervention. 

The Auto camera mode is the new default mode. The camera mode can be changed from the device UI and the camera mode can be configured in Control Hub or through the xAPI as before. 

Read more about [camera modes](https://help.webex.com/ltrv3c/).

## Updated sharing experience

The redesigned sharing menu features a clear, intuitive layout with visual cues for different sharing and viewing states.

The updated menu shows a list of share sources on the left-hand side, while information on how to share, or a preview of your share, appears next to it.

The list shows a selection of wireless and wired share sources, such as Webex Share, AirPlay, Miracast, USB-C, and HDMI, depending on what is available on the device. When there are six or more share sources, a collapsed list is shown, making it easier to navigate.

Alongside the new sharing menu, we have improved on the latency when sharing from the Webex App to a device. 

**Direct share from Webex App**

Direct share is a new way to share that improves the latency when sharing from the Webex App to a device.

From the end-user perspective, it works the same way as before but with direct share the media path changes. With direct share, the media path is routed directly from Webex App to the device over a TLS connection. This results in reduced latency and first frame delay compared with the pre-existing Webex Share experience.

Direct share is supported outside of call and within CVI calls.

**Hide Webex share option** 

You can hide the Webex sharing option from the menu if it’s not used in your organization. To hide the Webex sharing option, set the configuration `UserInterface Features Share WebexWirelessShare` to `Hidden`.

Once hidden the Webex share option will no longer be visible in the share options.

Read more about [content sharing](https://help.webex.com/c0jgpv/).

## Wireless touch forwarding on Miracast shares

Support for Miracast touch forwarding is available on all RoomOS devices with an embedded touch screen or third-party touch screen. Miracast touch forwarding is also supported in companion mode.

Touch forwarding allows you to control your laptop screen directly from the device's touch screen. It is available during local sharing or while in a call.

When you share with Miracast from your Windows OS, you can move through your content using the devices touch screen mechanism. 

**Ideal for activities such as:**

- Dragging and dropping files.
- Using drawing software.
- Working with maps.
- Moving between slides in a presentation.

**Limitations:**

- Annotation on the shared screen is not available.
- Only available with Windows OS.

Read more about [sharing with Miracast](https://help.webex.com/kfdwufb/).

## DHCP sub options support for SCEP 

We now support automated device network onboarding using SCEP and DHCP sub options.

Read more about [DHCP sub options support](https://help.webex.com/iqy5ww/#task-template%5Ffdee46af-cc7d-4f97-afe4-e4fb53030de0).

## Cameras calibration diagnostics tool 

Cameras calibration diagnostics tool for the cinematic view is now available on the device’s UI. Previously the diagnostics have only been available through the xAPI.

## Board Pro standby delay time aligned

We’ve aligned the standby delay time on Board Pro and Board Pro G2 with the rest of the devices portfolio. The new default time is 10 minutes.

## Hide non-video participants in CVI calls

Hide non-video participants layout option is now available for CVI calls. Navigate to the Layout section on your device and toggle on Hide participants without video.

Only participants with video on will appear on the screen.

Read more about [hiding non-video participants in meetings](https://help.webex.com/glbrrz/).

## Removed from RoomOS 26

- Tips app
- xConfiguration Provisioning Mode: VCS

## Fixed issues

- CSCwr76621 - Pairing diagnostics warning shown even though Webex Proximity is off.
- CSCwr28975 - Ceiling Microphone Pro calibration test logs don't clearly distinguish between successful and failed tests.
- CSCwr54945 - Can't start AI Meeting Summary even though joined as host from a device.
- CSCwq91813 - 'LedControl OutsideOfficeHours: Off' no longer working on paired Room Navigator in scheduler mode in RoomOS 11.31.
- CSCwr50131 - Traditional Chinese - Virtual keyboard is missing the character 'ㄦ'.
- CSCwq21227 - People presence is not working when only using Ethernet microphones and a Precision 60 camera.
- CSCwr20046 - SpeakerTrack background mode continues tracking while activated.
- CSCwr26381 - IEEE8021X authentication fails: SUDI private key error.
- CSCwq00975 - Audio console macro code is not auto-upgraded to post-CommonJS javascript.
- CSCwr20472 - USB audio stopped working after upgrade from 11.29 to 11.31.
- CSCwr00258 - Webex call media disconnect failure with HTTP Proxy.
- CSCwr10271 - Japanese character wordings are truncated with ......

## RoomOS 11.36

### January 26, 2026

**Software version: RoomOS 11.36.1.1** 

### 21:9 output resolution support

We've added support for 21:9 ultrawide displays for an enhanced meeting experience.

You can join Webex Meetings and Calls using the full width of 21:9 screens on RoomOS. Cabled share defaults to 16:9 for better compatibility in meetings, but you can configure 21:9-resolution support for connected laptops to prioritize immersive local sharing. 

21:9 output resolution is supported on Room Series devices. 21:9 screens are only supported as a single screen and not in combination with another 16:9 or 21:9 screen.

Read more about [21:9 screen support](https://help.webex.com/kfqdpq/).

### Improvements to raise hand in meetings

We've made improvements to the raise hand feature in meetings to remove confusion about who’s waiting to speak. 

After you raise your hand and speak, your device will automatically lower your hand 5 seconds after you finish speaking. Auto lowering only reacts to speech, not other background sounds. You can still manually lower your hand from the reactions menu. 

On RoomOS 26, a participant that has raised their hand is automatically moved to stage on the screen layout for better visibility.

Autolower a raised hand is available on Webex Meetings, Webinars, and CMS calls.

Read more about [raise hand in meetings](https://help.webex.com/en-us/article/nasc6bd/).

### Support for Greek language in RoomOS

We're adding support for the Greek language on our device UIs.

### On-premises recording on Video Mesh

RoomOS devices now support on-premises recording on Video Mesh which combines the convenience of recording a Webex meeting with the enhanced security of storing all recorded content on-premises, within the customer's data centers. There are no restrictions on the duration for which recorded content may remain on-premises, allowing customers the flexibility to establish their own retention policies.

Read more about [on-premises recording on Video Mesh](https://help.webex.com/2r5gv7/Dep#concept-template%5F64bd712c-a17e-4c7b-92e8-8d18e2142d9e).

### Active meeting timeout

With this update administrators can now choose how long a meeting remains active before timing out. The choice is from 0-30 minutes with 5 minutes being the default timeout. This toggle is available in Control Hub. 

### Fixed issues

- CSCwr00258 - Webex call media disconnect failure with HTTP Proxy.
- CSCws30225 - Calls that are escalated to an ad-hoc conference using Unified CM MRGL to a CMS have poor video quality.
- CSCws37589 - Recently manufactured Quad Camera units have wrong lens calibration data, causing incorrect cropping.
- CSCws13036 - Auto-share failed after a WebRTC call.
- CSCws27450 - Room Navigator is not displaying the list of available codecs before remote pairing.
- CSCwr82250 - Diagnostic warning for _SmtpServiceConfiguration_ appears and does not clear.

## RoomOS 11.35

### December 15, 2025

**Software version: RoomOS 11.35.1.2** 

### Support for LLDP network discovery on more devices

We've added support for LLDP network discovery on more devices. It is now supported on:

- Room Kit
- Room Kit Plus
- Room Kit Mini
- Room 55
- Room 55 Dual
- Room 70 (Single and Dual)
- Board 55/70
- Board 55S/70S/85S
- Room USB

Read more about [LLDP support on devices](https://help.webex.com/qw894i/).

### Custom wallpaper on Room USB

Custom wallpapers can now be uploaded to Room USB devices.

### Fixed issues

- CSCws13036 - Autoshare failed after a WebRTC call.
- CSCws37589 - Recently manufactured Quad Camera units have wrong lens calibration data, causing incorrect cropping.
- CSCws27450 - Room Navigator is not displaying the list of available codecs before pairing.
- CSCws01436 - Meetings may be removed from a device when there are network issues.
- CSCwn40835 - In low light environment, image from Quad Camera has a blueish hue.
- CSCwr95658 - Out of memory with repeated hotplug events possibly causing memory leak.
- CSCwp51335 - Music Mode results in poor audio quality in WebRTC Google Meet calls.
- CSCwo94631 - In a Microsoft Teams CVI meeting, if the Desk Pro muted the video, then starts to share the whiteboard, far end participants see a blank screen.
- CSCwr88696 - Not able to upload custom wallpaper on Room USB.
- CSCwq58165 - Analytics events can't distinguish between VIMT joins and other non-VIMT Microsoft Teams joins.
- CSCwr59987 - Dialog box for a macro doesn't close as expected on the device UI on RoomOS 11.32 and later.
- CSCwq99591 - Audio artefacts heard by far end participants.

## RoomOS 11.34

### December 1, 2025

**Software version: RoomOS 11.34.1.5**

### Fixed issues

- [Qt CVE-2025-12385, vulnerability in QML Text markup parsing](https://www.cve.org/CVERecord?id=CVE-2025-12385)
- CSCws01436 - Meetings may be removed from a device when there are network issues.

### November 10, 2025

**Software version: RoomOS 11.34.1.2**

### Fixed issues

- CSCwr76621 - Pairing diagnostics warning shown even though Webex Proximity is off.
- CSCwr54945 - Can't start AI Meeting Summary even though joined as host from a device.
- CSCwq91813 - 'LedControl OutsideOfficeHours: Off' no longer working on paired Room Navigator in scheduler mode in RoomOS 11.31.
- CSCwr77606 - Microsoft Teams Rooms: Share tray opens when Miracast share starts in a Microsoft Teams call covering the share button.
- CSCwr50131 - Traditional Chinese - Virtual keyboard is missing the character 'ㄦ'.
- CSCwq00975 - Audio console macro code is not auto-upgraded to post-CommonJS javascript.
- CSCwr20472 - USB audio stopped working after upgrade from 11.29 to 11.31.
- CSCwr26381 - IEEE8021X authentication fails: SUDI private key error.
- CSCwr00258 - Webex call media disconnect failure with HTTP Proxy.
- CSCwr10271 - Japanese character wordings are truncated with ......

## RoomOS October

### December 15, 2025

**Software version: RoomOS 11.33.1.10**

### Fixed issues

- CSCws37589 - Recently manufactured Quad Camera units have wrong lens calibration data, causing incorrect cropping.

### December 1, 2025

**Software version: RoomOS 11.33.1.9**

### Fixed issues

- [Qt CVE-2025-12385, vulnerability in QML Text markup parsing](https://www.cve.org/CVERecord?id=CVE-2025-12385)
- CSCws01436 - Meetings may be removed from a device when there are network issues.

### October 27, 2025

**Software version: RoomOS 11.33.1.7**

### Fixed issues

- CSCwr54945 - Can't start an AI Meeting Summary even though the user is joined as host from the device.
- CSCwr21582 - The Shared Timer app failed to load on the device.

### October 1, 2025

**Software version: RoomOS 11.33.1.3**

### Join Webcasts as attendee

You can now join Webcasts as an attendee from a Cisco device.

Read more about [joining Webcasts from a device](https://help.webex.com/z7jt86/).

### Cross-boundary join support for Webex Suite Meeting Platform Webinars

Webex Suite Meeting Platform (WSMP) Webinars that are organized by Webex for Government organization can now be joined from devices that are registered to commercial organizations. This change also allows Webex for Government registered devices to join WSMP Webinars organized by commercial organizations.

Devices that are linked with Webex Edge for Devices need to have Webex optimized experience enabled.

### HDMI out enabled by default

With this update we are enabling HDMI out by default on Board Pro and Desk Pro - meaning any external displays connected to the HDMI output port will be active without requiring a device reboot.

Previously, HDMI out was not enabled by default and required being explicitly configured through user settings.

### Ultrasound frequencies in VU Meter

To ease troubleshooting ultrasound related issues for both proximity pairing and ultrasound-based wakeup, we’ve added an option in the device’s local web interface to only show ultrasound frequency range (18kHz-24 kHz) in the VU Meter.

On the local web interface, go to Settings > Audio and Video > Microphones. Toggle on Show Ultrasound Only.

### Video matrix support on Board Pros

Video matrix is now supported on Board Pro and Board Pro G2.

### Macros library update

We've updated the RoomOS macros library to user jsxapi 6.0.0 in the October release. The upgrade to jsxapi 6.0.0 drops support for node14 and node16 and adds support for node20 and node22\. To ensure that your macros work as expected, we recommend that you test them on the preview channel before this change is in the stable channel.

### Fixed issues

- CSCwr26381 - IEEE8021X authentication fails: SUDI private key error.
- CSCwr20472 - USB audio stopped working after upgrade from 11.29 to 11.31.
- CSCwi34791 - Device crashes due to vi5 driver resource leak leading to xruns.
- CSCwq79387 - In presenter and audience mode, layout reverts to grid when in Auto mode.
- CSCwq86385 - Meeting recording audio prompt doesn't work on RoomOS devices for non-converged Webinar.
- CSCwq91813 - 'LedControl OutsideOfficeHours: Off' no longer working on paired Room Scheduler in RoomOS 11.31.
- CSCwq57335 - Device crashes with SIGBUS in neon::rect\_memset32.
- CSCwq57405 - Closing browser tab while microphone VuMeter is active does not turn off microphone LEDs.
- CSCwn97177 - Participant counter missing in CMS calls on RoomOS 11 devices.

## RoomOS September

### September 1, 2025

**Software version: RoomOS 11.32.1.3**

### User-based PIN lock

We have changed the PIN to be user-based instead of being tied to a device. This lets you use the same PIN across all your devices. You can use the same PIN to lock a shared device you are using for hot-desking.

If you forget your PIN or need to reset it, you can do so through User Hub. You can also change the PIN directly from one of your devices.

Once the user-based PIN lock is activated, existing device-based PINs will be migrated to user-based PINs.

Read more about [user-based PIN](https://help.webex.com/nokp2m5/).

### Macros, UI extensions, and web views on Room Navigator

We've added support for macros, UI extensions, and web views on Room Navigator panels outside the room. This gives you the same programmability and extensibility that was previously only available inside the room.

Also, we have added support for a location URL which launches the map for the given workspace if configured in Control Hub.

Supported on both paired and standalone Room Navigators.

Read more about [macros, UI extensions, and web views on Room Navigator](https://roomos.cisco.com/doc/TechDocs/MacrosExtensionsRoomScheduler).

### Dynamic transitions for speaker and group camera mode

In speaker mode, the camera will automatically adjust close-ups to follow slight movements of the person speaking. In group mode, the view will dynamically adapt to subtle changes in the scene, ensuring optimal framing for all participants.

Read more about [group and speaker mode](https://help.webex.com/gzz3q7/).

### Updates to live annotation

Participants can annotate live even on presentations that are shared from RoomOS devices without a touch screen.

Read more about [live annotation](https://help.webex.com/q1hs6cb/).

### Active stylus support with third-party touch screens

Enhance your collaboration experience with active stylus support on third-party touch screens. Users can now draw, pan, and interact seamlessly with the whiteboard using active styluses.

Read more about [third-party touch screen support](https://help.webex.com/ncyh2f/).

### Changes in Microsoft Exchange Online affecting “Send to email”

Microsoft has announced they will disable Basic Auth for SMTP with Exchange online in September 2025\. This is how Cisco devices authenticate with SMTP servers to send whiteboards as PDFs by email. From this date, _“send to email”_ will no longer be compatible with Microsoft 365 Exchange online. 

Read more about [configuring SMTP settings on Board and Desk Series](https://help.webex.com/nkgc99h/).

### Enable or disable ultrasound pairing

We've added a configuration to enable or disable ultrasound pairing. This Proximity Mode setting only impacts devices that are registered to the Webex cloud service. The configuration is available on all products.

```
Webex Proximity Mode: Off/On
```

Default value: On

### Fixed issues

- CSCwq16230 - Room Kit crashes in a large meeting.
- CSCwp27732 - Remote participants see delay on the video from the presenter camera in presenter and audience mode.
- CSCwq74630 - Possible crash using Miracast.
- CSCwq29183 - Devices placed into a lobby during meeting drop with 'OnlyRemainingParticipantTimeout'.
- CSCwp38241 - With Microsoft Teams WebRTC, video freezes towards some Microsoft Teams participants.
- CSCwp37902 - No diagnostics warning shown when personal device gets deactivated.
- CSCwq70172 - Webex Assistant audio is played twice depending on back-end settings.
- CSCwp38883 - Ceiling Microphone Pro setup not able to proceed and not showing speech bubble.
- CSCwq55542 - No temperature or humidity reported on device's local web interface.
- CSCwq48672 - Customer's all-day meeting is checked out.
- CSCwq33053 - Codec Pro with multiple Ceiling Microphone Pros might crash during meetings.
- CSCwq23577 - Device went offline after upgrade due to custom message configuration exception.
- CSCwq27215 - After clicking leave breakout session, the Room Navigator UI is still showing 'Leave'.
- CSCwq29748 - AI Assistant doesn't react on voice commands after wake word 'Hello Webex'.

## RoomOS August

### November 6, 2025

**Software version: RoomOS 11.31.1.7**

### Fixed issues

- CSCwr89311 - Codec Pro based products getting bounced back between current generation and previous generation.

### October 9, 2025

**Software version: RoomOS 11.31.1.6**

### Fixed issues

- CSCwr54945 - Can't start an AI Meeting Summary even though the user is joined as host from the device.
- CSCwr21582 - The Shared Timer app failed to load on the device.

### August 14, 2025

**Software version: RoomOS 11.31.1.5**

### Fixed issues

- CSCwq74682 - Possible reboot when macro runtime times out waiting for a promise.
- CSCwq74630 - Possible crash using Miracast.
- CSCwq74560 - UI reboots during Microphone Pro setup trying to get camera placement.
- CSCwq70172 - Webex Assistant audio is played twice depending on back-end settings.

### August 4, 2025

**Software version: RoomOS 11.31.1.3**

### Support for Cisco Room Vision PTZ camera

Cisco Room Vision PTZ is a video-over-IP tracking camera designed to dynamically track and frame presenters and speakers by combining motorized pan-tilt-zoom with embedded AI. 

The camera features video over IP connectivity to make it easy to set up and manage over Ethernet. Room Vision PTZ works with Cisco video devices, and can be managed in the cloud while providing scalability to power multi-camera scenarios and advanced deployments.

Supported with: Room Kit EQ, Room Kit EQX, Room Bar Pro, Board Pro G2, Board Pro, Codec Pro.

Read more about [Cisco Room Vision PTZ](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/conferencing-cameras/room-vision-ptz-ds.html).

### Manual closed captioning on devices

Manual closed captioning, also known as, Communication access real-time translation (CART), is now available on Cisco devices.

Hosts and Co-hosts can now assign the captioner role to a meeting participant in the Webex App. The captioner can manually transcribe speech to text in the Webex App and the manual captions will appear on your device. You can enable or disable manual captions on your device from [the closed captions dialog](https://help.webex.com/5geecr/).

Manual captions must be enabled in Control Hub by an organization administrator.

Read more about [manual closed captioning in Webex Meetings](https://help.webex.com/zzh003/).

### Support for LLDP network discovery 

RoomOS has had support for network discovery using CDP (Cisco Discovery Protocol) for a long time. Now we're adding support for LLDP (Link Layer Discovery Protocol), a vendor-neutral, IEEE 802.1AB standard network discovery protocol. LLDP works across different network vendors, increasing interoperability. CDP continues to be the default discovery protocol, but administrators can change this to LLDP if desired. 

Read more about [LLDP support on devices](https://help.webex.com/qw894i/).

### Optimized feedback mechanism in the xAPI engine

Previous software versions had a hard limit of feedback expressions one could register on the device. From RoomOS 11.31, this limitation has been removed. There is no longer a limit to the number of subscriptions, and the more granular you are on your subscriptions are, the more optimized your code will be.

**Example:**

Previously, if you wanted to monitor call-nodes we would recommend that you subscribe to the whole call element like this: _xFeedbackRegister Status/Call_ to minimize the number of subscriptions. 

Now we recommend that you subscribe to the specific feedback you need. For example:

_xFeedbackRegister Status/Call/Status_ 

_xFeedback Register Status/Call/AnswerState_ 

_xFeedback Register Status/Call/DisplayName_

We have done thorough testing of the xAPI to avoid any side effects of this optimization among existing integrations using the xAPI. Due to the asynchronous nature of the xAPI, the exact order and timing of feedback event responses on the command line or macro event handlers is something that is difficult to guarantee. The code optimization done to the feedback framework may potentially give some order and timing changes.

Although most macro code or xAPI integrations will not be affected, code that is written in a way making it vulnerable to race conditions could potentially see different behavior. If any of your macros or integrations are behaving differently after this upgrade, we recommend verifying whether your code is at risk for such race conditions.

### Fixed issues

- CSCwq33053 - Device crash with signature SIGABRT in main: FsmMain\_Q queue full.
- CSCwq23577 - Device went offline after upgrade due to custom message configuration exception.
- CSCwq27215 - After clicking leave breakout session, the Room Navigator UI is still showing "Leave".
- CSCwq29748 - AI Assistant doesn't react on voice commands after wake word "Hello Webex".
- CSCwp32954 - On a device linked with Webex Edge for Devices, discrepancies in software tab when cloud upgrade mode is off.
- CSCwp14089 - Personal mode device linked with Webex Edge for Devices dial SIP instead of SPARK.
- CSCwo54503 - In classroom mode, Quad Camera fails to track speaker until SpeakerTrack diagnostics is enabled.
- CSCwq32352 - SpeakerTrack diagnostic does not handle upside down camera.
- CSCwq02559 - Local preview of HDMI input does not show after disconnecting USB-C input.
- CSCwp93251 - Black screen when HDMI input disconnected in a call.
- CSCwp18883 - System crash due to high load on VIC processor.
- CSCwp38241 - With Microsoft Teams WebRTC, video freezes towards some Microsoft Teams participants.
- CSCwp58979 - People are placed too high in video framing.

## RoomOS July

### November 6, 2025

**Software version: RoomOS 11.30.1.8**

### Fixed issues

- CSCwr89311 - Codec Pro based products getting bounced back between current generation and previous generation.

### August 25, 2025

**Software version: RoomOS 11.30.1.7** 

### Fixed issues

- CSCwq55926 - Device may reload and restart into maintenance mode.

### July 8, 2025

**Software version: RoomOS 11.30.1.5**

### Hot-desking prebooking

Now you can book your hot-desking space even before walking into the office. Device in the space is reserved for the user and they simply sign-in to confirm and personalize.

Also, RoomOS provides extensive xAPIs to prebook remotely such that any desk reservation solution could integrate with it. 

Hybrid Calendar can also be used for reserving desks or quiet rooms much like conference rooms.

Room booking in RoomOS will seamlessly integrate with the Cisco Spaces solution. Cisco Spaces will be released separately.

Read more about how to [enable room booking](https://help.webex.com/nzp31jb/), [ add services to workspaces](https://help.webex.com/hx8m1o/), and [use hot-desking enabled devices](https://help.webex.com/zgjezbb/).

### Capture more participants in frames

With frames camera mode showing participants in two rows instead of the previous one, up to eight participants are shown in their individual frames.

The original frames experience will still be available to configure through the xAPI.

Supported on: Room Kit Pro, Room Kit EQ, Room Kit EQX, Room Bar Pro, Board Pro G2.

Read more about [frames camera mode](https://help.webex.com/nr3adaf/).

### Batch erase on whiteboards

This feature is an improved eraser that allows you to erase multiple strokes in one go with a real-time preview of what’s being removed. Made a mistake? Undo everything instantly with a single undo action. 

Supported on Board Pro, Board Pro G2, Desk Pro, and codecs connected to [supported third-party touch screens](https://help.webex.com/ncyh2f/).

Read more about [whiteboarding on devices](https://help.webex.com/zfhy55/).

### Main video compositing in WebRTC meetings

Main video compositing functionality is now available for WebRTC meetings, extending a capability that has already been available in Webex Meetings and calls. This enhancement provides a consistent experience across all meeting types and offers greater flexibility for users with unique setups.

You can select and configure specific video sources, such as a device camera or an HDMI-connected laptop, as the primary video feed during a call. Multiple video sources can be displayed in either a side-by-side layout or as picture-in-picture (PiP). Control the input source through the [xCommand Video Input SetMainVideoSource](https://roomos.cisco.com/xapi/Command.Video.Input.SetMainVideoSource/) which allows you to switch between video sources or cameras during a call. This can also be used to switch between cameras programmatically.

Wireless video sources are not supported for video compositing in WebRTC calls.

### DHCP Option 55 Parameter Request List

This update to the DHCP Option 55 Parameter Request List introduces new and modified parameters that clients can request from the DHCP server. This improves network configuration capabilities and compatibility. Read more about [DHCP Options](https://help.webex.com/en-us/article/nbm2d7p/).

### Fixed issues

- CSCwq02559 - Local preview of HDMI input does not show after disconnecting USB-C input.
- CSCwp93251 - Black screen when HDMI input disconnected in a call.
- CSCwp18883 - System crash due to high load on VIC processor.
- CSCwo54503 - In classroom mode, Quad Camera fails to track the speaker until SpeakerTrack Diagnostics is enabled.
- CSCwp38241 - Video freezes in Microsoft Teams WebRTC meetings for some Microsoft Teams participants.
- CSCwj80132 - Codec reported a crash after integration to ThousandEyes.
- CSCwo61235 - No microphone input from integration with Shure ANIUSB-MATRIX.
- CSCwp19881 - Room Navigator in room scheduler mode shows inconsistent "Available" status.
- CSCwo84397 - Device shows freezing or lagging presentation when remote participant shares.

## RoomOS June

### November 6, 2025

**Software version: RoomOS 11.29.1.9**

### Fixed issues

- CSCwr89311 - Codec Pro based products getting bounced back between current generation and previous generation.

### June 4, 2025

**Software version: RoomOS 11.29.1.5**

### Images on whiteboard canvas

You can now add images to the whiteboard canvas using [https://whiteboard.webex.com](https://whiteboard.webex.com/). You can modify, copy, and delete the images just like other objects, such as shapes, on the canvas. This enhances collaboration by allowing you to add visual elements for improved communication and creativity. 

Currently, the ability to add new images is not available in RoomOS but may be introduced in the future. 

### Changes to default bandwidth

From RoomOS June (11.29), the default bandwidth for devices that support 20 Mbps is increased to 20 Mbps. This is to provide better video quality when possible.

If you need to override the call rate, we recommend that you set the _Conference DefaultCall Webex Rate_ configuration to 0.

Read more about [bandwidth management](https://help.webex.com/51qu5cb/).

### Duplicate whiteboard to HDMI output

Whiteboards can now be mirrored to a secondary screen through HDMI Out while editing outside of calls. This allows you to share whiteboards on a larger or secondary passive display for improved visibility. 

Supported on Cisco Board Pro and Board Pro G2, and when using a third-party touch screen as the primary screen and a passive secondary screen. 

Available for Webex registered devices and devices linked with Webex Edge for Devices with Webex optimized experience enabled.

### Bi-directional share in Google Meet from devices 

Cisco devices now support sharing content in Google Meet meetings using HDMI, USB-C, AirPlay, or Miracast. This enables seamless content sharing, making it easier to use the sharing options of Cisco devices. Google’s existing wireless sharing through their companion app is still supported. 

**Limitation:** Not supported on Board and Board S Series, Room 55, Room 70, Room Kit, Room Kit Mini, and Room Kit Plus.

Read more about [Google Meet meetings on RoomOS devices](https://help.webex.com/nxx11sk/).

### Cisco spatial meetings on Board Pro G2

Cisco spatial meetings deliver an immersive experience featuring life-like video and incredible depth using Webex Meetings, a Board Pro G2, and an Apple Vision Pro. This is the same experience that was earlier introduced on Room Bar Pro.

The dual-lens cameras in Cisco collaboration devices capture stereoscopic images, providing a realistic 3D view of people, objects, and surroundings to meeting participants using Apple Vision Pro. 

Read more about [spatial meetings](https://help.webex.com/395s5j/).

### Side panel on Room Navigator

The Room Navigator now includes a side panel for quick access to settings, providing a consistent experience across devices. Known from the Desk and Board Series interfaces, we now provide the same entry point to settings on all devices.

### USB camera support for Cisco Desk and Desk Mini

Cisco Desk and Desk Mini now support USB cameras, allowing any USB 2.0 camera that supports the MJPEG format to function effectively. Available for 8 GB models.

Read more about [USB camera support](https://help.webex.com/a0qtgy/).

### Fixed issues

- CSCwo84397 - Device shows freezing or lagging presentation when remote participant is sharing.
- CSCwn77046 - Language change from Room Navigator does not take effect.
- CSCwp10363 - Faulty Wi-Fi hardware will leave the device in maintenance mode and non-operational.
- CSCwo68317 - Device sends a single CRLF ("\\r\\n") keep alive packet instead of a double CRLF.
- CSCwo73291 - All-day meetings that last for multiple days have duration hard-coded to 24 hours.
- CSCwo92489 - Bad SMTP configuration detected error when device boots up.
- CSCwo79347 - Unable to share with Proximity App.
- CSCwo76164 - Image from Room Bar Pro is blurry when zoomed into the furthest speaker.
- CSCwo66211 - _Remote access stopped_ notification never removed.
- CSCwo88438 - _View_ button shown on Room Navigator even when HDMI cable has been disconnected from source.
- CSCwo90323 - _Microphone muted_ notification appears in some scenarios when microphone is not muted.
- CSCwo66080 - Error sending <Active Source> from 15 to 15: Machine is not on the network.
- CSCwo54503 - In Classroom Mode, Quad Camera fails to track a speaker until SpeakerTrack Diagnostics is enabled.
- CSCwo77021 - Incorrect LED color shown on wall mounted Room Navigator while display color is correct.

## RoomOS May

### May 14, 2025

**Software version: RoomOS 11.28.1.5**

### Fixed issues

- CSCwp10363 - Faulty Wi-Fi hardware leaves the device in maintenance mode (non-operational).
- CSCwp10355 - Not possible to create UI extensions.

### May 7, 2025

**Software version: RoomOS 11.28.1.3**

### Zoom lobby management

We've added access to a keypad to our Zoom CRC meetings UI. The keypad can be used for features such as the lobby and roster list management.

Read more about [joining Zoom meetings](https://help.webex.com/0lobg6).

### Disappearing ink for whiteboarding

With this release, disappearing ink can be used during whiteboarding which has previously only been available for live annotations. Perfect for enhancing collaboration on whiteboards, this feature lets you make temporary marks, highlighting key points without adding clutter to your whiteboard.

Read more about [whiteboarding on Board and Desk Series devices](https://help.webex.com/zfhy55/).

### Transpile deprecation on RoomOS

We have updated our JavaScript engine to use QuickJS, which serves as a modern, updated JavaScript runtime for embedded systems. As part of this move, we now plan to remove the support for transpilation of JavaScript in our platform. 

Read more about this [change](https://help.webex.com/n449irj/).

### Fixed issues

- CSCwo66211 - 'Remote access stopped' notification never removed.
- CSCwo90323 - 'Microphone muted' notification appears in some scenarios when microphone is not muted.
- CSCwo76164 – Image from Room Bar Pro is blurry when camera is zoomed in to the furthest speaker.
- CSCwo79347 - Unable to share with Proximity App.
- CSCwo46274 - Miracast audio not sent to the far-end in CVI calls.
- CSCwo64413 - Unable to press 'Connect' for custom Wi-Fi network using EAP-TLS.
- CSCwo61828 - OBTP calendar update fails for Microsoft Teams WebRTC booking.
- CSCwo26686 - Sharing a whiteboard does not work as expected when the device has a second screen connected.

## RoomOS April

### April 28, 2025

**Software version: RoomOS 11.27.1.8**

### Fixed issues

- CSCwo90323 - "Microphone muted" notification appears in some scenarios when microphone is not muted.

### April 10, 2025

**Software version: RoomOS 11.27.1.7** 

### Updated admin passphrase requirement

Starting in April, RoomOS implements a new process for setting up admin passphrase when accessing the xAPI terminal or local device web interface.​ 

Previously, devices allowed an initial blank admin passphrase (resulting in a constant on-screen warning until the passphrase was set by the admin).​ With this update, users are required to set an admin passphrase immediately upon logging into a newly reset system.​ This change affects both the local device web interface and terminal access (xAPI).​ 

There will be no impact on onboarding processes that use activation codes from Control Hub.​ 

The change impacts customers using third-party or custom-built provisioning solutions, making it important for them to adapt their onboarding flows accordingly.

Read more about [the passphrase requirement](https://help.webex.com/j27bd0/).

### Play protected content using AirPlay

We're adding support for playing copyright-protected content locally on Cisco devices using AirPlay, facilitating secure in-room collaboration. 

Incorporating FairPlay, Apple's DRM technology, ensures secure handling of protected videos. It protects sensitive or copyrighted content by restricting sharing to local environments, ensuring compliance and user privacy.

Read more about [enabling copy-protected content on devices](https://help.webex.com/niew98v/) and [using AirPlay](https://help.webex.com/ndlsg3c/).

### Devices support for the new Webex Webinars

Webex Webinar is transitioning to the Webex Suite platform, and on Cisco devices you get an enhanced attendee experience. 

This change ensures improved connectivity and reliability while maintaining the existing built-in join experience for panelists. 

Read more about [Webex Suite functionality](https://help.webex.com/m61d8eb/).

### Auto catch-me-up with AI Assistant

Now, if the meeting summary in the AI Assistant was running and you join late to a meeting, you will automatically be caught up on anything you might have missed.

Read more about [Cisco AI Assistant on devices](https://help.webex.com/e4roeg/).

### Consume stage 

With this layout addition, a device will now respect a host setting and syncing their stage for meeting attendees. Participant's videos are shown in their set position when the host syncs their stage in the Webex App.

Read more about [participants on stage on devices](https://help.webex.com/nzc4653/) and [host controls for stage in Webex App](https://help.webex.com/nic6kmbb/).

### Whiteboarding updates

**Draw on other canvas objects**

Now you can draw freely on top of any whiteboard canvas object, such as sticky notes, shapes, or text boxes. You can send strokes and objects forward or backward to organize your canvas, enhancing your storytelling and presentation flow.

**Copy strokes**

Previously, you could only copy and paste objects like text boxes, shapes, sticky notes, and emojis. Now you can seamlessly copy and paste stroke elements as well, making your collaborative sessions more dynamic and fluid.

Read more about [whiteboarding on Board and Desk Series](https://help.webex.com/zfhy55/).

### Screen reader support

Enhancing accessibility for blind and visually impaired users, this feature allows inclusive use of Cisco collaboration devices for all.

The screen reader is a practical, straightforward tool that improves the accessibility of video devices. By providing audible feedback for on-screen interactions and changes, it ensures that visually impaired users can operate the device independently and with confidence.

- Toggle the screen reader on and off by swiping down three fingers on the touch interface.
- Navigate between elements with right and left swipes, and between headings and sections with up and down swipes.
- Confirm actions with double tap.

In this release, you must first enable the screen reader from the settings menu on the device. Go to Device settings  \> Accessibility \>  Screen reader.

Read more about [accessibility on devices](https://help.webex.com/l1tyo1/).

### Webex sign-in for device web interface

With Webex sign-in for the local device web interface, administrators can fully manage access per device using the existing Webex user and identity system. 

This streamlines access control to individual devices, with a single source for authorization in Control Hub. It also promotes a more secure and transparent deployment of devices as enterprise equipment. 

It's a possible to grant access to any Webex user per system, allowing external partners and AV specialist access per device.

Read more about [sing-in to device web interface with Webex credentials](https://help.webex.com/n5pqqcm/#reference-template%5F0e2bb299-d820-4c60-8e32-6e960fe9c481).

### Extended USB camera support

You can now choose to use an additional USB camera as the main video source in a meeting or a call. Previously USB cameras were only supported for sharing content.

Read more about [USB camera support](https://help.webex.com/a0qtgy/).

### Device respects host setting for "Anyone can share"

Now if the host has toggled "Anyone can share" to _Off_, other participants and meeting attendees will see the 'Share' capabilities in their meeting disabled or grayed out. They are still able to view their screen locally if they wish. Hosts and cohosts can share as usually.

Read more about [host controls for sharing in Webex Meetings](https://help.webex.com/iv300cb/) and about [joining Webex Meetings on devices](https://help.webex.com/pq3vkab/).

### Fixed issues

- CSCwo61828 - OBTP Calendar update fails for Microsoft Teams WebRTC booking.
- CSCwo45899 - Wi-Fi connectivity is not stable on Room Bar Pro and cannot auto connect back.
- CSCwo26686 - Sharing a whiteboard does not work as expected when the device has a second screen connected.
- CSCwn80133 - Room Bar does not autostart presentation.
- CSCwo08130 - After a software upgrade, there is a system diagnostic "Hardware and operating system status. Check references."
- CSCwn97177 - Participant counter missing in CMS calls for RoomOS 11 devices.
- CSCwn38296 - Brightness level settings not working as expected on Cisco Boards.
- CSCwn61908 - Room Kit Pro displays 2 video streams in a personal room meeting, when not sharing.
- CSCwo35073 - Maximum recv jitter in MQE has high spikes, causing concerns for customers.
- CSCwo39605 - Miracast share from an Intune enrolled laptop is seen as full green screen on the far-end in a call.
- CSCwn83990 - Device not providing proximity scans even though Wi-Fi is allowed and enabled.
- CSCwn97926 - Ultrasound pairing signal is not played on in networked standby if Audio Lowpower mode is enabled.
- CSCwo65749 - Pairing too many peripherals can cause AirPlay sigabrt due to connections limit being hit.
- CSCwn17143 - xCommand Video Matrix command providing incorrect resolution.

## RoomOS March

RoomOS March is available for devices with Microsoft Teams Rooms that have finalized the AOSP Device Management migration. Read more about [Moving Microsoft Teams Android Devices to AOSP Device Management](https://roomos.cisco.com/doc/MTR/AOSP).

### March 5, 2025

**Software version: RoomOS 11.26.1.5**

### White-balance calibration for multicamera setups

In multicamera setups you may see differences in the colors of the video between the different cameras. The new calibration lets you configure a suitable white-balance profile for your setup.

This is available for all multicamera rooms where cross-view or extended reach is configured.

Supported devices: Room Kit EQ, Room Kit EQX, and Codec Pro with Quad Camera and PTZ4K

Read more about [white-balance calibration in the cross-view documentation](https://help.webex.com/n1av2t9/).

### Virtual lens on Room Bar Pro and Board Pro G2

Virtual lens extends the camera reach with an AI solution to make sure the active speaker at the far-end of a long and narrow conference table is captured at high quality. Our director will automatically use the virtual lens in speaker mode if that enables a higher-quality capture.

Supported devices: Room Bar Pro and Board Pro G2

Read more about [camera modes](https://help.webex.com/ltrv3c/).

### USB content camera support

RoomOS devices now support content cameras that can be plugged into a USB port in or out of a call. Any USB2.0 camera that supports MJPEG format should work.

USB cameras are only supported for content and not for video. You can select the camera content stream from the share tray.

Supported devices:

- Room Bar and Room Bar Pro
- Room Kit EQ and EQX
- Room Kit Pro
- Board Pro and Board Pro G2
- Desk Pro

Read more about [USB content camera support](https://help.webex.com/a0qtgy/).

### Move to lobby on devices

Hosts and co-hosts can now move anyone to the lobby directly from their device. Hosts and co-hosts can also move a device to the lobby from either a Cisco device or Webex App. 

**Note:** Only available in Webex Suite meetings. Not supported in legacy Webex Meetings. 

Read more about [admitting participants to meetings](https://help.webex.com/qg2eah/).

### Fixed issues

- CSCwn98983 - Cisco devices have calls disconnecting after upgrade to RoomOS 11.25.
- CSCwn49516 - Identity verification fails with end-to-end encryption.
- CSCwn35442 - Miracast content sharing intermittently not able to connect.
- CSCwn94389 - Using meetingPlatform: \\\\ breaks for bookings put.
- CSCwn92535 - Share in call option disabled when laptop plugged in.
- CSCwn85332 - Non-joinable local booking shown even though configuration is set to Hidden.
- CSCwn64119 - Malicious rsync server might write to arbitrary files on Touch 10.
- CSCwn77046 - Language change from Room Navigator does not take effect.
- CSCwn42483 - Camera connected message does not clear.
- CSCwn54324 - Unable to change the Persistency settings.
- CSCwn69937 - Brightness not working as expected on Room Kit EQ with Quad Camera.
- CSCwn11337 - Sharing using USB-C for Room USB is not working with IP-phones in the same workspace.
- CSCwn71990 - Room Scheduler network paired to codec - cannot access network settings from the touch panel.
- CSCwn36703 - Sharp LE701 display fails to wake until a call is placed.
- CSCwk39088 - Selfview still shows when OnCall mode setting is Off.
- CSCwn44970 - Adhoc booking overlapping an existing calendar booking.
- CSCwo26187 - Audio output volume reduced in RoomOS 11.23.

## RoomOS February

RoomOS February is available for devices with Microsoft Teams Rooms that have finalized the AOSP Device Management migration. Read more about [Moving Microsoft Teams Android Devices to AOSP Device Management](https://roomos.cisco.com/doc/MTR/AOSP).

### February 12, 2025

**Software version: RoomOS 11.25.1.6 a103ffd6393**

### Fixed issues

- CSCwn98983 - Cisco devices have call disconnections after upgrading to RoomOS 11.25.

### February 4, 2025

**Software version: RoomOS 11.25.1.4 51b066d9203**

### Cisco spatial meetings

Cisco spatial meetings delivers an immersive experience featuring life-like video and incredible depth using Webex Meetings, a Cisco Room Bar Pro, and an Apple Vision Pro. 

The dual-lens cameras in Cisco collaboration devices capture stereoscopic images, providing a realistic 3D view of people, objects, and surroundings to meeting participants using Apple Vision Pro. 

Read more about [spatial meetings](https://help.webex.com/395s5j/).

### Cisco Room Bar BYOD

We now support Cisco Room Bar BYOD. Room Bar BYOD is a flexible room device that allows you to equip your small meeting spaces, huddle, and focus rooms with a solution that works with any meeting app. It’s easy to set up, maintain, and use, and you get the same audio and video intelligence as with the Room Bar. Room Bar BYOD connects to a computer with a USB-C cable and you can use the computer to host and control the meeting. 

When registered to Control Hub, you can join directly and share content by pairing with the Webex App on either your laptop or mobile device. The device will also display upcoming meetings and room reservations. By registering your Room Bar BYOD to Control Hub, you also get enterprise cloud management and analytics tools that allow IT to streamline deployment and maintenance.

You can upgrade to the full Room Bar experience by connecting the device to a Room Navigator.

Read more about how to [administer](https://help.webex.com/xb5vyl/) and [use](https://help.webex.com/y2l6ul/) Room Bar BYOD.

### Share web apps as content

Now, web views are available in the share tray like any other content source for easy access to start and stop share while in a call. It also makes it easier to switch between web views and web apps while out of a call. 

You access web apps in the share tray in or out of a call the same way as other content you share from a computer.

Read more about [sharing content](https://help.webex.com/c0jgpv/) and [web apps](https://help.webex.com/n041liz/).

### Fixed issues

- CSCwn42483 - Camera connected message does not clear.
- CSCwn77046 - Language change from Room Navigator does not take effect.
- CSCwn71990 - Can't access network settings from Room Navigator in scheduler mode when it's paired to a codec over network.
- CSCwn64119 - Malicious rsync server might write to arbitrary files on Touch 10.
- CSCwn61362 - Loading whiteboards fails - Error seen on many devices with integrated touch screens after RoomOS December upgrade.
- CSCwn55366 - 'UserInterface RoomScheduler Mode' reset to 'Auto' after reboot.
- CSCwk39088 - Selfview still shows when 'Video Selfview OnCall Mode' is set to 'Off'.
- CSCwn55425 - Right-to-left languages shown as left-to-right in Meeting and Settings menus.

## RoomOS January

### February 20, 2025

**Software version: RoomOS 11.24.1.8 b47804c63e8** 

### Fixed issues:

- CSCwn64119 - Malicious rsync server might write to arbitrary files on Touch 10.

### January 16, 2025

**Software version: RoomOS 11.24.1.5 d18e2cd1afe**

RoomOS January 11.24.1.5 is not available for devices with Microsoft Teams Rooms. 

### External and unverified users in Webex Meetings on devices 

In a Webex Meeting on your device, a user who is not logged in shows up in the participant list with a label saying "Unverified" to display their level of authentication to other meeting attendees. 

Similarly, logged in users who are external to the meeting host's organization appear with an "External" label in the participant list. 

### Show active speaker on stage

In November, we increased the maximum number of participants on stage from 4 to 8\. Now, you are also able to show the active speaker on your stage in addition to up to eight other participants.

Read more about [stage layout](https://help.webex.com/nzc4653/).

### Closed captions (CC) improvements

We've made improvements to closed captions (CC) in Webex Meetings. You can now see the name of the room or meeting participant to know where the caption is coming from. We've also increased the number of lines that you see on the screen from 3 to 4 lines.

Read more about [closed captions](https://help.webex.com/5geecr/).

### Fixed issues

- CSCwn61362 - Loading whiteboards will fail. Error seen on many devices after RoomOS December upgrade.
- CSCwn35442 - Miracast content sharing intermittently not able to connect.
- CSCwm77618 - One Drive files fail to open on devices connected to a Webex App space.
- CSCwn06786 - Unable to add Participants to a meeting from a Touch 10 on version 11.21.
- CSCwn60017 - Notifications (including Miracast PIN) are not displayed on-screen.
- CSCwi14065 – Camera restart: ERROR in eventloop + FALCON\_ERROR
- CSCwn43812 - Audio OutputType LineOut does not include sound from USB-C local presentation source.
- CSCwj07947 - Quad Camera with extended range enabled jump around to inanimate objects.
- CSCwn39570 - USB-C audio input is not muted after stopping a share.
- CSCwn33231 - Board Pro stylus is not able to write or select.
- CSCwn37478 - External microphones voice tracking toggle is not enabled on on-premises RoomOS11.20.2.3.
- CSCwk65610 - Meeting name changes to CMS conference number with ActiveControl: Off.
- CSCwn01511 - Failed to upgrade from 11.14 to 11.17 and downgrade from 11.17 to 11.14 using URL upgrade.
- CSCwn07310 - Device receives low resolution presentation intermittently during Teams CVI meeting.
- CSCwm98535 - PresenterTrack can't be turned off from Room Navigator after upgrading to RoomOS October (11.21).
- CSCwm11564 - SMTP warning not clearing when network is restored.
- CSCwn03447 - Non-English "Room Available all day" partially obscured on touch panel.

We're sharing details about our planned feature releases that are coming out soon. Keep in mind that we might need to make changes to release dates and the features themselves. You can subscribe to this article to get updates on any changes.

## March 2026

**Better image quality in Cross-view with moving PTZ cameras**

Cisco’s new Room Vision PTZ Cameras deliver improved image quality and more flexible camera placement for larger meeting rooms. By using the camera’s physical pan, tilt, and zoom features for framing, you get clear, high-quality video without digital cropping. This upgrade makes cross-view setups possible in bigger spaces and helps create more inclusive and engaging meeting experiences. 

**Video exclusion zones**

Define areas that your meeting room cameras should ignore, like screens or certain seating zones, using a setup wizard on the Room Navigator. This prevents cameras from tracking unwanted spaces, such as people on screens or the backs of heads, for a cleaner and more focused video experience. The setup wizard is simplified with guided configuration for good camera coverage.

## Upcoming RoomOS 26 features

| Feature                                               | Description                                                                                                                                                                              | Audience      |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| New Webinar experience (5K participants)              | Users can join the new Webinar (5k participants) attendee experience from their device.                                                                                                  | End-user      |
| Movable Room Vision PTZ camera in multi-camera setups | Room Vision PTZ cameras unlocks Cinematic meetings experiences for more rooms.                                                                                                           | Administrator |
| Sustainability with smart power                       | Use less power and monitor power use in Control Hub. Available for devices and phones.                                                                                                   | Administrator |
| Zero touch provisioning​                              | Simplify device onboarding at scale with plug-and-play setup, automated deployments and centralized control                                                                              | Administrator |
| Workspace advisor                                     | Leveraging the powerful AI built into our devices. The cameras on the device can now take a snapshot of the room and create digital replica of your physical meeting room in Control Hub | Administrator |

You can find open and fixed customer found caveats in [the bug search tool](https://bst.cloudapps.cisco.com/bugsearch). 

- [RoomOS 26](https://bst.cloudapps.cisco.com/bugsearch?pf=prdNm&sb=anfr&rls=26.3.1-RoomOS%5FFebruary%5F2026&kw=%2A&bt=custV)
- [RoomOS 11](https://bst.cloudapps.cisco.com/bugsearch?pf=prdNm&sb=anfr&rls=11.36.1-Webex&kw=%2A&bt=custV)

Use your cisco.com user ID and password to log in, and search for a specific product and software version. 

For the RoomOS version, use the format _release version - release name_, for example: 11.14.1-RoomOS\_March\_2024.

## Known issues

- Codec Pro based products are not supported on RoomOS 26 when connected to a Touch 10 or SpeakerTrack 60\. Read more about [ software support ](https://help.webex.com/idba5c/#section%5Fo2h%5Fzkb%5Fhhc)for these products.
- Devices in companion mode must be on the same software version.
- When using Webex Assistant with HTTP Proxy mode enabled, a known issue occurs on devices running RoomOS 11.29 or 11.30\. The issue will be resolved in RoomOS 11.31.
- RoomOS December 2024 (11.23): If _Video DefaultLayoutFamily Remote_ is set to _Overlay_, _Prominent,_ or _Single_ on a device with an external camera connected, the device will not send video during a Webex meeting. The issue is not present for SIP meetings.  
The default value for this setting is _Auto_ for which there is no issue. The setting is only available through the device's web interface.
- We no longer support upload of the certificate from the website to the device to validate the authenticity of the website. You need to upload a root CA that has signed the certificate for the website. The root CA must have _x509 Basic Constraints_ with _CA:TRUE_.
- If you're experiencing problems where Webex Assistant for devices stops working, we recommend that you upgrade to the latest RoomOS software version. Alternatively, you can verify that your devices use the new version of the Webex Assistant microservice with the configuration _UserInterface Assistant AssistantBeta : True_.
- After upgrading a device to RoomOS 11, Room Navigator may lose connection to the device. For more details, see the [field notice ](https://www.cisco.com/c/en/us/support/docs/field-notices/724/fn72497.html).
- Display-port over USB-C not working on Desk and Desk Mini with Lenovo X1 computers.

  - Workaround: Download 31.0.101.4091 or earlier from <https://www.intel.com/content/www/us/en/download/726609/762922/intel-arc-iris-xe-graphics-whql-windows.html> and execute program. Tick off "Execute a clean installation" and allow forcing of old driver version. Then reboot."
- We made some improvements to the display identity on our devices. This may cause some laptops to identify the display differently and change display settings. Changing the display settings back on the laptop should address this and will be a one time occurrence.
- Room Navigator may hang when booting up. To fix this, you need to factory reset the Room Navigator. Remove the foot and use a paper clip (or similar) to press and hold the recessed reset button until the screen turns black (approximately 10 seconds). Then release the button.
- In Companion Mode, both the Cisco Board and Touch 10 notify that the board will go into standby mode and clean the board. However it’s only possible to stop the clean-up from the Cisco Board. Tapping the Touch 10 won’t stop the board from going into standby.
- If the device fails to get an IP address through DHCP when configuring 802.1x, the last configured IP address shows up as the IP address although the device has no network connection. At the same time, the Touch 10 controller and on-screen display home screens show a message about missing network.
- When 802.1x is configured, the configuration isn’t applied immediately. Instead, the system tells that no network is connected until the WPA supplicant has been updated. It can take up to 30 seconds to see the change. Workaround: Wait for the 802.1x authorization to finish or make sure that 802.1x is configured correctly.

## Limitations

- Brightness controller is shown on Room Navigator only if the connected displays allow brightness adjustment.
- Cloud-registered devices have an internal 30 minute timeout setting, after which they will disconnect from a meeting if no participants have joined. It's not possible to override this behavior, and the Control Hub setting 'Automatically end meetings if there is only one participant' does not impact it.
- The following features are not supported on RoomOS 11: Shared line remote hold/resume/barge, snap to whiteboard, and facility service.

[2024](#sx10%5Fr%5Fwhats%5Fnew%5F2024)

### RoomOS December

**December 13, 2024**

Software version: RoomOS 11.23.1.8 3963b07b5c5

**Group and speaker camera mode**

Group and speaker camera mode provides multiple views of the same room to be sent into a meeting; one being a group overview and the other a close-up of the active speaker. This provides remote meeting participants the benefit of seeing the full room context, while staying engaged with the active speaker. 

In a Webex Meeting on devices running RoomOS 11, you see these two streams as two individual video streams in the meeting layout. Webex App users, older cloud-registered devices, and other meeting platforms that are supported on RoomOS devices, the two views are composited into a single video stream. This composite view shows the active speaker as the main video with a mini picture-in-picture (PiP) of the room overview in the bottom-right corner. 

Devices that send group and speaker camera mode:

- Board Pro G2
- Codec Pro with Quad Camera
- Room 70D G2
- Room Bar Pro
- Room Kit EQ and EQX

Read more about [group and speaker camera mode](https://help.webex.com/gzz3q7/).

**Remote access**

Remote access allows administrators to interact with the device UI from Control Hub or the device's web interface as if the admin is in the room. Remote access assists you in troubleshooting and onboarding a shared mode device regardless of its platform. 

Remote access can help with tasks, such as drawing up meeting zones, configuring microphones, and testing macros.

Read more about [remote access](https://help.webex.com/gge81eb/).

**Book meeting rooms ahead on devices**

You can enable devices to have ad hoc bookings start at any available time throughout the current day, not just the present moment. This works both inside and outside the room.

For convenience free time slots are highlighted in the calendar and picking a slot would prepopulate start and end times. Those time slots are configurable with a default of 30 minutes.

Read more about [enable](https://help.webex.com/nzp31jb/) and [use booking ahead](https://help.webex.com/i3yudu/#task-template%5F62c9ea2d-fdc1-4166-a893-082310402353).

**Look ahead in personal calendar**

Full day calendar is now available in personal mode devices and you can configure what's shown to your liking. You can choose to show non-joinable events, such as appointments, with a reminder when event is due. Meetings and events later in the day are shown at the bottom of the calendar dashboard

You can also enable early join for meetings on personal mode devices.

Read more about [personal calendar on devices](https://help.webex.com/na4lwhf/).

**AI Assistant in Webex on devices: Catch me up and action items** 

You can use the AI Assistant in Webex meetings on your device to quickly “Catch me up” or ask, “What are the action items?”. Once the AI Assistant meeting summary is on, then anyone in the meeting can send these prompts. Only the participant that sends the prompt will see the result. The other participants do not see the prompt or the results. There needs to be enough transcript/conversation in the meeting for the prompts to be clickable. 

Read more about [AI assistant on devices](https://help.webex.com/e4roeg/).

**December theme on device UI**

On RoomOS devices, we wanted to try to brighten up your workday with a brand-new winter style December theme! 

Out of call you’ll experience a winter wonderland style home screen and in Webex meetings all of your reactions will be ready for the winter.

We understand that a lot of the world are lucky to be enjoying a much warmer December and for that reason, this theme is off by default.

To enable, go to Control Hub > Devices and set the following configuration for all or some of your devices:

```
UserInterface DecemberThemeBeta
```

Note:

- This theme is tied to the month of December, so it will appear when the configuration is enabled and turn off automatically in January.
- Only devices on RoomOS December support sending and rendering December reactions in Webex meetings. Other clients will render standard reactions.

**Content preview for cabeled shares**

Room Navigators now shows a snapshot preview when you connect with a cable, enhancing your content sharing experience. You can now confidently select the correct source, streamlining your content sharing process. 

Supported on:

- Board Pro and Board Pro G2
- Cisco Desk, Desk Mini, and Desk Pro
- Codec Pro
- Room 70 G2
- Room Bar
- Room Bar Pro
- Room Kit EQ and EQX
- Room Panorama

Read more about [cabled sharing](https://help.webex.com/c0jgpv/).

**Microsoft Join button improvements** 

We updated the Microsoft Teams Join button to try to give a better dialing experience by reducing complexity. We are defaulting to VIMT as the preferred joining method, and WebRTC as secondary method. This order also matches the order of the information on a Microsoft calendar invite. 

Read more about [joining Microsoft Teams Meetings](https://help.webex.com/n3r2ihu/).

**Multi camera director with Cisco Ceiling Microphone Pro**

You can now set up cross-view and extended reach a Ceiling Microphone Pro.

Read more about [Multi camera director setup](https://help.webex.com/n1av2t9/). 

**Room Bar Pro, Board Pro, and Board Pro G2 external and internal microphones**

We've made changes to the _Audio Microphones BeamMix Inputs_ setting for Room Bar Pro, Board Pro, and Board Pro G2\. For these devices, the new options for this setting are:

- _Auto_ (new behaviour): If a Ceiling Microphone Pro is connected and the Ceiling Microphone Pro voice tracking wizard has been run, the new smart audio mixer uses both internal beams and the Ceiling Mic Pro.  
For other external microphones, the internal beams are disabled.
- _BeamsAndExtMics_: The audio mixer uses internal beams and external microphones for voice pickup at all times. When using Ceiling Microphone Pro, we recommend using the _Auto_ setting as it provides a smarter audio mixer, taking into account the placement of the Ceiling Microphone Pro.
- _OnlyExtMixs_ (New): Uses only external microphones for voice pickup and falls back to internal beams if no external microphones are connected.

**Companion mode enhancements for content sharing**

We've made two key improvements to enhance your content viewing experience when using a companion mode setup:

1. Outside of Calls/Meetings: Shared content will now be visible on both screens, instead of just one.
2. During Calls/Meetings: The Mini Picture-in-Picture (PiP) view of shared content on the On-Screen Display (OSD) has been removed. This ensures an unobstructed view of other meeting attendees when sharing content.

Read more about [companion mode](https://help.webex.com/fd1jm/).

**Fixed issues:**

- CSCwn03447 - Non-English "Room Available all day" message partially obscured on touch panel.
- CSCwm98535 - PresenterTrack can't be turned off from Room Navigator after upgrading to RoomOS October (11.21).
- CSCwm45671- Desk Series devices failed to roam, and then tried to recover from WIFI\_CONNECTION (IFX-231128-1153346).
- CSCwn08325 - Unexpected error when accessing software page on the device's web interface.
- CSCwk57053 - Device sharing content audio is stuttering and glitchy during Microsoft Teams CVI meeting.
- CSCwm38796 - On Carbon colored devices, when theme is set to Auto carbon wallpaper should be used.
- CSCwm66151 - On Room Bar Pro, the camera image appears bluish for white objects or walls.
- CSCwk81168 - Shared content not covering the whole screen.
- CSCwm53396 - Clock screensaver not engaged on halfwake after reboot.
- CSCwj09669 - AudGraph\_Ready\_doAudGraphBatchInput: Warning: Latest buffer has delay ... aborting.
- CSCwm93023 - Webex Edge for Devices linked device show 'Call not encrypted' when encrypted Webex Meeting is started.
- CSCwm70885 - TMS directory does not display all entries after selecting the subfolder and out.
- CSCwm86440 - AES67 microphone not working after upgrade to RoomOS 11.21.1.4.
- CSCwk28203 - Crash in libuserdb::Backend::Backend
- CSCwm55222 - Quad Camera struggles with head detection.

### RoomOS November

**November 7, 2024**

Software version: RoomOS 11.22.1.7 1eb6bbe23da 

**AirPlay autoshare in meetings** 

Ever forget to start sharing into a call when you connect to a device using AirPlay? The new auto share pop-up means you automatically begin sharing into the call after a five seconds right after you connect to the device with the AirPlay PIN.

Read more about [wireless sharing with AirPlay](https://help.webex.com/ndlsg3c/).

**Changes to AV integrator license**

We have removed the AV integrator license requirement for Cisco IP Microphones. You still need an AV integrator license for AES67 and Audio Console.

Read more about [AV integrator license](https://help.webex.com/k35sdq/).

**Changes to Miracast configuration**

The default setting on the Miracast _Media transport configuration_ has been changed from _Direct_ to _Auto_.

Read more about [configuring Miracast](https://help.webex.com/w60modb/).

**Simple Certificate Enrollment Protocol (SCEP) support**

We now support enrolling and renewing customer signed certificates for various purposes, such as 802.1X, Ethernet and Wi-Fi connections and more. This works using standards-based SCEP protocol and supports Microsoft CA or any other standards-based solutions that support SCEP.

First-time configuration requires you to configure the required profile information for SCEP. For this release, we are supporting configuration through xAPI. You can use scripting or macros to automate the configuration.

Certificate renewals are automatic and require no manual intervention.

Read more about [certificates on RoomOS devices](https://help.webex.com/iqy5ww/).

**Fixed issues:**

- CSCwm93023 - Devices linked with Webex Edge for Devices show 'Call not encrypted' when encrypted Webex Meeting is started.
- CSCwm03485 - PAC file parsing: myIpAddress() returns IP addresses of all network interfaces.
- CSCwm82376 - Manual check in timer appears when check in window is 5 minutes and room in use.
- CSCwm78495 - Allow showing chat or embedded app panel with classroom mode.
- CSCwm73343 - H323 - Encryption drops to AES128 from AES256 when starting a multisite call or after resuming a call on hold.
- CSCwm78868 - Unable to delete scheduler wallpaper on Room Navigator in standalone mode.
- CSCwm41765 - Sound Check tool does not use external speakers on Room Bar Pro.
- CSCwk53692 - Device reboots during a call.
- CSCwm42645 - Table Microphone Pros paired with Codec EQ fail classification in PoE, resulting in offline state.
- CSCwm47759 - Camera preview is not being shown on the display if there is a touch screen with a USB-A connection.
- CSCwm52917 - AmbientNoise Level and Sound Level show as -100 on codec with USB microphone.
- CSCwm61071 - Quad Camera unable to upgrade or downgrade after factory reset.
- CSCwm86440 - AES67 microphone not working after upgrade to RoomOS 11.21.1.4.

### RoomOS October

**October 29, 2024**

Software version: RoomOS 11.21.1.10 7103afa7e4f 

**NOTE:** This software version is only available for Webex for Government customers.

**Fixed issues:**

- CSCwm93023 - Devices linked with Webex Edge for Devices show 'Call not encrypted' when encrypted Webex Meeting is started.

**October 7, 2024**

Software version: RoomOS 11.21.1.4 2a8ad5d61cc

**Streamlined "save whiteboard" experience**

We're updating the save whiteboard work-flow on Board and Desk Series devices in shared workspaces. With this update, the Save button is easier to find and you can save the whiteboard to a user in the company directory and rename the whiteboard, if needed. We're also adding the option to go to whiteboard.webex.com to view all your boards.

Read more about how to use [the whiteboard on Board and Desk Series.](https://help.webex.com/zfhy55/)

**Consume manual captions (CART) from Webex on devices** 

In a meeting on the Webex App, it's now possible for the host of the meeting to enable manual captions, also known as CART - Communication Access Real-time Translations. This allows the host to assign a manual captioner to the meeting who then generates the live captions. On devices, these manual captions will be consumed and shown on screen, if a user turns on captions on the device. 

**Fixed issues:**

- CSCwm52917 - AmbientNoise Level and Sound Level show as -100 on codec with USB microphone.
- CSCwm42645 - Table Microphone Pros paired with Codec EQ fail classification in PoE, resulting offline.
- CSCwm28893 - Codec EQ unexpectedly wakes from standby state with _\\leaveStandbyMode Reason: Forced from MessageReceived\\_.
- CSCwm29005 - Audio Console macro crashes when using Music Mode.
- CSCwk45916 - Desk Series device incoming media status shown packet loss should default MTU is set to lower than 1500.
- CSCwm08527 - Camera not going to set default camera position when it wakes up from standby/restarted.
- CSCwm06237 - Room Navigator in stand-alone mode goes into maintenance mode after upgraded to RoomOS 11.17.
- CSCwj85377 - After switching MainVideoSource, Codec Pro does not start video after it is stopped.

### RoomOS September

**September 17, 2024**

Software version: RoomOS 11.20.1.7 913a6c7c769

**Fixed issues:**

- CSCwm50758 - DSP is not running on SpeakerTrack 60 camera.
- CSCwm49071 - HTTPFeedback and web engine is failing due to TLS errors.
- CSCwm51670 - Camera options are not available in Room Types.
- CSCwm03535 - Codec does not go into standby after Miracast share for Cisco devices for Microsoft Teams Rooms.

**September 9, 2024**

Software version: RoomOS 11.20.1.5 2d95ec00b03

**Enhanced UX for In-Meeting Controls**

We've made a significant UX update for all in-call and meeting controls on Board, Desk, and Room Series devices. This update focuses on improving the user experience without altering any of the existing functionalities. All your familiar meeting and calling features remain intact. 

On-premises devices will not update to this new UX in September. 

Read more about the device's UI in the [get started article](https://help.webex.com/n2um62p/).

**AirPlay Pin in PiP**

When pairing to a device with AirPlay, the pop-up showing the pin code took up the entire device's screen. With this change, the AirPlay pin now appears in a small pop-up in the top right of the screen. This means you can focus on what matters and not lose any context as you pair to your device with AirPlay. 

Read more about AirPlay [configuration](https://help.webex.com/n29ja5v/) and [wireless sharing](https://help.webex.com/ndlsg3c/).

**Dual screen support with third-party touch screens** 

A Cisco codec with dual screen support is now able to use one noninteractive screen and one third-party touch screen. 

For dual-screen rooms, we strongly recommend that the screen on the right is configured with touch input.

Multiple active screens are not supported.

Read more about [third-party touch screen support](https://help.webex.com/ncyh2f/).

**Cisco booking app support for rooms without Webex calendar**

The Cisco room booking app now supports ad hoc reservations for spaces like quiet or focus rooms without requiring a Webex calendar setup, storing the booking status directly on the device.

If the quiet room is configured with hot-desking, the room booking app also reflects the status of the person who is signed in and the duration of the booking on an outside panel. A user can sign in from the panel outside the room and book the space in addition to being able to do this from the Desk Series device inside.

A third-party calendar provider can also send calendar events and use Cisco’s room booking as the user interface. This new capability allows all booking workflows through inside or outside room booking panels.

**Support for whiteboarding and live annotation in encrypted meetings**

Create and collaborate in confidential meetings: we've added support for whiteboarding and annotating in zero-trust, end-to-end encrypted meetings. Whiteboards you create during such a meeting cannot be reopened.

Read more about [whiteboarding](https://help.webex.com/zfhy55/) and [annotation](https://help.webex.com/nivf3bo/) on Board and Desk Series devices.

**Join Microsoft Teams Meetings hosted by other tenants with VIMT**

You can now get the same VIMT user experience and features when joining any Microsoft Teams Meeting hosted by other businesses instead of using WebRTC Direct Guest Join. With this, you can join scheduled meetings from Cisco devices with OBTP using Hybrid Calendar Service or ad-hoc join with Microsoft Teams button. 

The Cisco device has to be a trusted device; cloud registered or linked with Edge for Devices.

All VIMT features are supported, except for no lobby bypass into other tenant’s meetings and joining other live events.

Read more about [joining Microsoft Teams Meetings](https://help.webex.com/n3r2ihu/).

**Updates to microphone support**

We now support connecting one Cisco Table Microphone Pro to a Cisco Room Bar.

**Fixed issues:**

- CSCwk29492 - RoomOS evaluation for CVE-1999-0524.
- CSCwm28272 - The standby timer runs out, causing the device to enter standby mode just as a person enters the room, or when someone touches the device, triggering it to exit standby mode.
- CSCwm26769 - SIGABRT in main: abort\_process, transaction\_timeout, HdmiPluginBufferPool size is growing.
- CSCwk72332 - Microsoft webRTC call is failing when dialing to a GCCH meeting.
- CSCwm11038 - Unable to share content audio in a Webex Meeting unless another device joins the meeting.
- CSCwk04636 - Web widget not appearing properly.
- CSCwk23681 - Artefacts seen when downscaling presentation with 4k resolutions to 1080p on a Codec Plus.
- CSCwk98543 - Device fails to resolve relative/partially-qualified domains.
- CSCwk71348 - Error in libdrm\_nvdc code from Nvidia causing the device to crash.
- CSCwk70371 - OpenSSH CVE-2024-6387: Potential remote code execution.
- CSCwk83063 - Dual and triple screen system showing Stack layout as Single screen when sharing content.
- CSCwk80392 - On-screen display shows system name is appended with a greater than sign >.
- CSCwk71259 - Room Kit does not come out of standby when user enters the room.
- CSCwk68566 - Device stuck displaying bootup sequence on monitor after upgrading to 11.16.1.7.

### RoomOS August

**August 8, 2024**

Software version: RoomOS 11.19.1.7 3055d561c16

**Improvements to frames experience**

Key improvements are:

- The new framing-aware grouping for 2–4 people, which prevents people to be shown in multiple cells.
- The new framing for 5–6 participants, limiting the number of cells to 2 for a more stable experience.

This improved feature is available on Board Series, Room Bars, and codecs with Quad Camera.

Read more about [frames](https://help.webex.com/nov4sxu/). 

**Extended speaker view**

Get a front-row seat, wherever you are.

Adaptive speaker tracking and intelligent framing by the Cisco Quad Camera and the Cisco PTZ 4K pan-tilt-zoom camera, capture the active speaker and other in-room participants, even in the largest spaces.

**Requirement:** Room Kit EQ, Room Kit EQX, or Room Kit Pro, 1 x 4K PTZ cameras, minimum 4–6 x Table Microphone Pro's (depending on room size). 

Read more about [extended speaker view](https://help.webex.com/n1av2t9/). 

**Cross-view with Quad Camera as side-camera**

We are extending Cross-view to also support a setup with Quad Cameras as side cameras. Quad Cameras work better for some rooms, such as large meeting rooms. 

Supported with Codec EQ and Codec Pro.

Read more about [cross-view](https://help.webex.com/n1av2t9/). 

**AI postmeeting summaries for Webex Meetings**

Turn on AI meeting summaries during the meeting on your device to generate an AI post meeting summary with action items after the meeting ends.

Hosts and cohosts can view this meeting summary in their email or Webex App. Only a host or cohost can start and stop the meeting summary. The setting for this can be changed to ‘anyone’ by host, cohost, and administrators.

**Note:** Available in Webex Suite meetings only – not available on legacy Webex Meetings.

Read more about [AI postmeeting summaries](https://help.webex.com/e4roeg/). 

**Improved docked notifications on devices**

Previously, in meetings on your device, the docked notifications for mute, stop video, and volume off can cover important content on the right side of your screen, especially when the chat or embedded apps panel were open. To address this, these three docked notifications have been moved into the Meeting Information Center on the top right of your screen. This is where you would see the 'record' or 'locked meeting' icons.

In stacked layout and when someone is sharing content, the Meeting Information Center moves down, just below the filmstrip, to avoid covering anyone in the meeting.

**AV1 codec for better quality content sharing** 

The AV1 codec improves quality by being more effective at lower bandwidths. It is the default content codec in Webex Meetings. With this update, the latest generation of Cisco devices can receive content in AV1 format from the Webex App. 

Sending content in AV1 is not possible currently. Older generation devices will receive transcoded content in H.264 format. 

**Move other participants to stage layout option**

Meetings by default use the grid layout, providing equity and equally sized participants. However, in some meetings you want to focus in on one or a few participants, for example in an all hands or presentation. By introducing move to stage, we allow device users to select the participants they want to pay extra attention to. 

Available in Webex Meetings. This phase does not include the ability for devices to "sync my stage to everyone" nor receive a synched stage from another meeting participant. 

Read more about [move to stage](https://help.webex.com/nzc4653/). 

**ThousandEyes extended support**

ThousandEyes agent on devices is now supported for WebRTC interop meetings and in on-premises Unified CM deployments.

Read more about [ThousandEyes integration for RoomOS devices](https://help.webex.com/en-us/gg3kd3/). 

**Improve HTTP Proxy support**

We're making the following improvements to the HTTP proxy:

- All HTTP(S) traffic now uses a common helper for HTTP proxy support, which means we can change our HTTP proxy protocol implementation without updating each individual service.
- Adding a configuration to specifically use basic authentication to the proxy. When this is set we include the authentication header in the initial request instead of waiting until we are challenged with a 407, saving an HTTP round trip between RoomOS and the proxy.
- Adding support for HTTPS with certificate based mutual TLS authentication to the proxy.

**Joining Zoom meetings with alternative domains** 

Zoom users can now select a different domain than the default to join their meetings by selecting the preferred location from a drop-down list when they dial into a meeting. 

Read more about [joining Zoom meetings](https://help.webex.com/0lobg6/).

**Zoom UI from SIP dialing** 

You can now get Cisco's Zoom UI even when placing the Zoom call as a SIP address from the calling app or with xCommand Dial. 

**Default value for minimum TLS version changed**

Default value changed from TLSv1.1 -> TLSv1.2 for

- Web engine
- SIP
- https server/nginx

```
xConfiguration SIP MinimumTLSVersion
```

```
xConfiguration WebEngine MinimumTLSVersion
```

```
xConfiguration NetworkServices HTTPS Server MinimumTLSVersion
```

This change applies to SIP and HTTPS client and server.

If you see an error containing a variation of “no protocols available” in your client logs, we encourage you to upgrade your client. An example from a curl log: “error:0A0000BF:SSL routines::no protocols available”

**Fixed issues:**

- CSCwk71259 - Room Kit does not come out of standby when a user enters a room.
- CSCwj36857 - Trying to set custom branding in Control Hub crashes devices as URL is too long.
- CSCwk66170 - Wallpaper image is mirrored with Hebrew and Arabic as UI language.
- CSCwk27825 - Overlapping images when using multiple displays.
- CSCwk66023 - Crash in main application on boot causes the device to go into maintenance mode.
- CSCwk58937 - Space added when entering numbers from the "Join Webex" button.
- CSCwk53692 - Device reboots during a call.
- CSCwk37411 - Zoomed in content and video in Google Meet meetings.
- CSCwj67558 - Custom background not updating with multiple screens after upgraded to RoomOS 11.14.
- CSCwk28201 - Crash with signature: SIG\_MESSAGE\_TIMEOUT - timeout in xfsm event handling due to large conference.

### RoomOS July

**July 23, 2024**

Software version: RoomOS 11.18.1.8 8dc7b79ed48

**Fixed issues:**

- CSCwk72332 - Microsoft WebRTC call is failing when dialing GCCH meeting
- CSCwk71259 - Room Kit does not come out of standby when user enters room

**July 8, 2024**

Software version: RoomOS 11.18.1.6 88e19d15753

You may see the following configuration change on a device's History page in Control Hub. This configuration doesn't have any effect on the device and can be ignored. 

Configuration name: Webex > Provisional Activation Service 

Value change: Disabled (Default) - Enabled 

**Hot-desking for Board Series**

Hot-desking is now available for Board Series devices, previously only available on Desk Series devices.

Hot-desking on Board Series operates similarly to Desk Series but includes user interface adjustments that are tailored for the Board's form factor. Sign-in is only supported with a QR code. Upon sign-in, users get access to their individual calendars, personal whiteboards, and call history. For this functionality to be available, the workspace scheduling type needs to be set up as hot-desking.

We've added the ability for administrators to set a maximum booking duration for the hot-desking sessions.

We've also added a new configuration that would require users to sign in before they can use the whiteboarding feature on the device. This change allows administrators to add this if it is required by company policy.

**Supported devices:** Board 55S/70S/85S, Board Pro 55/70, and Board Pro G2.

Read more about hot-desking [configuration](https://help.webex.com/zgjezbb/#Cisco%5FTask.dita%5Faee2384d-cc76-4f23-aed6-63985cb7c7d9) and [use](https://help.webex.com/hx8m1o/).

**Updates to microphone support**

We're enabling audio over IP using the AES67 protocol for Board Pro and Board Pro G2\. This means that you can connect Shure and Sennheiser microphones digitally to our devices. 

We're extending the Cisco Table Microphone support on Board Pro to up to 8 microphones. AV integrator license is required. 

Read more about:

- [AV integrator license](https://help.webex.com/k35sdq/)
- [AES67 interoperability on Cisco devices](https://help.webex.com/zks7jeb/)
- [AES67 setup guide](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/microphone/installation%5Fguide/aes67-setup-guide.pdf)

**ThousandEyes support for Webex Calling**

ThousandEyes now tracks also 1-to-1 calls with Webex Calling on devices.

Read more about [ThousandEyes integration for RoomOS devices](https://help.webex.com/en-us/gg3kd3/). 

**Configuration to disable notifications about degraded call quality**

By default, Cisco devices give an on-screen notification if bad network conditions are detected. This can give end-users a warning and manage expectations for why the quality might be reduced. 

This setting allows admins to disable this notification if it is undesired. 

```
xConfiguration Conference Diagnostics DegradedQualityNotifications
```

Value space: <Off, On>

Default: On

**DialCode parameter added to xCommand Zoom Join** 

We've added a new _DialCode_ parameter to the [xCommand Zoom Join](https://roomos.cisco.com/xapi/Command.Zoom.Join/) command.

Not supported on personal mode devices. 

```
xCommand ZoomJoin
```

_DialCode_: String(0, 255)

When provided, it will be added on the end of the authority host like so: <meetinglD.< passcode>.<options>.<hostkey>..<dialcode>@zoomcrc.com

If the DialCode is not provided, the trailing .<dialcode> is omitted from the uri.

The meeting number of the zoom meeting. Typically provided in the calendar invite or in the meeting link.

**Annotation in zero-trust end-to-end encrypted meetings** 

Annotation is now available in zero-trust end-to-end encrypted meetings.

**Fixed issues**

- CSCwk70371 - OpenSSH CVE-2024-6387: Potential remote code execution
- CSCwk37411 - Zoomed in content and video in Google Meet meeting.
- CSCwk17712 - Tap the Share button twice to share in a call.
- CSCwk14482 - Far-end sees a frozen image when video is turned off.
- CSCwk27287 - HDCP protected video does not show on systems with internal panels.
- CSCwj91391 - Miracast high motion video sent with low fps to remote participants.
- CSCwk27825 - Overlapping images when using multiple displays.
- CSCwk18342 - NTP mode has been changed to "Off" on Webex Edge for devices linked devices.
- CSCwk17412 - Miracast clients fail to connect due to long SystemUnitName.
- CSCwk22469 - Companion Mode system is acting as if it is not in Companion mode.
- CSCwk06518 - The custom macro buttons flashing when leaving Standby mode.
- CSCwk24443 - Diagnostics for Push/Update with in-room booking enabled should be deleted.
- CSCwj81860 - No video sent from device in a Google Meet meeting.

### RoomOS June

**June 12, 2024**

Software version: RoomOS 11.17.1.9 8a1fc471c9a 

**New standby level for Board Pro and Board Pro G2**

This feature allows our video conferencing devices to be in the correct power consumption range for each of the new standby power requirement level definitions. 

Read more about [standby and low power behavior on devices](https://help.webex.com/5o37b5/).

**Updated Settings menu**

The Settings menu on the device's integrated UI and touch controller is updated to align with the device's visual style.

Read more about [the Settings menu](https://help.webex.com/nwz8r3o/).

**Fixed issues**

- CSCwk18342 - NTP mode has been changed to "Off" on devices linked with Webex Edge for devices.
- CSCwk27825 - Overlapping images when using multiple displays.
- CSCwk22469 - Companion mode system is acting as if it is not in companion mode.
- CSCwj81860 - No video sent from a device to Google Meet meeting.
- CSCwk06518 - The custom macro buttons flashing when leaving Standby mode.
- CSCwj33297 - WebRTC provider availability shows as unavailable when RoomType is set for Classroom.
- CSCwj71274 - Text in right-to-left languages showing incorrectly on meeting dashboard.
- CSCvy01282 - Quad camera is unable to save maximum zoomed-in preset position.
- CSCwj75879 - Failed to reload webserver after HTTPS automated certificate renewal.
- CSCwj71239 - Codec Pro enters maintenance mode after registering eight microphones with AES67.
- CSCwi60447 - Local content share is distorted when sharing 4K content through HDMI input 3 on Codec Plus.
- CSCwh84165 - Duo stealing presentation with direct share does not work as expected in a meeting.
- CSCwi60054 - 802.1x EAP-TLS certificate validation.

### RoomOS May

**May 13, 2024**

Software version: RoomOS 11.16.1.7 81e0063ac75

**Check in and out of meeting rooms**

A significant percentage of meetings result in a ghost meeting, meaning no one shows up and the meeting resources are wasted during the booking. To alleviate this problem, the users who booked the meeting can check in to the meeting when arriving to the room. If no one arrives for the booking and check ins, the meeting room releases the booking and the room is free for use.

Check in and out is available on shared bookable devices and standalone Room Navigator

Read more about configuring room booking [inside a room](https://help.webex.com/nzp31jb/) and [outside a room](https://help.webex.com/55ypt4/).

**See people's reactions in their video stream**

We all know reactions are one of the best ways to gauge the engagement of your audience in a meeting. With this update, when people who are in your meeting video grid on screen send a reaction into the meeting, that reaction appears on the bottom right of their video stream. Similarly, if someone raises their hand, it will appear in their video and persist until it's addressed.

Read more about [reactions in meetings](https://help.webex.com/w8l8wf/).

**Screen lock on Board and Room Series when used as personal devices** 

With a personalized 6-digit PIN on a personal mode device, you can keep your private information safe. Sensitive data like calendars, call records, and whiteboards remain inaccessible when the device is locked, while meeting notifications are delivered without subjects.

Read more about [PIN lock on personal devices](https://help.webex.com/7y056e/).

**VU meter on device web interface**

We've added a VU meter on the device web interface which shows the signal level for USB, IP, and analog microphones. You can find it at Settings > Audio and Video.  
  
**Resolution control**

With the new resolution control, you have the ability to set a maximum resolution for video input connectors on your devices.

Set a preferred maximum resolution for devices to avoid unnecessary upscaling and get exactly the quality you intended. Setting a preferred maximum resolution prevents automatic 4K sharing which can result in poor video quality.

```
xConfiguration Video Input Connector [n] MaxResolution
```

Valuespace: <1920\_1080\_60, 3840\_2160\_30> 

Default value: 3840\_2160\_30

**Selectable USB mode**

You can to select the USB-C port to use either USB2 or USB3 mode depending on the type of cable you have connected to it. You must reboot the device for the configuration to take effect.

```
xConfiguration SystemUnit Hardware USBC[n] Mode
```

Valuespace: <USB2, USB3>

Default value: USB3

Available on: Cisco Desk, Desk Mini, Room Bar, Room Bar Pro, Room Kit EQ

**Change in RTP Port configurations**

From RoomOS May (11.16) separate configurations controlling port ranges used for media in Webex and [Webex Optimized](https://help.webex.com/cy2l2z/#Cisco%5FTask.dita%5F276e4c01-51e7-4a29-9c4b-3ebb891e582f) calls will be introduced:

```
xConfiguration RTP Audio Ports Range Webex Start
```

```
xConfiguration RTP Audio Ports Range Webex Stop
```

```
xConfiguration RTP Video Ports Range Webex Start
```

```
xConfiguration RTP Video Ports Range Webex Stop
```

Default values are:

- Audio: 52050-52099
- Video: 52200-52299

Existing port range configurations now only control port ranges for media in SIP and H323 calls:

```
xConfiguration RTP Ports Range Start
```

```
xConfiguration RTP Ports Range Stop
```

```
xConfiguration RTP Video Ports Range Start
```

```
xConfiguration RTP Video Ports Range Stop 
```

Their default values 2326-2487 are unchanged. 

If you require media in Webex Optimized calls to originate from the same source ports as for SIP/H323 calls, the Webex port range configurations need to be set to the desired range from Control Hub.

**Fixed issues**

- CSCwj57903 - Diagnostic warning for CloudConfigurationWriteback does not automatically clear.
- CSCwj61027 - The “Call is encrypted” notification has not been ported from RoomOS 10 to RoomOS 11.
- CSCwj43399 - UI Extension button presses no longer trigger action events.
- CSCwj61103 - Crash when a Webex Edge for devices linked device is switched over to Webex cloud registration.
- CSCwj07947 – Quad Camera with extended range jumps around to inanimate objects.
- CSCwj27412 - Available room shows as unavailable when Room Navigator is using Simplified Chinese.
- CSCwj60618 - Layout failed to update correctly on a triple screen system in CMS multistream call.
- CSCwd79011 - Blue missed call bubble no longer showing for personal mode devices.
- CSCwj02649 - Webex Edge for devices linked device accepts proximity call control setting from CUCM even though Control Hub configuration is enabled.
- CSCwj32897 - Room 70 G2 has muffled sound from speaker.
- CSCwj15157 - "Camera Still in Use" UI is not at the expected position when calling from a laptop.
- CSCwi43440 - Device with Webex Calling enabled is not showing PSTN number next to the Workspace name.
- CSCwj17618 - Display Name on Webex Calling enabled device not displaying correctly.
- CSCwj36857 - Trying to set custom branding causes device to crash.
- CSCwj26364 - Custom UI web widget does not show up.

### RoomOS April

**May 8, 2024** 

Software version: RoomOS 11.15.1.8 08c1fed621a

Fixed issues 
- CSCwj67558 - Devices with more than one screen connected don't update the custom background before next reboot.
- CSCwj93803 - An ICMP Packet Too Big message can trigger an undesired change in video MTU size.

**April 11, 2024** 

Software version: RoomOS 11.15.1.6 ab740596da6

**Pointing and annotation on wireless content shares and outside meetings** 

We're extending the functionality of the recently released pointing and annotation on wired content shares in-meeting. You'll be able to point and annotate on wireless content shares (Miracast/AirPlay) in meetings as well as outside meetings on all content share types.

Read more about [live annotation](https://help.webex.com/q1hs6cb/).

**Move participant to screen** 

In large meetings, the most important participants for you might not be visible in the video layout. With this feature, meeting participants can customize their view to have their most important coworkers in view. 

**Localized audio announcements for in-meeting recordings and the Webex Assistant** 

If you choose to enable audio announcements in Control Hub for either the Webex Assistant or Network-Based Recordings, you will now get a localized audio announcement. 

Find more information on how to turn on these audio announcements in the following admin articles: 

- [Enable Webex Assistant for meetings](https://help.webex.com/en-us/article/nwl9xii/Enable-Webex-Assistant-for-Webex-Meetings#id%5F132145)
- [Network-Based Recording (NBR)](https://help.webex.com/sxdj4ab/)

These announcements are off by default. Administrators can enable them in Control Hub. The announcements are available for both Webex App and device users in Webex Meetings. 

**Presenter tracking on Room Bar Pro** 

Presenter tracking is now supported on Room Bar Pro when connected to a PTZ camera.

Read more about [setting up presenter tracking](https://help.webex.com/9ur0g6/).

**HTTP/S traffic to TMS will always use the configured HTTP proxy on the system** 

When RoomOS has an HTTP proxy configured (xConfiguration NetworkServices HTTP Proxy), some outgoing HTTP/S requests will still explicitly not use that proxy but always go directly to the destination. Examples are CUCM provisioning traffic and Macro requests when xConfiguration HttpClient UseHttpProxy: Off. Until now, most of the requests related to TMS provisioning has also done this. Starting with this release all TMS related HTTP requests will use the system proxy.

For deployments with TMS on the local network plus Webex Edge for Devices through a network proxy this will change how RoomOS connects to the TMS. We recommend using a PAC file containing a DIRECT match for the TMS addresses.

**Improved audio for shared content** 

We'll deliver higher fidelity audio for content shared in Webex Meetings.

**Support for Cisco Board Pro G2** 

We have added support for Cisco Board Pro G2\. Read more about the product details in [the datasheet](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-board/board-pro-g2-ds.html).   
  
**Fixed issues** 

- CSCwj61103 - Crash when a Webex Edge for devices linked device is switched over to Webex cloud registration.
- CSCwj38619 - SSH daemon fails to create keys if key type is configured to ed25519.
- CSCwj07947 – Quad Camera with extended range jumps around to inanimate objects.
- CSCwj27412 - Available room shows as Unavailable in Simplified Chinese on Room Navigator in room booking mode.
- CSCwi99733 - Device should raise alert if gateway is not configured.
- CSCwj12494 - Kanji characters are displayed as Chinese characters on UI.
- CSCwi89590 - PresenterTrack not working when Camera mode is changed to Group or Speaker.
- CSCwd42813 - DNSSEC configuration setting is enabled despite the device configuration.
- CSCwj04253 - Room Kit can't display HDMI input from a HP G9 laptop with a 7.5M HDMI cable.
- CSCwj19419 - When using share.webex.com, the device never gives up waiting for the share.
- CSCwh19867 - Switching camera from touch controller doesn’t auto-change camera in app when using USB-passthrough.
- CSCwi74302 - "InternalError: stack overflow" when saving a macro with Transpile:True.
- CSCwi85696 - On Room Navigator, the day in recent calls might not match actual day.
- CSCwi90589 - When set to hidden, meeting title doesn’t update after the device language is changed.
- CSCwj02277 - Devices are unable to join Webex Webinars as nothing happens after entering the Panelist Pin.

### RoomOS March

**March 6, 2024**

Software version: RoomOS 11.14.1.5 1bf4e96858f

**Cross-view**

Cross-view is an AI-driven feature that gives you the best view of your meeting. By analyzing the room activity, recognizing speakers and tracking where people are facing, RoomOS automatically chooses the best camera angle throughout the meeting. This way, remote participants can see facial expressions and are included even when the discussion is happening across the table.

All intelligence related to camera switching and control is run locally on the RoomOS device.

**Requirements:** Room Kit EQ with a Quad Camera or Room Kit EQX, 2 x 4K PTZ cameras, minimum 3 x Table Microphone Pro's (depending on room size). With more than three microphones, you also need an AV integrator license.

Improvements in experience and quality can be expected with future releases.

Read more about [how to set up cross-view](https://help.webex.com/n1av2t9/).

**Refresh and branding for room booking**

Room booking will be updated to feature a modern and stylish design that accommodates potential customization. It enhances visualization of room availability through state dependent backgrounds using our official background. With this update, users can edit the name of a booking when booking an ad hoc meeting.

You can customize room booking Room Navigators in your workplace with unique backgrounds, logos, and LED colors. 

Read more about [how to set up a Room Navigator as a room booking device](https://help.webex.com/55ypt4/) and [how to book a room](https://help.webex.com/me7z9t/).

**Premium video quality on Cisco collaboration devices in Webex Meetings** 

Now devices can render higher quality video streams in a Webex Meetings and make better use of pixels on 4K displays. Cisco devices support decoding and displaying up to 4K pixels in a Webex Meeting across 1, 2, or 3 screens. For example devices can to render 5x1080p video streams up from 2 and 12x720p video streams up from 4 with bandwidth set at 20Mbps.

**Requirements:** Set maximum bitrate to 10-20Mbps

**Supported devices:** Room Bar Pro, Room Kit EQ/EQX, Room Bar, Desk Pro, Board Pro, Codec Pro, Room Panorama

Read more about [bandwidth management on devices](https://help.webex.com/51qu5cb/).

**Visual watermarking on devices** 

When enabled in Control Hub, visual watermarking persists across all meetings in the organization giving you a secure peace of mind. When you join a meeting on a shared or personal mode device or laptop, you can see the visual watermark with your details across all meeting content.

Watermarking can be used for security reasons when sensitive content is being discussed in a meeting.

Administrators can adjust watermark opacity or add the meeting number in the watermark.

This feature is off by default. To enable, administrators will need to turn on the feature in Control Hub. The functionality to enable in Control Hub will be available by March 20th.

Read more about [enabling](https://help.webex.com/ncyh2f/) and [use](https://help.webex.com/nd7rgs1/) of visual watermarking on devices.

**"No audio connected” indicator in meetings**

In a Webex meeting on a Cisco device, you now get a little more clarity on the audio status of certain participants. If someone chose to not connect their audio as they joined the meeting, you can clearly see this on your device in both the participant list and name label in their video stream.   
  
**Camera presets on Board and Desk Series**

Across the portfolio, you can now make camera presets. This allows setting camera angle and zoom, and saving, recalling and editing presets.

Read more about [adjusting camera settings manually](https://help.webex.com/rjmy3cb/).

**Control of 3rd party peripherals over serial port interface**

You can set up your Board, Desk, or Room series device to control third-party peripherals, such as displays, video switches, projectors, or other, through a serial connection. There is a separate set of configurations and commands that apply to _outbound_ serial control.

You must connect to a USB-A port on the device using a USB-to-Serial dongle. We have mainly tested this feature using dongles with the FTDI chipsets, but other USB-to-Serial dongles should also work. 

You cannot use the built-in serial port on Codec Pro based devices or the micro-USB maintenance port on other devices.

Not supported on: Board 55/70, Board 55S/70S/85S, Room 55 Dual, Room 70, Room 70 G2, and Room 70 Panorama

Read more about [controlling third-party peripherals through serial port](https://roomos.cisco.com/doc/TechDocs/OutboundSerialControl).

**Fixed issues**

- CSCwj43399 - UI Extension button presses no longer trigger action events.
- CSCwi74302 - "InternalError: stack overflow" error when trying to save a macro from Control Hub.
- CSCwi85696 - On Room Navigator, the day in recent calls might not match actual day.
- CSCwj02277 - Devices are unable to join Webex Webinars. Nothing happens after entering the panelist pin.
- CSCwj03077 - Reset due to logcollector process.
- CSCwj06217 - Video not scaling on the screen after manually toggling resolution.
- CSCwi80593 - Booking requested notification shown when it is not supposed to.
- CSCwi86352 - Share button disabled on Room Navigator during a call.
- CSCwi71784 - Issue with the touch panel share screen when upgraded to RoomOS 11.11.1\.
- CSCwi75956 - After upgrading to RoomOS 11, touch panel connected to a Board is vertically and horizontally mirrored.
- CSCwi69537 - Crash during a call or meeting on Codec Plus based systems.
- CSCwi96959 - People count remains 0 when the device is in Standby state, and someone comes in to the room.
- CSCwi56754 - Share sources button doesn’t show up on Room Navigator after coming out of standby mode.
- CSCwi76512 - Devices that don't support Microsoft Teams Rooms fail to show macros with error “Macros are not available in Microsoft Teams Rooms only mode. Register with Webex to get access to macros.” after upgrade.

### RoomOS February

**February 14, 2024**

Software version: RoomOS 11.13.1.5 2f1a43e2808

**Manually choose a camera lens**

The device switches between camera lenses based on the activity in the room. We're adding the option to manually select and control any of the device's integrated cameras. You can also create presets for a specific lens.

Selection of a camera lens is available under the manual camera control menu on the following devices: Room Bar Pro, Room Kit EQ, Room Kit EQX, Room Kit Pro, Room Kit Plus, Board Pro, and Room Panorama. 

Read more about [adjusting camera settings manually](https://help.webex.com/rjmy3cb/).

**Embedded apps as shared content**

Sharing web applications, such as 3rd party whiteboards, Slido, and timer app, has been available only for Board and Desk Series devices. These shared apps are now also visible on Room Series devices similar to other shared content. You can use the Webex App to interact with the shared app. If both a screen and an embedded app is shared simultaneously, the last share started is shown on the Room Series device.

Read more about [sharing embedded apps in a meeting](https://help.webex.com/387ig6/).

**Fixed issues**

- CSCwi86352 - Share button disabled on Room Navigator during a call.
- CSCwi69537 - Crash during a call or meeting on Codec Plus based systems.
- CSCwi43440 - Device with Webex Calling is not showing PSTN number next to the workspace name.
- CSCwi61838 - Presentation through HDMI flickering on Board 70S.
- CSCwi57425 - Proxy error diagnostics do not clear after improved HTTP proxy support is enabled.
- CSCwi70468 - Contrast on screen or on HDMI out is increased when selfview is on.
- CSCwi59976 - Google Chromium WebRTC heap buffer overflow vulnerability (CVE-2023-7024).
- CSCwi46092 - Device is not going to sleep when using Miracast in meeting.
- CSCwi40812 - USB-C passthrough call on Room Kit EQ has microphone muted even when _xConfiguration Audio Input Microphone\[1..3\] VideoAssociation MuteOnInactiveVideo_ is set to _On_.
- CSCwi30600 – Far-end not able to hear content audio shared from a multi-screen system in a transcoded call.
- CSCwh77757 - Device crashes when joining a Microsoft Teams call.
- CSCwi73229 - Classroom mode not switching between PresenterTrack (Stage) and SpeakerTrack (Audience).
- CSCwi40692 - Device reboots when running _xCommand Systemunit SoftwareUpgrade_ with URLs longer that 266 characters.

### RoomOS January

**January 25, 2024**

Software version: RoomOS 11.12.1.6 6c205f3b2e5

**Simplified configuration of AirPlay**

We've simplified the AirPlay configuration for administrators working with enterprise networks. 

Read more about [AirPlay configuration](https://help.webex.com/n29ja5v/).

**Invite by email to any Webex meeting**

The invite by email option is now available for all Webex meetings. This allows you to add people to an ongoing meeting by sending an email which is useful when you want to invite someone outside your organization. In an ongoing meeting, tap the Add button and send an email invitation directly from the device.

Read more about [adding participants to a meeting](https://help.webex.com/n9fvlr0/). 

**Support for Wi-Fi diagnostics in ThousandEyes agent**

We’ve added support for Wi-Fi diagnostics in ThousandEyes agent for RoomOS devices.

Read more about [ThousandEyes integration for RoomOS devices](https://help.webex.com/en-us/gg3kd3/). 

**Visual update of devices meeting lobby**

We've updated the meeting lobby for our devices to align with the new RoomOS UI. 

**Fixed issues**

- CSCwh62267 - Device reboots with Keyspan USB-to-serial adapter.
- CSCwi70468 - Contrast on screen or on HDMI out is increased when selfview is shown.
- CSCwc30289 - Chinese (simplified and traditional) and Japanese keyboard search not working as expected when using a web app on a device.
- CSCwi39019 - Crash in camera head detection while in a call.
- CSCwi70613 - Touch 10 might hang on Establishing Connection during pairing when it should show login page.
- CSCwi38979 - Room Navigator in controller mode ends up in an incorrect UI state.
- CSCwh96136 - Device stuck with a black screen after switching from proximity sharing to HDMI sharing.
- CSCwe28201 - Device loses CEC connection with Samsung displays.
- CSCwi17704 - Changing _Audio Output ConnectorSetup_ from _Auto_ to _Manual_ should not change the default configuration.
- CSCwi15505 - Text shows upside down in Hebrew when creating camera presets.
- CSCwi02465 - SpeakerTrack 60 not tracking when in Group mode.
- CSCwi21676 - RoomOS Information Disclosure Vulnerability.
- CSCwi33329 - When using WebView on Board Series devices, there is occasional hanging and crashing when opening or maxing out the amount of RAM on the device.

[2023](#sx10%5Fr%5Fwhats%5Fnew%5F2023)

### December 13th, 2023

Custom buttons in control panel 

Software version: RoomOS 11.11.1.9 282feae77e4

We've added the possibility to place custom UI extension buttons in the control panel on Board, Desk, and Room Series devices. This gives integrators more flexibility when creating custom applications.

 Read more about [how to set up UI extensions](https://roomos.cisco.com/doc/TechDocs/UiExtensions). 

Join Microsoft Teams meetings with meeting ID 

Software version: RoomOS 11.11.1.9 282feae77e4

Join Microsoft Teams meetings without having to first schedule it in the device’s calendar. Now you have the option to simply enter a meeting ID and meeting passcode for a meeting to join with WebRTC, also referred to as _Direct Guest Join_.

 Read more about [joining Microsoft Teams meetings](https://help.webex.com/n3r2ihu/). 

Extended microphone support for Board Pro and Codec Pro 

Software version: RoomOS 11.11.1.9 282feae77e4

We now have support for additional microphones for Board Pro and Codec Pro.

- Board Pro: Up to 3 Cisco Table Microphone Pros.
- Codec Pro: Up to 8 Cisco Table Microphone Pros.

### November 15th, 2023

The presenter and audience room setup 

Software version: RoomOS 11.10.1.8 797ea81be71

The presenter and audience setup enables presenters to engage and inspire their audience in large rooms, and provides a seamless experience regardless of where you join the event from in hybrid events.

We have combined the Classroom and Briefing room setups with new and enhanced functionality. Presenter and audience setup comes with improved intelligent camera switching that is based on voice activity in the room which reduces the number of distractions in the meeting, and keeps the focus on the presenters.

We are also providing new admin resources with a new diagnostics page, enabling the room to be ready at any moment.

Read more about [setting up](https://help.webex.com/nlio4t1/) and [using](https://help.webex.com/nlg17tu/) presenter and audience room setup.

View full chat panel on devices 

Software version: RoomOS 11.10.1.8 797ea81be71

 Now when you see a meeting chat notification pop-up on your device, you are able to access that chat and the full meeting chat history directly on your device. Access the full chat panel from the call controls or the meeting chat notification that you see on the screen. To interact with the chat, you must use your Webex app on your mobile or laptop. 

 Read more about [chat on devices](https://help.webex.com/n5oe59h/). 

Third-party touchscreen support 

Software version: RoomOS 11.10.1.8 797ea81be71

You can replicate the Board Pro experience when using a Room Bar, Room Bar Pro, or EQ with a compatible third-party touchscreen.

Turn meeting rooms into immersive ideation spaces by easily connecting your interactive touch display to Cisco collaboration devices. Now you can add digital whiteboarding and interaction into your collaboration experience. 

We support Samsung and Dell interactive displays through USB-A. Other displays can be tested in the future. 

 Read more about [third-party touchscreen support](https://help.webex.com/ncyh2f/). 

Webex content audio improvements 

Software version: RoomOS 11.10.1.8 797ea81be71

Addition of a content audio channel for Webex meetings offers higher fidelity audio in meetings. The content audio follows the content frame and gives a more natural experience when listening to presentations with sound. The content audio channel is on by default.

Proxy support for the ThousandEyes agent 

Software version: RoomOS 11.10.1.8 797ea81be71

We have added proxy support for the ThousandEyes agent that is installed on RoomOS devices. When a proxy is configured on the device, the ThousandEyes agent on the device can access the ThousandEyes cloud platform through the configured proxy.

Read more about [ThousandEyes integration for RoomOS devices](https://help.webex.com/gg3kd3/).

Support for Cisco Room Kit EQX 

Software version: RoomOS 11.10.1.8 797ea81be71

We have added support for Cisco Room Kit EQX. Read more about the product details in [the data sheet](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/spark-room-kit-series/room-kit-eqx-ds.html). 

Changes to whiteboard Save flow 

Software version: RoomOS 11.10.1.8 797ea81be71

We've moved the _Save_ button to the whiteboard toolbar to make it easier to discover.

Read more about [whiteboards on Board and Desk Series](https://help.webex.com/zfhy55/).

### October 18th, 2023

Use an additional screen with Desk Pro 

Software version: RoomOS 11.9.1.11 718c82a6f42

You can connect a secondary screen to a Desk Pro's HDMI Out connector. This gives more screen real-estate and flexibility in meetings.

The recommended setup is a 4K monitor (16:9), with your primary display as the external monitor. This gives the best experience for a combined computer and in-meeting use.

In meetings, the default is to use the extra monitor only for presentation (to keep an eye-line with people on video). It is possible to configure the extra display for mirroring or additional participants.

Read more about [connecting a second screen to a Desk Pro](https://help.webex.com/ijhsmw/).

Annotation and pointing on live content share 

Software version: RoomOS 11.9.1.11 718c82a6f42

The presenter and other participants in the meeting can point and annotate on shared content. You can interact directly with shared content directly from your Board and Desk Series devices without disrupting the flow of the presentation.

This is an additional capability that makes content share more engaging. We're keeping the current snapshot-based annotation as is.

Read more about [live annotation](https://help.webex.com/q1hs6cb/). 

Join Microsoft Teams meetings from home screen app 

Software version: RoomOS 11.9.1.11 718c82a6f42

Devices' admin is now able to add a join Teams meeting app to the home screen which uses a preconfigured CVI provider to join calls. The app lets users enter a Video Conference ID and the required tenant information to join a meeting. The CVI provider can be configured locally on a device, or bulk configured from Control Hub. The app can be used for Cisco CVI, and other CVIs that follow the syntax <abc.domain.example>. 

Read more about [enabling Teams meeting app](https://help.webex.com/nsx4cpe/) and [joining Teams meetings](https://help.webex.com/n3r2ihu/).

Connecting external microphones to Room Bar Pro 

Software version: RoomOS 11.9.1.11 718c82a6f42

The microphone behavior when connecting external microphones to Room Bar Pro has changed. Now the internal microphone's near talker zone is automatically switched off when you connect an external analog or digital (Ethernet) microphone.

Synchronize certificates on a paired Cisco Room Navigator 

Software version: RoomOS 11.9.1.11 718c82a6f42

Easily enhance your Room Navigator's security by syncing and updating security certificates through its connected Cisco device using the xAPI.

Read more about [certificates on devices](https://help.webex.com/n959q76/).

Media over HTTP proxy 

Software version: RoomOS 11.9.1.11 718c82a6f42

We're expanding the HTTP proxy support to include media flow through proxy.

Read more about [proxy use](https://help.webex.com/no5dwuq/).

### September 7th, 2023

PIN Lock for Desk Series devices 

Software version: RoomOS 11.8.1.7 32abe526e52

A 6-digit PIN allows you to lock your personal device for security and privacy reasons. When the device is locked, any sensitive information, such as the user’s calendar, recent calls, whiteboards, is not accessible without unlocking. Any meeting notifications are shown without a meeting subject.

Supported on: Desk Pro, Desk, and Desk Mini in personal mode.

Read more about [PIN lock for Desk Series](https://help.webex.com/g7wj5w/).

Miracast® infrastructure mode 

Software version: RoomOS 11.8.1.7 32abe526e52

The current Miracast implementation supports direct mode, using an ad-hoc network between the sender and the RoomOS device.

With the addition of infrastructure mode (MS-MICE), we add flexibility for deployment in dense corporate networks. 

By using the network infrastructure for media, there is less risk for signal interference between Miracast and other Wi-Fi traffic.

Read more about [configuring Miracast](https://help.webex.com/w60modb/).

New deployment options for Room Navigator 

Software version: RoomOS 11.8.1.7 32abe526e52

We support the following deployment scenarios with Room Navigator:

- Desk pairing: Use a Room Navigator as a room booking device for a Desk Series device in a huddle space or a quiet room.
- Companion mode: Add a standalone Room Navigator to an existing workspace containing either a DX, MX, or SX Series device, or a device set up with Microsoft Teams Rooms. The Room Navigator can be set up with room booking or a persistent web app.
- Local pairing: Use a direct paired Room Navigator for room booking or a persistent web app.
AES67 interoperability on Room Devices 

Software version: RoomOS 11.8.1.7 32abe526e52

The Room Kit EQ, Room Bar Pro, Room Kit Pro, and other Codec Pro based products now support the AES67 standard (audio transport over IP). Therefore, you can connect third-party microphones and loudspeakers that support AES67 directly to these Cisco devices using Ethernet.

For the Room Kit EQ and Room Bar Pro, the AV Integrator License is needed.

Read more about [AES67 interoperability](https://help.webex.com/zks7jeb/).

Invite by email to Webex Meetings from a device 

Software version: RoomOS 11.8.1.7 32abe526e52

You can invite people to join instant meetings by email directly from a device.

Read more about [instant meetings](https://help.webex.com/kh85q9/).

Improved meeting reminders 

Software version: RoomOS 11.8.1.7 32abe526e52

We've made several enhancements to the meeting reminder notifications:

- Removed redundant reminders for paired devices. Uses configuration: _Bookings Visibility MeetingReminder <All, ControllerOnly>_ Default: ControllerOnly
- Reminder snoozes when the user clicks away.
- Bringing back avatars for current participants. Uses configuration: _UserInterface Bookings Visibility JoinedParticipants Avatars <Auto, Hidden>_ Default: Auto
- Bring up snoozed notifications when the current meeting ends.
- Bring up notifications on view PC mode.
- Added animation to distinguish between multiple stacked reminders.
Quiet hours indicator on devices 

Software version: RoomOS 11.8.1.7 32abe526e52

Devices now show the quiet hours state if a user has set them in the Webex App.

Read more about [setting quiet hours](https://help.webex.com/jll9p6/).

### August 9th, 2023

Meeting zone camera framing 

Software version: RoomOS 11.7.1.6 16945c93906

Enable efficient, distraction-free meetings in open spaces and glass-walled meeting rooms by only framing and tracking people in the meeting zone. Manually set boundaries or leverage the intelligence in the device to automatically frame the relevant space.

Read more about [setting up a meeting zone in a room](https://help.webex.com/owp8b5/).

RoomOS and ThousandEyes integration 

ThousandEyes agent that is integrated with RoomOS devices offers network path visibility for active troubleshooting of meetings to pinpoint issues in real time.

Initially the integration supports Webex meetings. Other meeting types, such as Microsoft Teams, are planned for the future.

Read more about [ThousandEyes integration for RoomOS devices](https://help.webex.com/gg3kd3/).

Disable internal microphone and loudspeaker on Desk Series devices 

Software version: RoomOS 11.7.1.6 16945c93906

These configurations disable the internal microphone and loudspeaker on Desk Series devices. When disabled, audio can't be picked up by the internal microphone or played out on the internal loudspeaker if a connected headset is disconnected.

- Audio Input Microphone 1 Mode: On/Off
- Audio Output InternalSpeaker Mode: On/Off/UltrasoundOnly
People focus layout option on by default 

Software version: RoomOS 11.7.1.6 16945c93906

People focus layout option is now on by default. People focus optimizes screen real estate by removing unnecessary background.

Read more about [people focus](https://help.webex.com/n997hz9/).

New Microsoft Teams WebRTC loading screen 

Software version: RoomOS 11.7.1.6 16945c93906

We've updated the loading screen for Microsoft Teams meetings using WebRTC to align with the current RoomOS UI design.

### July 10th, 2023

Homescreen web widget 

Software version: RoomOS 11.6.1.5 1058dcbc695

Homescreen widget makes it possible to place any web content on the homescreen of a RoomOS device. You can use homescreen widgets for branding, corporate messaging, or custom work-flows.

Read more about [homescreen web widgets](https://help.webex.com/nrsrs8f/).

Use an additional screen with Board Pro 

Software version: RoomOS 11.6.1.5 1058dcbc695

You can connect a secondary screen to the Board Pro Series’ HDMI Out connector. 

The behavior can be set to:

- Extend the meeting to both screens
- Only extend presentation to the secondary screen
- Mirror
Support for Cisco Room Bar Pro 

Software version: RoomOS 11.6.1.5 1058dcbc695

We have added support for Cisco Room Bar Pro. Read more about the product details in [the data sheet](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/room-bar-pro-ds.html). 

### June 12th, 2023

Internal IP address range enforcement 

Software version: RoomOS 11.5.1.5 c85aed30d22

From the June 2023 release onward, devices can't access internal IP address ranges outside the ones that we have documented. If you have connected peripheral devices, such as cameras, touch controllers, and more, to the device's other Ethernet ports, make sure that the IP addresses in use are within the documented range. 

Read about the allowed IP address ranges in the _Ethernet ports_ section of [the newest version of the API guide](https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html).

Changes to Proxy Auto-Configuration (PAC) 

Software version: RoomOS 11.5.1.5 c85aed30d22

We're changing how Proxy Auto-Configuration (PAC) matching works for pacmanager in RoomOS software. Until now, pacmanager has used ordinary regular expressions for the matching. We are changing the _shExpMatch_ function to use a matching that is similar to the browsers. PAC files specifically written for RoomOS may need to be updated to keep working as intended.

Read more about [the PAC change in RoomOS](https://help.webex.com/oej2aq/).

Standby hours for Room Navigator 

Software version: RoomOS 11.5.1.5 c85aed30d22

Standby hours for Room Navigator helps with energy saving and protects the screen of the Room Navigators where signage, booking, and wake-up on motion detection is activated. Default active hours are 7 a.m.-7 p.m., but these can be configured to suit your workplace's needs.

 Read more about [Room Navigator as a stand-alone device](https://help.webex.com/iq6aw6/). 

People presence accuracy improvement 

Software version: RoomOS 11.5.1.5 c85aed30d22

New accuracy improvements reduce false positives and negatives for people presence. People presence is used, for example, for occupancy metrics in Control Hub's Workspaces and on Room Navigator's in room booking mode. The accuracy improvements give you more reliable information on the use of your meeting rooms.

Available on shared mode devices.

Chat notification settings 

Software version: RoomOS 11.5.1.5 c85aed30d22

You can adjust the default for chat notifications on your device to suit your preference. Choose between:

- Focused for quiet mode
- Preview to see all messages and text
- Turn off completely

Available on personal mode devices.

 Read more about [chat notifications](https://help.webex.com/n5oe59h/). 

Audio notifications for recording and Webex Assistant in Webex Meetings 

Software version: RoomOS 11.5.1.5 c85aed30d22

Administrators can enable Cisco Collaboration devices to play a voice prompt when someone starts a recording or turns on the Webex Assistant in a Webex meeting.

The voice prompt is only available in English at this time and is disabled by default for this reason.

Administrators can configure audio notifications with: `xConfiguration Webex Meetings AudioNotifications <False/True>`

New setup wizard 

Software version: RoomOS 11.5.1.5 c85aed30d22

We've updated the setup wizard for our devices to align with the new RoomOS UI. The new wizard includes options for RoomOS, on-premises, and Cisco devices with Microsoft Teams registration.

Enhance Wi-Fi security with WPA3 support 

Software version: RoomOS 11.5.1.5 c85aed30d22

We've added support for WPA3 Wi-Fi for additional security.

Change in default layouts 

Software version: RoomOS 11.5.1.5 c85aed30d22

We changed the default people layout for single screen to grid more than a year back. By customer demand, we've now changed the default people layout on dual screen systems to grid layout.

You can always change the layout to suit your meeting style from the device UI.

Whiteboard improvements 

Software version: RoomOS 11.5.1.5 c85aed30d22

We're adding the capability to add text within a shape, with formatting options similar to free-form text areas. You can also choose between more shapes in the shape library.

### May 2nd, 2023

Changes to Web Proxy Auto-Discovery support 

Software version: RoomOS 11.4.1.8 c2c0e269f17

RoomOS devices support Web Proxy Auto-Discovery (WPAD) a method that is used by clients to locate a configuration file without having to enter the URL. We have changed how WPAD support works on RoomOS devices. This may have an impact on your devices. 

We have removed upwards domain search and now the devices attempt to download from a single location: http://wpad/wpad.dat. This behavior matches the way how WPAD support in web browsers, such as Netscape and Firefox, works.

Read more about [changes to Web Proxy Auto-Discovery support](https://help.webex.com/c41qao/).

Hot-desking: Personal business line with Webex Calling 

Software version: RoomOS 11.4.1.8 c2c0e269f17

Now you can get a fully personalized experience not just for meetings but also for calling while hot-desking. When you sign in, the device automatically registers with the Webex Calling directory number that is assigned to you. The device is fully personalized for calling. You can make and receive calls with your caller-id and see your call history in _Recents_ as if it was your personal device.

Available on all Desk Series devices while using Webex Calling service.

 Read more about [hot-desking](https://help.webex.com/hx8m1o/). 

Audio watermarking on devices in Webex meetings 

Software version: RoomOS 11.4.1.8 c2c0e269f17

Webex now offers audio watermarking to trace the source of prohibited recordings on all devices. When a host enables audio watermarking in an encrypted meeting, a unique identifier is embedded in the received audio to identify a device for the leak. 

Zoom call controls on Board and Desk Series 

Software version: RoomOS 11.4.1.8 c2c0e269f17

Board and Desk series now have call controls to control Zoom meetings. When you join a Zoom meeting, you no longer have to remember DTMF codes. As an admin you don't need to create, and maintain macros to provide call controls for your users.

 Read more about [joining Zoom meetings](https://help.webex.com/0lobg6/). 

Join Webex Webinars as an attendee 

Software version: RoomOS 11.4.1.8 c2c0e269f17

Devices now support Webex Webinars both as attendee and panelists. When joining as an attendee, the device joins the webinar with no interaction capabilities or a way to be promoted to panelist. Joining as a panelist user gets full interaction on the device.

Two joining methods:

- Use One Button To Push (OBTP) from scheduled meeting rooms.
- Tap the Webex button on the home screen and enter the meeting ID and password.

 Read more about [joining Webex Webinars from devices](https://help.webex.com/z7jt86/).

Cable share pop-up 

Software version: RoomOS 11.4.1.8 c2c0e269f17

A new flow assists you to start your content sharing. When you connect a computer with a cable to the device, a small pop-up guides you on the next steps.  
  
 Read more about [sharing](https://help.webex.com/c0jgpv/). 

Visual updates 

Software version: RoomOS 11.4.1.8 c2c0e269f17

We've made some visual changes to our UIs to give you a better meeting experience.

- Share menu indicates more clearly the different inputs and buttons.
- Name-labels are now left-aligned.
- On two screen devices in a call when one of the screens is idle, the idle screen now shows a dark and discreet wallpaper.

### March 27th, 2023

Cisco Board Pro 55 and 75 with Microsoft Teams Rooms 

Software version: RoomOS 11.3.1.16 f56233da7d5

You can deploy Cisco Board Pro 55-inch and 75-inch models with Microsoft Teams Rooms application. Users get a complete Teams Rooms experience by default. On the Cisco Board Pro, Teams users can enjoy intelligent, built-in device features that help make their meetings more inclusive and productive. 

All certified devices are managed in the Teams Admin Center and the new Teams Rooms Pro Management Portal. 

Certified devices can also be registered to and managed in Control Hub. If the Board Pro is also registered to Control Hub, users can join Teams meetings and fully-featured Webex meetings back-to-back from the Teams Rooms home screen – with no need to reboot or reconfigure their device. 

Read more about [Cisco collaboration devices with Microsoft Teams Rooms](https://roomos.cisco.com/doc/MTR).

Hide non-video participants 

Software version: RoomOS 11.3.1.10 1e761f985a1

The new layout option allows you to hide non-video participants from your screen. Now you can see more video participants regardless of when they joined the meeting.

 Read more about [how to hide non-video participants](https://help.webex.com/glbrrz/). 

Instant meetings 

Software version: RoomOS 11.3.1.10 1e761f985a1

Create meetings without a Webex account and without having to schedule through your calendar. With instant meetings, you can walk into a meeting room with a shared device and create a meeting with a tap of a button. You'll then get the meeting information to share with other participants.

 Read more about [instant meetings](https://help.webex.com/kh85q9/). 

Room Navigator as a stand-alone device 

Software version: RoomOS 11.3.1.10 1e761f985a1

Room Navigators can be used as a stand-alone device in rooms not equipped with a video conferencing device. This provides a consistent experience for all rooms with or without a device. 

You can register a Room Navigator directly to Control Hub and manage it as a stand-alone device. Room Navigator as a stand-alone device supports third-party party web apps, room booking, and xAPIs for third-party integrations. 

 Read more about [Room Navigator as a stand-alone device](https://help.webex.com/iq6aw6/). 

Join upcoming calendar meetings early 

Software version: RoomOS 11.3.1.10 1e761f985a1

All meetings that are shown on the device's upcoming meetings list will have a Join button. This allows users who need extra time to prepare for a meeting to join anytime that day. Early join doesn't impact current OBTP behavior.

 Read about [how to enable early joining for calendar meetings](https://help.webex.com/nwq4jxc/). 

See chat notifications on your device 

Software version: RoomOS 11.3.1.10 1e761f985a1

You can see a chat notification for every in-meeting message sent. The notification shows up on the top-right corner of the device's screen. You can mute the notifications from the meeting status indicator. 

Available in Webex Meetings on Webex registered devices and devices that are linked with Edge for Devices with Webex Optimized Experience enabled.

 Read more about [chat notifications](https://help.webex.com/n5oe59h/) and [how to disable them](https://help.webex.com/eget72/). 

Low bandwidth notification 

Software version: RoomOS 11.3.1.10 1e761f985a1

You now get a notification when network conditions are not ideal, and Webex stops sending video and replaces it with profile pictures to save bandwidth.

### February 9th, 2023

Room USB is supported on RoomOS 11 

Software version: RoomOS 11.2.1.5 dd101dc1279

Cisco Room USB has gotten a new user interface style in line with our other collaboration devices. 

Restyled UI extensions 

Software version: RoomOS 11.2.1.5 dd101dc1279

We've updated the visual style of the UI extensions panel to align with the current user interface style.

Increased bandwidth for select Board, Desk, and Room Series devices 

Software version: RoomOS 11.2.1.5 dd101dc1279

Select devices can now use more bandwidth which results in improved video quality in a wide range of use cases. Such use case can be any scenario including devices with two screens, content sharing, and meetings with more than two participants. Increased bandwidth noticeably improves the experience when people focus is used. Devices with increased bandwidth threshold will see less impact from issues that are related to network connectivity.

Administrators must enable this by setting the following configurations to the new bit rate:

- Conference MaxReceiveCallRate
- Conference MaxTransmitCallRate
- Conference DefaultCall Webex Rate (Applies only to Webex based calls and meetings)

Available on: Codec Pro, Board Pro, Webex Desk, Desk Mini, Desk Pro, Room 70 Single G2, Room 70 Dual G2, Room Bar, and Room Kit EQ.

 Read more about [bandwidth management](https://help.webex.com/51qu5cb/). 

### January 16th, 2023

Default layouts in meetings 

Software version: RoomOS 11.1.1.6 ab49a15fe2f

RoomOS devices now follow the default layout set for meetings for the Webex Site from Control Hub. A default layout creates a consistent meeting experience for your users. The setting applies for people-layouts. When content is shared, the default layout is “Stack”.  
  
Support for Cisco Room Kit EQ 

Software version: RoomOS 11.1.1.6 ab49a15fe2f

We have added support for the Cisco Room Kit EQ collaboration bundle. Read more about the product details in [the data sheet](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/spark-room-kit-series/room-kit-eq-ds.html). 

[2022](#Cisco%5FReference.dita%5F455fe4ac-754e-4ae9-9574-19b67c41a522)

### November 30th, 2022

RoomOS 11 experience becomes the default user experience 

Release ID: RoomOS 11.0.1.7 a5cbbd68f31 

RoomOS 11 gives you a new user experience on Board, Desk, and Room Series devices. The fresh and updated user interface enables new features, and intuitive navigation with swipe gestures.

With RoomOS 11, you get access to the following features: 

- [Frames](https://help.webex.com/nov4sxu/)
- [People focus layout option](https://help.webex.com/n997hz9/)
- [Resize your image on immersive share](https://help.webex.com/nmhu88ab/)
- [Wireless content sharing with Miracast®](https://help.webex.com/w60modb/)
- [Expanded reaction set and support skin tones](https://help.webex.com/w8l8wf/)
- [Real-time translations in Webex Meetings](https://help.webex.com/5geecr/)
- [Open Microsoft OneDrive whiteboards on Board and Desk Series devices](https://help.webex.com/njjlcwt/)
- [Call from laptop using the Webex device as a web camera](https://help.webex.com/ney3qxe/)
- [Optimize for my voice, microphone testing, and noise removal preview](https://help.webex.com/yrrdkv/)
- [Hotdesking for Desk Series](https://help.webex.com/hx8m1o/)
- People presence on devices
- [Simultaneous interpretation](https://help.webex.com/nlzedti/)
- [Kiosk mode](https://help.webex.com/ol1th3/)
- [Embedded apps](https://help.webex.com/387ig6/)

RoomOS 11 experience is supported on Webex registered devices and devices that are linked with Edge for Devices with cloud-managed software upgrade enabled. 

For more information on the basic use of the RoomOS 11 user interface, read the [RoomOS 11 experience](https://help.webex.com/n01kjh1/) article.

Join Zoom meetings 

Release ID: RoomOS 11.0.1.7 a5cbbd68f31 

Joining a Zoom meeting on your Cisco device is now easier. A Zoom branded button on the home screen allows you to dial into Zoom meetings. 

Experience the Zoom-themed and improved Zoom meeting interface. Meeting controls that were previously available as DTMF commands are now easily discoverable as regular meeting controls.

For more information, read the [Enable Zoom meetings](https://help.webex.com/zai3j4/) and [Join Zoom meetings](https://help.webex.com/0lobg6/) articles.

Apple AirPlay support 

Release ID: RoomOS 11.0.1.7 a5cbbd68f31 

Apple AirPlay's simple sharing experience you know, on Webex devices. Wirelessly connect an iPhone, iPad, or Mac to share your screen, collaborate, and playback audio and video content locally and in meetings.

For more information, read the [Configure AirPlay](https://help.webex.com/n29ja5v/) and [Wireless sharing with AirPlay](https://help.webex.com/ndlsg3c/) articles.

Updates to Room Navigator in room booking mode 

Release ID: RoomOS 11.0.1.7 a5cbbd68f31 

Enable people to find the right room for their next meeting by displaying real-time status and room sensor data outside the room on the Webex Room Navigator booking panel.

We've added occupancy and temperature information to let people decide if they need a sweater or should find another room with more capacity. 

For more information, read the [Set up a room booking device](https://help.webex.com/55ypt4/) and [Outside room booking](https://help.webex.com/me7z9t/) articles.

Frames available with Quad Camera 

Release ID: RoomOS 11.0.1.7 a5cbbd68f31 

With frames camera feature enabled in a meeting room, the camera shows people individually or in groups. Frames has been available on all Board Pro and Room Bar devices and we've now added it to Room Series devices with a Quad Camera.

For more information, read the [Frames](https://help.webex.com/nov4sxu/) article.

### October 25th, 2022

Webex Assistant for devices available in Portuguese 

Release ID: RoomOS 10.20.1.6 d8b09bf5f7b

Portuguese speaking users can now communicate with the Webex Assistant in Portuguese (Portuguese-Portugal and Portuguese-Brazil). The Webex Assistant language follows the language setting on the device. So if you have selected Portuguese as the language for the device, the Webex Assistant listens for Portuguese. 

For more information, read the [Webex Assistant for devices](https://help.webex.com/nljt9yc/) article.

Persistent camera and microphone access for webview 

Release ID: RoomOS 10.20.1.6 d8b09bf5f7b

You can now configure devices to grant permanent access to camera and microphone for defined websites. This is useful for custom setups, such as kiosk mode or web apps, so that the users don't have to allow access through a dialogue every time a call is made.

For more information, read the [Add web apps](https://help.webex.com/h47w6/) article.

### September 12th, 2022

Immersive share support from Webex App to devices 

Release ID: RoomOS 10.19.1.1 cbd8b1e5d9e

Devices can consume and correctly render receiver-side immersive share sent from the clients.

When immersive share is initiated from a Webex App, this is now also visible on Webex devices with RoomOS 11experience enabled. Immersive share initiated from a device is still visible on all receiving devices

For more information, read the [Immersive share on Desk Series](https://help.webex.com/nmhu88ab/) article.

Webex Assistant for devices available in Italian 

Release ID: RoomOS 10.19.1.1 cbd8b1e5d9e

 Italian speaking users can now communicate with the Webex Assistant in Italian. The Webex Assistant language follows the language setting on the device. So if you have selected Italian as the language for the device, the Webex Assistant listens for Italian. 

For more information, read the [Webex Assistant for devices](https://help.webex.com/nljt9yc/) article.

### August 15th, 2022

Hot-desking with QR code 

Release ID: RoomOS 10.18.1.3 f60d4725939

Sign into any Desk Series device configured for hot-desking by scanning a QR code using a mobile phone. Available when RoomOS 11 is enabled on the device.

For more information, read the article on how to [Sign in and book your Webex device with Hot desking](https://help.webex.com/hx8m1o/).

### July 11th, 2022

RoomOS 11 user experience for Room Series 

Release ID: RoomOS 10.17.1.1 ab490d5db06

The new RoomOS 11 UI Experience gives devices a modernized experience with an app centric navigation paradigm. We wanted to expand the capabilities of our devices and make them into multiactivity devices which can cover all the needs in your workday. With this in mind, it was important to renew our user experience. One of the core changes is the ability of operating system to run multiple apps at the same time.

We released the possibility to opt-in for RoomOS 11 experience for Board and Desk Series at the start of the year. Now we are ready to release it for Room Series. You can toggle on the new user experience for your organization in Control Hub.

Many features we've released in 2022, like Miracast®, people focus, and real-time translations, require RoomOS 11.

Supported on Board, Desk, and Room Series on Webex registered devices and devices that are linked with Webex Edge for Devices with cloud-managed software upgrade enabled.

For more information, read the [RoomOS 11 experience](https://help.webex.com/n01kjh1/) article.

People presence on devices 

Release ID: RoomOS 10.17.1.1 ab490d5db06

Now you can find out availability of the person from the device itself in all three lists: Directory, Favorites, and Recents. People presence shows availability that is consistent across Webex App and user’s other Cisco Webex devices and phones. 

You can set Do Not Disturb or a custom status from the device and the status is synchronized across your other devices and phones.

Available only with RoomOS 11 enabled on Desk Series.

Frames 

Release ID: RoomOS 10.17.1.1 ab490d5db06

When several people are together in a meeting room, you can change the camera mode to Frames for a better view of everyone. Frames mode crops away unnecessary space around participants and composes a view where the people appear closer together, evenly sized and at the same eye level, in up to four frames.

Available only with RoomOS 11 enabled on Webex registered Room Kit, Room Kit Mini, and Room 55.

For more information, read the [Frames](https://help.webex.com/nov4sxu/) article.

4K content sharing 

Release ID: RoomOS 10.17.1.1 ab490d5db06

Webex devices can now share 4K content into Webex meetings. This feature enables use cases where a high-resolution image is needed, such as observing MRI from a patient.

Minimum required bandwidth: 2.8 Mbps

- Desk Pro, Codec Pro, Board Pro: Receive: 4Kp15, send: 4Kp15
- Room Kit Mini, Room Kit, Room 55: Receive: 4Kp7.5, send: 4Kp7.5
- Webex Desk, Desk Mini: Receive: 4Kp15, send: 1080p30

Supported on Webex registered devices and devices that are linked with Webex Edge for Devices.

New reactions experience 

Release ID: RoomOS 10.17.1.1 ab490d5db06

Reactions on devices will now show the name of the person who sent the reaction. Reactions have moved from the top right corner of the screen to the lower left corner. These changes are done to provide a consistent experience across apps and devices. If the host disables names in reactions, the devices only render the reactions.

For more information, read the [Reactions](https://help.webex.com/w8l8wf/) article.

Embedded apps 

Release ID: RoomOS 10.17.1.1 ab490d5db06

Seamlessly interact with webapps inside a Webex meeting, without worrying about logging in or switching context to another tool.​

With embedded app support, participants on a Webex device are able to see and interact with apps that have been opened in a call. After the app has been initiated by a participant on Webex App, the device automatically opens and logs you in to the application. Several embedded apps, such as Slido, Miro, and Mural, are available by default.  
  
Available only with RoomOS 11 enabled on Desk and Board Series. Not supported on Desk Hub. Only available for devices in personal mode.

For more information, read the [Embedded apps](https://help.webex.com/387ig6/) article.

Call from laptop using the Webex device as a web camera 

Release ID: RoomOS 10.17.1.1 ab490d5db06

We've added support for using a Room series device as web camera (with loudspeaker and microphone) when you call from your laptop. You need an Inogeni HDMI-to-USB converter in the setup. You can control the camera, adjust the volume, remove background noise, and optimize the audio quality, from the device UI. 

Available only with RoomOS 11 enabled.

For more information, read the [Call from laptop](https://help.webex.com/ney3qxe/) article.

Set office hours on a Webex device

Release ID: RoomOS 10.17.1.1 ab490d5db06

Setting the office hours on a device lets you switch off always-on features like signage, outside of ordinary office hours. You can also prevent the device from waking up just because it detects motion in the room. Administrators can switch the feature on and off, set the hours, and configure standby and wake-up behavior.

For more information, read the [Set office hours](https://help.webex.com/article/nge8zpq/) article.

### June 16th, 2022

Wireless content sharing with Miracast® 

Release ID: RoomOS 10.16.1.6 1d075d92585

A solution for wireless content sharing from Windows computers, without the need for a client. Miracast allows for sharing extended desktop, so you can see the presenter view while presenting.

Using Wi-Fi Direct, a direct network connection is established from the computer to the Webex device. This connection lets you share content without the need to connect to guest network or enterprise Wi-Fi.

Available only with RoomOS 11 enabled on Board and Desk Series. Requires that the Webex device is on cabled network.

For more information, read the [Configure Miracast](https://help.webex.com/w60modb/) and [Wireless sharing with Miracast](https://help.webex.com/kfdwufb/) articles.

Noise removal update 

Release ID: RoomOS 10.16.1.6 1d075d92585

Noise removal is now on as default on both shared and personal registered devices. We have renamed the option that was previously called "Default" and it's now called "Neutral".

For more information, read the [Noise removal](https://help.webex.com/ncbljxfb/) article.

### May 11th, 2022

Microphone testing and noise removal preview 

Release ID: RoomOS 10.15.1.6 10270456893

You can use microphone testing to check that your voice gets picked up properly by the device. It also lets you test the effectiveness of the noise removal settings in your current environment.

Available only with RoomOS 11 enabled on Desk and Board Series.

For more information, read the [Microphone testing](https://help.webex.com/yrrdkv/) article.

Simultaneous interpretation 

Release ID: RoomOS 10.15.1.6 10270456893

Simultaneous interpretation allows meeting attendees to hear the presentation in their preferred language. Using Webex devices, attendees can choose a language and the audio balance between the original audio and the translated audio.

Interpreters and hosts are required to use a Webex client.

Simultaneous interpretation support for devices needs to be enabled on the Webex site. This is rolling out on an independent schedule. Check [status.webex.com](http://status.webex.com) to see when it will be enabled for your cluster.

Available only with RoomOS 11 enabled on Desk and Board Series.

For more information, read the [Simultaneous interpretation on devices](https://help.webex.com/nlzedti/) article.

Translation from more spoken languages 

Release ID: RoomOS 10.15.1.6 10270456893

We already support translation from English to 100+ languages with our translation feature. Now we have added support for translation from 12 languages in addition to English. This means that we can translate meetings where any of the following languages are spoken: Chinese Mandarin (Simplified), Chinese Mandarin (Traditional), Dutch, English, French, German, Hindi, Italian, Japanese, Korean, Polish, Portuguese, and Spanish.

Real-time translation is supported as a paid add-on service for Webex Meetings

Available only with RoomOS 11 enabled on Desk and Board Series.

For more information, read the [Closed captioning](https://help.webex.com/5geecr/) article.

### April 11th, 2022

Kiosk mode 

Release ID: RoomOS 10.14.1.8 caa98bba5fb

Kiosk mode transforms Webex devices to a virtual reception or help-desk.​ Kiosk mode allows you to replace the home screen experience with a customized web app. This way you can place calls using buttons in the web app, for example to contact a receptionist. The rest of the user interface stays locked, to ensure that the device can only be used for the intended purpose. 

Available only with RoomOS 11 enabled on Desk and Board Series. Not supported on Desk Hub.

For more information, read the [Kiosk mode](https://help.webex.com/ol1th3/) article.

Webex Assistant for Devices available in Japanese 

Release ID: RoomOS 10.14.1.8 caa98bba5fb

 Japanese speaking users can now communicate with the Webex Assistant in Japanese. The Webex Assistant language follows the language setting on the device. So if you have selected Japanese as the language for the device, the Webex Assistant listens for Japanese. 

For more information, read the [Get Started with Webex Assistant for Devices](https://help.webex.com/jpir3w/) article.

Resize your image on immersive share 

Release ID: RoomOS 10.14.1.8 caa98bba5fb

You can now resize and move your image to better fit the presentation you're sharing using immersive share.

Available only with RoomOS 11 enabled on Desk Series. Not supported on Desk Hub.

For more information, read the [Immersive share](https://help.webex.com/nmhu88ab/) article.

Alarm detection on Webex Board, Desk, and Room devices 

Release ID: RoomOS 10.14.1.8 caa98bba5fb

Using macros and third-party integrations, your Webex Board, Desk, or Room device can detect an external alarm and trigger an event in the xAPI.

IMPORTANT: the alarm detection feature supports T3 alarms only, which is the industry-standard alarm pattern in the United States. It is not guaranteed that your device will detect an alarm. For example purposes only: low microphone levels will block detection. Therefore, you should not rely on this feature to raise awareness of an alarm and it does not replace any other safety and security measures and documentation.

For more information, read the [Alarm detection](https://help.webex.com/n76l9zbb/) article.

### March 10th, 2022

People focus layout option 

Release ID: RoomOS 10.13.1.3 dd7ec0ed589

People focus is a layout option that can be applied in any layout family. People focus optimizes screen real estate by removing unnecessary background.
  
  
Available only with RoomOS 11 enabled on Desk and Board Series.

People focus is now available to all as a beta feature, which means that you can expect continuous improvement to the experience.

For more information, read the [People focus](https://help.webex.com/n997hz9/) article.

Expanding reaction set and support skin tones 

Release ID: RoomOS 10.13.1.3 dd7ec0ed589

Webex devices expand the number of reactions available in meetings and add support for skin tones.  
  
Available only with RoomOS 11 enabled on Desk and Board Series.

For more information, read the [Reactions on Webex Rooms](https://help.webex.com/w8l8wf/) article.

Hotdesking for Desk Series 

Release ID: RoomOS 10.13.1.3 dd7ec0ed589

Hotdesking allows you to sign in and book any shared Webex desk device with your Webex identity and convert it into a personalized collaboration device. After signing in, you can have a simple meeting join (One button to push) to their calendar meetings and access your whiteboards and recent calls.

Available only with RoomOS 11 enabled on Desk Series.

For more information, read the articles on how to [Sign in and book your Webex device with Hot desking](https://help.webex.com/hx8m1o/) and [Let users sign in and book a shared device](https://help.webex.com/n9et6aab/).

RoomOS 11 user experience for Webex Edge for Devices linked devices 

Release ID: RoomOS 10.13.1.3 dd7ec0ed589

The RoomOS 11 experience is now available for devices linked with Webex Edge for Devices. One of the core changes with the RoomOS 11 experience is the ability of operating system to run multiple apps at the same time. You can easily switch between a web app, whiteboard, and your ongoing meeting.

Administrators can now toggled on the new user experience for the following devices:

- Webex Desk and Desk Pro
- Board 55/55S, Board 70/70S, and Board 85S

The RoomOS 11 experience is the default user experience on Board Pro 55, Board Pro 75, Desk Hub, and Desk Mini.

For more information, read the [RoomOS 11 experience](https://help.webex.com/n01kjh1/) article.

### February 14th, 2022

Real-time translations in Webex Meetings 

Release ID: RoomOS 10.12.1.4 3cf63babf2a

Don't speak the language? You can now choose to translate from English to one of the 100+ languages that are supported on the RoomOS Devices. Real-Time Translation is an add-on, and purchase of this feature includes the Webex Assistant subscription.

This feature is only available when the RoomOS 11 experience is enabled.

For more information, read the [Closed captioning](https://help.webex.com/5geecr/) article.

Closed captioning update 

Release ID: RoomOS 10.12.1.4 3cf63babf2a

Closed captions are now available as a separate button in the call controls. This means that all users can get closed captions in the meeting without having to turn on Webex Assistant. With automated closed captions turned on, meetings and webinars become even more accessible for participants who are deaf or hard-of-hearing.

This feature is only available when the RoomOS 11 experience is enabled.

For more information, read the [Closed captioning](https://help.webex.com/5geecr/) article.

Support for Webex Room Panorama and Room 70 Panorama 

Release ID: RoomOS 10.12.1.4 3cf63babf2a

The Webex Room Panorama products are now capable as Panorama video when in 1:1 calls. The far-end Panorama room will be represented across the two 82” screens, bringing the two room together. With directional audio on a powerful speaker system and a dedicated presentations screen, Panorama really demonstrates the power of the Cisco Meeting solution, both in 1:1 calls as well as in multipoint calls.

Open Microsoft OneDrive whiteboards on Webex Desk and Board Pro 

Release ID: RoomOS 10.12.1.4 3cf63babf2a

You can now open your Microsoft OneDrive whiteboards directly from the Files button on your device.

This feature is only available when the RoomOS 11 experience is enabled.

For more information, read the [Open Microsoft OneDrive whiteboards](https://help.webex.com/njjlcwt/) article.

Persistent web apps on Webex Room Navigator 

Release ID: RoomOS 10.12.1.4 3cf63babf2a

Running a third-party web application on a Cisco Webex Room Navigator lets you integrate your company's custom solution for managing room bookings and communicating workplace guidelines and information. The app that you select displays on the Room Navigator’s entire screen, replacing the RoomOS user interface. This feature is supported on Room Navigators that are remotely paired over the network to a cloud registered Room Series device. 

For more information, read the [Persistent web app](https://help.webex.com/ohq3u6/) article.

Connecting with Webex app through USB-C 

Release ID: RoomOS 10.12.1.4 3cf63babf2a

Stay connected with your Webex app all the time when you connect with a USB-C cable to any Webex Desk Series device. It helps in use cases where ultrasound pairing doesn't work, such as when you have closed the laptop lid or when you're in an area with multiple devices. USB-C connection enables a seamless transition from messaging from the Webex app to calling and meeting paired with a Desk Series device.

 Requires cloud connectivity and cloud proximity to be enabled.

For more information, read the [Connect with a USB-C cable](https://help.webex.com/jywh3h/) article.

### January 13th, 2022

RoomOS 11 user experience 

Release ID: RoomOS 10.11.1.1 28d904d97dc

We wanted to expand the capabilities of our devices and make them into multi-activity devices which can cover all the needs in your workday. With this in mind, it was important to renew our user experience. One of the core changes is the ability of operating system to run multiple apps at the same time. You can easily switch between a web app, whiteboard, and your ongoing meeting.

Administrators can now toggled on the new user experience for the following devices:

- Webex Desk and Desk Pro
- Board 55/55S, Board 70/70S, and Board 85S

The RoomOS 11 experience is the default user experience on Board Pro 55, Board Pro 75, Desk Hub, and Desk Mini.

RoomOS 11 experience is supported on Webex Cloud registered devices.

For more information, read the [RoomOS 11 experience](https://help.webex.com/n01kjh1/) article.

Optimize for my voice 

Release ID: RoomOS 10.11.1.1 28d904d97dc

We've added a new smart audio option for Board and Desk Series devices. The optimize for my voice audio option only picks up your voice and suppresses the voices of other people talking in a busy environment, such as an open landscape office. It also removes other background noise, such as keyboard clicking, just as the noise removal option does.

This feature is only available when the RoomOS 11 experience is enabled.

For more information, read the [Noise removal for Webex devices](https://help.webex.com/ncbljxfb/) article.

[2021](#Cisco%5FReference.dita%5F67182851-0aaf-43fa-ba2d-7e8bc9156900)

### December 17th, 2021

Advanced software control 

By default, Webex devices running RoomOS software are automatically upgraded and be on the latest software. Alternatively, if required, you can choose which of the last 3 RoomOS 10 versions is best suited for your deployment and when to update. This gives you time to test out functionality on a specific validation channel, in your environment, before deploying to the production environment.

For more information, read the [RoomOS software upgrades](https://help.webex.com/idba5c/) article.

Associate a Webex Edge for Devices linked device with a user 

You can now associate a Webex Edge for Devices linked device with a user using the cloud API.

For more information, read the [Webex Edge for Devices](https://help.webex.com/cy2l2z/) article.

### December 15th, 2021

Join Google Meet meetings on a Webex device 

Release ID: RoomOS 10.9.1.1 fb66b80147e

You can use Webex devices to join Google Meet meetings using the web engine and WebRTC technology. There's an integration with hybrid calendar that provides OBTP as the main way to join the calls. You can also join Google Meet meetings using a dedicated button, similar to the Webex button. Just input the meeting code, generated by the Google invite, and join the meeting on demand.
  
  
For more information, read the [Enable WebRTC to Join Google Meet Meetings](https://help.webex.com/egg1su/) and [Join Google Meet meetings](https://help.webex.com/nxx11sk/) articles.

Improved pairing for touch controllers 

Release ID: RoomOS 10.10.1.1 aa47f0c7e61

 You can now create a PIN that makes connecting a touch controller with a device easier. This is particularly useful for large deployments of touch controllers as the administrator creates the PIN code from Control Hub remotely.

For more information, read the [Connecting a touch controller](https://help.webex.com/fqm3au/) article.

Support for Board Pro 55, Board Pro 75, Desk Hub, and Desk Mini 

Release ID: RoomOS 10.10.1.1 aa47f0c7e61

We've added support for four new products: Cisco Webex Board Pro 55, Cisco Webex Board Pro 75, Cisco Webex Desk Hub, and Cisco Webex Desk Mini.
  
  
For more information, read the get started articles for [Board Pro 55 and 75](https://help.webex.com/n3wklp/), [Desk Mini](https://help.webex.com/nj2vbmbb/), and [Desk Hub](https://help.webex.com/gvgxdm/).

### November 8th, 2021

Reduced network quality notifications 

Release ID: RoomOS 10.9.1.1 fb66b80147e

Sometimes you get reduced media quality in a meeting, but you don’t know if something is happening with your network, or the remote participant’s network. We’ve added notifications that give you feedback that there are problems with your network, and reduced media quality is expected in your current call. 

The notifications are different based on the direction of the loss. They tell you if the problems are on the sending side or the receiving side:

- Outgoing network issues: Others may be receiving poor audio and video from you.
- Network connection issues: You may experience reduced audio and video quality from other participants.

The notification shows up only once during the call. 

If the administrator has set UserInterface Diagnostics Notifications setting to Hidden, you won't see the notifications.

These notifications are available for cloud registered devices, and devices linked with Webex Edge for Devices.

### October 11th, 2021

Breakout Sessions in Webex Meetings 

Release ID: RoomOS 10.8.1.7 e60514b8abc

Hosts or cohosts can split a large meeting into groups where attendees can collaborate and share ideas. When it’s time to wrap up, everyone will be asked to return to the main session. You can now join breakout sessions from your device. Hosts and cohost can manage the breakouts from the Webex Meetings app.  
  
Breakout sessions are available for cloud registered devices, and with Webex Optimized Experience for Webex Edge for Devices.

For more information, read the [Breakout Sessions on Webex Devices](https://help.webex.com/fisojf/) article.

German Webex Assistant 

Release ID: RoomOS 10.8.1.7 e60514b8abc

 German speaking users can now communicate with the Webex Assistant in German. The Webex Assistant language follows the language setting on the device. So if you have selected German as the language for the device, the Webex Assistant listens for German. 

For more information, read the [Get Started with Webex Assistant for Devices](https://help.webex.com/jpir3w/) article.

### September 9th, 2021

Gesture Recognition for Thumbs Up and Down 

Release ID: RoomOS 10.7.1.2 05b751884cf

You can use gestures to interact with your Desk Pro. From before, you can raise your hand using gestures. Now you can also send thumbs up and down reaction using gestures. Clap will be supported later.

For more information, read the [Gesture Recognition](https://help.webex.com/nck1fap/) article.

Add Your Own Web Apps 

Release ID: RoomOS 10.7.1.2 05b751884cf

It's now possible to add and delete web apps directly from the settings menu of Webex Boards and Desk Pros. You’ll also be informed of the external managed web apps, added by the IT admin from the Control Hub, but won’t be able to edit those.

Direct share is available for cloud registered devices, and for Webex Edge for Devices linked devices with cloud managed software upgrade enabled.

For more information, read the [Enable Web App Management](https://help.webex.com/7ypsyc/) and [Manage Web Apps](https://help.webex.com/n041liz/) articles.

Direct Share from Webex 

Release ID: RoomOS 10.7.1.2 05b751884cf

To improve the quality of content sharing, the Webex App prefers to share content directly to the Webex Device through the local network. In setups where direct share isn’t available, the app routes content share media through the cloud.

Direct share is available for cloud registered devices, and with Webex Optimized Experience for Webex Edge for Devices. This change also enables wireless content sharing for CVI calls for cloud registered devices.

 Cloud Pairing for Webex Edge for Devices 

Release ID: RoomOS 10.7.1.2 05b751884cf

Webex Edge for Devices now allows on-premises devices to use all Webex cloud pairing options for better usability and security. Discover and connect to nearby Webex Rooms by audio (ultrasound), Wi-Fi discovery, or manually by searching for the room name. Visitors can also share content directly from a browser through devices.webex.com, connecting with a guest code—no app required. 

This feature is available only when Webex Optimized Experience is enabled.

Network Test from the User Interface of the Device 

Release ID: RoomOS 10.7.1.2 05b751884cf

Network test is a simple ping test to check if a video conferencing device is connected to the network. The network test is available both pre-onboarding and post-onboarding.

For more information, read the [Network Test](https://help.webex.com/luzmeeb/) article.

Room Navigator Support for 802.1x 

Release ID: RoomOS 10.7.1.2 05b751884cf

This security feature will now be supported on the Room Navigator. Support for 802.1x enables a secure connection for customers to authenticate devices on their network. Companies that are security aware now have a way to authenticate their devices in the network.

For more information, read the [Configure 802.1x Authentication](https://help.webex.com/q6pgjeb/) article.

### August 9th, 2021

Rebranded User Interface 

Release ID: RoomOS 10.6.1.1 20a28080ecd

Cisco Webex has been rebranded, new icons, new colors! The rebranded user interface is available on Webex Boards, Desk Pro, and Room Series.

We release two themes, “Light” and “Night” which can be selected from Control Hub. The "Light" theme is the default option.

USB Microphone Support for Desk and Room Devices 

Release ID: RoomOS 10.6.1.1 20a28080ecd

You can use a USB microphone, or a USB audio interface with your Desk Pro, Room Kit, Room Kit Mini, and Room 55 device. In general, we recommend using the Cisco Webex Table Microphone or Cisco Ceiling Microphone as external microphones. However, some scenarios require, or take advantage from using external USB microphones or USB audio interfaces:

For more information, read the [USB Microphone Support](https://help.webex.com/o30ewh/) article.

End-to-End Media Encryption 

Release ID: RoomOS 10.6.1.1 20a28080ecd

Cisco is known by its work put on enterprise security. We always design features with security in mind.

The E2EE project targets to enable customer to be able to hold encrypted meetings providing them and only them control over the encryption keys to make sure no one has access to their meetings.  
  
For more information, read the [End-to-End Encryption](https://help.webex.com/5h5d8ab/) article.

Notifications in Large Meetings 

Release ID: RoomOS 10.6.1.1 20a28080ecd

In large meetings, notifications of people joining and leaving can become disturbing. To make your meeting experience more delightful, we stop notifying by default in large meetings. The new default will show notifications in meetings until it reaches 25 participants. From then on to the end of the meeting, notifications are suppressed.

Administrators can configure to show join/leave notifications with `xConfiguration Conference JoinLeaveNotifications`.

Guest Share Available in Calls 

Release ID: RoomOS 10.6.1.1 20a28080ecd

Forget cables, adapters or installing clients. The WebRTC client share.webex.com allows easy content sharing directly from your browser. With this update, guest sharing is also available when the Webex Room device is in a Webex Meeting.

Available for cloud-registered shared devices, and with [Webex Optimized Experience](https://help.webex.com/c31fqg/) for Webex Edge for Devices

For more information, read the [Wireless Guest Share](https://help.webex.com/nrp8zym/) article.

### July 1st, 2021

Cisco Proximity for Cloud-Registered Devices 

Release ID: RoomOS 10.5.1.1 e8cbc758d40

The Webex app works with both on-premises and cloud-registered devices, enabling wireless sharing, device control, and easy meeting join. Now also Cisco Proximity can connect to both on-premises and cloud-registered devices. We recommend deploying Webex app where possible. Where it's not possible, Cisco Proximity provides a lightweight and device-centric alternative without infrastructure dependencies.

For more information, read the [Cisco Proximity 4.0: Cloud Pairing](https://help.webex.com/n1v31g9/) article and <https://proximity.cisco.com/>.

Webex Assistant for Devices Available in French and Spanish 

Release ID: RoomOS 10.5.1.1 e8cbc758d40

Webex Assistant for Devices is now available in French and Spanish in addition to English. With Webex Assistant for Devices, you can use your Cisco Webex Boards, Desk Pro, and Room Series devices hands free.

For more information, read the [Get Started with Webex Assistant for Devices](https://help.webex.com/jpir3w/) article.

Add Custom Notifications on Webex Boards 

Release ID: RoomOS 10.5.1.1 e8cbc758d40

You can now add a short text string to the bottom left corner of the screen on Webex Boards. This can be, for example, instructions on customized calling or information about a local support contact.

For more information, read the [Add a Custom Notification](https://help.webex.com/nv1d9mw/) article.

### June 1st, 2021

Open an Existing Space on Personal Mode Webex Boards and Desk Pro 

Release ID: RoomOS 10.4.1.1 85ff0a04877

Personal Mode users can now open a Webex space from their app and access their content. This allows, for example, saving whiteboards in your personal space.

For more information, read the [Open a Space on a Device](https://help.webex.com/w6zzsl/) article.

Gesture Recognition for Raise Hand 

Release ID: RoomOS 10.4.1.1 85ff0a04877

You can now use gestures to interact with your Desk Pro. By raising your hand physically in front of the device, the raised hand indicator shows up in the meeting for you. When the camera has detected your hand, you see a confirmation circle screen. Keep your hand raised until the circle completes in order to raise hand. If you lower your hand before the circle completes, the action is canceled.  
  
For more information, read the [Gesture Recognition](https://help.webex.com/nck1fap/) article.

Shape Recognition 

Release ID: RoomOS 10.4.1.1 85ff0a04877

Shape recognition can now understand arrows and curves so that whiteboarding sessions are more beautiful, frictionless, and easier to understand. If the shape recognition isn’t toggled on before drawing the shape, long pressing the shape recognizes it.

Read more about using the whiteboard on [Webex Boards](https://help.webex.com/zfhy55/Use-the-Whiteboard-on-Cisco-Webex-Boards) and [Desk Devices](https://help.webex.com/tzyi4v/).

Reactions in Meetings 

Release ID: RoomOS 10.4.1.1 85ff0a04877

Reactions gives you an easy way to show engagement in a meeting without taking the focus away from the presentation. For presenters, reactions provides live feedback from the audience, making presenting feel interactive​. You can send reactions from the React button in the call controls, where you also find option to raise hand. A collective stream of reactions show in the upper right corner of the device​

For more information, read the [Reactions in Meetings](https://help.webex.com/w8l8wf/) article.

Outside Room Booking with Room Navigator 

Release ID: RoomOS 10.4.1.1 85ff0a04877

Room booking with the Cisco Webex Room Navigator is now also available outside the room. The wall mount features a colored light strip which allows users to clearly see room availability from far away. Users can also book the room spontaneously and see the room’s calendar for the day.

For more information, read the [Outside a Room Booking](https://help.webex.com/me7z9t/) and [Set Up Room Navigator as a Room Booking Device](https://help.webex.com/55ypt4/) articles.

### May 19th, 2021

Host Control to Turn Off Video 

Release ID: RoomOS 10.4.1.1 85ff0a04877 and RoomOS 9.15.4.12 67a93d56abf

Webex meeting’s hosts can turn off participants video on demand. This can help in situations where the remote end is disturbing the meeting without their knowledge, or the remote end is not capable of turning their video off themselves.  
  
For more information, read the [Turn Off Your Video](https://help.webex.com/en-us/njk6e0i/) article.

### April 15th, 2021

New Layout Menu 

Release ID: RoomOS 10.3.1.2 a911d5664c8 and RoomOS 9.15.3.13 e8923dc6f18

Now you can see the same layout names and icons whether you're using a Webex device or a Webex app. This change was introduced in February for the Webex Board, and is now available on all room and desk devices.  
  
For more information, read the [Change the Screen Layout in a Call](https://help.webex.com/npsukcq/) article.

Keyboard Languages 

Release ID: RoomOS 10.3.1.2 a911d5664c8 and RoomOS 9.15.3.13 e8923dc6f18

The keyboard on Touch 10, Room Navigator, and integrated touch interfaces support more languages. The keyboard language follows the language settings for the user interface. The user interface language can be selected from the Settings menu of the device.

For more information, read the [Change Language on a Room or Desk Device](https://help.webex.com/n7uxhr1/) article.

Immersive Share from Desk Pro 

Release ID: RoomOS 10.3.1.2 a911d5664c8

With Immersive Share, you can hold engaging presentations by placing yourself on top of any content on your computer. The presentation and video is sent in the content stream, so you stay in focus until you stop sharing. Immersive Share is available on Desk Pro from the virtual backgrounds menu.  
  
For more information, read the [Immersive Share](https://help.webex.com/nmhu88ab/) article.

5x5 Grid Layouts 

Release ID: RoomOS 10.3.1.2 a911d5664c8

Larger grid layouts let you see more of your colleagues and work contacts face to face. 5x5 grids became available for all transcoded meetings in January. Now you can get up to 5x5 layout when you switch on the Grid layout on Room Series, Board Series, and Desk Pro.   
  
For more information, read the [Video Stream Layouts](https://help.webex.com/zp1dhab/) article.

Layouts for Dual-Screen Devices 

Release ID: RoomOS 10.3.1.2 a911d5664c8 and RoomOS 9.15.3.13 e8923dc6f18

We've improved the available video layouts for dual-screen devices. Prominent shows a large active speaker on one monitor, and a 5x5 grid on the second screen. Grid layout shows all participants in equal size, with maximum 3x4 and 3x4 participants. This change is currently only for switched meetings. There’s an upper limit of 25 visible video streams.

For more information, read the [Video Stream Layouts](https://help.webex.com/zp1dhab/) article.

Host Controls for Raised Hand 

Release ID: RoomOS 10.3.1.2 a911d5664c8 and RoomOS 9.15.3.13 e8923dc6f18

Sometimes we see that participants forget to lower their hand after they have asked their question. This makes it harder for the host to keep track of the raised hands. Now the host and cohost can lower a participant's hand and lower all hands.

For more information, read the [Host Controls for Raise Hand](https://help.webex.com/chj4pq/) article.

Camera Control on Room USB 

Release ID: RoomOS 10.3.1.2 a911d5664c8

Webex devices auto frame the person in front of the device, but sometimes you want to focus on an object or specific area of the room. Now you can manually control the camera on Room USB devices with a TRC6 remote control. You can use the remote control to pan, tilt, and zoom the camera.  
  
For more information Room USB, read the [Get Started](https://help.webex.com/sqagrv/) article.

### March 15th 2021

Webex Edge for Devices: Change in Minimum Software Version Requirement 

Webex Edge for Devices requires up to date software to maintain Webex connectivity. Starting in March 2021, Cisco Webex is moving to a new Certificate Authority, IdenTrust Commercial Root CA 1\. Due to this change, customers who are managing their device software upgrades manually must upgrade their devices to minimum CE 9.14.5 and preferably CE 9.15 at the earliest in order to be supported by Webex Edge for Devices.

For more information, read the [Software Upgrade Requirement for Webex Edge for Devices](https://help.webex.com/nuzid1e/). For more on Webex Edge for Devices, see [Webex Edge for Devices](https://help.webex.com/cy2l2z/).

In-Room Booking 

Release ID: RoomOS 10.2.1.3 886f017f09c and RoomOS 9.15.2.12 c379560982f

With in-room booking, you can extend your booking or book a room for a spontaneous meeting. If the room is available, you can use a touch controller, Touch 10 or Room Navigator, to book the room. If Webex Assistant is enabled, you can book the room with voice commands.

Read the articles on in-room booking for [Touch 10 and Room Navigator](https://help.webex.com/i3yudu/) and for [Webex Assistant](https://help.webex.com/nwpux3/) for more information. On how to enable in-room booking, see [Enable In-Room Booking For Shared Mode Webex Rooms](https://help.webex.com/nzp31jb/)

Noise Removal for DX70 and DX80 

Release ID: RoomOS 9.15.2.12 c379560982f

Noise removal is available for the DX70 and DX80 to make meetings from home or other environments with annoying background noises such as keyboard clicks, traffic, and the neighbor’s renovation. With BabbleLabs’ advanced AI, we distinguish and filter out the noise from the voice, to elevate communication.  
  
Read the [Noise Removal on Webex Rooms](https://help.webex.com/ncbljxfb/) article for more information.

New Host and Cohost Capabilities 

Release ID: RoomOS 10.2.1.3 886f017f09c and RoomOS 9.15.2.12 c379560982f

Host and cohost can accept everyone waiting in the lobby by tapping one button.

Read the [Admit All Particpants to Meetings](https://help.webex.com/qg2eah/) article for more information.

### February 15th 2021

Shape Recognition in Whiteboards 

Release ID: RoomOS 10.1.1.2 bd0d2b72f94 and RoomOS 9.15.1.11 9c47f567d66

Tidy up your drawings on the Webex Board and desk devices. Your freehand squiggles can now be turned into perfect common shapes automatically, with shape recognition on the Webex Board and desk devices.  
  
Read more about using the whiteboard on [Webex Boards](https://help.webex.com/zfhy55/Use-the-Whiteboard-on-Cisco-Webex-Boards) and [desk devices](https://help.webex.com/tzyi4v/).

Webex Optimized Experience for Webex Edge for Devices 

Release ID: RoomOS 10.1.1.2 bd0d2b72f94 and RoomOS 9.15.1.11 9c47f567d66

Devices linked with Webex Edge for Devices get the full optimized Webex Meetings experience when connecting to Webex meetings. The devices continue to use SIP for internal dialing and when connecting to external services. 

Read the [Webex Optimized Experience for Webex Edge for Devices](https://help.webex.com/c31fqg/) article for more information

Layout Selection on Webex Board 

Release ID: RoomOS 10.1.1.2 bd0d2b72f94

New to the Webex Board – Get the same experience as our other Webex room devices and choose the layout that makes sense for your meeting – including Grid View, Active speaker and more.  
  
Read the [Video Stream Layouts](https://help.webex.com/zp1dhab/) article for more information.

Request Mute/Unmute 

Release ID: RoomOS 10.1.1.2 bd0d2b72f94 and RoomOS 9.15.1.11 9c47f567d66

Streamline meeting house-keeping items. The meeting host can send a request to a muted participant to unmute without having to say it in front of everyone in the meeting.

Read the [Mute All Participants During Meetings](https://help.webex.com/ijxk6bb/) article for more information.

Change In-Meeting Roles from Your Device 

Release ID: RoomOS 10.1.1.2 bd0d2b72f94 and RoomOS 9.15.1.11 9c47f567d66

Late for your next meeting, but the team is still deep in discussion? Now you can change in-meeting roles from your Webex device. This feature allows you to make someone else the host of your meeting directly from a Webex room device. This way you can leave the meeting without ending it for everyone, as someone else takes over your role as the host.

Read the [Change Roles During a Meeting on Webex Room and Desk Devices](https://help.webex.com/nkv30u5/) article for more information.

Closed Captions in Meetings 

Release ID: RoomOS 10.1.1.2 bd0d2b72f94

Toggle on closed captions in Webex meetings and never miss a word that's being said. Closed captions are available when Webex Assistant for Meetings is added to the meeting.

Read the [Closed Captioning on Webex Rooms](https://help.webex.com/5geecr/) article for more information.

WebApps in Calls 

Release ID: RoomOS 10.1.1.2 bd0d2b72f94

The WebApps you've been using in local meetings are now available in calls. You can have your remote teams on a call working on a kanban board directly, moving around tasks, and editing text from a Webex Board or a Desk Pro. After the meeting it’s finished, there’s no need to take a picture, and go to your laptop to redo all the work.

Read the [Share a Web App on Webex Boards and Desk Pros](https://help.webex.com/u42fvr/) article for more information.

Improved Share on Desk Pro 

Release ID: RoomOS 10.1.1.2 bd0d2b72f94

When you're using a Desk Pro as a computer monitor, it's now easier to control what you see. When you're in a call, tap the Desk Pro screen to see a picture-in-picture preview of your computer screen. Maximize to see your computer full screen, or tap Share in call to share.

### January 18th 2021

Change in Software Versions 

From January 2021 RoomOS 9.15 and later only supports DX, MX, and SX Series products. Board, Desk, and Room Series products are using RoomOS 10.0 and later only. This change is automatic with the January 2021 software update. For more information on new software releases, check the following articles:

[RoomOS 10 Known and Resolved Issues](https://help.webex.com/ndws09o/) 

[RoomOS 9 Known and Resolved Issues](https://help.webex.com/llygcp/) 

Cloud-Managed Software Upgrades for Webex Edge for Devices 

With cloud-managed software upgrades, your Webex Edge for Devices linked devices get automatically upgraded when a new RoomOS software version is available. Read the [Cloud-Managed Software Upgrade for Webex Edge for Devices](https://help.webex.com/naspqfz/) article for more information.

Raise Hand in Meetings 

Release ID: RoomOS 10.0.1.2 e54a985715f and RoomOS 9.15.0.8 b47fa2eaf80

Use the Raise Hand button in a meeting to let others know you want to ask a question or to comment on the discussion. Read the [Raise Hand in a Meeting on Webex Rooms](https://help.webex.com/nasc6bd/) article for more information.

Far-End Camera Control 

Release ID: RoomOS 10.0.1.2 e54a985715f and RoomOS 9.15.0.8 b47fa2eaf80

You can control far-end cameras when you're in a meeting where one or more of the other devices have a remotely controllable camera. Read the [Far-End Camera Control from Webex Rooms Devices](https://help.webex.com/reyt5ab/) article for more information.

Transcoded Layouts for DX, MX, and SX Series Devices 

Release ID: RoomOS 9.15.0.8 b47fa2eaf80

Cloud-registered DX, MX and SX Series devices calling in to Webex meetings now receive the transcoded meeting experience and layouts, including 5x5 Grid view.

Read the [Video Stream Layouts](https://help.webex.com/zp1dhab/) article for more information.

[2020](#id%5F129892)

### Improved User Interface for Wi-Fi Setup

Release ID: RoomOS 2020-11-27 d43c34aee86

On all devices that support a Wi-Fi connection, the Wi-Fi setup interface has been improved to simplify configuration. You can now access the Wi-Fi settings and see detailed information about network status, even when you're in a call.

Read more about configuring the Wi-Fi setup and viewing network status, [here](https://help.webex.com/en-us/n0xw6dp).

### Show Active Speaker Indicator

Release ID: RoomOS 2020-11-27 d43c34aee86

A blue outline now appears around the active speaker's video frame or site label, making it easier to identify who is actually speaking during a meeting. This is particularly helpful in larger grid views and in meetings with participants who have joined as audio-only.

### Broadcast Mode

Release ID: RoomOS 2020-11-27 d43c34aee86

You can configure a device to output a clean video stream. In this mode the indicators, notifications, and controls are removed. There will be a separate configuration to remove name labels later. This mode is aimed at broadcasting and recording services where you only want to pass on the video to your viewers.

### Upload custom icons for UI extensions

Release ID: RoomOS 2020-11-27 d43c34aee86 

You can now upload custom icons for Panels or Action Buttons from the User Interface Extension Editor in the web portal.

### Web Portal User Interface Changes

Release ID: RoomOS 2020-11-11 40a133064c6

The web portal has been updated to align with the visual style of Control Hub. A vertical menu with tabs has been introduced and there is a search box to help you find the moved settings. Visual improvements have been made to the Macros Editor, the UI Extensions Editor, and the Audio Console.

### Add Your Title to Your Name Label

Release ID: RoomOS 2020-11-11 40a133064c6

You can now add your title below your name label when you sign up for face recognition. You can also add your title if you have already signed up. Read here [how to sign up and add your name label and title](https://help.webex.com/n3ubk5cb/).

### Floating Content Controls on Webex Boards and Desk Devices

Release ID: RoomOS 2020-11-11 40a133064c6

A new floating toolbar is available, giving you a quick access to sharing options, annotations, and touch redirect.

### Black Canvas

Release ID: RoomOS 2020-11-11 40a133064c6

You can change between black and white canvas when you’re using the whiteboard. Read [this article](https://help.webex.com/en-us/n2xyxfc/) for more information.

### 4x4 Participants Shown in Grid View Layout

Release ID: RoomOS 2020-11-11 40a133064c6

The Grid View layout now shows up to 4x4 meeting participants. Grid View is the default layout that appears when a user joins a Webex meeting from a Cloud-registered Room or Desk series device.

A 4x4 Grid View requires a minimum call rate of 2Mbit.

### Additional Host and Co-Host Functionality on Paired Devices

Release ID: RoomOS 2020-11-11 40a133064c6

When you’re hosting or co-hosting a meeting and paired with a device from your Teams client or Webex 40.11, the device becomes a co-host too. This means the device will support some additional options it doesn’t otherwise have. For example, as a co-host you can mute some or all participants, lock and unlock the meeting, and end the meeting for everyone or just for yourself. Read more about co-hosting functionality, [here](https://help.webex.com/en-us/n1bqkbv/Add-Cohosts-for-Webex-Meetings).

### USB Forwarding

Release ID: Room OS 2020-10-26 d97b604b745

You can connect a USB mouse and/or keyboard to your Desk Pro, and use them for your laptop. Read more about it [here](https://help.webex.com/en-us/nvadeve/USB-Forwarding-Connect-a-Mouse-or-Keyboard-to-a-Desk-Pro).

### Noise Removal

Release ID: Room OS 2020-10-26 d97b604b745

Use the new noise removal capability to filter out distracting noises from your environment in meetings. For more information, see [Noise Removal for Webex Boards, Desk Pro, and Room Series](https://help.webex.com/ncbljxfb/).

### Whiteboard Overview on Webex Boards and Desk Devices

Release ID: RoomOS 2020-10-05 c1b06c8ee79

You can zoom out up to 10x to get a better overview of the entire whiteboard. 

### Mute All Participants During Meetings

Release ID: RoomOS 2020-10-05 c1b06c8ee79

As a host, you can mute all participants during a meeting on your Webex device. Read [here](https://help.webex.com/ijxk6bb/) for more information about this feature.

### Updates for Webex Edge for Devices

Release ID: RoomOS 2020-10-05 c1b06c8ee79

We've added the following features for devices linked with Webex Edge for Devices running CE9.14.2 and later:

- Support for logs management from Control Hub
- Support for Microsoft Teams meetings with video integration and WebRTC

To read more about Webex Edge for Devices, see the [Webex Edge for Devices](https://help.webex.com/cy2l2z/) article.

### Join Microsoft Teams Meetings with Cisco Webex Video Integration for Microsoft Teams

Release ID: RoomOS 2020-10-05 c1b06c8ee79

Webex devices and participants with devices in Personal mode invited to a Microsoft Teams meeting can join the meeting directly from their devices with One Button to Push (OBTP) or by dialing into the meeting. Read more about joining Microsoft Teams meetings [here](https://help.webex.com/en-us/k7slw9/Join-Microsoft-Teams-Meetings-with-Cisco-Webex-Video-Integration-for-Microsoft-Teams).

### Transfer Host and Leave a Meeting on Webex Devices

Release ID: RoomOS 2020-10-05 c1b06c8ee79

By [transferring the host](https://help.webex.com/en-us/nkv30u5/Transfer-Host-and-Leave-a-Meeting-on-Webex-Boards-Room-and-Desk-Devices), you can leave a meeting you are hosting and let the other participants continue without you.

### Personal Mode Devices Pairing

Release ID: RoomOS 2020-10-05 c1b06c8ee79

You can make call and share content wirelessly from the Webex Teams App to your Webex device in personal mode. Check [Share Content Wirelessly to Webex Devices](https://help.webex.com/en-us/pceb9t/Webex-Teams-Share-Content-Wirelessly-to-Cisco-Webex-Devices) and [Make a Call from Webex Devices with the Webex Teams App](https://help.webex.com/en-us/n38glho/Make-a-Call-from-Room-and-Desk-Devices-with-the-Webex-Teams-App) for more information.

### Music Mode

Release ID: RoomOS 2020-08-31 a4fd41aa839

You can now turn on Music mode in a call when it's important to hear the full range of live music. This can be used for remote music lessons, testing musical instruments, and other similar scenarios. Read more about Music mode in [this article](https://help.webex.com/n9tlimg/).

### Manual Camera Control for Desk Pro and Webex Boards

Release ID: RoomOS 2020-08-31 a4fd41aa839

In addition to the automatic Best Overview, you can now change the camera view on Desk Pro and Webex Boards manually. See [this article](https://help.webex.com/n0j1gtt/) to learn how to use manual camera control on these devices.

### Mute Other Participants During Meetings

Release ID: RoomOS 2020-08-31 a4fd41aa839

 As a host, you can mute anyone during a meeting directly from your Webex device. This feature is available on desk devices and devices with a touch controller. See this [article](https://help.webex.com/en-us/nh5ucbfb/Mute-Other-Participants-During-Meetings-on-Webex-Boards-and-Room-and-Desk-Devices) to learn how to do it. 

### Call Information for Recent Calls

Release ID: RoomOS 2020-08-31 a4fd41aa839

You can now easily find the call information for a recent call in the Call menu. Read [this article](https://help.webex.com/z2c0ys/) for more information.

### Configure the Cleanup Timer on Webex Boards and Desk devices

Release ID: RoomOS 2020-08-06 118dbf07142

 You can decide when the whiteboards and website data stored on your device are deleted. See [this article](https://help.webex.com/en-us/nfadkjp/Configure-the-Cleanup-Timer-on-Webex-Boards-and-Desk-devices) to learn how to configure the timer, and [this article](https://help.webex.com/en-us/nucmazj/End-your-Session-by-Deleting-all-Whiteboards-and-Browsing-Data-on-Webex-Boards-and-Desk-devices) to know how to end your session by deleting all whiteboards and browsing data. 

### Add Web Apps Directly from Control Hub

Release ID: RoomOS 2020-08-06 118dbf07142

You can set up web apps on Control Hub and launch them from your Webex Board or Desk Pro's home screen. Read [this article](https://help.webex.com/en-us/h47w6/Add-Web-Apps-on-Webex-Boards-and-Desk-Pros) for more information.

### Join a Microsoft Teams Meeting from Webex Boards, Room Devices, and Desk Pros with WebRTC

Release ID: RoomOS 2020-08-06 118dbf07142

Webex devices and participants with devices in Personal mode invited to a Microsoft Teams meeting can join the meeting directly from their devices with One Button to Push (OBTP). Read this [article](https://help.webex.com/en-us/342rgv/Join-a-Microsoft-Teams-meeting-from-Webex-Boards-Room-devices-and-Desk-Pros-with-WebRTC) to learn how to join the meeting and this [article](https://help.webex.com/en-us/nsx4cpe/Enable-WebRTC-to-join-a-Microsoft-Teams-meeting-from-Webex-Boards-Room-devices-and-Desk-Pros) to learn how to set up WebRTC.

### Search for Personal Rooms

Release ID: RoomOS 2020-06-25 44a3904313a

You can now search for Personal Room from your device. Tap Join Webex and search for Personal Room with a name or an email address.

### Lock Personal Meeting Rooms

Release ID: RoomOS 2020-06-25 44a3904313a

As a host, you can lock and unlock personal meeting rooms by selecting [the lock button](https://help.webex.com/en-us/n6k2l9y/Lock-your-Personal-Room-Meetings-on-Room-and-Desk-Devices). This feature is available on desk devices and devices with a touch controller. 

### Updated Call History on Devices in Personal Mode

Release ID: RoomOS 2020-06-25 44a3904313a

The call history on your device is now the same as your call history on Webex Teams. This is available for devices in personal mode.

### Whiteboarding on Desk Devices in Personal Mode

Release ID: RoomOS 2020-06-25 44a3904313a

You can now create and edit multiple whiteboards before saving them to a Webex Teams Space or sending them by email. Check the updated [whiteboarding article](https://help.webex.com/en-us/nju4kiy/Whiteboarding-on-Personal-Mode-Desk-Series-Devices) for desk devices in personal mode.

### New Features for Webex Edge for Devices

Release ID: RoomOS 2020-05-06 cf2befca38d

We've added the following features for devices linked with Webex Edge for Devices running CE9.13 and later:

- Support for Cisco Webex Control Hub configuration management
- Easy join Personal Rooms with user search
- Real-Time Media Metrics when joining Webex calls

To read more about Webex Edge for Devices, see the [Webex Edge for Devices](https://help.webex.com/cy2l2z/) article.

### Remote Monitoring Option Key Required for Taking Screenshots of Whiteboards and Digital Signage

Release ID: RoomOS 2020-05-06 cf2befca38d

To take screen-shots of the whiteboards and digital signage, you now need to add Remote Monitoring option key from the local web interface. Without the Remote monitoring option key, the screen-shots will be gray if whiteboarding or when digital signage is on-screen.

With the Remote Monitoring option key installed, you can take screen-shots of:

- Touch user interface
- On-screen menus, buttons, and notifications
- Whiteboards
- Digital signage

Without the Remote Monitoring option key installed, you can take screen-shots of:

- Touch user interface
- On-screen menus, buttons, and notifications

### Default Mode for HTTP Clients is Changed to HTTPS

Release ID: RoomOS 2020-05-06 cf2befca38d

The default mode for HTTP clients has changed from “HTTP+HTTPS” to “HTTPS”. This means that the experience when launching the web portal of a device may change. Devices are shipped with a certificate that is signed by a trusted CA that is not trusted by browsers. Install a trusted certificate on the device to secure the communication between your computer and the device.

To read more about adding certificates, see the [Add Certificates](https://help.webex.com/n959q76/) article.

### Activity Indicators on your Devices

Release ID: RoomOS 2020-04-06 dbcdd81ba03

You can see the avatar of the participant or the initials of the device using the whiteboard, so you can follow who is drawing or annotating. Read [this article](https://help.webex.com/en-us/nf9shum/Enable-Activity-Indicators-on-Webex-Boards-Desk-Devices-and-Room-Devices) for more information.

### Webex Room USB is Now Available

Release ID: RoomOS 2020-04-06 dbcdd81ba03

We have added support for Webex Room USB. Webex Room USB is a smart video conferencing solution for huddle spaces, and is compatible with any collaboration vendor. Read the [Webex Room USB](https://help.webex.com/en-us/gioflbb/Cisco-Webex-Room-USB) article for more information.

### Webex on Flip is Now Available

Release ID: RoomOS 2020-03-20 8a845789ad6

We have added support for Webex on Flip. Webex on Flip combines the video conferencing capabilities of a Cisco Webex Room Kit Mini with the cocreation capabilities of a Samsung Flip digital whiteboard. Read [Webex on Flip](https://help.webex.com/udxwlab/) article for more information.

### Join Your Personal Room Meetings from a Personal Device

Release ID: RoomOS 2020-02-24 4fe8516fb6e

You can now join your Personal Room meetings from your personal mode device in just a couple of steps. Read [Start a Personal Room Meeting from a Personal Mode Device](https://help.webex.com/nldsho8/) for more information.

### WebGL is Supported on Webex Boards and Room Devices

Release ID: RoomOS 2020-02-24 4fe8516fb6e

WebGL is an experimental feature and might change in the future. WebGL is disabled by default but can be enabled on the web interface of the device. Read [Best Practices For Using the Web Engine](https://help.webex.com/en-us/pdybr5/Best-Practices-For-Using-the-Web-Engine) for more information.

### Hide Meetings Details on Your Devices

Release ID: RoomOS 2020-02-24 4fe8516fb6e

You can hide scheduled meeting titles on Webex Boards, and Room and Desk devices. Follow the configuration described in [Hide Meetings Details on Webex Boards, and Room and Desk Devices](https://help.webex.com/en-us/nc0wizm/Hide-Meetings-Details-on-Webex-Boards-and-Room-and-Desk-Devices) to set it up.

### Wireless Guest Share

Release ID: RoomOS 2020-01-31 85237a267b4

With wireless Guest Share from [devices.webex.com](https://devices.webex.com) you don't need to use cables or download a Webex app to share locally.

To read more about Guest Share, see the [Wireless Guest Share](https://help.webex.com/nrp8zym/) article.

### Share Wirelessly in a Call to a Personal Mode Devices

Release ID: RoomOS 2020-01-31 85237a267b4

You can now share wirelessly in a call from your Cisco Webex Teams app to your personal mode device.

To read more about wireless share, see the [Wireless Share to Personal Mode Devices](https://help.webex.com/8w0u5db/) article.

### Manage RoomOS Software on Control Hub

Release ID: RoomOS 2019-12-16 285a7f8edd1

On the Manage RoomOS Software page on Control Hub, you can find information about the current and the next software release. You can also read about the release cycles and find links to the release notes. From the customer view on [admin.webex.com](http://admin.webex.com), go to Devices \> Software.

### Webex Edge for Devices

Release ID: RoomOS 2019-12-16 285a7f8edd1

You can use Webex Edge for Devices to link your on-premises devices to the Cisco Webex cloud service. This gives you access to select cloud features, while your registration, device management, calling, and media services remain on-premises. You can manage cloud services and get device diagnostics from them in Webex Control Hub.

To read more about Webex Edge for Devices, see the [Webex Edge for Devices](https://help.webex.com/cy2l2z/) article.

[2019](#id%5F104828)

### Annotate Everywhere

Release ID: RoomOS 2019-12-16 285a7f8edd1

You can now annotate on web pages and files you share on a Webex Board. This works similarly to annotating on presentations. You can save the annotations for later reference to a Webex Teams space or send them by email.

Read more about annotation in [Annotate on Cisco Webex Boards](https://help.webex.com/en-us/nivf3bo/Annotate-on-Cisco-Webex-Boards) and [Annotate on Screen Share From Cisco Webex DX70 and DX80 in a Call](https://help.webex.com/nxgiyu/).

### Save Your Work on DX70 and DX80

Release ID: RoomOS 2019-12-16 285a7f8edd1

You can save your whiteboards and annotations to a Webex Teams space or by email just as you have previously done on Webex Boards. Save your work is available for shared DX70 and DX80.

Read more about saving your work in [Save a Whiteboard from Desk Devices to Cisco Webex Teams](https://help.webex.com/ne4vpgp/) and [Send a Whiteboard from Desk Devices by Email](https://help.webex.com/h9b72d/) articles.

### New Whiteboarding Workflow

Release ID: RoomOS 2019-12-16 285a7f8edd1

We’ve updated the icons in the whiteboard menu to make working on your content easier. Saving options are more visible and you have the option to save your work to an existing space.

### Companion Mode

Release ID: RoomOS 2019-11-04 464775546f8

With companion mode, you can set up one Room Series device and one Webex Board to work as a combined system. Use the room device to make calls and the board for whiteboarding. Shared content is shown on both devices, and the whiteboards are shared to the room device automatically in calls.

Read more about [Companion Mode](https://help.webex.com/en-us/fd1jm/).

Learn how to [Set Up Companion Mode](https://help.webex.com/en-us/ogrc5/).

### Touch Redirect

Release ID: RoomOS 2019-11-04 464775546f8

Touch redirect enables you to control your laptop from a Webex Board screen when the laptop is connected with an HDMI and a USB cable. Touch redirect is available for laptops running Windows 10\. It also works with other operating systems if the operating system supports touch commands.

Touch redirect only works outside a call.

Touch redirect is supported on Webex Board 55S, Webex Board 70S, and Webex Board 80S.

Read [Wired Touch Redirect from Webex Boards](https://help.webex.com/nxqcrbz/) for more information.

### Add Participants to an Ongoing Call or Meeting

Release ID: RoomOS 2019-11-04 464775546f8

You can add other devices or Webex Teams users to an ongoing call or a meeting. Read [Add a Participant to an Ongoing Call or Meeting From Your Room or Desk Device](https://help.webex.com/en-us/n9fvlr0/Add-a-Participant-to-an-Ongoing-Call-or-Meeting-From-Your-Room-or-Desk-Device) for more information.

### Updated Layout on Webex Boards

Release ID: RoomOS 2019-10-19 97e3752c67a

Webex Boards are updating layouts to improve the call experience. The active speaker and the PiPs will now have separate places on the screen. The PiPs will no longer overlay the active speaker area. This allows the active speaker to always be in full view and improves the visual hierarchy of the screen.

### Name Labels

Release ID: RoomOS 2019-09-26 14326fc8c9f

Name labels help people in your organization to get to know each other better. By adding face recognition and name labels to meetings, people get a chance to associate names with faces. Face recognition is used to create name labels for all participants that have signed up in the beginning of the meeting. And after that the name label is visible for the active speaker.

When you are in a call or a meeting on a Room Series device or a Webex Board that is Webex registered, your name label is visible for the receiving end. You can see the name labels of those who have signed up if you are calling from a DX, SX, MX, or Room Series device or a Webex Board that is Webex registered.

Check out how to sign up for face recognition in [the Sign Up for Face Recognition and Name Labels article](https://help.webex.com/n3ubk5cb/).

Read about how to enable name labels for your organization in [the Enable Face Recognition and Name Labels article](https://help.webex.com/mc602k/).

### Redo Option for Whiteboarding

Release ID: RoomOS 2019-09-12 ee4956daae7

A Redo button is now available on Webex Boards and Desk devices to bring back what you just removed from your whiteboard. The redo button appears after tapping the undo button. For more information, read [Use the Whiteboard on Cisco Webex Board](https://help.webex.com/en-us/zfhy55/Use-the-Whiteboard-on-Cisco-Webex-Board) and [Use the Whiteboard on Cisco DX70 and DX80](https://help.webex.com/en-us/nju4kiy/Use-the-Whiteboard-on-Cisco-Webex-DX70-and-DX80).

### Opening Files Stored in OneDrive or SharePoint Online from Files Activity

Release ID: RoomOS 2019-09-12 ee4956daae7

Microsoft OneDrive or SharePoint Online files that you have shared in a Webex Teams space can be viewed on Webex Boards. Open the Webex Teams space on a board, access the documents from the Files Activity, and keep working on them from your Webex Board. The Web Engine has to be enabled in order for this feature to be available. Read [Enable the Web Engine on Webex Boards](https://help.webex.com/en-us/nvt0sa9/Enable-the-Web-Engine-on-Webex-Boards) to learn how to set it up. Once configured, take a look at [this article](https://help.webex.com/en-us/ngybf7w/Use-Cisco-Webex-Board-with-Existing-Spaces#reference%5Finm%5Fmwl%5Fj1b) to learn more about opening Onedrive or Sharepoint Online files on Webex Boards.

### Two-Way Whiteboarding

Release ID: RoomOS 2019-09-12 ee4956daae7

You can collaborate on one whiteboard from different Webex Boards in Webex Meetings meetings.

### Advanced Configurations Available on Control Hub

Release ID: RoomOS 2019-09-12 ee4956daae7

You can now access advanced configurations for individual room and desk devices and Webex Boards directly from Control Hub. Read more about how to use them in [the Advanced Configurations article](https://help.webex.com/n5pqqcm/).

### Stickies on Webex Boards

Release ID: RoomOS 2019-08-28 7980d1cd53c

You can create, edit, and move stickies on your whiteboards and annotations on Webex Boards.

To find out more about stickies on Webex Boards, take a look at [this article](https://help.webex.com/i17e1cb/).

### Open Web Apps from Webex Boards

Release ID: RoomOS 2019-08-28 7980d1cd53c

You can now create macros to open web apps on Webex Boards. This way you can access apps such as Jira, Miro, Office 365, and Google docs directly from your board. To read more about how to use macros, take a look at the [Use of Macros](https://help.webex.com/np8b6m6/) article.

If you are using a Webex Board with a Touch 10 controller, the web apps show up only on the Touch 10.

### Changes to the Network Settings Menu

Release ID: RoomOS 2019-08-16 3dac3cfa60c

The network settings and information are now available in the same menu on the device’s user interface. The settings that are available have not been changed.

### New Pen Sizes for Whiteboarding and Annotating

Release ID: RoomOS 2019-07-02 a37dc2ce640

You can now choose between three different pen sizes when whiteboarding and annotating on Webex Boards and Desk devices.

### Join Webex Meetings From Your Device

Release ID: RoomOS 2019-07-02 a37dc2ce640

It is now possible to join Webex Meetings directly from your device. Read [Join Webex Meetings from Your Cisco Webex Board, Room, or Desk Device](https://help.webex.com/en-us/nuyj0ck/Join-Webex-Meetings-from-Your-Cisco-Webex-Board-Room-or-Desk-Device) for more information.

### Create a Copy of Whiteboards and Annotations

Release ID: RoomOS 2019-06-19 002b5fa2be2

On Cisco Webex Boards you can now create copies of whiteboards and annotations. The whiteboard or annotated snapshot of a presentation is stored in the Whiteboard menu. You can go back to it and continue work on the copy as you would on any other whiteboard or snapshot.

### Digital Signage on Cisco Webex Boards and Room Series Devices

Release ID: RoomOS 2019-06-19 002b5fa2be2

Digital signage allows you to display custom content, such as signage apps, internal communications, or company news. The feature is available on Cisco Webex Boards and Room Series devices.

Simply configure the URL through Cisco Webex Control Hub and Digital signage enables your device to show any web page when it is on half-wake state.

Read this article to learn how to set up [Digital signage from Cisco Webex Control Hub or from the Web Interface of the Device](https://help.webex.com/en-us/nmd8log/Enable-Digital-Signage-on-Cisco-Webex-Boards-and-Room-Devices).

### Send Your Whiteboards and Annotations by Email on Cisco Webex Boards

Release ID: RoomOS 2019-06-19 002b5fa2be2

You can send your whiteboards and annotations by email whether you are in a Webex Teams space or not. Sending your work by email is a great way to share your whiteboards and annotations with people inside or outside your organization. The option to send your work by email has to be configured through the web interface in order to be available. Follow the steps in [Configure SMTP settings](https://help.webex.com/en-us/nkgc99h/Configure-the-SMTP-Settings-of-a-Cisco-Webex-Board) in order to set up the feature. Once configured, read [Use the Whiteboard](https://help.webex.com/en-us/zfhy55/Use-the-Whiteboard-on-Cisco-Webex-Board) and [Annotate on Shared Presentations](https://help.webex.com/en-us/nivf3bo/Annotate-on-Shared-Presentations-on-a-Cisco-Webex-Board) articles to find out how to send your whiteboards or annotations by email. 

### Turn Off Your Video During a Meeting or a Call 

Release ID: RoomOS 2019-06-19 002b5fa2be2

After joining a meeting or call on your board, room or desk device, you can turn off your video if you don't want to show it. For more information, read [Turn Off Your Video](https://help.webex.com/en-us/njk6e0i/Turn-Off-Your-Video-During-a-Meeting-or-Call-On-Cisco-Webex-Board-Room-or-Desk-Device) article.

### USB Headset Support for Room Kit, Room Kit Mini, and Room 55

Release ID: RoomOS 2019-06-19 002b5fa2be2

You can connect a USB Headset, Handset, or USB Bluetooth dongle to the USB-A input on the devices. This is similar to the DX Series.

### Annotations Are Stored Into the Whiteboard Menu 

Release ID: RoomOS 2019-06-19 002b5fa2be2

The annotated presentations are now stored into the Whiteboard menu of the Cisco Webex Board when you’re done working on them. A snapshot of the annotated image is saved in the Whiteboard menu of the Webex Teams space as a .pdf. See [Annotate on Presentations](https://help.webex.com/en-us/nivf3bo/Annotate-on-Shared-Presentations-on-a-Cisco-Webex-Board) for more information.

### Improved USB-C Experience for Room Kit Mini

Release ID: RoomOS 2019-06-19 002b5fa2be2

The Room Kit Mini is in USB camera mode only when it is streaming media to a computer over the USB-C port. In previous releases, it was sufficient that a computer was connected to the USB-C port.

### Register a Device to Cisco Webex Using API or Local Web Interface

Release ID: RoomOS 2019-06-19 002b5fa2be2

You can register a device to Cisco Webex remotely, so you don’t have to be in the same room as the device. You can do this programmatically from the API or use the local web interface. In earlier releases, you had to use the onscreen setup assistant.

To read more, see the [Register a Device to Cisco Webex Using API or Local Web Interface](https://help.webex.com/en-us/n25jyr8/Register-a-Device-to-Cisco-Webex-Using-API-or-Local-Web-Interface) article.

### Updates for Webex Boards

Release ID: RoomOS 2019-06-19 002b5fa2be2

- Support for Touch 10 controller

  - Calling
  - Edit and add favorites
  - Flashing screen for in-coming calls
- Macros and in-room controls
- Branding
- Remove buttons from user interface

### Extended Support for HTTP Requests

Release ID: RoomOS 2019-06-03 ccc122100bb

Previously a device has been able to send arbitrary HTTP(S) Post and Put requests to an HTTP(S) server. This feature is extended to support more request types (Get, Patch, and Delete), and also to handle data that is returned from the server (response headers and body).

To learn more, see [Sending HTTP Requests from a Board, Room, or Desk Device](https://help.webex.com/en-us/nthg6le/Sending-HTTP-Requests-from-a-Board-Room-or-Desk-Device).

### Cisco Webex Assistant for Webex Boards

Release ID: RoomOS 2019-06-03 ccc122100bb

The voice-driven Webex Assistant is now available on Webex Boards. With Webex Assistant enabled, anyone can walk into a conference room and use their voice to interact with a Webex Board. It helps you with tasks such as calling someone in your organization, joining a colleague’s Personal Meeting Room, controlling the volume and video display options, and much more.

Webex Assistant is available in English.

To learn more about Webex Assistant, see [Enable Cisco Webex Assistant](https://help.webex.com/hzd1aj/Enable-Cisco-Webex-Assistant) and [Get Started with Webex Assistant](https://help.webex.com/jpir3w/Get-Started-with-Webex-Assistant).

### Infinite Whiteboard on Cisco Webex Board and Desk Devices

Release ID: RoomOS 2019-05-13 e9e48cc1aba

The whiteboard provides an infinite canvas where you can draw and write in all directions without never running out of space. For more information, read [Use the Whiteboard on Cisco Webex Board](https://help.webex.com/en-us/zfhy55/Use-the-Whiteboard-on-Cisco-Webex-Board) and [Use the Whiteboard on Cisco DX70 and DX80](https://help.webex.com/en-us/nju4kiy/Use-the-Whiteboard-on-Cisco-Webex-DX70-and-DX80).

### Graphical Sound Mixer Available on Audio Console

Release ID: RoomOS 2019-04-23 fbcc553c56a

The Audio Console now has a graphical sound mixer. It has 8 user-definable parametric equalizer settings. A setting consists of up to 6 sections, each of which has its own filter type, gain, center/crossover frequency, and Q value. Each section is shown with its own color and the effect of altering any of the parameters immediately becomes visible in the graph. For more information, see [Advanced Customization of Audio](https://help.webex.com/en-us/btl3ck/Advanced-Customization-of-Audio-on-Room-Devices).

Audio Console is available for: Codec Pro, MX700, MX800, Room 70 G2, Room 70D G2, and SX80.

### Connect to xAPI Over a WebSocket

Release ID: RoomOS 2019-03-19 218e6106b05

You can now connect to the xAPI over WebSocket. The communication channel over WebSocket is open both ways until it is explicitly closed. This means that the server can send data to the client as soon as the new data is available, and there is no need for re-authentication for every request. This improves speed significantly compared to HTTP. Each message contains a complete JSON document and nothing else. Many programming languages have a good library support for WebSocket and JSON-RPC.

WebSocket is not enabled by default. Note that WebSocket is tied to HTTP and HTTP or HTTPS must be enabled before you can use WebSocket. 

For more information, see [Interact with the API of a Board, Room or Desk Device over WebSocket](https://help.webex.com/en-us/nvcsfxcb/Interact-with-the-API-of-a-Board-Room-or-Desk-Device-over-WebSocket).

### Recent Updates

Release ID: RoomOS 2019-03-19 218e6106b05

- 1080p support for Room Kit Mini when it is used as a USB camera.
- The Room series devices can be configured to report the stationary ambient noise level in the room. The reported value is an A-weighted decibel value (dBA), which reflects the response of the human ear. Based on the reported noise, facility management or a building manager can intervene to troubleshoot the issue. All signal processing related to this feature is local and the only data that are transmitted is the calculated noise level.
- You can now connect up to three SRG-120DH/PTZ- 12 cameras to a Codec Plus using an HDMI and an Ethernet switch.

### Hide Unsupported Files on Cisco Webex Board

Release ID: RoomOS 2019-03-19 218e6106b05

You can now hide the unsupported files that have been shared in a Webex Teams space when viewing them on the board.

Fore more information, see [View a File on a Board](https://help.webex.com/en-us/ngybf7w/Use-Cisco-Webex-Board-with-Existing-Spaces#reference%5Finm%5Fmwl%5Fj1b).

### Webex Events Panelist Support

Release ID: RoomOS 2019-03-19 218e6106b05

Webex Events panelists can join events with Webex-registered devices and get a customized experience. Panelists can dial into an event directly on their device, simply by entering the password found on the email invitation. When the host starts a practice session, a banner is displayed on the panelist's device.

For more information, see [Webex Events Panelist Support](https://help.webex.com/en-us/bv2b1bb/Webex-Event-Center-Panelist-Support).

### Edit Your Favorite Contacts on Room and Desk Devices

Release ID: RoomOS 2019-03-19 218e6106b05

You can edit your favorite contacts on Room and Desk devices in order to find them more easily. If you have marked a contact from the directory as your favorite, you can edit their name. If you have marked a video address as your favorite, you can edit that address and add a name to it to help you find the contact.

For more information about editing favorites, see [Edit Your Favorite Contacts on Room and Desk Devices](https://help.webex.com/en-us/n1tk4q6/Edit-Your-Favorite-Contacts-on-Room-and-Desk-Devices).

### Cisco Webex Assistant

Release ID: RoomOS 2019-02-22 a9172dc1ab7

Webex Assistant is a voice-driven virtual assistant for Cisco Webex Room series devices. With Webex Assistant enabled, anyone can walk into a conference room and use their voice to interact with these devices. It helps you with tasks such as calling someone in your organization, joining a colleague’s Personal Meeting Room, controlling the volume and video display options, and much more.

Webex Assistant is available in English.

To learn more about Webex Assistant, see [Enable Cisco Webex Assistant](https://help.webex.com/hzd1aj/Enable-Cisco-Webex-Assistant) and [Get Started with Webex Assistant](https://help.webex.com/jpir3w/Get-Started-with-Webex-Assistant).

### Add Customized Branding and Custom Notification on Room and Desk Devices

Release ID: RoomOS 2019-02-22 a9172dc1ab7

You can now customize the device screen and Touch 10 controller with your logo and brand image without compromising the overall user experience. In half-wake state, the screen shows a custom image and a logo. In awake state, a logo is shown in the bottom right corner of the screen.

You can also add a short text string to the bottom left corner of the screen. This can be, for example, instructions on customized calling or information about a local support contact.

Custom branding is not supported on the following devices:

- Cisco TelePresence SX10
- Webex Boards

For more information, see [Add Customized Branding](https://help.webex.com/article/en-us/rcxqacb) and [Add Custom Notification](https://help.webex.com/article/en-us/nv1d9mw).

### Whiteboards Shared from Webex Boards and Webex Teams Visible on All Devices

Release ID: RoomOS 2019-02-22 a9172dc1ab7

You can now see whiteboards that are shared from Webex Boards and Webex Teams app in all meetings regardless of the type of device you have called in with. The shared whiteboard is like other shared content, so you can view it but not participate in drawing. Whiteboards from Webex Teams app are only visible in Webex Teams space meetings.

### Support for Korean Keyboard

Release ID: RoomOS 2019-02-04 f7e76335e87

Korean keyboard input is now supported on Touch 10 controller when the user interface language is set to Korean. The Korean keyboard is not available on the Cisco Webex Board yet. 

### Support For HDCP Protected Content

Release ID: RoomOS 2019-01-22 5008063821d

You can configure one of the HDMI inputs of the room device to support HDCP (High-bandwidth Digital Content Protection) protected content. Then you can reuse the screen of a room device, also to show content from devices that deliver HDCP content. Examples of such devices are a Google ChromeCast, an AppleTV, or an HDTV decoder. HDCP content can only be shown locally, it cannot be shared while in a call.

Available on the following devices:

- Codec Plus (including Room Kit Plus and Room Kit Plus Precision 60)
- Codec Pro (including Room Kit Pro and Room Kit Pro Precision 60)
- Room 55 and Room 55 Dual
- Room 70 and Room 70 G2

For more information, see [Enable HDCP Content on Room Devices](https://help.webex.com/article/en-us/niew98v).

### Advanced Customization of Audio Using the Audio Console Utility 

Release ID: RoomOS 2019-01-22 5008063821d

The Audio Console utility, which is embedded in the web interface of the room device, provides a graphical interface to advanced customizable audio features. The Audio Console utility lets you define how to connect audio inputs to outputs, using simple drag and drop techniques.

The main features are:

- Configure the audio system of the codec.
- Change the default mixing, routing, and equalizers.
- Set various input and output connector properties.
- Configure advanced features such as local reinforcement.

Available on the following devices:

- SX80
- MX700 and MX800
- Codec Pro (including Room Kit Pro and Room Kit Pro Precision 60)
- Room 70G2

For more information, see [Advanced Customization of Audio on Room Devices](https://help.webex.com/article/btl3ck) and the latest [Customization guide](https://www.cisco.com/go/in-room-control-docs).

[2018](#id%5F104818)

### Using Macros on Room and Desk Devices

Release ID: RoomOS 2018-12-19 54ac0f80a97

Macros can customize the behavior of a room or desk device. It is a small program, which is written in JavaScript / ECMAScript 2017, that runs natively on the device. You can trigger a macro from the user interface. Also, a macro can react to any other system event, configuration change, or status change that is exposed on the API of the device. A macro can register feedback from events, configuration changes, and status changes on the device. The macro can listen for these events and changes, and use the API of the device to invoke further commands and configuration changes.

Available on all room and desk devices except SX10\. 

For more information, see [Use of Macros with Room and Desk Devices](https://help.webex.com/article/en-us/np8b6m6).

### Use Cisco Webex Room Kit Mini as a USB Camera 

Release ID: RoomOS 2018-12-19 54ac0f80a97

You can use the Cisco Webex Room Kit Mini as a USB camera when connected to your computer. This configuration makes use of the microphones and the loudspeakers of the Room Kit Mini, ensuring a great sound experience.

If your Room Kit Mini is already Webex-registered, the system goes in in Do Not Disturb mode to avoid conflicts with incoming calls. If you did not register your Room Kit Mini, you can use it as any other USB camera.

For more information, see [Using Cisco Webex Room Kit Mini as a USB Camera](https://help.webex.com/article/en-us/n7qyx51).

### Record Webex Meetings and Webex Teams Meetings from Room and Desk Devices

Release ID: RoomOS 2018-12-19 54ac0f80a97

You can record Cisco Webex meetings and Cisco Webex Teams meetings from your room or desk device for others to watch later.

You can record:

- Webex Meetings meetings from a shared or personal device as long as you are the meeting host.
- Webex Teams meetings from your device when your device is on personal mode. It is possible to record a Webex Teams meeting from a shared device, but only if the device is present in the invitation for the meeting.

Recording a meeting with only one other person isn't supported.

For more information, see [Record Meetings from Room and Desk Devices](https://help.webex.com/article/en-us/neleasb).

### Share Locally from Webex Teams to On-Premises Registered Devices

Release ID: RoomOS 2018-12-06 7513bae968a

You can now use Cisco Webex Teams app to share content locally to an on-premises registered room or desk device. This capability can be enabled and disabled from Cisco Webex Control Hub. There are differences in how the Webex Teams app connects to cloud-registered and on-premises devices, and connecting to an on-premises device can be less secure.

For more information, see [Enable Local Sharing to On-Premises Registered Devices](https://help.webex.com/article/en-us/n31x0s4).

### Support for Third Party USB Controllers

Release ID: RoomOS 2018-12-06 7513bae968a

You can use a third-party USB input device to control certain functions on a room device. A Bluetooth remote control with a USB dongle and a USB keyboard are examples of such input devices. You can set up the desired features through macros.

Available on the following devices:

- Codec Plus
- Codec Pro
- DX70 and DX80
- Room 55 and 55 Dual
- Room 70 and 70 G2
- Room Kit

This feature is meant to complement the functionality of the Touch 10 or the DX user interfaces. It is not meant to replace the Touch 10 and DX user interfaces.

For more information, see [Use of a Third-Party USB Input Device with Room or Desk Devices](https://help.webex.com/article/en-us/ntixxg2).

### HTTP Post and Put Requests

Release ID: RoomOS 2018-12-06 7513bae968a

This feature makes it possible to send arbitrary HTTP(S) Post and Put requests from a device to an HTTP(S) server.

By using macros, you can send data to an HTTP(S) server whenever you want. You can choose what data to send, and structure them as you like. This allows you to adapt the data to an already established service.

Security measures:

- The HTTP(S) Post and Put feature is disabled by default.
- The system administrator can specify a list of HTTP(S) servers that the device is allowed to send data to.
- The number of concurrent Post and Put requests is limited.

For more information, see [Sending HTTP Post and Put Requests from a Room or Desk Device](https://help.webex.com/article/en-us/nthg6le).

### Remove Default Buttons from the Touch 10 User Interface

Release ID: RoomOS 2018-12-06 7513bae968a

If you don’t need all the default buttons on the Touch 10 user interface, you can remove the ones that you don’t need. This makes it possible to fully customize the user interface. The configuration only removes the buttons, not the functionality as such, and the custom In-Room Control panels can still be exposed. 

For more information, see [Remove Default Buttons from the User Interface](https://help.webex.com/article/en-us/nci847eb).

### We Are Gradually Moving Cisco Webex Boards Over to RoomOS

Release ID: RoomOS 2018-11-26 3046ffc45f4

Cisco Webex Boards can now run RoomOS instead of BoardOS. The capabilities and experience are practically identical between the two. The transition is an automatic process managed by Cisco.

With the shared software with the rest of the Cisco Webex room devices, the Webex Boards will have access to many of the same capabilities as the other room devices going forward. With this change, we expect to be able to develop features faster and with higher quality across all room devices.

There are some differences to the previous software:

- You can launch Advanced Settings from Control Hub to configure your board.
- 802.1x is available on wired Ethernet.
- You can get information on the use of the meeting room with people count.
- Adding participants to a call from the board is currently not supported.
- The following Wi-Fi authentication methods are not supported: EAP PAP, EAP MSCHAP, EAP TTLS PAP.
- Changes in the diagnostics panel:

  - The Media tab only shows information for the active speaker.
  - The Services tab provides more detailed information.
  - Show Touch and Microphone are currently not available.
- Indicator for extra participants in a meeting is currently not available.
- USB upgrade is not supported.
- Pinhole factory reset now takes you directly to factory reset after 10 seconds.

### Edit Your Favorite Contacts

Release ID: RoomOS 2018-11-06 c753a195165

You can use the Touch 10 controller to edit your favorite contacts to find them more easily. If you have marked a contact from the directory as your favorite, you can edit their name. If you have marked a video address as your favorite from your Recents list, you can edit that address and add a name to help you find the contact.

You can read more about editing favorites in [this article](https://help.webex.com/article/en-us/n1tk4q6).

### Classroom Scenario

Release ID: RoomOS 2018-11-06 c753a195165

The Classroom mode uses macros to tailor a room setup that works well for presenting and teaching scenarios. The template provides easy setup, maintenance, and use of the room. Classroom works similarly to the existing Briefing Room mode but it doesn’t require three screens.

Available on the following products:

- Cisco Webex Codec Plus
- Cisco Webex Codec Pro
- Cisco Webex Room 55 and 55 Dual
- Cisco Webex Room 70 and 70 G2
- Cisco TelePresence SX80

You can read more about [administering a Classroom setup](https://help.webex.com/article/en-us/n4522teb) and [using a Classroom setup](https://help.webex.com/article/en-us/59f85m).

### Register Your Device on Personal Mode

Release ID: RoomOS 2018-10-10 01dee0d1189

You can now use [Cisco Webex Settings](https://settings.webex.com/) to create an activation code for your Cisco Webex room or desk device and register it in personal mode. This way you can get your calls and meetings directly to your device.

Devices in personal mode cannot be used with Cisco Webex Teams app. You can read more about personal mode in [this article](https://help.webex.com/article/en-us/n3alqtv).

### Increase in Administrator and API Access

Release ID: RoomOS 2018-10-10 01dee0d1189

You can now create an _Admin_ user from the devices Advanced Settings. This user can be used to sign in to the devices local web interface, and to access the xAPI over SSH or http(s). Signing in to the device's local web interface with full administrator privileges gives you access to more features than before. The API that is now available is the full feature set of the device. This moves the Webex registered devices closer to parity with on-premises registered devices.

Some of the settings and xAPI commands are not relevant for Webex registered devices and these will be removed in the future. For more information, take a look at [the Advanced Settings article](https://help.webex.com/article/en-us/n5pqqcm).

These are the new features that are now available:

- **Call Control**
- **Setup**

  - Configuration: With the _Admin_ role, you can now configure all settings that are relevant for Webex registered devices
  - Status: With the _Admin_ role, you can now view all statuses that are relevant for Webex registered devices
  - Peripherals
  - Personalization: Custom Wallpaper
  - Favorites
- **Security**

  - Local Users: You can create an _Admin_ user
  - Sign in banner
- **Maintenance**

  - Diagnostics
  - System logs
  - Call logs
  - User Interface screenshots
  - Option keys
  - Backup and Restore
  - System recovery: Factory reset
- **Integration**

  - Macro editor: Feature preview
  - Developer API

### Remote Monitoring of Screen Status for SX20 and SX80

Release ID: RoomOS 2018-09-24 54d650be5e9

The remote monitoring of screen status that has been available for the Webex Room series and SX10 is now available for SX20 and SX80\. The codec can wake up the screen if it is in standby mode or put the screen to standby when the codec enters standby. In addition the input source can be changed automatically when you receive a call.

CEC is disabled on the codec by default and must be enabled from the Advanced Settings web interface (Video Output Connector \[1\] CEC Mode setting). Your screen must support CEC and it has to be enabled on it for the remote monitoring to work.

### New Toolbar for Whiteboarding and Mark Up

Release ID: RoomOS 2018-07-12 9f2c038ae60

The toolbar for whiteboarding and marking up presentations has been updated with more colors and a back button to delete the last step.

### Connectivity and Sharing from the Cisco Webex Teams App

Release ID: RoomOS 2018-06-01 608dcdbb6e

You can now find connectivity and sharing options in the same menu on the Cisco Webex Teams. When you connect your app to your Webex room or desk device, you can share your screen and use the app to control your device. Read more about [connectivity](https://help.webex.com/article/en-us/nliifbo) and [sharing](https://help.webex.com/article/en-us/n6uxhr1).

### View Whiteboards and Annotations on Room Devices

Release ID: RoomOS 2018-05-07 42d2ca18159

You can now view whiteboards and annotations on presentations on your Room Kit, Room Kit Plus, Room 55, and Room 70 devices connected to meetings in Webex Teams. Other Webex room devices prompt you to view those from the Webex Teams app.

### Cisco Spark is Now Cisco Webex

Release ID: RoomOS 2018-05-07 42d2ca18159

Cisco Spark has changed its name to Cisco Webex, and the software on Webex room and desk devices is now called RoomOS (previously Spark Room OS). 

The following products have gotten new names: 

- Cisco Spark Room Kit is now Cisco Webex Room Kit
- Cisco Spark Room Kit Plus is now Cisco Webex Room Kit Plus
- Cisco Spark Codec Plus is now Cisco Webex Codec Plus
- Cisco Spark Quad Cam is now Cisco Webex Quad Cam
- Cisco Spark Room 55 and 70 is now Cisco Webex Room 55 and 70
- Cisco DX80 is now Cisco Webex DX80

### Whiteboarding on DX70 and DX80

Release ID: RoomOS 2018-05-07 42d2ca18159

You can now whiteboard and annotate on presentations.

### Updated Language and Time Zone Menu

You can now see the available languages and time zones as a list.

### Mirrored Self-view on DX70 and DX80

The self-view image on DX70 and DX80 is now mirrored.

### Upcoming Meetings List on Your Device

The awake screen on bookable room devices now shows a list of upcoming meetings.

This feature only works on devices that are enabled with Hybrid Calendar. 

### Noise Suppression During Calls

This feature reduces unwanted noise during calls using machine learning to recognize when no one is speaking. When the device notices that there is noise that is not speech, the sound gets lower but not turned off completely. When a meeting participant starts speaking while there is noise, the gain is turned back up, and the speech audio is passed on like normal. Noise suppression is available for products in the Cisco Webex Room series.

### Flashing Screen for Incoming Calls

To make it easier for the hearing impaired users to notice when someone is calling to their Cisco Spark room or desk device, you can set up the device's screen to flash when a call is coming.

[2017](#id%5F104803)

### Source Composition

With the source composition, you can compose up to four input sources into one image. This image is sent in the main video stream to the far end in a call. Source composition can only be enabled through the xAPI, so we recommend creating an In-Room Control UI to control the compositions on demand. The number of input sources you can compose depends on available physical input sources on the codec.

The composition has two layouts; Equal and Picture in Picture (PiP). Equal layout can have up to four sources that are composed into the main video while PiP is limited to two sources. You can decide what source is displayed in which frame but you can’t modify the frame positions or size. These are based on the number of sources you are composing with, and the layout you choose. 

Does not apply to the following products: Cisco TelePresence SX10, Cisco DX70, and Cisco DX80.

### USB to Serial Port Support for Cisco Spark Room Kit, Room Kit Plus, and Room 55

You can connect the Cisco Spark Room Kit, Room Kit Plus, and Room 55 with a USB (Type A) to serial (D-sub 9) adapter to third-party control panels. This can be used, for example, for integrations with Crestron panels. Most USB to serial adapters work for this purpose, but we recommend the UC232R-10 USB to RS232 (FTDI) adapter for a tested and stable serial connection.

### Set Up Custom Prompts to the User Interface

You can add a prompt with custom text or a text input field with a submit button to the user interface. For example, you can ask a user to leave feedback after an ended call. You can specify what type of input you want from the user: single-line text, numeric, password, or PIN code. You can set up the prompt through the API with the commands: `xCommand UserInterface Message TextInput *`. To get access to the API, an _Integrator_ or _RoomControl_ user role must be set. Read more about [user roles](https://help.webex.com/article/en-us/jkhs20).

### Snap to Whiteboard for Room Series 

The Snap to Whiteboard feature is now available for the Room devices. With the Snap to Whiteboard extension, the camera automatically frames both the person and the whiteboard when a person next to the whiteboard talks. This improves far-end experience when there is a physical whiteboard in the same room as a room device. 

This feature works on the following devices:

- MX700 and MX800 with SpeakerTrack
- SX80 with QuadCam or SpeakerTrack 60
- Room Kit
- Room Kit Plus with QuadCam
- Room 55
- Room 70

### Connect Your Room Device to a Proxy Server

Connecting through proxies lets you keep the enterprise security standard when you connect Cisco Spark devices to the Internet. To configure HTTP Proxy during the first-time setup, your device needs to be on CE9.2.1 or later.

### Support for Room 70 and Room 70 Dual

Cisco Spark Room 70 is now supported on Spark Room OS. Room 70 combines a powerful codec, a quad camera, and 70” single or dual 4K displays with integrated speakers and microphones to an all-in-one device for rooms that seat up to 14 people. It offers camera technologies that bring speaker tracking and auto framing capabilities to medium to large sized rooms.

### Join Meetings with One Button to Push (OBTP)

Join scheduled meetings from your room device by simply selecting the big green button that shows up when it’s time to join. One button to push works with @spark meetings. You can schedule the meetings from Microsoft Exchange, Office 365 (or a mix), and Google Calendar. Enable OBTP for a place on Cisco Control Hub to start using it for scheduled meetings. 

### Room 55 HDCP Support

You can now display protected content, such as Blu-ray movies and content from set-top boxes, on the Room 55 in local meetings.

### Cyrillic Keyboard

Release ID: Spark Room OS 2017-08-29 21aa5a9

Cyrillic keyboard is now available on all the Cisco Spark Room Device user interfaces.

### Support for Cisco Spark Room 55

Release ID: Spark Room OS 2017-08-17 7864f12

Cisco Spark Room 55 is now supported on Spark Room OS. Room 55 is a all in one room device with a 4K screen, built-in bass, and dedicated center speaker for voice. It offers you the rich collaboration experience familiar from the rest of the Cisco Spark Room series with features like: Best overview, Speaker track, Wi-Fi, and the improved wake-up experience.

### DX70 and DX80 Image Improvements

Release ID: Spark Room OS 2017-08-17 7864f12

We have reworked the image algorithms for DX70 and DX80 to improve quality. We have added new auto exposure and auto white balance algorithms, as well as a faster auto focus algorithm.

### Support for the WPA-EAP Authentication Framework for Wireless Networks

Release ID: Spark Room OS 2017-06-20 c142da8

In addition to WPA-PSK and WPA2-PSK, DX70, DX80, Room Kit, and Codec Plus now support the WPA-EAP authentication framework for Wi-Fi connections.

The following methods are supported:

- Open
- WPA-PSK (AES)
- WPA2-PSK (AES)
- WPA-EAP-PEAP
- EAP-TLS
- EAP-TTLS
- EAP-FAST
- PEAP
- EAP-MSCHAPv2
- EAP-GTC

### Cisco Spark Room Kit Plus Supported

Release ID: Spark Room OS 2017-04-24 c9a2a7f

Cisco Spark Room Kit Plus is now supported on Spark Room OS.

### Cisco Spark Room Kit Supported

Release ID: Spark Room OS 2017-03-21 625811a

Cisco Spark Room Kit is now supported on Spark Room OS.

### Advanced Settings and In-Room Controls

Release ID: Spark Room OS 2017-03-21 625811a

Configure your Cisco Spark Room Device features through Cisco Spark Control Hub, such as:

- The PresenterTrack feature enables the camera to follow the presenter, while the presenter moves about on stage. When the presenter leaves the stage, the tracking stops.
- With the Snap to Whiteboard extension, the camera captures both the person and the whiteboard when a person next to the whiteboard talks.
- The briefing room set-up is designed to provide easy setup, management and use of a room for education, training, or similar.
- You can customize our Touch 10 user interface to allow control of peripherals in a meeting room, for example lights and blinds. This allows for the powerful combination of a control system’s functionality and the user-friendly Touch 10 user interface.
- A selection of AV-related configurations is now available for Cisco Spark registered room devices.

You can read more about these settings in these articles:

- [Advanced settings](https://help.webex.com/article/DOC-18239)
- [In-room controls and video switch](https://help.webex.com/article/DOC-18142)
- [Local user administration](https://help.webex.com/article/DOC-17938)

### Updated User Interface

Release ID: Spark Room OS 2017-03-21 625811a

We have updated the room device user interfaces for a more welcoming and aligned experience across Cisco Spark clients and devices. The main activities are now presented more prominently on the home screen.

### PSTN Calling Is Available for Room Devices

Release ID: Spark Room OS 2017-01-24 9b5b594

You are able to place and receive PSTN calls on room devices. You can also assign an extension to your room device. PSTN calls and extensions require that Cisco Spark Call Service is available. 

For more information, see the article [Add PSTN to an Existing Place](https://help.webex.com/article/en-us/zgjezbb).

### Control Volume on the Paired Room Devices from the App

Release ID: Spark Room OS 2017-01-24 9b5b594

When your Cisco Spark app is paired to a room device you can control the call volume, or mute the microphone on your room device. 

Available for Windows, Mac, iOS, and Android. 

### More Detailed Reports from Room Devices

Release ID: Spark Room OS 2017-01-24 9b5b594

You can now get better and more detailed reports from room devices. The report includes information on:

- Most used
- Least used
- Device usage and utilization
- Total call duration
- Number of calls

For a more detailed report on your room devices, you can export a CSV file from the management portal.

[2016](#id%5F104802)

### Support for Wireless Network for Desk Devices

Release ID: Spark Room OS 2016-12-07 ed1b9a5

You can now connect the DX70 and DX80 to a home wireless network.

For more information on connecting to a wireless network, see the article [Use Wireless Network on DX70 and DX80](https://help.webex.com/article/DOC-14349).

### Support for Pairing Touch 10 Over the Network

Release ID: Spark Room OS 2016-12-07 ed1b9a5

The Touch 10 connects to a room device through the local network before registering to the Cisco Collaboration Cloud. This enables you to use a Touch controller with Cisco Spark registered SX10 and SX20 room devices. The Touch controller was previously only available for direct pairing for SX80, MX200 G2, MX300 G2, MX700, and MX800 room devices. Pair the Touch controller before you register your room device to Cisco Spark.

For more information on how to connect a Touch controller to a room device, see [Connect Touch 10 to a Room Device Over the Network (LAN)](https://help.webex.com/article/DOC-11657).

### Cisco Spark Media Service Support

Release ID: Spark Room OS 2016-11-16 e93a35e

Cisco Spark Media Service keeps media for Cisco Spark calls within local media nodes for on-premises participants when there is available capacity. If full capacity is reached, the overflow is moved automatically to the cloud. The media service helps to optimize media quality within a location and bandwidth across locations for Cisco Spark calls.
