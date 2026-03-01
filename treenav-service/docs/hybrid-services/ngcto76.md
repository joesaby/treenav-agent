---
title: "End of Life (EoL) Announcement for End Users and Workspaces on Legacy Hybrid Call Service (Expressway Call Connector Architecture Only)"
product: "Hybrid Services"
article_id: "ngcto76"
url: "https://help.webex.com/en-us/article/ngcto76/End-of-Life-EoL-Announcement-for-End-Users-and-Workspaces-on-Legacy-Hybrid-Call-Service-Expressway-Call-Connector-Architecture-Only"
last_updated: "2024-09-22"
description: "As of June 30, 2021, the Webex app (formerly Webex Teams) end users, Workspaces,
and personal mode devices using the legacy Hybrid Call Service connected to
Cisco Unified Communications Manager (Unified CM) through the Expressway Call
Connector went End of Life (EoL) for all customers. As of this EoL date, calls
made through the legacy Hybrid Call Service will not work for users in the Webex
app, on personal mode devices, or on shared mode devices because the service
will be fully shut down. Customers must configure the Webex app to register
directly to Unified CM for enterprise calling capabilities for their users as
soon as possible."
tags: ["hybrid-services"]
source: "help.webex.com"
---

# End of Life (EoL) Announcement for End Users and Workspaces on Legacy Hybrid Call Service (Expressway Call Connector Architecture Only)

**First Published: April 6, 2021**

See the [End of Support](https://help.webex.com/n2q9085/) announcement for our previous announcement from March 2021.

See the following table to understand what works for call service for users and devices after the Call Connector architecture is no longer supported:

| Calling service for | Call Connector | Device Connector | Calling in Webex (Unified CM) |
| ------------------- | -------------- | ---------------- | ----------------------------- |
|                     |                |                  |                               |
| Webex (Teams) Users |                |                  | ✓                             |
| Devices             |                | ✓                |                               |

This EoL notice only applies to Hybrid Call Service on the Call Connector architecture. This notice does not impact customers who run other Hybrid Services, including the Device Connector architecture.

- [Users](#Cisco%5FReference.dita%5Fcfd210be-0967-4dae-8664-4956f380c30a)
- [Devices](#Cisco%5FReference.dita%5Fd2ee1dfd-1184-4b08-8a1c-121500c4113a)
- [Removal](#id%5F122838)

## Impact

**Webex app users**—After the EoL deadline listed above, calls in the Webex App app on the Call Connector architecture will no longer work for users, the Call Connector solution will no longer be officially available, and the service will be officially shut down. 

As covered in this [previous announcement](https://help.webex.com/n2q9085/), the service was End of Support (EoS) on March, 31 2021\. After EoS, all customer organizations that are created in Webex Control Hub will longer be able to set up the legacy Hybrid Call Service with the Expressway Call Connector architecture for enterprise calling integration with the Webex App app.

**User devices**—After the EoL deadline listed above, Personal Mode devices associated with users will no longer have PSTN access through the Call Connector solution. 

## Requirement

If existing customers need enterprise calling capabilities in Webex App, they must deploy Calling in Webex App (Unified CM) for continued support. This solution provides softphone capability to Webex App users. In this architecture, the Webex App app registers directly to Unified CM. 

When Webex App is registered with Unified CM, the solution provides enterprise calling capabilities—audio/video calls and mid-call features such as mute, consultative transfer, merge/conference, sharing, and so on. Direct access to call settings such as call forwarding (CFA), single number reach (SNR) and visual voicemail is also supported. The Webex App app also interfaces with Unified CM-registered desk phones to provide remote call control capabilities in Deskphone Control (DPC) mode. For a full list of supported features, see the [Calling Features](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/wbxt/ucmcalling/unified-cm-wbx-teams-deployment-guide/unified-cm-wbx-teams-deployment-guide%5Fchapter%5F01.html#id%5F132075) section in the deployment guide.

Additionally, customer administrators can now set up call preferences for the organization to prioritize enterprise calling work numbers or Enterprise SIP URIs with a Single Click option. This simplifies the end user calling experience. Enterprise calling between users alerts remote users on their Webex App client and IP phones for a consistent call alert experience.

Direct registration to Unified CM provides these benefits: 

- Direct connection to Unified CM leading to a faster connect time than the Call Connector solution
- Direct media when Webex App apps are local within enterprise network
- Additional calling capabilities with a roadmap towards Jabber calling feature parity
- Reuse of existing Mobile and Remote Access (MRA) and Jabber Client Services Framework (CSF) configuration for client-side integration (unlike the server-side integration in the Call Connector architecture)

## Next Steps Before the Deadline

**Webex app users**—As soon as possible before the End of Life deadline, customers that are currently deployed with legacy Hybrid Call Service for end users must migrate to Calling in Webex App (Unified CM) to avoid service impact and continue to have calling functionality in the Webex App app. 

**User devices**

- For users who have personal mode devices configured and enabled for PSTN access: If those users do not require PSTN any more, you can leave these devices as they are. No further steps are required.
- If the users require PSTN support, you must manually move to the Webex Device Connector solution as soon as possible before the End of Life deadline. You can then use Webex Control Hub to enable Hybrid Calling (Device Connector) for the Personal Mode devices.

## Documentation

[Deployment Guide for Calling in Webex (Unified CM)](https://www.cisco.com/go/webex-teams-ucm-calling)

[Migrate Existing Organization to Hybrid Calling for Webex Devices](https://help.webex.com/nfv3e4v/)

[Enable Hybrid Calling for Personal Mode Devices](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/wbxt/hybridservices/hybridcalldevices/wbxhs%5Fm%5Fdeployment-guide-for-webex-devices-hybrid-call/wbxhs%5Fm%5Fdeployment-guide-for-webex-devices-hybrid-call%5Fchapter%5F010.html#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fdd40bbf8-5712-4d4d-93d0-bafedd0778ea)

## Impact

After EoL, all customer organizations that are created in Control Hub will longer be able to set up the legacy Hybrid Call Service with the Expressway Call Connector architecture. Cisco Webex Devices in shared mode or personal mode will no longer work on the Expressway Call Connector architecture. Calls that leverage this solution for PSTN access will no longer work. 

## Next Steps Before the Deadline

The Webex Device Connector solution ensures that Unified CM-backed calls for your Webex devices will continue to work. Follow the guidance below:

**Shared Devices**—No action is required for Webex Devices in Shared Mode (Workspaces). They were already automatically migrated to the Device Connector solution.

**Personal Mode Devices**—See the following considerations for migrating personal mode devices associated with users:

- If those users do not require PSTN access, you can leave these devices as they are. No further steps are required.
- If the users still require PSTN support, you must manually move to the Webex Device Connector solution as soon as possible before the End of Life deadline. You can then use Control Hub to enable calling for the Personal Mode devices. See the documentation below.

## Documentation

[Migrate Existing Organization to Hybrid Calling for Webex Devices](https://help.webex.com/nfv3e4v/)

[Enable Hybrid Calling for Personal Mode Devices](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/wbxt/hybridservices/hybridcalldevices/wbxhs%5Fm%5Fdeployment-guide-for-webex-devices-hybrid-call/wbxhs%5Fm%5Fdeployment-guide-for-webex-devices-hybrid-call%5Fchapter%5F010.html#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fdd40bbf8-5712-4d4d-93d0-bafedd0778ea)

Use these steps to remove unsupported Hybrid Calling and Call Connector configuration from your environment.

To migrate users to Calling in Webex App (Unified CM), you must remove Hybrid Calling for just your users before you can deploy new solution. Use these steps to disable Hybrid Calling for your users, and remove any of the related configuration from Unified CM.

Hybrid Calling is still required if you added the service to Room, Desk, or Board devices that are in a Workspace in Control Hub. You must not remove anything necessary for Room, Desk, and Board devices enabled with Hybrid Calling. 

If any Hybrid Calling users have personal mode devices configured, these devices still support Hybrid Calling. However, the personal mode devices must be reenabled with Hybrid Calling after you migrate to the Webex Device Connector solution. For more information, see <https://www.cisco.com/go/hybrid-call-webex-devices>.

| 1 | To remove Call Service Aware and Call Service Connect from user accounts in Control Hub, sign in to the customer view in <https://admin.webex.com>. You can then use any of the following methods: Table 1\. Options to Remove the Service from Webex App User Accounts in Control Hub User Configuration Method Steps to Disable Hybrid Call Service Individual Users Go to Management \> Users, click a username in the list to open the overview pane. Click Call Service, then Connect, and then toggle off the setting. Then return and toggle off the Aware setting. Bulk users accounts using the CSV template Go to Management \> Users, click Manage Users \> Export Users List. Enter FALSE in the Call Service Aware and Call Service Connectcolumns. Save the file, and then go back to <https://admin.webex.com> to click Import and then choose the file that you updated. Click Add and remove services and then click Next. Depending on the number of users you have in your organization, the bulk CSV updates can take awhile to complete. After uploading the file, you'll see a status screen that shows you the progress of the service removal and any errors that you might need to address. This step completely disables Hybrid Calling for your users only, but it remains configured at the organization level (Hybrid Calling is still necessary for Room, Desk, and Board devices in a Workspace that are registered to the cloud). Next, you must remove the Cisco Spark Remote Device (Cisco Spark-RD) for any users who used Hybrid Calling. Whether you chose the automatic creation option in the Call Connector or manually created them in Unified CM, you must manually remove them in the next step. |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | To remove any Cisco Spark-RD that was associated with a user, go to Cisco Unified CM Administration and follow these steps:  Click Device \> Phone. In the Find phone where drop-down, choose Device Type, and in the Select item or enter search text drop-down, choose Cisco Spark Remote Device. Click Find. Check any of the devices that you want to remove, and then click Delete selected. Read the prompt and when you're sure, click OK. This step removes all selected Cisco Spark-RD and corresponding remote destinations for users. If you have Hybrid Calling configured for Room, Board, and Desk devices in a Workspace, only remove Cisco Spark-RD that are associated with Webex App users on Hybrid Calling in your organization. Do not proceed to the next steps. Return to Device \> Phone and search for CTI-RDs that may've been used for Hybrid Calling: in the Find phone where drop-down, choose Device Type, and in the Select item or enter search text drop-down, choose CTI Remote Device. Click Find. CTI-RDs that were used for Hybrid Calling contain a remote destination with \*.call.ciscospark.com or \*.calls.webex.com as the address. Check any of the devices that you want to remove, and then click Delete selected. Read the prompt and when you're sure, click OK. This step removes all selected CTI-RDs and corresponding remote destinations for users.                                                                                                                                                                                                                                                                                                                                    |
| 3 | Follow the documentation to set up Calling in Webex App (Unified CM) for users and Hybrid Calling for devices: <https://www.cisco.com/go/webex-ucm-calling> <https://www.cisco.com/go/hybrid-call-webex-devices>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4 | After you've set up Workspaces with Hybrid Calling (Webex Device Connector) and users with Calling in Webex App (Unified CM), you can remove the service from Expressway resources registered to the cloud and unregister those resources by using these steps: [Remove Cisco Webex Hybrid Services From a Resource](https://help.webex.com/article/nu1tjlm). [Deregister a Cisco Webex Hybrid Services Resource from the Cloud](https://help.webex.com/article/nrcs5zm)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
