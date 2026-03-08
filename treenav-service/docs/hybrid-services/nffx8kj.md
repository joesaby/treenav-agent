---
title: "Deploy Webex Video Integration for Microsoft Teams"
product: "Hybrid Services"
article_id: "nffx8kj"
url: "https://help.webex.com/en-us/article/nffx8kj/Deploy-the-Webex-video-integration-for-Microsoft-Teams"
last_updated: "2025-12-11"
description: "This integration allows your video devices to join Microsoft Teams meetings. The
integration applies to Cisco devices and other SIP-capable video devices,
whether they register to Webex or to your on-premises infrastructure."
tags: ["hybrid-services"]
source: "help.webex.com"
---

# Deploy Webex Video Integration for Microsoft Teams

## Announcements

Read about updates to the video integration, including service changes, configuration updates, and documentation changes.

### PowerPoint Live support added

**September 15, 2025**

When PowerPoint Live is being used in the Teams meeting, VIMT participants can now see the presenter’s slides in their content channel. Previously, VIMT participants only got a notification that PowerPoint Live was being used and could not see the slides. 

### Mute synchronization and content audio improvements

**Aug 21, 2025**

The synchronization of a Cisco device's local mute and the Teams meeting mute has been improved for Webex-registered devices. In addition, the mute behavior in all VIMT calls has been updated to allow VIMT participants to send audio from a content session while locally muted. As part of these changes, DTMF mute controls have also been updated. For details, see the _Mute controls and indicators_ section in [Deploy Webex Video Integration with Microsoft Teams](https://help.webex.com/nffx8kj/).

### Microsoft town hall support

**Aug 21, 2025**

In July 2025, Microsoft enabled VIMT participants to join Microsoft town hall meetings as presenters. Cisco has created a new [companion guide](https://help.webex.com/dxz5jdb/) specifically for VIMT and town halls, to document the behavior and known limitations with using VIMT to join town hall meetings.

### Admin setting for default layouts now available

**July 1, 2025**

You can now set the default layout for single and dual screen devices when joining a Teams meeting with the VIMT service. To set the desired layouts:

1. Sign in to [Control Hub](https://admin.webex.com/).
2. Go to Services \> Hybrid, then click the Video Integration for Microsoft Teams card.
3. Click Edit Settings, then click the top row for your Tenant domain for layout settings.

New customers will get the "Grid" layout by default. Existing customers get "Overlay" for single and "Prominent" for dual screen to be maintained. 

### New IP subnet for media in the Video Integration for Microsoft Teams

**July 8, 2025**

We are introducing new IP address subnets for media with the VIMT service at existing Azure datacenters. Starting from July 8, 2025, we'll be using this new range:

- Southeast Asia: `4.144.190.0/24`

### New IP subnet for media in the Video Integration for Microsoft Teams

**May 15, 2025**

We are introducing new IP address subnets for media with the VIMT service at existing Azure datacenters. Starting from May 15, 2025, we'll be using this new range:

- US East 2: `4.152.180.0/24`

### Spotlight participants now always seen in video device layouts

**February 18, 2025**

Participants who have Spotlight set by Teams hosts or presenters with a Teams client will be prioritized into the existing layouts, and the name label will have a new Spotlight icon in the layout.

### See other video participants close-up

**December 17, 2024**

VIMT participants in a call will see other video participants close-up using Microsoft Teams Cloud IntelliFrame views from supported Microsoft Teams Rooms (MTR) devices with a Pro license. The feature is controlled from the sending MTR device. See [Cloud IntelliFrame](https://learn.microsoft.com/en-us/microsoftteams/devices/cloud-intelliframe) for more information. VIMT participants/video devices can't control this feature. 

### Cross-tenant join any Microsoft Teams meeting

**September 9, 2024**

We're improving the VIMT service so that devices can join any Microsoft Teams Teams meeting. We're calling this "Cross-tenant join".

Device users can tap the RoomOS Teams button, then enter the Teams meeting ID and passcode. If they're also on Webex Calendar Service, the users see the Join button on any Teams meeting invite (previously they would use WebRTC to join Teams meetings in other tenants).

Cloud-registered or Edge devices must be on the September RoomOS update to use cross-tenant join. Devices registered on-premises also need an upgrade to use this feature.

Related articles:

- [Join Microsoft Teams Meetings on Board, Desk, and Room Series](https://help.webex.com/n3r2ihu)
- [Enable WebRTC and CVI to join a Microsoft Teams Meeting from Board, Desk, and Room Series](https://help.webex.com/nsx4cpe)
- [Deploy Webex Video Integration for Microsoft Teams](https://help.webex.com/nffx8kj)
- [Webex Video Integration for Microsoft Teams integration reference](https://help.webex.com/nptyldr)

### New layouts, improved highlighting, and watermarking support

**April 30, 2024**

We're improving the experience for devices joining Microsoft Teams meetings. We're adding layouts, improving speaker highlights, and supporting watermarked meetings.

These features don’t require a RoomOS upgrade.

**Large Gallery layout**

We now support the large gallery layout from Microsoft Teams. You can see up to 49 video participants in a 7x7 grid. 

You can select this layout from your touch display or with DTMF tones (\*2 or \*8 to change layouts).

Microsoft Teams composes this layout, so you can expect some small differences to the other layouts. For example, you could see your own video stream in the layout, and the name labels may not match labels seen in other layouts.

**Dual-monitor device layouts**

You can now select layouts on dual-monitor devices when they're not displaying shared content. Choose from:

- _Prominent_ shows the Active (or focused) speaker on the primary monitor, and a 3x3 grid of video streams on the second monitor. It's the default layout for dual-monitor devices.
- _Focused_ shows the Active (or focused) speaker on the primary monitor, and a full screen view of the most recent speaker on the second monitor.
- _Grid layout_ shows a grid of video streams on both monitors. The layout has up to four streams (2x2 grid) on each monitor.
- _Large Gallery_ shows the Active (or focused) speaker on the primary monitor, and the Microsoft Teams Large Gallery layout on the second monitor (grid of up to 7x7 video streams).

- The dual-monitor layout improvements apply to cloud-registered Cisco devices, Cisco devices using Webex Edge for Devices, and SIP devices that support ActiveControl.
- When the dual-monitor device is displaying shared content, you can only change the layout on the other monitor (select a single screen layout) as before.

**Active speaker highlighting**

We're improving active speaker highlighting on devices calling into the Microsoft Teams meeting. The improvements apply to both single and dual-monitor layouts.

**Watermarking support**

VIMT devices can now show Microsoft Teams video and content streams when the Teams meeting is using watermarking.

You see the device name superimposed over the incoming video or content stream.

### New notifications for video integration participants

**February 8, 2024**

We're introducing notifications that show on VIMT video device screens. These alerts can improve the experience for VIMT users as follows:

- **Lobby notification**: When people are waiting in the meeting lobby, the VIMT device displays a message that "Participants are waiting to join. Admit using a Microsoft Teams client."  
VIMT devices aren’t allowed to admit participants from the lobby into the Teams meeting. VIMT participants can ask a Teams participant to let them in.
- **Live content notification**: When someone shares PowerPoint Live content, the VIMT device displays a message that "Live content is being shared. View using a Microsoft Teams client."  
VIMT devices can't receive live content. VIMT participants can ask the person to do traditional application sharing or window sharing instead.
- **Transcription notification**: When the Teams meeting has active transcription, the VIMT device displays a message that "Teams meeting Transcription now active. View using a Microsoft Teams client."  
The VIMT device can't display the transcribed speech, so VIMT participants can use Teams to read the transcription.

You don't need to update your devices to see these notifications and you can't disable them. They are available for all organizations using our video integration with Microsoft Teams. 

The new notifications are currently always in English, but we are localizing them for a future update.

### See raised hands of Microsoft Teams participants

**January 12, 2024**

You can now see when Teams participants raise their hands during Microsoft Teams meetings. The VIMT device shows the name of the Teams participant who raised their hand, in the top-right corner of the display.

You can also see the hand-raised icon next to the name of the Teams participant in the roster list.

To show the name of the participant raising their hand, your device needs the January 2024 RoomOS update.

You can't raise your hand when you're in a Teams meetings on a VIMT device.

### Audio boost for devices joining Microsoft Teams meetings

**November 17, 2023**

We've boosted the volume coming from video devices when they are in Microsoft Teams meetings. This brings the volume to approximately the same level as Microsoft Teams participants in the same meeting. This audio boost is not adjustable.

### New video placeholder

**September 15, 2023**

We're changing the placeholder image (avatar) that other participants see when the VIMT device isn't showing video.

Instead of video from the device, the other participants in the Microsoft Teams meeting see a static image. The avatar is the name of the device in white on a black background.

This change improves compatibility and aligns the avatar experience with other Webex services.

### New IP subnet for media in the video integration with Microsoft Teams

**February 1, 2023** 

We are introducing new IP address subnets for media with the VIMT service at existing Azure datacenters. Starting from February 1, 2023, we'll be using these new ranges:

- US East 2: `4.152.214.0/24`
- UK South: `4.158.208.0/24`
- West Europe: `4.175.120.0/24`

### Microsoft Teams lobby controls affecting trusted devices

**November 28, 2022** 

A recent Microsoft update is affecting how trusted devices/callers are joining Teams meetings.

If the Who can bypass Lobby? setting is restricted to either _Only me and co-organizers_ or _People I invite_, then trusted devices are held in the lobby. Before this change, trusted devices were allowed to bypass the lobby.

Trusted devices can still bypass the lobby with less restrictive values for that setting (see [Change participant settings for a Teams meeting](https://support.microsoft.com/en-us/office/change-participant-settings-for-a-teams-meeting-53261366-dbd5-45f9-aae9-a70e6354f88e#ID0EBF=Desktop)).

A related issue is the wrong lobby message is shown to users of trusted devices who are waiting in the lobby because of this change. That issue is publicly visible at [CSCwd68316](https://bst.cloudapps.cisco.com/bugsearch/bug/CSCwd68316).

### New IP subnet for media in the video integration with Microsoft Teams

**October 10, 2022** 

We're introducing a new media subnet for the VIMT service. The subnet is 20.120.238.0/23, hosted in the Azure datacenter, West US 2\. 

Webex App and Webex Devices also use UDP port 9000 instead of UDP port 33434.

See _Ports and protocols for video integration traffic_ in [Deploy the Webex video integration for Microsoft Teams](https://help.webex.com/nffx8kj).

### 3x3 Grid view and 1080p

**July 19, 2022** 

The grid view (default when joining) is limited to 3x3 participants as Video Integration for Microsoft Teams (VIMT) only receives nine video streams from Microsoft Teams for VIMT calls. This change will allow for a consistent and better user experience.

Video devices can connect with up to 1080p Full High Definition (FHD) resolution. 

During a Microsoft Teams meeting, the resolution is based on the client capability, regardless of what the video device is sending. VIMT uses transcoding to adjust the resolution.

### Simulcast changes

**May 19, 2022** 

The number of simultaneous outgoing video streams the (VIMT) service is able to send to a Microsoft Teams meeting has increased from three to four. This change is automatic, has no customer settings or configuration options and requires no action by customers. This change is intended to improve the outgoing picture quality from VIMT participants as seen by other meeting participants, particularly in meetings with a large number of participants or meetings with participants experiencing poor network conditions. This behavior is fully automatic and the degree of improvement will vary based on the runtime conditions of each Microsoft Teams meeting.

### Live events support

**May 11, 2022** 

Webex VIMT now has support for Microsoft Teams live events. With VIMT deployed, you can now join live events as a presenter. For details, see [Webex Video Integration for Microsoft Teams live events](https://help.webex.com/en-us/article/4y1y9x/Webex-Video-Integration-for-Microsoft-Teams-live-events).

### Video quality improvements

**April 8, 2022** 

Webex has improved video quality for this integration and will continue to make improvements in conjunction with Microsoft. We've adapted our encoding preferences for video integration. It is more tolerant of low bitrates and high keyframe rates that are accepted by Microsoft Teams.

We're working with Microsoft to further improve the video experience, specifically for large meetings, and we'll post details here when we release these improvements.

### Content sharing limitation

**March 28, 2022** 

Microsoft recently introduced a change that governs whether Attendees can share their screens (present content) in Teams meetings.

What this means for users of our video integration with Microsoft Teams is that, under specific circumstances, they cannot share content with the other participants.

To users, it looks like they are sharing but others won't see the shared content. The users also won't see someone else's shared content while they try to share, or after they stop trying to share.

These are the factors that cause this situation:

- There are two roles that a participant can take, with respect to sharing content in the Teams meeting; _Attendee_ or _Presenter_.
- The change from Microsoft makes it possible—by meeting policy or in-meeting override—to prevent Attendees from sharing. The policy setting is disabled by default, so everyone can share.
- This "Who can present?" option is governed by Teams Meeting policy. If it is set to _Everyone_ (default), then the video integration participants don't experience this sharing limitation. (A sufficiently privileged Microsoft Teams user, like the meeting organizer, could manually block the share of a video integration participant.)
- Participants joining Teams meetings, using our integration, from Trusted devices are always considered to be Presenters. This is irrespective of the "Who can share?" setting.
- Participants joining Teams meetings, using our integration, from Untrusted devices, are considered to be Presenters _unless_ "Who can present?" _is **not** Everyone_. Any other value for that setting causes users like this to become Attendees.

That is, if the Teams Meeting policy has the "Who can present?" option set to the more restrictive _Specific people_, or _People in my organization and guests_, then users joining on Untrusted devices do experience this content sharing issue.

### VIMT now shows single participant when using “Call Me”

**October 6, 2021** 

We fixed a participant list problem which displayed 'duplicate' participants on Webex Room Systems. This issue happened when Microsoft Teams participants joined the meeting with the "Call me" option. The participant list had an entry for the Microsoft Teams client, and a duplicate participant for the phone call.

Now, we show one, merged entry on the Webex Room System's participant list.

### Mute/unmute status for SIP connected participants

**August 30, 2021** 

People using SIP devices to call into Microsoft Teams meetings can now see mute and unmute status indicators in the participant list. The SIP device can also display mute status when a Microsoft Teams participant has remotely muted the SIP device. These features require that the SIP device supports XCCP (v2).

### Network requirement change for transmitting HD video to Microsoft Teams clients

**August 25, 2021** 

We updated the Webex Video Integration for Microsoft Teams (VIMT) to a newer Microsoft Media SDK version. This change means that Microsoft Teams participants need at least 2 Mbps of bandwidth to receive 720p video from the video integration participants.

### SIP improvement from US-based SIP proxy to GeoDNS based assignment

**August 18, 2021** 

We changed the SIP DNS SRV records for `m.webex.com` to resolve with GeoDNS. 

The benefit is that we now route SIP calls to cloud proxies (and Webex clusters) in other parts of the world when necessary, instead of routing all SIP calls back to US datacenters.

This change affects the SIP signaling path but does not affect how we assign media clusters. We now process the SIP signaling on a Webex cluster that is geographically nearer to the caller, instead of in the US.

There is no functional difference with this change, so contact us if you experience unexpected behavior.

### Latency improvement

**April 15, 2021** 

We optimized the service to reduce the audio and video latency and improve the overall meeting experience for video integration participants. Latency for each call still depends on the relative locations of the participant and the Microsoft Teams meeting, but is now similar to SIP video endpoints connecting to Webex Meetings.

### Video quality improvements

**April 13, 2021** 

We made improvements to reduce temporary degradation in outgoing video quality from video integration participants. The degradation involved pulsating or temporary pixelation of the main people video stream and the content video stream. These optimizations streamline video change requests from the Microsoft Teams MCU, and also result in visual improvements for other participants. These changes apply to all participants who connect through the Webex video integration. You don't have to enable them.

## Overview

Here's how the integration enhances the device user's experience when they join Microsoft Teams meetings hosted in your organization:

- Webex meeting experience—multi-screen with flexible layout options
- Participant list showing both Microsoft and video integration participants
- Bi-directional content sharing between the device and Microsoft Teams
- Meeting status indicators on the device, including recording, transcription, and participant waiting in lobby

### Video device join experience, from the meeting invitation

A standard email invitation to a Microsoft Teams meeting has meeting join details that include a clickable link to join the meeting from the Microsoft Teams client. The section may also include audio dial-in information with an audio conference ID and phone numbers to join as an audio-only participant. When you enable the video integration, the invitation join details section expands to include a block of video conferencing device join details.

**_Video join details in Microsoft Teams meeting invitation_**

When it is time to join the meeting, video device users can call the SIP video address "Tenant Key" under the Join on a video conferencing device section. The Tenant key calls the Webex interactive voice response (IVR) system, which asks the caller to provide the "Video ID". (This was previously called "VTC ID").

The Video ID is specifically for video devices and is different from the audio conference ID, if one is included for the meeting.

The SIP IVR video address is specific to your organization and is formed from your organization's [Webex SIP subdomain](https://help.webex.com/2mlmjv) in the format `<subdomain>@m.webex.com`.

Below the Video ID, the invitation links to a web page of "More info" dialing instructions, which shows how to join the meeting by dialing directly (in the following section).

### Alternative video device join method—direct dial

Video callers can join the meeting directly, bypassing the IVR, by using a SIP address in the format `<VideoID>.<TenantKey>@m.webex.com`. This method is listed at the top of the "More info" dialing instructions web page linked to in the invitation. The web page also repeats the IVR prompt join details from the meeting invitation.

**_Alternate "More info" dialing instructions (hyperlinked meeting-specific web page)_**

### Alternative video device join method—Join button

If you also enable the Webex Hybrid Calendar Service, devices can receive One Button to Push (OBTP) when schedulers invite them to Microsoft Teams meetings. An attendee using the device then simply presses the Join button when it's time to connect the device to the meeting. The meeting's entry shows the Microsoft Teams logo to indicate the type of meeting the attendee is joining.

### Alternative video device join method—Microsoft Teams button

Cisco devices have a Microsoft Teams button to help users join Microsoft Teams meetings. 

The Microsoft Teams button isn’t shown on the devices by default. To enable it directly on the device or in Control Hub, see [Enable WebRTC and CVI to Join a Microsoft Teams Meeting from Board, Desk, and Room Series](https://help.webex.com/nsx4cpe).

Device users can then join Microsoft Teams meetings by tapping the Microsoft Teams button and entering the video conference ID and address. See [Join Microsoft Teams Meetings on Board, Desk, and Room Series](https://help.webex.com/n3r2ihu).

You can make joining easier for users by setting the default CVI meeting address on the device with 

```
xConfiguration UserInterface MeetingJoin CVITenants: address
```

See <https://roomos.cisco.com/xapi/Configuration.UserInterface.MeetingJoin.CVITenants/>.

### Alternative video device join method—Cross-tenant join

Device users can join Microsoft Teams meetings hosted outside your company (in a different Microsoft Teams tenant) using VIMT's "cross-tenant join" feature, even if the meeting invite has no Video ID or Tenant key in the meeting invite.

Devices can use cross-tenant join using the OBTP Join button if Hybrid Calendar is configured, or by using the Teams button in RoomOS, then entering the meeting ID and passcode from the meeting invite.

When VIMT is deployed, cross-tenant join is automatically available on your devices that are Webex cloud-registered, or that use Webex Edge with `JoinProtocol=Webex`. 

RoomOS SIP devices can optionally enable cross-tenant join. See [Calendars and cross-organization invitations](#concept-template%5F3038b69c-078f-4f84-9856-6fc819a2b3c1) in this document.

## Requirements for Video Integration for Microsoft Teams

| Requirement                                                                                                     | Notes                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An active Webex organization                                                                                    | If you do not yet have an active Webex organization, we will provision one for you when you purchase the video integration.                                                                                                                                                                                                                                                     |
| A Microsoft 365 tenant with Microsoft Teams accounts for users in the organization                              | The setup process requires an account that can sign in as a Global administrator for the tenant to grant application permissions, and a Microsoft Teams administrator account for the tenant that can execute PowerShell commands.                                                                                                                                              |
| Webex video integration licenses, one for each of the video devices that you plan to use with this integration. | The subscription for this service must be provisioned to your Webex organization in Control Hub and set up as described in this article.                                                                                                                                                                                                                                        |
| Cisco devices registered to your Webex organization, or other SIP video devices that can make internet calls.   | Your network call control must allow business-to-business (B2B) calling to Webex, and meet the Webex certificate requirements. For help, see [How Do I Allow Webex Meetings Traffic on My Network?](http://help.webex.com/WBX264/) Video devices must have the signaling and media network access defined in [Ports and protocols for video integration traffic](#id%5F137332). |
| Webex Hybrid Calendar Service (Optional, but highly recommended)                                                | Required to provide One Button to Push (OBTP) to video devices. For the best experience using Hybrid Calendar, all meeting organizers and shared room mailboxes should be Hybrid Calendar-enabled. The Hybrid Calendar Service has additional requirements. For instructions, see [Deployment Guide for Hybrid Calendar](https://help.webex.com/n6cwujdb/).                     |

### Ports and protocols for video integration traffic

#### Signaling

Video devices connect to the Webex data centers for signaling. 

__Table 1\. Signaling with Webex data centers__
| Video Device                                 | Protocol | Port Number(s) | Comments                                                                                                                                                                          |
| -------------------------------------------- | -------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cisco device registered to your organization | TCP      | 443            | For requirements, see [Network requirements for Webex services](https://help.webex.com/en-us/WBX000028782/Network-Requirements-for-Webex-Teams-Services)                          |
| Other SIP video device                       | TCP      | 5060/5061      | For requirements, see [How do I allow Webex Meetings traffic on my network?](https://help.webex.com/en-us/WBX264/How-Do-I-Allow-Webex-Meetings-Traffic-on-My-Network#id%5F134996) |

#### Media

The media path for video integration calls differs from other Webex Meetings call flows, because specialized media clusters hosted by Azure handle this call type. 

**These specialized media clusters aren’t part of the standard Webex Meetings address ranges. You must ensure that traffic can reach these additional IP networks.** 

The specialized media clusters are not part of the reachability tests that Webex-registered devices perform. Failure to open access to any of the media cluster IP ranges can lead to call failures. The integration attempts to use the optimal media cluster for each call based on where the caller originates. However, you must allow access to all media clusters because the media cluster used can vary based on run-time conditions.

__Table 2\. Media with specialized media clusters__
| Video device                                 | Protocol                                            | Port number(s)                                                                                 | Media cluster regions and IP ranges                                                                                                                                                                                                                                                             |
| -------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cisco device registered to your organization | TCP                                                 | 443 5004 We only use these TCP ports as a fall back option for the preferred (UDP) media ports | Australia East: 20.53.87.0/24 Southeast Asia: 40.119.234.0/24 4.144.190.0/24 US East 2: 52.232.210.0/24 20.57.87.0/24 4.152.214.0/24 4.152.180.0/24 US West 2: 20.120.238.0/23 UK South: 20.68.154.0/24 20.108.99.0/24 4.158.208.0/24 West Europe: 20.50.235.0/24 20.76.127.0/24 4.175.120.0/24 |
| UDP                                          | 5004 (Devices & Webex clients) 9000 (Webex clients) |                                                                                                |                                                                                                                                                                                                                                                                                                 |
| Other SIP video device                       | UDP                                                 | 36000-59999                                                                                    |                                                                                                                                                                                                                                                                                                 |

See [Network requirements for Webex services](https://help.webex.com/WBX000028782) for other Webex services, and the protocols and ports they use.

## Create the video integration from Control Hub

Follow these steps to register Microsoft Teams to the Webex cloud, authorize service permissions with Microsoft, and enable Cisco video devices to join Microsoft Teams meetings. The setup wizard in [Control Hub](https://admin.webex.com/) guides you through the process.

The Microsoft user has to authenticate at least two separate times during the setup. We recommend that the steps be done by a Microsoft administrator whose account has been given full administrator access to Control Hub. 

Before you begin

- Make sure that you've met all of the _Requirements for Video Integration with Microsoft Teams_ (in this document).
- If you haven't already done so, [set up your Webex organization](https://help.webex.com/gpr322).
- If you haven't already done so, [add a subdomain for Webex SIP addresses](https://help.webex.com/2mlmjv/) in your organization.
- You need the following administrator access:

  - Microsoft Tenant Global Administrator privileges in your organization
  - Microsoft Teams administration privileges within the tenant
  - Full administrator privileges for your own Webex organization, and a web browser that can access Control Hub. (See [System requirements for Webex services ](https://help.webex.com/fz1e4b) for browser compatibility.)  
  Users from any other organization that may have access to your Control Hub (such as Partner Admins) do not qualify. Use a full administrator account in the Webex organization that you are configuring.
- You also need access to run Microsoft PowerShell commands.

  - Latest Microsoft Teams PowerShell module installed. See [Install Microsoft Teams PowerShell Module](https://learn.microsoft.com/en-us/microsoftteams/teams-powershell-install) for more information.
  - At the time of this writing, Microsoft recommends PowerShell version 5.1 or higher when using the Microsoft Teams module, so we recommend using PowerShell on a Windows machine. See [PowerShell 5.1 system requirements](https://learn.microsoft.com/en-us/powershell/scripting/windows-powershell/overview?view=powershell-5.1) for more information.

| 1  | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Go to Organization Settings \> SIP Address for Cisco Webex Calling to check if you've set the subdomain for Webex SIP addresses. If the subdomain is not set, see [Change your Webex SIP address](https://help.webex.com/2mlmjv).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3  | Go to Services \> Hybrid. On the Video Integration card for Microsoft Teams, click **Set Up**. ![Create the video integration for Microsoft teams from Control Hub](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/450001-451000/450221.jpg) If the card doesn't show the Set Up option, make sure that your license is active.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4  | On the Video Integration Setup screen, click Authorize. ![Authorize video integration setup for Microsoft teams from Control Hub](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/450001-451000/450222.jpg) You’re redirected to a Microsoft sign-in window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 5  | Sign in with a Global Administrator account. The application asks you to consent to the permissions it needs to check your role in the Microsoft tenant and get details of the tenant. ![Microsoft sign-in window for video integration](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/484001-485000/484704.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 6  | Review the requested permissions and click Accept. You don’t need to check Consent on behalf of your organization, as it’s not required. The application checks your authorization to continue the setup. If you're authorized, you're redirected to another Microsoft consent request for permissions. You may be prompted to sign in again. If so, use your Global Administrator account. ![List of permissions requested for Webex video integration for MS Teams](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/449001-450000/449221.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 7  | Review the requested permissions, then click Accept to grant the Webex Video Integration application the required permissions. The browser should redirect you to the Control Hub Video Integration Setup screen when you've finished the authorization steps. If not, note the error message, correct the concerns, and restart the setup process.![Control Hub Video Integration Setup screen](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/450001-451000/450224.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 8  | Open a PowerShell window on your computer, and install the Microsoft Teams PowerShell module if it's not already installed: At the PowerShell command prompt, type the following command: Install-Module MicrosoftTeams -AllowClobber If you are prompted to trust the PSGallery repo, acknowledge with **Y** to trust, and proceed with the download and installation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 9  | Import the Microsoft Teams module and connect to your Teams tenant: Use the existing window or open a new PowerShell window on your computer. At the PowerShell prompt, type the following command: Import-Module MicrosoftTeams At the PowerShell prompt, type the following command: Connect-MicrosoftTeams A Microsoft sign-in page appears. Enter the credentials for the user with Microsoft Teams administration privileges for the tenant. If successful, you get feedback on which account and tenant you successfully signed into. If you get an error, repeat the command and refer to the Microsoft PowerShell documentation for additional assistance. You must successfully sign in to your Teams tenant before proceeding to the remaining steps.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 10 | From the Video Integration Setup screen in Control Hub, click ![an icon depicting the copy action](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483842.svg) to copy the text of the New-CsVideoInteropServiceProvider command from the **first** text box and paste it into the PowerShell session. Then run the command. This command is specific to your tenant. The command will not work unless you have imported the Microsoft Teams PowerShell module and successfully signed in to your tenant as described in the previous step. Take special care when copying the command to PowerShell, so that the copied text is not modified in any way when handling the text. Sending the command through email, messaging clients, or other handling may result in added formatting, character substitutions, or additional characters, which will break the configuration. PowerShell will not necessarily reject the malformed text. We recommend you directly copy and paste the command from Control Hub to PowerShell when possible, or verify the text using a plain text editor before pasting to PowerShell. This command creates a new CVI provider of type Cisco and sets the following:The tenantKey assigned by WebexThe Exchange invite Alternate Instructions URL provided by Webex |
| 11 | Choose how you want to enable the integration for your users. For help, see [Grant-CsTeamsVideoInteropServicePolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csteamsvideointeropservicepolicy?view=skype-ps). To enable the integration for **all** users in your organization, copy the text of the Grant-CsTeamsVideoInteropServicePolicy command from the **second** text box.To enable all users:Grant-CsTeamsVideoInteropServicePolicy -PolicyName CiscoServiceProviderEnabled -Global To enable the integration for an individual user, copy the text of the Grant-CsTeamsVideoInteropServicePolicy command from the second text box. Replace \-Global with \-Identity, and add the user's email address after it.To enable user jamie.smith@company.com:Grant-CsTeamsVideoInteropServicePolicy -PolicyName CiscoServiceProviderEnabled -Identity jamie.smith@company.com Paste the command into your PowerShell session and run it.                                                                                                                                                                                                                                                                                                                                                                                              |
| 12 | When you are done with the PowerShell commands, click Ok on the Video Integration Setup screen in Control Hub to complete the setup.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

The PowerShell changes to the Microsoft tenant can take time to propagate in the Microsoft 365 environment. Microsoft warns this can take up to 72 hours, although it typically takes less than two hours. 

You can test if the changes for a user have become active by having the user create test meetings in Microsoft Outlook or Microsoft Teams. If the changes have successfully propagated, you should see the video integration join details in the meeting invitation. If the join details are not present, wait longer and repeat the test again.

What to do next

If you need to view or copy the PowerShell command text at a later time: 
1. In the Control Hub left navigation menu, under Services, select Hybrid.
2. Find the Video Integration for Microsoft Teams card, and click Edit settings.

To take full advantage of the calendar and OBTP Join features of the Hybrid Calendar Service, make sure your Cisco devices are either [registered to the Webex cloud](https://help.webex.com/n3hi0z8) or linked to the cloud using [Edge for devices](https://help.webex.com/cy2l2z).

Set up the Hybrid Calendar Service if you want OBTP for devices. See [Make it easier for video devices to join meetings with OBTP](https://help.webex.com/yvz1kw/).

## Join button and Hybrid Calendar considerations

As mentioned in [Alternative video device join method—Join button](#id%5F137331), if you enable the Hybrid Calendar Service, you can further enhance the calling experience for your organization using One Button to Push (OBTP).

With OBTP, Cisco devices in your organization automatically show a **Join** button shortly before the Microsoft Teams meeting starts, when they're included in the meeting:

- Personal mode devices show the button if the **user** associated with the device accepts the meeting invitation. (The user must be enabled for the calendar service in Control Hub.)
- Shared mode devices show the button if the **room mailbox email address** associated with the device accepts the meeting invitation. (The device's workspace must be enabled for the calendar service in Control Hub.)

### Exchange mailbox requirements for OBTP

The Hybrid Calendar Service will only process a meeting invitation (to add the details needed for OBTP) if the meeting scheduler or at least one of the invitees has the service enabled. If your organization doesn't have many calendar service-enabled users, it may be common for a device invitation to trigger the processing, rather than the scheduler or a user. When this happens, it's critical that your Exchange configuration retain all of the details that the service needs in the invitation.

You can enable users without Webex licenses for the Hybrid Calendar Service.

By default, the Exchange Online settings delete the meeting details from invitations sent to room mailboxes. Apply the following PowerShell commands to the room mailboxes of all shared mode devices that you enable for the Hybrid Calendar Service, so that the body of the meeting invitation is preserved. This is needed by VIMT.

Set-CalendarProcessing -identity "room" -DeleteComments $false

These two additional commands are optional and recommended:

Set-CalendarProcessing -identity "room" -DeleteSubject $false

Set-CalendarProcessing -identity "room" -AddOrganizerToSubject $false

If you want to be able to forward invitations scheduled from outside of your Microsoft organization to the device, add the following command:

Set-CalendarProcessing -identity "room" -ProcessExternalMeetingMessages $True

### URL rewriting and OBTP

You may be using the Safe Links feature from Microsoft Defender for Office 365 (or similar security software) to rewrite URLs in email to protect users from malicious links. 

This software interferes with OBTP, so you need to configure exceptions for Microsoft Teams meeting invitations that include Webex URLs.

Specifically, you must configure your security software to not rewrite the "More info" instruction hyperlink. Otherwise, the Cisco Hybrid Calendar Service fails to create the Join button for those meetings.

For Microsoft Defender, you can add the URL pattern to the Do not rewrite the following URLs portion of your Safe Links policy. 

__Table 3\. Worldwide Commercial Environment__
| Usage                      | URL pattern              |
| -------------------------- | ------------------------ |
| More info Instruction link | https://www.webex.com/\* |

For more information about Microsoft Defender’s Safe Links policies and configuration, see [Set up Safe Links policies in Microsoft Defender for Office 365](https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/safe-links-policies-configure?view=o365-worldwide).

### Supported device types for OBTP

The following devices and clients support OBTP for Microsoft Teams meetings using the video integration and the Hybrid Calendar Service:

- Cisco Board, Room, and Desk devices
- Cisco Room Kit and Room Phone
- Cisco MX, SX, and DX series

The devices must be either [registered to the Webex cloud](https://help.webex.com/n3hi0z8) or linked to the cloud using [Edge for devices](https://help.webex.com/cy2l2z).

If your devices are getting the Join button from Cisco TMS or Cisco TMSXE, they cannot get the Join button for Microsoft Teams meetings.

As an alternative, you can simplify joining for the affected devices by adding the SIP IVR video address of the Microsoft Teams meeting as a speed dial or macro.

## Features and limitations

This section explains limitations and feature behavior for the Video Integration for Microsoft Teams.

### Relationship between organizations and tenants

We currently support a 1:1 relationship between Webex organizations and Microsoft 365 tenants:

- A single Webex organization can interoperate with only one Microsoft 365 tenant.
- Your Microsoft tenant can support multiple _different_ video integrations; for example, the tenant can simultaneously interoperate with Cisco and Pexip. However, the tenant can only have one integration of each type; so, one from Cisco, and one from Pexip.  
If you have multiple Webex organizations, choose one to interoperate with your Microsoft tenant using the Webex video integration.

### Availability

- We only support the Worldwide instance of Microsoft 365\. ( [Other instances](https://endpoints.office.com/version?clientrequestid=b10c5ed1-bad1-445f-b386-b919946339a7) which we do not support include USGovDoD, USGovGCCHigh, China, and Germany.)
- We only support commercial Webex organizations in [countries and regions where Webex paid subscriptions are available](https://help.webex.com/n6fwepj). (We don’t support FedRAMP-authorized Webex offerings.)

### Video interoperability

- The integration supports Cisco devices as follows:

  - Registered to Webex
  - Registered on-premises and using Webex Edge for Devices
  - Registered on-premises making SIP calls  
The integration also supports third-party devices making SIP calls.
- The maximum number of participants is about 450 in the same Microsoft Teams meeting; video devices joining above this limit may become unreliable.  
We recommend that you choose Teams live events, Teams town halls, Webex Webinars, or Webex Events, for meetings where you expect hundreds of participants.
- VIMT can be used to join Microsoft Teams Meetings and Microsoft live events or town halls as a presenter. See [Webex Video Integration for Microsoft Teams live events](https://help.webex.com/4y1y9x) and [Webex Video Integration for Microsoft town halls](https://help.webex.com/dxz5jdb/).  
You can't cross-tenant join to Teams live events or town halls in other Microsoft tenants.
- The integration does not support H.323 or IP address dialing.  
You can interwork these legacy protocols to SIP calls using a Cisco Expressway deployment.
- For interoperability with other Cisco and third-party equipment, see [Webex video compatibility and support](https://help.webex.com/ipxxr2).
- You can use One Button to Push (OBTP) from Webex App to join a paired device to a Microsoft Teams meeting.  
(No cross-tenant join from Webex App.)
- You can't join a Microsoft Teams meeting using only Webex App.  
The integration only supports devices paired with Webex App for OBTP, or wireless share, to join a Teams meeting on the video device. Other device pairing features, including dialing from Webex App, and device controls from Webex App, are not available.
- Interactive whiteboarding from Cisco devices is not available for meetings on Microsoft Teams. Users can share whiteboards from the device as video content (BFCP support).
- The integration doesn’t support audio-only devices such as IP phones or PSTN phones.  
Audio-only devices should call in using the Microsoft Teams PSTN gateway functionality.  
IP phones, like the Cisco Video Phone 8875, can use this solution.
- Webex Video Integration for Microsoft Teams meetings are not supported on devices setup in companion mode.

### Layouts

#### Layouts on single screen devices

Participants using a single participant screen, including Cisco devices and third-party devices, see the Grid layout by default.

Single screen participants can use layout controls to change the layout between the following:

- Grid (default)
- Prominent
- Focus
- Stack
- Overlay
- Teams Large Gallery

During content sharing, single screen devices see the Stack layout by default. 

Cisco devices that are Webex-registered, Webex Edge using the Webex join protocol, or calling SIP with ActiveControl enabled will have individual panels for each participant stream in the Stack layout, while other device types will only see a single participant panel.

#### Layouts on dual screen devices

Dual screen layouts are used for Cisco devices that have two participant screens and are Webex-registered, Webex Edge using Webex for join protocol, or calling SIP with ActiveControl enabled.

Dual screen participants see the Grid layout on each screen by default. 

Dual screen participants can use layout controls to change the layout between the following:

- **Prominent**–Focused/Active speaker on primary screen, Grid layout (3x3) on second screen.
- **Focus**–Active speaker full screen on each screen, voice switched.
- **Grid layout** (Default)–Dual people screen, 2x2 max on each screen.
- **Large Gallery**–Microsoft Teams Large Gallery layout on second screen (up to 7x7), Focused/active speaker on first screen.

The Overlay and Stack layouts are not available when two participant screens are active.

Content on dual screen devices will be shown on a dedicated third screen if it has one. Otherwise, the content replaces the layout on one of the two screens, and you can use layout controls to change the layout on the other screen.

#### Microsoft Teams Large Gallery layout

When participants use layout controls to select the Large Gallery layout, they see the Microsoft Teams Large Gallery composite view. This layout shows up to 49 remote participants in a 7x7 grid. 

#### Spotlight

Teams hosts and presenters via Teams clients can mark up to seven meeting participant(s) to be spotlighted, which forces that participant to be visible in all participant’s layouts. For VIMT participants, spotlighted participants will be prioritized in your currently selected layout and will have a spotlight icon after their name in the layout. Spotlighted participants are not assigned to fixed locations in the layout, but rather they get the highest priority positions in the layout, and other non-spotlighted participants fill in the rest of the screen, if room allows.

#### Layout controls

VIMT participants can use a device’s local meeting controls or DTMF tones to change the layout they are viewing.

Controlling your layout via a device’s meeting controls is available for Cisco devices that meet any of the following requirements:

- Are registered to Webex.
- Using Webex Edge for Devices with Webex as the join protocol.
- CE and Room OS devices registered on-premises to CUCM or Expressway, and using SIP with ActiveControl (iX protocol enabled).

All other video integration participants can cycle through layout options by sending DTMF tones 2 and 8 from the device. Icons to assist will be shown in the video image when using DTMF to cycle through layout choices. DTMF controls for layouts are available to all devices that can send in-band DTMF tones. 

#### Change the VIMT default layout for your meetings

You can customize the default layout used for callers to your VIMT deployment. To set the default layouts for your organization:

1. Sign in to [Control Hub](https://admin.webex.com/).
2. Go to Services \> Hybrid, then click the Video Integration for Microsoft Teams card.
3. Click Edit Settings, then click the table row for the Tenant to edit.
4. Edit the choices in the dropdown list for single and/or dual screen devices, then click Save.

#### General layout features and limitations

- Participants can see up to nine video streams at the same time (as counted across all people screens), unless they are using the Large Gallery layout.  
The number of visible streams depends on the selected layout and the device type.  
All participants beyond that limit are shown with Webex-generated name labels instead of a video stream of the remote participant.
- The Grid layout is limited to a maximum of 3x3 panels for a single screen participant, and 2x2 when showing two participant screens. This is in order to maximize the video size of each participant by preventing the grid from expanding beyond the limit of nine visible participants.
- If a VIMT participant is not sending video (for example, camera off), then Webex substitutes a white name label on a black background for that participant’s video stream. This is what's seen by other meeting participants.  
That participant is treated as a video participant by Microsoft Teams (not an audio-only participant in Teams clients), and will not display in layouts like an audio-only participant.
- Cisco devices using three people screen configurations, with dedicated content screens, automatically use the Overlay layout on all people screens.  
Room switching and Panoramic experience features are not supported.
- Spotlighting does not force a VIMT participant’s layout to change. If the number of spotlighted participants exceeds the number of video windows in the VIMT participant’s current layout, a spotlighted participant may be off-screen. If a spotlighted participant is off-screen and becomes the main speaker, it will automatically swap into the active layout, displacing a inactive speaker.

**Microsoft Teams Large Gallery limitations**

- The Gallery view shows all video-enabled participants, including yourself and the active speaker. You may see duplicate streams.
- There is no option to view a second page of the Gallery view for VIMT participants. When a participant who is not shown in the grid becomes the active speaker, they will be switched into the current grid view.
- Teams client meeting participants with their cameras off are not shown in Large Gallery layout.
- Other VIMT participants with their cameras off are seen in the grid with the Webex-generated white text avatar for their video image.

### Calendars and cross-organization invitations

- Participants from outside your organization can join your Microsoft Teams meetings from their video devices by dialing your IVR video address (`<yoursubdomain>@m.webex.com`) and entering the Video meeting ID for the meeting at the prompt, or by using your direct dial alternative (`<VideoMeetingID>.<yoursubdomain>@m.webex.com`).
- This video integration allows joining meetings hosted by other Microsoft tenants if the invite has CVI join details, or if not, using cross-tenant join.  
To join a Teams meeting that is hosted by a different Microsoft tenant with a Video ID, you can:

  - Use the video address of the CVI video integration that is enabled for that tenant.  
  If you are using OBTP, tap Join. Otherwise, you can manually dial the SIP address in the meeting invite.  
  Alternatively, if no Video ID is shown in the invite, use the RoomOS Teams button (or custom macro) to join by providing the Teams Meeting ID and passcode from the invite.
  - See [Enable WebRTC and CVI to Join a Microsoft Teams Meeting from Board, Desk, and Room Series](https://help.webex.com/nsx4cpe).
  - RoomOS devices using SIP (including Edge with `JoinProtocol=SIP`) can optionally enable the cross-tenant join feature as follows:

    - `Set xConfiguration MicrosoftTeams Cvi CrossTenant: Enabled.` (Default is Auto)  
      Auto=Enabled is configured for Cloud-registered devices and VIMT.  
      Auto=Disabled is configured for on-prem SIP-registered devices.
    - RoomOS SIP devices also need to set VIMT per customers TenantKey (on the left side of @m.webex.com):  
      `Set xConfiguration UserInterface MeetingJoin CVITenants:<example>`
- Issues arising from missing comments/body details or organizer-based processing also apply when processing OBTP for Microsoft Teams meetings.  
RoomOS uses meeting ID and passcode from the Teams meeting invite to prepare the Join button for cross-tenant meetings. If these details are not present, or difficult to parse from the invite, then the Join button may not work as expected. In this case, OBTP with direct guest join using WebRTC will be used.  
See [Known Issues with Hybrid Calendar Service](https://help.webex.com/qtrehbb).

### Meeting features

#### Joining

Cisco devices connecting through the video integration have the Webex IVR and splash screens localized to the language set in the device. US English is the default for all other scenarios. Localization is supported for Cisco devices using cloud calling or SIP calling (requires CE9.14.3 or newer.)

#### Recording

Video integration participants don't have controls to start or stop meeting recordings. Microsoft Teams users must manage meeting recording. 

#### Sharing

- Video integration participants can share content into the Teams meeting using their device’s share feature (BFCP content channel supported).  
  - Up to 1080p 30fps is supported.
  - Other participants will see the content as a _Share screen_ session.
- Video integration participants can see and hear content from other participants who use the _Share screen_, _Share window_, _Content from camera_, or _Powerpoint Live_ features. Up to 1080p 30fps is supported. Other forms of content, such as _Excel Live_ and _Whiteboard_, are not supported and will not be seen by video integration participants.
- Presenter mode features, such as _Standout_, _Side by Side_, and _Reporter_, are not seen by video integration participants. If used, the content and presenter will be seen separately—the same as if the Presenter mode feature was not used.
- The video integration does not support the _Take Control_ feature with other participants during sharing.
- If meeting policies or a meeting organizer limits who can share content in a Teams meeting using the Who Can Present? meeting option, then video integration participants must have the Presenter role to share content in the meeting. When joining through the video integration, a caller is an attendee by default. Callers who join as trusted callers will have the Presenter role assigned automatically, regardless of the value set in Who Can Present? Meeting organizers can toggle a participant's role as needed using the participant list in their Teams client.
- If meeting policies or a meeting organizer limits who can share content in the Teams meeting using the Who Can Present? meeting option, sharing content will not work as expected for video integration participants who only have the attendee role in the meeting. The caller will be able to start sharing on their device, but their content will not be seen by other participants in the meeting. Sharing may also interfere with receiving content from another user.

#### PowerPoint Live support

When a meeting participant shares content using PowerPoint Live, video integration participants will see the shared slides as static images in their content channel. The slides automatically update as the presenter changes slides. Slide changes may take several seconds to update.

Because the VIMT participant sees the slide as static content, some features that Teams clients offer are not available:

- No Private View—You cannot advance or switch between slides on your own. The VIMT participant will always see the presenter's current slide.
- No Animations—The static slide shows all animated elements as visible and static. Slides that have elements that appear or disappear will all appear at the same time and may overlap or clash.
- No embedded video or audio playback—Embedded videos will appear as a static preview image without playback or audio.
- No Annotations—Annotations added by a presenter are not seen by the VIMT participant.
- Cameo mode—VIMT will see the placeholder for cameo video in a slide, but the presenter video will not be shown in the slide. The presenter's video will stay in the people monitor layout.
- No Magnified View—VIMT participants cannot change the zoom level of the content seen.
- No High Contrast View—This feature is not available.
- No Translations—This feature is not available.

#### On-screen notifications

We show notifications to video integration participants when:

- Recording starts or stops. A recording icon stays on screen while recording is active. Devices with Webex cloud registration or ActiveControl get localized text and locally rendered icons.
- A Teams participant raises their hand. The notification includes their screen name and the hand icon. The participant list also shows the raised hand icon.  
VIMT participants can’t raise their hands, or lower the hands of others.
- Participants are waiting in the Teams meeting lobby (a Teams client participant must admit them).
- Transcription starts or stops in the meeting. A transcription icon stays on the screen while transcription is active.

#### In-meeting chat

Microsoft Teams chat isn't available to video integration participants.

#### Whiteboarding

- Microsoft Teams whiteboarding isn't available to video integration participants.
- Interactive white boarding from Cisco devices is not available for meetings on Microsoft Teams. Users can share whiteboards from the device as video content (BFCP support).

#### Mute controls and indicators

There are two types of mutes for VIMT participants that users must be aware of:

1. The device's local mute feature.
2. The Teams mute status—the server side mute state for the participant in the Teams meeting.

- Devices have audio from microphones' sources, as well as potentially having audio from content sharing sources. For Cisco devices, the local mute feature has a light indicator and blocks the local microphones from transmitting, but does not block content audio when sharing content.
- A Teams mute blocks all audio from the participant to the meeting. The mute indicator seen in the Teams participant list always reflects the Teams mute status of the participant, but this does not necessarily match the local device’s mute state.

How these two types of mutes interact in a VIMT call, and the status seen by users, differs depending on the device and type of call placed.

**Calls by cloud-optimized/cloud-registered devices**

When not sharing content, the device's local mute and Teams mute status are kept synchronized. The device’s local mute lights follow the device’s local mute status. Muting and unmuting locally will update the Teams mute state and the icons seen in the Teams participant list. If you are muted by another Teams participant, your local mute will also be enabled and light up. Due to privacy restrictions, you cannot be unmuted by a remote participant.

When sharing content, enabling the device's local mute will not turn on the Teams mute. This allows you to mute your local microphones, while still having your content's audio heard in the meeting. 

 Because the Teams mute is not enabled, the Teams participant list will not show you as muted. 

If you are muted in the meeting by another Teams participant, both content audio and local microphones will be blocked from the meeting and your local mute indicator will turn on and display. You can unmute yourself using your device's unmute feature, and this will clear both the Teams mute and the local microphone mute.

**DTMF mute commands for cloud-optimized/cloud-registered devices**

For cloud-optimized/cloud-registered devices, you should always use the device's local mute feature and avoid use of DTMF commands for mute.

- When not sharing content, DTMF \*6 can only be used to enable the Teams mute. When not sharing content, DTMF \*6 will not toggle the Teams mute off.
- When sharing content, DTMF \*6 will toggle the Teams mute on and off, but will not unmute the device's local mute status or indicator.

**SIP Calls with ActiveControl**

For SIP calls with ActiveControl (iX protocol) negotiated, the local and Teams mutes behave the same as on cloud-optimized/cloud-registered devices as described above.

**DTMF mute commands for SIP with ActiveControl**

For SIP Calls with ActiveControl, use the device's local mute feature. Do not use DTMF commands to mute and unmute. 

- When not sharing content, DTMF \*6 can only be used for Teams mute. DTMF \*6 will not toggle the Teams mute off when not sharing content.
- When sharing content, DTMF \*6 will toggle the Teams mute on and off, but will not unmute the device's local mute status or indicator. You may also see a _You are being asked to unmute_ prompt on-screen when a Teams mute is cleared.

**SIP calls without ActiveControl**

When using SIP calls without ActiveControl, the device’s local mute feature and the Teams mute are not synchronized. 

When a device locally mutes or unmutes, it is not seen in the Teams participant list. 

If sharing content from a Cisco device, the device’s local mute will block microphones, but not the content audio. Third-party device behavior may differ.

If the participant is muted by another Teams participant using the participant list, all audio from the participant will be blocked in the meeting, but the device’s local mute feature is not toggled on. Due to privacy restrictions, you cannot be unmuted by a remote participant—the participant must clear the Teams mute themselves using DTMF commands. Webex provides on-screen message prompts to let the participant know if the Teams mute has been toggled on or off, and instructs them to use the DTMF \*6 command to unmute.

**DTMF mute commands for SIP without ActiveControl**

SIP participants without ActiveControl can use the DTMF sequence \*6 to toggle their Teams mute on or off for their call. On-screen text prompts indicate _You have been muted_ or _You have been requested to unmute_ when the Teams mute is enabled or cleared.

The following table summarizes VIMT mute behavior depending on the call type, when sharing content, and when not sharing content.

__Table 4\. Summary of VIMT mute behavior__
| Call type                                 | When not sharing content                                                                                | When sharing content                                                                                                                                                                                                                                           | DTMF mute commands                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Cloud-registered /cloud-optimized devices | Local mute and indicators are synchronized with Teams mute and roster.                                  | Local mute only mutes microphones; content audio is still sent to meeting. If a participant has muted themselves locally, they are not shown as muted in the Teams roster. Muting in the Teams roster blocks all audio and turns on local mute and indicators. | Do not use DTMF mute controls—use the device's mute feature.                                      |
| SIP with ActiveControl                    | Local mute and indicators are synchronized with Teams mute and roster.                                  | Local mute only mutes microphones; content audio is still sent to meeting. If a participant has muted themselves locally, they are not shown as muted in the Teams roster. Muting in the Teams roster blocks all audio and turns on local mute and indicators. | Do not use DTMF mute controls—use the device's mute feature.                                      |
| SIP without ActiveControl                 | Local mute and indicators are not linked to Teams mute. A local mute does not show in the Teams roster. | Local mute and indicators are not linked to Teams mute. A local mute does not show in the Teams roster.                                                                                                                                                        | Use DTMF \*6 to enable or clear Teams mute. On-screen messages are shown when Teams mute changes. |

- Mute lights/indicators on Cisco devices follow the device’s local mute state.
- When sharing content on Cisco devices, content audio is still played to the meeting, even if the local mute is enabled and the light/indicators are on.

### Microsoft Teams lobby

- Trusted devices from your own organization can streamline how they join meetings by automatically bypassing the Microsoft Teams lobby. A device is considered trusted in either of the following cases:

  - It is a Cisco device registered to the Webex organization where VIMT is deployed using cloud calling, or Webex Edge using the Webex join protocol.
  - It is a device using on-prem SIP calling, which uses SIP TLS and presents a certificate that has a Subject Alternate Name matching one of your [verified SIP domains](https://help.webex.com/nrasz4w/).  
  If you enable TLS verification on your SIP calling to Webex, your TLS verification should check for the Subject Alternate Name (SAN) **sip.webex.com** (not m.webex.com).
- If a meeting organizer sets the Who can bypass the lobby? meeting option to People who were invited or Only organizers and co-organizers, callers attempting to join as trusted callers will be placed into the lobby of the Teams meeting. The caller will see the Waiting for others to join splash screen instead of the expected lobby splash screen.
- If you disable Anonymous users can join a meeting in the Microsoft Teams tenant settings, then video integration participants cannot join through the lobby. Video integration participants who would normally bypass the lobby will still be able to join Microsoft Teams meetings.
- Cross-tenant join requires the device to be trusted and does not offer lobby bypass into another Teams tenant. The Teams meeting host(s) must admit those devices from the lobby.

### Networking

- Calls to the video integration do not use Webex Video Mesh nodes; traffic is direct from the device to the cloud.
- The specialized media clusters used by the video integration for Microsoft Teams are not part of the reachability tests that Webex-registered devices perform. Failure to open access to any of the media cluster IP ranges can lead to call failures. The integration attempts to use the optimal media cluster for each call based on where the caller originates. However, you must allow access to all media clusters because the media cluster used can vary based on run-time conditions.
