---
title: "Supported Versions of Expressway for Hybrid Services Connectors"
product: "Hybrid Services"
article_id: "ruyceab"
url: "https://help.webex.com/en-us/article/ruyceab/Supported-Versions-of-Expressway-for-Webex-Hybrid-Services-Connectors"
last_updated: "2026-02-25"
description: "For a new hybrid connector host, we recommend that you register an Expressway
box with the latest software release to the Webex cloud. For existing connector
hosts, we support previously released versions of Expressway, with specific
versions mentions in this article. You&#x27;ll also receive notices in the Expressway
interface when it&#x27;s time to consider an upgrade. Make sure that you update the
Expressway software on your connector hosts as often as possible."
tags: ["hybrid-services", "webex-calling", "webex-meetings"]
source: "help.webex.com"
---

# Supported Versions of Expressway for Hybrid Services Connectors

## Supported Versions

[Hybrid Call Service on the Call Connector architecture has gone End of Life (EOL)](https://help.webex.com/ngcto76/), so the service is no longer officially supported. 

You must keep your Expressway-C connector host for hybrid services up to date. You can download the latest Expressway software, free of charge, from [software.cisco.com](https://software.cisco.com/download/home/286255326/type/280886992/release/X12.5.1).

- See the following tables for more information about the currently supported versions and what to expect when you need to upgrade your Expressways.
- See [Upgrade the Connector Host Expressway used for your Hybrid Services](https://help.webex.com/article/lq7r0c) for the correct sequence to upgrade your Expressways that are used for connector hosting.
- See the deployment guides for [Calendar](https://www.cisco.com/go/hybrid-services-calendar), [Message](https://www.cisco.com/go/hybrid-services-message), and [Serviceability](https://www.cisco.com/go/serviceability) for how to register your Expressway securely to the cloud, so that the Expressway can host hybrid connector software. In each guide, follow the steps in Register Expressway-C Connector Hosts to the Cisco Webex Cloud.

Expressway is the platform on which connector software is downloaded, run, installed, and upgraded automatically from the cloud. You must also upgrade to the latest stable connector release as a prerequisite for technical support. For connector upgrade management, see the related articles for upgrade schedules and release notes.

For Hybrid Services, X14.3 is the minimum supported version of Expressway for new connector host registrations to the cloud. X14.0 is the minimum version for existing registrations to the cloud.

__Table 1\. Expressway Connector Host Registration Support__
| Expressway Connector Host Type  | Version Support                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                 |                                                                                                                                                                                                                                                                                                                                                 |
| New and not registered          | For new Expressway connector hosts, you must register to the cloud using **X14.3 at a minimum**. You'll see an error message in Control Hub if you try to register a version that's not supported for hybrid services. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/428001-429000/428746.jpg) |
| Existing and already registered | For existing Expressway connector hosts that are already registered to the cloud, we recommend that you upgrade your Expressways as soon as possible after a new version is released, but we support as early as version X14.0, and any minor or maintenance release built on top of the supported releases.                                    |

## Upgrade Reminders

For Expressways that are at risk of being unsupported for hybrid services, you'll receive advanced notice in the Expressway interface that reminds you to upgrade to the latest version. The Expressway version your hybrid deployment is running on determines the reminder that you see; both cases are covered in the following table.

__Table 2\. Expressway Connector Host Upgrade Reminders__
| Expressway Connector Host Version          | Version Support                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Supported—One release behind the latest    | For Expressways that are one release behind the latest, you'll receive advanced notice on the Expressway that reminds you to upgrade the latest version. Connector software still automatically downloads, installs, and runs, and your deployment is still supported, but we recommend that you **upgrade to the latest version at your earliest convenience**. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/429001-430000/429527.jpg) |
| Unsupported—Two releases behind the latest | You'll receive a warning that the version is no longer supported for hybrid services. Connector software still automatically downloads, installs, and runs, but **your deployment is considered unsupported** and at risk of not working until you upgrade to the latest version as soon as possible. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/429001-430000/429619.jpg)                                                            |

**Related Information**  

[Deployment Guide for Cisco Webex Hybrid Calendar Service](https://www.cisco.com/go/hybrid-services-calendar)

[Deployment Guide for Cisco Webex Hybrid Message Service](https://www.cisco.com/go/hybrid-services-message)

[Deployment Guide for Cisco Webex Serviceability Connector](https://www.cisco.com/go/serviceability)
