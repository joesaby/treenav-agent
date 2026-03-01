---
title: "Deploy your Cisco Room Phone"
product: "Devices"
article_id: "lwe1uab"
url: "https://help.webex.com/en-us/article/lwe1uab/Deploy-your-Webex-Room-Phone"
last_updated: "2026-01-23"
description: "The Cisco Room Phone is designed to be quickly and easily deployed. Here&#x27;s what
you need to know to deploy and activate your phone."
tags: ["devices"]
source: "help.webex.com"
---

# Deploy your Cisco Room Phone

You can easily deploy and set up the Cisco Room Phone. Connect the phone to your network, wait for the device to power up, and enter your information when you see the prompts. If the activation process doesn't start by itself, then you enter your information manually. 

We recommend that you connect the phone to a HDMI display screen so you get the full benefits of the device. Only use the included HDMI cables when you connect to an HDMI screen or a computer. Don't use any other cables or adapters.

The Cisco Room Phone supports these call control options:

- Cisco Unified Communications Manager (Unified CM) Calling—You use Unified CM for call control and device management. You add the phone to Unified CM, and activate your features and services.
- Unified CM Calling with Control Hub—You use Unified CM for call control and Control Hub for device management.
- Webex Calling with Control Hub—You use Control Hub to manage your device and to provision Webex Calling for call control.

Use the Webex Device Connector for bulk deployment to Control Hub. Use the Bulk Administration Tool (BAT) for bulk deployment to Cisco Unified Communications Manager (Unified CM).

The following table lists the features available with each option.

__Table 1\. Cisco Room Phone features__
| Features                                   | Unified CM Calling | Webex Calling with Control Hub | Unified CM Calling with Control Hub | Description                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------ | ------------------ | ------------------------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cable sharing—In call or meeting           | Yes                | Yes                            | Yes                                 | Allows users to share content from a laptop screen to the phone with during HDMI cable during a meeting.                                                                                                                                                                                                                                                                 |
| Cable sharing—Outside of call or meeting   | Yes                | Yes                            | Yes                                 | Allows users to share content from a laptop screen with the HDMI cable.                                                                                                                                                                                                                                                                                                  |
| Calendar and One Button to Push            | No                 | Yes                            | Yes                                 | Allows users to view scheduled WebexMeetings and join with a single tap.                                                                                                                                                                                                                                                                                                 |
| Call history and Predictive dialing        | Yes                | Yes                            | Yes                                 | Allows users to easily make a call. Call history—Lists your last 25 calls; select from the list. Predictive dialing—As you enter a phone number or search the directory, the results change to match your query.                                                                                                                                                         |
| Enhanced Webex Meetings experience         | No                 | Yes                            | Yes                                 | Allows users to participate in an enhanced Webex Meetings experience with the following features: Meeting notifications—User receives a notification before the meeting starts. Lobby—Participants wait in a virtual lobby for the meeting to start. Participant list—A list of people in attendance. Active speaker—When an attendee speaks, then their icon lights up. |
| WebexVideo Integration for Microsoft Teams | Yes                | Yes                            | Yes                                 | Allows users to schedule and join Microsoft Teams meetings. One Button to Push is not supported for Unified CM Calling.                                                                                                                                                                                                                                                  |
| Digital signage                            | No                 | Yes                            | Yes                                 | Allows user to see custom content on a HDMI display screen such as company announcements.                                                                                                                                                                                                                                                                                |
| Directory                                  | No                 | Yes                            | Yes                                 | Allows user to call a coworker from a company directory.                                                                                                                                                                                                                                                                                                                 |
| Guest share                                | No                 | Yes                            | Yes                                 | Allows user to share content without a Webex account.                                                                                                                                                                                                                                                                                                                    |
| Hold and resume                            | Yes                | No                             | Yes                                 | Allows user to put an active call on hold and then resume the call when ready.                                                                                                                                                                                                                                                                                           |
| Proximity pairing                          | No                 | Yes                            | Yes                                 | Allows user to connect a phone to Webex.                                                                                                                                                                                                                                                                                                                                 |
| Wireless sharing with Webex                | No                 | Yes                            | Yes                                 | Allows user to collaborate with coworkers by sharing information without your HDMI cable.                                                                                                                                                                                                                                                                                |

[Deploy to Cisco Unified Communications Manager](#task%5FA21A78DE6E419702CDF33057D2F0D607)

You deploy your device to Cisco Unified Communications Manager (Unified CM) if you want Unified CM to handle call control and processing.

To help you with deployment, the following documentation is available for your Cisco Unified Communications Manager version:

- [Administration guide](https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/products-maintenance-guides-list.html)—Use this guide to complete administrative tasks on a configured Cisco Unified Communications Manager system.
- [Feature Configuration Guide for Cisco Unified Communications Manager](https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/products-installation-and-configuration-guides-list.html)—Use this guide to configure features, including Extension Mobility.
- [Security guide](https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/products-maintenance-guides-list.html)—Use this guide to configure authentication and encryption for Cisco devices, Cisco Unified Communications Manager, Cisco Unified Survivable Remote Site Telephony (Unified SRST) references, Media Gateway Control Protocol (MGCP) gateways, and Cisco Unity and Cisco Unity Connection voice-messaging ports.
- [Bulk Administration guide](https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/products-maintenance-guides-list.html)—Use this guide to add, update, or delete a large number of users, devices, or ports in Cisco Unified Communications Manager.
- [Self Care Portal User guide](https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/products-user-guide-list.html)—Refer your end users to this guide for procedures to customize user options such as speed dials, conference settings, and IM and Presence status on their devices.
- _Cisco Unified Communications Manager Device Package Compatibility Matrix_—Consult this guide for information on the latest Cisco Unified Communications Manager device package.

If you have additional questions, see the [Documentation Guide for Cisco Unified Communications Manager and IM and Presence Service](https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/products-documentation-roadmaps-list.html) for your Cisco Unified Communications Manager. This document is a road map of the available Cisco Unified Communications Manager library. 

Before you begin

Install the appropriate device package and a current firmware release before you deploy the device. If you do not install the device pack, then the device fails registration.

Before you deploy the Cisco Room Phone, confirm that the phone can access your Cisco Unified Communications Manager (Unified CM). For information and a checklist for setting up and configuring your network, see the documentation for your particular Unified CM release.

Cisco Webex Room Phone require a minimum 2-Mbps of bandwidth to register with Unified CM. Consider this bandwidth requirement when you configure your Quality of Service (QoS). For more information, refer to _Cisco Collaboration System 12.x Solution Reference Network Designs (SRND)_ or later ( <https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/srnd/collab12/collab12.html>).

| 1 | Add and configure the device on Unified CM. Configures Unified CM for device registration and add your features and services. For more information, see the administration guide for your Cisco Unified Communications Manager version. |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Connect the device to your power and network. Allows the device to power up and begins the configuration steps for deployment.                                                                                                          |
| 3 | Configure your Ethernet settings. This is an optional step. Some administrators deploy manually and can set the IPv4, DNS, VLAN, or Proxy settings if needed.                                                                           |
| 4 | Select your Call Service. The call service for Unified CM deployment is UCM Calling. The call service for Cisco Unified Communications Manager Express is Cisco UCM via Expressway                                                      |
| 5 | Configure your server address. Allows the device to register with your Unified CM. Enter your Unified CM TFTP IP address.                                                                                                               |

[Product Specific Configuration](#reference%5F4F6F773462FEB946BB3E3EE3D77710ED)

The following table describes the fields in the Product Specific Configuration Layout pane. Some fields in this table only display in the Device \> Phone page. 

__Table 2\. Product Specific Configuration Fields__
| Field Name                                                                      | Field Type Or Choices        | Default | Description                                                                                                          |
| ------------------------------------------------------------------------------- | ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| Cisco Discovery Protocol (CDP): Switch Port                                     | Disabled  Enabled            | Enabled | Controls Cisco Discovery Protocol on the phone.                                                                      |
| Link Layer Discovery Protocol - Media Endpoint Discover (LLDP-MED): Switch Port | Disabled  Enabled            | Enabled | Enables LLDP-MED on the SW port.                                                                                     |
| LLDP Asset ID                                                                   | String, up to 32 characters  |         | Identifies the asset ID that is assigned to the phone for inventory management.                                      |
| LLDP Power Priority                                                             | Unknown Low High Critical    | Unknown | Assigns a phone power priority to the switch, thus enabling the switch to appropriately provide power to the phones. |
| Customer support upload URL                                                     | String, up to 256 characters |         | Provides the URL for the Problem Report Tool (PRT).                                                                  |

[Enable 802.1X authentication](#Cisco%5FTask.dita%5F24aae184-2713-455f-b776-1614214e4d57)

Your Cisco Room Phone supports 802.1X Authentication with a Locally Significant Certificate (LSC) or a Manufacturing Installed Certificate (MIC). 

If you deploy for Cisco Unified Communications Manager (Unified CM) Calling or for Unified CM Calling with Control Hub, then you can use both LSCs and MICs. But only a MIC is used for Webex Calling with Control Hub.

Both EAP-TLS and EAP-FAST are supported for authentication.

Cisco IP Phones and Cisco Catalyst switches traditionally use Cisco Discovery Protocol (CDP) to identify each other and determine parameters such as VLAN allocation and inline power requirements. CDP does not identify locally attached workstations. 

Support for 802.1X authentication requires several components:

- Cisco IP Phone: The phone initiates the request to access the network. The phone contains an 802.1X supplicant, which allows network administrators to control the connectivity of IP phones to the LAN switch ports.
- Cisco Identity Services Engine (ISE), or other third-party authentication server: Configure the server with the Certificate Authority (CA) for the MIC or LSC.
- Cisco Catalyst Switch or other third-party switch: The switch must support 802.1X, so it can act as the authenticator and pass the messages between the phone and the authentication server. After the exchange completes, the switch grants or denies the phone access to the network.

You must perform the following actions to configure 802.1X:

- Configure the other components before you enable 802.1X Authentication on the phone.
- Configure Voice VLAN: Because the 802.1X standard does not account for VLANs, you should configure this setting based on the switch support.  
Enabled: If you are using a switch that supports multidomain authentication, you can continue to use the voice VLAN.  
Disabled: If the switch does not support multidomain authentication, disable the Voice VLAN and consider assigning the port to the native VLAN.

| 1 | Tap the top-left corner of the phone screen.       |
| - | -------------------------------------------------- |
| 2 | Tap Settings from the list of menu options.        |
| 3 | Scroll down and tap Network connection.            |
| 4 | Tap Open Ethernet settings.                        |
| 5 | Toggle Use IEEE 802.1X to On.                      |
| 6 | Reboot the phone after you configure your setting. |

[Quality of Service](#Cisco%5FReference.dita%5Fb03fbb34-3f28-4005-9b1a-62d477ac2325)

As you deploy your device, keep in mind that audio and video traffic can be sent to different RTP port ranges in order to improve Quality of Service (QoS).

The following fields control the port ranges in theCisco Unified Communications Manager (Unified CM) Administration:

- Audio ports

  - Start Media Port (default: 16384)
  - Stop Media Port (default: 32766)
- Video ports

  - Start Video: This is set to the video start port.

    - Minimum: 2048
    - Maximum: 65535
  - Stop Video: This is set to the video stop port.

    - Minimum: 2048
    - Maximum: 65535

After the Start Video RTP Port and Stop Video RTP Port are configured, the device uses ports within the video port range for video traffic. The audio traffic uses the media ports.

If the audio and video port ranges overlap, the overlapped ports carry both audio and video traffic. If the video port range is not configured correctly, the device uses the configured audio ports for both audio and video traffic.

[Deploy to Control Hub](#task%5F4FFE1792753B517CFECBC5A163A96A57)

Deploy Webex Room Phone to Control Hub for Webex Calling with Control Hub or for Unified CM Calling with Control Hub. 

Unified CM Calling with Control Hub combines on-premises deployment with Cisco Cloud-based features. You use Cisco Unified Communications Manager (Unified CM) for call control and call management, including directory numbers and device pools, but use Control Hub to enable Cloud-based features such as Digital signage and calendar integration. To onboard the phone, you deploy to both Control Hub and to Unified CM. As a final step, you add another service to your phone as outlined in the steps below.

Before you begin

If you use a firewall, then confirm that the phone can reach Control Hub. If the firewall blocks the phone, then the device cannot activate and a red dot  displays on the phone home screen. This type of connection error doesn't appear in the status messages log.

| 1 | (Optional) Add your phone to your Cisco Unified Communications Manager (Unified CM). Configure your features and services. _(Configure in **Unified CM**)_ Configures Unified CM for phone registration and adds features and services. This step is only for Unified CM Calling with Control Hub deployment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Create a Workspaces, add your calendar, and add your call service. Generate the activation code. Or, select a user and click Add Device on the overview page. Select the room device and generate the activation code. **Note**: In order to make external calls using a room device, the user needs to have the Webex Calling professional license. _(Configure in **Control Hub**)_ Configures your Control Hub Workspaces for your phone and allows your phone to register after it connects to the network. Select the Call Service option that matches your deployment model: Free Calling—Select this option for Unified CM Calling with Control Hub. Webex Calling with Control Hub—Select this option for Webex Calling. You can also add your Calendar service. This is an optional step but many users find this feature useful. |
| 3 | Connect the phone to your network and let it power up. _(Configure on your **phone**)_ Allows your phone to power up and to start the registration process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4 | (Optional) Configure your network settings. _(Configure on your **phone**)_ If you deploy manually, then you can set the IPv4, DNS, VLAN, or Proxy settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 5 | Select your call service. _(Configure on your **phone**)_ Your call service is your calling option. Tap Cisco Webex.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 6 | Enter your activation code. _(Configure on your **phone**)_ Confirms that your phone has permission to register to the server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 7 | Wait 30 seconds for the phone firmware upgrade to begin. _(Configure on your **phone**)_ Upgrades the phone firmware to the latest release. Tap Postpone to delay the upgrade until a later time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 8 | Customize your display. _(Configure on your **phone**)_ Allows you to set your time zone on the phone. If your phone connects to a display screen, then adjust the image so it's clear.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 9 | (Optional) Select your call service. _(Configure in **Unified CM**)_ This is only for deployment to Unified CM Calling with Control Hub. Tap Cisco UCM.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

[Create Workspaces and add services](#task%5F3DE6794A37181725C48BFCB480B813C8)

Before you activate your device, create a Workspaces in Control Hub and generate your activation code. 

| 1  | From the customer view in <https://admin.webex.com>, go to Workspaces, and then click Add Workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2  | Enter a name for the place.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3  | (Optional) Customize your Workspaces with Capacity, Type, and Location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4  | Click Next                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 5  | Choose Cisco Webex Rooms device, and click Next. You can only have one room or desk device in a Workspaces.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 6  | Choose your call service: Call on Webex—Select this option for Unified CM Calling with Control Hub. Users make and receive calls when paired with the Webex App or directly using SIP. All calls remain on-premises that are not made through the Webex App. Webex Calling—Select this option for Webex Calling. You don't assign a number.                                                                                                                                                                                                                                                                                                                                    |
| 7  | Click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 8  | If you toggled on the calendar service, enter or paste the email address of the calendar mailbox for the device. This is the email address that you use to schedule meetings. For devices that will be scheduled in Google Calendar, enter the Google resource email address from G Suites (Calendar > Resources). See [About calendar resources (rooms, etc)](https://support.google.com/a/answer/1686462?hl=en)for more information. For devices that will be scheduled in Microsoft Exchange or Office 365, enter the email address of the room mailbox. See [Create and Manage Room Mailboxes](https://technet.microsoft.com/en-us/library/jj215781) for more information. |
| 9  | Click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 10 | Activate the device with the code provided.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

[Add a service](#task%5F830B0D49558BD00ABA9072496CB1DCC9)

Add a second service if you are deploying for Unified CM Calling with Control Hub. You can also change your service if you added an incorrect one. 

A red dot  next to a call service indicates an error. A green dot  indicates a functional call service.

Before you begin

Depending upon your deployment, you may need one of the following: 

- Your activation code—To register with Control Hub.
- Your TFTP server IP address—For manual deployment to a Cisco Unified Communications Manager.

| 1 | Tap the top-left corner of your phone screen.                                                                                                                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Tap Settings \> Device activation.                                                                                                                                                                                      |
| 3 | Tap a call service. Webex—Select this option for Webex Calling with Control Hub. Cisco UCM—Select this option for Cisco Unified Communications Manager (Unified CM) Calling or for Unified CM Calling with Control Hub. |

[Configure the network settings](#task%5F75DA02D133808F1AFEA87A2470FDF756)

You can configure the phone network settings from the start-up menu when you deploy the device. If you require it, then you can configure the IPv4, DNS, VLAN, or Proxy settings after deployment. For example, you can configure a static IP address or a proxy host.

The following table describes the fields in the Network settings menu.

__Table 3\. Network setup menu__
| Entry           | Type                      | Description                                                                                                                                                                                                                                     |
| --------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Using DHCP      | Off On (Default)          | Allows you to enable or disable DHCP. With DHCP set to On, the DHCP server assigns the IP address. With DHCP set to Off, you assign the IP address.                                                                                             |
| IPv4 address    | String                    | The Internet Protocol (IP) address for the phone. If you assign an IP address with this option, you must also assign a subnet mask, Domain Name System (DNS), and default router. See the Subnet Mask and Default Router options in this table. |
| Subnet Mask     | String                    | The IP addresses for the subnet mask, if your network has a subnet and uses a bitmask to identify the routing prefix.                                                                                                                           |
| Gateway         | String                    | The IP address for the router that acts as the forwarding host to other networks.                                                                                                                                                               |
| DNS Domain Name | String                    | The name of the Domain Name System (DNS) in which the phone resides.                                                                                                                                                                            |
| DNS address 1   | String                    | The IP address of the DNS Server 1.                                                                                                                                                                                                             |
| DNS address 2   | String                    | The IP address of the DNS Server 2.                                                                                                                                                                                                             |
| DNS address 3   | String                    | The IP address of the DNS Server 3.                                                                                                                                                                                                             |
| VLAN            | Auto (Default) Manual Off | The Virtual Local Area Network (VLAN) configured on a Cisco Catalyst switch.                                                                                                                                                                    |
| Proxy           | Off (Default)             | The IP address for the proxy server. Configure the proxy server before you configure the device settings.                                                                                                                                       |
| Proxy port      | String                    | The assigned port on the proxy host.                                                                                                                                                                                                            |
| Username        | String                    | The administrative username required for authentication on the proxy host.                                                                                                                                                                      |
| Passphrase      | String                    | The administrative password required for authentication on the proxy host.                                                                                                                                                                      |
| Use IEEE 802.1X | Toggle                    | When On, the phone uses 802.1X authentication to request and gain access to the network.                                                                                                                                                        |

| 1 | Tap the top-left corner of the phone screen.                          |
| - | --------------------------------------------------------------------- |
| 2 | Tap Settings from the list of menu options.                           |
| 3 | Scroll down and tap Network connection.                               |
| 4 | Tap Open Ethernet settings and review or change the network settings. |
| 5 | Reboot the phone after you configure your settings.                   |

[Webex video integration for Microsoft Teams](#reference%5F5808BDBBBED8B90113FC67FE21BEC155)

Webex Video Integration for Microsoft Teams allows users to join Microsoft Teams meetings from their phone. 

With this integration, the following features are supported on the device:

- One Button to Push for MS teams meetings.
- Share content in the MS teams meetings with an HDMI cable.
- View remote share initiated from other participants in the MS teams meetings.
- View the meeting participant list with each person's mute and share status. The active speaker doesn't display.

Advise users of the following items:

- They can schedule a Microsoft Teams meeting from Outlook with the Microsoft Teams meetings plug in or from Microsoft Teams directly.
- If they add the phone calendar to the invite or if the invitation is forwarded to the mailbox configured for their device, then they can join from the phone with One Button to Push.
- They can also join by dialing the IVR video address and entering the VTC conference ID from the meeting invite, or by dialing the URI listed in the Alternate VTC dialing instructions.

The integration with Microsoft Teams has these requirements:

- A Microsoft 365 tenant with Microsoft Teams accounts for users in the organization
- An active Webex organization
- Licenses for each one of your devices

For additional information, see the <https://help.webex.com/en-us/nffx8kj/Deploy-the-Cisco-Webex-Video-Integration-for-Microsoft-Teams>.

[Troubleshoot your deployment](#reference%5F4F89C1D5274F75A2278FB16A0827A964)

You can easily deploy and set up the Cisco Room Phone. But if you have trouble with device activation, then use the information in the following table to assist you.

__Table 4\. Potential deployment issues__
| Scenario                                                                                                                                                                                     | Reason                                                                                                                                             | Solution                                                         | Notes                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------ |
| A red dot ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/447001-448000/447453.jpg) displays in the top-left corner of the phone home screen. | A red dot indicates an issue with the call service.                                                                                                | Tap the red dot and configure a call service.                    | —                                                                        |
| A red dot ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/447001-448000/447453.jpg) displays in the top-left corner of the phone home screen. | If you deploy for Webex Calling with Control Hub or Unified CM Calling with Control Hub, then a firewall can block your connection to Control Hub. | Confirm that your device connects to an open port on the router. | This type of connection error doesn't appear in the status messages log. |
| A red dot ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/447001-448000/447453.jpg) displays in the top-left corner of the home screen.       | The phone requires a Domain Name System (DNS) address.                                                                                             | Enter a DNS address in the Network Settings.                     | This type of connection error doesn't appear in the status messages log. |
| The following status message displays in Status messages: UTC dhclient-script: W: eth0 => received reason: STOP                                                                              | The device requires an IP address from DHCP.                                                                                                       | Check for a DHCP server configuration or configure a static IP.  | —                                                                        |
