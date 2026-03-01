---
title: "Use Wi-Fi on Board, Desk, and Room Series"
product: "Devices"
article_id: "n761ejq"
url: "https://help.webex.com/en-us/article/n761ejq/Best-Practices-Setting-up-a-WiFi-Connection-on-Webex-Boards-Desk-and-Room-Series-Devices"
last_updated: "2026-02-10"
description: "On Board, Desk, and Room Series devices, you can choose to use either a wired or
a Wi-Fi® connection."
tags: ["devices"]
source: "help.webex.com"
---

# Use Wi-Fi on Board, Desk, and Room Series

When wireless connection is enabled for a device, you can change between wired and Wi-Fi connection on the touch interface. To use the Wi-Fi, disconnect the Ethernet cable first.

You can connect to Wi-Fi if your network uses one of these security types:

- Open
- Personal

  - WPA2-PSK-CCMP128(AES)
  - WPA2-PSK-SHA256-CCMP128(AES)
  - WPA3-SAE-CCMP128(AES)
- Enterprise

  - WPA2-802.1x-CCMP128(AES)
  - WPA2-802.1x-SHA256-CCMP128(AES)
  - WPA3-802.1x-SHA256-CCMP128(AES)

The following IEEE 802.1x types are supported for Enterprise:

- EAP-PEAP MSCHAPv2
- EAP-PEAP GTC
- EAP-TLS
- EAP-TTLS
- EAP-FAST

- Connecting using TKIP cipher is not supported on Board Pro G2, Room Kit EQ/EQX, Room Bar Pro, and any newer products.  
We do not recommend using connecting using TKIP cipher on other Board, Desk, and Room Series devices.
- Network administrators should read the section for best practices to follow when configuring a Wi-Fi connection.

The wireless network must show at least three bars on the screen, for the connection to be sufficiently stable. You can't join networks that require sign-in through a landing page. 

The system only remembers one network at a time. If you change between different networks, you have to type in the passphrase again. 

| 1 | Open the control panel on your device or touch controller by swiping from the right or tapping the ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469043.jpg) button. Then tap  Device settings .                                                                                                                                                                                                                            |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Scroll to Network and service and tap Network connection . On the next screen tap Wi-Fi . If Wi-Fi is off, tap the toggle to turn it on.                                                                                                                                                                                                                                                                                                                                                   |
| 3 | Select the Wi-Fi you want to connect to. If the network is hidden, tap Join other network  and set up the Wi-Fi manually.                                                                                                                                                                                                                                                                                                                                                                  |
| 4 | Type in the username and passphrase as required. Tap the right arrow to start the connection process.                                                                                                                                                                                                                                                                                                                                                                                      |
| 5 | When finished, tap the left arrow to go back to the Settings screen. Then tap the close button or somewhere outside the Settings window to close it. Once connected, you can access the Wi-Fi settings and check the network status at any time, including during a call. Open the control panel, tap Device settings , go to Settings > Network connection > Wi-Fi , and then tap the connected network name. On the next screen tap Advanced Wi-Fi details  to see the network's status. |

## Best practices for Wi-Fi connections

To help ensure a seamless meeting experience, network administrators should follow the best practices in this article, when configuring a Wi-Fi® connection.

During calls and meetings on Board, Desk, and Room Series devices, you'll quickly find out that a stable internet connection greatly enhances your video and voice experience. 

We recommend that you use a wired network connection when available for greater stability. In a home environment, consider using a powerline Ethernet adapter to establish a dedicated and more reliable connection. However, if a wired connection is not practical, you can use a Wireless connection instead.

**Important:**  when setting up a Wi-Fi network, install wireless equipment - such as access points and routers - that can handle and distribute the load across connected devices. You'll probably connect a lot of devices to a wireless network, and bandwidth is limited. 

The best practices in this article aim to improve two key metrics, thus improving the video and voice quality experienced on devices connected to a Wi-Fi network:

- Packet Loss Rate  \- the percent of packets that are lost during transmission, and,
- Interarrival Jitter  \- the variation in arrival times of packets being received, in milliseconds.

To help ensure a seamless meeting experience, network administrators should follow these best practices when configuring a Wi-Fi connection:

- Avoid deploying access points from different manufacturers  as this can contribute to congesting the radio-spectrum.
- Prioritize 5 GHz  coverage for devices. If 5 GHz and 2.4 GHz share the same network name (SSID), then enable band steering to ensure that 5 GHz is prioritized.
- Wireless channel utilization  should be under 50%.
- Enable 802.11d  to add a country information element to beacons, probe requests, and probe responses. If your wireless equipment does not support this, then use world safe channels 36, 40, 44, or 48.
- Verify that the device sees an access point at -60 dBm or better (closer to zero is better).
- Verify that an access point sees the device at -60 dBm or better (closer to zero is better).
- The 'Signal to Noise ratio'  should always be 25 dB or more.
- Enable 'Airtime fairness'  to make sure co-existing clients have equal access to airtime.
- Enable QoS if available . Devices tag AF41 for video and EF for voice.

Home office setups using equipment from an Internet Service Provider might not support all the configurations in the list above.
