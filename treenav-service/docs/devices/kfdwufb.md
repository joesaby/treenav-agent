---
title: "Wireless sharing with Miracast®"
product: "Devices"
article_id: "kfdwufb"
url: "https://help.webex.com/en-us/article/kfdwufb/Wireless-sharing-with-Miracast"
last_updated: "2025-11-11"
description: "When Miracast® is enabled, you can share content wirelessly from your laptop to
a Cisco Board, Desk, or Room Series device without the need for a client."
tags: ["devices"]
source: "help.webex.com"
---

# Wireless sharing with Miracast®

Miracast uses Wi-Fi Direct to establish a direct network connection from your laptop to your Cisco device, so that you can share content wirelessly. This works both in and out of calls: to share in-call, start the call first. Making or receiving a call during an active share will disconnect your Miracast session.

As of RoomOS release 11.8, Cisco devices also support Miracast share over infrastructure (MS-MICE), which means that the Miracast share uses the existing network infrastructure (Wi-Fi or Ethernet) to transport the media instead of Wi-Fi Direct.

Your system administrator sets this up. For you as a user, it doesn't matter which way your system is configured, your experience is the same with both options.

Miracast sharing is [activated or deactivated by your system administrator ](https://help.webex.com/article/w60modb/Configure-wireless-sharing-with-Miracast%C2%AE). Depending on the setup, you might be able to toggle it on or off yourself on the device from the Device settings  and selecting Miracast  under Screen and video.

Sharing with Miracast supports touch forwarding, on all touch screen devices running on RoomOS 26. That means you can control your laptop screen - for example, moving through your content - directly from your device's touch screen.

You can share from Windows and Android devices.

Before enabling Miracast, your Administrator should check firewall settings and verify that:

- TCP port 7236  is open on Windows devices for Wi-Fi Direct
- TCP port 7250  is open on Windows devices for MS-MICE

Note that both MS-MICE and Wi-Fi Direct use RTSP, which means the TCP port 7236 must be open on the sender's device.

Miracast sharing on Wi-Fi Direct is using the 2.4 GHz band only.

Miracast over Wi-Fi Direct is supported by:

- Windows 8.1 and greater
- Android 4.2 and greater

Miracast over infrastructure (MS-MICE) is supported by:

- Windows 10 v1809 and greater

Google (Pixel) Android and Chromebook devices do not support Miracast.

**Sharing from a Windows device** 

To start a Miracast share from a Windows  device:

1. On your laptop press Windows+K , or click the Action Center  icon and then click Connect . Windows will scan for Miracast receivers.
2. Click on the Board, Desk, or Room Series device you want to cast to. A PIN will appear on the device's screen.
3. Enter the PIN on your laptop and click Connect .

  1. When **in call**, an auto share pop up appears, showing a five-second countdown before the sharing starts.  
  During the countdown you can cancel the share.
  2. Outside a call, the sharing starts immediately.
4. Sharing starts.

Reopen the Action Center > Connect  list and select the connected device to disconnect it, or to change the Projection Mode . For example, you'd select Extend  if you want to show slides on the device, but keep meeting notes on your laptop screen only. 

**Sharing from an Android device** 

To start a Miracast share from an Android  device:

1. On a Samsung device, open the Settings  menu and select Smart View  or Dex . Note that the naming is different on other Android devices.
2. Click on the Board, Desk, or Room Series device you want to cast to. A PIN will appear on the device's screen.
3. Enter the PIN on your Android device.
4. Click Connect .  

  1. When **in call**, an auto share pop up appears, showing a five-second countdown before the sharing starts.  
  During the countdown you can cancel the share.
  2. Outside a call, the sharing starts immediately.
5. Sharing starts.
