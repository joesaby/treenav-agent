---
title: "Custom roles in Control Hub"
product: "Webex Calling"
article_id: "x7l1qbb"
url: "https://help.webex.com/en-us/article/x7l1qbb"
last_updated: "2026-01-12"
description: "Control Hub provides the flexibility to create tailored administrator roles with
only the permissions you want to grant. Unlike predefined roles like a device or
support administrator, custom roles let admins assign only the necessary
permissions. This ensures more precise control over access and management
throughout the platform."
tags: ["webex-calling", "webex-meetings", "webex-messaging", "webex-contact-center"]
source: "help.webex.com"
---

# Custom roles in Control Hub

## Create a custom administrator role

As an administrator, you may want to create a set of customized role-based access permissions for specific roles in your organization. While Control Hub has several [pre-built administrator roles](https://help.webex.com/fs78p5/#id%5F117861), you may want some administrators to have more or fewer permissions than the default roles make available.

Carefully plan out which roles your organization needs and how you want to divide responsibilities before you start creating custom roles in Control Hub. Review the following sections for a more information about the different permission categories and what they contain. 

When you're building a new role, it's a good idea to follow the _principle of least privilege_ and limit access to only the specific functions the administrator needs to perform their job. This approach reduces the risk of unauthorized access or accidental mishandling of sensitive information.

Once you’ve created a new role, you can [assign it to a user](https://help.webex.com/fs78p5/#CMGT%5FTK%5FT904D062%5F00) through the Users page.

- It can take up to 10 minutes for role assignments to take effect.
- Customized roles in Control Hub aren't applicable to the Wholesale Route-to-Market offer.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                         |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Users \> Admin roles and click Create a custom role.                                                                                                                                                                 |
| 3 | Enter a name and description for the new role. Make sure to include some detail in your description to help differentiate customized administrator roles from each other. Don't use any special characters in a role name. |
| 4 | Select which roles you want to assign.                                                                                                                                                                                     |
| 5 | Click Save.                                                                                                                                                                                                                |

## Delete a custom role

If you've created too many cusomtized roles it's easy to delete them.

For security reasons, you'll need to remove all assigned users from a role before you can delete it.

| 1 | Sign in to [Control Hub](https://admin.webex.com) and to to Users \> Admin roles.                                                                                                                                |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click ![Delete button represented by a trash bin icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/458001-459000/458924.jpg) next to the role you want to delete. |
| 3 | Click Delete to confirm.                                                                                                                                                                                         |

## Permission groups

### Analytics permissions

Control Hub provides a wealth of information on various Webex services and devices. [Control Hub Analytics](https://help.webex.com/n0rlwxe/) gives administrators access to interactive data visualizations displaying important information such as usage, adoption trends, and Key Performance Indicators (KPIs). You can customize which analytics categories you want to assign to any given customized role.

#### View Calling analytics

Administrators with this permission have access to all Webex [Calling analytics](https://help.webex.com/n0rlwxe/#Cisco%5FConcept.dita%5F92e4412e-19c7-4eb0-bc43-88f7b1ca1a3b) including data on media quality, call queues, call history, autoattendants, and hunt groups.

#### View Customer Assist analytics

Administrators with this permission have access to the [Customer Assist analytics](https://help.webex.com/n0rlwxe/#reference-template%5F3ce764ad-adf5-4f0e-9fd9-840f38f0619d) including call queue, agent, and live queue statistics. If the user is also a [supervisor](https://help.webex.com/nc8142w/) in Customer Assist, they have access to agent statistics, queue history, queue realtime statistics, and agent wrap-up times.

#### View Devices analytics

Administrators with this permission have access to all [device analytics](https://help.webex.com/n0rlwxe/#id%5F88455) including device usage, endpoint usage, and call quality metrics.

#### View Jabber analytics

Administrators with this permission have access to [Jabber analytics](https://help.webex.com/n0rlwxe/#id%5F128902) which includes information on active users, calling metrics, and Jabber messaging metrics.

#### View Meetings analytics

Administrators with this permission have access to [Meetings analytics](https://help.webex.com/n0rlwxe/#Cisco%5FConcept.dita%5Fe350de40-8bb3-452c-8b42-242d1c14d496) including data on meeting engagement, participation, join times, and total audio minutes.

#### View Messaging analytics

Administrators with this permission have access to [Messaging analytics](https://help.webex.com/n0rlwxe/#reference%5FCC6058C1A919B33145A862EA1E7650BE) including information about active users, breakdowns on total messages sent, files shared, and the most active spaces. 

#### View Slido analytics

Administrators with this permission can view [Slido analytics](https://help.webex.com/n0rlwxe/#reference-template%5F5e456fbd-dc21-4aa2-bfdb-6bcf7145b5e6) and see how often users are engaging with Slido features during their meetings.

#### View sustainability analytics

Administrators with this permission have access to [sustainability analytics ](https://help.webex.com/n0rlwxe/#reference-template%5F08600d25-d4ad-4016-af4f-37c4a8b98c23) which includes information on total device energy consumption, estimated carbon emissions, and potential yearly savings.

#### View Video Mesh analytics

Administrators with this permission have access to all [Video Mesh analytics](https://help.webex.com/n0rlwxe/#Cisco%5FConcept.dita%5Fa07f1228-c4a7-445c-952a-e4d0f97cc23d) including call leg trends, cluster and node availability, and bandwidth usage.

#### View workspace analytics

Administrators with this permission have access to [workspace analytics](https://help.webex.com/n0rlwxe/#reference-template%5F6e0c7f40-2d40-4495-9fa3-7a902687e7a9) which includes live data on occupied workspaces, peak occupancy hours, and workspace trends.

### Troubleshooting permissions

Control Hub provides media-quality data about Webex Meetings and Webex Calling to help pinpoint and troubleshoot issues in your organization. You can also investigate specific meetings or calls that are in progress or that have taken place in the last 21 days.

#### Meeting Troubleshooting advanced

Administrators with this permission can drill down into meetings on a per-participant basis to view detailed audio, video, and sharing quality metrics. In addition to basic call and meeting search capabilities, this permission provides access to more advanced troubleshooting information such as [Live Meeetings](https://help.webex.com/ni3wlvw/#Cisco%5FReference.dita%5Fce38a9bd-4b04-400b-983e-17a46e6e41db) and [Watermark Analysis](https://help.webex.com/ni3wlvw/#Cisco%5FReference.dita%5Fce38a9bd-4b04-400b-983e-17a46e6e41db).

#### Meetings & Calls Troubleshooting basic

Administrators with this permission can search for meetings or calls to investigate issues with hosting, sharing, and how long it took participants to join.

### Reporting permissions

This permission group provides access to Reports templates in Control Hub. Reports help you track and analyze the performance of Webex services in your organization.

#### Manage Calling templates

Roles with this permission can view and manage [Webex Calling report](https://help.webex.com/nmug598/#Cisco%5FConcept.dita%5F6136cd51-f6a4-427f-9da9-0cfb89be6330) templates. Webex Calling reports include detailed call detail records (CDRs) and media quality data for calls made and received by users within your organization.

#### Manage Customer Assist templates

Roles with this permission can view and manage [Customer Assist report](https://help.webex.com/nmug598/#reference-template%5F170a0e2a-d114-4621-ae66-8a2e519f5678) templates. Customer Assist reports include detailed data about agents and call queues to help supervisors monitor and analyze performance.

#### Manage device templates

Roles with this permission can view and manage [Device report](https://help.webex.com/nmug598/#Cisco%5FReference.dita%5Fcefc32ba-1925-4671-b920-03c240bc06a2) templates. Device reports include information about every device in your organization and its usage over a selected date range.

#### Manage Meetings templates

Roles with this permission can view and manage [Webex Meetings report](https://help.webex.com/nmug598/#Cisco%5FConcept.dita%5Fdb7ad178-27d6-4659-9740-b2c7f02601cc) templates. Meetings reports include detailed technical information about meeting attendance, usage, embedded apps, and telephony.

#### Manage Messaging templates

Roles with this permission can view and manage [Webex Messaging report](https://help.webex.com/nmug598/#Cisco%5FConcept.dita%5F0a3f8ccd-243d-4dc5-9855-e141822ff568) templates. Messaging reports provide information about external domains and external users collaborating in your organization. You can also see how users from your organization are collaborating with external domains in external spaces.

#### Manage onboarding templates

Roles with this permission can view and manage [Onboarding report](https://help.webex.com/nmug598/#Cisco%5FConcept.dita%5F2d42f38d-1d41-42bb-b54c-e3ee6835de4d) templates. Onboarding reports include information about how users are onboarded in your organization and how licenses are assigned to them.

#### Manage Partner Calling templates

Roles with this permission can view and manage [Calling report](https://help.webex.com/en-us/article/c3q9lz/Get-started-with-Partner-Hub#reference-template%5F918427d6-aaf4-42d4-a06a-d9ad8593bf7f) templates in Partner Hub. Calling reports include details for the call legs that users in customer organizations made or received with Webex Calling while using Webex App. Data for Calls on Webex isn't included in this report.

#### Manage Partner device templates

Roles with this permission can view and manage [Devices report](https://help.webex.com/en-us/article/c3q9lz/Get-started-with-Partner-Hub#reference-template%5F918427d6-aaf4-42d4-a06a-d9ad8593bf7f) templates in Partner Hub. Partner Hub devices reports provide a consolidated view of the entire inventory devices for all customers the partner manages.

#### Manage Webex App templates

Roles with this permission can view and manage [Webex App report](https://help.webex.com/nmug598/#reference-template%5F6657f0aa-18b3-4d16-94a6-19015d8e6620) templates. Webex App reports show data on all platforms and versions that a user signed in to Webex App on over the last 90 days.

#### Manage Webinars templates

Roles with this permission can view and manage [Webinar report](https://help.webex.com/nmug598/#Cisco%5FReference.dita%5F497e97f9-2a06-4fad-ae1c-9dd437e71518) templates. Webinar reports provide details such as who is the host of a webinar, the type of webinar, and the number of attendees.

#### Manage workspaces templates

Roles with this permission can view and manage [Workspace report](https://help.webex.com/nmug598/#reference-template%5F2bf1b123-2dde-4ba4-9ff2-927cef572e6f) templates. Workspace reports include detailed information and analytics about physical spaces such as meeting rooms or huddle spaces within your organization.

### User management permissions

This permission group includes those necessary to view and manage users, groups, and licenses in your organization. 

#### View groups

Roles with this permission give administrators access to the Groupssection in Control Hub. They can view group names, descriptions, members, and the licenses assigned to each group.

#### View users and licenses

Roles with this permission have full read-access to the Users page in Control Hub. They can view user status details, assigned licenses, filter users for specific attributes, and download a list of users in a CSV file.

#### Manage groups

Roles with this permission can create new groups, add and remove group members, apply settings templates to a group, and delete groups from Control Hub. This permission also enables an administrator to apply license templates to a group.

#### Manage users and licenses

This permission includes most actions an administrator might want to take when managing users. An administrator with this permission may:

- [Add and remove users](https://help.webex.com/nj34yk2/)
- Modify user attributes such as title, email, address, and phone number. You can make changes one at a time in the [User page](https://help.webex.com/nikzbgy/), or all at once with a [CSV file](https://help.webex.com/nlkiw8e/).
- [Reset a user's password](https://help.webex.com/5tsd9q/#section%5Fzwg%5Fwyr%5Fkyb)
- Assign licenses and [license templates](https://help.webex.com/n3ijtao/)

### License management permissions

This permission group includes those necessary to view and manage license assignments in your organization.

#### View licenses

Roles with this permission can view the Licenses page. This page includes a summary of all your organization's licenses, including any notifications, in Control Hub.

#### Assign licenses

Roles with this permission can manage all aspects of license assignments in Control Hub. This includes the ability to assign and unassign licenses to individuals or groups, [manage license templates](https://help.webex.com/n3ijtao/), and delete license assignments. 

### Device Management permissions

Currently, we're limiting device management permissions to the ability to view Workspace insights. To assign broader device management capabilities to a user, you can still apply either the [pre-built](https://help.webex.com/fs78p5/#id%5F117861) Full Administrator or Device Administrator role to a user.

#### View workspace insights

[Workspace insights](https://help.webex.com/yuzsuw/) provide an overview of all workspaces within an organization. You can see how your organization is set up with a snapshot of your workspace inventory.

### Messaging permissions

This permission group includes those necessary to view and manage the Messaging page in Webex App.

#### Configure Messaging settings

Roles with this permission have access to and can modify settings in the Messaging page in Control Hub.

### Calling permissions

This permission group includes all those needed to manage workspace settings, organization-wide Calling settings, customize customize Calling settings for individual users, set up specific Calling features like voicemail and call routing, and manage Calling settings for specific locations.

These Calling permission don't include the ability to configure phone numbers.

#### Configure Customer Assist

Roles with this permission can configure [Customer Assist](http://help.webex.com/72sb3r) in Webex Calling.

#### Configure Calling features

Roles with this permission can set up and manage organization-wide Calling features, such as:

- [Voicemail](https://help.webex.com/hc69wk/)
- [Call routing](https://help.webex.com/n0xb944/)
- [Hunt groups](https://help.webex.com/o6rfjeb/)
- [Virtual lines](https://help.webex.com/nthc9kbb/)

#### Configure Calling locations

Roles with this permission can manage and configure Calling settings for [specific locations](https://help.webex.com/ajh6iy/).

#### Configure Calling settings

Roles with this permission can manage and customize organization-wide [Calling settings](https://help.webex.com/njvdjf2/).

#### Configure Calling users

Roles with this permission can manage and customize Calling [settings for individual users](https://help.webex.com/nz0krq9/).

#### Configure Calling workspaces

Roles with this permission can set up and manage Calling [features and settings for workspaces](https://help.webex.com/n9r1aac/).

### PSTN permissions

This permission group includes those necessary to set up and configure Public Switched Telephone Network (PSTN) settings and routing connectivity. This includes the ability to [configure phone numbers](https://help.webex.com/wkj3f0/).

#### Configure PSTN locations

Roles with this permission can change [PSTN locations](https://help.webex.com/njvdjf2/) in Control Hub. This includes the ability to add, delete, and update existing PSTN locations.

#### Configure PSTN service

Roles with this permission can manage organization-wide [PSTN and routing connectivity](https://help.webex.com/n0xb944/) in Webex Calling.

## Known issues

The following is a list of known issues with customized roles in Control Hub.

- You can't use any special characters such as + or & when selecting a role name.
- Roles with the Configure Messaging settings permission may have issues when they change the [Public spaces](https://help.webex.com/6kmeef/#task-template%5Fdb5677a1-a7c7-4ecc-992c-858102af3452) setting in Control Hub.
- Roles with the View workspace insights permission may experience intermittent issues when trying to view the default Workspacespage. They're instead redirected to the Utilization table in the Insights tab.
- Roles with the Assign license permission may have issues assigning Meeting and Contact Center licenses.
- Roles with the View license permission may see a grayed-out button to manage licenses when they should only have read-only access.
- Roles with the Manage users and licenses permission may see an error message in on the Users page.
