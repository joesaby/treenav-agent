---
title: "Enhanced emergency calling for Webex Calling"
product: "Webex Calling"
article_id: "av6oo3"
url: "https://help.webex.com/en-us/article/av6oo3/Enhanced-Emergency-Calling-for-Webex-Calling"
last_updated: "2026-02-12"
description: "Webex Calling&#x27;s E911 service provides dynamic, location-based emergency call
routing to Public Safety Answering Points (PSAPs) across the U.S., its
territories, and Canada by using the PIDF-LO (Presence Information Data
Format-Location Object)."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Enhanced emergency calling for Webex Calling

**Emergency services for Webex Calling** 

With Webex Calling, you can set up and manage emergency services for users through different methods, prioritized by their precedence. These methods ensure that emergency calls are routed accurately based on user location and device type, complying with regulatory requirements.

- **Nomadic E911 Service**—RAY BAUM’S Act Phase 2 began in January 2022, and requires emergency calls to send a correct dispatch address for non-fixed devices and for nomadic users (for example, a Webex App user who take their app off-premises). This E911 service provides the configurations and settings to meet the regulatory requirements, when configured according the legal needs. When a nomadic user takes the Webex App to an off-premises location it prompts the user to input the dispatch address. Webex Calling uses this dispatch address in the event the user places a 911 call from that location. When the user connects to an off-premises network for which they have already provided an address, Webex App automatically uses the address provided earlier for that network. The Webex App detects network changes and prompts the user to input an address only when the user connects from a different off-premises network.

When a user makes an emergency call from the line that belongs to a different location, the emergency call is routed to the nearest PSAP location based on the physical location of the device. For more information, see [Configuration of shared lines and virtual lines across locations](https://help.webex.com/c5cgxd).

This article focuses on the Enhanced emergency (E911) service.

For information on the National Suicide Prevention Lifeline and Veterans Crisis Line for Webex Calling, see: [Enhanced 988 National Suicide Prevention Lifeline for Webex Calling](https://help.webex.com/en-us/article/8hp9k1/).

## Enhanced Emergency Calling checklist

**Enhanced Location Choices**

These enhanced location choices enable accurate and dynamic emergency call routing and location identification to comply with regulatory requirements and improve emergency response effectiveness.

| Location Choice                                                 | Description                                                                                               | Supported Devices/Clients                                                                        |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| HTTP Enabled Location Delivery (HELD) HELD+ (Used by Webex App) | Dynamic location via network discovery using LIS and PIDF-LO format HELD+ devices use the network wiremap | Cisco MPP phones, Webex App                                                                      |
| LLDP-MED                                                        | Location via network switch location TLVs providing civic address info                                    | Cisco 9800/8875 phones on supported call controllers                                             |
| Nomadic E911 Service                                            | User-entered dispatch address for off-premises Webex App users                                            | Webex App (desktop/mobile). Webex App uses HELD+ and the address provided by the user            |
| Caller ID-Based Location                                        | Location based on Caller ID for non-HELD devices                                                          | Poly VVX, Yealink, other non-HELD devices. This applies to all phones with or without HELD/HELD+ |

The following steps allow you to gather the required information to set up this service successfully: 

- Get your RedSky account.
- Set up Alerts—Ensure to have the email address of the people within the organization to receive notification when a user dials the 911 service.
- Configure Network Wire map—You need wireless access point or network information of the user. To detect the user's exact location within your office buildings (on-premises), you need information about one or both of these networking elements:  

  - Wireless access point MAC address
  - LLDP switch MAC
  - Port information for wired devices
  - IP address subnet information for each of your on-premises locations.

Using the network that the user's device is connected, and the configuration details help to automatically determine the on-premise location.

Before you proceed to the next area, ensure you have the information necessary to configure all the steps. For detailed information on configuring the above settings refer to [Administration Guide](https://resources.e911cloud.com/manuals/Horizon%20Mobility%20Administration%20Guide.pdf). 

**In Control Hub:**

- Update Service Settings
- Enable Emergency Calls in all your U.S. locations.
- Test Emergency Service address by dialing 933 from each of these locations.

## Configure the Emergency Calling service 

| 1 | Configure E911 Locations—Add your building and locations in RedSky. For every US or Canada location with unique dispatchable address, you must add the details in the RedSky portal. For example: 170 West Tasman Drive San Jose, CA 95134-1706 USA is the building address and locations can be East Wing, 1st floor, or Conference room 2nd floor in the building. If your organization has multiple locations with different administrators managing each location, then set up the E911 configurations for each location separately. ![E911 account setup screen in Control Hub on the 'Configure E911 locations' step showing setup for multiple locations.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/468001-469000/468178.jpg) You must have complete details for the multiple locations in your organization such as buildings, locations and wiremaps information, to continue with the configurations. If you have information only for a specific location, Click Save and Exit and launch the wizard from the specific location. Go to Enhanced Emergency Calling and set up the calling settings using the Configure E911 location wizard. See [Enable the E911 service for Webex Calling locations](#id%5F134598) for details. ![E911 account setup screen in Control Hub on the 'Configure E911 locations' step showing setup for a single locations.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/468001-469000/468231.jpg) |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select I confirm that I have updated my E911 Locations and that failure to do so will result in my calls being re-routed to relay centers. Relay center call charges will be billed back to the partner and/or customer.. Click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3 | Set up Alerts—You can set the alerts for individual or multiple locations. Select I confirm that I have updated Alerts settings in the E911 administrator portal. Click Next. ![E911 account setup screen in Control Hub on the 'Setup Alerts' step.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/468001-469000/468179.jpg) See [Setup Alerts](#Cisco%5FConcept.dita%5Fbb894b65-33b0-4343-bb0e-faf0fdd8371d), to know detailed information on the configuration. The FCC Regulations require Enterprises to have an emergency response team to be notified whenever an employee makes a call to 911\.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4 | Configure Network Elements—Complete these configurations in the RedSky portal and select I confirm that I have read and understand location configuration is required in the E911 administration portal to detect 911 caller locations option on the wizard. This activity is time-consuming. ![E911 account setup screen in Control Hub on the 'Network Elements' step.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/468001-469000/468180.jpg)  See [Administration Guide](https://resources.e911cloud.com/manuals/Horizon%20Mobility%20Administration%20Guide.pdf) for details on configuring the network elements. Click Next. Once the configuration is complete, it allows RedSky to receive network connectivity information and test calls to allow MPP phones to place calls to RedSky's emergency test number 933\. The test calls ensure that the address information is prompted correctly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 5 | Enable Emergency Calling—This configuration allows 911 calls to route to RedSky. Select I confirm that I have updated the Alerts settings in the E911 administration portal and Click Done. ![E911 account setup screen in Control Hub on the 'Enable Emergency Calling' step.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/468001-469000/468181.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Change the emergency service address for a user

By default, the Emergency Service Address (ESA) specified for a location during Cisco Calling Plan setup applies to all of the phone numbers assigned to that location. However, if you need to modify the ESA for an individual user—such as a remote employee working from home—you can assign a different ESA to the phone number associated with that user. 

To configure an ESA for an user, ensure the following conditions are met:

- The user has a non-mobile primary phone number assigned.
- The user’s location is within the U.S. or Canada.

These conditions are necessary because the ESA is tied to the user's phone number and location. This setup allows accurate routing of emergency calls and proper callback to the user through the Emergency Callback Number (ECBN) associated with their location or phone number.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                        |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Management \> Users.                                                                                                                                                                                                                                                                                                                |
| 3 | Select the user that you want to modify and click Calling.                                                                                                                                                                                                                                                                                |
| 4 | Select the right arrow to expand the primary phone number settings under Numbers.                                                                                                                                                                                                                                                         |
| 5 | Under Emergency Service Address, select Custom Address. Enter the following details. In case of an emergency, the local emergency response crew will use this address to locate the caller. Service Address City/Town State/Province/Region Zip/Postal code                                                                               |
| 6 | Update the information for the workspace and click Validate. On entering a service address, the system validates the address. If the system cannot find the address, a Suggested Addressdisplays in a side panel. Review the suggested address and click Apply to update the Emergency service address. Click Save , to save the changes. |

A custom emergency address overrides the location's default emergency address for the specific user.

- [RedSky](#generic-template%5F7a725fab-a643-4f75-bb5a-5383eaa792e6)

## RedSky overview

RedSky Technologies, Inc., a cloud-based emergency services solution is designed to support Webex Calling. It enables enterprises to comply with FCC regulations by delivering 911 emergency calls to the appropriate Public Safety Answering Point (PSAP) based on the caller’s dispatchable location. This location includes validated street address and details such as floor and room information, which are critical for efficient emergency response.

Key features of RedSky include:

1. **Location Determination**\-Automatically identifies endpoint locations when devices are on-premises by matching network connections to pre-provisioned dispatchable locations. For off-premises devices, users can self-provision their location through a client application.
2. **Call Routing**\- Routes 911 calls to the correct PSAP using the dispatchable location.
3. **Notifications**\-Sends notifications to administrators using SMS or email, and enhanced options like real-time screen pop-ups, conference calls with security desks, and call recording for post-call analysis.
4. **Cloud-Based**\- Entirely cloud-hosted with no need for on-premises appliances or dedicated SIP trunks.

RedSky also integrates with Cisco Emergency Responder and Unified Communications Manager to provide seamless emergency call handling, including location updates and call completion for both on-premises and off-premises users. This integration supports compliance with E911 regulations by tracking device locations and routing emergency calls appropriately. Off-premises users can define their location through a web interface if not previously set.

Additionally, RedSky’s E911 Anywhere solution offers enhanced notification capabilities and integrates with Cisco’s emergency communication ecosystem to provide mass alerts, panic button activation, and critical notifications.

## Process workflow for E911 service integration

From a provisioning standpoint, this service is integrated with Webex Calling in Control Hub. However, this integration requires provisioning and validation using two independent portals.

The primary linkage between the systems from a provisioning standpoint is the HELD Company ID and Secret Key from the Redksy administration portal. When your RedSky account is created, a Company ID and Secret Key is automatically copied into your Webex Calling configuration wizard. This Company ID and Secret Key is used to communicate on various communication protocols to RedSky (HELD requests from HELD-enabled devices that are learning a location, call signaling when callers dial 911 or 933 calls) and the Company ID and Secret Key allow this service to correlate the requests to the appropriate customer in their cloud.

The following diagram shows the overall provisioning flow for integrating this E911 service with Webex Calling. Items marked with a clock icon represent provisioning and validation steps that require more time. Mismatches in provisioning or incomplete validation can result in mishandled calls. 

## Creating your E911 account

Webex Calling customers with users in the US are entitled to get an account. Users in Canada can also get an account or purchase the license. Set up emergency call settings for US and Canada locations in your organization to meet the requirements that are defined for your state and federal regulations.

Partners must go through a one-time onboarding with RedSky in order to create an account with partner privileges. The workflow to create an account is as follows:

- Account Info
- Update Service Settings
- Configure E911 Locations.
- Setup Alerts
- Network Elements
- Enable Emergency Calling.

- [Partner Administrator](#Cisco%5FGeneric%5FTopic.dita%5Febf5642d-d37f-4898-bb56-0654a447b5cb)
- [Customer Administrator](#Cisco%5FGeneric%5FTopic.dita%5Fb511ee35-2a5e-4458-b684-a6079eefb6c8)

Create an E911 account

### Create an E911 account 

When you use Control Hub to create E911 accounts for customers, it creates the accounts under Cisco E911 account. If you wish to create the E911 account under your (Partner) RedSky account to enable you to manage and configure the settings on the customer's E911 administrator portal, then follow this process to submit a request through the E911 Customer Account Setup. 

Partners must go through a one-time onboarding with RedSky to enhance their account and to get partner privileges.

| 1 | To get your E911 account, find the E911 Customer Account Setup bot. Type the bot name or email ID: E911Account@webex.bot in the search option of the Webex App.                                                                                                                             |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Type support to get the account request form. ![E911 customer account request form from Webex bot.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469437.jpg)                                                                    |
| 3 | Fill in all the details requested in the form and click Submit. You get a notification once the account creation is complete. This process can take upto two business days. If you enter incorrect information such as an invalid Subscription ID, then the account process can be delayed. |

If the E911 account is already created for your customer and you don’t see it under your E911 account, you can use these steps to move the customer's E911 account under your E911 account.

Access an existing E911 account

### Access your E911 account

Use these steps to login to an existing E911 account.

| 1 | Select Login to existing account, to log in to an existing RedSky account. ![E911 account setup screen with 'Log into an existing account' option highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/468001-469000/468176.jpg)                                                                                                                                                                                                                                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Enter the Partner administrator email, which was used to set-up the Partner's E911 account.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3 | Enter the Partner administrator password for that administrator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 4 | Enter the RedSky Organization ID associated with the Webex Calling customer. This field allows to manage the required customer account since the Partner is associated with multiple customers. To find the Organization ID, follow these steps: Login to E911 Administration portal. Select the customer and the associated Administration portal related to the customer displays. In the Dashboard, search for the ID and Access Codes card. You will find the Organization ID. Use this value in the RedSky Organization ID field. |

Set up an E911 account

### Set up an E911 account 

#### Opting out from the E911 service

Choose the Opt this Organization out option if your PSTN service provider handles the emergency calling service for your organization. The PSTN provider sends the emergency service address that is associated to the telephone number. Set up emergency call settings for US locations in your organization to meet the requirements that are defined for your state and federal regulations. See [Telephone-number-based emergency service (or Emergency callback number)](https://help.webex.com/en-US/article/nzqvtyq/Emergency-Callback-Number-in-Control-Hub) for detailed information.

#### Access an existing account

Choose this option to use RedSky, to handle emergency calls for your Webex Calling organization. 

1. Select Login to existing account to log into an existing RedSky account.  
You require RedSky Organization ID when using the partner administrator credentials to set up the E911 account.
2. Enter the Customer administrator email. This is the email ID that was used to set up the customer's E911 account.
3. Enter the Customer administrator password for that administrator.  
Cisco doesn’t store your credentials. The credentials are used once to securely obtain your RedSky HELD Company ID information, and associates your RedSky account with the Webex Calling organization.

  - The wizard provisions the request. It validates the HELD Company ID and Secret Key information for the administrator's address with the details in Control Hub.  
  If you’ve manually entered the HELD Company ID and Secret Key in Control Hub, the setup wizard validates with your account information. If they don’t match, a warning displays. If you wish to proceed using the new account, then the current configurations are updated in Control Hub and the previous information is overwritten.
  - Select I agree to update Control Hub with my organization's RedSky account information option and Click Next.

#### Create a new account

If you don’t have an existing RedSky account, you must create a new account. 

The email must be unique for each E911 account and the same administrator email can’t be a part of two E911 accounts.

One administrator user is provisioned by the setup wizard. This administrator can add subsequent administrator accounts, if your organization wants multiple administrators to manage emergency settings.

1. Select Create account to create a new account.
2. Enter the Administrator Email ID that you wish to use as the RedSky administrator login.
3. Enter the organization ID of the partner. Log in to the RedSky portal as a partner administrator. Copy your organization ID from the dashboard and enter the ID in the field.  
For customer's who are onboarded to RedSky, contact [support@redskytech.com](mailto:support@redskytech.com) to move the customer to the respective partner.
4. Click Next, to provision the account and the administrator.
5. The wizard provisions the request It validates the HELD Company ID and Secret Key information for the administrators address with the details in Control Hub.  
If you have manually entered the HELD Company ID and Secret Key in Control Hub, the setup wizard validates with your account information. If they don’t match, a warning is displayed. If you wish to proceed using the new account, then the current configurations are updated in Control Hub and the previous information is overwritten.
6. Select the I agree to update Control Hub with my organization's RedSky account information option and Click Next.
7. You receive a email notification on successful creation of the account. Administrators can reset their password using the [link](https://wxc.e911cloud.com/).

## RedSky's role in the Webex Calling E911 service

Per-device location support applies to HELD-capable MPP devices and [Webex App](https://help.webex.com/en-us/n3xx7vcb/Get-Started-with-Webex) only. It doesn't apply to the [Webex Calling app](https://help.webex.com/en-us/278bz2/Explore-the-Webex-Calling-App) or non-HELD devices.

Control Hub provides an integration point for enterprises to connect to their RedSky account. The service is enabled on a per-location basis. When a location is fully enabled in Control Hub, emergency calls (933 for test calls and 911 for emergency calls) placed from all phones and soft clients assigned to that location in Control Hub use enhanced 911 services. RedSky provides an emergency call management portal to configure emergency settings.

RedSky's role in the solution is as follows:

- Maintains the partner/customer provisioned database that is used to map an emergency call to a dispatchable location.
- Based on a calling device's dispatchable location, directs emergency calls to the correct PSAP with information that allows the PSAP to determine the location where emergency personnel should be dispatched as well as the call-back number.
- Generates optional notifications to enterprise personnel.
- For subscriptions with enhanced licenses, bridges enterprise personnel into emergency calls placed by enterprise users and provide pop notifications.  
This feature is not included in the free Cisco licensing package.

## Record emergency calls

As an administrator, you can enable or disable emergency call recording to improve incident analysis and enhance training within your organization. Manage emergency call recording settings in Control Hub to meet your organizations policies and regulatory requirements.

Before you begin, we recommend that you review the following key considerations: 

**Prerequisites** 
- General call recording must be enabled for your organization.
- You must select a recording provider before you can activate emergency call recording.

**How emergency call recording works**

- You can record emergency calls even if the call recording service isn’t enabled for the line making the call.
- Emergency call recording settings override the default call recording settings for lines. This includes mode, announcements, and tones. Webex doesn’t play announcements or tones during emergency call recordings.
- The emergency call isn’t interrupted if the recording fails to start, or stops during the call. Webex doesn’t play notifications or announcements about the recording failure to the caller or callee.
**Storage and metadata**
- Webex stores emergency call recordings based on the provider and storage location configured for your organization or location. Retention periods depend on the provider's storage configuration and your organization’s policies.
- Each recording’s metadata shows who owns the line used, such as a user, workspace, or virtual line. The metadata helps properly identify the recording owner and includes an indicator for emergency calls or Public Safety Answering Point (PSAP) callbacks.
**Access and management** 
- Only compliance officers can play, list, or delete all emergency call recordings. End users access recordings only if call recording is enabled for their line and permissions allow it. For third-party recording providers, some recordings may be anonymous if external identifiers are not assigned.
- Users can’t pause or stop emergency call recordings. The system doesn’t display recording controls on the desk phones or other endpoints during emergency calls.
- The system triggers PSAP callback recordings only when it identifies the callback using the priority SIP header. It doesn’t trigger recordings for other detection methods, such as Emergency Location Identification Number (ELIN).
- Emergency call recording settings can also be managed through [Webex APIs](https://developer.webex.com).

**Limitations and exceptions**

- This feature doesn’t apply to calls redirected via network (including on-premises or trunking scenarios, such as dedicated instance).
- This feature doesn’t apply to calls initiated from Contact Center (Real Time Media Service (RTMS) trunk).
- If user A calls user B, and user A adds user C to form a conference (with user A as the conference controller), but user A isn’t enabled for call recording, then if user C transfers the call to an emergency number (bringing the emergency number into the conference), the call is not recorded at this point.
- An emergency call isn’t recorded in the following scenario:
  - User A initiates a call to user B.
  - User A, who isn’t enabled for call recording, adds user C to create a conference call (user A acts as the conference controller).
  - User C transfers the call to an emergency number, adding the emergency number to the conference.
  - At this point, the call isn’t recorded.

### Enable emergency call recording for an organization

As an administrator, you can enable and manage emergency call recording for your organization. You can record all emergency calls regardless of the line or the devices used to make the calls.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).            |
| - | -------------------------------------------------------------- |
| 2 | Go to Services \> Calling, and click the Service Settings tab. |
| 3 | Scroll to the Call Recordings section.                         |
| 4 | Under Emergency calls, toggle Record emergency calls on.       |
| 5 | Click Save.                                                    |

Enabling emergency call recording at the organization level sets the default for all locations. You can override these settings for individual locations as needed.

### Enable emergency call recording for a location

Use these steps to override the organization level emergency call recording settings for a specific location.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Management \> Locations, and select the location to enable emergency call recording.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3 | Go to the Calling tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4 | Scroll to the Call handling section and select Call recording.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 5 | Under Emergency calls, select one of the following options: Default emergency call settings—Uses the organization's default configuration for compliance announcement, call recording provider, storage location, and the call recording behavior settings. Select different emergency call settings—Shows the Record emergency call toggle, which is enabled by default. This toggle allows you to customize emergency call recording behavior for a specific location. Use this if you want to override organization defaults for specific locations. ![Configurations to set up emergency Call recording](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/490001-500000/494001-495000/494169.jpg) |
| 6 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Setup Alerts - E911 service emergency call notifications

In order to comply with Public Law 115-127, also known as Kari’s Law, any call that's made from within your organization to emergency services must generate an email notification. You can enable notifications across all locations or customize notifications for individual locations, which can be sent to location-specific security personnel. With the E911 serivce, you can get notifications to enterprise personnel through email, SMS, or a desktop application. This is configured in the RedSky admin portal.

When configuring emergency call notifications in the RedSky admin portal, you can do the following:

- Specify multiple email addresses and SMS recipients. For example, you may want your emergency response team, security officer, and/or your main receptionist to get these notifications.
- Set up alerts when a 933 test call is placed or when a device performs a HELD request from an unknown location, providing the administrator to monitor where the users are connecting from.

## Location detection

Webex Calling supports the ability to detect device movement within your enterprise or organization using the [manual 911 service](https://help.webex.com/en-US/article/nzqvtyq/Emergency-Callback-Number-in-Control-Hub). This provides you with the ability to have different emergency call back numbers for different areas within your enterprise or organization.

**E911 service supports these types of location detection:** 

Dynamic location detection for devices that can detect their location based on the device’s current network connection.

- For HELD capable multiplatform firmware (MPP), location detection is based on network discovery. MPP devices use a protocol called HTTP Enabled Location Delivery (HELD) to report their network environment information (upstream LLDP enabled switch, wireless access points (WAP) BSSID, IP address, or their MAC addresses) to the RedSky HELD service.
- For HELD+ capable Webex App on the desktop, location detection is based on network discovery to report their network environment information (upstream LLDP enabled switch, wireless access points (WAP) BSSID, IP address, or upstream gateway default MAC address) to the RedSky HELD+ service (Cisco Discovery Protocol (CDP) isn’t supported). Additionally, if devices are connected through a phone pass-through port, LLDP information cannot be accessed because LLDP packets from the switch stop at the phone.

Dynamic location detection for mobile clients that go off premises.

- For HELD+ capable Webex App on desktop and mobile platforms (tablets) that don’t have a cellular connection, location detection is based on network discovery which includes the wireless access points (WAP) BSSID, IP address, upstream gateway default MAC address, and port/chassis of an upstream switch. The Webex App sends any of the available network identifiers listed above to RedSky. If RedSky determines that the device is in a known location, the user's location is updated automatically. On sign-in, if the Webex App detects that the device has moved to an unrecognized location, the user is prompted to update a new address. However, if the user is already signed in when an unrecognized location is detected, then the user isn’t prompted and the red X displays in the Webex App footer. The user can click the red X to update their location. RedSky validates and stores the new location. When the user makes a 911 call from the Webex App, this address is used as the emergency dispatch address.  
Ignore all VPN and virtual network interfaces on Webex desktop (Windows and MacOS). For Windows, the Webex App uses MSFT\_NetAdapter - the boolean Virtual parameter to filter out VPN and Virtual interfaces.

Fixed device location detection. These are device that doesn't move.

- Telephone Number Based Location Detection: For non-HELD capable devices, which includes mobile devices without cellular access, softphone clients, and any non-Cisco customer premises equipment (CPE), location determination is based on the Caller ID asserted in the test or emergency call.

When you use the E911 service in a Webex Calling deployment, the following methods are used to determine the location for different client types:

- For HELD+ capable Webex App on desktop and mobile platforms (tablets) that don’t have a cellular connection, location detection is based on network discovery just like the HELD devices.
- Webex App on a mobile platform with a cellular connection doesn't use RedSky. Instead, emergency calls are routed through the native dialer via the cellular network, ensuring proper handling by emergency services and providing location information. Due to RedSky's design through the Webex App, you'll receive a pop-up confirming that a cellular emergency call was placed. No further action is required, as the call has already been routed through the cellular network for proper response.  
If your cellular call isn't successful, the pop-up gives you the option to make the call using the Webex App over Wi-Fi. These Wi-Fi calls don't provide emergency services with your location information like cellular calls do.
- MPP devices supporting the HELD protocol provide network connectivity and device information in a HELD transaction. RedSky analyzes it to identify dispatchable location information based on the wiremap (network discovery information) that was provisioned in RedSky's portal.
- Non-HELD capable endpoints are provisioned using static dispatchable location information associated with an E.164 caller ID. This phone number-based address is also used if a HELD capable MPP device's network location can’t be determined using network discovery.

See the Administration documentation for more information about configuring alerts, buildings, locations, and wiremaps in the RedSky admin portal. If E911 service can't find a dispatchable location for a given device that places an emergency call, the call is routed to an emergency calling relay center. The relay center agent works with the caller to determine how best to route the emergency call. The Relay Centers call costs are passed back to the customer if the user hadn’t provided the emergency address in Webex App or because of incorrect configurations in the RedSky administration portal by the administrator.

Impact of virtual line on location detection:

## Deployment scenarios

### PSTN and E911 service enabled locations

In this scenario, emergency calls are identified and sent to the E911 service instead of the configured PSTN. This route is performed for all endpoints at the RedSky-enabled location, including hard phones and portable endpoints (such as mobile phones, tablets, and laptops) for all users at the location. (An exception: cellular-based phone clients send emergency calls directly to the cellular service provider.

### Local gateway and E911 service enabled locations

In this scenario, emergency calls are identified and sent to the E911 service instead of the local gateway. This route is performed for all endpoints at the location enabled with this service, including nomadic endpoints for users assigned to the location. 

### Multinational deployment

In this scenario, Location A is not RedSky enabled—all calls (PSTN and emergency) are routed through the local gateway. Location B is RedSky enabled for US/Canada location—emergency calls are routed to RedSky. 

## Requirements for E911 service integration with Webex Calling

__Table 1\. Requirements for integration with Webex Calling__
| Component                                  | Requirement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| RedSky                                     | Webex Calling Users in the U.S. are entitled to this service with their Webex Calling entitlement. For users in Canada, obtain the RedSky license through Cisco or your service partner. Administrators can access the RedSky administration portal—this step gives you access to a HELD Company ID and Secret Key. Prepare the following configuration in the RedSky administration portal for location determination to address the following types of devices: Calls from HELD devices that use wiremap information for location determination (MPP phones) Ensure you allow access to <https://api.wxc.e911cloud.com> and <https://wxc.e911cloud.com>. The phone and Webex client communicate to the RedSky service by using port 443. For more information, see the [RedSky administrative documentation](https://resources.e911cloud.com/manuals/Horizon%20Mobility%20Administration%20Guide.pdf).                                                                                                                                                                                                                                                                                                                                                                       |
| Control Hub and Webex Calling organization | A Control Hub organization (paid subscription) that includes Webex Calling licenses—The HELD Company ID and Secret Key are required to activate E911 Calling. Enter these values in the Company ID and Secret Key fields of the Control Hub. Access the customer view in Control Hub with a full admin account U.S. or Canada locations can use E911 for emergency Calling. International locations continue to use PSTN for emergency Calling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Control Hub and Locations                  | Enable the Automatic location configuration in the E911 portal toggle in Control Hub, to automatically create the E911 service for any building and location added to Redsky in the U.S. or Canada location. For Webex Calling customers, the toggle is off by default. For Webex Wholesale this toggle is set to on by default. On deleting a Location, the building and location aren’t automatically deleted from the RedSky portal Since the buildings and locations can be associated to network elements.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| HELD-Capable Devices                       | For HELD-capable devices, once a location is enabled for this service. Webex Calling device management systems generate updated device configurations to enable HELD functionality. Resyn or reinitialize each HELD device to pick up the new configuration. If this isn’t done by the administrator, the device can check for configuration updates within the next 24 hours. Until this happens, the devices don’t use HELD for location services. The phones use downloaded configuration parameters to access RedSky's Location Information Server (LIS). They receive a token that Webex Calling passes forward over the peering connection to RedSky when an enabled user dial 911 or 933. HELD-Capable Devices: Cisco Desk Phones 9871, 9861, 9851 and 9841 Cisco 6800, 7800, and 8800 Series desk phones running multiplatform firmware Cisco 7832 and 8832 conference phones running multiplatform firmware Cisco DECT 6800 Series phones running on multiplatform firmware Cisco ATA 191 and ATA 192 running on multiplatform firmware Cisco Room Series, Desk Series, and Board Series devices For a list of all Webex Calling devices, see [Supported Devices for Webex Calling](https://help.webex.com/en-US/article/qkwt4j/Supported-Devices-for-Webex-Calling). |
| Non-HELD Devices                           | For non-HELD capable devices location determination is based on the Caller ID asserted in the test or emergency call. We recommend that these devices aren’t moved from one location to another without administrator approval. Non-HELD Devices: Poly Devices VVX 101, VVX 150 VVX 201, VVX 250 VVX 301, VVX 311, VVX 350 VVX401, VVX 411, VVX 450 VVX 501 VVX 601 TRIO Series: 8300, 8500, 8800 Yealink Devices T3 Series Phone: T33G T4 Series Phone: T41S, T42S, T43U, T46U, T46S, T48S, T48U T5 Series Phone: T53W, T54W, T57W, T58A/T58V, EXP 40/50 CP920, CP960 For a list of all Webex Calling devices, see [Supported Devices for Webex Calling](https://help.webex.com/en-US/article/qkwt4j/Supported-Devices-for-Webex-Calling).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Webex App                                  | Webex App supports HELD+, like all other HELD devices, it needs an updated configuration to communicate with the RedSky location information server. Once configured, the Webex App prompts the user to enter an address when the user is in an off-premises network.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Enable E911 integration in Control Hub for your organization

After you create a RedSky account and provision wiremap-based and caller-ID based information for one or more sites, you must then configure Webex Calling with information that is needed to deliver emergency calls to this E911 service.

Before you begin

Get the HELD Company ID and Secret Key from the RedSky administration dashboard. This value is a Globally Unique Identifier (GUID) that links your Control Hub instance directly to your RedSky organization.

| 1 | Scroll to Enhanced Emergency Calling, and then toggle on the service.                                                                                                                                                                                                                                                                                                                                                                                                 |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Company ID and Secret Keyfields, ensure that it matches with the correct Company ID and Secret Key in the RedSky portal. You can find the Company ID and Secret Key in the HELD section of the RedSky portal. ![IDs and Access Codes section of the RedSky admin portal, showing where to find the HELD Company ID and HELD+ Secret Key.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/460001-461000/460735.jpg) |

What to do next

If the Enhanced Emergency Calling toggle is already active, you can always change any existing Company ID and Secret Key to another one. This feature allows you to correct the entry in case you entered an invalid value.

## Enable the E911 service for Webex Calling locations

After you enable the service at the organization level, you can then enable it for individual locations within your organization. In Control Hub, locations are configuration containers in which user accounts are added. This differs from the RedSky configuration, which tries to track a device's actual physical location. Enabling this feature for a location in Control Hub enables all the users who are a part of that location.

HELD capable MPP phones don't permit a user to hang up emergency calls; the far end must release the call. This poses no problem when the far end releases the call properly, however if the call diverts to an automated system or another issue results in the call not being released, the user may be unable to hang up the line the emergency call was placed from. As a last option, the phone can be manually reset to release the line if necessary. Learn more about the [RedSky integration for Webex Calling](https://techzone.cisco.com/t5/Cisco-Webex-Calling-Carrier/NPI-WxC-TOI-I2244-MR6723-MR6960-RedSky-Integration-for-Webex/ta-p/1394457).

| 1 | Scroll to Enhanced Emergency Calling, and then toggle on the service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Check Allow RedSky to receive network connectivity information and test calls to allow MPP phones to place calls to RedSky's emergency test number 933, and then save your changes. This setting updates the device configuration to enable HELD functionality for all HELD compatible devices at that location. After the devices are reinitialized and pick, up the new configuration they make HELD requests to RedSky's Location Information Server (LIS) to try to determine a valid location. This setting also routes all test calls (933) from that location to the emergency provider. At this point, emergency calls (911) aren’t impacted and routed to the PSTN provider. After you save changes, the state for the location changes to Location Integration On. |
| 3 | Place test calls to 933 to ensure that the calls route properly before you enable full 911 routing for the location. Test calls can be placed from all endpoints assigned to the location, including HELD capable devices, soft phones, and non-HELD devices. The test call (933) connects the caller to an IVR which announces the caller ID and currently known address for that device.                                                                                                                                                                                                                                                                                                                                                                                   |
| 4 | After you confirm that test calls are routing correctly, return to the location overview pane, click RedSky, and then toggle on Route Emergency Calls to RedSky. Save your changes. This setting ensures that not only are MPP phones getting location information from a RedSky LIS, but that actual 911 calls also route to RedSky. After you save changes, the state for the location changes to Routing On.                                                                                                                                                                                                                                                                                                                                                              |

- Once reinitialized, HELD capable devices, including the Webex App, assigned to the location should be making HELD requests and receiving tokens.
- In RedSky, under Organizational Management, go to HELD/HELD+ Routing option. Under this drop-down menu, select  Use DID for Fall-Back Routing of HELD. If this is toggle is ON, when an emergency call is made from a HELD / HELD+ device (which didn’t have an address mapping from the network info), this service checks for a matching DID (in Locations or User) and uses the corresponding address.  
For Non-HELD devices, the above setting does not have any impact. For Non-HELD devices this service will always see if there is a matching DID (in Locations or User) and use the corresponding address.
- DECT and ATAs don't communicate with this service and their calls route to an emergency service provider. Therefore configure the RedSky administrative portal with a location associated with their caller ID.
- Emergency calls from MPP devices not physically on the wiremap (their location was not discovered through HELD) are treated based on their asserted Caller ID. If there’s a location associated with the TN of a E911 user or E911 location that matches the Caller ID, the call is routed based on this criteria.
- The MPP devices don’t allow using midcall features such as Hold, Conference, and Transfer when making emergency calls.
