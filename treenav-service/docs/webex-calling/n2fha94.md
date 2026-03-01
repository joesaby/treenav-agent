---
title: "What is Webex Go"
product: "Webex Calling"
article_id: "n2fha94"
url: "https://help.webex.com/en-us/article/n2fha94/What-is-Webex-Go"
last_updated: "2025-11-26"
description: "Webex Go is a mobility solution that offers a secure, compliant calling
experience, and supports all workers with flexible deployment and connectivity
options."
tags: ["webex-calling", "webex-go"]
source: "help.webex.com"
---

# What is Webex Go

## Overview

Webex Go redefines mobile calling by offering flexible deployment options that fit any work style. You can set it up on either the primary or secondary line on most unlocked, eSIM-compatible devices, making it a versatile solution for today’s hybrid workforce. For corporate-issued devices, deploying Webex Go on the primary line is ideal, especially for executives or employees who handle sensitive business data. For BYOD models, employees can install Webex Go as a second line, allowing them to maintain privacy while staying connected.

Regardless of how it’s deployed, Webex Go maintains a single identity across the Webex ecosystem, managed centrally from [Control Hub](https://www.webex.com/us/en/solutions/cross-platform/control-hub.html). This unified approach simplifies IT management and provides a consistent communication experience for users.

With Webex Go, you can make and answer business calls from your mobile phone’s built-in dialer and use enterprise-grade calling features without needing Webex App. Webex Go allows mobile hybrid workers to transfer calls between Cisco devices, desk phones, or computers with Webex App. If you have Webex App on your mobile phone, you can upgrade any call to a full collaboration meeting. Use Webex Callingmidcall features such as hold, transfer, invite, and video meetings to share content or collaborate with full video.

IT admins can manage the setup of Webex Go-enabled mobile devices through Control Hub. You can also apply corporate policies, such as compliance recording, to enhance enterprise-level control and security.

User benefits 

- Mobile-first collaboration and the convenience of using a mobile phone’s built-in dialer for business calls.
- Flexibility to make and answer business calls from anywhere.
- Increased call quality through mobile 5G HD Voice while on the go.
- Availability of enterprise-wide Calling features, such as extension dialing, business voicemail, call recording, and more.
- Single business number across Webex devices, the Webex App, Webex Go, and a unified view of user presence across these endpoints.
- Elevate a mobile call to a feature-rich video meeting with the Webex App to share content or visually collaborate.
- Easily transfer a call to another Webex device to continue the conversation.
- Centralized access to call history and voicemails in the mobile phone’s native dialer and the Webex App.

Admin provisioning steps 

Provisioning Webex Go is now more intuitive than ever. The process aligns with the familiar [Add Mobile Number](https://help.webex.com/article/ns2be4t/Provision-Webex-Go#task-template%5Fa99e5fbf-fa55-4438-a687-ee6222fdc9f3) flow in Control Hub, streamlining administration and enabling quick deployment. Here’s how it works:

1. Purchase the Webex Calling professional license.
2. Subscribe to a Webex Go mobile plan from our Webex Go mobile operator or certified mobile calling provider partners.
3. Add Webex Go numbers to your Webex organization using the familiar [Add Mobile Number](https://help.webex.com/article/ns2be4t/Provision-Webex-Go#task-template%5Fa99e5fbf-fa55-4438-a687-ee6222fdc9f3) flow.
4. Assign Webex Go numbers to users within Webex Calling.
5. Activate Webex Go on user devices via eSIM.

Webex Go is fully provisioned in the [Control Hub](https://www.webex.com/us/en/solutions/cross-platform/control-hub.html), allowing admins to easily manage mobile numbers and assign them to users, ensuring a smooth setup for every team member.

### Webex Go providers

You can procure Webex Go from Webex-certified mobile calling providers. Administrators can find the applicable providers in the PSTN section of Control Hub.

For more information, see [PSTN help page](https://help.webex.com/article/nousk9ab/Get-Started-with-the-Cisco-Calling-Plans#wbxch%5Fr%5Fselect%5Fccp-provider).

### Webex Go deployment options

Webex Go currently supports two deployment options to support personal and corporate-provided mobile phones.

### Webex Go for personal mobile phones

Webex Go BYOD integrates Webex Calling with users’ personal mobile devices and adds the business phone number as a second line through eSIM. It enables users to manage both personal and business communications on a single mobile device. Users can make and receive business calls with their existing Webex Calling number (DID or extension) and access enterprise-grade features, such as compliant call recording, all without needing a separate app, while keeping their personal phone number distinct. All business calls are routed over a mobile network, so users experience higher media quality compared to calls via the Webex App using over-the-top (OTT) Voice over IP on the personal data plan.

Webex Go reduces the burden on IT by essentially making personal mobile devices secure endpoints on the business phone system. It offers centralized control and management within Control Hub, allowing IT admins to apply business compliance policies and access analytics for business calls made on personal mobile devices.

### Webex Go for business-supplied devices

Webex Go, starting with AT&T in the United States, elevates the wireless number to replace the fixed business number of the Webex Calling subscriber. Webex Calling users can now use their company-provided wireless number and mobile plan as their single-number identity across all Cisco devices, including their company-provided mobile phone. All Webex Calling enterprise-grade capabilities are now available through the mobile phone’s native dialer, and users can extend their wireless number to become their Webex identity for all Webex communications. Users can make and receive calls using the native dialer and stay connected on the go. All calls are routed through secure, fast, and reliable 5G networks, ensuring clear audio quality on business mobile devices.

Webex Go eliminates the need for a traditional fixed business line and helps reduce PSTN spend while simplifying mobile device management. This offers enterprises a fully compliant and secure mobile device strategy, enhancing efficiency through centralized provisioning of new mobile numbers and extended device management in Control Hub, with access to real-time troubleshooting and analytics.

## Prerequisites for Webex Go

- Mobile plan and phone number and device or eSIM from a certified mobile calling provider.
- For AT&T, a valid AT&T Foundational Account Number (FAN).
- Mobile number must be valid and enabled for Webex by the provider before provisioning in Webex Calling.
- Mobile number must be assigned to the Webex Calling subscriber through Control Hub. Refer to [Provision Webex Go](https://help.webex.com/article/ns2be4t/Provision-Webex-Go#concept-template%5Fbbfa2ed5-6186-47ca-9421-0c7267b4763a) for more information.

## Webex Go architecture

Webex Go extends Webex Calling to the built-in dialer of an end user’s phone. Webex connects directly with mobile providers. These mobile providers enable a mobile device and plan for Webex. When the operator enables the mobile device, number, or plan, the operator routes all calls from and to that device through Webex Calling, essentially anchoring the call control in Webex Calling.

The mobile operator determines the mobile voice, text, and data plans, as well as the type of device, to fulfill the Webex Go deployment models documented previously. 

Once Webex Go has been successfully activated, dedicated for business calling on their device, the Webex network provider connects to the Webex Calling platform to route business calls and provide access to enterprise-wide calling features built into the mobile phone. From the platform standpoint, Webex Go is treated as a SIP-registered device, making it another endpoint where Webex business calls are delivered.
