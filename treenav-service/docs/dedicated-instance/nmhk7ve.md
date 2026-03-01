---
title: "Webex Dedicated Instance Contact Center integration"
product: "Dedicated Instance"
article_id: "nmhk7ve"
url: "https://help.webex.com/en-us/article/nmhk7ve/Webex-Dedicated-Instance-Contact-Center-Integration"
last_updated: "2025-06-27"
description: "You can examine the approaches for integrating Cisco Webex Dedicated Instance
(Webex DI) call control functions and Contact Center solutions in different
deployment models. As Cisco Webex DI partners, you can provide a solution that
operates with Cisco Contact Center."
tags: ["dedicated-instance", "webex-calling"]
source: "help.webex.com"
---

# Webex Dedicated Instance Contact Center integration

## Introduction

We support the following contact center solutions with different deployment models:

- Cisco Unified Contact Center Express (UCCX)
- Cisco Contact Center Enterprise (CCE):

  - Unified Contact Center Enterprise (UCCE)
  - Packaged Contact Center Enterprise (PCCE)
- Webex Contact Center Enterprise (Webex CCE)
- Webex Contact Center (WxCC)

The deployment models are based on where the contact center product or solution is deployed:

- Customer On-premises
- Cisco Cloud

One of the main functions of the contact center solution is call control. While different call control options may be possible, Cisco Unified CM is the most common in these contact center solutions. 

HCS Contact Center is a separate solution offered by HCS partners, which is not covered in this article. 

## Overview of Contact Center Solutions

**Cisco Unified Contact Center Express (UCCX)** 

See [Solution Design Guide for Cisco Unified Contact Center Express](https://www.cisco.com/c/en/us/support/contact-center/unified-contact-center-express-15-0/model.html#Design) for details.

**Cisco Contact Center Enterprise (UCCE/PCCE)** 

See [Cisco Unified Contact Center Enterprise](https://www.cisco.com/c/en/us/products/contact-center/unified-contact-center-enterprise/index.html) and component documentation for details.

**Webex Contact Center Enterprise** 

Webex Contact Center Enterprise is a Cloud contact center for large enterprises.

See [Webex Contact Center Enterprise Data Sheet](https://www.cisco.com/c/en/us/products/collateral/contact-center/webex-contact-center-enterprise/datasheet-c78-743365.html) for details.

**Webex Contact Center** 

Cisco Webex Contact Center is a Software-as-a-Service (SaaS) offering from Cisco.

See [Cisco Webex Contact Center Solution Overview](https://www.cisco.com/c/en/us/products/collateral/contact-center/webex-contact-center/solution-overview-c22-740941.html) for details.

## Integrating UCCX and Webex DI 

UCCX may integrate with Webex DI in different ways depending on the locations of UCCX and Unified CM.

| UCCX Location | Unified CM Location      | UCCX to Unified CM Constraints                                      | Comments                                                                                                                                                                                                                |
| ------------- | ------------------------ | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On-premises   | On-premises and Webex DI | SIP trunk between on-premises Unified CM and Unified CM in Webex DI | On-premises Unified CM provides call control for UCCX, that is, for Agent/Supervisor phones.Webex DI provides telephony for Back-Office users.  See [UCCX and Unifed CM On-Premises](#UCCX%5FUCM%5Fonprem) for details. |
| On-premises   | Webex DI                 | RTT between UCCX and Webex DI UCM must be less than 60 msec         | On-premise UCCX interfaces with Webex DI UCM for call controlSee [UCCX On-Premises with UCM in Webex DI](#onprem%5Fuccx) for details                                                                                    |
| Webex DI IaaS | Webex DI                 | No constraints, meets UCCX requirements                             | This IaaS is built to host integration applications. See [UCCX in Webex DI IaaS](#uccx%5Fdi%5Fiaas) for details.                                                                                                        |

### UCCX and Unified CM On-Premises

**_UCCX On-premise, UCM On-premise_**

The customer’s back office users (Non-Agent phones in the diagram above) get telephony service from Webex DI. The Contact Center agent and Supervisor phones get telephony service from the on-premises Unified CM. All the UCCX components, including Unified CM call control, are deployed on-premises. This deployment meets the round-trip-time (RTT) requirement of 60 msec between Unified CM and UCCX.

The on-premises Unified CM and the Unified CM in Webex DI connect through an inter-cluster SIP trunk. The agents and knowledge workers get the service from two different Unified CM clusters. Group call features like call park and hunt group work only within one cluster. Only inter-cluster features work between agent and knowledge worker phones.

A variation of this model places all phones in one cluster:

**_UCCX On-premise, UCM On-premise, Mobile Agents_**

In this variation, agent and non-agent (knowledge worker) phones get telephony service from Webex DI. The on-premises Unified CM that connects to UCCX considers the agents as Home Agents and connects to them through the SIP trunk and Webex DI. The on-premises Unified CM is configured with CTI-Remote Device and Remote Destination for Extend and Connect feature. In this model, the on-premises Unified CM treats Webex DI as PSTN or third-party component where Home Agent phone is homed.

The silent monitoring feature isn’t available to the Home Agents; this is supported in UCCX Premium and Enhanced license packages only, not the Unified IP IVR package. See [Solution Design Guide for Cisco Unified Contact Center Express.](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/crs/express%5F15%5F0/design/guide/uccx%5Fb%5F1501%5Fsolution-design-guide.html) for details.

### On-premises-based UCCX

A deployment model where UCCX components are on-premises and the call control is through Unified CM in the Webex DI can also be supported with careful consideration.

**_UCCX On-premise, Dedicated Instance_**

The main issue with this model is the network round-trip-time (RTT) requirement between UCCX and Unified CM. The UCCX interface to call control Unified CM is through JTAPI, which is sensitive to network latency. For proper performance of UCCX functions, this interface RTT must be less than 60 msec.

We support the integration when UCCX has less than 60ms RTT to the UCM inside Webex DI, whether UCCX is placed in partner location or on-premises. Also note that it is unlikely a customer can deploy UCCX in the customer premises in AMER region, because RTT constrain cannot be met for most customers based on observed network latency.

### UCCX in Webex DI IaaS

In this model, all UCCX components are deployed in Webex DI in the IaaS environment. This deployment enables co-location of Unified CM and UCCX and meets the latency requirements.

**_UCCX on IaaS, Dedicated Instance_**

## Integrating Cisco CCE and Webex DI

Cisco CCE and Webex DI are separate systems that you can connect through a SIP trunk. 

| CCE Location | Unified CM Location      | CCE to Unified CM Constraints                                        | Comments                                                                                                                        |
| ------------ | ------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| On-premises  | On-premises and Webex DI | SIP trunk between on-premises Unified CM and Unified CM in Webex DI. | On-premises Unified CM provides call control for agent/supervisor phones. Webex DI provides call control for back-office users. |

**_SIP Trunk between on-premises and Webex DI_** 

The call control for the agent phones is within the On-premises Cisco CCE solution. The Back office user phones are in Webex Calling Dedicated Instance and there is SIP trunk between these two as shown in the diagram. You can provision this SIP trunk and integrate with on-premises CCE applications.

## Integrating Webex CCE and Webex DI

Webex CCE can be integrated with Webex DI through SIP trunk. Webex CCE and Webex Calling DI are separate systems. Webex CCE solutions has its own Unified CM for call control. You can build a SIP trunk between the 2 clouds, but this traverses the customer network.

| **CCE Location** | **UnifiedCM Location** | CCEto Unified CM Constraints                                      | Comments                                                                                                                                                                                           |
| ---------------- | ---------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WebexCCE Cloud   | Webex DI               | SIP trunk between Webex CCE Unified CM and Unified CM in Webex DI | Partner is responsible for any coordination between the Webex CCE and Webex DI services. See [Webex CCE for Agents, Webex DI for Knowledge Workers](#Webex%5FCCE%5FAgents%5FWbx%5FDI) for details. |

## Webex CCE for Agents, Webex DI for Knowledge Workers

In this scenario, the Webex CCE CUCM cluster is used exclusively for agents and Webex DI CUCM cluster for knowledge workers.

**_Webex CCE for Agents, Webex DI for Knowledge Workers_**

- Webex CCE Unified CM provides call control for contact center agent and supervisor phones.
- Cisco Webex DI provides telephony for contact center back-office or knowledge workers.

## Integrating Webex Contact Center (WxCC) and Webex Dedicated Instance 

Webex Contact Center can be integrated with Dedicated Instance with the following deployment models:

For Dedicated Instance to Webex Calling Contact Center support, you must use certificate based trunks (mTLS) as registration based trunks are no longer supported. See [Activate inter-op SIP trunk to Webex Calling multi-tenant](https://help.webex.com/ofrt6u/) for details.

- **Option 1**: Agent’s phone on Webex Calling Multitenant  
The call control for the agent’s phones is configured in the multitenant calling platform. Whereas the back-office user’s phones are configured in Dedicated Instance. The call routing between the platforms is handled by the default inter-op SIP trunk created between the calling platforms. See [Voice channel for Webex Contact Center](https://help.webex.com/en-us/article/nhy3codb/Set-Up-Voice-Channel-for-Webex-Contact-Center) for details.
- **Option 2**: Agent’s phone on Webex Calling Dedicated Instance  
The call control for the agent’s phone is configured in Dedicated Instance and the PSTN options in this deployment can be either a Dedicated Instance Local Gateway in Dedicated Instance or Cloud Connect PSTN (CCP) in multitenant. See [Cloud Connected PSTN](https://help.webex.com/en-us/article/nw3ygtq/Cloud-Connected-PSTN) for details.  
The following is required to be configured for routing the agent’s call:

  - The Webex Contact Center entry point numbers need to be configured and the PSTN numbers need to be defined in the Control Hub. See [Voice channel for Webex Contact Center](https://help.webex.com/en-us/article/nhy3codb/Set-Up-Voice-Channel-for-Webex-Contact-Center) for details.
  - Call routing or the Dial Plan needs to be configured respectively:

    - Local Gateway – the inbound number should be routed to multitenant using the inter-op SIP trunk. The multitenant routes the call to Webex Contact Center (WxCC), and back to the Dedicated Instance agent’s phone.
    - Cloud Connected PSTN (CCP) – the inbound call is routed to Webex Contact Center and back to the Dedicated Instance agent’s phone.

### Create audio codec preference list

The calls directed to Webex Contact Center from Webex Calling use the specified codec. Create a codec list with G.711 U-Law at the top of the list followed by G.711 A-Law and OPUS.

If you’re to use Webex Contact Center and the agents are going to be in Dedicated Instance, then you should be using the default inter-op SIP trunks that Cisco has created, see [Activate inter-op SIP trunk to Webex Calling multi-tenant](https://help.webex.com/ofrt6u) for more information. The default region that is associated with this SIP trunk has a specific CODEC list which needs to be modified in the above priority order for the audio CODEC negotiation for the WxCC calls to work. This must be done only for the WxCC integrations.

1. Go to System → Region Information → Audio Codec Preference Lists. This window lists the Codec preference that you’ve created along with the two default lists.
2. Open Factory Default Lossy click Copy. This creates a new list base on the factory default lossy list. Give a new name to the list (for example, **Test-Codec-List**) and move G.711U-Law to the top of the list, followed by G.711A-Law and OPUS.
3. Assign this codec list between CTI’s device pool, endpoints device pool region and SIP trunk device pool region.

Refer to [Set up voice channel for Webex Contact Center](https://help.webex.com/2dputx) and [Audio specifications for Webex Calling](https://help.webex.com/gm3pa0) for more information.

## References

- [Solution Design Guide for Cisco Unified Contact Center Express](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/crs/express%5F15%5F0/design/guide/uccx%5Fb%5F1501%5Fsolution-design-guide.html)
- [Solution Design Guide for Cisco Unified Contact Center Enterprise](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/icm%5Fenterprise/icm%5Fenterprise%5F15%5F0%5F1/design/guide/ucce%5Fb%5Fucce%5Fsoldg-for-unified-cce-1501.html)
- [Cisco Webex Contact Center](https://www.cisco.com/c/en/us/support/customer-collaboration/webex-contact-center/series.html)
- [Dedicated Instance network and security requirements](https://help.webex.com/nquhruk/)
