---
title: "Manage discovery of nearby Webex devices"
product: "Devices"
article_id: "nz9iowf"
url: "https://help.webex.com/en-us/article/nz9iowf/Manage-discovery-of-nearby-Webex-devices"
last_updated: "2025-02-07"
description: "You can use Control Hub to manage how Webex App discovers Webex devices."
tags: ["devices"]
source: "help.webex.com"
---

# Manage discovery of nearby Webex devices

Webex App can use ultrasound or Wi-Fi to find devices, so users can pair with them for meetings or for sharing their screen. 

**What users see** 

These settings control what users can see in their [ Webex App Devices settings](https://help.webex.com/q7vr6m/). 

**About ultrasound-based device discovery** 

Webex devices emit ultrasound signals that Webex App can hear through your computer's microphone. This enables the app to connect to the nearest device. When this feature is enabled for your organization, users can individually choose whether to use it. 

You can choose from the following ultrasound discovery behaviors for your organization.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Under  Management , select  Organization Settings  \>  Discover Webex devices.  Use user's microphone when searching for devices—The user's laptop or desktop microphone only listens for ultrasound signals when they choose to connect to a device, and remains active while connected.  Always use user's microphone—The user's microphone continuously listens for ultrasound signals. They must manually connect to Webex devices.  Automatically connect to nearest device—Check this option to automatically connect to the nearest Webex device.  Do not use user's microphone —The user's microphone isn't used to listen for nearby devices. To connect, the user must search for a device and enter a PIN. Your changes take up to 24 hours to synchronize with clients. When you change the device discovery settings in Control Hub, the end user's client honors the Control Hub setting as the default setting. |
| 3 | Go to  Devices  and click  Settings . In the  Device Discovery  controls, enable or disable Enable devices suggestions based on Wi-Fi connectivity . This option is enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4 | If you want to allow your users to control ultrasound and device connection settings through Webex App, check  Allow users to edit their discover devices settings in Webex App.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

**About Wi-Fi based device discovery** 

When Wi-Fi-based device discovery is enabled in the Control Hub, you're giving us consent to collect certain non-personal information about your Wi-Fi environment, not your users. Every time your users connect to a paired device in Webex App using an ultrasound connection, information about WLAN proximity data is collected in the cloud. Service set identifiers (SSIDs) and basic SSIDs (BSSIDs) are used to identify the visible WLANs, store them in this database in the cloud, and later match them in the search matching operation. The WLANs are one-way hashed before transmitting so the server side can never read the human-readable SSID or MAC address.

When users choose to  Connect to a device  in Webex App, the app detects the presence of Webex devices as the users move about. That information gets uploaded to this database in the cloud. The Proximity Service finds up to 5 devices that are nearby by comparing the app's current WLAN environment to these stored observations. Users no longer have to manually search for devices to connect to. 

The list of devices that are within range is dynamic and updates based on a user's location.

We encrypt the following information and only use it to suggest available devices to users for automatic connection:

- In-range Wi-Fi network
- Wi-Fi access points
- Signal strength of the access points at the time of pairing

The above information is updated daily by devices and when Webex App connects using ultrasound discovery.
