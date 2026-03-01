---
title: "Bandwidth management for Board, Desk, and Room Series"
product: "Devices"
article_id: "51qu5cb"
url: "https://help.webex.com/en-us/article/51qu5cb/Bandwidth-management-for-Board-Desk-and-Room-Series"
last_updated: "2025-06-06"
description: "Cisco collaboration devices have built-in bandwidth management capabilities that
allow a network administrator to control maximum bandwidth usage. The
administrator can see the bandwidth usage in Control Hub. RoomOS devices
automatically utilize the available network bandwidth to deliver high-quality
media experiences."
tags: ["devices", "webex-meetings"]
source: "help.webex.com"
---

# Bandwidth management for Board, Desk, and Room Series

Cisco collaboration device’s bandwidth management technology is designed to automatically adjust the amount of data that's sent to and from the device based on the available bandwidth. This means that if your network is experiencing congestion or other bandwidth constraints, the device automatically adjusts its transmission settings to ensure that the media quality is optimized within the available bandwidth.

Webex Meetings and Webex Webinars support up to 1080p main video and 4K content video. The Webex bandwidth usage is dynamic and depends on the scenario. This applies to all calls and meetings, from a 1:1 call with bandwidth based on the far-end camera quality (for example 720p at 2 Mbps) up to multiple streams of 1080p at 6 Mbps. The bandwidth that is used by Webex is dynamically split across the main video and shared content, the number of screens available, and the current layout to provide the best experience in any scenario.

Cisco collaboration devices also include several bandwidth management settings. These settings allow you to specify maximum bandwidth thresholds, which limit the amount of bandwidth that can be used by specific devices. 

## Upcoming changes to default bandwidth

From **RoomOS June (11.29)**, the default bandwidth for devices that support 20 Mbps will be increased to 20 Mbps. This is to provide better video quality when possible. 

We recommend that you set the following configurations to 20 Mbps for the supported devices, if those are set to something other than the default value:

- [Conference MaxReceiveCallRate](https://roomos.cisco.com/xapi/Configuration.Conference.MaxReceiveCallRate/)
- [Conference MaxTransmitCallRate ](https://roomos.cisco.com/xapi/Configuration.Conference.MaxTransmitCallRate/)
- [Conference DefaultCall Webex Rate](https://roomos.cisco.com/xapi/Configuration.Conference.DefaultCall.Webex.Rate/)

This change applies to the following products: Room Bar, Room Kit Pro, Room 70 G2, Room Panorama, Cisco Desk, Desk Pro, Desk Mini, Board Pro, and Board Pro G2.

If you need to override the call rate, we recommend that you set the _Conference DefaultCall Webex Rate_ configuration to _0_. Then the _Conference DefaultCall Rate_ is also used for Webex calls. 

## Supported resolutions and bandwidth on Webex

The following is a summary of different video device configurations, expected video resolutions, and bandwidth requirements for Cisco collaboration devices.

| Model                                                                                                                          | Maximum main video resolution | Maximum bandwidth | Default bandwidth |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- | ----------------- | ----------------- |
| Board ProBoard Pro G2Cisco DeskDesk MiniDesk ProRoom 70 G2Room BarRoom Bar ProRoom Kit EQRoom Kit EQXRoom Kit ProRoom Panorama | 1920×1080                     | 20 Mbps           | 20 Mbps           |
| Rook Kit PlusRoom 55Room 55DRoom 70Room KitRoom Kit Mini                                                                       | 1920×1080                     | 6 Mbps            | 6 Mbps            |
| Cisco Board                                                                                                                    | 1920×1080                     | 10 Mbps           | 6 Mbps            |
| DX80                                                                                                                           | 1280×720                      | 3 Mbps            | 3 Mbps            |
|                                                                                                                                |                               |                   |                   |

The number of screens connected to the device impacts the bandwidth use. The more screens that the video stream is transferred to, the more bandwidth is used. 

Devices running RoomOS 11 and later use up to the set maximum bandwidth for locally rendered video. Transcoded meetings use up to 4 Mbps.

Camera features, such as people focus or frames, do not require more bandwidth.

## Recommended configuration

Cisco Webex's bandwidth management technology is designed to optimize media quality within available bandwidth and dynamically adjust to variable network conditions without manual configuration. The main reason to configure available network bandwidth is if you have devices in locations with physical network limitations. We recommend that you configure the maximum allowed bandwidth for your devices so that Webex can deliver the best quality for all scenarios for your device.

By configuring the default allowable bandwidth, you allow the device to fully use the available network resources, which can result in higher resolution video and audio, faster transmission rates, and overall better performance. This can be important in scenarios where high-quality media performance is critical to the success of a meeting or collaboration session.

**Configure the appropriate values** 

The following settings are found under the _Conference_ section of a device’s configuration page. 

| Setting                                                                                                             | Recommended value |
| ------------------------------------------------------------------------------------------------------------------- | ----------------- |
|                                                                                                                     |                   |
| [Conference MaxReceiveCallRate](https://roomos.cisco.com/xapi/Configuration.Conference.MaxReceiveCallRate/)         | 20000 kb/s        |
| [Conference MaxTransmitCallRate ](https://roomos.cisco.com/xapi/Configuration.Conference.MaxTransmitCallRate/)      | 20000 kb/s        |
| [Conference DefaultCall Webex Rate](https://roomos.cisco.com/xapi/Configuration.Conference.DefaultCall.Webex.Rate/) | 20000 kb/s        |
| [Conference DefaultCall Rate ](https://roomos.cisco.com/xapi/Configuration.Conference.DefaultCall.Rate/)            | 6000 kb/s         |

For configuration descriptions, visit [ roomos.cisco.com ](https://roomos.cisco.com/xapi/domain/?domain=Conference).

- In cases where a call is subject to multiple configured bandwidth constraints, the lower value is always applied.
- Newer devices [1](#footnotes/1) have a higher maximum value for _Max Transmit Rate_ and _Receive Call Rate_.
- _Call rate_ includes the bandwidth that is used for audio, video, and content sharing in a meeting.

You can either:

- Set the configuration on one device.
- Set the configuration on multiple devices.
- Use configuration templates.
- Use default configurations for your organization or location.

For more details on the different ways to set configurations, see the [Device configurations for Board, Desk, and Room Series devices](https://help.webex.com/en-us/n5pqqcm/) article.

## Low bandwidth scenarios 

Cisco collaboration devices are designed to work seamlessly across a range of network conditions, including low bandwidth or high latency connections, meaning media quality adjusts automatically to maintain an optimal user experience. This is accomplished through several different mechanisms, including dynamic adjustment of video resolution, frame rate, and audio quality. For example, if network bandwidth is limited, the device may automatically reduce the resolution of the video being sent or decrease the number of frames per second to reduce the amount of data being sent.

If you wish to manually configure the maximum allowable bandwidth consumption, we recommend a minimum bandwidth of 4000 kb/s to ensure good quality for main video and content video. This is the minimum bandwidth that is required to support high-quality Full-HD video (1080p) streams with a frame rate of 30 frames per second for the main video and content streams. While the devices support video conferencing at lower bandwidths, the end-user experience is improved for a large proportion of use cases around this threshold.

When configuring the bandwidth on devices, we recommended that you keep the single-screen devices within a range of 6–12 Mbps and the dual/triple-screen systems within 10–20 Mbps for a balanced premium experience. The minimum recommended bandwidth is 4 Mbps.

1 Room Kit EQ, Room Bar, Room Bar Pro, Board Pro, Desk Mini, Desk, Desk Pro, Board Pro, Room 70 Single G2, Room 70 Dual G2, and Codec Pro
