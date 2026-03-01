---
title: "Configure Unified CM for Webex Calling"
product: "Calling in Webex (Unified CM)"
article_id: "nqqzbk7"
url: "https://help.webex.com/en-us/article/nqqzbk7/Configure-Unified-CM-for-Webex-Calling"
last_updated: "2024-05-18"
description: "You can integrate Webex Calling with Unified CM when Webex Calling enabled
locations are added to an existing Cisco UC deployment or you require direct
dialing between phones registered to Unified CM and phones in Webex Calling
locations."
tags: ["calling-in-webex-(unified-cm)"]
source: "help.webex.com"
---

# Configure Unified CM for Webex Calling

## Configure SIP Trunk Security Profile for Trunk to Local Gateway

In cases where Local Gateway and PSTN gateway reside on the same device, Unified CM must be enabled to differentiate between two different traffic types (calls from Webex and from the PSTN) that are originating from the same device and apply differentiated class of service to these call types. This differentiated call treatment is achieved by provisioning two trunks between Unified CM and the combined local gateway and PSTN gateway device which requires different SIP listening ports for the two trunks.

| Create a dedicated SIP Trunk Security Profile for the Local Gateway trunk with the following settings: SettingValueNameUnique Name, such as **Webex**DescriptionMeaningful description, such as **Webex SIP Trunk Security Profile**Incoming PortNeeds to match port used in local gateway config for traffic to/from Webex: 5065 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Configure SIP Profile for the Local Gateway Trunk

| Create a dedicated SIP Profile for the Local Gateway trunk with the following settings: **Setting** **Value**NameUnique Name, such as **Webex**DescriptionMeaningful description, such as **Webex SIP Profile**Enable OPTIONS Ping to monitor destination status for Trunks with Service Type “None (Default)”Checked |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Create a Calling Search Space for Calls From Webex

| Create a calling search space for calls originating from Webex with the following settings: **Setting** **Value**NameUnique Name, such as **Webex**DescriptionMeaningful description, such as **Webex Calling Search Space**Selected Partitions **DN** (+E.164 directory numbers)   **ESN** (abbreviated inter-site dialling)   **PSTNInternational** (PSTN access)   **onNetRemote** (GDPR learned destinations) ![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-notes.svg) The last partition onNetRemote is only used in a multi-cluster environment where routing information is exchanged between Unified CM clusters using Intercluster Lookup Service (ILS) or Global Dialplan Replication (GDPR). |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Configure a SIP Trunk To and From Webex

| Create a SIP trunk for the calls to and from Webex via the Local Gateway with the following settings: **Setting** **Value** **Device Information**DeviceNameA unique name, such as **Webex**DescriptionMeaningful description, such as **Webex SIP Trunk**Run On All Active Unified CM NodesChecked**Inbound Calls**Calling Search SpaceThe previously defined calling search space: **Webex**AAR Calling Search Space A calling search space with only access to PSTN route patterns: PSTNReroute**SIP Information**Destination AddressIP address of the Local Gateway CUBEDestination Port5060SIP Trunk Security ProfilePreviously defined: **Webex**SIP ProfilePreviously defined: **Webex** |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Configure Route Group for Webex

| Create a route group with the following settings: **Setting** **Value** **Route Group Information**Route Group NameA unique name, such as **Webex**Selected DevicesThe previously configured SIP trunk: **Webex** |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Configure Route List for Webex

| Create a route list with the following settings: **Setting** **Value** **Route List Information**NameA unique name, such as **RL\_Webex**DescriptionMeaningful description, such as **Route list for Webex**Run On All Active Unified CM NodesChecked**Route List Member Information**Selected GroupsOnly the previously defined route group: **Webex** |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Create a Partition for Webex Destinations

| Create a partition for the Webex destinations with the following settings: **Setting** **Value** **Route List Information**NameUnique name, such as **Webex**DescriptionMeaningful description, such as **Webex Partition** |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## What to do next

Make sure to add this partition to all calling search spaces that should have access to Webex destinations. You must add this partition specifically to the calling search space that is used as the inbound calling search space on PSTN trunks, so that calls from the PSTN to Webex can be routed.

## Configure Route Patterns for Webex Destinations

| Configure route patterns for each DID range on Webex with the following settings: **Setting** **Value**Route PatternFull +E.164 pattern for the DID range in Webex with the leading “\\”. For example: **\\+140855501XX**Route Partition**Webex**Gateway/Route List**RL\_Webex**Urgent PriorityChecked |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

## Configure Abbreviated Intersite Dialing Normalization for Webex

| If abbreviated inter-site dialing is required to Webex, then configure dialing normalization patterns for each ESN range on Webex with the following settings: **Setting** **Value**Translation PatternESN pattern for the ESN range in Webex. For example: **80121XX**Partition**Webex**DescriptionMeaningful description, such as **Webex Normalization Pattern**Use Originator's Calling Search SpaceCheckedUrgent PriorityCheckedDo Not Wait For Interdigit Timeout On Subsequent HopsCheckedCalled Party Transformation MaskMask to normalize the number to +E.164\. For example: +**140855501XX** |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
