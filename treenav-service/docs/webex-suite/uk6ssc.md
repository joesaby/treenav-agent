---
title: "Webex App for Windows not pairing with Board, Desk, and Room series"
product: "Webex Suite"
article_id: "uk6ssc"
url: "https://help.webex.com/en-us/article/uk6ssc/Webex-App-for-Windows-not-Pairing-with-Cisco-Webex-Rooms"
last_updated: "2025-06-06"
description: "Webex App for Windows not pairing with Board, Desk, and Room series"
tags: ["webex-suite", "devices"]
source: "help.webex.com"
---

# Webex App for Windows not pairing with Board, Desk, and Room series

## Check connectivity and audio settings

If you can't pair your Webex App for Windows app with your Cisco device, you can check the followings to make sure that everything is set up right:

| 1 | Make sure that the [Webex app is connected to your device](https://help.webex.com/q7vr6m/). To access your audio settings, see [this article](https://help.webex.com/n139bv9/).                                                                                                                                                                                                                   |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Make sure that your microphone is turned on. This allows your device to detect and record the ultrasound used to discover other devices.                                                                                                                                                                                                                                                          |
| 3 | For Windows 7, you might need to install new audio drivers. For more information, see [How do I troubleshoot audio driver failures for Webex Proximity in Windows?](https://help.webex.com/WBX000024452). For Windows 10, disable your audio enhancements. This ensures that there is no interference with the ultrasound that your device uses to discover other devices. See the section below. |

## Disable audio enhancements

Disabling audio enhancements ensures that there is no interference with the ultrasound that your Cisco device uses to pair with other devices.

| 1 | In your Windows taskbar search, type _Settings_ to open the System settings of your laptop.                                                                                                                                                                                                                                                                                                                                        |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Choose Sound.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3 | Click on Microphone Array.                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4 | In the Microphone Array Properties, scroll down to Audio enhancements and choose Off.                                                                                                                                                                                                                                                                                                                                              |
| 5 | If this method fails, you can completely turn off your Audio Enhancements in Windows 10. Go back to the Sound menu and click on More sound settings. A dialog box opens and on the Playback tab, right click on your default device and select Properties. Go to the Advanced tab and uncheck the check box Enable audio enhancements. Make these changes for each default device if you have several and try playing audio again. |
| 6 | When you are finished, restart the Webex App.                                                                                                                                                                                                                                                                                                                                                                                      |
