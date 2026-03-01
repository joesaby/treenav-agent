---
title: "Known Issues and Limitations for Site Administration"
product: "Webex Meetings"
article_id: "rtcj4e"
url: "https://help.webex.com/en-us/article/rtcj4e/Known-Issues-and-Limitations-for-Site-Administration"
last_updated: "2024-09-21"
description: "Known Issues and Limitations for Site Administration"
tags: ["webex-meetings", "webex-suite"]
source: "help.webex.com"
---

# Known Issues and Limitations for Site Administration

## Known Issues and Limitations for Site Administration

### Branding and customization

- The new Webex header does not allow branded headers to be less than 75 px. If a branded site has a header height that is less then 75 px and does not have customized header HTML code, the system automatically increases header height to 75 px.
- The Log in and Log out links for the Site Administration tool are not visible if the header navigation color is blue or a dark color.

If you want to make branding changes, you should contact Cisco support.

### Safari browser support

The Safari browser is not supported for Site Administration on the Mac. 

### CMR Hybrid (Webex-enabled TelePresence) meetings 

The following issues apply for CMR Hybrid (Webex-enabled TelePresence) meetings: 

- To reduce the possibility of bandwidth issues for video, site administrators should make sure the following site administration options are set for CMR Hybrid users:  

  - Make sure that for Webex VoIP and video connection, the Automatically encrypted UDP/TCP SSL option is always selected.
  - Select Site Settings \> Site Options and check the maximum video bandwidth option. This sets the maximum video frame rate for in-meeting video. The default setting is 15 fps.
  - Under "OneTouch TelePresence Options," make sure Enable TelePresence bandwidth control is checked unless Webex Support recommends altering it.
  - Under "Meeting Options," make sure that Turn on high-definition video is turned on so that resolutions higher than 360 p can be sent.  
For additional information about recommended bandwidth configuration settings for CMR Hybrid meetings, see "Prerequisites" in the Cisco Collaboration Meeting Rooms (CMR) Hybrid Configuration Guide on the [Cisco TelePresence Management Suite (TMS) Configuration Guides](http://www.cisco.com/c/en/us/support/conferencing/telepresence-management-suite-tms/products-installation-and-configuration-guides-list.html) page.
- Site administrators should also make sure that Webex Meetings PRO TelePresence session type is enabled for your site:  

  - Webex Meetings PRO TelePresence session type will give users a different user interface in the Webex Productivity Tools integration to Microsoft Outlook than the standard Webex integration with Outlook.
  - If you want existing users on your site to use CMR Hybrid, you need to batch-enable them for Webex Meetings Pro TelePresence session type-it is not enabled for them automatically.
  - When your site is enabled for CMR Hybrid, the Default for New Users checkbox is automatically checked next to Webex Meetings PRO TelePresence session type site administration option. If you do not want new users to be enabled for CMR Hybrid automatically, you should uncheck the Default for New Users checkbox.
  - You can also create additional custom session types based on Webex Meetings TelePresence session type.
- Site administrators cannot make any changes to CMR Hybrid user interface for Webex Productivity Tools. For example, administrators cannot change the branding for the CMR Hybrid Meeting Options panel within the Outlook integration, cannot hide information in the Meeting Options panel or in the TelePresence or Webex Advanced Settings dialog boxes, and cannot limit the number of video call-in participants the user can enter.
- Although screen sharing (formerly called "desktop sharing" and application sharing are supported in CMR Hybrid meetings, some standard sharing features, such as file sharing, annotation, and whiteboard sharing, are not supported in CMR Hybrid meetings.
- Recording is supported for CMR Hybrid meetings; however, it has the following known issues and limitations:  

  - CMR Hybrid meeting recordings will be in MP4 format. Video will be recorded at 360 p.
  - When users play back the recording, they can see screen sharing, application sharing, active speaker video camera feeds, the participant, list, chat, and polling. However, if users download the recordings, the screen sharing, application sharing, and audio portion is in one MP4 file, and does not contain active speaker video camera feeds, the participant list, chat, and polling.  
For more information about recording CMR Hybrid meetings, see _Recording and Playback FAQs_ in the Webex Meetings Frequently Asked Questions.
- If you do not have adequate bandwidth, your presentation and data sharing in Webex video conferencing and CMR Hybrid meetings can degrade to XGA (1024 x 768 resolution) and 5 fps. On TelePresence systems, users see a "letterbox" format. Up to 720 p resolution is supported as long as all Webex participants have at least 2 Mbps, and the data sharing can cover the whole TelePresence system screen on both 4:3 and 16:9 TelePresence systems without cropping. With TelePresence Server 4.1 and Conductor XC 3.0, 1080 p resolution is supported as long as all Webex participants have at least 3 Mbps. If any participants in the meeting do not have the minimum bandwidth, all participants will drop to the next lowest data sharing resolution level. For example, if 720 p resolution was used, but one participant has bandwidth that is below the threshold, the meeting resolution drops to 720 p for all participants. Or, if TelePresence Server 4.1 and Conductor XC 3.0 are used, 1080 p would normally be supported, but if one participant does not have least 3 Mbps, the data sharing resolution drops to 720 p for all participants. The presentation and data sharing quality from TelePresence system to TelePresence system does not change, and the resolution is based on TelePresence Server or Cisco TelePresence MCU series settings. The presentation and data sharing quality from Webex application to Webex application is good quality. These presentation and data sharing quality limitations do not apply to Webex-only meetings, which use a proprietary data rendering format.  
For a list of compatible video systems and applications see [Webex Meetings Video Compatibility and Support ](http://cisco.com/go/cmr-cloud-compatibility)
- Screen sharing (formerly called "desktop sharing") and application sharing are supported in CMR Hybrid meetings, but some standard content sharing features, such as file sharing, annotation, and whiteboard sharing, are not supported.
- Starting with Cisco TelePresence Management Suite (Cisco TMS) version 14.4, administrators can configure Cisco TMS to allow TelePresence participants to join a CMR Hybrid meeting up to 5 minutes before the scheduled start time. TelePresence doesn't join the meeting until the first TelePresence participant dials in to the meeting. Cisco TMS does not dial out to Webex until the scheduled start time of the meeting. For more information, see "Configuring Allow Early Join" in the "Configuring Conference Settings in Cisco TMS" section of the Cisco Collaboration Meeting Rooms (CMR) Hybrid Configuration Guide on the [Cisco TelePresence Management Suite (TMS) Configuration Guides](http://www.cisco.com/c/en/us/support/conferencing/telepresence-management-suite-tms/products-installation-and-configuration-guides-list.html) page.
- CMR Hybrid meetings do not support "VoIP Only" audio.
- Scheduling large CMR Hybrid meetings requires that administrators set capacity limits. To mute everyone except the speaker, participants need to be muted in both Webex and TelePresence:  

  - From the Webex application, the host can mute Webex participants.
  - On some TelePresence systems, the host can mute other TelePresence participants; otherwise, the administrator can mute TelePresence participants through TelePresence Server.
