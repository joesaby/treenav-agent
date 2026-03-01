---
title: "Changes to Hybrid Call Service"
product: "Hybrid Services"
article_id: "nq7yfhbb"
url: "https://help.webex.com/en-us/article/nq7yfhbb/Changes-to-Hybrid-Call-Service"
last_updated: "2024-09-15"
description: "Starting on May 4, 2020, Hybrid Call Service for end users will be limited to
current customers only and will no longer be offered to new customers. Going
forward, new customers can configure the Webex App app to register directly to
Cisco Unified Communications Manager (Unified CM) for enterprise calling
capabilities."
tags: ["hybrid-services"]
source: "help.webex.com"
---

# Changes to Hybrid Call Service

See [here](https://help.webex.com/en-us/n2q9085) for the end of support announcement for Hybrid Call Service.

## Impact

After the above deadline, new customer organizations that are created in Control Hub can no longer set up Hybrid Call Service for enterprise calling integration with the Webex App app. Existing customers already using Hybrid Call Service are not impacted. Cisco Webex Devices in shared mode will continue to support Hybrid Call Service through the Webex Device Connector with no impact in functionality. New devices in personal mode won’t have access to hybrid calling until further notice. 

## Recommendation

Whether new customers or existing customers, Calling in Webex App (Unified CM) is the recommended option for continued support. This solution provides softphone capability to Webex App users and is continuously updated with new features and functionality. In this architecture, the Webex App app registers directly to Unified CM for enterprise calling capabilities.

When Webex App is registered with Unified CM, the solution provides enterprise calling capabilities—audio/video calls and mid-call features such as mute, consultative transfer, merge/conference, sharing, and so on. Direct access to call settings such as call forwarding (CFA), single number reach (SNR) and visual voicemail is also supported. Webex App app also interfaces with Unified CM-registered desk phones to provide remote call control capabilities in Deskphone Control (DPC) mode.

Additionally, direct registration to Unified CM provides these benefits: 

- Direct connection to Unified CM leading to a faster connect time than Hybrid Call Service
- Direct media when Webex App apps are local within enterprise network
- Additional calling capabilities with a roadmap towards Jabber calling feature parity
- Reuse of existing MRA and Jabber CSF configuration for client-side integration (unlike Hybrid Call Service’s server-side integration)

## Reference

**Deployment Guide for Calling in Webex App (Unified CM)** 

<https://www.cisco.com/go/webex-teams-ucm-calling> 

**Deployment Guide for Hybrid Calling for Cisco Webex Devices** 

<https://www.cisco.com/go/hybrid-call-webex-devices>
