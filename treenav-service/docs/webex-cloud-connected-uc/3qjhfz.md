---
title: "What's New in Cisco Webex Cloud-Connected UC"
product: "Webex Cloud-Connected UC"
article_id: "3qjhfz"
url: "https://help.webex.com/en-us/article/3qjhfz/What-s-New-in-Cisco-Webex-Cloud-Connected-UC"
last_updated: "2024-11-13"
description: "We&#x27;ve added a lot of exciting new features in Webex Cloud-Connected UC. Take a
moment to familiarize yourself with what&#x27;s new in migration, operational
dashboards, analytics, and much more."
tags: ["webex-cloud-connected-uc"]
source: "help.webex.com"
---

# What's New in Cisco Webex Cloud-Connected UC

## 2024

We want to make sure that you know about the major updates made available in Webex Cloud-Connected UC.

### October

**Enable bidirectional presence sync**

Administrators can enable presence sync feature for synchronizing the user's presence (In a call, In a meeting, Presenting, and Don’t disturb) between Microsoft Teams and Webex Bidirectionally. This synchronization helps the Microsoft Teams users who are using Webex Calling integration to know the presence status of their contacts.

For details on admin configuration, see _Accept presence sync permissions_ and _Enable bidirectional presence sync_ sections in [Configure Microsoft Teams for Webex Calling](https://help.webex.com/en-us/n0l9q2z).

You can refer to _Bidirectional presence sync_ section in [Webex Calling for Microsoft Teams](https://help.webex.com/en-us/ngmx08cb) to know more about this feature.

### August

**Enable SpeechView through Webex Cloud-Connected UC**

SpeechView converts voice messages to text and delivers the text version of the voice message to your email inbox. It delivers the message in both audio and text formats and saves time in reading key highlights in the transcript rather than listening through the audio file. 

For details, see [Enable SpeechView through Cloud-Connected UC](https://help.webex.com/94cb4s/).

**Call forwarding status––Supported for Dedicated Instance and Unified CM**

A visual indicator is added to the landing page to display the call forwarding status. This enhancement helps users easily notice whether they've enabled the call forwarding settings.

**Redesigned Webex Calling integration landing page**

We've redesigned the landing page of our Webex Calling integration in Microsoft Teams to deliver a more powerful way to collaborate directly within Teams. This design provides seamless accessibility to all calling features, conveniently available in one place.

**Call forwarding status**

A visual indicator is added to the landing page to display the call forwarding status. This enhancement helps users easily notice whether they've enabled the call forwarding settings.

Currently, the call forwarding status is available only for Webex Calling (Cloud/Multi-Tenant) users.

**Enable multi call window**

Multi call window allows users to manage multiple lines in a single window. Users can make and receive calls, see the status of all lines, and have better access to features like hold, transfer, and barge, without changing to another window.

For details on admin configuration, see _Enable multi call window_ section in [Configure Microsoft Teams for Webex Calling](https://help.webex.com/en-us/n0l9q2z).

For details on user settings, see _Manage all your phone calls in one place_ section in [Webex Calling for Microsoft Teams](https://help.webex.com/en-us/ngmx08cb).

[2023](#reference-template%5Ff25d75ee-84a8-4584-809b-eee309f1f3bb)

### March 2023

**Do Not Disturb Synchronization in Unified CM Calling**

When you need time to focus and don’t want any incoming call notifications to disturb you, now you don’t have to enable Do Not Disturb (DND) on each of your registered clients separately. When you enable it on the Webex App, the state is automatically synchronized to your desk phone. Similarly, when you enable it on your desk phone, the state is automatically synchronized to your Webex apps.

For more information, see [Do Not Disturb Synchronization in UCM Calling](https://help.webex.com/en-us/article/5bo9dq/Do-Not-Disturb-Synchronization-in-UCM-Calling).

### February 2023

**Autorefresh**

Recent Calls and Voicemail list in the Webex Calling tab is autorefreshed every one minute so that you have the visibility to the latest call records.

- Auto Refresh - Recent Calls - supported for Webex Calling and UCM Cloud
- Auto Refresh - Voicemail - supported for Webex Calling

### January 2023

**Webex Cloud-Connected UC Directory Service support for Unified CM:**

This feature allows you to synchronize and manage users from cloud into on-premises or cloud UC infrastructure like Cisco Unified CM with the Webex Cloud-Connected UC Directory Service. During synchronization, the system imports a list of users and associated user data from the Azure Active Directory (or a similar Cloud Directory service) that is synchronized into the Webex Common Identity Service.

For more information, see [Webex Cloud-Connected UC Directory Service support for Unified CM](https://help.webex.com/en-us/article/14611x/Webex-Cloud-Connected-UC-Directory-Service-support).

**Webex Cloud-Connected UC Directory Service support for Unity Connection:**

This feature allows you to synchronize and manage users from cloud into on-premises or cloud UC infrastructure like Cisco Unity Connection with the Webex Cloud-Connected UC Directory Service. During synchronization, the system imports a list of users and associated user data from the Azure Active Directory (or a similar Cloud Directory service) that is synchronized into the Webex Common Identity Service.

For more information, see [Webex Cloud-Connected UC Directory Service support for Unity Connection](https://help.webex.com/en-us/article/nj6gegv/Webex-Cloud-Connected-UC-Directory-Service-support-for-Unity-Connection).

[2022](#Cisco%5FReference.dita%5Fe4b2de61-781a-4138-b046-e818983ce54c)

### November 29, 2022

**Call Presence Synchronization in UCM Calling** 

In Call Presence feature, there is synchronization of your desk phone on-call status with the Webex App, enabling your coworkers to see your desk phone status on their Webex App. When you're on an active call, your presence status changes to On Call. This status changes back to available when your call ends.

For more information, see [Call Presence Synchronization in UCM Calling](https://help.webex.com/nxjd04v).

### August 2, 2022

**Borderless CTI**

Borderless CTI feature provides the functionality of Desk Phone Control from Webex App connected over MRA.

With CTI applications, Users can

- Retrieve customer information from a database on the basis of information that caller ID provides.
- Use information that an interactive voice response (IVR) system captures, so the call can be routed to the appropriate customer service representative or so the information is provided to the individual who is receiving the call.

For more information, see [Borderless CTI](https://help.webex.com/en-us/article/00tesu/).

### June 20, 2022

**Synchronize User and Organizational Contacts:**

Use Control Hub to synchronize your users and organizational contacts. For on-premises deployments, organizational contacts are configured in the LDAP server as contact objects or in the Cisco Unified Communications Manager end-user table. You can configure rules in Control Hub to classify users in the Unified CM database into end users and contacts.

For more information, see [Synchronize User and Organizational Contacts](https://help.webex.com/en-us/article/nk5whej/).

### March 31, 2022

The following new migration features are available with this release:

**Import Personal Contacts from Generic Devices and Clients:**

This feature provides a generic mechanism to import any user's contacts into the Webex personal contact (contact service) database. This is generic in that the source of the contacts may be from on-premises deployments, cloud-competitor contact systems, or even the Webex Calling MT deployments. It opens up the migration scenarios to support any personal contact import case, not just Unified CM.

For more information, see [Import Personal Contacts from Third Party Sources](https://help.webex.com/en-us/article/naoxf7u/).

**Migrate Your Phone to Webex Calling**

Cisco Multiplatform Phone (MPP) firmware can run on certain models of the Cisco IP Phone 6800, 7800, and 8800 series. However, only the Cisco IP Phone 7800 and 8800 series have the capability to run either MPP firmware or Enterprise firmware. If you have the appropriate license, you can migrate between the MPP or Enterprise firmware on the Cisco IP Phone 7800 and 8800 series.

For more information, see [Migrate Your Phone to Webex Calling](https://help.webex.com/en-us/n19c71/Migrate-Your-Phone-to-Webex-Calling).

[2021](#Cisco%5FReference.dita%5F6305b40f-6ff0-400e-a4c9-ac6a62d413b0)

### December 13, 2021

**Auto-Provisioning of Webex App for Calling in Webex (Unified CM):** This feature allows users to self-provision the devices for Calling in Webex (Unified CM) with zero or minimal intervention in your deployment from Control Hub. When a user provisioned for Calling in Webex (Unified CM) signs in with their registered email address or User ID to Webex App, devices are auto created in Unified CM.

For more information, see [Auto-Provisioning of Webex App for Calling in Webex (Unified CM)](https://help.webex.com/en-US/article/ki34wo/Auto-Provisioning-of-Webex-App-for-Calling-in-Webex-%28Unified-CM%29).

### December 3, 2021

The following new migration feature is available with this release:

**Migrate Personal Contacts to Webex**

This feature helps to migrate your end users' Jabber custom contacts to Webex personal contacts. For more information, see [Migrate Personal Contacts to Webex](https://help.webex.com/en-US/article/naoxf7u/Migrate-Personal-Contacts-to-Webex).

### November 19, 2021

**Troubleshooting Unified CM Call Signaling Issues Using Webex Cloud-Connected UC**: If you're a read-only administrator or a full-administrator or a support administrator, you can use the troubleshooting information that is presented in [Control Hub](http://admin.webex.com/) to determine the root cause of Unified CM call signaling issues that your users face.

For more information, see [Troubleshooting Unified CM Call Signaling Issues Using Webex Cloud-Connected UC](https://help.webex.com/en-US/article/n8xe443/).

### November 9, 2021

**Support Administrator Role**: Any user who logs in as a support administrator is now able to view the Connected UC tab in the Analytics and Troubleshooting sections on Control Hub.

For more information, see [Assign Organization Account Roles in Cisco Webex Control Hub](https://help.webex.com/en-US/article/fs78p5/).

### September 23, 2021

The following new Analytics feature is available with this release:

**User Filter Analytics and New Charts**: 

You can use user filters such as User ID, URI, and Phone Number to filter the various charts in Analytics. This information is also available in downloaded data for the Service Experience and Asset Usage  charts. Analytics now supports Calling Number and Called Number charts.

For more information, see [Analytics for Your Webex Cloud-Connected UC](https://help.webex.com/en-us/ntm7wvk/).

### September 8, 2021

**Operations Dashboard and Web-based Real Time Monitoring Tool (RTMT)**: 

The Operations Dashboard provides a view into the calls that happened in the on-premises network for the past one hour and serves as a launch point for Web-based Real Time Monitoring Tool (RTMT).

A web-based RTMT is now available that has key functionalities of native RTMT. The Web RTMT application enables you to monitor the real-time behavior of the Unified CM, IM and Presence, and Cisco Unity Connection clusters that you've onboarded.

For more information, see [Operations Dashboard.](https://help.webex.com/en-US/nwxw2ah/)

### September 1, 2021

The following new migration features are available with this release:

**Migrate Unified CM to Webex**

This feature helps to migrate the Unified CM settings for users, devices, numbers, and locations to Webex Calling for a better user experience. For more information, see [Migrate Unified CM to Webex](https://help.webex.com/en-us/x974bd/Migrate-Unified-CM-to-Webex).

**Migrate Users or Contacts to Webex**

This feature helps to migrate your users or contacts in Unified CM to Control Hub. Use this migration tool if you do not want to use either the directory synchronization or the manual CSV file export procedure. For more information, see [Migrate Users or Contacts to Webex](https://help.webex.com/en-us/poeuubb/Migrate-Users-or-Contacts-to-Webex).

This release does not support Contact synchronization.

### August 11, 2021

**Certificate Management in Webex Cloud-Connected UC**: This feature helps to centrally manage certificates of Cisco Unified Communications Manager, IM and Presence, Cisco Unity Connection, and Cisco Emergency Responder clusters in your deployment from Control Hub. For more information, see [Certificate Management in Webex Cloud-Connected UC](https://help.webex.com/en-us/np48a3j/).

### August 3, 2021

The following new migration feature is available with this release:

**Migrate Your Phone to Webex Calling**: This feature helps to migrate the enterprise devices to cloud by providing a new and automated device firmware migration from Control Hub. For more information, see [Migrate Your Phone to Webex Calling](https://help.webex.com/en-us/n19c71/Migrate-Your-Phone-to-Webex-Calling).

### June 18, 2021

The following new Analytics features are available with this release:

- **Traffic Analysis**: This feature enables the display of charts that are related to Call Traffic Locations and Call Traffic Analysis.
- **Capacity Analysis**: This feature enables the display of charts that are related to Trunk Usage.

### May 4, 2021

The following new Analytics features are available with this release:

- **Activate Webex Cloud-Connected UC For Organizations**: You can activate or enable Webex Cloud-Connected UC for existing organizations from Control Hub seamlessly. This option is available only for customer organizations with on-premises Unified CM. It is not available for organizations with cloud-hosted Unified CM, such as Hosted Collaboration Solution (HCS) and UCM Cloud.  
For more information, see [Activate Webex Cloud-Connected UC For Organizations](https://help.webex.com/en-us/5qzwwy/).
- **Webex Cloud-Connected UC Module Upgrade**: Automatically upgrade the software versions for the Webex Cloud-Connected UC at the cluster level. This upgrade ensures that all nodes are always running the same software version.  
For more information, see the _Set Up Webex Cloud-Connected UC Module Upgrade Schedule_ section in [Set Up Webex Cloud-Connected UC for On-Premises Devices](https://help.webex.com/en-us/nzt6c0b/).

### April 23, 2021

The following new migration features are available with this release:

- **Plan Your Jabber Migration**: Use Migration Insights to plan your Jabber migration from an on-premises deployment to cloud deployment. It enables you to gather the required information about the user’s existing on-premises deployment services. It also enables you to view the list of Instant Messaging and Presence and Jabber features that may or may not map directly when you transition to Webex app after migration. These insights help you to plan and build a time-line for a move to cloud effectively.  
For more information, see [Plan Your Jabber Migration](https://help.webex.com/en-us/ef0kxs/Plan-Your-Jabber-Migration-to-Webex-app).
- **Migrate Jabber to Webex App**: Use the migration wizard in Control Hub to migrate Cisco Jabber users with Unified CM calling service to the Webex app. After migrating, you can continue to use the existing Cisco Jabber call control options in the Webex app. The Webex app provides users with an easy-to-use experience that allows them to make calls, send messages, share files, schedule meetings, display availability status, and so on.  
For more information, see [Migrate Jabber Users with Webex Cloud-Connected UC to Webex app](https://help.webex.com/en-US/article/nejw7ue/Migrate-Jabber-Users-with-Cloud-Connected-UC-to-Webex-app).

### April 5, 2021

The following new Analytics features are available with this release:

- **SHA-512 Support**: This feature enables you to download an Agent COP file that has SHA-512 encryption. This is applicable for Unified CM version 14.
- **Baked-in Agent Support**: Unified CM 12.5 SU4 and Unified CM 14 versions come bundled with the agent COP file. This eliminates the need to create a separate Agent COP file. However, if you want to, you may still create one.  
For more information on the features, see the _Set Up Agents and Cluster Groups_ section in [Set Up Webex Cloud-Connected UC for On-Premises Devices](https://help.webex.com/en-us/nzt6c0b/).

### **What to do next**

- For a brief introduction about Webex Cloud-Connected UC, see [Webex Cloud-Connected UC Overview](https://help.webex.com/en-us/jv0u1db/).
- For information about how to onboard Webex Cloud-Connected UC on-premises devices, see [Set Up Webex Cloud-Connected UC for On-Premises Devices](https://help.webex.com/en-us/gt9pvq/).
- For information about Webex Cloud-Connected UC Analytics, see [Analytics for Your Webex Cloud-Connected UC](https://help.webex.com/en-us/ntm7wvk/).

[2020](#Cisco%5FReference.dita%5F91f4b498-6cea-4800-8327-bfc15bd2ed79)

### December 18, 2020

The following new Analytics features are available with this release:

- **User Interface Refresh**: We have redesigned the Overview page layout. The main Service Experience and Asset Usage cards are now displayed on a single page. There are also new user interface functionalities available and are described in the sections to follow.
- **Hide and Unhide a Chart**: You can hide a chart that you don't need at the moment or isn't relevant to you. You can also unhide a chart that you had previously hidden. This enables you to personalize your view of the cards.
- **Reorder Chart Sequence**: You can shuffle the sequence of the charts on both the overview and details pages. This enables you to personalize your view of the cards.
- **View Information about Missing Data**: Sometimes due to loss of some telemetry data, the Analytics charts could show incomplete data. If the charts have any missing data, the loss of data is indicated by a lightning icon that is shown on the right side of the time period selection drop-down list on the Analytics page.
- **More Filters for Service Experience Charts**: On the details page of the Service Experience charts, more filters are available.  
The extra filters available for the Call Volume Status charts are as follows:

  - Endpoint Media Capability
  - Endpoint Series
  - Call Failure Analysis
  - Device Pool
  - CAC Location
  - Physical Location
  - Codec
  - Headsets by Model  
The additional filters available for the Call Audio Quality charts are as follows:

  - Endpoint Media Capability
  - Endpoint Series
  - Device Pool
  - CAC Location
  - Physical Location
  - Codec
- **More Filters for Asset Usage Charts**: On the details page of the Asset Usage charts, more filters are available.  
The extra filters available for the Call Count charts are as follows:

  - Endpoint Media Capability
  - Endpoint Series
  - Device Pool
  - CAC Location
  - Physical Location
  - Headsets by Model  
The additional filters available for the Call Duration charts are as follows:

  - Endpoint Media Capability
  - Endpoint Series
  - Device Pool
  - CAC Location
  - Physical Location
  - Headsets by Model
- **Endpoint Adoption** Charts: In the Asset Usage category, we have added the overview and detailed charts for Endpoint Adoption. These charts help you understand the utilization of endpoints during calls.
- **Headset Adoption** Charts: In the Asset Usage category, we have added the overview and detailed charts for Headset Adoption. These charts help you understand the utilization of headsets during calls.
- **HTTP Proxy Authentication**: Webex Cloud-Connected UC service now supports authenticated HTTP proxies. The supported proxy authentication schemes are Basic and Digest.
- **Error and Warning Reporting**: You can view the issues that occur on your on-premises infrastructure that affects the smooth functioning of Webex Cloud-Connected UC service. These issues could cause loss of telemetry data, delay of data or incorrect data to be displayed on the Analytics charts. Based on the severity of the issue, it is classified either as an error or warning. This kind of reporting enables you to take necessary actions to rectify any on-premises issue that affects data being sent to the Webex Cloud-Connected UC service and make informed decisions.
- **Cluster Group and Cluster Deletion**: From Control Hub, you can remove either a cluster group or a cluster that you no longer require to be connected to the cloud. This enables you to efficiently manage the infrastructure that is connected to the cloud.
