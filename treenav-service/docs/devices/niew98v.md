---
title: "Enable copy-protected content on RoomOS"
product: "Devices"
article_id: "niew98v"
url: "https://help.webex.com/en-us/article/niew98v/Enable-HDCP-content-on-Board-and-Room-Series"
last_updated: "2025-04-11"
description: "You can configure one of the HDMI inputs on a Board or Room device to support
copy-protected content. Then you can also use the screen of the device to show
content from devices that deliver protected content."
tags: ["devices"]
source: "help.webex.com"
---

# Enable copy-protected content on RoomOS

Several RoomOS devices have the possibility to display DRM (Digital Rights Management) copy-protected content locally on the screen. Two types of copy-protected sources are supported:

- HDCP-protected content from a device connected to an HDMI input
- FairPlay-protected content using AirPlay from Apple devices.

RoomOS devices using external screens connected to HDMI output require screens that support HDCP. The integrated screens of certain Cisco devices support HDCP.

## HDCP content over HDMI input

You can configure one of the HDMI inputs on the Cisco device to support HDCP-protected (High-bandwidth Digital Content Protection) content. Then you can also use the device screen to display content from other devices that deliver HDCP content - such as a DVD player, a Google ChromeCast, an AppleTV, or an HDTV decoder.

Devices that support this feature 
- Board Pro and Board Pro G2
- Codec Plus (including Room Kit Plus), Room 55 Dual, and Room 70
- Codec Pro (including Room Kit Pro), Room 70 G2, Room 70 Panorama, and Room Panorama
- Codec EQ (including Room Kit EQ) and Room Kit EQX
- Room 55
Requirements and limitations 
- Supported version on HDMI input: HDCP - High-bandwidth Digital Content Protection, version 1.4.
- You can't share HDCP-protected content while in a call.
- The screens to display protected content on must support HDCP. The integrated screens of the Room devices support HDCP.
Details about HDMI inputs that support HDCP content 

The type of device determines which input you can configure to support HDCP-protected content.

- Board Pro and Board Pro G2: Input Connector 3 (HDMI)
- Codec Plus, Room 55 Dual, Room 70: Input Connector 2 (HDMI 2)
- Codec Pro, Room 70 G2, Room 70 Panorama, Room Panorama: Input Connector 5 (HDMI 5)
- Codec EQ, Room Kit EQX: Input Connector 3 (HDMI 3)
- Room 55: Input Connector 3 (HDMI 2)

When the input is configured to support HDCP, these restrictions apply:

- You can't share any content from this input while in a call. However, you can share both HDCP-protected content and non-protected content locally.
- You can’t take web snapshots of this source.
Configuration 

You can configure HDCP support from device configurations, the local web interface of the device, and using the API. Read the [ Device configurations ](https://help.webex.com/n5pqqcm/) article for more information on how to access the configurations.

For the device to support HDCP-protected content, you must set up both the input and output correctly.

1. Set the  Video  \>  Input  \>  Connector \[n\]  \>  HDCP  \>  Mode  configuration to **On** to allow HDCP-protected content from a source on this connector.  
You can configure only one HDMI input connector to support HDCP-protected content. Read more details below.
2. Check that the _Video > Output > Connector \[n\] > HDCPPolicy_ configuration isn't switched OFF. It must be ON to allow transmitting HDCP protected content on the connected screen.  
You can configure some HDMI outputs to support HDCP-protected content. Read more details below.

## FairPlay copy-protected content over AirPlay

FairPlay copy protected content shared over AirPlay from Apple devices will be displayed locally. It's not possible to share copy-protected content in a call. Not all RoomOS devices that support AirPlay support FairPlay copy protection. 

Devices that support this feature 
- Board Pro and Board Pro G2
- Codec Pro (including Room Kit Pro), Room 70 G2, Room 70 Panorama, and Room Panorama
- Codec EQ (including Room Kit EQ), and Room Kit EQX
- Room Bar and Room Bar Pro
- Desk Series devices
Configuration 

No extra configuration is needed to support 1080p FairPlay. High resolution (4K) FairPlay content requires HDCP 2.x. To enable current Cisco devices to negotiate a higher HDCP version than the default (HDCP 1.4), configure HDCP as follows:

- Via Web Interface: navigate to _Video > Output > Connector \[n\]_ and set the _HDCPForce1\_4_ configuration to OFF.

This command disables the forced HDCP 1.4 setting and ensures that HDCP 2.x is enabled for compatibility with 4K FairPlay content.

For more information on AirPlay, see [this article about AirPlay](https://help.webex.com/en-us/article/Configure-wireless-sharing-with-AirPlay) on RoomOS devices.

## Details about display outputs that support copy-protected content 

The type of device determines which outputs you can configure to support HDCP-protected content. HDMI-connected displays need to support HDCP. FairPlay additionally requires all active connected displays to support HDCP.

- Codec Plus, Room 55 Dual, Room 70: Output Connector 1 (HDMI 1)  
This is the integrated screen of Room 70 Single, and the left integrated screen of Room 55 Dual and Room 70 Dual.
- Room Bar, Codec Pro, Room 70 G2, Room 70 Panorama, Room Panorama: Output Connector 1 and 2 (HDMI 1 and 2)  
These are the main screens of Room Panorama and the integrated screens of Room 70 G2 Dual and Room 70 Panorama. Output Connector 1 is the integrated screen of Room 70 G2 Single.
- Room Bar Pro, Codec EQ, Room Kit EQX: Output Connector 1, 2, and 3 (HDMI 1, 2, and 3)
- Room 55, Board Pro, Board Pro G2, Desk Series: The integrated screen
