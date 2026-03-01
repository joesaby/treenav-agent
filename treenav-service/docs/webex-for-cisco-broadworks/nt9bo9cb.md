---
title: "Network Requirements for Webex for Cisco BroadWorks"
product: "Webex for Cisco BroadWorks"
article_id: "nt9bo9cb"
url: "https://help.webex.com/en-us/article/nt9bo9cb/Network-Requirements-for-Webex-for-Cisco-BroadWorks"
last_updated: "2026-02-17"
description: "Here is a list of the addresses, ports, and protocols used for connecting your
phones, the Webex App, and gateways to Webex for Cisco BroadWorks. This article
is for network administrators, particularly firewall and proxy security
administrators who use Webex for Cisco BroadWorks services within their
organization."
tags: ["webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# Network Requirements for Webex for Cisco BroadWorks

## Connection Map

The following diagram illustrates integration points. The point of the diagram is to show that you need to review IPs and Ports for connections into and out of your environment. The connections that are used by Webex for Cisco BroadWorks are described in the subsequent tables. 

The firewall requirements for the normal functioning of the client application are listed as references since they are already documented on [help.webex.com](https://help.webex.com). 

## Firewall Configuration

The connection map and the following tables describe the connections and protocols required between the clients (on or off the customer’s network), your network, and the Webex platform. 

[EMEA Ingress Rules](#id%5F137293)

(Into your network) 

| **Purpose**                  | **Source**                                                                                                                                                                                                                                                                                                            | **Protocol** | **Destination** | **Destination Port**                 |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | ------------------------------------ |
| WebexCloud CTI/Auth/XSI      | **IP Range** 23.89.0.0/16 44.234.52.192/26 62.109.192.0/18 64.68.96.0/19 66.114.160.0/20 66.163.32.0/19 69.26.160.0/19 114.29.192.0/19 144.196.0.0/16 150.253.128.0/17 163.129.0.0/16 170.72.0.0/16 170.133.128.0/18 173.39.224.0/19 173.243.0.0/20 207.182.160.0/19 209.197.192.0/19 210.4.192.0/20 216.151.128.0/19 | HTTPS CTI    | Your XSP        | TCP/TLS 8012 443                     |
| Webex App Xsi/DMS            | Any                                                                                                                                                                                                                                                                                                                   | HTTPS        | Your XSP        | 443                                  |
| Webex app VoIP endpoints SIP | Any                                                                                                                                                                                                                                                                                                                   | SIP          | Your SBC        | SP-defined protocol and port TCP/UDP |

It is strongly advisable for the SIP port to be different from 5060 (for example, 5075) due to known issues with using the standard SIP port (5060) with mobile devices.

These IP addresses/ranges are not owned by Cisco and are subject to change periodically. If you are using a firewall, we recommend allowing the urls listed.

[EMEA Egress Rules](#id%5F137294)

(Out of your network) 

| **Purpose**                                                      | **Source**              | **Protocol** | **Destination**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | **Destination Port** |
| ---------------------------------------------------------------- | ----------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| User Provisioning via APIs                                       | Your Application Server | HTTPS        | webexapis.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 443                  |
| Proxy Push Notifications (production service)                    | Your NPS Server         | HTTPS        | **Current FQDN:** To enhance the DNS resolution speed, instead of the current FQDN nps.uc-one.broadsoft.com we recommend you to use the appropriate FQDN based on your region. https://nps.uc-one.broadsoft.com/ **Region-based FQDNs:** https://broadworks-idp-proxy-a.wbx2.com/ - US East https://broadworks-idp-proxy-r.wbx2.com/ - US West https://broadworks-idp-proxy-k.wbx2.com/ - Europe https://broadworks-idp-proxy-d.wbx2.com/ - Saudi Arabia https://broadworks-idp-proxy-m.wbx2.com/ - Australia | 443                  |
| Webex Common Identity                                            | Your NPS Server         | HTTPS        | https://idbroker.webex.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 443                  |
| Webex Common Identity                                            | Auth Service XSP        | HTTPS        | https://idbroker-eu.webex.com/idb https://broadworks-idp-proxy-k.wbx2.com/broadworks-idp-proxy/api/v1/idp/authenticate                                                                                                                                                                                                                                                                                                                                                                                        | 443                  |
| APNS and FCM services                                            | Your NPS Server         | HTTPS        | Any IP address\*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 443                  |
| User Provisioning via BroadWorks Provisioning Adapter            | Your BroadWorks AS      | HTTPS        | https://broadworks-provisioning-bridge-\*.wbx2.com/ (where \* could be any letter. Your exact provisioning URL is available in the template you create in Partner Hub)                                                                                                                                                                                                                                                                                                                                        | 443                  |
| Cisco CI Token Validation                                        | Auth Service XSP        | HTTPS        | https://cifls.webex.com/federation                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 443                  |
| BroadWorks Subscription and Webex with BroadWorks on Cisco paper | Your BroadWorks AS      | HTTPS        | https://wholesale-billing-service-a.wbx2.com - US East https://wholesale-billing-service-r.wbx2.com - US West https://wholesale-billing-service-k.wbx2.com - Europe https://wholesale-billing-service-d.wbx2.com - Saudi Arabia https://wholesale-billing-service-m.wbx2.com - Australia                                                                                                                                                                                                                      | 443                  |

If push notifications time out due to a delay in DNS resolution, increase the timeout value in the "/etc/resolv.conf" file on the BroadWorks server.

† These ranges contain the hosts for NPS proxy, but we cannot give the exact addresses. The ranges may also contain hosts that are not related to Webex for Cisco BroadWorks. We recommend that you configure your firewall to allow traffic to the NPS proxy FQDN instead, to ensure that your egress is only towards the hosts we expose for NPS proxy.

\* APNS and FCM do not have a fixed set of IP addresses.

[USA Ingress Rules](#id%5F137295)

(Into your network) 

| **Purpose**                  | **Source**                                                                                                                                                                                                                                                                                                            | **Protocol** | **Destination** | **Destination Port**                 |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | ------------------------------------ |
| WebexCloud CTI/Auth/XSI      | **IP Range** 23.89.0.0/16 44.234.52.192/26 62.109.192.0/18 64.68.96.0/19 66.114.160.0/20 66.163.32.0/19 69.26.160.0/19 114.29.192.0/19 144.196.0.0/16 150.253.128.0/17 163.129.0.0/16 170.72.0.0/16 170.133.128.0/18 173.39.224.0/19 173.243.0.0/20 207.182.160.0/19 209.197.192.0/19 210.4.192.0/20 216.151.128.0/19 | HTTPS CTI    | Your XSP        | TCP/TLS 8012 TLS 443                 |
| Webex App Xsi/DMS            | Any                                                                                                                                                                                                                                                                                                                   | HTTPS        | Your XSP        | 443                                  |
| Webex App VoIP endpoints SIP | Any                                                                                                                                                                                                                                                                                                                   | SIP          | Your SBC        | SP-defined protocol and port TCP/UDP |

It is strongly advisable for the SIP port to be different from 5060 (for example, 5075) due to known issues with using the standard SIP port (5060) with mobile devices.

These IP addresses/ranges are not owned by Cisco and are subject to change periodically. If you are using a firewall, we recommend allowing the urls listed.

[USA Egress Rules](#id%5F137296)

(Out of your network) 

| **Purpose**                                                      | **Source**              | **Protocol** | **Destination**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | **Destination Port** |
| ---------------------------------------------------------------- | ----------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| User Provisioning via APIs                                       | Your Application Server | HTTPS        | webexapis.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 443                  |
| Proxy Push Notifications (production service)                    | Your NPS Server         | HTTPS        | **Current FQDN:** To enhance the DNS resolution speed, instead of the current FQDN nps.uc-one.broadsoft.com we recommend you to use the appropriate FQDN based on your region. https://nps.uc-one.broadsoft.com/ **Region-based FQDNs:** https://broadworks-idp-proxy-a.wbx2.com/ - US East https://broadworks-idp-proxy-r.wbx2.com/ - US West https://broadworks-idp-proxy-k.wbx2.com/ - Europe https://broadworks-idp-proxy-d.wbx2.com/ - Saudi Arabia https://broadworks-idp-proxy-m.wbx2.com/ - Australia | 443                  |
| Webex Common Identity                                            | Your NPS Server         | HTTPS        | https://idbroker.webex.com https://idbroker-b-us.webex.com                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 443                  |
| Webex Common Identity                                            | Auth Service XSP        | HTTPS        | https://idbroker.webex.com/idb https://idbroker-b-us.webex.com/idb https://broadworks-idp-proxy-a.wbx2.com/broadworks-idp-proxy/api/v1/idp/authenticate https://broadworks-idp-proxy-r.wbx2.com/broadworks-idp-proxy/api/v1/idp/authenticate                                                                                                                                                                                                                                                                  | 443                  |
| APNS and FCM services                                            | Your NPS Server         | HTTPS        | Any IP address\*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 443                  |
| User Provisioning via BWKS Provisioning Adapter                  | Your BroadWorks AS      | HTTPS        | https://broadworks-provisioning-bridge-\*.wbx2.com/ (where \* could be any letter. Your exact provisioning URL is available in the template you create in Partner Hub)                                                                                                                                                                                                                                                                                                                                        | 443                  |
| Cisco CI Token Validation                                        | Auth Service XSP        | HTTPS        | https://cifls.webex.com/federation                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 443                  |
| BroadWorks Subscription and Webex with BroadWorks on Cisco paper | Your BroadWorks AS      | HTTPS        | https://wholesale-billing-service-a.wbx2.com - US East https://wholesale-billing-service-r.wbx2.com - US West https://wholesale-billing-service-k.wbx2.com - Europe https://wholesale-billing-service-d.wbx2.com - Saudi Arabia https://wholesale-billing-service-m.wbx2.com - Australia                                                                                                                                                                                                                      | 443                  |

If push notifications time out due to a delay in DNS resolution, increase the timeout value in the "/etc/resolv.conf" file on the BroadWorks server.

† These ranges contain the hosts for NPS proxy, but we cannot give the exact addresses. The ranges may also contain hosts that are not related to Webex for Cisco BroadWorks. We recommend that you configure your firewall to allow traffic to the NPS proxy FQDN instead, to ensure that your egress is only towards the hosts we expose for NPS proxy.

\* APNS and FCM do not have a fixed set of IP addresses.

## Domains and URLs for Webex for BroadWorks

| Domain / URL                      | Description                                                                       | Webex apps and devices using these domains / URLs |
| --------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------- |
| \*.webex.com                      | Webex Core Services for Calling, Meeting, and Messaging like Authentication, etc. | All                                               |
| \*.wbx2.com and \*.ciscospark.com | Webex micro-services, like Software upgrade service.                              | All                                               |

If your network firewall supports domain allow lists for http(s) traffic, like \*.webex.com, it is highly recommended to allow all of these domains.

### Webex Meetings/Messaging - Network Requirements

The MPP devices now onboard to the Webex Cloud for services like Call History, Directory Search and Meetings. The network requirements for these Webex services can be found in [Network Requirements for Webex Services](https://help.webex.com/WBX000028782/Network-Requirements-for-Webex-Services). These requirements also apply when deploying Webex Video Devices.

### IP subnets for Webex media services

The IP subnets listed below are for Webex media services. Filtering Webex signaling traffic by IP address is not supported as the IP addresses used by Webex are dynamic and may change at any time. HTTP signaling traffic to Webex services can be filtered by URL/domain in your Enterprise Proxy server before being forwarded to your firewall.

| **IPv6 Address Ranges for Media Services** |
| ------------------------------------------ |
| APAC - 2402:2500::/34                      |
| AMER - 2607:fcf0::/34                      |
| EMEA - 2a00:a640::/34                      |

For more information see, [Network Requirements for Webex Services](https://help.webex.com/WBX000028782/Network-Requirements-for-Webex-Services).

## Document Revision History

| Date               | We've made the following changes to this article                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| February 17, 2026  | Added Australia wholesale billing service URLs and FQDNs under _EMEA Egress Rules_ and _USA Egress Rules_.                       |
| February 06, 2026  | Added Saudi wholesale billing service URLs and FQDNs under _EMEA Egress Rules_ and _USA Egress Rules_.                           |
| September 10, 2025 | Added section _IP subnet for Webex media services_.                                                                              |
| October 08, 2024   | Removed the IP address from Proxy Push Notifications (production service) row, for _EMEA Ingress Rules_ and _USA Ingress Rules_. |
| October 09, 2023   | Added _BroadWorks Subscription and Webex with BroadWorks on Cisco paper_ requirements in EMEA and USA Egress Rules.              |
| August 01, 2023    | Updated _EMEA Egress Rules_ and _USA Egress Rules_.                                                                              |
| July 20, 2023      | Updated IP subnets for media services for _EMEA Ingress Rules_ and _USA Ingress Rules_.                                          |
| October 12, 2022   | Made formatting/editorial changes only. No changes made to the content.                                                          |
| August 31, 2022    | We added the following domain, IP, and ports to the Webex for BroadWorks network requirements.                                   |
