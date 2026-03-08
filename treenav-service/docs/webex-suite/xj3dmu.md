---
title: "Install Webex App with Microsoft Intune to managed devices"
product: "Webex Suite"
article_id: "xj3dmu"
url: "https://help.webex.com/en-us/article/xj3dmu/Webex-App-%7C-Installation-with-Microsoft-Intune"
last_updated: "2025-07-11"
description: "As an administrator, you can use the Webex integration with Intune to provision
and manage Webex App from the Microsoft Intune Endpoint Manager."
tags: ["webex-suite"]
source: "help.webex.com"
---

# Install Webex App with Microsoft Intune to managed devices

## Overview

Webex supports integration with Enterprise Mobility Management (EMM) such as Microsoft Intune, a cloud-based service that provides both Mobile Application Management (MAM) and Mobile Device Management (MDM) capabilities.

MAM software allows you to provision, configure and control access to mobile applications deployed in your organization. MDM software allows administrators to monitor, manage and secure corporate mobile devices used in your organization. Webex can be enrolled and managed on personal devices and corporate phones using MAM and MDM applications.

## Deployment options

**Webex for Intune**—Using the Intune SDK, we developed Webex for Intune, which is available from the App Store and Google Play.

The Webex for Intune application ID is `ee0f8f6b-011c-4d44-9cac-bb042de0ab18`.

Webex Intune Intune allows for the enforcement of app policies, such as on-demand VPN and use of work email. Users download Webex Intune, and then the Intune application protection policy controls their access to Webex Intune app and sharing of corporate data.

Device enrollment is optional if you want to deploy Webex Intune; it can be used on managed and unmanaged devices. 

**EMM with Mobile Device Management**—All mobile devices and corporate applications are enrolled in, and managed by, the MDM application. 

In this deployment model, the administrator adds the Webex Intune application to the Intune app catalog and assigns it to users or devices (see _Add Webex for Android_ and _Add Webex for iOS_ in this article). The Intune app protection policy applies at the device or profile level. This policy defines a set of rules to control access to Webex Intune and sharing of corporate data.

You can also configure device restrictions to control data sharing from iOS devices.

See _Create an application protection policy_ in this article.

**EMM with Mobile Application Management**—In this deployment model, the mobile devices are not enrolled in the Intune portal.

- Users can download the Webex Intune app directly from App Store for iOS devices and Google Play for Android devices. The app protection policy applies at the application level. The policy controls application access requirements, like PIN for access, and controls data sharing from Webex Intune.
- Another option is to use an app wrapping tool to wrap Webex App. The wrapped application files allow a MAM application to control how apps can be used on a mobile device. Users can download the wrapped and MAM managed version of Webex App from the enterprise's own app store or MAM app repository. The application protection policy controls the sharing of corporate data from the wrapped application.

See _Create an application protection policy_ in this article.

Wrapped versions of Webex apps (.IPA files for iOS, and .APK files for Android) are available from the [mobile application management program](https://help.webex.com/n4b78j9).

## Things to keep in mind

- Ensure that you have Microsoft Endpoint Manager admin center access.
- User must have a Webex account.
- Ensure that users are created in your Active Directory and that users have been assigned Intune licenses.
- If Android devices are enrolled, ensure that they are enrolled in Intune with a Work profile and that they are compliant with your organization's compliance policy.

## Add Webex for Android

| 1 | Sign in to Microsoft Endpoint Manager Admin Center.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the left pane, select Apps, and under Platform choose Android.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3 | Click Add. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455415.jpg) Webex for Intune can be deployed from the Store app in two ways: Managed Google Play app ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455416.jpg) Search for Cisco Webex for Intune, click Approve and then click Sync. When the sync completes, the app is added to the App catalog.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455417.jpg) Android Store App Enter the following information and then click Next: **Name**—_Cisco Webex for Intune_ **Description**—_Cisco Webex for Intune_ **Publisher**—_Cisco_ **App store URL**—_https://play.google.com/store/apps/details?id=com.cisco.wx2.android.msintune_ **Minimum operating system**—_Android 7.0 (Nougat)_ ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455167.jpg) |

## Add Webex for iOS

| 1 | Sign in to Microsoft Endpoint Manager Admin Center.                                                                                                                                                                                                                                                                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the left pane, select Apps, and under Platform choose iOS/iPadOS.                                                                                                                                                                                                                                                                                                             |
| 3 | Click Add application and choose iOS store App.                                                                                                                                                                                                                                                                                                                                  |
| 4 | Search for Cisco Webex for Intune, enter the following information: Name—_Cisco Webex for Intune_Description—_Cisco Webex for Intune_Publisher—_Cisco_Minimum operating system—_iOS 12.0_ ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455168.jpg) For iPadOS, select Minimum operating system as 13.1 and later |

## Check application installation status

| 1 | Sign in to Microsoft Endpoint Manager Admin Center.                                                                                                                                                                                        |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | In the left pane, select Devices and choose from Android or iOS.                                                                                                                                                                           |
| 3 | Select the device on which you've installed Webex, click Managed App, and then search for Cisco Webex for Intune. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455246.jpg) |
| 4 | Check the installation status.                                                                                                                                                                                                             |

## Create an app configuration policy

You can configure the Intune App Configuration Policy for both Android and iOS/iPadOS devices. You can apply these settings to both managed devices and managed applications. Webex App checks for these settings when users run the app for the first time on their mobile devices. The Intune App Configuration settings get applied, which then allows the app to be customized with app configuration and management.

- **For Android**  

  1. Sign into Microsoft Endpoint Manager Admin Center.
  2. In the left pane, select Apps and click App Configuration Policies.
  3. Click Add and select Managed devices or Managed apps.
  4. In the Create app configuration section, enter the following information for Android devices and click Next.

    - **Name**—Webex Configuration Policy
    - **Platform** —Select Android Enterprise
    - **Targeted app**—Select Webex or Webex for Intune
    - **Profile Type**—Select the Android deployment type
    - **Targeted App**—Select Webex or Webex for Intune
  5. From Settings, for Configuration settings format, choose Use Configuration designer.
  6. Click Add to select the app configuration key.  
  These app configuration keys are available for Android deployment.

| **Configuration Name**                         | **Value**                                               | **Value Type** | **Description**                                                                                                                                                                                                   |
| ---------------------------------------------- | ------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WebView for Login                              | Check or clear the box                                  | Bool           | If checked, enables the app to use WebView for authorization sign in flow.                                                                                                                                        |
| Enforce MDM Lock screen                        | Check or clear the box                                  | Bool           | If checked, enables the lock screen requirements for Android users.                                                                                                                                               |
| Enforce FedRAMP login                          | Check or clear the box                                  | Bool           | If checked, Webex directs Android users to sign in to our dedicated cluster for WebEx for Government customers.                                                                                                   |
| MDM Org ID                                     | Copy from Control Hub **Management > Account > Org ID** | String         | Configures your WebEx organization ID as a unique identifier for the Webex App startup process.                                                                                                                   |
| Variable where email addresses can be inserted | {{mail}}                                                | String         | Allows the EMM server to prepopulate the email address for users when they sign in. Map the email address variable **mail** to the **login\_hint** Webex variable, to prepopulate user email address for sign in. |
- **For iOS/iPadOS**  

  1. Sign into Microsoft Endpoint Manager Admin Center.
  2. In the left pane, select Apps and click App Configuration Policies.
  3. Click Add and select Managed devices or Managed apps.
  4. Select platform **iOS/iPadOS**.
  5. From **Settings**, for **Configuration settings format**, choose **Use Configuration designer**.
  6. Choose the app configuration parameters.  
  These app configuration parameters are supported for iOS/iPadOS deployments.

| **Configuration Key**    | **Value Type** | **Configuration Value**                        | **Description**                                                                                                                   |
| ------------------------ | -------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| orgIdentifier            | String         | Your **Organization ID**                       | Your organization ID is available in Control Hub: select Management > Accountand then get the value from **Organization ID**.     |
| login\_hint              | String         | {{mail}}                                       | Map the email address variable **{{mail}}** to the **login\_hint** Webex variable, to prepopulate user email address for sign in. |
| pinLockDuration          | Integer        | "Number" Mention numeric Value in milliseconds | Defines the time in milliseconds the Webex App is idle and bring up the pink lock screen.                                         |
| fedRampEnabled           | Boolean        | true                                           | Only allow mobile users to login to Webex FedRamp cluster.                                                                        |
| isDeviceAuthLoginEnabled | Boolean        | true                                           | Displays QR Code on iPad. User can scan the QR Code using iPhone to login.                                                        |
| copyAndPasteDisabled     | Boolean        | true                                           | Disables copy and paste throughout the app.                                                                                       |
| isLoginHintEditable      | Boolean        | true                                           | Allows user to change the preset login hint.                                                                                      |
| defaultBrowserEnabled    | Boolean        | true                                           | Forces app to use the default browser set by the user in the iOS settings.                                                        |  
  For restrictions such as disabling copy-paste and setting a pin lock duration, you can also use the App protection policy available with Intune.

## Create an application protection policy

Application protection policies are rules that ensure an organization's data remains safe or contained in a managed app. A policy can be a rule that is enforced when the user attempts to access or move corporate data, or a set of actions that are prohibited or monitored when the user is in the app. App protection policies are available for MDM-managed Webex for Intune and wrapped applications (.IPA and .APK files).

If you have an existing application protection policy, you can use the same policy and assign it to the user. Or, you can use the following steps to create a new app protection policy.

You can read more about this procedure in [Microsoft documentation](https://docs.microsoft.com/en-us/mem/intune/apps/app-protection-policies).

| 1  | Sign in to Microsoft Endpoint Manager Admin Center.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | In the left pane, select Apps and click App protection Policies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3  | Select Create policy and choose Android or iOS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4  | Enter a name for the protection policy and click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 5  | Select the target device type: Managed or Unmanaged.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 6  | Click Select public apps, enter **Webex for Intune**or **Webex Meetings** in the search field, depending on the services you want to host on the mobile device.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 7  | Select an appropriate option and click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 8  | For Data protection, choose the restrictions as referenced below. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455170.jpg) See **Data protection settings** for more information: [iOS/iPadOS app protection policy settings - Data protection](https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-ios#data-protection) [Android app protection policy settings - Data protection](https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-android#data-protection)                                                                                                                                                                                                                                                                                |
| 9  | (Optional) To create exemptions to the policy Select apps to exempt. Use this option if you need to configure exemptions for Webex applications. You can choose which unmanaged apps can transfer data to and from managed apps. For unmanaged Webex applications, use the following strings for the Value field on your policy's exemption list: **Webex App for iOS/iPadOS**: create a data transfer exception for the URL protocol webex. The webexteams protocol may also work for backwards compatibility. **Webex App for Android**: add a data transfer exception for the app package name com.cisco.wx2.android **Webex App for Android (Intune version)**: add a data transfer exception for the app package name com.cisco.wx2.android.msintune **Webex Meetings for Android**: add a data transfer exception for the app package name com.cisco.webex.meetings |
| 10 | After configuring the settings, click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 11 | For Access requirements, configure a PIN and credential requirements.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 12 | For Conditional launch, click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 13 | For Assignments, assign the policy to a Webex user group and then click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 14 | Review the settings you have entered and click Create.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Check application protection policy

Check App Protection Policies in Microsoft Intune to confirm that your app protection policy is properly applied.

| 1 | Sign in to Microsoft Endpoint Manager Admin Center.                                                                                                                                                                                         |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the left pane, select Apps and click App Protection Policies.                                                                                                                                                                            |
| 3 | Select the App Protection Policy you want to check and verify that users are checked in and the policy is applied. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455247.jpg) |

## Approve user access

| 1 | Users are prompted to request access when they sign in to Webex for the first time. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455172.jpg)            |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Administrators can grant permission for users to access the app from the Azure Enterprise App. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455173.jpg) |

## Supported policies

Microsoft Intune supports the following policies with Webex for Intune on managed devices: 

- Passcode/TouchID—Allow users to set up a Passcode or TouchID. The user is prompted to enter a passcode when they launch Webex App from a mobile device.
- Maximum PIN attempts—Define the maximum number of times a user can enter an incorrect PIN.
- Managed Open-In/Document Sharing—Allow sharing of documents from Webex for Intune to other policy-managed apps.
- Prevent App Backup—Prevent users from saving Webex data to Android back-up service or iCloud for iOS.
- Disable Screen Capture—Block screen capture and Google assistant capabilities. For iOS devices, use the iOS restrictions option in Intune.
- Remotely Wipe App—Allow administrators to remotely wipe Webex for Intune from a mobile device.
- Disable Copy and Paste—Prevent users from using copy and paste between Webex for Intune and other apps. However, you can allow copy and paste with other corporate policy-managed applications.
- Disable Save Copies of Org Data—Block users from saving Webex for Intune data on local devices. Administrators can select services, such as OneDrive or SharePoint, to store Webex for Intune data.
- Unlocked devices—Restrict users from running Webex for Intune on devices which have been unlocked (Jailbroken or rooted), to gain administrative or root access controls.
- Minimum App version—Define the minimum version required for Webex for Intune to run on mobile devices.

## Known limitations

### Impact of PIN policy setting on Notifications

When you enable the PIN requirement in your App Protection policy, some users may experience missed calls or notifications. The Intune SDK locks the app behind the required PIN or biometric gate enforced by this policy. This prevents notifications from being fully processed or displayed until these checks are bypassed.
