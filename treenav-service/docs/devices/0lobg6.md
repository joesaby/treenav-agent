---
title: "Join Zoom Meetings on Board, Desk, and Room Series"
product: "Devices"
article_id: "0lobg6"
url: "https://help.webex.com/en-us/article/0lobg6/Join-Zoom-Meetings-on-Board-Desk-and-Room-Series"
last_updated: "2026-01-16"
description: "Join a Zoom meeting with One Button To Push (OBTP), or by tapping the Zoom
button directly from your Cisco device."
tags: ["devices", "hybrid-services"]
source: "help.webex.com"
---

# Join Zoom Meetings on Board, Desk, and Room Series

## Zoom App Experience

The new Zoom App Experience brings native Zoom meetings to your Cisco device. You can launch the Zoom Rooms app directly on your Cisco device with the Zoom Meetings user interface or with One Button To Push. You can join meetings as a guest, where no license is required, or use signed-in mode, where the device signs in as a Zoom Room for enhanced meeting controls and features. Read more about guest and signed-in mode [here](https://help.webex.com/en-us/article/zai3j4/Enable-Zoom-Meetings-on-Board,-Desk,-and-Room-Series).

### Activate Zoom Rooms

Make sure that Zoom Rooms is activated in the settings menu.

Zoom Rooms is activated.

### Join a Zoom meeting

Guest mode: Tap the Zoom button. As a guest, you can launch the Zoom Rooms app by entering the meeting ID and passcode. Once in the meeting, you have access to the [Zoom meeting controls](https://support.zoom.com/hc/en/article?id=zm%5Fkb&sysparm%5Farticle=KB0060186) shown below. See [here](http://help.webex.com/en-us/article/zai3j4/Enable-Zoom-Meetings-on-Board,-Desk,-and-Room-Series#section%5Ft5j%5Fs44%5Fqhc) what is available in guest mode.

Signed-in mode: Tap the Zoom button. When signed in, you can join a Zoom meeting with meeting ID and passcode, or you can start an instant Zoom Meeting by selecting Start a meeting.

Once in the meeting, you have access to the [Zoom meeting controls](https://support.zoom.com/hc/en/article?id=zm%5Fkb&sysparm%5Farticle=KB0060186) shown below. See [here](http://help.webex.com/en-us/article/zai3j4/Enable-Zoom-Meetings-on-Board,-Desk,-and-Room-Series#section%5Ft5j%5Fs44%5Fqhc) what is available in signed-in mode.

The following RoomOS features are also available in Zoom Meetings in guest and signed-in mode:

- Camera controls and [advanced camera modes](https://help.webex.com/en-us/6t59ix/). Not supported: Briefing room mode, Presenter and audience.
- Device sharing menu with wired and wireless sharing options: [HDMI and USB-C](https://help.webex.com/en-us/c0jgpv/), [Miracast](https://help.webex.com/en-us/w60modb/), [AirPlay](https://help.webex.com/en-us/n29ja5v/)
- Audio control through noise cancellation.
- One-way whiteboarding on devices that support whiteboarding. These whiteboards are not saved or available after the meeting has ended.
- Guest mode and signed-in mode are supported in single and dual-screen scenarios.

## Join Zoom Meetings Using CRC and SIP Interop Modes

You can join SIP-based Zoom meetings from your Board, Desk, and Room Series device by enabling it in Control Hub. This is set up by your system administrators and depends on the type of device you have. Note that a CRC license is required when you participate in a SIP-based Zoom meeting. Once this is configured, you can simply enter the meeting number and the passcode without having to build the SIP URI, giving a better meeting join experience.

### Join with One Button to Push

One Button to Push is available on devices where the hybrid calendar is enabled. When users schedule Zoom meetings and include devices, a join button appears on the device right before the meeting begins. Simply tap Join  to enter the meeting. 

### Join by selecting the Zoom button

You need the code provided in your calendar invite or at the end of the meeting link in order to join a Zoom Meeting with your device. Once you have the code you can join by selecting the Zoom button.

If you're the host, toggle on I'm the host  and write the host key.

Tap  Advanced options  to select a different CRC domain than the default to join your meeting. You can choose your preferred location from the drop down list.

### Using the Zoom controls in meetings joined through the dial app

When you dial a Zoom call through the call app or with xCommand Dial with a SIP address, your device will automatically detect it's a Zoom call and switch to Cisco's custom Zoom UI. This ensures a consistent experience every time you join a Zoom call, no matter how you dial in.

### **In meeting controls** 

All call controls and features available in Zoom meetings can be accessed in the meeting with a Touch Controller connected to your device, as shown below. 

On Board and Desk series, the Zoom call controls are also available, as shown below. 

Tap  Host options  to access the host controls.

Tap  Layout  to access the different layout options.

Tap  More  to access more settings.

### Limitations

The host options button is always visible. However, the commands will not work if you are not the host.

If  mute on join  is configured in the Zoom meeting, you have to mute and unmute for the device to match up this Zoom setting.

Zoom calls do not appear in the Recent Calls list when dialed from the touch panel or user interface. As a result, redialing these calls directly from the Recents section is not supported. This change was implemented to prevent potential exposure of sensitive information.

### Keypad support for Zoom CRC controls

Cisco devices now support Zoom’s **Lobby Management** and **Roster List Management** features for Zoom CRC calls. **Lobby Management** allows hosts to control who enters the meeting by managing participants in a virtual waiting room (lobby). **Roster List Management** enables hosts to view and manage the list of participants during the meeting, such as muting/unmuting or removing attendees. These features rely on keypad interaction, which can be easily accessed directly through the interface.

- **No admin setup needed**: Administrators don’t need to enable this feature—it’s automatically available with the updated RoomOS version.
- **Host commands**: Many of these controls are host-specific, so users need host status to access them.

**How to use the keypad:**

1. Join a Zoom CRC call as the host.
2. Select **Participants** from the interface.
3. Click **Show Keypad** to access the controls.
