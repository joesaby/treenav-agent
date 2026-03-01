---
title: "Dedicated Instance License Usage"
product: "Dedicated Instance"
article_id: "n0daxo3"
url: "https://help.webex.com/en-us/article/n0daxo3/Dedicated-Instance-License-Usage"
last_updated: "2025-07-30"
description: "You can now view the assigned licenses across all subscriptions and see the
cluster&#x27;s usage details for the subscribers in the associated region. Based on
the role, you can also view the subscription summary with a detailed usage
report."
tags: ["dedicated-instance", "webex-calling"]
source: "help.webex.com"
---

# Dedicated Instance License Usage

## License Reporting

Use the Dedicated Instance usage report to understand the license usage and to verify if the licenses are used for a particular region.

To understand all the roles in Cisco Webex Control Hub, see [Assign Roles in Control Hub](https://help.webex.com/en-us/fs78p5/Assign-Organization-Account-Roles-in-Cisco-Webex-Control-Hub).

- [Customer](#concept%5F9DB872C523EAF00FD3438D6854B2314A)
- [Partner](#concept%5FF9DFD7C06F7CE374D4F11A8FF0CFADDC)

## Customer operations

To view the license usage details:

1. Sign in to [Control Hub](https://admin.webex.com/).
2. Click **Account** from the left navigation under **Management**, and then click **Subscriptions** on the top right, to view the Dedicated Instance subscription summary associated with the subscription ID on the Control Hub. You can view license usage across all subscriptions.  
If a device is configured but not associated with a user, it is classified as a workplace device.  
Multi-tenant, represent the license usage details of Webex Calling.  
Dedicated Instance, represent the license usage details of Dedicated Instance.
3. Click **View Dedicated Instance usage details**, to view the Dedicated Instance usage details by cluster for the associated region of the subscribers.  
The Dedicated Instance **Usage by Cluster displays** **details** about the Region, Server, Professional license Usage, Workspace, and Speech View license usage by Cluster.  
The speech View column is displayed only if you’ve subscribed for Speech View licenses.

## Partner operations

To view the subscription summary:

1. Sign in to [Control Hub](https://admin.webex.com/).
2. Click **Customers**, and select the customer.  
To see the subscription details of the customer without launching the customer portal, from the **View Customer** panel, click **Subscriptions** and then   **Webex Calling**.  
You can see the overall Calling License usage by the customer.
3. Click **View Customer**, to launch the organization details.
4. From the Control Hub, click **Account** from the left navigation under **Management**, and then **Subscriptions** on the top right, to view the Dedicated Instance subscription summary associated with the subscription.  
If a device is configured but not associated with a user, it is classified as a workplace device.

## Dedicated Instance usage detailed report

Dedicated Instance detailed usage report gives an insight into the usage details about the users and the devices. You can also see Dedicated Instance usage details from the Calling page.

The Dedicated Instance service activation status can be viewed under services Calling→ Dedicated Instance → Status. 

Partner and/or customer with full administrator rights can generate a detailed license usage report and download once available. However, read-only administrators can only download the report. With this report, you’ll be able to validate the license consumption before the renewal of subscriptions and can validate overage & usage.

**Sample report** 

If you’re unable to generate the report after two attempts, you need to raise a case with Cisco Support for further assistance. For more information see, [Dedicated Instance Tier 1 Support](https://help.webex.com/nuk5o63/). 

The report is available for download for a period of 7 days, after which the administrator has to regenerate the report.

The speech View column is displayed only if you’ve subscribed for Speech View licenses.

The Usage by region displays the region configured for license usage.

__Table 1\. Dedicate Instance usage details__
| Terms        | Definition                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Region       | Represents the Dedicated Instance datacenter location where the Dedicate Instance application cluster is installed.                                                                                                                                                                                                                                                                                                                    |
| Server       | The server that is used for Dedicated Instance cluster configuration.                                                                                                                                                                                                                                                                                                                                                                  |
| Professional | The full-featured tier for employees and contractors who use multiple communication devices, including Teams, as part of their job duties. This tier includes voicemail.                                                                                                                                                                                                                                                               |
| Standard     | Built for the individual user's calling needs as a casual telephony user. A Standard licensed user can have _either_ a physical device (Cisco collaboration device, Cisco phone, ATA, or third-party device) or soft client (Webex App, desktop, tablet, mobile), _but not both._                                                                                                                                                      |
| Workspace    | Hard endpoint not associated to any user including Analog Devices, Conference room, corridor & workspace devices consume the workspace licenses.                                                                                                                                                                                                                                                                                       |
| Room Systems | All TP (telepresence endpoints) registering to Dedicated Instance will be accounted under Webex devices.                                                                                                                                                                                                                                                                                                                               |
| Speech View  | Cisco Speech View converts voice messages to text and delivers the text version of the voice message to your email inbox, allowing you to read your voice messages and take immediate action. This gives the number of Speech View licenses consumed. Refer to [Data Sheets](https://www.cisco.com/c/en/us/products/unified-communications/unity-connection/datasheet-listing.html) for more information on the SpeechView Data Sheet. |
