---
title: "Register Cloud Connect"
product: "Webex Contact Center"
article_id: "n24wo0fb"
url: "https://help.webex.com/en-us/article/n24wo0fb/Register-Cloud-Connect"
last_updated: "2024-09-08"
description: "To use cloud services on-premises in a hybrid manner, you need to register via
(or on) Cloud Connect from Cisco Webex Control Hub. Registration establishes a
communication channel between the Cisco Contact Center on-premises deployment
and Webex CC cloud."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Register Cloud Connect

## Register Cloud Connect

Before you begin

- Make sure that you have the Cloud Connect publisher node FQDN details.
- Make sure that your computer is in the same network as the Cloud Connect Servers during registration.
- Make sure to configure the HTTP Proxy settings to enable Cloud Connect to access services in Cisco Webex Contact Center.

**Note**: In Unified Contact Center Enterprise (UCCE) and Packaged Contact Center Enterprise (PCCE) deployments use the _Unified CCE Administration_ interface to update the proxy settings. In Unified CCX deployments use the _Unified CCX Administration_ interface to update the proxy settings.

| 1 | From the customer view in <https://admin.webex.com> go to Services, click Contact Center > Cloud Connect.                                                              |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Add Cloud Connect to add your Cloud Connect deployment. Click Add when you’re adding the first Cloud Connect cluster to your deployment.                         |
| 3 | Fill in Display Name for the Cloud Connect cluster and FQDN of the Cloud Connect publisher node. Click Register.                                                       |
| 4 | Allow access to the Cloud Connect cluster and click Continue. This screen will timeout in 15 minutes. Make sure that you submit your acknowledgment within 15 minutes. |

## Unregister Cloud Connect

| 1 | From the customer view in <https://admin.webex.com> go to Services, click Contact Center and click Cloud Connect.                                                            |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Search for the Cloud Connect cluster you want to unregister and click Settings on the cluster's card. You can only search for the display name of the Cloud Connect cluster. |
| 3 | Click Unregister and acknowledge that you want to unregister that Cloud Connect cluster.                                                                                     |

## Update Cloud Connect

You can update the Cloud Connect services automatically on the cluster registered with the Cisco Webex Control Hub.

After you register a Contact Center resource to the cloud, Cisco Webex Control Hub services gives the Cloud Connect resources a default automatic upgrade schedule. Once the Cloud Connect resource is registered, there is no option to switch off the upgrade. You can schedule the upgrade and install automatically at a time and day. This keeps your Cloud Connect deployment up to date with the latest bug fixes, features, stability improvements, and reduces administrative overhead.

Before you begin

If you upgrade multiple Cloud Connect resources in a high availability setup, then the upgrade is triggered on one node at a time sequentially. You won't see any downtime.

| 1 | From the customer view in <https://admin.webex.com> go to Services, click Contact Center>Cloud Connect>Settings for the resource whose upgrade schedule you want to set.                                                                                                                                              |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Upgrade Schedule, choose a time, frequency, and time zone. This feature only supports one scheduled upgrade time for each Cloud Connect cluster. It is recommended that you schedule a convenient time for upgrades (for example, after hours). You can specify a different upgrade schedule for each cluster. |
| 3 | In the Urgent Upgrade, select the urgent upgrade schedule for this cluster. When an upgrade is available, the resource automatically upgrades during the time that you select.                                                                                                                                        |
| 4 | Click **Postpone** if you want to delay the upgrade one time.                                                                                                                                                                                                                                                         |
| 5 | Confirm your changes. You can see the next scheduled upgrade time on this page.                                                                                                                                                                                                                                       |

**Upgrade behaviour:**

- The node makes periodic requests to the cloud to see if an update is available.
- The cloud does not make the upgrade available until the cluster's upgrade window arrives. Once the upgrade window arrives, the update information is given to the node during its next periodic update request to the cloud.
- The node pulls updates over a secure channel.
- Existing Cloud Connect services are gracefully shut down.
- The upgrade is installed.
- The cloud triggers the upgrade on one node at a time sequentially.
