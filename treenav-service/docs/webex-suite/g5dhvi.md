---
title: "Webex Meetings Virtual Desktop Infrastructure release notes"
product: "Webex Suite"
article_id: "g5dhvi"
url: "https://help.webex.com/en-us/article/g5dhvi/Release-Notes-for-Cisco-Webex-Meetings-Virtual-Desktop-Software-Release-41-x"
last_updated: "2026-01-05"
description: "Webex Meetings Virtual Desktop Infrastructure release notes"
tags: ["webex-suite"]
source: "help.webex.com"
---

# Webex Meetings Virtual Desktop Infrastructure release notes

## Webex Meetings VDI Release Notes

Audio and video for meetings requires significant bandwidth, and can cause a bottleneck going through the data center. Cisco Webex Meetings Virtual Desktop Software provides an enhanced experience in virtual desktop infrastructure (VDI) environments. The VDI software consists of the Webex Meetings app on the hosted virtual desktops (HVD) and the plugin on the thin clients. The software routes audio and video streams between the thin client and Webex Meetings cloud, without going through the HVD in the datacenter.

- [What's New](#Cisco%5FReference.dita%5F466b8810-de82-420c-a0ec-e12de251095c)
- [Downloads](#%5Fff8dd002-55da-4c64-a481-32a465c09fc1)
- [Requirements](#Cisco%5FReference.dita%5Fbc17098e-32be-4899-8c3f-d2f65823685e)

## Overview

**Virtual Desktop Infrastructure**

With VDI, instead of a traditional desktop, you have a thin client and a hosted virtual desktop.

A thin client is a typically less costly and less powerful device than a desktop computer. Your organization may even use older, less powerful PCs as thin clients. Your hosted virtual desktop resides in a central server location called a data center. Your hosted virtual desktop includes your

- Microsoft Windows desktop
- Applications (such as Webex)
- Data

Using your thin client, you access your hosted virtual desktop over a secure Citrix or VMware connection.

Webex works with VDI. However, sending the additional data that audio and video calls require, through the hosted virtual desktops, causes communications delays. This limitation is called the "hairpin" effect.

### Download

You can download the Webex Meetings Virtual Desktop Software from your company website.

To download the webexvdi.msi plugin package, go to `https://<sitename>.webex.com/webappng/sites/<sitename>/dashboard/download` and replace <sitename> with your company name.

### Administrators

See the [Administration Guide](https://www.cisco.com/c/en/us/td/docs/collaboration/webex%5Fvdi/webex%5Fb%5Fadmin-cisco-wvdi-41-x.html) for more information about supported features, and how to deploy the Webex Meetings Virtual Desktop Software solution.

For information about VMware installation, please visit: <https://docs.vmware.com/>

For information about Citrix installation, please visit: <https://support.citrix.com/>

## (45.6.2.7) October 2025

| Release Date                                                                                                                     | Webex Meeting VDI Plugin (45.6.2.7)                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| October 15, 2025                                                                                                                 | Windows 10 x86 or x64 [Installer](https://binaries.webex.com/WebexTeamsDesktop-Windows-VDI-gold-Production/20250729060141/WebexVDIPlugin.msi) (Bundled with Webex App) |
| Mac OS [Installer](https://binaries.webex.com/vdi-mac-aws-gold/20250729055919/WebexVDIPlugin%5Fx64.pkg) (Bundled with Webex App) |                                                                                                                                                                        |
| Linux Ubuntu [x64](https://binaries.webex.com/meetings-vdi-aws/20251014094541/webexvdi-ubuntu%5Famd64.deb)                       |                                                                                                                                                                        |
| Linux eLux 6.5 [ x64](https://binaries.webex.com/meetings-vdi-aws/20251014094541/webexvdi-elux-RP6.zip)                          |                                                                                                                                                                        |
| HP ThinPro 7.x or 8.x [x64](https://binaries.webex.com/meetings-vdi-aws/20251014094541/webexvdi-thinpro%5Famd64.deb)             |                                                                                                                                                                        |

## Requirements

### General Requirements

We support the Webex Meetings VDI on a popular VDI infrastructure. When new platforms are added for a specific release, they are included in the notes under the Release tab for that specific release. You can find the complete list of platforms in the [Administration Guide for Webex Meetings Virtual Desktop Software Release 41.x](https://www.cisco.com/c/en/us/td/docs/collaboration/webex%5Fvdi/webex%5Fb%5Fadmin-cisco-wvdi-41-x/webex%5Fm%5Frequirements-wvdi-41.html).

As of November 2022, we support Citrix Desktop versions 1906, 1912, 2012, 2103, and 2206, and Windows Server versions 2012 and 2016.

| Thin Client OS                 | Citrix Desktop (formerly Citrix XenDesktop) | Citrix XenApp (Desktop Publishing) | VMware |
| ------------------------------ | ------------------------------------------- | ---------------------------------- | ------ |
| Windows 10                     | 40.7                                        | 40.11                              | 41.6   |
| Mac OS (Big Sur, Monterey)     | 41.11                                       | 41.11                              | 41.11  |
| Ubuntu (16.04/18.04)           | 40.8                                        | 40.11                              | 40.12  |
| Unicon eLux                    | 40.8                                        | 40.11                              | 40.12  |
| IGEL                           | 40.8                                        | 40.11                              | 40.12  |
| Dell Wyse                      | 41.2.0                                      | 41.2.0                             | 41.10  |
| HP ThinPro OS 7.x              | 40.11.0                                     | 40.11.0                            | 41.6   |
| 10ZiG Zero Clients Thin Client | 41.5                                        | 41.5                               | —      |
|                                |                                             |                                    |        |

### **Connection Broker for the Hosted Virtual Desktop (HVD)** 

- Citrix Virtual Apps and Desktops
- VMware Horizon

You can't launch Webex Meetings from the Webex App deployed on Azure Virtual Desktop (AVD). VDI plugins for Webex App and Webex Meetings function independently and AVD doesn't support full-featured Webex meeting deployments.

### Thin Client Operating System 

- Windows 10
- HP ThinPro 7.1, 7.2
- Ubuntu 16.04, 18.04, 20.04
- Unicon eLux 6.9
- IGEL OS 11.04
- Dell Wyse ThinOS 9.1
- 10ZiG
- Mac VDI
