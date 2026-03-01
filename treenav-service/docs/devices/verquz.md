---
title: "Set up briefing room on Room Series"
product: "Devices"
article_id: "verquz"
url: "https://help.webex.com/en-us/article/verquz/Set-up-briefing-room-on-Room-Series"
last_updated: "2025-06-06"
description: "The briefing room setup makes it easy to set up, manage, and use a room to
deliver training and education sessions to groups of people. Whether the
presenter is in the room or calling in from a remote location, participants
receive a good and engaging experience."
tags: ["devices"]
source: "help.webex.com"
---

# Set up briefing room on Room Series

The briefing room setup has the following predefined room modes that accommodate different scenarios.

## Local presenter mode

- The presenter is in the room. This mode also covers the case when someone in the local audience asks a question (Q&A).
- If automatic switching is enabled (default), the device switches to this mode when the _presenter camera_ detects a presenter in the room.
- Sends video from the _presenter camera_ to the far end. In the Q&A case: Sends split-screen video from the _presenter camera_ and the person asking the question (_audience camera_) to the far end.
- Both the _remote presenter display_ and the _presentation display_ show the presentation, if any.
- The _remote audience display_ shows the remote participants that are calling in from different sites.

## Remote presenter mode

- The presenter is calling in.
- If automatic switching is enabled (default), the room device switches to this mode when the _presenter camera_ doesn't detect a presenter in the room.
- Sends video from the _audience camera_ to the far end.
- The _remote presenter display_ shows the presenter that is calling in, and other remote sites (you can decide the layout locally).
- Both the _presentation display_ and the _remote audience display_ show the presentation, if any.

## Discussion mode

- For discussions between different sites. A local presenter is in the room.
- Always use the touch controller to activate this mode.
- Sends video from the _audience camera_ to the far end.
- The _remote presenter display_ shows the remote sites that are part of the discussion (you can decide the layout locally).
- Both the _presentation display_ and the _remote audience display_ show the presentation, if any.

The briefing room setup is available as a room type template. When you set up a room using a template, a set of configurations is pushed automatically to the device. It is important that the room is set up correctly, and that the cameras and screens are connected exactly as specified. Otherwise, the configurations will not match the room.

Devices have a number of smart camera modes: Presenter and Audience, Briefing Room, and Classroom mode. Updating the camera mode while the device is in a call or a meeting is not recommended. This may lead to issues with the UI and the camera setup.

If you want to change the camera mode on a device that is in a call, first disconnect from the call, change the camera mode, and then join the call again.

## Differences between the room type templates

_Presenter and audience_, _briefing room_, and _classroom_ are room type templates.

### Presenter and audience

This is the newest room type templates for such scenarios. Later updates and improvements will only be for _presenter and audience_.

- Supported products:

  - Board Pro G2
  - Room Kit EQ (Codec EQ), Room Kit EQX
  - Room Kit Plus (Codec Plus), Room Kit Pro (Codec Pro)
  - Room Bar Pro
  - Room 55 Dual, Room 70, and Room 70 G2
- Compared to the older setups, you get easier manual layout selection, improved camera switching based on voice activity detection, and improved diagnostics tools. You can use either two or three screens.

### Briefing room

- Supported products:

  - Board Pro G2
  - Room Kit EQ (Codec EQ), Room Kit EQX
  - Room Kit Pro (Codec Pro)
  - Room Bar Pro
  - Room 70 G2
- The setup requires three screens, and the layouts on the screens are preconfigured (and fixed) to match that particular scenario.

### Classroom

The _classroom_ setup is more flexible than the _briefing room_ setup regarding the number of screens and how the layout is distributed on the screens.

- Supported products:

  - Board Pro G2
  - Room Kit EQ (Codec EQ), Room Kit EQX
  - Room Kit Plus (Codec Plus), Room Kit Pro (Codec Pro)
  - Room Bar Pro
  - Room 55 Dual, Room 70, and Room 70 G2
- You can use any number of screens that the device supports, typically two or three. Use the video monitor settings to configure the distribution of layouts on the screens if the default behavior doesn't fulfill your requirements.

## Required equipment

**One of the following devices:**

- Board Pro G2
- Room Kit EQ (Codec EQ), Room Kit Pro (Codec Pro)
- Room Bar Pro
- Room Kit EQX, Room 70 Single G2, Room 70 Dual G2

**Three screens:**

- _Remote presenter display:_ First screen, placed at the front. For integrated devices with two screens, the left screen is the remote presenter display.
- _Presentation display:_ Second screen, placed at the front. For integrated devices with two screens, the right screen is the presentation display.
- _Remote audience display:_ Third screen, placed on the side or at the back, so that a local presenter can see the remote audience.

**Two cameras:**

- _Audience camera:_ Use the integrated camera for devices that have that. For other devices, we recommend the Quad Camera or SpeakerTrack 60 camera. We recommend a camera that supports speaker tracking, but it is also possible to use a camera without speaker tracking capabilities.
- _Presenter camera:_ A PTZ 4K or Precision 60 camera with presenter tracking enabled.

**Microphones:**

- We recommend a Cisco Ceiling Microphone for good coverage of the room. You can also set up other microphone solutions.

**Speakers:**

- Use the integrated speakers for devices that have that. For other devices, we recommend good quality stereo speakers placed next to the _presentation display_ and the _remote presenter display_ at the front of the room.

**Cisco touch controller**

## Briefing room setup limitations

The briefing room setup doesn't support this functionality:

- Directional audio
- Snap to whiteboard

## Room arrangement examples

These diagrams show examples of how to arrange screens, cameras, and microphones, and where to place people for the best experience.

## Connect cables

Connect the cameras and screens to the device as shown in the diagrams. Following the diagram ensures that the configurations that are automatically pushed to the device when you select the briefing room room type template, match your actual room setup.

### Board Pro G2

The device's integrated camera is the _audience camera_.

### Codec Pro

If the _audience camera_ is a SpeakerTrack 60 camera, connect it both to camera inputs 1 and 2 (HDMI) on the codec.

### Room 70 Single G2 and Room 70 Dual G2

Keep all preconnected cables, including the cables for the integrated camera and screens, as delivered from the factory. You only have to connect the external screens and cameras.

External screens and cameras:

- _Remote audience display_ (for Room 70 Single G2 and Room 70 Dual G2)
- _Presentation display_ (for Room 70 Single G2)
- _Presenter camera_ (for Room 70 Single G2 and Room 70 Dual G2)

### Codec EQ

### Room Kit EQX

Keep all preconnected cables, including the cables for the integrated camera and screens, as delivered from the factory. You only have to connect the external screens and cameras.

External screens and cameras:

- _Remote audience display_
- _Presenter camera_

### Room Bar Pro

The device's integrated camera is the _audience camera_.

## Configure the device

We recommend you to be in the same room when setting up the briefing room. Otherwise, it is difficult to set up PresenterTrack properly.

| 1 | Use the touch controller to stop sharing the video from the _presenter camera_. It is important that video from the _presenter camera_ is not displayed on any screen while setting up briefing room.                                                                                                                                                                                                                 |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From the customer view in [https:/​/​admin.webex.com](https://admin.webex.com), go to the Devices page, and click on your device in the list. Under Support, click Local Device Controls to launch the local device web interface. If you have set up an _Admin_ user locally on the device, you can access the device web interface directly. Just open a web browser and type in http(s)://<device ip or hostname>. |
| 3 | Go to Settings, open the Configurations tab, and navigate to the Video \> Input \> Connector 3 section and set the following: InputSourceType: camera PresentationSelection: Manual Quality: Motion Visibility: Never CameraControlMode: On  Click Save for the changes to take effect.                                                                                                                               |
| 4 | Go to Settings, open the Audio and Video tab, and click Presenter Track. Then, follow the instructions on the web page to set up the PresenterTrack feature. This feature enables the camera to follow a presenter that is moving about on stage.                                                                                                                                                                     |
| 5 | Go to Settings, open the Configurations tab, and navigate to Cameras \> PresenterTrack \> PresenterDetectedStatus. Then, choose whether to enable (default) or disable automatic switching between _local presenter_ and _remote presenter_ modes. Regardless of this setting, the room mode will not change automatically when in _discussion_ mode. Click Save for the changes to take effect.                      |
| 6 | Go to Settings and open the Room Types tab. Then, click the Briefing thumbnail to push the corresponding configuration to the device.                                                                                                                                                                                                                                                                                 |

## Switching between room modes

Switching between room modes (_local presenter_, _remote presenter_, _discussion_), which implies that camera input sources, and remote and local screen layouts, are changed, can be done in two ways: 

- Manually, using the buttons on the touch controller.
- Automatically, based on who is speaking and whether a local presenter is present on stage. Automatic switching is only between the _local presenter_ and _remote presenter_ modes. The room mode doesn't change automatically if the current mode is _discussion_. You can disable all automatic switching by setting Cameras PresenterTrack PresenterDetectedStatus to Disabled.  
Automatic switching is supported only when the PresenterTrack feature is enabled (Cameras PresenterTrack Enabled set to True).

Automatic switching implies:

- The device switches to the _local presenter_ mode when a person is detected in the PresenterTrack trigger zone.
- The device switches to the _remote presenter_ mode when the local presenter, who is tracked, leaves the stage.
- If someone in the local audience asks a question when the device is in _local presenter_ mode, the device sends split-screen video showing both the presenter and the person asking the question. This behavior requires a Quad Camera or SpeakerTrack 60 camera as _audience camera_, and that speaker tracking is switched on.
