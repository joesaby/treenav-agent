---
title: "Troubleshoot your Cisco Room Phone"
product: "Devices"
article_id: "nx0rg15"
url: "https://help.webex.com/en-us/article/nx0rg15/Troubleshoot-Your-Webex-Room-Phone"
last_updated: "2026-01-23"
description: "Here&#x27;s what you need to know about troubleshooting the Cisco Room Phone."
tags: ["devices"]
source: "help.webex.com"
---

# Troubleshoot your Cisco Room Phone

Use the information in the following articles as you troubleshoot your device.

[Reboot the phone](#task%5F2ACCA601D8CCECD7D82DE52A3FCD0446)

You restart your device to apply a new configuration or setting. If you want to restore the original factory settings, then do a reset instead. 

| 1 | Tap the top-left corner of the phone screen.                   |
| - | -------------------------------------------------------------- |
| 2 | Tap Settings from the list of menu options.                    |
| 3 | Scroll through the menu options on the screen and tap Restart. |
| 4 | Tap Restart to confirm your intention.                         |

[Restart your device from Control Hub](#task%5FC23E93BBCB6DB9D9C3E173AD65F2F9EB)

You can restart your device if you are having a technical issue. A device restart from Control Hub doesn't affect your settings and it retains the log files.

If you do a power cycle, then you lose the recent version of the log files. This makes it difficult to troubleshoot so download the logs before you power cycle the device.

| 1 | From the customer view in <https://admin.webex.com/>, go to Devices.    |
| - | ----------------------------------------------------------------------- |
| 2 | Select your device from the inventory and open Advanced Configurations. |
| 3 | Click the search bar and select Maintenance \> Restart.                 |
| 4 | Select Restart from the drop-down list.                                 |
| 5 | Click Apply.                                                            |

[Send phone logs](#task%5F8C93EE772EBBC95AEB94111AC90E66E4)

You can generate and upload your phone logs to a server. Cisco technical services (TAC) use the logs when they troubleshoot your issue.

Your phone must be registered before you can generate your log files. 

| 1 | Tap the top-left corner of the phone screen.                                                                                                                                    |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Tap Settings from the list of menu options.                                                                                                                                     |
| 3 | Select Issues and diagnostics \> Send logs. The phone logs generated and are uploaded to a server. If successful, a message displays on the phone with the time and the log ID. |

[Reset the phone](#task%5FABF7E680B1D53525742FD5B7905DD1D9)

You can reset the phone to the factory defaults. The phone resets user and network setup settings to their default values and then restarts.

| 1 | Tap the top-left corner of the phone screen.                 |
| - | ------------------------------------------------------------ |
| 2 | Tap Settings from the list of menu options.                  |
| 3 | Scroll through the menu options on the screen and tap Reset. |
| 4 | Tap Reset or Cancel.                                         |

[Perform a manual factory reset](#task%5F3AF819D53285A9432E4CC24E99867C98)

If you can't do a factory reset from the Settings menu, then you can do factory reset from the phone itself.

| 1 | Disconnect the power from the phone in one of these ways: Unplug the LAN cable.Unplug the power adapter.                                                                                               |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Wait 5 seconds and reconnect the power.                                                                                                                                                                |
| 3 | Wait for the Standby LED to light up.                                                                                                                                                                  |
| 4 | Press and hold Volume Up for about 5 seconds. The LED bar turns red.                                                                                                                                   |
| 5 | Press Mute. If you don't press Mute in 10 seconds after the LED bar turns red, then the device reboots normally. The LED bar flashes three times as confirmation that the Factory Reset is in process. |

[Generate a problem report from Control Hub](#task%5F15FB5BE996BDC0679F0AEA3AAB29A132)

A Problem Report contains the device logs used by Cisco technical support services when troubleshooting problems. Submit a report if you have a firmware or hardware issue to report. 

| 1 | From the customer view in <https://admin.webex.com/>, go to Devices.                                                |
| - | ------------------------------------------------------------------------------------------------------------------- |
| 2 | Select your device from the inventory.                                                                              |
| 3 | Click Report issues. A Webex Help Center window opens in your browser.                                              |
| 4 | Enter a description of the issue in the description field of the help window. You have a maximum of 249 characters. |
| 5 | Click Submit.                                                                                                       |

[Network status](#reference%5FCECBB09268D1928802E99169384CC5E9)

The network status displays at the top of the Network connection screen on the phone and it shows if your device can connect to the network. Use the following table to troubleshoot your network connection. 

__Table 1\. Network status__
| Status                        | Meaning                                                                                                                        | Notes                                                                                                                                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Network connected.            | The phone has an IP address.                                                                                                   | Your phone is connected to your network.                                                                                                                                                                                                          |
| Network disconnected.         | The phone doesn't have an IP address.                                                                                          | Network or connectivity issues do not display in the status messages log.                                                                                                                                                                         |
| Network reconnecting.         | The phone retrieves the IP address.                                                                                            | —                                                                                                                                                                                                                                                 |
| DNS not configured.           | The phone is missing a Domain Name System (DNS) address. If available, the phone uses the first available DNS and domain name. | If you have a DNS error, then you see a red dot ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/447001-448000/447453.jpg) on the home screen. DNS errors don't display in the status messages log. |
| 802.1x authentication failed. | The phone fails 802.1x authentication.                                                                                         | The status messages log shows 802.1x as enabled or disabled.                                                                                                                                                                                      |
| Duplicated IPv4 address.      | The configured IPv4 address is not unique or the IPv4 address from DHCP server is not unique.                                  | —                                                                                                                                                                                                                                                 |

[View Webex connectivity information](#task%5FB625F41B4546ADC0FCD62436672D803F)

You can view information on the following Webex connection items. Use this information as you troubleshoot an issue:

- Calendar
- Configuration
- Credentials
- Encryption
- Geo location
- Metrics
- Notifications
- Phonebook
- Registration
- Software upgrade

| 1 | Tap the top-left corner of the phone screen.                 |
| - | ------------------------------------------------------------ |
| 2 | Tap Settings from the list of menu options.                  |
| 3 | Navigate Issues and diagnostics \> Webex connection details. |

[Access the device logs in AP mode](#task%5F2901A7DB0F6E9D85382B28BDB738F6CD)

If your device loses the IP address or fails to connect to the network, then it enters Hosted Access Point (AP) mode. This mode allows you to download the device logs from the device web page. Use the logs to troubleshoot your network issue. 

| 1 | Tap the top-left corner of the phone screen.                          |
| - | --------------------------------------------------------------------- |
| 2 | Tap Settings from the list of menu options.                           |
| 3 | Navigate Issues and diagnostics. Note the URL and log-in information. |
| 4 | Open a web browser and enter your URL and log-in information.         |
