---
title: "Add a proxy"
product: "uncategorized"
article_id: "ty4jte"
url: "https://help.webex.com/en-us/article/ty4jte/Add-a-Proxy"
last_updated: "2020-08-04"
description: "Add a proxy"
source: "help.webex.com"
---

# Add a proxy

Use the following procedure to add an authenticated proxy or new proxies after onboarding.

- The supported proxy authentication schemes are Basic and Digest.
- You can add only one proxy at a time.

Before you begin

Ensure that you have installed the Agent COP file on the node.

| 1 | Log in to the Unified CM or IM and Presence node using the admin CLI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Check the proxy list using the following CLI command: admin:utils ucmgmt proxy list                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3 | Add a new proxy using the following CLI command: admin:utils ucmgmt proxy add http://<host>:<port> \[username\] Perform this step on all nodes in the cluster. If you're adding an authenticated proxy, provide the username and password in the previously mentioned command. For example, admin:utils ucmgmt proxy add http://proxy.dummy.com:80 abc The following is a sample output. Successfully contacted controller. { "serviceName" : "HCSAC", "serviceType" : "REQUIRED", "serviceState" : "online", "message" : "Healthy", "lastUpdated" : "2020-08-04T15:34:52.931Z", "upstreamServices" : \[ { "serviceName" : "RDS", "serviceType" : "REQUIRED", "serviceState" : "online", "message" : "Healthy", "lastUpdated" : "2020-08-04T15:34:45.476Z", "upstreamServices" : \[ \] } \] } |
| 4 | Disable the telemetry service on each node. For more information, see **Start and Stop the Telemetry Service** section in [Set Up Cisco Webex Cloud-Connected UC for On-Premises Devices](https://help.webex.com/en-us/nzt6c0b/). If you're onboarding a node for the first time, skip this step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 5 | Check if the proxy list now has http://<host>:<port> added. admin:utils ucmgmt proxy list                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 6 | After you have completed the preceding steps, restart the service on the Control Hub so that the telemetry module selects the new proxy information. If you're onboarding a node for the first time, skip this step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

What to do next

For information about how to onboard CCUC on-premises devices, see [Set Up Cisco Webex Cloud-Connected UC for On-Premises Devices](https://help.webex.com/en-us/nzt6c0b/).
