---
title: "Webex App for Linux"
product: "Webex Messaging"
article_id: "9vstcdb"
url: "https://help.webex.com/en-us/article/9vstcdb"
last_updated: "2025-10-21"
description: "Webex App is available for Linux. Linux users and community can use Webex App
for messaging, meeting, and one-to-one calling in work and educational settings."
tags: ["webex-messaging"]
source: "help.webex.com"
---

# Webex App for Linux

- [Overview](#Cisco%5FConcept.dita%5Fbf52af8b-96ef-46c1-9b08-368ca4b65cd3)
- [Ubuntu](#Cisco%5FReference.dita%5F86ea12dd-8b6c-4c57-bcdf-63878239b931)
- [Red Hat](#Cisco%5FReference.dita%5F08bdf005-c308-4bc3-9f4a-7feb8f5b96f4)

All the core Webex capabilities are supported in a single app to help you seamlessly collaborate. We're continuing to work towards supporting the same features that are available on Webex App for Windows with what's available on Webex App for Linux. 

## Linux distribution support

We support the following distros:

- Ubuntu 22.04 and 24.04.
- RHEL 8.2 and 8.3

Webex App 45.6 was the last version to support Ubuntu 18.04 and 20.04\. See [Webex App support policy](https://help.webex.com/article/ne3khsm/Webex-App-support-policy) for the end of life schedule for 45.6.

## Release schedule

From October 2025, we will release the Linux client every other month. The release schedule and associated version numbers are:

- October, version 4x.10 (so October 2025 release is version 45.10)
- December, version 4x.12
- February, version 4x.2

## Coming soon

The Webex App for Linux will soon support the following features:

- RHEL 8.10 support
- Screen sharing with Wayland
- App sharing with Wayland
- Virtual backgrounds

## Recommended minimum system requirements

- Core requirements: Intel Dual-Core CPU 2.XX GHz or AMD processor (4 GB of RAM minimum recommended)
- Display Protocols: x11 and Wayland
- Desktop environment/Window Manager: GNOME/Mutter and KDE/KWin recommended.

## Accessibility

To support the Orca screen-reader, you must include `ACCESSIBILITY_ENABLED=1` in your environment.

## Known issues

- The following are the supported protocol handlers:
  - webexteams:
  - ciscospark:
  - webex:
- The Webex App for Linux is not supported in Webex for Government.
- Tile-based window managers are not supported by Webex App.  
With i3 window manager installed or other tiled window managers, you can experience some odd behavior with the reply or edit message windows. Such as windows intermittently disappearing, windows not positioned correctly on screen, windows may appear floating on top of the app.  
You can apply some workarounds to prevent the windows disappearing:

  - For i3 window managers, in the i3-msg config file set "focus\_follows\_mouse no". This will apply to focus on all apps.
  - For KDE, in the KDE 3.5 Control Center, select Desktop \> Window Behavior, click Advanced tab, and un-check Hide utility windows for inactive applications.
- Currently only 16-bit depth audio input is supported. Microphones with 24-bit sampling aren't expected to be compatible.
- Users on tiling window managers, such as i3, may experience focus issues when trying to search. It may require several mouse clicks into the search box to regain focus after typing.
- Configuring proxies using KDE System Settings is not currently supported.
- Changing scaling using fractional scaling in the system settings isn't supported.
- To use EPOS headsets with Webex App for Linux, RedHat users must do the following:

  1. [Download](https://www.webex.com/downloads.html) the latest webex.rpm version of Webex App
  2. Uninstall the previous version
  3. Use administrator privileges (sudo command) to reinstall the new version of the app

## X11 limitations when sharing your screen or application

- When you share certain applications, such as Google Chrome, the red border displays a shadow effect around the application window.
- You're unable to change your system display settings while sharing your screen or application.
- The resolution of the area you're sharing must be less than or equal to 4096 x 4096 p, regardless of what you're sharing.

## Install

**Install** 

| 1 | Go to <http://webex.com/downloads.html> to download the app.            |
| - | ----------------------------------------------------------------------- |
| 2 | Install the app from the command line: sudo apt-get install ./Webex.deb |

## Verify signature

**Verify signature** 

You can verify the cryptographic signatures. The key webex\_public.key is available on this [downloads page](https://binaries.webex.com/WebexDesktop-Ubuntu-Official-Package/webex%5Fpublic.key). 

| 1 | Import the public key: gpg --import webex\_public.key          |
| - | -------------------------------------------------------------- |
| 2 | Install the dpkg-sig package sudo apt-get install dpkg-sig     |
| 3 | Check the cryptographic signature: dpkg-sig --verify Webex.deb |

## Remove

**Remove** 

| sudo apt-get remove webex |
| ------------------------- |

## Install

**Install** 

| 1 | Go to <http://webex.com/downloads.html> to download the app.           |
| - | ---------------------------------------------------------------------- |
| 2 | Install the app from the command line: sudo yum localinstall Webex.rpm |

## Verify signature

**Verify signature** 

An admin can verify the cryptographic signatures, the key webex\_public.key is available with the package on the [downloads page](https://binaries.webex.com/WebexDesktop-CentOS-Official-Package/Webex.rpm). 

| 1 | Import the key sudo rpm --import webex\_public.key |
| - | -------------------------------------------------- |
| 2 | Verify the signature rpm --checksig Webex.rpm      |

## Remove

**Remove** 

| sudo yum remove webex |
| --------------------- |
