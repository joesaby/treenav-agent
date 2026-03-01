---
title: "Webex Meetings System Requirements and Cross-Platform Information"
product: "Webex Meetings"
article_id: "n6rk5el"
url: "https://help.webex.com/en-us/article/n6rk5el/Webex-Meetings-System-Requirements-and-Cross-Platform-Information"
last_updated: "2025-12-09"
description: "Webex Meetings is supported on specific versions of Windows, Mac, iPhone, iPad,
Android, and Web."
tags: ["webex-meetings", "webex-support", "webex-webinars", "webex-events-(classic)", "webex-training"]
source: "help.webex.com"
---

# Webex Meetings System Requirements and Cross-Platform Information

## Webex Meetings Suite System Requirements 

### Operating system and browser support for the Webex Meetings Suite

#### Supported operating systems

**Windows** 

- Windows Server 2008 64-bit
- Windows Server 2008 R2 64-bit
- Windows 10
- Windows 10 Enterprise LTSB
- Windows 11

**Notes:** 

- Windows OS support on Microsoft Surface Pro is supported.
- Each Webex Meetings monthly release is tested and certified against the current preview of monthly rollup and all semi-annual Windows 10 releases.
- Webex Meetings supports Windows Server 2012 R2 and 2016 with limitation that, for Webex meetings, Productivity Tools, and the desktop application, if a user doesn't have administrator privileges, then an administrator is required to install the Webex Meetings applications and Productivity Tools.

**Mac OS X** 

- 10.15
- 11.0 (Big Sur)
- 12.0 (Monterey)

- FedRAMP-compliant Webex Meetings sites require Mac OS 10.13 or later.
- Starting with Mac OS X 10.7, Apple no longer offers Java as part of the Mac operating system. Since Webex Meetings previously relied on the Java browser plugin to download the meeting application for first-time users, users without Java installed found it difficult to join a meeting. The dependency on Java was removed. Instead, the user is asked to install a small plugin that, once installed, handles the rest of the meeting application installation and then starts the meeting.
- When you start or join an event using Events (classic) for the first time on Safari 6.X and Safari 7, a problem occurs. After you have installed Webex, Safari requires you to trust the plugin for the site you’re attempting to join or start the event from. The page will refresh after that, but you’ll not join the event. To join, go back to the link you originally selected and you will be able to join successfully.
- The following Webex services are available:

  - Webex Meetings
  - Webex Webinars  
  Webcast mode for attendees doesn’t support Windows Server 2008 64-bit, Windows Server 2008 R2 64-bit, Mac OS 10.13, and Mac OS 10.14.
  - Events (classic)
  - Webex Training
- Webex Support is no longer supported on Mac OS as it relied on the Java client, which went EOL (End of Life) on April 1, 2021.

**Linux (Web App) (32-bit/64-bit)** 

- Ubuntu 14.x or later
- OpenSuSE 13.x or later
- Fedora 18 or later
- Red Hat 6 or later
- Debian 8.x or later

The following Webex services are available for Linux on the web app:

- Meetings
- Webex Webinars  
Webcast mode for attendees doesn’t support OpenSuSE 13.x or later, Fedora 18 or later, Red Hat 6 or later, and Debian 8.x or later.
- Events (classic) (attendees)
- Webex Training (attendees)

Known issues and limitations for Linux on the Webex Meetings web app:

- In some versions of Linux, users must proactively install and activate the “OpenH264 Video Codec provided by Cisco Systems, Inc.” plugin for the video, call my computer, and content sharing features to work in Firefox.
- Content sharing doesn’t work in Linux versions that use Wayland as their display management system (such as Fedora 25 and later), due to an issue with the WebRTC screen sharing API.
- Sending and receiving video doesn’t work in Fedora 28 due to an issue with the H.264 codec.
- Linux clients are not supported for end-to-end encryption.

**Chrome OS support** 

Support for Google Chrome OS is currently available through the Webex Meetings Web App (Web-Based meeting client support) and the Webex Meetings Android App (Downloadable meeting client support). 

The Webex Meetings mobile app (version 11.0 or higher) is supported on all Chrome devices that officially support Android apps, through Google Play.

#### Minimum system requirements

#### Browsers

**Windows** 

- The Edge browser is supported only for starting and joining meetings, events, training sessions, or support sessions in Webex Meetings, Webex Training, Webex Webinars, Events (classic), and Webex Support.
- Mozilla Firefox 52 and later is fully supported in Windows. Firefox 51 and earlier versions aren’t supported. Users receive a message stating this when they attempt to join or start a meeting with these browser versions.  
Mozilla Firefox ESR isn’t supported.
- Chrome latest 32-bit/64-bit  
Win Edge Chromium is supported for all customers, including lockdown customers.
- The WebView2 component is required on Windows systems in order to use the Slido integration (and future apps) and the Facebook & Facebook Workplace Live Streaming features.

**Mac OS X** 

- Firefox 52 and later is fully supported in Mac OS X. Firefox 51 and earlier versions aren’t supported. Users receive a message stating this when they attempt to join or start a meeting with these browser versions.
- Safari 11 and later
- Chrome latest 32-bit/64-bit  
Mac Edge Chromium requires Mac Desktop client to be on version 40.1 or later.

**Linux (Web App)** 

- Linux (32-bit/64-bit)
- Firefox 48 or later
- Chrome 65 or later
- Chromium
- The following Webex services are available for Linux on the Web App:

  - Webex Meetings
  - Webex Webinars
  - Events (classic)
  - Webex Training
  - Remote Support

**Windows** 

- Intel Dual-Core CPU 2.XX GHz or AMD processor (2 GB of RAM recommended)
- JavaScript and cookies enabled on browsers
- Java isn't required for Mozilla Firefox and Google Chrome users.

**Mac OS X** 

- Intel CPU-based (2 GB of RAM minimum)
- JavaScript and cookies enabled on browsers
- Oracle Java 6 to Oracle Java 8  
Java is needed for the following services:

  - Events (classic)
  - Webex Training
  - Access Anywhere
  - Remote Access
  - Hands-On Lab

### Language support

On Mac, localized languages are available for Meetings and Webex Webinars only. Webex Training, Events (classic), and Webex Support do not support Mac localized languages.

All Webex services (Meetings, Webex Webinars, Events (classic), Webex Training, and Webex Support) support the following languages:

- Chinese (Simplified)
- Chinese (Traditional)
- Czech\*\*\*
- Danish
- Dutch
- English
- French
- German
- Hungarian\*\*\*
- Italian
- Japanese
- Korean\*
- Polish\*\*\*
- Portuguese (Brazil)
- Romanian\*\*\*
- Russian
- Spanish (European)
- Spanish (Latin America)
- Swedish\*\*
- Turkish

\*Korean is not supported in Events (classic).

\*\*Swedish is not supported in Events (classic), Webex Training, and Webex Support.

\*\*\*Czech, Hungarian, Polish, and Romanian are not supported in Webex Training and Webex Support.

### Supported mobile devices and operating systems

For more info on support devices, languages, and features for the Webex Meetings mobile app, see the [Support for the Meetings mobile app](https://help.webex.com/nowvmhw/Support-for-the-Cisco-Webex-Meetings-Mobile-App#reference%5F7E90DE648E639F82D1C02E3049ADACDE).

### Meetings Web app supported operating systems and browsers

**Microsoft Windows 8 or later (32-bit/64-bit)** 

| Feature                                    | Edge 25 / EdgeHTML 13            | Chrome 65 or Later | Firefox 48 or Later |
| ------------------------------------------ | -------------------------------- | ------------------ | ------------------- |
| Start/Join a meeting                       | Yes                              | Yes                | Yes                 |
| Switch to the Cisco Webex desktop app      | Yes                              | Yes                | Yes                 |
| View shared screen, applications, or files | Yes                              | Yes                | Yes                 |
| View media files                           | No                               | No                 | No                  |
| View whiteboard and annotation             | Yes                              | Yes                | Yes                 |
| Chat                                       | Yes                              | Yes                | Yes                 |
| Telephony (Call-in or Call Me)             | Yes                              | Yes                | Yes                 |
| Call back to a video system                | Yes                              | Yes                | Yes                 |
| Call using a computer                      | Yes (Edge 77.0.235.20 and later) | Yes                | Yes                 |
| Receive video                              | Yes (Edge 42 and later), 4K      | 4K, Multiway video | 4K, Multiway video  |
| Send video                                 | Yes (Edge 42 and later)          | Up to 720p         | Up to 720p          |
| Share content                              | Yes (Edge 77.0.235.20 and later) | Yes (Chrome 65+)   | Yes (Firefox 52+)   |

**Mac OS X 10.13 or later** 

| Feature                                    | Safari 11.0 or Later | Chrome 65 or Later | Firefox 48 or Later |
| ------------------------------------------ | -------------------- | ------------------ | ------------------- |
| Start/Join a meeting                       | Yes                  | Yes                | Yes                 |
| Switch to the Cisco Webex desktop app      | Yes                  | Yes                | Yes                 |
| View shared screen, applications, or files | Yes                  | Yes                | Yes                 |
| View media files                           | No                   | No                 | No                  |
| View whiteboard and annotation             | Yes                  | Yes                | Yes                 |
| Chat                                       | Yes                  | Yes                | Yes                 |
| Telephony (Call-in or Call Me)             | Yes                  | Yes                | Yes                 |
| Call back to a video system                | Yes                  | Yes                | Yes                 |
| Call using a computer                      | Yes                  | Yes                | Yes                 |
| Receive video                              | 4K, Multiway video   | 4K, Multiway video | 4K, Multiway video  |
| Send video                                 | 540p                 | Up to 720p         | Up to 720p          |
| Share content                              | No                   | Yes (Chrome 65+)   | Yes (Firefox 52+)   |

**Chromebook** 

| Feature                                    | Chrome 65 or Later                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start/Join a meeting                       | Yes                                                                                                                                                                       |
| Modern View support                        | Webex Meetings: Yes Events (classic) and Webex Training: Attendees who join events and training can launch the Meetings web app on Chromebook in Classic View by default. |
| Switch to the Cisco Webex desktop app      | No Chrome OS is not supported on the desktop app.                                                                                                                         |
| View shared screen, applications, or files | Yes                                                                                                                                                                       |
| View media files                           | No                                                                                                                                                                        |
| View whiteboard and annotation             | Yes                                                                                                                                                                       |
| Chat                                       | Yes                                                                                                                                                                       |
| Telephony (Call-in or Call Me)             | Yes                                                                                                                                                                       |
| Call back to a video system                | Yes                                                                                                                                                                       |
| Call using a computer                      | Yes                                                                                                                                                                       |
| Receive video                              | 4K, Multiway video                                                                                                                                                        |
| Send video                                 | Up to 720p                                                                                                                                                                |
| Share Content                              | Yes (Chrome 65+)                                                                                                                                                          |

**Linux (32-bit/64-bit): Ubuntu 14.x or later, OpenSuSE 13.x or later, Fedora 18 or later, Red Hat 6 or later, and Debian 8.x or later** 

The CentOS operating system is not supported. As a workaround, try upgrading to the latest version of your browser.

| Feature                                    | Firefox 48 or later | Chrome 65 or later | Chromium |
| ------------------------------------------ | ------------------- | ------------------ | -------- |
| Start/Join a meeting                       | Yes                 | Yes                | Yes      |
| Start/Join a Personal Room                 | Yes                 | Yes                | Yes      |
| Switch to the Cisco Webex desktop app      | Yes                 | N/A                | N/A      |
| View shared screen, applications, or files | Yes                 | Yes                | Yes      |
| View media files                           | No                  | No                 | No       |
| View whiteboard and annotation             | Yes                 | Yes                | Yes      |
| Chat                                       | Yes                 | Yes                | Yes      |
| Telephony (Call-in or Call Me)             | Yes                 | Yes                | Yes      |
| Call back to a video system                | Yes                 | Yes                | Yes      |
| Call using a computer                      | Yes                 | Yes                | No       |
| Receive video                              | 4K, Multiway video  | 4K, Multiway video | No       |
| Send video                                 | Up to 720p          | Up to 720p         | No       |
| Share Content                              | Yes (Firefox 52+)   | Yes (Chrome 65+)   | No       |

**Known issues and limitations:** 

- In some versions of Linux, users must proactively [install and activate the “OpenH264 Video Codec provided by Cisco Systems, Inc.” plugin ](https://help.webex.com/WBX9000032830/) in order for the video, call my computer, and content sharing features to work in Firefox.
- Content sharing does not work in Linux versions that use Wayland as their display management system (such as Fedora 25 and later), due to an issue with the WebRTC screen sharing API.
- Sending and receiving video does not work in Fedora 28 due to an issue with the H.264 codec.
- Linux clients are not supported for end-to-end encryption.

### Meetings virtual desktop software

Meetings provides an enhanced experience in Virtual desktop infrastructure (VDI) environments. When you attend meetings in a VDI environment, the Meetings software routes all audio and video streams directly between the thin client and the Meetings Cloud without going through the hosted desktop. The Meetings Desktop Virtual Software currently supports Citrix Virtual Desktop Environment and the support for VMware hosted environment is in early field trial.

#### System requirements

**Server software in data center** 

- Citrix XenDesktop 7.15, 7.16, 7.17 and 7.18  
XenApp is currently not supported.
- Windows 8 or 10 on Hosted Virtual Desktop (HVD)
- VDI plugin on Mac OS

**Client software** 

- Citrix Receiver or Workspace app compatible with Citrix XenDesktop
- Windows 10 on Thin Client

**Hardware** 

All hardware Thin Clients that run Windows 10 with following minimum requirements:

- Processor: AMD Embedded G-Series GX-420GI Radeon R7E 2.00GHz Cores 2  
Memory: 4G
- Processor: 6th Generation Intel Core i5-6500TE processor  
Memory: 4G

**Cisco tested** 

- HP t630 Thin Client
- HP t730 Thin Client
- Dell Optiplex 7060
- Lenovo ThinkCentre M710q

#### Limitations

- Recording in Cloud only.  
Local recording isn’t supported.
- Sharing options:  

  - Can’t share multimedia files such as \*.mp4 or \*.avi.
  - The Share My Meeting Windows option isn’t available.
  - Optimize for Motion and Video share option isn’t available.
  - Proximity doesn’t work.
- Content share

  - Side by side view option isn’t available.
  - Only layout available in the floating windows view is the Active Speaker view.

### Browser support for video-centric network-based MP4 recordings

[Video-centric, network-based MP4 recordings](https://help.webex.com/d8o7deb/) are available for meetings and events that are recorded in the cloud in MP4 format.

Internet Explorer 11 and earlier, and browsers earlier than Firefox 58, and Chrome 59 aren't able to display the video-centric MP4 player so recordings play using our online video-centric, network-based recordings player.

#### Supported browsers

**Windows** 

- Chrome 59 and later is supported on Windows 8.1 and Windows 10
- Latest Edge version on Windows 10
- Firefox 58 and later is supported on Windows 8.1 and Windows 10

**Mac OS X** 

- Chrome 59 and later
- Firefox 58 and later
- Latest Safari version

## Cross-Platform Feature Support for Services and Platforms 

- [Webex Meetings ](#reference%5F5C1EC1ACC82482516CC4E9F0EFBBEDC1)
- [Webex Events ](#reference%5FDF93BAC35AB07DDEFD495D81053AE641)
- [Webex Training ](#reference%5F73788E1039CE567E4364A9FDE9FA2F77)

|                                                                                                                                                                                                                    | Windows            | Mac OS X  | Linux     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | --------- | --------- |
| Host meetings                                                                                                                                                                                                      | X                  | X         | X         |
| Attend meetings                                                                                                                                                                                                    | X                  | X         | X         |
| Join teleconference before host                                                                                                                                                                                    | X                  | X         | X         |
| Attendee ready indicator                                                                                                                                                                                           | X                  | X         | X         |
| Quick Start tab (for inviting and reminding participants)                                                                                                                                                          | X                  | X         |           |
| Send meeting transcript                                                                                                                                                                                            | X                  |           |           |
| Power Panels (Delivers full-screen views for attendees while hosts use controls to manage meeting activity privately behind the scenes)                                                                            | X                  | X         |           |
| Application sharing and annotation                                                                                                                                                                                 | X                  | X         | X         |
| Desktop sharing and annotation                                                                                                                                                                                     | X                  | X         | X         |
| File and whiteboard sharing and annotation                                                                                                                                                                         | X                  | X         | X         |
| Remote desktop control                                                                                                                                                                                             | X                  | X         | X         |
| Remote application control                                                                                                                                                                                         | X                  | X         | X         |
| Web browser remote control                                                                                                                                                                                         | X                  | X         | X         |
| Desktop remote control                                                                                                                                                                                             | X                  | X         | X         |
| Microsoft PowerPoint animations and transitions                                                                                                                                                                    | X                  | View Only | View Only |
| Automatically play presentations                                                                                                                                                                                   | X                  | X         | X         |
| Automatically advance presentations                                                                                                                                                                                | X                  | X         | X         |
| Chat                                                                                                                                                                                                               | X                  | X         | X         |
| High-quality video                                                                                                                                                                                                 | X                  | X         | view only |
| High-definition video                                                                                                                                                                                              | X                  | X         |           |
| Full-screen video view with high-definition video                                                                                                                                                                  | X                  | X         |           |
| Active-speaker switched video                                                                                                                                                                                      | X                  | X         | X         |
| Offload video processing to GPU                                                                                                                                                                                    | X                  | X         |           |
| Multiple monitor support                                                                                                                                                                                           | X                  |           |           |
| Self view when sending video                                                                                                                                                                                       | X                  | X         |           |
| Webex Audio                                                                                                                                                                                                        | X                  | X         | X         |
| Personal Conferencing                                                                                                                                                                                              | X                  | X         | X         |
| Integrated Internet phone (VoIP)                                                                                                                                                                                   | X                  | X         | X         |
| Record to Cloud and Computer (MP4)                                                                                                                                                                                 | X                  | X         | X         |
| Stand-alone playback (WRF) The WRF player is not supported for Mac 10.15 and later.                                                                                                                                | X                  | X         |           |
| Stand-alone playback (ARF)                                                                                                                                                                                         | X                  | X         |           |
| Playback in browser (WRF/ARF)                                                                                                                                                                                      | X                  | X         | X         |
| Edit recordings (WRF)                                                                                                                                                                                              | X                  |           |           |
| Polling                                                                                                                                                                                                            | X                  | X         | X         |
| Printing                                                                                                                                                                                                           | X                  |           |           |
| File transfer (Basic transfer allows you to publish files in a separate window so that attendees can download them. Advanced transfer allows you transfer files or folders to and from another person's computer.) | Basic and Advanced | Basic     | Basic     |
| Notes and closed captioning                                                                                                                                                                                        | X                  | X         | X         |
| Customized information tab                                                                                                                                                                                         | X                  |           |           |
| 32-bit and 64-bit Microsoft Outlook integration                                                                                                                                                                    | X                  |           |           |

|                                                                                                                                                                                                                    | Windows            | Mac OS X  | Linux     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | --------- | --------- |
| Host events                                                                                                                                                                                                        | X                  | X         | X         |
| Attend events                                                                                                                                                                                                      | X                  | X         | X         |
| Join teleconference before host                                                                                                                                                                                    | X                  | X         | X         |
| Quick Start tab (for inviting and reminding participants)                                                                                                                                                          | X                  | X         |           |
| Attendee ready indicator                                                                                                                                                                                           |                    | X         |           |
| Power Panels (Delivers full-screen views for attendees while hosts use controls to manage meeting activity privately behind the scenes.)                                                                           | X                  | X         |           |
| Panelists                                                                                                                                                                                                          | X                  | X         | X         |
| Q&A                                                                                                                                                                                                                | X                  | X         | X         |
| Application sharing and annotation                                                                                                                                                                                 | X                  | X         | X         |
| Desktop sharing and annotation                                                                                                                                                                                     | X                  | X         | X         |
| File and whiteboard sharing and annotation                                                                                                                                                                         | X                  | X         | X         |
| PowerPoint animations and transitions                                                                                                                                                                              | X                  | View Only | View Only |
| Automatically play presentations                                                                                                                                                                                   | X                  | X         | X         |
| Automatically advance presentations                                                                                                                                                                                | X                  | X         | X         |
| Chat                                                                                                                                                                                                               | X                  | X         | X         |
| High-quality video                                                                                                                                                                                                 | X                  | X         | View Only |
| High-definition video                                                                                                                                                                                              |                    |           |           |
| Full-screen video view with high-quality video                                                                                                                                                                     | X                  | X         | X         |
| Active-speaker switched video                                                                                                                                                                                      | X                  | X         | X         |
| Offload video processing to GPU                                                                                                                                                                                    |                    |           |           |
| Self view when sending video                                                                                                                                                                                       | X                  | X         |           |
| Webex Audio                                                                                                                                                                                                        | X                  | X         | X         |
| Integrated Internet phone (VoIP)                                                                                                                                                                                   | X                  | X         | X         |
| Record to Cloud and Computer (MP4)                                                                                                                                                                                 | X                  | X         | X         |
| Stand-alone playback (WRF) The WRF player is not supported for Mac 10.15 and later.                                                                                                                                | X                  | X         |           |
| Stand-alone playback (ARF)                                                                                                                                                                                         | X                  | X         |           |
| Playback in browser (WRF/ARF)                                                                                                                                                                                      | X                  | X         | X         |
| Edit recordings (WRF)                                                                                                                                                                                              | X                  |           |           |
| Polling                                                                                                                                                                                                            | X                  | X         | X         |
| Printing                                                                                                                                                                                                           | X                  |           |           |
| File transfer (Basic transfer allows you to publish files in a separate window so that attendees can download them. Advanced transfer allows you transfer files or folders to and from another person's computer.) | Basic and Advanced | Basic     | Basic     |
| Customized information tab                                                                                                                                                                                         | X                  |           |           |
| 32-bit and 64-bit Microsoft Outlook integration                                                                                                                                                                    | X                  |           |           |
|                                                                                                                                                                                                                    |                    |           |           |

|                                                                                                                                                                                                                     | Windows         | Mac OS X  | Linux     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------- | --------- |
| Host training sessions                                                                                                                                                                                              | X               | X         | X         |
| Attend training sessions                                                                                                                                                                                            | X               | X         | X         |
| Join teleconference before host                                                                                                                                                                                     | X               | X         | X         |
| Attendee ready indicator                                                                                                                                                                                            | X               | X         | X         |
| Breakout sessions                                                                                                                                                                                                   | X               | X         | X         |
| Hands-on Lab sessions                                                                                                                                                                                               | X               | X         |           |
| Q&A                                                                                                                                                                                                                 | X               | X         | X         |
| Quick Start tab (for inviting and reminding participants)                                                                                                                                                           | X               | X         |           |
| Power Panels (Delivers full-screen views for attendees while hosts use controls to manage meeting activity privately behind the scenes.)                                                                            | X               | X         |           |
| Application sharing and antation                                                                                                                                                                                    | X               | X         | X         |
| Desktop sharing and antation                                                                                                                                                                                        | X               | X         | X         |
| File and whiteboard sharing and antation                                                                                                                                                                            | X               | X         | X         |
| Desktop sharing                                                                                                                                                                                                     | X               | X         | X         |
| Remote application control                                                                                                                                                                                          | X               | X         | X         |
| File and whiteboard sharing and antation                                                                                                                                                                            | X               | X         | X         |
| PowerPoint animations and transitions                                                                                                                                                                               | X               | View Only | View Only |
| Automatically play presentations                                                                                                                                                                                    |                 |           |           |
| Chat                                                                                                                                                                                                                | X               | X         | X         |
| High-quality video                                                                                                                                                                                                  | X               | X         | View Only |
| High-definition video                                                                                                                                                                                               | X               | X         |           |
| Full-screen video view with high-quality video                                                                                                                                                                      | X               | X         |           |
| Active-speaker switched video                                                                                                                                                                                       | X               | X         | X         |
| Offload video processing to GPU                                                                                                                                                                                     |                 |           |           |
| Self view when sending video                                                                                                                                                                                        | X               | X         |           |
| Medianet features supported                                                                                                                                                                                         |                 |           |           |
| Webex Audio                                                                                                                                                                                                         | X               | X         | X         |
| Cisco Unified MeetingPlace version 8.x Audio                                                                                                                                                                        | limited support |           |           |
| Cisco Unified MeetingPlace version 8.x Audio                                                                                                                                                                        |                 |           |           |
| Integrated Internet phone (VoIP)                                                                                                                                                                                    | X               | X         | X         |
| Client-side recording (WRF)                                                                                                                                                                                         | X               |           |           |
| Network-based recording (ARF)                                                                                                                                                                                       | X               | X         | X         |
| Stand-alone playback (WRF) The WRF player is not supported for Mac 10.15 and later.                                                                                                                                 | X               | X         |           |
| Stand-alone playback (ARF)                                                                                                                                                                                          | X               | X         |           |
| Playback in browser (WRF/ARF)                                                                                                                                                                                       | X               | X         | X         |
| Edit recordings (WRF)                                                                                                                                                                                               | X               |           |           |
| Polling                                                                                                                                                                                                             | X               | X         | X         |
| Offline polling editor                                                                                                                                                                                              | X               |           |           |
| Renaming tabs (for file sharing and polls)                                                                                                                                                                          | X               | X         |           |
| Printing                                                                                                                                                                                                            | X               |           |           |
| File transfer (Basic transfer allows you to publish files in a separate window so that attendees can download them. Advanced transfer allows you to transfer files or folders to and from ather person's computer.) | Basic           | Basic     | Basic     |
| Multimedia files                                                                                                                                                                                                    | X               |           |           |
| Floating icon tray                                                                                                                                                                                                  | X               | X         |           |
| 32-bit and 64-bit Microsoft Outlook integration                                                                                                                                                                     | X               |           |           |
|                                                                                                                                                                                                                     |                 |           |           |

## Cross-platform known issues and limitations 

This section contains known issues and limitations about the browsers and operating systems supported by Webex Meetings. For information about other known issues, see the individual release notes for each service.

**Sharing files from personal My Webex folders** 

Users can no longer share files from their personal My Webex  folders, although all users can upload and share files during a meeting.

**Microsoft Office 2007 support** 

- Microsoft Office 2007 may display a security alert stating that the Webex Meetings digital signature is invalid.
- Users may not be able to share Microsoft PowerPoint files. A workaround for this is to share the device's screen or share the PowerPoint application.

**Microsoft Office 2010 support** 

- UCF Toolkit isn't supported with Microsoft Office 2010 64-bit.
- New animations, transitions, and 3D graphics introduced in Microsoft Office 2010 aren't supported.
- Importing a company address book into the Webex Meetings contacts isn't supported with Microsoft Outlook 2010 64-bit.

**Microsoft Office 2013 support** 

- If Microsoft Office 2013 is installed, the following features aren't supported when sharing Microsoft PowerPoint 2013 files:  

  - Animations and transitions
  - Embedded video or audio files
  - UCF Toolkit
- Some custom elements may not be supported in customized Info  tabs. We recommend that users validate it to make sure that it display properly during meetings.
- In a few cases, the following problems might occur:

  - Text and fill colors might be slightly different from the actual colors in a slide.
  - Some graphic elements might be missing from a slide.
  - Fonts might appear blurry on a slide or might be different from the original.
  - The size of shapes might be different from the original.
- If an object in a Microsoft PowerPoint presentation doesn't display correctly in edit mode, it's automatically removed in Slide Show view; however, the object may continue to display when the file is shared in a meeting.
- Users can't share password-protected Microsoft PowerPoint 2013 files using the file sharing feature. Use the application sharing or desktop sharing features instead.
- Users can't share Microsoft Excel 2013 files on Windows 8 and 8.1 using the file sharing feature. Use the application sharing or desktop sharing features instead.
- Users can't share Word 2013 (64-bit) documents on Windows 8 and 8.1 (64-bit) using the file sharing feature. Use the application sharing or desktop sharing features instead.

 **Microsoft Office 2016 support** 

 Microsoft Office 2016 is supported in Webex Meetings for Windows or Mac. However, file sharing Microsoft PowerPoint presentations sometimes cause an error. Also, file sharing multiple Microsoft PowerPoint presentations at one time may cause the app to stop responding. 

**Windows 2000** 

Windows 2000 is no longer supported starting in this release. Windows 2000 users may still be able to join meetings, but performance isn’t guaranteed. 

**Mac OS** 

- Mac OS X 10.6 users or earlier are no longer able to connect to meetings.
- Mac PowerPC users are no longer able to connect to meetings.
- The Webex Meetings Network Recording Player doesn't support converting recordings to MP4 format on Mac.
- Multiple monitor support isn’t yet available in Webex Meetings for Mac.

**Linux 64-bit support** 

- 64-bit Linux is supported via the [Cisco Webex Meetings Web App ](https://help.webex.com/article/n1pxgbz), and is supported on Ubutuntu 14.x or later, OpenSuSE 13.x or later, Fedora 18 or later, Red Hat 6 or later, and Debian 8.x or later

**Known issues and limitations:**

- In some versions of Linux, users must proactively install and activate the “OpenH264 Video Codec provided by Cisco Systems, Inc.” plugin in order for the video, call my computer, and content sharing features to work in Firefox.
- Content sharing does not work in Linux versions that use Wayland as their display management system (such as Fedora 25 and later), due to an issue with the WebRTC screen sharing API.
- Sending and receiving video does not work in Fedora 28 due to an issue with the H.264 codec.

**Mozilla Firefox 43 or later** 

 The Webex Meetings Productivity Tools add-on for Mozilla Firefox isn't currently supported for Mozilla Firefox version 43 or later. We recommend that users use Internet Explorer instead.

**Citrix XenDesktop and XenApp** 

For the best experience, Cisco recommends the latest version of the Citrix receiver for both Windows and Mac.

- XenApp isn’t supported with Webex Support.
- Due to an architectural limitation of the virtual desktop environment, sending video in Webex Meetings may not work smoothly. In addition, when sending video in a meeting, the frame rate may be low. This results in a less-than-optimal user experience when sending video.
- Some video file formats (WMV, AVI and MP4) can't be shared in a virtual desktop environment in Webex Meetings due to the XenApp limitations.
- Remote Access and Access Anywhere aren't supported because these agents are automatically removed by the underlying Citrix platform after the operating system restarts.
- Hands-On Labs aren't supported.
- When using the [Cisco Webex Meetings Web App ](https://help.webex.com/article/n1pxgbz) in XenApp or XenDesktop, you can receive video, but not send video. This is because web browsers can't detect virtual camera devices in a VDI environment.
- When using the [Cisco Webex Meetings Web App ](https://help.webex.com/article/n1pxgbz) in XenApp or XenDesktop, users may experience audio quality issues when using Call using computer . We recommend using Call me , Call in , or Call using video system  when using the web app in a VDI environment.

**VMware Horizon 7** 

- VMware Horizon isn’t supported with Webex Support.
- Due to an architectural limitation of the virtual desktop environment, sending video in Webex Meetings may not work smoothly. In addition, when sending video in a meeting, the frame rate may be low. This results in a less-than-optimal user experience when sending video.
- Remote Access and Access Anywhere aren't supported because these agents are automatically removed by the underlying VMware platform after the operating system restarts.
- Hands-On Labs aren't supported.
- When using the [Cisco Webex Meetings Web App ](https://help.webex.com/article/n1pxgbz) in VMware Horizon 7, you can receive video, but not send video. This is because web browsers can't detect virtual camera devices in a Horizon environment.
- When using the [Cisco Webex Meetings Web App ](https://help.webex.com/article/n1pxgbz) in VMware Horizon 7, you may experience audio quality issues when using Call using computer . We recommend using Call me , Call in , or Call using video system  when using the web app in a Horizon environment.

**Mac OS X 10.8 Mountain Lion** 

When starting or joining a meeting using PAC proxy on Mac OS X 10.8 Mountain Lion, the meeting application crashes. This is an operating system bug that was reported to Apple (Apple bug report # 11844696). The issue was resolved in the Mac OS X 10.8.2 build. 

**Internet Explorer 10 and 11** 

The "Enhanced Protected Mode" in Internet Explorer 10 and 11 on the desktop isn't supported. Since this mode offers plugin-free browsing experience, the Webex Meetings add-ons are disabled and ActiveX or Java download methods can be used. Users can still use the temporary folder solution to join a meeting. Alternatively, users can choose to turn off Enhanced Protected Mode in order to join the meeting normally. 

Turning on Compatibility View in Internet Explorer on the desktop might cause some Webex Meetings pages to render incorrectly. We recommend that administrators turn off Compatibility View for their site. 

**Google Chrome** 

- Some Google Chrome users can’t access the Chrome Web Store. In this case, the Webex Meetings extension file doesn't automatically install when the users join a meeting. These users are directed to a help page with instructions to manually download and install the extension file.
- The Webex Meetings extension add-on may not install and instead return an error message. This may be because in-line installation can't be initiated from a pop-up window in Google Chrome. The integration may have to be changed to use a top-level window instead of a pop-up window.
