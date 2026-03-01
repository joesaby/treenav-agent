---
title: "Configure wireless sharing with Miracast®"
product: "Devices"
article_id: "w60modb"
url: "https://help.webex.com/en-us/article/w60modb/Configure-wireless-sharing-with-Miracast"
last_updated: "2025-09-19"
description: "Enabling Miracast® allows meeting participants to share content wirelessly from
their laptop to a Cisco Board, Desk, or Room Series device without the need for
a client."
tags: ["devices"]
source: "help.webex.com"
---

# Configure wireless sharing with Miracast®

When enabled, Miracast uses Wi-Fi Direct to establish a direct network connection from a meeting participant’s laptop to the Cisco device. There is no need to connect to a guest network or enterprise Wi-Fi as the solution uses Wi-Fi Direct. Miracast sharing on Wi-Fi Direct is using the 2.4 GHz band only.

As of RoomOS release 11.8, Cisco devices also support Miracast over infrastructure (MS-MICE).

For the user, the procedure is the same, whether connecting via Wi-Fi Direct or via MS-MICE.

With Miracast MS-MICE, the sharing occurs via the existing infrastructure (Wi-Fi or Ethernet). MS-MICE also allows completely wired Miracast sharing, if both peers are connected to the same network. The only requirement is that Wi-Fi must be enabled on the Windows device for discovery.

MS-MICE allows for a more predictable Wi-Fi spectrum utilization as Wi-Fi Direct is not randomly interfering with the existing Wi-Fi radio planning, except for sending out beacons. The connection setup is faster than with Wi-Fi Direct and the media quality tends to be higher. MS-MICE also introduces an extra layer of security (DTLS encryption of RTP/UDP media) in addition to the existing infrastructure security mechanisms.

**Quality of Service:** 

Miracast sets DSCP markings by default to CS5\. This can be used to provide QoS in the infrastructure to handle packet bursts and to provide priority packet handling for minimal network delay.

**Security:** 

To prevent potential man-in-the-middle (MITM) attack, it is recommended that the network infrastructure provides IPv4 ARP/IPv6 NDP anti-spoofing.

Before enabling Miracast, check the firewall settings and make sure that:

- TCP Port 7236  is open on Windows devices for Wi-Fi Direct
- TCP port 7250  is open on Windows devices for MS-MICE

Miracast over Wi-Fi Direct is supported by:

- Windows 8.1 and greater
- Android 4.2 and greater

Miracast over infrastructure (MS-MICE) is supported by:

- Windows 10 v1809 and greater

Google (Pixel) Android and Chromebook devices do not support Miracast.

This feature is supported on Board, Desk, and Room Series devices (radio version) when on a cabled network connection. Even when enabled, Miracast will not be available on devices connected to a wireless network. If the device has an external Wi-Fi antenna, such as Room Kit Pro, this should be mounted. Users can share from Windows and Android devices. 

**Configuration** 

When activating wireless sharing with Miracast, you can also define whether or not end users are allowed to activate or deactivate the feature themselves. You might want to prevent users from changing the setting themselves to ensure a consistent experience in the meeting room. Or, you might want to allow users to toggle the setting on and off on a Cisco device they use at home.

You can configure wireless sharing with Miracast from the device's local web interface, or from Control Hub:

1. Access the device's web interface or Control Hub. See the [Device Configurations article ](https://help.webex.com/en-US/article/n5pqqcm/Device-Configurations-for-Room-and-Desk-Devices-and-Webex-Boards) for more information.
2. Select the following configuration Video > Input > Miracast > Mode .
3. Select a setting:

  - On . Miracast is activated by default and end users can't deactivate it.
  - Off . Miracast is deactivated by default and end users can't activate it.
  - Manual . Miracast is deactivated by default, but end users can toggle it on and off themselves from the device's Settings menu > Screen and Video > Miracast .
4. Optionally, scroll to SystemUnit  and enter the device BroadcastName  as it appears in the Miracast scan list on sender devices. If you don't define a name, Miracast will use the Webex DisplayName of the device.
5. Save  your changes before closing the web interface or Control Hub.

**Media Transport Configuration** 

You can configure how the media is transported for the Miracast share - via Wi-Fi Direct or MS-MICE:

1. Access the device's web interface or Control Hub. See the [Device Configurations article ](https://help.webex.com/en-US/article/n5pqqcm/Device-Configurations-for-Room-and-Desk-Devices-and-Webex-Boards) for more information.
2. Select the following configuration Video > Input > Miracast > Transport
3. Select a setting:

  - Auto. Transport is set to over infrastructure (Wi-Fi or Ethernet) for Windows devices, with automatic fallback to Wi-Fi Direct if the infrastructure mode fails. This is the default setting.  
  Android devices still only use Wi-Fi Direct with this setting.
  - Infrastructure. Transport is set to MS-MICE only. (Except for the Miracast beacons that are still emitted). Ensures that Miracast is not causing interference with existing Wi-Fi infrastructure.  
  The following devices will not be able to connect:

    - Android
    - Windows devices not on the same LAN as Webex (guest share)
    - Windows devices connected to an unencrypted Wi-Fi network (WPA2/WPA3)
    - Windows versions prior to Windows 10 v1809
  - Direct. Transport is set to Wi-Fi Direct.
4. Save your changes before closing the web interface or Control Hub.

Detailed information about each setting is available in the [Cisco Board, Desk, and Room Series API Reference Guide ](https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html).
