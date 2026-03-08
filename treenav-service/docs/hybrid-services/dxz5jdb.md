---
title: "Webex Video Integration for Microsoft Teams Town halls"
product: "Hybrid Services"
article_id: "dxz5jdb"
url: "https://help.webex.com/en-us/article/dxz5jdb"
last_updated: "2025-08-20"
description: "Town halls are a broadcast-style meeting type in Microsoft Teams, which provide
a one-to-many format with advanced production capabilities, and a structured
approach for attendee engagement."
tags: ["hybrid-services"]
source: "help.webex.com"
---

# Webex Video Integration for Microsoft Teams Town halls

- [Overview](#concept-template%5Fc4330565-373a-41f0-bf91-852699734c13)
- [For users](#reference-template%5Fa5391b52-1ebd-40b2-b1ce-6254da5064a5)
- [Considerations and limitations](#reference-template%5F2dba3c38-4493-4971-bf1d-398407f1e59f)

In July 2025, Microsoft added support for CVI participants to join Microsoft Teams town halls as a presenter. This article is not an exhaustive guide to the Microsoft Teams town hall experience. For more information about town halls, see the following:

[Microsoft Teams town halls](https://www.microsoft.com/en-us/microsoft-teams/townhall) 

[Getting Started with Microsoft Teams town halls](https://support.microsoft.com/en-us/office/get-started-with-town-hall-in-microsoft-teams-33baf0c6-0283-4c15-9617-3013e8d4804f) 

Town halls replace Microsoft Teams Live events. The Live event meeting type is expected to be deprecated by Microsoft in the near future.

In a Microsoft Teams town hall meeting, a group of one or more presenters join a special meeting set up by the organizer just for the presenters and organizers. This document refers to this presenter meeting as the **inner meeting**. The inner meeting is responsible for what is seen and heard by the town hall audience, who are part of the **outer meeting**.

Attendees are invited to join the event as viewers of the town hall. They can interact with chat, Q&A, and other features, but can only view the live audio/video meeting. This is referred to as the outer meeting. 

Join details for the presenters are unique and separate from the invite details for attendees (the broadcast audience).

## Key terms

**Organizer/Co-Organizer**

The _organizer_ is the Teams user who creates the town hall in their Teams calendar. They may also invite other Teams users as co-organizers of the event. These roles are responsible for defining the event and its options, inviting presenters, and sharing the join details for the event. During the event, organizers have the controls to manage the inner meeting and what the audience sees.

**Presenter**

_Presenters_ are participants who will speak or present during the town hall. During the setup, organizers designate presenters and distribute the join information for the inner meeting. 

- _External Presenters_ are a new option for town halls, and allow users outside your organization to present using a Teams client, with a unique URL created for that presenter. Organizers can edit the town hall invite, copy the join information for presenters, and distribute as necessary.

Organizers can also configure the event so that presenters can manage the inner meeting during the event like an organizer does. If the organizer has CVI or PSTN dial-in capabilities enabled in their Microsoft Teams tenant, details for those join types are included in the join details for presenters.

**Green Room**

New to town halls is the Green Room experience, which allows presenters to interact with each other before the broadcast is started. This is turned on by default. The inner meeting runs without broadcasting anything to the live audience until an organizer clicks Start Meeting. Attendees joining the town hall outer meeting while the presenters are in the Green Room will connect and see a message that the event has not yet started.

**Attendees/Audience**

Attendees are the participants who watch the town halls from their Microsoft Teams client as the audience, and are part of the outer meeting. Attendees can interact with Q&A, chat, and other features that are enabled for the town hall, but do not contribute audio or video to the broadcast. Attendees hear the audio from the inner meeting, and see whatever video and/or content the organizer is sending to the inner meeting. 

Join details for attendees are different and separate from join details for presenters. 

Town halls have email templates and other features to enhance and manage distributing invitations to attendees.

## Scheduling town halls

The organizer’s Teams account must be enabled for CVI in order for CVI join details to be added to town hall events they create. We recommend all users in a tenant be enabled for CVI once VIMT is deployed.

Joining a town hall using VIMT is only possible using the Video ID and tenant key. These can used by dialing the SIP address manually, by using the Teams button on a Cisco device, or by using the Join button provided by OBTP. 

- You cannot join using Meeting ID+Passcode.
- You cannot join using Cross-Tenant Join.
- You cannot join using a URL or by being invited as an External Presenter.

VIMT cannot be used to join the viewing audience/outer meeting for a town hall; CVI support is only for joining the town hall as a presenter.

Town halls must be scheduled using the Microsoft Teams client. They cannot be created using the Outlook client.

When setting up the town hall in the Microsoft Teams client, do not add any user/address for a caller who will join using VIMT. Adding their mailbox to the invite can cause confusion in the meeting roster and potentially cause calendar conflicts. 

At the time of this writing:

- The invite sent by Teams to presenters does not include CVI details and cannot be used with One Button to Push (OBTP).
- The details including the Video ID and VTC dialing information are only available in the **Share Event** panel, accessible when editing the town hall entry in your Teams calendar.

Callers using Cisco’s Video Integration for Microsoft Teams (VIMT) service can use the CVI join details to join the presenters' meeting. Presenters joining with VIMT do not need to be explicitly invited by the organizer; the organizer must control to whom they distribute the CVI join details. Because CVI participants are not logged-in users in Microsoft Teams, joining as a presenter is limited by Microsoft to trusted joins. For Cisco VIMT, trusted joins are limited to Cisco Webex devices calling in from the same Webex organization as the meeting host, or SIP callers who present a verified TLS domain configured for the Webex organization.

Joining town halls using VIMT with Cross-Tenant join or Meeting ID+Passcode is not supported.

Because participants calling in through the VIMT gateway do not have the Teams client interface, they cannot manage the town hall event like an organizer or presenter, but can contribute audio, video, and content as allowed by the meeting organizers.

CVI participants are handled uniquely in the Green Room. Invited presenters who are authenticated to Teams join the Green Room as presenters without restrictions. CVI participants are not authenticated to Teams, and therefore join the Green Room as a restricted participant labeled as _Attendees_ (not to be confused with attendees in the broadcast audience/outer meeting). While in the Green Room as an attendee, the CVI participant is blocked from sending or receiving audio and video. The participant must be promoted to a presenter by an organizer in the Green Room to be able to fully participate.

To locate join information for VIMT, copy and manually distribute the CVI join details to the users who will call in as presenters using VIMT.

1. Open your Teams calendar, then edit the town hall event.
2. Click Share Event in the top right of the window.
3. Click Copy to copy the entire block of text in Join details for organizer, co-organizer, and presenter, including CVI dialing details.

Use the following workaround to enable a Join button to join as a presenter in a town hall on your Hybrid Calendar-enabled Cisco Webex device. Your Webex organization must have VIMT enabled.

This workaround only works for devices that can use traditional CVI join.

1. Open your Teams calendar, then edit the town hall event.
2. Click Share Event in the top right of the window.
3. Click Copy to copy the full block of text in Join details for organizer, co-organizer, and presenter.
4. Close the town hall calendar entry.
5. Create a new Teams Meeting calendar entry and invite the mailbox associated with the video device (or the user, if using a Personal Mode device) that you want enabled for OBTP for the town hall.
6. Set the date/time to match when you want to join the town hall.
7. Paste the block of join details you copied in step 3 into the Notes section of the invite. The text should include the entire, intact block of Teams join information.
8. Ensure Teams meeting is toggled off, and click Send.  
The Cisco device will show the meeting entry at the scheduled time and will display a green Join button to join as a presenter.  
Invites for town halls that only include the join link cannot be used to join via WebRTC or Cross-Tenant join. Only traditional CVI joins using Video ID are compatible.

## VIMT participants in town halls

- Participants calling in through the Cisco VIMT gateway do not have the Teams client interface, so they cannot manage the town hall event as an organizer or presenter from their video device.
- The Green Room is enabled for a town hall by default. When it is enabled, a VIMT caller joins the Green Room as an attendee and cannot send or receive audio and video. The participant must be promoted to a presenter to fully interact with the Green Room and be part of the broadcast. The caller will not be able to interact until they are promoted to a presenter.

**Audio and video**

- In the Green Room and inner meeting, the audio is a mix of all the current presenters. The layout and arrangement of video panels each presenter sees is based on their own individual device experience, and is not what the audience sees in terms of layout and other features.
- The video seen by a VIMT participant is the VIMT layout of their choice, showing the panels from all the presenters (not limited to when the organizer has enabled _on screen_ for that presenter). Priority in the layout is set by who has been set to _on screen_ by the organizer and active speaker information. VIMT participants do not see themselves in their layout.
- The video seen by the broadcast audience is based on which presenters the organizer has set to be _on screen_, and the layout the audience sees adapts based on the number of presenters set to be _on screen_ and their local device.
- The restrictions on CVI participants as attendees is different between the Green Room phase of a town hall and the live broadcast portion. A CVI participant who joins the Green Room will not receive, nor can they send, audio or video until they're promoted to presenter. But a CVI participant who joins during the live broadcast (or if the Green Room is disabled) will receive video and audio from the presenters’ meeting, but still cannot send video or audio, because they're restricted as an attendee.
- VIMT callers do not have any feedback if they are _on screen_ in the meeting (the presenter has enabled _on screen_ for the participant, making their video part of the broadcast). They must rely on a Teams client with organizer or presenter roles to know if they are visible in the broadcast.
- If anyone including yourself shares content in the inner meeting, the content is shown to other VIMT presenters, but it is not sent to the broadcast audience until the organizer enables _bring to screen_ for that feed. Only screen- or window- based sharing is available in town halls.  
We recommend that presenters be cautious with their microphone and mute status. Once the broadcast has started, all presenters' audio is heard in the broadcast mix unless they’re muted.
- VIMT participants do not see reactions from the audience.
- There is no specific notification to organizers when a new participant joins the presenter call as an attendee or a presenter. We recommend that organizers keep watching the participant list for anyone who may have joined as an attendee and is waiting for screening/promotion.
- Cisco does not recommend using the _Bring on screen_ feature for a VIMT participant in the attendee role. While it shows the participant’s video in the broadcast, their audio is restricted and cannot be heard.
- A VIMT participant is automatically muted by Teams when they are promoted to a presenter. The participant must unmute themselves when they are ready to speak.

## Tips for success with town halls

- Always have a separate organizer in the meeting using a Teams client, to act as director/producer who can monitor the participant list for the inner meeting, and manage what is _on screen_, so presenters can focus on their meeting.
- The participant acting as the director/producer should have their audio on so they can quickly identify any unintended open microphone or disruption to the live meeting. Keeping the participant list open will help them quickly identify any source of unintended audio.
- As an organizer, always keep the participant list open in the Teams client, so you can quickly see new joins to the inner meeting and monitor active speaker activity.
- Do not leave CVI participants in the attendee role — either promote them once you’ve identified them, or remove them from the meeting if they shouldn’t be there. Minimizing time a participant stays in the attendee role reduces confusion and avoids most of the limitations with the town hall experience.

## Known issues and limitations for VIMT-connected participants

- VIMT-connected participants have a different experience than presenters using the Microsoft Teams client. Notable differences include:  

  - No chat or Q&A windows
  - No live video indicator for which participant is live
  - No town hall status (attendee count, timer, live state)
  - No presenter/producer labels in the Roster List
  - Live reactions in the meeting are not seen
- Users who need to manage the event should be invited as organizers or presenters, and they need to use a Microsoft Teams client for these non-audio/video features of the town hall.
- Video and shared content in town hall broadcasts is limited to 720p maximum resolution.
- Controlling the distribution of CVI dial-in information is critical, as authentication is not provided for video device participants. As such, any trusted device from your organization can join the presenters’ meeting if they have the Video ID. The Video ID should only be known to intended presenters. Organizers must manage access to the running event using the participant list in the Teams client.
- VIMT participants who attempt to join the town hall inner meeting, but who are not trusted by the VIMT gateway, will have their call answered by Webex and be shown the Webex lobby experience. They are then quickly dropped from the call by Microsoft Teams for failing the security policy for the meeting.
- Unlike Microsoft live events, the specific layout or view presenters see is not the same view clients see in the broadcast. Teams client presenters see layouts based on their own client setup, and presenters set to be _on screen_ are seen in the video layout. The arrangement and layout used will not necessarily match what is broadcast.
- When a VIMT participant is restricted by the attendee role in the Green Room, the roster seen on the endpoint is not reliable. It may be an empty or partial list of participants in the Green Room, and can change unexpectedly. The actual results will vary and should not be considered reliable. The participant list for the VIMT participant will be reliable once the participant is promoted to a presenter.
- If a VIMT participant’s role is changed from presenter to attendee in the Green Room, the video feed from other presenters turns off, resulting in a layout of just name avatars or _waiting for others to join_. This is due to Microsoft Teams restricting video to the attendee, and the unreliable roster while an attendee.  
When a VIMT participant is restricted by the attendee role and in the Green Room, the participant list for the VIMT participant may show no other participants in the meeting. If this situation persists for 5 minutes, Webex will automatically disconnect the call, assuming the call was over. Be sure to promptly promote VIMT participants to presenter to avoid this situation.
- A VIMT participant who joins during the live broadcast (or anytime if the Green Room is disabled) will receive video and audio from the presenters’ meeting, but because they are restricted as an attendee, they cannot send video or audio. Promote participants to presenters to get two-way audio and video.
- When a VIMT participant’s video or audio is being restricted/blocked in Teams by the attendee role, the participant will not have any local indication they are being restricted.
- We do not recommend using the _Bring on screen_ feature for a VIMT participant in the attendee role. While it shows the participant’s video in the broadcast, their audio is restricted and cannot be heard.
- We do not recommend using the _Allow mic for attendees_ feature, as it will create confusion and risk unintended open microphone situations for your broadcast. If this feature is enabled during a meeting, a new VIMT participant can join the live meeting with an open microphone and cause interruptions. This setting is only shown when there are attendees in the participant list and the event has started, but applies to both currently connected participants and future connections. It should be avoided.
- There are no town hall-specific disconnect reasons, so participants who are denied entry due to being untrusted, or who are removed by the organizer, will not see detailed reasons/messages on their device when they’re disconnected.

## Town hall limitations for Microsoft clients

- If the Green Room is disabled for a town hall, a VIMT participant joins as an attendee and is displayed as having audio and video disabled, but is able to send audio into the live broadcast.
- The CVI join details are not shown in the Teams client when displaying _Meeting Info_, and the _Copy join info_ feature only includes the Teams join URL. Get the CVI join details as follows:

  1. Open the town hall calendar entry in the Teams calendar.
  2. Click _Share Event_ at the top right to see the full join information for the presenters’ meeting.
- The invites sent to town hall presenters do not include CVI details, and will not provide functional OBTP for systems using Cisco Hybrid Calendar.  
Use the following workaround:  

  1. Open the town hall calendar entry in the Teams calendar.
  2. Click Share Event at the top right.
  3. Click  to copy the full block of text in the Join details for organizer, co-organizer, presenter box.  
  \[placeholder for image\]
  4. Close the town hall calendar entry.
  5. Create a new Teams meeting calendar entry and invite the mailbox associated with the video device (or user if using a Personal Mode device) that you want enabled for OBTP for the town hall.
  6. Set the date/time to match when you want to join the town hall, and paste the join details from the Share Event window into the Notes section of the invite. The text should include the full block of Teams join information.
  7. Make sure Teams meeting is toggled off, then click Send.
- If you invite a VIMT participant as an organizer or presenter, they remain listed in the _Others invited_ group in the Teams participant list, even after the participant joins the meeting. This behavior is expected, as connected VIMT participants are not authenticated to Microsoft, so they are not matched to participants invited to the town hall.
- Participants in the attendee role in the Green Room are counted in the same attendee count as viewers. This may cause confusion with the attendee count for the town hall.
- The microphone and video enabled/disabled status shown in the participant list is not accurate for CVI participants in the attendee role while in the Green Room. While in the Green Room, there is no indication the participant is restricted in the Teams roster, but they are restricted from sending audio and video until they are promoted to presenter.  
If the CVI participant is still an attendee when the town hall starts, the CVI participant joins after the event starts, or if the Green Room is disabled for the town hall, the client will show microphone and video disabled for the participant.
- If _Allow mics for attendees_ is enabled during the live meeting, the VIMT participant will not be able to accurately control their mute status in the meeting.
- If a Microsoft Teams Room is invited to the presenters’ meeting through the participant list and a VIMT participant is in the meeting with the attendee role, the Teams Room displays the VIMT participant in their video layout with a letter avatar, even though the VIMT participant shouldn’t be shown at all.
