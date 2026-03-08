---
title: "Troubleshoot your Cisco Video Phone 8875"
product: "Devices"
article_id: "bs63leb"
url: "https://help.webex.com/en-us/article/bs63leb"
last_updated: "2025-02-08"
description: "Here&#x27;s what you need to know about troubleshooting your Cisco Video Phone 8875
that are deployed on Cisco BroadWorks or Webex Calling."
tags: ["devices", "webex-calling", "webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# Troubleshoot your Cisco Video Phone 8875

[Find information about your phone](#task-template%5F68eab9c5-4282-4fe2-ab69-f7202a3dbab5)

Your administrator may ask for information about your phone. This information uniquely identifies the phone for troubleshooting purposes.

Before you begin

| 1 | Press Settings ![the Settings key](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478218.png).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | If prompted, enter the password to access the Settings menu. You can get the password from your administrator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3 | Select About this device. You can view the following information: Product name—Name that represents the phone. Serial number—Serial number of the phone. MAC address—Unique Media Access Control (MAC) address of the phone. IPv4 address—Internet Protocol Version 4 (IPv4) address of the phone. IPv6 address—Internet Protocol Version 6 (IPv6) address of the phone. Active server—IP address of the active Cisco Unified Communications Manager (CUCM) server. Standby server—IP address of the standby CUCM server. Software version—Version number of the phone firmware. Last upgrade—Information about the last upgrade or status of the software download progress. Hardware version—Version number of the phone hardware. VID—Version ID of the phone.Certificate—The status of certificate installation: Installed or Uninstalled. This item is available only on phones registered to Cisco BroadWorks or Webex Calling.Customization—The status of onboarding with EDOS or GDS. This item is available only on phones registered to Cisco BroadWorks or Webex Calling. The status can be one of the following statuses:Aborted: The device has been provisioned through the phone web page or the phone screen. The onboarding process through EDOS and GDS is discarded.Acquired: The device has downloaded configuration from the EDOS server.GDS-Acquired: The device has downloaded configuration from the GDS server. |
| 4 | Select Back to exit the About this device screen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

[Restart your phone](#task%5F3251D4F7055AAB9ED78E23676E5D8F2C)

A phone restart doesn't erase the phone settings. You can restart your phone either from the touch user interface or using the power button.

| Do one of the following actions to restart your phone: Use the touchscreen:Press ![the Settings hard key](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/370001-380000/371001-372000/371845.jpg).Scroll down to the menu list bottom and tap Restart.Tap Restart in the prompt window to restart your phone.Use the power button:Press the power button on the phone right side to power off your phone.Wait until the phone screen goes off. Then, press the power button again to power up your phone. |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[Report problem from your phone](#task%5F22B87A8099F1AF64788C1CE23AE86BE6)

When you seek for help on phone issues from your administrator, send your device logs to the administrator for troubleshooting.

| 1 | Press Settings ![the Settings hard key](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/370001-380000/371001-372000/371845.jpg).                                                                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | If prompted, enter the password to access the Settings menu. You can get the password from your administrator.                                                                                                                               |
| 3 | Tap Issues and diagnostics \> Report problem.                                                                                                                                                                                                |
| 4 | Enter the date and time when the issue occurred. By default, the current date and time are populated, you can further change them.                                                                                                           |
| 5 | Choose a problem description from the listed descriptions.                                                                                                                                                                                   |
| 6 | Tap Submit. After the report is sent, you can see the report file name and the submission time.If your phone can't sent out the problem report, the report file is generated locally, and you can download the file from a given IP address. |

[Check network connection](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F8f5f0fa4-bb80-42f6-a355-54f39229c85c)

Check the network connection details when you are troubleshooting a network issue. The Network connection screen in the phone menu gives you the details about the Ethernet or Wi-Fi settings.

| 1 | Press Settings ![the Settings hard key](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/370001-380000/371001-372000/371845.jpg). |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | If prompted, enter the password to access the Settings menu. You can get the password from your administrator.                                                |
| 3 | Scroll down to the Network and service section and tap Network connection.                                                                                    |

[Check phone issues and diagnostics](#task%5F22B87A8875ISSUEDIAG8099F1AF64788C1CE23AE86BE6)

If you are experiencing any issues with your phone (for example, user password, network connection, phone registration, or phone upgrade), then you see an error message displayed under Issues. You can contact your administrator to help you resolve the issues.

Use the information and features listed under Diagnostics to collect data and troubleshoot any problems on your phone.

**Diagnostics** settings are based on your call network so what you see on your phone varies from business to business. For example, Cisco Video Phone 8875 contains the following settings:

__Table 1\. Issues and diagnostics__
| Diagnostic               | Function                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Report problem           | Tap if you want to collect and send your device logs to your administrator.                                                                 |
| Webex connection details | Tap if you want to see the status of the following Webex features: Calendar Calllog Credentials Metrics Notification Phonebook Registration |

| 1 | Press ![the Settings hard key](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/370001-380000/371001-372000/371845.jpg). |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Tap Issues and diagnostics.                                                                                                                          |

[Check device security status on the phone](#task-template%5Fe5284def-8465-4ac0-87ff-91285a598b12)

Your phone checks the device security status automatically. If it detects potential security threats on the phone, the Issues and diagnostics menu can show the details of the issues. Based on the reported issues, your administrator can take operations to secure and harden your phone.

The device security status can still be available when the phone isn't registered to call control system (Webex Calling or BroadWorks).

To view details of security issues on the phone, do the following:

| 1 | Press Settings ![Settings button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478218.png)                                                                                                                                                                                                              |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Issues and diagnostics \> Issues. Currently, the device security report contains the following issues: CategoryIssueDevice trustDevice authentication failedHardware tamperedVulnerable configurationNo password providedSSH enabledTelnet enabledNetwork anomaly event detectedExcessive attempts of loginCertificate issueCDC certificate will expire soon |
| 3 | Contact your administrator for support to resolve the security issues.                                                                                                                                                                                                                                                                                              |

[Reset your phone to the factory settings](#reference%5FF1A9A36701F448441DE2F0ACFF60B1F6)

A factory reset clears all settings from your phone. You lose your current registration and all the configuration after a factory reset. You must register and set up your phone as you do for a new phone before you can use it again.

[Reset your phone using the phone menu](#task%5FFB828785FC2EA8B1C999883915BA5940)

You can use the phone menu to factory reset your phone. If you can't access to the menu from the phone screen, you can [use the phone keypad to reset your phone](#task%5F22B87A8099F1AF64788C1CE23AE86BE6).

| 1 | Press Settings ![the Settings hard key](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/370001-380000/371001-372000/371845.jpg).                                                                                                                                                                                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | If prompted, enter the password to access the Settings menu. You can get the password from your administrator.                                                                                                                                                                                                                                                                                                                                         |
| 3 | Do one of the following actions based on your phone model: ![For 9841, 9851, and 9861 phones](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483151.png) Select Restart and reset \> Factory reset. ![for 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483152.png) In the Restart and reset section, select Factory reset. |
| 4 | Select Reset in the prompt window to start the reset. Your phone reboots when the reset completes.                                                                                                                                                                                                                                                                                                                                                     |

[Reset your phone with the keypad](#task%5F22B87A8099F1AF64788C1CE23AE86BE6)

Use these steps to reset the phone to the factory default settings using the keypad.

| 1 | Unplug the phone: If using Power over Ethernet (PoE), unplug the Ethernet cable. If using the power cube, unplug the power cube.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Wait 5 seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3 | Press and hold # and plug the phone back in. The Headset button, the Speaker button, and the Mute button light up.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4 | As soon as the Mute button goes off, release **#** and press **123456789\*0#** in sequence. When you press **1**, the Headset button goes off. You have less than 15 seconds to finish pressing the keys. The phone goes into a normal startup if you don't finish the input before it times out or you press the keys out of sequence. After you finish pressing these keys, the Mute button lights up, indicating the factory reset process has started. Don’t power down the phone until it completes the factory reset process and the Welcome screen appears. |

[Reset your phone with the phone web page (BroadWorks or Webex Calling)](#task%5F22B87A8099F1AF64788C1CE23AE86BE6)

You can remote restore your phone to its default settings from the phone web page only when your phone is registered to Cisco BroadWorks or Webex Calling.

| Reset your phone from the phone web page with one of the methods: In your web browser, enter the URL in the following format and click Confirm Factory Reset.http://<Phone IP>/admin/factory-reset where:Phone IP \= the actual IP address of your phone./admin \= the path to access admin page of your phone./factory-reset \= the command that you must enter in the phone web page to factory-reset your phone. An administration access to the phone web page is required to use this method. On the phone web page, select Admin Login \> Advanced \> Info \> Debug Info. Click Factory Reset in the Factory Reset  section. Click CONFIRM FACTORY RESET on the next page. |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[Limited features available notification](#reference-template%5Fae0868e1-9eda-42f8-a950-4dfe6cbdaa04)

When the connection to Webex cloud is unreachable or breaks, you will see the Limited features available notification at the header of the phone home screen. For example:

On Cisco Desk Phone 9871 and Cisco Video Phone 8875, only the warning icon  displays on the home screen. You can tap the icon to show more information.

During this situation, phone gets connected to the Site Survivability Gateway (SGW) so that you can use at least basic calling features. SGW services are deployed within your local network, hence, the phone supports only basic calling features.

You can find out which lines are impacted by the issue under the Settings \> Issues and diagnostics \> Limited service. For example:

When you experience this issue, your administrator can help troubleshoot.
