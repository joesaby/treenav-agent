---
title: "Make an outbound progressive campaign call"
product: "Webex Contact Center"
article_id: "l1p2sd"
url: "https://help.webex.com/en-us/article/l1p2sd/Make-an-outbound-progressive-campaign-call"
last_updated: "2024-09-07"
description: "A progressive dialer, also known as an automatic phone call dialer, is a
campaign created by your administrator to automate dialing and seamlessly
connect you to customers. Progressive campaigns are typically used for calls
that are similar in nature."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Make an outbound progressive campaign call

In the Progressive dialer, the agent doesn’t need to manually start the outbound call. When an agent completes a call and moves to the Available state, the dialer automatically dials the next number in the contact list. The dialer dials contact for every available agent. The agent hears the call ring out to the customer. The caller connects to an agent. Progressive dialers are ideal where the calls are similar in nature and the agents benefit when the system connects them to contact.

The administrator creates campaigns and configures the dialing mode (progressive). An outdial queue that is associated with the outdial entry point chooses the agent. The system displays the contact entries in the Interaction Control pane when the customer call connects. For more information about screen pop, see the section Screen Pop.

You can join an active progressive campaign if you are in the team that is associated with the outdial queue.

When the campaign is active, the **Outbound** icon is visible along with the campaign name in the incoming pop over. The incoming call connects and the agent can hear the call. If the contact answers the call, the agent connects to the contact, and the Interaction panel displays the contact information. The agent chooses a wrap-up code to wrap up the call.

The **Call Guide** tab is visible in the **Auxiliary Information** pane if your administrator has configured questions and answers at the campaign level. The system prompts you to answer a question. Based on the answer, you traverse through the next set of questions in the call guide. Submit your responses to complete your call guide.

As part of the progressive campaign feature, all customer calls are placed by the dialer, and the agent no longer hears the call ring-out. When the dialer successfully reaches a live voice customer, it merges the call with the agent. The agent hears a short zip tone, and the interaction panel displays the customer information. The zip tone is only heard by the agent.

**AgentWrap-Up Codes for Progressive Campaigns**

You can choose a set of predefined wrap-up codes in the Interaction pane for common inbound and outbound calls. Campaign Manager maps the following configurations that are available on the Agent Desktop. Choose the relevant codes to wrap up a campaign call.

__Table 1\. Agent Wrap-Up Codes__
| Default Wrap-up Codes                      | Description                                |
| ------------------------------------------ | ------------------------------------------ |
| Answering Machine Detection—System Default | The call connects to an answering machine. |
| Busy—System Default                        | The customer is busy.                      |
| FAX—System Default                         | The call connects to a fax number.         |
| No Answer—System Default                   | The customer doesn’t answer the call.      |
| Sale—System Default                        | The call results in a sale.                |
| Voicemail—System Default                   | The call connects to voice message.        |

Before you begin

You must be in the Available state to participate in a progressive campaign.

| 1 | When you complete a call and move to the Available state, the progressive dialer automatically dials the next number in the contact list. The incoming call connects and you hear the ringing sound.                                                                                          |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | When the contact answers the call, you're connected to the contact, and the interaction pane displays the contact information.                                                                                                                                                                |
| 3 | To end the call, click End. The Wrap Up Reasons dialog box appears. For information on how to apply a wrap-up reason, see [Apply a wrap-up reason](https://help.webex.com/article/4zxpoz).You cannot end the call when the call is on hold. For more information, see Hold and Resume a Call. |

What to do next

If your administrator has configured questions and answers at the campaign level, the Call Guide tab is visible in the auxiliary information pane. The system prompts you to answer a question. Based on the answer, you're prompted to go through the next set of questions in the call guide. You must submit your responses to complete your call guide.
