---
title: "What's New in Wholesale RTM"
product: "Webex Meetings"
article_id: "naxx10"
url: "https://help.webex.com/en-us/article/naxx10/What-s-New-in-Wholesale-RTM"
last_updated: "2026-01-28"
description: "What&#x27;s New in Wholesale RTM"
tags: ["webex-meetings", "webex-webinars"]
source: "help.webex.com"
---

# What's New in Wholesale RTM

The Wholesale Route-to-Market (RTM) is a strategic channel solution that is designed to bring Webex to the SMB segment by leveraging the market power of Service Providers around the world. 

As a Wholesale RTM partner, we want to make sure you know about the latest administration features being released. Subscribe to this article to receive notifications for future releases.

This article is intended for Service Provider administrators that manage Wholesale RTM on behalf of your customers. For end-user features, see [What's New in Webex](https://help.webex.com/en-us/8dmbcr/What-s-New-in-Cisco-Webex-Teams-xa).

For technical documentation, see the [Wholesale Route to Market Knowledge Portal](https://help.webex.com/en-us/landing/ld-tsjkri).

- [What's New](#reference-template%5F2cb58ce9-1f26-4504-85f1-7c27be709327)
- [Coming Soon](#Cisco%5FReference.dita%5F79219364-5155-4f8b-bbc3-81edeae3633e)
- [Announcement](#reference-template%5F14f8be53-6dd6-4315-9c69-77dc5a7f5bee)

## January 2026

### Point-In-Time billing report

Wholesale billing APIs support a new Point-In-Time billing report, which allows partners to retrieve the current allocation of wholesale user and workspace package counts.

For details, see [Wholesale Route-to-Market billing reports](https://help.webex.com/lbew7o/).

[2025](#Cisco%5FReference.dita%5F192fe078-c29f-4a10-8503-fe2f61bd128b)

### December 2025

#### Auto-detection of spoken languages during a meeting—Desktop

With this feature, meetings have become even more user-friendly by automatically detecting the spoken language in real-time during a meeting—no need to manually select a language.

Behind the scenes, AI advanced language recognition system listens to the conversation and identifies what language participants are using. This allows the AI Assistant to provide more accurate transcriptions and translations throughout your meeting. For now, the feature supports only one spoken language at a time.

This feature must be enabled by your organization administrator.

For details, see [Webex App | Auto-detection of spoken language](https://help.webex.com/nt7sgtg/).

### November 2025

Migration tools V1.54.0 are released. For details, see [release notes](https://help.webex.com/en-us/article/n10ccfc/Wholesale-migration-release-no).

#### Enhanced CDR delivery and historical data access

We’re introducing the `cdr_stream` endpoint API, which enables customers to collect call detail records (CDRs) immediately after a call ends—typically within one minute. This API also automatically retrieves and delivers any late records as soon as they are processed in the Webex Calling cloud, ensuring reliable and timely CDR delivery.

Also, we’ve enhanced the existing partner and customer APIs to support queries for records from the past 30 days, an increase from the previous 48-hour limit. This enhancement gives users greater flexibility in accessing historical data.

For details, see the following articles:

[Reports: Detailed Call history](https://developer.webex.com/calling/docs/api/v1/reports-detailed-call-history)

[Reports: Live Stream Detailed Call History](https://developer.webex.com/calling/docs/api/v1/reports-live-stream-detailed-call-history)

[Detailed call history records Webhook in Partner Hub](https://help.webex.com/n5zr85e)

#### Create customizable Hold Music playlists in Call Queues and Webex Calling Customer Assist

Admins can now configure playlists for the Hold Music at Call Queues or Webex Calling Customer Assist Customer Assist queues. This allows callers to have a refreshingly new experience for the Hold music. Customer administrators can create playlists at the organization level and reuse them across multiple queues. Custom playlists allow admins to advertise multiple discounts and deals to their callers. A random selection of the playlist file during playback ensures that a different promotional message is played back to callers each time.

For details, see the following articles:

- [Webex Calling Customer Assist](https://help.webex.com/72sb3r/#Cisco%5FTask.dita%5F2c8774ee-e518-409d-96ef-c5352fbbf11a)
- [Configure Call Queue](https://help.webex.com/nzkg083/#Cisco%5FTask.dita%5F2c8774ee-e518-409d-96ef-c5352fbbf11a)
- [Configure music-on-hold settings from Control Hub](https://help.webex.com/4yit9v/)

#### Supporting additional languages in Webex Calling for closed captions and live transcription

Webex Calling supports the following languages for closed captions and live transcription: Arabic, Chinese Mandarin (Simplified), Chinese Mandarin (Traditional), Danish, Dutch, Hindi, Korean, Polish, Portuguese, and Turkish.

For details, see [Enable and manage closed captions and call transcriptions](https://help.webex.com/nsu9rh8/).

#### Unified Call History for multiple lines and shared records for delegates

This feature allows Webex Calling users with multiple lines to access a call history view that’s consistent across all assigned devices. Also, users with shared line configurations can view details of the individual who answered or initiated the call.

For details, see [Multi line support in Webex Calling using virtual lines](https://help.webex.com/nthc9kbb/).

#### Share AI-generated meeting summaries without recording—Windows and Mac

Before you start a meeting, you can select to share meeting content, and enable AI Assistant, from your User Hub settings. Then all meeting invitees will automatically receive an AI-generated meeting summary by email after the meeting ends - even if the meeting wasn't recorded.

#### Search your meeting recordings with AI Assistant—Windows and Mac

You can now ask questions about your meeting recordings with Cisco AI Assistant.

Go ahead and ask it anything – like for a quick summary of a recording, or even about specific topics discussed. AI Assistant pulls information directly from your meeting recordings to give you answers in your summary.

For details, see [Search your meeting recordings with Cisco AI Assistant](https://help.webex.com/gbckj8/).

### October 2025

Migration tools V1.53.0 are released. For details, see [release notes](https://help.webex.com/en-us/article/n10ccfc/Wholesale-migration-release-no).

#### Configurable retention for Webex call recording

Webex Calling administrators can manage the retention settings for call recordings. Customers can purchase a paid add-on for additional storage for call recordings beyond the default allocation, if Webex is the call recording provider. Administrators can track and monitor storage usage directly from the Control Hub.

For details, see [Ensure regulatory compliance of Webex Calling content](https://help.webex.com/b1o0pcb/).

#### Ability to bulk resync devices on-demand

Administrators can bulk resync devices on demand from the Device tab in the Control Hub. Only devices that are SIP-registered and active are eligible for resync.

For details, see [Resync Webex Calling devices in Control Hub](https://help.webex.com/nhp5444/).

#### Enhanced supervisor visibility: Monitor both inbound and outbound agent calls

Supervisors in Customer Assist can have comprehensive oversight of agent call activity. They can seamlessly monitor both inbound calls and outbound calls made by agents using the Call Queue’s Caller ID. This enhancement provides a complete view of agent availability and engagement, enabling supervisors to effectively improve team performance and service quality.

#### Webex Calling Customer Assist: New agent activity report

The new Agent Activity Report in Webex Calling Customer Assist provides detailed insights into agent activity at both the shift and session levels. This report allows administrators and supervisors to access key metrics such as agent performance, sign-in and sign-out times, agent availability, the number of calls received and answered, and more. These insights help organizations assess agent efficiency and make informed decisions about capacity planning and agent training to improve overall operational performance.

#### Suppress background noise in calls and meetings—Linux

Background noise, like a barking dog or construction sounds, can distract others during your calls and meetings. With our Smart audio feature, you now have four options to suppress unwanted noise and help ensure important sounds come through clearly:

Noise removal—Remove all noises.

Optimize for my voice—Remove all noise and background voices.

Optimize for all voices—Removes all noise and enhances nearby voices.

Music mode—Optimizes the audio for vocal and instrumental music.

For details, see [Webex App | Remove background noise and speech in calls and meetings](https://help.webex.com/yrsw3l/).

#### Webex Calling Support—Linux

We now provide Linux support for Webex Calling. Customers who prefer to use a Linux device can now manage their calling needs in the app.

#### Enhancement to Call Pull

We've enhanced the Call Pull experience to make it easier to move calls between devices. When you have an active call on another one of your devices, you see Move next to the call in the space list. Select Move to seamlessly transfer the call to your current device.

#### Manage your calls from any hot desk device

Hot desk devices are now added to the device connection menu in the app. You can make and receive calls, hold or resume, transfer, and join conference calls, just like you do on your dedicated device.

#### Non-blocking RPL checks for streamlined customer provisioning

This enhancement allows partners to provision Wholesale customers instantly, removing the delays previously caused by Restricted or Denied Persons List (RPL) checks. RPL checks now run asynchronously in the background alongside ongoing customer provisioning. This update ensures uninterrupted service and a more efficient provisioning experience.

For details, see [Customer provisioning in Wholesale Route-to-Market](https://help.webex.com/ny0fr7x/).

### September 2025

Migration tools V1.52.1 are released. For details, see [release notes](https://help.webex.com/en-us/article/n10ccfc/Wholesale-migration-release-no).

#### Package quantity assignment support

Partners can now specify quantities for Wholesale packages and add-ons through APIs or Partner Hub. This allows them to control the maximum number of packages they assign to a customer, providing greater operational flexibility and control.

For details, see [Provision Wholesale RTM customer organization through Partner Hub](https://help.webex.com/nf9ghpq/) and [Webex for Developers](https://developer.webex.com).

#### Single Number Reach feature support in User Hub

Administrators can now access and manage the Single Number Reach feature directly within User Hub.

For details, see [Admin settings for partner administrators](https://help.webex.com/myxqydb/) and [Admin settings for administrators](https://help.webex.com/nw8rdjcb/).

#### Search enhancements in Partner Hub

Partners can now search for customers by their email addresses in the customers list, making it easier to quickly find specific customers.

For details, see [Get started with Partner Hub](https://help.webex.com/c3q9lz/Get-started-with-Partner-Hub#section%5Fxv5%5Fl14%5Fpgc).

#### New CDR fields for reporting Webex Calling Detailed Call History

To enhance the analytics and billing needs in Webex Calling, eight new fields are added to both CSV reports in Control Hub and CDR APIs. These new fields enable partners and customers to use the Detailed Call History reporting effectively.

They provide insights into various call flow occurrences, such as Call Park Recall, Call Hold Time, Call Queue Types, Auto Attendant Key Pressed, Route List Overage, Click-to-Call, and Calls Answered by Different Agents.

For details, see [Webex Calling detailed call history report](https://help.webex.com/nmug598/#WxC-detailed-call-history-report) and [Webex for developers API change logs](https://developer.webex.com/calling/docs/api/changelog/webex-calling).

#### Closed captions and live transcription for Webex Calling

Webex Calling offers closed captions and a live transcription panel to make every call clearer and more accessible. This feature helps you stay engaged—whether you’re in a noisy environment, working in a different language, or just want to follow the conversation more easily. Live transcription is available in English, Spanish, French, German, Japanese, and Italian.

For details, see [Enable and manage closed captions and call transcriptions](https://help.webex.com/nsu9rh8/) and [Webex App | Turn on closed captions for calls](https://help.webex.com/8z7efy/).

#### Auto Attendant enhancement for call handling

This feature enables administrators to specify how to route the calls when a caller doesn’t respond to the auto attendant menu prompt. This ensures calls are properly directed even if the caller takes no action.

For details, see [Manage auto attendants](https://help.webex.com/nsioxoi/).

#### Call Sequence view in Control Hub for troubleshooting

Webex Calling improves the troubleshooting experience by adding a Call Sequence Diagram to the Troubleshooting view. This feature gives customer administrators clear visibility into the complete sequence of all Webex Calling calls, including failed calls, by highlighting the entire call path. This helps administrators better understand and resolve call issues.

#### Enhancements to Control Hub Troubleshooting page with separate Meeting and Calling views

Webex Calling, Meeting, and Call on Webex services will be separated into distinct tabs on the Troubleshooting page in the Control Hub, to provide a more tailored and effective troubleshooting experience for each service type.

This approach offers a cleaner layout with more relevant information and KPIs, highlights critical information that was previously missing, and enables the development of additional search and accessibility enhancements.

#### Set the forward voicemail to email option from the calling template

Webex introduces a new setting to the calling template, enabling administrators to define the default values for specific Webex Calling features.

For details, see [Configure settings templates in Control Hub](https://help.webex.com/n5uf91x/#task-template%5Fc49ec69d-5bd0-4d64-be01-68dc2fd59383).

#### Japanese and Italian languages support for voicemail transcription

Webex Calling is expanding voicemail transcription support to include Japanese and Italian, in addition to the existing languages: English, French, German, and Spanish.

For details, see [Voicemail transcription for Webex Calling](https://help.webex.com/nkt0zpab/).

#### Webex Calling Customer Assist: Call queue call recording

This feature allows administrators to automatically record calls made to or from Customer Assist call queues. When a queue is enabled for recordings, the calls are recorded regardless of whether the individual agent has recording enabled. The full administrator, and the compliance officers have access to the recordings in Control Hub. Full administrators with the compliance officer role can even playback or download the recordings from Control Hub. The Converged Recordings API and Webhooks are enhanced to perform actions and return data on these call queue recordings.

For details, see the Manage queue recordings section in the [Webex Calling Customer Assist](https://help.webex.com/72sb3r/) article.

#### AI-generated meeting summaries in recordings—iOS and android

View your AI-generated meeting summaries and transcripts in the Webex mobile app. Stay informed on decisions, key points, and quickly get up to date with your meetings. Tap Meetings > Meeting recap, to see your available recordings with summaries and transcripts.

### August 2025

Migration tools V1.52.0 are released. For details, see [release notes](https://help.webex.com/en-us/article/n10ccfc/Wholesale-migration-release-no).

#### Webex Calling Setup Assist chat on Overview page

We've enhanced the Webex Calling Setup Assist chat, making it more accessible to customer admins by having the chat window appear from the Overview page in the User Hub.

For details, see [Setup Assist chat support](https://help.webex.com/v6rx71/Wholesale-Route-to-Market-Setup-Assist#reference-template%5F26abb697-f4e4-4b9d-b0bf-c82b3ac7539e).

#### Inclusion of License IDs in Wholesale billing reports

Wholesale billing reports now include License IDs, enhancing transparency, license tracking, and ease of reconciliation for partners managing multiple customers and subscriptions.

For details, see [Billing Reconciliation for Wholesale Route-to-Market](https://help.webex.com/lbew7o).

### July 2025

Migration tools V1.51.0 are released. For details, see [release notes](https://help.webex.com/en-us/article/n10ccfc/Wholesale-migration-release-no).

#### Webex Calling Setup Assist chat

Partners can offer the Setup Assist service to their customers through User Hub. For customers who subscribe to Setup Assist Express (SUA Express SKU), a new chat support feature is available within the first 10 days of Calling service activation. This feature allows customers to connect with a live Setup Assist agent directly from the User Hub Calling section for guidance on service setup, ensuring seamless onboarding.

For details, see [Setup Assist chat support](https://help.webex.com/v6rx71/#reference-template%5F26abb697-f4e4-4b9d-b0bf-c82b3ac7539e).

#### Support for bulk user management using CSV in Control Hub

We've enhanced the CSV bulk edit feature in Control Hub to support Wholesale user management. You can now export/import Wholesale users, assign Wholesale license packages through CSV, and manage them through license APIs.

For details, see [Administration via Partner Hub for Wholesale RTM](https://help.webex.com/nil4lpeb/).

#### Enable international calls for Webex Calling customers

International calling is now automatically enabled when a Wholesale subscription is added to a customer.

For details, see [Enable international calls for Webex Calling customers](https://help.webex.com/nsyoaiy/#task-template%5F9ea0f4d5-57a2-438c-91be-fa64e32a3b42).

### June 2025

Migration tools V1.50.0 are released. For details, see [release notes](https://help.webex.com/en-us/article/n10ccfc/Wholesale-migration-release-no).

### May 2025

Migration tools V1.49.0 are released. For details, see [release notes](https://help.webex.com/en-us/article/n10ccfc/Wholesale-migration-release-no).

#### API Reference App

The API Reference App is designed to showcase the usage of various Cisco APIs and services, specifically tailored to Service Providers' use cases. It serves as a practical example for developers to understand how to interact with Cisco's APIs, manage resources, and implement common use cases such as managing Wholesale customer organizations, users, locations, phone numbers, and devices.

The app provides a reference implementation for Webex Wholesale provisioning, showcases best practices for API integration, error handling, and data validation, and serves as a starting point for developers building custom applications using Cisco's APIs. The app is available on [github](https://github.com/webex/PartnerAdministrationRefApp).

#### User Hub access for hybrid organizations

Previously, Wholesale customers who added any Flex add-on services to their organization faced limitations, as customer administrators were restricted from using User Hub and were required to manage their organization only through Control Hub.

With this new enhancement, customer administrators can now log in and manage their organization directly within User Hub. Also, partner administrators can cross-launch into User Hub, providing a more seamless and efficient management experience.

#### Contact management in User Hub

Customer administrators can now manage organization contacts directly within the User Hub Admin role.

For details, see [Admin settings for administrators](https://help.webex.com/nw8rdjcb/).

#### Inventory reports for numbers and devices

We've added the Devices report and Telephone Numbers report to Partner Hub. Partner can download a consolidated view of the entire current inventory of devices and Webex Calling telephone numbers and extensions for all customers they manage.

For details, see _Reports_ in [Get started with Partner Hub](https://help.webex.com/c3q9lz/Get-started-with-Partner-Hub#reference-template%5F918427d6-aaf4-42d4-a06a-d9ad8593bf7f).

#### Bulk management features in User Hub

The User Hub now supports bulk add and edit functionalities, enabling administrators to easily manage features. These functionalities include:

- Moving user locations
- Deleting call locations
- Adding devices in bulk
- Exporting voicemail group and paging group
- Bulk managing auto attendant, hunt group, call queue, call park group, call pickup, call park extension, and contacts

For details, see [Admin settings for partner administrators](https://help.webex.com/myxqydb/) and [Admin settings for administrators](https://help.webex.com/nw8rdjcb/).

#### Webex Customer Experience Essentials is now Webex Calling Customer Assist

An improved experience of Webex Customer Experience Essentials is now called Webex Calling Customer Assist. All the existing Customer Experience Essentials licenses, agents, supervisors, and queues are automatically moved to Customer Assist at no additional cost.

This improved experience brings the following changes:

- Renaming across platforms—Partner Hub, Control Hub, User Hub, and Webex App refer to Customer Experience as Customer Assist.  
The name change appears in Control Hub across features such as Queue management under Services, Analytics, Reports, and License.
- CSV import/export template—The Customer Experience Essentials column name updates to Customer Assist. We recommend using the latest template when preparing the CSV import file. Uploading a CSV file with the old Customer Experience Essentials header might results in an error.
- Microsoft Teams integration—In Cisco Call integration with Microsoft Teams, the Customer Experience cross-launch option changes to Customer Assist.

### April 2025

Migration tools V1.46 are released. For details, see [Release Notes](https://help.webex.com/n10ccfc).

#### Enhance Flex license check for hybrid model

We've enhanced Flex license checks to support Wholesale SMB customers who have both Wholesale and Flexible subscriptions. This feature enables precise identification of Hybrid model customers, ensuring accurate service delivery and regulatory compliance. Partners can now control enterprise settings access.

For details, see [Enhance Flex license check for Hybrid model support](https://help.webex.com/nkguodc).

#### Help Desk search for phone numbers

Partners can now search for a customer's organization or user by using the phone number associated with them. Partner administrators with the Help Desk role can use this expanded search capability.

For details, see [Webex Control Hub Help Desk for partners](http://help.webex.com/n92p9gp).

#### User Hub administration enhancements

Under the Administration section in User Hub, administrators can now manage the following features:

- Call Park Group
- Call Pickup
- Voicemail Group

For details, see [User Hub - Admin Settings for Partner Administrators](https://help.webex.com/myxqydb).

#### User Hub access for hybrid organizations

Previously, Wholesale customers who added any Flex add-on services to their organization faced limitations, as customer administrators were restricted from using User Hub and were required to manage their organization only through Control Hub.

With this new enhancement, customer administrators can now log in and manage their organization directly within User Hub. Additionally, partner administrators can cross-launch into User Hub, providing a more seamless and efficient management experience.

#### Search by phone number

Users can currently search by name, and now they can also search by phone number.

The search looks for matches using "starts with”, "ends with”, and “equals” criteria.

#### Support for multiple lines on Webex App for mobile users

Easily manage multiple lines on the Webex App from a single interface by switching between lines with just one tap. Stay productive, never miss an important call, and handle multiple calls directly from your mobile device.

For details, see [Shared line appearance for Webex App](https://help.webex.com/d6gavk/) and [Manage application services for a user](https://help.webex.com/pir9ch/).

#### Easily share meeting recordings—Windows, Mac

Users can now copy meeting recording links from the Webex App Meeting Recap tab to share it with others through message, email, and so on. This feature expands the reach of meeting content so people can continue to collaborate seamlessly after meetings.

### March 2025

#### External number management API support

We've added the API support for reading and writing of Webex Calling phone numbers for a specific organization.

For details, see [developer.webex.com](https://developer.webex.com/docs/api/v1/numbers).

#### Partner Hub Reports APIs support

Partner organizations that manage their customers through Partner Hub can now download Partner Hub reports directly using the Partner Reports Template API.

For details, see [developer.webex.com](https://developer.webex.com/docs/api/v1/partner-reports-templates).

#### Access all your whiteboards in one place

The Webex App now includes All boards tab within Whiteboards, allowing users to access all their whiteboards. This includes private whiteboards, whiteboards shared by others, and those in spaces. Sorting options and a search filter are available for easy navigation.

#### Support for personal call routing—Desktop

When users step away from their desk, they can route the calls to another number and set up greetings from a set of predefined greetings that the caller hears.

Administrators can enable this feature on behalf of users in the Control Hub.

For details, see [Configure Personal Call Routing (Personal Assistant)](https://help.webex.com/n05rxeo/)and [Webex App | Set up call routing for when you're away](https://help.webex.com/nxbj3ud/).

#### Call routing based on modes

Administrator can create rules based on time of day and day of the week and create an associated routing action for each of the rules. Authorized users, like an office manager, can switch the rules to control routing to different departments.

For details, see [Call routing based on operating modes in Webex Calling](https://help.webex.com/fozeml/).

#### Customer Experience Essentials supports wrap-up reason and wrap-up timer

Customer Experience Essentials agents can apply a wrap-up reason to calls received on the Webex App. Supervisors can use agent wrap-up analytics in the Webex App to gain insights into how agents conclude their calls. Administrators can generate a wrap-up reason report to review detailed agent call wrap-up information. Also, administrators can configure a wrap-up timer and select an optional default wrap-up reason for the queue.

For details, see [Webex Customer Experience Essentials](https://help.webex.com/72sb3r/#add%5Fwrap-up).

#### Customer Experience Essentials Public API support

The Webex Calling API now supports Customer Experience Essentials functionality across call queues, supervisors, and agents. The APIs include support for creating Customer Experience Essentials and call queues, including assigning agents and supervisors.

For details, see [developer.webex.com](https://developer.webex.com/docs/api/v1/features-customer-experience-essentials).

#### Support for Click-to-call (Guest Calling)

Click-to-call (Guest Calling) streamlines customer communication by offering prompt responses and guiding customers to reach sales, support, and other Business-to-Consumer (B2C) communication using their web browser. Customers need not create an account or download plugins on the browser for using this feature.

For details, see [Enable customers to reach your organization using browser based click-to-call](https://help.webex.com/ndzk21eb/).

### February 2025

Migration tools V1.46 released. This update includes key features for BroadCloud migrations. For details, see: [Release Notes](http://help.webex.com/n10ccfc).

#### Conversation threads and history in Cisco AI Assistant

Administrators can create conversation threads on specific topics. They can ask follow-up questions, and the AI Assistant responds with answers within the context from previous interactions. Administrators can view, replay, and continue previous conversations with full context.

For details, see [Webex App | Summarize your message threads](https://help.webex.com/nqvghfx).

#### AI-Powered smart search in Control Hub

Finding settings is now easier, even if search terms don’t match the exact feature name. All Control Hub settings (including Meeting Site settings) are searchable with direct deep links. AI-generated overviews summarize features, and users can explore further through Recommended Questions.

For details, see [Find Control Hub settings with AI-powered smart search](https://help.webex.com/nlo17ww).

#### Slido AI

Slido AI helps you work smarter, save time, and enhance audience interaction. Here are the three key AI-powered features:

- AI-Generated Polls—Create engaging polls instantly
- AI Quiz—Generate fun, interactive quizzes on any topic in just seconds
- Question AI—Enable your audience to improve, shorten, or change the tone of voice of their questions

#### Enhanced Help Desk search for Partners

Partners can now search for devices using MAC address, phone number, or SIP address. Partner administrators with the Help Desk role can leverage this expanded search capability for improved device management.

For details, see [Webex Control Hub Help Desk for partners](http://help.webex.com/n92p9gp).

#### Webex Go support for Wholesale RTM

Wholesale Partners can now enable Webex Go. To activate Webex Go for Wholesale RTM, contact your Partner Success Manager.

For details, see [Provision Webex Go](http://help.webex.com/ns2be4t).

#### Number inventory reports

Allow partners to download reports through Partner Hub, offering a comprehensive snapshot of their entire phone number inventory at a specific point in time.

For details, see [Reports for Your Cloud Collaboration Portfolio](https://help.webex.com/en-us/article/nmug598/Reports-for-Your-Cloud-Collaboration-Portfolio#id%5F122004) and [Get Detailed Call History API](https://developer.webex.com/docs/api/v1/reports-detailed-call-history/get-detailed-call-history?%5Fgl=1%2Agpgia0%2A%5Fgcl%5Fau%2AMTc1NzIyNDgxNi4xNzM3MjcxNzAy).

#### Device inventory reports

Allow U.S. partners to download reports through Partner Hub, providing a comprehensive snapshot of their entire device inventory at a specific point in time.

For details, see [Reports for Your Cloud Collaboration Portfolio](https://help.webex.com/en-us/article/nmug598/Reports-for-Your-Cloud-Collaboration-Portfolio#id%5F122004) and [Get Detailed Call History API](https://developer.webex.com/docs/api/v1/reports-detailed-call-history/get-detailed-call-history?%5Fgl=1%2Agpgia0%2A%5Fgcl%5Fau%2AMTc1NzIyNDgxNi4xNzM3MjcxNzAy).

### January 2025

#### Webex Attendant Console

Webex Attendant Console is a web-based tool that combines the Webex Calling service, Webex App, or desk phone with a desktop interface to process calls within or outside your organization. It's designed to increase productivity with an enhanced user experience for receptionists, attendants, and operators. Users can screen incoming calls, manage calls and contacts, and monitor calls in a queue. 

For details, see [Get started with the Attendant Console](http://help.webex.com/4xgekbb).

#### Calling usage details report in Partner Hub

We've introduced the Calling Usage Details report for partners to help you monitor customer organizations' usage of Webex Calling while using Webex App. This report includes detailed metrics such as the number of call legs using audio and video, the number of poor-quality call legs, the number of timed-out calls, and more.

For details, see [Get started with Partner Hub](http://help.webex.com/c3q9lz).

#### Advanced Email customization—Partner Hub

Partners can now enhance email communications by customizing various branding and support elements:

- **Logos**: Configure a custom logo for bright mode emails.
- **Support Links**: Set up custom Terms of Service and Privacy Statement links.
- **Email Signature**: Personalize onboarding email signatures (limited to 100 plain-text characters).
- **Reply-To Address**: Define a custom Reply-To address for recipient responses.
- **Contact Us Link**: Customize the default Webex Help Center link to direct users to partner-specific support pages.

For details, see [Configure Advanced Branding Customizations](https://help.webex.com/n0cswhcb).

[2024](#reference-template%5Fb4f318be-06bc-4fab-a325-81ce5157c9f9)

### December 2024

**Migration Tools**

Migration tools V1.45 released. This update includes migrating from BroadCloud or BroadWorks to Flex. For details, see [Release Notes](https://help.webex.com/n10ccfc).

**Configurable Agent notifications**

Administrators can configure notification tones that will be played to agents when a supervisor invokes functions like Monitoring, Coaching, Barge, and Takeover.

**User Hub Administration Enhancements**

Under the Administration section, Customer Administrators can now manage the following features in User Hub: View company contacts, initiate a one-time password reset for a user, group paging, Digital Enhanced Cordless Telecommunications (DECT) networks, Customer Experience Essentials, meeting sites, meeting settings, and hybrid calendars. For details, see: [User Hub - Admin Settings for Partner Administrators](http://help.webex.com/myxqydb).

**Pro Pack**

Pro Pack will now be included with all customer organizations provisioned on wholesale Webex. There’s no longer a minimum package requirement. For details, see [Pro Pack For Control Hub](http://help.webex.com/np3c1rm).

**Standard Calling Package**

This package is designed to meet the needs of a conventional calling user. Standard Users can have either a physical device (Phone or ATA) or a soft client for calling, but not both.

**Improvements to pinned messages—iOS and Android**

To make it easier for mobile users to view pinned messages on a smaller screen, we’ll prioritize showing the message content or the file name. On large-screen devices like iPads and tablets, you'll see the message content, followed by the sender's name, date, and time. When a pinned message is no longer available, due to your organization retention policy, it will be removed. For details, see [Webex App | Pin messages in a space](http://help.webex.com/p0bsf3).

**Call queue sign-in/sign-out enhancements—iPhone, iPad, and Android**

We’ve made some changes to how agents sign in and sign out. As an agent, the options to sign-in or sign-out are now separate buttons, they are no longer available in the drop-down list.

### November 2024

**Migration Tools**

Migration tools V1.44 released. For details, see [Release Notes](https://help.webex.com/n10ccfc).

**Hunt Group Analytics in Control Hub**

We've added a dedicated Hunt Group Analytics tab under Calling Analytics in the Control Hub. This feature enables customers to track and evaluate Hunt Group usage and performance.

For details, see [Analytics for Your Cloud Collaboration Portfolio](https://help.webex.com/en-us/n0rlwxe/#reference-template%5F949b4c6f-a322-46d8-8860-39c79b10b3eb).

**Support for Personal Call Routing (Personal Assistant)—iPhone, iPad, and Android**

We’ve added a new availability option of Away. You can set up personal call routing rules when you’re away from work and want to forward your calls or send them to voicemail. Callers hear a greeting with the reason you’re away and when you’ll be back.

For details, see [Webex App | Set up call routing for when you're away](https://help.webex.com/nxbj3ud).

**AI-generated summaries for call recordings—Windows, Mac, iPhone, iPad, and Android**

When you play back a call recording in the app, you'll see an AI-generated summary, listing the action items, and the full transcript from the call. So, you can quickly catch up on the discussion and better understand the conversation at a glance. Contact your organization administrator if you can't see the AI call summary feature. For details, see [Webex App | Generate space summaries](https://help.webex.com/en-us/mmrwtp).

### October 2024

Migration tools V1.43 released. For details, see [Release Notes](https://help.webex.com/n10ccfc/Wholesale-migration-release-notes#concept-template%5F2b3aa1a8-1ff1-47b5-8949-9ba09f84eeb7).

### September 2024

**Make call forwarding indicator more obvious—Windows and Mac**

Previously, you may not have known that call forwarding was set, which could result in missed calls. With this update, a call forwarding banner is displayed across all tabs in the app, allowing you to quickly edit the forwarding destination or turn off call forwarding.

For details, For details, see [Configure call forwarding for users and workspaces](http://help.webex.com/nkw9o41).

**Support Yealink T34W Webex Calling**

Webex Calling supports Yealink T34 devices. For details, see [Poly and Yealink support on Webex Calling](https://help.webex.com/en-us/njwkamr/).

### August 2024

**Support for users with an alternate ID**

This will allow partners to provision users with email- like user IDs that don’t actually have an inbox behind the address. The first user will be required to have a valid email but the other users can be provisioned and login using a unique ID in email format.

**Email Customization**

Ability for partners to customize the email signature of emails sent from Cisco.

**User Hub Admin Enhancements**

Expanding the capabilities for Customer Admins to administer their accounts directly from User Hub. The enhancements include device management, Workspace management, and messaging & meeting user interface updates. For details, see: [User Hub - Admin Settings for Administrators](http://help.webex.com/nw8rdjcb).

**User access to native Webex call recordings in the Webex App**

Any calls that you recorded are now available in the calling tab. Available on Windows, Mac, iPhone, iPad, and Android.

**Highlight to call from anywhere—Windows and Mac**

We’ve added a new keyboard shortcut that you can use when you highlight a number, and you can then make the call in the Webex App. Customize the shortcut at Settings > Keyboard Shortcuts > Highlight to call. Choose the keys used for the shortcut or to use this shortcut when Webex is minimized or in the background, select Global.

**Updates to accessing calling options—iPhone and iPad**

We've improved the iOS mobile navigation to make it easier to find the dial pad for calling only users. The dial pad is moved to the footer for calling only users. For people who use Call Park Retrieve (Webex Calling) or Call Pickup (Unified CM), accessing these options is easier as they are now moved from a tab to a button at the top of the calling screen.

**Enhancements to the Calling tab—Windows and Mac**

We’ve made some design changes to the calling tab in the app. These updates help to increase the value that you derive from the calling tab and include the following:

- Quick and intuitive access to the dial pad
- Additional call history interactions on the more menu

**Hunt Group Busy**

This feature allows Hunt group agents to enable group busy status for a Hunt group using a feature access code. The administrator can authorize agents to activate the group busy status.

For details, see [Manage hunt groups in Control Hub](https://help.webex.com/o6rfjeb), [Feature access codes for Webex Calling](https://help.webex.com/0zgzwj), and [Webex Calling hunt group CSV file format reference](https://help.webex.com/1zejoab).

**Device Fulfillment**

Device Fulfillment is an end-to-end solution to support Device ordering, fulfilment, and provisioning for our Partners and Customers that will provide a near plug and play experience to the end users. This feature will allow service providers to integrate their preferred distributor into the Webex platform so that they can place their devices orders directly via Control Hub/Webex APIs. The devices will be drop shipped to the customer location via distributor and provisioned via the solution. (Launching in the US with NetXUSA)

**Support AudioCodes Devices MP 202 and MP 204 on Webex Calling**

Webex Calling supports AudioCodes MP 202 and MP 204 devices.

### July 2024

**Webex Customer Experience Essentials bounced calls—Windows and Mac**

This applies to Webex Customer Experience Essentials.

As an agent, when your administrator has configured a bounced call policy if you miss a call, you'll receive a bounced call notification, and your status will be changed to unavailable. When your status is unavailable, calls are not routed to you. For details, see [Webex Customer Experience Essentials](https://help.webex.com/72sb3r).

**Distinctive ringing & priority alert for call queues**

Distinctive ringing sets different ring tones for various call queues. This can be particularly useful in differentiating between calls from other queues.

Priority alert allows users to set up a unique ringtone based on predefined criteria set in the User Hub. This is helpful when you want to be quickly notified that a specific phone number is calling you. Available for Customer Experience Basic and Essentials.

**Support for LLDP with Emergency (E911) location tracking—Windows and Mac**

When your organization uses enhanced location information for emergency calls, the app can access and send network information for accurate locations to the E911 provider. This depends on LLDP support and is supported with Redsky, Intrado, or 9Line. For details, see [Enhanced emergency calling for Webex Calling](https://help.webex.com/en-us/av6oo3).

### June 2024

**Email Customization for Activation Emails**

Allows partners to include their own “reply to” link in the activation emails.

**API Enhancements**

- Customer name: Provides an API to update the customer’s name
- Devices:
  - Improve usability of list device API by accepting "product" value in /telephony/config "model" fields
  - Allow device management updates / removals / assignment changes using MAC address
  - Welcome email: Introduces a public API to Send the activation emails
  - Call Recording: Introduces a public API to select the call recording vendor
  - Enhanced 911: Introduces public APIs to activate/deactivate enhanced 911 for a location and other attributes (ECBN)
- • Partner Admin APIs for managing MS Teams configuration settings for presence sync and Hide Webex App at the organization level. For details, see [developer.webex.com](https://developer.webex.com/docs/api/v1/client-call-settings/update-an-organization%27s-ms-teams-setting).

**Customer Experience Essentials**

Support supervisor barge and whisper coaching in an agent’s call in the Webex App. For details, see [Webex Customer Experience Essentials](https://help.webex.com/72sb3r).

### May 2024

**Customer Experience Essentials**

Customer Experience Essentials is a new package expanding the existing Wholesale Webex offer. This will expand on the current Webex customer experience Basic features to include agent and supervisor capabilities within the Webex App.

Features for agents include:

- Set availability
- Join call queues
- View live queue statistics
- Multi-call window for customer calls on Windows
- In-call screen pop that includes relevant customer information

Features for supervisors include:

- Agent monitoring
- Manage agents: change availability, sign in or sign out agents, join or unjoin agents in the queue
- View real-time and historical statistics

Related Articles:

- [Get started with Webex Customer Experience Essentials for Agents](https://help.webex.com/n15c125)
- [Get started with Webex Customer Experience Essentials for Supervisors](https://help.webex.com/nc8142w)
- [Webex Customer Experience Essentials](https://help.webex.com/72sb3r)

**Webex Call Recording**

Webex Calling introduces built-in Call Recording using the robust recording capability of the Webex platform. Call Recording is included with Webex Calling and Webex Wholesale offers. Webex call recording provides organizations the ability to choose storage location at a Location level to meet their data residency requirements.

This solution ensures that recordings are encrypted in transit and at rest for greater security. The recording solution offer options to handle recording failures, proceed with the call, or terminate the call. Administrators can manage access to end users allowing them to view, download, or delete recordings. Use the enhanced Control Hub or User Hub to access the recording details for administrators and end-users respectively. This solution offers Webhooks for applications to get recording events and APIs to manage the recordings.

For details, see 

- [Manage call recording for Webex Calling](https://help.webex.com/ilga4)
- [Play a Webex recording](https://help.webex.com/pzh5sw)
- [Find your Webex recordings](https://help.webex.com/nuwqxdab)
- [Delete or restore a Webex recording](https://help.webex.com/ncfz8gcb)

**User Hub Admin Enhancements**

Expanding the capabilities for Customer Admins to administer their accounts directly from User Hub. The enhancements include Auto Attendant & Hunt Group enhancements, Call Queue Management, User settings management, Admin roles, Location Management enhancements, Analytics, and Branding Support. For details, see: [User Hub - Admin Settings for Administrators](http://help.webex.com/nw8rdjcb).

**Partner Hub Wholesale Admin Role Update**

For partners who leverage both flex and wholesale they can now assign admin privileges only to admins who manage the Wholesale Route-to-Market. For details, see: [User Hub - Admin Settings for Partner Administrators](http://help.webex.com/myxqydb).

**Rewrite your message using our AI-powered writing assistant—Windows and Mac**

Enhance and improve your communication and collaboration with your team, with AI-powered message rewrites. AI Assistant analyses your message and provides options to adapt the style, tone, and content quality, to help you communicate more effectively.

**Space and thread summaries—Windows and Mac**

When you're busy, or you've been away from the office, catching up with all your spaces and threads can be challenging. AI Assistant generates space and thread summaries to help you quickly catch up on missed messages and conversations in a space. Stay informed on decisions and key points, and get up to date with the discussion. For details, see [Webex App | Generate space summaries](https://help.webex.com/en-us/mmrwtp).

**Translate messages—Windows and Mac**

Break down communication barriers and promote more effective conversation with message translation. Select your preferred language and choose to either live translate all messages in a space or translate an individual message. For details, see [Webex App | Translate messages in a space](https://help.webex.com/en-us/38383eb).

### April 2024

**Set SIP Domain on customer organizations during provisioning**

Allows partners to set SIP domain during organization provisioning to avoid Control Hub error when provisioning workspace devices.

**Webex Suite Meetings Platform**

Webex is enhancing the meeting platform to the Webex Suite meeting platform. This platform improves and simplifies hybrid work across the entire Webex Suite, and incorporates AI-based experiences, with common architecture, administration, and integrations. The new platform converges the meeting experience across Webex applications and devices and delivers continuous collaboration before, during, and after the meeting. To check if you are on this new platform and read about key changes, and new, and forthcoming features. For details, see [Webex Suite meeting platform](https://help.webex.com/m61d8eb).

**Choose your caller ID—Windows and Mac**

When you make follow-up calls to customers, choose a suitable caller ID from a list of call queues your administrator has assigned to you.

**Enhancements for multi-call window—Windows**

We're renaming the multi-call window to Calling dock. The window can now be docked to the edge of your screen to temporarily hide the window. You’re still notified when you have incoming calls or other notifications. For details, see [Webex App | Manage all your phone calls in one place](https://help.webex.com/n3t2z74).

### March 2024

**Calling engagement analytics in Partner Hub**

Calling engagement analytics is now available in Partner Hub. Data in this section shows the call usage rate and call quality of the customers that have purchased Webex Calling in your organization. This data shows how you can proactively help your customers, such as if you notice their call quality is trending downwards, you can reach out and troubleshoot their issues before it gets even worse.

**Email Customization for Activation Emails**

Allows partners to include their Terms of Service and Privacy Statement links in the activation emails. For details, see [Configure Advanced Branding Customizations](https://help.webex.com/en-us/n0cswhcb).

**Custom Tags**

Partner admins with >1000 customer organizations can leverage custom labels to easily identify and group customers of interest, subscription, or partner OSS/BSS native identifiers.

**Sub-Partner access enhancements in Partner Hub**

Partner admins will be able to see and access sub-partner organizations directly from Partner Hub.

### February 2024

**Vidcast integration**

Vidcast integration [recording Vidcasts within Webex](https://help.vidcast.io/en/articles/8395885-control-hub-organization-settings). Your users can effortlessly record and share Vidcasts within Webex. Admins can also configure their organization's access, fine-tune their Webex integration, manage their data, set their video retention policies, define classifications, and choose languages for translated closed captions in Control Hub. Currently, this feature is only available on the Windows platform. 

**Slido**

Slido is now on by default for all customers (except in Canda & Japan due to data residency restrictions). Users can now login user their user credentials and use Slido as their polling and Q&A tool in meetings.

**Audiocodes for Webex Calling**

Webex Calling now supports adding Audiocodes MP 202 and MP204 ATAs.

**SMB Administration Portal (Webex User Hub)**

New admin portal experience designed specifically for small and medium businesses. This new portal experience provides a simplified and streamlined user experience for admins who don’t need all the complexity of Control Hub. This Simplified Administration will be accessible via an Administration tab in User Hub for those who are assigned as administrators for their organization.

### January 2024

**Partner Managed Devices**

A new device management solution for Partners who need to support third-party devices with customization and at scale.

**Email Customization for Activation Emails**

Allows partners to include their logo and customize the 'Contact us' information in the activation emails. For details, see [Configure Advanced Branding Customizations](https://help.webex.com/en-us/n0cswhcb).

[2023](#reference-template%5Fa733eed5-dc94-444e-9d08-e42aec9c2000)

### December 2023

**Multi-line Hold resume across users**

Allows users who have shared line functionality to put a call on hold and have it resumed by another user on the same shared line.

### September 2023

**Transfer calls to an active call-Windows and Mac**

When you’re juggling lots of calls, you’ll have an option to transfer a call to somebody you’ve put on hold.

**Device Provisioning APIs for Users and workspaces**

Webex API capability to add/remove Webex Calling Devices to Webex Calling users and workspaces.

**Add Yealink DECT to Webex Calling**

Webex calling now supports adding Yealink DECT Bases models W52B, W60B, W70B, W56B And Handset models - W52H, W56H, W73H, W59R.

### August 2023

**Improved Role Based Access Controls for Restricted Admin User Roles**

Allowing Customer Admins to make common changes that are currently restricted, including First Name, Last Name, Display Name, and email address.

**Add Polycom Sound Station IP 5000, 6000 to Webex Calling**

Webex Calling now supports adding Polycom Sound Station IP 5000 and 6000.

**Show redirect information in the multi-call window-Windows**

When you receive incoming calls that are redirected, you'll see more information in the multi-call window on where they are from. For example, the hunt group, call queue, or who the call was forwarded by.

### June 2023

**BroadCloud to Wholesale Automated Migration Tools**

A set of tools to allow partners to automate the migration of customers, users, services, and devices from their BroadCloud offer to Wholesale.

**Show active calls as an option to transfer (Mobile)**

When transferring a call you will now have the option to transfer to another active call that is on hold.

**Hot Desking Support MPP8800 Series:**

Hot desking allows organizations to make the best use of office space by having employees sign in and book a shared device for their workday.

It gives users the benefits of a personal meeting device, including meeting notifications 5 minutes before the start time. Notifications originate from the user's personal calendar, and they join their meetings with One Button to Push. Hot desking includes the standard Webex Meeting features, such as a personal whiteboard. Users can start a Personal Room meeting from Join Webex, and they get controls for meetings that they host.

### May 2023

**Catch Up Usage Billing for Sub-Partners**

Allows sub-partners to get set up and setup customers without being billed immediately, and allow partners to back bill for customers and usage when they turn on billing.

**Block Spam callers - Windows, Mac, iPhone, iPad, and Android**

Stay focused on what’s important, and stop unwanted calls directly in the app. Block callers from your recent list or add the number to your block list.

**Hot Desking Support for Room OS devices**

Hot desking allows organizations to make the best use of office space by having employees sign in and book a shared device for their workday.

It gives users the benefits of a personal meeting device, including meeting notifications 5 minutes before the start time. Notifications originate from the user's personal calendar, and they join their meetings with One Button to Push. Hot desking includes the standard Webex Meeting features, such as a personal whiteboard. Users can start a Personal Room meeting from Join Webex, and they get control over the meetings that they host.

### April 2023

**Country Specific call-in number for Webex Meetings**

The provisioning API will automatically set a default Dial In a number that matches the country defined in the API payload.

**Hot Desking Support for MPP 8875, MPP8800 Series**

Hot desking allows organizations to make the best use of office space by having employees sign in and book a shared device for their workday.

It gives users the benefits of a personal meeting device, including meeting notifications 5 minutes before the start time. Notifications originate from the user's personal calendar, and they join their meetings with One Button to Push. Hot desking includes the standard Webex Meeting features, such as a personal whiteboard. Users can start a Personal Room meeting from Join Webex, and they get control over the meetings that they host.

### March 2023

**Cross Region Support for Sub-Partners**

Enables partner to have sub-partners in different geographic regions from their own.

**Webex Wholesale Information in Customer List**

For partners who have multiple offers in the market (flex and Wholesale) they will be able to easily identify which offer each customer has in the customer list in the Control Hub.

**Webex for Broadworks to Wholesale Automated Migration Tools**

A set of tools to allow for partners to automate the migration of customers, users, services, and devices from their Webex for BroadWorks offer to Wholesale.

**Devices**

**Webex Meetings Integration on MPP 8800 Series**

This feature integrates the MPP 8800 series phones with Webex Meetings capabilities. These Webex Meetings features are introduced on MPP:

- Ability to join Webex Meeting via MPP by clicking on the meeting join button.
- Ability to join the meeting from Meeting Menu at any time while the meeting is in progress.
- Telephony functions like hold, conference, and transfer are disabled while in meeting.
- Ability to view participants in the meeting.

### February 2023

**Partner SSO Enhancement Options**

Add support for oAuth/OpenID Connect IDP to the Partner SSO options. This is in addition to the currently supported SAML IDP.

**Support for multiple shared lines - Windows and Mac**

Answer calls from any of your shared lines and choose any line to make calls from within the app. Your administrator must set you up with shared lines and you can see your primary line and up to nine shared lines. For details, see [Webex App | Multiple lines](https://help.webex.com/1jho7db)

### January 2023

**Broadworks to Wholesale Automated Migration Tools**

A set of tools to allow partners to automate the migration of customers, users, services, and devices from their BroadWorks platform to Wholesale.

## February

### Attach Wholesale to existing customer organization through Partner Hub

Partners can now add Wholesale to an existing customer organization through Partner Hub. This helps partners migrate their existing customers to Wholesale.

## Features in development

### Webex Calling Customer Assist - Call Queue report in Control Hub

A new Call Queue report that contains one entry per call session and details on how the call is handled.

 This page contains important announcements for partner administrators. For example, this includes non-feature updates that can affect network connectivity.

Check out the [latest roadmap](https://salesresources.cisco.com/Link/Content/DC2TdRD2dGFPB8qGMpCTQRgQW6HB).

Download the reimagined [Webex Wholesale Route-to-Market Feature Matrix](https://salesconnect.cisco.com/sc/s/simple-media?vtui%5F%5FmediaId=a1m8c00000nizalAAA) that includes Cisco AI for Webex features and links to help articles.

## March 2025

**Renaming Webex Customer Experience Essentials to Webex Calling Customer Assist**

An improved experience of Webex Customer Experience Essentials includes AI-powered tools that enhance customer assistance and expand capabilities, such as call queue recording, call sentiment for supervisors, AI assistant for agents, and so on. We announced the launch of the improved experience called **Webex Calling Customer Assist** on March 18, 2025 at the Enterprise Connect. All the associated resources, such as the Partner Hub, Control Hub, User Hub, and Webex App along with the help center articles reflect the name change from May 2025.

Here’s what you need to know:

- Enhanced features—Customer Assist will include improved capabilities such as click-to-call, call queue recording, advanced auto attendant, call sentiment for supervisors, and AI assistant for agents.
- New name with same seamless experience—Webex Customer Experience Essentials is renamed to Webex Calling Customer Assist, with updates reflected in Partner Hub, Control Hub, User Hub, and Webex App.
- Automatic transition—All the existing Customer Experience Essentials licenses, agents, supervisors, and queues are automatically moved to Customer Assist at no additional cost.

## Migration to Single-License Framework Begins March 3, 2025

Since December 10, 2024, all new Webex customers have been provisioned under the single-license framework. Beginning March 3, 2025, we’ll start migrating existing customers to this framework. Partners should review the [migration plan](https://resources.webex.com/s/tw8sch9mkgjhfn2rgznxph) to understand the process and ensure they are prepared to communicate the changes to their customers.

## Webinar Announcement for Wholesale RTM

Webex by Cisco Partner Managed Devices integration with Phonism Webinar.

Join us for an exciting Webinar to learn all about Webex by Cisco Partner Managed Devices integration with Phonism. We’ll cover:

- The Solution
- Phonism's Device Management capabilities
- Processes
- Integration
- Manageability
- Certifications

Register Now for one of two options: 

- US Wednesday March 20 3PM EDT/12PM PDT <https://cisco.webex.com/weblink/register/r3c3a93ff7d5894185b2dc24f2f9cdeb9>
- EMEA & America's East: Thursday March 21 9AM EDT/3PM CET <https://cisco.webex.com/weblink/register/rc122a1fbc723e4eaa3ff4491dbee5d98>

## December 01, 2023

**Change to Subscriber APIs**

This change is to GET and LIST Subscriber APIs for Wholesale Route-to-Market. The change is to the errors array parameter in the APIs listed below. This errors param contains an array of Error structures that have 2 parameters, errorCode and description. 'errorCode' parameter changes from a String to an Integer.

`/ api /v1/ wholesale-provisioning / get-a-wholesale-subscriber`

`/ api /v1/ wholesale-provisioning / list-wholesale-subscribers`

**Action Required**

Partners should review and update their code in case it does any errorCode parsing for the GET and LIST APIs by January 31, 2024.
