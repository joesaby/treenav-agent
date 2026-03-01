---
title: "Edge Audio prerequisites"
product: "Edge Audio"
article_id: "nkhp692"
url: "https://help.webex.com/en-us/article/nkhp692/Edge-Audio-prerequisites"
last_updated: "2025-03-22"
description: "Before you deploy Edge Audio, make sure that your Webex sites, Unified
Communications Managers, and Expressways meet these requirements."
tags: ["edge-audio"]
source: "help.webex.com"
---

# Edge Audio prerequisites

## Webex site requirements

Your site must have an A-Flex, A-WBX, or A-SPK SKU with a Webex Edge Audio package.

## Unified Communications Manager and Expressway version requirements

- Unified CM 10.5 and later
- Expressway Version X8.10 and later

## DNS SRV records for Expressway-E

Publish DNS SRV records for your Expressway-E so that Webex can route secure SIP calls to your premises.

The DNS SRV record must specify the Expressway-E cluster's mutual TLS port (the default mutual TLS port is 5062).

Edge Audio requires the SRV records to resolve to the Expressway-E cluster's mutual TLS port. So, you can't reuse existing MRA (\_collab-edge.\_tcp), or business to business (\_sips.\_tcp) SRV records. Both MRA and business to business can't use mutual TLS.

The hostnames (FQDNs) in the DNS SRV records must resolve to the Expressway-E cluster's IP addresses through DNS A/AAAA records.

## DNS SRV and A/AAAA record examples

For example, take these DNS SRV records for Edge Audio on a three Expressway-E cluster.

**Secure SIP SRV record** 

| \_service.\_proto.name.        | TTL   | Class | SRV | Priority | Weight | Port | Target             |
| ------------------------------ | ----- | ----- | --- | -------- | ------ | ---- | ------------------ |
| \_sips.\_tcp.edge.example.com. | 86400 | IN    | SRV | 10       | 10     | 5062 | expe1.example.com. |
| \_sips.\_tcp.edge.example.com. | 86400 | IN    | SRV | 10       | 10     | 5062 | expe2.example.com. |
| \_sips.\_tcp.edge.example.com. | 86400 | IN    | SRV | 10       | 10     | 5062 | expe3.example.com. |

We recommend using a subdomain, such as `edge.example.com` in this example, to avoid conflicts with existing secure SIP SRV records not resolving to the Expressway-E cluster’s mutual TLS ports. For example, you may already have published `_sips._tcp.example.com.` for business-to-business video calls and these records must not resolve to the Expressway-E cluster’s mutual TLS port.

**A/AAAA records** 

| Name               | TTL   | Class | A | Address      |
| ------------------ | ----- | ----- | - | ------------ |
| expe1.example.com. | 86400 | IN    | A | 203.0.113.11 |
| expe2.example.com. | 86400 | IN    | A | 203.0.113.13 |
| expe3.example.com. | 86400 | IN    | A | 203.0.113.15 |

## Sizing your Expressway clusters

The following table shows you the recommended amount of concurrent Edge Audio calls an Expressway can handle. 

Run your Edge Audio nodes on dedicated Expressways or CUBEs. Don't use these nodes for other services like MRA.

__Table 1\. Expressway call capacity__
| Nodes in a cluster [1](#footnotes/1) | Concurrent audio calls using Medium Expressway–General | Concurrent audio calls using Medium Expressway–Preferred Architecture for Version 14 [2](#footnotes/2) | Concurrent audio calls using Large Expressway |
| ------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| 1                                    | 200                                                    | 300                                                                                                    | 1000                                          |
| 2                                    | 400                                                    | 600                                                                                                    | 2000                                          |
| 3                                    | 600                                                    | 900                                                                                                    | 3000                                          |
| 4                                    | 800                                                    | 1200                                                                                                   | 4000                                          |
| 5                                    | 800                                                    | 1200                                                                                                   | 4000                                          |
| 6                                    | 800                                                    | 1200                                                                                                   | 4000                                          |

Adding more than 4 Expressways to a cluster improves the cluster's resilience to failure. A cluster can have a maximum of 6 Expressways.

For more sizing information, see the _Expressway Capacity and Sizing_ chapter of the [Cisco Expressway Administrator Guide](https://www.cisco.com/c/en/us/support/unified-communications/expressway-series/products-maintenance-guides-list.html).

## Apply signed certificate from trusted certificate authority

Edge Audio requires a signed certification from a trusted certificate authority (CA). Use this list of certificate authorities that Cisco trusts: [What Root Certificate Authorities are Supported for Calls to Cisco Webex Audio and Video Platforms?](https://collaborationhelp.cisco.com/article/WBX9000008850). Edge Audio considers certificates from these authorities valid and allows the connection. 

## Handling of incoming call from Webex

Enable E.164 numbers to traverse your Expressway-E, and route calls based on your configuration. Handle both users on your network who connect to your Unified CM and users off your network, like those who connect with a mobile phone.

We recommend rejecting the calls with E.164 numbers where the source zone is a Default Zone in Expressway-E. DNS Zone created in Expressway-E, for Webex, must have Mutual TLS on with Webex Subject Alternate Name (SAN) verification.

## Open required firewall ports

After you complete the Unified CM and Expressway configurations, you must open the necessary firewall ports. Refer to this article: <https://collaborationhelp.cisco.com/article/WBX264> for Network Requirement information, and what ports to open.

1 Count the nodes for each cluster separately. For example, you can have 6 nodes in your Expressway-C cluster and 6 nodes in your Expressway-E cluster.

2 See the sizing information in [Preferred Architecture for Cisco Collaboration 14 Enterprise On-Premises Deployments, CVD](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/Collaboration/enterprise/14/collbcvd/sizing.html).
