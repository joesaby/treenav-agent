---
title: "Upgrade FedRAMP-Authorized Meetings to Webex for Government"
product: "Webex Meetings"
article_id: "8shmiq"
url: "https://help.webex.com/en-us/article/8shmiq/Upgrade-FedRAMP-Authorized-Meetings-to-Webex-for-Government"
last_updated: "2024-09-22"
description: "This article guides you through moving your organization from FedRAMP-Authorized
Webex Meetings to Webex for Government."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Upgrade FedRAMP-Authorized Meetings to Webex for Government

## Overview

We’re delighted to announce that Webex for Government is now available to customers with existing FedRAMP-Authorized Cisco Webex Meetings sites. 

Upgrading to Webex for Government immediately delivers Video Platform 2.0 for a stunning new video-centric experience, new events, streaming, and Control Hub for analytics and troubleshooting – and much more. 

You can also deploy the Webex app for a unified experience with messaging, calling, and meetings. In real-time or anytime, Webex is the engaging, intelligent and inclusive app that creates exceptional experiences and makes working together distinctly better. 

Existing FedRAMP-Authorized Cisco Webex Meetings sites now leverage some services provided by an authorized interconnect with the new Webex for Government system. 

This interconnect introduces new dataflows between the two systems for advanced analytics and SIP calling. Go to <https://max.gov.> for more details.

The rest of this article guides you in preparing for, scheduling, and validating your upgrade. Learn more about the benefits of upgrading to Webex for Government [here](https://help.webex.com/8r8bve/).

## Network Preparation

You must prepare your network for connectivity to the Webex for Government cloud **before you schedule your upgrade**.

Read [Network Requirements for Webex for Government](https://help.webex.com/en-us/WBX9000034164/) for guidance on which IP ranges, ports, and protocols to allow, to safely enable Webex users in your network to connect to Webex services.

You can also watch [this recording about preparing your network](https://launch.webex.com/launch/ldr.php?RCID=8c8be79535804c08833474484532fd7e).

We require you to prepare your network before upgrade because we want to minimize any potential disruption to your meeting service. 

## Identity Management

Webex for Government uses a robust identity model that uniquely identifies all users by their email addresses. We associate these identities with your organization that you manage in an online portal called Control Hub. In Control Hub your administrators can easily define and control user licensing and security policies across your organization.

Your email domains are the most significant characteristics that link your users to your organization. That's why we need a list of all the email domains that identify your users before we can do the upgrade. 

For example, `example.gov` is the email domain in the address `user.name@example.gov`.

We use the domains you provide to enable [domain verification and claim](https://help.webex.com/cd6d84) for your Webex for Government organization. Domain claim is the feature of Webex for Government that gives you control of that domain's users across the Webex cloud. It prevents them using their (work account) email addresses outside of Webex for Government, and helps you apply content policies. 

During the upgrade, we link your existing Webex meeting site to Control Hub, so you can manage new features and user licenses as desired. Webex for Government identity management uses site linking to augment the operations for current Webex site administration users. Active Webex users will automatically be created in Control Hub, and their Webex licensing and settings will be maintained from the existing Webex site admin portal. 

## Schedule Your Upgrade

Our dedicated TAC team needs some information from you before they schedule your upgrade. You can speed up the process by collecting and recording this information before you make the call.

| 1 | Download and complete the [Webex for Government Upgrade Request form](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/WebexforGovernment/webex-for-government%5Fupgrade-request-form.pdf). You can do this in the PDF form, or you can print and complete a paper copy. |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Call 877-669-1782 to reach our dedicated Cisco FedRAMP Technical Assistance Center (TAC) in the U.S. Another option is to use the regular [Webex support channels](https://help.webex.com/contact) and we'll route you to the right team.                                                              |

## What to Expect During the Upgrade

Your upgrade to Webex for Government will be scheduled during your site’s normal maintenance window. To minimize business impacts during the upgrade, we recommend that: 

- Users should only join meetings with the Webex Meetings app, or by calling in. Video devices may have trouble joining or experience meeting disconnects during the upgrade window.
- Meeting hosts should restart meetings if participants are experiencing issues.

## Validate Your Upgrade

We strongly recommend that you validate your upgrade by performing some simple tests.

| 1 | Schedule, start, and join a meeting from Outlook, the Webex desktop app, or web page.             |
| - | ------------------------------------------------------------------------------------------------- |
| 2 | Test computer audio and video in the test meeting. Test call-in and call-back.                    |
| 3 | Join a test meeting from a video device. Verify audio, video, and sharing features on the device. |

## Messaging and Device Licenses

We’re including 100 licenses for Messaging and Devices with your upgrade. You may also be entitled to additional licenses, or to a ProPack license. Contact your Collaboration Account Manager or Cisco Collaboration Partner to submit a license request.
