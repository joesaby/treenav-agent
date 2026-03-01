---
title: "Accessibility on Board, Desk, and Room Series devices"
product: "Devices"
article_id: "n5jo8f5"
url: "https://help.webex.com/en-us/article/n5jo8f5/Flashing-Screen-for-Incoming-Calls-On-Room-and-Desk-Devices-and-Webex-Boards"
last_updated: "2026-01-20"
description: "Learn about accessibility features that are available on Board, Desk, and Room
Series devices."
tags: ["devices"]
source: "help.webex.com"
---

# Accessibility on Board, Desk, and Room Series devices

Board, Desk, and Room Series devices support several accessibility features for users with vision impairment or hearing loss.

This article covers how to:

- Set up and use the screen reader.
- Enable flashing screen for incoming calls.

For details about accessibility conformance on Board, Desk, and Room Series devices, see the [voluntary product accessibility templates](https://www.cisco.com/c/en/us/about/accessibility/voluntary-product-accessibility-templates.html). 

## Screen reader

The screen reader is a practical, straightforward tool that improves the accessibility of video devices. The screen reader provides audible feedback for on-screen interactions and changes, and ensures that vision impaired users can operate collaboration devices. 

The screen reader is available by default on all devices and can be turned on in the accessibility settings menu. It can be disabled by an administrator.

On shared devices, the screen reader is turned off after the device goes into standby mode. This timer can be configured by an administrator.

On personal mode devices, the screen reader can be set on permanently from the Settings menu on the device. Tap the settings  button on the homescreen and go to Device settings \>  Accessibility and toggle on Screen reader.

### Languages

The screen reader is available in the following languages:

- English (United Kingdom)
- English (United States)
- French (Canada)
- French (France)
- German
- Italian
- Spanish (Latin America)
- Spanish (Spain)

If the UI language is not supported for the screen reader, it defaults to English and you get a notification that the language is not available. 

When the screen reader is on, you can only choose from the available languages in the Language section of the Settings menu.

### Gestures

Use these gestures on the interactive screen of the device.

| Gesture                           | To                                                                                                                                                                                                                                                                                                   |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Drag downwards with three fingers | Turn screen reader on and off.                                                                                                                                                                                                                                                                       |
| Single tap anywhere on screen     | The device reads back to you what you have tapped. This also makes the focus move to the element you tapped on.                                                                                                                                                                                      |
| Double tap anywhere on screen     | When an element has the focus, you can activate that element by double tapping. If you double tap on text (which is not intractable) nothing happens.                                                                                                                                                |
| Swipe left/right                  | The focus on the UI shifts left/right according to your swipe.                                                                                                                                                                                                                                       |
| Swipe up/down                     | Adjusts slider if the highlight is on a slider. If not, the swipe up/down gesture swipes between headings.                                                                                                                                                                                           |
| Drag and release                  | You can drag your finger around on the screen to move the highlight around, and whatever you pass on your way will be announced. When doing this on the keyboard, the key you release your finger on top of will be typed (except the Call button on the keyboard).                                  |
| Tap with two fingers              | Notifications and pop-ups that appear on the screen are announced without user interaction. To stop these announcements, tap with two fingers. Notifications are used for incoming calls, participant left or joined the meeting, PIN pairing codes that appear on the device's screen, and similar. |

### Administration

As an administrator, you can configure the screen reader behavior. 

You can enable or disable the ability to use the screen reader on a device with _UserInterface Accessibility ScreenReader Gesture_.

**Value-space:** <_Off_, _On_\>

- _On_: Three finger gesture works.
- _Off_: Three finger gesture does not work.

**Default:** _On_

You can set what the device does when it goes to standby or half-wake with _UserInterface Accessibility ScreenReader Default Mode_. This configuration requires that _UserInterface Accessibility ScreenReader Gesture_ is set to _On_.

**Value-space:** <_Current_, _Off_, _On_\>

- _On_: The screen reader is turned on when the device goes into half-wake or standby mode.
- _Off_: The screen reader is turned off when the device goes into half-wake or standby mode.
- _Current_: Half-wake and standby mode do not affect the screens reader settings that are made from the device. If it has been turned on, it stays on even though the device goes into half-wake or standby mode.

**Default:** _Off_

If using the API, the _xCommand UserInterface Accessibility ScreenReader Set Mode_ can be used to enable and disable the screen reader.

**Parameters:** <_On_, _Off_\> (required)

_On_: Enables the screen reader.

_Off_: Disable the screen reader.

You can either:

- Set the configuration on one device.
- Set the configuration on multiple devices.
- Use configuration templates.
- Use default configurations for your organization or location.

For more details on the different ways to set configurations, see the [Device configurations for Board, Desk, and Room Series devices](https://help.webex.com/en-us/n5pqqcm/) article.

### Known issues and limitations

- Text field input doesn't work optimally.
- Some words can be mispronounced.
- Using the screen reader on a device with two touch screens, such as a Board with a Room Navigator connected to it, does not work optimally.
- Using the screen reader on devices in companion mode is not supported.
- Using the screen reader inside the web engine does not work.

## Flashing screen for incoming calls

You can set up the device screen to flash when a call is coming to make it easier for users with hearing loss to notice when someone is calling them. 

When this setting is configured, the device screen flashes when someone calls it.

| To enable flashing screen, set _User Interface Accessibility Incoming Call Notification_ to _AmplifiedVisuals_. |
| --------------------------------------------------------------------------------------------------------------- |

You can either:

- Set the configuration on one device.
- Set the configuration on multiple devices.
- Use configuration templates.
- Use default configurations for your organization or location.

For more details on the different ways to set configurations, see the [Device configurations for Board, Desk, and Room Series devices](https://help.webex.com/en-us/n5pqqcm/) article.
