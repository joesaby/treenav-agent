---
title: "SIP or XMPP Interdomain Federation for Webex App"
product: "Hybrid Services"
article_id: "n8gtpu7"
url: "https://help.webex.com/en-us/article/n8gtpu7/SIP-or-XMPP-Interdomain-Federation-for-Webex"
last_updated: "2025-03-13"
description: "You can allow communication between Webex App users and SIP or XMPP users in
federated domains, via your on-premises IM &amp; Presence service, if you have the
Hybrid Message service enabled for the Webex users."
tags: ["hybrid-services"]
source: "help.webex.com"
---

# SIP or XMPP Interdomain Federation for Webex App

This integration enables your Webex App users to chat with users in federated XMPP or SIP domains. The integration uses your on-premises Cisco IM and Presence service, coupled with Webex Hybrid Message Service, so your Webex App users must be enabled for Hybrid Message.

[Requirements for SIP Federation](#id%5F138631)

### Prerequisites

You must ensure the following:

- Cisco Unified Communications Manager IM and Presence Service (IM and Presence Service) is fully operational.  
Ensure that automatic presence authorization is enabled.  
For more information, see [Configuration and Administration of the IM and Presence Service, Release 12.5(1)SU2](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/im%5Fpresence/configAdminGuide/12%5F5%5F1%5Fsu2/cup0%5Fb%5Fconfig-and-admin-guide-1251su2.html)
- SIP is configured in your IM and Presence deployment. SIP messaging or presence is currently functional between Jabber and the SIP federated domain.  
For more information, see [Interdomain Federation Guide for the IM and Presence Service, Release 12.5(1)](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/im%5Fpresence/interdomain%5Ffederation/12%5F5%5F1/cup0%5Fb%5Finterdomain-federation-1251.html)
- Hybrid Message service is enabled and activated for users.  
For more information, see <http://www.cisco.com/go/hybrid-services-message>
- (Optional) To ensure that messages are saved when users are offline, ensure that offline instant messaging is enabled in the IM and Presence Service and in your Skype for Business server.
- (Optional) If you block external communication, you must add the SIP federated domains to the allowed list. For more information, see [Block External Users in Webex Spaces for Your Organization](https://help.webex.com/agrt8/).

### Things to Keep in Mind

- You can only send plain text in spaces.
- Only spaces with two people is supported.

The following shows the status users see in Jabber and Skype for Business when there is a status change in Webex App.

| Status change in Webex                  | Status shown in Jabber | Status shown in Skype for Business |
| --------------------------------------- | ---------------------- | ---------------------------------- |
| **Active**                              | Available (@Webex)     | Available - External Network       |
| **Active between 10 mins and 72 hours** | Away (@ Webex)         | Away - External Network            |
| **Do not disturb**                      | Do not disturb         | Busy - External Network            |
| **Active more than 72 hours**           | Offline                | Away - External Network            |

The following shows the status users see in Webex App and Skype for Business when there is a status change in Jabber.

| Status shown in Webex | Status change in Jabber | Status shown in Skype for Business |
| --------------------- | ----------------------- | ---------------------------------- |
| No status             | **Available**           | Available - External Network       |
| No status             | **Away**                | Away - External Network            |
| No status             | **Do not disturb**      | Busy - External Network            |
| No status             | **Offline**             | Away - External Network            |

The following shows the status users see in Webex App and Jabber when there is a status change in Skype for Business.

| Status shown in Webex | Status shown in Jabber | Status change in Skype for Business |
| --------------------- | ---------------------- | ----------------------------------- |
| No status             | Available              | **Available**                       |
| No status             | Away                   | **Away**                            |
| No status             | Do not disturb         | **Busy**                            |
| No status             | Offline                | **Offline**                         |

[Enable SIP Federation through Hybrid Message](#id%5F138630)

| 1 | Sign in to Control Hub at <https://admin.webex.com>, and open the Messaging page.                                                                                                                                                                                                                                                              |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Scroll to Instant Messaging, then enable SIP Federation via on-prem (Jabber IM&P). It takes at least 1 hour for this change to take effect. If you need to reduce this time, restart the Message Connector/s on the Expressway host/s. It can take up to 24 hours after the setting has taken effect before users see the option in Webex App. |

[Requirements for XMPP Federation](#Cisco%5FReference.dita%5Fcab65d5a-6982-4dc8-b29f-e6962b94163c)

### Prerequisites

You must ensure the following:

- Cisco Unified Communications Manager IM and Presence Service (IM and Presence Service) is fully operational.  
Ensure that automatic presence authorization is enabled.  
For more information, see [Configuration and Administration of the IM and Presence Service, Release 12.5(1)SU2](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/im%5Fpresence/configAdminGuide/12%5F5%5F1%5Fsu2/cup0%5Fb%5Fconfig-and-admin-guide-1251su2.html)
- XMPP is configured in your IM and Presence deployment. XMPP messaging and presence is currently functional between Jabber and the XMPP federated domain.  
For more information, see [Interdomain Federation Guide for the IM and Presence Service, Release 12.5(1)](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/im%5Fpresence/interdomain%5Ffederation/12%5F5%5F1/cup0%5Fb%5Finterdomain-federation-1251.html)
- Hybrid Message service is enabled and activated for users.  
For more information, see <http://www.cisco.com/go/hybrid-services-message>
- (Optional) To ensure that messages are saved when users are offline, ensure that offline instant messaging is enabled in the IM and Presence Service.
- (Optional) If you block external communication, you must add the XMPP federated domains to the allowed list. For more information, see [Block External Users in Webex Spaces for Your Organization](https://help.webex.com/agrt8/).

### Things to Keep in Mind

- You can only send plain text in spaces.
- Only spaces with two people is supported.

[Enable XMPP Federation through Hybrid Message](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F7da8ec5b-9dd2-4f0c-953c-c9ddf8134ae8)

This option gives you XMPP federation for your Webex App users, _via your own IM & Presence service (on your premises)_, with users in a third-party XMPP domain. 

| 1 | Sign in to Control Hub at <https://admin.webex.com>, and open the Messaging page.                                                                                                                                                                                                                                                                     |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Scroll to Instant Messaging, then click Enable XMPP Federation via on-prem (Jabber IM&P). It takes at least 1 hour for this change to take effect. If you need to reduce this time, restart the Message Connector/s on the Expressway host/s. It can take up to 24 hours after the setting has taken effect before users see the option in Webex App. |
