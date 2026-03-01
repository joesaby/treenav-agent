---
title: "One Button to Push with Office 365"
product: "Hybrid Services"
article_id: "98oblc"
url: "https://help.webex.com/en-us/article/98oblc/One-Button-to-Push-with-Office-365"
last_updated: "2024-06-08"
description: "One Button to Push with Office 365"
tags: ["hybrid-services", "webex-meetings", "webex-suite"]
source: "help.webex.com"
---

# One Button to Push with Office 365

## OBTP for Cloud-Registered Devices

### How OBTP Works with Cloud-Registered Devices

**_OBTP for cloud-registered devices with the Hybrid Calendar Service for Office 365_**

1. A user schedules a meeting using a keyword or video address, and invites a cloud-registered video endpoint by its room resource calendar.
2. If the endpoint is available at that time, typically Office 365 automatically accepts the invitation on its behalf.
3. The Microsoft Graph API posts a notification alerting the Hybrid Calendar Service that a meeting has been scheduled.  
For Cisco Webex meetings, the Hybrid Calendar Service retrieves the join details from the Cisco Webex cloud and updates the meeting invitation.
4. Just before the meeting time, cloud-registered devices receive OBTP information from the cloud.

### OBTP for Cloud-Registered Devices Deployment Task Flow

### Before you begin

If you haven't yet set up the Hybrid Calendar Service, see the [Deployment guide for Webex hybrid calendar service](https://www.cisco.com/go/hybrid-services-calendar). If the service is running, proceed with these instructions to add OBTP for cloud-registered room devices and boards.

| 1 | [Add Hybrid Calendar to workspaces with Board, Desk, and Room series](#id%5F127657) Toggle on the calendar service for the device, and configure the room mailbox email address.                                          |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | [Associate Webex personal rooms with Webex App](#task%5FA22438FD8AF74A6F9888797786B3DC9B) If your Webex site is managed in Cisco Webex Control Hub, or users on your Webex site have been linked, you can skip this task. |
| 3 | [Test OBTP with Board, Desk, and Room series](#id%5F127664) Schedule a meeting from the calendar and add a cloud-registered device.                                                                                       |

### Add Hybrid Calendar to workspaces with Board, Desk, and Room series

### Before you begin

This task assumes that you've already created places for the Board, Desk, and Room devices. If you need to create the workspace, see [Add shared devices and services to a workspace](https://help.webex.com/article/1mqb9cb). 

| 1 | Sign in to the customer view of <https://admin.webex.com/login>.                                                                                                                                                                                                                                                           |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the left-hand navigation pane, under Management click Workspaces and select the workspace to modify.                                                                                                                                                                                                                    |
| 3 | Go to Scheduling and select Calendar so that users can use One Button to Push (OBTP) on their devices.                                                                                                                                                                                                                     |
| 4 | Select the calendar provider.                                                                                                                                                                                                                                                                                              |
| 5 | Enter the email address of the room mailbox. (For help locating this email address, see " [Create and manage room mailboxes](https://learn.microsoft.com/en-us/exchange/recipients/room-mailboxes?view=exchserver-2019)" on the Microsoft Docs website.) This is the email address that will be used to schedule meetings. |
| 6 | Click Save.                                                                                                                                                                                                                                                                                                                |

### Associate Webex personal rooms with Webex App

To provide the join button to devices when scheduling Webex Personal Room meetings, users must have their Personal Room associated with their Webex App account. This can happen in one of the following ways:

- The users on your Webex site have been Webex App linked. (For site linking steps, see [Link Webex sites to Control Hub](https://help.webex.com/341eud/Link-Cisco-Webex-Sites-to-Control-Hub).)
- Users change their own preferred Webex site from the Webex App settings or preferences, see [ Change your default meeting site](https://help.webex.com/en-US/article/w4cuvh/Webex-%7C-Change-Your-Default-Meeting-Site)
- For a comprehensive approach, use the bulk CSV import process from Control Hub to set users’ preferredWebExSite in the steps that follow.

| 1 | Sign in to the customer view in <https://admin.webex.com>.                                                                                                      |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the left-hand navigation pane, under Management click Users.                                                                                                 |
| 3 | Click Manage Users.                                                                                                                                             |
| 4 | See [this article](https://help.webex.com/en-US/article/e2okky/Modify-Users-in-Control-Hub-with-the-CSV-Template) for the detailed CSV import/export procedure. |
| 5 | Use a CSV editor to change the preferredWebExSite  attribute for all or some users.                                                                             |
| 6 | Import the CSV file.                                                                                                                                            |

### Test OBTP with Board, Desk, and Room series

Use these steps to set up a test meeting and verify OBTP on a registered device.

| 1 | In Outlook, Outlook Web Access, or [https://mail.office365.com](https://outlook.live.com), create a new meeting, and then add @meet or @webex to the Location field. |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to the Scheduling Assistant and click Add room, and choose the device you want to add.                                                                            |
| 3 | Fill out other meeting information as needed, and send the invitation.                                                                                               |
| 4 | When the meeting is scheduled to begin, verify that the Join button appears on the device.                                                                           |

## OBTP for Premises-Registered Devices

### How OBTP Works with Premises-Registered Devices

**_OBTP for premises-registered devices with the Hybrid Calendar Service for Office 365_**

1. The organizer creates a meeting in Office 365 and then adds `@meet` in the Location field. The organizer invites users and video devices from the Office 365 directory.
2. Office 365 sends a notification to the Hybrid Calendar .
3. The Hybrid Calendar requests and receives the encryption key, and then uses it to encrypt the meeting information.
4. The Hybrid Calendar validates meeting creation and recipients and the calendar connector sends details to TMS.
5. The TMS creates the meeting on the on-premises conference bridge and sends the join details back to the calendar connector.
6. The connector updates the meeting invitation with the join details that are provided by TMS, and the updated join details appear when invitees view the meeting in Office 365.
7. Just before the meeting time, the video devices that were invited to the meeting receive the Webex join details information from the TMS.

| ![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-notes.svg) | Cisco TMSXE is not part of this integration. The Calendar Connector handles the role of coordinating between Cisco TMS and the calendar system. |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |

### Requirements for TMS integration

This integration requires the following components:

- The cloud-based Hybrid Calendar with Office 365, deployed and configured
- Expressway (to serve as the connector host between your TMS and the Hybrid Calendar), installed and running

  - Download from [software.cisco.com](https://software.cisco.com/download/navigator.html?mdfid=285978528&catid=278875240) at no charge.
  - We recommend the latest release of Expressway for connector host purposes. See [Expressway connector host support for Hybrid Services](https://collaborationhelp.cisco.com/article/ruyceab) for information about Expressway version support.
  - We currently support either a single Expressway node or two nodes operating as single-node clusters, dedicated to hosting this integration. We recommend two hosts. If the active host goes down, after a couple of minutes, new meeting requests are sent to the other host.  
  The hosts must not be running any other hybrid service connectors. Also, the TMS integration hosts must be the only calendar connector hosts in your Webex App. organization.
  - We recommend a maximum of 10,000 scheduling users for this integration.
- TelePresence Management Suite (TMS) 15.9 or later, installed and running, with the following configuration in place:

  - A valid CA-signed server certificate must be installed. This integration does not support self-signed certificates.
  - Each endpoint to be booked must already be added to TMS and licensed for general TMS usage.
  - The TMS must have the same option key that is required to book endpoints with TMSXE, which is either of the following:  
  For each Expressway connector host that you deploy, TMS must have one or more option keys, depending on your deployment size. The integration uses the same option keys that are required to book endpoints with TMSXE, which are either of the following:

    - Small deployments—One TelePresence Management Suite Extension for Microsoft Exchange (TMSXE) option key for every 25 telepresence endpoints that are integrated with TMS (part number L-TMS-MSEX-25).
    - Larger deployments—One Application Integration Package option key (part number L-TMS-APPINT).  
  For example, if you deploy two connector hosts with 50 telepresence endpoints, you would need either four L-TMS-MSEX-25 option keys or two L-TMS-APPINT option keys for the integration on TMS.  
  If both types of option key are present, TMS only uses the Application Integration Package key.  
  If you already have TMSXE or Application Integration Package option keys:

    - If you are not currently using the option key, you can use it with the Hybrid Calendar integration.
    - If you are using the option key with TMSXE, contact your partner or sales team to request a second option key (or set of keys) for the Hybrid Calendar integration. If you plan to migrate from TMSXE within a short period of time, you can request a 90 day trial, and then reuse your original option key(s) once the migration to the Hybrid Calendar is complete.
  - On-premises conference bridge resources must be configured (Meeting Server recommended).  
  On-premises conference bridge resources, if used for this integration, must be configured (Meeting Server recommended).
  - Users' time zones in TMS must match their time zones in the calendar system. For instructions on setting the time zone in TMS, see "User Administration" in the applicable [Cisco TelePresence Management Suite Administrator Guide](https://www.cisco.com/c/en/us/support/conferencing/telepresence-management-suite-tms/products-maintenance-guides-list.html).
- A single Expressway node (to serve as the connector host between your TMS and the Hybrid Calendar), installed and running

  - Download from [software.cisco.com](https://software.cisco.com/download/navigator.html?mdfid=285978528&catid=278875240) at no charge.
  - We recommend the latest release of Expressway for connector host purposes. See [Expressway Connector Host Support for Cisco Webex Hybrid Services](https://collaborationhelp.cisco.com/article/ruyceab) for information about Expressway version support.
  - We currently support only a single Expressway node dedicated to hosting this integration. The node must not be running any other hybrid service connectors. Also, this node must be the only calendar connector host in your Webex APP organization.
  - We recommend a maximum of 10,000 scheduling users for this integration.

### Deployment task flow for the TMS integration

To add the TMS integration to your Hybrid Calendar with Office 365 deployment, perform the following tasks.

### Before you begin

If you haven't yet set up the Hybrid Calendar, see the [Deployment guide for Hybrid Calendar](https://www.cisco.com/go/hybrid-services-calendar) instead of this article. If you've already got the service running, proceed with these instructions to add the join button for premises-registered devices.

| 1 | [Complete prerequisites for TMS Integration](#id%5F113767)                                                                                                                                                                                                                   |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | [Complete the prerequisites for the TMS integration](#id%5F127792)                                                                                                                                                                                                           |
| 3 | [Configure the @meet keyword action](#id%5F93725) Allows users to schedule with the TMS integration.                                                                                                                                                                         |
| 4 | [Configure Office 365 room mailboxes in TMS](#id%5F93733) Maps video device systems in TMS to the email addresses of Office 365 room mailboxes, so that the Hybrid Calendar can recognize when users invite the devices to meetings and coordinate the join button with TMS. |
| 5 | [Register Expressway-C connector host to the Webex cloud](#id%5F93778) Connects your Expressway to the Webex cloud. This creates a resource in <https://admin.webex.com> and downloads connector software on to the Expressway.                                              |
| 6 | [Link the calendar connector to TMS](#id%5F93787) Configures the details that the calendar connector needs to communicate with TMS and adds on-premises conference bridge telephony details to invitations, if applicable.                                                   |
| 7 | [Add a meeting server to TMS](#id%5F93796) Enables the integration to schedule @meet meetings on-premises.                                                                                                                                                                   |
| 8 | [Test the Office 365 and TMS integration](#id%5F93815) Verifies the integration with TMS.                                                                                                                                                                                    |

### Complete the prerequisites for the TMS integration

| 1 | If you haven't already done so, set up the cloud-based Hybrid Calendar with Office 365\. See <https://www.cisco.com/go/hybrid-services-calendar> for instructions.                                                                                                                                                                                                                                                 |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Make sure you have met all of the [Requirements for TMS integration](#id%5F98443).                                                                                                                                                                                                                                                                                                                                 |
| 3 | Provide the following port access for the Expressway that will serve as your Calendar Connector host for the TMS integration: Port access for HTTPS or secure web sockets outbound from Expressway to \*.rackcdn.com, \*.ciscospark.com, \*.wbx2.com, \*.webex.com, \*.webexcontent.com, and \*.clouddrive.com: TCP port 443 (secure) Port access for HTTPS outbound from Expressway to TMS: TCP port 443 (secure) |

### Configure the @meet keyword action

To provide the TMS integration functionality to users, configure `@meet` in Control Hub Using an organization administrator account.

Do these steps to have the integration schedule a meeting that is hosted with on-premises conference bridge resources when users use this keyword.

By default, the @meet keyword creates a space in Webex and adds join details for it.

With the TMS integration, when a scheduler invites a room to the meeting, TMS books the room and sends OBTP to the associated devices. OBTP works regardless of how you configure the @meet keyword, and it also works for @webex.

| 1 | Sign in to the customer view of <https://admin.webex.com/login>.                |
| - | ------------------------------------------------------------------------------- |
| 2 | In the left-hand navigation pane, under Services click **Hybrid**.              |
| 3 | From the Hybrid Calendar card for Exchange, click Edit settings.                |
| 4 | In the Keywords section, for @meet, choose Cisco TelePresence Management Suite. |
| 5 | Click Save.                                                                     |

### Configure Office 365 room mailboxes in TMS

Use this procedure to add the Office 365 room mailbox addresses of video devices one at a time in TMS. Alternatively, you can use Bulk Upload to configure multiple addresses. For instructions, see "Bulk Room Email Mapping for Endpoints" in the applicable [Cisco TelePresence Management Suite Administrator Guide](https://www.cisco.com/c/en/us/support/conferencing/telepresence-management-suite-tms/products-maintenance-guides-list.html). 

### Before you begin

- Each video system that users want to add to meetings must have a room mailbox in Office 365 in order for TMS to provide the join button. For help creating room mailboxes, see [Creating and managing resource mailboxes in Office 365](https://support.microsoft.com/en-us/help/10063/creating-and-managing-resource-mailboxes-in-office-365).
- Gather the credentials of an organization domain account with Admin privileges to TMS.

| 1 | If you have not already done so, create the room mailboxes in Office 365.                                                                                                                                                       |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From a web browser, sign in to TMS.                                                                                                                                                                                             |
| 3 | Go to Systems \> Navigator.                                                                                                                                                                                                     |
| 4 | Locate and click the video system to configure with the room mailbox address.                                                                                                                                                   |
| 5 | On the Summary tab, click Edit Settings and enter the room mailbox address in the Email Address field. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/432001-433000/432144.jpg) |
| 6 | Click Save.                                                                                                                                                                                                                     |
| 7 | Repeat steps 4 through 6 for each video device.                                                                                                                                                                                 |

### Register Expressway-C connector host to the Webex cloud

Use this procedure to register a single Expressway-C node to the cloud and download connector software onto the Expressway-C. (We currently support only a single Expressway node for this integration.)

Use this procedure to register an Expressway-C node to the cloud and download connector software onto the Expressway-C. (We currently support either a single Expressway node or two Expressway nodes operating as separate single-node clusters for this integration.) 

The TMS integration uses Hybrid Calendar for Microsoft Exchange setup process, but ultimately you will link the Calendar Connector to TMS. Once you link to TMS, you must not link any connector in your Webex App organization to Microsoft Exchange.

### Before you begin

- Make sure your Expressway-C is running on a version that's supported for hybrid services. See the _Supported Versions of Expressway for Cisco Webex Hybrid Services Connectors_ documentation ( <https://help.webex.com/article/ruyceab>) for more information about which versions are supported for new and existing registrations to the cloud.
- Sign out of any open connections to the Expressway-C interface that are open in other browser tabs.
- If your on-premises environment proxies the outbound traffic, you must first enter the details of the proxy server on **Applications \> Hybrid Services \> Connector Proxy** before you complete this procedure. Doing so is necessary for successful registration.

| 1 | Sign in to the customer view of <https://admin.webex.com/login>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the left-hand navigation pane, under Services click **Hybrid**. The Webex cloud rejects any attempt at registration from the Expressway web interface. You must first register your Expressway through Control Hub, because the Control Hub needs to hand out a token to the Expressway to establish trust between premises and cloud, and complete the secure registration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3 | Click Set up on the Hybrid Calendar for Microsoft Exchange card, and then click Next. ![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-notes.svg) Do not set up this integration if you already have an Expressway connector host for Microsoft Exchange or Office 365 registered for your organization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4 | From the customer view in <https://admin.webex.com>, in the left-hand navigation pane under Services click Hybrid , and then choose one: If this is the first connector host you're registering, click **Set up** on the Hybrid Calendar for Microsoft Exchange card, and then click **Next**.If you've already registered one connector host, click View all on the Hybrid Calendar for Microsoft Exchange card, and then click Add Resource. The Webex cloud rejects any attempt at registration from the Expressway web interface. You must first register your Expressway through Control Hub, because the Control Hub needs to hand out a token to the Expressway to establish trust between premises and cloud, and complete the secure registration. ![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-notes.svg) Do not set up this integration if you already have an Expressway connector host for Microsoft Exchange or Office 365 registered for your organization.                                                                                                                                                                                                                                                                                                                                                                               |
| 5 | Choose Register a new Expressway with its Fully Qualified Domain Name (FQDN), enter your Expressway-C IP address or fully qualified domain name (FQDN) so that Webex creates a record of that Expressway-C and establishes trust, and then click **Next**. You can also enter a display name to identify the resource in Control Hub. ![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-caution.svg) To ensure a successful registration to the cloud, use only lowercase characters in the hostname that you set for the Expressway-C. Capitalization is not supported at this time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 6 | Click **Next**, and for new registrations, click the link to open your Expressway-C. You can then sign in to load the Connector Management window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 7 | Decide how you want to update the Expressway-C trust list: A check box on the welcome page determines whether you will manually append the required CA certificates to the Expressway-C trust list, or whether you allow Webex to add those certificates for you. Choose one of the following options: Check the box if you want Webex to add the required CA certificates to the Expressway-C trust list. When you register, the root certificates for the authorities that signed the Webex cloud certificates are installed automatically on the Expressway-C. This means that the Expressway-C should automatically trust the certificates and be able to set up the secure connection. ![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-notes.svg) If you change your mind, you can use the Connector Management window to remove the Webex cloud CA root certificates and manually install root certificates. Uncheck the box if you want to manually update the Expressway-C trust list. See the Expressway-C online help for the procedure. ![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-caution.svg) When you register, you will get certificate trust errors if the trust list does not currently have the correct CA certificates. See [Certificate Authorities for Hybrid Services](#reference%5FEDF290CCFAF3E40B3ECEDE43CB44E0BD). |
| 8 | Click **Register**. After you're redirected to Control Hub, read the on-screen text to confirm that Webex identified the correct Expressway-C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 9 | After you verify the information, click **Allow** to register the Expressway-C for Hybrid Services. Registration can take up to 5 minutes depending on the configuration of the Expressway and whether it's a first-time registration. After the Expressway-C registers successfully, the Hybrid Services window on the Expressway-C shows the connectors downloading and installing. The management connector automatically upgrades itself if there is a newer version available, and then installs any other connectors that you selected for the Expressway-C connector host. Each connector installs the interface pages that you need to configure and activate that connector. This process can take a few minutes. When the connectors are installed, you can see new menu items on the **Applications \> Hybrid Services** menu on your Expressway-C connector host.  If registration fails and your on-premises environment proxies the outbound traffic, review the Before You Begin section of this procedure. If the registration process times out or fails (for example, you must fix certificate errors or enter proxy details), you can restart registration in Control Hub.                                                                                                                                                                         |

### What to do next

Repeat the steps in this task to register the second Expressway connector host if applicable.

#### Certificate Authorities for Hybrid Services

The table lists the Certificate Authorities that your on-premises or existing environment must trust when using Hybrid Services.

If you opted to have Webex manage the required certificates, then you do not need to manually append CA certificates to the Expressway-C trust list. 

| ![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-notes.svg) | The issuers used to sign the Webex host certificates may change in future, and the table below may then be inaccurate. If you are manually managing the CA certificates, you must append the CA certificates of the issuing authorities that signed the currently valid certificates for the hosts listed below (and remove expired/revoked CA certificates). |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| Cloud hosts signed by this CA | Issuing CA                                                              | Must be trusted by                                                                            | For this purpose                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| CDN                           | O=Baltimore, OU=CyberTrust, CN=Baltimore CyberTrust Root                | Expressway-C                                                                                  | To ensure Expressway downloads connectors from a trusted host                                        |
| Common identity service       | O=VeriSign, Inc., OU=Class 3 Public Primary Certification Authority     | Windows Server 2003 or Windows Server 2008 hosting the Cisco directory connector Expressway-C | To synchronize users from your Active Directory with Webex and to authenticate Hybrid Services users |
| Webex App                     | O=The Go Daddy Group, Inc., OU=Go Daddy Class 2 Certification Authority | Expressway-C                                                                                  |                                                                                                      |

**Related Information**  

[Supported Certificate Authorities for Cisco Webex](https://collaborationhelp.cisco.com/article/en-us/0q4utq)

### Link the calendar connector to TMS

### Before you begin

The TMS must have a valid CA-signed server certificate installed. This integration does not support self-signed certificates.

| 1 | From the Expressway-C connector host, go to **Applications \> Hybrid Services \> Calendar Service \> Cisco Conferencing Services Configuration**, and then click **New**.                                                                                                |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Select Type as TMS under Conferencing Services Type.                                                                                                                                                                                                                     |
| 3 | Enter the username and password of the TMS administrator account that you want the calendar connector to use to connect to TMS. ![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-notes.svg) Enter only the username, without the domain, in the username field. |
| 4 | Under TMS Server Details, enter the fully qualified domain name (FQDN) and domain in the respective fields. ![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-notes.svg) Enter the NETBIOS domain name for the TMS Domain Name field.                            |
| 5 | Under Telephony Invite Details, enter the appropriate information for Toll Identifier, Toll Number, Toll Free Identifier, Toll Free Number, and Global Call-in Numbers (URL).                                                                                            |
| 6 | Click Save. TMS is listed under Cisco Conferencing Services Configuration.                                                                                                                                                                                               |
| 7 | Click TMS and click Test Connection. The calendar connector tests the connection to the TMS environment. If the test returns an error message, correct any errors in the configuration and try the test again.                                                           |
| 8 | When you've confirmed the connection, go to Applications \> Hybrid Services \> Connector Management and click Calendar Connector Service.                                                                                                                                |
| 9 | Select Enabled from the Active drop-down list and click Save. The calendar connector starts and the status changes to Running.                                                                                                                                           |

### Add a meeting server to TMS

When you configure `@meet` to use the TelePresence Management Suite action, the TMS uses any bridge configured in the Administrative Tools \> Configuration \> Conference Settings \> Advanced.

| To allow users to schedule meetings on a meeting server using the Hybrid Calendar integration with TMS, add the server using the steps in the meeting server section of the applicable [Cisco TelePresence Management Suite Administrator Guide](https://www.cisco.com/c/en/us/support/conferencing/telepresence-management-suite-tms/products-maintenance-guides-list.html). |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### Test the Office 365 and TMS integration

Use these steps to schedule a test meeting and verify the integration.

| 1 | Test meeting scheduling with @meet: In a web browser, sign in to https://outlook.office365.com with an Office 365 user account that is enabled for Hybrid Calendar. Click New \> Calendar event. Enter an event title in the Add a title for the event text box. Enter @meet in the Add a location or a room text box. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/432001-433000/432146.jpg) In the People tab, invite users and add rooms (or other video devices) for OBTP. Send the invitation. The Hybrid Calendar updates the meeting with the join details. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/432001-433000/432148.jpg) |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In a web browser, sign in to TMS and go to Booking \> List Conferences. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/432001-433000/432147.jpg) The test meeting and other meetings that are scheduled with @meet are listed in TMS with 'Calendar Connector' in the External Service column.![](https://www.cisco.com/c/dam/en/us/td/i/esp/icons/icon-notes.svg) You cannot edit Calendar Connector meetings in TMS.                                                                                                                                                                                                                                                                        |

### Troubleshoot the TMS integration

Use these tips to check the status of the various components of the TMS integration with the Hybrid Calendar.

| 1 | Sign in to the customer view of <https://admin.webex.com/login>.                                                                                                                                                                                                                                                                                                                                                        |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the left-hand navigation pane, under Services click **Hybrid**.                                                                                                                                                                                                                                                                                                                                                      |
| 3 | Verify the number of users who are enabled for the Hybrid Calendar. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/432001-433000/432145.jpg)                                                                                                                                                                                                                            |
| 4 | Check the status of the connectors in Control Hub. In the left-hand navigation pane, under Services click Hybrid, and then click All Resources from the on-premises resources card. From the resource card for the TMS integration, click the Node link below the resource FQDN or IP address. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/432001-433000/432158.jpg) |
| 5 | Compare the status above to the status of the connectors on the Expressway connector host. From Expressway, go to Applications \> Hybrid Services \> Connector Management. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/432001-433000/432159.jpg)                                                                                                                     |

### Notable behavior for the TMS integration with Office 365

This section lists limitations and notable behavior for the TMS integration with Office 365\. 

For currently open issues, see the "TMS Integration with Office 365" issues list in the Office 365 (Cloud-Based Service) section of the [Known Issues with Hybrid Calendar](https://help.webex.com/article/qtrehbb/Known-Issues-with-Hybrid-Calendar-Service#id%5F83211).

- Editing a meeting series during an active instance of the series results in the following behavior:

  - TMS updates all instances other than the in-progress instance.
  - The currently active instance becomes an exception in TMS.  
This is the expected behavior, but differs from the behavior of Office 365, which updates the active instance as well.
- A meeting that is scheduled more than 5 months in the future may not get immediately processed by the cloud-based Hybrid Calendar for Microsoft Office 365\. The service processes meetings that are 5-6 months in the future on a daily basis using a sliding window, so once the meeting's scheduled date falls within the window, it will get processed and the meeting scheduled in TMS.  
This is a limitation of the cloud-based Hybrid Calendar for Microsoft Office 365 for all types of meetings.
