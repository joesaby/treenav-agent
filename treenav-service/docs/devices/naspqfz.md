---
title: "Webex Edge for Devices"
product: "Devices"
article_id: "naspqfz"
url: "https://help.webex.com/en-us/article/naspqfz/Cloud-Managed-Software-Upgrade-for-Webex-Edge-for-Devices"
last_updated: "2025-12-16"
description: "Webex Edge for Devices enables you to keep your devices on-premises registered
while getting access to cloud-only features. You also get access to Control Hub
to monitor and administer your devices."
tags: ["devices"]
source: "help.webex.com"
---

# Webex Edge for Devices

You can use Webex Edge for Devices to link your on-premises devices to the Cisco Webex cloud service. This gives you access to select cloud features, while your registration, device management, calling, and media services remain on-premises. You can manage cloud services and get device diagnostics from them in Control Hub. 

Currently Webex Edge for on-premises devices has the following features and functionality:

- Connection Status in Control Hub: Online, online with issues, or unavailable
- [Device Diagnostics with the ability to set admin alerts](https://help.webex.com/en-us/ni3wlvw/)
- [Device Historical Analytics available directly in Control Hub](https://help.webex.com/n0rlwxe/)
- [Cloud xAPI Access](https://developer.webex.com/)
- [Read and write access to device configurations from Control Hub](https://help.webex.com/n5pqqcm/)
- Proxy support
- Migration to full cloud through API
- Real-Time Media Metrics when joining Webex calls
- [Manage logs from Control Hub](https://help.webex.com/np5qxxz/)
- Support for Microsoft Teams [WebRTC](https://help.webex.com/nsx4cpe/) and [Cisco Webex Video Integration for Microsoft Teams](https://help.webex.com/nffx8kj/)

You can also enable:

- Cloud-managed software upgrade
- Webex optimized experience
- [Hybrid Calendar through Webex Control Hub](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/hybridservices/calendarservice/cmgt%5Fb%5Fdeploy-spark-hybrid-calendar-service.html)
- [Webex Assistant](https://help.webex.com/hzd1aj/)
- [Organization wide branding from Control Hub](https://help.webex.com/rcxqacb/)
- [Hot desking](https://help.webex.com/n9et6aab/)
- [End-to-end encryption in Webex Meetings](https://help.webex.com/nedfu0h/)

To learn more about the security aspects related to Webex Edge for Devices, read the [Webex Edge for Devices Security Paper](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/wbxt/whitepapers/webex-edge-devices-white-paper.pdf).

## Prerequisites and limitations

### Prerequisites

- Software version CE9.15.3 or later
- CE software supporting strong encryption is required.

  - Board, Desk, and Room Series: Encryption key is installed before shipping and can't be added afterward.
  - DX80: Encryption key is available by default.
- Unified CM or Expressway registration
- Unified CM version 11.5(1) SU3 or 12.5(1) and later. If you have version 12.0(1), you need to use the method described for Expressway registered devices.
- For Expressway, you need HTTPS connectivity on your devices for the Device Connector tool.
- [Control Hub admin access](https://help.webex.com/nkhozs6/)
- [Cisco Collaboration Flex Plan](https://www.cisco.com/c/en/us/products/unified-communications/collaboration-flex-plan/index.html)
- For onboarding devices in bulk: [Cisco Webex Device Connector](https://help.webex.com/383gbd/)
- _\*.identrust.com_ must be allowed for certificate verification.

Even though media isn’t passing through Webex cloud (unless Webex optimized experience is enabled), you need to enable the same firewall configurations that apply for fully cloud-registered devices. Read more about media and network requirements in the [Network Requirements for Webex Services](https://help.webex.com/WBX000028782/) article.

### Limitations

- Enabling Hybrid Calendar on a device linked via Webex Edge for Devices disables TMS calendar on that device, as only one calendar source is supported at a time.
- When you first link devices to Webex Edge for Devices, they’re registered as shared mode devices. After linking the devices, it's possible to associate a device with a user.
- Calling to Webex Edge for Devices linked devices from Webex App with "Call on Webex" is not supported.
- Webex Edge for devices linked devices are not supported with Microsoft Teams Rooms.

## Software upgrade requirement

Webex Edge for Devices requires up to date software to maintain Webex connectivity.

Starting in March 2021, Cisco Webex is moving to a new Certificate Authority, IdenTrust Commercial Root CA 1\. Due to this change, customers who are managing their device software upgrades manually must upgrade their devices to CE 9.15.3 or later in order to be supported by Webex Edge for Devices.

Failure to upgrade results in devices losing cloud connectivity and loss of all related functionality. This includes Control Hub Management, Analytics, Hybrid calendaring amongst other features. Your ability to connect and use your on-premises SIP infrastructure will not be impacted. Additionally, devices on unsupported versions lose the ability to be linked to the Webex cloud using the Webex Device Connector. 

In general, for cloud connected software, we support a specific device software up to 6 months after its release date. After upgrading, we recommend customers to consider configuring their devices to allow automatic cloud upgrades through Webex Control Hub. 

## Link Unified CM registered devices

If you want to add an individual workspace with a Unified CM registered device, see [Create a workspace and add services for Board, Desk, and Room Series devices](https://help.webex.com/1mqb9cb/#id%5F137803).

| 1 | From the customer view in <https://admin.webex.com>, go to Devices and select Resources to find a link to the Device Connector tool. To read more about the tool, see the [Cisco Webex Device Connector](https://help.webex.com/383gbd/) article.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | After you have installed the Device Connector tool, select I want cloud features for my on-premises registered devices and click Link devices registered with Cisco Unified Communications Manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Enter the Host, Username (Standard AXL API Access username), and Password for your Unified CM and click Connect. If you have Unified CM with public signed certificates, make sure those are valid or click Proceed without certificate validation. The Device Connector retrieves the name and description of the Unified CM configured devices. The Contact Info Name becomes the name for the Workspace the device is connected to. If there is no Contact Info Name set, the System Unit Name or MAC address is used. If you want to change the device name, you can do it from Unified CM.                                                                                                                                                                                      |
| 4 | Click Link All to link all of the listed devices. To link an individual device, click the Link button next to it. Device Connector sends the device information to your Webex organization, and the Webex Identity Service creates activation codes for all devices. Unified CM applies the activation code to the devices and the devices link to your Webex organization. When the device is linked to Cisco Webex cloud services, you can click the device name to open the device page directly in Control Hub. If the device says _Link Pending_, it isn't linked yet. The activation code is provisioned from Unified CM. The system attempts to link to the device for 7 days until the activation code expires. If the device is available during that time, it gets linked. |

## Link Expressway registered devices

If you want to add an individual workspace with an Expressway registered device, see [Create a workspace and add services for Board, Desk, and Room Series devices](https://help.webex.com/1mqb9cb/#id%5F137803).

| 1 | From the customer view in <https://admin.webex.com>, go to Devices and select Resources to find a link to the Device Connector tool. To read more about the tool, see the [Cisco Webex Device Connector](https://help.webex.com/383gbd/) article.                                                                                                                                                                                                                                                                            |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | After you have installed the Device Connector tool, select I want cloud features for my on-premises registered devices and click Link devices using CSV or Cisco TMS Overview Export files.                                                                                                                                                                                                                                                                                                                                  |
| 3 | Browse to the file on your computer and open it. To create the file from TMS, export a System Overview report and only select the Network Settings \>  Hostname system parameter. Manually add columns for Username and Password. For the CSV file you need to create columns for _Address_, _Username_, and _Password_. The tool uses Contact Info Name for the Workspace name. If one isn’t available, the System Unit Name or MAC address is used. If no name is found for the device, click the name field to enter one. |
| 4 | Click Link All to link all of the listed devices. To link an individual device, click the Link button next to it. Device Connector sends the device information to your Webex organization, and the Webex Identity Service creates activation codes for all devices. The activation codes are sent to the devices through the API. HTTPS must be enabled for this to work. When the device is linked to Cisco Webex cloud services, you can click the device name to open the device page directly in Control Hub.           |

## Cloud-managed software upgrade

With cloud-managed software upgrades, your Webex Edge for Devices linked devices get upgraded automatically when a new RoomOS software version is available.

The devices with cloud-managed software upgrades enabled receive new Stable builds roughly once a month, and new Beta builds roughly every other week. The available channels are the same as those for cloud registered devices, and the releases are updated at the same time.

With cloud software upgrade, you get the latest updates and bug fixes faster without having to upgrade the device manually. Cloud software upgrade is required to enable Webex optimized experience.

This feature is off by default. Once you have enabled cloud-managed software upgrade, you can choose a software channel from the Workspace’s channel selection menu. By default, devices use Stable channel.

TAC only supports the latest Stable version of RoomOS software.

| 1 | From the customer view on [https://admin.webex.com ](https://admin.webex.com), go to Devices  and select the device or devices you wish to configure.                                                                                                                                                                                                                                                                                                                                                          |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Set the configuration Webex CloudUpgrades Mode  to On . To set the software channel, go to Workspaces , select the workspace and click on the cogwheel in the Devices  section. Select a software channel from the drop-down menu. If no channel is selected, it defaults to Stable. You have to reboot devices running CE9.14 after enabling cloud-managed software upgrades to apply the change. For devices running CE9.15 and later, the changes are applied when the device goes into standby or reboots. |

## Webex optimized experience

Devices linked with Webex Edge for Devices get the full optimized Webex Meetings experience when connecting to Webex meetings. The devices continue to use SIP for internal dialing and when connecting to external services. 

**What’s available when Webex optimized experience is enabled** 

- Two-way whiteboarding in Webex Meetings
- Media through Webex Video Platform 2.0, including Hybrid Video nodes
- [Remote access to troubleshoot devices](https://help.webex.com/gge81eb/)
- [ Advanced Mute ](https://help.webex.com/ijxk6bb/)

  - Mute on entry
  - Unmute all
  - Allow attendees to unmute
- [ Cohost ](https://help.webex.com/oprvt9/)

  - Device gets a cohost role when the paired device joins
  - Certain host actions are available
- [ Transfer Host and Leave ](https://help.webex.com/nkv30u5/)
- [ Lock Meeting ](https://help.webex.com/n6k2l9y/)

  - The host can lock a Personal Room or scheduled meeting
- Notifications that attendees are in the lobby and the ability to [ admit attendees to a meeting from the device ](https://help.webex.com/qg2eah/)
- [ Record a meeting ](https://help.webex.com/neleasb/)
- Send reactions in a meeting, either [ from call controls ](https://help.webex.com/w8l8wf/) or [ by using gestures ](https://help.webex.com/nck1fap/)
- Webex Assistant for Devices

  - The host can enable and disable Webex Assistant in a meeting
- [ Face Recognition ](https://help.webex.com/n3ubk5cb/)

**Call routing** 

Webex optimized meetings call routing is used in the following cases. In all other cases, the device uses SIP call routing.

- When a meeting is joined using the **Join Webex** button. This always uses Webex when the configuration _Webex Meetings JoinProtocol_ is set to _Webex_.
- When a Personal Room meeting is joined using Webex Assistant. This always uses Webex, similarly to the **Join Webex** button.
- When a meeting is joined from the **Call** menu with a Webex SIP URI. The device automatically detects Webex meetings from the SIP URI and connects natively to them.
- When a call is started using _xCommand Dial_, and the Number parameter matches a Webex site. If the configuration _Webex Meetings JoinProtocol_ is set to _Webex_, the device automatically detects Webex meetings by examining the number, and connects natively to them. (If _Protocol_ field is specified, that is used regardless of the number format.)
- Calls from connected Cisco Proximity and Webex apps are routed according to the type of meeting is started or joined. (On-premises connectivity needs to be enabled.)

**Recommendations** 

- [ Bandwidth recommendation ](https://www.cisco.com/c/en/us/products/collateral/conferencing/webex-meetings/white%5Fpaper%5Fc11-691351.html)
- [ Bandwidth management architecture ](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/Collaboration/hybrid/12x/hybcvd/bwm.html)

**Requirements** 

To enable Webex optimized experience, the device must be: 

- Linked with Webex Edge for Devices
- Enabled for Cloud-managed software upgrade
- [ Enabled for Configuration Management from Control Hub for Webex Edge for Devices ](https://help.webex.com/en-us/n5pqqcm)

You also need to enable the same firewall configurations that apply for fully cloud-registered devices. Read more about media and network requirements in the [ Network Requirements for Webex Services ](https://help.webex.com/WBX000028782/) article. 

**Limitations**

- Direct inbound calling from Webex app to the device is not supported.
- Multipoint Mode should be set to Auto. If the device is running RoomOS version 10.9.1.1 and later, Multipoint mode can be set to either Cisco Unified CM ad-hoc conferencing or MultiSite and still have Join protocol set to Webex. [ Adding participants ](https://help.webex.com/n9fvlr0/) works the same way as for cloud-registered devices.
- Out-of-call whiteboard strokes are treated the same way as out-of-call strokes on a Webex registered device. Some of the stroke information is sent to the Board service in the Cisco Webex cloud.
- Room Panorama devices are currently not supported.

**Enable Webex optimized experience** 

| 1 | From the customer view on [https://admin.webex.com ](https://admin.webex.com), go to Devices  and select the device or devices you wish to configure.                                                                                                                                                                                                                                                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select All Configurations  and set the following configuration: _Webex Meetings JoinProtocol: Webex_ If the device is running a software version earlier than RoomOS 10.9.1.1, make sure that Cisco Unified CM ad-hoc conferencing and MultiSite are disabled. The configurations are applied the next time the device goes to standby, or when it reboots. You can reboot a device with _xCommand SystemUnit Boot_. |

## Change linked devices to personal mode

Personal mode for Webex Edge for Devices allows for Webex devices that are registered to Unified CM (Board, Desk, and Room Series devices) to be assigned with a user in Control Hub. 

This brings many benefits to the user such as:

- A user's personal meetings display approx. 5 minutes before the start, allowing the user to tap the start or join button or ask the Webex Assistant for Devices to start the meeting.
- Start a Webex Personal room meeting directly from the device.
- Whiteboarding and share in a Webex space (Cisco Desk, Desk Pro, Desk Mini, and Board Series only)

Devices registered with Personal mode for Webex Edge for Devices share the line that is assigned to the end user account in Unified CM.

Deploying Personal mode for Webex Edge for Devices will in effect personalize a device and assign it to an end user already configured in Control Hub

This process or personalization will:

- Require the use of Webex APIs
- Assign the device to an end-user
- Move the device from a Workspace into Personal mode. The Workspace that was previously configured as part of the linking process is automatically hidden and no longer be accessible.

Limitations:

- Opening Webex spaces is not supported on Desk Series devices in personal mode when linked with Webex Edge for Devices.

When a device is in Personal mode, it no longer has a visible Workspace in Control Hub. The software channel for the device is now managed from the Device page in Control Hub.

Before you begin

- Control Hub must be configured to be allowed to manage the configuration of the registered devices. By default this is **Off**. To turn on:

  - Sign into Control Hub as an administrator and go to Management \> Devices \> Settings.
  - Scroll down the page to find the Webex Edge for Devices section and turn on **Allow Control Hub to manage configuration**.

| 1 | From the customer view on <https://admin.webex.com>, go to Devices and select the device you wish to configure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select All Configurations and set the following: Webex \> CloudUpgrades \> Mode. The default is Off. From the drop-down, select On and then Save. Webex \> CloudProximity \> Mode. The default is Off. From the drop-down, select On and then Save. Webex \> Meetings \> JoinProtocol. The default is shown as _Following default()_. When this is shown, the default join protocol is SIP. From the drop-down, select Webex and then Save and Close. This configuration is not required, but we strongly recommend setting it. If the device supports Webex Assistant for Devices (RoomOS 10 devices), you must disable the proactive meeting join notification. This feature is also disabled for Webex registered Personal mode devices. UserInterface \> Assistant \> ProactiveMeetingJoin If the Webex Assistant for Devices has been enabled within Control Hub, then this defaults to True. From the drop-down, select False and then Save and Close. It's also possible to complete the above actions with xAPI xConfiguration Webex CloudUpgrades Mode: On xConfiguration Webex CloudProximity Mode: ON xConfiguration Webex Meeting JoinProtocol: Webex xConfiguration UserInterface Assistant ProactiveMeetingJoin: False In both above options, the Webex Optimized Meeting experience has been enabled. This is optional but a recommended step. To learn more about this, see the Webex Optimized Experience section below. |
| 3 | The target device at this stage may prompt for a software upgrade as the device software is now managed by Control Hub. Let the software upgrade complete.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4 | Go to [developer.webex.com](https://developer.webex.com) and click Log in. Sign in with your Control Hub administrator credentials. Once signed in, go to Documentation \> Full API Reference \> Workspaces.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5 | Go to Workspaces and click the GET command List Workspaces to obtain the Workspace ID of the device that you want to move to Personal mode. You need to obtain the workspaceID before being able to personalize the device. In List Workspaces you can see a list of Query Parameters that can be used. Typically, the displayName query parameter can be used. Enter the name of the Workspace (as shown on the device) in the displayName field, scroll to the bottom and click Run. A 200/OK response should be seen at the bottom of the screen and will show information such as "id", “displayName”, and “orgId”. Copy the data in between the “..” shown next to “id” to clipboard. Don't copy the “orgId” data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 6 | Go to Workspace Personalization. This POST API associates and personalizes the Workspace to the user. Click the drop-down arrow to open the dialogue box to enter the “id” you gathered in the previous step. Then enter the email address that has been used in Control Hub for the user the device will be associated with. Click Run. A 202/Accepted response should be seen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 7 | Now the Webex device has been changed to Personal mode and shows the users name and not the Workspace name. You must reboot the device, either from the device's user interface, the Devices page on Control Hub, or the device's local web interface.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
