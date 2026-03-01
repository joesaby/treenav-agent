---
title: "Webex | Management with MobileIron"
product: "Webex Messaging"
article_id: "nimi138"
url: "https://help.webex.com/en-us/article/nimi138/Webex-Management-with-MobileIron"
last_updated: "2024-09-11"
description: "As an administrator, you can use the Webex integration with MobileIron to
provision and manage the Webex App from the MobileIron cloud console."
tags: ["webex-messaging"]
source: "help.webex.com"
---

# Webex | Management with MobileIron

## Overview

Webex supports integration with Unified Endpoint Management (UEM) tools such as MobileIron (now Ivanti). These tools allow you to provision, configure and control access to mobile applications deployed in your organization. They also allow you to monitor, manage and secure corporate mobile devices used in your organization. 

You can use Ivanti to enrol and manage Cisco Webex on personally owned devices (BYOD) and corporate phones.

This document helps you import Cisco Webex (for iOS or Android) into your MobileIron app catalog, configure the app, and distribute it to users.

### Prerequisites

- Ensure that you have access to the MobileIron cloud console.
- You must have a Webex account.
- If Android devices are enrolled, ensure that they are enrolled in MobileIron cloud with the appropriate Android Enterprise Deployment mode (Work profile, Device owner (DO), or Corporate Owned Personally Enabled (COPE)) and that they are compliant with your organization's compliance policy.

[Deploy Webex App to Android Devices](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fb2aec32c-09e8-4f01-9c52-a6a75818e7e4)

| 1  | Sign in to your organization's MobileIron cloud console, for example, https://example.mobileiron.com.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Open the App Catalog, then click \+ Add. This launches the app wizard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3  | Select Google Play, and search for "Cisco Webex". You may see more than one Cisco app. Select the one named "Cisco Webex". ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/457001-458000/457980.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4  | Click Approve (to approve the app for your organization).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 5  | Click Approve (to approve the app's default permissions), then click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 6  | Enter a Description and click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 7  | Click Next to skip App Delegation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 8  | Add the Cisco Webex users in the Distribution tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 9  | In the App Configurations tab, select Managed Configurations for Android. ![Screenshot of the MobileIron UI, showing configuration of Cisco Webex app](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/458001-459000/458925.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 10 | Name the configuration, and then select the options you want to control on the Webex App: Table 1\. Webex for Android Configurations in MobileIron Configuration name Value Description WebView for Login Check or clear the box If checked, enables the app to use WebView for authorization sign in flow. Enforce MDM Lockscreen Check or clear the box If checked, enables the lock screen requirements for Android users. Enforce FedRAMP login Check or clear the box If checked, Webex directs Android users to sign in to our dedicated cluster for Webex for Government customers. MDM Org ID Copy from Control Hub Account \>  Org ID Configures your Webex organization ID as a unique identifier for the Webex App startup process. Variable where email addresses can be inserted ${userEmailAddress} Allows the EMM server to prepopulate the email address for users when they sign in. Map the email address variable userEmailAddress to the login\_hint Webex variable, to prepopulate user email address for sign in. |
| 11 | Click Done to finish the app import. The approved Webex App is now available in your app catalog. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/457001-458000/457981.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

[Create Lockdown and Kiosk for Android Enterprise](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F87b6eae8-33b6-4d00-983e-ea739459c412)

| 1 | Sign in to your organization's MobileIron cloud console, for example, https://example.mobileiron.com.                                                                         |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Open the Configuration page, and click \+ Add.                                                                                                                                |
| 3 | Search for and select the **Lockdown and Kiosk : Android Enterprise** profile.                                                                                                |
| 4 | Select the lockdown type you want to configure, for example, Work Profile.                                                                                                    |
| 5 | Configure the restrictions in your selected profile. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/457001-458000/457985.jpg) |
| 6 | Distribute the profile to the Android user group.                                                                                                                             |

[Deploy Webex for iOS](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fccf87818-8eae-4fa9-9787-1f89ae86c21d)

| 1 | Sign in to your organization's MobileIron cloud console, for example, https://example.mobileiron.com.                                                                                                                                             |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Open the App Catalog, then click \+ Add. This launches the app wizard.                                                                                                                                                                            |
| 3 | Select iOS Store, and search for "Cisco Webex". You may see more than one Cisco app. Select the one named "Cisco Webex". ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/457001-458000/457982.jpg) |
| 4 | Click Next, enter a Description and click Next.                                                                                                                                                                                                   |
| 5 | Click Next to skip App Delegation.                                                                                                                                                                                                                |
| 6 | Configure user distribution for this app, then click Next. The wizard moves to the application configuration screen. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/457001-458000/457983.jpg)     |
| 7 | Click the + button in the iOS Managed App Configuration area, to add your iOS configuration.                                                                                                                                                      |
| 8 | In the Source Type dropdown, select _Use AppConfig Community_. This preloads some settings to make it easier for you. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/458001-459000/458621.jpg)    |
| 9 | Select Distribute this App Config to the Cisco Webex App user group.                                                                                                                                                                              |

[Configure Supported Policies](#Cisco%5FReference.dita%5F06d3fdd1-1c0f-4345-826b-193757762a67)

**Passcode/TouchID**

Allow users to set up a Passcode or TouchID. The user is prompted to enter a passcode when they launch the Webex app from a mobile device.

**Maximum PIN attempts**

Define the maximum number of times a user can enter an incorrect PIN.

**Managed Open-In/Document Sharing**

Allow sharing of documents from Webex app to other policy-managed apps.

**Prevent App Backup**

Prevent users from saving Webex data to Android/iOS back-up service.

**Disable Screen Capture**

(Android) Block screen capture and Google assistant capabilities. 

For iOS users, this restriction is configured at the OS level.

**Remotely Wipe App**

Allow administrators to remotely wipe Webex from a mobile device.

**Disable Copy and Paste**

Prevent users from using copy and paste between Webex and other unmanaged apps. However, you can allow copy and paste with other corporate policy-managed applications.
