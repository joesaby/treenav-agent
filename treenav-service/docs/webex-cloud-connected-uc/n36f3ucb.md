---
title: "Install or Upgrade Cisco IP Phone Firmware"
product: "Webex Cloud-Connected UC"
article_id: "n36f3ucb"
url: "https://help.webex.com/en-us/article/n36f3ucb/Install-or-Upgrade-Cisco-IP-Phone-Firmware"
last_updated: "2025-06-27"
description: "A firmware is a program coded into a device to make it perform according to its
capabilities. It is important to install or upgrade to the latest firmware
version because they often contain improvements such as new features or defect
fix that causes security vulnerability or performance issue. It also keeps your
network secure, eliminates frequent network disconnections, or intermittent
connection issues."
tags: ["webex-cloud-connected-uc"]
source: "help.webex.com"
---

# Install or Upgrade Cisco IP Phone Firmware

## Install or upgrade the firmware - An Overview

You can upgrade the phone firmware with protocols such as, TFTP, HTTP, or HTTPS. After the upgrade, the phone reboots automatically.

**Prerequisite** 

Before you upgrade the firmware, make sure you have a valid Cisco.com (CCO) account.

## Download the file

Perform the following procedure to download the firmware on Cisco IP Phone 7800 Series and Cisco IP Phone 8800 Series.

| 1 | Navigate to the [Cisco Software Download ](https://software.cisco.com/download/home/286318380) page.                                                       |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Choose Collaboration Endpoints \> IP Phones \> IP Phone 8800 Series or IP Phone 7800 Series.                                                               |
| 3 | Choose the Cisco IP Phone model. For example, IP Phone 8861. The Select a Software Type page appears.                                                      |
| 4 | Click the Session Initiation Protocol (SIP) Software as the software type.                                                                                 |
| 5 | Go to All Releases \> SIPv.12 and choose the appropriate version. For example, Release 12.5(1) SR2. The File Information details appear.                   |
| 6 | (Optional) Place your mouse pointer on the file name to see the file details and the checksum values. For example, cmterm-88xx-sip.12-5-1SR2-2.k3.cop.sgn. |
| 7 | Download the file to an appropriate location on your upgrade server.                                                                                       |

## Install or upgrade the firmware

Perform the following procedure to install or upgrade the firmware.

**Prerequisite**

Before you start to install or upgrade the firmware, check the existing firmware or load version of the phone. To view the list of Cisco IP phones with the corresponding firmware or load versions, go to Cisco Unified CM Administration \>Device \> Device Settings \> Device Defaults. 

| 1 | Log into Cisco Unified OS Administration web page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Software Upgrades \> Install/Upgrade. The Software Installation/Upgrade page appears with Software Location and Upgrade Options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3 | Enter the details in the respective sections: Software Location Source—Choose your local source or remote source for upgrade. For example, Remote Filesystem. Directory—Enter the path to the patch file on the remote system. Server—Enter the FTP or SFTP server name for remote file systems. User Name—Enter the username of the remote node. User Password—Enter the password of the remote node. Transfer Protocol—Choose the transfer protocol from the drop-down list. SMTP Server—Enter the IP address of your SMTP server. Email Destination—Enter your email address along with the SMTP server. You will receive an email notification upon successful completion of the upgrade. Upgrade Options Continue with Upgrade after download—Check the Continue with Upgrade after download check box to start the upgrade or installation immediately after the file download completes. Switch-version server after upgrade—Check the Switch-version server after upgrade check box to reboot the system automatically after the upgrade is complete. |
| 4 | Click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5 | On the Software Installation/Upgrade page, click the Options/Upgrades drop-down list, and choose the file that you have downloaded earlier and click Next. After the file is installed or upgraded, a confirmation message appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 6 | Go to Cisco Unified Serviceability and choose Tools \> Control Center - Feature Services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 7 | Choose Cisco Tftp service and click Restart. After installing the firmware, the default load for the phone model updates to the latest version. If you're not ready to upgrade phones, change the load back to the current firmware or disable the TFTP service during the device pack installation and restart it when ready.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## Verify the firmware version

After you have installed or upgraded the firmware version, perform the following procedure to verify it.

| 1 | From Cisco Unified CM Administration,choose Device  \> Device Settings \> Device Defaults. The Device Default Configuration page appears with a list of phones and firmware versions.                                         |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Verify the new firmware image name that is listed next to the Cisco IP Phone model on the Load Information column. You can also view the previous load/firmware version of the phone on the Inactive Load Information column. |

## References

For information on how to install firmware loads on phones and endpoints without automatically updating all devices, see [Release Notes for Cisco PhoneOS Phones 9800 and 8875](https://help.webex.com/en-us/article/n1trwjh/Release-Notes-for-Cisco-PhoneOS-Phones-9800-and-8875#task-template%5Fba50281c-9fd5-4c8e-904f-b8dc83777063).
