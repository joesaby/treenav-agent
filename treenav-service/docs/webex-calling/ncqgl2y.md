---
title: "Play a Webex call recording with a transcript and AI-generated summary"
product: "Webex Calling"
article_id: "ncqgl2y"
url: "https://help.webex.com/en-us/article/ncqgl2y"
last_updated: "2025-11-06"
description: "Access and play back your call recordings directly from User Hub. Automatically
get a transcript and summary with notes and action items to stay informed on key
points."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Play a Webex call recording with a transcript and AI-generated summary

To access this feature, your administrator must enable it for you or your organization. If you don’t see any of these settings, check with your administrator.

After you [record your phone calls](https://help.webex.com/nuu13a1), you get the call recording in Webex App and User Hub.

**Limitation** 

The recording player doesn't display the transcript and summary when the call is in English and the audio quality is low.

## Play a Webex call recording

You can access and play Webex call recording either from Webex App or User Hub. 

To access a Webex call recording and view transcript and AI-generated summary from Webex App, see [Webex App | Access call recordings](https://help.webex.com/5vjicf/) and [Webex App | AI-generated summaries for call recordings](https://help.webex.com/9leme/).

To access a Webex call recording from User Hub, proceed with the following steps:

| 1 | Sign in to [User Hub](https://user.webex.com).                                                                                                                                                                                                                                                                                                                                                                   |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Recordings and click Calling. The Calling tab displays the recordings for the calls that you made.                                                                                                                                                                                                                                                                                                         |
| 3 | Click a recording.                                                                                                                                                                                                                                                                                                                                                                                               |
| 4 | When the recording player appears, click Play. Click the 10-second fast forward button ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/462001-463000/462999.jpg) or 10-second rewind button ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/462001-463000/462998.jpg) to find the most important points of a call. |

### View and edit a transcript in a call recording

| 1 | In the right side of the recording player, click ![transcript icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469528.jpg) to view the transcript.                                                                                                                                                                                                                                                                                                        |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | To edit transcript text, hover over the text, click ![edit icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469816.jpg), edit, and then click Save. To find a keyword in the transcript, type a word or phrase in the search box. The transcripts with the matching results appear.To download a transcript, click ![download icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/438001-439000/438843.jpg). |

### View and edit an AI-generated summary in a call recording

This feature isn't supported for Webex for Government.

| In the right side of the recording player, click ![Call recording player AI summary note icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/486001-487000/486810.jpg) to view the summary which includes Notes and Action items. Every action item contains a timestamp, so you can easily navigate to the part of the recording that you're interested in. To edit the notes, hover over the Notes and click ![Whiteboard pen](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469816.jpg) to add formatting, bullet points, and headings, and then click Save. To edit action items, hover over the Action items and click ![Whiteboard pen](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469816.jpg) to add or delete action items, and then click Save. To copy notes and action items, hover over the Notes or Action items, and click ![Copy icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/481001-482000/481426.jpg). |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### Download Webex call recording transcripts

| 1 | Sign in to [User Hub](https://globalpage-prod.webex.com/signin).                                                                                                              |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Recordings and click Calling.                                                                                                                                           |
| 3 | Choose the recordings from the list.                                                                                                                                          |
| 4 | Click ![Download](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/438001-439000/438843.jpg) Download and choose Transcript (.vtt). |
| 5 | Click Download. The transcript is downloaded as a VTT file.                                                                                                                   |

### Speaker identification in a transcript

The recording player displays the transcript along with the speaker names. The system recognizes who is speaking at different parts of a recording and labels their speech accordingly. This speaker identification makes it clear who said what, making the conversation easier to follow.

Here are some scenarios of how speaker identity appears in the transcript in the recording player for certain features:

- Conference call:

  - If the conferencing initiator is different from the call recording initiator, the transcript doesn't show the speaker identity of the person who was conferenced into the call.
  - N-way conference call recording: If your administrator has set the recording option to Always mode and you add more than three participants to the call, the transcript shows inaccurate speaker identities. If your administrator has set the recording option to On Demand mode, the transcript shows the correct speaker identities for all participants.
- Supervisor and Agent:

  - When a call is recorded during supervisor coaching and monitoring the call between agent and caller, the agent’s transcript shows only two speaker identities which are agent and caller. The supervisor’s audio is identified as the caller. However, the supervisor’s transcript shows the correct speaker identities for all three participants.
  - When an agent's call is being recorded and if the agent’s supervisor barges in, the agent’s transcript continue to show only two speaker identities which are agent and supervisor. The caller’s audio is identified as a supervisor. However, the supervisor’s transcript shows the correct speaker identities for all three participants.
- Executive and Executive Assistant:

  - When a call is recorded during which both the executive and executive assistant are on the same call with a caller, the assistant’s transcript shows only two speaker identities. However, the executive’s transcript shows the correct speaker identities for all three participants.
  - When a call is recorded during which an executive assistant makes, answers, intercepts, and routes the calls appropriately on behalf of their executive, the executive assistant’s transcript shows the assistant’s caller ID name and not the executive’s caller ID name.
- Shared call appearance: The transcript shows the call recording owner identity based on the device owner's caller ID name, and not the line owner name.
- Virtual line: If the call recording is enabled on the virtual line and if any of the users assigned to the virtual line places or answers the call, the transcript shows the identity of that user.
- Connected line identity for redirected calls: Based on the configuration, the identity of the person receiving the redirected call is either shown or not shown in the transcript.
- Hoteling: When a guest user logs into a host device, the transcript shows the guest user identity, not the host device.
- Call bridge: When a shared user (example, user C, who shares a line with user A) bridges into a call between users A and B, the transcript of user A shows only users A and B as speakers. User C's name doesn’t appear in the transcript.

## Download Webex call recordings

| 1 | Sign in to [User Hub](https://user.webex.com).                                                                                                                                          |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Recordings and click Calling.                                                                                                                                                     |
| 3 | Choose the recordings that you want to download.                                                                                                                                        |
| 4 | Click ![Download](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/438001-439000/438843.jpg) Download and choose Call recording files (.mp3). |
| 5 | Click Download to save the recording. If a disclaimer appears, select Accept to accept the terms and continue. The call recordings are downloaded in MP3 format.                        |

## Delete Webex call recordings

| 1 | Sign in to [User Hub](https://user.webex.com).                                                                                                                                      |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Recordings and click Calling.                                                                                                                                                 |
| 3 | Choose the recordings that you want to delete.                                                                                                                                      |
| 4 | Click ![Delete button represented by a trash bin icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/458001-459000/458924.jpg) Delete. |
