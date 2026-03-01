---
title: "Call Presence and Do Not Disturb Synchronization in UCM Calling"
product: "Calling in Webex (Unified CM)"
article_id: "5bo9dq"
url: "https://help.webex.com/en-us/article/5bo9dq/Do-Not-Disturb-Synchronization-in-UCM-Calling"
last_updated: "2025-09-19"
description: "Integrated experience for UCM calling users by synchronizing call presence and
Do Not Disturb status between Webex app and desk phone."
tags: ["calling-in-webex-(unified-cm)"]
source: "help.webex.com"
---

# Call Presence and Do Not Disturb Synchronization in UCM Calling

## Overview

When you need time to focus and don’t want any incoming call notifications to disturb you, now you don’t have to enable Do Not Disturb (DND) on each of your Unified CM Calling registered clients separately. 

There’s synchronization of your desk phone on-call status with the Webex App, enabling your coworkers to see your desk phone status on their Webex App.

When you enable it on the Webex App, the state synchronizes automatically to your desk phone. Similarly, when you enable it on your desk phone, the state synchronizes automatically to your Webex apps.

## Pre-Requisite

- Configure Phone Presence applications On-Premises.
- Sync up Unified CM with Control Hub UI.
- Map Unified CM to Webex Common Identity (CI).
- Subscribe to Cloud-Connected UC, and Connect the On-Prem devices to Cloud-Connected UC.  
If you have not subscribed to CCUC, see [Set Up Webex Cloud-Connected UC for On-Premises Devices](https://help.webex.com/en-us/article/nzt6c0b/Set-Up-Webex-Cloud-Connected-UC-for-On-Premises-Devices).

## On a Call

With this feature, there is synchronization of your desk phone **On a Call** status with the Webex App.

- When you are on an active call on your Cisco phone, the presence status on the Webex App changes to **On a Call**.
- Similarly, when the call disconnects, the status on the Webex App changes back to available.

There are certain presence statuses that have higher priority compared to **On a call**. These states are **Do Not Disturb**, **Out of Office**, **Presenting** and **In a Meeting**. When your presence status is one of the above in your Webex App, on-hook or off-hook activity on Cisco phone does not change your presence status to **On a call**.

## Steps to Enable Do Not Disturb

Enable Do Not Disturb in Cloud Connected UC.

| 1 | From the customer view in [Control Hub](https://admin.webex.com/), go to Services > Connected UC. In the UC Management card, click Inventory The list of cluster groups with the description, status, clusters, and nodes appear.                                                                                                                                                                                                                                                                                                                                                         |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Details next to the cluster group to which the node belongs. The Inventory page with the list of clusters appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Click Details next to the cluster to which the node belongs. The Node name with the version, product, and status appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4 | Click the ellipsis ... icon next to Event History and choose Service Management. The Service Management page appears with the list of services, such as Analytics, Certificate Management, Operational Metrics, Borderless CTI, and Deployment Insights.                                                                                                                                                                                                                                                                                                                                  |
| 5 | Use the toggle button to enable Presence Status Sync, and follow the on-screen instructions to enable it. When a cluster provisions, the synchronizations of Unified CM with the CCUC begin to get the phone presence request configured for the cluster. For multiple devices, the DND synchronization is across all the devices.                                                                                                                                                                                                                                                        |
| 6 | To disable DND synchronization, Go to Calling > Client Settings, Use the toggle button in the Do Not Disturb (DND) status Sync. When you enable DND in the desk phone and it is synchronized to the Webex App, it disables both call and message notifications. If you do not want to disable the message notifications, the admin can disable DND synchronization. The Do Not Disturb (DND) status sync setting controls synchronization in both directions between the Webex App App and desk phones. Administrators can enableor disable this setting based on their deployment needs. |

## Supported Versions and Phone Types

- This feature supports on Unified CM version-12.5 SU7 and above, or 14 SU3 and above and 15 and above.
- Webex App on Desktop (Windows and MAC) and Webex App on Mobile (iOS and Andriod) latest version.
- Cisco IP Phone 8800 Series, Cisco IP Phone 7800 Series, Webex Desk Series (DX), and Desk Pro are the list of supported phone type.
