---
title: "Upgrade from Webex Contact Center 1.0 to Webex Contact Center"
product: "Webex Contact Center"
article_id: "nb2ve0e"
url: "https://help.webex.com/en-us/article/nb2ve0e/Upgrade-from-Webex-Contact-Center-1-0-to-Webex-Contact-Center"
last_updated: "2024-09-08"
description: "This article provides detailed instructions for upgrading from the Webex Contact
Center 1.0 legacy platform to the new Webex Contact Center 2.0 platform. This
upgrade offers a range of new functionalities and enhancements to optimize your
contact center operations."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Upgrade from Webex Contact Center 1.0 to Webex Contact Center

Introduction

[Upgrade Overview](#Cisco%5FReference.dita%5Ff5773d04-0e75-4579-b651-434a825e5fc0)

You can upgrade from the Webex Contact Center 1.0 legacy platform to the new Webex Contact Center platform.

After you agree to upgrade to the new platform, you are enrolled in the upgrade program and the upgrade feature is enabled for your tenant. The upgrade process consists of three stages:

- **Pre-Upgrade Setup:** The first step of the upgrade process is to execute the Pre-Upgrade Setup from the Contact Center \> Settings section on Control Hub.  
The Pre-Upgrade Setup workflow performs the following tasks:

  - Ensures that the existing tenant settings are carried forward during upgrade.
  - Provisions the Management Portal instance on the new platform.
  - Copies the existing tenant configurations from the Management Portal on the legacy platform and makes them available on the new platform.
  - Provisions voice and digital channels on the new platform.
  - Creates accounts for all agents on the new platform.  
After the Pre-Upgrade Setup completes, you have access to the features of the new platform.  
For more information, see [Perform the Pre-Upgrade Setup](#Cisco%5FTask.dita%5Fdc08f955-b085-473f-8f69-d3311795adc3).
- **New Platform Setup:** In this stage, you configure and start using the new platform. You either reuse the configurations that were copied from the legacy platform or you create new configurations. Do the following:

  1. Assign agents to teams and assign appropriate agent, multimedia, and skill profiles to the agents.
  2. Create routing strategies using the new Flow Control application.
  3. Add Contact Routing Settings to queues to distribute the contacts to the appropriate teams and agents.  
After the agent and contact routing configurations are in place, you move agents to the new platform and route Voice, Chat, and Email contacts to the new platform.  
If you have some users on the legacy platform and some users on the new platform, the calls can't be transferred or conferenced between the two platforms. For more information, see [Upgrade Considerations and Warnings](#Cisco%5FGeneric%5FTopic.dita%5Fe5debd83-1680-42a5-b551-61c4c625f294).  
For more information, see [New Platform Setup](#Cisco%5FGeneric%5FTopic.dita%5Ffa3c9844-966d-4da8-9f99-92cabcc15295).
- **Post-Upgrade Cleanup:** After you’re comfortable with the new platform and don’t need access to the legacy platform resources, you must perform a Post-Upgrade Cleanup. Execute the Post-Upgrade Cleanup from the Contact Center \> Settings section on Control Hub. The Post-Upgrade Cleanup workflow performs the following tasks:

  - Decommissions the Management Portal on the legacy platform and all associated applications.
  - Cleans up data that are associated with the customer tenant for the legacy platform.
  - Makes call recordings from the legacy platform accessible from the Recording Management application on the new platform.
  - Makes Analyzer data from the legacy platform accessible from the Analyzer application on the new platform.  
  For more information, see [Perform the Post-Upgrade Cleanup](#Cisco%5FTask.dita%5F7d46bb57-769b-4c01-92ed-2413c45b14cf).

[Upgrade Considerations and Warnings](#Cisco%5FGeneric%5FTopic.dita%5Fe5debd83-1680-42a5-b551-61c4c625f294)

After you start the upgrade, you must complete the upgrade to the new platform as soon as possible.

After you start the upgrade, you can’t stop or revert the changes.

Be aware of the following:

- Select the upgrade time to coincide with a period of low activity for your contact center.
- Before you start an upgrade, process any updates to your subscription.  
After the Pre-Upgrade Setup starts, the system doesn't process the update orders. You must wait until the Post-Upgrade Cleanup is complete.
- While the Pre-Upgrade setup workflow is executing, do not make any configuration changes on the Management Portal of the legacy platform. If you make changes on the legacy platform, they may not be copied to the new platform and may result in data inconsistency.
- The Pre-Upgrade Setup copies the tenant configurations from the legacy platform to the new platform automatically.
- After the Pre-Upgrade Setup is complete, you can’t create the following objects on the Management Portal of the legacy platform or edit the names of existing objects:

  - Entry Points
  - Outdial Entry Points
  - Queues
  - Outdial Queues
  - Sites
  - Teams
  - Work Types
  - Wrap up Codes
  - Idle Codes
  - Threshold Rules
  - CAD Variables
- You can create and edit any objects other than those mentioned above, on the Management Portal of the legacy platform. Any changes on the legacy platform are not copied automatically to the new platform. If necessary, make separate updates to the Management Portal on the legacy and new platforms.
- You can create any object on the Management Portal of the new platform.
- New agents added on Control Hub and updates to licenses for existing users on Control Hub are synchronized with the Management Portal on the legacy platform.
- Agents cannot simultaneously access the desktop on both the legacy and new platforms. During the Pre-Upgrade Setup, the system creates the agents on the new platform, but they are disabled for Contact Center access. When agents are ready to move to the new platform, mark the Contact Center Enabled setting as False for the agent on the legacy platform, and True on the new platform.  
Calls can't be transferred from one platform to the other. Agents on one platform can't conference someone into a call from the other platform.
- Existing Virtual Agent Templates on Control Hub are available for Chat contacts. If necessary, you can edit and enable them for Voice.
- You can create new chat templates on Control Hub and map them to entry points on the new platform. Existing chat templates mapped to entry points on the legacy platform continue to work. One template can be mapped to only one entry point. You can either map an existing chat template to a new entry point on the new platform or restore the entry point with the same name on the new platform.
- Existing connectors on Control Hub continue to work. You can access the existing connectors in flow scripts on the new platform.
- Routing Strategies from the legacy platform aren't copied to the new platform because they are incompatible. You create routing strategies on the new platform that use flow scripts.
- The dashboards Entry Point – Site level Dashboard, Contact Center Overview – Realtime, and Contact Center Overview – Historical on both the legacy and new platforms display the same data. Data isn’t filtered separately; aggregation of data across both the legacy and new platforms.
- The dashboard Agent State Data – Realtime displays platform-specific data. The Management Portal on the legacy platform displays the agents that are logged in to the desktop on the legacy platform. The Management Portal on the new platform displays the agents that are logged in to the desktop on the new platform.
- When you cross-launch the Analyzer application from the Management Portal on the legacy and new platforms, the same data is displayed. This data is an aggregation of contacts that are handled and agents that are logged in on both the legacy and new platforms.
- During the upgrade process, the Recording Management application on the Management Portal of the legacy platform displays call recordings from the legacy platform. At the same time, the Recording Management application on the new platform displays call recordings of the new platform.
- After the Post-Upgrade cleanup, the Record Management application on the new platform can access call recordings from both the legacy and new platforms.
- During the upgrade process, you can use the Call Monitoring application on the legacy platform to monitor agents on the legacy platform. Similarly, you use the Call Monitoring application on the Management Portal on the new platform to monitor the agents on the new platform.
- The audit logs of activities that you execute on the legacy platform and the new platform are separate. You can access them through the respective Management Portals. After the Post-Upgrade Cleanup, audit logs from the Management Portal on the legacy platform aren’t accessible, because the Management Portal on the legacy platform is decommissioned.

Pre-Upgrade

[Perform the Pre-Upgrade Setup](#Cisco%5FTask.dita%5Fdc08f955-b085-473f-8f69-d3311795adc3)

The Pre-Upgrade Setup workflow guides you through the pre-upgrade steps and performs the configuration upgrade. You see a series of screens while the upgrade completes.

The upgrade copies administrative configurations from the legacy platform to the new platform. The upgrade also provisions the portal.

During the setup, the workflow asks you to indicate the Public Switched Telephone Network (PSTN) provider for the new platform. Sometimes, you can change your PSTN. The following table describes your PSTN options.

| Platform                     | Real Time Media Service (RTMS) voice platform | Webex Calling Integrated voice platform |                                                                    |                                             |
| ---------------------------- | --------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------- |
| **Old Platform Telephony**   | **New Platform: Voice POP**                   | **New Platform: Voice POP Bridge**      | **New Platform: Webex Calling**                                    | **New Platform: Webex Contact Center PSTN** |
| Voice POP (SP Provided PSTN) | X                                             | X                                       | X Available only if your organization subscribes to Webex Calling. |                                             |
| Cisco PSTN                   | X                                             |                                         |                                                                    | X                                           |

The upgrade process allows you to select either RTMS or Webex Calling Integrated voice channel based on the availability of the voice channel and its associated PSTN options, and the geographic location of the customer tenant.

To know more about the availability of different voice channel and PSTN options, see [Get Started for Webex Contact Center](https://help.webex.com/en-us/article/nee1mb6/Get-Started-with-Webex-Contact-Center).

When the upgrade completes successfully, you can configure the features supported on the new platform.

Before you begin

Contact Cisco Solution Assurance to enable access to the Pre-Upgrade Setup workflow. The team lets you know when you can start.

Before you start this task, ensure that you perform the upgrade when the old platform has low usage.

| 1  | Access Control Hub.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Navigate to Contact Center \> Settings \> General tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3  | In the Upgrade to latest platform section, click Pre-Upgrade Setup.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4  | Review the contents of the Pre-Upgrade Setup screen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 5  | Click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 6  | In the PSTN Options Selection screen, select one of these options: Real Time Media Service (RTMS): Select this option to use the service provider-provided voice on the new platform. Voice POP Bridge: Select this option to continue to use the service provider-provided voice on the new platform. Webex Calling: Select this option if you want to use Webex Calling Cloud-Connected Providers (CCPs) or Local Gateway (LGW) for PSTN. This option is accessible only if Webex Calling is enabled in your Control Hub organization. Cisco PSTN: Select this option to continue to use the Cisco PSTN. If you are a Cisco PSTN customer, this is the only available option. |
| 7  | Click Start. The screen displays the upgrade progress.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 8  | (Optional) Click Continue in background to exit the Pre-Upgrade Setup wizard. The Contact Center Settings screen displays that the upgrade is in progress. You can click View status to display the Pre-Upgrade Setup screen again.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 9  | When the upgrade is complete, click Close. The Contact Center page shows the upgrade status. After the Pre-Upgrade is complete, the restrictions that are in [Upgrade Considerations and Warnings](#Cisco%5FGeneric%5FTopic.dita%5Fe5debd83-1680-42a5-b551-61c4c625f294) are applicable.                                                                                                                                                                                                                                                                                                                                                                                        |
| 10 | If you use the Workforce Optimization or Campaign Management features, work with Cisco Solution Assurance to update configurations for these features. We raise a request with the OEM to update the integration URLs for your account and test the integration features for proper operation. After the OEM vendor completes the configuration updates and validation, you may use the new platform.                                                                                                                                                                                                                                                                           |

Upgrade

[New Platform Setup](#Cisco%5FGeneric%5FTopic.dita%5Ffa3c9844-966d-4da8-9f99-92cabcc15295)

After the Pre-Upgrade Setup is complete, you configure and start to use the new platform. You perform the following actions to adopt the new platform: 

1. Create flow scripts using the new Flow Control application.
2. Configure the queues and teams.
3. Add the flow scripts to business-appropriate routing strategies. The routing strategies assign contacts to queues and the queues assign contacts to teams.  
For more information about the actions described above, see the [Cisco Webex Contact Center Setup and Administration Guide](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FGeneric%5FTopic.dita%5Fe338e055-64b0-4973-bd52-8a5581dcb0ee).
4. Onboard agents to the new platform.
5. Move the contact flows (Telephony, Chat, and Email) from the legacy platform to the new platform according to your cutover plan.  

  1. Move the DNs from the legacy platform to the new platform.  
  For more information, see [Move a Dial Number from the Legacy Platform to the New Platform](#Cisco%5FTask.dita%5Fd28c5e3b-6fa3-4043-a8c7-9b37506044f7).
  2. Move the Chat flows from the legacy platform to the new platform.  
  For more information, see [Move a Chat Flow from the Legacy Platform to the New Platform](#Cisco%5FTask.dita%5F01efa635-f05c-440d-84f9-795cbbac37a6).
  3. Move the Email flows from the legacy platform to the new platform.  
  For more information, see [Move an Email Flow from the Legacy Platform to the New Platform](#Cisco%5FTask.dita%5F331e283e-fc3b-4354-b2b7-d1184592a5d9).

If unexpected failures happen, you can move back to the legacy platform. 

1. Move the DNs from the new platform to the legacy platform.  
For more information, see [Move the Dialed Number from the New Platform to the Legacy Platform](#Cisco%5FTask.dita%5Fcfaa9fb9-a18a-4b97-bb7f-1f2beceb67f1).
2. Move the Chat flow from the new platform to the legacy platform.  
For more information, see [Move the Chat Flow from the New Platform to the Legacy Platform](#Cisco%5FTask.dita%5F9be10990-e6ec-47cc-91ba-bc1513cb1349).
3. Move the Email flow from the new platform to the legacy platform.  
For more information, see [Move the Email Flow from the New Platform to the Legacy Platform](#Cisco%5FTask.dita%5F8fe535e7-e82d-42be-beb2-cdb2e8b48063).

With the new platform, you can use the new features. For more information, see [What's New in Cisco Webex Contact Center](https://help.webex.com/a1gx3h).

If you use the Workforce Optimization or Campaign Management features, work with Cisco Solution Assurance to update configurations for these features.

We raise a request with the OEM to update the integration URLs for your account and test the integration features for sanity. You should start using the new platform after the OEM vendor completes the configuration updates and validation.

[Move a Dial Number from the Legacy Platform to the New Platform](#Cisco%5FTask.dita%5Fd28c5e3b-6fa3-4043-a8c7-9b37506044f7)

You can move an existing Dialed Number (DN) – Entry Point (EP) combination from the legacy platform to the new platform. You should test the new platform with a few users before you move all users.

Agents can't log in simultaneously to the desktop on both the legacy platform and the new platform.

| 1 | On the new platform: Either reuse the queues and teams that were copied from the legacy platform or create new queues and teams as required. Define the Call Distribution block in the identified queues to the required teams. Create a flow script with call routing to the identified queues. Create a routing strategy for the restored EP using the new flow script. Assign appropriate Teams, Agent Profile, Skills or Skill Profiles, and Multimedia Profile to agents on the new platform. Work with your partner or Cisco to port the DN to the SIP interface on the new platform. |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the legacy platform: Log out agents who transition to the Agent Desktop on the new platform. Mark Contact Center Enabled as No for these agents so that they can no longer log in to the Agent Desktop on the legacy platform. Delete the DN to EP Mapping on the legacy platform. As best practice, export the existing DN to EP mappings for a record.                                                                                                                                                                                                                                 |
| 3 | On the new platform: Mark Contact Center Enabled as Yes for the agents that you move to the new platform and log them in to the Agent Desktop. Recreate the DN to EP mapping on Control Hub.                                                                                                                                                                                                                                                                                                                                                                                                |
| 4 | Test a few incoming calls to the DN and validate routing to agents on the new platform.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

[Move a Chat Flow from the Legacy Platform to the New Platform](#Cisco%5FTask.dita%5F01efa635-f05c-440d-84f9-795cbbac37a6)

You need to move an existing Chat Template – Entry Point (EP) combination from the legacy platform to the new platform.

| 1 | On the legacy platform: Delete the Chat EP Routing Strategy (EP-RS). Delete the Chat EP. This marks the Chat EP as Inactive. Move existing agents to the new platform. For more information about how to move agents to the new platform, see [Move a Dial Number from the Legacy Platform to the New Platform](#Cisco%5FTask.dita%5Fd28c5e3b-6fa3-4043-a8c7-9b37506044f7). |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the new platform: Restore the Chat EP that was copied from the legacy platform. Create a routing strategy for this Chat EP that routes contacts to the required queues. Test to ensure that chats route to the new platform.                                                                                                                                             |

[Move an Email Flow from the Legacy Platform to the New Platform](#Cisco%5FTask.dita%5F331e283e-fc3b-4354-b2b7-d1184592a5d9)

| 1 | On the legacy platform: Delete the Email EP Routing Strategy (EP-RS). Delete the Email EP. This marks the Email EP as Inactive. Move existing agents to the new platform. For more information about how to move agents to the new platform, see [Move a Dial Number from the Legacy Platform to the New Platform](#Cisco%5FTask.dita%5Fd28c5e3b-6fa3-4043-a8c7-9b37506044f7). |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | On the new platform: Restore the Email EP that was copied from the legacy platform. Create a Routing Strategy for this Email EP that routes contacts to the required queues. Test to ensure that the email address routes to the new platform.                                                                                                                                 |

[Move the Dialed Number from the New Platform to the Legacy Platform](#Cisco%5FTask.dita%5Fcfaa9fb9-a18a-4b97-bb7f-1f2beceb67f1)

In exceptional circumstances, you might need to move the Dialed Number (DN) from the new platform back to the legacy platform. 

| 1 | On the new platform: Delete the DN-to-EP mapping. Log out agents who will move back to the legacy platform. Mark Contact Center Enabled as No for the agents who need to move to the legacy platform. Work with your partner or Cisco to port the DN to the SIP interface on the legacy platform. |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the legacy platform: Mark Contact Center Enabled as Yes for the agents who need to move to the legacy platform, and log them into the Agent Desktop. Recreate the DN-to-EP mapping on the legacy platform.                                                                                     |
| 3 | Test that calls route to the legacy platform.                                                                                                                                                                                                                                                     |

[Move the Chat Flow from the New Platform to the Legacy Platform](#Cisco%5FTask.dita%5F9be10990-e6ec-47cc-91ba-bc1513cb1349)

In exceptional circumstances, you might need to move the Chat flow from the new platform back to the legacy platform. 

| 1 | On the new platform: Delete the Chat EP-RS. Delete the Chat EP. This marks the Chat EP as Inactive. Mark Contact Center Enabled as No for the agents who need to move to the legacy platform. |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the legacy platform: Mark Contact Center Enabled as Yes for the agents who need to move to the legacy platform. Log the agents into the Agent Desktop.                                     |
| 3 | On the legacy platform: Restore the Chat EP. Recreate the routing strategy for this Chat EP. Test that chats route to the legacy platform.                                                    |

[Move the Email Flow from the New Platform to the Legacy Platform](#Cisco%5FTask.dita%5F8fe535e7-e82d-42be-beb2-cdb2e8b48063)

In exceptional circumstances, you might need to move the Email address from the new platform back to the legacy platform. 

| 1 | On the new platform: Delete the Email EP Routing Strategy. Delete the Email EP. This marks the Email EP as Inactive. Mark Contact Center Enabled as No for the agents who need to move to the legacy platform. |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the legacy platform: Mark Contact Center Enabled as Yes for the agents who need to move to the legacy platform. Log the agents into the Agent Desktop.                                                      |
| 3 | On the legacy platform: Restore the Email EP. Recreate the Routing Strategy for this Email EP. Test that the Email address routes to the legacy platform.                                                      |

Post-Upgrade

[Perform the Post-Upgrade Cleanup](#Cisco%5FTask.dita%5F7d46bb57-769b-4c01-92ed-2413c45b14cf)

After you move all agents and all customer-request routes to the new platform, run the Post-Upgrade Cleanup.

| 1 | Log in to the customer organization at [https://admin.webex.com](https://admin.webex.com/) and navigate to Contact Center \> Settings.                                                                                                                                                                                                                                                                                  |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Post-Upgrade Cleanup to trigger the cleanup workflow. This cleanup reclaims all the resources on the old platform, deletes the configuration, and completes the upgrade. You can now: Access the call recordings that were created on the old platform from the Recording Management application on the new platform. Access Analyzer data on the old platform from the Analyzer application on the new platform. |

## Known Issues and Workarounds

If you experience issues with user profiles, check to see if it's something that we already know and have a recommended workaround.

__Table 1\. Issues, Workarounds, and Fix Status__
| **Issue**                                                                                                                                                           | **Workaround**                                                                                                                                                                           | **Fix Status**                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| When setting up the new platform, real-time reports for active entry points on the legacy platform show no data. The entry points are inactive on the new platform. | Access the user profile on the new platform and set the access rights to All. Activate the required entry points on the new platform. This option works only for Telephony entry points. | A fix to allow you to view real-time data for entry points that are active on the legacy platform is in progress.              |
| When setting up the new platform, updates to Agent Viewable Statistics in agent profiles for agents on the legacy platform aren't committed.                        | Access the same agent profile on the new platform and update the required Agent Viewable Statistics.                                                                                     | A fix to ensure that Agent Viewable Statistics updates are committed for agents working on the legacy platform is in progress. |
