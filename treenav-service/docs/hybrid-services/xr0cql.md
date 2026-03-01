---
title: "Serviceability Connector Release Notes"
product: "Hybrid Services"
article_id: "xr0cql"
url: "https://help.webex.com/en-us/article/xr0cql/Serviceability-Connector-Release-Notes"
last_updated: "2026-01-08"
description: "Read about the latest Serviceability Connector software releases. We document
new functionality, bug fixes, and general improvements. (Use Control Hub to
manage connector software upgrades and schedule when they are performed.
Connector software is automatically downloaded to and installed on the connector
host.)"
tags: ["hybrid-services"]
source: "help.webex.com"
---

# Serviceability Connector Release Notes

For feature changes and product announcements, see [What's New in Hybrid Services](https://help.webex.com/6vkj1i).

## c\_serab\_8.11-1.2121 / 2025.12.19.2121

Dec 19, 2025

This release includes fixes and enhancements that improve the performance and functionality of the connector.

General fixes: This release also addresses numerous reported issues and includes general improvements to enhance the user experience. Additionally, we have added our new swims product for building the TLP.

## c\_serab\_8.11-1.2093 / 2025.11.27.2116

Nov 27, 2025

This release includes fixes and enhancements that improve the performance and functionality of the connector.

General fixes: This release also addresses numerous reported issues and includes general improvements to enhance the user experience. 

## c\_serab\_8.11-1.2093 / 2025.11.04.2107

Nov 4, 2025

This release includes fixes and enhancements that improve the performance and functionality of the connector.

General fixes: This release also addresses numerous reported issues and includes general improvements to enhance the user experience.

## c\_serab\_8.11-1.2093 / 2025.10.10.2103

Oct 10, 2025

This release includes fixes and enhancements that improve the performance and functionality of the connector.

General fixes: This release also addresses numerous reported issues and includes general improvements to enhance the user experience. Enabled rollover mechanism for improved log management.

## c\_serab\_8.11-1.2089 / 2025.06.18.2089

June 18, 2025

- This release includes fixes and enhancements that improve the performance and functionality of the connector.
- **General fixes:** This release also addresses numerous reported issues and makes general improvements to enhance the user experience.

## c\_serab\_8.11-1.2086 / 2025.05.14.2086

May 14, 2025

- This release includes fixes and enhancements that improve the performance and functionality of the connector.
- Backup and Restore: This new feature enables users to back up devices and restore them on the node when the user wants to reset the node.
- This new release includes a new flatcar version: **4152**
- **General fixes:** This release also addresses numerous reported issues and implements general improvements to enhance the user experience.

## c\_serab\_8.11-1.2083 / 2025.04.29.2083

April 29, 2025

- This release includes fixes and enhancements that improve the performance and functionality of the connector.
- **General fixes:** This release also addresses numerous reported issues and makes general improvements to enhance the user experience and Fixed multiple XSS vulnerabilities across various Expressway pages

## c\_serab\_8.11-1.2060 / 2025.03.27.2060

March 27, 2025

- This release includes fixes and enhancements that improve the performance and functionality of the connector.
- **General fixes:** This release also addresses numerous reported issues and makes general improvements to enhance the user experience.

## c\_serab\_8.11-1.2051 / 2025.01.27.2051

January 27, 2025

- This release includes fixes and enhancements that improve the performance and functionality of the connector.
- **General fixes:** This release also addresses numerous reported issues and makes general improvements to enhance the user experience.

## c\_serab\_8.11-1.2048 / 2024.12.11.2048

December 11, 2024

- This release includes fixes and enhancements that improve the performance and functionality of the connector.
- This release also includes OS upgrade which addresses an issue found in openssh library.
- **General fixes:** This release also addresses numerous reported issues and makes general improvements to enhance the user experience.

## c\_serab\_8.11-1.2027 / 2024.11.26.2027

November 26, 2024

This release includes fixes and enhancements that improve the performance and functionality of the connector.

**General fixes:** This release also addresses numerous reported issues and makes general improvements to enhance the user experience.

## c\_serab\_8.11-1.2010 / 2024.10.14.2010

October 14, 2024

Docker image registries have been moved from DockerHub to AWS ECR. The connector now makes outbound connections to Amazon AWS. See [External connections made by the Serviceability Connector](https://help.webex.com/xbcr37).

**General fixes:** This release also addresses numerous reported issues and makes general improvements to enhance user experience.

## c\_serab\_8.11-1.1997 / 2024.09.09.1997

September 9, 2024

This release includes fixes and enhancements that improve the performance and functionality of the connector.

**General fixes:** This release also addresses numerous reported issues and makes general improvements to enhance user experience.

## c\_serab\_8.11-1.1961 / 2024.07.18.1961

July 18, 2024

This release includes fixes and enhancements that improve the performance and functionality of the connector.

**General fixes**: This release also addresses numerous reported issues and makes general improvements to enhance user experience.

## c\_serab\_8.11-1.1958 / 2024.06.18.1958

June 18, 2024

This release includes fixes and enhancements that improve the performance and functionality of the connector.

**DNS Jail**: This feature enables cloud connectivity during registration if the external DNS server is unable to resolve public domains.

**General fixes**: This release also addresses numerous reported issues and makes general improvements to enhance user experience.

## c\_serab\_8.11-1.1949 / 2024.05.02.1949

May 2, 2024

This release includes fixes and enhancements that improve the performance and functionality of the connector.

**General fixes**: This release also addresses numerous reported issues and makes general improvements to enhance user experience.

## c\_serab\_8.11-1.1947 / 2024.03.25.1947

March 25, 2024

This release includes fixes and enhancements that improve the performance and functionality of the connector.

**General fixes:** This release also addresses numerous reported issues and makes general improvements to enhance user experience.

## c\_serab\_8.11-1.1940 / 2024.03.08.1940

March 8, 2024

This release includes fixes and enhancements that improve the performance and functionality of the connector.

- **Phone PRT collector:** This new feature enables users to collect problem reports from phones.
- **Multiple connectors for Webex Cloud-Connected Unified Communications (CCUC):** We now support multiple connectors, enhancing the scalability of serviceability support for CCUC.
- **Keep collected logs on connector:** You can choose to keep collected logs directly on the connector host, to make it easier to access.
- **General fixes:** This release also addresses numerous reported issues and makes general improvements to enhance user experience.

## c\_serab\_8.11-1.1309 / 2020.09.14.1309

September 14, 2020

- The connector now supports importing customer, cluster, and device information from Hosted Collaboration Mediation Fulfillment (HCM-F). This saves you from manually adding all the devices when deploying Serviceability Connector in HCS deployments.  
The connector regularly polls HCM-F to keep the imported information up to date.  
See <https://cisco.com/go/serviceability> if you want to use this option.

## c\_serab\_8.11-1.1210 / 2020.05.15.1210

May 15, 2020

- The connector now raises an alarm if it is configured to upload diagnostic information using cisco.com user credentials for authentication. We are deprecating this method of authenticating uploads. You must change your Upload authentication method to Customer eXperience Drive to make sure that diagnostic uploads will succeed in future. See <https://www.cisco.com/go/serviceability> for more details.
- The connector has been updated to make it compatible with the forthcoming X12.6 release of Cisco Expressway.

## c\_serab\_8.11-1.1101 / 2020.02.11.1101

February 11, 2020

The connector now supports uploading using Customer eXperience Drive (CXD). See [What's New in Hybrid Services](https://help.webex.com/article/6vkj1i) for a description of the new option.

## c\_serab\_8.11-1.1093 / 2020.02.03.1093

February 3, 2020

The connector now supports BroadWorks servers. See [What's New in Hybrid Services](https://help.webex.com/article/6vkj1i) for a description of the new options.

## c\_serab\_8.11-1.780 / 2019.06.21.780

June 21, 2019

The connector now supports more granular collection from managed Expressways. See [What's New in Hybrid Services](https://help.webex.com/article/6vkj1i) for a description of the new options.

## c\_serab\_8.11-1.671 / 2019.04.25.671

April 25, 2019

Security improvements.

## c\_serab\_8.11-1.655 / 2019.04.11.655

April 11, 2019

Export buttons added to Debug Console.

## c\_serab\_8.11-1.634 / 2019.03.25.634

March 25, 2019

- Added support for UCCX and CUBE as managed devices.
- Improved progress bars on executing the data collection.

## c\_serab\_8.11-1.611 / 2019.02.20.611

February 20, 2019

Removes a previously documented limitation on the maximum number of managed devices. The limitation was previously approximately 15 devices, and we now support up to 150 managed devices per Serviceability Connector.

## c\_serab\_8.11-1.573 / 2019.01.16.573

January 16, 2019

This is the first release of the Serviceability Connector.

This connector increases the speed with which Cisco technical assistance staff can diagnose issues with your infrastructure. It automates the tasks of finding, retrieving and storing diagnostic logs and information into a Service Request (SR), and triggering analysis against diagnostic signatures so that TAC can more efficiently identify and resolve issues with your on-premises equipment.

The Serviceability Connector is a small piece of software hosted on an Expressway in your network ('connector host'). It receives TAC-initiated requests via Cisco Webex, and uses the APIs of your on-premises equipment to collect the requested data. It then securely uploads the requested data to the SR file store, where it is attached to your Service Request.

**Managed Devices**

Serviceability Connector can work with the following devices:

- Cisco Unified Communications Manager
- Cisco Unified CM IM and Presence Service
- Cisco Expressway Series
- Cisco TelePresence Video Communication Server (VCS)

**Related Reading**

- Deployment Guide: <https://www.cisco.com/go/serviceability>
- Network Requirements for Webex Teams Services: <https://help.webex.com/article/WBX000028782>
- External Connections Made by the Serviceability Connector: <https://help.webex.com/article/xbcr37>
- Serviceability Commands by Managed Device Type: <https://help.webex.com/article/njch8r4>
