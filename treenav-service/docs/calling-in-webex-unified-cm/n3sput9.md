---
title: "Configure SIP Address Routing for Your Organization"
product: "Calling in Webex (Unified CM)"
article_id: "n3sput9"
url: "https://help.webex.com/en-us/article/n3sput9/Configure-SIP-Address-Routing-for-Your-Organization"
last_updated: "2024-08-30"
description: "If you configure this setting in Control Hub and change the default option, SIP
calls in Webex App can route through your Unified CM on-premises environment for
the domains that you enter."
tags: ["calling-in-webex-(unified-cm)"]
source: "help.webex.com"
---

# Configure SIP Address Routing for Your Organization

Before you begin

This setting is only available if you've deployed Calling in Webex App (Unified CM) as a calling service in your Control Hub organization.

| 1 | From the customer view in <https://admin.webex.com>, go to Services, click Callingand then choose Client Settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Scroll to Unified CM SIP Address Routing, and then change the SIP Address Call Path setting depending on how you want calls to route: All SIP address calls, except addresses that match cloud Webex services—The default option routes all SIP calls to your enterprise except for any domains that match cloud Webex services. Only calls that match the specified (comma separated) domains—This option overrides the default and only routes SIP calls through the domains that you enter in the field. Enter a comma-separated list of up to 200 domains. You can also enter an asterisk as a wildcard. For example: \*.example.com, example1.com, example2.com. The routing behavior is the same for any subdomains that fall under a wildcard entry. Alternatively, you can list IP addresses.\*.example.com only matches subdomains, not top-level domains. |
