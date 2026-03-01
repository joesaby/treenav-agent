---
title: "Enable Zoom Meetings on Board, Desk, and Room Series"
product: "Devices"
article_id: "zai3j4"
url: "https://help.webex.com/en-us/article/zai3j4/Enable-Zoom-to-Join-Zoom-Meetings-on-Board-Desk-and-Room-Series"
last_updated: "2026-01-15"
description: "By enabling Zoom in Control Hub, participants invited to a Zoom Meeting can join
the meeting directly from their devices with One Button to Push (OBTP) or by
selecting the Zoom button."
tags: ["devices"]
source: "help.webex.com"
---

# Enable Zoom Meetings on Board, Desk, and Room Series

## Introduction

There are four different ways a Cisco device can join Zoom Meetings: 

- SIP video interop
- Conference Room Connector (CRC)
- Guest mode
- Signed-in mode

Users can join Zoom Meetings by pressing the green Join button for scheduled meetings (if [Hybrid Calendar](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/hybridservices/calendarservice/cmgt%5Fb%5Fdeploy-spark-hybrid-calendar-service.html) is enabled) or by selecting the Zoom Meetings app on the Cisco device to enter a Meeting ID. This launches the Zoom Meetings application on the device. Once the meeting concludes, the device automatically returns to the Cisco Rooms home screen. 

For devices linked with Webex Edge for devices, you need to enable [Allow Control Hub to manage configurations](https://help.webex.com/n5pqqcm/#section%5Fv1s%5Fqbk%5Fy2c).

### Available modes

Guest mode and signed-in mode are an enhanced interoperability with Zoom. With this interoperability, the Zoom Rooms app launches directly on the Cisco device and users join Zoom Meetings on their devices with the familiar Zoom Meetings UI. This ensures that you get up-to-date features from the newest Zoom Room release.

In CRC and SIP interop modes, a RoomOS app is launched to connect to a Zoom Meeting. The users can use Cisco's custom Zoom UI for in-meeting controls.

|                       | Zoom Meetings for Cisco devices | SIP-based                                                                                   |                        |                        |
| --------------------- | ------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------- | ---------------------- |
| Guest mode            | Signed-in mode                  | CRC                                                                                         | SIP video interop      |                        |
| UI                    | Zoom Rooms                      | Zoom Rooms                                                                                  | Cisco's custom Zoom UI | Cisco's custom Zoom UI |
| Maximum resolution    | 720p                            | 1080p                                                                                       | 1080p                  | 720p                   |
| Protocol              |                                 |                                                                                             | SIP, H.323             | SIP                    |
| Dual screen support   | Yes                             | Yes                                                                                         | Yes                    | No                     |
| Zoom Room management  | No                              | Yes                                                                                         | Yes                    | No                     |
| Join as meeting host  | No                              | Yes                                                                                         | Yes                    | No                     |
| Zoom Webinar support  | Attendee                        | Panelist and Attendee                                                                       | Panelist and Attendee  | Attendee               |
| Breakout room support | Attendee only                   | Yes                                                                                         | No                     | No                     |
| Zoom direct share     | No                              | Yes                                                                                         | No                     | No                     |
| Start instant meeting | No                              | Yes                                                                                         | No                     | No                     |
| Invite participants   | No                              | Yes                                                                                         | Yes                    | No                     |
| Whiteboarding         | Yes                             | Yes                                                                                         | One-way whiteboarding  | One-way whiteboarding  |
| Live reactions        | Yes                             | Yes                                                                                         | No                     | No                     |
| License required      | No                              | [Zoom Rooms](https://support.zoom.com/hc/en/article?id=zm%5Fkb&sysparm%5Farticle=KB0057894) | CRC license            | No                     |

In guest and signed-in mode, you can use [the Zoom in-meeting controls](https://support.zoom.com/hc/en/article?id=zm%5Fkb&sysparm%5Farticle=KB0060186). 

The following RoomOS features are also available in Zoom Meetings in guest and signed-in mode:

- Camera controls and [advanced camera modes](https://help.webex.com/6t59ix/). Not supported: Briefing room mode, Presenter and audience
- Device sharing menu with wired and wireless sharing options: [HDMI and USB-C](https://help.webex.com/c0jgpv/), [Miracast](https://help.webex.com/w60modb/), [AirPlay](https://help.webex.com/n29ja5v/)
- Audio control through noise cancellation
- One-way whiteboarding on devices that support whiteboarding. These whiteboards are not saved or available after the meeting has ended.

## Requirements for guest and signed-in mode

For the signed-in experience, you’ll also need a Zoom Rooms subscription. 

### Supported devices

- Cisco Room Bar
- Cisco Room Bar Pro
- Cisco Board Pro
- Cisco Board Pro G2
- Cisco Desk Pro
- Cisco Room Kit EQ
- Cisco Room Kit EQX
- Cisco Room Kit Pro

### Supported Room Navigator versions

- CS-T10-TS-L-K9
- CS-T10-WM-L-K9
- CS-T10-TS-C-K9
- CS-T10-WM-C-K9

If an usupported Room Navigator is connected to a device in Zoom guest or signed-in mode, a diagnostics error is visible in Control Hub and the device's web interface.

### Network

- [Cisco network requirements](https://help.webex.com/WBX000028782/)
- [Zoom network requirements](https://support.zoom.com/hc/en/article?id=zm%5Fkb&sysparm%5Farticle=KB0065712)

## Enable guest mode, CRC, and SIP interop

You can enable Zoom Rooms meetings as a global setting for all your devices in Control Hub.

Guest mode only applies to supported devices. Other devices in your organization continue to use the CRC or SIP inter op solution that has been available previously. 

If Zoom Meetings is enabled from before, you need to go through step three to enable the guest mode experience. 

| 1 | From the customer view in [ https://admin.webex.com](https://admin.webex.com/), go to the Devices page.                                                                                                                                                                                                                                   |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Settings and navigate to Meeting providers. Toggle on Enable Zoom. When users start a Zoom call dialing in from SIP addresses, the device automatically detects it's a Zoom call and switches to Cisco's custom Zoom UI. If you want to disable this behavior, set  xConfiguration  \>  Zoom  \>  EnhancedCallControls : Disabled. |
| 3 | Check the Zoom app experience check box to enable guest mode experience on those devices that support it. The devices that don’t support guest mode use the CRC or SIP interop mode even when the check box is checked. If you don’t check the box, all devices have the CRC or SIP interop experience.                                   |

## Enable guest mode on individual devices 

You can enable guest mode on individual devices that support it. 

Set the configuration [Zoom AppExperience Mode](https://roomos.cisco.com/xapi/Configuration.Zoom.AppExperience.Mode/) to _**Auto**_. 

You can either:

- Set the configuration on one device.
- Set the configuration on multiple devices.
- Use configuration templates.
- Use default configurations for your organization or location.

For more details on the different ways to set configurations, see the [Device configurations for Board, Desk, and Room Series devices](https://help.webex.com/en-us/n5pqqcm/) article.

## Enable signed-in mode 

With signed in mode, you can control the Zoom Meeting settings in the Zoom web portal. The device configuration is done from Control Hub, the local device web interface, or through the xAPI. 

For the signed-in experience, you’ll also need [a Zoom Rooms license](https://support.zoom.com/hc/en/article?id=zm%5Fkb&sysparm%5Farticle=KB0057894). 

Further information on administering Zoom Rooms: 

- [Getting started with Zoom Rooms](https://support.zoom.com/hc/en/article?id=zm%5Fkb&sysparm%5Farticle=KB0063391)
- [Release notes for Zoom Rooms](https://support.zoom.com/hc/en/article?id=zm%5Fkb&sysparm%5Farticle=KB0063542&%5Fga=2.132836237.2045883090.1725459004-2108249623.1725459004)

### Create a Zoom Rooms activation code 

For more information on using the Zoom web portal, go to [Adding Zoom Rooms on the web portal](https://support.zoom.com/hc/en/article?id=zm%5Fkb&sysparm%5Farticle=KB0061644).

If you already have an existing Zoom Room, go to step 4\. 

| 1 | Sign in to the [Zoom web portal](https://zoom.us/profile) and click Room Management then Zoom Rooms.                             |
| - | -------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click \+ Add Room and select the Room Type: Zoom Rooms (for shared spaces) Creates the default Zoom Room configuration.          |
| 3 | Enter the Room Name and Select a location for the room.                                                                          |
| 4 | Once the room is created, click on the room name to open its settings page.                                                      |
| 5 | Click the Activation Code button in the top-right section of the room details page.                                              |
| 6 | Copy this code to enter it on your Cisco device in Control Hub to link it to the Zoom Room. The code expires after **ten days**. |

### Link a device to Zoom Rooms

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/), go to the Devices page and select the device you want to link to Zoom Rooms.  |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | On the device details page, go to the Configurations tab. Select Zoom Rooms: Activate and enter the activation code that you created in the Zoom web portal. |
| 3 | Click Activate. The device reboots and is now able to join Zoom Meetings in signed-in mode.                                                                  |

What to do next

To see if a device has been linked to Zoom Rooms, go to the device settings menu on the device UI. Swipe to open the control panel and select Settings. Scroll to Network and service. If the device is linked, Zoom Rooms activation states Activated. 

### Remove Zoom Rooms from a device

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/), go to the Devices page and select the device you want to remove Zoom Rooms from.                                |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the device details page, go to the Configurations tab. Select Zoom Rooms: Activated and click Deactivate. The device reboots and is no longer able to join Zoom Meetings in signed-in mode. |

## Known issues for guest and signed-in mode

| Known Issues                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Codec Pro:** Zoom Rooms does not work as expected on Codec Pro based products                                                                                                                                                                                                                                                                                       |
| **Chat:** Keyboard on touch displays does not have a minimize or close button. Workaround: Close out of the chat box                                                                                                                                                                                                                                                  |
| **Room Navigator:** If you pair a Room Navigator after the Zoom Rooms application has been activated with an activation code, the Room Navigator won't be able to control Zoom Rooms. Workaround: sign-out Zoom Rooms using Control Hub or by executing _xCommand Zoom Reset Confirm: Yes_, then reactivate Zoom Rooms while the Room Navigator is already connected. |
| **Zoom Experience:** Zoom post-experience survey missing, even if configured in Zoom Portal                                                                                                                                                                                                                                                                           |
| **Intelligent Director:** Not yet supported                                                                                                                                                                                                                                                                                                                           |
| **Multi-camera setups:** USB cameras will show up as additional cameras, but are listed as "Unknown Device"                                                                                                                                                                                                                                                           |
| **Video mute:** When the Zoom App is minimized the Video Mute button does not reflect Muted video in the Zoom App                                                                                                                                                                                                                                                     |
| **Muti-Camera setups:** You are currently unable to manually select between multiple Cisco cameras from the Zoom UI. Workaround: Use the side panel RoomOS UI to select individual cameras                                                                                                                                                                            |
| **Camera modes**: If you select a camera mode from the Zoom Camera UI the RoomOS UI will reflect the change. However if you select a camera mode from the RoomOS UI the Zoom Camera UI does not update to show the change.                                                                                                                                            |
| **21:9 screen resolution:** Not yet supported                                                                                                                                                                                                                                                                                                                         |
| **Zoom Device Management:** Not yet fully implemented. Unable to upgrade from Zoom Admin Portal. Limited Device Support from Zoom Admin Portal                                                                                                                                                                                                                        |
| **Proxy support:** Not working in some cases                                                                                                                                                                                                                                                                                                                          |
| **Zoom Proximity Pairing:** Issues for some certain devices                                                                                                                                                                                                                                                                                                           |
| **Zoom for Government:** Known issues with Room Navigator pairing to a device registered to Zoom for Government. Workaround: Test with a touch screen device.                                                                                                                                                                                                         |
| **Accessibility:** Screen Reader is not currently working on all menus and UI elements                                                                                                                                                                                                                                                                                |
| **IPv6:** Devices with IPv6 only is not currently supported.                                                                                                                                                                                                                                                                                                          |
