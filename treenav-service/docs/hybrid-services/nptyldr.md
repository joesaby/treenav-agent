---
title: "Webex Video Integration for Microsoft Teams integration reference"
product: "Hybrid Services"
article_id: "nptyldr"
url: "https://help.webex.com/en-us/article/nptyldr"
last_updated: "2024-11-28"
description: "Webex Video Integration for Microsoft Teams integration reference"
tags: ["hybrid-services", "webex-meetings", "devices"]
source: "help.webex.com"
---

# Webex Video Integration for Microsoft Teams integration reference

## Summary

Webex Video Integration for Microsoft Teams enables Cisco and SIP-capable video devices to join Microsoft Teams meetings.

Here's how the integration enhances the device user's experience when they join Microsoft Teams meetings hosted in your organization:

- Webex meeting experience—multi-screen with flexible layout options
- Participant list showing both Microsoft and video integration participants
- Bi-directional content sharing between the device and Microsoft Teams
- Meeting status indicators on the device, including recording, transcription, and participant waiting in lobby

When you deploy the video integration with the Webex Hybrid Calendar Service, your video devices also get the One Button to Push (OBTP) simplified meeting join experience.

## Architecture overview

The Microsoft Cloud Video Interop (CVI) program enables partners like Cisco to deliver services that join video devices to Microsoft Teams meetings.

**_Solution architecture_**

Webex Video Integration for Microsoft Teams is a Microsoft Qualified third-party Cloud Video Interop solution built on the Webex cloud platform. The CVI partner capabilities in the Webex cloud are available anywhere callers can make business-to-business calls to the public Internet. The common Webex services provide administration, calling infrastructure, interactive voice response systems, and lobbies. Webex media clusters located around the world provide transcoding, protocol translations, and the Teams Bot roles.

With this architecture, video devices place calls to specific SIP URIs hosted by Webex. Webex services answer the calls and assign them to geographically relevant media clusters running in Microsoft Azure. The IVR gathers meeting details if needed, and the Microsoft Teams’ Media CVI bot in the Webex media cluster makes the connection to the Microsoft Teams meeting infrastructure. The media clusters provide the back-to-back connectivity between the participant connected through Webex and the rest of the conference hosted on Microsoft Teams. The entire solution operates as a cloud service.

The video integration enables devices to join Teams meetings as follows:

- If the meeting is enabled for CVI, the device can join using the Video ID and the tenant key.
- If the meeting is not enabled for CVI, the device can join as a guest (cross-tenant join) using the Meeting ID and passcode.

You can enhance the user experience by adding other Webex services. For example, the Hybrid Calendar Service automatically pushes meeting details and simplified Join buttons to the video devices when it’s time to join the meeting.

## Data handling

The video integration uses the following data to connect devices to Microsoft Teams meetings and provide in-meeting features:

- **Enterprise app registration**: During provisioning, an administrator uses the Webex Video Integration application to grant permissions to access the organization’s Microsoft tenant when using the Microsoft Graph API. For more information, see [Webex Video Integration in Microsoft Entra admin center](#id%5F132505).
- **A Webex-provisioned "tenant key"**: This is a per customer value that is used in SIP addresses when the device is calling into the VIMT service.
- **Meeting ID**: Microsoft Teams assigns this identifier when creating the meeting, and includes it in the meeting invitation.  
Users need the Meeting ID to join meetings from Teams clients, or by Direct Guest Join, or by Cross-Tenant join with the VIMT service.  
The video integration uses this ID to specify the target Microsoft Teams meeting during Cross-Tenant join.
- **Meeting Passcode**: Microsoft Teams assigns a case sensitive passcode when creating the meeting, and includes it in the meeting invitation. Users need the passcode to join a meeting with the Meeting ID.  
The video integration uses this passcode to access the target Microsoft Teams meeting during Cross-Tenant join.
- **Video ID**: Microsoft Teams assigns this identifier to a meeting when it is created by a CVI enabled user. Microsoft Teams includes the Video ID in the meeting invitation.  
The video integration uses the Video ID, and the customer's Microsoft tenant ID, to get the meeting join URL from the Microsoft Graph API.  
(Microsoft updated the label to "Video ID" from "VTC conference ID".)
- **Customer’s Microsoft tenant ID**: Used to identify the target Microsoft organization when communicating to the Microsoft Graph API. Also used in the service's administrative interface to identify the provisioned Microsoft tenant.
- **Microsoft tenant-verified domain names**: Used as labels in the service's administrative interface to identify the provisioned Microsoft tenant.
- **Meeting information**: When a participant requests to join a Microsoft Teams meeting through the video integration, the service retrieves details for that meeting including the meeting subject, organizer, date/time, and connection details. Once connected, the service retrieves real-time information such as participant labels, capabilities, and the status of participants connected to the Teams meeting from the Microsoft Graph API and uses them to facilitate the live meeting.  
When you enable the Hybrid Calendar Service for a mailbox, the calendar service uses the _More info_ link, located in the body of calendar entries that include it, to identity the meeting "tenant key" and Video ID.
- **Real-time media and content:** When a participant joins a Microsoft Teams meeting through the video integration, Webex and Microsoft Teams exchange encoded audio, video, and high-frame rate content to enable the two-way audio and video experience between them.

If you deploy the video integration with the Hybrid Calendar Service, also see the [Webex Hybrid Calendar Service with Microsoft 365 Integration Reference](https://help.webex.com/niqovwv). 

## Authentication and authorization 

Webex interacts with your Microsoft Teams environment using the Microsoft Graph API. The cloud-based Microsoft identity provider (IdP) handles authentication for the Microsoft Graph API. Requests to the Microsoft Graph API are authorized by presenting bearer tokens issued by the Microsoft IdP. All communication to the Microsoft IdP and Graph API uses TLS-secured web connections.

To interact with Microsoft Teams media as a service, you register the Webex video integration as an application-hosted media bot homed in a Microsoft 365 tenant managed by Cisco. Teams bots require prior authorization to be able to communicate with an organization’s Microsoft 365 tenant. 

During initial configuration, the service requests authorization for a predefined set of permissions. An administrator grants these application permissions by following the consent flow described below.

Once approved, the Webex service can request bearer tokens, with the correct permissions and customer scope, from the Microsoft OAuth v2.0 IdP. The service uses the bearer tokens to authorize requests to the Microsoft Graph API for provisioning details, health checks, and operation of the Teams bot. 

### Authorization and Microsoft admin consent

Organization administrators with the **Full Administrator** role can use Control Hub to set up the video integration service for their organization. 

The provisioning process requires authentication of, and consent from, a Global administrator of the Microsoft 365 tenant to which your users belong. The application permissions required to operate the Teams bot can only be granted by a Global administrator of the Microsoft tenant using the following admin consent flow. 

The flow includes the following high-level steps:

1. Sign into Control Hub, find and start the video integration setup (for detailed setup steps see [Deploy the Webex Video Integration for Microsoft Teams](https://help.webex.com/nffx8kj/)).  
During the setup process your browser redirects to the Microsoft cloud for authentication and consent.
2. Sign in as a Global administrator for the Microsoft tenant.  
The application prompts for your permission to:

  - Sign you in and read your profile
  - Read directory RBAC settings  
This is so that the application can verify that your account is authorized within your tenant to grant the necessary permissions.
3. Review the requested permissions and click Accept. You don’t need to check Consent on behalf of your organization, as it’s not required.  
The application signs you in and checks your permissions.  
After you're successfully authorized, the application prompts you again. This time, the prompt shows you permissions that the application needs to successfully connect video devices to your Microsoft Teams meetings.  
The prompt shows the application name, vendor domain, and the requested permissions.
4. Click Accept to grant those permissions to the Webex Video Integration application.  
You are redirected back to Control Hub, where you can see tailored PowerShell commands that you need to complete the Microsoft Teams configuration.
5. Use PowerShell to finish the Microsoft Teams configuration, then close the Control Hub panel.  
The setup process tests a Microsoft Graph API call for the organization. If successful, the setup is complete. If not, the administrator can try the authorization process again.

### Permissions granted 

The Webex Video Integration for Microsoft Teams requires explicit permissions in your Microsoft tenant. These permissions are not customizable and are automatically configured by the setup process in Control Hub. 

There are two separate sets of permissions used:

- A set of user-consented permissions used during setup to verify the target tenant information
- A set of permissions granted by administrator consent to the Enterprise Application in your Entra directory. This set enables the service to access your Microsoft Teams environment

### User-Consented permissions

During the setup of the service, we request the following permissions from the signed in user. They allow access to the Microsoft tenant to verify information about the target tenant. We only use these permissions while you are setting up the integration; they are not stored.

You can review these User-Consented permissions in the application's Permissions page in your Entra directory.

__Table 1\. User-Consented permissions and why the setup process needs them__
| Permission required                                                     | Purpose                                                                                                      |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| “Sign in and read user profile” (User.read)                             | Used to read the signed in user’s profile to identify the user’s tenant.                                     |
| “Read directory RBAC settings” (RoleManagement.Read.Directory)          | Used to check if the signed in user is a member of the well known administrator security groups in Entra ID. |
| “Maintain access to data you have given it access to” (offline\_access) | Allows the service to see the data you gave it access to without users being signed in.                      |

### Service permissions

The Microsoft Admin Consent flow grants the following permissions to the "Cisco Webex Video Integration for MS Teams Enterprise Application" in your tenant. These permissions enable Webex service to access your Teams environment. 

The permissions persist with the application in your Entra directory until you remove the Webex service, which also removes the application.

__Table 2\. Administrator granted permissions and why the Webex service needs them__
| Permission                                                                | Usage                                                                                                                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Read domains (Domain.Read.All)                                            | Allows the service to read the tenant’s verified domain names. Control Hub uses the domain names to identify the tenant that the service is linked to.                                                        |
| Initiate outgoing 1-to-1 calls from the app (Calls.Initiate.All)          | Allows creation of calls by the bot to Microsoft Teams users. (Reserved for future use.)                                                                                                                      |
| Initiate outgoing group calls from the app (Calls.InitiateGroupCall.All)  | Allows creation of calls by the bot to a group of Microsoft Teams users. (Reserved for future use.)                                                                                                           |
| Join group calls and meetings as an app (Calls.JoinGroupCall.All)         | Allows the bot to join group calls and scheduled meetings in your organization with the privileges of a directory user. Used for joining participants who are authorized to bypass the Microsoft Teams lobby. |
| Join group calls and meetings as a guest (Calls.JoinGroupCallAsGuest.All) | Allows the bot to join group calls and scheduled meetings in your organization as a guest. Used for joining participants who aren’t authorized to bypass the Microsoft Teams lobby.                           |
| Access media streams in a call as an app (Calls.AccessMedia.All)          | Allows the bot to get direct access to media streams in a call, without a signed-in user.                                                                                                                     |
| Read online meeting details (OnlineMeetings.Read.All)                     | Allows the service to read Online Meeting details in your organization. Used to look up and resolve VTC Conference IDs to Microsoft Teams meetings.                                                           |
| Sign in and read user profile (User.read)                                 | Required for the other permissions listed. The integration does not use it directly.                                                                                                                          |

Microsoft Graph Permissions Reference: <https://docs.microsoft.com/en-us/graph/permissions-reference>

Microsoft Meeting Bots Overview: <https://docs.microsoft.com/en-us/microsoftteams/platform/bots/calls-and-meetings/calls-meetings-bots-overview>

### Access to meetings

Participants connecting through the video integration are normally treated as guest users to Microsoft Teams meetings and may be placed in a lobby (waiting room). A Microsoft Teams user must manually admit a participant who is in the lobby before the participant can hear or see other participants. 

You can control the Microsoft Teams lobby behavior through meeting policies set by an administrator in Microsoft Teams and through meeting options set by the meeting organizer. By default, Microsoft Teams guest users must use the lobby. For more information on Teams meetings policies, see [Manage meeting policies in Teams](https://docs.microsoft.com/en-us/microsoftteams/meeting-policies-in-teams).

If Anonymous users can join a meeting is off: only trusted participants, who are allowed lobby bypass, can join the meeting using the Webex video integration.

Participants who use cross-tenant join (includes using Meeting ID and passcode) always join as Guests. These join attempts fail if the organization hosting the meeting has disabled **Anonymous users can join a meeting**.

### Lobby bypass for trusted participants

Participants connecting to the video integration using the following methods are treated as trusted participants and join Microsoft Teams meetings without being placed in a lobby:

- Devices registered to your Webex organization as Webex-registered devices
- Calling from SIP domains that have been added and verified as owned by your organization in Control Hub

Trusted participants are treated as participants within your organization. Participants connecting through these trusted paths can bypass the lobby if the organizer has restricted the Teams meeting lobby settings. If the Who can bypass the lobby? meeting option is set to 'Organizers and me' or 'People I invite', trusted participants attempting to join are ignored and all VIMT callers are placed in the Teams meeting lobby when joining a meeting.

Participants who use cross-tenant join (includes using Meeting ID and passcode) always join as Guests. This means even trusted participants joining this way must wait in the lobby to be admitted by the host.

For more information on the adding and verifying SIP domains, see [Domain Verification Process for SIP Video Devices](https://help.webex.com/en-us/nrasz4w/Domain-Verification-Process-for-SIP-Video-Devices).

## Webex Video Integration in Microsoft Entra admin center

There is no maintenance requirement for the application after you authorized the video integration service to access your Microsoft 365 tenant. You can verify its presence and scope in the Enterprise applications list in Microsoft Entra admin center.

No physical application or software runs in your tenant as part of this integration. The enterprise application entry serves as the definition and placeholder for the authorization granted to the Webex application identity.

Click the application name, then click Permissions to see the permissions that the application has in the tenant.

## Additional reference material

- Hybrid Calendar Service with Microsoft 365 integration reference: <https://help.webex.com/niqovwv>
- Microsoft Graph API Overview: <https://learn.microsoft.com/en-us/graph/overview>
- Calls and online meetings bots: <https://learn.microsoft.com/en-us/microsoftteams/platform/bots/calls-and-meetings/calls-meetings-bots-overview>
- Microsoft Graph permissions reference: <https://learn.microsoft.com/en-us/graph/permissions-reference>
- Microsoft Identity Platform Authentication vs. authorization: <https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization>
- Application and service principal objects in Microsoft Entra ID: <https://learn.microsoft.com/en-us/entra/identity-platform/app-objects-and-service-principals>
