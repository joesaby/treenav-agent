---
title: "Domain Verification Process for SIP Video Devices"
product: "Webex Meetings"
article_id: "nrasz4w"
url: "https://help.webex.com/en-us/article/nrasz4w/Domain-Verification-Process-for-SIP-Video-Devices"
last_updated: "2025-06-16"
description: "SIP video devices within the same company can now connect to meetings without
being prompted for a host PIN or key, simplifying your join experience."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Domain Verification Process for SIP Video Devices

With cloud-registered video devices, there is an established chain of trust and we know whether those devices belong to your organization or not. To be able to achieve the same level of security with standards-based SIP video devices, complete the steps below. These will ensure that only your own organization’s SIP video devices can join meetings without the need for PINs and keys.

To complete the domain verification process:

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Settings \> Domains \> Add Domain.                                                                                                                                                                                                                                                                                                                                                                |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Enter your domain name and click Add. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443628.jpg) For more information, see [Manage your domains](https://help.webex.com/article/nxz79m5).                                                                                                                                                                                                          |
| 3 | Click ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/410001-420000/417001-418000/417370.jpg) beside your domain and choose **Retrieve verification token**. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443627.jpg)                                                                                                                                           |
| 4 | Copy the verification token into your DNS TXT record. If your DNS host supports only one TXT record, add the token on a separate line. If your DNS host supports multiple records, add your token on a single line in its own TXT record.                                                                                                                                                                                                                        |
| 5 | Choose one: Add the DNS TXT record to your DNS server. If your DNS server is configured by another administrator, send the DNS TXT record to your administrator to add to your DNS server. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/443001-444000/443573.jpg) example.com is the SIP video domain. It can be the same as the company name, or list it as a SAN (Subject Alternative Name) as a trusted CA. |
| 6 | Click **Verify** next to each domain. Make sure that the Domain Verification is completed, as it is a required step. The Domain Claim process is optional for SIP video devices.                                                                                                                                                                                                                                                                                 |
