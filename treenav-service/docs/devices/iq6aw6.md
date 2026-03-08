---
title: "Room Navigator as a standalone device"
product: "Devices"
article_id: "iq6aw6"
url: "https://help.webex.com/en-us/article/iq6aw6/Room-Navigator-as-a-stand-alone-device"
last_updated: "2025-08-18"
description: "Room Navigators can be used as a standalone device in rooms not equipped with a
video conferencing device. This provides a consistent experience for all rooms,
with or without a device."
tags: ["devices"]
source: "help.webex.com"
---

# Room Navigator as a standalone device

You can register a Room Navigator directly to Control Hub and manage it as a standalone device. Room Navigator as a standalone device supports third-party party web apps, room booking, and xAPIs for third-party integrations.

This article covers Webex-registered Room Navigators in standalone mode. For more information about customer-managed Room Navigators, see the [API reference guide for Room Navigators](https://www.cisco.com/c/en/us/support/collaboration-endpoints/webex-room-navigator/series.html#Reference).

Persistent web app mode 

Running a third-party web application on a Room Navigator lets you integrate your company's custom solution for managing room bookings and communicating workplace guidelines and information. 

The app that you select displays on the Room Navigator’s entire screen, replacing the RoomOS user interface, and it can’t be dismissed by users.

Room booking mode 

The Room Navigator for wall mounting can be configured as a room booking device. It displays the room availability status and users can schedule instant meetings or see the room calendar.

You can also configure options to make room bookings via the Room Scheduler app without the Webex Hybrid Calendar.

The room booking app on a standalone device provides the same experience and functionality as [a paired Room Navigator](https://help.webex.com/me7z9t/), except for the sensor data and people count.

Set office hours 

We recommend that you set office hours for your Room Navigator when it's in persistent web app mode. Office hours promote energy conservation and protect the screens from wear and tear. For more information, see [Set office hours on Board, Desk, and Room series devices](https://help.webex.com/nge8zpq/).

Add a standalone mode Room Navigator to a room with a DX80, MX Series, or SX Series device 

If you set the Room Navigator as a standalone device in persistent web app mode, it works the same way as when it's in a workspace with another device or not. 

If you set the Room Navigator as a standalone device in room booking mode, it shows the same calendar booking information and reflects the in-use status if the device in the workspace supports it. You must enable room booking on the collaboration device. The Room Navigator doesn't show people count and the temperature inside the room. 

Adding a Room Navigator to a workspace with a DX80, MX Series, or SX Series device is not supported for devices that are linked with Edge for Devices.

[Prerequisites](#sx10%5Fr%5Fstandalone%5Fprerequisites)

Before you set up a Room Navigator as a standalone device, you may need to upgrade the software on the device. You can either connect the Room Navigator to a device running the correct software, or use the xAPI to upgrade.

Standalone mode is supported on:

- Webex-registered devices—Software version RoomOS March 2023 (11.3) or later
- Customer-managed devices—Software version RoomOS September 2023 (11.8) or later.

We recommend using the latest available software version.

After you've upgraded the software version, factory reset the Room Navigator.

Upgrade software by connecting to another device 

You can upgrade the Room Navigator by connecting it to a Board or Room Series device. When connected, the Room Navigator checks if a software upgrade is necessary. If so, new software is downloaded from the video device and installed on the touch controller. The Room Navigator restarts after the upgrade. 

The Board or Room Series device must be running RoomOS March 2023.

[Read more about connecting a Room Navigator for the software upgrade.](https://help.webex.com/fqm3au/) 

Upgrade software by using the xAPI 

You can SSH to the Room Navigator before it's set up to upgrade the software.

1. Access the API with SSH. Connect using the IP address or hostname of the device. When the device is new, or has been factory reset, the username is _admin_, and the password is blank.
2. Run the following command:  
```  
swupgrade https://binaries.webex.com/collaboration-endpoint-ce-production-stable/20250428121143/bifrost.pkg  
```

Read more about how to use the xAPI on [roomos.cisco.com](https://roomos.cisco.com/).

[Create a workspace and an activation code](#sx10%5Ft%5Fstandalone%5Fch%5Fworkspace)

Before you onboard a Room Navigator as a standalone device, first create a workspace and get an activation code in Control Hub.

You can add one or several Room Navigators in one workspace. Adding several Room Navigators can be useful if you have a large meeting room or an auditorium.

Activation codes created for personal mode, such as those created from settings.webex.com, do not work for onboarding a Room Navigator as a standalone device. 

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Management \> Workspaces and click  Add Workspace.                                                                                                                                                                                                                                                             |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Enter a name for the workspace (such as the name of the physical room), select room type, and add capacity.                                                                                                                                                                                                                                                                   |
| 3 | Click Next.                                                                                                                                                                                                                                                                                                                                                                   |
| 4 | Choose Cisco Collaboration device, then click Next.                                                                                                                                                                                                                                                                                                                           |
| 5 | On the services page, what you need to set up depends on how you want to configure the device: **Persistent web app mode**—For Calling, Scheduling, and Meetings, select None and click Next. **Room booking mode**—For Calling and Meetings, select None. For Scheduling, select Calendar. Click Next and set up the information about your organization's calendar service. |
| 6 | Make note of the Activation code that was created and use it for onboarding the Room Navigator. You can Copy, Email, or Print the activation code.                                                                                                                                                                                                                            |

[Onboard a Room Navigator](#sx10%5Fstandalone%5Fonboarding)

If you want to convert a Room Navigator that's already in use to standalone mode, first factory reset the Room Navigator before you onboard it. 

The Room Navigator must be running software version RoomOS March 2023 (11.3) or later.

| 1 | On the _Welcome screen_, select Try the new onboarding.                                                                                               |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Set up as standalone.                                                                                                                          |
| 3 | Depending on how you want to configure the Room Navigator, select either Room booking or Persistent web app.                                          |
| 4 | Select the location of the Room Navigator. You can select whether the Room Navigator is located outside or inside a room. The Room Navigator reboots. |
| 5 | Choose a language and tap Start.                                                                                                                      |
| 6 | Set up the network as needed. Tap Continue when you’re done. We recommend using an Ethernet connection.                                               |
| 7 | Set the time zone and tap Continue.                                                                                                                   |
| 8 | Enter the activation code that you created in Control Hub and tap Continue. Your setup is complete. You can now configure the device in Control Hub.  |

[Persistent web app mode](#sx10%5Ft%5Fstandalone%5Fpwa)

After you have setup the Room Navigator as a standalone device, you can configure which web app it displays.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Management \> Devices.                                                                                                                                                                                                                                                                                                                             |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | You can configure a single device or multiple devices. **Single device** Click the device in the devices list. Click Navigator persistent web app. Turn on Enable persistent web app and enter a URL. Click Save. **Multiple devices** Select the devices from the devices list. Click Edit. Click Navigator persistent web app. Turn on Enable persistent web app and enter a URL. Click Next, then click Apply. |

[Room booking mode](#sx10%5Ft%5Fstandalone%5Froom%5Fbooking)

In Control Hub, you can set up a single or multiple Room Navigators in room booking mode.

Before you begin

Before you set up a Room Navigator as a standalone device in room booking mode, you need to enable room booking. See [Enable room booking for shared mode Board and Room Series devices](https://help.webex.com/nzp31jb/).

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Management \> Workspaces.                                                                                                                                                                                          |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the workspaces you want to configure from the workspaces list and click Edit.                                                                                                                                                                                              |
| 3 | Under _In-Room Booking_, select On from the drop-down menu. Individual workspaces—If you want to enable room booking for one workspace, select the workspace, and click the cogwheel in the _Calendar_ section. Select Edit In-Room Booking Settings and turn on in-room booking. |

[Room booking without the Webex calendar](#task-template%5F8af1bb26-4570-4344-bd7d-97f7e899acb9)

 You can also book a room or use the Cisco Room Scheduler app without the Webex Hybrid Calendar. The following options are available in the Room Scheduler when you enable booking without the calendar:

- Local booking
- Room in use
- Hot desk booking on Room Scheduler  
The Hot desk booking option is not available for standalone Navigators.

Local booking

Creates a local booking on the device's calendar. When local booking is enabled, a Book room button appears on the touch controller and in the Room Scheduler app. The message _Room available all day_ is shown on the touch controller screen with upcoming calendar events shown on the left side. There’s also a Calendar button available on the touch controller.

Users can book a room from the touch controller or the Room Scheduler app by tapping Book Room. They can edit the meeting title and, once it's booked, options become available to Extend or Remove the meeting.

Inside rooms, local booking is available on Board, Desk, and Room devices paired with a touch controller. Outside rooms, local booking is only available for standalone Room Navigators, paired to a device or not.

Room in Use mode for Room Scheduler

This option hides calendaring information on the Room Scheduler app, and only shows _Room Available_ or _Room in use_ status. Booking the room isn’t possible.

[Settings menu](#sx10%5Fr%5Fstandalone%5Fsettings%5Fmenu)

To access the Settings menu on a Room Navigator in persistent web app or room booking mode, tap the screen three times with three fingers. 

The following information is available in the Settings menu:

- Information about the device, such as the IP address, and software version.
- Issues and diagnostics. You can also send logs from the device from this menu.
- Restart and factory reset.

[Configuration](#sx10%5Fr%5Fstandalone%5Fmanagement)

You can manage the Room Navigator the way you manage your other devices in Control Hub, or through the device’s local web interface. For more information, see [Device configurations for Board, Desk, and Room Series devices](https://help.webex.com/n5pqqcm/).

For more information about settings, and xAPI commands that are available for Room Navigator in standalone mode, see the [API reference guide for Room Navigators](https://www.cisco.com/c/en/us/support/collaboration-endpoints/webex-room-navigator/series.html#Reference).

[Macros, extensions and web applications for Room Scheduler](#reference-template%5F72c6f9b1-88f7-45d5-8065-901abdad411e)

The Room Scheduler device User Interface (UI) Extensions allow you to create custom panels and action buttons, as well as integrate web applications directly into the Room Scheduler dashboard. Learn more about [Macros and extensions for Room Scheduler](https://roomos.cisco.com/doc/TechDocs/MacrosExtensionsRoomScheduler).
