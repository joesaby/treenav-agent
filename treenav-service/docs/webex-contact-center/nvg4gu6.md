---
title: "Understand agent states"
product: "Webex Contact Center"
article_id: "nvg4gu6"
url: "https://help.webex.com/en-us/article/nvg4gu6"
last_updated: "2025-11-19"
description: "Agent states represent agent activities during the day. They allow supervisors
to manage the productivity of their teams and determines when agents can accept
calls using Webex Contact Center Desktop."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Understand agent states

## Agent availability states

The agent states displayed on Desktop for all phone conversations and digital channels are as follows: 

You can select the agent state by selecting it from the drop-down menu or by entering at least 3 characters in the search bar.

### Available

This state indicates that you're prepared and can accept contact requests as they come in. After you log in, select this state from the drop-down menu. A  represents the available state. 

Only when your state is set to available will any communication such as voice call, chat, email, social messaging conversation, or campaign be routed to you.

When you reload Desktop while in the available state, the idle state is displayed briefly before the available state is restored and the timer is reset to 00:00\. The delay is subject to network connectivity.

### Idle

This state indicates that you've logged in but are not ready to accept any routed requests. A  represents the idle state. 

Your state is idle when you log in. 

As part of the enhanced sign-in process, the system monitors the WebRTC service status after sign-in. If the service fails, the agent's state is automatically changed to Idle to prevent calls from being routed to an unreachable agent.

Your administrator can configure additional idle state reasons, if applicable. For example, if you need to go offline for a meeting, training, or lunch break, you can change your state to reflect this by selecting that idle reason option from the drop-down list. 

In addition to these manually selectable idle reasons, the system may automatically set your state to Idle with specific reasons (Idle Aux Codes) due to various conditions, including non-acceptance of contacts, device issues, or system errors (e.g., 'Invalid\_Number' or 'Channel\_Failure'). For a comprehensive list of these system-assigned states and the actions you can take, refer to the [System-Assigned Agent States and Error Conditions (Idle Aux Codes)](#IdleAuxCodes) section later in this article.

While interacting with a customer, you can select an idle state reason. For example, you can select this option during a chat session with the customer or when responding to an email message. To learn more about which idle state reason to use, contact your supervisor.

If you're in the available or idle state without any active conversations, your supervisor can sign you out.

Re-route On No Answer (RONA) 

This occurs when you don't accept a voice call, chat, email, or social messaging conversation request within the time frame specified by your administrator. When RONA occurs, the contact request is returned to the queue, and the agent status automatically changes from Available to Idle. A  represents Idle state with aux code as RONA.

- The enhanced sign-in process, with input validation, reduces RONA occurrences by preventing sign-ins with invalid or unassigned dial numbers or extensions.
- The maximum time to accept a voice call request is 18 seconds, and 30 seconds for a digital channel request (chat, email, or social messaging conversation). These are configurable by your administrator. For more information, see [Manage RONA timeouts](https://help.webex.com/en-us/article/nu0du4c/Desktop-Settings-for-Webex-Contact-Center#Cisco%5FTask.dita%5F5c9da2d2-8b6e-4648-aa29-898e071a94e4).

Your administrator configures the maximum time available to accept an incoming request from any channel. If the configured maximum time is lapsed, RONA occurs, and the request is returned to the queue if you don't accept it within the specified time.

When RONA occurs, a popover appears with the following options: 

- Go To Idle —When you click this, your state changes to the default idle reason configured by your administrator.
- Go To Available —When you click this, your state changes accordingly. The available state indicates that you are ready to accept and respond to contact requests routed to you.
- Set as Available—When you click this, your status changes to `Available`, indicating that you are ready to accept and respond to contact requests routed to you.
- Cancel—When you click this, no changes are made to your current state.

You can't change your current state to RONA manually.

To accept a voice call, chat, email, or social messaging conversation request, you must change your state to Available manually.

If Desktop isn't the active browser window or tab, you're alerted with a toaster notification about a RONA. For more information, see [System requirements for Webex Contact Center](https://help.webex.com/en-us/article/besrkt/).

System-Assigned Agent States and Error Conditions (Idle Aux Codes) 

Beyond the manually selectable 'Available' and administrator-configured 'Idle' states, the system can automatically assign specific 'Idle' states, often referred to as Idle Auxiliary Codes (Aux Codes). These states are crucial for understanding why contacts may not have been delivered to you, including various error conditions, system issues (such as network failures or invalid configurations), or situations where you did not accept a contact. The table below provides a comprehensive list of these system-assigned states, their descriptions, and the immediate actions you can take to manage your availability or address the underlying issue. This section directly addresses scenarios like a Webex Calling outage affecting agent state, ensuring you know what state you're in and what steps to take.

| Idle Aux Code      | Description                                                                                                                                                                                                                | Popover details                                                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent\_Busy        | Indicates your device was busy, preventing call delivery.                                                                                                                                                                  | A message appears notifying the user that the device is busy. The availability status changes to Idle, and the user can choose either Set as Available or Cancel.                                              |
| Agent\_Declined    | Indicates you declined a contact offered to you because you are occupied with another activity when a contact is received.                                                                                                 | A message appears notifying the user that the contact is declined. The availability status changes to Idle, and the user can choose either Set as Available or Cancel.                                         |
| Agent\_Unavailable | Indicates the device associated with the dial number is either offline or unreachable.                                                                                                                                     | A message appears notifying the user of a missed call because the dial number is not linked to the device. The availability status changes to Idle, and the user can choose either Set as Available or Cancel. |
| RONA               | Indicates you did not respond when a call was delivered, causing it to time out after the configured RONA timer expired.                                                                                                   | A message appears notifying the user of a missed call. The availability status changes to Idle, and the user can choose either Set as Available or Cancel.                                                     |
| Channel\_Failure   | Indicates temporary issues like network failures or unknown error prevented call delivery. In these cases, the system will try up to three more times to deliver the call. If all attempts fail, the agent is set to Idle. | A message appears to notify the user of an unexpected event. The availability status changes to Idle, and the user can choose either Set as Available or Cancel.                                               |
| Invalid\_Number    | Indicates the dial number logged in with is invalid; update the dial number your profile before changing the state to Available.                                                                                           | A message appears to notify the user that the dial number is invalid and prompting them to update it in their profile.                                                                                         |

Engaged

The Engaged label indicates that you’re busy and connected with a customer. When you’ve accepted the contact request, the Available state () changes to the Engaged label ().

During your interaction with the customer, if you choose to change to any idle state, the icon of the Engaged label changes from  (Engaged in the Available state) to  (Engaged in the Idle state).

The connected timer that is linked to the interaction is shown in the interaction control pane rather than the Availability State field. Once the interaction concludes, both the state and the timer become visible.

When you’re engaged in the Available state (), you can continue to receive active requests on other channels, depending on the channel capacity.

You’ll see your synchronized agent state if your administrator has set up the Microsoft Teams connector for your organization and turned on presence sync. When this feature is active, you might see a message on your Desktop stating, "**Your state changed to <state name> due to state sync with your collaboration tool.**" This message indicates Webex Contact Center Desktop automatically updates your agent state to reflect your presence status in the integrated collaboration application (for example, Microsoft Teams). This ensures consistency across your communication platforms.

Your user profile displays rhe status of the Microsoft Teams connector and presence sync. For more information, see [Understand your user profile](https://help.webex.com/en-us/article/egpilq/Understand-your-user-profile).

When an agent signs in for the first time, there could be a delay of up to 40 minutes for the presence to start synchronizing. This delay doesn't affect agent operations. Also, there could be a delay of up to 12 seconds for the presence to synchronize across Microsoft Teams and Webex Contact Center.

## Agent States and Interaction Events

Agent State refers to _your_ availability and readiness to handle customer contacts (for example, `Available`, `Not Ready`, `Wrap-up`, `Busy`). Interaction status describes the current status of an _active customer contact_ you are handling (for example, `Ringing`, `Connected`, `Held`, `Disconnected`).

Your agent state often changes automatically in response to interaction events. Here's a quick map of how common interaction events influence your agent state:

| Interaction events                        | Agent state becomes                        | What it means                                                                                                                                                                                                                                                                                   |
| ----------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incoming Call Rings (Ringing)             | Available (or Ringing)                     | The system is offering you a new call. Your agent state technically remains 'Available' until you accept, but the call is ringing at your desktop. If your system is configured for auto-answer, you'll transition directly to 'Busy'.                                                          |
| You Accept the Call (Connected)           | Busy                                       | You are actively engaged in a conversation with the customer. The system knows you're occupied and won't route new contacts to you.                                                                                                                                                             |
| Customer on Hold (Held)                   | Busy                                       | Even though the customer is on hold, you are still managing an active contact. Your state remains 'Busy' because you're responsible for that interaction.                                                                                                                                       |
| Call Transferred (Connected/Transferring) | Busy (until transfer completes)            | You are busy facilitating the transfer. Once the transfer is complete, your state will change based on your contact center's configuration (e.g., to 'Wrap-up' or back to 'Available').                                                                                                         |
| Call Ends (Disconnected)                  | Wrap-up (if configured)                    | The system automatically puts you into 'Wrap-up' to complete post-call tasks like logging notes or updating customer records. You won't receive new contacts during this time.                                                                                                                  |
| Call Ends (Disconnected)                  | Available (if Wrap-up is _not_ configured) | If your contact center isn't set up for Wrap-up, you'll automatically return to 'Available' after a call ends, ready for the next contact.                                                                                                                                                      |
| Incoming Chat (Offered)                   | Available                                  | The system notifies you of a new chat request. Your agent state remains 'Available' until you accept the chat. Once you accept, the chat session starts and you engage with the customer.                                                                                                       |
| You Accept Chat                           | Available                                  | Your state changes to Busy once you reach your maximum allowed active chat sessions (Chat Threshold), indicating you are fully engaged and cannot accept additional chats until some are completed.                                                                                             |
| Chat Transferred                          | Available                                  | You are actively transferring the chat session to another agent or queue. The new agent will receive the full chat history and any internal notes you have added. Your state remains 'Busy' until the transfer completes, as you are still responsible for the interaction during this process. |
| Chat Ended                                | Available                                  | The chat session has concluded. Your state will change to 'Wrap-up' if configured, allowing you to complete any post-chat tasks such as logging notes. If Wrap-up is not configured, you will return to 'Available' and be ready for new interactions.                                          |
| Max Chat Threshold                        | Available                                  | You have reached the maximum number of concurrent chat sessions allowed. Your state remains 'Available', but you will not receive new chat requests until you close or complete an existing chat.                                                                                               |
| Incoming Social (Offered)                 | Available                                  | The system is notifying you of a new social media interaction (e.g., Facebook Messenger). Your agent state remains 'Available' until you accept the interaction. You have a limited time to accept before it is redirected.                                                                     |
| You Accept Social                         | Available                                  | You are now engaged with the social media interaction. Your state changes to 'Busy' to indicate you are occupied and will not receive new contacts.                                                                                                                                             |
| Social Transferred                        | Available                                  | You are transferring the social media interaction to another agent or queue. Your state remains 'Busy' until the transfer completes.                                                                                                                                                            |
| Social Ended                              | Available                                  | The social media interaction has ended. Your state changes to 'Wrap-up' if configured, or back to 'Available' if not, allowing you to prepare for the next interaction.                                                                                                                         |
| Max Social Threshold                      | Available                                  | You have reached the maximum number of concurrent social media interactions allowed. Your state remains 'Available', but no new social interactions will be routed to you until you free up capacity.                                                                                           |
| Incoming Email (Offered)                  | Available                                  | You have a new email interaction offered. Your state remains 'Available' until you accept the email. You have a limited time to accept before it is routed elsewhere.                                                                                                                           |
| You Accept Email                          | Available                                  | You are now handling the email interaction. Your state changes to 'Busy' to indicate you are engaged and unavailable for new contacts.                                                                                                                                                          |
| Email Transferred                         | Available                                  | You are transferring the email interaction to another agent or queue. Your state remains 'Busy' until the transfer completes.                                                                                                                                                                   |
| Email Ended                               | Available                                  | The email interaction is completed. Your state changes to 'Wrap-up' if configured, or back to 'Available' if not, so you can finalize any follow-up tasks.                                                                                                                                      |
| Max Email Threshold                       | Available                                  | You have reached the maximum number of concurrent email interactions allowed. Your state remains 'Available', but no new emails will be assigned until you complete or close existing ones.                                                                                                     |

## Voice call states

These are the states that the system assigns to you based on the channel through which you communicate, such as voice (call control), email, or chat states. These show in the interaction control pane. For example, when you place a customer call on hold, the interaction control pane displays the state call on hold when you put a customer call on hold. 

Based on your interactions with the caller (customer) or another agent, the system assigns the following voice call states: 

- Ringing—Indicates that the incoming call popover is visible.
- Call on Hold—Indicates that you've placed the customer on hold.
- Consult Requested—Indicates that you've initiated a consult call.
- Consulting—Indicates that you're consulting with another agent.
- Consult on Hold—Indicates that you've placed the agent you're consulting on hold.
- Conference—Indicates a three-way communication between you, the customer, and another agent.
- Wrap-Up—Indicates that you've ended your voice call with the customer.

## Email and chat states

The system initiates chat and email request states, which change as you communicate.

Email state 

- Wrap-up—Indicates that you've ended your email communication with the customer.

Chat and social channel states 

The following are the chat and social channel request states: 

- Conference Requested—Indicates that you started a conference chat.
- Conference—Indicates a three-way communication between you, the customer and another agent.
- Wrap-up—Indicates that you've ended your chat, or social messaging conversation with the customer.

## State and connected timers

For all Desktop channels, the timers that are displayed are divided into the following categories: state, idle, and connected timers.

### State timers

The state timer is displayed in the availability state field, and it tells how long you've been in the current state. These timers are set to run for these instances: available, RONA, and any idle states configured by your administrator.

The timer resets to 00:00 when you change states (for example, from available to any idle state in the state drop-down list).

### Idle states

If you're in the idle state and switch to another idle state, the timer displays the time you're in the current idle state and the overall time you were in the idle states. For example, if you're in the idle state for 10 minutes and then take a Lunch Break (configured idle state) for 20 minutes, the timer then displays as 20:00/30:00.

### Connected timers

When you accept a request for a phone, chat, email, or social messaging interaction, a timer appears in the task list window next to the request. 

Along with the connected timer, the interaction control pane displays another timer dependent on the system's state and how you proceed with your discussion. For example, when you place a call on hold, the timer displays the hold time next to the Consult on Hold condition.

 The agent interaction history pane shows the total duration of your connection with the customer, encompassing the time from the start of the contact until the communication concludes. For example, if you engage in a conversation with a customer and consult with another agent before ending the interaction, the connected time accounts for both the duration of your connection with the customer and the time spent consulting with the other agent.

| Use case                                                                                                                        | Availability state in view   | Timer                       | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Idle—Default state when you sign in.                                                                                            | Idle                         | 00:00                       | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Idle to Idle—When you manually change to any other idle states. For example, from Idle to Lunch Break.                          | New idle state (Lunch Break) | 00:00/00:00                 | Consider that you're in the idle state for 10 minutes, and then you take a Lunch Break (configured idle state) of 20 minutes. Then, the timer displays as 20:00/30:00.                                                                                                                                                                                                                                                                                                                                                                             |
| Idle to Available—Manually switch to receive contact requests depending on your channel capacity.                               | Available                    | 00:00                       | To accept any call, chat, email, or social messaging conversation requests, you must set your state to available.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Available to Engaged—Switches automatically when you accept a contact request.                                                  | Engaged                      | No timer                    | When you've accepted the contact request, the available state chages to the engaged label.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Engaged to Idle—Manually switch to any idle state to not accept any contact requests during your interaction with the customer. | Engaged                      | No timer                    | You can set your state to Idle, if you don't want any incoming call, chat, email, or social messaging conversation requests during your interaction with the customer. During your interaction with the customer, if you choose to change to any idle state, the icon of the engaged label changes from Engaged in the Available state to Engaged in the Idle state.                                                                                                                                                                               |
| Engaged to Available—Switches automatically when the your interaction ends.                                                     | Available                    | 00:00                       | Displays the total time which includes, the available state time when you accepted the content request, the time that has elapsed since you accepted the request until the end of the interaction (connected timer), and wrap-up time.                                                                                                                                                                                                                                                                                                             |
| Idle to Available—Engaged                                                                                                       | Engaged                      | No timer                    | If your administrator has defined the Agent Available After Outdial as _Yes_, after an outdial call ends, your status is set as available even if you had made the outdial call in the idle state.                                                                                                                                                                                                                                                                                                                                                 |
| Idle to Idle—Engaged                                                                                                            | Engaged                      | No timer                    | If your administrator has defined the Agent Available After Outdial as _No_, after an outdial call ends, your status is set as idle.                                                                                                                                                                                                                                                                                                                                                                                                               |
| Engaged to RONA—Switches automatically when you have not accepted a contact request within the specified time.                  | Engaged to RONA              | Engaged—No timer RONA—00:00 | You must take action on the Redirection on No Answer (RONA) pop over and the state timer starts from 00:00\. For example, consider that you're in the available state for 2 minutes and accepted a voice call request. During your interaction with the customer around 5 minutes, you receive an email contact request. If you don't accept the email request within the specified time, the RONA pop over displays. You can choose either Go To Idle or Go To Available. If you choose either of the options, the state timer starts from 00:00. |

Your system time must be synchronized with the network time for the agent state timer, the contact request connected timer, and the contact wrap-up timer to be displayed correctly.

## Mid-call monitoring states 

Mid-call monitoring allows you to monitor agents who are on the phone with customers while signed in as a supervisor. The mid-call monitoring state changes depending on your actions on the call. 

Mid-call monitoring isn't supported within Desktop.

The system sets the following mid-call monitoring states: 

- Monitoring—This indicates that you've either started or resumed mid-call monitoring and displays only if mid-call monitoring is successful.
- Monitoring Paused—This indicates that you've paused mid-call monitoring and displays only if mid-call monitoring is paused and not successful.

For more information, visit [Monitor agents on a call](https://help.webex.com/en-us/article/nda5iqeb/).
