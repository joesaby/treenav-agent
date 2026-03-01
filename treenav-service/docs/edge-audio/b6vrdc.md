---
title: "Cisco Webex Edge Audio for CUBE Customer Configuration Guide"
product: "Edge Audio"
article_id: "b6vrdc"
url: "https://help.webex.com/en-us/article/b6vrdc/Cisco-Webex-Edge-Audio-for-CUBE-Customer-Configuration-Guide"
last_updated: "2025-05-23"
description: "Use this configuration guide to set up your Edge Audio solution. You will need
access to Webex Site Administration or Control Hub, Cisco Unified Communications
Manager, and CUBE configuration."
tags: ["edge-audio"]
source: "help.webex.com"
---

# Cisco Webex Edge Audio for CUBE Customer Configuration Guide

## Webex Edge Audio Overview

Edge Audio is an audio solution where calls originating within the enterprise go through your company network, over the internetthe internet or Webex Edge ConnectWebex Edge Connect, and into the cloud. Similarly, calls that initiate from Webex during a meeting route through the internetthe internet or Webex Edge ConnectWebex Edge Connect to leverage your on-premises audio routing.

Cisco Unified Border Element (CUBE) with Edge Audio supports vCUBE and all ASR and ISR platforms running CUBE version 16.12.2 and later.

We support the Edge Audio with only Expressway-E deployment with Webex Edge Connect. To route calls through the internet, use either an Expressway-C and Expressway-E pair or a CUBE. These deployments are covered in the [Cisco Webex Edge Audio Customer Configuration Guide](https://help.webex.com/en-us/xmsy7d/Cisco-Webex-Edge-Audio-Customer-Configuration-Guide) or the [Cisco Webex Edge Audio for CUBE Customer Configuration Guide](https://help.webex.com/en-us/b6vrdc/Cisco-Webex-Edge-Audio-for-CUBE-Customer-Configuration-Guide).

The above diagram shows a typical dial-in scenario. The purple phones represent dial-in users who are calling numbers that are set up with Edge Audio. All on-network users that dial numbers configured with Edge Audio have their call route into the Unified CM, through the Expressways, and into the Webex cloud.

The above diagram shows a typical dial-in scenario. The purple phones represent dial-in users who are calling numbers that are set up with Edge Audio. All on-network users that dial numbers configured with Edge Audio will have their call route into the Unified CM, through Expressway-E, and into the Webex cloud.

The orange phone represents a user in your enterprise that dials into a meeting using a number that doesn't route over Edge Audio. Since the user dials an unconfigured number, the call routes through the Session Border Controller, over the PSTN or CCA-SP partner network, and into the Webex cloud.

The gray phone represents an off-network user. Off-network users who dial into Webex meetings don't route over Edge Audio. Their calls route over the PSTN or CCA-SP partner network and into the Webex cloud.

The above diagram shows a typical callback scenario. The green phones represent callback users on your network that can have calls route to them.

The gray phone represents an off-network user. If an off-network user that connects their audio with the callback option, then the call routes from Webex over the PSTN or CCA-SP partner network.

The above image shows a typical Edge Audio deployment using a CUBE with Webex Edge Connect. Edge Audio calls route from the Unified CM, through the CUBE and into the Webex cloud.

We recommend that you use a dedicated CUBE for Edge Audio.

For this deployment, note the following points:

1. Open recommended ports.
2. Static NAT with a public IP address.
3. Apply recommended Webex secure configurations.
4. Secure or unsecure signaling and media, depending on your enterprise.

The above image shows how the CUBE connects directly to the internet in this configuration.

The CUBE must be inside a DMZ when you use the internet to route calls.

Open signaling port 5061 on the internal firewall to allow a secure connection between your CUBE and Unified CM. You must open the media ports based on the CUBE’s internal media port range.

For this deployment, note the following points:

1. Open recommended ports.
2. Static NAT with a public IP address.
3. Apply recommended Webex secure configurations.
4. Secure or insecure connection, depending on your enterprise.
5. Open signaling and media ports based on the CUBE's internal interface media port range.

This guide explains how to configure the network components for Edge Audio. It covers configuring for calls going into the Webex cloud from your enterprise (dial-in) and handling callback calls that are initiated from Webex. 

To set up Edge Audio, you need the necessary dial-in information from Cisco Webex Site Administration or Cisco Webex Control Hub, such as, dial-in numbers and the Lua Normalization script. You use this information to set up the dial-in numbers that users use to dial-in to their Webex services.

Edge Audio supports the site linking process described in [this article](https://help.webex.com/article/341eud).

### Migration Considerations for Webex Sites with Edge Audio

If you move a Webex site, always do the following:

- Generate a new Lua script. Then, replace the old Lua script with the new one wherever you use it in the Edge Audio configuration.  
Never reuse Lua scripts if you move Webex sites.
- Save all the countries, extensions, and ExpresswayCUBE DNS SRVs from Audio Settings before you delete the old site.

### The Lua Script with Edge Audio

Edge Audio is a global service. To route calls using Webex numbers to the Webex cloud, you must specify call routing rules in Unified CM. You can also define custom dial-in numbers to route calls for a particular country dial code and toll type to Webex over Edge Audio. Custom dial-in numbers must be accessible through the PSTN and aren't supported for Cloud Connected Audio Service Provider (CCA-SP) customers.

You also need a Lua normalization script to create the trunk in Unified CM and to maintain proper routing. You can access the Lua script and all the phone numbers (your custom numbers, and any Webex-owned numbers that you allow) from Webex Site Administration or Control Hub.

The Lua script makes the following call translations:

- It updates the host portion of the request URI so that ExpresswayCUBE can route calls to the Edge Audio.
- It appends the `x-cisco-site-uuid` parameter to the request URI referencing the Webex site.
- It updates the SIP `To` header user part that Edge Audio processing requires.

### Custom Dial-in Number Considerations

You can add custom dial-in numbers that are accesible from your enterprise and also from a PSTN. Callers inside your enterprise can use the number directly through your Edge Audio path. For a deployment with Expressway-C and Expressway-E, the path passes into Unified CM, through the Expressways, and into the Webex cloud.For a deployment with CUBE, the path passes into Unified CM, through the CUBE, through Webex Edge Connect or the internet, and into the Webex cloud.For a deployment with only Expressway-E, the path passes into Unified CM, through the Expressway-E, through Webex Edge Connect, and into the Webex cloud.

**_Call paths with a custom dial-in number that is available on PSTN_**

**_Call paths with a custom dial-in number that is available on PSTN_**

**_Call paths with a custom dial-in number that is available on PSTN_**

When you make a custom number accessible from a PSTN, an off-network caller can use the number through the PSTN to your Edge Audio path. The path passes from the Session Border Controller into Unified CM, through the Expressways, and into the Webex cloud.The path passes from the Session Border Controller into Unified CM, through the CUBE, through Webex Edge Connect or the internet, and into the Webex cloud.The path passes from the Session Border Controller into Unified CM, through the Expressway-E, through Webex Edge Connect, and into the Webex cloud.

If your custom number is only available within your enterprise, off-network callers can't use it to call in to Webex audio on any call path.

You can enable up to 100 custom dial-in numbers for your site. A custom number must be unique to one Webex site. If your deployment has several Webex sites, you can't use the same custom number on more than one Webex site. 

Each configured number impacts the number of instructions and the memory usage of the SIP normalization (Lua) script on Unified CM. The defaults for the script are 1000 instructions and a 50 kilobyte Memory Threshold. When setting up Edge Audio, increase the Lua Instruction Threshold in Unified CM to 3000 instructions and the Memory Threshold to 200 kilobytes.

## Setup Task Flow for Edge Audio Call-in

| Step | Description                                                | Section                                                                                                                                                                                                                                                                                |
| ---- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Get the dail-in numbers and Lua script for the deployment. | [Configure Dial-in Settings and Export the Lua Script from Webex Site Administration](#Cisco%5FTask.dita%5F45637f5a-2a58-4549-bfe1-1ee5e213ff69) or [Configure Dial-in Settings and Export the Lua Script from Control Hub](#Cisco%5FTask.dita%5F4ef98adf-a48c-4b0f-8f4d-57bb8dde5f4e) |
| 2    | Set Up your Unified CM.                                    | [Setup Task Flow for Unified CM Configuration](#Cisco%5FConcept.dita%5Fb252f714-d53d-42fd-84c2-76cdcd03a40a)                                                                                                                                                                           |
| 3    | Set up your Expressway-C.                                  | [Setup Task Flow for Expressway-C](#Cisco%5FConcept.dita%5F527ecf54-f17a-46f7-ab66-6d9e6f3b0c23)                                                                                                                                                                                       |
| 4    | Set up your Expressway-E                                   | [Setup Task Flow for Expressway-E](#Cisco%5FConcept.dita%5Ffe754bd9-4bed-4315-b51f-4ae2b315c6f9)                                                                                                                                                                                       |

This diagram gives a more detailed view of the task flow. These tasks are explained later in this guide.

| Step | Description                                                | Section                                                                                                                                                                                                                                                                                |
| ---- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Get the dail-in numbers and Lua script for the deployment. | [Configure Dial-in Settings and Export the Lua Script from Webex Site Administration](#Cisco%5FTask.dita%5F45637f5a-2a58-4549-bfe1-1ee5e213ff69) or [Configure Dial-in Settings and Export the Lua Script from Control Hub](#Cisco%5FTask.dita%5F4ef98adf-a48c-4b0f-8f4d-57bb8dde5f4e) |
| 2    | Set up your Unified CM.                                    | [Setup Task Flow for Unified CM Configuration](#Cisco%5FConcept.dita%5Fb252f714-d53d-42fd-84c2-76cdcd03a40a)                                                                                                                                                                           |
| 3    | Set up your dedicated CUBE.                                | [Setup Task Flow for CUBE for Edge Audio](#Cisco%5FConcept.dita%5F392d6063-01ad-402d-a673-bc9f048a29f6)                                                                                                                                                                                |

This diagram gives a more detailed view of the task flow. These tasks are explained later in this guide.

| Step | Description                                                | Section                                                                                                                                                                                                                                                                                |
| ---- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Get the dail-in numbers and Lua script for the deployment. | [Configure Dial-in Settings and Export the Lua Script from Webex Site Administration](#Cisco%5FTask.dita%5F45637f5a-2a58-4549-bfe1-1ee5e213ff69) or [Configure Dial-in Settings and Export the Lua Script from Control Hub](#Cisco%5FTask.dita%5F4ef98adf-a48c-4b0f-8f4d-57bb8dde5f4e) |
| 2    | Set up your Unified CM.                                    | [Setup Task Flow for Unified CM Configuration](#Cisco%5FConcept.dita%5Fb252f714-d53d-42fd-84c2-76cdcd03a40a)                                                                                                                                                                           |
| 3    | Set up your Expressway-E.                                  | [Setup Task Flow for Expressway-E](#Cisco%5FConcept.dita%5Ff3033da0-206b-41a0-9bd7-c897fce661e1)                                                                                                                                                                                       |

This diagram gives a more detailed view of the task flow. These tasks are explained later in this guide.

### Configure Dial-in Settings and Export the Lua Script from Webex Site Administration

If you manage your Webex sites in Webex Site Administration, or have completed the [Site Linking process](https://collaborationhelp.cisco.com/article/341eud), then use these steps. Configure the dial-in settings, collect the full list of dial-in numbers, and export a copy of the Lua script.

If you change any allowed Webex call-in number or custom call-in number, update the Lua script in Unified CM.

| 1 | Sign in to Webex Site Administration and go to Configuration \> Common Site Settings \> Audio Settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Allowed Call-in Numbers section, choose the Webex-provided global call-in numbers on which hosts and participants can call in to a meeting. Uncheck the box to disable any global toll or toll-free call-in number that you don't want hosts and participants to use. When you're done making changes, click Save.                                                                                                                                                                                                                                                                                                                                                                                         |
| 3 | In the Edge Audio Custom Global Call-in Numbers section, add custom dial-in numbers if you have them. These are numbers that your organization owns, which callers can use to call in from a specific country or region. You can add up to 100 custom numbers. Each custom number must be unique to a single Webex site. Choose the country or region and toll type from the drop-down menus. Enter the digits of the number following the country or region code. You can also enter brackets, dashes, or dots to change how the number displays. You can enter up to 32 digits. Optionally, change or replace the automatically generated phone label. Click Save to add the entry to the call-in numbers list. |
| 4 | When you are done adding numbers, click Preview to see all your allowed call-in numbers. Make note of all of the phone numbers in a separate file. You need these numbers for the route pattern configurations that you set up on Unified CM.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 5 | Click Generate Lua Script, and then select Export. The Lua script is saved to your computer in a .lua format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 6 | In the Site Default Global Call-in Numbers section, choose up to two dial-in numbers to use as global defaults for your site. Check the Assign default call-in numbers check box. Select a call-in option from the list on the left and click Add >. You can order the default call-in numbers with the Move Up and Move Down buttons. If you disabled the Webex Default toll number in the Allowed Call-in Numbers section, select at least one toll option in this section. Click Save. Your changes can take up to 30 minutes to propagate to the client.                                                                                                                                                      |
| 7 | In the Notifications section, decide whether to have Webex notify impacted hosts when you disable or delete a number that the hosts use as their default. When checked, Webex emails the impacted hosts within 24 hours to notify them to update existing meetings and any default preferences that use the diasabled or deleted number.                                                                                                                                                                                                                                                                                                                                                                          |

What to do next

Changes take effect on the Webex side as soon as you save them. But, you must apply the updated Lua script to your Unified CM to update your call routing.

### Configure Dial-in Settings and Export the Lua Script from Control Hub

If you manage your Webex sites in Control Hub, then use these steps. Configure the dial-in settings, collect the full list of dial-in numbers, and export a copy of the Lua script.

If you change any allowed Webex call-in number or custom call-in number, update the Lua script in Unified CM.

| 1 | From the customer view in [https://admin.webex.com](http://admin.webex.com), go to Services and under Meetingselect Sites.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the site to configure with Edge Audio, and choose Configure Site.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3 | Select Common Settings \> Audio Settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4 | In the Allowed Call-in Numbers section, choose the Webex-provided global call-in numbers on which hosts and participants can call in to a meeting. Uncheck the box to disable any global toll or toll-free call-in number that you don't want hosts and participants to use. When you're done making changes, click Save.                                                                                                                                                                                                                                                                                                                                                                                         |
| 5 | In the Edge Audio Custom Global Call-in Numbers section, add custom dial-in numbers if you have them. These are numbers that your organization owns, which callers can use to call in from a specific country or region. You can add up to 100 custom numbers. Each custom number must be unique to a single Webex site. Choose the country or region and toll type from the drop-down menus. Enter the digits of the number following the country or region code. You can also enter brackets, dashes, or dots to change how the number displays. You can enter up to 32 digits. Optionally, change or replace the automatically generated phone label. Click Save to add the entry to the call-in numbers list. |
| 6 | When you are done adding numbers, click Preview to see all your allowed call-in numbers. Make note of all of the phone numbers in a separate file. You need these numbers for the route pattern configurations that you set up on Unified CM.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 7 | Click Generate Lua Script, and then select Export. The Lua script is saved to your computer in a .lua format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 8 | In the Site Default Global Call-in Numbers section, choose up to two dial-in numbers to use as global defaults for your site. Check the Assign default call-in numbers check box. Select a call-in option from the list on the left and click Add >. You can order the default call-in numbers with the Move Up and Move Down buttons. If you disabled the Webex Default toll number in the Allowed Call-in Numbers section, select at least one toll option in this section. Click Save. Your changes can take up to 30 minutes to propagate to the client.                                                                                                                                                      |
| 9 | In the Notifications section, decide whether to have Webex notify impacted hosts when you disable or delete a number that the hosts use as their default. When checked, Webex emails the impacted hosts within 24 hours to notify them to update existing meetings and any default preferences that use the diasabled or deleted number.                                                                                                                                                                                                                                                                                                                                                                          |

What to do next

Changes take effect on the Webex side as soon as you save them. But, you must apply the updated Lua script to your Unified CM to update your call routing.

## Setup Task Flow for Unified CM Configuration

To route calls from your enterprise to the Webex cloud, you set up routing rules and trunks in Unified CM Administration. The following are high-level steps for this configuration:

| Step | Description                                                                 | Section                                                                                                                             |
| ---- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Create a SIP normalization script from the Webex Lua script.                | [Create SIP Normalization Script from the Webex LUA Script](#Cisco%5FTask.dita%5F0e08112e-22c4-439e-9d2a-72ea5009ccf0)              |
| 2    | (Optional) Create or update a SIP Profile to use early offer support.       | [(Optional) Set Early Offer Support for Voice and Video Calls](#Cisco%5FTask.dita%5F11ae996d-9474-432f-acb4-94c6cb9b6fd2)           |
| 3    | Create a security profile for your SIP trunk.                               | [Create a SIP Trunk Security Profile](#Cisco%5FTask.dita%5F4240c810-a968-4d71-8591-ee92d71cb1c7)                                    |
| 4    | (Optional) Add support for the G.722 codec.                                 | [(Optional) Add Support for the G.722 Codec](#Cisco%5FTask.dita%5F3ad9ca95-4702-4ac6-a8ec-8f9fb753aea0)                             |
| 5    | Create a new trunk between Unified CM and your Expressway-CCUBEExpressway-E | [Create a New Trunk Between Unified CM and Expressway-CCUBEExpressway-E](#Cisco%5FTask.dita%5F0f59c60d-18ec-4f3e-98fb-5bbe2c6da632) |
| 6    | Create a route group.                                                       | [Create a Route Group](#Cisco%5FTask.dita%5F92c07af3-f2fc-441c-a9a2-39c329f7a217)                                                   |
| 7    | Create a route list.                                                        | [Create a Route List](#Cisco%5FTask.dita%5F0f18bbe6-8f96-44fa-bbfc-0ba9961557e0)                                                    |
| 8    | Create route patterns.                                                      | [Create Route Patterns](#Cisco%5FTask.dita%5F217d0281-22c7-4f18-8820-f517857ee9e8)                                                  |

### Create SIP Normalization Script from the Webex LUA Script

Use the Lua script that you exported from Webex Site Administration or Control Hub to create a new SIP Normalization Script in Unified CM.

Before you begin

When you configure the Voice class URI in a later step, you need the URI host address from the Lua script. Make note of it now or keep the Lua script until you complete that step. The URI host address is in the `Update To header`section:

```
   -- Update To header with CCAX URL
    local oldTo1 = msg:getHeader("To")
    local newTo1 = string.gsub(oldTo1, "<sip:(.+)@(.*)>", "<sip:%1@ecccx.<your_region>.webex.com>")
    msg:modifyHeader("To", newTo1)
```

| 1 | In Unified CM Administration, go to Device \> Device Settings \> SIP Normalization Script.                                                          |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Add New to create a new SIP Normalization Script.                                                                                            |
| 3 | Give the script a name that clearly identifies it, such as “your\_site\_name\_webex\_edge\_audio”.                                                  |
| 4 | Select Import File, and select the Lua script that you exported earlier. After the Lua script imports, the Content updates based on the Lua script. |
| 5 | Set Memory Threshold to 200.                                                                                                                        |
| 6 | Set Lua Instruction Threshold to 3000.                                                                                                              |
| 7 | Click Save.                                                                                                                                         |

What to do next

Apply this SIP Normalization Script to the trunk between your Unified CM and your Expressway-CCUBEExpressway-E.

### (Optional) Set Early Offer Support for Voice and Video Calls

We recommend that you use early offer support with Edge Audio, but Edge Audio doesn't require it. Edge Audio also supports delayed offers.

If your Unified CM Administration configuration doesn't have a SIP Profile, create one with these steps. 

If you have an existing SIP Profile with early offer support, you can try re-using it for this purpose. Ensure that it matches the settings in Steps 4–6 of this procedure.

| 1 | From Unified CM Administration, go to Device \> Device Settings \> SIP Profile, and select Find. |
| - | ------------------------------------------------------------------------------------------------ |
| 2 | Select Standard SIP Profile For Cisco VCS.                                                       |
| 3 | Select Copy.                                                                                     |
| 4 | Change the Name to identify the new version. For example, add EO\_Profile to the name.           |
| 5 | Uncheck the Allow iX Application Media check box.                                                |
| 6 | Set Early Offer support for voice and video calls to Best Effort (no MTP inserted).              |
| 7 | Save your SIP Profile.                                                                           |

### Create a SIP Trunk Security Profile

| 1 | From Cisco Unified CM Administration, go to System \> Security \> SIP Trunk Security Profile, and select Add New.                                                            |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Name the SIP trunk security profile.                                                                                                                                         |
| 3 | Set Device Security Mode to Encrypted or Non- secure, based on your deployment needs.                                                                                        |
| 4 | Enter a port value for the Incoming Port that doesn't conflict with other entries. Don't use ports **5060** or **5061**. Use any nonconflicting port, such as port **5070**. |
| 5 | Save your profile.                                                                                                                                                           |

### (Optional) Add Support for the G.722 Codec

Edge Audio supports the G.722 codec. You don't need to configure the G.722 codec on your Unified CM for Edge Audio to work. But, because G.722 uses less bandwidth than other codecs, configuring it might improve the quality of service for your deployment.

Webex supports the G.722, G.711a, and G.711μ audio codecs. However, Webex does not support renegotiating codecs mid call, such as for Music On Hold (MOH).

| 1 | From Unified CM Administration, go to System \> Enterprise Parameters. |
| - | ---------------------------------------------------------------------- |
| 2 | Choose Enabled for Advertise G.722 Codec and save your change.         |
| 3 | Go to System \> Region Information \> Region and click Add New.        |
| 4 | Name the region, and save the change.                                  |
| 5 | Select Factory Default lossy for the Audio Codec Preference List.      |
| 6 | Select 64 kbps (G.722, G.711) for the Maximum Audio Bit Rate.          |
| 7 | Save your changes.                                                     |

What to do next

Apply the new region to the device pool for Edge Audio.

### Create a New Trunk Between Unified CM and Expressway-CCUBEExpressway-E

Create a new trunk to use for Edge Audio. Don't modify an existing trunk.

| 1 | From Cisco Unified CM Administration, go to Device \> Trunk, and select Add New.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | For Trunk Type, select SIP Trunk, and then choose Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3 | Enter a Device Name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4 | Under **Destination**, enter the Destination Addressand the Destination Port for your Expressway-CCUBEExpressway-E. Use port 5060 for nonsecure trunks and port 5061 for secure trunks.                                                                                                                                                                                                                                                                                                                          |
| 5 | Set the SIP Trunk Security Profile to the trunk that you created in the [Create a SIP Trunk Security Profile](#Cisco%5FTask.dita%5F4240c810-a968-4d71-8591-ee92d71cb1c7) task. You can only use one secure TLS trunk between Unified CM and ExpresswayCUBE. For more information, see [Intermittent calls to Destination fails via TLS trunk (CSCus63305)](https://bst.cloudapps.cisco.com/bugsearch/bug/CSCus63305). If another TLS trunk exists, then you must configure a TCP trunk with ExpresswayCUBE here. |
| 6 | Set the SIP Profile to the SIP profile that you created in the [(Optional) Set Early Offer Support for Voice and Video Calls](#Cisco%5FTask.dita%5F11ae996d-9474-432f-acb4-94c6cb9b6fd2) task.                                                                                                                                                                                                                                                                                                                   |
| 7 | For the DTMF Signaling Method, select RFC 2833.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 8 | For Normalization Script, select the Normalization Script that you created in the [Create SIP Normalization Script from the Webex LUA Script](#Cisco%5FTask.dita%5F0e08112e-22c4-439e-9d2a-72ea5009ccf0) task.                                                                                                                                                                                                                                                                                                   |
| 9 | Save the trunk. For other settings, such as Device Pools, Media Resource Group Lists, Locations, Calling Search Spaces, Call Classification, choose appropriate configurations for your dpeloyment. Assign the configurations based on your enterprise policies and services.                                                                                                                                                                                                                                    |

### Create a Route Group

| 1 | From Cisco Unified CM Administration, go to Call Routing \> Route/Hunt \> Route Group. |
| - | -------------------------------------------------------------------------------------- |
| 2 | Select Add New.                                                                        |
| 3 | Name the route group.                                                                  |
| 4 | For Available Devices, select the Edge Audio trunk that you created.                   |
| 5 | Select Add to Route Group.                                                             |
| 6 | Save the route group.                                                                  |

### Create a Route List

| 1 | From Cisco Unified CM Administration, go to Call Routing \> Route/Hunt \> Route List.                                         |
| - | ----------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Add New.                                                                                                               |
| 3 | Name the route list and give it a description.                                                                                |
| 4 | For Cisco Unified Communications Manager Group, select an appropriate value for your configuration, and then save the change. |
| 5 | Under Route List Member Information, select Add Route Group, and choose the route group that you created.                     |
| 6 | Save the route list.                                                                                                          |

### Create Route Patterns

You must set up the phone numbers that you saved earlier. These are the numbers that users dial to start and join their Webex meetings.

These numbers include all possible numbers that connect with Edge Audio. Depending on your configuration, country, or region, you might not want to create route patterns for all the numbers.

If you don't configure a phone number in a route pattern, then calls to that number route over the PSTN or CCA-SP partner network.

| 1 | From Cisco Unified CM Administration, go to Call Routing \> Route/Hunt \> Route Pattern, and select Add New.                                                                                                                                    |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | For Route Pattern, enter a phone number over which users dial in to their Webex meetings. Strip off any escape code or prefix used to dial out. The phone number is sent in a fully qualified E.164 format with or without a leading plus sign. |
| 3 | For Gateway/Route List, select the route list that you created in the previous task.                                                                                                                                                            |
| 4 | Save your changes.                                                                                                                                                                                                                              |
| 5 | Repeat these steps for each of the remaining phone numbers that you saved earlier.                                                                                                                                                              |

The Unified CM configuration now routes calls for the selected numbers to your Expressway-CCUBEExpressway-E.

## Setup Task Flow for CUBE for Edge Audio

Setting up your CUBE for Edge Audio requires the following:

- Familiarity with Cisco IOS CLI-based configurations
- Familiarity with CUBE configurations
- The proper CUBE licenses

The following are the high-level steps for configuring your CUBE for Edge Audio:

| Step | Description                                                                                             | Section                                                                                                   |
| ---- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1    | Make the required global configurations to your CUBE.                                                   | [CUBE Global Configurations for Edge Audio](#Cisco%5FConcept.dita%5Ff50bf664-5e12-4d8c-95d1-c13e1b2c53e2) |
| 2    | Create a tenant to use with Edge Audio.                                                                 | [Create a Tenant](#Cisco%5FTask.dita%5Ffbb9322b-8598-403c-aab5-9a91f02c7fdc)                              |
| 3    | Create an audio secure profile. If you don't use extension callback, you can create dial peers instead. | [Dial Peers for Edge Audio](#Cisco%5FConcept.dita%5F30dc4d28-bfff-453f-be4f-50e36689d7df)                 |

### CUBE Global Configurations for Edge Audio

Setting up CUBE to route Edge Audio calls to their destination requires these changes:

| Step | Description                                                | Section                                                                                                  |
| ---- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 1    | Set up the Voice Service VoIP with a trusted address list. | [Set Up a Voice Service VoIP](#Cisco%5FTask.dita%5Fdaa98b9e-2c41-4131-866b-1965fa768782)                 |
| 2    | Set SIP-UA to only accept TLS v1.2.                        | [Set Up SIP-UA](#Cisco%5FTask.dita%5Fe68b9d06-3622-458f-a782-956983904c05)                               |
| 3    | Set up a voice class with the allowed codecs.              | [Set Up Voice Class Codec](#Cisco%5FTask.dita%5F4f823e7a-1762-4578-af13-4cb859a6092d)                    |
| 4    | Create the required SIP profiles for the voice class.      | [Set Up Voice Class SIP Profiles](#Cisco%5FTask.dita%5F5be88e6c-0be6-45f6-a24f-01c4c18ba255)             |
| 5    | Set the pattern matching for the voice class URI.          | [Set Up a Voice Class URI](#Cisco%5FTask.dita%5F50db77e8-5379-49d2-bc58-ab2cd159581e)                    |
| 6    | Set up the SRTP-crypto for the voice class.                | [Set Up Voice Class SRTP Cryptographic Suite](#Cisco%5FTask.dita%5F4615f673-0656-4036-b793-5df603f7526b) |
| 7    | Set the TCP Maximum Segment Size.                          | [Set the TCP Maximum Segment Size](#Cisco%5FTask.dita%5F5a96584e-5e26-4bd1-b2b0-011704f7acbd)            |

#### Set Up a Voice Service VoIP

To secure your CUBE, enable the IP Address trusted listfeature under Voice Service VoIP Mode. List all the Webex IP address ranges to only accept calls from Webex. This list should contain all Unified CM IP addresses to allow calls from the Unified CM. 

You must configure the Edge Audio media port ranges on public IP addresses for the external interfaces pointing toward the Webex cloud. 

You must configure the enterprise-specific media port ranges on private IP addresses for the internal interface toward Unified CM.

We recommend updating the minimum session timer (Min-SE) because Webex and Unified CM have different default values for this setting. This change helps avoid a certain call error for calls going from your organization to the Webex cloud. Previously, we recommended changing the Min-SE setting in Unified CM, but that approach impacts other SIP flows that don't require the longer period. 

| 1 | Open a command line and sign in to your CUBE.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Configure the list of IP address ranges used by Cisco Webex Meeting services. This is an example list. But [check this link](https://help.webex.com/article/WBX264) to verify that there are no other IP addresses to add. Make sure to read the comments in this codeblock and add the appropriate information. Commented-out (!) commands require tailoring before you uncomment them. Anything between carets, < >, needs enterprise specific information. voice service voip   ip address trusted list   ipv4 64.68.96.0 255.255.224.0   ipv4 66.114.160.0 255.255.240.0   ipv4 66.163.32.0 255.255.224.0   ipv4 170.133.128.0 255.255.192.0   ipv4 173.39.224.0 255.255.224.0   ipv4 173.243.0.0 255.255.240.0   ipv4 207.182.160.0 255.255.224.0   ipv4 209.197.192.0 255.255.224.0   ipv4 216.151.128.0 255.255.224.0   ipv4 114.29.192.0 255.255.224.0   ipv4 210.4.192.0 255.255.240.0   ipv4 69.26.176.0 255.255.240.0   ipv4 62.109.192.0 255.255.192.0   ipv4 69.26.160.0 255.255.240.0   ! check the link to make sure all ip's ranges are covered   ! ipv4 <CUCM-IP-RANGE>   rtcp all-pass-through   address-hiding   ! enable cube with purchased license capacity   ! mode border-element license capacity <capacity>   media disable-detailed-stats   media stats-disconnect   ! public-ip of CUBE external interface towards Webex   ! media-address range <public-ip> <public-ip> port-range 36000 48198   ! port-range 36000 48198   ! private-ip of CUBE internal interface towards CUCM   ! <start> <end> are the media port range that your enterprise wants to use on internal network   ! media-address range <privateip> <privateip> port-range <start> <end>   ! port-range <start> <end>   allow-connections sip to sip   call-quality   max-dropout 2   max-reorder 2   sip   min-se 1800 session-expires 14400 |

#### Set Up SIP-UA

Edge Audio requires TLS v1.2 connections with a signed CA certificate. You must configure SIP-UA to only accept TLS v1.2, and configure your CUBE to send certificates with a TLS connection.

Enable the Call Treatment feature to throttle calls on your CUBE based on CPU capacity.

| 1    | Open a command line and sign in to your CUBE.                                                                                                                                                                                                  |  |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  |
| |  2 | Enter the following commands: sip-ua  transport tcp tls v1.2  ! CUBE\_CA\_CERT is the name of the configured trustpoint   crypto signaling default trustpoint CUBE\_CA\_CERT  call threshold global cpu-5sec low 68 high 75  call treatment on |  |

#### Set Up Voice Class Codec

Edge Audio supports the G.722, G.711 u-law, and G.711 a-law codecs. You must configure a voice class codec to use one of these codecs. Apply the voice class to the secure audio profile or dial peers for Edge Audio.

| 1 | Open a command line and sign in to your CUBE.                                                                                                             |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Configure the voice class codec. As an example: voice class codec 3  codec preference 1 g722-64  codec preference 2 g711ulaw  codec preference 3 g711alaw |

#### Set Up Voice Class SIP Profiles

With TLS, CUBE uses SIPS URIs, but Unified CM doesn't support SIPS URIs. So, you apply a SIP profile that converts all SIPS URIs to SIP URIs. 

You need two SIP profiles for Edge Audio, one to the Webex cloud and the other to your Unified CM.

| 1 | Open a command line and sign in to your CUBE.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Apply the following SIP profile from your CUBE toward the Webex cloud. voice class sip-profiles 2340 rule 1 request INVITE sip-header SIP-Req-URI modify "sips:" "sip:"   rule 2 request INVITE sip-header To modify "sips:" "sip:"   rule 3 request INVITE sip-header From modify "sips:" "sip:"   rule 4 request INVITE sip-header Remote-Party-ID modify "sips:" "sip:"   rule 5 request INVITE sip-header P-Asserted-Identity modify "sips:" "sip:"   rule 6 request ACK sip-header From modify "sips:" "sip:"  rule 7 request REINVITE sip-header P-Asserted-Identity modify "sips:" "sip:"  rule 8 request REINVITE sip-header From modify "sips:" "sip:"  rule 9 request REINVITE sip-header Contact modify "sips:(.\*)>" "sip:\\1;transport=tls>"  rule 10 request INVITE sip-header Contact modify "sips:" "sip:"                                                                                                                                                                                                                                                                                                                               |
| 3 | (Optional) If your CUBE is behind a static NAT, add these rules on the same sip-profile 2340\. This example assumes the CUBE external interface IP address (public IP) is 10.21.21.21 and the static NAT IP is 179.10.11.12. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/442001-443000/442151.jpg) voice service voip sip sip-profiles inbound dial-peer voice 23411 voip voice-class sip profiles 2340 inbound rule 11 request ANY sip-header Via modify "10.21.21.21" "179.10.11.12"  rule 12 request ANY sip-header Contact modify "10.21.21.21" "179.10.11.12"  rule 13 response ANY sip-header Contact modify "10.21.21.21" "179.10.11.12"  rule 14 request ANY sdp-header Audio-Connection-Info modify "10.21.21.21" "179.10.11.12"  rule 15 response ANY sdp-header Audio-Connection-Info modify "10.21.21.21" "179.10.11.12"                                                                                                                                                                                                                                                                  |
| 4 | Apply the following SIP profile toward your Unified CM. When a call comes from the Webex cloud to your enterprise, the RequestURI of SIP INVITE message has the customer DNS SRV record. you must replace that SRV with the Unified CM SRV. voice class sip-profiles 2341 rule 1 request INVITE sip-header SIP-Req-URI modify "sips:" "sip:"  rule 2 request INVITE sip-header To modify "sips:" "sip:"  rule 3 request INVITE sip-header From modify "sips:" "sip:"  rule 4 request INVITE sip-header Remote-Party-ID modify "sips:" "sip:"  rule 5 request INVITE sip-header P-Asserted-Identity modify "sips:" "sip:"  rule 6 request ACK sip-header From modify "sips:" "sip:"  rule 7 request REINVITE sip-header P-Asserted-Identity modify "sips:" "sip:"  rule 8 request REINVITE sip-header From modify "sips:" "sip:"  rule 9 request REINVITE sip-header Contact modify "sips:(.\*)>" "sip:\\1;transport=tls>"  rule 10 request INVITE sip-header Contact modify "sips:" "sip:"  ! assuming CUCM SRV is test-ccm.sample.com  rule 11 request INVITE sip-header SIP-Req-URI modify "@(.\*);x-cisco-webex-service=audio" "@test-ccm.sample.com" |

#### Set Up a Voice Class URI

Edge Audio does trunk matching based on the request URI. So, you must configure the voice class URI for pattern matching.

Before you begin

Collect the URI host address from the `Update To header` section of the Lua script, as shown in bold below:

```
   -- Update To header with CCAX URL
    local oldTo1 = msg:getHeader("To")
    local newTo1 = string.gsub(oldTo1, "<sip:(.+)@(.*)>", "<sip:%1@ecccx.<your_region>.webex.com>")
    msg:modifyHeader("To", newTo1)
```

| 1 | Open a command line and sign in to your CUBE.                                                                                                                                                                                                                                                                                                      |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Enter the following voice class URI configurations to identify calls from Webex to your enterprise. voice class uri INEdgeAudio sip  pattern x-cisco-webex-service=audio                                                                                                                                                                           |
| 3 | Enter the following voice class URI configurations to identify calls from your enterprise to Webex. Use the URI host address that you collected from Site Adminstration or Control Hub. In this example, replace _<your\_region>_ with AMER, EMEA, or APJC as appropriate. voice class uri OUTEdgeAudio sip  host ecccx._<your\_region>_.webex.com |

#### Set Up Voice Class SRTP Cryptographic Suite

Your voice class SRTP-crypto assigns the preferred SRTP crypto suite to use for Edge Audio. Configure the following crypto suites in order. Apply the voice class srtp-crypto to the secure audio profile or dial peers for Edge Audio.

| 1 | Open a command line and sign in to your CUBE.                                                                                                                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Enter the following cryptographic configurations. voice class srtp-crypto 234  crypto 1 AEAD\_AES\_256\_GCM  crypto 2 AEAD\_AES\_128\_GCM  crypto 3 AES\_CM\_128\_HMAC\_SHA1\_80  crypto 4 AES\_CM\_128\_HMAC\_SHA1\_32 |

#### Set the TCP Maximum Segment Size

By default, the CUBE's ServerHello is 1380 bytes long. Because the remote side Webex expects a smaller segment size, it does not send an ACK. By the time CUBE retries with a smaller size (1360), it typically receives the ACK after the 3 second handshake timer expires, causing the call to fail. Setting the mss value to 1360 ensures that CUBE restricts the segment on the first try and receives a timely ACK from Webex.

| 1 | Open a command line and sign in to your CUBE.      |
| - | -------------------------------------------------- |
| 2 | Enter the following configuration. ip tcp mss 1360 |

### Create a Tenant

Edge Audio call routing is based on URIs. The call-route URI must be enabled to match dial peers based on URIs. 

Edge audio doesn’t support caller ID updates, so you must add `no update-callerid`.

You don't need payload interworking for RTP-NTE DTMF packets, so configure `asymmetrics payload full`.

| 1 | Open a command line and sign in to your CUBE.                                                                                                      |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Enter the following tenant configurations. voice class tenant 234   asymmetric payload full   no update-callerid   error-passthru   call-route url |

### Dial Peers for Edge Audio

You must configure two dial peers to handle Edge Audio Calls. One dial peer, the external interface, represents the SIP trunk between your CUBE and the Webex cloud. The other dial peer, the internal interface, represents the SIP trunk between your CUBE and the Unified CM.

The call numbers that CUBE scales to varies based on the enterprise Unified CM mode – mix mode, secure mode, or unsecure mode. You must apply the correct configuration based on your enterprise deployment.

If you want to configure your CUBE to only accept extension callback for Edge Audio from calls that come from your Webex site, then use the [(Optional) Audio Secure Profiles for CUBE](#Cisco%5FConcept.dita%5Fbc56c9eb-4b22-478a-817c-3450c6d2fe71) instead.

#### Set Up a Mix Mode Dial Peer

If your enterprise has a secure and unsecure deployment, apply the mix mode dial peer configuration.

| 1 | Open a command line and sign in to your CUBE.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Configure strict SRTP inside the external dial peer and SRTP fallback inside the internal dial peer. dial-peer voice 23411 voip  description External Webex edge audio entry or exit dial-peer  session protocol sipv2 ! This DNS SRV should be as per the site-admin / controlhub dial-in settings  session target dns:ecccx._<your\_region>_.webex.com  session transport tcp tls  destination uri OUTEdgeAudio  incoming uri request INEdgeAudio  voice-class codec 3 offer-all  voice-class sip url sips  voice-class sip profiles 2340  voice-class sip tenant 234  ! This should be CUBE external interface name. In this sample GigabitEthernet2/0/0 is the external interface  voice-class sip bind control source-interface GigabitEthernet2/0/0  voice-class sip bind media source-interface GigabitEthernet2/0/0  voice-class sip requri-passing  voice-class sip audio forced  dtmf-relay rtp-nte  srtp dial-peer voice 23401 voip  description Internal mix mode Webex edge audio entry or exit dial-peer  session protocol sipv2 ! This should be the enterprise CUCM / SME SRV / IP address  session target dns:test-ccm.sample.com  session transport tcp  destination uri INEdgeAudio  incoming uri request OUTEdgeAudio  voice-class codec 3 offer-all  voice-class sip srtp negotiate cisco  voice-class sip profiles 2341  voice-class sip tenant 234  voice-class sip srtp-crypto 234 !This should be CUBE internal interface name. In this sample GigabitEthernet2/0/1 is the internal interface  voice-class sip bind control source-interface GigabitEthernet2/0/1  voice-class sip bind media source-interface GigabitEthernet2/0/1  voice-class sip requri-passing  dtmf-relay rtp-nte  srtp fallback |

#### Set Up a Secure Dial Peer

If your enterprise has a fully secure deployment, apply the secure dial peer configuration.

| 1 | Open a command line and sign in to your CUBE.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Configure SRTP pass-thru in external dial peer and in internal dial peer. dial-peer voice 23411 voip description External Webex edge audio entry or exit dial-peer session protocol sipv2 ! This DNS SRV should be as per the site-admin / controlhub dial-in settings session target dns:ecccx._<your\_region>_.webex.com session transport tcp tls destination uri OUTEdgeAudio incoming uri request INEdgeAudio voice-class codec 3 offer-all voice-class sip url sips voice-class sip profiles 2340 voice-class sip tenant 234 voice-class sip srtp-crypto 234 ! This should be CUBE external interface name. In this sample GigabitEthernet2/0/0 is the external interface voice-class sip bind control source-interface GigabitEthernet2/0/0 voice-class sip bind media source-interface GigabitEthernet2/0/0 voice-class sip requri-passing voice-class sip audio forced dtmf-relay rtp-nte srtp pass-thru dial-peer voice 23401 voip description Internal mix mode Webex edge audio entry or exit dial-peer session protocol sipv2 ! This should be the enterprise CUCM / SME SRV / IP address session target dns:test-ccm.sample.com session transport tcp tls destination uri INEdgeAudio incoming uri request OUTEdgeAudio voice-class codec 3 offer-all voice-class sip profiles 2341 voice-class sip tenant 234 voice-class sip srtp-crypto 234 !This should be CUBE internal interface name. In this sample GigabitEthernet2/0/1 is the internal interface voice-class sip bind control source-interface GigabitEthernet2/0/1 voice-class sip bind media source-interface GigabitEthernet2/0/1 voice-class sip requri-passing dtmf-relay rtp-nte srtp pass-thru |

#### Set Up an Unsecure Dial Peer

If your enterprise has a fully unsecure deployment, apply the unsecure dial peer configuration.

| 1 | Open a command line and sign in to your CUBE.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Configure strict SRTP in the external dial peer. Don't configure any SRTP for the internal dial peer. dial-peer voice 23411 voip description External Webex edge audio entry or exit dial-peer session protocol sipv2 ! This DNS SRV should be as per the site-admin / controlhub dial-in settings session target dns:ecccx._<your\_region>_.webex.com session transport tcp tls destination uri OUTEdgeAudio incoming uri request INEdgeAudio voice-class codec 3 offer-all voice-class sip url sips voice-class sip profiles 2340 voice-class sip tenant 234 voice-class sip srtp-crypto 234 ! This should be CUBE external interface name. In this sample GigabitEthernet2/0/0 is the external interface voice-class sip bind control source-interface GigabitEthernet2/0/0 voice-class sip bind media source-interface GigabitEthernet2/0/0 voice-class sip requri-passing voice-class sip audio forced dtmf-relay rtp-nte srtp dial-peer voice 23401 voip description Internal mix mode Webex edge audio entry or exit dial-peer session protocol sipv2 ! This should be the enterprise CUCM / SME SRV / IP address session target dns:test-ccm.sample.com session transport tcp destination uri INEdgeAudio incoming uri request OUTEdgeAudio voice-class codec 3 offer-all voice-class sip profiles 2341 voice-class sip tenant 234 !This should be CUBE internal interface name. In this sample GigabitEthernet2/0/1 is the internal interface voice-class sip bind control source-interface GigabitEthernet2/0/1 voice-class sip bind media source-interface GigabitEthernet2/0/1 voice-class sip requri-passing dtmf-relay rtp-nte |

## Setup Task Flow for Firewall and Certificate Configuration

You must configure your firewalls with the proper ports and signed certificates to enable Edge Audio.

| Step | Description                                             | Section                                                                                                                  |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1    | Open the required firewall ports.                       | [Required Firewall Ports](#Cisco%5FConcept.dita%5Fa845d842-d854-4846-beca-f60d289a256a)                                  |
| 2    | Apply the necessary signed certificates.                | [Signed Certificates from a Trusted Certificate Authority](#Cisco%5FConcept.dita%5F8800b821-4d03-4355-b458-56d15d5b6442) |
| 3    | Add the Edge Audio Root CA Certificates to Expressway-E | [Add Edge Audio Root CA Certificates to Expressway-E](#Cisco%5FTask.dita%5Fcc975398-1b40-4224-b663-10d21964d271)         |

### Required Firewall Ports

After you complete the Unified CM and ExpresswayCUBE configurations, you must open the necessary firewall ports. Refer to this article, <https://collaborationhelp.cisco.com/article/WBX264>, for network requirement information and which ports to open.

### Signed Certificates from a Trusted Certificate Authority

Edge Audio requires your Expressway-E to offer signed certificates from trusted CA certificate authorities for Mutual TLS (mTLS) connections. This article lists the certificate authorities that Cisco trusts: <https://collaborationhelp.cisco.com/article/WBX9000008850>. Edge Audio considers certificates that listed authorities sign as valid and allows the connection. 

If you use your Expressway-E for Webex for Government, you must enable mTLS.

Edge Audio requires your CUBE to offer signed certificates from trusted CA certificate authorities for Mutual TLS (mTLS) connections. Use the following link to get to a list of certificate authorities that Cisco trusts: <https://collaborationhelp.cisco.com/article/WBX9000008850>. Edge Audio considers certificates that listed authorities sign as valid and allows the connection. 

For Webex for Government deployments, you must enable mTLS.

CUBEs are already configured to accept Webex certificates. They have a in-built Certificate Authority (CA) trust-store with the required Quavadis Root CA certificate.

You must upload the CUBE certificate and CA certificate chain that you purchased from the CA. Before uploading the CUBE certificate, you must configure a trustpoint. For details, see the section on configuring CUBE in _Configure and Troubleshoot Enterprise CA (Third Party CA) Signed Certificates for SIP TLS and SRTP Between CUCM, IP Phones and CUBE_ at <https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-border-element/200614-Configure-and-Troubleshoot-Enterprise-CA.html>.

When Edge Audio sends its certificate during the mTLS handshake, CUBE validates it against the certifiactes in the trustpool. To update the trustpool bundle with the Cisco Root CA, download the latest "Cisco Trusted Core Root Bundle" from `http://www.cisco.com/security/pki/` with this command:

```
crypto pki trustpool import clean url <latest_bundle_url>
```

For more information on updating the trustpool, see the chapter on PKI trustpool management in the _Public Key Infrastructure Configuration Guide, Cisco IOS XE_ guide.

Set up callback

## Setup task flow for Edge Audio callback

If your site uses Webex Calling, you can use on-net routing for callback instead. If you don't have Webex Calling, use this method. Don't configure callback by both methods. 

Before you set up Edge Audio Callback, make sure that your deployment is properly configured:

- Apply the following DNS SRV settings:

  - DNS SRVs for each Expressway-E target must point to port 5062.
  - Provision A Records to resolve the Fully Qualified Domain Names (FQDNs) in the SRV records.
- Some deployments might use the same Expressway-E targets for business-to-business calls and for Edge Audio Callback. If your deployment reuses these targets, use a dedicated domain for the SRV records for the Edge Audio Expressway-E targets. Don't mix different ports in a single set of SRV records.
- Your Unified CM configuration must properly route Edge Audio calls for users on and off your network.
- Apply the following DNS SRV settings:

  - DNS SRVs for each CUBE target must point to port 5061.
  - Provision A Records to resolve the Fully Qualified Domain Names (FQDNs) in the SRV records.
- Some deployments might use the same CUBE targets for business-to-business calls and for Edge Audio Callback. If your deployment reuses these targets, use a dedicated domain for the SRV records for the Edge Audio CUBE targets. Don't mix different ports in a single set of SRV records.
- Your Unified CM configuration must properly route Edge Audio calls for users on and off your network.

If you don't configure your network properly to handle the calls from Webex, Edge Audio fails over to the Webex PSTN or CCA-SP partner network.

You configure Edge Audio Callback as follows:

| Step | Description                                                                                 | Section                                                                                                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Set up a search rule on your Expressway-C.                                                  | [Call Routing for the Expressway-C](#Cisco%5FTask.dita%5F04c974b4-5569-474e-8067-47607aedbf76)                                                                                                                                                 |
| 2    | Set up a search rule on your Expressway-E.                                                  | [Call Routing for the Expressway-E](#Cisco%5FTask.dita%5Fae2ff448-33a0-4ea8-800a-eb8b871076f8)                                                                                                                                                 |
| 3    | Set up Edge Audio Callback in your portal, either Webex Site Administration or Control Hub. | [Apply Edge Audio callback settings in Webex Site Administration](#Cisco%5FTask.dita%5F19ea42a6-6ac2-40c0-ad38-b9bf63eb5dfe) or [Apply Edge Audio callback settings in Control Hub](#Cisco%5FTask.dita%5Fcda649eb-b0af-4f34-a73c-ec0bd5f183a1) |
| 4    | (Optional) Enable Extension Callback in your portal.                                        | [(Optional) Setup Task Flow for Extension Callback](#Cisco%5FConcept.dita%5Ffdba5f63-a705-4c4e-aa0c-6c8cbe5733ef)                                                                                                                              |

| Step | Description                                                                                 | Section                                                                                                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Set up Edge Audio Callback in your portal, either Webex Site Administration or Control Hub. | [Apply Edge Audio callback settings in Webex Site Administration](#Cisco%5FTask.dita%5F19ea42a6-6ac2-40c0-ad38-b9bf63eb5dfe) or [Apply Edge Audio callback settings in Control Hub](#Cisco%5FTask.dita%5Fcda649eb-b0af-4f34-a73c-ec0bd5f183a1) |
| 2    | (Optional) Enable Extension Callback in your portal.                                        | [(Optional) Setup Task Flow for Extension Callback](#Cisco%5FConcept.dita%5Ffdba5f63-a705-4c4e-aa0c-6c8cbe5733ef)                                                                                                                              |

| Step | Description                                                                                 | Section                                                                                                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Set up a search rule on your Expressway-E.                                                  | [Call Routing for the Expressway-E](#Cisco%5FTask.dita%5Fae2ff448-33a0-4ea8-800a-eb8b871076f8)                                                                                                                                                 |
| 2    | Set up Edge Audio Callback in your portal, either Webex Site Administration or Control Hub. | [Apply Edge Audio callback settings in Webex Site Administration](#Cisco%5FTask.dita%5F19ea42a6-6ac2-40c0-ad38-b9bf63eb5dfe) or [Apply Edge Audio callback settings in Control Hub](#Cisco%5FTask.dita%5Fcda649eb-b0af-4f34-a73c-ec0bd5f183a1) |
| 3    | (Optional) Enable Extension Callback in your portal.                                        | [(Optional) Setup Task Flow for Extension Callback](#Cisco%5FConcept.dita%5Ffdba5f63-a705-4c4e-aa0c-6c8cbe5733ef)                                                                                                                              |

### Globally Distributed Media for Callback

Edge Audio uses  globally distributed media for all callbacks. To achieve optimal connectivity, Webex selects the nearest media node to your enterprise edge based on the SRV. Traffic then passes from the Webex cloud to the nearest enterprise edge for that call. This routing minimizes latency and keeps most of the traffic on the Webex backbone and off the internet.

### Apply Edge Audio callback settings in Webex Site Administration

| 1 | Sign in to Cisco Webex Site Administration, and go to Configuration \> Common Site Settings \> Audio Settings.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Edge Audio Allowed Callback Numbers section, select the Country/Region for which to apply callback settings, and then enter the domain name for the Expressway DNS SRVCUBE DNS SRV . For example, if your DNS SRV record is \_sips.\_tcp.example.com, you enter example.com here.                                                                                                                                                                                                                                                       |
| 3 | Click Add. When you click Add, Edge Audio automatically tests the configured DNS SRV connectivity and looks up the closest Webex media node for that SRV. Before you apply the settings, make sure that the DNS SRV passes the connectivity test. If Webex can't determine the geographic location of an added SRV, Webex selects a default media node based on your site's location. Webex uses the MaxMind DB to locate your IP address. If you see a discrepancy in the location for your IP address, contact MaxMind to correct the issue. |
| 4 | To show connectivity check details, click on the status indicator to display the Verify SIP Destination page.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5 | Choose Apply Settings when you're done adding all the callback settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Apply Edge Audio callback settings in Control Hub

| 1 | From the customer view in <https://admin.webex.com>, go to Services, and under Meeting, select Sites.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the site for which to configure Edge Audio, and choose Configure Site.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Select Common Settings \> Audio Settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 4 | In the Edge Audio Allowed Callback Numbers section, select the Country/Region for which to apply callback settings, and then enter the domain name for the Expressway DNS SRVCUBE DNS SRV . For example, if your DNS SRV record is \_sips.\_tcp.example.com, you enter example.com here.                                                                                                                                                                                                                                                       |
| 5 | Click Add. When you click Add, Edge Audio automatically tests the configured DNS SRV connectivity and looks up the closest Webex media node for that SRV. Before you apply the settings, make sure that the DNS SRV passes the connectivity test. If Webex can't determine the geographic location of an added SRV, Webex selects a default media node based on your site's location. Webex uses the MaxMind DB to locate your IP address. If you see a discrepancy in the location for your IP address, contact MaxMind to correct the issue. |
| 6 | To show connectivity check details, click on the status indicator to display the Verify SIP Destination page.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 7 | Choose Apply Settings when you're done adding the callback settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Edge Audio Callback Routing Options

When you enable Edge Audio callback for one or more countries, Webex routes calls over the Internet. If there are DNS, TCP, or TLS connectivity issues, or a call fails with a 380 or a 400-699 SIP error response, then Webex by default retries the call over a PSTN or CCA-SP partner network.

See [Control Callback Routing Options for Edge Audio](https://help.webex.com/en-us/5suuxb/Control-Callback-Routing-Options-for-Edge-Audio) for details on disabling Edge Audio from retrying failed calls over a PSTN or CCA-SP partner network.

### (Optional) Setup Task Flow for Extension Callback

Extension Callback for Edge Audio is only available for WBS33 and later sites. To find out which version you're using, see [Find Your Cisco Webex Meetings Version Number](https://help.webex.com/qgij81/).

Extension callback for Edge Audio allows users to join Webex meetings using the Call Me feature and their internal extension. This is only available for Webex Meetings, and doesn't work with Webex Events, Webex Training, or Webex Support.

You can reuse the search patterns that you created for Edge Audio callback with extension callback. 

You configure Edge Audio Callback as follows:

| Step | Description                                                                                | Section                                                                                                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Enable Extension Callback in your portal, either Webex Site Administration or Control Hub. | [Enable Extension Callback in Webex Site Administration](#Cisco%5FTask.dita%5Fbaf74cd7-aeff-4f53-b37e-a5a5661e9bfe) or [Enable Extension Callback in Control Hub](#Cisco%5FTask.dita%5F76075039-3c3c-42b2-9800-fb6e47ca39fa)                   |
| 2    | Enable internal callback teleconferencing.                                                 | [Allow Internal Call-Back for Webex Teleconferencing in Webex Site Administration](#WebEx%5FTK%5FAE31977D%5F00) or [Allow Internal Call-Back for Webex Teleconferencing in Control Hub](#WebEx%5FTK%5FAE31977D%5F00)                           |
| 3    | Specify the countries or regions to which Webex can route callbacks.                       | [Set Allowed Countries for Callback in Webex Site Administration](#Cisco%5FTask.dita%5F6c382f53-5718-4812-ba7f-36fc9a55de39) or [Set Allowed Countries for Callback in Control Hub](#Cisco%5FTask.dita%5F1197dd6c-8e2e-4925-b3b2-015744915c00) |
| 4    | (Optional) Set up Audio Secure Profiles for your Expressway-E.                             | [(Optional) Audio Secure Profiles for Expressway-E](#Cisco%5FConcept.dita%5Fdc7df771-a7a1-44d9-9620-160b0e662a13)                                                                                                                              |

| Step | Description                                                                                | Section                                                                                                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Enable Extension Callback in your portal, either Webex Site Administration or Control Hub. | [Enable Extension Callback in Webex Site Administration](#Cisco%5FTask.dita%5Fbaf74cd7-aeff-4f53-b37e-a5a5661e9bfe) or [Enable Extension Callback in Control Hub](#Cisco%5FTask.dita%5F76075039-3c3c-42b2-9800-fb6e47ca39fa)                   |
| 2    | Enable internal callback teleconferencing.                                                 | [Allow Internal Call-Back for Webex Teleconferencing in Webex Site Administration](#WebEx%5FTK%5FAE31977D%5F00) or [Allow Internal Call-Back for Webex Teleconferencing in Control Hub](#WebEx%5FTK%5FAE31977D%5F00)                           |
| 3    | Specify the countries or regions to which Webex can route callbacks.                       | [Set Allowed Countries for Callback in Webex Site Administration](#Cisco%5FTask.dita%5F6c382f53-5718-4812-ba7f-36fc9a55de39) or [Set Allowed Countries for Callback in Control Hub](#Cisco%5FTask.dita%5F1197dd6c-8e2e-4925-b3b2-015744915c00) |
| 4    | (Optional) Set up Audio Secure Profiles for your CUBE.                                     | [(Optional) Audio Secure Profiles for CUBE](#Cisco%5FConcept.dita%5Fbc56c9eb-4b22-478a-817c-3450c6d2fe71)                                                                                                                                      |

| Step | Description                                                                                | Section                                                                                                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Enable Extension Callback in your portal, either Webex Site Administration or Control Hub. | [Enable Extension Callback in Webex Site Administration](#Cisco%5FTask.dita%5Fbaf74cd7-aeff-4f53-b37e-a5a5661e9bfe) or [Enable Extension Callback in Control Hub](#Cisco%5FTask.dita%5F76075039-3c3c-42b2-9800-fb6e47ca39fa)                   |
| 2    | Enable internal callback teleconferencing.                                                 | [Allow Internal Call-Back for Webex Teleconferencing in Webex Site Administration](#WebEx%5FTK%5FAE31977D%5F00) or [Allow Internal Call-Back for Webex Teleconferencing in Control Hub](#WebEx%5FTK%5FAE31977D%5F00)                           |
| 3    | Specify the countries or regions to which Webex can route callbacks.                       | [Set Allowed Countries for Callback in Webex Site Administration](#Cisco%5FTask.dita%5F6c382f53-5718-4812-ba7f-36fc9a55de39) or [Set Allowed Countries for Callback in Control Hub](#Cisco%5FTask.dita%5F1197dd6c-8e2e-4925-b3b2-015744915c00) |
| 4    | (Optional) Set up Audio Secure Profiles for your Expressway-E.                             | [(Optional) Audio Secure Profiles for Expressway-E](#Cisco%5FConcept.dita%5Fdc7df771-a7a1-44d9-9620-160b0e662a13)                                                                                                                              |

#### Enable Extension Callback in Webex Site Administration

If you manage your Webex sites in Webex Site Administration, or have completed the [Site Linking process](https://collaborationhelp.cisco.com/article/341eud), then enable extension callback in Webex Site Administration.

| 1 | Sign in to Cisco Webex Site Administration, and go to Configuration \> Common Site Settings \> Audio Settings.                                |
| - | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Edge Audio Allowed Callback Numbers section, select Extension as the Country/Region and then enter the Expressway DNS SRVCUBE DNS SRV. |
| 3 | Click Add.                                                                                                                                    |
| 4 | Choose Apply Settings. After you enable extension callback, it takes 30 minutes for the settings to apply to the database.                    |

#### Enable Extension Callback in Control Hub

If you set up and manage your Webex sites in Control Hub, then enable extension callback in Control Hub.

| 1 | From the customer view in [https://admin.webex.com](http://admin.webex.com), go to Services and under Meetingselect Sites.                    |
| - | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the site for which to configure Edge Audio, and choose Configure Site.                                                                 |
| 3 | Select Common Settings \> Audio Settings                                                                                                      |
| 4 | In the Edge Audio Allowed Callback Numbers section, select Extension as the Country/Region and then enter the Expressway DNS SRVCUBE DNS SRV. |
| 5 | Click Add.                                                                                                                                    |
| 6 | Choose Apply Settings. After you enable extension callback, it takes 30 minutes for the settings to apply to the database.                    |

#### Allow Internal Call-Back for Webex Teleconferencing in Control Hub

This setting is only available for CCA-SP, CCA Enterprise, and Edge Audio customers, and only applies to Webex Meetings.

When provisioned for your site, you can turn on the option to allow meeting participants to receive calls at an internal phone number within the same corporate site. You can also edit the label that appears within the Audio Conference dialog when participants join the audio conference.

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/login), go to Services, and under Meeting, select Sites. |
| - | ------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Choose the Webex site to change the settings for, and click Configure Site.                                                          |
| 3 | Under Common Settings, check the Enable internal call-back teleconferencing check box.                                               |
| 4 | In the Internal call-back option label field, enter a descriptive name or phrase to identify the internal call-back option.          |
| 5 | Click Update.                                                                                                                        |

#### Allow Internal Call-Back for Webex Teleconferencing in Webex Site Administration

This setting is only available for CCA-SP, CCA Enterprise, and Edge Audio customers, and only applies to Webex Meetings.

When provisioned for your site, you can turn on the option to allow meeting participants to receive calls at an internal phone number within the same corporate site. You can also edit the label that appears within the Audio Conference dialog when participants join the audio conference. 

| 1 | Sign in to Webex Site Administration and go to Configuration \> Common Site Settings \> Options.                            |
| - | --------------------------------------------------------------------------------------------------------------------------- |
| 2 | Scroll to the Site Options section, and then check the Enable internal call-back teleconferencing check box.                |
| 3 | In the Internal call-back option label field, enter a descriptive name or phrase to identify the internal call-back option. |
| 4 | Click Update.                                                                                                               |

#### Set Allowed Countries for Callback in Webex Site Administration

If you manage your Webex sites in Webex Site Administration, or have completed the [Site Linking process](https://collaborationhelp.cisco.com/article/341eud), use these steps to specify the countries or regions to which Webex can route callbacks.

| 1 | Sign in to Cisco Webex Site Administration, and go to Configuration \> Common Site Settings \> Audio Settings.                                                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Webex Allowed Callback Countries section, use the checkboxes to enable or disable a country or region. You must have at least one country or region enabled for callback. |
| 3 | When you're done making changes, save your changes. Your changes can take up to 30 minutes to propagate to the client.                                                           |

#### Set Allowed Countries for Callback in Control Hub

If you manage your Webex sites in Control Hub, use these steps to specify the countries or regions to which Webex can route callbacks.

| 1 | From the customer view in [https://admin.webex.com](http://admin.webex.com), go to Services and under Meetingselect Sites.                                                       |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the site for which you want to configure Edge Audio, and choose Configure Site.                                                                                           |
| 3 | Select Common Settings \> Audio Settings.                                                                                                                                        |
| 4 | In the Webex Allowed Callback Countries section, use the checkboxes to enable or disable a country or region. You must have at least one country or region enabled for callback. |
| 5 | When you're done making changes, save your changes. Your changes can take up to 30 minutes to propagate to the client.                                                           |

#### (Optional) Audio Secure Profiles for CUBE

We recommend that you configure the extension callback for Edge Audio to only accept calls that come from your Webex site. If participants use callback to join meetings from unexpected Webex sites, the CUBE rejects those calls.

Your Webex site must be on version 40.8.0 or higher to set up an audio secure profile.

To set up an audio secure profile, make these configurations to your CUBE:

- Voice Class URI for Audio Secure Profile
- Rejection Response for Audio Secure Profile
- Dial Peer for Incoming Calls
- Dial Peer for Rejecting Calls

##### Create a Voice Class URI for Audio Secure Profile

You need a new `voice class uri` with the pattern for your Webex site with Edge Audio. You use the URI to create the dial peers for callback. 

| 1 | Copy the pattern of the Webex site that you want to allow external callbacks with Edge Audio: For sites managed in Cisco Webex Site Administration, sign in to Webex Site Administration and go to Configuration \> Common Site Settings \> Audio Settings. For sites managed in Cisco Webex Control Hub, from the customer view in [https://admin.webex.com](https://admin.webex.com/), go to Services, and under Meeting, select Sites. Choose the Webex site to view the pattern for, and go to Configure Site \> Common Settings \> Audio Settings. |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Edge Audio Customer Edge section, click Secure Edge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3 | In the CUBE section, click Copy.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4 | Open a command line and sign in to your CUBE.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 5 | Enter the following voice class uri with the pattern that you copied from Site Administration or Control Hub. This example uses the x-cisco-site-uuid 9ca12345678e321be0123456e00ab789 pattern as a reference. ! voice class uri INEdgeAudioSiteName sip  pattern x-cisco-site-uuid=9ca12345678e321be0123456e00ab789;x-cisco-webex-service=audio ! If you have more than one Webex site, then repeat these steps to create a new voice class uri for each Webex site.                                                                                   |

##### Add Rejection Response for Audio Secure Profile

When a participant uses callback from a Webex site of another organization, you want them to get an appropriate rejection response. Add a new `voice class sip-profiles`, `voice translation-rule`, and `voice translation-profile` to use with your dial peers.

| 1 | Open a command line and sign in to your CUBE.                                                                                                                                                                                                                                                                                                     |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Enter the appropriate rejection response for your deployment. Here's an example rejection response: ! voice class sip-profiles 2001  response 403 method INVITE sip-header SIP-StatusLine modify "Forbidden" "Unknown Webex Site" ! voice translation-rule 1  rule 1 reject /^.\*/ ! voice translation-profile call\_block  translate calling 1 ! |

##### Create a Dial Peer for Incoming Calls with Audio Secure Profile

Create a new dial peer, and attach your new `voice class uri`. This dial peer allows calls to go through when participants use callback with Edge Audio from the Webex site with its UUID.

| 1 | Open a command line and sign in to your CUBE.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Add a dial peer for incoming calls that's appropriate for your deployment. Here's an example incoming dial peer: ! dial-peer voice 2001 voip  description External Webex edge audio entry or exit dial-peer to match SiteUUID  session protocol sipv2  session target dns:ecccx._<your\_region>_.webex.com  session transport tcp tls  destination uri OUTEdgeAudio  incoming uri request INEdgeAudioSiteName  voice-class codec 3 offer-all  voice-class sip url sips  voice-class sip early-offer forced  voice-class sip profiles 2000  voice-class sip tenant 234  voice-class sip bind control source-interface GigabitEthernet1/0/0  voice-class sip bind media source-interface GigabitEthernet1/0/0  voice-class sip requri-passing  voice-class sip audio forced  dtmf-relay rtp-nte  srtp ! |

##### Create a Dial Peer for Rejecting Calls with Audio Secure Profile

Create a dial peer to reject calls when participants use callback with Edge Audio from an incorrect Webex site. The dial peer returns a 403 error for callbacks from a Webex site that doesn't match its UUID.

| 1 | Open a command line and sign in to your CUBE.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Add a dial peer for rejecting calls that's appropriate for your deployment. Here's an example dial peer: ! dial-peer voice 2000 voip  description External Webex edge audio entry dial-peer to reject no/wrong sit  call-block translation-profile incoming call\_block  call-block disconnect-cause incoming call-reject  session protocol sipv2  session transport tcp tls  incoming uri request INEdgeAudio  voice-class codec 3 offer-all  voice-class sip url sips  voice-class sip profiles 2001  voice-class sip bind control source-interface GigaBitEthernet1/0/0  voice-class sip bind media source-interface GigaBitEthernet1/0/0  srtp ! If you have an existing dial peer to reject calls, remove the destination uri from that dial peer when you create an audio secure profile. |

##### Example Mix Mode Dial Peer Configuration with Audio Secure Profile

This example shows a mix mode dial peer with an audio secure profile. It has SRTP fallback configured in the various dial peers. You use this type of config when your enterprise has a mixed secure and unsecure deployment. 

```

dial-peer voice 23401 voip
 description Internal mix mode Webex edge audio entry or exit dial-peer
 session protocol sipv2
! This should be the enterprise CUCM / SME SRV / IP address
 session target dns:test-ccm.sample.com
 session transport tcp tls
 destination uri INEdgeAudio
 incoming uri request OUTEdgeAudio
 voice-class codec 3 offer-all
 voice-class sip srtp negotiate cisco
 voice-class sip profiles 2341
 voice-class sip tenant 234
 voice-class sip srtp-crypto 234
!This should be CUBE internal interface name. In this sample GigabitEthernet2/0/1 is the internal interface
 voice-class sip bind control source-interface GigabitEthernet2/0/1
 voice-class sip bind media source-interface GigabitEthernet2/0/1
 voice-class sip requri-passing
 dtmf-relay rtp-nte
 srtp fallback
!
dial-peer voice 2001 voip
 description External Webex edge audio entry or exit dial-peer to match SiteUUID
 session protocol sipv2
 session target dns:ecccx.<your_region>.webex.com
 session transport tcp tls
 destination uri OUTEdgeAudio
 incoming uri request INEdgeAudioSiteName
 voice-class codec 3 offer-all
 voice-class sip url sips
 voice-class sip early-offer forced
 voice-class sip profiles 2000
 voice-class sip tenant 234
 voice-class sip bind control source-interface GigabitEthernet1/0/0
 voice-class sip bind media source-interface GigabitEthernet1/0/0
 voice-class sip requri-passing
 voice-class sip audio forced
 dtmf-relay rtp-nte
 srtp
!
dial-peer voice 2000 voip
 description External Webex edge audio entry dial-peer to reject no/wrong sit
 call-block translation-profile incoming call_block
 call-block disconnect-cause incoming call-reject
 session protocol sipv2
 session transport tcp tls
 incoming uri request INEdgeAudio
 voice-class codec 3 offer-all
 voice-class sip url sips
 voice-class sip profiles 2001
 voice-class sip bind control source-interface GigaBitEthernet1/0/0
 voice-class sip bind media source-interface GigaBitEthernet1/0/0
 srtp
!
```

##### Example Secure Dial Peer Configuration with Audio Secure Profile

This example shows a secure dial peer with an audio secure profile. It has SRTP pass-thru configured in the various dial peers. 

```
dial-peer voice 23401 voip
description Internal mix mode Webex edge audio entry or exit dial-peer
session protocol sipv2
! This should be the enterprise CUCM / SME SRV / IP address
session target dns:test-ccm.sample.com
session transport tcp tls
destination uri INEdgeAudio
incoming uri request OUTEdgeAudio
voice-class codec 3 offer-all
voice-class sip profiles 2341
voice-class sip tenant 234
voice-class sip srtp-crypto 234
!This should be CUBE internal interface name. In this sample GigabitEthernet2/0/1 is the internal interface
voice-class sip bind control source-interface GigabitEthernet2/0/1
voice-class sip bind media source-interface GigabitEthernet2/0/1
voice-class sip requri-passing
dtmf-relay rtp-nte
srtp pass-thru
!
dial-peer voice 2001 voip
 description External Webex edge audio entry or exit dial-peer to match SiteUUID
 session protocol sipv2
 session target dns:ecccx.<your_region>.webex.com
 session transport tcp tls
 destination uri OUTEdgeAudio
 incoming uri request INEdgeAudioSiteName
 voice-class codec 3 offer-all
 voice-class sip url sips
 voice-class sip early-offer forced
 voice-class sip profiles 2000
 voice-class sip tenant 234
voice-class sip srtp-crypto 234
 voice-class sip bind control source-interface GigabitEthernet1/0/0
 voice-class sip bind media source-interface GigabitEthernet1/0/0
 voice-class sip requri-passing
 voice-class sip audio forced
 dtmf-relay rtp-nte
 srtp pass-thru
!
dial-peer voice 2000 voip
 description External Webex edge audio entry dial-peer to reject no/wrong sit
 call-block translation-profile incoming call_block
 call-block disconnect-cause incoming call-reject
 session protocol sipv2
 session transport tcp tls
 incoming uri request INEdgeAudio
 voice-class codec 3 offer-all
 voice-class sip url sips
 voice-class sip profiles 2001
 voice-class sip bind control source-interface GigaBitEthernet1/0/0
 voice-class sip bind media source-interface GigaBitEthernet1/0/0
 srtp
!
```

##### Example Unsecure Dial Peer Configuration with Audio Secure Profile

This example shows an unsecure dial peer with an audio secure profile. You don't configure any SRTP CLI's in the internal dial peer. 

```
dial-peer voice 23401 voip
description Internal mix mode Webex edge audio entry or exit dial-peer
session protocol sipv2
! This should be the enterprise CUCM / SME SRV / IP address
session target dns:test-ccm.sample.com
session transport tcp
destination uri INEdgeAudio
incoming uri request OUTEdgeAudio
voice-class codec 3 offer-all
voice-class sip profiles 2341
voice-class sip tenant 234
!This should be CUBE internal interface name. In this sample GigabitEthernet2/0/1 is the internal interface
voice-class sip bind control source-interface GigabitEthernet2/0/1
voice-class sip bind media source-interface GigabitEthernet2/0/1
voice-class sip requri-passing
dtmf-relay rtp-nte
!
dial-peer voice 2001 voip
 description External Webex edge audio entry or exit dial-peer to match SiteUUID
 session protocol sipv2
 session target dns:ecccx.<your_region>.webex.com
 session transport tcp tls
 destination uri OUTEdgeAudio
 incoming uri request INEdgeAudioSiteName
 voice-class codec 3 offer-all
 voice-class sip url sips
 voice-class sip early-offer forced
 voice-class sip profiles 2340
 voice-class sip tenant 234
voice-class sip srtp-crypto 234
 voice-class sip bind control source-interface GigabitEthernet1/0/0
 voice-class sip bind media source-interface GigabitEthernet1/0/0
 voice-class sip requri-passing
 voice-class sip audio forced
 dtmf-relay rtp-nte
 srtp
!
dial-peer voice 2000 voip
 description External Webex edge audio entry dial-peer to reject no/wrong sit
 call-block translation-profile incoming call_block
 call-block disconnect-cause incoming call-reject
 session protocol sipv2
 session transport tcp tls
 incoming uri request INEdgeAudio
 voice-class codec 3 offer-all
 voice-class sip url sips
 voice-class sip profiles 2001
 voice-class sip bind control source-interface GigaBitEthernet1/0/0
 voice-class sip bind media source-interface GigaBitEthernet1/0/0
 srtp
!
```

## Setup task flow for Webex Calling on-net routing for callback

If your site uses Webex Calling, you can use on-net routing for callback. If you don't have Webex Calling, use the Edge Audio callback method. Don't configure callback by both methods. 

| Step | Description                                                                                                   | Section                                                                                                                                                                                                                                                              |
| ---- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Set up Webex Calling on-net routing callback in your portal, either Webex Site Administration or Control Hub. | [Set Webex Calling on-net routing for callback in Webex Site Administration](#Cisco%5FTask.dita%5Fb2b2f874-8818-40f9-b757-5e8ec797d2e1) or [Set Webex Calling on-net routing for callback in Control Hub](#Cisco%5FTask.dita%5F9742b236-c461-4d11-8a8f-c11e5ea0513f) |
| 2    | (Optional) Enable Extension Callback in your portal.                                                          | [(Optional) Setup Task Flow for Extension Callback](#Cisco%5FConcept.dita%5Ffdba5f63-a705-4c4e-aa0c-6c8cbe5733ef)                                                                                                                                                    |

### Set Webex Calling on-net routing for callback in Webex Site Administration

Before you begin

You can specify the countries or regions to which Webex can route callbacks. To us this feature, you must manage Webex sites in Webex Site Administration or have completed the [Site Linking](https://help.webex.com/article/341eud/) process. For the configured international extensions, when a user selects the Call me or callback option when joining a meeting, Webex Meetings first attempts to route the call directly to Webex Calling. If the user-entered number is not a Webex Calling registered number, then the call falls back and routes through the PSTN, the normal callback behavior.

| 1 | Sign in to Cisco Webex Site Administration, and go to Configuration \> Common Site Settings \> Audio Settings.                                                                                     |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Edge Audio Allowed Callback Numbers section, use the check boxes to enable or disable country or region. Enable at least one country or region for callback.                                |
| 3 | In the Country/Region drop-down list, select the country to route calls to though on-net.                                                                                                          |
| 4 | In the Call Routing drop-down list, select Webex Calling On-net Routing.                                                                                                                           |
| 5 | Click Add. Based on your requirements, repeat the step for ‘Extension’ or other countries. We recommend using Webex Calling on-net routing for all available countries in the Country/Region list. |
| 6 | Choose Apply Settings when you've added all the callback settings. Your changes can take up to 30 minutes to propagate to the client.                                                              |

### Set Webex Calling on-net routing for callback in Control Hub

Before you begin

**Prerequisites**

- Webex Calling licenses and a Webex Calling PSTN number
- Webex Meetings licenses

If you manage your Webex sites in Control Hub, you can specify the countries or regions to which Webex can route callbacks. For the configured international extensions, when a user selects the Call me or callback option when joining a meeting, Webex Meetings first attempts to route the call directly to Webex Calling. If the user-entered number isn't a Webex Calling registered number, then the call falls back and routes through the PSTN, the normal callback behavior.

| 1 | From the customer view in <https://admin.webex.com>, go to Services and, under Meeting, select Sites.                                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the site for which to configure Webex Calling on-net routing and choose Configure Site.                                                                                                     |
| 3 | Select Common Settings \> Audio Settings.                                                                                                                                                          |
| 4 | In the Webex Calling on-net routing section, use the check boxes to enable or disable country or region. Enable at least one country or region for a callback.                                     |
| 5 | In the Country/Region drop-down list, select the country to route calls through on-net.                                                                                                            |
| 6 | In the Call Routing drop-down list, select Webex Calling On-net Routing. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/468001-469000/468154.jpg)  |
| 7 | Click Add. Based on your requirements, repeat the step for ‘Extension’ or other countries. We recommend using Webex Calling on-net routing for all available countries in the Country/Region list. |
| 8 | Choose Apply Settings when you've added all the callback settings. Your changes can take up to 30 minutes to propagate to the client.                                                              |

What to do next

The customer can receive a callback on the Webex Calling device by choosing the Call me option in the meeting audio connection settings and entering a Webex Calling PSTN number.

## CCA Partners and Edge Audio

Edge Audio works with any CCA partner. The configurations are the same. The main difference is that the deployment uses a CCA partner’s network instead of Webex PSTN audio. The CCA Call Detail Record (CDR) shows any customer calls that connect to a meeting using Edge Audio. For more information on the CCA CDR, see the [design document](https://www.cisco.com/c/dam/en/us/td/docs/collaboration/CCA/Deployment/CCA-SP%5FReport%5FDesign.pdf).

After a CCA partner submits an Edge Audio order, the partner either decides to configure Edge Audio themselves or work with a customer administrator to have them configure it.

### Customize Dial-in Interactive Voice Response (IVR) Prompt Language

The IVR prompts for calls that route over Edge Audio using dial-in numbers from a CCA Partner default to English. To set up an Edge Audio Webex site with an IVR system in another language, provide your customer with an updated LUA script that identifies the dial-in numbers for each language.

To update the language in the LUA Script, you must set the Locale tag. For more information on the locale tag see this article: <https://help.webex.com/article/4zjt9m>

After you update the LUA script, send it to your customer. The customer then updates the LUA script on their Unified CM.

### Set the Default IVR Language for CCA Dial-in Numbers

You can update the IVR prompt for Edge Audio Webex sites to play in a language other than English. This task explains how to change the default IVR language from English to another language for all CCA dial-in numbers.

- Use [this article as a reference](https://help.webex.com/article/4zjt9m) for which locale tags you can add.
- Add all locale tags before `x-cisco-site-uuid`.

Before you begin

Download the LUA script from Site Administration, Control Hub, or the CCA Portal. 

| 1 | Open the Lua Script in a text editor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Scroll to the **Update Request URI with Edge Audio URL and site uuid**section and choose. **One IVR language for all phone numbers**—This example shows where to place the locale tag in the LUA script. This code uses the French (fr\_FR) locale tag. Use the language that you want for your IVR:\-- Update Request URI with Webex Express URL and site uuid if phoneNumber == "NUMBER\_NEEDS\_CUSTOM\_LANUAGE" then local newRequestURI = string.gsub(requestURI, "sip:(.+)@(.\*)", "sip:%1@cca.example.webex.com;locale=fr\_FR;x-cisco-site-uuid=6f861ef80b622085e053000000000000”) msg:setRequestUri(newRequestURI) end **One IVR language for one phone number, and a different language for all other phone numbers**—This example shows where to place the locale tag in the LUA script for one number. This code uses the French (fr\_FR) locale tag. Then, beneath the else tag, add the locale tag for the language that plays for all other IVR prompts. \-- Update Request URI with Webex Express URL and site uuid     if phoneNumber == "NUMBER\_NEEDS\_CUSTOM\_LANUAGE" then          local newRequestURI = string.gsub(requestURI, "sip:(.+)@(.\*)", "sip:%1@cca.example.webex.com;locale=fr\_FR;x-cisco-site-uuid=6f861ef80b622085e053000000000000”)         msg:setRequestUri(newRequestURI)     else         local newRequestURI = string.gsub(requestURI, "sip:(.+)@(.\*)", "sip:%1@cca.example.webex.com;x-cisco-site-uuid=6f861ef80b622085e053000000000000")         msg:setRequestUri(newRequestURI)     end **Multiple IVR languages for different phone numbers**—This example shows where to place the locale tag in the LUA script. This code uses French (fr\_FR) as the first assigned language. Beneath the first entry, add an elseif code block that uses the locale tag for the assigned to the next number. Finally, add an else code block that uses the locales tag for all IVR prompts.Use this     \-- Update Request URI with Webex Express URL and site uuid     if phoneNumber == "NUMBER1\_NEEDS\_CUSTOM\_LANUAGE" then          local newRequestURI = string.gsub(requestURI, "sip:(.+)@(.\*)", "sip:%1@cca.example.webex.com;locale=fr\_FR;x-cisco-site-uuid=6f861ef80b622085e0537326e00a3c4f")         msg:setRequestUri(newRequestURI)     elseif phoneNumber == "NUMBER2\_NEEDS\_CUSTOM\_LANUAGE" then         local newRequestURI = string.gsub(requestURI, "sip:(.+)@(.\*)", "sip:%1@cca.example.webex.com;locale=en\_US;x-cisco-site-uuid=6f861ef80b622085e0537326e00a3c4f")         msg:setRequestUri(newRequestURI)     else         local newRequestURI = string.gsub(requestURI, "sip:(.+)@(.\*)", "sip:%1@ccax.qa.webex.com;x-cisco-site-uuid=6f861ef80b622085e0537326e00a3c4f")         msg:setRequestUri(newRequestURI)     end |
| 3 | Save the Lua script and send it to your customer to upload to their Unified CM.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
