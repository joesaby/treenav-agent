---
title: "Configure kiosk mode on Board and Desk Series devices"
product: "Devices"
article_id: "ol1th3"
url: "https://help.webex.com/en-us/article/ol1th3/Configure-Kiosk-mode-on-Board-and-Desk-Series-devices"
last_updated: "2025-02-18"
description: "Turn your Cisco device into a kiosk that provides a custom interface for your
users."
tags: ["devices"]
source: "help.webex.com"
---

# Configure kiosk mode on Board and Desk Series devices

Kiosk mode lets you replace the home screen on your Cisco device with your own custom web application that you host and maintain yourself. 

Kiosk mode is not supported on DX70 or DX80.

As an example, kiosk mode can be used in reception areas where you want to display your own branding to enhance the first-time experience, while controlling the user experience on the Cisco device. 

Setting the device to kiosk mode makes it possible to disable the non-video functions, such as whiteboarding and screensharing, and to prevent users from changing the device settings. 

_Typical flow of a kiosk use case:_ 

In kiosk mode, you can still make calls with the device. In a call, the user experience is the same as in any call, but as soon as the call is ended, the device goes back to the kiosk web app. 

Typical use cases could be:

- Virtual receptionist
- Visitor registration
- Facility overview
- Remote expert services

## Configure kiosk mode

Set up the device for kiosk mode through the xAPI. 

1. Start by enabling the web engine, which is necessary for displaying web apps.  
`xConfiguration WebEngine Mode: On`
2. Specify the URL of your web app.  
`xConfiguration UserInterface Kiosk URL: "www.cisco.com"`  
If the kiosk is not able to access the URL, it will display a service mode page. The page also displays the IP address of the device and a retry button.
3. Turn on kiosk mode.  
`xConfiguration UserInterface Kiosk Mode: On`  
You should now see your web app as the new home screen.

## Recommended settings

You can fine-tune your device's behavior by setting configurations through the xAPI. We recommend you always set the following:

1. Lock access to items on the **Settings** panel. Settings that require authentication display a padlock icon.  
`xConfiguration UserInterface SettingsMenu Mode: Locked`  
`xConfiguration UserInterface Security Mode: Strong`  
This requires that you set a passphrase for all user accounts with administrator rights.
2. Disable the voice assistant:  
`xConfiguration UserInterface Assistant Mode: Off`
3. Turn off ultrasound to prevent Webex apps from pairing with the device:  
`xConfiguration Audio Ultrasound MaxVolume: 0`

## Allow calls

To allow for making calls from your web app, turn on the SIP URL handler setting: 

- `xConfiguration WebEngine Features SipUrlHandler: On`

Then, you can add links to your web app using the `sip` protocol. For example: 

- `<a href="sip:erica.talking@ivr.vc">Call Erica</a>`

## Allow accessing the Settings panel

The Settings panel is hidden when the device is in kiosk mode. As an admin user, you may want to access it and see the IP address, diagnostic messages, or other settings. To open the Settings panel, tap _three_ times with _three_ fingers on the screen. 

This gesture is not intended as a security feature but is just to reduce the chance of inadvertent changes being made to the settings. To further reduce this risk, you can lock the Settings panel with: 

- `xConfiguration UserInterface SettingsMenu Mode: Locked`
- `xConfiguration UserInterface Security Mode: Strong`

## Set up cable preview when not in a call

When the device is not in a call, there's no on-screen control for the local cable preview.

If `xConfiguration Video Input Connector [X] PresentationSelection` is set to `Desktop`, `OnConnect`, or `AutoShare`, the cable preview continues unless you disconnect the cable or use the command `xCommand Presentation Stop`. This is the only way to return to the main kiosk page.

When `xConfiguration Video Input Connector [X] PresentationSelection` is set to `Manual`, cable connection won't show content. To preview content, use `xCommand Presentation Start`. Stop by disconnecting the cable or using x`Command Presentation Stop`.

During a call, use the RoomOS interface and the Share button to control cable sharing.

## Other settings

In kiosk mode, the device never enters half wake state, but it will go to standby after the specified number of minutes. To disable standby mode: 

- `xConfiguration Standby Control: Off`

You can further tune your settings to whatever makes sense for the location and use of your kiosk. For example, to enable noise removal: 

- `xConfiguration Audio Microphones NoiseRemoval Mode: Enabled`

You can disable speaker tracking, for example: 

- `xConfiguration Cameras SpeakerTrack Mode: Off`

To hide the standard in-call buttons: 

- `xConfiguration UserInterface Features HideAll: True`

 Or, to hide specific buttons, for example: 

- `xConfiguration UserInterface Features Call End: Hidden`
- `xConfiguration UserInterface Features Share Start: Hidden`

## Restore the kiosk after each user

Ensure that your web app restores the kiosk to the home screen after a few minutes of inactivity. 

This can be done with common web patterns, such as listening for touch events on the body element of the web page, resetting a timer each time a user touches the screen, and resetting the kiosk, if the timer reaches zero.
