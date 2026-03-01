---
title: "Webex SIP Addresses in Control Hub"
product: "Webex Calling"
article_id: "n3ltzqcb"
url: "https://help.webex.com/en-us/article/n3ltzqcb/Webex-SIP-Addresses-in-Control-Hub"
last_updated: "2024-09-15"
description: "As an administrator, you must add a subdomain to create Webex Session Initiation
Protocol (SIP) addresses for your organization in Control Hub. The Webex SIP
addresses are used behind the scenes for all SIP call routing related to Webex
services in Control Hub, such as calls between Webex App users or calls with an
integrated call service ( Calling in Webex App (Unified CM), Webex Calling, or
Hybrid Calling for Webex App Devices). The SIP addresses can be used to receive
calls from any standards-based SIP calling service."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Webex SIP Addresses in Control Hub

## SIP Address Format

After you specify your organization-wide subdomain in Control Hub, Webex SIP addresses are automatically created. Their format uses _.calls.webex.com_ (for users) and _.rooms.webex.com_ (for Room, Desk, and Board devices). The format for the SIP address for users is _username@example.calls.webex.com_ and for devices is _workspacename@example.rooms.webex.com_: 

- _example_ is the value that you enter for the subdomain for your Webex organization.
- _username@example_ is the user ID or email in the Webex cloud without the top-level domain.
- _workspacename_ is a custom name that you assign to the Workspace containing a shared device, such as a meeting room or shared space name. For example, _Tangram Boardroom_ or _Reception_.

## Subdomain Value

You can enter any value that you want, but enter a value that is easily recognized as being related to your organization. Follow the guidelines in the Control Hub and choose a subdomain that identifies your organization. Here are some guidelines to follow:

- The value must be unique and is usually the name of your company.
- You can enter a combination of letters and numbers for the subdomain (up to 63 characters).

## Subdomain Errors and Solutions

- **Invalid subdomain name**—You’re using unsupported characters. Enter a value with letters and numbers only.
- **Not available. Please try another name**—Domain is already in use; try another value and run the check to see if it’s available.

If you're having issues, you can [Contact Us ](https://collaborationhelp.cisco.com/contact) for assistance.

## Webex SIP Addresses and Users

Users can find their Webex SIP address by going to Profile in User Hub at <https://user.webex.com/>. The assigned SIP address appears in the Calling section.

Webex SIP addresses for users are dialable from any SIP phone with TLS set up. For more information, see [Requirements for Business-to-Business (B2B) SIP Calls To and From the Webex Cloud ](https://help.webex.com/7ej8gq/). 

When users call through a directory search, the Webex SIP addresses are used to route from Webex Calling phones and deliver calls to a user's phone and Webex App app simultaneously.

For Calling in Webex App (Unified CM) or Hybrid Calling, the SIP address routes calls that are incoming to the cloud to a specific user (_username_ in the example). For that user's outgoing calls, the Webex SIP address is used as the caller ID. On the other hand, on-premises directory URI dialing between Calling in Webex App (Unified CM) users or Hybrid Calling users rings both the user's Webex App app and desk phone.

- From the caller's perspective, dialing the corporate directory URI results in a call that rings both the Webex App app and the on-premises phone.
- In certain call scenarios, the Webex SIP address appears as the caller ID in the call history. Users can call back to the SIP address, in these cases.
- Companies can choose to use the SIP address as a routing address. We recommend this choice if you use Calling in Webex App (Unified CM) and you publish your users' directory URIs publicly as their contactable SIP addresses.

## Webex SIP Addresses and Webex Devices in a Workspace

The Webex SIP address enables business-to-business calling and Webex SIP address callback. Webex Workspaces are assigned a Webex SIP address in the form _workspacename@example.rooms.webex.com_

For Hybrid Calling for Webex devices, you assign a Room, Desk, or Board device as a Workspace in the Control Hub. Using Hybrid Calling for the room device Workspace means that the cloud-registered device gets its directory number from the premises call control environment and routes all its calls through Cisco Unified Communication Manager. The cloud-registered Webex device uses the existing PSTN infrastructure.
