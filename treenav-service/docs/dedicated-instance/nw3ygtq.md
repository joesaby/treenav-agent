---
title: "Cloud Connected PSTN for Dedicated Instance"
product: "Dedicated Instance"
article_id: "nw3ygtq"
url: "https://help.webex.com/en-us/article/nw3ygtq/Cloud-Connected-PSTN"
last_updated: "2025-05-20"
description: "With Cloud Connected PSTN (CCP), there is highly reliable connection between its
Dedicated Instance cloud and select PSTN service providers. When you select the
authorized Cloud-Connected PSTN Partners (CCPP) for its PSTN, incoming and
outbound calls are routed over this established connection, providing quick,
easy, and reliable calling for your enterprise."
tags: ["dedicated-instance", "webex-calling"]
source: "help.webex.com"
---

# Cloud Connected PSTN for Dedicated Instance

## Configure Cloud Connected PSTN

Cloud Connected PSTN (CCP) enables global cloud PSTN calling options for Webex Calling Dedicated Instance (DI). Dedicated Instance leverages existing CCP partner peering with Webex Calling for this feature. To enable this feature for Dedicated Instance, Webex Calling introduces a new call routing construct called **Route Lists**. 

For more information, see:

- [Webex Calling route lists](#Cisco%5FReference.dita%5F020b82a3-1cdf-42c9-901c-858e4496eb0e)
- [Provisioning flow to enable Cloud Connected PSTN for Dedicated Instance](#Cisco%5FGeneric%5FTopic.dita%5F20580c69-ec50-4c05-99aa-4c56dd3c7b9d)

## Webex Calling route lists

Route Lists in Webex Calling are lists of numbers reachable through a Route Group. Each Route List is exclusively assigned to a location that supplies up to 40,000 unassigned numbers from the hosted pool.

Only customers with Dedicated Instance entitlements can see or configure Route Lists in the Control Hub.

**_Route lists to a single Dedicated Instance cluster_**

The figure above illustrates a Webex Calling organization with two Route Lists in their respective locations (SJ & DFW), each of them pointing to the same Route Group/Trunk, which in turn routes to a single Dedicated Instance cluster.

**_Route lists to multiple Dedicated Instance clusters_**

The figure above illustrates a Webex Calling organization with two Route Lists in their respective locations (SJ & DFW), each of them pointing to different Route Group/Trunk configurations, which in turn routes to two different Dedicated Instance clusters within the same customer organization.

For instructions on creating and using Route Lists, see [Provisioning flow to enable Cloud Connected PSTN for Dedicated Instance](#Cisco%5FGeneric%5FTopic.dita%5F20580c69-ec50-4c05-99aa-4c56dd3c7b9d).

## Emergency calling for non E911 locations

For E911 locations, all emergency calls should use the built-in Dedicated Instance E911 capability. E911 calls should not be sent to the Webex Calling Organization.

For non E911 Dedicated Instance locations, that use Cloud Connected PSTN, emergency calls can be sent to the Webex Calling Organization. The calling number of the emergency call must match a PSTN number in a Route List. The Route List will identify the Webex Calling location that the emergency call belongs to and overwrite the calling number with the Emergency Callback Number (ECBN) for that Webex Calling location.

If the calling device on Dedicated Instance does not have a valid Direct Inward Dialing (DID), it should be configured to send the correct ECBN, as the calling number, for all emergency calls. This will then match the correct Route List in the Webex Calling Orgnization and send the call appropriately. 

## Provisioning flow to enable Cloud Connected PSTN for Dedicated Instance

Follow these steps to enable Cloud Connected PSTN. For more information, see:

- [Configure Cloud Connected PSTN](#Cisco%5FReference.dita%5F95f911e5-a47a-489b-b4d5-7072b89a817c)
- [Webex Calling route lists](#Cisco%5FReference.dita%5F020b82a3-1cdf-42c9-901c-858e4496eb0e)
- [Webex Calling Global CCP Provider List](https://community.cisco.com/t5/collaboration-voice-and-video/global-availability-and-cloud-connected-pstn-options-for-webex/ta-p/3916211)
1. Provision Location(s) in Control Hub.
2. Select **Cloud Connected PSTN** as the connection type for the location(s) and select the corresponding CCP provider(s).
3. Order PSTN numbers from a CCP provider (integrated or non-integrated). Integrated providers will supply numbers directly to Control Hub, where they will appear automatically. For non-integrated providers, import the PSTN numbers as follows:

  1. Sign into Control Hub and go to Calling > Numbers menu. Click the Manage drop down menu on the right side of the table and select **Add**.
  2. Select the Location from the drop-down menu on the selection page. The PSTN connection associated with the location is listed against the location.
  3. Add the PSTN numbers purchased in the fields on the Select Numbers page. You may add up to 1000 numbers and choose to activate them immediately or later. Click **Save** after all numbers have been added.
  4. The confirmation page displays the PSTN numbers that have been added to the location.
4. Perform the following steps for each Location to create a Route List, assign it to an appropriate Route Group, and select which numbers will be assigned to DI.

  1. Navigate to Calling > Route Lists and choose one from the list to view its properties.
  2. Select a Route Group from the Routing Choice menu.
  3. Click **Add Numbers** and enter the numbers associated with the Route List.
  4. Select the PSTN numbers in the Route List that are designated for Dedicated Instance (in/out) and click **Add**.  
As part of Dedicated Instance service activation, SIP Trunks to Dedicated Instance and the Route Groups are created in Control Hub (the name starts with “WxC-DI”).
5. Configure Dial Plans in Webex Calling with patterns pointing to Dedicated Instance and associate it with a Route Group.
6. Configure Dedicated Instance:

  - Configure the PSTN DIDs and assign them to phones, users, hunt pilot, etc.
  - Configure dial plan on Dedicated Instance to route PSTN calls to Webex Calling, using the Route Group, Route List, and SIP trunks configured during Dedicated Instance service activation.
7. To enable international calling, select the relevant location in the Control Hub > Calling page. Navigate to the Advanced > Outgoing and Incoming Permissions > Outgoing Calls > International section and select **Allow** from the drop-down menu.

**Troubleshooting:** 

- The Calling Number in the SIP INVITE from DI must match the E164 number configured in the Webex calling route list for the call to succeed.
- Review the [Audio specifications for Webex Calling](https://help.webex.com/gm3pa0) documentation for supported/preferred audio codec by Webex Calling. This must be considered for the design of Dedicated Instance for CCPP calls.
