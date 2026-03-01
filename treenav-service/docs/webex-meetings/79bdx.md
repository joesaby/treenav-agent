---
title: "Cross-Platform Known Issues and Limitations"
product: "Webex Meetings"
article_id: "79bdx"
url: "https://help.webex.com/en-us/article/79bdx/Cross-Platform-Known-Issues-and-Limitations"
last_updated: "2025-03-22"
description: "Cross-Platform Known Issues and Limitations"
tags: ["webex-meetings", "webex-support", "webex-events-(classic)", "webex-training"]
source: "help.webex.com"
---

# Cross-Platform Known Issues and Limitations

This section contains known issues and limitations about the browsers and operating systems supported by Webex Meetings. For information about other known issues, see the individual release notes for each service.

**Sharing files from personal My Webex folders** 

Users can no longer share files from their personal My Webex  folders, although all users can upload and share files during a meeting.

**Microsoft Office 2007 support** 

- Microsoft Office 2007 may display a security alert stating that the Webex Meetings digital signature is invalid.
- Users may not be able to share Microsoft PowerPoint files. A workaround for this is to share the device's screen or share the PowerPoint application.

**Microsoft Office 2010 support** 

- UCF Toolkit isn't supported with Microsoft Office 2010 64-bit.
- New animations, transitions, and 3D graphics introduced in Microsoft Office 2010 aren't supported.
- Importing a company address book into the Webex Meetings contacts isn't supported with Microsoft Outlook 2010 64-bit.

**Microsoft Office 2013 support** 

- If Microsoft Office 2013 is installed, the following features aren't supported when sharing Microsoft PowerPoint 2013 files:  

  - Animations and transitions
  - Embedded video or audio files
  - UCF Toolkit
- Some custom elements may not be supported in customized Info  tabs. We recommend that users validate it to make sure that it display properly during meetings.
- In a few cases, the following problems might occur:

  - Text and fill colors might be slightly different from the actual colors in a slide.
  - Some graphic elements might be missing from a slide.
  - Fonts might appear blurry on a slide or might be different from the original.
  - The size of shapes might be different from the original.
- If an object in a Microsoft PowerPoint presentation doesn't display correctly in edit mode, it's automatically removed in Slide Show view; however, the object may continue to display when the file is shared in a meeting.
- Users can't share password-protected Microsoft PowerPoint 2013 files using the file sharing feature. Use the application sharing or desktop sharing features instead.
- Users can't share Microsoft Excel 2013 files on Windows 8 and 8.1 using the file sharing feature. Use the application sharing or desktop sharing features instead.
- Users can't share Word 2013 (64-bit) documents on Windows 8 and 8.1 (64-bit) using the file sharing feature. Use the application sharing or desktop sharing features instead.

 **Microsoft Office 2016 support** 

 Microsoft Office 2016 is supported in Webex Meetings for Windows or Mac. However, file sharing Microsoft PowerPoint presentations sometimes cause an error. Also, file sharing multiple Microsoft PowerPoint presentations at one time may cause the app to stop responding. 

**Windows 2000** 

Windows 2000 is no longer supported starting in this release. Windows 2000 users may still be able to join meetings, but performance isn’t guaranteed. 

**Mac OS** 

- Mac OS X 10.6 users or earlier are no longer able to connect to meetings.
- Mac PowerPC users are no longer able to connect to meetings.
- The Webex Meetings Network Recording Player doesn't support converting recordings to MP4 format on Mac.
- Multiple monitor support isn’t yet available in Webex Meetings for Mac.

**Linux 64-bit support** 

- 64-bit Linux is supported via the [Cisco Webex Meetings Web App ](https://collaborationhelp.cisco.com/article/n1pxgbz), and is supported on Ubutuntu 14.x or later, OpenSuSE 13.x or later, Fedora 18 or later, Red Hat 6 or later, and Debian 8.x or later
- Known issues and limitations:

  - In some versions of Linux, users must proactively install and activate the “OpenH264 Video Codec provided by Cisco Systems, Inc.” plugin in order for the video, call my computer, and content sharing features to work in Firefox.
  - Content sharing does not work in Linux versions that use Wayland as their display management system (such as Fedora 25 and later), due to an issue with the WebRTC screen sharing API.
  - Sending and receiving video does not work in Fedora 28 due to an issue with the H.264 codec.

**Mozilla Firefox 43 or later** 

 The Webex Meetings Productivity Tools add-on for Mozilla Firefox isn't currently supported for Mozilla Firefox version 43 or later. We recommend that users use Internet Explorer instead.

**Citrix XenDesktop and XenApp** 

For the best experience, Cisco recommends the latest version of the Citrix receiver for both Windows and Mac.

- XenApp isn’t supported with Webex Support.
- Due to an architectural limitation of the virtual desktop environment, sending video in Webex Meetings may not work smoothly. In addition, when sending video in a meeting, the frame rate may be low. This results in a less-than-optimal user experience when sending video.
- Some video file formats (WMV, AVI and MP4) can't be shared in a virtual desktop environment in Webex Meetings due to the XenApp limitations.
- Remote Access and Access Anywhere aren't supported because these agents are automatically removed by the underlying Citrix platform after the operating system restarts.
- Hands-On Labs aren't supported.
- When using the [Cisco Webex Meetings Web App ](https://collaborationhelp.cisco.com/article/n1pxgbz) in XenApp or XenDesktop, you can receive video, but not send video. This is because web browsers can't detect virtual camera devices in a VDI environment.
- When using the [Cisco Webex Meetings Web App ](https://collaborationhelp.cisco.com/article/n1pxgbz) in XenApp or XenDesktop, users may experience audio quality issues when using Call using computer . We recommend using Call me , Call in , or Call using video system  when using the web app in a VDI environment.

**VMware Horizon 7** 

- VMware Horizon isn’t supported with Webex Support.
- Due to an architectural limitation of the virtual desktop environment, sending video in Webex Meetings may not work smoothly. In addition, when sending video in a meeting, the frame rate may be low. This results in a less-than-optimal user experience when sending video.
- Remote Access and Access Anywhere aren't supported because these agents are automatically removed by the underlying VMware platform after the operating system restarts.
- Hands-On Labs aren't supported.
- When using the [Cisco Webex Meetings Web App ](https://collaborationhelp.cisco.com/article/n1pxgbz) in VMware Horizon 7, you can receive video, but not send video. This is because web browsers can't detect virtual camera devices in a Horizon environment.
- When using the [Cisco Webex Meetings Web App ](https://collaborationhelp.cisco.com/article/n1pxgbz) in VMware Horizon 7, you may experience audio quality issues when using Call using computer . We recommend using Call me , Call in , or Call using video system  when using the web app in a Horizon environment.

**Mac OS X 10.8 Mountain Lion** 

When starting or joining a meeting using PAC proxy on Mac OS X 10.8 Mountain Lion, the meeting application crashes. This is an operating system bug that was reported to Apple (Apple bug report # 11844696). The issue was resolved in the Mac OS X 10.8.2 build. 

**Internet Explorer 10 and 11** 

The "Enhanced Protected Mode" in Internet Explorer 10 and 11 on the desktop isn't supported. Since this mode offers plugin-free browsing experience, the Webex Meetings add-ons are disabled and ActiveX or Java download methods can be used. Users can still use the temporary folder solution to join a meeting. Alternatively, users can choose to turn off Enhanced Protected Mode in order to join the meeting normally. 

Turning on Compatibility View in Internet Explorer on the desktop might cause some Webex Meetings pages to render incorrectly. We recommend that administrators turn off Compatibility View for their site. 

**Google Chrome** 

- Some Google Chrome users can’t access the Chrome Web Store. In this case, the Webex Meetings extension file doesn't automatically install when the users join a meeting. These users are directed to a help page with instructions to manually download and install the extension file.
- The Webex Meetings extension add-on may not install and instead return an error message. This may be because in-line installation can't be initiated from a pop-up window in Google Chrome. The integration may have to be changed to use a top-level window instead of a pop-up window.
