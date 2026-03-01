---
title: "Enable Borderless CTI through Webex Cloud-Connected UC"
product: "Webex Cloud-Connected UC"
article_id: "00tesu"
url: "https://help.webex.com/en-us/article/00tesu/Enable-Borderless-CTI-through-Cloud-Connected-UC"
last_updated: "2025-02-17"
description: "Computer Telephony Integration (CTI) allows WebexApp users to manage calls and
access customer data, both on-premise and remotely. The Borderless CTI feature
enables Deskphone control and Extend &amp; Connect functionality for remote users
over the internet."
tags: ["webex-cloud-connected-uc"]
source: "help.webex.com"
---

# Enable Borderless CTI through Webex Cloud-Connected UC

## Overview

Computer telephony integration (CTI) enables you to use Webex App to leverage computer-processing functions while making, receiving, and managing telephone calls. CTI applications allow you to retrieve customer information from a database on the basis of information provided from the caller ID. CTI applications also enable you to use information that interactive voice response (IVR) system captures, so that the call is routed to the appropriate customer service representative or the information is provided to the individual who is receiving the call.

Currently, you can use Webex App to control Deskphone of the Desk IP phones or Remote Phones(Extend & Connect) using CTI when the Webex App is on premise.

When you work remotely from home will not be able to do Deskphone control of the Desk IP phones when the Webex App is connected over MRA without VPN as Cisco Expressway does not support it. You want to use Webex App to make and receive calls using a home or hotel phone (Extend & Connect), because their PC hardware or available network connection does not support VoIP will not work over MRA as Cisco Expressway does not support it.

Borderless CTI feature provides support to you over internet (MRA users). This feature enables you to control Desk-phone control and Extend and Connect. Borderless CTI provides:

- Deskphone control: You want to connect Webex App to desk phone to handle calls (dial digits, make calls, end calls and so on )​
- Extend & Connect : You want to use Webex App to make and receive calls which use home or hotel phone, because your PC hardware or available network connection does not support VoIP.​ Refer [Extend and Connect](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/admin/14/systemConfig/cucm%5Fb%5Fsystem-configuration-guide-14su2.html).

[Pre-Requisite](#Cisco%5FReference.dita%5Fbe487ae8-8c1e-456e-b916-8b04d69f7e4c)

Configure CTI Application on premises. For more information, see [Configure CTI Applications](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/admin/14/systemConfig/cucm%5Fb%5Fsystem-configuration-guide-14su2/cucm%5Fb%5Fsystem-configuration-guide-14%5Fchapter%5F011001.html).

- Borderless CTI is supported on WxApps on Desktops and VDI.
- WxApp on desktop covers both Windows and MAC OS.
- You must subscribe to CCUC and the on prem device must be connected to CCUC.  
If you have not subscribed to CCUC, see [Set Up Webex Cloud-Connected UC for On-Premises Devices](https://help.webex.com/en-us/article/nzt6c0b/Set-Up-Webex-Cloud-Connected-UC-for-On-Premises-Devices).

[Enable Borderless CTI](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F0c8d7de7-a9f6-4a98-a759-c3a4c622e19e)

Enable Borderless CTI in Cloud Connected UC

| 1 | From the customer view in [Control Hub](https://admin.webex.com/), go to Services > Connected UC. On the UC Management card, click Inventory The list of cluster groups with the description, status, clusters and nodes appear.                        |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Details next to the cluster group to which the node belongs. The Inventory page with the list of clusters belonging to the selected cluster group appears.                                                                                        |
| 3 | Click Details next to the cluster to which the node belongs. The Node name with the version, product, and status appears.                                                                                                                               |
| 4 | Click the ellipsis ... icon next to Event History and choose Service Management. The Service Management page appears with the list of services, such as Analytics, Certificate Management, Operational Metrics, Borderless CTI and Deployment Insights. |
| 5 | Use the toggle button to enable Borderless CTI, and follow the on-screen instructions to enable it. Once a cluster is provisioned, CUCM will start syncing with the CCUC cloud to get the CTI request for users configured for the cluster.             |

[Supported Versions and Phone Types](#Cisco%5FReference.dita%5Fe0740006-05b2-49d6-a52b-428e2f109b46)

- This feature is supported on CUCM version 14SU2 and above, Webex App 42.7 and above.
- Cisco IP Phone 8800 Series, Cisco IP Phone 7800 Series, Cisco Webex Desk Series (DX), Deskpro are the list of phone types supported.  
Other phone types like 69XX and SCCP phones are not supported.
- Webex App Mobile and Tablet are not supported.
