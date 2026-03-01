---
title: "What's new for administrators in Webex Contact Center"
product: "Webex Contact Center"
article_id: "a1gx3h"
url: "https://help.webex.com/en-us/article/a1gx3h/What-s-New-in-Webex-Contact-Center"
last_updated: "2026-02-27"
description: "We want to make sure that you know about the major updates made available in
Webex Contact Center for administrators—updates to the interface, new
functionality, and ways to manage your contact center."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# What's new for administrators in Webex Contact Center

- [What's new](#topic%5FD1C27F9C842A4C6CA27898AFFDB474B7)
- [Coming soon](#topic%5FD8159C942D4EE10D3C86F7C043C86722)
- [Limitations](#limitations)
- [Announcements](#announcements)

## February 17, 2026

## Flow Reliability Enhancements

To enhance the reliability of flows and reduce development time, self-loop limits have been established for various activities within Flow Designer. These limits serve as a safeguard against logical errors caused by unintended loops, ensuring that such errors do not fail silently. When a flow reaches the self-loop limit, it automatically exits via the global error path, making the issue visible to developers for prompt resolution.

Additionally, loop detection is integrated during the design phase for certain activities, proactively preventing the creation of problematic loops.

Flow designers are encouraged to refer to the [System-enforced self-loop limits for activities](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#section%5Fq4x%5Fwg5%5F23c)section in the Flow Designer guide for comprehensive best practices and for a detailed specifications on self-loop limits per activity. Adhering to these guidelines helps prevent errors related to self-loops and promotes smoother, more reliable flow operation.

## February 09, 2026

## AI Assistant – Real-Time Assist (formerly called Suggested Responses) for Voice & Digital interactions

Real-Time Assist is a Cisco AI Assistant feature designed to support agents during live customer interactions by continuously understanding the conversation context, identifying customer intent, and providing relevant recommendations instantly.

The feature leverages agentic AI to:

- Guide agents with information from knowledge bases, internal business tools and other sources
- Suggest the optimal next step to take during interactions
- Automate tasks and agent workflows

Real-Time Assist enhances accuracy, reduces handling time, and ensures a consistent, high-quality customer experience across every live channel by acting as a real-time AI Assistant to the agent.

For more information, see [Administrator's guide to configuring Real-Time Assist](https://help.webex.com/en-us/article/nztf84bb/Cisco-AI-Assistant-for-Webex-Contact-Center:-Administrator%27s-guide-toconfiguring-Real-Time-Assist-%28formerly-called-Suggested-Responses%29) and [Agent's guide to using Real-time Assist](https://help.webex.com/en-us/article/nlq1g9v/Cisco-AI-Assistant-for-Webex-Contact-Center:-Agent%27s-guide-to-using-Real-timeAssist-%28formerly-called-Suggested-Responses%29).

## February 02, 2026

## Agent Assist in Webex WFO 

Agent Assist is now live in Webex WFO, helping administrators streamline schedule-related interactions with agents while maintaining control over workforce policies. The GenAI-powered assistant evaluates every agent request against configured WFM rules, permissions, and eligibility criteria before actions are submitted or approved.

By automating validation and handling common scheduling interactions, Agent Assist reduces repetitive administrator workload while keeping workforce operations compliant and consistent. It is available in 59 languages.

Key benefits:

- Reduce repetitive agent inquiries related to schedules and availability
- Ensure requests follow defined WFM rules and permissions
- Maintain consistent policy enforcement at scale
- Spend more time on intraday management and agent support

For prerequisites and other details, refer to <https://www.wfohelp.com/doc/Content/user-guides/agent-tools/about-agentassist.htm> 

This feature will need the Full WFM SKU.

## January 30, 2026

## RAG ingestion and retrieval improvements for AI agents

The Webex AI Agent now offers significantly faster document ingestion with over 90% improvement for English documents, enhanced retrieval accuracy, and stronger security through updated dependencies. Key enhancements include:

**Improved Retrieval Accuracy**: Automatic fallback to original queries to prevent conversation interruptions, better multi-turn conversation handling, and enhanced ranking of knowledge base results for more relevant answers.

**Accelerated Ingestion Performance**: Optimised language detection bypasses unnecessary processing for English documents, and a new queue-based architecture enables automatic scaling and improved monitoring.

**Security Updates:** Updated libraries to remediate vulnerabilities and maintain compliance.

Why it matters: These improvements deliver faster, more accurate responses, reduce agent handovers, enable scalable operations during workload spikes, and maintain enterprise-grade security—all automatically enabled with no user action required.

To experience the benefits, simply upload documents to your knowledge base and monitor faster processing and improved knowledge retrieval accuracy in your session details. To upload documents to your knowledge base, refer to the [Create knowledge base for AI agent](https://help.webex.com/article/ncs9r37#task-template%5F81b96f90-1e6b-4e42-9cc1-c0d2c70f2f7c) section in the Webex AI Agent Studio Administration guide.

## Webex WFO: Coaching Effectiveness Dashboard in Performance Management

Webex WFO Performance Management has launched the Coaching Effectiveness Dashboard, a new tool that enables supervisors to gain insights into how coaching is delivered across teams and to assess its overall impact.

**Key Benefits**:

- View coaching activity and impact across teams in one place
- Spot performance trends quickly and take action with confidence
- Identify which coaching methods are effective and pinpoint areas that have potential for improvement.

Performance Management requires customers to sign in through their configured Tenant Specific URL. For more information, refer to [Tenant Specific URL for Webex WFO Users (Webex Contact Center).](https://help.webex.com/en-us/article/n8b0ttd/Tenant-Specific-URL-for-Webex-WFO-Users-%28Webex-Contact-Center%29)

This feature requires a minimum of Full WFM, Full QM, or WFO Bundle to access Performance Management.

For more information, see [View coaching effectiveness in Performance Management](https://wfohelp.com/doc/Content/user-guides/performance-management/coaching-effectiveness.htm).

## Webex WFO: Enhanced Live Screen Monitoring

Webex WFO has enhanced Live Screen Monitoring to provide supervisors sharper, targeted visibility across agent workspaces. With this enhancement, supervisors will be able to select and focus on individual monitors during live sessions, enabling clearer insights into key workflows.

**Key Benefits**: 

- **Precision Monitoring**: Easily focus in on the most important screen.
- **Improved Clarity**: View details without distraction for better coaching and compliance.
- **Optimized Experience**: Designed for multi-monitor environments to simplify monitoring.

For more information, see the "Monitor an Agent's Screen" section at [Monitor agents in real time](https://wfohelp.com/doc/Content/user-guides/application-management/agent-monitoring.htm).

## Enhanced conversational experience with advanced voice capabilities for autonomous AI agent

We're excited to announce advanced voice capabilities for autonomous AI agents to enhance conversational experience to the end customers. This enhancement is designed to help you customise how AI agents listen and respond, ensuring every conversation feels natural and flows smoothly. The capabilities include: 

- **Precision interaction control**—Gain total control over agent-customer dynamics. Use “barge-in” capabilities to allow customers to interrupt the agent and “end of speech sensitivity” option to determine exactly how long the agent waits before responding.
- **Human-centric conversational flow**—Tailor your agent’s personality using active or direct response styles. You can include disfluencies (like "um" or "like") for a more relatable feel and fine-tune the speaking rate to match your brand’s preferred tempo.
- **Industry-specific understanding**—Use “custom vocabulary” to improve transcription and recognition accuracy by adding industry-specific terms, product names, or unique phrases to ensure the AI agent never misses a detail.
- **Optimized silence & timeout management**—Eliminate awkward pauses with granular timing controls. Set specific “no-input timeouts” and “caller-turn timeouts” to ensure the agent prompts the user or moves the conversation forward at just the right moment.
- **Advanced DTMF input handling**—Handle IVR DTMF inputs seamlessly by defining “digit timeouts”, “termination characters (like # or \*)”, and “maximum character lengths”.

For more information, see the [Configure conversation settings](https://help.webex.com/article/ncs9r37#configure%5Fconversation%5Fsettings) section in the Webex AI Agent Studio Administration guide.

## January 29, 2026

## Webex AI Pro 2.0 for Scripted AI Agents is now GA

We are excited to announce a new Engine "Webex AI Pro 2.0" for Scripted AI Agents. Webex AI Pro 2.0 is our latest generative AI-powered Natural Language Understanding (NLU) engine for scripted AI agents. It leverages advanced machine learning algorithms to interpret user inputs and accurately classify intents. By learning from diverse LLM generated linguistic patterns, the engine delivers high precision in understanding what the user wants to achieve, even when phrasing or word choice varies.

**Key Benefits**

- - **Improved intent recognition**: Capable of understanding a wide range of user queries, including unseen samples or input variations, enabling more accurate intent classification.
  - **Adaptive learning**: The model generalizes effectively across similar utterances, reducing the need for exhaustive manual examples.

For more information, see the [Set up scripted AI agent](https://help.webex.com/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide#Set-up-scripted-AI-agent) section in the Webex AI Agent Studio Administration guide and [Understand AI engines for AI agents](https://help.webex.com/article/ne6s80cb).

## January 28, 2026

## Quick Links Available on Control Hub

You can now launch Webex Work Force Optimization (Calabrio), Campaign Management (Acqueon), and Business Rules Engine directly from the Contact Center's Control Hub using quick links. These links will also remain available on the Tenant Management Portal for the next few months. After that, they will be removed from the portal.

## January 27, 2026

## Migration of Webex Contact Center Audit Logs to Control Hub

We are pleased to announce that audit logs for Webex Contact Center are now available in Control Hub. This enhancement delivers an improved administrative experience with advanced search and access capabilities.

**Key Features:**

- **Backfill of Historical Data:** Control Hub includes a backfill of one year (12 months) of audit log data to ensure continuity and comprehensive access.
- **Enhanced Search Capabilities:** Admins can search audit logs by time, the user who performed the action, category, type of change, and the impacted resource.

**Important:**

Starting 90 days from today, audit logs will no longer be available in the Management Portal. We recommend administrators download any necessary audit events from the Management Portal before they are removed.

For more information, please see the [Review activity logs in Control Hub for Webex Contact Center ](https://help.webex.com/hi3lqs)article.

## January 23, 2026

## Barge-in improvements for autonomous AI agent

We’re introducing significant enhancements to how our AI agents manage barge-in events—situations where users interrupt ongoing conversations. In addition to detecting these interruptions to preserve a natural conversational flow, we’ve now enhanced both the session transcripts and the LLM experience. Session transcripts now provide greater clarity and detail by explicitly indicating which prompt was interrupted and the exact point of interruption, highlighting the truncated content. Furthermore, the LLM receives explicit context that a prompt was barged-in and incorporates this information when responding to subsequent dialog. These improvements give developers deeper insights, making it easier to debug, analyse, and optimize interactions for smoother and more efficient user experiences.

For more information, see the [View autonomous AI agent sessions](https://help.webex.com/en-us/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide#concept-template%5Fe0106832-a025-4a69-ac77-e520c4fb9b9e) section in the Webex AI Agent Studio Administration guide.

## Enhanced Agent Personal Greeting in Webex Contact Center

We’re excited to announce an enhancement to Agent Personal Greeting in Webex Contact Center, designed to make customer interactions even more personalized.

Agents can create, record, and update their personal greetings directly from the Agent Desktop using an intuitive telephony IVR interface.

Flow Designer has introduced a new activity that allows to upload the recorded agent greeting. Additionally, a system default flow (non-editable) has been introduced for recording agent greetings.

Administrators can define Greeting Purposes in the Agent Personal Greeting section, making it easy for agents to record greetings for different scenarios.

All personal greetings will automatically appear on the Agent Desktop, making access and updates quick and effortless.

For more information, see [Manage Desktop Profiles](https://help.webex.com/en-us/article/nvaf71f/Manage-desktop-profiles), [Manage Audio Files](https://help.webex.com/en-us/article/be12vp/Manage-audio-files#concept-template%5F10502595-49be-4026-94c8-c5de36f2f03d), [Enhance efficiency with pre-recorded greetings](https://help.webex.com/en-us/article/uf3wou/Enhance-efficiency-with-pre-recorded-messages), [Flow Designer Guide](https://help.webex.com/article/nhovcy4), and [Understand your user profile](https://help.webex.com/en-us/article/egpilq/Understand-your-user-profile).

## January 22, 2026

## AI-Enhanced Call Summaries for Faster, Smarter Customer Interactions

We’re excited to announce the release of two new AI-powered features designed to save time, reduce effort, and elevate every customer conversation.

Post-Call Wrap-up Summaries: Now, as soon as a call ends, AI delivers a concise, structured recap of what was discussed: the reason for the call, key actions taken, and next steps. This eliminates manual note-taking, shortens wrap-up time, and ensures every detail is accurately captured for CRM or quality reviews.

Mid-Call Summaries: When an agent transfers a call—to another colleague, supervisor, or an internal expert—AI instantly generates a live summary of the conversation so far. This means no more repeating information or losing context. The receiving agent starts informed, the hand-off is seamless, and the customer experience remains uninterrupted.

24-Hour Post-Call and Mid-Call Summary: API Access Customers can now retrieve AI-generated summaries for up to 24 hours after a call, enabling easy integration with downstream systems, reporting, or custom workflows. 

Currently, only AI-generated summaries are available via API. Support for agent-edited versions will be introduced in an upcoming release.

With these enhancements, your teams can spend less time typing and more time connecting. For more information, see [Cisco AI Assistant for Webex Contact Center](https://help.webex.com/article/nvvv1zb/), [Enhance your efficiency using AI-generated summaries](https://help.webex.com/article/ndt475w/), and [Enable Cisco AI Assistant for Contact Center](https://help.webex.com/article/n9lk3t6/).

## January 8, 2026

## Update CLID post Agent Consult Transfer

Webex Contact Center has introduced a behaviour update to the agent consultative transfer flow. When an agent performs a consultation, the consulted party will receive a call on their phone with a CLID displaying the Entry Point/Agent. This enhancement has updated the behaviour if the agent releases the call to the consulted party, the CLID will be updated to show the originating caller on release (instead of the EP as it appears today). This enhancement is being implemented based on valuable customer feedback.

## December 19, 2025

## Native Webex Campaign Management: APIs for managing contact lists

We are introducing the following 5 APIs which will help you automate the process of creating and managing contact lists associated with your campaigns:

1. [Create contact list](https://developer.webex.com/webex-contact-center/docs/api/v1/contact-list-management/create-contact-list)
2. [Create contacts within a contact list ](https://developer.webex.com/webex-contact-center/docs/api/v1/contact-list-management/create-contacts-within-a-contact-list)
3. [Get contact lists within a campaign](https://developer.webex.com/webex-contact-center/docs/api/v1/contact-list-management/get-contact-lists-within-a-campaign)
4. [Update a contact's status within a contact list](https://developer.webex.com/webex-contact-center/docs/api/v1/contact-list-management/update-a-contact-s-status-within-a-contact-list)
5. [Update contact list status](https://developer.webex.com/webex-contact-center/docs/api/v1/contact-list-management/update-contact-list-status)

The documentation for these APIs is available on [Webex for Developers API Reference](https://developer.webex.com/webex-contact-center/docs/webex-contact-center) portal.

With these APIs, you can automate the creation and management of your campaign contact lists without the need for a human user to manually upload the contact lists. You can also support use cases such as the following scenario: let’s say a bank’s core debt accounting system every morning generates a file of customers whose debt payment is overdue, and this file is then used to automatically create a contact list for a ‘debt-collection campaign’ using the SFTP upload method. During the day, one of these customers may make the debt instalment payment online or in a bank branch office. In this case, you can write an application to invoke the 4th API in the above list to ‘close the contact record’ for this customer who no longer needs to be called as their debt payment is no longer overdue.

## Native Webex Campaign Management: Advanced (more granular) campaign scheduling

Previously, the ‘Basic campaign schedule’ had the following limitation: although it allowed you to enable or disable the campaign schedule for a specific day of the week, the campaign’s start-time and end-time needed to be the same for every day for which the campaign schedule is enabled.

Now, we have introduced the ‘Advanced campaign schedule’ which will allow you to configure up to three different campaign time slots for each day of the week. You can now schedule campaigns to reflect your real-world business scenarios. For example, multiple contact center shifts, lunch-breaks, half-days on Saturdays etc.

This feature will be visible in the 'Daily schedule' node on the 'Campaign canvas'. 

## Native Webex Campaign Management: Associate different 'Wrap-up code settings' with different campaigns

We are introducing the ability to create multiple ‘Wrap-up code sets’, thus unlocking the ability to configure different call retry setting and contact-closure setting values for the same wrap-up code. Thus, you can now potentially associate a different ‘wrap-up code set’ with each campaign. This enables you the granular control you need to tailor wrap-up code settings to the unique requirements of each campaign, leading to more targeted retry strategies. 

For example, let's say a bank has two debt collection campaigns—one for mortgages and another for auto-loans. The mortgage department may want to 'close the contact' if the wrap-up code is 'Customer promised to pay', but for the auto-loan department's campaigns, for the same wrap-up code, they may want to keep the contact open and retry after 1 day. With this feature, you can easily configure this requirement. 

You can create up to 100 'wrap-up code sets'. 

## Native Webex Campaign Management: Associate different 'Telephony-outcome settings' with different campaigns

We are introducing the ability to create multiple ‘Telephony outcome sets’, thus unlocking the ability to configure different call retry setting and contact-closure setting values for the same telephony-outcome. Thus, you can now potentially associate a different ‘telephony-outcome set’ with each campaign. This enables you the granular control you need to tailor telephony-outcome settings to the unique requirements of each campaign, leading to more targeted retry strategies. 

For example, let's say a bank has two debt collection campaigns—one for mortgages and another for auto-loans. The mortgage department may want to retry after 1 hour if the telephony-outcome is 'Phone is busy', but for the auto-loan department's campaigns, for the telephony-outcome, they may want to retry after 2 hours. With this feature, you can easily configure this requirement. 

You can create up to 100 'telephony-outcome sets'. 

## Native Webex Campaign Management: Infer a contact’s timezone from their US Postal Service ZIP code

This feature is only applicable to clients in the USA.

Until now, the timezone for a US-based call recipient was derived from that contact’s phone area code(s) to ensure the outbound call is made within a ‘Safe Calling Window’ within the overall campaign schedule. However, as customers move from one city/town to another, they are very likely to keep their mobile phone number – thus the timezone inferred from the phone area code can be incorrect.

With the introduction of this feature in ‘Field Mapping step #5’, you will now have the option to _“Derive timezone from contact list: Based on US ZIP codes”_. We have mapped each of the approximately 42,000 ZIP codes in the USA to a timezone. So if you select this new option while configuring ‘Field Mapping step#5’, then the system will infer the timezone for each contact from their ZIP code, instead of inferring the timezone from their phone area code.

This feature may help you to improve your outbound campaign efficiency and improve your compliance with ‘calling window’ regulations.

## Native Webex Campaign Management: Block all calls to specific US ZIP code(s) from all campaigns

This feature is currently in 'Beta' and applicable only to clients in the USA.

We already have a feature that allows you to block calls from all active campaigns to one or more specific telephone area codes within the USA. This feature is very useful if, for example, the authorities declare a civil emergency within a certain area due to some natural disaster.

Now we are introducing a similar feature (currently in ‘Beta’) that will allow you block calls from all active campaigns to one or more specific ZIP code within the USA. This can potentially enable you to more precisely adhere to state and city regulations or business rules at a more granular level.

## December 18, 2025

## Epic Webex Contact Center Agent Desktop Connector – Consult/Transfer, Conference and Out-dial 

We are excited to announce the General Availability (GA) release of several standard agent features in the Epic Webex Contact Center Agent Desktop Connector designed to enhance agent productivity and streamline customer interactions.

**New Features Included:**

- **Outdial via Dialpad**: Agents can now place outbound calls directly using the dialpad within the desktop connector, enabling quick and efficient outbound communication without leaving the interface.
- **Consult and Transfer**: Enhanced consult and transfer capabilities allow agents to consult with and transfer calls seamlessly to other agents, queues, entry points, or dial numbers. This includes the ability to consult with potential participants before adding them to a call, improving collaboration and call handling efficiency.
- **Multi-party Conference**: The conference call functionality has been upgraded to support up to eight participants (including the agent and customer), allowing for richer collaboration. Agents can add multiple participants one at a time, leave the call while others continue, and manage post-call discussions among remaining participants.

**Benefits:**

- Streamlined call handling with simplified transfer and conference processes.
- Ability to soft transfer calls through multi-party conferencing and consult-before-add capabilities.
- Enhanced operational efficiency by enabling direct consultation and transfer to queues, agents, entry points, and dial numbers.

These features are designed to empower agents with more control and flexibility while maintaining a seamless and secure customer experience.

For detailed information on how to use these new capabilities, please refer to the Webex Contact Center Agent Desktop documentation and administrator guides.

You can also watch the [Vidcast Demo](https://app.vidcast.io/share/40831637-9cc3-4fb8-94e3-f98981d7c743).

## Improved turn detection for AI agents

We are thrilled to announce a major breakthrough in our proprietary turn detection model for AI agents, delivering a new level of conversational intelligence and global reach. Our enhanced model doesn’t just detect the logical end of sentences during natural conversations—it now excels at complex slot filling, enabling precise distinction between caller and AI agent turns even when capturing detailed entities like phone numbers, names, and email addresses. This upgrade dramatically improves the fluidity and accuracy of every interaction, minimizing errors and empowering AI agents to handle real-world scenarios with exceptional reliability. Even more impressively, our advanced turn detection is now multilingual, supporting 50 languages recently released in beta, so users can experience seamless, natural conversations in any of these supported languages.

## December 16, 2025

## Connector Limits Expanded: Now Up to 10 per Connector Type

We’re excited to announce that the connector limit in the Integrations section of Contact Center within Control Hub has increased! Now, all connector types—including Salesforce and Google CCAI—support up to 10 connectors per type (up from the previous limit of 5). This enhancement provides greater flexibility and scalability for your integration needs. Take advantage of this update, designed to support your growing business requirements.

## December 15, 2025

## Webex WFO: WFM with Trending Topics

Webex WFO is introducing Trending Topics in WFM, an AI-powered capability that provides deeper operational insights within Workforce Management. By analyzing thousands of customer interactions, Trending Topics identifies emerging themes and topics, helping to explain increases in interaction volume or average handle time.

Key Benefits:

- Identifies emerging trends in customer interactions to support informed staffing decisions.
- Highlights changes in customer discussion topics to optimize scheduling.
- Identifies coaching and training opportunities based on trending themes.
- Flags potential issues early, enabling proactive resolution before escalation.

This feature will need a minimum of Webex WFO Bundle SKU and Enterprise Analytics 100 Interactions Addon SKU.

For more information, see [View and analyze topics in WFM](https://wfohelp.com/doc/Content/user-guides/intraday/topics.htm).

## December 12, 2025

## Introducing timezone configuration for Autonomous AI Agents

We're excited to introduce an update to the autonomous AI agent profile. You can now configure the timezone for your AI agent directly on the agent's profile configuration page, allowing you to define the preferred timezone as part of the agent's settings.

For more information, see the [Update autonomous AI agent profile](https://help.webex.com/en-us/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide#task-template%5F5416be2f-b95e-4b80-bebc-3fa8201414bf) section in the Webex AI Agent Studio Administration guide.

## December 11, 2025

## Customer Journey Widget: Agent experience, now available for all customers 

The Customer Journey Widget is now available by default for all Flex 3 customers. This powerful tool revolutionizes the way your team engages with customers by providing a comprehensive view of every step each customer has taken with your brand. With this new feature, your agents can deliver not only efficient service but also a more personal and informed experience-fully understanding each customer's history at a glance. Empower your team to excel in every interaction with this game-changing addition. 

For more information, see [Get started with Agent Desktop](https://help.webex.com/en-us/article/itebdl/Get-started-with-Agent-Desktop) and [Customer Journey Widget Version 10 for Webex Contact Center](https://help.webex.com/en-us/article/tfcmrp/Customer-Journey-Widget-Version-10-for-Webex-Contact-Center).

## December 09, 2025

## Webex AI Agent Studio user interface enhancements and accessibility updates

We're excited to announce significant enhancements to the Webex AI Agent Studio, featuring a refreshed user interface and improved global navigation. This update brings a modern, user-friendly, and consistent experience that aligns AI Agent Studio with the broader Cisco Webex platform.

With this feature, you'll experience:

- **Modern, unified design:** Experience a sleek, intuitive interface with updated navigation and headers, matching the look and feel of the Webex product family.
- **Dark/Light mode options:** Choose between Dark or Light mode to personalise your workspace and improve visual comfort.
- **Improved accessibility:** Access essential accessibility features, ensuring an inclusive experience for all users.

For more information, see the [Get started with Webex AI Agent Studio](https://help.webex.com/en-us/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide#Get-started-with-Webex-AI-Agent-Studio) in the Webex AI Agent Studio Administration Guide.

## December 01, 2025

## Additional languages and voices support for Webex AI Agent

Webex AI Agent now offers Beta support for additional languages and voices, enhancing its availability for users across diverse global regions. This Beta release allows users to experience and provide feedback on new language and voice options as they are being refined. These languages will be made generally available once sufficient usage data and feedback are collected.

For the additional list of languages and voices, see [Supported languages and voices for AI agents](https://help.webex.com/en-us/article/pdef2d/Supported-languages-and-voices-for-AI-agents).

## Enhanced CRM CTI Connector Experience with Dialpad, Record Sharing, and State

The latest enhancements to Webex Contact Center’s New CTI connectors for Salesforce CRM, ServiceNow, and MS Dynamics deliver several enhancements that improve the integrated desktop experience for agents.

- Onscreen Dialpad for Consultation Calls:  
Provides an easy-to-use dialpad within the CRM for agents to initiate consultation calls, simplifying internal collaboration and enabling faster, more informed customer responses.
- Inactivity Timeout Settings from Control Hub:  
Monitors agent activity and prompts a warning after a configurable period of inactivity; agents are automatically logged out if inactive, enhancing both security and resource management. Takes the setting from Control Hub configuration.
- Share Record for Salesforce:  
Allows agents to seamlessly share the currently open record with colleagues during consultation or conference calls in Salesforce, improving collaboration, reducing handle times, and enhancing the customer experience.

## November 28, 2025

## Webex WFO: Vacation Planner Pro 

Vacation Planner Pro in Webex WFO streamlines and automates the management of vacation requests for contact centers, ensuring a fair and efficient process. By eliminating the need for spreadsheets or manual approvals, this feature is seamlessly integrated within Webex WFO. 

This feature will need a minimum of Webex WFO Bundle SKU and Enterprise Analytics 100 Interactions Addon SKU.

**What to Expect**:

- Agents can submit and manage vacation requests directly from the Webex WFO web or mobile app.
- Supervisors can configure vacation rules, including daily allowance, open periods, or required lead times and implement fair assignment methods such as performance-based ranking, seniority, or first-come, first-served.
- Availability is automatically updated whenever vacations are added, modified, or cancelled.
- With Vacation Change, agents can request alternative dates after their initial approvals. Waitlisting and rule-based automatic approvals help maintain a fair process.

**Key Benefits**:

- **Fair and transparent**: Every agent sees a clear and unbiased process, even during peak holiday periods.
- **Time-saving**: Removes the need for spreadsheets and manual reconciliation, saving valuable supervisor hours.
- **Compliant**: Meets union and local labor requirements by ensuring vacations are assigned according to defined rules.
- **Agent-friendly**: Empowers employees with self-service options, supporting better work-life balance.
- **Performance-aligned**: Enables organizations to reward tenure or KPIs by factoring them into vacation approvals.

For more information, see [Manage vacation planning](https://wfohelp.com/doc/Content/user-guides/vacation-planning/overview.htm).

## November 27, 2025

## Webex WFO: Insights Data Export Service

The Insights Data Export Service for Webex WFO provides direct access to your Insights data. Rather than relying on manual downloads, your data is securely delivered to your Amazon S3 bucket, allowing seamless integration with your existing tools and systems. 

This feature will need a minimum of Webex WFO Bundle SKU and Enterprise Analytics 100 Interactions Addon SKU.

**What to Expect**:

- Exports data across Analytics, QM, WFM, and Call Recording subject areas.
- Supports incremental exports (records added, changed, or deleted since the last export).
- Ensures secure, reliable transfers with built-in error checking and automatic retries.

**Key Benefits**:

- **Seamless access**: Data is always available and export-ready with no coding required.
- **Trusted and secure**: Delivered via secure S3 Access Points with integrity safeguards.
- **Scalable**: Built to handle your growing data needs over time.
- **Time-saving**: Automates data workflows, eliminating the need for manual effort by your teams.

To enable the Insights Data Export Service, please contact your Cisco Customer Success Manager or Cisco Support for details.

For more information, see [Set up Insights data export service](https://wfohelp.com/doc/Content/user-guides/insights-bi/data-export-service/set-up-and-preparation-guide.htm) and [Insights data export service data model dictionary](https://wfohelp.com/doc/Content/Insights-data-export-service-dataset-dictionary/introduction.htm).

## November 24, 2025

## Extension based entry points

Webex CC offers a new capability that will allow administrators to assign calling extensions to entry points. When assigning numbers to an entry point, the administrator will choose to assign an E.164 number, extension or both. This capability means that an administrator no longer needs to provide an E.164 number to every entry point saving numbers. The feature also makes it possible for internal callers to dial a short extension to access internal help desk services for example.

For more information, see [Configuration of Inbound Entry Points to Webex Contact Center](https://help.webex.com/en-us/article/2dputx/Set-up-voice-channels-for-Webex-Contact-Center#generic-template%5F518d9020-cdfa-4fb8-9219-e671b4883e0b).

## November 21, 2025

## Webex WFO: Performance Management

Webex WFO has introduced Performance Management, a new solution that unifies coaching, performance metrics, and agent development in one experience. It connects key data from QM and WFM to give supervisors a complete view of performance, helping them track progress, improve coaching effectiveness, and empower agents with timely visibility into their goals. 

For additional details, please refer to the article – [Webex WFO: Performance Management (Webex Contact Center)](https://help.webex.com/en-us/article/nvckf7r/Webex-WFO:-Performance-Management-%28Webex-Contact-Center%29).

Customers must sign-in through their Tenant Specific URL to access Performance Management. For more information, refer to [Tenant Specific URL for Webex WFO Users (Webex Contact Center).](https://help.webex.com/en-us/article/n8b0ttd/Tenant-Specific-URL-for-Webex-WFO-Users-%28Webex-Contact-Center%29)

## Webex WFO: Tenant-Specific URL

**What is Tenant-Specific URL:** Tenant-Specific Sign-In URLs are now live in Webex WFO. This new tenant-based sign-in process provides each Webex WFO tenant a dedicated subdomain, offering a more secure and streamlined way to sign in. It also enables access to the new **Performance Management** module within Webex WFO. 

Your existing sign-in method will remain active for the foreseeable future to ensure a smooth transition for your organization. 

**Key Benefits:** 

- A more streamlined sign-in experience when accessing Webex WFO
- Fewer lockouts, fewer errors, and easier password resets
- Seamless switching between modules - no more re-authenticating
- Prepares you for future enhancements
- Delivers a more personalized experience with tenant-specific subdomains
- Access to the new Performance Management application

**Actions Required for Administrators** 

- Administrators are responsible for communicating the new tenant-specific sign-in URL to internal users.
- To locate your tenant-specific URL and view configuration details, please refer to the instructions provided in the configuration documentation [Tenant Specific URL for Webex WFO Users (Webex Contact Center)](https://help.webex.com/en-us/article/n8b0ttd/Tenant-Specific-URL-for-Webex-WFO-Users-%28Webex-Contact-Center%29).
- Administrators should sign-in to Webex WFO and follow the steps mentioned in the screen modal to access the feature (In product Tip Guide)

For more information, see [Tenant Specific URL for Webex WFO Users (Webex Contact Center)](https://help.webex.com/en-us/article/n8b0ttd/Tenant-Specific-URL-for-Webex-WFO-Users-%28Webex-Contact-Center%29).

## Custom data for Autonomous AI Agent-Voice

Custom data feature is now available for autonomous AI agents. This feature enhances the end-user experience and provides you with greater control over voice conversations. With this feature, developers can send a JSON payload from the WXCC flow directly to the autonomous AI agent at the start of each session. You can use this payload to customize agent behavior for each customer or to pass information from the flow that the agent needs. 

The custom data sent to the AI Agent can be accessed in the agent's goals, instructions, welcome message, actions, or slots using the syntax {{variable}} in the Webex AI Agent studio application.

For more information, see [Configure custom events for AI agents](https://help.webex.com/article/n5uo60x).

## November 19, 2025

## Automated inactivity alerts for digital channels

This feature allows administrators to configure automated alert messages for both customers and agents when either party becomes inactive during an active digital channel interaction. If a customer is unresponsive, administrators can set up to three timed reminders to prompt the customer to reply. If an agent is unresponsive, automated alerts can inform the customer that the agent is busy and will respond soon, with up to three reminders and optional visual warnings for agents about potential SLA breaches. This helps keep both customers and agents informed, reduces idle time, and maintains smooth communication.

For more information, see the [Configure auto-response message](https://help.webex.com/article/nma0a2v/Webex-Engage-Administration-guide#task-template%5F2249609c-0385-4267-87e8-fd5436fae913) section in Webex Engage Administration guide.

## Enhanced Webex Engage admin console with streamlined access and unified experience

This feature allows administrators to launch the Webex Engage admin console directly from the Control Hub, eliminating the need to first access the Engage standalone admin console. Additionally, features from the existing customer care console are being integrated into the unified admin console, so administrators no longer need to manage configurations across multiple consoles. This streamlines the administrator experience and simplifies configuration management.

For more information, see [Webex Engage Administration guide](https://help.webex.com/article/nma0a2v).

## Enhanced conversation search with multiple filters

This feature enables administrators to search for conversations using additional filters. Administrators can now filter conversations by agent first name, last name, email ID, and login ID (renamed from Agent ID) directly from the Webex Engage admin console. Searches can be performed using these new filters for up to seven days at a time, following the tenant's data retention policy. This enhancement provides a more flexible and efficient search experience for administrators.

 For more information, see the [View chat conversation](https://help.webex.com/article/nma0a2v/Webex-Engage-Administration-guide#View-chat-conversations) section in Webex Engage Administration guide.

## Render Livechat widget based on browser locale

This enhancement allows the Livechat widget to automatically display in the end user's browser language, eliminating the need for administrators to configure a separate widget for each language. With the new "Automatic (Browser-locale based)" option in the Chat Widget Language settings, the widget will match the customer's browser locale, making it easier to support a global audience from a single website. If the required language isn't supported, the widget defaults to English (US). This update also applies to cookie preferences and email transcripts, ensuring a consistent, localized experience for all users. Existing websites retain their current language settings, while new websites default to the automatic browser-based option.

For more information, see the [Configure website settings](https://help.webex.com/article/nma0a2v/Webex-Engage-Administration-guide#task-template%5F5e61543d-3b76-44d3-bbf6-8c876bff213f) section of the _Configure Livechat widget_ topic in Webex Engage Administration guide.

## Configure business hours for Livechat widget

This feature enables administrators to set business hours for Livechat widgets directly from the Widget Visibility settings in the Webex Engage admin console. With this enhancement, administrators can control when the Livechat widget is visible to users based on business hours, providing a more accurate and user-friendly experience for end customers.

For more information, see the [Configure website settings](https://help.webex.com/article/nma0a2v/Webex-Engage-Administration-guide#task-template%5F5e61543d-3b76-44d3-bbf6-8c876bff213f) section of the _Configure Livechat widget_ topic in Webex Engage Administration guide.

## November 17, 2025

## Enhanced Filter Flexibility for Reporting

We are excited to announce a powerful enhancement to the text-based formula creation experience in Analyzer. Building on our recent launch of text-based formulas, you can now apply filters directly within your formulas, streamlining the creation process. This enhancement enables users to add multiple filters using the AND logical operator for precise, granular data selection -delivering richer reporting in a single step. Inline suggestions and error messages provide real-time guidance, while broad operator support adds even more flexibility. With this update, supervisors and analysts can easily create complex, targeted formulas-empowering faster, deeper insights.

For more information, see [Create a Text-based Formula](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide#topic%5F217E73D0D2DB0100877B85951B90571C)

## Skill Expression - Aggregation of Counts and Durations

 We are excited to introduce Skill Expression-based aggregation in Analyzer, delivering skills-driven aggregation for reports. Supervisors and analysts will be able to group the counts and durations fields in reports by user defined skill expressions groupings. Users can define up to 100 Groups in a report and also 1000 skills within a group.

For more information, see [Create an Enhanced Field for skill-related fields](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide#generic-template%5F98f89cc3-d2a9-41b1-ac12-3c9547d5b1f7).

## November 14, 2025

## Force sign-out active users feature for Administrators

Force sign-out feature is now available for Webex Contact Center administrators. This feature allows them to forcibly sign out agents who are stuck in a logged-in state or inactive for extended periods, helping to maintain operational efficiency and ensure smooth contact center performance. For more information, see the Force sign out section of [Manage Contact Center Users](https://help.webex.com/en-us/article/nzk6tpp) article.

## November 13, 2025

## Complex Calls Now Configurable in Webex WFO

Webex WFO now allows customers to enable Complex Calls directly from the Webex WFO ACD Configuration page. This update removes the need for a Webex WFO support case and gives administrators more control over how multi-leg interactions are captured and viewed.

**Before enabling this feature, review the requirements for Webex CC Complex Calls in the** [Webex WFO and Webex Contact Center Integration Guide for Deployments with New WFM](https://help.webex.com/en-us/article/08mxjm/Webex-WFO-and-Webex-Contact-Center-Integration-Guide-for-Deployments-with-NewWFM).

How it works?

When enabled, Webex WFO automatically segments calls that include transfers, consults, pauses, resumes, or conferences into separate interaction segments, assigning each segment to the appropriate agent. This segmentation enhances clarity for evaluation, compliance, and reporting purposes.

## November 12, 2025

## Skill Filter in Real-Time Queue Stats

Supervisors can now filter real-time queue stats by skill and proficiency, offering deeper visibility into queue performance and agent availability.

This enhancement makes it easier to identify understaffed or overstaffed skills, ensure the right agents are handling the right contacts, and maintain balanced service levels across queues.

For information, see [Supervise and manage Contact Center queues](https://help.webex.com/b1qhidb) and [Supervise your agents and teams](https://help.webex.com/n408h9cb/Supervise-your-agents-and-teams#concept-template%5F5105a6e8-849d-4aa8-b6e5-5c6cd6af4998) articles.

## November 11, 2025

## Direct SMS connectivity now available for Webex Contact Center and Webex Connect customers in Australia 

Starting November 1st, `Webex Contact Center` and `Webex Connect` customers in Australia using SMS as part of their intelligent front door to the contact center strategy will benefit from a new, local SMS connection that delivers SMS traffic directly onto the network in Australia. 

Benefits 

- Faster SMS Delivery—Outbound SMS messages to Australian devices will now be sent through a local messaging hub based in Sydney, ensuring lower latency, quicker delivery and better security.
- Data Sovereignty—Messages will stay within Australia helping to meet important data residency and compliance requirements.
- Stronger SMS Channel—Admins and Contact Center decision makers can now provide a more secure SMS experience as part of their intelligent front door solutions.
FAQs

How do I get started?

Continue using your existing order process via CCW. For new phone numbers, use the usual Telco asset provisioning process. 

How do I order phone numbers in Australia?

Request Australian numbers as you normally would via the Telco asset provisioning process. 

How does this benefit me as a customer?

Your SMS traffic now routes through a leading Australian network's hub in Sydney, reducing delivery times, keeping your data local, and ensuring compliance-all at no extra cost! 

## November 10, 2025

## Enhanced CRM CTI Connector Experience with Dialpad, Send DTMF, and more

Webex Contact Center’s New CTI connectors for Salesforce CRM, ServiceNow, and MS Dynamics deliver several enhancements that improve the integrated desktop experience for agents.

- Dialpad on Home Screen for Outgoing Calls:  
Introduces an intuitive onscreen dialpad within CRM integrations, enabling agents to initiate outgoing calls directly from the interface for increased efficiency and streamlined workflows.
- Edit call subject field from within the connector:  
Ability to edit the Call's Subject field when within the Connector's interface, allowing agents to provide more context and accurate information on each call.
- Send DTMF Tones via keypad when using WebRTC:  
While on a WebRTC call, agents can send DTMF tones directly from the interface, supporting interactions with IVRs and automated systems.
- Expanded Contact Search beyond 100 contacts:  
The previous limit of 100 contacts has been lifted, enabling agents to search and access a larger set of contacts within the CRM connector.

## October 31, 2025

## Enhanced user experience for Consult and Transfer Selections and drop-downs in Agent Desktop

We’re excited to introduce enhancements to the Consult and Transfer modals in Agent Desktop for a cleaner, more consistent, and efficient workflow. We’ve also improved performance for the Agent State selector, Wrap-up codes, and outdial ANI drop-downs. Now, searching within these drop-downs requires a minimum of 3 characters to display results.

**Key improvements:**

- **Streamlined & decluttered modals**  
Consult and Transfer modals now feature separated entry points and queues, standardized entity listings, and display only what you have access to—reducing clutter and making navigation easier.
- **Performance enhancements to drop-downs:**  
The Agent State selector, Wrap-up codes, and Outdial ANI drop-downs have been optimized for better performance, ensuring faster and smoother selection. As a result, the search option within these drop-downs will need the user to enter a minimum of **three characters** before search results are displayed.

For more information, see [Make an outdial call](https://help.webex.com/en-us/article/nvxpcaf/Make-an-outdial-call#place-an-outdial-call), [Manage yours calls in Agent Desktop](https://help.webex.com/en-us/article/mmcf7p/Manage-your-calls-in-Agent-Desktop#end-a-call), and [Understand Agent States](https://help.webex.com/en-us/article/nvg4gu6/Understand-agent-states#supervisor-availability-states).

## October 29, 2025

## Simplified sign-in experiences

We are adjusting the launch date for the **Simplified sign-in experiences** feature. Originally slated for October 15, 2025, this update will now be rolled out on **October 29, 2025**. This brief postponement allows us to integrate valuable feedback gathered during Early Access, ensuring a more robust and reliable experience for your agents and supervisors. No action is required from administrators or users; this adjustment is made to enhance overall product quality and deliver a superior user experience.

We are introducing a simplified and more efficient sign-in experience for agents (and supervisors who use the Agent Desktop) in Webex Contact Center. The current sign-in process presents users with multiple options (dial number, extension, desktop), which can lead to wasted time and effort, especially when having to repeatedly enter dial numbers or extensions. It can also lead to user errors, such as mistyping credentials, and routing issues (Redirection on No Answer, or RONA) if incorrect credentials are used.

This enhancement aims to streamline the sign-in process and reduce errors, especially when using pre-populated or drop-down credential options. While these improvements minimize mistakes and routing problems for most users, administrators should note that the system performs validation on the credential itself (for example, ensuring it's a valid format and assigned to a user's profile), but does not perform a real-time device status check at sign-in. Therefore, it is the user's responsibility to ensure their selected or entered dial number or extension is associated with an active and available device.

This enhancement includes:

- **Smarter sign-in options**: The sign-in screen now dynamically displays only the options relevant to your agent profile. For example: Agents configured for desktop-only will see only the desktop option.
- **Pre-populated credentials**: If your profile includes a single configured dial number or extension, this information is automatically pre-filled. For profiles with multiple configured options, a drop-down is available, saving you time and reducing the risk of mistyped information.
- **Webex Calling validation**: For Webex Calling users, validation is performed to ensure that extensions or dial numbers selected from the drop-down are valid and assigned to the user's Webex Calling profile. This helps ensure users select a correct credential, minimizing routing issues caused by incorrect or unassigned credentials. If a user manually enters an extension or dial number, the system will still check if the credential is assigned to them, but no real-time device status check is performed at sign-in for any entry (drop-down or manual). It is the user's responsibility to ensure the selected or entered extension or dial number is associated with an active and available device. This approach maintains flexibility for users who employ extensions not configured in Webex Calling, but it is their responsibility to ensure the extension is available and ready for use.
- **"Don’t show this again" feature**: The **Don’t show this again** check box allows users to skip the station selection screen during subsequent sign-ins. Once selected, the system will perform an auto sign-in, bypassing the station selection step. Users can still clear this option at any time under Change Profile Settings to be presented with the station sign-in screen again if needed.

**Benefits**

- **Faster and easier sign-in**: A streamlined process reduces sign-in time, allowing you to start work quicker.
- **Minimized errors**: Pre-populated credentials and validation for drop-down selections help eliminate issues caused by mistyped information or invalid details _for the credential itself_. However, the system does not perform a device status check at sign-in, so it remains the user’s responsibility to ensure device availability.
- **Resolved Redirection on No Answer (RONA) issues**: By validating sign-in credentials (ensuring they are valid and assigned), routing errors like RONA caused by incorrect credentials are minimized. However, users must ensure their selected or entered credential is associated with an available device to avoid RONA issues.
- **Improved call routing**: Accurate sign-ins for validated credentials ensure seamless call routing and an enhanced customer experience. Users must ensure their selected or entered credential is associated with a correctly configured and available device to avoid potential routing problems.

These enhancements are designed to improve usability and reduce errors for most sign-in scenarios by validating the credentials themselves. However, the system does not perform a device status check at sign-in. Therefore, it is the user's responsibility to ensure the selected or manually entered extensions or dial numbers are associated with an active and available device to prevent disruptions.

For more information, see <https://help.webex.com/en-us/article/n6lmci8/Sign-in-to-Agent-Desktop> and <https://help.webex.com/en-us/article/lc7emx/Sign-in-to-Supervisor-Desktop>.

## October 30, 2025

## Interaction Metrics Enhancement - Analyzer 

We’re excited to announce significant enhancements to interaction metrics in Analyzer, including the introduction of 8 new transfer metrics covering conference and consultation scenarios. Additionally, we have modified 13 metrics related to request counts, request duration, transfer count and updated the definitions for answer duration to ensure greater accuracy. All these changes have been implemented in the Agent Summary Report Repository (ASR). 

Previously, in some metrics like request count, triggers were based on when the consulted agent answered rather than when the request was initiated. This sometimes created a gap between metric reporting and user expectations, particularly for consult requests, and could result in connected and consulted counts appearing higher than expected. With these enhancements, we have refined and introduced new metrics to better align with user expectations, delivering more precise, actionable, and granular reporting for your contact center operations. A detailed list of the updated metrics and their new definitions is provided below: [List of the updated interaction metrics and their new definitions in ASR](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide#reference-template%5F616b58ad-d77c-4a11-88ae-a30119a61ae9)

## October 24, 2025

## Voice preview for scripted AI agents

Webex AI agent supports the in-platform voice preview feature for scripted AI agents. This enables quick testing and iteration of the voice experience without the need for deployment. See the [Preview voice conversation](https://help.webex.com/en-us/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide#task-template%5F0d438e02-c62e-44c2-a8cb-a10f584092e1) section for scripted AI agents in the [Webex AI Agent Studio Administration Guide](https://help.webex.com/en-us/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide).

## October 09, 2025

## Native Webex Campaign Management Add-on: APIs for Managing DNC Lists

As you may remember, on July 31st 2025, we introduced a new offering available to order in Americas, Europe and Africa: 'Native Webex Campaign Management Add-on for Webex Contact Center'.

We have now made available three APIs which allow you to automate the management of the 'Do Not Contact Lists' (DNC Lists) within this add-on module.

This set of APIs will allow you to perform the following three operations:

- Add a phone number to a specific DNC list
- Remove a phone number from a specific DNC list
- Check whether a phone number already exists within a DNC list

For more information, please refer to [Campaign Management DNC APIs](https://developer.webex.com/webex-contact-center/docs/api/v1/dnc-management-api) on the Developer Portal.

## October 07, 2025

## Suggested responses for voice interactions

Suggested Responses is a real-time AI Assistant feature designed to support your contact center agents with contextual guidance, enabling them to deliver faster, more consistent, and positive customer experiences.

As an administrator, you will be able to enable and manage the Suggested Responses feature, customizing it to meet your Contact Center’s needs for efficient deployment and oversight.

**What does this mean for you?**

- **Centralized control**: Enable the feature across the organization or for specific queues using Control Hub.
- **Tailored assistance**: Create Assistant skills by defining knowledge and workflows needed to generate suggestions, and manage all of this in AI Studio. **Link these skills to queues to tailor assistance for your agents.**
- **Performance insights**: Access detailed reports to evaluate the feature's impact on agent productivity and interaction quality.

These updates are designed to optimize agents performance and enhance the overall customer experience in Webex Contact Center.

Currently, we only support English language. Non-English language support will be in beta by November 2025\. These languages will be made generally available once sufficient usage data and feedback are collected.

For more information, see [Cisco AI Assistant for Webex Contact Center: Administrator's guide to configuring suggested responses](https://help.webex.com/en-us/article/nztf84bb/Cisco-AI-Assistant-for-Webex-Contact-Center:-Administrator's-guide-toconfiguring-suggested-responses).

## October 06, 2025

## Granular access control in Webex Contact Center

We're excited to announce this powerful feature that enables administrators to delegate granular permissions and resource-specific access to admins and supervisors.

**Feature highlights:** 

- **Granular permissions:** Admins can now grant view, edit, or no access permissions to individual resource types (such as Queues, Business Hours) within User Profiles. This replaces the previous approach of assigning a single permission to a group of resource types.
- **Resource collections:** Introducing **Resource collections**, allowing admins to group specific resources (for example, Queue 1, Business Hour 1) and assign these collections to users via User Profiles.
- **Targeted access:** User profiles define exactly which resources a department admin or supervisor can view or edit, based on the Resource Collections attached to their profile.
- **Flexible organization:** Resource collections can be organized by department, line-of-business, customer, or any structure that suits your needs. For example, a Resource Collection with Queues A and B will only allow assigned users to interact with those specific queues
- **Enforced across applications:** Analyzer, Flow Designer, and Desktop will now adhere to this enhanced User Profile and Resource Collection framework
- **Call monitoring permissions:** To continue using call monitoring, whisper coach, or barge-in features after migration, please ensure your user profile’s permission is set to 'edit' before GA to avoid any service interruptions.
**Migration and management:** 

• Cisco will automatically migrate customers to the new User Profile and Resource Collection experience, preserving existing access levels.

• The legacy User Profile experience in Management Portal will be decommissioned. User Profiles can now only be managed within Control Hub.

AI Agent, Topic Analytics, Digital Channels, and Surveys are not in scope for this release.

For more information, see [Manage access in Webex Contact Center](https://help.webex.com/nzmlgqi). This help article replaces existing _Manage user profiles_ article from the help center.

## September 29, 2025

## Personal callback scheduling for improved continuity and satisfaction

We're excited to introduce the personal callback scheduling feature to transform both customer and agent experiences. Now customers can request a return call from the same agent who handled their previous interaction. This improves continuity, reduces repeat explanations, and boosts customer satisfaction. If the original agent isn’t available, the system automatically routes to the next best-skilled agent—all built on the existing schedule callback framework with full reporting visibility.

For more information, see the [Events](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#events-in-flow-designer) section in the [Flow Designer Guide](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer); [Call Progress Analysis](https://help.webex.com/en-us/article/np2fdx/Understand-Routing-and-Queueing-in-Webex-Contact-Center#CallProgressAnalysis) section in the [Understand Routing and Queueing in Webex Contact Center](https://help.webex.com/en-us/article/np2fdx/Understand-Routing-and-Queueing-in-Webex-Contact-Center).

## Webex WFO embedded in Webex Contact Center Agent and Supervisor Desktops

Webex WFO is placing greater emphasis on improving the experiences of agents and supervisors. This enhancement provides Contact Center administrators with an SSO-based solution that embeds Webex WFO directly within the Webex Contact Center Agent and Supervisor desktops. Agents and supervisors can now complete all Webex WFO tasks without leaving their desktop, delivering a more seamless, efficient, and enhanced user experience.

**Administrators need to configure this functionality. Complete details are available here**: [Embed Webex WFO in Webex Contact Center Desktop](https://www.wfohelp.com/doc/Content/cisco-webex-wfo/embed-app.htm). 

Once set up, agents and supervisors can immediately benefit from the embedded experience, completing all Webex WFO tasks more efficiently within their existing desktop environment. 

- The embedded Webex WFO solution is only available for Okta and OneLogin SAML Providers.
- The embedded Webex WFO solution is not currently supported for the standalone Basic QM offering. This solution is supported for all other offerings of Webex WFO.

## September 26, 2025

## Mute agent during agent greeting playback

Agent greeting provides the ability for a pre-recorded agent greeting to be played at the start of a customer interaction. Webex CC will be introducing enhanced behavior to agent personal greeting playback. With this enhancement the agent will now be muted during playback of a greeting. This prevents the agent talking over the top of their greeting.

For more information, see [Set Announcement](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5Faf689dae-3766-43bb-b4f0-e91c224ca437) section in Build and manage flows with Flow Designer article.

## September 24, 2025

## Consult Transfer Conference to another agent

Webex CC will be introducing an enhanced Transfer conference capability into the agent desktop. The feature will streamline the process to transfer a conference and is presented to the agent as a new Transfer button. The button is used to move an existing conference to another agent, number or queue. This is a simplified process as the agent no longer needs to take multiple steps to hand the conference on. This could be used when an initial agent is acting in a concierge role. They could add support resources to a call such as an interpreter prior to transferring the call on. 

## September 19, 2025

## Introducing EPIC Desktop Connector for Webex Contact Center

Webex Contact Center’s integration with Epic Hyperdrive enables healthcare teams to manage patient communications directly within Epic, giving agents immediate access to patient records, previous interactions, and clinical details as soon as a call connects. This streamlined approach eliminates the need to toggle between systems and ensures every interaction is fast, personalized, and efficient.

The integration also supports seamless collaboration with clinicians and administrators from within the Epic workspace, allowing agents to escalate cases and coordinate care in real time. By reducing manual steps and simplifying workflows, staff can focus on delivering high-quality patient experiences while boosting productivity across the care team.

With built-in enterprise-grade security and full HIPAA compliance, Webex Contact Center for Epic Hyperdrive safeguards sensitive patient information at every touchpoint. Healthcare organizations can confidently improve communication, engagement, and care outcomes knowing that regulatory requirements and patient privacy are fully maintained.

Feature set includes: 

- Built-in view of the Webex Contact Center Agent Desktop, with the flexibility to open the full window at any time.
- All call controls—including accept, reject, consult, transfer, pause, and resume—are available to healthcare workers directly within their Epic Hyperdrive system.
- A task list is available to agents, allowing them to prioritize incoming interactions.
- Outbound calls can be placed simply by clicking the “Click to Dial” button.
- The ability to pause and resume call recording ensures that sensitive information is not recorded.

## September 15, 2025

## CLI Update support for Inbound calls

Webex CC has introduced enhanced behavior to handle Calling Line Identification (CLI) updates during an active call. A CLI update would normally happen when a call is routed to an entry point via a call transfer. Previously, Webex CC would always use the first CLI presented to represent a call, after the introduction of this enhancement the final CLI will always be presented. When a CLI update occurs, agent desktop, reporting data, call history and APIs will all reflect the final CLI rather than initially presented CLI.

Only call transfers initiated from desk phones or Jabber clients on-premises reflect the final CLI. Transfers performed via the Webex App on Webex Calling do not update to show the final CLI.

## September 10, 2025

## Enhanced Preview Dialer Experience

We have enhanced the Preview Dialer to streamline agent workflows and to boost efficiency by optimizing contact management. Agents can either accept calls to proceed or skip and remove contacts, with the latter action tracked via API responses for better analytics.

This increases efficiency by reducing idle time, enhances flexibility by giving agents control over contact handling, and provides actionable insights through API-driven tracking. Overall, the improved experience transforms contact interactions into a more dynamic, agent-friendly, and productivity-focused process.

For more information, see [Make an outbound preview campaign call](https://help.webex.com/en-us/article/ng5c9xk/Make-an-outbound-preview-campaign-call).

## September 04, 2025

## Ability to transfer agent initiated outbound interactions from Agent Desktop

Webex Contact Center has introduced a new feature that enables agents with premium licenses to transfer digital outbound SMS and email interactions to queues, other agents, or supervisors (only for those with supervisor and agent roles). This enhancement allows agents to avoid ending conversations prematurely at the end of their shifts with just the click of a button. 

For more information, see [Manage text message (SMS) conversations](https://help.webex.com/n4hhf8ab) and [Manage email conversations](https://help.webex.com/j392h2).

## August 29, 2025

## Preview Digital Interactions in Queue and Self-Assign (Cherry Picking)

We’re excited to announce that agents now have **ability to search, preview (read-only), and manually assign digital interactions waiting in queue**.

**Why It Matters** 

- **Triage During Spikes:** Let supervisors guide agents to pick tasks where help is most needed.
- **Empower New Agents:** Allow junior staff to choose fewer complex cases while building confidence.
- **Close the Loop:** Pick up unresolved conversations across channels (e.g., close the loop on an email waiting in the queue while the same issue was resolved as part of a voice call the agent is handling).

**What’s changing for Admins**

- Admins can configure **Self-assignment limits** per **Media Type** via the Multimedia Profile (e.g., chat: 5, email: 20). This is separate to the existing Automatically pushed contact limits.
- Manual self-assignment can be enabled **per queue** for tighter control.
- Extensive reporting updates will **track tasks** **self-assigned vs. automatically pushed** as part of the standard record repositories on Analyzer.

## **Note:**

- This feature does not allow cherry picking voice interactions out of the box.
- Admins will need to extend the multimedia profile with self-assignment limits for agents to see a new ‘Queued’ tab in their workspace on the Agent Desktop.
- Only interactions from Queues enabled for Manual Assignment will show up in the Queued tab on the Agent desktop.

For more information, see [Enable self-assignment of digital interactions for agents in Agent Desktop](https://help.webex.com/en-us/article/rvyex8/Enable-self-assignment-of-digital-interactions-for-agents-in-Agent-Desktop) and [Self-assign digital interactions (cherry picking)](https://help.webex.com/en-us/article/nd0114/Self-assign-digital-interactions-%28cherry-picking%29). 

## Purge Recordings Policy Control in Webex Contact Center

We’re pleased to announce the availability of Purge Recordings Policy Control features in Webex Contact Center. These enhancements will enable tenant administrators to manage retention policy of call recordings and transcripts more efficiently, ensuring compliance, optimising storage, and maintaining security. 

With this new feature, you can:

- Configure retention policies for call recordings and transcripts.
- Automatically purge expired recordings and transcripts, thereby freeing up storage space.

The default retention policy for new customers will be 1,095 days (3 years). Existing customers will need to configure their retention policy via the Control Hub. For more information, see [Manage Retention and Purge Recordings and Transcripts](https://help.webex.com/en-us/article/uimme/).

## August 27, 2025

## Manage direct agent assignment to queues from Supervisor Desktop

Supervisors can directly assign or remove agents from queues within the Supervisor Desktop, specifically through the new Queue Statistics page—eliminating the need to switch to Control Hub. This functionality will be available only for Agent-Based Queues. It streamlines queue management, enables quicker adjustments based on real-time conditions, and gives supervisors greater operational flexibility to manage workforce distribution efficiently.

For more information, see [Supervise and manage Contact Center queues](https://help.webex.com/en-us/article/b1qhidb/Supervise-and-manage-Contact-Center-queues).

## Update Agent Skill Profiles from Supervisor Desktop

We are excited to introduce a new feature that allows supervisors to update an agent’s Skill Profile directly from the Supervisor Desktop within the Team Performance Details view.

This enhancement empowers supervisors to make real-time adjustments for agents under their scope, streamlining operations and reducing reliance on admin workflows. Supervisors will now have the ability to edit agents' skill profiles in real time and view key skill profile details such as Skill Name, Skill Type, and Skill Value to make informed decisions quickly.

This feature is role-based and requires admin-granted access, ensuring secure and controlled usage.

For more information, see [Supervise your agents and teams](https://help.webex.com/en-us/article/n408h9cb/Supervise-your-agents-and-teams) and [Manage user profiles in Webex Contact Center](https://help.webex.com/en-us/article/n524f2m/Manage-user-profiles-in-Webex-Contact-Center).

## Comprehensive user interface enhancements for Webex Contact Center Agent and Supervisor Desktops

The following features are now available to the existing tenants:

- [Enhanced User Interface for Agent and Supervisor Desktops](https://help.webex.com/en-us/article/nv7abhz/What's-new-for-administrators-in-Webex-Contact-Center#section%5Fwtl%5Fg2y%5Fhgc)
- [Enhanced Supervisory features in Desktop Experience (Control Hub)](https://help.webex.com/en-us/article/nv7abhz/What's-new-for-administrators-in-Webex-Contact-Center#section%5Fvdb%5Fbq1%5F2gc)
- [Enhanced Agent Task List user interface updates](https://help.webex.com/en-us/article/nv7abhz/What's-new-for-administrators-in-Webex-Contact-Center#section%5Flsf%5Fgpp%5Fhgc)

## August 21, 2025

## Flow Debugging Enhancements

Webex Contact Center Flow Designer now offers an enhanced Flow Debugging capability that can selectively decrypt logs based on administrator privileges and includes additional filters for advanced search. This feature is available to administrators via user profiles and enables efficient log search and filtering to streamline the debugging process - significantly reducing the time needed to resolve issues within flows. Administrators can control privileges by using flow-level and activity-level decryption settings, while developers benefit from the increase in troubleshooting efficiency with the additional search filters.

For more information, see [Debug flows](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Ffeaf392e-32a2-45b5-ac35-ca0c500086fc) section in the [Flow Designer guide](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer).

## August 21, 2025

## Topic Analytics Reporting in Analyzer

We are excited to introduce enhanced topic-level insights directly within the AI Assistant dashboard through new reporting capabilities in Analyzer. This feature is designed specifically for Business Analysts and Supervisors, enabling them to gain deeper visibility into customer interactions by integrating topic insights alongside interaction data and key performance indicators (KPIs) within Analyzer, providing a unified view of customer conversations.Non-administrator users are empowered to build and customize reports without requiring Full Admin or Contact Center Admin privileges, or direct access to the Topic Analytics portal. This integration unlocks powerful trends and patterns by correlating topics with interaction metrics, supporting smarter, data-driven decision-making across your organization. Additionally, it allows customers to access topic data using the Search API.

For more information, see [Get Started with Topic Analytics](https://help.webex.com/en-us/article/v72wjab/Get-started-with-Topic-Analytics) and [Topic Analytics Reports](https://help.webex.com/en-us/article/ioqbvd/AI-Assistant-reports-in-Analyzer#concept-template%5F3fbd4a9d-34ec-4ba4-9d41-79ce63c33382).

## August 14, 2025

## Proactive Chat – Reach customers at the right time, with the right message

Introducing proactive chat – a cornerstone in any business’s CX strategy that allows brands to connect with customers even before they initiate a chat! With this new feature, administrators can proactively invite visitors on the business’s website to chat — based on their behavior and other contextual data available on the website. This helps drive engagement and improve customer experience by reaching out before customers initiate contact.

**Key capabilities:**

- **Behavioral triggers**: Use page URLs, time spent on the page, browser locale, UTM parameters, first/last seen, repeat visits, and DOM events like clicks or hovers to qualify who gets invited.
- **Personalized messaging**: Customize the message title and body.
- **Flexible delivery modes**: Choose message delivery modes like badge notifications, full preview or center page post to best capture attention.
- **Routing:** Customer responses on proactive chats automatically land on Webex Connect similar to end-customer initiated inbound chats. You can queue these interactions directly to a human agent queue or AI agents via Webex Connect flows.
- **Advanced controls:** Qualify proactive chat invite using business hours to balance workloads and route responses to these interactions via Webex Connect workflows.
- **Queue management:** Manage outbound queues by media type, set max time in queue, SLAs, and prioritization alongside inbound queues.
- **Monitoring & reporting:** Track proactive rule effectiveness with real-time dashboards showing matches, invites sent, opens, and responses.

**Why it matters:**

Proactive Chat empowers your team to engage visitors intelligently, boosting customer satisfaction and driving better outcomes—without waiting for customers to reach out first.

For more information, see the _Proactive chat_ section in [Webex Engage Admin and Setup Guide](https://help.webex.com/en-us/article/otcepj/).

## July 31, 2025

## Enhanced User Interface for Agent and Supervisor Desktops

As part of our ongoing commitment to deliver an intuitive and visually engaging platform, Webex Contact Center is rolling out a comprehensive user interface refreshes for both Agent and Supervisor Desktops. This update introduces a cleaner, more modern interface designed to enhance usability, clarity, and efficiency. 

**What's Changing:**

- **Visual enhancements**: Provides a refined and modern appearance throughout the Desktop interfaces, featuring refreshed fonts, background colors, user interface elements, and color palettes for enhanced clarity and visual appeal.
- **Streamlined Layouts:** Optimized layouts and information architecture to support new and future features, making daily workflows more efficient.

**Benefits**

- **Enhanced usability**: A cleaner, more user-friendly layout simplifies navigation and interaction within the Desktop, making tasks easier and more efficient.
- **Modern look and feel**: Experience an updated visual design that provides a fresh and consistent interface.
- **Foundation for future features**: The updated architecture enables the seamless integration and optimal performance of powerful upcoming features, enhancing overall workflow capabilities.

**Important Notes:**

- **No configuration or action is required from administrators** to enable these refreshed experiences.
- For **Agent Desktop**: The enhanced UI is available but **not turned on by default** for existing tenants. Agents can enable the new look by navigating to **Desktop → User Settings → Switch to New Look**.
- For **Supervisor Desktop**: The enhanced UI and features will be enabled by default for all supervisors once available.

For further details, refer to the release notes for [Agents](https://help.webex.com/en-us/article/n3v7ldh/What's-new-for-agents-in-Webex-Contact-Center#section%5Fofr%5Frr1%5F2gc) and [Supervisors](https://help.webex.com/en-us/article/o6f77s/What's-new-for-supervisors-in-Webex-Contact-Center#section%5Fy3b%5F4q1%5F2gc).

## Enhanced Supervisory features in Desktop Experience (Control Hub)

We’ve enhanced the capabilities available to admins and supervisors in the Desktop Experience module within Control Hub. In addition to existing management options, you can now: 

Manage Agent Queue Assignments: Easily assign agents to specific queues or remove them as needed, ensuring the right resources are available where they’re needed most. 

Manage Skill Profile Assignments: Update agents’ skill profiles directly from Control Hub to support reskilling initiatives and optimize how customer inquiries are handled. 

Real-time queue statistics in Supervisor Desktop: Provide supervisors with a centralized and actionable view of queue performance.

**New Interactions Tab in Supervisor Desktop**: New Interactions tab allows easy tracking of ongoing cases and review completed interactions - all designed to boost efficiency and responsiveness.

**Comprehensive Interactions Details View with Transcripts**: Full-page Interactions Details View in Supervisor Desktop, offering supervisors a comprehensive overview of customer interactions.

These new features provide greater flexibility and control, making it easier for supervisors and admins to manage agent assignments and skill sets from a single, centralized interface. 

For more information, see the following articles:

- [Manage user profiles in Webex Contact Center](https://help.webex.com/en-us/article/n524f2m/Manage-user-profiles-in-Webex-Contact-Center)
- [Supervise and manage Contact Center queues](https://help.webex.com/en-us/article/b1qhidb/Supervise-and-manage-Contact-Center-queues)
- [Supervise your agents and teams](https://help.webex.com/en-us/article/n408h9cb/Supervise-your-agents-and-teams)
- [Interactions details view in Supervisor Desktop](https://help.webex.com/en-us/article/iba8xp/Interactions-details-view-in-Supervisor-Desktop)

## Enhanced Agent Task List user interface updates

We are implementing updates to the Agent Desktop's Task List user interface, designed to optimize the efficiency of **all users performing agent functions, including those with dual supervisor-agent roles,** and streamline interaction management across your contact center. This enhancement provides a more intuitive and organized experience for handling diverse customer interactions.

****Key updates for users with agent roles:**

- **Intuitive tabbed design:** The Agent Task List is redesigned with a 2-tabbed interface, offering **users with agent roles** a clear and organized view of their workload:
  - **Active:** Displays all current interactions with essential details.
  - **Closed:** Provides a historical log of recent interactions for quick reference and context.
- **Unified interaction management:** This single-pane view consolidates all incoming and ongoing interactions, reducing cognitive load for agents and minimizing the risk of missed contacts.

This update represents a critical step in enhancing the agent experience and operational efficiency within Webex Contact Center. By providing a more organized and user-friendly interface, you can expect:

- **Improved agent productivity:** Agents can more easily manage and prioritize their tasks, leading to faster handling times and increased output.
- **Enhanced customer satisfaction:** Streamlined workflows enable agents to provide more timely and consistent service.
- **Simplified training:** The intuitive design reduces the learning curve for new agents and simplifies ongoing training efforts.
- **Optimized resource utilization:** Better visibility into active tasks can help in workload balancing and resource allocation.

For more information, see [Understand Supervisor Desktop user interface](https://help.webex.com/en-us/article/nbgsy8x/Understand-Supervisor-Desktop-user-interface) and [Understand your Agent Desktop user interface](https://help.webex.com/en-us/article/rigqog/Understand-your-Agent-Desktop-user-interface).

## Preview audio prompts and Text-To-Speech (TTS) messages in Flow Designer

Webex Contact Center Flow Designer introduces the ability to play back audio files and text-to-speech messages directly within the design interface, streamlining the workflow for developers and administrators by eliminating the need to publish flows or make PSTN calls to validate audio prompts. This enhancement enables quick verification of audio prompts, particularly for language and voice selections in TTS, along with testing SSML markup for prompt personalization. It improves efficiency when creating flows, offering a seamless audio preview experience during the buildout.

For more information, see [Preview audio prompt within the flow](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5Fa329929c-3f89-40fa-acc8-df8a1b178f99) section in the [Flow Designer Guide](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer). 

## Scheduled Callback for Inbound and Outdial Calls

We're excited to introduce a powerful callback scheduling feature to transform both customer and agent experiences. Agents who are actively on a call with the customer (both inbound & outdial), will be able to easily schedule, manage, and assign callbacks directly from their desktop providing end customers the flexibility to be reached back at a time that's most convenient for them.

Administrators will have precise control over callback and user access, while supervisors will benefit from comprehensive historical reporting.

For more information, see [Schedule Callback in Routing and Queueing](https://help.webex.com/en-us/article/np2fdx/Understand-Routing-and-Queueing-in-Webex-Contact-Center#CallbackActivities), [Schedule Callback in Agent Desktop](https://help.webex.com/en-us/article/mmcf7p/Manage-your-calls-in-Agent-Desktop#concept-template%5F163de8b2-4dc7-40e6-baf0-216508b298c1), [Set up a callback entry point](https://help.webex.com/en-us/article/ewuay1/Set-up-a-channel#task-template%5F18bff0fa-e0d8-47b7-9a2a-1cb81c4ec20a), and _Callback Reports_ in [Webex Contact Center Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide).

## Customer Self-Service Callback Scheduling via DTMF

We're excited to introduce a feature that empowers customers to schedule callbacks themselves (no agent interaction required) through DTMF. This new capability will allow both new and existing customers to request a callback by entering details such as their name, phone number and preferred time, ensuring a personalized and convenient experience. Customers can also review, update, or cancel their scheduled callbacks, with the system intelligently managing one active callback per queue and providing seamless options to modify as needed.

For more information, see [Schedule IVR Callbacks](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5F39c9b262-255f-4999-bef7-1a456b878e2c), [Set up a callback entry point](https://help.webex.com/en-us/article/ewuay1/Set-up-a-channel#task-template%5F18bff0fa-e0d8-47b7-9a2a-1cb81c4ec20a), and _Callback Reports_ in [Webex Contact Center Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide).

## Introducing support for Business Hours constructs in Digital Flows

Webex Contact Center flow developers now have the capability to validate working hours, holidays, and overrides in accordance with the Business Hours framework while designing customer journeys in the Webex Connect Flow builder for digital channels. They can reference administrative constructs, including static and dynamic Business Hours settings defined within the Control Hub. This enhancement facilitates effective interaction management by enabling developers to provide suitable auto-responses to customers, minimize queue times, and conclude tasks appropriately with the desired outcomes. Furthermore, this allows for clear communication with customers regarding the unavailability of agents and the anticipated timeline for their return.

For more information, see [Business Hours](https://help.webexconnect.io/docs/business-hours) section in the Webex Connect Documentation portal.

## Create Powerful Formulas with the Simplified Formula Builder

In an effort to increase the usability of the Analyzer tool, we are excited to introduce a major enhancement to the Analyzer tool that makes building custom formulas easier, faster, and more powerful. With the new text-based formula editor, users can create complex formulas using any number of fields from their reports, combined with arithmetic operators and aggregate functions. The editor provides guidance throughout the formula building process, helping users validate the formula built. That is not all, users can to save these formulas for future use within the same report or even save them as global formulas to use across all reports within their organization. This update is going to provide users with greater flexibility, consistency, and efficiency to build custom formula in Analyzer tool.

For more information, see [Cisco Webex Contact Center Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide#topic%5F217E73D0D2DB0100877B85951B90571C).

## Color Coded Thresholds—Highlight What Matters

We are excited to announce the feature—Color-Coded Thresholds that brings powerful visual clarity to the custom reports. This new capability allows users to highlight specific values in a report based on user-defined threshold conditions, making it easier to quickly identify positive or negative outcomes for key metrics. Users can define up to 10 threshold conditions per report using a range of comparison operators such as Greater Than, Less Than, Equal To, Between, and more. These conditions drive dynamic color formatting, applied in a top-down sequence based on the logic you set. Best of all, thresholds can be created, edited, or removed at any time-without ever altering the underlying data. It's a simple yet powerful way to enhance visibility, spot trends faster, and make decisions with greater confidence.

For more information, see [Cisco Webex Contact Center Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide#topic%5F3BA24389C591DEC677329422227CB62F).

## Analyzer Folder Permissions Management now available in Control Hub

Analyzer folder permissions management is now available and centralized in Control Hub! Permissions previously managed in the Tenant Management Portal (under Report and Dashboard Permissions in Access Rights of User Profile) are now integrated into the User Profile experience of Control Hub. This update allows you to manage all user profile settings—including Analyzer and folder permissions—in one place, streamlining access management, improving security and administrative efficiency, and eliminating the need to switch between platforms. For more information, see Analytics section of [Manage user profiles](https://help.webex.com/n524f2m) article and Access control section of [Analyzer User Guide](https://help.webex.com/tajemk).

## Native Webex Campaign Management Add-On for Webex Contact Center

We're excited to announce the upcoming launch of the **Native Webex Campaign Management** Add-On for Webex Contact Center. This powerful new module will enable administrators and supervisors to easily configure, manage, and optimize outbound campaigns-all within a single platform.

With this add-on, you can quickly set up agent-assisted campaigns in preview, progressive, and predictive dialing modes, as well as run agentless IVR campaigns. Effortlessly control calling times, manage contact lists, apply suppression rulesets, and ensure compliance settings are met-giving you complete command over your outbound communications.

In short, this module is designed to help you optimize proactive outreach and ensure that the right customer is contacted at the right time.

The Native Webex Campaign Management Add-On will initially be available only to customers in the Americas, Europe, and Africa. Customers in other regions will receive access to this feature in the coming months. Stay tuned for further updates!

## July 30, 2025

## Voice Experience Improvements for Webex AI Agents

In continuation to our commitment to deliver industry-leading, human-like conversational AI experiences. We have introduced the following enhancements to voice experience using AI Agents:

- **Reduced Latency**: Callers can now experience near-instantaneous responses for smooth, uninterrupted conversations
- **Intelligent Turn Prediction**: A proprietary model that can predict when the user is done speaking, streamlining the flow of interaction.
- **Improved Barge-In**: Empowers users to interrupt or redirect the AI agent naturally, mirroring real human dialogue.
- **In-platform Voice Preview**: Provides an option to the users to test their AI agents through the in-platform preview option, enabling quick testing and iteration of the voice experience without the need for deployment. See the [Preview voice conversation](https://help.webex.com/en-us/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide#task-template%5F9b45b012-ad0c-4ec7-88e5-75bb5f695d9a) section for autonomous AI agents in the [Webex AI Agent Studio Administration Guide](https://help.webex.com/en-us/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide).

For more details please refer to _Components of AI engine_ section in the [Understand AI engines for AI agents](https://help.webex.com/en-us/article/ne6s80cb/Understand-AI-engines-for-AI-agents#section%5Fhqt%5Fjrf%5Fcgc) article.

## July 24, 2025

## RONA enhancements with WxC integration

RONA enhancements delivers transparent, accurate RONA reporting. You'll gain precise insights with specific Re-route On No Answer (RONA) classifications for unanswered calls and other contact delivery issues like system errors or agent misconfigurations. This means reduced RONA. Plus, agents unable to accept calls because of their actions or call delivery issues will automatically be set to "Idle," ensuring efficient call distribution and a seamless customer experience!

For more information, see [Understand Agent States](https://help.webex.com/en-us/article/nvg4gu6/Understand-agent-states) and [Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide).

## July 21, 2025

## Ability to send DTMF digits from Flow Designer in IVR

Webex Contact Center introduces a new activity in the Flow Designer called the Send Digits activity. This activity is specifically designed for situations when Webex Contact Center receives a call from an external IVR/Service. The Send Digits activity allows for the exchange of DTMF tones with the call source, enabling functions like authentication. This new activity complements the DTMF enhancements being introduced for the Bridged Transfer activity enabling DTMF communication in calls and transfers. For more information, see [Send Digits](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5Fd85ae3a7-b755-4ae7-a14d-442530bd0052) activity in the Flow Designer Guide.

## Ability to outpulse DTMF digits from Bridged Transfer activity in Flow Designer

Webex Contact Center is excited to announce an enhancement to our Bridged Transfer Activity in Flow Designer! We are introducing the capability to outpulse DTMF digits when performing bridge transfers. This feature is perfect for sending calls to an external IVR, allowing you to send DTMF tones to navigate through IVR menu options or even exchange data like a customer number once the bridge transfer is connected. Flow Designer can send DTMF tones based on either a static string or a variable. For more information, see the [Bridged Transfer](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5F9762deed-12dd-47c3-a699-2fb28daf0a99%5FBT) activity in the Flow Designer Guide.

## July 17, 2025

## User-Defined Start Day of Week for Enhanced Reporting in Analyzer

We are excited to introduce a new capability that allows users to define the start day of the week for a custom report in Analyzer. This feature will benefit users in certain geographies, such as Israel, who do not follow standard work schedules. It is specifically designed for supervisors who create or edit custom reports as part of their user journey. Users can now select any of the seven days of the week as the start day for a particular report, and this selection will reflect across all report viewers. Since this capability applies to weekly intervals, it will work effectively only for durations involving weekly intervals. For more information, see [Webex Contact Center Analyzer](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide#task%5F9859A41E3B4D2D4020D4E0D96AED6EF4).

## July 16, 2025

## Webex WFO: Plans

Plans is now available in Webex WFO. This intelligent, web-based scheduling tool is designed to streamline future workforce planning. It introduces dynamic planning groups, configurable periods, and built-in validation checks, all aimed at minimizing errors and reducing manual effort. With one-step scheduling and day-off optimization, planners benefit from faster and more consistent results. Planners stay in control using publishing tools, change tracking, and seamless interoperability with the WFM Client, enabling smarter, scalable, and future ready schedule creation. 

**Key Benefits**

- Faster scheduling with automated day-off optimization
- Improved accuracy through pre-scheduling validations
- Structured planning periods for consistent scheduling cycles
- Dynamic agent grouping that adapts to staffing changes
- Real time publishing control and visibility

For more information, see <https://www.wfohelp.com/doc/Content/user-guides/plans/plans.htm>. 

## July 14, 2025

## Enhanced Consult Experience for Seamless Collaboration

We understand how critical it is to maintain a smooth and productive experience during consult calls, especially when dealing with high-value customers or sensitive scenarios. In situations where a customer unexpectedly drops from a call—whether due to connection issues or other reasons—the current experience can be disruptive for both agents and consulted parties. We're introducing enhancements to address this challenge and ensure continuity in your workflows. 

**What’s Changing?**

Clear Drop Notifications—Agents will now receive a clear notification when a customer exits the conversation. Additionally, the participants pane will reflect the customer’s absence, making it transparent to all parties.

Seamless Agent-Consulted Party Collaboration—The agent and consulted party can continue their discussion uninterrupted, allowing them to align on next steps for the customer.

Flexibility to Reconnect—Agents will have the ability to:

- Place the consult on hold.
- Resume the consult call seamlessly, ensuring no loss of context.

To understand this better, see the before and after scenarios here.

This is the consult experience today where the consult control options are all in the top panel with the other call control options:

This is the updated UX where the consult options are called out in the consult area so that it's clear to the agent what options belong to what call leg:

This is the message an agent gets if the customer drops while there is an active consult:

For more information, see [Manage your calls in Agent Desktop](https://help.webex.com/en-us/article/mmcf7p/Manage-your-calls-in-Agent-Desktop#concept-template%5F10e53f10-d12f-46aa-8749-255370649101). 

## July 9, 2025

## Webex WFO: Advanced Sentiment 

Webex WFO has rolled out Advanced Sentiment, offering deeper and more focused insights into customer interactions. Powered by Generative AI, this feature improves understanding of the full context of the entire conversation, bringing greater clarity, stronger coaching potential, and more effective quality monitoring. It helps contact center teams make faster and smarter decisions. 

For a detailed breakdown of full capabilities, see, [Advanced Sentiment on Webex WFO (Webex Contact Center)](https://help.webex.com/en-us/article/jmxsos/Advanced-Sentiment-on-Webex-WFO-%28Webex-Contact-Center%29).

## July 2, 2025

## Improved documentation for WXCC Routing and Queueing

The updated Webex Contact Center Routing and Queueing documentation provides clear explanations of routing concepts and detailed guidance for configuring various routing features. It covers all routing constructs and supported algorithms.

Each section is organized to help customers, partners, flow developers and administrators quickly find and have a complete understanding of queuing and routing in WxCC so that queues and routing can be designed in the most appropriate way to efficiently setup the contact center by leveraging the right capabilities.

Explore the enhanced WxCC Queueing and Routing documentation here: [Understand Routing and Queueing in Webex Contact Center](https://help.webex.com/en-us/article/np2fdx/Understand-Routing-and-Queueing-in-Webex-Contact-Center).

## July 2, 2025

## Agent based queues

Webex contact center introduces Agent based queues where agents can be directly assigned to queues regardless of their skills or team. In this type of queue—Skills or Team of agents is not considered while offering a contact to an agent.

Agent based queues support the following routing algorithms:

- **Circular**—A contact distribution strategy that assigns incoming contacts (such as calls, chats, emails, or social media queries) to a group of available agents in a round-robin order. Each contact is routed to the next available agent based in a configured sequence. In this method, the first contact goes to the first agent, the second to the second agent, and so on. This method ensures fair and balanced distribution of contacts, preventing any agent from being overloaded while giving everyone an equal chance to handle incoming queries.
- **Top-down**—A contact routing strategy that linearly distributes incoming contacts (such as calls or chats, emails or social) among a group of available agents. When a new contact arrives, it is assigned to the next available agent in the group based on a predetermined sequence. This method assigns calls to agents in order, always starting from the top of the queue.
- **Longest available**—Contacts are routed to the agents who have been available for the longest time since handling their last contact from any queue they are assigned to. This method ensures a fair way to distribute contacts to the longest available agent across all media channels.

For more information, see [Understand Routing and Queueing in Webex Contact Center](https://help.webex.com/en-us/article/np2fdx/Understand-Routing-and-Queueing-in-Webex-Contact-Center).

## Skill-based routing using skill directly assigned to queues

Webex Contact Center offers additional skill-based routing capabilities with direct Skill assignment to Queue. This feature provides the ability to add skills to queues and also allows to get a view of the agents mapping to the queue as and when any adjustments are made to queue skills or agent skills. This helps administrators easily to view & manage queue to agent assignment. This routing capability also provides Estimated wait time (EWT) and Position in queue (PIQ). These queues can be used along side with queues that support skills assignment in the flow. Skill-based routing matches contacts in queues with assigned skills to agents skills, reducing wait times and boosting customer satisfaction.

For more information, see [Create queues and configure routing patterns](https://help.webex.com/en-us/article/ubg5qd/).

## July 1, 2025

## Migrate Unified Contact Center Express (CCX) configuration to Webex Contact Center 

This feature enables Unified Contact Center Express (CCX) customers to move CCX configurations to their Webex Contact Center tenant on Control Hub. To manually do it, you will need to download a configuration extraction tool, execute it on the CCX deployment, and then import the extracted data to Webex Contact Center using bulk operations.

For more information, see [Migrate Cisco Unified Contact Center Express to Webex Contact Center](https://help.webex.com/0hd75db) article. 

## Split Interval Segment Reporting (Activity Duration)

Gain deeper insights into agent performance with the new Split Interval Segment Reporting feature. This tool lets you track agent activity, states, and durations across customizable time intervals for better staffing, resource allocation, and customer satisfaction. Simply enable the Split Interval option in the Compute panel to analyze data by precise intervals instead of interaction end times.

For more information, see [Cisco Webex Contact Center Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide#task%5F9859A41E3B4D2D4020D4E0D96AED6EF4)

## Bring Your Own Virtual Agent

The 'Bring Your Own Virtual Agent (BYOVA)' feature empowers partner organizations to integrate their proprietary voice virtual agents with the Webex Contact Center solution. With this feature, partner-built voice virtual agents will be available to all customers with the purchase of ‘3rd Party AI’ Add On.

Customers now have the flexibility to select the virtual agent vendor that aligns with their unique needs and preferences. Using this feature, they can enjoy a smooth and standardized onboarding process for our Contact Center AI (CCAI) services through our state-of-the-art Control Hub and the cloud-based vendor specific CCAI connector.

For more information see the following articles:

- [Authorize service apps for Bring Your Own Virtual Agent](https://help.webex.com/en-us/article/5g8s6u/Authorize-service-apps-for-Bring-Your-Own-Virtual-Agent-%28BYOVA%29)
- [Create a Contact Center AI Configuration](https://help.webex.com/en-us/article/npbt02j/Create-a-Contact-Center-AI-configuration)
- [Configure Virtual Agent-Voice in Webex Contact Center](https://help.webex.com/en-us/article/n6gaghu/Configure-Virtual-Agent-Voice-in-Webex-Contact-Center)

## Externally Manage and Update Flow Settings on Control Hub

Webex Contact Center now enables administrators and supervisors to manage and update flow settings externally via Control Hub without the need to edit flows on Flow Designer. This enhancement offers real-time operational agility by allowing modifications to critical settings like business hours, queue configurations, audio prompts, etc. directly through Control Hub. This empowers administrators to adapt flow behaviors instantly, ensuring that contacts receive updated information in real time. By externalizing this configuration, the feature supports the reuse of flows across various business scenarios with tailored configurations, reducing duplication and minimizing configuration errors. This advancement significantly streamlines contact center management while maintaining high responsiveness and reliability.

For more information see [Override flow settings](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5F38ff640a-b428-441b-a87e-0da984d456fa) section in the Flow Designer guide and [Set up a Channel](https://help.webex.com/en-us/article/ewuay1/Set-up-a-channel) article.

## June 26, 2025

## Webex WFO: Contact Queue Enhancements 

Webex WFO now includes powerful enhancements to the Contact Queue, making it easier to create, manage, and track Contact Goals across teams and evaluators.

These updates make it easier to manage goals, target on the right conversations, and improve the experience for both Assignors and Assignees. Evaluators can now see more of their queues at once, track progress in real time, and complete evaluations more easily.

**Key Benefits**:

- Create more precise Contact Goals with flexible team or agent targeting.
- Use advanced logic to surface the most relevant conversations for evaluation.
- View multiple queued contacts at once for better planning and prioritization.
- Track goal progress with clear visibility and status indicators.
- Manage goals more easily with improved user experience.

These enhancements support smarter evaluation workflows, more accurate results, and a better experience across the entire quality process.

For more information, see the following topics:

- <https://wfohelp.com/doc/Content/user-guides/application-management/contact-goal-administration-v2.htm>
- <https://wfohelp.com/doc/Content/user-guides/recordings/contact-queue-v2.htm>

## Webex WFO: Absence Attributes 

Absence Attributes is now available in Webex WFO. This capability allows administrators to tag absences with attributes (custom labels) like **Emergency Leave** or **Last-Minute Request**. 

This feature enables smarter tracking, real-time scheduling accuracy, and deeper insights into absence trends. 

**Key Benefits**:

- More efficient forecasting
- Granular tracking of absence types
- Real time updates to schedules
- Deeper reporting and trend analysis

Absence Attributes equips the team with the tools to address staffing challenges, manage leave proactively, and make more informed planning decisions.

For more information, see <https://wfohelp.com/doc/Content/user-guides/wfm-settings/manage-absence-attributes.htm>

## Webex WFO: New WFM Datasets and Dashboards Available in Insights

Webex WFO has introduced new resources in **Insights** to provide Classic WFM cloud customers with deeper scheduling and performance insights. The "WFM (Classic)" folder now includes 7 new datasets and 5 new dashboards.

The following new datasets are added for WFM:

- **WFM Agent Schedule and Statistics**: Combine planned schedules with actual agent activity for easy comparison.
- **Forecast Workload and Queue Stats**: Supports recreating **Data Explorer Forecast** dashboards and custom versions.

We have released 13 new datasets supporting the WFM Group Pages feature in Insights. These mirror existing WFM datasets and use the same names with a “(Group Pages)” suffix. 

For example: 

- **Original dataset**: Agent Schedule Adherence
- **New dataset**: Agent Schedule Adherence (Group Pages)

Use these Group Pages datasets only if your dashboard requires Group Pages data. To prevent over-counting, make sure to use the WFM Group Page field as a grouping or filter in each visual.

You can find the new fields in the **Organization**  folder within each dataset.

For more information, see <https://wfohelp.com/doc/Content/user-guides/insights-bi/get-started/how-insights-works.htm?tocpath=Data%20Analysts%7CInsights%7C%5F%5F%5F%5F%5F1>

## June 23, 2025

## Introducing Agent Whisper Announcements in Webex Contact Center

Webex Contact Center has introduced support for Agent Whisper Announcement. Whisper allows an agent to hear a brief, prerecorded message prior to being connected with a caller. A whisper announcement could include caller language preference, choices the caller made from a menu, customer status or another use case. The whisper announcement plays only to the agent; the caller hears ringing while the announcement plays. Whisper announcement is added to a customer interaction using the new “Set Whisper” activity in flow builder. 

For more information, see [Set Whisper Announcement](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5F30f3a9ea-0833-4298-9536-1416144cb24a).

## June 19, 2025

## Webex WFO: Basic WFM and QM Offerings

Webex WFO has officially expanded its Workforce Optimization portfolio with the launch of Basic WFM and Basic QM. These streamlined options are designed to help contact centers start strong with essential scheduling and evaluation tools. Built for teams moving off spreadsheets or basic recording setups, these packages make it easier to improve staffing accuracy, boost agent engagement, and drive consistent service quality from day one. 

For a detailed breakdown of full capabilities, see [Basic WFM and QM Offerings on Webex WFO (Webex Contact Center)](https://help.webex.com/en-us/article/nmzg380/Basic-WFM-and-QM-Offerings-on-Webex-WFO-%28Webex-Contact-Center%29).

You can place an order using the relevant SKUs (Basic WFM and Basic QM) and provide provisioning information for services. 

For ordering details, see the _Cisco Webex Contact Center Ordering Guide and Cisco Collaboration Flex Plan Contact Center Ordering Guide_ at the <https://www.cisco.com/c/en/us/partners/tools/collaboration-ordering-guides.html>.

## Webex WFO: Enterprise Analytics

Enterprise Analytics is now available in Webex WFO, introducing a new set of AI-powered capabilities that help contact centers analyze conversations more effectively, surface key trends, and evaluate performance at scale. With Auto QM, Trending Topics, and Interaction Summary working together, teams can uncover what matters most, reduce manual effort, and drive smarter, faster decisions across every customer interaction. 

For a detailed breakdown of full capabilities, see [Enterprise Analytics on Webex WFO (Webex Contact Center)](https://help.webex.com/en-us/article/5r04z1/Enterprise-Analytics-on-Webex-WFO-%28Webex-Contact-Center%29).

For additional information, see the following topics:

- <https://wfohelp.com/doc/Content/user-guides/analytics/navigating-autoQM.htm>
- <https://wfohelp.com/doc/Content/user-guides/analytics/understanding-AutoQM-evaluation.htm>
- <https://wfohelp.com/doc/Content/user-guides/analytics/trending-topics.htm>
- <https://wfohelp.com/doc/Content/user-guides/media-player/data-insights-panel.htm>
- <https://wfohelp.com/doc/Content/user-guides/analytics/interaction-summary.htm>

You can place an order using the relevant SKUs (Enterprise Analytics) and provide provisioning information for services. 

For ordering details, see the _Cisco Webex Contact Center Ordering Guide_ and _Cisco Collaboration Flex Plan Contact Center Ordering Guide_ at the <https://www.cisco.com/c/en/us/partners/tools/collaboration-ordering-guides.html>. 

## June 13, 2025

## Real-time transcripts for agents

The real-time transcription feature provides agents with a live, continuously updated transcript of customer conversations directly within the Agent Desktop. This ensures that every spoken word is accurately captured in real time, reducing the risk of missed details and misunderstandings. Agents can follow along effortlessly without the need for manual note-taking, allowing them to stay fully engaged in the conversation.

**What does this mean for you?**

- **Improved communication**: Capture customer details accurately, reducing misunderstandings.
- **Increased efficiency**: Minimize manual note-taking and repetitive conversations.
- **Better customer experience**: Address concerns quickly and clearly.

For more information, see [Enhance efficiency and communication with real-time transcripts](https://help.webex.com/en-us/article/e5uv3db/Enhance-efficiency-and-communication-with-real-time-transcripts).

## June 6, 2025

## Webex AI Agent Studio: Transcript Access Management

Webex AI Agent Studio allows organization full administrators to control user access to sensitive information within their organization, such as customer transcripts from sessions and curation.

Aligned with Cisco's zero-trust security principles, users are assigned least-privilege access by default. This means explicit permissions are required to access sensitive data like transcripts on the platform.

Using the **Enterprise Profile**, administrators can manage 'Decrypt Access' permissions for themselves, other administrators, and users, ensuring the risk of unauthorized access is minimized.

For more information, see [Webex AI Agent Studio Administration guide](https://help.webex.com/article/ncs9r37#user-roles-and-permissions).

## May 30, 2025

## Share Permalinks for enhanced collaboration in Analyzer 

We are excited to announce a new feature coming to Analyzer that will enhance your ability to share insights and streamline collaboration across your organization. With the introduction of Permalinks, Analyzer users will be able to easily share URLs to reports and dashboards, making data-driven decision-making more accessible than ever.

For more information, see [Share Permalinks to Reports and Dashboards](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide#task%5Fllz%5Fw5q%5F2rb).

## Extracting Custom SIP Headers in Flow Designer for Enhanced Integrations

Webex Contact Center now offers custom SIP Header extraction within the Flow Designer, enabling flow developers to maintain context with the support of custom X-Headers, available with a new "Headers" (**NewPhoneContact.Headers**) output variable within flows. This data can then be extracted for use within the flow logic or displayed to the Agent. This feature facilitates integrations with third-party systems such as external IVRs or on-premise systems, enhancing the platform's flexibility and capabilities.

The use of custom X-Headers is currently supported for organizations using Webex Calling with Local Gateway as the telephony option for Webex Contact Center.

For more information, see the [Start Flow](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FConcept.dita%5F83924e55-5a22-4bc1-b721-cea3a225ea73) section in the Flow Designer guide.

## May 30, 2025

## Ability to Pass and Retrieve SIP Headers with External Systems Using Flow Designer

Webex Contact Center introduces a capability that allows flow developers to pass and retrieve custom SIP headers with external systems using the Flow Designer. Developers can now easily configure flows to send custom SIP headers (X-Headers) with the Blind Transfer and Bridged Transfer activities. This capability also allows for the retrieval of updated headers when the call returns from the Bridged Transfer activity, ensuring data continuity in complex call flows involving third-party systems, such as in IVR Behind scenarios. This feature not only enhances Webex Contact Center's integration capabilities but also improves call handling by maintaining call context.

The use of custom X-Headers is currently supported for organizations using Webex Calling with a Local Gateway as the telephony option for Webex Contact Center.

For more information, see the _Add Headers_ section in the [Blind Transfer](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5F9762deed-12dd-47c3-a699-2fb28daf0a99) and [Bridged Transfer](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5F9762deed-12dd-47c3-a699-2fb28daf0a99%5FBT) activities in the Flow Designer guide.

## May 28, 2025

## Webex WFO: Automated Contact Reconciliation

Webex WFO now offers Automated Contact Reconciliation for Webex Contact Center, which improves data integrity and operational efficiency and ensures all interactions are accurately accounted for.

This feature automatically compares contact records between Webex Contact Center and Webex WFO to identify missing or incomplete recordings. A daily process scans contact record data of the past 25 hours, detects gaps, and initiates recovery to maintain a complete interaction history and compliance coverage, eliminating the need for manual effort.

Key Benefits:

- Ensures that all interactions (Voice and Digital) are recorded and accounted for.
- Supports compliance by reducing the risk of missing contact records.
- Reduces manual recovery efforts for support teams.
- Improves trust in reporting and historical data integrity.
- Automates a previously manual, escalation-prone workflow.

Availability:

This feature is disabled by default and requires a request to be activated.

To enable the feature:

1. Submit a request via your Cisco Customer Success Manager (CSM) or Support Contact.
2. Upon approval, the feature will be activated.

For more information, see [Enable Automated Contact Reconciliation](https://wfohelp.com/doc/Content/user-guides/application-management/enable-automated-record-reconciliation.htm?tocpath=Administrators%7CQM%20and%20Analytics%7CStore%20interactions%7C%5F%5F%5F%5F%5F9).

## May 21, 2025

## Allow routing to the same agent after transfer to queue

Webex Contact Center's new tenant-level configuration allows calls to be routed to the original agent who transferred them, preventing contacts from getting stuck when no other agents are available. Routing calls back to the original agent enhances operational flexibility, reducing wait times and optimizing resource use in contact centers with limited staff. This improvement supports better customer satisfaction and streamlined operations.

For more information, see [Manage queues](https://help.webex.com/en-us/article/ubg5qd).

## May 20, 2025

## Introducing support for custom code with inline JavaScript and Python script on Flow Designer

The Webex Contact Center Flow Designer now includes a new 'Function' activity, which brings the ability to add inline custom code using JavaScript or Python script directly within the Flow Designer module. This powerful addition enables flow developers and administrators to leverage popular programming languages for data parsing, executing custom scripts, and making HTTP requests within their workflows. This feature greatly extends the use cases for manipulation and data management of JSON and Python scripts, significantly enhancing the customization and automation capabilities of the Flow Designer. Additionally, the activity features enhanced input and output mappings to flow variables, allowing for seamless data exchange and parsing.

For more information, see [Create and manage functions](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5F159a1ba2-a52d-41a7-ac63-07bc3731e0c6) section in the Flow Designer guide.

## May 12, 2025

## SFDC - Extended support for special characters in Idle Codes

We've updated Control Hub to support more flexible idle codes. You can now use forward slashes (/) and parentheses () in addition to hyphens, underscores, and periods. This allows you to create idle codes like 'Available - Message/Calls' for clearer status updates.

## Subject Integration in Call Notes for SFDC Actions Widget

 We’re excited to introduce a new feature in the SFDC Actions widget that will make managing call notes easier and more efficient.

Some of the key enhancements include:

- Subject Formatting:  
The subject must be written within ### ### for identification. Example: ### This is the subject ### Call went well, call back.  
Here, Subject = ‘This is the subject’, Notes = Call went well, call back. Only the text inside ### ### in the first line of the call notes will be treated as the subject, regardless of other content in the first line.
- Pre-filled Subject Line (Optional):  
A pre-populated subject can be configured to appear automatically in the subject line. Example: ###Inbound Mar 10 4:40pm###.
- Placeholder for Easy Identification:  
The call notes section will display a placeholder for guidance: ### Enter subject here ###
- Character Limit:  
The subject is limited to 250 characters.
- Feature Flag Control:
  1. This feature is controlled via a feature flag in the desktop layout properties.
  2. By default, the feature will be disabled, ensuring no impact on existing workflows.

**Limitation**

If an agent accidentally backspaces or deletes one of the special characters (#) on either side of the subject, it will break the subject line mapping.

## May 8, 2025

## Advanced security authentication for HTTPS connectors on Flow Designer

Webex Contact Center enhances the Flow Designer platform with certificate-based OAuth2 Authentication for custom HTTPS Connectors, including a dedicated connector for Microsoft Dynamics 365\. This allows administrators and developers to establish secure bidirectional trust relationships between Webex Contact Center and third-party APIs using HTTPS connectors within flows. Users can now utilize the new Microsoft Dynamics option on Control Hub, which includes a certificate configuration. Custom connectors also support this security option via certificate-based OAuth2, effectively addressing critical enterprise security requirements.

For more information, see [Configure Microsoft Dynamics 365 connector for Webex Contact Center](https://help.webex.com/en-us/article/460fet/Configure-Microsoft-Dynamics-365-connector-for-Webex-Contact-Center).

For custom connectors, see [Configure custom connector for Webex Contact Center](https://help.webex.com/en-us/article/n4u702ab/Configure-custom-connector-for-Webex-Contact-Center).

## April 21, 2025

## Entry Point Transfer and Conference enhancement

Cisco introduces an enhancement to the call transfer and conference features. Currently, when an agent transfers a call to an entry point, they must wait until another agent is connected to the call. This means they cannot release the call while it is in an IVR or queue state.

With the new functionality, this limitation will be removed. Agents can now release the call to the IVR/queue, eliminating the need to wait for another agent to be connected. This enhancement streamlines the call handling process and improve efficiency.

Additionally, this feature enhances conference operations and includes support for a flow that performs a blind transfer when directing a call to a different entry point.

For more information, see [Manage your calls in Agent Desktop](https://help.webex.com/en-us/article/mmcf7p/Manage-your-calls-in-Agent-Desktop#Cisco%5FReference.dita%5F9cd3ac56-4d7c-4c2c-bc6b-b49f0a9fc963).

## Enhanced topic customization in Topic Analytics

Topic Analytics **is now** enhanced with the ability to edit topics in your topic collections. This enhancement allows you to tailor topics to better fit specific business needs, language, and jargon, thereby improving communication and reporting to stakeholders. You can easily rename, merge, or delete topics after analysis for a more streamlined and relevant reporting process.

For more information, see [Edit topics in topic collection](https://help.webex.com/en-us/article/v72wjab/Get-started-with-Topic-Analytics#task-template%5F85583402-c6a5-4dc1-9b71-25c830116109).

## Webex WFO: Activity Requests 

Activity Requests is now live in Webex WFO, enhancing Agent Self-Scheduling by allowing agents to request time for non-scheduled activities such as training, administrative tasks, and development opportunities—directly within their schedules.

Automation is playing a key role. When an agent adds an activity, the system handles the request according to predefined rules:

- Auto-approved activities are instantly approved by the system.
- Manually approved activities remain in a pending state until a team lead reviews and approves them.
- Staffing-dependent activities are automatically approved or denied based on real-time staffing levels.

Key benefits:

- Reduce manual effort with automated approval workflows.
- Ensure scheduling decisions align with staffing needs and business priorities.
- Maintain oversight and flexibility while enabling a more agile, self-directed workforce.

For more information, see [Configure Activity Rule Settings](https://wfohelp.com/doc/Content/user-guides/wfm-settings/configure-activity-rule-settings.htm).

## April 18, 2025

## Enhanced Set Variable Activity for Flow Designer

Webex Contact Center introduces an enhanced Set Variable activity in Flow Designer designed to empower developers to set and modify variables more efficiently in a single step on the canvas. This enhancement allows users to set up to 10 variables or expressions within a single set operation, streamlining flow development and reducing canvas clutter. By consolidating multiple set variable operations into one step, this feature simplifies workflow creation, enhances usability, and increases development velocity. As a result, developers will enjoy improved efficiency, while administrators benefit from easier flow comprehension.

For more information, see the [Set Variable](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c) activity section in the Flow Desginer Guide.

## April 17, 2025

## Enhanced Collaboration in Webex Contact Center Multi-Party Calls

We have introduced improvements to the conference call functionality within the contact center. These changes enable ongoing discussions among multiple parties, even after the customer or agent has disconnected from the call.

**Visual Comparison**: Following is a visual comparison highlighting the transformation from the current interface to the enhanced version.

**Current behavior:** 

With the current desktop experience:

- During a conference call, interactions are limited to the presence of the customer.
- In a conference call, an agent can add one additional participant. After initiating the conference, the agent has the option to transfer the call to this participant, allowing the agent to leave the call while handing it over to the remaining participant.

**Enhanced behavior:** 

- The conference call capability supports up to six additional participants, enhancing collaboration to better address customer needs.
- You will be able to consult with potential participants before adding them to a conference call. This enhancement provides customers with greater flexibility in managing their interactions.

  - **Example for Customer Support**: When a customer contacts the call center, the agent may need to include two experts to assist. The agent can add them one at a time, resulting in a four-way conference. The agent then has the option to leave the call, allowing the experts to continue assisting the customer. Alternatively, if the customer disconnects, the agent and experts can proceed with a post-call discussion.
  - **Example for Medical Consultation**: When a patient calls to speak with a doctor and a nurse, the agent can include up to six additional participants to assist. If the patient leaves after the initial consultation, the medical team can continue their discussion to finalize the analysis.
- The current Transfer option in a three-party conference will be renamed to Exit Conference. By clicking Exit Conference, you will leave the call, and the next participant will automatically assume control.
- You will also have the option to end the conference entirely, allowing you to conclude the interaction and proceed with wrap-up tasks. By pressing End, all participants will be disconnected. While the ability to drop specific participants individually is not yet available, it is planned for a future update.
- When a customer leaves the call, the remaining participants will enter a post-call state to discuss and finalize next steps. Once the conference concludes, the primary agent will enter the wrap-up phase. For those tracking average handle time as a custom metric within Analyzer, it's important to include post-call time to ensure metric accuracy. This update is already reflected in the default metric of Webex Contact Center.

**Comparison table**:

| Feature/Aspect               | Current Behavior                                                                                        | New Experience                                                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conference Call Participants | Limited to the presence of the customer and one additional participant.                                 | Supports up to 8 participants (including agent and customer), excluding a barged-in supervisor, allowing for increased collaboration.                                                                      |
| Transfer Option (UI Update)  | Agents use Transfer to leave a call, transferring it to another participant.                            | Transfer is replaced with Exit Conference. Agents can leave the call; the earliest added participant assumes control, simplifying call management.                                                         |
| End Conference (UI Update)   | End Conference involved a two-step process: dropping additional participants then terminating the call. | End Conference is replaced with End, which terminates the conference entirely for all participants in a single step, streamlining the end-process.                                                         |
| Additional Agent Controls    | Not available                                                                                           | Additional agents have similar controls to the primary agent, including adding participants and ending the call, enhancing flexibility.                                                                    |
| Consultation                 | Not available                                                                                           | Agents can consult with potential participants before adding them to the conference, improving collaborative efforts.                                                                                      |
| Post-Call State              | Not available                                                                                           | Remaining participants enter a post call state when the customer leaves, allowing for continued collaboration and task completion.                                                                         |
| Metric Tracking              | Custom metrics may not include post-call time.                                                          | Post-call time must be included for accurate metric tracking in Analyzer; default metrics such as average handle time already include this, ensuring accuracy. Custom definitions will need to be updated. |

## Consult Options to Entry Point/Dial Number (EP/DN)

This feature streamlines the consultation process by allowing agents to directly consult with Entry Points and Dial Numbers, enhancing collaboration and efficiency.

**Benefits for Agents and Administrators**

- **Direct consultation capabilities**: Agents can initiate consultations directly with Entry Points or Dial Numbers, facilitating seamless collaboration across departments without intermediary steps.
- **Configuration via desktop profiles**: Administrators can set up and manage Entry Points through desktop profiles, enabling quick and easy access for agents during consultations.
- **Optimized call workflow management**: Agents can efficiently place callers in destination queues directly, enhancing call handling without needing to restart the consultation process.
- **Integrated reporting**: For detailed call leg reporting and queue-based insights, customers should leverage Queue-Based Reporting (QBR). While the new call leg consolidation simplifies interaction records into a single Contact Session Record (CSR), adjustments may be required to utilize QBR effectively.

This feature enhances call management and reporting processes, supporting better operational success and improving the consultation experience for both agents and administrators.

## April 11, 2025

## Dynamic Variable support for Queue to Agent and Advanced Queue Info activities

The Webex Contact Center Flow Designer supports the use of dynamic variables for Queue to Agent and Advanced Queue Info activities. This enables flow developers to dynamically inject the Queue name, Skill Name with the Skill Value for more programmatic use of flows. The primary advantage of this feature is that developers can create flows with these activities and dynamically modify these parameters at runtime with the help of variable support. For more information, see [Skill settings](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#section%5Fok3%5Fqwz%5Fjrb).

## April 10, 2025

## Ability to Manage Audio Prompts using Webex Contact Center Flow Designer

Webex Contact Center introduces enhancements to the HTTP Activity on Flow Designer that allows administrators to record and manage audio prompts on the platform through a telephony interface, using Webex Contact Center Flows. This feature includes a ready-to-use flow template that empowers administrators to review, record, replace, and manage existing prompts by dialing into the flow using the IVR. This enables the seamless integration with the existing public Webex Contact Center Audio Prompt APIs on the developer portal, enabling administrators to leverage a wide range of features and functionality within the IVR when managing them. A key benefit is that this allows administrators to remotely manage and record prompts when there is no access to a desktop or web interface, expanding available options for managing audio prompts on the platform.

This feature enhancement includes support for the GraphQL content type on the HTTP activity, enabling more versatile interactions with APIs that support GraphQL, such as the Webex Contact Center Search API.

For more information, see the [HTTP Request](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5Fb1192550-38d4-46e5-be3d-2119794def93) activity section in the Flow Designer Guide.

## April 1, 2025

## Webex WFO: Periodization of Agent's Work Hours 

Periodization is now available in Webex WFO, enabling contact centers to balance an agent’s working hours over extended periods, such as a quarter or year, to align with contractual targets.

**Benefits of Periodization**:

- Improves work-hour flexibility
- Prevents agent overtime costs
- Manages agent under-utilization
- Controls regulatory violations
- Optimizes staffing based on time-based demand pattern
- Ensures that the required number of agents with necessary skills are scheduled for both peak and off-peak times
- Improves service levels while reducing costs
- Enhances resource allocation and scalability for long-term workforce planning

For more information, see [Periodization](https://www.wfohelp.com/doc/Content/user-guides/people/periodization.htm).

## Webex WFO: Insights

Insights is a modern, fully featured BI solution with a range of features and improvements designed to significantly enhance your data access and visibility within Webex WFO. 

Reasons to get excited about Insights: 

- The Insights experience is designed for streamlined data exploration and analysis, while being easy for non-technical users to independently create reports and dashboards.
- AI-powered and highly customizable to help accelerate decision making
- Offers a broad range of visualizations
- Suitable for both efficient ad-hoc analysis and rich dash-boarding

Here is a [**short video**](https://wfohelp.com/doc/Content/user-guides/insights-bi/get-started/how-insights-works.htm?tocpath=Data%20Analysts%7cInsights%7c%5F%5F%5F%5F%5F1) to provide an overview of all the new capabilities that Insights brings to the table.

**Insights has replaced Data Explorer.** However, for **Workforce Management (WFM) customers:** 

- Most WFM customers are already using Insights and many have [manually disabled Data Explorer](https://wfohelp.com/doc/Content/user-guides/insights-bi/turn-off-data-explorer.htm).
- Classic WFM customers have started their transition to Insights since April 30, 2025\. Many customers who also use QM and Analytics have already begun the transition.
- In a few cases, alternate timelines have been arranged for some customers. These customers have already been notified of their timelines.
- Some customers using Data Explorer export APIs are waiting on release of the new Insights Export Service to complete their journey.

**For all these WFM customers mentioned above**, Data Explorer is planned to be decommissioned on **June 30th, 2025.**

## Webex WFO: New Transcription Engine Rollout 

We’re excited to announce the rollout of the New Transcription Engine for Webex WFO customers - delivering significant improvements in accuracy, speed, and scalability. This cloud-based solution has been designed for faster turnaround times and more consistent transcription quality across supported languages.

Here's what you can expect: 

- Experience up to 20% increase in accuracy for US English, along with significant improvements across other supported languages.
- Transcriptions are now delivered more quickly, enabling faster access to insights and accelerating workflows.
- Seamless Transition:
  - Historical transcription data remains unchanged.
  - All new and ongoing transcriptions automatically benefit from the upgraded engine.
- Built on a cloud-native architecture to support rapid processing and scalable deployment.
- Designed with data localization and compliance in mind to meet business and regulatory requirements.

Benefits:

- Delivers more accurate and actionable transcriptions for QA, compliance, and insights.
- Enhances business intelligence through improved text analytics, sentiment tracking, and searchable conversation data.
- Drives operational efficiency with faster access to conversation transcripts, enabling quicker follow-up and coaching.
- Supports [15+ global languages](https://wfohelp.com/doc/Content/install-guide/introduction/localization.htm), including English, Spanish, French Canadian, German, Arabic, and more.

## Webex Contact Center CRM Connector for ServiceNow (Yokohama Edition)

Experience a new level of efficiency with our CRM Connector that is designed for seamless integration and rigorously validated for optimal functionality. This connector ensures a reliable and error-free experience between Webex Contact Center and ServiceNow (Yokohama Edition) Marketplace.

## March 31, 2025

## Webex AI Agent is Generally Available!

We are excited to announce the General Availability of Webex AI Agent, a platform for creating, deploying, and managing AI agents. These agents can be easily integrated into your contact center workflows to act as a self-service solution at the front door for customers. Key features include:

- **Scripted and Autonomous Modes:** Scripted agents use conventional machine learning algorithms for Natural Language Understanding (NLU) to capture user intents and respond accordingly, while autonomous agents use Large Language Models (LLMs) to drive dialogue and manage state.
- **Digital and Voice Channel Support:** Launch scripted agents effortlessly on voice and digital channels, and autonomous agents on digital channels.
- **Human Agent Handoff:** Escalate conversations to human agents as part of your workflows, using built-in AI assistant integration for handoff summaries.
- **Multi-Lingual Support:** Configure agents to support multiple languages (refer to the [List of supported languages](https://help.webex.com/article/pdef2d/) documentation).  
Non-English language support is currently in Beta. These languages will be made generally available once sufficient usage data and feedback are collected.
- **Built-in Reporting:** Access a wide range of out-of-the-box analytics and reporting within the AI agent studio.
- **Integration Capabilities:** Seamlessly connect with business systems and existing automation workflows via Webex Connect.

For more information on this offering, check out our [Webex ](https://help.webex.com/webex-ai-agent) [AI Agent Microsite](https://help.webex.com/webex-ai-agent) and the [Webex AI Agent Studio Administration guide](https://help.webex.com/article/ncs9r37).

## March 25, 2025

## Enhanced Customer Interaction Insights with Webex WFO's Speech Energy 

Webex WFO now offers Speech Energy, which enhances visibility into customer interactions by detecting silence and talk-over events. This feature delivers crucial insights into customer conversations, helping teams quickly identify areas of improvement. 

**Benefits**:

- Detection of silence and talk-over events highlights conversation stalls and overlapping speech, pinpointing areas for agent training.
- Analysis of these events helps uncover customer frustrations and optimize processes.
- Silence may indicate uncertainty, while talk-over suggests poor listening, aiding in refining agent interactions.

For more information, see [Detecting Silence and Talkover Events](https://wfohelp.com/doc/Content/user-guides/media-player/detecting-silence-and-talkover-events.htm).

## March 20, 2025

## Enhanced Bridge Transfer

Bridge Transfer activity is now enhanced to dequeue the contact when sending a contact to a third party interactive voice response (IVR) or automatic call distribution (ACD). If the contact is not handled in the third party system, it can taken back to the original queue.

For more information, see [Bridged transfer](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5F9762deed-12dd-47c3-a699-2fb28daf0a99%5FBT).

## March 12, 2025

## Removing number of agents scaling limits for Webex Contact Center

Webex Contact Center has now removed restrictions on customer agent limits, making it fully scalable to support any number of agents. This enhancement ensures that your contact center can grow seamlessly with your business, providing unmatched flexibility, and capacity. For more information, see System Limits section in [Setup and Administration Guide](https://help.webex.com/n5595zd).

## March 11, 2025

## IVR based campaign

As a part of proactive outreach functionality, IVR based campaigns enable administrators to configure Progressive and predictive pacing mode to dial out contacts using IVR based campaign. Also known as 'Agentless campaign', this feature enables customers to record messages and send the recorded messages to customers as part of the campaign calls. Additional functionality includes to queue the contact to an agent or send a digital notification based on the contact selection. A new report called IVR based campaign report is created for this feature.

For more information, see IVR Based Campaign Calls in the [Configure Voice Outbound Campaign Modes in Webex Contact Center](https://help.webex.com/en-us/article/nqu2kub) article.

## March 6, 2025

## Agent personal greeting

Cisco introduces a new Agent Personal Greeting capability to Webex Contact Center. This feature allows an agent's personally recorded greeting to be played automatically when they are connected to a customer call.

Flow Designer is enhanced with a new activity that allows personal greetings to be included in inbound flows. This activity enables the designer to dynamically select the agent greeting based on variables passed to the announcement activity.

Agent greetings are uploaded by administrators or supervisors through a new Control Hub capability. Additionally, Cisco is working on a capability that allows greetings to be recorded via a telephony interface.

For more information, see [Manage audio files](https://help.webex.com/en-us/article/be12vp/Manage-audio-files#concept-template%5F10502595-49be-4026-94c8-c5de36f2f03d) and [Set Announcements](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#concept-template%5Faf689dae-3766-43bb-b4f0-e91c224ca437).

## Compliance Announcement

Cisco introduces a new compliance announcement capability to Webex Contact Center. This feature allows a recorded message to be played at the start of an agent interaction with a caller. The message is heard by both the agent and the caller.

Flow Designer is enhanced with a new announcement activity which allows the administrator to manage various in call announcements including compliance announcement. 

For more information, see [Set Announcements](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#concept-template%5Faf689dae-3766-43bb-b4f0-e91c224ca437).

## March 4, 2025

## Better together with Webex: Enhanced call handling experience in the Agent Desktop

This feature consolidates Webex Calling Notification and Desktop Popover in the Agent Desktop, eliminating information overlap. Agents can now answer calls directly from the desktop without having any overlap with the Webex App call window. This feature is only available with Webex App 44.12 or later. For agents to use this feature, ensure that you have enabled Webex Calling in Control Hub. For information on how this feature works for Agents, see [Optimize Webex Contact Center Desktop call notifications with Webex App as a client](https://help.webex.com/article/u5dbtfb/) and [Set up and manage your notifications](https://help.webex.com/article/hdoryv/).

## March 3, 2025

## Webex WFO: Introducing Sessions for Streamlined Scheduling and Enhanced Agent Management 

Sessions is now live, streamlining the scheduling and management of agent activities beyond traditional shift planning. It allows managers to efficiently allocate time for training and other unscheduled tasks across a group of agents. 

With features like automated, evenly distributed activities and drag-and-drop scheduling, Sessions reduces administrative effort and enhances flexibility. 

**Benefits**:

- Provides clear visibility into agent allocation and performance for data-driven decision-making.
- Boosts operational efficiency.
- Supports agent development and engagement.
- Helps contact center teams stay organized and balanced.
- Keeps teams focused on continuous improvement.
- Aligns with broader business objectives.

For more information, see [Manage Sessions](https://wfohelp.com/doc/Content/user-guides/sessions/manage-sessions.htm).

## Webex WFO: Global Language Support for Phrase Categories 

Webex WFO now offers improved multilingual support, simplifying the management of mixed-language conversations while maintaining accuracy across various contexts. Users can now utilize the same category name in multiple languages. 

**Benefits**:

- Accurate representation of multilingual contexts, including mixed-language conversations.
- Effective handling of consistent terms, such as brand names, that remain unchanged across languages.
- Enhanced flexibility in categorizing the same word or phrase across different languages.

These enhancements make Webex WFO even more attuned to customer needs, providing a smoother and more user-friendly experience. 

For more information, see the following topics: 

- [Phrase Manager](https://wfohelp.com/doc/Content/user-guides/application-management/phrase-manager.htm)
- [Localization](https://wfohelp.com/doc/Content/install-guide/introduction/localization.htm)

## February 27, 2025

## Enhanced callback retry

The callback retry feature in Webex Contact Center is enhanced to capture the actual reason for callback failure, allowing flow developers to configure callback retries. With the inclusion of a new activity in Flow Designer called CallProgressAnalysis, you can set the CPA parameters to perform a voicemail or answering machine detection (AMD) for a callback. For more information, see [Call Progress Analysis](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#concept-template%5F9659c430-f741-4c58-a54a-441f00b11bc1).

## February 25, 2025

## Webex WFO Digital Channels Support (Email)

Webex WFO Quality Management now provides enhanced omnichannel capabilities, which enable organizations to deliver a seamless, high-quality experience across both digital and voice interactions.

You can now add digital channels in Application Management, including chat, SMS, and email. 

 New digital support features for email include improved search, workflow management, media player upgrades, customizable retention settings, and more.

 Webex WFO Quality Management enables teams to conduct quicker, more insightful reviews and streamline workflows, which helps them understand and address customer needs across multiple channels.

For more information, see the following topics:

- [Contact Goal Administration ](https://wfohelp.com/doc/Content/user-guides/application-management/contact-goal-administration.htm)
- [Workflow administration](https://wfohelp.com/doc/Content/user-guides/application-management/workflow-administration.htm)
- [Enable digital channels](https://wfohelp.com/doc/Content/user-guides/application-management/acd-config-cisco-webex-cc-2.0.htm)

## February 19, 2025

## Enhanced Zendesk Integration

Agent productivity and customer support is now more streamlined and boosted with exciting new enhancements to our Zendesk Connector! Agents can now create Zendesk tickets and new customer tickets directly from Agent Desktop. They can also automatically populate ticket fields and link them to various contacts. For more information, see [Integrate Webex Contact Center with Zendesk](https://help.webex.com/en-us/article/jg2krv/Integrate-Webex-Contact-Center-with-Zendesk#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F27a50088-c038-420a-8f63-2721964b0264).

## February 19, 2025

## Webex WFO: Bulk interaction tool - deletion and updates 

Webex WFO has introduced a self-service bulk contact deletion feature, enabling users to efficiently remove multiple contacts simultaneously without the need for manual, one-by-one deletions. 

**Benefits**:

- Effortlessly deletes interactions recorded in error or those containing unredacted sensitive data.
- Minimizes the need for development team intervention, conserving engineering resources.
- Empowers users with greater control over data management, thereby reducing the volume of support cases.

For more information, see [Bulk Contact Operations](https://wfohelp.com/doc/Content/user-guides/application-management/bulk-contact-operations.htm).

## February 17, 2025

## Digital surveys for post-interaction feedback and Baseline Survey Report in Analyzer

Streamline feedback collection with **Digital Surveys** in Webex Contact Center! Now, you can easily design and deploy post-interaction surveys to gather meaningful customer insights. With an intuitive survey builder, you can: 

- **Create multilingual surveys** in just a few clicks, making them accessible to a global audience.
- Add diverse question types, including short/long text, single/multiple-answer options, and key metrics like **NPS**, **CSAT**, and **CES**.
- Leverage engaging rating styles like **Smiley**, **Star**, and **Scale** to capture customer sentiment.

Personalize each survey with your **brand logo**, **colors**, and more. Once set up, surveys are automatically delivered to customers after interactions, enabling seamless feedback collection. 

To make analysis simple, the **Baseline Survey Report** in Analyzer gives you rich insights into survey responses, agent performance, and customer interactions.

For more information, see [Configure surveys for digital channels](https://help.webex.com/en-us/article/nlu4x20/Experience-Management---Configure-surveys-for-IVR-and-Digital-Channels-for-WebexContact-Center#concept-template%5F35dcdf96-3359-4b9c-9308-8d4b8dadf41d).

Click [here](https://app.vidcast.io/share/f78f09df-c9f9-440a-8e54-d09cecf6f6b3) for the vidcast for Digital surveys for post-interaction feedback.

Click [here](https://app.vidcast.io/share/047fd548-73c9-4634-821a-4f8a23f20cc3) for the vidcast for Baseline survey report.

## February 11, 2025

## Cisco AI Assistant for Contact Center 

Get ready to transform your contact center operations and delight your customers with Cisco AI Assistant for Contact Center! 🌟 

AI Assistant revolutionizes customer service by enhancing your efficiency and elevating customer satisfaction! 🚀

Here's what the AI Assistant offers: 

- **AI-generated call summaries** at various touchpoints throughout the agent-customer interaction.
- **AI-powered Agent Wellbeing** to support agent’s wellbeing, improve productivity and Customer satisfaction.
- **Auto CSAT** predicts customer satisfaction after each interaction, providing insights that help contact centers make smarter decisions, improve agent performance, and boost customer satisfaction.
- **Topic Analytics** to identify the primary reasons your customers are calling the contact center.

For getting started with the AI Assistant features, see [Cisco AI Assistant for Webex Contact Center](https://help.webex.com/article/nvvv1zb/). 

For information about enabling the AI Assistant features, see [Enable Cisco AI Assistant for Contact Center](https://help.webex.com/article/n9lk3t6).

## AI-generated call summaries 

Agents can now handle customer conversations better with AI-generated summaries.

- **AI-generated summaries for dropped calls:** If a call gets disconnected unexpectedly, the Cisco AI Assistant instantly creates a summary of the conversation. When the customer calls back, the next agent can seamlessly continue the conversation, saving time and enhancing the customer experience. You can view insights and assess the importance of these summaries in the _Dropped Call Summaries_ report on the _AI Assistant Dashboard_. For more information, see [Dropped Calls Summary](https://help.webex.com/article/ioqbvd/#concept-template%5F37459087-0a71-48d7-838d-ccfab25dc656) report.
- **Virtual agent transfer summaries:** Provides the comprehensive summaries of interactions with virtual agents, ensuring the agents have all the information needed to assist customers quickly and efficiently. This means less repetition for customers and faster resolutions!  
The Analyzer report for the virtual agent transfer summaries will be available in the future.

For more information on enabling AI-generated call summaries for agents, see [How to enable AI-generated summaries feature](https://help.webex.com/article/n9lk3t6/#task-template%5F0a370c65-b0b4-453a-b0aa-316b68ee0774). 

## Agent Wellbeing 

AI-powered Agent Wellbeing features are designed to support Agents’ wellbeing, enhance productivity, and customer satisfaction. Using advanced analytics, the Webex Contact Center platform harnesses end-to-end data insights to monitor and detect agents' stress levels in real-time. Using the real-time insights, the system provides **automated wellbeing breaks** when needed, helping agents manage stress effectively, sustain high performance, and deliver exceptional customer experiences.

For more information, see [Improve agent wellbeing and performance with burnout detection and wellness breaks](https://help.webex.com/article/l5eu0c).

## Auto CSAT 

Auto CSAT forecasts customer satisfaction (CSAT) after each interaction, helping contact centers gain insights and make decisions to boost customer satisfaction and agent performance. CSAT is crucial for understanding customer happiness with service. Cisco's proprietary models use operational data, interaction transcripts, and surveys to predict CSAT scores accurately. These scores can identify training needs, select calls for review, and ensure swift resolution for dissatisfied customers. The Auto CSAT scores are available in the **Auto CSAT** report on the **AI Assistant Dashboard** within the Analyzer. 

For more information, see [Measure customer satisfaction with Auto CSAT](https://help.webex.com/article/l59wt8). 

## Topic Analytics 

AI-powered Topic Analysis capability provides insights into the key reasons customers are calling into the contact center by collecting and analyzing interaction data and extracting trends. This capability, using large language models (LLMs), is now available with the AI Assistant Add-on for the Flex 3.0 license.

For more information, see [Get started with Topic Analytics](https://help.webex.com/article/v72wjab). 

## February 5, 2025

## Feature improvements to Salesforce connector Version 1.7.0

Salesforce Connector version 1.7.0 introduces the following new features and improvements:

- **Case Assignment:** Agents can now assign a contact or account to a case during an active call when a single match is found.
- **Enhanced Screenpop Handling**: Improved screenpop behavior for consult and conference calls:
  - No screen pop occurs on incoming consult calls or after leaving a conference.
  - Screen pop occurs only for transferred calls originating from a conference call, and only if a screen pop has not already occurred.
- **LogRocket Sanitization:** Enhanced sanitization of logs sent to LogRocket ensures that only Personally Identifiable Information (PII) is masked, maximizing the information available to Support Agents.

## February 4, 2025

## Improved handling of international phone numbers

Freshdesk's current system for formatting and interpreting incoming phone numbers (specifically the Automatic Number Identification, or ANI) is designed primarily for US phone numbers. We're excited to announce that this enhancement ensures accurate formatting and processing of calls from customers outside the US, leading to a smoother and more efficient support experience.

## February 1, 2025

## Webex WFO Digital Channels Support (Chat, SMS)

As customer interactions increasingly move to digital platforms, Webex WFO Quality Management has introduced enhancements to support omnichannel engagement. These updates ensure a comprehensive view of interactions and a seamless experience across various channels. 

**Key Highlights**

- Standard workflows for end-of-call and daily quality management now extend to digital interactions like chat, SMS, and legacy text.
- A 'Keep' action is available for text contacts, with configurable retention periods for digital and non-call contacts.

**Contact Goal Administration**

- **Contact Type:** it includes Chat, and SMS in addition to Call and Text.
- **Contact Goal Classifiers**: When Text, Chat, or SMS is selected as the contact type, a **Random** option is available as a classifier, such as **Random Chat**.

**Easy to Enable**

Application Management streamlines digital channel enablement, which reduces deployment time and complexity and allows easy channel optimization.

For more information, see the following topics:

- [Contact Goal Administration](https://wfohelp.com/doc/Content/user-guides/application-management/contact-goal-administration.htm)
- [Workflow administration](https://wfohelp.com/doc/Content/user-guides/application-management/workflow-administration.htm)
- [Enable digital channels](https://wfohelp.com/doc/Content/user-guides/application-management/acd-config-cisco-webex-cc-2.0.htm)
- [Omnichannel Quality Management Enhancements](https://success.calabrio.com/s/article/Omnichannel-Quality-Management-Enhancements)

## January 30, 2025

## Programmatic Flow Management with New List and Publish APIs

Webex Contact Center introduces new Flow List and Flow Publish APIs, available on the Developer Portal, for programmatic flow management. These APIs supplement the existing Import and Export APIs for flows and subflows, enabling the full automation of flow management for both new and migrating organizations. This update allows developers and partners to list, export, import, and publish flows and subflows programmatically between organizations, eliminating manual steps and thus enhancing efficiency in managing a large number of flows and subflows. This advancement also facilitates the creation of advanced deployment and migration scripts, making it easier to bulk transfer and publish flows between organizations. For more information, see [Flow APIs on Developer Portal](https://developer.webex.com/webex-contact-center/docs/api/v1/flow).

## January 29, 2025

## Agent initiated outbound SMS and Email support

We're excited to announce that supervisors with agent role permission can now initiate an outbound SMS or Email Task from the Webex Contact Center Agent Desktop. They can initiate an outbound task regardless of their current status, whether on a voice call, engaged in a digital interaction, or idle with no tasks assigned. This new feature allows supervisors to send updates to customers or external partners outside of the regular interactions on demand, and it will be available to all supervisors with access to digital channels powered by Webex Connect. However, the ability to start these outbound tasks will depend on the thresholds configured in the multi-media profile policy mapped to the supervisor.

## January 29, 2025

## Self-Service SMS (10DLC) and WhatsApp numbers

United States customers can now request phone numbers, including 10DLC, directly through the Webex Connect as a self-service feature. If you are located outside of the United States, you will still need to contact support for your phone number requests. However, the U.S. customers who have created brands using any third-party applications will need go through support to obtain the numbers. For more information, see the article on [Self-service SMS (10DLC) and WhatsApp numbers](https://help.webex.com/sff7jw).

## January 29, 2025

## Livechat end customer widget network connectivity banners

End customers utilizing live chat functionality will now receive a prominent network connectivity banner to keep them informed whenever there is a disruption in the network connection. This banner will alert users in real time if the network drops, ensuring they know of any potential interruptions to their chat experience. Additionally, once the network connection is restored, users will receive a notification confirming that the connection has been established. This enhancement aims to improve user awareness and provide a smoother communication experience during live chat sessions.

## January 28, 2025

## Webex WFO Bulk Transfer User Data

Webex WFO Bulk transfer of user data provides a more efficient and user-friendly solution to transfer data from one user to another when an employee has more than one user account. This feature also enables you to transfer data for up to 2,000 users in bulk at once.

For more information about bulk data transfer, see the _About user data transfer for QM and Analytics_ and _Transfer user data for QM and Analytics_ topics at:

- [Transfer User Data](https://wfohelp.com/doc/Content/user-guides/application-management/data-transfer.htm)
- [About Transfer User Data](https://wfohelp.com/doc/Content/user-guides/application-management/data-transfer-about.htm)

## January 27, 2025

## Introducing cookies consent for Livechat widget

We are pleased to announce that businesses can ensure they respect their customers' privacy choices by allowing them to explicitly consent to cookies stored by our Livechat service before starting a chat session. Additionally, we now offer an option to link a business's privacy URL to the widget so that customers can understand how their data is tracked and used by the business. This optional configuration will not impact existing widgets, meaning cookies will still load upon page visits. When this feature is enabled, end customers must accept cookies before initiating chat sessions.

## January 27, 2025

## Retain email addresses in the To field 

Agents can now add multiple email addresses in the To  field when replying to all in a conversation. Additionally, agents can remove any email address from the list except the primary one.

## January 15, 2025

## Progressive 1:1 Popover Enhancement

This feature allows an organization to pass customer data to the Desktop when the Dialing rate is set to 1.0 and the mode is progressive only. This allows the reserved agent to see in the configured flow variables showing customer data being dialed on their behalf, so they can have additional time to prepare for the call prior to connecting.

For more information, see [Configure Voice Outbound Campaign Modes in Webex Contact Center](https://help.webex.com/en-us/article/nqu2kub/).

## Flow Designer canvas enhancements for streamlined development

The Webex Contact Center Flow Designer now features a suite of Canvas Enhancements designed to supercharge the productivity of flow developers and administrators.

- With the new Undo/Redo capability, flow developers can effortlessly backtrack or reapply changes, ensuring a smooth and error-free flow creation process.
- The Auto Arrange feature instantly organizes your canvas, promoting clarity and maintainability of complex flows.
- The ability to Copy/Paste across different flows or subflows simplifies refactoring, promotes reusability, and fast-tracks subflow creation.
- The newly available keyboard shortcuts make it easy to navigate between actions seamlessly, significantly improving the developer experience and bringing a more intuitive design experience that allows users to focus on innovation rather than configuration.

These enhancements not only save valuable time but also align with our commitment to providing a user-friendly and efficient interface for the contact center ecosystem.

Click [here](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#Cisco%5FConcept.dita%5F2e773682-6129-4fb7-b857-4b56f57103bc) for more details.

## January 7, 2025

## Enhancing SFDC case creation experience: opening cases in new tabs

Auto-case creation in Salesforce now opens all new cases in a separate tab, regardless of contact status (known or unknown). Previously, cases for known contacts opened in edit mode within the current tab and closed upon saving or closing. 

## December 16, 2024

## Global Variables now available in Control Hub

Webex Contact Center has streamlined its administrative configurations by integrating Global Variables into Control Hub. You can now conveniently access and manage global variable settings through the Flow tab in Control Hub. For further details, refer to the [Manage global variables ](https://help.webex.com/ngfdsbi/)article.

## Enhanced tracking and sorting capabilities in Webex Contact Center

- **Last edited by in flows and sub-flows**: A new **Last edited By** column has been added, allowing admins to identify who made the most recent changes. The column supports sorting by user for enhanced update tracking.
- **Collection views sorting:** Users can now sort the **Last modified** row for configuration entities, making it easier to identify the most and least recently modified objects, with an option to reset to the default sort.

## Update in onboarding to support Common Edge platform

We are pleased to announce an update to our onboarding process to make Common Edge the default telephony integration for Webex Contact Center.

**Key update:**

\* End of legacy VPOP provisioning: Our provisioning system is now updated to discontinue legacy VPOP onboarding.

\* The user experience is now simplified and provides streamlined steps for trials and subscriptions.

\* Contact Center PSTN can now be provisioned as a cloud connected PSTN service rather than a telephony integration.

**Advantages of Common Edge:**

\* Self-Provisioning of SIP Trunks: Empowers you with more control over your telephony setup.

\* Cloud connected PSTN: Enhances connectivity providing access to many global service providers for PSTN connectivity.

\* Support for multiple PSTN services: Flexibility to mix various telephony connection types (local gateway and cloud services).

\* Support for external telephony platforms such as Cisco Unified Communication Manager & Microsoft Teams

See the [Get started with Webex Contact Center](https://help.webex.com/nee1mb6) article for updated provisioning journey.

## Webex Contact Center Cloud Connected PSTN Service 

The deployment model for Cisco Contact Center PSTN plan will soon be changing to a Cloud Connected PSTN service. This change allows the calling plan to be deployed with Common Edge Services. A Contact Center administrator will simply add Contact Center PSTN as a Cloud Connected PSTN service to a location in Webex Control Hub. 

Common Edge services provide many advantages over legacy telephony integrations. These include self-provisioning of SIP trunks, cloud connected PSTN, Cisco calling plan integration and supports mixing of multiple PSTN connection types. 

For more information, see [Set up voice channels for Webex Contact Center](https://help.webex.com/article/2dputx/).

## December 12, 2024

## Enhanced recording playback

Currently, supervisors face challenges with fragmented session recordings, making it difficult to identify key moments for efficiency review. Our upgraded playback experience addresses this issue by offering an intuitive layout with improved interaction details. The new player enables supervisors to effortlessly navigate through various segments of the call, including chapters that summarize important moments and rich metadata for voice interactions. This ensures that supervisors can focus on the most crucial parts of the conversation.

For more information, see the [Supervise your agents and teams](https://help.webex.com/en-us/article/n408h9cb/Supervise-your-agents-and-teams#play-call-recording) article.

## December 12, 2024

## Sign out agents in Team Performance Details

With this feature, you can sign out agents from the team performance details widget in Supervisor Desktop. This can be applicable for the agents who've left for the day while in a wrap-up state, are still marked as available (causing calls to be routed to them), or have accepted an asynchronous interaction, such as an email. If agents are currently engaged in an interaction, you will need to wait until they complete it before signing them out.

For more information, see the [Supervise your agents and teams](https://help.webex.com/en-us/article/n408h9cb/Supervise-your-agents-and-teams#task-template%5F852e0ef5-8670-4789-857c-d91bc1f27694) article.

## December 11, 2024

## Consult, conference or transfer voice calls to experts within your Webex organization with Presence lookup

Empower your agents with the right expertise. Presence lookup will make it easy for your agents to find and connect with experts within your Webex organization. With a simple search by name and real-time availability, they'll be able to find the perfect experts to assist customers, ensuring a high-quality customer experience.

For more information, see 'Manage Webex App' section of [Desktop settings for Webex Contact Center](https://help.webex.com/en-us/article/nu0du4c/Desktop-settings-for-Webex-Contact-Center), and 'Create a desktop profile' section of [Manage desktop profiles](https://help.webex.com/en-us/article/nvaf71f/Manage-desktop-profiles). 

For information on how this feature works for Agents, see 'Initiate a consult' and 'Transfer a call' sections of [Manage your calls in Agent Desktop](https://help.webex.com/en-us/article/mmcf7p/Manage-your-calls-in-Agent-Desktop).

## December 11, 2024

## Make outdial voice calls to experts within your Webex organization with Presence lookup 

Empower your agents with the right expertise. With Presence lookup, your agents will be able to easily make outdial calls to experts within your Webex organization. They can search their Webex directories and view real-time availability to find the perfect person to assist them. It's an easy way to get the help they need within your organization. 

For more information, see 'Manage Webex App' section of [Desktop settings for Webex Contact Center](https://help.webex.com/en-us/article/nu0du4c/Desktop-settings-for-Webex-Contact-Center), and 'Create a desktop profile' section of [Manage desktop profiles](https://help.webex.com/en-us/article/nvaf71f/Manage-desktop-profiles). 

For information on how this feature works for agents, see 'Place an outdial call' section of [Make an outdial call](https://help.webex.com/en-us/article/nvxpcaf/Make-an-outdial-call).

## Make outdial voice calls to experts within your Microsoft Teams organization with Presence lookup

Empower your agents with the right expertise. With Presence lookup, your agents will be able to easily make outdial calls to experts within your Microsoft Teams organization. They can search their Microsoft Teams directories and view real-time availability to find the perfect person to assist them. It's an easy way to get the help they need within your organization. 

For more information, see 'Create a desktop profile' section of [Manage desktop profiles](https://help.webex.com/en-us/article/nvaf71f/Manage-desktop-profiles), and search for 'Display user settings’ toggle in 'Synchronize Microsoft Teams states with Webex Contact Center idle codes' section of [Integrate Webex Contact Center with Microsoft Teams](https://help.webex.com/en-us/article/n1sztxbb/Integrate-Webex-Contact-Center-with-Microsoft-Teams). 

For information on how this feature works for agents, see 'Place an outdial call' section of [Make an outdial call](https://help.webex.com/en-us/article/nvxpcaf/Make-an-outdial-call).

## December 4, 2024

## Flow Analytics for Webex Contact Center Flow Designer

Flow Analytics offers a visual representation of contact traversals through activities and flow paths. It provides current and historical views for in-depth analysis. With visualizations of flow paths, summary statistics, and insights into error paths, Flow Analytics will help Administrators and flow developers identify and resolve potential issues that can affect the customer experience. Users will also be able to drill down into individual interactions per activity for better insights. This feature is designed to help optimize flows, improve containment rates, and enhance the overall customer experience in the contact center. 

**_Flow Analytics_**

For more information, see [Flow analytics](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#task-template%5F2922adde-cab2-416f-b436-019e5c46f072).

## December 02, 2024

## PII masking capabilities for improved security and privacy in customer communications

Cisco introduces robust Personal Identifiable Information (PII) masking capabilities within your security configurations. Enhanced privacy measures now ensure that customer personal information remains confidential during every agent interaction across voice and digital channels, reinforcing your commitment to security and trust. To know how to configure secuity at Control Hub, refer to the [Set up security for Webex Contact Center](https://help.webex.com/en-us/article/3srgv1/Set-up-security-for-Webex-Contact-Center)article.

For detailed information on how this masking works for Agents, refer to the relevant articles in the _Handle Incoming Calls_ and _Handle Digital Channel Conversations_sections of [Contact Center Help Center](https://help.webex.com/en-us/landing/ld-93x1hg-ContactCenter/Agent?type=complex&subTab=Webex-Contact-Center&category=Handle-digital-channel-conversations).

## November 29, 2024

## Secure Global Variables

Customer data protection and privacy are critical components for any business because they help to safeguard sensitive and confidential information from unauthorized access, disclosure, and modification. Security remains the topmost priority for Cisco products and hence this feature introduces tighter control in handling sensitive PII, PCI, and PHI data within the solution. 

To ensure the continued confidentiality of your sensitive data, you must create Campaign Variables as Global Variables. To know more, see [Secure Global Variables](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#section%5Fdfw%5F4qs%5Fndc). 

This feature includes a new toggle **Mark Sensitive Information** within the Global variables which will restrict the Global variables to be made available in any logs, Analyzer reports, and Desktop logs. These variables will only be decrypted at the Agent Desktop for agent viewing. This feature provides the control to administrators to handle the sensitive data for voice interactions.

Click [here](https://app.vidcast.io/share/4100f5bf-b218-432e-9779-a3992a3b9533) for the Vidcast.

## November 27, 2024

## Invoke Webex Contact Center APIs from Flow Designer 

Webex Contact Center public APIs available as a part of the Developer portal can be invoked from the Flow Designer. This feature enables you to orchestrate use cases that can increase operational efficiency and allows you to use your creativity to solve unique business problems.

For more information, see [Create Webex Contact Center HTTP connector](https://help.webex.com/article/n54f5wd/).

## November 22, 2024

## Introducing Web chat asset management on Control Hub

This feature empowers administrators to manage their web chat assets seamlessly. From creating bespoke chat widgets tailored to your brand's identity to efficiently handling IP block lists, Control Hub ensures unparalleled control and customization for your online engagement strategies.

## November 20, 2024

## Support for shared mailboxes to send emails using SMTP

We are excited to announce that you can now configure shared mailboxes to send and receive emails. Since shared mailboxes do not have their credentials for authentication, most email service providers allow you to set them up using authorization through a service account. You can now use these service accounts to authenticate your mailbox with Webex Connect while setting up your Email asset.

## November 18, 2024

## Queue-based reports

Queue-based reports (QBR) introduce three new stock reports in Analyzer. These reports deliver comprehensive insights and metrics at the queue level, covering call flows and interactions as they are presented, handled, transferred, and consulted across queues. Additionally, a new repository called as Queue Record is available. 

For more information, see the sections _Queue-based Reports_ and _Standard Queue Record Fields and Measures_ in the [Webex Contact Center Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide).

## November 15, 2024

## Webex AI Agent Beta

We're excited to announce that the “Webex AI Agent” is now open for Beta sign-ups in Scripted mode. With Webex AI Agent, you can create AI agents for both voice and digital channels to automate customer service and support interactions before engaging with a human agent. Interested customers with the Webex Contact Center on the Next Generation Media Platform in the US Region can sign up for this feature by completing the participation survey.

**How to Participate:**

- Sign up for the Webex Contact Center Beta project [here](https://gobeta.webex.com/key/contactcenter).
- If you're already part of the Contact Center Beta project, please complete the participation survey [here](https://gobeta.webex.com/r/?e9824e03cdb042e991721d2f1ad785df) to express your interest in enabling this beta feature.

Once enabled, you can currently use Webex AI Agent in Scripted mode, while the Autonomous mode will be available for sign-up at a later date.

## November 13, 2024

## WebRTC support for Supervisor Desktop

With WebRTC support for Supervisor Desktop, using the Next Generation Media Platform, you can facilitate your calls directly from your browser with the help of a headset. No more need for external phones or extension numbers. This feature offers all the current voice functionalities like hold, retrieve, transfer, and conference. Plus, features like mute, auto-answer, and dial pad ensure seamless browser-only use. Not only this, a new WebRTC status indicator shows you the current status of the voice service. For more information, see [Manage Desktop Profiles](https://help.webex.com/en-us/article/nvaf71f/Manage-desktop-profiles), [Change your dial number or extension](https://help.webex.com/en-us/article/bclez0/Change-your-dial-number-or-extension), [Edit your profile in Supervisor Desktop](https://help.webex.com/en-us/article/n15717/Edit-your-profile-in-Supervisor-Desktop), [Sign in to Supervisor Desktop](https://help.webex.com/en-us/article/lc7emx/Sign-in-to-Supervisor-Desktop#task-template%5F776addef-cf6f-427a-840f-2c2a786fae32), and [Supervise your agents and teams](https://help.webex.com/en-us/article/n408h9cb/Supervise-your-agents-and-teams).

## November 11, 2024

## Remove contact skills on agent blind transfer

Webex Contact Center provides an ability to remove skill on a contact in queue when agent does a blind transfer to any queue. This feature allows flow designers to enable the toggle (if needed) to remove skills after blind transfer by agent in Queue Contact activity. 

This enables the transferred contact not to have any skills. The contact will be offered to the Longest Available Agent in the transferred queue. For more information, see [Queue Contact](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5Fc93b6399-3cd7-4c86-9e82-48a82469fb8e).

## November 04, 2024

## Maximize Return on Investment with New CRM Connectors for Salesforce, Microsoft Dynamics 365, and ServiceNow

Simplify management and boost agent efficiency with our new CRM Connectors, which help in streamlining your tasks. User provisioning, configuration, and enabling new features are now more efficient and user-friendly. With enhanced security, performance, and rich data transfer capabilities, your agents can deliver top-notch customer experiences effortlessly. For more information, see [Integrate Webex Contact Center with Dynamics](https://help.webex.com/en-us/article/n1lsqvu/Integrate-Webex-Contact-Center-with-Dynamics), [Integrate Webex Contact Center with ServiceNow](https://help.webex.com/en-us/article/ny83tx0/Integrate-Webex-Contact-Center-with-ServiceNow), and [Integrate Webex Contact Center with Salesforce](https://help.webex.com/en-us/article/dyidod/Integrate-Webex-Contact-Center-with-Salesforce).

## October 30, 2024

## Add multiple subscriptions to the same tenant

Customers can now have multiple subscriptions on the same Webex Contact Center and Hybrid tenant in the Control Hub. This enables customers to have multiple departments with different billing terms. Customers now also have the flexibility to put agents, CCAI, and WFO on separate subscriptions with different billing terms.

Existing provisioning administrators will automatically transition from their current privileges to read-only access, they can contact their customer administrator to get full administrator access.

For more information, see [multiple subscriptions](https://help.webex.com/article/n98y8mz) article.

## October 30, 2024

## Desktop telephony option now supported on Microsoft Edge and Firefox

Webex Contact Center agents can now use Desktop (WebRTC) to handle voice interaction directly in Edge and Firefox browsers.

## October 23, 2024

## Enhanced user sync for Webex Contact Center and Webex Connect

We’re excited to announce an enhancement to our auto-sync feature between Webex Contact Center and Webex Connect! Previously, this feature allowed only all partner and first customer administrators to go to Webex Connect and start configuring immediately without needing to create a separate user sign-in. 

We’ve extended this functionality now to include all customer administrators. This means that all customer administrators, not just the first customer administrator, can now sign in to Control Hub and Webex Connect with the same user login. 

For detailed information, refer to the Provisioning digital section in [Set up digital channels](https://help.webex.com/n954r0k) article.

## October 18, 2024

## Regional media support expanded to South Africa region

Webex Contact Center has expanded the Regional Media support to the South Africa. This allows administrators to select South Africa as the geographic region for voice media processing. By localizing media processing, Webex Contact Center aims to significantly improve audio quality for both customers and agents by reducing latency.

The expansion to South Africa increases the number of regions that Webex provides local media support. For more information on the list of regions and the support extended, refer to the table in [this](https://help.webex.com/en-us/article/nee1mb6/Get-started-with-Webex-Contact-Center) article.

## October 18, 2024

## Cisco AI Assistant for Contact Center

Cisco AI Assistant for Contact Center is designed to optimize the work of agents and improve the customer experience. AI Assistant provides AI-generated call summaries at various touchpoints throughout the customer interaction - before, during and after. The first set of capabilities available in beta portal include auto summaries for dropped calls and virtual agent transfer summaries.

- **Auto summaries for dropped calls**  
With this capability, customers and agents alike do not have to worry about repeat conversations in those frustrating cases where their call gets accidentally dropped before resolution: When the customer calls back, CIsco AI Assistant for Contact Center will generate a summary of that customer's call before the call dropped, and will display this summary to the next agent picking up the customer's callback. This way, agents can pick up right where the previous agent left off with the customer, saving the customer from having to repeat themselves, while also drastically shortening average handle times.
- **Virtual Agent Transfer Summaries**  
With this capability, agents receive an auto-generated summary of the customer's interaction with the virtual agent, ensuring quick context building, less repetition from the customer, and faster resolution times.

You need to sign up on the [Webex Beta Portal](https://gobeta.webex.com/welcome/) and fill in the participation survey to express your interest in these beta features.

## October 16, 2024

## Post call IVR surveys now available globally

Post-call Interactive Voice Response (PCR IVR) surveys give customers the ability to collect customer feedback at the end of a call concerning an end user’s interaction with their Contact Center. It allows them to track and measure customer satisfaction using anchor metrics like Net Promoter Score (NPS), Customer Effort Score (CES), and Customer Satisfaction (CSAT). 

PCS IVR surveys are seamlessly integrated into Webex Contact Center through the Survey Builder in Control Hub where administrators can build surveys and download survey responses. After creating a survey, it gets integrated into the interaction flow via the Flow Builder. 

This feature is now available globally to all Webex Contact Center customers as long as they have migrated to the Next Generation Media platform.

For more information, see the Help article [Experience Management – IVR Surveys for Webex Contact Center](https://help.webex.com/en-us/article/nlu4x20/Experience-Management---Interactive-Voice-Response-Surveys-for-Webex-ContactCenter).

## October 11, 2024

## Agent Email Id output variable for Events

Webex Contact Center Flow Developers and Administrators can now utilize agent's Login ID in the form of a unique Email address within Event Flows. This new feature introduces an output variable AgentEmailID, which captures the selected Agent's Logged in Email Address for various events such as AgentOffered, AgentAnswered, AgentDisconnected, and PhoneContactEnded. This enhancement enables additional integrations with external systems like Customer Relationship Management (CRMs) and Ticketing systems for agent specific data, ensuring improved consistency and tracking capabilities. This feature unlocks advanced integration-specific event flows and enhances overall workflow efficiency, by allowing flow developers to accurately tag contact data to the agent's user record on external systems. For more information, see **Event output variables** section in [Flow Designer Guide](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer).

## October 10, 2024

## Incorporate version labels for enhanced logic in Flow Designer

Flow developers now have the ability to modify flow logic dynamically by accessing Version Labels within the flow using the **NewPhoneContact** activity. The activity is enhanced with a property that displays the Flow Version Labels currently in execution: whether 'Dev', 'Test', 'Live', or 'Latest'. This enhancement enables crafting custom logic tailored to the flow's Version Label. This significantly boosts the testing and design flexibility, supporting the use of a consistent flow across various stages-Development, Testing, and Live-depending on the context of execution.

For more information, see StartFlow activity and Apply version labels to a Flow sections in the [Flow Designer Guide](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer).

## October 9, 2024

## Introducing Flow Templates for Webex Contact Center Flow Designer

Webex Contact Center Flow Designer introduces Flow Templates, designed to streamline the flow creation process by providing out-of-the-box flows for common use cases. With Flow Templates, developers can now select from a curated collection of Cisco flows, each tailored to various use cases and complexities. With this new experience, developers can also choose a template, make a few configurations, and move straight to testing and deployment. Flow Templates reduce the learning curve, decrease design time, and help developers implement best practices by offering a rapid, reliable path from design to execution.

For more information, see the Flow Templates section in the [Flow Designer](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#concept-template%5F9ff477bc-55b9-464e-84d0-766e77694982) guide.

## October 9, 2024

## Introducing dedicated Flow Designer documentation on Webex Help Center 

Flow Designer documentation is now available in a dedicated section on [Webex Help Center](https://help.webex.com/en-us/landing/ld-93x1hg-ContactCenter/Administrator?type=complex&category=Manage-Flows-and-Routing). This new structure provides administrators and developers easy access to comprehensive and focused information about the Webex Contact Center Flow Designer platform. By migrating the documentation from the broader Setup and Administration Guide to a standalone article, we are enhancing searchability in locating specific information. Key updates include revised links in the Control Hub and Flow Designer help icons, ensuring seamless navigation to the new documentation location.

For more information, see [Flow Designer](https://help.webex.com/nhovcy4) guide.

## October 9, 2024

## Business Rules Engine (BRE) reliability and scalability enhancements

We have enhanced the Business Rules Engine (BRE) application in Webex Contact Center for reliability and scalability. With this update, administrators are recommended to use the updated URLs for the Data Sync and Rules Administration pages, ensuring seamless data uploads and rule configurations. By modernizing the application infrastructure, this enhancement addresses scalability requirements, providing a robust and dependable solution for flow developers and administrators.

The transition is entirely behind the scenes, requiring no changes to flows or data migrations, ensuring uninterrupted operations with improved performance and reliability. Administrators must update their bookmarks to the new URLs. Older URLs will remain functional until their future retirement.

For more information, see the [Webex Contact Center Business Rules Engine Guide](https://help.webex.com/en-us/article/nve6qddb/Webex-Contact-Center-Business-Rules-Engine-User-Guide).

## October 9, 2024

## Skill relaxation input removed from Advanced Queue Information activity

The Skill Relaxation input section in the Advanced Queue Information activity is removed because it was not serving any purpose as it was not considered in the activity. Please note that this change doesn't impact any of the existing flows where the Skill Relaxation input parameter is already configured. For more information, see [Advanced Queue Information](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#Cisco%5FConcept.dita%5F4bd2ee51-57b1-4741-b37e-7326704c916ax).

## October 7, 2024

## Simplified process to upgrade to Common Edge services

We are pleased to introduce a new streamlined process for requesting conversion of a customer organization from VPOP telephony integration to Webex Common Edge services. The new process performs verification of your current telephony integration and then upgrades the telephony integration to Common Edge. The process can be completed in a matter of minutes for most customers, including automated remapping of entry points to common edge. 

Common Edge services provide many advantages over legacy VPOP telephony integration, including self-provisioning of SIP trunks, cloud connected PSTN, Cisco calling plan integration, and supports mixing of multiple connection types. 

If you would like to upgrade your organization to Common Edge telephony integration, please reach out to Cisco Support Team. 

## October 1, 2024

## Regional media support expanded to United Arab Emirates (UAE) region

Webex Contact Center has expanded the Regional Media support to the United Arab Emirates (UAE). This allows administrators to select the UAE as the geographic region for voice media processing. By localizing media processing, Webex Contact Center aims to significantly improve audio quality for both customers and agents by reducing latency.

The expansion to the UAE increases the number of regions that Webex provides local media support. For more information on the list of regions and the support extended, refer to the table in [this](https://help.webex.com/en-us/article/nee1mb6/Get-started-with-Webex-Contact-Center) article.

## October 1, 2024

## Allow outdial call in all Multimedia Profiles

This feature enables agents to multitask between handling digital contacts and making manual outbound calls simultaneously. When agents communicate through a digital channel, they should still have the ability to manually dial out to a phone number if needed. This capability is essential for situations where an agent needs to contact a colleague, or reach out to a customer by phone while still managing digital interactions.

For more information, see [Manage Multimedia Profiles](https://help.webex.com/en-us/article/nje7dhdb/).

## September 30, 2024

## Agent Skills-based filtering 

With this feature in Analyzer, you can filter existing or new custom reports based on agent skills. This allows for real-time identification of agents to improve staffing and queue management for customer interactions. 

For more information, see the 'Dashboard filters' and 'Design Dashboards' sections of [Cisco Webex Contact Center Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide).

## September 30, 2024

## Support for Dynamic Queues within Queue Task node in Webex Connect

Contact center flow developers working on digital channels can now configure the queue as a dynamic variable within the Queue Task node in Webex Connect. This enhancement allows developers to use a single node with a dynamic queue variable instead of multiple Queue Task nodes to route interactions into different queues.

For more information, see [Queue task](https://help.webexconnect.io/docs/queue-task).

## September 27, 2024

## Enhancing historical email contexts

Agents working on email channel will now have a better contextual history when handling email tasks. As part of this enhancement,

- When an agent replies to or forwards an email, the composer loads the quoted reply and allows agents to edit content as they would with any standard email client.
- Each reply or forward will have a message-level subject prefix ( RE: or FW: ) based on the action performed.
- In addition, we have increased the maximum character limit of an email from 25,000 to 500,000 characters (a combination of historical emails and current replies) to support this feature.

For more information, see [Manage-email-conversations](https://help.webex.com/en-us/article/j392h2/Manage-email-conversations).

## September 27, 2024

## Ability to delete digital channel assets with or without active conversations

Administrators can now delete digital channel assets within Webex Connect with active or closed conversations created against them. However, after deleting the asset, you must manually clean up the stale entry point.

## September 24, 2024

## Webex Contact Center CRM Connector for ServiceNow's Xanadu Edition

Enhance your contact center operations with the Webex Contact Center CRM Connector for ServiceNow's Xanadu Edition. Easily integrate your Webex Contact Center data into ServiceNow, providing your agents with a unified view of customer interactions. Simplify processes, improve efficiency, and deliver exceptional customer service.

For more information, see the [Integrate Webex Contact Center with ServiceNow](https://help.webex.com/en-us/article/54vvw)article.

## September 20, 2024

## Customer Journey Data Service (CJDS) APIs and Customer Journey Widget (Version 10)

We're excited to announce the General Availability for CJDS APIs and the Customer Journey Widget (version 10) for all our customers. These powerful tools are designed to elevate your customer journey management capabilities to the next level. 

**What is CJDS?**

CJDS is an innovative platform that empowers organizations to convert data into actionable insights, enhancing customer experiences across all interaction points. With CJDS APIs, you can: 

- **Listen**: Integrate seamlessly with any data source or third-party applications to capture and analyze diverse data streams.
- **Identify**: Create dynamic customer profiles by identifying and capturing key propensity drivers.
- **Analyze**: Utilize aggregation techniques to extract meaningful insights from all collected customer data.
- **Act**: Implement these insights to dynamically adjust Webex Contact Center workflows and personalize customer experiences at a granular level. Additionally, real-time actions can also be triggered using our rule-based mechanism.

**What is Customer Journey Widget (Version 10)?**

In conjunction with the APIs, we're also introducing the Customer Journey Widget—a groundbreaking tool that provides your agents with a comprehensive view of each customer's journey. This widget equips your agents with the insights they need to deliver personalized, efficient, and informed customer service, supported by a deep understanding of each customer's history. 

**Get Started with CJDS APIs and Customer Journey Widget (version 10)**

For more information on these features and how to get started, refer to the following resources: 

- [CJDS Overview Vidcast](https://app.vidcast.io/share/889c2cbf-51b2-4cc9-94f8-9143078dca83)
- [Customer Journey Widget Overview](https://app.vidcast.io/share/50d7fbc9-4fb3-4014-9337-98ccb2d874c3)
- [Journey - Gettings Started](https://developer.webex.com/webex-contact-center/docs/journey-getting-started)
- [Journey - API documentation](https://developer.webex.com/webex-contact-center/docs/webex-contact-center)
- [API Deep Dive Webinar](https://app.vidcast.io/share/434bfd8f-f783-4800-9e27-73026edb7553)
- [How to integrate journey widget with your agent desktop?](https://help.webex.com/tfcmrp)
- [Use Case Vidcast (Personalized Customer Experience)](https://app.vidcast.io/share/0052e897-6d7a-4de5-8795-8926f0516503)
- [Use Case Vidcast (Digital Channels & Webpage Use Case)](https://app.vidcast.io/share/b90e50f4-d085-416c-9aae-29426fa18f53)
- [GitHub Link for API Samples](https://github.com/WebexSamples/webex-contact-center-api-samples/tree/main/customer-journey-use-cases)

## September 20, 2024

## View consult session recordings in Supervisor Desktop

With this feature, you can access recordings of consult call sessions, including consult to agent, consult to queue, consult to dial number, and consult to entry point. The consult session recordings have a separate playback option within the main call recording in Supervisor Desktop. This allows supervisors to review and analyze the details of the consult call sessions, and identify areas for training, coaching, and efficiency improvements.

For more information, see the [Supervise your agents and teams](https://help.webex.com/en-us/article/n408h9cb/Supervise-your-agents-and-teams#play-call-recording) article.

## September 13, 2024

## Topic Analytics

We are thrilled to announce the general availability of Topic Analytics following a successful beta phase with over 30 customers. This AI feature, powered by large language models (LLMs), is now accessible to all customers on Flex 3\. With Topic Analytics, you can:

1. Identify the primary reasons your end customers are calling the contact center.
2. Filter interactions by specific topics.
3. Access detailed interaction information, including transcripts, call recordings, and contact details.  
 For more information, see [here](https://help.webex.com/article/v72wjab).

## September 4, 2024

## Current Usage Card - Agent & IVR on Control Hub's Contact Center Landing Page

We are excited to announce that the newly improved License Current Usage Card on Control Hub's Contact Center Landing Page is now available across all Webex Contact Center data center regions: ANZ, CA, EU, JP, UK, SG, and US.

This enhanced card enables Administrators and users with access to the Contact Center Landing Page to view the usage of Premium and Standard Agent Licenses, as well as IVR licenses, within their subscription during the current billing cycle. The card displays key information, including the current billing cycle, the number of licenses purchased, and whether the usage is over or under the allowed amount.

Additionally, the Agent and IVR usage cards provide access to the Daily Detail reconciliation view, which facilitates viewing and downloading daily usage data from the current and previous billing cycles.

We are pleased to announce that we have achieved usage data and billing parity across all seven Webex Contact Center regions.

Thank you for your continued support as we enhance our services to provide you with comprehensive and transparent usage information.

## September 2, 2024

## Rank Queues

Webex Contact Center provides an ability to rank queues for each team. The queue ranking feature allows administrators and supervisors to rank the queues so that contacts from the queues are offered to agents in ranked order. For example, suppose that TeamA can take calls from queues Billing and Sales. You can use queue ranking to assign a higher rank to the Billing queue, so when calls come into the queues, those from Billing will be routed to TeamA ahead of those from Sales.

If you assign a rank only to some of the queues, calls in those queues will take precedence over calls in the queues for which no priority is specified.

For more information, see [Rank queues](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#task-template%5F833d3060-2462-42b5-bee6-cb17981a3656).

## August 27, 2024

## Agent Interaction Duration in Team Performance Details

You can keep track of how long your agents spend with customers using the new Interaction Duration column in the Team Performance Details table on the Supervisor Desktop. This shows the time agents spend in all statuses except wrap-up.

By monitoring the Interaction Duration column, you'll quickly see if an agent is spending too much time with customers. This is especially useful for newer agents who might need extra help. You'll get a complete view of how an agent handles a customer, which is crucial for making decisions about mid-call monitoring. This ensures agents are efficient and get help when needed, keeping productivity high and supporting your team effectively.

Interaction Duration is shown for both primary and consulted/conferenced agents from the moment they are consulted. This gives you a full view of the support provided, ensuring all contributing agents are accounted for in the customer experience.

For more information, see the Team Performance Details section in the [Supervise your agents and teams](https://help.webex.com/en-us/article/n408h9cb/Supervise-your-agents-and-teams#team-performance-details) article.

## July 31, 2024

## Automated Provisioning and User Syncing for Webex Connect

- Webex Connect will be automatically provisioned at the same time as Webex Contact Center. Admins will no longer need to navigate to the digital section of Control Hub to initiate provisioning. The Webex Connect URL will show in control hub for new and existing Webex Contact Center tenants. This will allow for admins to navigate easily to connect across all their tenants without having to bookmark the URL.
- All partner admins and the first customer admin created will be able to navigate into connect to start configuring immediately without needing to create a separate user login. User management for these personas are synced between Contact Center and Connect.
- Any customer admin created beyond the first admin will need to be added in Control Hub first then Connect. The Webex Contact Center and Webex Connect team are working to sync these admins in a future release.

For more information, see [here](https://help.webex.com/en-us/article/n954r0k/Set-up-digital-channels-in-Webex-Contact-Center).

## July 29, 2024

## Dialogflow CX Integration for Digital Channels

Google Dialogflow CX Integration is now generally available on Webex Contact Center for digital channels. 

Dialogflow CX is an advanced version of Dialogflow ES. While Dialogflow ES is suitable for simpler chatbot applications, Dialog flow CX is tailored for complex, multi-turn conversational experiences, especially in enterprise-level contexts.

Dialogflow CX integration is currently available on request through the backend team. Please reach out to your Customer Success Manager to request access and supporting material.

## July 26, 2024

## Cisco Text-to-Speech (TTS)

We’re thrilled to announce the arrival of a new feature called Cisco TTS (Text-to-Speech) for all Flex 3 subscription-based customers on our Next Generation media platform. With TTS, users can enjoy out-of-the-box text-to-speech capabilities, unlocking a whole new level of convenience and accessibility. With this capability, customers can use static or dynamic text (content), synthesize it, and get speech content that enhances the end-user experience with high-quality voices such as Neural TTS. 

For more information, see [Text-to-Speech-(TTS) in Webex Contact Center](https://help.webex.com/en-us/article/ntkjqhw).

## July 24, 2024

## Dynamic Variable Support for GoTo and Business Hours on Flow Designer

The Webex Contact Center Flow Designer now supports the use of dynamic variables for GoTo and Business Hours activities. This enhancement enables flow developers to specify the behavior of these activities through variables, allowing for more effective reuse of flows. The primary advantage of this feature is that developers can create a single flow with these activities and dynamically modify their functionality at runtime with the help of variable support. Additionally, the GoTo Activity has been enhanced to offer improved error handling capabilities.

For more information see, GoTo and Business Hours activities in Activites in Flow Control section of [Webex Contact Center Setup and Administration Guide](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#Cisco%5FConcept.dita%5F5ba6029e-c256-4c16-8fbf-40f8370bd968).

## June 27, 2024

## Introducing Activity Wait Audio on Flow Designer for HTTP(s) delays

Flow Designer now supports interruptible and partial audio playback for activities awaiting completion, such as HTTP requests. This feature enhances customer experience by providing audio feedback during request processing or delays. Designers can apply this setting globally at the flow level, automatically affecting all HTTP activities within the flow and any subflows. Subflows will inherit this activity wait setting from the invoking flow, ensuring consistent audio feedback across all levels.

For more information see, Activites Wait Settings in the HTTP Request section of [Webex Contact Center Setup and Administration Guide](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#Cisco%5FGeneric%5FTopic.dita%5Fb1192550-38d4-46e5-be3d-2119794def93).

## June 25, 2024

## Empowering you with Customer Journey Data Services

This feature is currently in Limited Availability (LA) for the US region. It is extended to the EMEA region as well.

Customer Journey Data service (CJDS) is a next-generation customer journey management service empowering organizations to go from Data to Insights to Action. CJDS enables businesses to capture customer journeys across any channels/application, identify insights and take real-time actions to provide an excellent customer experience.

With CJDS, customers can access our APIs that focus on key aspects of the customer journey.

- Listen: Integrate with any data source or third-party applications to listen to disparate data sources.
- Identify: Create a dynamic customer profile capturing propensity drivers.
- Analyze: Apply different aggregation techniques to all customer data collected.
- Act: Use the data/insights within CJDS to dynamically change the flow within Webex Contact Center Flow Control and personalize the customer experience at a granular level. These insights are visible to customer-facing teams in real time through Agent Desktop via the journey widget.

For more information, see [here](https://developer.webex.com/webex-contact-center/docs/journey-getting-started).

## June 25, 2024

## New Customer Journey Widget (version 10)

This feature is currently in Limited Availability (LA) for the US region. It is extended to the EMEA region as well.

We're rolling out the Customer Journey Widget—a tool designed to revolutionize the way your team engages with customers. This isn't just data; it's a window into each customer's world, showing you every step they've taken with your brand. Your agents will soon be able to provide a service that's not just efficient, but personal and informed by a complete understanding of the customer's history.

For detailed instructions on enabling and customizing the widget, please refer to the instructions provided [here](https://help.webex.com/en-us/article/tfcmrp/Customer-Journey-Widget-Version-10-for-Webex-Contact-Center). If you're interested in understanding the widget from an agent's perspective, you can find comprehensive documentation [here](https://help.webex.com/en-us/article/njhk0zg/Understand-the-Customer-Journey-widget).

How to use? Click [here](https://app.vidcast.io/share/50d7fbc9-4fb3-4014-9337-98ccb2d874c3) for the vidcast.

## June 18, 2024

## AWS Direct Connect for Webex Contact Center

AWS Direct Connect is a networking service that provides an alternative to using the internet to connect to AWS including Webex Contact Center. Using AWS Direct Connect, data that would have previously been transported over the internet is delivered through a private network connection between your facilities and AWS.

In many circumstances, private network connections can reduce costs, increase bandwidth, and provide a more consistent network experience than internet-based connections.

Webex Contact Center supports AWS public VIFs only and is not compatible with private VIFs. Public VIFs end the connection in the AWS network. From there, traffic to the Webex Contact Center endpoints is routed through the AWS network.

For more information, see [AWS Direct Connect in Webex Contact Center](https://help.webex.com/en-us/article/f6tp57/).

**Pricing**

AWS Direct Connect is a cloud network service available from Amazon. For information related to pricing, see [AWS Direct Connect Pricing](https://aws.amazon.com/directconnect/pricing/).

## June 14, 2024

## Interactive Voice Response Control Hub Survey Reporting Enhancement 

We are excited to announce that WxCC’s survey reporting in Control Hub now offers detailed information on agents, queues, sites, and more for each survey question. This enhancement will accelerate your data-to-insights process by simplifying the slicing and dicing of survey results. For more information see [here](https://help.webex.com/en-us/article/nlu4x20/Experience-Management---Interactive-Voice-Response-Surveys-for-Webex-ContactCenter#download-survey-responses).

## June 5, 2024

## Supporting Apple Messages for Business (AMB)

Webex Contact Center is set to enhance customer engagement by integrating with Apple Messages for Business (AMB), enabling brands to connect with customers directly through Apple's ecosystem. This integration will offer a variety of rich interactive messaging options, such as list pickers, time pickers, forms, and quick replies, which are perfect for brands aiming to elevate their customer experience.

With these features, administrators will have the ability to set up and deploy automated customer journeys using Webex Connect’s Flow Builder. Additionally, they can configure an escalation path to seamlessly transfer conversations to a live agent within the Contact Center when needed.

To explore the full capabilities of this channel and how it can benefit your brand, click [here](https://register.apple.com/resources/messages/messaging-documentation/#introduction) for more details.

To start with, Webex Contact Center will be supporting the [required features prescribed by Apple](https://register.apple.com/resources/messages/msp-rest-api/#required-features) for BOTS and Contact Center.

For more information, see [Set up digital channels in Webex Contact Center](https://help.webex.com/en-us/article/n954r0k/Set-up-digital-channels-in-Webex-Contact-Center) and [Supported attachment types for digital channels in Webex Contact Center](https://help.webex.com/en-us/article/fqwwo6/Supported-attachment-types-for-digital-channels-in-Webex-Contact-Center).

## May 31, 2024

## Provisioning and Subscription Simplification for Webex Connect and Engage

- Reduced errors and time to provision through an improved API implementation for Webex Connect and Engage provisioning.
- Webex Connect and Engage tenant URLs are displayed in both the quick links section and digital channels section of Control Hub for quick access. Connect URLs will only show in newly created tenants.
- Webex Connect Subscription ID is updated to match the latest Webex Contact Center subscription for seamless billing.

## May 30, 2024

## Reset Longest Available Agent status once a contact is received

Webex Contact Center sends the contact based on the Longest Available Agent status (LAA Routing). Longest Available Agent status is reset for all channels of an agent when one contact is assigned to an agent. In an agent surplus scenario, the next contact of any media type queued will be assigned to the next longest available agent.

This has been changed from the earlier way of assigning contacts where we used to fill up the channel capacity before assigning the contacts to the next agent.

For more information, see [Longest available agent (LAA)](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#concept-template%5Fda716171-9887-4ea7-b816-5fc727ebf6fe).

## May 21, 2024

## Custom event handling for Digital Contact Close Event

This enhancement for digital channels provides a mechanism to indicate to the system not to close and clean up a contact on the agent end. This is needed in situations where automated messages need to be sent to the client post agent end but before the contact is closed.

The custom flow provided by flow developer takes the responsibility of closing the task. 

## May 16, 2024

## Status Indicator for Agent Desktop using WebRTC

As a part of WebRTC integration with Webex Contact Center Agent Desktop, a new status indicator is introduced. When an agent logs in using a browser, the status indicator displays the status of the voice channel as up, down, or in a connecting state.

## May 16, 2024

## Webex Calling Agent Support - with vPOP PSTN Support - inbound vPOP Call to WxC Agent support (mixed mode deployment)

Webex Contact Center supports Webex Calling-based agents with Voice POP and Webex Contact Center PSTN. If your organization is configured to use Voice POP or Webex Contact Center PSTN, then Webex Contact Centre now also supports routing of calls to Webex Calling-based agents.

To use this feature, your organization must have a Webex Calling subscription and your agents must be using a phone or Webex app registered to Webex calling within the same organization. Webex Contact Centre routes all agent calls to Webex calling when the agent number or extension is a Webex Calling on-net number or extension. If the agent number or extension is not a Webex Calling on-net number or extension, then the call is routed back to VPOP/WxCC PSTN trunk/service.

For more information, see [Set up voice channel for Webex Contact Center](https://help.webex.com/en-us/article/2dputx/Set-up-voice-channel-for-Webex-Contact-Center#section%5Fp4m%5Fmkx%5Fdbc).

## May 16, 2024

## Synchronization of Webex Calling state with Webex Contact Center state

This feature allows Administrators to configure the synchronization of agents’ states between Webex Calling and Webex Contact Center. This eliminates the need for agents to manage their state across both applications by setting themselves as unavailable when engaged in non-contact center activities. This, in turn, lowers the chance of 'RONA' (Redirection on No Answer), providing a better experience for the caller and improving routing efficiency.

For more information, see [Manage desktop profiles](https://help.webex.com/en-us/article/nvaf71f/Manage-desktop-profiles) and [Use Webex App in Webex Contact Center Desktop](https://help.webex.com/en-us/article/n444dol/Use-Webex-App-in-Webex-Contact-Center-Desktop).

## May 16, 2024

## Bridge Transfer in Flow Designer

Cisco's new capability to Flow Designer is called Bridged Transfer. Bridged transfer is a new flow activity that allows a flow architect to add a managed transfer to a third-party destination within flow builder. The typical use case for this activity would be to extend a call out to a third-party IVR service.

Bridged Transfer can transfer a call based on a static number or use the value of a flow variable. It also provides a timeout, if the third-party doesn't answer the call. On successful completion of the transfer (when the third party hangs up), the flow resumes in Webex Contact Center. If the transfer fails for reasons like 'busy' or 'unavailable.' the activity provides a result variable with the failure.

Bridged Transfer complements the existing Blind Transfer activity by enhancing the capabilities of a flow.

For more information, see Bridged Transfer section in [Webex Contact Center Setup and Administration Guide](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide).

## May 16, 2024

## Enhanced E911 Support for WebRTC Users

With the integration of WebRTC support, administrators can utilize the Redsky Emergency solution, ensuring compliance with U.S. and Canadian federal regulations. This feature will enable you to provide precise location information for emergency calls, seamlessly integrating with our robust contact center solution. 

For more information, see [Provision Emergency Calling in Webex Contact Center for Administrators](https://help.webex.com/en-us/article/nvfbjts/Provision-Emergency-Calling-in-Webex-Contact-Center-for-Administrators).

## May 16, 2024

## WebRTC support for Webex Contact Center

Webex Contact Center is introducing WebRTC (Web Real-Time Communication) support for Agent Desktop using the Next Generation Media Platform (RTMS).

With this feature, agents can use Agent Desktop with a headset without an external phone or extension number. Agent Desktop supports all current voice functionalities such as hold, retrieve, transfer, and conference. Features such as mute, auto-answer, and dial pad are added to Agent Desktop to facilitate browser-only use. Also, when an agent signs in using a browser, a new WebRTC status indicator shows whether the voice service is up, down, or in a connecting state.

This gives customers greater freedom and flexibility in deploying agents, minimizing costs, and reducing onboarding times to deploy or expand a new contact center.

For more information, see [Sign in to Agent Desktop](https://help.webex.com/article/n6lmci8/).

## May 14, 2024

## Refresh intervals and High Cardinality fields

During custom report creation, selecting high cardinality fields, such as Agent Session ID and/or Contact Session ID as row segments and/or column segments triggers a UI prompt with additional information. This pop-up indicates that appropriate filters need to be applied to these two high cardinality fields for an optimal reporting experience.

Realtime Reports supports refresh intervals starting from 5 seconds and above for better optimization and a seamless experience. Existing reports with refresh intervals less then 5 seconds defaults to 5 seconds as the new refresh interval, and it can be changed to other available values greater than 5 seconds. New reports default to 5 seconds as the refresh interval, and it can be changed to other available values greater than 5 seconds. Refresh intervals of less than 5 seconds is not available for any reports, to improve reporting performance. For more information, see [Cisco Webex Contact Center Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide).

## May 10, 2024

## Ongoing accessibility upgrades for Agent Desktop and Supervisor Desktop

Our focus has been on enhancing the user experience for all agents and supervisors, facilitating smooth navigation and interaction. We're refining screen reader behavior, optimizing tabbing order, and enhancing the color contrast of elements. These continuous improvements ensure that agents of all abilities can seamlessly engage with the platform, enabling them to deliver exceptional customer service experiences. With these upgrades, supervisors can efficiently oversee operations and monitor their teams with ease, fostering a more inclusive work environment.

## May 10, 2024

## Synchronize agents' state between Webex Contact Center and Microsoft Teams

You can configure a more seamless communication workflow with the two-way presence synchronization feature. This new update allows you to synchronize the state of your agents between Microsoft Teams and Webex Contact Center. This reduces the need for context switching and manual status updates, thereby minimizing 'RONA' (Redirection on No Answer). For more information, see [Integrate Webex Contact Center with Microsoft Teams](https://help.webex.com/en-us/article/n1sztxbb/Integrate-Webex-Contact-Center-with-Microsoft-Teams).

## May 9, 2024

## Flow Designer usability enhancements

Flow Designer now features several usability enhancements that improve the flow developer experience and maximize efficiency while designing orchestration workflows:

- Curved links are now the default, with error paths highlighted, accompanied by an extended color palette to easily differentiate between links.
- Preview flows while connecting them in a GoTo activity. These flows are now accessible via hyperlinks and can be previewed when selected as a target. For more information, see [GoTo Activity](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#Cisco%5FReference.dita%5F73019837-1eec-4f05-b490-7b9ae5568683) section in Flow Designer guide.
- The enhanced percentage allocation activity now allows developers to easily deactivate existing allocations by supporting 0% allocations for exit paths that are no longer needed. For more information, see [Percentage Allocation](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#section%5Fylt%5Fbmq%5Ffcc) section in Flow Designer guide.
- A new Click-to-Connect toggle saves time when connecting activities, enabling developers to simply click on activities to link them, thereby streamlining the process of connecting activities.

## May 8, 2024

## Track Agent and IVR License Usage with Reconciliation View

This feature is in Limited Availability (LA) in US, UK, and EU regions. We’ll enable the feature for a customer only after the necessary review and agreement.

Control Hub Users, the ability to see daily Agent and IVR license usage is now available in our 'reconciliation view' feature. This update to the Control Hub, Contact Center 'Current Usage Cards' lets you view your current usage against your subscription each day, giving you a clear picture of where you stand.

This feature is initially accessible in the US, UK, and EU regions. Full access will gradually extend to all eligible users within these regions, simplifying license management for Contact Centers. Global rollout will follow later this year.

For more information, see the [Cisco Webex Contact Center license consumption and reporting](https://help.webex.com/en-us/article/n9vhuwe/Webex-Contact-Center-license-consumption-and-reporting) help article.

## May 7, 2024

## Flow Import and Export APIs on Developer portal

The Webex Contact Center Developer Portal offers Flow Import and Export APIs to import and export flow configurations programmatically. This simplifies the management of a large number of flows and supports robust development workflows. Developers can import flows into their system by submitting a JSON configuration file, allowing for the creation or updating of multiple flows at once. Developers can export flows from their system into a JSON configuration file, useful for backup purposes or for transferring configurations between environments.

For more information, see the [Developer portal](https://developer.webex.com/webex-contact-center/docs/api/v1/flow) documentation.

## May 6, 2024

## New Customer Journey Widget (version 10)

This feature is in Limited Availability (LA) US-only. We’ll enable the feature for a customer only after the necessary review and agreement.

We're rolling out the Customer Journey Widget—a tool designed to revolutionize the way your team engages with customers. This isn't just data; it's a window into each customer's world, showing you every step they've taken with your brand. Your agents will soon be able to provide a service that's not just efficient, but personal and informed by a complete understanding of the customer's history.

For detailed instructions on enabling and customizing the widget, please refer to the instructions provided [here](https://help.webex.com/en-us/article/tfcmrp/Customer-Journey-Widget-Version-10-for-Webex-Contact-Center). If you're interested in understanding the widget from an agent's perspective, you can find comprehensive documentation [here](https://help.webex.com/en-us/article/njhk0zg/Understand-the-Customer-Journey-widget).

How to use? Click [here](https://app.vidcast.io/share/50d7fbc9-4fb3-4014-9337-98ccb2d874c3) for the vidcast.

## May 3, 2024

## Progressive Campaign (CPA Release)

Dialing technologies have changed the way contact center agents work. They’ve eliminated the need for operators to manually dial all the numbers on their call lists. Not only does this save your team members from a tedious process, but dialing technologies allow your business phone system to be more productive by increasing workflow automation. The ask from the businesses is to improve the efficiency of agents by allowing them to make more outbound connections every day. 

This feature is an enhancement to Progressive (1:1) dialer and will enable administrators to define the pacing mode upto 10 and also enable Call progress analysis for maximum outreach. This functionality is crucial for businesses aiming to actively engage with customers, address concerns, boost sales in an efficient manner.

For more information, see [Configure Voice Outbound Campaign Modes in Webex Contact Center](https://help.webex.com/en-us/article/nqu2kub/Configure-Voice-Outbound-Campaign-Modes-in-Webex-Contact-Center).

## May 3, 2024

## Outbound predictive campaign

Customers now have the option to implement more robust proactive outreach strategies leveraging predictive campaigns, which will help organizations connect with their end customers in a more timely and effective manner.

Predictive campaigns offer a much higher level of efficiency, and their benefits encompass lead generation, collections, and customer service. A predictive dialer will offer benefits such as filtering out busy signals, disconnected numbers, answering machine detection, and voicemails, ensuring that agents only connect with live agents. Predictive campaigns will give you the ability to define the minimum and maximum dialing rate so that the system can dial out the number of calls based on the abandoned rate configured. This feature will help administrators define predictive dialer parameters and conduct call progress analysis to manage outbound campaigns efficiently.

For more information, see [Configure Voice Outbound Campaign Modes in Webex Contact Center](https://help.webex.com/en-us/article/nqu2kub/Configure-Voice-Outbound-Campaign-Modes-in-Webex-Contact-Center).

## May 1, 2024

## Subflows in Flow Designer

Flow developers can build subflows for independent logical functionalities and reuse them across multiple main flows. This makes it easy to build and manage large complex flows with ease. It also helps flow developers to collaborate more effectively with different teams independently developing subflows.

**_Subflows in Webex Contact Center_**

For more information about how to create and manage subflows, see [Subflow](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#concept-template%5F2812e465-bde2-4bf8-b133-b64bbddff95b) in Flow Designer guide.

## April 30, 2024

## Enforce role-based access controls for Flow Designer

Administrators can enforce View and Edit access controls for Flow Designer centrally on the User Profile level on Control Hub.

Also, flows can now open in read-only mode by default, preventing unintentional changes. Users with Edit access on the User profile will be able to toggle Edit mode and make changes to flows.

## April 29, 2024

## Partner to Partner (P2P) transfer support

Partner (P2P) transfer feature is now available for Flex and Flex 3.0\. This feature allows partners to move a customer's subscription to a new partner. For more information on how to initiate a subscription transfer, see [help document](https://salesconnect.cisco.com/sc/s/simple-media?vtui%5F%5FmediaId=a1m8c00000nir1mAAA).

Customers using Webex Contact Center 1.0 must upgrade to the latest version of Webex Contact Center to use P2P feature.

## April 18, 2024

## Improvements to Webex Contact Center Self-Service Trials

Webex Contact Center is making the following improvements so that it can scale the trials to more partners and provide better support:

- [Comprehensive documentation](https://help.webex.com/en-us/article/7eatkw/Webex-Contact-Center-Self-Service-Trials) on what's supported versus what's not in a trial and whom to reach out to for support
- Contact Center AI Customer Experience (CCAI CX) is now available for trials
- Minor experience updates were made to trial provisioning flow

## April 5, 2024

## Support internal extensions as customized ANI

Automatic number identification (ANI) is a technology used in contact centers to verify the caller. ANI identification becomes very important for use cases while reaching out to customers for follow ups or agents reaching out backend staff such as non-agents, Knowledge workers, and SMEs for consulting. This feature makes sure that there are less number of rejection of calls by the backend staff. This feature will help the flow developers to configure the flow and decide the ANI customization for an Internal call. For more information, see [Set Caller ID](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#wxcc-setcallerid).

Admin Experience

This feature will help the admins to define the backend staff who are eligible to see the agent extensions. 

Flow Experience

This feature will help the flow developers to configure the flow and decide the ANI customization for an Internal call.

## March 29, 2024

## Webex Contact Center AI Beta: Agent Burnout Management and Auto CSAT

We are excited to announce the Agent Burnout Management and Auto CSAT beta features. These features are designed to enhance agent wellness and productivity

Agent Burnout Detection feature leverages end-to-end data in the Webex Contact Centre platform to detect the agent's stress levels in real-time. We have partnered with Thrive Global to play a ‘Reset’ break to agents when they are experiencing high-stress levels detected by the Cisco Agent Burnout Detection AI model.

Auto CSAT predicts post-interaction CSAT for all customers, empowering contact centers to leverage every interaction for insights and decision-making, ultimately maximizing customer satisfaction and agent performance.

You need to sign up on the [Webex Beta Portal](https://gobeta.webex.com/key/contactcenter?%5Fgl=1%2Adojowk%2A%5Fgcl%5Fau%2ANzk4NzQ2MTguMTcxMDc0NjI4NQ..%2A%5Fga%2AMTYyOTk1NTg1LjE3MTA3NDYyODY.%2A%5Fga%5FKP8QEFW4ML%2AMTcxNjk2MTY2Mi4xMDAuMS4xNzE2OTYxNjY4LjU0LjAuMA..) and fill in the participation survey to express your interest in these beta features. 

## March 27, 2024

## Effortless Supervisor Number Sharing for Hotdesking

You can now share dial numbers without the hassle of unique logins. If you're engaged in monitoring activities and need to log out, the next supervisor can pick up right where you left off, with monitoring requests directed to their station. This ensures that oversight is continuous and that your team's performance remains at its peak, no matter who is on duty.

## March 26, 2024

## Webex Contact Center launch in Singapore data center 

Webex Contact Center services is now launched from a brand new data center located in Singapore. You will now have the option to choose Singapore as your country of operation. This will enable you to provision your tenant directly in the Singapore data center. It will provide dedicated Media Pops based out of Singapore, making it ideal for our valued customers in the region requiring voice media services. 

For more information, see [Data Locality in Webex Contact Center](https://help.webex.com/en-us/article/n0p6xa1/Data-Locality-in-Webex-Contact-Center).

## March 13, 2024

## Introducing the Actions Widget for Microsoft Dynamics and ServiceNow connectors

The new Actions Widget in Microsoft Dynamics and ServiceNow connectors empowers your agents during voice interactions. Enhance workflow efficiency by providing quick access to actions like View/Edit Activity Record, Associate to Activity Record, Create Case, and Live Case Notes.

## March 13, 2024

## Streamlined Data Entry – Microsoft Dynamics

You can easily set up variable mappings between Microsoft Dynamics and Webex Contact Center. In a no-record match scenario during screen-pop, agents will receive a pre-populated contact form, eliminating manual data entry.

## March 13, 2024

## Consult or transfer voice calls to experts within your Microsoft Teams organization with Presence lookup

You can configure Microsoft Teams experts lookup for your agents who need to consult or transfer a voice call to experts, ensuring efficient call transfers and consultations. This directory lists experts with information such as presence, job title, department, and business phone, ensuring that agents can search and choose the right expert for the call.

## March 11, 2024

## Set Contact Priority

Digital contact prioritization enables flow designers to assign priority to inbound digital contacts in a queue. Flow designers can use the Queue Node to assign a priority to a contact. When an agent services multiple queues, the contact with the highest priority across all queues of the same media type is assigned to the agent. If two or more contacts across multiple queues (same media type) have the same (highest) priority, the contact waiting for the longest duration is assigned first to the agent.

Priority ranges from minimum 10 (default priority) to maximum 1.

For more information, see _Implement skills-based routing and contact priority for digital channels_ section in [Set up digital channels in Webex Contact Center](https://help.webex.com/en-us/article/n954r0k/Set-up-digital-channels-in-Webex-Contact-Center) article.

## March 5, 2024

## Contact Center admins can search channels by Dial Number (DN) in Control Hub

Admins can now search for Channels in Control Hub by entering partial or full Dial Numbers in the search bar. Note that partial search requires, at the minimum, three characters to produce results.

## March 5, 2024

## TLS 1.3 Support for Webex Contact Center

Webex Contact Center now works with both TLS 1.3 and TLS 1.2\. This new feature mainly works on our cloud load balancers. Therefore, microservices or applications that use the load balancer don't need to change anything. Now, any external clients that use TLS 1.3 or TLS 1.2 can use the service.

## February 29, 2024

## Agent & IVR license Usage on Control Hub’s Contact Center Landing Page

This feature is currently only in the US, UK, and EU regions. 

Introducing the newly improved License Current Usage Card on Control Hub’s Contact Center Landing Page. 

This card allows Administrators, and anyone with access to the Contact Center Landing Page to select to see the amount of Premium and Standard Agent Licenses, or the IVR license usage that their Subscription has used during the Current Billing Cycle. 

It indicates what the billing cycle is, how many Licenses they purchased, and if they are over or under on their allowed amount.

## February 26, 2024

## Support for Webex Contact Center CRM Connector in ServiceNow's Vancouver Edition

The Webex Contact Center ServiceNow Connector is now available for installation in your Vancouver edition from the ServiceNow store. This means you can easily integrate and enable your agents manage customer interactions, enhancing the overall efficiency and effectiveness of your contact center operations.

For more information, see [Integrate Webex Contact Center with ServiceNow](https://help.webex.com/en-us/article/54vvw).

## February 26, 2024

## Record caller utterance

This feature allows the customers to effortlessly capture end-caller utterances during an IVR interaction and refer to the recorded utterances as part of their flow at a later point. 

With this feature, you can create a more engaging and user-centric IVR experience by leveraging it for playing custom prompts or personalized greetings and many more use cases. 

For more information, see [Record activity](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#record-activity).

## February 22, 2024

## Barging in on a call

With the new Barge-In feature, you can configure permissions for supervisors to join an ongoing call between an agent and a customer. It's all about empowering your supervisors with real-time intervention, ensuring the highest level of customer service, and providing a learning experience for your agents.

For more information, see Desktop Experience table in [Manage User Profiles](https://help.webex.com/en-us/article/n524f2m/Manage-user-profiles-of-contact-center-users-in-Webex-Contact-Center) article.

## February 13, 2024

## Search API

Search API will give you a GraphQL endpoint to extract the exact dataset you need. This means easier reporting and deeper insights for you, and no impact on your current workflow. 

For more information, see [Search](https://developer.webex.com/webex-contact-center/docs/api/v1/search/search).

## February 13, 2024

## New On-hold Music Available for Contact Center

New on-hold music is available for your Webex Contact Center tenant. For new customers, this new audio file will be the default on-hold music when creating your tenant. The old on-hold music will also be available for use. For existing customers interested in using the new on-hold music, please contact your Customer Support Manager (CSM) or Partner Support Manager (PSM) to retrieve the audio file.

## February 13, 2024

## Copying Webex Contact Center Settings

Admins can now copy an existing Contact Center setting directly in Control Hub (e.g. copying an existing Multimedia Profile) by selecting the copy option icon next to the setting. When attempting to copy, the admin will be brought to the setting creation screen with the copied setting details already entered. The admin can then edit the details of this new setting entry as they see fit.

To copy a Flow, the copy option will be contained within the settings menu.

## February 6, 2024

## Apply version labels to a flow

Webex Contact Center supports the creation of flow environment version labels that can be associated with Entry Point mappings. This feature provides the flexibility for flow developers to attach a version label to a specific flow, instead of the default Latest version. This enables flow developers to develop and test new flow enhancements without impacting production calls.

When you publish a flow, you can associate a version label such as Live, Test, or Dev with the new flow version in addition to the flow name. Existing flows in the system will be marked with the Live version label. Latest is the default version label that you can't remove from a flow version during publishing.

**_Flow Version Label_**

**_Entry Point Flow Label_**

For more information, see [Apply version labels to a flow](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#flow-versioning).

## January 31, 2024

## Digital channels anti-malware capabilities

Malware scan for digital channels is now available on Webex Contact Center.

Webex Contact Center digital channels is now equipped with anti-malware capabilities that scans all incoming and outgoing attachments for virus and malware signatures. This offers additional protection to the cloud and reassures the safety and stability of the Contact Center service to our customers.

Please update your digital channel Webex Connect flows to take advantage of the additional messaging that can be provided upon malware detection. Migration documents and upgraded sample template flows are available in [Github](https://github.com/CiscoDevNet/webexcc-digital-channels).

For more information, see [Setup digital channels in Webex Contact Center](https://help.webex.com/en-us/article/n954r0k/Set-up-digital-channels-in-Webex-Contact-Center) help article.

## January 30, 2024

## Virtual Agent - Voice with Dialogflow ES

Webex Contact Center is offering an enhanced integration experience for the Dialogflow ES feature. This feature is exclusively available to customers whose tenants have been upgraded to an enhanced media platform. Using this, they can enjoy a smooth and standardized onboarding process for our Contact Center AI (CCAI) services using our state-of-the-art Control Hub and the cloud-based Google CCAI connector.

Control hub administrators would now have the capability to provision the Dialogflow ES Virtual Agent feature using the conversational profile and Google CCAI Connector. With the config ID generated and the corresponding mapping to the Virtual Agent activity, flow developers can efficiently guide the IVR flow and make the most of AI services.

For more information, see [Configure Virtual Agent-Voice in Webex Contact Center.](https://help.webex.com/en-us/article/n6gaghu)

## January 30, 2024

## Recording of consult calls

Cisco Webex Contact Center is introducing the recording of consult calls. When an agent requires assistance during a live call and consults other agents, the conversations between the agents are recorded. This enhancement supports four consult call types - agent to agent, agent to queue, agent to dial number, and agent to entry point mapped to a dial number. This feature enables the supervisor to revalidate the advice provided to the agent and provide relevant coaching to improve the overall performance of the agent. Consult call recordings are created as child files to the main recording and follow the call recording configuration.

This feature is available only for Next Generation media platform customers and available only on the Recording Management portal.

## January 30, 2024 

## Enhancement of Captures API to include consult call recordings

During a live call, when an agent consults with another agent or queueor dialed number, or an entry point mapped to a dialed number, Webex Contact Center enables the recording of consult calls. These consult call recordings are automatically available through the Captures API, as long as the customer call recording is enabled. It does not require any new configuration.

These agent consult call recordings facilitate quality management for the supervisor. It enables WFO providers like Calabrio or Verint to extract the consultation recordings and reproduce them in their respective dashboards for customer consumption.

For more information, see [Manage call recording schedules](https://help.webex.com/en-us/article/ejatso/Manage-call-recording-schedules) help article.

## January 30, 2024

## Recording silence when caller is placed on hold

During an active call, when a caller is placed on hold by an agent, the caller listens to music or informational/promotional announcements. The generated media file records music (or announcements) during hold time. This enhancement of recording silence provides the tenants with an option to enable or disable recording silence during hold time.

By default, the generated media file records silence. 

This feature is available for all Next Generation voice media platform customers. 

## January 30, 2024 

## Update tenant timezone in Control Hub

Webex Contact Center administrators can now change the timezone of their tenant directly in Control Hub. This timezone change only impacts your voice channels and doesn't apply for digital channels. For instructions on how to alter the timezone in the Control Hub, see [Tenant Settings](https://help.webex.com/en-us/article/ngc1xsy/Set-up-a-tenant-in-Webex-Contact-Center) help article.

## January 23, 2024

## Simplify metrics and align definitions for 'Total Handled' and 'Total Abandoned' Calls between Supervisor Desktop and Analyzer

Understanding 'Total Handled' and 'Total Abandoned' calls just got simpler. We've aligned these metric definitions between the Supervisor Desktop and Analyzer for a seamless experience. You can now review the updated definitions in the [View your contact center KPI cards](https://help.webex.com/en-us/article/63s0bj/View-your-contact-center-KPI-cards) article.

## January 18, 2024

## Create reports with specific time spans

With the introduction of the new Timepicker feature, Contact Center Reporting and Analytics (Analyzer) enables users to create both stock and custom reports for a specific time span. This facilitates quick and efficient report creation, ensuring a seamless review process for operational decision-making and improving overall customer experience.

For more information, see [Timepicker](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide).

## January 16, 2024

## Background Noise Removal for Contact Center Agents

Webex Contact Center introduces the removal of background noise arising from customers during a conversation. Agents receive calls from customers through PSTN-based devices from different environments. Excessive background noise makes it difficult for agents to understand the conversation. The background noise removal technology based on advanced deep learning, speech science, and audio processing methods resolves this issue. When a voice media stream is received from a customer, the AI noise removal technology separates and removes background noise from human speech.

This feature is available for Flex 3 premium agents on Webex Contact Centers with regional media support on the Next Generation media platform. For more information, see [Audio Problems](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#topic%5F4FAF52328E4601258A722EE78CC46F62) section in the Setup and Administration Guide.

For metrics related to the application of background noise reduction per entry point in inbound calls, see the _Noise Reduction Duration by Entry Point_ section in [Webex Contact Center Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/).

## January 16, 2024

## Publish Partner built Webex Contact Center Solutions on Webex App Hub

Developer Partners bringing a solution to the Webex Contact Center can promote their solution in the Webex Marketplace - the Webex App Hub. Partners can showcase the solutions they've built by including relevant marketing materials like screenshots and videos. Link to the partners' websites, payment portals, and support pages are other useful links for customers.

Developers can simply create an integration on the Webex Contact Center Developer Portal, fill out a submission form, and get the integration certified and promoted to Webex App Hub. For more information, refer [Developer portal](https://developer.webex.com/docs/app-hub-submission-process).

## January 16, 2024 

## Increase in count of Google Connectors

With this update, customers can provision up to ten Google connectors. This enhancement provides increased flexibility and functionality for managing Google-related connections. For more information, see [Configure Google connector for Webex Contact Center](https://help.webex.com/en-us/article/ctge8i/Configure-Google-connector-for-Webex-Contact-Center). 

## January 11, 2024

## Agent & IVR license Usage on Control Hub’s Contact Center Landing Page

**This feature is currently only in the US and UK regions.**

Introducing the newly improved License Current Usage Card on Control Hub’s Contact Center Landing Page. 

This card allows Administrators, and anyone with access to the Contact Center Landing Page to select to see the amount of Premium and Standard Agent Licenses, or the IVR license usage that their Subscription has used during the Current Billing Cycle. 

It indicates what the billing cycle is, how many Licenses they purchased, and if they are over or under on their allowed amount. 

[2023](#generic-template%5Fb5364993-5993-4b29-aa00-6fa57c56d7c7)

**December 19, 2023** 

**Call recordings review and playback** 

Supervisor Desktop is now available with a dedicated Post Interaction Insights widget. This widget:

- provides comprehensive insights and feedback on post-interaction activities.
- helps supervisors to better manage their teams and enhance customer service delivery.

This widget includes the following features:

- Review Call Recordings: Supervisors can access and review all the call recordings handled by their team members.
- Playback Call Recordings: Supervisors can playback these recordings for detailed analysis and training.

For more information, see [Supervise your agents and teams](https://help.webex.com/en-us/article/n408h9cb/Supervise-your-agents-and-teams) and [Module Settings](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#topic%5FABA00B3580DC6835B334F121AB42791B).

**December 19, 2023** 

**Enhancement of Captures API to support Digital Channels**

The Captures API has been enhanced to fetch transcripts of Digital Channel contacts. Please visit the [Dev Portal](https://developer.webex.com/webex-contact-center/docs/api/v1/captures) for more information.

Digital Channel contact transcript covers all supported channels. The transcript can be fetched as a JSON file.

Captures API should be used in conjunction with the Search API.

**December 19, 2023** 

**Webex Contact Center Digital Channels support for Japan Data Center** 

The Webex Contact Center Digital Channels capability is available in the Japan data center to cover Japan, South Korea, and Taiwan.

Customers in the region can reach out to their Account Managers or Customer Success Managers.

**December 15, 2023** 

**Experience Management Interactive Voice Response Surveys** 

Introducing the ability for Webex Contact Center to understand the Voice of Customers through Interactive Voice Response (IVR) surveys. Now, you have the capability to evaluate the experience of your end users at any point during a call concerning their interaction with your contact center. To get started, create an IVR survey using the Survey Builder in Control Hub. Once the survey is built, integrate it seamlessly using Flow Designer of Webex Contact Center. Access and download the survey results conveniently from the Survey Builder in Control Hub.

At present, this feature is exclusively accessible in the United States and is specifically supported on the Next Generation Media Platform (RTMS). IVR surveys mark the debut feature of Experience Management, with ongoing developments on the horizon, so stay tuned for exciting enhancements.

For more information, see [Experience Management - Interactive Voice Response Surveys for Webex Contact Center](https://help.webex.com/en-us/article/nlu4x20/Experience-Management---Interactive-Voice-Response-Surveys-for-Webex-ContactCenter).

**November 28, 2023** 

**Percentage Allocation to manage call load distribution** 

Flow Designer will introduce the Percentage Allocation activity that will enable flow developers to specify the percent allocation of calls to different branches in a flow. This will enable multiple use cases requiring varying call load distribution such as call traffic allocation to different queues, virtual agent experience, post-call surveys, and so on. For more information, see [Percentage Allocation](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#webexcc%5Ft%5Fpercentage-allocation).

 **November 24, 2023** 

****Agent license current usage card-UK** 

This service is available for customers in regions serviced by UK data centers. It complements the service that is already provided by our U.S. data centers.

Introducing the new Agent License Current Usage Card on Control Hub's Contact Center Landing Page. This card allows Administrators, and anyone with access to the Contact Center Landing Page to see the amount of Premium and Standard Agent Licenses that their subscription has used during the Current Billing Cycle.It indicates what the billing cycle is, how many licenses they purchased, and if they are over or under their allowed amount.

**November 14, 2023** 

**Introducing the Analyzer Beta** 

The Analyzer Beta is now available globally and allows Webex Contact Center customers to experience next-gen Reporting and Analytics. The Analyzer Beta provides simplified user workflows, robust data integrity, accuracy, and reliability. It includes an enhanced Analyzer Landing Page, Stock Historical Dashboard optimizations, and access to Transition Reports. 

For more information, see [Get started with the Analyzer Beta](https://help.webex.com/en-us/article/nd3yjix/Get-started-with-the-Analyzer-Beta).

**October 31, 2023** 

**Global rollouts of CCAI and Regionalised media support for Virtual Agent-Voice with Dialogflow CX** 

Dialogflow CX is now available in all global regions with our Next Generation media platform (RTMS). Additionally, webex contact center customers can use the regionalised media feature with Dialogflow CX to ensure that the media is sent to the closest Google Data Center depending on the configured PSTN region for reduced latencies and improved customer experience.

For more information, see the [Configure regional media for Virtual Agent-Voice](https://help.webex.com/en-us/article/necavmp/) and [Configure Virtual Agent-Voice in Webex Contact Center](https://help.webex.com/en-us/article/n6gaghu/) articles.

**October 30, 2023** 

**Webex Help Center for Agent Desktop** 

Webex Help Center replaces the online help system for Agent Desktop. Agents now get directed to the newly integrated Webex Help Center. Webex Help Center ensures that agents can navigate through categorized help articles, making information discovery simpler and more efficient. Webex Help Center provides faster and accurate search results. Agents receive timely notifications about relevant content updates.

**October 27, 2023** 

**Allow overlapping overrides** 

In Webex Contact Center existing routing strategies, you can configure non default routing strategies created for the same timespan to override the default routing strategy.

With this feature enhancement, WXCC enables you to create multiple overrides to overlap and you can mark only one of them as active at any given time. For more information, see [Set up business hours for Webex Contact Center](https://help.webex.com/en-us/article/dqekw4/Set-up-business-hours-for-Webex-Contact-Center).

**October 27, 2023** 

**User Management, Desktop Experience, and Customer Experience settings available on Control Hub** 

As part of an ongoing initiative to consolidate Contact Center admin functions, User Management, Desktop Experience, and Customer Experience related settings, configurations, and features are now available in Control Hub. 

**User Management** 

- [Sites](https://help.webex.com/en-us/article/nqipixt)
- [Skill Definitions](https://help.webex.com/en-us/article/6rzxls)
- [Skill Profiles](https://help.webex.com/en-us/article/arzaac/Manage-skill-profile-in-Webex-Contact-Center)
- [Teams](https://help.webex.com/en-us/article/nsowpi5)
- [User Profiles](https://help.webex.com/en-us/article/n524f2m)
- [Contact Center Users](https://help.webex.com/en-us/article/nzk6tpp)

**Desktop Experience** 

- [Multimedia Profiles](https://help.webex.com/en-us/article/nje7dhdb/Manage-multimedia-profiles)
- [Outdial ANI](https://help.webex.com/en-us/article/nb8hvk3/Manage-Outdial-ANI)
- [Desktop Layouts](https://help.webex.com/en-us/article/60x9ji/Manage-desktop-layouts)
- [Dial Plans](https://help.webex.com/en-us/article/n3jurrk/Manage-dial-plans)
- [Desktop Profiles](https://help.webex.com/en-us/article/nvaf71f/Manage-desktop-profiles)

**Customer Experience** 

- [Channels](https://help.webex.com/en-us/article/ewuay1/)
- [Queues](https://help.webex.com/en-us/article/ubg5qd/)
- [Audio Prompts](https://help.webex.com/en-us/article/be12vp/)
- [Flows](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html)
- [Call Recording Schedules](https://help.webex.com/en-us/article/ejatso/)

**October 25, 2023** 

**Developer Sandbox support in Next Generation platform (RTMS)** 

The developer sandbox now supports Next Generation platform (RTMS). Every sandbox organization that is provisioned in the developer portal will be on the Next Generation platform (RTMS). Developers are welcome to provision a sandbox organization to test the latest features. 

To get your sandbox, go to <https://developer.webex.com/create/docs/sandbox%5Fcc>. 

**October 25, 2023** 

**Outdial ANI in Developer Sandbox** 

Developer Sandbox will now auto-provision outbound call configurations for all the newer sandbox requests made on the Webex Contact Center Developer Portal: <https://developer.webex.com/webex-contact-center/docs/sandbox%5Fcc>.

You can manually create these configurations for the existing sandboxes.

**October 25, 2023**

**Transition Reports for all users**

Contact Center Reporting and Analytics (Analyzer) will now provide Transition Reports without a feature flag. All users will have access to these reports. You don't need to create ad-hoc requests with the Solutions Assurance team for enabling these reports. Transition Reports include:

- Abandoned Call Detail Activity Report
- Agent Call Summary Report
- Agent Detail Report
- Agent Summary Report
- Application Summary Report
- CSQ Activity Report by Window Duration
- CSQ Agent Summary Report
- CSQ All Fields Report
- Multichannel Agent Summary

For more information, see [Transition Reports](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F010.html#Cisco%5FGeneric%5FTopic.dita%5F9cddea38-3950-4584-a95d-f5137d8b4dd6).

**October 20, 2023**

**Agent license current usage card**

This feature is in Limited Availability (LA) only in the US region.

Introducing the new Agent License Current Usage Card on Control Hub's Contact Center landing page. This card allows administrators and users with access to the Contact Center landing page to see the license usage. The usage shows the amount of Premium and Standard Agent Licenses their subscription has used during the current billing cycle. 

It also indicates what the billing cycle is, how many licenses they purchased, and if they are over or under their allowed amount.

**October 17, 2023** 

****Webex Calling support for Next Generation media platform (RTMS) - Singapore** 

Webex Contact Center supports Webex Calling with our Next Generation media platform (RTMS). This service is available for new customers in the Singapore region. It complements the service that is already provided by our Japan, Australia, Canada, U.S., UK, and EU data centers.

**October 17, 2023**

**Salesforce CRM Connector – Recording Playback**

The Salesforce CRM connector will now support the playback of call recordings inside the Webex Contact Center embedded desktop Connector for the Salesforce CRM.

With this feature, users with a supervisor or administrator profile can play back call recordings inside Salesforce without having to exit the CRM console.

Users must have profiles that contain read access to the Recording Management module in the Control Hub portal.

For more information, see [Configure recording playback](https://help.webex.com/en-us/article/nhxw7kfb/Integrate-Webex-Contact-Center-with-Salesforce#recording-playback-configuration).

**October 12, 2023**

**Embed Agent Desktop and Supervisor Desktop inside MS Teams**

Agents and supervisors can access their Desktop within Microsoft Teams for a unified experience and enhanced productivity. For instructions, see [Access Webex Contact Center Desktop inside Microsoft Teams](https://help.webex.com/en-us/article/ns8or0f/Access-Webex-Contact-Center-Desktop-inside-Microsoft-Teams).

**October 11, 2023**

**Partner to Partner (P2P) transfer**

With this enhancement Webex Contact Center now supports the Partner to Partner (P2P) subscription transfer feature. This allows customers to move their subscription from their existing partner to a new partner. To know how to transfer a subscription, see [Partner To Partner transfer of Webex Contact Center subscription](https://help.webex.com/en-us/article/nttv0oc/Partner-to-Partner-transfer-of-Webex-Contact-Center-subscription) article.

Note: The P2P subscription transfer feature is available only on A-Flex-CC subscription of the Webex Contact Center platform. Customers using Webex Contact Center 1.0 must upgrade to the Webex Contact Center platform, and then raise a request for partner to partner subscription transfer. P2P support for A-FLEX-3-CC is work in progress and will be announced in some time.

**October 04, 2023** 

**Change Agent State** 

Supervisors can manage operations, meet contact center performance and SLAs, and provide help and support to agents. 

Supervisors can select an agent in the Team Performance widget and change the agent’s state to a desired state. Optionally, they can add a reason for the state change.

The Team Performance Widget displays agents for which the supervisors force changed the state. Supervisors can create custom reports to track these changes. Agents are notified of the state changes done by the supervisor. 

For more information, see:

- [Agent States](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#reference%5FEEB2E45ED6AB9E607E53F8663AF8F238)
- [Module Settings](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5FABA00B3580DC6835B334F121AB42791B)
- [Supervise your agents and teams](https://help.webex.com/en-us/article/n408h9cb/)

**September 26, 2023**

This feature is available only for Next Generation media platform customers and available only on the Recording Management portal.

**September 14, 2023**

****Support for 5000 concurrent agents for Next Generation platform**

With this enhancement, Webex Contact Center now supports a maximum of 5,000 concurrent logged in agents per tenant. To support this enhanced agent capacity, the updated configuration limits are documented in System Limits in Webex Contact Center. This enhancement is only applicable to tenants provisioned with the Next Generation platform for voice. For more information, see [System Limits in Webex Contact Center](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/m%5Fgetting-started.html#Cisco%5FReference.dita%5Fac326701-f246-48c1-ab95-5cedce48c68b). 

Contact Center now enforces the maximum number of configurations as documented in System Limits in Webex Contact Center for both Classic and Next Generation platforms. Existing customers who have usage higher than documented values have been provided an exception. Cisco will work with such customers to bring them within configuration limits.

**September 14, 2023**

****Supervisor access to Control Hub**

With this enhancement, contact center supervisors can access Control Hub and Business Hours. In future, other administrative configurations will also be available to supervisors on Control Hub. This feature also introduces user profile level access control for tenant settings. 

For more information on Supervisor privileges, see [Webex Contact Center Administrator Roles and Privileges](https://help.webex.com/en-us/article/n5jdj19/Webex-Contact-Center-administrator-roles-and-privileges).

**September 6, 2023**

**Webex Calling support for Next Generation media platform (RTMS) – UK and EU**

Webex Contact Center supports Webex Calling with our Next Generation media platform (RTMS). This service is available for new customers in regions serviced by UK and EU data centers. It complements the service that is already provided by our Japan, Australia, Canada, and U.S data centers.

For more information, see the article [Next Generation voice media platform](https://help.webex.com/en-us/article/560kt8/Next-Generation-voice-media-platform).

**August 25, 2023**

**Deprecation of in-app help in Agent Desktop** 

As part of our continuous efforts to improve the agent experience, we are deprecating the in-app help that is displayed in a modal in the agent desktop. Instead, agents will be redirected to the web-based user guide when they click the help icon.

**August 22, 2023**

**Outbound Dialer–Progressive mode (1:1 Mapping)**

This feature is in Limited Availability (LA). We’ll enable this feature for a customer only after the necessary review and agreement. To enable a feature in limited availability, please contact your Partner, Customer Success Manager, or Cisco support.

Outbound campaigns are a perfect medium to build brand awareness, convert a target audience to loyal customers, and proactively improve the customer experience. Prospects and customers expect businesses to provide fast, timely, and valuable customer support. To accomplish this, businesses must plan for a contact center outbound strategy that meets the business and compliance requirements. Webex Contact Center supports preview dialing mode and will introduce Progressive mode through integration with Acqueon. Campaign Manager is an additional SKU to be purchased with agent license to consume this feature.

This feature will include:

- Progressive mode (1:1 dialing mode)
- Compliance and Do Not Call (DNC) list management for Progressive Campaign
- Campaign reports
- Customer contact popover widget
- Blended agent support (incoming interactions prioritized)

**August 11, 2023**

**Salesforce CRM Connector Enhancements**

The Salesforce CRM connector is enhanced with these capabilities:

- Enhanced Field Mapping: We have increased the limit for mapping Salesforce object fields with Webex Contact Center variables. This enhancement enables seamless exchange of bulk data between Webex Contact Center and Salesforce.
- Activity Ownership Transfer: Agents can now transfer the ownership of call activities to other agents. This functionality ensures better collaboration among agents and provides better call management capabilities.
- Open Activity Record in Edit Mode: The system automatically creates Activity records and initiates them in Edit mode.

 For more information, see the article [Integrate Webex Contact Center with Salesforce](https://help.webex.com/en-us/article/nhxw7kfb/Integrate-Webex-Contact-Center-with-Salesforce).

**August 01, 2023**

**Webex Calling support for Next Generation media platform (RTMS)**

Webex Contact Center supports Webex Calling with our next generation media platform (RTMS). This service is now available for new customers in regions serviced by our Japan, Australia, US, and Canada data centers. This enables new customers in these regions to use Webex Calling hosted agents with Webex Calling PSTN options (Cloud Connect/Local Gateway). Also, the next generation media platform (RTMS) allows customers to leverage new features like regional media optimization. For more information on the global availability of our next generation media platform, refer to [Next Generation media platform](https://help.webex.com/en-us/article/560kt8/Next-Generation-voice-media-platform).

**August 01, 2023**

****Webex Contact Center launch in Canada data center**

Webex Contact Center services are now available from our new Canada-based data center. During the onboarding process, customers can select the country of operation that maps to the Canada data center to provision their tenant. Canadian Webex Contact Center customers can integrate directly with the Webex Calling service or via SIP trunk access to dedicated VPOPs based in Canada.

For more information, see [Data Locality in Webex Contact Center](https://help.webex.com/en-us/article/n0p6xa1/Data-Locality-in-Webex-Contact-Center) and [Services Setup Wizard](https://help.webex.com/en-us/article/kz3kps/Services-Setup-Wizard).

**July 18, 2023**

**Agent profiles changed to Desktop profiles**

As part of the upcoming changes, the Agent Profiles tab in the Provisioning module of the Management Portal is renamed to Desktop Profiles.

For more information, see [Bulk Operations in Webex Contact Center](https://help.webex.com/en-us/article/31e39g/Bulk-Operations-in-Webex-Contact-Center) and [CSV definition for bulk operations in Webex Contact Center](https://help.webex.com/en-us/article/imku7e/CSV-definition-for-bulk-operations-in-Webex-Contact-Center).

**July 18, 2023**

**Supervisor Desktop inactivity timeout**

Administrators can specify an idle inactivity timeout for the supervisors who are signed in to the supervisor desktop. This prevents the supervisors from using licenses indefinitely and blocking the contact center resources.

For more information, see [Respond to inactivity timer](https://help.webex.com/en-us/article/daz0zcb/Respond-to-inactivity-timer) and [Desktop Settings for Webex Contact Center](https://help.webex.com/en-us/article/nu0du4c/Desktop-settings-for-Webex-Contact-Center).

**July 11, 2023**

**Support for curved connector lines in Flow Designer**

This feature enables a toggle between curved lines and straight lines for each flow. This feature enhances the overall aesthetics as curved lines make flows more intuitive. In complex flows where straight lines tend to overlap making it difficult to trace the connections, curved lines enhance the view of connectors between different activities. For more information, see [Create and manage flows](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FGeneric%5FTopic.dita%5Fd32d6ead-60c0-4ae7-8750-9a1ba7663e56).

**June 28, 2023**

**Search capability in Flow Designer**

Search capability in Flow Designer enables flow developers to search for variables, activities, expressions, and so on easily and quickly within a flow. Also, this feature helps flow developers find and replace text inputs wherever required in the flow. For more information, see [Search entities in a flow](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#search-entities-within-a-flow).

**June 21, 2023**

**All New Supervisor Desktop**

The Webex Contact Center Supervisor Desktop provides a holistic supervisor experience within a centralized interface. 

It allows supervisors to manage, monitor, assess, guide, and assist agents. The administrator can customize the Supervisor Desktop with widgets to address specific Contact Center business needs.

The first set of features and capabilities include the following:

- **Role-based Sign in**: Supervisors can choose to sign into the Desktop as a dedicated supervisor or in a dual role as a supervisor and agent. Administrators can configure role-based access for supervisors.  
Administrators can configure role-based access for supervisors.
- **Home Page for Supervisors**: Supervisors can track contact center KPIs and metrics in real-time from the Supervisor Desktop Home page.
- **Team Performance Widget**: Supervisors can obtain a 360° view of real-time agent information across teams and perform specific supervisory actions through the Team Performance Widget.
- **Mid-Call Monitoring**: Supervisors can select an agent in the Team Performance widget and choose to monitor an ongoing voice call midway between the agent and customer.
- **Send 1:1 message to agents (Powered by Webex)**: Supervisors can select an agent in the Team Performance Widget and quickly guide that agent through a 1:1 message.
- **Send broadcast message to a team of agents (Powered by Webex)**: Supervisors can send contextual information to a team of agents through a broadcast message using the Webex app within the Desktop.
- **Customizable Desktop Layout**: Administrators can now control desktop features for supervisors through Desktop layouts. The Supervisor Desktop can be enriched with custom widgets to meet specific contact center requirements.

For more information, see the articles listed under [Supervisor](https://help.webex.com/en-us/landing/ld-sxjj9p-WebexContactCenter/Supervisor). For known issues in Supervisor Desktop, see [Known Issues](https://help.webex.com/en-us/article/nqcappbb/Resolved-issues-for-Webex-Contact-Center#Cisco%5FReference.dita%5Fb30d82f7-d5ea-474d-85af-f9eff5f58622).

**June 21, 2023**

**Enhanced access control for Webex Contact Center user profiles**

With this enhancement, user profiles can control access to contact center features such as agent profiles, skills, skill profiles, work types, aux codes, address books, outdial ANI, global variables, desktop layout, and multimedia profiles. The existing administrator and supervisor profiles can have access to these features. Going forward, customers can create custom profiles to restrict access to any of these features. For more information, see [Module Settings](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5FABA00B3580DC6835B334F121AB42791B).

**June 9, 2023**

**Support for Virtual Agent Voice with Dialogflow CX in additional data centers**

This feature is in opt-in limited availability (LA). We'll enable this feature for customers only after the necessary review and agreement. To enable this feature in opt-in limited availability, contact your Partner, Customer Success Manager, or Cisco support.

Webex CCAI is now co-located with the Next Generation platform and rolled out in other data centers extending the Virtual Agent Voice feature (Google Dialogflow CX) with Next Generation platform to the UK, EU, Japan, and Australia in addition to the US. 

Regionalized media support and rollout of Webex CCAI in additional data centers (Singapore and Mumbai) are currently in progress.

For more information, see [Virtual Agent-Voice in Webex Contact Center](https://help.webex.com/en-us/article/n6gaghu).

**June 6, 2023** 

**A new consolidated Webex Contact Center administrator experience in Control Hub** 

Webex Contact Center is consolidating all administrative configurations in Control Hub. With this enhancement, Webex Contact Center provides helpful resources and quick links that you can leverage to access the breadth of our Webex Contact Center suite.

You can now easily navigate Webex Contact Center tenant settings through the new left navigation bar in Control Hub:

- General settings
- Security
- Voice
- Digital
- Desktop
- Integrations
- Addons
- Bulk Operations

You can access your Business Hours in the left navigation to configure your working hours, holiday lists, and overrides.

_New Contact Center administrator experience in Control Hub_ 

For more information, see [Tenant Settings](https://help.webex.com/en-us/article/ngc1xsy/Tenant-Settings) and [Business Hours](https://help.webex.com/en-us/article/dqekw4/Set-up-business-hours-for-Webex-Contact-Center).

**June 6, 2023**

**Consent-based recording**

Some regions require businesses to inform their callers that the call is being recorded for training and quality assurance. To address this, Webex Contact Center introduces consent-based recording for voice call recordings. This feature seeks caller’s input/consent before continuing to record the voice call. Based on the caller’s consent, the system enables/disables recording of the voice call before the agent starts a conversation with the caller.

Consent-based recording feature is a configurable activity that can be enabled/disabled in Flow Designer at the tenant/queue level. The caller’s consent can then be retrieved from Analyzer for further reporting/quality assurance analysis. For more information, see [Recording Control](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#recording-control).

**June 6, 2023**

**Callback-retry attempts to customer**

A successful callback request will lead to positive customer satisfaction (CSAT) score, while an unsuccessful callback request leads to a negative CSAT score. One of the prime reasons for an unsuccessful callback request is that customers aren’t reachable or busy at callback time.

With this feature, flow designers will now be able to:

- Connfigure the callback retries, if the first callback attempt is unsuccessful.
- Configure a delay timer between the callback requests.

For more information, see [CallbackFailed](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FConcept.dita%5F2e773682-6129-4fb7-b857-4b56f57103bc).

**June 6, 2023**

**Customize ANI for different call scenarios**

Automatic Number Identification (ANI) is a feature for telecommunication networks to allow telephone users to identify the contacts being dialed. ANI feature provides the phone call recipient with the caller’s phone number. The technology and method used to provide the information depends on the service provider. There are scenarios where the system sends a default ANI to the call recipient which leads to the customer disconnecting the calls as the number is not identified by them. This feature will help the flow developer define the ANI in Flow Control which can be sent to the service provider. This feature is developed considering the legal scenario to not display any random numbers that are not associated with the contact center. 

These scenarios are covered as part of this feature: 

- Inbound Call
- Outbound Call
- Transfer/Consult
- Courtesy Callback
- Preview Outbound Campaign

For more information, see [Set Caller ID](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#wxcc-setcallerid).

**June 6, 2023** 

**Change Dial Number or Extension without Signing out of the Desktop** 

With the new Profile Settings option in Agent Desktop, agents will be able to easily select and personalize their preferred dial number or extension and switch between teams without the need to sign out and sign back in. This streamlined process will enable agents to handle telephony or team changes seamlessly, without any disruptions to their workflow.

**May 23, 2023**

**Empowering you with Customer Journey Data Services**

This feature is in Limited Availability (LA) US-only. We’ll enable the feature for a customer only after the necessary review and agreement. To enable the feature in limited availability, please see [Journey - Getting Started](https://developer.webex.com/webex-contact-center/docs/journey-getting-started).

Customer Journey Data service (CJDS) is a next-generation customer journey management service empowering organizations to go from Data to Insights to Action. CJDS enables businesses to capture customer journeys across any channels/application, identify insights and take real-time actions to provide an excellent customer experience.

With CJDS, customers can access our APIs that focus on key aspects of the customer journey.

- Listen: Integrate with any data source or third-party applications to listen to disparate data sources.
- Identify: Create a dynamic customer profile capturing propensity drivers.
- Analyze: Apply different aggregation techniques to all customer data collected.
- Act: Use the data/insights within CJDS to dynamically change the flow within Webex Contact Center Flow Control and personalize the customer experience at a granular level. These insights are visible to customer-facing teams in real time through Agent Desktop via the journey widget.  
For more information, see [Journey - API documentation](https://developer.webex.com/webex-contact-center/docs/api/v1/customer-identification).

**May 17, 2023** 

**Simplified flows to replace old complex digital channel flows** 

The original flows provided for digital channels integration with Webex Contact Center were somewhat complex. The simplified flows replace the old flows with new and much simpler configurations that help our partners and customers to focus on developing the business logic.

The simplification entails to start a flow with the customary channel specific **Incoming Message** node, **Evaluate** node to extract correct fields, followed by **Resolve Conversation** node that provide clean paths to add business logic for a new interaction.

_Old complex flow_ 

_New simplified flow_ 

The old complex flows that are currently deployed will continue to work for some time in a deprecated state. Any customer who wishes to deploy new flows will need to add logic to the old shared flows to limit their execution to the old assets only. For more information, see [Configure flows for digital channels](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wxcc-new-digital-channels.html#configure-flows-for-digital-channels).

**May 02, 2023**

**Workflows in outdial entry points**

Modern businesses have a proactive outreach to convey information, provide customer support, and reduce customer churn. Omnichannel outbound calls provide human interface to businesses leading to better customer experience. Flow developers need flexibility to design and configure outbound communication.

With this enhancement, the following features are supported:

- Workflows as part of the call control functionality for outdial entry points.
- Flow control activities as part of the workflow for outbound calls.
- HTTP Request
- Condition
- Parse
- Set Variable
- Business Hours
- End Flow
- Screen Pop
- PreDial event

For more information, see [Support for workflows in Outdial Entry Point](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#support-for-workflows-in-outdial-entry-point).

**April 25, 2023**

**MS Dynamics CRM Connector – Support for CIFv2**

With this enhancement, Microsoft Dynamics 365 connector will be upgraded to support full compatibility with the latest Channel Integration Framework (CIF) 2.0 standard. With the addition of Dynamics 365 multisession app functionality, agents can experience a desktop embedded within the CRM tool's user interface, without disruption during their navigation.

For more information, see [Integrate Webex Contact Center with Microsoft Dynamics 365](https://help.webex.com/en-us/article/aw26j2/Integrate-Webex-Contact-Center-with-Microsoft-Dynamics-365).

**April 18, 2023**

**Request for a Contact Center Sandbox**

A Contact Center Developer Sandbox provides you with administrator access to a licensed Webex organization, with predefined Contact Center assets that allow a partner developer to create and test the capabilities of the Webex platform. You can request for a sandbox by sending an email to [wxccdevsupport@webex.com](mailto:devsupport@webex.com). You'll receive 2 Cisco PSTN numbers, 1 administrator, 2 agents, teams, queues, and more.

After you receive the sandbox, place a call to an entry point, and see the call reflect on the Agent Desktop. For more information, see [Webex Contact Center for Developers](https://developer.webex.com/). Sign in to view the specific page content.

**April 18, 2023**

**Developer support in the Webex Contact Center for Developers portal**

Are you a Partner building an integration/solution for Webex Contact Center? Do you have questions or clarifications about Webex Contact Center APIs? Look no further and submit your questions to the developer support queue which is staffed with Webex Contact Center subject matter experts. Open a ticket on [Webex Contact Center for Developers](https://developer.webex.com/explore/support).

**April 11, 2023**

**Auto license template support for Contact Center**

With this enhancement customers can configure auto license templates at organization or group level to assign contact center licenses to users in Control Hub. Auto license templates support assignment of standard and premium licenses. To learn more about this feature, see [Set up automatic license assignments in Control Hub](https://help.webex.com/n3ijtao).

**April 11, 2023**

**Webex Contact Center PSTN voice option on Next Generation platform**

With this enhancement, customers who purchase the Webex Contact Center PSTN as part of their contact center subscription can onboard to the new Next Generation platform. The onboarding experience remains the same for customers. For more information, see [Set up Voice Channel for Webex Contact Center](https://help.webex.com/nhy3codb).

This release does not support routing calls to Webex Calling based on-net endpoints.

**April 6, 2023** 

**Reduce costs with enhanced ServiceNow connector** 

With this enhancement, ServiceNow connector for Webex Contact Center is fully compliant with the OpenFrame API. The connector uses Standard Tables for storing activity records replacing the custom tables, resulting in reduced licensing costs. For more information, see [Integrate Webex Contact Center with ServiceNow](https://help.webex.com/en-us/article/54vvw/Integrate-Webex-Contact-Center-with-ServiceNow).

**March 31, 2023** 

**Microsoft Teams and Webex Contact Center Telephony Integration** 

Webex Contact Center Telephony Integration for Microsoft Teams combines powerful Contact Center capabilities with Microsoft Phone system. This integration paves the way for an easy interaction between Contact Center agents and the enterprise.

The following are the highlights of this integration:

- Allows routing of skill-based inbound calls from Microsoft phone system to the Contact Center agents.
- Supports both Microsoft PSTN and third-party direct routing providers.
- Enables the agents to directly handle calls from the Microsoft Teams interface.

For more information, see the article [Microsoft Teams and Webex Contact Center Telephony Integration](https://help.webex.com/en-us/article/nreoevcb/Microsoft-Teams-and-Webex-Contact-Center-Telephony-Integration).

**March 31, 2023**

**Flow tracing**

Flow tracing enables flow developers to get insights in the flow execution paths and easily troubleshoot the flows from within the flow designer console. This feature also enables flow developers to view flow path of activities for any interaction and access detailed activity level information to easily debug flows. For more information, see [Flow Tracing](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Ffeaf392e-32a2-45b5-ac35-ca0c500086fc).

**March 30, 2023**

**Preferred agent callback**

With this enhancement, flow developers can configure the callback to both the agent and the queue based on the agent ID or email ID. Callback activity must be used only after Queue Contact or Queue To Agent for registering callbacks. For more information, see [Callback](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FConcept.dita%5F2a7326f7-67da-4157-bab1-e477b219ec7e).

**March 24, 2023**

**Partial Response in Virtual Agent - Voice**

The partial response feature addresses a key aspect of the user experience by engaging a user during a call. It plays an interim message while the Webhook response takes time to process in the background.

For an AI application (Dialogflow CX) that requires multiple parameters, an API or Webhook request typically takes longer to receive the correct response. During the processing of an API request, an end user is kept completely silent. There is a possibility of the end-user hanging up the call. To prevent this, an interim response must be issued to inform the end customer that their request is still being processed.

This feature enables an AI bot developer to construct a static response that can be communicated back to the end user while their query is still in progress. In the CX bot agent, static messages can be configured for up to 30 seconds. Once the final API response is received, the flow can be continued.

This feature is supported only for the US data center deployment on the Next Generation platform.

For more information, see the _Supported Integration_ section in the [Virtual Agent–Voice (VAV) in Webex Contact Center](https://help.webex.com/en-us/article/n6gaghu) article.

**March 21, 2023**

**Support for Flex 3.0 offer based subscriptions**

With this enhancement, customers who subscribe to Webex Contact Center using the new Flex 3 offer will automatically have access to basic digital channels (Chat and Email) using the standard agent license.

Additionally, customers who update to Flex 3 from the Flex or CJP legacy offers also get access to basic digital channels using the standard agent license. For more information, see [General Settings for User Profiles](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5FC972CD19C1E14277384051F11F246988) and multimedia setting in the [Module Settings](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5FABA00B3580DC6835B334F121AB42791B) section. 

**March 7, 2023**

**Zendesk CRM Connector - Automatic CRM field updates**

The new enhancement to Zendesk connector enables agents to be more efficient by saving time with every interaction. It automatically prepopulates Webex Contact Center Call Associated Data (CAD variables) both local and global variables into the Zendesk ticket fields. You can customize the mapping between the CAD variables and CRM fields.

**February 28, 2023**

**Upgrade tenants using vPOP bridge on Classic platform to Next Generation platform** 

Customers using Voice POP Bridge telephony on the Classic platform can upgrade to the new Next Generation platform. To enable the upgrade feature for your customer organization, contact Cisco Solution Assurance. For more information, see [Upgrade from Classic platform to Next Generation platform](https://help.webex.com/en-us/article/nz9xvkm/Upgrade-from-Webex-Calling-Integrated-Platform-to-Real-Time-Media-Service-%28RTMS%29). 

**February 26, 2023**

**Regional media support extended to additional regions**

Webex Contact Center now extends support for regional media to London, Frankfurt, and Singapore data centers. Regional media allows customer and agent media (audio and SIP signaling) to remain local to a geographic region regardless of where the Webex Contact Center tenant or home location resides. Keeping the media local to a region decreases latency, improves audio quality, and provides unique regionalized configurations for multinational deployments.

For example, if a Webex Contact Center tenant is located in the US region, US calls are hosted in the US, European calls in Europe and Asian calls in Asia. Only control signaling is sent from the media region to the business logic of the contact center in the US.

Regional media is available to customers using Webex Contact Centers that are provisioned with the Next Generation platform media handling.

**February 22, 2023** 

**Increased Contact limit for Address Book** 

The limit of maximum contacts per Address Book is increased from the current value of 150 to 6,000\. Agents can select or search Contacts as usual from the Address Book on the Agent Desktop.

**February 21, 2023**

**Virtual Agent Voice with Dialogflow CX**

We have introduced the Virtual Agent Voice (VAV) feature to enhance self-service capability within IVR flow. The VAV feature provides speech-based conversational capability while integrating with Google Dialogflow platform.

The flow designer introduces Virtual Agent Voice activity. You can configure this activity to integrate with the Dialogflow CX bot. With this integration, the contact center allows callers to have a voice-based conversational experience along with DTMF or touchtone inputs. For more information, see the [Virtual Agent–Voice (VAV) in Webex Contact Center](https://help.webex.com/en-us/article/n6gaghu) article.

This feature is supported only for the US data center deployment on the Next Generation platform.

**February 21, 2023**

**Custom events in Virtual Agent Voice with Dialogflow CX**

Custom events and custom payload features will be introduced to provide a better end-user experience and control over a conversation while interacting with the Virtual Agent Voice – CX bot. The custom payload feature helps to send payload information from the Google CX application to the client side for processing. The custom event feature helps to select a particular event to be invoked under the CX application using the client-side API. For more information, see the [Virtual Agent–Voice (VAV) in Webex Contact Center](https://help.webex.com/en-us/article/n6gaghu) article.

This feature is supported only for the US data center deployment on the Next Generation platform.

**February 13, 2023**

**Upgrade Webex Contact Center 1.0 vPOP to Next Generation platform**

The Webex Contact Center 1.0 to Webex Contact Center upgrade allows you to use the Next Generation platform on Webex Contact Center.

The upgrade allows customers to use vPOP based voice option for Next Generation platform. Other PSTN options will be available on the Next Generation platform in future releases. For more information, see [Upgrade from Webex Contact Center 1.0 to Webex Contact Center](https://help.webex.com/en-us/article/nb2ve0e/Upgrade-from-Webex-Contact-Center-1.0-to-Webex-Contact-Center).

**February 7, 2023**

**Enhance scheduling experience using Business Hours**

Business Hours enables administrators to configure working and nonworking hours for your organization specific to your timezone. Nonworking hours include holidays and emergency off hours during which contact center service will be unavailable. With this feature, flow developers get more flexibility to define a single workflow per entry point to handle both working and nonworking hours by using the Business Hours activity. For more information, see [Business Hours](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FConcept.dita%5F5ba6029e-c256-4c16-8fbf-40f8370bd968).

We recommend new customers to use Business Hours feature to assign a flow at entry point level. However, existing customers can still continue to use the Routing Strategy feature to connect to an entry point in a flow until it is decommissioned.

**January 31, 2023**

**Customize ANI (Automatic Number Identification) for Courtesy Callback**

This feature allows the customer to opt to receive a callback when all agents are busy. Administrators or flow developers can choose to customize the ANI for the customer call leg for courtesy callback.

With this enhancement, administrators or flow developers can select the Static ANI number (from the dropdown list of available Entry Point-Dial Numbers) or Variable ANI (variable defined as a valid E.164 number, with a valid Entry Point-Dial Number mapping) in the Courtesy Callback activity in Flow Designer.

For more information, see [Callback](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FConcept.dita%5F2a7326f7-67da-4157-bab1-e477b219ec7e).

**January 25, 2023**

**Optimize flows with error handling paths** 

Flow designer brings in a mechanism to configure error handling paths to optimize the flow. This feature enables an error exit for every activity so that the failures can be handled gracefully as desired by the flow developer. Flow Designer informs the flow developers about the system and activity errors that occurred while configuring activities. If the flow encounters any errors other than these predefined errors, the flow takes the path defined in the _Undefined Error_ node of that activity. This error node sets the error output path that the flow takes when there are undefined system errors during flow execution. Moreover, if there’s no error handling path configured for the activity, the flow uses the default path that is configured in the _OnGlobalError_ event handler in the Event Flows tab. For more information, see [Error Handling](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FConcept.dita%5F4079aa76-8682-4cbc-b7fd-d84fcb358568).

**January 10, 2023** 

**Customizable and responsive header in Agent Desktop** 

With this enhancement, administrators can customize the order, position, and visibility of the widgets and actions in the Agent Desktop header. Agents experience better header responsiveness across different screen sizes.

For more information, see [advancedHeader](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#Cisco%5FGeneric%5FTopic.dita%5Fa64e92de-79de-4f9c-9a8a-4c5a8cfe9c95%5F%5Fsection%5Fdvv%5Fhn5%5Ffsb).

[2022](#Cisco%5FReference.dita%5Fc4892b61-b0d7-4c51-ac31-62a5a22c6d17)

### 21 December 2022

**Salesforce CRM Connector enhancements**

Integration of Webex Contact Center with the Salesforce CRM connector introduces the following new features:

- **Advanced screen-pop and auto-population of Customer Records:** This feature allows dynamic matching of the customer records based on Caller Attributed Data (CAD) passed from the Flow Designer of the Webex Contact Center. With this enhancement, field mappings are introduced in the activity records and in creating a new case.
- **Omnichannel state synchronization:** The connector synchronizes the Salesforce omnichannel state with the Webex Contact Center agent desktop presence status. With the enhancement, the exclusive channel modes allow agents to handle one interaction type at a time – either Salesforce omnichannel or voice channel in the Webex Contact Center.
- **Salesforce Actions widget:** The connector supports a new Salesforce Actions widget for quick actions. This widget appears on the desktop when the agent is connected on voice interaction.  
The following actions are available:

  - View/Edit Activity Record
  - Associate to Activity Record
  - Create Case
  - Live case notes
- **Dynamic status in the taskbar (Softphone widget):** The widget taskbar in salesforce displays the dynamic status of the agent state and call transition states for Webex Contact Center – **Available** and **Idle** states including idle codes, and call state transitions, such as Incoming Call, Connected and Disconnected states. This enables the agents to view their live status on the taskbar without having to open the Webex Contact Center widget.

For more information, see [Integrate Webex Contact Center with Salesforce](https://help.webex.com/en-us/article/nhxw7kfb/Integrate-Webex-Contact-Center-with-Salesforce).

### 20 December 2022

**Changelog and subscription for Developer Portal changes**

The Developer Portal for Webex Contact Center now has an API [Changelog](https://web-sdk.webex.com/changelog/). You can subscribe to an RSS feed to get the latest information about API releases, updates and changes made to API contracts, downgrade of APIs and a lot more. This service delivers updates directly from Webex Contact Center Service Groups that are usually not included as a part of release notes.

### 20 December 2022

**Agent Desktop APIs - Call Consult APIs**

Webex Contact Center now offers an additional set of Agent Desktop APIs that allow partners and customers to set up their own Agent Desktop and create task activities. These Call Consult APIs are:

- **Available Agents API for Blind Transfer/Consult/Conference**: Fetches the available list of agents who can be reached for consult, conference, or transfer.
- **Consult Transfer**: An agent can initiate a consult task with another agent and transfer the call when required.
- **Reject/End Consult Request**: Allows an agent to reject a consulting call request.
- **Accept Consult Request**: Allows an agent to accept a consulting call request.
- **Consult Conference**: Allows an agent to add an already consulting agent/dial number to the call with the customer, so that all three participants can be in a conference.

For more information, see [Webex Contact Center for Developers](https://developer.webex.com/). Sign in to view the specific page content.

### 13 December 2022

**Automate provisioning using Administrator Configuration APIs**

Exciting things are available from the Webex Contact Center Developer Portal team with the Configuration APIs. As a business, you can now automate provisioning for users and use key contact center features.

The administrator related APIs that are available are:

- [Users](https://developer.webex.com/webex-contact-center/docs/api/v1/users): Maintain user entities to store basic user-related information such as Name, Phone Number, Email ID, Location, etc.
- [User Profile](https://developer.webex.com/webex-contact-center/docs/api/v1/user-profiles): User Profile is an extension of user data that stores information such as user subscriptions, orders, rewards, preferences etc.
- [Desktop Layout](https://developer.webex.com/webex-contact-center/docs/api/v1/desktop-layout): Create a Webex Contact Center Desktop layout to simplify and track the moving parts of a Contact Center administrator profile, and you get to customize it to fit your needs.
- [Global Variables](https://developer.webex.com/webex-contact-center/docs/api/v1/global-variables): These variables are configurable and accessible in every facet of the Contact Center ecosystem.
- [Work Types](https://developer.webex.com/webex-contact-center/docs/api/v1/work-types): Set and track the work status of a call, such as, when a line is idle or if a call has been wrapped up. This helps you estimate when that line would be ready to accommodate the next call.
- [Audio Files](https://developer.webex.com/webex-contact-center/docs/api/v1/audio-files): You can upload pre-recorded audio/music messages to use as part of your flow. For more information, visit the [Webex Contact Center for Developers](https://developer.webex.com/) portal.

### 13 December 2022

**Agent Desktop Enhancement: Connecting popover for a contact request**

A connecting popover is used to inform an agent that a new contact request is in the process of being assigned. The connecting popover is followed by the incoming contact request for the agent to take action before the state change. The agent can’t sign out when a connecting popover appears on the Agent Desktop.

For more information, see [Popover](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#Cisco%5FReference.dita%5F36009316-966b-4bc4-9885-1f103cb5f8bc) and [Answer a Call](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F010.html#task%5F52D1568B73EDA3CBDAB8CCD96E8D167A).

### 01 December 2022

**Support JSON object as a variable type in flow control**

Flow developers can create custom variables of type JSON and use these variables in various activities such as HTTP Request, Parse and Set Variable. For example, in HTTP Request and Parse activities, you can extract data using JSON path filter expression and store it in JSON variable.

For more information, see [Create Custom Variables in Flow Designer](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e).

### 24 November 2022

**New output variables in QueueToAgent activity**

The QueueToAgent activity routes the contacts to the preferred agent directly. The following output variables are added to the QueueToAgent activity:

- AgentState
- AgentIdleCode

By configuring this activity, flow designers can get information about the following statuses in the Agentstate and AgentIdleCode output variables respectively:

- AgentState: Idle and Available
- AgentIdleCode: Meeting, Lunch, Coffee, Break and so on.

This enables flow designers to queue the contact to the same agent based on the idle codes configured in the Management portal. For idle codes such as lunch or meeting, flow designers will be able to direct the call to a queue or another agent. For more information, see [Queue To Agent](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FTask.dita%5Fdd8431cd-496d-4bce-99d0-4452d502c3af).

### 22 November 2022

**Consult to dial number mapped to entry point**

This feature is in Limited Availability (LA). We'll enable the feature for a customer only after necessary review and agreement. To enable a feature in limited availability, please contact your Partner or Customer Success Manager or Cisco support.

This feature allows an agent to initiate a consult call with another agent in another department through an entry point. The agent can choose the entry point that is mapped to the dial number from the **Dial Number** drop-down list of the **Consult Request** dialog box. With this enhancement, the **Queue** option in the **Transfer Request** dialog box lists only queues; the **Dial Number** option in the **Consult Request** dialog box lists all the entry points and address book numbers.

When a consult call is made to an entry point, the flow control manages this consult call session like a new call. Further, the flow control can assign new skills, play IVR music, and check business hours to place the consult call in the right queue.

### 08 November 2022

**Agent Desktop API offering**

Webex Contact Center now offers a set of Agent Desktop APIs that enables partners and customers to set up their own Agent Desktop with our current portfolio.

Desktop APIs:

- **Agent Login:** Signs the agent into their Desktop and prevents duplicate sign-in if an active session already exists.
- **Agent Log out:** Signs the agent out of their Desktop and can only be called when the WebSocket Secure (WSS) session has been successfully established.
- **Agent State Change:** The agent can set a status to indicate their availability (Available, Idle, Busy etc.)
- **Reload:** Allows the agent to receive all the contacts assigned to a particular agent and state.

Task or Call Control APIs:

- **Get Task:** Retrieves open and closed call control tasks of an agent.
- **Create Task:** Creates a successful task.
- **Accept Task:** Enables the agent to accept either an inbound or an outbound request.
- **End Task:** Ends an ongoing inbound or outbound request.
- **Hold Task:** Places a task on hold when the agent is consulting.
- **Reject Task:** Rejects a task, thus changing the agent's status to Available.
- **Transfer Task:** Transfers a task or a chat to another agent.
- **Resume Task:** Resumes a task that has been placed on hold.

Call Recording:

- **Pause Call Recording:** Pauses call recording so that the agent does not record the user's Personal Identifiable Information (PII).
- **Resume Call Recording:** Resumes call recording once the agent is ready to record again.

For more information, visit the [Webex Contact Center for Developers](https://developer.webex.com/)portal.

### 03 November 2022

**Secure Variables in Flow Control**

As a flow developer, you can mark custom flow variables as Secure to prevent logging of Personally Identifiable Information (PII). You can also configure these Secure variables as agent viewable or editable to control the presentation of these variables on the Agent Desktop. For more information, see [Secure Variables](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FConcept.dita%5F79a1216a-2b35-4523-8f68-948c4adf0fbc).

### 03 November 2022

**Regional Media support through Real Time Media Service (RTMS) voice platform**

Webex Contact Center supports regional media availability via RTMS. This feature allows customer media (audio and SIP signaling) to remain local in a geographic region regardless of where the Webex Contact Center tenant or its home location resides. Keeping the media local to a region decreases latency, improves audio quality, and provides unique regionalized media configurations for multi-national deployments. For example, the Webex Contact Center tenant is defined as a home region in the United States. When an inbound call arrives in a non-home region such as Sydney, Australia, the media services remain local to the Sydney, Australia region with only application control signalling backhauled to the United States home region. This feature is available for supported RTMS regions such as USA and Sydney with additional regions coming online in late 2022.

For more information, see [Map an Entry Point](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#task%5FFFC396687C2875C8DBDDB2B196F732D0).

### 03 November 2022

**Webex Contact Center launch in Japan data center**

Webex Contact Center services are now available from a new Japan-based data center. During the onboarding process, customers can select the country of operation that maps to the Japan data center to provision the tenant in the Japan data center. This data center provides access to dedicated VPOPs based out of Japan and benefits customers in APJC who require voice media services in this region. For more information, see the [Services Setup Wizard](https://help.webex.com/en-us/article/nee1mb6/Get-Started-with-Webex-Contact-Center#id%5F108387) and [Data Locality in Webex Contact Center](https://help.webex.com/en-us/article/n0p6xa1/Data-Locality-in-Webex-Contact-Center) articles.

### 31 October 2022

**Onboarding Partner as a Customer**

Partners can now onboard a Webex Contact Center tenant to their own organization by selecting the **I am a Customer** option in the Order Setup Wizard in Control Hub.

Partners must note the following restrictions when provisioning the tenant to their own organization using Control Hub:

- If the country of operation that is selected maps to the United States, United Kingdom, Germany, Australia, or Japan data centers, the partner must onboard the tenant to the Default Platform only. The partner must not select the Exception Platform. For more information on Webex Contact Center data centers, see the article [Data Locality in Cisco Webex Contact Center](https://help.webex.com/en-us/n0p6xa1/Data-Locality-in-Cisco-Webex-Contact-Center).
- If the country of operation that is selected maps to the Canada data center, then the partner must not have any existing customer tenants provisioned in that data center. The partner must first provision the tenant for their own use, and later start onboarding customer tenants. Don’t use this feature if a partner already has customer tenants.

### 28 October 2022

**New and reimagined illustrations in Agent Desktop** 

The Agent Desktop displays enhanced and contextual illustrations that are consistent with the Webex product suite. As part of this change, a new default illustration is displayed on the landing page.

### 27 October 2022

**Threshold alert enhancement**

With this enhancement, email alerts generated for threshold breaches now include the updated time stamp and the tenant time zone. For more information, see [Threshold Alerts](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F01.html#topic%5FAEEC486634A4262B607C8D6DE24CAD9E) in the _Cisco Webex Contact Center Analyzer User Guide_.

### 12 October 2022

**Variables support for the digital channels**

Webex Contact Center supports use of global variables and custom flow variables (local variables) while building flows for the digital channels. Global variables are defined in the Management Portal. Flow developers can use these variables within flows to set and pass values in the context of interactions handled in the contact center. If these variables are marked as agent-viewable and agent-editable, this feature enables agents to view and update values for these variables in the Agent Desktop during customer interaction. Additionally, you can mark global variables as reportable, whereby values are available in the Analyzer for custom reporting. All variables set in the main flow, such as global and local flow variables are also available for access in the shared flows.

For more information, see [Variable support for digital channels](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wxcc-new-digital-channels.html#Cisco%5FConcept.dita%5Fe6d619de-4609-4840-a6ad-1e4d7eecb794).

### 4 October 2022

**Agent Desktop enhancement—Set any navigation bar page as the landing page**

A new property `isDefaultLandingPage` is added to the Desktop Layout JSON file. This property allows the administrator to set any navigation bar page as the landing page when the agent signs in. The administrator can configure the landing page at the global level or team level via the Desktop Layout.

For more information, see [Navigation (Custom Pages)](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#Cisco%5FGeneric%5FTopic.dita%5F36860c91-13d4-449b-8c26-6b732d7e396d).

### 29 September 2022

**Delete entities permanently in Webex Contact Center**

Webex Contact Center administrative configurations can now be deleted permanently. This helps customers remove unwanted configurations, keep a lightweight configuration footprint, and improve application performance. Before deleting a configuration object permanently, you will need to mark it inactive. You can also periodically delete inactive objects using an automatic purge which is at a tenant level setting.

For more information, see [Delete inactive objects permanently](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F5cedcfe8-4d0a-4ee6-86b7-b670738a4152).

### 28 September 2022

**Surge Protection: Maximum concurrent digital contacts for a tenant**

This feature defines the maximum number of digital contacts that can be active on the customer tenant. The **Maximum Concurrent Digital Contact Threshold** indicates this value. When the tenant reaches the threshold, it rejects any new digital contacts until existing digital contacts disconnect to bring down the number of concurrent digital contacts below the threshold. The concurrent digital contacts in the contact center include Chat, Email, SMS, and Social Channels.

This feature is applicable for customers using Webex Connect.

The value of **Maximum Concurrent Digital Contact Threshold** is set to 30% higher than the concurrent digital contact entitlements:

```
Maximum Concurrent Digital Contact Threshold = Concurrent Digital Contact Entitlements * 1.3
```

The value of concurrent digital contact entitlements is based on the following formula:

```
Concurrent Digital Contact Entitlements = (Number of committed Standard Agent licenses + Number of committed Premium Agent licenses) x 2 x 15
```

For zero commitment orders, the default value of concurrent digital contact entitlements is:

```
100 x 15
```

Customers can raise a support request to adjust the Maximum Concurrent Digital Contact Threshold for your tenant. The maximum concurrent digital contact threshold cannot exceed 160,000.

For more information, see [_Concurrent Digital Contact Settings_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5FF4DDB50715706E71555A524EB3D00D5E%5F%5FID-00000777) in the _Cisco Webex Contact Center Setup and Administration Guide_.

The _Surge Protection Statistics_ report is available in the Analyzer. For more information, see [_Surge Protection Statistics_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F010.html#Cisco%5FReference.dita%5F56834ed5-9605-4c0c-b9ca-4edf8497e8b8) in the _Cisco Webex Contact Center Analyzer User Guide_.

### 28 September 2022

**Configure Variables displayed on popover and Interaction Control pane**

Flow Designer allows flow developers to select the system, global, and local variables that need to be displayed on the voice call request popover and Interaction Control pane.

When the variables are marked as viewable on the Agent Desktop, the flow designer can:

- Select the variables to be displayed on the popover and Interaction Control pane.
- Arrange the selected variables in the order they should be displayed.
- Customize the label that is associated with the variable when it appears on the Agent Desktop.

The popover variables provide brief information on an incoming call, and the information helps agents to learn more about customers before interacting with them. When a voice call is accepted, the configured variables appear in the Interaction Control pane. For more information, see the following sections:

- _Desktop Viewable Variables_ in the [Cisco Webex Contact Center Setup and Administration Guide](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FConcept.dita%5F60925635-8120-47fe-96e4-c03abc7bec96).
- _Popover_ in the [Cisco Webex Contact Center Agent Desktop User Guide](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#Cisco%5FReference.dita%5F36009316-966b-4bc4-9885-1f103cb5f8bc)
- _Interaction Control_ in the [Cisco Webex Contact Center Agent Desktop User Guide](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#reference%5F87861A8C4F6E91F53D2187FAAC3E9385)

### 28 September 2022

**Advanced queue information and escalate call distribution group**

Webex Contact Center now supports these new Flow Control activities:

- **Advanced Queue Information:** This activity displays the real-time count of agents in the **Available** state and the count of logged in agents for a specific set of skill requirements. Based on the number of agents available to handle contacts, flow developers can use this activity to decide and manage the flow sequence.
- **Escalate Call Distribution Group:** This activity allows flow developers to escalate a queued contact to the next or last call distribution group. This provides better control and flexibility to the flow developer to manage contacts that are parked in a queue and helps reduce wait time for contacts.

 For more information, see [Advanced Queue Information](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FReference.dita%5F85e67304-bd06-4aa2-a68e-d9e971fb40a9).

### 14 September 2022

**Agent Desktop enhancement – Sign in with country code**

Agents can sign in to Agent Desktop based on their geographic location. They can do the following:

- Choose the country code from a drop-down list and enter the dial number in the **Station Credentials** dialog box.
- Save the station credential preferences for future sign-ins.

For more information, see the **Sign In to the Agent Desktop** section in the [Cisco Webex Contact Center Agent Desktop User Guide](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F01.html#task%5FB2C692221907FD2AC2E8D33282FC6865).

### 9 September 2022

**Real Time Media Service (RTMS) voice platform**

Webex Contact Center introduces an enhanced media processing platform Real Time Media Service (RTMS) as the primary media services engine for Webex Contact Center. Phase one of the global RTMS rollout includes support for Voice POP-based PSTN connectivity options. This enables customers to use either partner-provided PSTN (service providers) or extend PSTN services such as Bring your Own PSTN (ByoPSTN) from their Private Branch Exchange (PBX) deployment for the contact center.

Support for additional connectivity such as Webex Calling Subscription-based (CCP or LGW) PSTN and Cisco Bundled PSTN will be added at a later date. Customer eligibility is evaluated during onboarding and partners will choose RTMS within Partner Control Hub during onboarding.

For more information, see the [Set Up Voice Channel for Webex Contact Center](https://help.webex.com/en-us/article/nhy3codb/Set-Up-Voice-Channel-for-Webex-Contact-Center) article and _Services Setup wizard_ section in the [Get Started with Webex Contact Center](https://help.webex.com/en-us/article/nee1mb6/Get-Started-with-Webex-Contact-Center) article.

### 10 August 2022

**Change the site of an agent**

With this enhancement, you can change the site that is assigned to an agent. The teams and multimedia profile values must be changed accordingly. Cisco recommends updating agent sites within a planned maintenance window and agents to create a new session on the Agent Desktop. For more information, see [Edit a User](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#task%5FC6660460CA01C5D05019882D228C64AF) section in the Provisioning chapter of the [Cisco Webex Contact Center Setup and Administration Guide](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2.html).

### 5 August 2022

**Flow Designer Enhancements**

- **Autosave Toggle for Flows:** Flow developers can enable or disable autosave of a flow using the **Autosave** toggle button.When you enable this feature, Flow Designer automatically saves the changes made to the flow every three seconds. For more information, see [Enable or Disable the Autosave Option](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F6d89bda8-140b-4139-b741-237f9c804008).
- **Revert a Flow to its previous version:** Flow Designer allows flow developers to revert a flow to its previously published version. It opens the flow in edit mode where you can make the necessary changes and publish the flow again with a new version. For more information, see [Revert a Flow](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FTask.dita%5F76c3d91b-6a84-4aed-ad54-896edfd36614).
- **Export and Import of Flows:** Flow Designer allows flow developers to export or import flow control scripts across the same or different tenants. This feature enables flow developers to replicate flow scripts with greater ease than having to recreate flows. You can navigate to **Routing Strategy** \> **Flows** tab in the Management Portal to access the Export and Import flows feature. For more information, see [Export](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FTask.dita%5F8504c7bb-b058-4c38-a726-08ce6e555db4) and [Import](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FTask.dita%5F0e76fcdd-29a3-47c3-8544-f6613dfeb8f0) flows.
- **Copy and Paste Activities in Flows:** Flow Designer allows flow developers to copy and paste an existing activity in multiple places in a flow, without having to choose a new activity from the Activity panel each time. This helps to save the time and effort to choose and configure the same activity multiple times. For more information, see [Copy and Paste Activities](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F3b469383-0464-4fe0-870d-f1bf1ca8467c).

### 28 July 2022

**Desktop inactivity timeout**

This feature allows administrators to specify an Idle inactivity timeout for the Desktop application. This helps to prevent agents and supervisors from using licenses indefinitely and blocking contact center resources. A tenant level timeout can be defined in Management Portal \> Organization \> Settings and additionally administrators can also set Agent Profile level timeouts that override the tenant level settings. For more information, see [Settings](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5FF4DDB50715706E71555A524EB3D00D5E) in the _Cisco Webex Contact Center Setup and Administration Guide_.

If an agent is inactive on the Agent Desktop for a specified duration, the agent is notified with the Prolonged Inactivity dialog box. The dialog box with a countdown timer appears one minute before the configured timeout occurs. If you don't click the Stay Signed In button before the timer runs out, the Agent Desktop signs you out. For more information, see [Inactivity Timeout](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F01.html#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fc7d6cae2-6557-42df-94e7-e453d35e05a3) in the _Cisco Webex Contact Center Agent Desktop User Guide_. 

### 26 July 2022

**Configurable RONA timeout for each channel**

Administrators can now configure tenant level Redirection on No Answer (RONA) timeout for each channel. The values can be configured on the Control Hub \> Contact Center \> Settings \> Desktop page.

The supported channel types are:

- Telephony
- Chat
- Email
- Social

For information about configuring RONA timeout values, see the article [Desktop Settings for Webex Contact Center](https://help.webex.com/en-us/article/nu0du4c/Desktop-Settings-for-Webex-Contact-Center#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fb9e3dfba-bc25-4ba7-b62f-6755d80df6c5).

### 25 July 2022

**Customize Webex Contact Center tenant time zone**

This feature allows a user to select the contact center tenant time zone when provisioning a subscription or trial using the First Time Setup Wizard. For more information, see the article [Get Started with Webex Contact Center](https://help.webex.com/en-us/article/nee1mb6/Get-Started-with-Webex-Contact-Center).

### 25 July 2022

**Desktop Layout enhancement**

With this enhancement, new features that are released for the desktop layout are automatically available to users who use an unmodified desktop layout. No administrator action is required to apply new features to teams that use unmodified layouts. The new layout-based features are available when a user refreshes their Desktop session or signs in to the Desktop.

For teams that use a custom desktop layout, administrators must periodically refresh the layout definition to incorporate new features. When administrators view an unmodified layout or a team that uses an unmodified layout, a message is displayed indicating that new Desktop features are automatically applied.

For more information, see [Desktop Layout](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5F8230815F4023699032326F948C3F1495) in the _Cisco Webex Contact Center Setup and Administration Guide_.

### 21 July 2022

**Agent Desktop enhancement—Add illustration to the task page**

A new property `taskPageIllustration` is provided in the desktop layout JSON file. The new property allows the administrator to customize the blank task page illustration based on organization preferences and brand alignment. When an agent signs in, the task page displays the configured illustration as a background. For more information, see [taskPageIllustration](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#Cisco%5FGeneric%5FTopic.dita%5Fa64e92de-79de-4f9c-9a8a-4c5a8cfe9c95%5F%5Fsection%5Fbsc%5Fkt3%5Fltb).

### 18 July 2022

**WhatsApp for inbound customer care:**

Webex Contact Center integrates WhatsApp as a channel for improved customer interaction. The WhatsApp channel allows end consumers to reach out to businesses as an additional channel of choice. For more information, see [Set up WhatsApp Channel](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wxcc-new-digital-channels.html#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e) in the _Cisco Webex Contact Center Setup and Administration Guide_.

With WhatsApp integration, agents can respond to WhatsApp contacts using the Webex Contact Center Agent Desktop. For more information, see [Manage WhatsApp Conversations](https://www.cisco.com/content/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fm%5Fimi%5Ffacebook%5Fbeta.html#Cisco%5FGeneric%5FTopic.dita%5F47ceb6a2-e47c-4639-9a2c-dcde742cec2f) in the _Cisco Webex Contact Center Agent Desktop Guide_.

### 15 July 2022

**Agent Desktop enhancements**

- **User experience enhancement—Engaged label:** When an agent is in the Available state and accepts an active request, the Agent Availability state displays an intuitive label called Engaged. The Engaged label appears on the Agent Desktop when the agent has accepted the task and connected with the customer. When the Engaged label is displayed, the agent can continue to receive active requests on other channels, depending on the channel capacity. For more information, see [Agent Availability States](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#reference%5FEC4FD449F1812EE970D58A9A70677A12).
- **Ability for agents to provide feedback on their desktop experience:**  We continue to rapidly evolve the Agent Desktop based on user feedback. To make it easier for agents to provide inputs that help us to improve their desktop experience, we are providing a feedback option within the Agent Desktop. For more information, see [Navigation Bar](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#reference%5F21D792ED0A47C0D0263D2675D0B57E51).

### 13 July 2022

**Agent-based routing**

Agent-based routing allows you to assign a dedicated agent or a relationship executive to your contacts. Use agent-based routing to route, queue, or park your contacts directly to preferred agents.

Do you have contacts that call the contact center frequently? You can assign the last agent who interacted with the contact as the preferred agent whenever that contact calls.

The queue-to-agent activity within the flow enables agent-based routing. The agent's email address or ID in the queue-to-agent activity enables routing of contacts to preferred agents.

With this enhancement, you can reduce the time that you spend resolving calls, and improve the overall customer experience. For more information, see [Agent-based Routing](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FConcept.dita%5F8768b492-9297-4ae9-af68-c209cd538d76).

### 13 July 2022

**Update agent skills in realtime** 

When you update the skill profile of agents or add skills to an agent profile, this is updated in realtime without the need for agents to sign out or sign back in to see the updates. For more information, see [Teams](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5F1A96AB23E353AF70863A549E062B3DC5).

### 7 July 2022

**Windows 11 support in Webex Contact Center**

Webex Contact Center supports the Microsoft Windows 11 operating system for Control Hub, Management Portal, Flow Designer, Desktop, and Analyzer.

For more information, see the following topics:

- The Control Hub tab in the article [System requirements for Webex services](https://help.webex.com/en-us/article/fz1e4b/System-requirements-for-Webex-services#id%5F90868).
- The [Supported Browsers for Management Portal](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/m%5Fgetting-started.html#topic%5F267462B1AE2CB83DCA41019720B17127) and [Flow Designer Browser Requirements](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FConcept.dita%5Fa52a7f24-6569-431d-bcb9-47aee4ce71d5) sections in the _Cisco Webex Contact Center Setup and Administration Guide_.
- The [Browser Requirements](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#Cisco%5FReference.dita%5F7108dae2-9447-4b13-a92d-c621cf258f9a) section in the _Cisco Webex Contact Center Agent Desktop User Guide_.
- The [System Requirements](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F01.html#topic%5F6332374C29FFE358FB375E81FC6D19C8) section in the _Cisco Webex Contact Center Analyzer User Guide._

### 21 June 2022

**Agent Desktop enhancement—Error messages when outdial calls fail**

When an outdial call fails, the Agent Desktop displays new error messages for the following scenarios:

- An outdial number dialed by an agent doesn't connect to the customer. For example, call connectivity issues.
- An agent rejects an outdial call. For example, when the agent is busy in another interaction.
- A customer disconnects an incoming call. For example, the customer cancels an incoming call.
- A customer doesn't answer an incoming call. For example, the call rings but the customer fails to answer the call.

For more information, see [Make an Outdial Call](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F010.html#task%5FDE6128B71DE66BF634CA4400F39B020D).

### 16 June 2022

**Web callback enhancements**

Do you want your callers to submit callback requests from any external source such as website, chat, or mobile app? We have a Web Callback API available now.

After a request is submitted, it is sent to the Webex Contact Center system. Webex Contact Center receives the callback request and initiates a call to the requestor on an outbound entry point that is used exclusively for callbacks.

Partners or customers should build and maintain the front end and user interface to submit the callback request. The ability to cancel callback requests, skill-based routing, scheduling, and the retry mechanism will not be available in this release.

The Callback report in Analyzer includes the web callback report with the following fields:

- **Type of Callback**: The type of callback can be Courtesy or Web.
- **Source of Callback**: The source of callback can be website, chat, or mobile app.

The Agent Desktop displays the new callback  icon.

For more information, visit the [Webex Contact Center for Developers](https://developer.webex.com/webex-contact-center/docs/api/v1/tasks-call-control)portal.

### 26 May 2022

**Dynamic prompt support for IVR**

Flow Designer supports a single IVR flow to handle interactions in multiple languages based on the customer's choice of language. Flow developers can configure the audio prompt variable in various IVR activities such as Play Music, Play Message, Menu, and Collect Digits. This variable selects the audio prompts to be played dynamically in the language selected by the customer during the interaction.

For more information, see the [Activities in Call Handling](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FGeneric%5FTopic.dita%5F7cfdcd9f-093c-4f7e-a72b-4d452543926c) section in the _Cisco Webex Contact Center Setup and Administration Guide_.

### 18 May 2022

**System limits in Webex Contact Center**

 Configuration limits for Webex Contact Center are now documented and published. For more information, see [System Limits in Webex Contact Center](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/m%5Fgetting-started.html#Cisco%5FReference.dita%5Fac326701-f246-48c1-ab95-5cedce48c68b) in the Getting Started chapter of the _Cisco Webex Contact Center Setup and Administration Guide_.

### 9 May 2022

**Administrator Licensing Changes**

Assigning a premium agent license to an administrator is now optional. There is no license cost for administrators who do not access any agent or supervisory features. Such administrators do not have access to the following modules in the Management Portal:

- Agent Desktop
- Reporting and Analytics
- Call Monitoring
- Recording Management
- Agent State Data Realtime

For more information about administrator licensing changes, see [Webex Contact Center Documentation](https://help.webex.com/en-us/article/n2re5jy/Webex-Contact-Center-Documentation).

### 21 April 2022

**Agent Desktop Enhancements**

- **Removed the background illustrations on the landing page:** The landing page so far displayed some default illustrations as a background when an agent signed in to the Agent Desktop. These default illustrations are removed, and agents now see a landing page without illustrations.
- **Reorder tabs in the Auxiliary Information pane:** Agents can drag and drop tabs in the Auxiliary Information pane to change the tab order. This feature is applicable for:  

  - Tabs that are displayed in the Auxiliary Information pane.
  - Additional tabs in the Auxiliary Information pane. The agent can click the More Tabs drop-down list and then select the required tab.  
The order of the tabs is retained even after an agent navigates away from the Auxiliary Information pane, reloads the browser, clears the browser cache, or sign out and sign in again to the Agent Desktop.  
To reset tabs to the default order, agents can click the More Actions () icon and select the Reset Tab Order option.  
For more information, see [Auxiliary Information Pane](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#reference%5F33FCBCD4E7B6EDA8ED21612F116E91F5) in the _Cisco Webex Contact Center Agent Desktop User Guide_.  
To enable this feature, the desktop layout JSON file must include the following new properties:

  - **Drag and drop tabs**: Administrators must set the draggable property value to true. In addition, set the comp-unique-id property to a unique value to identify the component.
  - **Reset tab order**: Administrators must specify the reset attributes for the agentx-wc-more-actions-widget component.  
For more information, see [Auxiliary Information Pane](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#Cisco%5FGeneric%5FTopic.dita%5F1ae68ee3-0948-47ad-a04d-ae182dae573e) in the _Cisco Webex Contact Center Setup and Administration Guide_.

### 12 April 2022

**Stock transition reports**

Nine new voice-only stock transition reports are now available in Webex Contact Center. These reports have the same look and feel as that of Cisco Unified Contact Center Express (CCX) reports.

For more information, see [Transition Reports](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F010.html#Cisco%5FGeneric%5FTopic.dita%5F9cddea38-3950-4584-a95d-f5137d8b4dd6) in the _Cisco Webex Contact Center Analyzer User Guide_.

### 11 April 2022

**New digital channels released with full General Availability**

The new digital channels are now released with full General Availability.

New digital channels—Chat, Email, Short Messaging Service (SMS), and Facebook Messenger—are now available in Webex Contact Center in the US, UK, ANZ, and EU regions. Customers can work with the partners and account managers to plan their organization onboarding and avail the new digital channels.

Customers, when using these channels, can use the following enhancements:

- **Flow Builder**: This enhancement empowers customers to create powerful self-help. Flow Builder is an editor that enables customers to create interactive communication flows with minimal programming or scripting efforts. It has an easy-to-use drag-and-drop interface called Flow Canvas, which helps to build communication flows using Nodes.
- **Skills-based Routing**: Administrators can assign skill requirements as well as skill relaxation criteria to contacts in the QueueTask node in the Flow Builder. Contacts are routed to agents based on skill requirements that are matched best at that point in time in the flow.
- **Screen Pop**: A screen pop is a window that autonomously appears in an agent's desktop when the agent performs certain actions such as accept a contact request or respond to a contact request from a customer. Screen pops help the agent to get more information about the customer to proceed further with the conversation.
- Automated interaction messages via Flow or Bot allow customers to create a QnA or Task bot, and integrate it via a Flow.
- The channel-specific capabilities allow hyperlinks and delivery receipts.

All digital channels are part of the Premium Seat License. Charges are extra for the following services: automated interaction messages, short code SMS, long code SMS, toll-free SMS, and bot usage.

For more information, see [New Digital Channels](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wxcc-new-digital-channels.html) in the _Cisco Webex Contact Center Setup and Administration Guide_.

Migration from select older platforms is also supported. For more information, see the article [Upgrade from Cisco Webex Contact Center 1.0 to Cisco Webex Contact Center](https://help.webex.com/en-US/article/nb2ve0e/Upgrade-from-Cisco-Webex-Contact-Center-1.0-to-Cisco-Webex-Contact-Center).

### 31 March 2022

**Auto Answer**

Auto Answer enables a supported Webex Calling-based agent device (Webex Calling app or MPP phone) to automatically answer calls. The agent hears a tone when the call is automatically answered.

The feature requires a subscription to Webex Calling.

The auto answer behavior applies to calls received or initiated by an agent on the Agent Desktop. Calls that agents receive that aren't managed by the Webex Contact Center ring as usual; for example, from agent to agent.

Administrators use the Agent Profile tab in the Provisioning module of the Management Portal to set the Auto Answer field to Yes. For more information, see the [Agent Profile](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5F471CA4D6B7086CA137F64169533E4BCF) section in the Provisioning chapter of the _Cisco Webex Contact Center Setup and Administration Guide_.

### 30 March 2022

**Switch Telephony Option**

On request, customers can access a wizard-driven workflow that automatically switches the telephony provider for the tenant. This allows customers to switch among the VPOP Bridge, Cisco Bundled PSTN, or Webex Calling (CCP/Local Gateway) options. Customers need a scheduled downtime to switch the telephony provider.

For more information, see the article [Set Up Voice Channel for Webex Contact Center](https://help.webex.com/en-us/article/nhy3codb/Setting-Up-Voice-Channel-for-Cisco-Webex-Contact-Center).

### 16 March 2022

**User Experience Enhancement in Services Setup Wizard**

The Services Setup wizard is now enhanced. The Contact Center service setup aligns with the new user experience. There are no changes to the configuration options and they remain the same as before.

For more information, see the article [Get Started with Cisco Webex Contact Center](https://help.webex.com/en-us/article/nee1mb6/Get-Started-with-Webex-Contact-Center#id%5F108387).

### 03 March 2022

**Seamless Customer Upgrade Path from Cisco Customer Journey Platform (R10) or CC-One (R9) to Webex Contact Center**

This feature enables customers who use Cisco Customer Journey Platform (R10) or CC-One (R9) to upgrade to Webex Contact Center. Customers who enroll for this feature are provided access to a migration workspace. This workspace has the following key capabilities: 

- **Tenant Configurations:** Customers can extract administrative configuration data from their legacy tenant and convert it to a format that can be used to quickly create the same configurations in Webex Contact Center.
- **Historical Data:** After customers have migrated completely to Webex Contact Center and their legacy tenants have been decommissioned, the customers can query analyzer data that was created on their legacy platform.
- **Call Recordings:** After customers have migrated completely to Webex Contact Center and their legacy tenants have been decommissioned, the customers can query and download call recordings that were created in their legacy platform.

For more information, see the article [Migrate from Cisco Customer Journey Platform (R10) and Cisco CC-One (R9) Releases to Cisco Webex Contact Center](https://help.webex.com/en-us/article/n7pm25q/Migrate-from-Cisco-Customer-Journey-Platform-%28R10%29-and-Cisco-CC-One-%28R9%29-Releases-to-Cisco-Webex-Contact-Center).

**Bulk Operations for Webex Contact Center**

Bulk Operations allows partners and customers to use CSV files to create administrative configurations for Webex Contact Center in bulk. This feature helps to automate the onboarding of new customers and allows existing customers to easily make large scale configuration updates to their tenant.

For more information, see the article [_Bulk Operations in Webex Contact Center_](https://help.webex.com/en-us/article/31e39g/Bulk-Operations-in-Webex-Contact-Center).

### 15 February 2022

**Surge Protection: Maximum Concurrent Voice Calls for a Tenant**

This feature defines the maximum number of calls that can be active on the customer tenant. The value is termed as **Maximum Concurrent Voice Contact Threshold** and can be accessed on the **Settings** tab of the Management Portal. After the threshold is reached, any new calls are rejected until existing calls disconnect, to retain the number of concurrent calls below the threshold. The concurrent calls in the contact center include inbound calls and outdial calls (outdial calls made by agents, outbound campaign calls, and callbacks).

 The value of **Maximum Concurrent Voice Contact Threshold** is set to 30% higher than the Concurrent Voice Contact Entitlements:

```
Maximum Concurrent Voice Contact Threshold = Concurrent Voice Contact Entitlements * 1.3
```

The value of Concurrent Voice Contact Entitlements is based on the following formula:

```
Concurrent Voice Contact Entitlements = [((Number of committed Standard Agent licenses + Number of committed Premium Agent licenses) * 3) + Number of IVR Add on licenses purchased]
```

For zero commitment subscription, the value of Concurrent Voice Contact Entitlements is:

```
Concurrent Voice Contact Entitlements = [100 + Number of IVR Add on licenses purchased]
```

 Customers can raise a support request to decrease or increase the Maximum Concurrent Voice Contact Threshold. The maximum value allowed for concurrent voice contact threshold is 13000\. For more information, see [_Concurrent Voice Contact Settings_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5FF4DDB50715706E71555A524EB3D00D5E%5F%5FID-00000777) in the _Cisco Webex Contact Center Setup and Administration Guide_.

The _Surge Protection Statistics_ report is introduced in the Analyzer. For more information, see [_Surge Protection Statistics_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F010.html#Cisco%5FReference.dita%5F56834ed5-9605-4c0c-b9ca-4edf8497e8b8) in the _Cisco Webex Contact Center Analyzer User Guide_.

**Skills-based Routing Enhancement**

A new method of contact selection—Skills-based Contact Selection—is introduced in Skills-based Routing (SBR). Customers can opt for one of the following methods to select contacts—Skills-based Contact Selection or First In, First Out (FIFO) based selection. In Skills-based Contact Selection, SBR filters contacts in a queue periodically to match the agent skills in the sequence—(1) contact priority and (2) timestamp (oldest to newest).

Contacts that are sent to SBR queues are parked until a matching agent is available. When an agent is available, the matching contact among the parked contacts connects to the agent on priority, irrespective of the contact's position in the queue. The Skills-based Contact Selection method thus reduces the wait time of parked contacts and improves the productivity of agents.

By default, Skills-based Contact Selection is enabled for customers. To enable FIFO based contact selection, customers must contact Cisco Support. For more information, see [_Skills-based Contact Selection_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FGeneric%5FTopic.dita%5F71534928-ffa7-4b6b-9ca6-893cf6a58060) in the _Cisco Webex Contact Center Setup and Administration Guide_.

### 11 February 2022

**Agent Desktop Enhancement - Reorder Icons on the Horizontal Header**

A new property `headerActions` is added to the desktop layout JSON file. This property allows the administrator to change the default order of the icons on the horizontal header of the Agent Desktop—the (1)  (Webex), (2)  (Outdial), and (3)  (Notification Center) icons.

```
headerActions: ["webex", "outdial", "notification"],
```

The headerActions property value is case sensitive.

To remove the header icons and their associated functionality from the Agent Desktop, the administrator must remove the property values.

For more information, see [_headerActions_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#Cisco%5FGeneric%5FTopic.dita%5Fa64e92de-79de-4f9c-9a8a-4c5a8cfe9c95%5F%5Fsection%5Fdvv%5Fhn5%5Ffsb) in the _Provisioning_ chapter of the _Cisco Webex Contact Center Setup and Administration Guide_.

**Date Format Options for Interval Field in Analyzer Reports**

The default date format for the **Interval** field in the Analyzer reports is `mm/dd/yyyy`. With the new enhancement, the Analyzer allows users to choose different date formats for the **Interval** field, similar to other fields in the reports.

Customization of date format was available for profile variables only, previously.

For more information, see [_Change Date Format of the Interval Field_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F010.html#Cisco%5FTask.dita%5Fafd1ae55-b791-4b4b-b213-f8ab5fad96b6) in the _Cisco Webex Contact Center Analyzer User Guide_.

### 10 February 2022

**Handle Invalid DTMF Input in IVR Post-call Surveys**

Webex Contact Center can handle scenarios where there is invalid or no DTMF (dual-tone multifrequency) input response from customers during IVR post-call surveys. Flow developers can configure the Timeout parameter in the Advanced Settings section of the Feedback activity in the Flow Designer to define the maximum duration (in seconds) for which the system waits for DTMF input from customers. Further, administrators can configure the following IVR settings for Webex Contact Center, in the Questionnaire Settings tab of the post-call survey questionnaire in Webex Experience Management:

- **Maximum Invalid Inputs and Timeout Allowed:** Administrators can select a value in the **Maximum invalid inputs and timeout allowed** drop-down list to set the maximum number of times for which the system allows invalid input or no-input responses from customers.
- **Audio Files for Notification Messages:** Administrators can upload audio files to play notification messages for _invalid input_, _DTMF entry timeout_, and _maximum number of retries exceeded_, respectively.

 If a customer enters an invalid input or does not enter any input to a survey question within the specified timeout period, the contact center plays the audio message to notify the customer of the invalid entry or timeout, and then plays the same survey question to the customer. When the maximum number of attempts elapse, the contact center plays the corresponding audio notification to the customer, skips the remaining questions in the survey, and plays the Thank You message to end the survey.

For more information, see [_Validate DTMF Input Response in IVR Post-call Survey_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/integrate-wxcc-with-wxm.html#Cisco%5FConcept.dita%5Fe22f8de0-34b2-41e5-a8d0-83b61784c93e) in the _Cisco Webex Contact Center Setup and Administration Guide_.

### 07 February 2022

**Global Variables in Webex Contact Center**

Administrators can define global variables using the Provisioning module in the Management Portal. Administrators can set the global variables as _agent-viewable_ and _agent-editable_ in order to make them available to agents via the Agent Desktop. Additionally, administrators can set the variables as _reportable_ to include them in Analyzer reports. Flow developers can use the global variables within flows to set and pass values in the context of interactions handled in the contact center. If an agent updates an agent-editable global variable value, the updated value will be available in the Analyzer for reporting. This feature enables administrators to define reportable global variables and persist them across Webex Contact Center components.

For more information, see [_Global Variables_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#Cisco%5FConcept.dita%5F9d97954c-91b5-404f-bf98-f597622d124e) in the _Cisco Webex Contact Center Setup and Administration Guide_.

Flow developers can no longer create Call-Associated Data (CAD) variables using the Flow Designer. Custom flow variables will remain non-reportable.

### 28 January 2022

**Webex Customer Experience for Developers Portal** 

The Webex Customer Experience for Developers Portal enables third-party developers to access Webex Contact Center, and areas such as AI (Artificial Intelligence) and the journey within the customer experience platform programmatically. The portal provides REST (Representational State Transfer), gRPC (gRPC Remote Procedure Call), GraphQL APIs (Application Programming Interfaces), notifications, and SDKs (software development kits) to help developers build and enhance customer experience. Developers can become familiar with the APIs by using the API reference documents, sample code, and the _Try It Out_ functionality that are provided in the portal, to build customer experience apps.

The following features are available as part of the new release:

- **Automated Integration Process:** Through integrations, developers can request permission to invoke Customer Experience (CX) APIs. Developers can now register and manage integrations easily via my-apps in Webex Contact Center Developer portal.
- **Task Webhooks:** Developers can receive real-time notifications on task events via task webhooks.
- **Multimedia Profiles API:** A new CRUD (Create, Read, Update, and Delete) API endpoint for multimedia profiles is available now.
- **Rate Limiting Guide:** A new Rate Limiting Guide is available at Webex Contact Center for Developers portal documentation.
- **Authentication Guide:** To authenticate apps to access resources, see the Authentication Guide at Webex Contact Center for Developers portal documentation.

For more information, visit the [Webex Contact Center for Developers](https://developer.webex.com/)portal.

### 22 January 2022

**E.164 Format Support for International Calling in Webex Contact Center**

Webex Contact Center supports the E.164 phone number format for international calling for agents and supervisors. This is in addition to the IDD (International Direct Dialing) format that was previously supported for all telephony options in Webex Contact Center.

With this enhancement, the E.164 format is supported for all PSTN options for Webex Contact Center—Cisco Provided Bundled PSTN, Service Provider PSTN, Bring Your Own PSTN (BYO PSTN), Bring Your Own PSTN with Local Gateway (Webex Calling), and Cloud Connected PSTN (Webex Calling).

Webex Contact Center supports the E.164 format in the following scenarios:

- **Inbound Calls:** Contact center customers can use dial numbers in the E.164 format to connect to the contact center.
- **Agent Sign-In:** Agents can sign in to the Agent Desktop by entering dial numbers in the E.164 format (in addition to the IDD format) in the **Station Login** dialog box. This functionality enables agents located in different geographical regions to stay connected to their Webex Contact Center tenant to handle voice calls. For more information, see [Sign In to the Agent Desktop](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F01.html#task%5FB2C692221907FD2AC2E8D33282FC6865) in the _Cisco Webex Contact Center Agent Desktop User Guide_.  
For more information about configuring the dial number of an agent, see [_Edit a User_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#task%5FC6660460CA01C5D05019882D228C64AF) _(Agent Settings)_ in the _Cisco Webex Contact Center Setup and Administration Guide_.
- **Transfer, Consult, and Conference Calls:** Agents can enter dial numbers in the E.164 format (in addition to the IDD format) in the **Transfer Request** and **Consult Request** dialog boxes to initiate transfer, consult, or conference calls with agents located in other geographical regions. For more information, see [Transfer a Call](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F010.html#task%5F1DF1D088639837520AEE6A214A171E86) and [Initiate a Consult Call](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F010.html#task%5F8777527C9EC385C37D8B438CF94FBD93) in the _Cisco Webex Contact Center Agent Desktop User Guide_.  
For more information about configuring phone numbers in the enterprise address book, see [Address Books](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#topic%5F39CCD35745C5E4E4629965AC29165CE8) in the _Cisco Webex Contact Center Setup and Administration Guide_.
- **Outdial Calls and Outbound Campaign Calls:** Agents can make outdial calls to contacts in other geographical regions by using phone numbers in the E.164 format, in addition to the IDD format. This enhancement is applicable for outdial calls, courtesy callback, and outbound campaign calls. For more information, see [Make an Outdial Call](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F010.html#task%5FDE6128B71DE66BF634CA4400F39B020D) in the _Cisco Webex Contact Center Agent Desktop User Guide_.
- **Supervisor Call Monitoring:** Supervisors can now enter the callback number for call monitoring, barge-in, and whisper coaching in the E.164 format, in addition to the IDD format. For more information, see [Monitor Calls](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0101.html#task%5F087EC6EAADD441ABE08071999A5D5C1C) and [Create or Edit a Monitoring Schedule](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0101.html#task%5F81AA23BB860EB293215A6F3FB3AC0828) in the _Cisco Webex Contact Center Setup and Administration Guide_.

Large organizations may have agents operating in many countries around the world. These agents are likely to experience longer latencies as the round trip of voice telephony can be a factor in the origination-to-termination matrix.

[2021](#Cisco%5FReference.dita%5Fc6f16096-49cb-475c-bd47-5bca8da51874)

### 22 December 2021

**Retain Dashboard Filters in APS and Management Portal**

Webex Contact Center stores the filters that are set in each tab of the Agent Performance Statistics (APS) in the Agent Desktop and the Management Portal, in the browser cache. Caching the filters in each tab saves the time taken by agents to set filters every time they change tabs, thereby providing them a better user experience.

The filter changes made by a user are stored in the browser cache of the user's computer for the specific user ID. The filters that the user sets remain the same even if the user refreshes the browser or logs back in to Webex Contact Center using the same browser. The user can reset the filters to the default values by clearing the browser cache.

For more information, see [Summary Report](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F0110.html#reference%5F2A825909D6C9058007F60727189907E8), [Agent Stats - Historic report](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F0110.html#reference%5F906B30FBA2CE603E62805FA137C5B4C0), and [Agent Stats By State - Historic report](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F0110.html#reference%5FB8658E56C413B61DF8126BCD5E37E297) in the _Cisco Webex Contact Center Agent Desktop User Guide_.

This enhancement is applicable for the Agent Desktop and Management Portal, but not for the Analyzer reports.

**Retain Column Width in Tabular Reports**

Analyzer users can change the column width in tabular reports dynamically when running reports. However, the changed column width was not retained previously when the reports were refreshed, making it necessary for users to resize the columns again.

With the new enhancement, Webex Contact Center stores the changed column width in the browser cache of the user's computer, for the specific user ID. The changed column width remains the same even if the user refreshes the browser or logs out and logs back in to Webex Contact Center using the same browser. The user can reset the column width to the default size by clearing the browser cache, if required.

For more information, see [Change Report Column Width](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F010.html#Cisco%5FConcept.dita%5F3568e4ae-a03e-436b-bcee-a31e8022abdc) in the _Cisco Webex Contact Center Analyzer User Guide_.

This enhancement is not applicable for the **Threshold Alerts** section.

**Whole Number Format for Contacts Handled**

Tabular reports in the Analyzer are enhanced to display the number of contacts that are handled, in the whole number format. This is applicable to the following columns:

- Contacts Handled
- Inbound Contacts Handled
- Outdial Contacts Handled

The reports displayed the data in the decimal format previously.

### 15 December 2021

**Agent Desktop Enhancements**

- **Retain Data for Current Agent Task:** A new property `stopNavigateOnAcceptTask` is added to the desktop layout JSON file. This property determines whether to shift the focus to a newly accepted task or not, when an agent accepts the new task. Administrators can set the property to `True` or `False`.

  - `True:` Retains the focus on the current task that the agent is working on. This helps to retain unsaved data that is being entered for the current task.
  - `False:` Shifts the focus to the newly accepted task. This is the default value.  
For more information, see [JSON Layout Top-Level Properties](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#Cisco%5FGeneric%5FTopic.dita%5Fa64e92de-79de-4f9c-9a8a-4c5a8cfe9c95) in the _Cisco Webex Contact Center Setup and Administration Guide_.
- **Support Special Characters in Dial Number for Calls:** Agent Desktop supports the special characters # (hash), \* (asterisk), and : (colon) in addition to + (plus) in the dial number for outdial calls, transfer requests, and consult requests.  
When an agent copies a number with special characters to the **Dial Number** field or dialpad, the Agent Desktop retains only those special characters that are supported (+, #, \*, and :).  
For more information, see [Manage Voice Calls](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F010.html) in the _Cisco Webex Contact Center Setup and Administration Guide_.
- **User Experience Enhancement - Incoming Call Popover Labels:** New labels appear on incoming call popovers for easy identification of the call type. The labels also improve accessibility for vision-impaired users.  
Additionally, the Agent Desktop displays  and  as the Callback and Campaign Call icons respectively.  
The following table lists the call types, icons, and the corresponding labels:

| **Call Type**                  | **Label**     | **Icon**                                                                                                                                   |
| ------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Incoming Voice Call            | Incoming Call | ![Incoming call icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/500001-600000/510001-520000/511001-512000/511177.jpg) |
| Callback                       | Callback      | ![Callback icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/461001-462000/461435.jpg)      |
| Outbound Preview Campaign Call | Campaign Call | ![Campaign call icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/461001-462000/461437.jpg) |
| Outdial Call                   | Outdial Call  | ![Outdial call icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/461001-462000/461436.jpg)  |  
For more information, see [Task List](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#reference%5FDCE23309C920230E071FAE335B3FB773) in the _Cisco Webex Contact Center Agent Desktop User Guide_.

### 03 December 2021

**Localization Support Additions in Analyzer**

The Analyzer supports localization in two more languages—English (UK) and Portuguese (Portugal), in addition to the 27 languages that were previously supported.

### 30 November 2021

**Support Multiple Languages for Post-call Surveys**

Contact center customers can provide feedback via post-call surveys powered by Webex Experience Management in multiple languages. This feature is available for both Voice and Email/SMS survey channels. 

To select a custom language for a post-call survey, the flow developer can use the `Global_language` variable or select the **Override Language Settings** toggle button in the **Language Settings** section of the Feedback activity in Flow Designer. If the selected language is not configured in the survey in Webex Experience Management or is not supported, the survey falls back to use the default language English (US). 

For more information about the supported languages and how to configure a custom language, see [Language Settings](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#reference%5FB06B1EB2FD9E1DFD3C56B0C423252902%5F%5Fsection%5Fvc1%5Fvsn%5F3rb) in the _Cisco Webex Contact Center Setup and Administration Guide_.

- For existing flows, enabling the Override Language Settings feature resets the language for all Voice and Email/SMS surveys to English (US). Customers must modify any existing flows (by enabling the **Override Language Settings** toggle button and then selecting the custom language) to continue using a custom language.
- The `Preferred Language` and `Set to Variable` parameters are removed from the Feedback activity.

**Support Welcome and Thank You Messages in Post-call Surveys** 

Administrators can configure survey questionnaires to play _Welcome_ and _Thank You_ messages at the beginning and end of IVR post-call surveys. To enable these messages in a survey, the administrator must add corresponding audio files in the _Welcome note_ and _Thank You note_ when configuring the survey questionnaire in Webex Experience Management. These messages use the language setting that is configured in the Feedback activity in the Flow Designer. 

The _Welcome_ and _Thank You_ messages are played in the same language as set in the Flow Designer for the survey and selected by the customer. If these messages are not configured and therefore not available in the set language in the survey questionnaire, the contact center skips the messages and plays only the survey questions without the messages.

**Support Variables for Custom Prefills in Post-call Surveys** 

Webex Contact Center supports additional data (for example, Customer Name: John, Country: US) in the form of optional variables. The additional data can be passed to Webex Experience Management, to be stored as part of survey response data.

To enable Webex Contact Center to pass additional data to Webex Experience Management, the administrator must create custom prefill questions in the survey questionnaire in Webex Experience Management. Further, the flow developer must configure corresponding variables as _Key-Value pairs_ in the Feedback activity in the Flow Designer. The flow developer must enter the _Display Name_ of the question in the survey questionnaire in Webex Experience Management as the _Key_ parameter of the corresponding variable in the Feedback activity in the Flow Designer.

Webex Contact Center then passes the additional data to Webex Experience Management, which will be stored as part of the survey response data along with the customer responses. This process makes survey responses more contextual and helps to gain deeper data insights using the Customer Experience Analytics widget.

For more information, see [Variable Passing](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#reference%5FB06B1EB2FD9E1DFD3C56B0C423252902%5F%5Fsection%5Fn1n%5Fvsn%5F3rb) in the _Cisco Webex Contact Center Setup and Administration Guide_.

### 22 November 2021

**New Digital Channels in Webex Contact Center in APJC Region**

New digital channels–Chat, Email, Short Messaging Service (SMS), and Facebook Messenger–are now available in Webex Contact Center in the APJC region via imimobile integration.

Customers, when using these channels, can use the following enhancements:

- **Flow Builder:** This enhancement empowers customers to create powerful self-help. Flow Builder is an editor that enables customers to create interactive communication flows with minimal programming or scripting efforts. It has an easy-to-use drag-and-drop interface called Flow Canvas, which helps to build communication flows using Nodes.
- **Bot Builder:** Using Bot Builder, customers can create a QnA or Task bot, and integrate it via a Flow.
- The following features are newly supported:

  - **Skills-Based Routing:** Administrators can assign skill requirements as well as skill relaxation criteria to contacts in the QueueTask node in the Flow Builder. Contacts are routed to agents based on skill requirements that are matched best at that point in time in the flow.
  - **Screen Pop:** A screen pop is a window that autonomously appears in an agent’s desktop upon certain actions such as accepting the contact, when the agent responds to a contact request from a customer. Screen pops help the agent to get more information about the customer to proceed further with the conversation.
  - The channel-specific capabilities allow hyperlinks and delivery receipts.

All digital channels are part of the Premium Seat License. Charges are extra for the following services–automated interaction messages, short code SMS, long code SMS, toll-free SMS, and bot usage.

For more information, see [New Digital Channels](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wxcc-new-digital-channels.html) in the Cisco Webex Contact Center Setup and Administration Guide.

**Note:** The new digital channels are released in controlled GA (General Availability). Only those customers who have worked with the Cisco Solution Assurance team to plan their onboarding can avail the new digital channels. Migration from select older platforms is also supported. See the article [Upgrade from Cisco Webex Contact Center 1.0 to Cisco Webex Contact Center](https://help.webex.com/en-US/article/nb2ve0e/Upgrade-from-Cisco-Webex-Contact-Center-1.0-to-Cisco-Webex-Contact-Center) for more information.

### 15 November 2021

**Webex Contact Center Platform Launch in Frankfurt Data Center**

The new Webex Contact Center Platform is now available for customers who have their Country of Operation mapped to the Frankfurt data center. Customers who have worked with the Cisco Solution Assurance team during the A2Q process to validate their requirements against the new platform features can continue with the onboarding process. For more details, see the article [_Get Started with Cisco Webex Contact Center_.](https://help.webex.com/en-us/nee1mb6/Get-Started-with-Cisco-Webex-Contact-Center)

OEM (Original Equipment Manufacturer) integration for Calabrio is currently being validated for the new platform and will be available soon.

### 11 November 2021

**Enable Virtual Agent for Voice to Handle No User Input**

Virtual Agents for Voice can handle scenarios where there is no input (voice and DTMF) from the user within a specified time period. Flow developers can set the no-input timeout duration and the number of retries to be made if there is no user input, by specifying the following parameter values in the Advanced Settings of the Virtual Agent activity:

- No-Input Timeout: The duration (in seconds) for which the Virtual Agent waits for user input.
- Max No-Input Attempts: The number of times the Virtual Agent attempts to wait for user input after the timeout period elapses.

The Virtual Agent activity provides a new output variable `ErrorCode` to indicate the timeout event or error status.

The default error message that is currently played in English (US) will no longer be played to the users. To play an audio message to notify the users of an error, flow developers will need to include a Play Message activity in the flow that uses the output variable `ErrorCode` from the Virtual Agent activity.

For more information, see [_Virtual Agent_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html?referring%5Fsite=RE&pos=1&page=https://www.cisco.com/c/en/us/support/customer-collaboration/webex-contact-center/series.html#Cisco%5FGeneric%5FTopic.dita%5F5cc52130-eb2f-4703-b076-72541b0bc4c8) in the _Cisco Webex Contact Center Setup and Administration Guide_.

### 26 October 2021

**Agent Desktop Enhancements**

- **Initiate Outdial Call from Agent Interaction History:** An agent can initiate an outdial call by clicking a phone number in the Agent Interaction History pane. The agent can also edit this number before initiating the outdial call.  
For more information, see [Agent Interaction History](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#reference%5F011268A33FBA10E936C1B0E177641755) in the _Cisco Webex Contact Center Agent Desktop User Guide_.
- **Localization Support Additions:** Agent Desktop supports localization in two more languages—English (UK) and Portuguese (Portugal), in addition to the 27 languages that were previously supported. For more information, see [Localization](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F00.html#Cisco%5FReference.dita%5F2758e0b1-209f-4455-83a7-5350855c3ca0) in the _Cisco Webex Contact Center Agent Desktop User Guide_.  
The localization support additions are not currently applicable for Agent Performance Statistics (APS) reports, and will be available along with the localization support additions for Analyzer.

### 18 October 2021

**Access Reports and Dashboards through Browser Links**

Standard agents and premium agents who do not have access to the Analyzer to view and run dashboards and reports can access the dashboards and reports using browser links.

The Drill Down functionality is not available for reports that are accessed through browser links.

For more information, see [_Access Reports and Dashboards through Browser Links_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F01.html#task%5Fvmk%5F4ql%5Fcrb) in the _Cisco Webex Contact Center Analyzer User Guide_.

### 27 September 2021

**Regional VPOP Ingress in Remote Countries**

Customers onboarding to the new Webex Contact Center in the Australia and United States data centers can configure the following additional remote countries to ingress into their local Virtual Point of Presence (VPOP). Typically, customers order the countries in the Approach to Quality (A2Q) deployment validation phase. 

| Webex Contact Center Data Center | Additional Countries Supported                            |
| -------------------------------- | --------------------------------------------------------- |
| Australia                        | Singapore Indonesia Malaysia Phillipines Thailand Vietnam |
| United States                    | Mexico Brazil Chile Argentina Peru Columbia               |

This new offer applies only to the Service Provider PSTN or Cisco Unified Communications Manager deployment architectures. The new offer does not apply to Cisco Webex Calling deployments.

Setting up VPOPs in these countries is predicated by deals in the region, with a 60 day stand-up time for the VPOP.

**Multiregion Support**

Webex Contact Center with Cisco Webex Calling Telephony supports multiple regions (either countries or parts of countries) for the agents and callers. The following scenarios are supported:

- Callers are from one region and agents are in multiple regions
- Callers and agents are in multiple regions

In these scenarios, both inbound calls and outdial calls are supported. For inbound calls, the callers call into the Cloud Connected PSTN (CCP) or the Local Gateway (LGW) setup. These calls are routed to the agents. Agents can make outdial calls to any region.

The agents belong to different locations as configured in Control Hub. The agents are configured with the number and extension for their location.

Inbound numbers are associated with the regions in Control Hub. Calls route to the agents according to the routing strategy configured in Webex Contact Center.

For more information, see [_Multiregion Support_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Voiceonboarding2/wcc-voice-onboarding-2-book/wcc%5Fb%5F%5Fvoiceonboarding%5Fprovision.html#reference%5F75A3FB504739EAE493A8F6F36B64BF6F) in the _Cisco Webex Contact Center Voice Onboarding Guide_.

### 24 September 2021

**Webex App (Webex) Integration in Agent Desktop**

The Webex App (Webex), along with the messaging, calling, and meeting functionalities, is integrated with the Webex Contact Center Agent Desktop. The integration provides the capability for agents to collaborate with other agents, supervisors, and subject matter experts, without leaving the Agent Desktop. The Webex functionality can be configured by the administrator at the global level or team level via the Desktop Layout.

To enable the Webex feature using the `webexConfigured` property, see the [_JSON Layout Top-Level Properties_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#Cisco%5FGeneric%5FTopic.dita%5Fa64e92de-79de-4f9c-9a8a-4c5a8cfe9c95) section in the _Cisco Webex Contact Center Setup and Administration Guide_. 

The Webex App from within the Agent Desktop does not support call control. To receive and make calls, agents require the external, non-embedded Webex App. For more information, see [_Calling Apps_](https://help.webex.com/en-us/landing/ld-nzid8xi-WebexCalling/Webex-Calling).

To access the Webex feature in the Agent Desktop, see the [Webex App (Webex)](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F01.html#Cisco%5FConcept.dita%5F12a52bc5-57ae-4bc8-b23c-ee26967f48d1) section in the _Cisco Webex Contact Center Agent Desktop User Guide_.

**Agent Desktop Enhancements**

- **Default Dial Number (DN)/Extension for Agent**  
If the default DN for the agent is configured by the administrator in the Management Portal (Provisioning \> Users \> Agent Settings \> Default DN), the default DN will be prepopulated in the following fields of the Station Login dialog box when the agent signs in to the Agent Desktop:

  - Dial Number (US Format)
  - Extension  
If the administrator restricts the DN to the default DN for an agent (Provisioning \> Agent Profile \> Agent DN Validation \> Provisioned Value), the agent cannot edit the prepopulated DN while signing in to the Agent Desktop. The DN will be read-only.  
For more information, see the [Sign In to the Agent Desktop](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F01.html#task%5FB2C692221907FD2AC2E8D33282FC6865) section in the _Cisco Webex Contact Center Agent Desktop User Guide_.
- **Configure Persistent Tabs in Custom Pages and Widgets**  
An administrator can configure tabs in custom pages and custom widgets as persistent by using the Desktop Layout. To configure persistent tabs, an administrator must set the following attributes for `md-tabs`:

  - Set `persist-selection` to `true`.
  - Set a unique identifier for `tabs-id`.

**Example**:  
```  
{  
 "comp": "md-tabs",  
 "attributes": {  
   "persist-selection": true,  
   "tabs-id": "unique-id for all the tabs together in the container"  
  },  
}  
```  
When `md-tabs` is set to be persistent (`"persist-selection": true`), the tab selection is retained even if an agent switches between pages or widgets in the Agent Desktop.  
The Auxiliary Information pane and the Agent Performance Statistics reports page in the Agent Desktop already show persistent tab behavior.  
For more information, see the [_Navigation (Custom Pages)_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F011.html#Cisco%5FGeneric%5FTopic.dita%5F36860c91-13d4-449b-8c26-6b732d7e396d) section in the _Cisco Webex Contact Center Setup and Administration Guide_.
- **Persistent Tabs in Agent Performance Statistics (APS) Reports**  
The APS reports page persists the previously selected tab even if the agent switches to any other page and then returns to the APS reports page.  
For more information, see the [Agent Performance Statistics Reports](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/desktop%5F20/webexcc%5Fb%5F20-desktop-user-guide/webexcc%5Fb%5F30-cisco-webex-contact-center-agent%5Fchapter%5F0110.html) section in the _Cisco Webex Contact Center Agent Desktop User Guide_.

### 20 September 2021

**Contacts in Queue and Agents Available Reports**

Two new real-time stock reports are introduced in the Analyzer–_Contacts in Queue_ and _Agents Available_. These reports are displayed as cards in the Contact Center Overview - Real-time Dashboard in the Analyzer, and also in the **Summary** tab of the Agent Performance Statistics page in the Agent Desktop.

The new reports enable users to gain information about contacts that are waiting in queue, and the availability of agents in specific teams, without the overhead of having to look for the information in tabular reports.

For more information about the reports, see [_Contact Center Overview - Real-Time Dashboard_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F010.html#topic%5F790AA402758034FA486F6E63A94C352B) in the _Cisco Webex Contact Center Analyzer User Guide_.

**Define Column Summary for Top-level Row Segment Group in Analyzer Reports**

The Analyzer UI now enables users to define column summary for the top-level row segment group in a report. A user can add formulas–Average, Count, Minimum, Maximum, Sum, and Custom for each column. This feature provides an enhanced data viewing experience for tabular reports.

For more information, see [_Customize Report Summary_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/Analyzer%5F2/b%5Fanalyzeronloinehelp/%5Fb%5Fanalyzeronloinehelp%5Fchapter%5F010.html#Cisco%5FConcept.dita%5Fe6f10f2a-dba5-438f-a459-02d25e56db24) in the _Cisco Webex Contact Center Analyzer User Guide_.

### 07 September 2021

**Dynamic Variables for Queue, Skills, and Call Priority**

This feature enhances the current Queue Contact activity in Flow Designer by enabling dynamic selection of the queue, skills, and call priority, rather than setting these parameter values statically. The flow developer can now select flow variables in the Queue Contact activity to configure the queue, skills, contact priority, and agent availability checks dynamically.

For more information, see [_Queue Contact activity_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FGeneric%5FTopic.dita%5Fc93b6399-3cd7-4c86-9e82-48a82469fb8e) in the _Cisco Webex Contact Center Setup and Administration Guide_.

### 17 August 2021

**Seamless Customer Upgrade Path from Webex Contact Center 1.0 to Webex Contact Center**

This feature allows customers who use the Webex Contact Center 1.0 platform to upgrade to the latest Webex Contact Center platform. After this feature is enabled, customers can access the new contact center capabilities without impacting the existing Webex Contact Center 1.0-specific contact flows. Customers can incrementally move Telephony, Chat, and Email workloads to the new platform and transition agents using a phased approach that best suits their business requirements.

For more information, see the article [_Upgrade from Legacy Platform to Cisco Webex Contact Center_](https://help.webex.com/en-us/nb2ve0e/Upgrade-from-Legacy-Platform-to-Cisco-Webex-Contact-Center).

### 09 August 2021

**Tenant Self-service Settings for Contact Center Administrators**

Tenant settings such as Enable Force Default DN (Dial Number), Enable End Call, Enable End Consult, Auto Wrapup Interval, Lost Connection Recovery Timeout, and Privacy Shield that were previously configured using the Customer Journey Platform Service Provider Portal are now moved to Control Hub. These tenant settings can be configured by contact center administrators and need not be managed by the Cisco Operations team. Going forward, all contact center administrator roles can manage these settings.

In accordance with this enhancement, the Settings tab in Control Hub is reorganized, and is divided into the following subtabs:

- **General:** Enables administrators to synchronize users between Control Hub and the Management Portal, provides information about the service details of your organization, and provides access to the Management Portal for advanced configurations. For more information, see the article [_Ways to Add Users for Cisco Webex Contact Center_](https://help.webex.com/en-us/52ulis/Ways-to-Add-Users-for-Cisco-Webex-Contact-Center).
- **Security:** Enables administrators to configure all security-related settings. This includes Privacy Shield, security settings for chat and email attachments, and content security policy. For more information, see the article [_Security Settings for Cisco Webex Contact Center_](https://help.webex.com/en-us/3srgv1/Security-Settings-for-Cisco-Webex-Contact-Center).
- **Voice:** Enables administrators to add inbound dial numbers that are used to receive customer calls. For more information, see the article [_Setting Up Voice Channel for Cisco Webex Contact Center_](https://help.webex.com/en-us/nhy3codb/Setting-Up-Voice-Channel-for-Cisco-Webex-Contact-Center).
- **Desktop:** Enables administrators to manage and configure voice channel features for the Agent Desktop, and the Auto Wrapup Interval and Lost Connection Recovery Timeout. The voice channel features include Enable Force Default DN, Enable End Call, and Enable End Consult. For more information, see the article [_Desktop Settings for Cisco Webex Contact Center_](https://help.webex.com/en-us/nu0du4c/Desktop-Settings-for-Cisco-Webex-Contact-Center).

### 03 August 2021

**Webex Contact Center Platform Launch in UK Data Center**

The new Webex Contact Center Platform is now available in the UK data center. Customers who select a Country of Operation that maps to the UK data center have the option to onboard to the new Webex Contact Center Platform. For more details on the available options for these customers, see the article [_Get Started with Cisco Webex Contact Center_](https://help.webex.com/en-us/nee1mb6/Get-Started-with-Cisco-Webex-Contact-Center).

### 27 July 2021

**New Digital Channels in Webex Contact Center**

New digital channels–WebChat, Email, Short Messaging Service (SMS), and Facebook Messenger–are now available in the new Webex Contact Center in both US and UK regions via imimobile integration.

Customers, when using these channels, can use the following enhancements that are powered by imimobile:

- **Flow Builder:** Flow Builder is an editor that enables customers to create interactive communication flows with minimal programming or scripting efforts. It has an easy-to-use drag-and-drop interface called Flow Canvas, which helps to build communication flows using Nodes.
- **Bot Builder:** With Bot Builder, customers can create a QnA or Task bot and integrate it via a Flow.
- The following new features are supported:

  - **Skills-Based Routing:** Administrators can assign skill requirements as well as skill relaxation criteria to contacts in the QueueTask node in the Flow Builder. Contacts are routed to agents based on skill requirements to meet the best match at that point in time in the flow.
  - **Screen Pop:** A screen pop is a window or dialog box that autonomously appears in an agent’s Desktop when the agent answers a customer conversation. Screen pops help the agent to get more information about the caller to proceed further with the conversation.
- The channel-specific capabilities allow hyperlinks and delivery receipts.
- All digital channels are part of the Premium Seat License. Charges are extra for SMS (Short Message Service) - short code, long code, and toll-free, and bot usage.

The new digital channels are released in _controlled GA (General Availability)_. Only those customers who have worked with the Cisco Solution Assurance team to plan their onboarding can avail the new digital channels. Migration from select older platforms is also supported.

For more information, see [_New Digital Channels_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wxcc-new-digital-channels.html) in the _Cisco Webex Contact Center Setup and Administration Guide_.

### 26 July 2021

**Import and Export Reports**

The Analyzer UI now provides administrators the option to import and export reports as individual files or as multiple files in a folder. This functionality enables administrators and partner administrators to export custom reports on a tenant and import them in other tenants.

**Improved View for Grouped Reports**

The Analyzer UI is improved to remove blank rows in grouped reports. This reduces the blank area in the reports and provides a better viewing experience.

### 19 July 2021

**Hide Inactive Users**

The **Users** page in the Provisioning module in the Management Portal provides a **Hide Inactive Users** check box to filter out inactive users. If the administrator checks the **Hide Inactive Users** check box, inactive users in the tenant are not displayed.

**Agent Desktop - Screen Pop Enhancement**

The **Screen Pop** tab in the Auxiliary Information pane of the Agent Desktop displays screen pops that are relevant to the currently selected interaction. For example, when an agent accepts an interaction from the customer Jane Doe, the **Screen Pop** tab of the Auxiliary Information pane displays the screen pop associated with the interaction with Jane Doe.

### 17 July 2021

**Ordering and Provisioning - IVR Port Add-on Offer**

By default, a customer is entitled to two IVR port licenses for every Standard or Premium agent license that the customer purchased. This feature introduces an IVR Port Add-on that allows the customer to purchase additional IVR port licenses, so that a higher number of sessions can be hosted on IVR.

**Multi-language Support for Virtual Agent**

Webex Contact Center integrates with Google Dialogflow to provide conversational IVR experience to customers. Previously, the Virtual Agent defaulted to the language _en-US_. The Virtual Agent functionality is now enhanced to support additional Google Dialogflow languages and voices. Customers can configure the input language and voice name for the Virtual Agent via the Virtual Agent activity in the Flow Designer.

**Virtual Agent Parameters**

Flow developers can now configure optional input parameters in the Virtual Agent activity. The input parameters pass extra custom information from the Webex Contact Center flow to the Google Dialogflow bot to implement advanced conversational experiences.

**Google Dialogflow Regionalization Support** 

Webex Contact Center customers can configure their voice and chat Virtual Agents by specifying the Google Dialogflow region. Google Dialogflow provides multiple regions to support regional deployments in order to reduce latency and meet data residency requirements. Customers can specify the Region ID when they configure the Virtual Agents via Control Hub, so that the data originating from Webex Contact Center is directed to the Google Dialogflow data center specified in the **Region** field.

**Agent Availability in Queue for Voice Calls**

A flow developer can now determine how many agents are currently available to service a queue. The Get Queue Info activity in the Flow Designer provides extra output variables, so that the flow developer can observe the status of the queue and take remedial action (for example, redirect to self-service or provide skill relaxation criteria) before routing the call to an under-serviced queue. This feature helps to avoid a potential overflow condition.

### 06 July 2021

**New Webex Contact Center Platform Launch in Australia Data Center**

The new Webex Contact Center Platform is now available for customers who have their Country of Operation mapped to the Australia data center. Customers who have worked with the Cisco Solution Assurance team during the A2Q process to validate their requirements against the new platform features can continue with the onboarding process. For more details on the steps required for onboarding, see the article [_Get Started with Cisco Webex Contact Center_](https://help.webex.com/en-us/nee1mb6/Get-Started-with-Cisco-Webex-Contact-Center).

**Google CCAI for OEM Customers**

Webex Contact Center customers can now use voice and chat virtual agents along with the Cisco-provided Google Cloud Platform project. Customers can now specify the Project ID and Region ID when they create Dialogflow virtual agents on Control Hub. With this feature, customers who purchase the Google CCAI (Contact Center Artificial Intelligence) OEM subscription from Cisco can associate multiple virtual agents with the same Google Cloud Platform project, and be presented with a consolidated Webex Contact Center bill that includes CCAI usage.

**Cisco Webex Experience Management-based IVR Post-call Surveys and Post-call Survey Reports** 

Webex Contact Center integrates with Webex Experience Management to conduct post-call surveys and collect feedback from customers. Post-call surveys can be conducted via SMS or email channels, or IVR.

 The following enhancements are available for post-call surveys:

- Administrators can configure IVR post-call surveys when an inline survey has to be played to the customer at the end of a voice call.
- Post-call surveys can be conducted via the voice channel, in addition to email and SMS.
- Details of post-call surveys, such as opt-in statistics, survey response rate, and survey completion rate, can be captured in the Post Call Survey report in the Analyzer.

The global variable `Global_FeedbackSurveyOptin` must be used in the flow and set to `true` to trigger the post-call survey. Existing flows must be updated to set this variable for conducting post-call surveys successfully.

### 21 June 2021

**Default Outdial ANI** 

Administrators can set a Default Outdial ANI (Automatic Number Identification) for the contact center organization. The **Default Outdial ANI** drop-down list in the organization’s **Settings** tab in the Provisioning module of the Management Portal displays all of the existing dial numbers that are mapped to entry points. The drop-down list enables the administrator to choose a dial number as the Default Outdial ANI for outdial calls from the organization.

When making an outdial call to a customer, if an agent does not select an outdial ANI from the **Select Outdial ANI** drop-down list, the Default Outdial ANI is used. The Default Outdial ANI will be displayed in the customer’s caller ID.

The Default Outdial ANI is applicable at the tenant level.

### 16 June 2021

**Agent Desktop Enhancement - Screen Pop Hyperlink** 

The screen pop notification in the Notification Center is displayed as a screen pop hyperlink. The text provided in the new **Screen Pop Desktop Label** field in Flow Designer is the display text for the hyperlink on the Agent Desktop.

### 08 June 2021

**Agent Desktop Enhancements**
- **RONA Enhancement:** Incoming call requests are not delivered to agents in case of phone, device, or network failure. Incoming call requests are returned to the queue, and the agent state is changed to RONA. New requests are not delivered to an agent who is in the RONA state.
- **Identify Agents for Consult or Transfer Call:** In the **Transfer Request** and **Consult Request** dialog boxes, the **Dial Number** drop-down list displays the enterprise address book. Names are available in address book entries, in addition to the **Phone Number** field that was already available. This helps agents to identify the correct Address Book entry to choose when they perform a consult or transfer during a voice call.
- **Profile Picture:** Agents can configure their profile picture when they activate the user account or later, using the [_Cisco Webex profile page_](https://help.webex.com/en-us/6xhst1/Webex-Add-Your-Profile-Picture). If an agent does not configure a profile picture, the User Profile displays the agent's initials.
- **Accessibility Compliance:** The Agent Desktop provides screen reader support for read-only User Profile elements. This is in compliance with the Web Content Accessibility Guidelines (WCAG) 2.0.
- **User Experience Enhancement:**

  - The media channel badge in the **Channel Capacity** section of the **User Profile** dialog box highlights only the relevant media channels for which the agent has capacity allocated.

### 02 June 2021

**Allow Customers to Configure a Mix of Toll and Toll-free Numbers for Cisco PSTN for Contact Center**

Prior to this enhancement, if a customer purchased the **Bundle 2: Inbound toll-free number access** option with the Cisco PSTN for Contact Center add-on, the customer had to configure all inbound numbers as toll-free. For billing, Webex Contact Center considered all dialed numbers as toll-free.

With this enhancement, Webex Contact Center can classify each number added to the tenant as toll or toll-free. Webex Contact Center billing is calculated based on call volumes on all toll-free numbers.

The following license usage reports are enhanced to help classify toll and toll-free numbers: 

- **License Usage Report:** This report is enhanced to provide customers a metrics of the daily observed Max Concurrent Toll-Free Calls. This is indicative of the usage of **Bundle 2: Inbound toll-free number access**. A breakup of the Max Concurrent Toll-Free Calls shows the composition of the calls connected to the Agent, IVR system, and Queue when the maximum value was observed. Additionally, the report provides the concurrent call volumes observed on tolled numbers at the time when Max Concurrent Toll-Free Calls was observed. A breakup of Concurrent Tolled Calls shows the composition of the calls connected to the Agent, IVR system, and Queue.
- **Historical License Usage Report:** This report shows the Max Concurrent Toll-Free Calls for the previous months. This report can access data from the past thirty-six months and can display data for a consecutive twelve-month period.

### 01 June 2021

**Agent Desktop Enhancements**
- **Default Title:** The new default title of the Agent Desktop is _Webex Contact Center_. The administrator can customize the default title at the global level or team level via the Desktop Layout.
- **User Experience Enhancements:**

  - The **Station Login** dialog supports the browser Autocomplete feature. Autocomplete saves the agent's time by automatically filling in the previously entered dial number(s) and extension number(s). The number of entries saved in the standard browsing mode is specific to the browser. To remove the saved entries, the agent must clear the browser cache. The Autocomplete feature is not supported in private browsing mode.
  - The **Keyboard Shortcuts** dialog now has a minimum height and width (in pixels), beyond which you cannot resize the dialog. This ensures that the content within the dialog remains readable.
  - The Auxiliary Information pane retains the agent's tab selection for a specific interaction even when the agent switches between interactions. For example, consider that the agent is on a voice interaction and has accessed the **Screen Pop** tab in the Auxiliary Information pane. The agent then switches to a chat interaction and accesses the **Contact History** tab. When the agent returns to the voice interaction, the **Screen Pop** tab selection is retained.

### 24 May 2021

**Filters in the Run Mode**

The Analyzer UI offers filtering capabilities when users execute reports in the run mode. This feature provides an enhanced report generation experience. Users can choose the filters to be displayed when they create or edit a visualization, or when they create a copy of the visualization. When the users run the visualization, the selected filters appear at the top-right corner of the visualization page. Users can filter the visualization using the appropriate filters, without having to edit the report.

### 28 April 2021

**Service Details in Control Hub**

A new **Service Details** section is introduced in the **Contact Center Settings** tab in Control Hub. This section enables administrators and support engineers to quickly identify the platform-level configurations that are applicable to the customer organization. The **Service Details** section provides the following information:

- **Webex Contact Center Country of Operation:** This field displays the country of operation that was selected in the Setup Wizard when the contact center tenant was provisioned. The field provides an indication of the geolocation of the tenant.
- **Webex Contact Center Platform Details:** The value `New Platform` displayed in this field confirms that the tenant is hosted on the latest Webex Contact Center platform.
- **Digital Channel:** The value `Native Digital` displayed in this field confirms that the tenant is using the current Digital Channel offering from Cisco. Additional values will be introduced for this field, as more contact center digital channel offerings are introduced in the future. This will help differentiate customers who use the Native Digital channel from those customers who will be using the upcoming digital channel offerings.
- **Voice Channel:** The value `Webex Calling Integrated` displayed in this field confirms that the tenant is using Webex Calling integration for telephony. Future enhancements to the contact center voice platform will introduce additional values for this field. This will help differentiate customers who use the `Webex Calling Integrated` platform from those customers who will be using the upcoming voice platform enhancements.
- **Webex Contact Center Telephony:** This field displays `Webex Contact Center PSTN`, `Webex Calling (CCP and Local gateway)`, or `Voice POP Bridge` to indicate the PSTN option that is applicable to the customer.

### 08 April 2021

**Agent Desktop Enhancements**

- **Availability State Search:** An agent can use the search field to search for the availability state to be displayed on the horizontal header of the Agent Desktop. The availability states are **Available**, and the idle states configured by the administrator.
- **Task List Pane Options:** The Task List pane in the Agent Desktop provides the following options:

  - **Accept All Tasks:** The agent can click the **Accept All Tasks** button to accept multiple digital channel requests (chat, email, and social messaging conversations) at the same time.
  - **New Replies:** The agent can click the **New Replies** button to scroll to view unread digital channel messages (chat or social messaging conversations).
- **Special Character Supported for Dial Number and Extension:** If an agent copies a Dial Number or Extension that contains special characters (!, @, #, $, %, ^, &, \*, ), (, =, ., <, >, {, }, \[, \], :, ;, ', ", |, \~, \`, \_, and -) to the **Dial Number** or the **Extension** text box, the special characters are removed when submitting the details. This is relevant for the following dialog boxes:

  - Station Login (Dial Number and Extension)
  - Transfer Request (Dial Number)
  - Consult Request (Dial Number)  
The only supported special character is +.
- **Desktop Layout JSON File Properties:**

  - **responsive:** A new property named **responsive** is added to the JSON file. This property determines whether a web component or an iFrame-based widget added in the custom layout at the `page` level or the `comp` level is responsive or not. This property can be configured with one of the following values:

    - **True:** Enables responsiveness of the widget. By default, all widgets are expected to be responsive based on the progressive screen sizes, orientation, and viewing areas of the device being used.
    - **False:** Disables responsiveness of the widget. If the widgets do not support viewing on different devices, mark them as non-responsive.
  - **visibility:** The **visibility** property value `NOT_RESPONSIVE` is deprecated, and you can continue to use it only for backward compatibility. Any value set as `NOT_RESPONSIVE` previously does not require modification, because the functionality remains the same. To set a newly created widget as responsive or not responsive, use the **responsive** property.

### 30 March 2021

**Flow Chaining**

The GoTo activity is introduced in Flow Control to terminate a current flow and hand off the voice call to an entry point or to another flow. Flow to entry point, and flow to flow are voice call handoff mechanisms to redirect calls based on business hours and during emergency conditions.

### 25 March 2021

**Call Prioritization**

Call Prioritization enables flow designers to assign priority to inbound calls in a queue. Flow designers can use the Queue Contact activity to assign a priority to a call. When an agent services multiple queues, the call with the highest priority across all queues is assigned to the agent. If two or more calls across multiple queues have the same (highest) priority, the call waiting for the longest duration is assigned first to the agent.

### 09 March 2021

**Agent Desktop Enhancements**
- **Logo and Title Enhancements:** The Agent Desktop now supports larger logos. The administrator can configure a logo comprising a larger image of up to 96 x 32 pixels (width x height). The Agent Desktop title can be an image or text. The logo and title together on the horizontal header of the Agent Desktop cannot exceed the maximum width of 304 pixels.
- **Refresh Data in Transfer Request and Consult Request Dialogs:** The **Refresh** icon in the **Transfer Request** and **Consult Request** dialogs in the Agent Desktop enables agents to retrieve the most recent list of agents, queues, or dial numbers.
- **Sub-layout Feature:** The Sub-layout feature enables an administrator to define nested desktop layouts using the Agent Desktop JSON layout file. The Sub-layout feature provides finer control over the widget placement and resize behavior.
- **Agent Transfer to an Entry Point:** Prior to this enhancement, if an agent was on a call with a customer on a workflow, the agent could transfer the call to another agent in the same workflow. But it was not possible for the agent to transfer the call to a different entry point associated with another workflow.  
With this enhancement, the agent can transfer the call to a different entry point associated with another workflow. All Call Associated Data (CAD) variables related to the first flow are carried forward to the new workflow.  
For example, if a customer is waiting in a queue that is related to debit card transactions, but intends to transact on credit cards, the agent servicing the customer can now transfer the call to the credit card workflow.

### 08 March 2021

**Download Call Recordings**

Administrators and Supervisors can download recordings of calls that were handled by Agents. A new API will be available to enable downloading of the recordings.

### February 2021

**New Cloud Data Platform Providing Historical and Real-time Data**

A new Cloud Data Platform is available for Webex Contact Center. The Cloud Data Platform is a big data stream processing platform, which offers increased throughput. The platform provides high data availability, processing real-time call and agent data in 3 to 5 seconds, and historical data within 30 minutes from the time of occurrence of an event. The Cloud Data Platform offers a secure data platform across all channels supported by Webex Contact Center. The platform provides reliable data across real-time and historical reports, ensuring data integrity.

Analyzer connects to the Cloud Data Platform to provide historical and real-time reports.

**Global Routing Overrides** 

A Global Routing Override is a routing strategy that can be applied to one or more entry points. When a contact arrives, the routing engine checks whether a Global Routing Override exists for that entry point. If a Global Routing Override exists, it is then used as the current routing strategy for the entry point, overriding any standard routing strategy associated with that entry point.

**Enhancements to Chat and Virtual Agent Template Creation**

The user experience on Control Hub for creating and editing Chat and Virtual Agent templates is enhanced to support certain platform upgrades. There is no change to the features provided by the templates.

### January 2021

**Skills Based Routing**

Skills Based Routing is a feature that matches the needs of callers with agents who have the skills to best meet those needs. When voice calls arrive, they are classified into subsets that can be routed only to agents who possess a required set of skills, such as language fluency or product expertise.

Webex Contact Center administrators can now assign skill requirements as well as skill relaxation criteria to calls in the flow. Calls are routed to agents based on skill requirements that are matched best at that point in time in the flow.

**Flow Control Usability Enhancements**

The Flow Control user experience is enhanced to support the following:

- The Flow Control now ensures that the users always enter a unique flow name.
- The Flow Control publishing experience is enhanced. The following functionality is available in the Flow Control UI after the user validates a flow and clicks the **Publish Flow** button:

  - If publishing fails, a Toaster Notification is displayed with the Tracking ID and Flow ID. The Tracking ID information can be sent to Cisco support for further assistance. The user can click the **Retry Publish** button to try again.
  - If publishing succeeds, the user is redirected to a confirmation screen, and will no longer be in the Flow Control UI.
- The **Global Properties** button is included in the zoom toolbar to enable users to quickly open the **Global Properties** pane. The **Global Properties** pane appears by default on the Flow Control canvas when a new flow is created or an existing flow is opened.

[2020](#Cisco%5FReference.dita%5F58d147a4-4de5-49d5-aa15-326a0e66b7b9)

### December 2020

**Blended Multimedia Profiles**

Blended Multimedia Profiles offer administrators the ability to configure the media channel types (voice, chat, email, and social) and the number of contacts of each media channel that an agent can handle simultaneously. This feature enables the contact center to balance the load efficiently across media channels, and also provide dedicated attention to customers, improving the customer experience.

Administrators can configure multimedia profiles of the following types:

- **Blended:** The administrator can select the media channels and the number of contacts per media channel that the agent can handle simultaneously. The administrator can set up to a maximum of one voice, five chat, five email, and five social contacts for an agent to handle simultaneously.
- **Blended Real-time:** Contacts of only one real-time media channel (either voice or chat) can be assigned to the agent at a point in time, along with contacts of other media channel types (email and social). The maximum number of contacts that an agent can handle simultaneously is one voice (default value), five chat, five email, and five social, with either voice or chat assigned to the agent at a point in time.
- **Exclusive:** Only one contact can be assigned to the agent across all media channels, at a point in time.

The administrator can then associate the multimedia profile to agents at the site, team, or agent level. The multimedia profile set for a team (via Provisioning in the Management Portal) takes precedence over the multimedia profile set for the site; the multimedia profile set for an agent takes precedence over the multimedia profile set for the team.

**Supervisory Capability to Sign Out Agents**

Supervisors can view the list of agents who are currently signed in to the Agent Desktop, using a new dashboard _Agent State Data – Realtime_ in the Management Portal. The dashboard provides supervisors the ability to sign out agents who are not handling any active contacts; that is, agents who are in the Available or Idle state across all media channels. This feature helps enterprises manage concurrent licensing costs.

**Flow Designer**

An all new visual scripting tool is introduced in Webex Contact Center, which allows partners and customers to create customized flows that automate contact center processes. The first release supports flows that handle voice contacts. These flows control how calls flow through the business. This powerful new application has all the functionality of Control Scripts and more, including an updated user interface and Activity nodes with new functionality.

**Conversational IVR - Self-service**

Self-service is enhanced with new features. The following IVR (Interactive Voice Response) functionalities and activities are available in Flow Designer:

- **Text-to-Speech:** This functionality converts arbitrary strings, words, sentences, and variables into natural-sounding, synthetic human speech that can be played dynamically to a caller.
- **Virtual Agent:** This activity provides the capability to handle conversations with end users. The virtual agent, powered by Google’s Dialogflow capabilities, provides the speech based Self-service functionality to understand the intent of a conversation and assists the customer as part of the IVR experience.
- **Blind Transfer:** This activity provides the capability to transfer a voice contact to an external Dial Number through the IVR without agent intervention.
- **Disconnect Contact:** This activity provides the capability to disconnect a contact in the IVR.

The following functionalities are available in the Agent Desktop:

- **IVR Transcript:** An agent can view the conversational IVR transcript in the IVR transcript widget.
- **CAD (Call Associated Data) Variables:** An agent can view or edit CAD variables based on the configurations that are set in the call flow by the administrator.

The following report is available in the Analyzer:

- **IVR and CVA Dialog Flow Report:** This report provides the self-service operational metrics, which includes the number of abandoned calls in self-service and the number of abandoned calls in a queue. Multi-level drill-down on the row segments in the report provides detailed information related to the corresponding entity.

**Virtual Agent - Voice**

Customers can now offer a Conversational IVR experience to callers by using the virtual agent created in Google Dialogflow. The customers no longer need to navigate through the unwieldy DTMF-based IVR menus; instead, they can speak for self-service.

Customers can configure the Dialogflow service account details in the Control Hub. After the account details are configured, the routing strategy provides an option to connect a Dialogflow virtual agent to drive the IVR. Customers can also configure how the escalated calls need to be handled by creating a mapping between escalation intents and agent queues.

**Opt Out of Queue and Estimated Wait Time**

This feature enables options to be presented to the customer using the IVR, while the customer waits in queue to be connected to an agent in the contact center. The customer can be informed of the estimated wait time (EWT) and Position in Queue (PiQ) using the Text-to-Speech functionality. Options can be provided to the customer such as to opt out of the queue and receive a callback, leave a voice message, or continue to wait in the queue.

**Courtesy Callback** 

A customer, when waiting in queue for an agent to become available, can be offered the option to receive a callback rather than having to wait in queue to connect to the agent. The customer can retain the position in queue and receive a callback to the customer’s dialed number, or a number of the customer’s choice. This feature enables the contact center to enhance the customer experience, especially during peak hours when the wait time is more.

**Outdial Transfer to Queue**

An agent can make an outdial call from the Agent Desktop and can then transfer the call to another queue in the contact center if required, based on the conversation with the customer.

**Outdial ANI**

An agent can select a phone number from the outdial ANI list while making an outdial call. Outdial ANI enables an agent to select a phone number that is displayed as the caller ID to the recipient of the outdial call. The outdial ANI list must be added to an agent profile by the administrator.

**Pause and Resume**

An agent can invoke the Pause and Resume recording events from the Agent Desktop during a call. The events are stored in the customer activity record (CAR). The CAR is made available to WFO/WFM providers through an API. If there is a delay in resuming the recording beyond the allowed time lapse, the Privacy Shield feature auto-resumes the recording.

**Change Team without Signing Out of the Agent Desktop**

An agent signed in to the Desktop can change to a different team without signing out of the Desktop. The agent can change team only when there are no active contact requests or conversations. When an agent changes team successfully, the desktop layout and the routing strategy (voice or digital channel) of the new team are applied.

**Agent Desktop Features**

A new extensible Agent Desktop is available in this release. The following new features are introduced:

- **User Experience Enhancements:** The Agent Desktop has undergone a user experience refresh. The desktop has a comprehensive new look with the functionalities configured by the administrator in the Desktop Layout.
- **Agent State Timer and Connected Timer:** The agent state timer displays the time that has elapsed since the agent was in the current state. If an agent is in an Idle state and switches between any other Idle states, the timer displays the time spent in the current state, and the total time spent in all the Idle states together. After the agent accepts a request, the connected timer displays the time that has elapsed since the request was accepted.
- **Pause and Resume Recording:** Agents can pause and resume the recording of a call.
- **Channel Capacity:** Agents can view the number of contacts that can be handled on each media channel at a given point in time.
- **Notification Settings:** Agents can enable or disable desktop notifications, silent notifications, and sound notifications.
- **Toaster Notifications:** The Agent Desktop supports browser toaster notifications.
- **Screen Pop:** The browser pops up on the Agent Desktop when an agent accepts an incoming call. The agent can view screen pop details either in a new browser tab, existing browser tab, or the **Screen Pop** tab of the Auxiliary Information pane, based on the screen pop display and the desktop layout settings.
- **Reset the entire desktop layout:** Agents can reset a customized layout to the default desktop layout.
- **Keyboard Shortcuts:** Agents can use keyboard shortcuts for specific desktop functionalities.
- **Switch to Dark Mode:** Agents can enable or disable the dark background theme of the Agent Desktop.
- **Download Error Report:** If an agent experiences problems with the Agent Desktop, the agent can download error logs and send the error logs to the administrator to investigate the issue.
- **Campaign Call:** Agents can preview the customer's contact information before making an outbound preview campaign call.
- **Agent Sign Out:** Agents are notified when the supervisor signs out an agent from the Agent Desktop.
- **Install as an Application:** Agents can install the Agent Desktop as a desktop application.
- **Localization:** The Agent Desktop user interface supports localization in 27 languages. The following languages are supported:  
Bulgarian, Catalan, Chinese (China), Chinese (Taiwan), Croatian, Czech, Danish, Dutch, English, Finnish, French, German, Hungarian, Italian, Japanese, Korean, Norwegian Bokmål, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swedish, and Turkish.
- **Accessibility:** The Agent Desktop supports features that improve accessibility for low-vision and vision-impaired users.
- More user experience enhancements which include the following:

  - Incoming requests that appear either in the Task List pane or in a popover flash for a few seconds, before the agent state is changed to RONA.
  - A badge in the Task List pane indicates the number of unread chat and social messages in a conversation.
- Browser support includes Microsoft Edge Chromium (MS Edge V79 and later).
- Multiple agents can edit and save CAD (Call-Associated Data) variables with real-time updates.
- Agents can make outdial calls when they are in the Available state.
- Agents can enable sound notifications to play sound and use the slider to adjust the volume.
- The Agent Interaction History pane displays details of the previous communications that the agent had in the last 24 hours, across customers.
- The **Contact History** tab in the Auxiliary Information pane displays the previous communications with the customer for the last 90 days. The Contact History is consolidated for all digital channels, whereas for Voice, the history is restricted to the Voice Channel.
- The Agent Desktop supports a responsive view that enables easy reading and navigation across small (< 640 pixels), medium (641 to 1007 pixels), and large (> 1008 pixels) screen resolutions. The recommended display size for the Agent Desktop is 500 x 400 pixels or higher. Non-responsive widgets cannot ensure the best user experience and are not displayed in the smaller view.

**Desktop Layout**

The Desktop Layout feature allows the administrator to customize the Agent Desktop layout and assign it to a team.

There are two types of desktop layouts:

- **Default Layout:** A system-generated desktop layout that is available for all of the teams.
- **Custom Layout:** The layout that the administrator creates based on the requirements of specific teams, and assigns to one or more teams.

The custom layout allows the administrator to customize the following:

- Title and Logo
- Drag-and-drop and resize widgets
- Notification timer and maximum notification count
- Custom icons, custom tabs, custom header, custom pages, and custom widgets
- Persistent Widgets: Any custom widget can be defined as persistent. Persistent widgets are displayed on all pages of the Agent Desktop.
- Screen Pop: The browser pops up on the Agent Desktop when an agent accepts an incoming call. The agent can view screen pop details either in a new browser tab, existing browser tab, or the **Screen Pop** tab of the Auxiliary Information pane based on the screen pop display and the desktop layout settings.

The administrator can add or remove the following widgets in the custom layout:

- IVR Transcript
- Campaign Contact and Call Guide
- Cisco Webex Experience Management Widgets: Customer Experience Journey (CEJ) and Customer Experience Analytics (CEA)

The following Experience Management widgets are displayed on the Agent Desktop only if your administrator has configured the widgets:

- **Customer Experience Journey (CEJ):** Displays all past survey responses from a customer in a chronological list. The widget helps agents to gain understanding about the customer’s past experiences with the business, and engage appropriately with the customer. This widget is automatically activated when an agent engages with a customer through a call, chat, or email. An agent can view ratings and scores such as Net Promoter Score (NPS), Customer Satisfaction (CSAT), and Customer Effort Score (CES) along with all other feedback collected from a customer.
- **Customer Experience Analytics (CEA):** Displays the overall pulse of the customers or agents through industry-standard metrics such as NPS, CSAT, and CES, or other KPIs tracked within Experience Management.

When an agent signs in to the Agent Desktop, the desktop layout associated with the agent's team is available to the agent. The agent can customize the desktop layout by using the Drag-and-Drop and Resize features. 

In addition to requesting data to be passed to the widgets through properties and attributes, the administrator can perform more complex operations by consuming and manipulating the system data within the widget by using the Agent Desktop JavaScript SDK (Software Development Kit) package.

**RONA Popover**

If an agent is unable to accept any contact request (voice or digital channel) within the time period configured by the administrator, the contact request is returned to the queue and the system changes the agent state to RONA. The system cannot deliver any new contact requests to an agent who is in the RONA state. When an agent is in the RONA state, a popover appears with the following options:

- **Go To Idle:** Indicates that the agent can change the state from RONA to the default idle reason configured by the administrator.
- **Go To Available:** Indicates that the agent can change the state from RONA to Available, to accept and respond to contact requests.

**New URL for Analyzer**

Users can now access Analyzer using the new URL <https://analyzer.wxcc-us1.cisco.com/analyzer/home>.

**Using Webex Contact Center with Webex Calling**

Customers who are subscribed to both Webex Contact Center and Webex Calling can use their Webex Calling Dial Number (endpoints) as their preferred agent endpoint devices when used in conjunction with the Webex Contact Center Agent Desktop. This enables agents to log in using their Webex Calling extension number and be remote on supported Webex Calling devices and clients, and enable on-net call transfers to internal users on both the solutions bypassing the PSTN and saving on toll charges.

Webex Contact Center supports the following agent devices for Webex Calling endpoint devices (clients):

- Webex Calling Desk Phone
- Webex Calling Desktop App (PC Audio)
- Webex Mobile App on the cell phone
- Webex Client that is integrated with Webex Calling (PC Audio)

**Call Manager Integration with Webex Contact Center**

This feature enables integrating Webex Contact Center with On-premises Call Manager via the Webex Calling Local Gateways (LGW) connectivity option. With this capability, Webex Contact Center agents can use the connected Private Branch Exchange (PBX) extensions as the agent device.

This feature enables enterprises that use LGWs, such as the Cisco Unified Border Element (CUBE) or the Session Border Controller (SBC) along with Webex Calling, to integrate with Webex Contact Center.

**OEM Integration with Acqueon - Preview Campaigns**

Webex Contact Center is integrated with the Acqueon LCM (Link and Campaign Manager) application to enable outbound preview campaign management for the voice channel. Administrators can configure outbound preview campaigns using the Acqueon LCM interface. Agents can then initiate campaign calls from the Agent Desktop. When an agent initiates a campaign call, a new contact is dynamically retrieved from the ongoing active preview campaigns and assigned to the agent.

Various campaign reports are available in the Campaign Manager modules. Administrators can measure the effectiveness of campaigns via the OEM Integration with Acqueon report in the Analyzer.

**Cisco Webex Experience Management Post-Call Survey**

Webex Contact Center is integrated with Webex Experience Management, the platform for Customer Experience Management (CEM). This enables administrators to configure SMS and email post‐call surveys to collect feedback from customers.

**Social Messaging Channels**

Social Messaging is trending as a major way to connect with businesses, to perform all types of one-on-one customer service and query processing tasks. It is asynchronous and personal; Social Messaging apps are already familiar to customers as a means to communicate with friends and family.

Webex Contact Center now supports Social Messaging channels. Customers can interact with agents in the contact center via **Facebook Messenger** and **SMS (Short Message Service)**. While customers use their Social Messaging app to interact with agents, agents handle the contacts similar to web chat, which does not require any additional training. Additionally, Social Messaging conversations can be integrated with a Virtual Agent (bot) for Chat to enable customers to get self-help before being routed to a live agent, just as in web chat. Intents detected by the Virtual Agent can be used either to service the request directly, or to route the contact appropriately.

The integration supports Google Dialogflow. For SMS, customers need to procure one or more SMS numbers from the supported vendor MessageBird ( [_www.messagebird.com_](http://www.messagebird.com)). For Facebook Messenger integration, customers must have a Facebook page.

**Business Rules Engine Support through Flow Control**

The Business Rules Engine (BRE) provides a means for tenants to incorporate their data into the Webex Contact Center environment for custom routing as well as for general implementation. With this feature, new and existing customers who are already using the Business Rules Engine (BRE) solution with Webex Contact Center can leverage BRE data through Flow Control for their organization.

**Service Specific Administrator Role for Webex Contact Center**

A new service specific administrator role is introduced for Webex Contact Center. This role can be assigned to external administrators and administrators in the customer organization. The service specific administrator role enables restricted administrative access on Control Hub. An administrator with this role can manage contact center licenses and administer the contact center service.

Support for provisioning administrators is also enabled in this release. Partner administrators who have provisioning administrator privileges for the contact center service can perform all activities that a partner full administrator can perform.

Support for external read-only administrators is available with this release. External administrators with the read-only role can access all Webex Contact Center administrative interfaces in the read-only mode.

**External Administrator Support in Flow Designer** 

Flow Designer is enhanced to support external administrators. External administrators can view, create, modify, and delete flows using Flow Designer. External administrators with read-only privileges can only view the flows in Flow Designer.

**Content Security Policy**

Content Security Policy defines an approved list of trusted domains that can be accessed from Webex Contact Center applications. This feature helps comply with the content security policy framework that browsers enforce.

We are sharing details about our planned feature releases that are coming out soon. Cisco may make changes to the anticipated features in its sole discretion. You can subscribe to this article to get updates on any changes.

## February 2026

### Custom events for autonomous AI agents

Custom events enable autonomous agents to raise events and pass data into the flow environment, allowing developers to dynamically transfer control between the agent and the flow environment for fulfillment—without interrupting the ongoing conversation. With the new “Custom Event” fulfillment option, developers can trigger events with collected slot data, leverage the voice flow builder for fulfillment, and seamlessly resume conversations after external processing, all while preserving session context and history.

This enhancement also extends PCI support to autonomous agents: sensitive data is redacted in transcripts and logs, but remains available for secure fulfillment in voice flows. Additionally, developers gain the flexibility to build fulfillment logic within a single voice flow or to create individual fulfillment flows using Webex Connect.

### Flow Designer Enhancements

We are pleased to announce the following enhancements to Flow Designer!

The "NewPhoneContact" (Start Flow) activity is getting renamed to "NewContact," marking the beginning of an omnichannel start node that will support both voice and work items. Digital channels support will also be added into this omnichannel start node in future. 

Additionally, connecting an End activity to a port is no longer mandatory and is now a recommendation. This will reduce unnecessary validation errors and will simplify the flow publish process.

### Custom transfer action in autonomous AI agents

We are excited to announce the upcoming launch of the custom transfer action feature in autonomous AI agents! This new capability will enable seamless call transfers between AI agents, ensuring a smooth and efficient customer experience.

With this feature, you will no longer need to rely on a single, complex AI agent. Instead, you can create multiple specialized mini AI agents, each designed to handle specific tasks. When needed, simply use the custom transfer action to direct calls to another AI agent. This approach will streamline operation and boost the efficiency of your support team.

### Enhancements on encryption of file attachments in Webex Contact Center

We are pleased to announce data security enhancements for Webex Contact Center customers using digital channels to interact with their clients. Webex Contact Center will soon support the encryption of file attachments handled via digital channels while providing each organization with a unique encryption key. This enhanced encryption feature empowers customers to retain complete control over their encryption keys, ensuring jurisdiction over their data.

All file attachments in inbound or outbound communications will be secured using key-based end-to-end encryption. Each tenant is granted access to a unique key generated by the Webex Key Management System (Webex KMS). The KMS facilitates real-time encryption and decryption of attachments within the solution and promotes a seamless conversation flow.

Cisco will also provide a Software Development Kit (SDK) that companies can use to decrypt these file attachments before forwarding them to other business applications such as CRM, ERP, Billing, or WFO. Cisco will make this SDK available for public access in the first quarter of 2025, along with a development guide and code samples, to assist customers in updating the integration with those applications.

This encryption enhancement will be enabled for all Webex Contact Center customers a few months after the public SDK becomes available, giving customers enough time to prepare. All new Webex Contact Center tenants will have this enhancement enabled by default once the feature becomes available.

We will share specific dates in upcoming articles and other communication channels. Stay tuned!

### Multi-language Support for AI Assistant

Webex Contact Center’s AI Assistant is being enhanced with broad multi-language support. Previously available primarily in English, the AI Assistant features will soon be able to process conversations and generate insights in multiple languages. This enhancement aims to improve both agent efficiency and customer satisfaction worldwide by enabling teams to effectively serve a global customer base.

The following AI Assistant features will be enhanced with multi-language support:

- **Real-time Transcription**—Delivering accurate, live transcription of spoken conversations.
- **Summaries**—Generating AI-powered, concise summaries of call interactions.
- **Suggested Responses**—Providing agents with context-aware response suggestions in real-time.

**Supported Languages**

These languages are supported in Phase 1: Bahasa (ms), Chinese – Simplified, Chinese – Traditional, Danish, Dutch, English, French, German, Italian, Japanese, Norwegian, Polish, Portuguese, Spanish, Swedish, Thai

### Mandatory rollout of enhanced Agent Desktop user interface

As part of our commitment to delivering an intuitive and efficient platform, the **enhanced user interface for Agent Desktop**, initially released on **July 31, 2025**, will undergo a mandatory rollout for all agents on **October 31, 2025**.

Currently, agents have the option to enable the new UI or continue using the classic interface (via Desktop \> User Settings \> Switch to New Look). Effective **October 31, 2025**, this enhanced Agent Desktop UI will be the standard, and the option to revert to the previous interface will no longer be available.

We encourage you to ensure your agents are familiar with the enhanced Agent Desktop UI before this date to facilitate a seamless transition.

For an overview of the visual enhancements, streamlined layouts, and benefits of this updated interface, see [Enhanced user interface for Agent Desktop](https://help.webex.com/en-us/article/n3v7ldh/What%27s-new-for-agents-in-Webex-Contact-Center#section%5Fofr%5Frr1%5F2gc).

### Answer calls on your device directly from Agent Desktop

We're introducing a new enhancement for agents using Webex Calling devices or phones. If you're using a Webex Calling device that supports remote call answering, you can answer calls directly from the Agent Desktop! Previously, agents were notified of the call but had to answer it using their device. Now, there is no more switching between screens or devices-just click to answer. 

To avail of this feature Agents need to [Toggle Manage Webex Calling Calls in Agent Desktop to ON](https://help.webex.com/en-us/article/hdoryv/Set-up-and-manage-your-notifications#enable-or-disable-notification-settings). 

- **If you have one Webex Calling device:**  

  - You can answer calls directly from the Agent Desktop—no additional setup needed.
- **If you have multiple Webex Calling devices:**  

  - Go to your **Profile Settings** and select your preferred device for answering calls. Note that the Webex App is a Webex calling device.

For more information, see [Optimize Webex Contact Center Desktop call notifications](https://help.webex.com/article/u5dbtfb/) and [Set up and manage your notifications](https://help.webex.com/article/hdoryv/).

### Support for Agent variables in Quick replies/Templates

Administrators can now easily populate agent name variables when configuring Quick Replies / Templates for their agents. As part of this enhancement, Admins can leverage the following agent variables: first name, last name, and full name within the Quick Replies. This enhancement enables use cases to add the agent's signature when responding via quick replies, ultimately improving agent productivity.

### Complex Call Events in Webex Workforce Optimization

Webex Workforce Optimization now unlocks the power of in-depth call analysis with our Complex Call Events feature! Dive deep into call transfers, conferences, consultations, and more to gain valuable insights into agent interactions and customer experiences. This feature enables integration of audio recordings, screen recordings, and metadata for thorough analysis. Stay tuned for the launch and look forward to enhancing your Quality Management practices!

### Remove the dependency of Contact WrapUp Events

We will enhance the CAR records to include a new Activity State for WrapUp complete. The string for new activity state will be 'wrapup-completed'. This does not impact any existing calculation or reports.

### Enhanced Clarity with Background Noise Removal for Contact Center Agents

Webex Contact Center is launching a feature that eliminates background noise during customer interactions. This cutting-edge feature is engineered to fine-tune customer-agent interactions, ensuring that voice clarity prevails even in the noisiest of environments. Stay tuned for a seamless experience where your agents can focus on what matters most—the customer, without any interruptions. 

### Digital channel enhancements

We are enhancing the digital channels with the following improvements:

- When composing messages, agents will soon be able to insert additional line breaks, enabling better formatting and enhanced readability.
- When uploading attachments, the system will automatically open the files enabling agents to filter and select only the supported attachments.

### Abandoned Chats Notification in Webex Contact Center Live Chat

Stay informed and in control with our upcoming Abandoned Chats feature. When a customer closes their browser or tab during a live chat, agents will instantly see a notification in the conversation pane, letting them know the customer has left. No more waiting in uncertainty—agents can follow up or add notes as needed, with conversations remaining open for maximum flexibility.

This notification appears only when a customer exits by closing the browser or tab—not for simple page refreshes or navigation within the same website.

### Allow Filtration in Custom Formulas

We are excited to introduce an enhanced user experience in Analyzer tool, designed to streamline and simplify the filter creation and modification process. Users will now have the ability to create complex filtering conditions using both AND and OR logical operators, and also to nest conditions as needed. Building filters will now be more intuitive, with existing filters automatically converting to the new format upon editing-ensuring a smooth and seamless transition. These enhancements focus on data filters during the report creation process, where conditions are applied at the data level. When running a report, the data will also be filtered based on user-defined filter conditions, providing the report at desired granularity.

Additionally, we are also simplifying profile variables editing experience by consolidating all functions including Show/Hide, Delete icons into single-click action, enhancing accessibility.

### Granular Agent State Control by Media Type

We’re excited to announce an upcoming feature that will provide consistent, accurate visibility and control of agent state for each media type—Voice, Chat, Email, and Social—across all Webex Contact Center interfaces. Agents will soon be able to manage their availability per channel, empowering them to handle interactions with greater flexibility and supervisors to monitor agent readiness in real time. Stay tuned for a more transparent and efficient agent experience!

### Enhancements to CTI Connectors for Salesforce CRM, ServiceNow, and Microsoft Dynamics

Webex Contact Center is introducing significant enhancements to its CTI connectors for Salesforce CRM, ServiceNow, and Microsoft Dynamics. These updates are designed to deliver a streamlined, integrated desktop experience for agents, increasing productivity and efficiency through the following key enhancements:

**Key Enhancements:**

- **Synchronization of Webex Calling State with Webex Contact Center State:**  
Agent status is now automatically aligned between Webex Calling and Webex Contact Center, enabling administrators to better manage agent availability and ensure focused, uninterrupted customer interactions.
- **Predictive Campaign Handling:**  
Predictive campaign calls can now be handled from within the CRM. This enhancement unifies high-volume outbound workflows, keeping agents engaged with live connections in a seamless environment.
- **Cancel Auto-Wrapup Timer:**  
Agents now have the flexibility to extend their scheduled wrap-up time when needed. This option supports more accurate post-call documentation and helps reduce agent stress.

### Call recording in Webex AI Agent Studio

Webex AI Agent Studio's upcoming support for recording voice calls between AI agents and customers empowers organizations to enhance service quality, streamline compliance, and drive continuous improvement. With access to recorded conversations and transcripts directly within the platform, businesses can efficiently review interactions, optimize customer experience, and ensure adherence to regulatory standards. Additionally, automatic protection of sensitive PCI data in recordings helps safeguard customer information and support industry compliance requirements.

## March 2026

### Introducing Webex AI Quality Management

**Feature enablement** 

We are excited to introduce Webex AI Quality Management. Organizations would get access to the features after they purchase the corresponding SKU. Once the SKU is purchased, admins with necessary permissions can enable/disable the features from ‘AI Features’ within ‘Desktop Experience’ 

The following features will be available for AI Quality Management: 

1. Evaluation and Speech Analytics
2. Sentiment Analysis
3. Coaching Insights
4. AutoCSAT

For sentiment analysis and AutoCSAT, they can further select queues for enablement. To access Sentiment Analysis, Real Time Transcripts must be enabled for the queues. 

After feature enablement for the organization:

- Evaluation forms need to be created and assigned in the Supervisor desktop.
- Coaching insights need to be enabled and configured for teams on the supervisor desktop.

**Configure AI Quality Management permissions for** [User Profiles](https://help.webex.com/en-us/article/nzmlgqi/Manage-access-in-Webex-Contact-Center) 

New permissions for AI Quality Management have been introduced for administrator and supervisor user profiles. 

The following permissions have been introduced for Administrator profiles: 

1. Evaluations & Speech analytics
2. Sentiment Analysis
3. Coaching Insights
4. AutoCSAT

Administrators with these access rights in their profile can view/edit these features on Control Hub for their organization under ‘AI Features’. 

The following permissions have been introduced for Supervisor profiles: 

1. Evaluation Forms
2. Coaching Insights

Supervisors with these access rights in their profiles can create evaluation forms and configure coaching KPIs on the supervisor desktop. 

Supervisors without these access rights can still view evaluation form responses and view coaching insights. They do not have access to create forms or configure coaching KPIs.

### Simplified Admin Experience for AI Features

We are excited to announce a new, streamlined administrator experience for enabling the AI Assistant and AI Quality Management features in Webex Contact Center! With this update, administrators will be able to activate AI capabilities at the organization level and further map them to Queues/Agents as needed in just a few clicks. It can be accessed from ‘AI features ' under ‘Desktop experience’ on Control Hub. 

Organizations that have purchased AI Assistant and / or AI Quality Management SKUs will access the features listed below: 

Features included in AI Quality Management SKU

- Evaluations and Speech analytics
- Coaching Insights
- Supervisor Team Performance Dashboard
- Auto CSAT
- Sentiment Abalysis

Features included in AI Assistant SKU

- Generated Summaries
- Real time transcriptions
- Agent Wellbeing
- Real-Time Assist
- AutoCSAT
- Sentiment analysis

- Organizations without either of these SKUs can only access predicted wait time under this section.
- The existing ‘AI Assistant’ tab will be replaced with ‘AI features’.

This consolidated approach saves time, boosts efficiency, and helps organizations quickly deploy AI-powered tools that enhance agent productivity and elevate customer experience.

### India PSTN Compliance and Policy Controls for Webex Contact Center

We’re introducing enhanced policy controls for Webex Contact Center (WxCC) to help you meet Indian PSTN regulations. Enabled by our upcoming India Data Center (DC), this feature enforces toll bypass rules by restricting PSTN calls from India to agents within the country.

Admins will have new tools to build compliant call flows, manage Automatic Number Identification (ANI) lists, and monitor operations. Whether you’re a domestic or international organization, these controls ensure your contact center deployments stay secure and compliant with local laws.

### Webex AI agent knowledge base enhancements

We're excited to share an upcoming enhancement to the Webex AI Agent Knowledge Base! Soon, administrators will have the ability to add web URLs as knowledge base sources, making it easier than ever to incorporate website content. This new feature will also allow manual synchronization, ensuring that any updates or changes to website content are seamlessly reflected in the knowledge base.

We’re also updating the overall design of the Knowledge Bases page to show a unified view of sources for easier navigation and management.

Also, we're updating our terminology: the 'Document' option will be renamed to 'Article' for greater clarity and consistency. Stay tuned !

### Personalize Your Agent Desktop with New Theme Options

We’re excited to announce that theme personalization is coming soon to the Webex Contact Center desktop! Agents will soon have the flexibility to choose from three professionally designed, out-of-the-box desktop themes, making it easier to find the look and feel that best suits their needs and work style. This enhancement not only improves comfort and accessibility but also lays the foundation for custom theme support in the future.

Stay tuned for more updates, including a preview of the new backgrounds and available theme selections.

### Share Your Experience with In-App Satisfaction Ratings and Feedback

We’re excited to announce a new way for agents and supervisors to share feedback directly from the Webex Contact Center desktop. Soon, you’ll be able to rate your experience and provide valuable comments using a convenient in-app feedback tool.

Look for the new feedback icon above the Help button on your desktop’s navigation bar. Clicking the icon will open a quick feedback form, where you can select a rating (1 to 5 stars) and add written comments—helping us improve your product experience. Your feedback is saved if you close the form and return later, and you’ll receive a confirmation once your input is submitted.

### New AI Engine for Autonomous Webex AI Agent—Webex AI Pro Europe

We’re excited to announce the upcoming launch of Webex AI Pro Europe—a new addition to our Webex AI Agent offering. This advanced, localized, and fine-tuned AI engine is purpose-built to deliver an enhanced voice experience tailored to European customers. 

Webex AI Pro Europe is optimized for regional accents and designed to meet stringent European regulatory requirements, ensuring compliance and superior call quality. Initially available in English, we plan to expand support to additional European languages soon. 

Stay tuned for updates as we bring a smarter, more localized AI voice solution to your region!

### Recurring Overrides and Holiday Hours for Business Hours

 Admins will be able to set overrides and holiday hours based on specific days of the week or month. Additionally, admins can define time ranges for overrides and holiday hours within a single day, or have these settings recur across multiple days. For example, you can schedule an override for the 3rd Monday of every month between 1 PM and 2 PM for the next year, or set holiday hours on the 11th day of each month with no end date. Stay tuned for updates!

### Expanded Language Support in Webex WFO Analytics

Webex WFO is expanding its analytics capabilities to support seven additional languages: Turkish, Filipino, Thai, Bahasa, Greek, Hungarian, and Czech . This enhancement will extend analytics coverage across both voice and digital channels, enabling broader global adoption.With this expansion, customers will be able to leverage key analytics capabilities such as Auto QM, Interaction Summary, Trending Topics, Advanced Sentiment, and more for these languages. This ensures consistent, AI-driven insights and quality analysis across more regions and customer interactions.

### Webex WFO: Manage Workflow Control Sets on the Web

Webex WFO is moving Workflow Control Set management from the WFM client to the web for a more streamlined, browser-based administration experience.

From March 31st, 2026, this functionality will no longer be available in the WFM client and will be fully managed on the web. 

This change supports simpler access, centralized control, and ongoing platform modernization.

### Enhancements to CTI Connectors for Salesforce, ServiceNow, and Microsoft Dynamics

Webex Contact Center is preparing to launch exciting new enhancements to its CTI connectors for Salesforce CRM, ServiceNow, and Microsoft Dynamics. The February update continues our mission to empower agents and administrators with a more collaborative, configurable, and productive desktop experience. Here’s a preview of what’s coming:

Key Enhancements:

- Multi-Party Conference Support: Agents will soon be able to add up to eight participants to a single call, making it easier to bring together subject matter experts or stakeholders and deliver faster, more comprehensive resolutions.
- Extend Search to Webex Directory: Agents can search the full Webex Directory—including non-contact center users—directly from within their CRM. This enables agents to easily locate and collaborate with colleagues across the organization.
- Salesforce Auto Activity Configurability: Administrators will have new, granular controls for Salesforce activity management, including options to enable or disable activity record creation and configure when screen pops occur—on call connection or during wrap-up.
- In-Interface Search for Salesforce Records: Agents can quickly access customer data by searching Salesforce records directly from within the integration, reducing time spent switching between applications.
- Enhanced Campaign Handling: Both progressive and predictive campaign call workflows continue to be unified and improved, keeping agents focused and efficient within their CRM interface.

### Near Real-time Topic Analytics

Experience instant visibility into emerging customer trends with the new Topic Analytics. As customer interactions occur, topics are automatically discovered and labeled—empowering you with real-time, actionable insights. This dynamic capability enables your team to quickly adapt to evolving needs, optimize operations, and proactively address potential issues.

Stay ahead with faster, data-driven decisions, powered by Topic Analytics.

### Modern and Unified Flow Designer Experience in Webex Contact Center

The Webex Contact Center Flow Designer will now feature a modernized canvas with a comprehensive user experience refresh, delivering a consistent, accessible, and responsive experience for Flow developers. This update unifies the look and feel with the broader Webex portfolio, streamlining cross-platform workflow design for administrators.

With these enhancements, you will experience:

- **Modern, Unified Interface**: A sleek, responsive canvas that aligns with the Webex look and feel, making it more intuitive to build complex use cases.
- **Dark Mode for Enhanced Visual Comfort**: A new native Dark Mode reduces eye strain during long design sessions, along with new user preferences for Flows that persist across logins.
- **Streamlined Productivity**: A reorganized activity pane featuring logical groupings and a powerful new search function allows developers to find and implement activities faster than ever.

## April 2026

### Enhanced Invalid Number and Network Failure Notifications for Agents Handling Outbound Calls

What’s changing?

Agents will receive a clear, immediate desktop pop-up notification whenever an invalid number is dialed, a network failure occurs, or the customer declines the call or the line is busy.

The system will clearly differentiate between invalid numbers (such as those caused by typing errors or numbers that are no longer in service) and network issues.

For Direct Preview campaign calls, agents will receive a clear desktop pop-up notification which they can dismiss before concluding the call with the appropriate wrap-up code and proceeding to the next campaign call.

For outdial calls, agents can quickly dismiss the error notification and retry with a valid number.

This enhancement will benefit all agents using outbound features ensuring you spend less time on unsuccessful calls and more time connecting with customers.

Stay tuned for more updates!

### Webex WFO: Bring Your Own Data in Performance Management

Webex WFO Performance Management is introducing Custom Metrics, a new capability that enables organizations to bring their own business data directly into the platform. With this enhancement, teams can connect important metrics like Customer Satisfaction Score (CSAT), Net Promoter Score (NPS), Resolution Time, First Call Resolution (FCR), and Sales Conversions to gain deeper insights and improve how performance is measured and understood.

Customers will be able to choose the integration method that works best for their environment, either through CSV upload or an automated API. 

This feature will need a minimum of Webex WFO Bundle SKU and Enterprise Analytics 100 Interactions Addon SKU. 

Performance Management requires customers to sign in through their configured Tenant Specific URL. For more information, refer to [Tenant Specific URL for Webex WFO Users (Webex Contact Center).](https://help.webex.com/en-us/article/n8b0ttd/Tenant-Specific-URL-for-Webex-WFO-Users-%28Webex-Contact-Center%29)

### Webex WFO: Intraday Re-forecasting

Webex WFO is introducing Intraday Reforecasting, a powerful enhancement that enables supervisors to realign staffing throughout the day based on the latest demand. By quickly generating and implementing revised forecasts, teams can efficiently address unexpected events like call surges or agent absences with increased precision and flexibility.

This functionality enhances intraday management, supporting contact centers in boosting service levels, minimizing both overstaffing and understaffing, and ensuring well-balanced schedules. With unlimited reforecasts accessible directly from the Intraday Staffing view, supervisors can make informed, data-driven staffing decisions seamlessly, without interrupting current workflows. 

## Planned Features

### AI Assistant for Flow Designer

We're excited to announce the upcoming release of AI Assistant in Webex CX Flow Designer - an intelligent copilot experience that brings in contextual help directly into your workflow during the design process. 

This includes:

- **Contextual Inline Help**: Get instant, relevant guidance based on your actions or selected components-right where you need it.
- **Visual Learning Resources**: Access embedded help articles, links, and how-to videos to quickly learn best practices.
- **Intelligent Search**: Find answers fast with an intuitive search powered by the AI Assistant. Includes support for flow documentation, JSON parsing, Python and JavaScript functions, and more.
- **User History**: Threads to keep a track of recurring queries.

Why it matters

Traditional workflows require users to switch between the Flow Designer and external documentation, slowing productivity and increasing frustration. The AI Assistant eliminates these pain points by keeping you within the application, reducing time-to-value, and accelerating flow creation with just-in-time help.

**Who Benefits?** 

- **Administrators**: Streamline flow creation and reduce the learning curve.
- **Developers**: Build, customize, and optimize flows faster with easy to access knowledge.

### AI Wait Time in Webex Contact Center

You can now enhance your contact center’s customer experience with AI wait time, which uses machine learning to provide better estimated wait times. This feature will capture key data points enabling advanced predictive models tailored to customer organizations.

Administrators will have flexible controls, including an organization-level toggle and queue-specific enablement options, to seamlessly manage this capability. AI wait time will be integrated under a unified **AI Features** tab, consolidating Cisco’s Customer Experience AI offerings for streamlined administration and improved operational insights.

### Webex Contact Center for Salesforce Voice Connector – Release 1

The new Webex Contact Center for Salesforce Voice Connector delivers out-of-the-box voice integration, embedding Webex Contact Center telephony and routing directly into Salesforce’s native omnichannel agent experience. Salesforce administrators can now leverage Bring Your Own Telephony (BYOT), allowing organizations to use their existing WebexCC telephony and routing while managing all customer interactions within a single Salesforce interface. This integration features new intuitive agent controls, eliminates context switching, improves agent efficiency through real-time transcription and ensures seamless call logging and screen pop customizations leveraging. Release 1 focuses on voice integration and sets the foundation for unified omnichannel workflows, with Webex Contact Center digital channel support planned for a future release.

Key Capabilities

1. Native Integration with Salesforce
  - Integrates Webex Contact Center telephony, voice, and routing directly into Salesforce Voice’s agent desktop, delivering a seamless, unified experience.
2. Enhanced Agent Experience
  - Unified interface for agents: no more context switching between the connector or overlapping pop ups.
  - Full call controls (answer, hang up, recording control) within Salesforce.
3. Bring Your Own Telephony (BYOT)
  - Enables customers to leverage their existing WebexCC telephony and routing infrastructure within Salesforce. WebRTC, Call Recording, and Real-time Transcription are supported out of the box.
4. Unlimited Customization
  - All customizations are supported via Salesforce Voice's UI and widget builder. Screen pop customizations are possible via Salesforce's Omniflow.
5. Real-Time Productivity
  - Live call transcription within Salesforce using WebexCC RealTimeTranscription APIs.

### Webex WFO: On-Demand Hours

Webex WFO is introducing On-Demand Hours, giving supervisors more flexibility to address short-term staffing gaps. Supervisors can offer extra hours to specific agent groups, while agents with matching skills can claim shifts that fit their availability. This capability also empowers agents to take control of their schedules and helps contact centers maintain staffing stability with booking limits and cancellation rules that support last-minute needs. 

### Webex WFO: WFM KPI Deviation Alerts

 Webex WFO is introducing WFM KPI Deviation Alerts, enabling real-time monitoring of forecast and service-level metrics and respond quickly when performance deviates from expectations. Supervisors can receive instant alerts for volume, Average Handle Time, service level, Average Speed of Answer, and abandon-rate deviations, helping protect customer experience and efficiency throughout the day. This capability improves visibility, speeds up communication across teams, and saves valuable time by allowing users to respond early and keep service levels on target.

## **Supervisor desktop**

- The Team Performance Details page operates at optimum performance for up to 500 agents. A supervisor with access to more than 500 agents might not experience the best performance with the Team Performance Details page.
- When agent 2 is conferencing into a call that is being handled by agent 1, agent 2’s details does not show all the call metadata. Also, when agent 2 is consulting with agent 1, the call details are not available on agent 2’s active interaction details modal. These issues will be fixed in a future release as an enhancement.
- The default layout Cisco provides to the Global Layout section doesn’t support cross launching the Webex app. As an alternative, you can customize any of the layouts to add the cross-launch option.
- When conferencing with a dial number mapped to an entry point wherein 2 agents - agent1 and agent2 are conferencing, the second agent’s contact status displays “Connected” instead of “Conferencing” in the Team Performance Details page. Note that consulting and conferencing a dial number mapped to an entry point is still in limited availability.
- There are differences in data between Supervisor Desktop reports and Homepage. For more information, see [Comparison of KPI Cards in Supervisor Desktop and Analyzer](https://help.webex.com/en-us/article/nqpc4zf/Comparison-of-KPI-Cards-in-Supervisor-Desktop-and-Analyzer).
- Supervisors must have unique number assignments. Supervisor1 signs into the Supervisor Desktop with a number. Supervisor1 needs to sign out and sign in with a different number, so that Supervisor2 can sign into Supervisor Desktop with the same number used by Supervisor1\. If you use the same phone number for different supervisors, contact your account team, partner, or Cisco support for assistance.
- To save the Inactivity Timeout setting on Control Hub, you must enter a value for the Auto Wrapup interval setting. However, this isn't applicable when you use the Management Portal for tenant level settings.

## **Courtesy callback routing to capacity-based teams is not supported**

Courtesy callback isn't supported with capacity-based teams (CBT). CBTs have no individual agents assigned to them, and courtesy callback requires an Agent ID to function. Therefore, if courtesy callback flows to an entry point or a queue served by a CBT, the call fails.

## November 19, 2025

## Analyzer Home Page: Temporary Unavailability for Performance Improvements

We're continuously working to enhance your experience with Analyzer. As part of ongoing improvements, the Analyzer Home page will be temporarily unavailable while we implement a new design and performance upgrades. During this period, the rest of the application will remain fully functional. We appreciate your understanding and look forward to bringing you a faster, more seamless Analyzer experience soon. Stay tuned for future updates.

## August 25, 2025

## Webex Contact Center Analyzer: Stock Report Cleanup and Revamp

We are initiating a cleanup and revamp of Stock Reports in Webex Contact Center Analyzer. In the initial phase, support for 39 lower-impact, less frequently used stock reports will be discontinued by January 7, 2026\. This effort reflects our commitment to providing more focused, purposeful, and business-driven reports by leveraging the advanced capabilities of Analyzer.

Additionally, we will prioritize delivering reports that offer clear business insights by developing new reports, improving existing ones, and retiring those that no longer fulfill their intended purpose or provide substantial value. Please be assured that the visualizations within dashboards will remain unaffected and will continue to function as usual.

Below is the list of reports scheduled for deletion in the first phase, along with suggested alternatives, where applicable.

| **Visualization ID** | **Reports Going Away**                  | **Potential Alternate Reports**                 |
| -------------------- | --------------------------------------- | ----------------------------------------------- |
| \-149                | Abandoned - Chart                       |                                                 |
| \-1185               | Abandoned Contacts by Stage             |                                                 |
| \-1245               | Agent Details by Social Channels        |                                                 |
| \-1196               | Agent Interval Realtime - Chart         |                                                 |
| \-146                | Agent State - Site Realtime             |                                                 |
| \-147                | Agent State - Team Realtime             |                                                 |
| \-1287               | Agent Statistics By Queue               |                                                 |
| \-1194               | Agent Volume                            | Agent Details (-100), Auto CSAT (-1282)         |
| \-1186               | Call Back / Renewed Chat Rate           |                                                 |
| \-117                | Contact Reason                          |                                                 |
| \-118                | Contact Reason - Chart                  |                                                 |
| \-119                | Contact Volume                          | Contact by DNIS (-1188)                         |
| \-121                | Entry Point Contact Volume - CAR        |                                                 |
| \-150                | Incoming, Short, IVR Time - Entry point |                                                 |
| \-122                | Incoming, Short, IVR time - Entry point |                                                 |
| \-1182               | Leading Abandonment Reason              |                                                 |
| \-1275               | Noise Reduction Duration by Entry Point |                                                 |
| \-126                | Queued Contact Volume                   |                                                 |
| \-152                | Queue Service Level Realtime            | Queue Service Level (-128)                      |
| \-139                | Queue Statistics Realtime               |                                                 |
| \-127                | Queue Contact Volume-Chart              |                                                 |
| \-153                | Queue Service Level Realtime - Chart    | Queue Service Level (-128)                      |
| \-129                | Sites Contact Details                   |                                                 |
| \-154                | Sites Contact Details Realtime          |                                                 |
| \-155                | Sites Contact Details Realtime - Chart  |                                                 |
| \-130                | Site Contact Volume-Chart               |                                                 |
| \-104                | Site - Chart                            |                                                 |
| \-110                | Site Idle Auxiliary                     | Agent Idle Auxiliary (-109)                     |
| \-141                | Site Interval Realtime                  | Agent Interval Realtime (-1190)                 |
| \-113                | Site WrapUp Auxiliary                   | Agent Auxiliary Report (- 112)                  |
| \-131                | Teams Contact Details                   |                                                 |
| \-156                | Team Contact Details Realtime           |                                                 |
| \-157                | Team Contact Details Realtime - Chart   |                                                 |
| \-111                | Team Idle Auxiliary                     | Agent Idle Auxiliary (-109)                     |
| \-143                | Team Interval Realtime                  | Agent Interval Realtime (-1190)                 |
| \-163                | Team Statistics                         |                                                 |
| \-140                | Team Statistics Realtime                |                                                 |
| \-114                | Team WrapUp Auxiliary                   | Agent Auxiliary Report (– 112)                  |
| \-1246               | Usage Report                            | Control Hub - Current Cycle agent license usage |

## August 19, 2025

## End of Support for Analyzer Beta from Webex Contact Center

Webex Contact Center ended support for the Analyzer Beta on August 19, 2025\. The Analyzer Beta was originally developed to enhance the application's usability. 

Since the Analyzer Beta supported limited capabilities, we have decided to invest in simplifying and improving the usability of the current Analyzer, which is more comprehensive in terms of the features supported and is the primary application used by most of the users. 

## July 14, 2025

## Webex Contact Center Incident and Maintenance Notifications Moving to the Global Service Status Page

Starting August 1, 2025, Webex Contact Center will consolidate its incident and maintenance notifications under the [Global Service Status](https://status.webex.com/) page. After this date, notifications for incidents, maintenance windows, and occasional complex feature rollouts will no longer be sent via CJPIM email or Webex room notifications.

To continue receiving updates on the operational status of Webex services and the scheduled maintenance calendar, please subscribe to email or RSS feed notifications on the [Global Service Status](https://status.webex.com/) page. For updates on feature releases, you can subscribe to the [What’s New](https://help.webex.com/nv7abhz) and [Coming Soon](https://help.webex.com/nv7abhz/What's-new-for-administrators-in-Webex-Contact-Center#topic%5FD8159C942D4EE10D3C86F7C043C86722) help pages.

Please visit these pages and subscribe to ensure you continue to receive important notifications related to Webex Contact Center. For more information on how to subscribe to email/rss feeds, visit [Subscribe to Webex Contact Center Incident and Maintenance Alerts](https://help.webex.com/obit3d)article.

## June 26, 2025

## Data Explorer Shutdown in Webex WFO

The shutdown timeline for Webex WFO’s Data Explorer has been extended from June 30, 2025 to July 30, 2025\. After July 30, 2025, customers will no longer have access to Data Explorer and are expected to leverage Webex WFO Insights for all reporting needs. With the recent launch of Classic WFM datasets, this extension provides Classic WFM customers with additional time to familiarize themselves with Insights and move comfortably to the new reporting experience. 

Here is a summary of Webex WFO Insights:

Insights is a modern, fully-featured BI solution with a range of features and improvements designed to significantly enhance your data access and visibility within Webex WFO.

**Reasons to get excited about Insights**:

- The Insights experience is designed for streamlined data exploration and analysis, while being easy for non-technical users to independently create reports and dashboards.
- Highly customizable to help accelerate decision making
- Offers a broad range of visualizations
- Suitable for both efficient ad-hoc analysis and rich dash-boarding.

Here is a short video to provide an overview of the capabilities that Insights brings to the table: <https://wfohelp.com/doc/Content/user-guides/insights-bi/get-started/how-insights-works.htm?tocpath=Data%20Analysts%7cInsights%7c%5F%5F%5F%5F%5F1>

If your organization has already completed the transition to Insights, you also have the option to manually disable Data Explorer before it is automatically decommissioned. For more information, see <https://wfohelp.com/doc/Content/user-guides/insights-bi/turn-off-data-explorer.htm>

## April 2, 2025

## Migration of Webex WFO Guides from Cisco Product Support page to Webex Help Center

The Webex WFO guides previously available on the [Cisco Product Support](https://www.cisco.com/c/en/us/support/contact-center/webex-workforce-optimization/series.html) page are now accessible directly from the [Webex Help Center](https://help.webex.com/) . When you click on these guides on the Cisco Product Support page, you will be redirected to their respective pages in the Webex Help Center.

**How to access the Webex WFO documentation from [Webex Help Center](https://help.webex.com/)**:

- Navigate to Help by product \> Customer Experience \> Workforce Optimization
- Choose **Webex Contact Center** and then click on the appropriate link to access the document that you need.

**How to access the Webex WFO documentation from Contact Center product page on [Webex Help Center](https://help.webex.com/en-us/products)**:

- Navigate to Customer Experience \> Contact Center \> Webex Contact Center and choose the preferred persona.
- Choose **Webex Workforce Optimization (WFO)** and then click on the appropriate link to open the document that you need.

## February 28, 2025

## Removal of Dashboard and configurations from Webex Contact Center’s Tenant Management portal

As communicated with effect from **April 1, 2025** Tenant Management Portal of Webex Contact Center is now no longer supporting Dashboards and the following configurations:

- Entry Points
- Queues
- Site
- Team
- Users
- Work Types
- Auxiliary Codes
- Desktop Profile
- Address Book
- Outdial ANI
- Dial Plan
- Global Variables
- Multimedia Profiles
- Desktop Layout
- Skills
- Entry Point Mappings
- Reports

As a result, we aren’t updating the Setup and Administrator's Guide for these entities. For the most updated and relevant content, refer to the [Webex Contact Center Administrator's help](https://help.webex.com/ld-93x1hg-ContactCenter/Administrator?type=complex&subTab=Webex-Contact-Center) on Webex Help Center.

However, the following configurations are still accessible from the Tenant Management portal: 
- Settings (accessible by selecting the name of your tenant under Provisioning)
- Threshold Rules
- User Profiles

All other configurations not included under Provisioning, and not explicitly mentioned in this update will remain available in the Tenant Management portal until further notice.

## September 25, 2024

## End of support for VPOP provisioning for new Webex Contact Center tenants 

The Webex Calling PSTN services add-in for Webex Contact Center was introduced earlier this year. This add-in allows Webex Contact Center customers to selfprovision SIP trunk connections directly in Webex Control Hub using Local Gateway functionality.

The Local Gateway replaces functionality previously provided by VPOP for new customers. The add-in also provides Contact Center customers access to Cisco Cloud connected PSTN providers.

With the general availability of the Webex Calling PSTN services add-in, Cisco will be removing the ability to provision new VPOP based contact centers. For all new Webex Contact Center orders Control Hub can be used to provision telephony integration.

This change won’t affect existing VPOP customers who can continue to use VPOP integrations currently. Cisco will communicate directly with VPOP customers in the future as Cisco transitions VPOP services.For more information on Webex Contact Center telephony integration, see [Set up voice channels for Webex Contact Center](https://help.webex.com/en-us/article/2dputx/Set-up-voice-channels-for-Webex-Contact-Center).

## September 4, 2024

## End of Service announcement for Webex Contact Center Legacy Media Platform

Webex Contact Center introduced its next generation voice media platform over two years ago. The Real Time Media Service (RTMS) has delivered many new capabilities to our customers, including regional media support, WebRTC based agents and caller background noise removal. 

Over the last year, Cisco has been transitioning customer onto this new platform. This process is now almost complete and therefore we are announcing the retirement of our legacy voice media platform. The last day of operation for the legacy media platform will be 30th November 2024\. All customers must have completed their transition to Real Time Media Service (RTMS) before this date.

Customers can check their operational media platform in Webex Control Hub. Selecting “Contact Center” and then “General” from Tenant Settings will show the current voice media platform. Current voice media platform should read “Real Time Media Service”. If this field contains any other value, please contact your partner or customer success manager with urgency to facilitate your transition to RTMS.

## July 25, 2024

## Exciting Update: Webex Contact Center Licensing Consumption and Reporting

We are pleased to announce an important update on [Webex Contact Center Licensing Consumption and Reporting](https://help.webex.com/en-us/article/n9vhuwe/Webex-Contact-Center-license-consumption-and-reporting).

This updated article now includes enhanced sections on **Viewing Usage** and **How is Usage Determined?**. Additionally, we've introduced a new **Frequently Asked Questions** section to address common inquiries. This section covers topics such as the capabilities and limitations of surge protection, and clarifies that while it is currently not possible to entirely prevent overage charges, efforts are underway to develop a solution.

As mentioned in the article, these updates will be available across all Webex Contact Center data center regions by August 2024.

Thank you for your continued support as we strive to provide you with the most comprehensive and transparent service possible.

## July 17, 2024

## Discontinuation of Routing Strategies for New Tenants

Webex Contact Center will be discontinuing support of Routing Strategies for any new tenant onboarded on or after July 17, 2024\. We recommend new tenants use Business Hours as an alternative. Existing customers may continue to modify their routing strategies; however, we strongly recommend managing schedules through Business Hours for existing customers as well. _We will announce the dates for deprecating the Routing strategies soon and will give appropriate time for customers to transition to business hours. Until then, there will be no impact to the Routing Strategies functionality for existing customers_.

For more information on Business Hours, see [Set up business hours for Webex Contact Center](https://help.webex.com/en-us/article/dqekw4).

## May 29, 2024

## Removal of 'Custom Attribute'

We are streamlining our recording management portal to enhance your experience. As part of this effort, we have phased out the custom attributes feature. You can take advantage of our tagging system. Tags offer a similar experience, enabling you to easily organize and identify your recordings. 

## February 22, 2024

## Introducing Persona-Based What's New: A Customized Approach to Product and Service Updates

We are excited to announce a significant enhancement in how we deliver updates about our products and services. To provide you with the most relevant and targeted information, we have transitioned from a consolidated "What's New" article to persona-based "What's New" articles specifically tailored for Administrators, Supervisors, and Agents. This new approach offers key benefits such as personalized content, streamlined updates, and enhanced clarity. You will receive updates that are directly pertinent to your persona. This means no more sifting through information that may not apply to you. 

## December 18, 2023

## Migration of Webex Contact Center 2.0 Guides from Cisco Product Support Page to Help Center 

The Webex Contact Center 2.0 Guides that were published on Cisco product support page are now available directly from the Help Center. 

So, from now on, when you click on these guides from the Cisco product support page, you'll be redirected to their respective articles in the Help Center. Here are the guides that have been moved:

- [Webex Contact Center Setup and Administration Guide](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide)
- [Webex Contact Center Business Rules Engine User Guide](https://help.webex.com/en-us/article/nve6qddb/Webex-Contact-Center-Business-Rules-Engine-User-Guide)
- [Webex Contact Center Analyzer User Guide](https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide)
- [Webex Contact Center Voice Onboarding Guide](https://help.webex.com/en-us/article/d7hvc2/Cisco-Webex-Contact-Center-Voice-Onboarding-Guide)
- [Webex Contact Center Architecture](https://help.webex.com/en-us/article/utqcm7/Webex-Contact-Center-Architecture)

## September 26, 2023

## End of support announcement for native chat and email channels

Webex Contact Center announces end of support for its native chat and email channels by Dec 31, 2023\. We recommend that customers who have currently deployed these channels for their business to upgrade to new digital channels. These new digital channels include Web chat, Email, SMS, Facebook Messenger, and WhatsApp, designed with smart and secure capabilities. Work with your Account Manager for licensing and deployment options. For more information about the new digital channels, see [Webex Contact Center New Digital Channels](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wxcc-new-digital-channels.html).
