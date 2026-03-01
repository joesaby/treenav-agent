---
title: "Set up wireless LAN from your Cisco IP 8800 Series Multiplatform Phone"
product: "Devices"
article_id: "njkqp02"
url: "https://help.webex.com/en-us/article/njkqp02/Set-Up-the-Wireless-LAN-from-Your-Multiplatform-Phone-8800"
last_updated: "2024-11-30"
description: "You may need the flexibility to unplug your conference phone from the wired
network connection and remain connected. Network administrators can use this
article to deploy these phones in a wireless LAN environment."
tags: ["devices", "webex-calling"]
source: "help.webex.com"
---

# Set up wireless LAN from your Cisco IP 8800 Series Multiplatform Phone

## Set up wireless LAN from the phone

Only the Cisco IP Phone 8861 and 8865 support wireless LAN connections. 

Ensure that the phone is not connected to Ethernet. It requires a separate power supply.

A fast-secure roaming method is recommended for Wi-Fi users.

For complete configuration details, see the _Cisco IP Phone 8800 Wireless LAN Deployment Guide_ [here](https://www.cisco.com/c/en/us/support/collaboration-endpoints/unified-ip-phone-8800-series/products-implementation-design-guides-list.html).

The _Cisco IP Phone 8800 Wireless LAN Deployment Guide_ includes the following configuration information: 

- Wireless network configuration
- Wireless network configuration on the Cisco IP Phone

| 1 | Press Applications ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/380001-390000/381001-382000/381337.jpg).                                                                                                                                             |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Network configuration \> Wi-Fi configuration.                                                                                                                                                                                                                                     |
| 3 | Select Wi-Fi Type and press the Select button to choose from WLAN and WPS.                                                                                                                                                                                                               |
| 4 | In the Wi-Fi Profile screen, click Scan to get a list of available wireless networks (SSIDs). You can also click **Cancel** to stop the scan process. If your phone is associated with an SSID, the associated SSID appears at the top of scanned list with a check mark in front of it. |
| 5 | Select an SSID when the scan is complete, and set up the fields for your phone to connect to that network as described in the [Scan list menus](#reference%5F95D5C7706EBCE5BFBFE464F59C5DC68C) table.                                                                                    |
| 6 | (Optional) Press Other to add a new network name to which you want to connect your phone. Set up the fields as described in the [Wi-Fi other menu](#reference%5FA86A05140C9844912FF05F128CE84F88) table.                                                                                 |

## Scan list menus

| Field                       | Field Type or Choices | Default | Description                                                                                                                                                                                                                                       |
| --------------------------- | --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Security mode               | Auto None WEP PSK     | None    | Allows you to select the type of authentication that the phone uses to access the WLAN.                                                                                                                                                           |
| User ID                     |                       |         | Allows you to enter a user ID for the network profile.                                                                                                                                                                                            |
| Password WEP Key Passphrase |                       |         | Allows you to enter password for the network profile that you create. The type of password depends on the security mode that you have selected. Password: Security mode is Auto. Passphrase: Security mode is PSK. WEP Key: Security mode is WEP. |
| 802.11 mode                 | Auto 2.4 GHz 5 GHz    | Auto    | Allows you to select the wireless signal standard that is used in the WLAN.                                                                                                                                                                       |

## Wi-Fi other menu

| Field         | Field Type or Choices                          | Default | Description                                                                               |
| ------------- | ---------------------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| Security mode | EAP-FAST PEAP-GTC PEAP (MSCHAPV2) PSK WEP None | None    | Allows you to select the type of authentication that the phone uses to access the WLAN.   |
| Network name  |                                                |         | Allows you to enter a unique name for the Wi-Fi profile. This name displays on the phone. |
| User ID       |                                                |         | Allows you to enter a user ID for the network profile.                                    |
| Password      |                                                |         | Allows you to enter a password for the network profile.                                   |
| 802.11 mode   | Auto 2.4 GHz 5 GHz                             | Auto    | Allows you to select the wireless signal standard that is used in the WLAN.               |
