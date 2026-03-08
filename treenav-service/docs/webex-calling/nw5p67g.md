---
title: "Webex App | Installation and automatic upgrade"
product: "Webex Calling"
article_id: "nw5p67g"
url: "https://help.webex.com/en-us/article/nw5p67g"
last_updated: "2026-03-05"
description: "As an administrator, you can install Webex App using the MSI file on Windows or
the DMG file on Mac. You can include command line parameters to improve user
experience. Webex App periodically checks for newer versions to automatically
upgrade the app. If your organizations uses Webex for Government, see Webex for
Government app installation instead."
tags: ["webex-calling", "webex-meetings", "webex-messaging", "webex-suite", "webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# Webex App | Installation and automatic upgrade

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

[Download the installer](#Cisco%5FReference.dita%5F7f297b3d-e764-4f24-af5b-4cd41da90668)

- [Windows](#Cisco%5FReference.dita%5F1712e9db-938f-48af-90d1-63db6a4468aa)
- [Mac](#Cisco%5FReference.dita%5F1b73bf74-1da0-4e2f-8e3b-e13bfbd89e49)

As an administrator, if you want to access a specific version of the app, use one of the following links:

- Localized 64-bit version: <https://binaries.webex.com/WebexOfclDesktop-Win-64-Gold/Webex.msi>
- Non-localized 64-bit version: <https://binaries.webex.com/WebexOfclDesktop-Win-64-Gold/Webex%5Fen.msi>
- Localized Arm 64 version: <https://binaries.webex.com/WebexOfclDesktop-Win-Arm-64-Gold/Webex.msi>
- Non-localized Arm 64 version: <https://binaries.webex.com/WebexOfclDesktop-Win-Arm-64-Gold/Webex%5Fen.msi>

You can download installers from the following links:

- For Macs with Apple silicon chips:

  - .pkg: <https://binaries.webex.com/webex-macos-apple-silicon/Webex.pkg>
  - .dmg: <https://binaries.webex.com/webex-macos-apple-silicon/Webex.dmg>
- For Macs with Intel chips:

  - .pkg: <https://binaries.webex.com/webex-macos-intel/Webex.pkg>
  - .dmg: <https://binaries.webex.com/webex-macos-intel/Webex.dmg>

[Install Webex](#Cisco%5FReference.dita%5Fde4f9295-316d-4e1c-8f47-329ddfdb984d)

This article is about installing the desktop version of Webex App for Mac or Windows. For Linux, see [Webex App for Linux](https://help.webex.com/9vstcdb).

- [Windows](#reference%5F3A634C4F31D1EA096190EA40EA15CDE4)
- [Mac](#reference%5F89BE14EF623A0CED99D149416E8E7551)

Webex App installs to the same system folder every time it updates to a new version. 

To find the installed version of Webex App, see [Find your App version](https://help.webex.com/njpf8r5).

Administrators can check what version of the app their users have by running the Messaging App Version Report, see [Reports for your Cloud Collaboration portfolio](https://help.webex.com/nmug598).

### Manual install

You can install Webex App either per computer or per user. Either the users of an IT administrator can install it. 

Webex App installs to the following folder by default: `%LocalAppData%\Programs\Cisco Spark`.

**Users** can [download](https://www.webex.com/downloads.html) and then run the installer file (msi). They don't need administrator access privileges on their computer.

**Administrators** can run the installer with extra privileges and can choose per computer installation and the installation directory.

### Which MSI install package should I use?

These are the differences between the packages:

- **Localized or non-localized package:** Users can choose a localized package if they want Webex App to install in the language of their operating system.  
As an administrator doing a bulk install with a third-party distribution mechanism, you must deploy a non-localized package. Users can still use Webex App in their preferred language (if Webex supports that language).  
If you bulk install Webex App with a localized package, you may have trouble when uninstalling Webex App.
- **App only package:** You can choose this option in most situations. The package installs only Webex App. Webex App downloads the desktop meeting app components if necessary.  
There are some exceptions when you may need the bundle instead.
- **Bundle package:** This package installs both Webex App and the desktop meetings app. Only use the bundle package in the following situations:

  - You’re installing in a secure environment that blocks the users' computers from downloading software. If Webex App can't download meetings components, people may have usability problems joining meetings with the app.
  - You haven’t yet fully migrated to Webex App and your users still need the separate desktop Meetings app.

__Table 1\. Webex App install packages for Windows__
| Description                           | Is localized?      | OS architecture | Install package download link                                                                                                                     |
| ------------------------------------- | ------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Webex App only                        | Localized          | 64 bit          | <https://binaries.webex.com/WebexOfclDesktop-Win-64-Gold/Webex.msi>                                                                               |
| Webex App only                        | Non-localized (EN) | 64 bit          | [https://binaries.webex.com/WebexTeamsDesktop-Windows-Gold/Webex\_en.msi](https://binaries.webex.com/WebexOfclDesktop-Win-64-Gold/Webex%5Fen.msi) |
| Webex App and desktop meetings bundle | Localized          | 64 bit          | <https://binaries.webex.com/Webex-Desktop-Windows-x64-Combined-Gold/WebexBundle.msi>                                                              |
| Webex App and desktop meetings bundle | Non-localized (EN) | 64 bit          | <https://binaries.webex.com/Webex-Desktop-Windows-x64-Combined-Gold/WebexBundle%5Fen.msi>                                                         |
| Webex App only                        | Localized          | Arm 64          | <https://binaries.webex.com/WebexOfclDesktop-Win-Arm-64-Gold/Webex.msi>                                                                           |
| Webex App only                        | Non-localized (EN) | Arm 64          | <https://binaries.webex.com/WebexOfclDesktop-Win-Arm-64-Gold/Webex%5Fen.msi>                                                                      |

### Bulk install

Examples here use the msiexec utility from Microsoft. See <https://docs.microsoft.com/en-us/windows/win32/msi/using-windows-installer> for more details.

These are the command-line parameters you can use with a Webex App MSI install package:

- **Installation context**  
When you set `ALLUSERS=1` to specify a per computer installation, you must have administration access privileges. See <https://docs.microsoft.com/en-us/windows/win32/msi/allusers> for more details.
- **Silent installation**  
You can include `/qn` to install without user interaction. For example: `msiexec /i c:\work\Webex.msi /qn`.
- **ACCEPT\_EULA**  
Set this property TRUE to accept the end-user license agreement on behalf of users. The installer doesn't prompt users to accept the end-user license agreement.  
For example: `msiexec /i c:\work\Webex.msi ACCEPT_EULA=TRUE ALLUSERS=1`.  
The end-user license agreement doesn't appear when you set either of the following registry entries to `eula-disabled`:

  - `HKEY_LOCAL_MACHINE\Software\CiscoCollabHost\Eula Setting`
  - `HKEY_LOCAL_MACHINE\Software\WOW6432Node\CiscoCollabHost\Eula Setting`
- **AUTOSTART\_WITH\_WINDOWS**  
Specifies whether Webex App automatically runs when Windows starts up.  
The default value is `TRUE`. You need administrative privileges to change it.  
Examples:

  - `msiexec /i c:\work\Webex.msi AUTOSTART_WITH_WINDOWS=true ALLUSERS=1`  
  Webex App automatically starts when Windows starts up (default). This setting enables and grays out the Start Webex when my computer starts control, so the user can't change it.
  - `msiexec /i c:\work\Webex.msi AUTOSTART_WITH_WINDOWS=false ALLUSERS=1`  
  Webex App doesn't automatically start with Windows. Users can change Start Webex when my computer starts in the Webex App settings.
- **DEFAULT\_THEME**  
Specifies the theme used for the Webex App.  
The default value is `Dark`. You need administrative privileges to change it.  
Users can change the theme in Webex settings.  
Examples:

  - `msiexec /i c:\work\Webex.msi DEFAULT_THEME="Light" ALLUSERS=1`  
  Specifies the light theme for Webex App.
  - `msiexec /i c:\work\Webex.msi DEFAULT_THEME="Dark" ALLUSERS=1`  
  Specifies the dark theme for Webex App.
- **DELETEUSERDATA**  
Specifies whether to delete or retain user database and log files.  
The default value is `0` which retains the database and logs during install.  
Examples:

  - `msiexec /i c:\work\Webex.msi DELETEUSERDATA=1 ALLUSERS=1`  
  Removes user database and logs during install.
- **EMAIL**  
This parameter allows you to streamline the Webex App sign-in process for users by specifying their email address or a pattern that indicates how to derive the email address.  
For example: `msiexec /i c:\work\Webex.msi EMAIL=acassidy@example.com`prepopulates acassidy@example.com into the Webex sign-in flow.  
You can use the following values with the EMAIL parameter:

  - User's email address (example: acassidy@example.com)—Sets an actual email address to prepopulate the sign-in flow. Don't use with the ALLUSERS=1 parameter because it represents just one email address. This isn't recommended for devices that have multiple users.  
  For example: `msiexec /i Webex.msi EMAIL=$acassidy@example.com`
  - $userPrincipalName—Instructs Webex to retrieve the user's User Principal Name (UPN) from Windows at the time of sign in. You can use this for devices with multiple users.  
  For example: `msiexec /i Webex.msi EMAIL=$userPrincipalName ALLUSERS=1`
  - $mail—Instructs Webex to retrieve the user's email address, if available, from LDAP/Active Directory at the time of sign in. You can use this for devices with multiple users.  
  For example: `msiexec /i Webex.msi EMAIL=$mail ALLUSERS=1`
  - $SAMAccountName—Instructs Webex to retrieve the user's SAMAccountName from Windows at the time of sign in. This is typically used for legacy environments. You can use this for devices with multiple users.  
  For example: `msiexec /i Webex.msi EMAIL=$SAMAccountName ALLUSERS=1`  
Combining the EMAIL parameter with an authentication method, such as Kerberos or mTLS, allows users to sign in automatically.  
When you use the EMAIL parameter, users can't change the Webex identity they use to sign in.
- **ENABLEOUTLOOKINTEGRATION**  
Specifies whether Webex App registers with Microsoft Outlook for presence integration. You need administrative privileges to change it.  
The default value is `0`.  
Examples:

  - `msiexec /i c:\work\Webex.msi ENABLEOUTLOOKINTEGRATION=1 ALLUSERS=1`  
  Webex App registers with Microsoft Outlook for presence integration on Windows.  
  Users can change Connect Webex to Microsoft Outlook in Webex settings.
  - `msiexec /i c:\work\Webex.msi ENABLEOUTLOOKINTEGRATION=0 ALLUSERS=1`  
  Webex App doesn’t register with Microsoft Outlook for presence integration on Windows (default).  
  This setting grays out (disables) the Connect Webex to Microsoft Outlook control for all users. You must have administration access privileges to change this option.
- **FORCELOCKDOWN**  
Applies only to the bundle install packages. Locks the meetings desktop app if it’s a compatible version with the meeting site. You need administrative privileges to change it.  
Example: `msiexec /i WebexBundle.msi FORCELOCKDOWN=LockWhenCompatible`
- **INSTALL\_ROOT**  
Specifies the install folder for the Webex App.  
Example: `msiexec /i c:\work\Webex.msi INSTALL_ROOT="C:\Program Files\Cisco Spark" ALLUSERS=1`
- **INSTALLWV2**  
Installs the WebView2 embedded browser from Microsoft when installing Webex App.  
Webex App requires this embedded browser. [Learn more about WebView2 and Webex](https://help.webex.com/en-us/article/nzpgci2/Webex-App-%7C-WebView2-requirement).  
Example: `msiexec /i c:\work\Webex.msi INSTALLWV2=1`

- **FORCECLIENTSPCOMPATIBLEVERSIONNO**  
Applies only to the bundle install packages. This parameter extends the Webex Meeting client version to be compatible with the meeting site. Webex Meeting client gets a version number that’s greater among the `ClientSPCompatibleVersionNo` or `ForceClientSPCompatibleVersionNo`. You need administrative privileges to change it.  
For example: `msiexec /i WebexBundle.msi FORCECLIENTSPCOMPATIBLEVERSIONNO=10`

- **PREVENT\_PRELOGIN\_UPDATES**  
This parameter can be used to ensure that Webex App only updates after the user signs in. By default, Webex App checks for software updates both pre-signin and post-signin. Only post-signin updates can be guaranteed to follow organization settings for updates, since in the pre-signin case the user's organization is not known.  
The Webex App won’t check for updates if either of the following registry entries is set to 1:

  - `HKEY_CURRENT_USER\Software\Cisco Spark Native\PreventPreloginUpdates`
  - `HKEY_LOCAL_MACHINE\Software\Cisco Spark Native\PreventPreloginUpdates`  
For example: `msiexec /i c:\work\Webex.msi PREVENT_PRELOGIN_UPDATES=1 ALLUSERS=1`

### Running the app

Webex App has its own automatic update solution that’s independent from the Windows operating system. The app can automatically update without the knowledge of the Windows operating system, so the installed version of the app may be different from the version the user sees while using the app.

### Installing

To install Webex App, users don't need to have administrator access privileges on their computers.

Users double-click the `Webex.dmg` file to install it. By default, you install Webex App in the Applications folder, however users can drag and drop Webex App to any other directory.

To check the installed version of Webex App, see [Find Your App Version](https://help.webex.com/article/njpf8r5).

Administrators can check what version of the app their users have by running the Messaging App Version Report, see [Reports for your Cloud Collaboration portfolio](https://help.webex.com/article/nmug598/).

### Bulk install

As an administrator, you can use the Mac `defaults` command with the `LoginHint` argument to prepopulate Webex App with the user's email:

```
defaults write Cisco-Systems.Spark LoginHint -string "<user-email@example.com>"
```

In this command, user email serves as a login hint to autoadvance to password entry screen, post app install and launch.

To disable the prepopulating, use the following command:

```
defaults delete Cisco-Systems.Spark LoginHint
```

### Audio driver to share computer audio

Webex App needs a special audio driver to share the computer audio. Administrators can preinstall the drivers on the end-user computers. Refer to [Cisco Webex Audio Driver Package Download for Mac](https://help.webex.com/article/WBX9000031110/Cisco-Webex-Audio-Driver-Package-Download-for-Mac)for instructions.

If the users don't have the driver installed, then Webex App downloads it when you click **Optimize for motion and video** or **Share your computer audio** in Webex App. But the user must have administator permission to install the driver. 

### Running the app

The app has its own autoupdate solution, independent from the operating system's installation mechanism. You only install the app once using the operating system mechanism. After that, the app automatically updates without the knowledge of the operating system. Therefore, the installed version of the app might be a different version than the one you see while using the app. 

[Update process](#Cisco%5FReference.dita%5F658ec170-8b7a-4007-86d7-454c13e35ef8)

A new release takes 7 days to roll out to everyone. During those 7 days, users can proactively check for updates. Users can read [Update the app to the latest release](https://help.webex.com/g1otrv).

We automatically apply the update after the 7 days rollout window.

If you have Pro Pack for Control Hub, you can check what version of the app your users are on. See the _Messaging App Version Report_ in [Analytics for your cloud collaboration portfolio](https://help.webex.com/n0rlwxe/).

When Webex App is running1, it periodically checks to see if there’s a newer version of the app available. When a newer version becomes available, the app automatically downloads the new version and stores it on the local computer:

- On **Windows**:  
`C:\Users\<username>\AppData\Local\CiscoSparkLauncher`  
`C:\Users\<username>\AppData\Local\CiscoSpark`  
`C:\Users\<username>\AppData\LocalLow\WebEx`  
` C:\Users\<username>\AppData\Local\WebEx`
- On **MacOS**:  
`~/Library/Application Support/Cisco Spark`

We store the current version and the new version of the application in these folders. If the upgrade doesn't work out, then the app can fall back.

If we release a patch for a release, we update all organizations within a three-day rollout window.

1. Webex App checks for updates while it’s running, even if the user is not signed in.  
If the user is not signed in when an update is possible, the update behavior depends on who was last using Webex App:

  - If that user was signed in, the app updates itself according to the update policy of their organization. See [Product update controls](https://help.webex.com/wlgw73/).
  - If that user didn’t sign in, the app updates itself to the latest version. (They could be using Webex App to join meetings as a guest).

[Administrator controls to manage releases](#Cisco%5FReference.dita%5F4a51e987-d3fe-4f03-8cf2-d1e5fa494963)

You can set the frequency of Webex App updates with the [Product update controls](https://help.webex.com/wlgw73/).

[Uninstall the Webex App](#Cisco%5FReference.dita%5F15ebea03-201c-4bf4-bd32-4e477710773e)

- [Windows](#Cisco%5FReference.dita%5F18982726-93e4-4ac3-91ff-938d291e2853)
- [Mac](#Cisco%5FReference.dita%5Fd958d22d-f4cd-4c36-a10d-c57c8d46bccd)

To uninstall the app use `msiexec /x Webex.msi`.

The path of the `.msi` file depends on where it was used during installation. For this command to work, the `.msi` file must be present in the specified location.

You can easily uninstall Webex App on your Mac using the [Webex Uninstaller](https://help.webex.com/article/136hu4).

[Deployment for Virtual Desktop Infrastructure (VDI)](#Cisco%5FReference.dita%5Fda14a75f-1299-4798-8f00-de60b80015f0)

The Webex App virtual desktop app optimizes the audio and video for the virtual desktop environment. Using a thin client, users access Webex App from a remote virtual desktop environment.

You can find the Webex App for Windows VDI software downloads from <https://www.webex.com/downloads/teams-vdi.html>

For more information on supported features, how to prepare your environment, and deploy the Webex VDI solution, refer to the [Deployment guide for Webex for Virtual Desktop Infrastructure (VDI)](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/wbxt/vdi/wbx-teams-vdi-deployment-guide.html).

[Deploy Webex App on mobiles](#Cisco%5FReference.dita%5Ffda065ac-6389-42a4-b773-cee10b797cb7)

As an administrator you can secure the Webex App app on your user's mobile devices. The solutions we support include MDM/MAM with Microsoft Intune, MDM/MAM with AppConfig, app wrapping using the iOS IPA files and the Android AAB files, and admin controls for mobile management

For more information, see [Secure mobile devices](https://help.webex.com/alsshfb/).
