---
title: "Best practices for using the Web Engine"
product: "Devices"
article_id: "pdybr5"
url: "https://help.webex.com/en-us/article/pdybr5/Best-Practices-For-Using-the-Web-Engine"
last_updated: "2025-02-27"
description: "Follow these recommendations for a better usage of the web engine on your Board,
Desk, or Room Series device. When the web engine is enabled, you can configure
digital signage, and open web apps and Enterprise Content Management files."
tags: ["devices"]
source: "help.webex.com"
---

# Best practices for using the Web Engine

## Supported Features

The web browser is based on a standard Chromium web engine. It supports digital signage, WebRTC, adding interactive or non-interactive web-based applications to the homescreen, embedded apps in Webex Meetings, embedded web views, enterprise content management tools, and other custom use cases.

The web engine supports most modern browser features including but not limited to: HTML5, EcmaScript 6, CSS3, web fonts, multi-touch, SVG, canvas, iFrames, web sockets, web assembly, and standard video codecs.

The two following features are also supported:

- WebGL: WebGL is an experimental feature and might change in the future. WebGL is disabled by default, but can be enabled on the local web interface of the device.  
Select Settings from the menu on the left. Under Configurations, choose the following: WebEngine \> Features \>  WebGL: On.
- SipUrlHandler: SipUrlHandler can be enabled on local web interface of the device. This configuration allows you to start SIP calls directly from web view based features (for example a web app or digital signage). The user selects a button labeled with SIP:yourSipUrl to initiate a call, and the call is then placed by the device.  
Select Settings from the menu on the left. Under Configurations, choose the following: WebEngine \> Features \>  SipUrlHandler: On.

## Limitations

The web engine is optimized to run lightweight web applications. Running more advanced, full-scale web content can lower web app performance on your device, or cause it to run out of memory. Therefore, we recommend running such web apps on a PC connected to the video device via USB passthrough, and interacting with those apps via touch redirect (available on touch-enabled Cisco devices). For more information, consult the [RoomOS WebEngine Developer Guide](https://roomos.cisco.com/doc/TechDocs/WebEngine).

The following features are currently not supported:

- PDF
- Password manager (Flash etc.)
- Downloading and uploading files
- Notifications
- HTTP Live Streaming (HLS)  
Cisco devices do not natively support HTTP Live Streaming (HLS). As a result, HLS content typically won't work on most websites when accessed through Webex. However, some websites may work if they use a JavaScript library to enable HLS support. This can lead to a scenario where HLS content works on some sites but not others. Website developers can choose to implement this JavaScript library to make HLS content work, but without it, HLS will generally be unsupported.

Only one web window or tab is supported. If a web page tries to open a page in a new window or tab, it replaces the existing page.

Joining WebRTC calls on meeting platforms through a web app is not supported. To enable WebRTC and join Google Meet meetings or Microsoft Teams meetings, read [this article](https://help.webex.com/en-us/article/egg1su/Enable-WebRTC-to-Join-Google-Meet-Meetings-on-Webex-Devices)and [this article](https://help.webex.com/en-us/article/nsx4cpe/Enable-WebRTC-to-Join-a-Microsoft-Teams-Meeting-from-Webex-Boards,-Room-Devices,-and-Desk-Pros). 

## Troubleshooting

If you encounter a problem with a web page, you can turn on RemoteDebugging from the local web interface of the device. Select Settings from the menu on the left and then, select Configurations from the top of the middle pane. Then, choose the following: 

- WebEngine \> RemoteDebugging: RemoteDebugging allows you to run the Chrome developer console on your laptop. Make sure to turn off RemoteDebugging after use. RemoteDebugging lets you access the Chrome developer console and identify potential issues with a web page. When enabled, a banner is displayed at the bottom of the screen, warning the users that they may be monitored. The banner also shows the URL that you can enter in your local Chrome browser to open the developer console.
- If a web page is not supported, the device goes directly to normal half wake mode instead of displaying the web page. You can see more information in the local web interface of the device by selecting Issues and Diagnostics from the menu on the left.
- Your configured proxy is used for all requests used by the system, including the web engine. Note that the web engine doesn't use the custom uploaded certificate. If you have problems displaying certain web pages, check your system proxy settings.

If users open a web page (through digital signage or web apps) that consumes a significant amount of resources, it may lead to a termination of the process due to out-of-memory issues. When this happens, a message is posted on the user interface of the device saying that the web page is unable to load. In the Issues and Diagnostics menu, an error appears informing that the digital signage web page was terminated because the device ran out of memory. This error message also appears on Control hub and in the local web interface of the device.

Users should make a change to the web app or web page that they want to open on their device. Then, they can dismiss the diagnostic and try again to see if the error message reappears.

The Cisco devices listed below have less memory and are therefore more prone to encounter out-of-memory situations than the rest of our portfolio, when visiting memory intensive web pages: 

- Cisco Room 55 and 70 (Single and Dual, including G2)
- Cisco Room Kit and Room Kit Mini
- Cisco Room Navigator
- Cisco Desk Mini and Desk
- Cisco Board 55, 70, and 85
- Cisco Codec Plus
Out-of-memory situations 

Memory is dynamically allocated for the web engine. Certain web pages might require more memory than is available on your device. If that happens, the device will show a warning message that the digital signage web page terminated due to to low memory. The web engine will restart and attempt to reload the page. End-users will see an error message and the page reloading.

If this happens frequently, we recommend making the following adjustments:

- change the web content you're using in signage to lighter-weight web pages
- consider using images instead of videos in signage
- reduce output from 4k to 1080p

You can also try changing the following settings in the device's local web interface, under Settings > Configurations:

- on dual screen systems, limit web engine output to one screen by setting WebEngine > MultiscreenBehavior to blank.
- disable RoomAnalytics > PeopleCountOutOfCall
- set WebEngine > FeaturesHardwareAcceleratedVideo  to off
- set WebEngine > Features GpuRasterization to off
