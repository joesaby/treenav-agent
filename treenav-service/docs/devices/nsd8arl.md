---
title: "Join Microsoft Teams Meetings on Board, Desk, and Room Series"
product: "Devices"
article_id: "nsd8arl"
url: "https://help.webex.com/en-us/article/nsd8arl/Join-a-Microsoft-Teams-meeting-from-Board-Desk-and-Room-Series-with-WebRTC"
last_updated: "2026-01-05"
description: "Join a Microsoft Teams meeting with One Button to Push (OBTP) or by tapping the
Microsoft Teams button directly on your device."
tags: ["devices", "hybrid-services"]
source: "help.webex.com"
---

# Join Microsoft Teams Meetings on Board, Desk, and Room Series

You can join Microsoft Teams meetings from your device with Cloud Video Interop (CVI) using Cisco Video Integration for Microsoft Teams (VIMT) or Direct Guest Join (WebRTC). You can join a Microsoft Teams meeting hosted by your own company, or a different company or tenant directly from your device using the Microsoft Teams button.

For company meetings, use the CVI Video ID, which can be found at the bottom of each Microsoft Teams invite. If the meeting is hosted by another company or tenant without a Video ID, join using the Microsoft Teams Meeting ID and Passcode. Detailed instructions on how to join are provided below.

Your system administrator sets up this service; both options may not be available and depend on the type of device you have.

You can also join with One Button to Push (OBTP). When users schedule Microsoft Teams meetings and include Cisco devices, a green Join button appears on the devices before the meeting begins. OBTP works whether your device is configured with WebRTC or CVI.

Cross-tenant OBTP for Microsoft Teams meetings is available when using VIMT. However, until Microsoft releases the new _Teams Short Join URL_, there may be issues parsing meeting invites with extensive content or non-standard formats. If parsing fails, the device may default to using WebRTC to join the meeting.

- [Join Microsoft Teams meetings](#sprkbd%5Ft%5Fjoin%5Fms%5Fteams%5Fmeetingid)
- [Join Microsoft Teams meetings with OBTP](#Cisco%5FGeneric%5FTopic.dita%5Face79bd7-261f-4f82-b8a1-dffac670974a)
- [Limitations](#sprkbd%5Fr%5Flimitations%5Fms%5Fteams)

Join a Microsoft Teams meeting directly on your Cisco device by tapping the Microsoft Teams button. 

Joining with Video ID

 When you enter the Video ID, the system combines this information with the default hostname to create the correct meeting address (SIP URI). This also allows you to quickly join VIMT calls using the Video ID. This configuration is managed by your organization's administrator.

1. Tap the Microsoft Teams button.
2. Enter the Tenant key and Video ID provided in the Microsoft Teams meeting invitation, and press Join.

Once in the meeting, your device displays the video stream from Microsoft Teams on up to two screens (with grid, stack, overlay, focus, prominent, or large gallery layout) and the call controls. For more information on layouts on Cisco devices, see [Screen layouts for Cisco devices](https://help.webex.com/en-us/zp1dhab/Webex-Rooms-Video-Stream-Layouts). The participant list is available, indicating who is muted. The recording indicator appears on screen when the meeting is recorded. When a presentation is shared, the device displays the presentation from layouts. If you're joining with VIMT, two-way content sharing is available. However, the content shared on screen is not interactive.

VIMT Cross-Tenant join

With the Video Integration for Microsoft Teams (VIMT), you can now use Cross-Tenant Join to a layouts meeting hosted by a different business or Teams tenant directly from your device using the layouts button.

This join method gives you the VIMT meeting experience on devices instead of using WebRTC Direct Guest Join:

- Dual screen support
- Two-way content sharing
- Better video capabilities and features

Joining with Meeting ID

Joining with Meeting ID will use WebRTC Direct Guest Join or Cross-Tenant Join for VIMT when it is available. You need the Microsoft Teams meeting ID and the passcode provided in your calendar invite to join with your device. 

For the best experience, use the CVI Video ID to join Teams meetings if it is shown in the invite, especially for your company's meetings, as this allows for lobby bypass and presenter capabilities.

This feature is enabled by default, but admins can change the visibility of this option. 

1. Tap the Microsoft Teams button on your home screen.
2. Select I don't have a Video ID. Enter the meeting ID and the passcode, and press Join. The call controls and the self-view fade away after a few seconds.
3. When joining a meeting hosted by another company, you have to be admitted from the lobby by the Microsoft Teams host.  
If you're joining with Direct Guest Join WebRTC: When a presentation is shared, the device displays the presentation from Microsoft Teams. However, you can't share content and the content is not interactive. On dual screen Room Series devices, the second screen isn’t used.  
If you're joining with **VIMT Cross-tenant join**: Two-way content sharing is available. However, the content shared on screen is not interactive. On dual screen Room Series devices, the second screen is used.

To join a Microsoft Teams meeting on your device:

1. Before the meeting starts, your device or Touch controller displays the Join button. Tap it to enter the meeting.
2. If your device is joining with Direct Guest Join (WebRTC): The call controls and the self-view fade away after a few seconds. When a presentation is shared, the device displays the presentation from Microsoft Teams. However, the content shared on screen is not interactive and you can't share content from the device. On dual screen Room Series devices, the second screen isn’t used.  
If your device is joining with CVI: Your device displays the video stream from Microsoft Teams on up to two screens (with the layouts: grid, stack, overlay, focus, prominent, large gallery) and the call controls. For more information on layouts on Cisco devices, see [Screen layouts for Cisco devices](https://help.webex.com/en-us/zp1dhab/Webex-Rooms-Video-Stream-Layouts). The participant list is available, indicating who is muted or who has raised their hand. The recording indicator appears on screen when the meeting is recorded and other notifications will be shown. Two-way content sharing is availavle, however the content shared is not interactive.

Microsoft Teams calls do not appear in the Recent Calls list when dialed from the touch panel or user interface. As a result, redialing these calls directly from the Recents section is not supported. This change was implemented to prevent potential exposure of sensitive information.

WebRTC is available on devices that support the web engine. 

WebRTC isn't supported:

- In classroom setup
- On Panorama
- With the SpeakerTrack 60 when SpeakerTrack is enabled

These features aren't available during the meeting when joining with WebRTC:

- Sharing wirelessly or with an HDMI
- Whiteboarding
- Far-end camera control
- Participant list
- Devices with dual screens show the meeting on the main display

The features aren't available during the meeting when joining with CVI:

- In classroom setup
- One-way whiteboarding is not available on DX80
- Two-way whiteboarding
- Far-end camera control
