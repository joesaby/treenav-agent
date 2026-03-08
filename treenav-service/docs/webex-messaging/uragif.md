---
title: "Webex for Government app installation"
product: "Webex Messaging"
article_id: "uragif"
url: "https://help.webex.com/en-us/article/uragif"
last_updated: "2026-02-27"
description: "As a Webex administrator, you can install Webex App using the MSI file on
Windows or the DMG file on Mac. You can include command-line parameters with the
MSI file on Windows to improve user experience. You can also install Webex App
on Android and iOS devices."
tags: ["webex-messaging"]
source: "help.webex.com"
---

# Webex for Government app installation

**_Webex for Government sign-in screens_**

## Set up the Webex for Government app

###  Before you begin

Familiarize yourself with Webex for Government: [Get started with Webex for Government](https://help.webex.com/article/ybobxq/). 

Set up your organization to use Webex for Government: [Set up your Webex for Government organization](https://help.webex.com/article/wmhul0/).

[System requirements](#Cisco%5FReference.dita%5Fde900cc1-f16e-40c3-86d6-f65e4ad28c8c)

- We continually review the minimum requirements to run Webex App, and the requirements listed here may change.
- We don't support using Webex App with pre-release or early release programs, such as the Apple Beta Software, Windows Insider Program, or any other similar programs.
- The performance of Webex App can be influenced by factors beyond the operating system, for example: network connectivity or other applications on your devices.
- Ensure that your system time is correct, as this may impact you joining meetings or calls.

### Windows recommended minimum system requirements

- **Windows**  

  - Windows Server 2016.
  - Windows 10 and later. Make sure your drivers are up to date.  
  Webex App 45.1 is the last version to support Windows 10 LTSB 2015\.  
  Webex App 45.10 is the last version to support Windows 10 LTSB 2016\.

- For further information on the latest drivers for some graphic products, see the following:

  - [How to find the latest compatible for an AMD graphics product](https://www.amd.com/en/support/kb/faq/gpu-56)
  - [NVIDIA driver downloads](https://www.nvidia.com/Download/index.aspx)
  - [Intel downloads for graphics drivers](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)  
For Windows 10 or later N editions, you must install the Media Feature Pack. For installation instructions, see [Media Feature Pack list for Windows N editions](https://support.microsoft.com/en-gb/topic/media-feature-pack-list-for-windows-n-editions-c1c6fffa-d052-8338-7a79-a4bb980a700a).
- Processor:
  - Intel Dual-Core CPU 2.XX GHz or AMD processor (4 GB of RAM minimum recommended).
  - Arm64: Qualcomm Snapdragon X Elite/X Plus or Microsoft SQ1 or newer.
- Some features require additional system requirements:

  - Reactions in a scheduled Webex Meeting or Personal Room meeting.

    - Operating System—Windows 10 version 10.0.17763 or later
    - Processor—four physical cores or more
    - Memory—4 GB or more of RAM
  - Virtual or blurred background in calls and meetings and gestures in meetings

    - Operating System—Windows 10 64-bit  
      If you're in a VDI environment, make sure you're using a supported platform for virtual backgrounds. See the [VDI Release Notes](https://help.webex.com/ntp1us7/) for more information.
    - Processor:

      - Intel Core i3, i5, or i7 4000 series processor or higher (when less than 4 cores)
      - Intel Core i9 dual-core processor or higher
      - Intel Xeon dual-core processor or higher
      - Intel Pentium Silver: 4 cores or higher
      - Intel Processor: 4 cores or higher
      - Other Intel processors: 6 cores or higher
      - AMD Ryzen 5, 7, 9, or higher
      - Other AMD processor: 4 cores with at least 3.0 GHz; OR 4 cores or higher
      - Apple processor: 4 cores or higher
      - Non-Intel, non-AMD, or non-Apple processors: 8 cores or higher
    - Memory:

      - 8 GB or more of RAM
      - 2 GB or more of VRAM for dedicated GPUs
    - **Microsoft Edge WebView2** component.  
      This improves bandwidth consumption for updates with a reduced app size. Provides the capabilities to make memory improvements.  
      [Download either the Evergreen Bootstrapper or the Evergreen Standalone Installer](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section).

### Mac desktop minimum requirements

- MacOS 12 and later [on a supported Mac](https://support.apple.com/kb/sp742?locale=en%5FUS).  
MacOS Sequoia 15 is only supported on Webex App version 44.9 and later.

[Install Webex App on a Windows desktop](#generic-template%5F69c6217e-52c8-4788-b822-1d04b95e131b)

### FIPS registry key use (recommended)

Your organization may require you to run the Webex App in FIPS mode. To do so, set the following registry key to 1 (DWORD value) on user computers:

```
HKLM\SYSTEM\CurrentControlSet\Control\Lsa\FipsAlgorithmPolicy\Enabled
```

To change this setting, you must have HKLM registry access. Typically, an administrator or user with admin privileges has this access.

Since this is an OS-level setting, we recommend that you evaluate its impact on your other Windows applications before rolling it out across your organization. 

If you don’t enable the registry key, note the following: 

- You don't lose any Webex App functionality.
- We still support your organization.
- Webex App still uses FIPS-compatible algorithms and TLS 1.2\. However, the operating system libraries (such as WinHTTP) don't run in FIPS mode.

### Choose your deployment option on Windows

To enable Webex App to connect to the Webex for Government cloud for your users, choose the appropriate option for your needs.

- [MSI deployment](#task-template%5F06bbe48b-426d-456b-b68a-28cf6a1a2321)
- [FedRampEnabled registry key deployment](#task-template%5F6579b760-6155-43db-84b5-3019037fd851)

Do these steps if you prefer deploying the Webex App as an administrator-controlled MSI install. 

To perform this action, you must have HLKM registry access. Typically, an administrator or user with admin privileges has this access. The FEDRAMPENABLED setting causes the installer to write to the HLKM area of the registry. 

Before you begin

Enable the FIPS registry key, if necessary.

| 1 | Download the installer using the applicable link. Localized 64-bit version: <https://binaries.webex.com/WebexOfclDesktop-Win-64-Gold/Webex.msi>Non-localized 64-bit version: <https://binaries.webex.com/WebexOfclDesktop-Win-64-Gold/Webex%5Fen.msi>Localized Arm 64 version: <https://binaries.webex.com/WebexOfclDesktop-Win-Arm-64-Gold/Webex.msi>Non-localized Arm 64 version: <https://binaries.webex.com/WebexOfclDesktop-Win-Arm-64-Gold/Webex%5Fen.msi> |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | To enable usage of the Webex for Government cloud environment, run msiexec with the FEDRAMPENABLED=1 option along with any other options that you need. msiexec /i WebexTeams.msi FEDRAMPENABLED=1 ALLUSERS=1                                                                                                                                                                                                                                                    |

Do this task if you want users to download and install the Webex App MSI themselves, while ensuring that they connect to the Webex for Government cloud. 

To perform this action, you must have HLKM registry access. Typically, an administrator or user with admin privileges has this access. 

Before you begin

Enable the FIPS registry key, if necessary. 

| 1 | Set the following registry key to 1 (DWORD value): HKLM\\Software\\Cisco Spark Native\\FedRampEnabled |
| - | ----------------------------------------------------------------------------------------------------- |
| 2 | After you set the registry key, ensure that all users sign out and sign back in.                      |

[Choose your install option on a Mac desktop](#generic-template%5F32c8a3e3-3d3b-44bb-97ca-ef6486c804e0)

- [MDM deployment (recommended)](#task-template%5F8fbbc176-c491-44ba-9696-8a11eddca333)
- [Deploy with defaults command](#task-template%5F5f8b5df0-c70f-4213-9802-793494cf240b)

We recommend this approach to configure FIPS and FedRAMP modes for MacOS. Deploy an MDM configuration profile that contains these settings. The exact details for configuring this depend on your MDM solution.

| 1 | You can download installers from the following links: For Macs with Apple silicon chips: .pkg: <https://binaries.webex.com/webex-macos-apple-silicon/Webex.pkg>.dmg: <https://binaries.webex.com/webex-macos-apple-silicon/Webex.dmg> For Macs with Intel chips: .pkg: <https://binaries.webex.com/webex-macos-intel/Webex.pkg>.dmg: <https://binaries.webex.com/webex-macos-intel/Webex.dmg> |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Set the following two Boolean keys to true in the preference domain Cisco-Systems.Spark: FipsEnabled FedRampEnabled ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/453001-454000/453075.jpg)                                                                                                                                                  |

If you don't have an MDM solution, you can change the default values for FIPS and FedRAMP using the `defaults` command. The end user can potentially override values set through defaults, so we recommend using MDM when possible. 

| 1 | Enter the following commands to direct Webex App to connect to the Webex for Government cloud: defaults write Cisco-Systems.Spark FedRampEnabled -bool true defaults write Cisco-Systems.Spark FipsEnabled -bool true |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | (Optional) If you want to prepopulate the app with your user's email, add the LoginHint argument: defaults write Cisco-Systems.Spark LoginHint -string "<user-email@example.com>"                                     |

What to do next

To disable any of these settings, use `defaults delete`, for example:

```
defaults delete Cisco-Systems.Spark LoginHint
```

[Sign in for the first time on the desktop](#task-template%5F593d011f-5b42-412a-b4f1-e058f4b5c24e)

| 1 | Start Webex App.                                                                                                                                                                                                                                            |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the down arrow beside Webex and select Webex for Government from the list. Webex App restarts to take you to the FedRAMP sign-in page. That page directs the authentication to the Webex for Government identity service and enables FIPS 140-2 mode. |
| 3 | Enter your email address and check I agree to terms and conditions, then click Next to sign in. The first time you sign in, you must set up a password.                                                                                                     |

[Install Webex App on a mobile device](#task-template%5Fbc1a9d0c-6f35-4ca0-b288-041dd08fab20)

Your administrator doesn't perform any special tasks to set up or connect to the Webex for Government cloud from the mobileWebex App. Your users must sign in for the first time using the following method. To use MDM/MAM or app wrapping options on user mobile devices, see the [Webex | Secure Mobile Devices](https://help.webex.com/article/alsshfb/) help article. 

| 1 | Download Webex App: iPhone and iPad— [App Store for iPhone and iPad](https://apps.apple.com/us/app/cisco-spark/id833967564)Android— [Google Play ](https://play.google.com/store/apps/details?id=com.cisco.wx2.android) |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Start Webex App, then tap Get Started.                                                                                                                                                                                  |
| 3 | Tap the down arrow beside Webex to open the App Configurationpanel.                                                                                                                                                     |
| 4 | Select Webex for Government from the list. Webex App restarts to take you to the FedRAMP sign-in page. That page directs the authentication to the Webex for Government identity service and enables FIPS 140-2 mode.   |
| 5 | Enter your email address and check I agree to terms and conditions, then click Next to sign in. The first time you sign in, you must set up a password.                                                                 |

[Uninstall the Webex App](#Cisco%5FReference.dita%5F15ebea03-201c-4bf4-bd32-4e477710773e)

- [Windows](#Cisco%5FReference.dita%5F18982726-93e4-4ac3-91ff-938d291e2853)
- [Mac](#Cisco%5FReference.dita%5Fd958d22d-f4cd-4c36-a10d-c57c8d46bccd)

To uninstall the app use `msiexec /x Webex.msi`.

The path of the `.msi` file depends on where it was used during installation. For this command to work, the `.msi` file must be present in the specified location.

You can easily uninstall Webex App on your Mac using the [Webex Uninstaller](https://help.webex.com/article/136hu4).
