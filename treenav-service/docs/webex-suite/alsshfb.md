---
title: "Webex App | Secure mobile devices"
product: "Webex Suite"
article_id: "alsshfb"
url: "https://help.webex.com/en-us/article/alsshfb"
last_updated: "2025-12-22"
description: "We provide several options for IT administrators to secure Webex App on users
mobile devices. This includes Microsoft Intune SDK, EMM with AppConfig, app
wrapping using the iOS IPA files and the Android AAB files, and admin controls
for mobile management."
tags: ["webex-suite"]
source: "help.webex.com"
---

# Webex App | Secure mobile devices

As an IT administrator, you can enforce complete control by enrolling the device with Microsoft Intune or another third party service for device enrollment, or use Control Hub to configure settings that enforce pin lock or control the data sharing between the users within your organization. 

**Mobile Device Management (MDM)**—For mobile devices owned by the enterprise organization, these devices and all applications are enrolled in and managed by the MDM app.

**Mobile Application Management (MAM)**—For personally owned mobile devices, Webex App is only enrolled in and managed by the MAM app. 

The following is the recommended order to use these options:

1. Microsoft Intune
2. AppConfig
3. App wrapping
4. Admin controls in Control Hub

## Microsoft Intune integration

Microsoft Intune integration supports personally owned devices and protects the Webex App with optional device enrollment. For more information, see [Microsoft Intune](https://docs.microsoft.com/en-us/mem/intune/apps/mam-faq).

For details on how to provision and manage Webex with the Microsoft Intune Endpoint Manager, see [Webex | Installation with Microsoft Intune](https://help.webex.com/xj3dmu).

- Microsoft Intune app allows enforcement of app policies such as on-demand VPN, or use of work email.
- MDM device enrollment is optional.
- Webex App for Microsoft Intune available from App Store / Google Play.
- The Microsoft Intune SDK integration provides more features that those provided by AppConfig and MAMs using wrapped versions of the Webex App.
- Compliance and conditional access: Microsoft Intune integrates with Azure AD (identity and access management) to enable a broad set of access control scenarios. For example, you can require mobile devices to be compliant with organization standards defined in Microsoft Intune before accessing the Webex App.
- Microsoft Intune app protection policies are rules that ensure an organization's data remains safe or contained in a managed app. A policy can be a rule that is enforced when the user attempts to access or move corporate data, or a set of actions that are prohibited or monitored when the user is inside the app.

## Set up EMM with AppConfig 

AppConfig is a community that defines basic operating system (OS) level application control capabilities for [iOS](https://www.appconfig.org/ios.html) and [Android](https://www.appconfig.org/android.html). 

The following table shows the AppConfig policies supported by Webex App on Android and iOS. It also shows the `name` and (type) of the configurable properties in the app.

For information on how to configure these behaviors/policies for the Webex App, refer to your application management system's documentation on using AppConfig.

__Table 1\. Supported AppConfig policies for Webex__
|                                                            | iOS                                                                                                                                                                                                                 | Android                                                                                                                                                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default Browser Enabled                                    | Supported Use Managed App Config Key defaultBrowserEnabled (bool)                                                                                                                                                   | Not supported                                                                                                                                                                                   |
| Disable Copy and Paste                                     | Supported Use Managed App Config Key copyAndPasteDisabled (bool)                                                                                                                                                    | Supported Use Android OS settings with "User Android Work profile settings available in EMM configuration"                                                                                      |
| Disable Screen Capture                                     | Use the iOS operating system's restrictions option available in EMM to prevent screen capture from Webex App                                                                                                        | Supported Use Android OS settings with "User Android Work profile settings available in EMM configuration"                                                                                      |
| Managed Open-In/Document Sharing                           | Supported Use iOS Managed Webex App Restrictions parameters available in EMM config                                                                                                                                 | Supported Use Android OS settings with "User Android Work profile settings available in EMM configuration"                                                                                      |
| PIN/TouchID                                                | Supported Use Managed App Config Key pinLockDuration (integer)                                                                                                                                                      | Supported Use Managed App Config Key pinLockEnabled (bool)                                                                                                                                      |
| Prevent App Backup                                         | Supported Use iOS Managed Webex App Restrictions parameters available in EMM configuration                                                                                                                          | Supported Use Android OS settings with "User Android Work profile settings available in EMM configuration"                                                                                      |
| Remote Wipe                                                | Supported Use iOS Managed Webex App Restrictions parameters available in EMM configuration                                                                                                                          | Supported Use Android OS settings with "User Android Work profile settings available in EMM configuration"                                                                                      |
| Require FedRamp Cluster Sign-in                            | Supported Use Managed App Config Key fedRampEnabled (bool)                                                                                                                                                          | Supported Use Managed App Config Key fedRampEnabled (bool)                                                                                                                                      |
| Single Sign-On                                             | Supported Use Managed App Config Key login\_hint (string) to prepopulate user's email address                                                                                                                       | Supported Use Managed App Config Key login\_hint (string) to prepopulate user's email address or login\_domain (string) to automatically append '@domain' to username                           |
| WebView for sign-in                                        | Not supported                                                                                                                                                                                                       | Enables the app to use WebView for authorization sign in flow loginUseWebView (bool)                                                                                                            |
| Cisco Unified Communications Manager Voice Services Domain | Supported Use Managed App Config Key VoiceServicesDomain (string)                                                                                                                                                   | Supported Use Managed App Config Key VoiceServicesDomain (string)                                                                                                                               |
| Cisco Unified Communications Manager Account Username      | Supported Use Managed App Config Key AutoLoginUserName (string) to enter the username                                                                                                                               | Supported Use Managed App Config Key AutoLoginUserName (string) to enter the username                                                                                                           |
| Cisco Unified Communications Manager Account Password      | Supported Use Managed App Config Key AutoLoginUserPassword (string) to enter the password                                                                                                                           | Supported Use Managed App Config Key AutoLoginUserPassword (string) to enter the password                                                                                                       |
| Disable built-in calendar                                  | Supported To block the Webex App from accessing the device calendar isLocalCalendarDisabled (boolean)                                                                                                               | Supported To block the Webex App from accessing the device calendar isLocalCalendarDisabled (boolean)                                                                                           |
| Disable built-in contacts                                  | SupportedTo block Webex App access to device contactsisLocalContactsDisabled (boolean)                                                                                                                              | SupportedTo block Webex App access to device contactsisLocalContactsDisabled (boolean)                                                                                                          |
| iPad mobile user agent injection                           | SupportedTo override desktop user agent with mobile user agent during authentication flowsisIPadCustomUserAgentEnabled(boolean)                                                                                     | Not supported                                                                                                                                                                                   |
| Disable use of unmanaged app                               | Supported Use Managed App Config Key orgIdentifier to specify organization ID from Control Hub. When enabled, external users cannot use unmanaged Webex app on iOS. Organization users must use a managed instance. | SupportedUse Managed App Config Key orgIdentifier (string). When enabled, external users are blocked from using unmanaged Webex app on Android. Organization users must use a managed instance. |

You can prefill the sign-in email address for each user by setting the App Config parameter `login_hint`. Set the parameter using an email address variable from the MDM provider. These variables and their usage vary by provider, so refer to the EMM documentation for details.

- Ways to deploy Webex:

  - [MobileIron](https://help.webex.com/nimi138)
  - [IBM MaaS360](https://help.webex.com/zp36m8/)
  - [VMware Workspace ONE Unified Endpoint Management](https://help.webex.com/njb2pao/)
- Additional reading:

  - <https://www.appconfig.org/android.html>
  - <https://www.appconfig.org/ios.html>

## App wrapping with IPA and AAB

Wrapped versions of the Webex App, the IPA file for iOS and the AAB file for Android, are available using the Webex [mobile application management program](https://help.webex.com/n4b78j9/).

The AAB file for Android contains the APK file.

- Wrapped application files allow the management application to control how an application can be used on a mobile device. The wrapping process provides an additional set of libraries that the management application uses to control the wrapped app.
- We provide the IPA and AAB versions of Webex App.
- The MAM manageable versions of Webex App must be enrolled and authorized by the MAM application.
- Users must download the wrapped and MAM managed version of Webex App from your own app store or MAM app repository.
- Using MAM controlled wrapped versions of Webex App can provide additional controls to those provided through AppConfig.

## Admin controls for mobile management

If you choose not to use the Microsoft Intune, AppConfig or App wrapping options, then the following are the admin controls that are available in Control Hub for administrators:

- Ensure that content is secure and only people with a lock screen can access the Webex App app on their mobile devices.  
[Set up security for mobile devices](https://help.webex.com/nggu6hc/)
- Set up file sharing policies:

  - [Prevent people from sharing files](https://help.webex.com/pesuw)
  - [Remove the GIPHY integration](https://help.webex.com/noj1pl3/)
  - [Remove previews for website links shared in a space](https://help.webex.com/36s8cq/)
- Prevent message previews showing on locked screens. See [enable security settings](https://help.webex.com/9sewa8/).
- To secure a compromised device or when someone leaves a company, you can revoke their access. See [revoke a user's access to Webex](https://help.webex.com/nigu6hc).
