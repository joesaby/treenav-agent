---
title: "Set up security for Webex Contact Center"
product: "Webex Contact Center"
article_id: "3srgv1"
url: "https://help.webex.com/en-us/article/3srgv1/Security-Settings-for-Webex-Contact-Center"
last_updated: "2025-01-09"
description: "This article helps you to manage sensitive customer data and call recordings.
Sensitive data feature enables you to control the handling of Personally
Identifiable Information (PII) during a call. Allowed domain list section is
important to ensure that the desktop responds as expected on your network. You
can also add the required domain to the allowed list through security settings."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Set up security for Webex Contact Center

## Manage sensitive data

You can safeguard customer personally identifiable information on the Agent Desktop user interface (UI). Prevent agents from viewing customer social security numbers, credit card information, and bank account details on digital channels. Enabling this prevents agents from viewing customer phone numbers and email address details across voice and digital channels. However, the system doesn't encrypt the data in the backend. So, while the masking is performed at the UI level, the network and console logs will still contain PII information. Also, the attachments that are sent to the agents may still contain sensitive PII information which would fall into your Enterprise's Data Loss Prevention strategy.

For detailed information on how this masking works, refer to the relevant articles in the "Handle Incoming Calls" and "Handle Digital Channel Conversations" sections of [Contact Center Help Center](https://help.webex.com/en-us/landing/ld-93x1hg-ContactCenter/Agent?type=complex&subTab=Webex-Contact-Center&category=Handle-digital-channel-conversations).

This feature is only applicable for Agent Desktop and doesn't apply to Supervisor Desktop users.

To enable or disable masking of sensitive data:

| 1 | Sign in to [Control Hub](https://admin.webex.com/login).                                                                  |
| - | ------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Services > Contact Center.                                                                                    |
| 3 | From the Contact Center navigation page, select Tenant settings > Security.                                               |
| 4 | In the Sensitive Data section, toggle to enable or disable the masking of sensitive data for agents on the Agent Desktop. |

## Handle call recordings

The Call recording feature enables agents to pause the recording of sensitive data during a call. Even when the call recording is paused, the system still records metadata such as call duration, dialed number, routing path, and other related information in the Contact Center database.

To enable or disable Call recordings:

| 1 | Sign in to [Control Hub](https://admin.webex.com/login).                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Navigate to Services > Contact Center.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3 | From the Contact Center navigation page, select Tenant settings > Security.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4 | In the **Call recordings** section, use the toggle button to enable or disable the call redorings. By default, the call recording is enabled. When you disable this feature, an agent can't pause the call recording while customer is sharing sensitive data. Toggle Auto resume after pausingoption handle the auto resumption of paused call recordings. Set the pause length in seconds in the Auto resume after pausing option. It's after this duration, when the recording will automatically resume. |

## Set up content security policy

Content security policy enables you to define an allowed list of trusted domains that you can access from Webex Contact Center applications. This helps to ensure compliance with the content security policy framework that browsers enforce. To know more about the content security policy, see <https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP>.

To add a trusted domain to the allowed list:

| 1 | Sign in to [Control Hub](https://admin.webex.com/login).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Services > Contact Center.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3 | From the Contact Center navigation page, select Tenant settings > Security.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 4 | In the **Content Security Policy Allowed List** section, enter the domain of the web resource that you need to access.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 5 | Click Add. The domain appears in the Registered Domains list. To remove a domain, click the x mark on the domain name. Domains that are tagged in grey are mandatory and cannot be removed. If the Agent Desktop is embedded within an iFrame of another domain of an organization, add the domain to the allowed list of the Content Security Policy. After you add the domain to the allowed list, it takes 10 minutes for the Agent Desktop to load within an iFrame. You can either reload or sign in again to the Agent Desktop to view the changes. |

## Source IP Addresses for Webex Contact Center

This article lists the source IP addresses that you must allowlist on the firewall. With this configuration, Webex Contact Center can make network calls to the external services hosted on your premises, through your firewalls. This setting applies to various use cases such as Flow Designer HTTP nodes or external webhooks.

These IP addresses are for customers that must allowlist Webex Contact Center as the source. This setting applies to all network calls originating from data centers and go out over the internet through the Network Address Translation (NAT) gateways. We don't provide IP addresses of Webex Contact Center as the destination address because inbound requests to data centers go through load balancers and IP addresses are dynamic.

The following IP addresses are defined for each data center. Depending on your country of operation, source IP addresses vary. For more information on the supported data centers, see the [Data Locality in Webex Contact Center](https://help.webex.com/en-US/article/n0p6xa1/Data-Locality-in-Webex-Contact-Center) article.

This article is only about source IP addresses for Webex Contact Center. For information on the domains required for the Agent Desktop, see the [Domain Access Required for Desktop](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/m%5Fgetting-started.html#Cisco%5FReference.dita%5F3f7e1e63-84fb-48f5-a054-544dc01fc62a) section in Cisco Webex Contact Center Setup and Administration Guide.

| **Data Center** | **Source IP Addresses**                                                           |
| --------------- | --------------------------------------------------------------------------------- |
| United States   | 44.198.116.6 52.2.206.209 34.233.169.210 35.171.39.86 52.71.229.67 18.204.155.101 |
| United Kingdom  | 18.133.42.169 18.132.81.121 18.170.240.71                                         |
| Australia       | 13.55.204.113 52.65.175.133 3.105.244.46                                          |
| Germany         | 3.67.159.214 3.65.95.10 3.69.237.238                                              |
| Canada          | 35.182.112.71 15.223.110.6 15.223.82.211                                          |
| Japan           | 54.199.26.203 35.77.129.102 35.79.111.99                                          |
| Singapore       | 18.139.215.61 18.139.142.115 52.221.176.68                                        |
