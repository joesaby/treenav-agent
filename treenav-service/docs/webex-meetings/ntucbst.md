---
title: "Getting Started with Webex Private Meetings"
product: "Webex Meetings"
article_id: "ntucbst"
url: "https://help.webex.com/en-us/article/ntucbst/Getting-Started-with-Webex-Private-Meetings"
last_updated: "2024-09-13"
description: "A Webex Private Meeting on Video Mesh provides enhanced security. All
participants must belong to your organization and be on the corporate network.
The meeting media is local to your network and never in the cloud."
tags: ["webex-meetings", "webex-support", "webex-training"]
source: "help.webex.com"
---

# Getting Started with Webex Private Meetings

## Getting Started with Webex Private Meetings

If your organization has Video Mesh on your network, your administrator can enable private meetings by contacting your account representative. This feature enhances the security of your meeting by terminating the media on your premises. When you schedule a private meeting, the media always terminates on the Video Mesh nodes inside your corporate network with no cloud cascade.

For a normal Webex meeting, when your Video Mesh nodes are full, the media cascades to the cloud to provide scaling. With a private meeting, when your Video Mesh nodes are full, no more attendees can join that meeting or other private meetings start. There is no cascade to the cloud for private meetings.

All participants in a private meeting must belong to your organization. They can join using the Webex App or an authenticated video system. Participants with VPN or MRA access to your network can join a private meeting. But nobody can join a private meeting from outside your network.

### Support and Limitations

Some notes on support for private meetings:

- Private meetings are available on Webex Version 40.12 and above.
- Your administrator must enable private meetings on your site.
- Your administrator must enable your account to host private meetings.
- Private meetings always use the native Webex App. You can't use the private meeting type with the full-featured meeting experience.
- All participants in a private meeting must belong to the organization hosting the private meeting (the host organization).
- You must be connected to the corporate network of the host organization, either directly or through a VPN.
- You can only join the private meeting from the Webex App app or from an authenticated video system in the host organization.
- If your Webex App app is connected to a video system, it must be an authenticated video system in the host organization.
- For more information, see the sections on private meetings in the [Deployment Guide for Webex Video Mesh](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/wbxt/videomesh/cmgt%5Fb%5Fwebex-video-mesh-deployment-guide.html).

Some limitations of private meetings:

- Private meetings only support VoIP for audio. Webex App Edge Audio and PSTN are not supported.
- You can't use Personal Rooms for private meetings.
- Private meetings are supported for scheduled meetings only.
- Private meetings don't support Webex App features that require a connection to the cloud, such as cloud recording, transcription, and Webex App Assistant.
- You can't join a private meetings from an unauthenticated video system, even one with the Webex App app on it.
