---
title: "Enable WebRTC and CVI to join a Microsoft Teams Meeting from Board, Desk, and Room Series"
product: "Devices"
article_id: "nsx4cpe"
url: "https://help.webex.com/en-us/article/nsx4cpe/Enable-WebRTC-to-Join-a-Microsoft-Teams-Meeting-from-Board-Desk-and-Room-Series"
last_updated: "2025-06-06"
description: "By enabling WebRTC and CVI in Control Hub, it is possible to join Microsoft
Teams Meetings directly from Cisco devices."
tags: ["devices"]
source: "help.webex.com"
---

# Enable WebRTC and CVI to join a Microsoft Teams Meeting from Board, Desk, and Room Series

If you want to hide the Microsoft Teams button on the home screen, see [Remove default buttons from the user interface on Board, Desk, and Room Series devices](https://help.webex.com/en-us/article/nci847eb/Remove-default-buttons-from-the-user-interface-on-Webex-Board,-Desk,-and-RoomSeries-devices).

In order to enable OBTP for Microsoft Teams meetings, [the hybrid calendar](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/hybridservices/calendarservice/cmgt%5Fb%5Fdeploy-spark-hybrid-calendar-service.html) needs to be on.

**WebRTC** 

 Make sure that the web engine is on. If not, see [Configure the Web Engine on Board, Desk, and Room Series devices](https://help.webex.com/en-us/nvt0sa9/Enable-the-Web-Engine-on-Webex-Boards-Room-Devices-and-Desk-Pros) to turn it on. You need the CE9.14.3 software version for devices linked to Webex Edge.

WebRTC isn't supported:

- In classroom setup
- On Panorama
- With the SpeakerTrack 60 when SpeakerTrack is enabled

The anonymous join setting is on by default in Microsoft Teams. If it is off, you can turn it  on  in Microsoft Teams so that devices can join over WebRTC. For more information about how to enable this setting, see [Teams settings and policies reference](https://learn.microsoft.com/en-us/microsoftteams/settings-policies-reference).

- WebRTC does not work with Microsoft Teams Live Events. If users receive an OBTP attendee link in a Live Events email, OBTP will not be activated on their device. To join Live Events meetings, users must use Microsoft Teams or a web browser.
- For WebRTC joins, the following URLs are supported: teams.microsoft.com, gov.teams.microsoft.us, dod.teams.microsoft.us, login.microsoftonline.us, login.microsoftonline.com, and app.whiteboard.microsoft.com.
- If users use safelinks or any email security protocol that changes the URL of a Microsoft Teams meeting, OBTP will also not work.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Management \> Devices \> Settings.                                                                |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Meeting providers section, turn on  Enable Microsoft Teams .                                                                                              |
| 3 | Joining meetings through the Microsoft Teams button with WebRTC is  on  by default. To turn it off, go back to the Devices page and select  All configurations . |
| 4 | Select  UserInterface  \>  Features  \>  Call  \>  JoinMicrosoftTeamsDirectGuestJoin  \>  Auto/Hidden . This feature is set to  Auto  by default.                |

**Cloud Video Interop (CVI)** 

You need the RoomOS 11.11 software version or a newer one to enable the direct guest join capability. 

To allow users to join meetings through the Microsoft Teams button with CVI:

1. Sign in to [Control Hub](https://admin.webex.com/), then go to Management \> Devices \> All configurations.
2. In order for users to enter the  Video conference ID  after selecting the Microsoft Teams button, set up the following configuration. This option is  Off  by default:

  1. Go to  UserInterface  \>  Features  \>  Call  \>  JoinMicrosoftTeamsCVI  \>  Auto  
  If both ` JoinMicrosoftTeamsDirectGuestJoin ` and ` JoinMicrosoftTeamsCVI ` are set to  Auto , both options show within the Microsoft Teams button, but you can turn off one or both options.
  2. To provide the default hostname for CVI, set up the following configuration:  UserInterface  \>  MeetingJoin CVITenants  
  The default hostname is used in combination with the video conference ID to generate the right SIP URI.
