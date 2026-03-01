---
title: "Webex App | Microsoft OneDrive and SharePoint Online Integration Reference"
product: "Webex Messaging"
article_id: "njip7kp"
url: "https://help.webex.com/en-us/article/njip7kp/Webex-Microsoft-OneDrive-and-SharePoint-Online-Integration-Reference"
last_updated: "2024-10-10"
description: "Webex App | Microsoft OneDrive and SharePoint Online Integration Reference"
tags: ["webex-messaging"]
source: "help.webex.com"
---

# Webex App | Microsoft OneDrive and SharePoint Online Integration Reference

## Summary

The Webex App integration with Microsoft OneDrive and SharePoint Online gives users the ability to share and access content stored in Microsoft OneDrive and SharePoint Online directly from within Webex App.

An administrator can choose to provision (configure, enable and authorize) the integration for their organization. See [Provision content management](https://help.webex.com/na9del2).

After you do the provisioning step for the organization, each user must independently authorize Webex App to access OneDrive and/or SharePoint Online on their behalf. 

This enables the user to work with Microsoft OneDrive and SharePoint Online content from within Webex App. Users should read [Webex App | Microsoft OneDrive and SharePoint Online](https://help.webex.com/rkbwmu).

## Authentication and Authorization

The integration between Webex App and Microsoft Azure or Office 365 is entirely app centric. All the Microsoft Cloud APIs (OneDrive or SharePoint Online) are called directly from Webex App. Those API’s are OAuth2 protected resources and require an access token to securely access them.

To get an access token, users must first authenticate and then authorize Webex App. The issued access token is then sent in the Authorization header for each API call to Microsoft OneDrive or SharePoint Online. All API calls are made using HTTPS. For more information, see the _Use Cases_ section in this article.

Session cookies and refresh tokens that are issued as part of authentication and authorization are encrypted and securely stored on the user’s Webex App device. No authentication or authorization information related to the user for OneDrive or SharePoint Online is ever exposed to the Webex Cloud services. For more information on Webex App caching, see [Tech Ops and Security - Frequently Asked Questions ](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/esp/Webex-Teams-Security-Frequently-Asked-Questions.pdf).

## Data Usage and Storage

To share a document, display a document thumbnail, or preview a document from Microsoft OneDrive or SharePoint Online, Webex App uses the drive-id, item-id, document title, and absolute or shared URL to a document. This data is stored in the Webex Cloud for any document that is shared using Webex App. The content of the Microsoft OneDrive or SharePoint Online file shared in a Webex App space, is never stored in the Webex Cloud.

Data we store related to documents is treated as sensitive information. Webex App always encrypts sensitive data (such as drive-id, item-id, document title or links) before sending it to the Webex Cloud. This means that only encrypted document data is ever sent or stored in the Webex Cloud services.

For data encryption, Webex App uses the Webex Cloud encryption service. Key management is provided either by the cloud Key Management Server (KMS), or, if you choose to deploy Hybrid Data Security, by your own on-premises KMS. For more information, see the [Webex App Security Paper](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/esp/cisco-spark-security-white-paper.pdf).

Webex App independently caches data locally on user’s devices. This data is encrypted at rest on the device. For more information on Webex App caching, see [Tech Ops and Security - Frequently Asked Questions ](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/esp/Webex-Teams-Security-Frequently-Asked-Questions.pdf).

Although your tenant may use Multi-Geo Capabilities in Office 365 to store data in a specific location, Webex App stores data only in its data centers. For more information relating to Webex Data Center locations see section 3 of the [Cisco Webex Service Privacy Data Sheet](https://www.cisco.com/c/dam/en%5Fus/about/doing%5Fbusiness/trust-center/docs/cisco-webex-teams-privacy-data-sheet.pdf).

## Office 365 Tenant Support

A single Office 365 tenant can be configured for a single Cisco Webex organization. We only support the Worldwide and Moderate Government instance of Office 365\. Other instances that we don't support include: USGovDoD, USGovGCCHigh, China, and Germany.

## Use Cases

The following are the use cases supported with Microsoft OneDrive and SharePoint Online Integration Reference.

[Microsoft Account Connection](#id%5F109691)

The flow includes the following high-level steps.

| 1 | Webex App requests authorization to access content resources. |
| - | ------------------------------------------------------------- |
| 2 | Microsoft Cloud prompts the user to enter their credentials.  |
| 3 | Webex App requests an access and a refresh token.             |

Microsoft Account Connection Process

[Sharing a Document](#id%5F109692)

The flow includes the following high-level steps.

| 1 | User clicks attach file.                                                                       |
| - | ---------------------------------------------------------------------------------------------- |
| 2 | Webex App opens the Microsoft File Picker.                                                     |
| 3 | User selects a file, permissions, edit or view mode, and then clicks share.                    |
| 4 | Webex App interacts with Microsoft Cloud to build a shared link.                               |
| 5 | Webex App encrypts the new shared link and posts it.                                           |
| 6 | The Webex Conversation service stores and propagates the link to all the members of the space. |

Sharing a Document Process

[Thumbnail Rendering](#id%5F109693)

The flow includes the following high-level steps.

| 1 | Webex App receives a message event with a shared link.                                                       |
| - | ------------------------------------------------------------------------------------------------------------ |
| 2 | Webex App decrypts the shared link and uses the user's credentials to request the thumbnails from Microsoft. |

Thumbnail Rendering Process

[Viewing a Document](#id%5F109694)

The flow includes the following high-level steps.

| 1 | User clicks the shared link.                                                       |
| - | ---------------------------------------------------------------------------------- |
| 2 | Webex App uses the session cookies to open the shared link in an embedded browser. |

Viewing a Document Process

## Microsoft API Usage

Webex App uses APIs from Azure Active Directory (AD) v2 and Microsoft Graph. Azure AD is used for end user authorization. Microsoft Graph is used to access Microsoft OneDrive and SharePoint documents. Although these APIs support a broad range of operations, only a subset of commands are used.

### Azure AD v2 Endpoints

| Azure Active Directory v2  | Usage                        |
| -------------------------- | ---------------------------- |
| GET /oauth2/v2.0/authorize | GET /oauth2/v2.0/authorize   |
| POST /oauth2/v2.0/token    | Redeem code for access token |

### Microsoft Graph endpoints

| Graph Operation                                           | Usage                             |
| --------------------------------------------------------- | --------------------------------- |
| GET /me/drive/root/children                               | Reads root directory              |
| GET /me/drive/items/{file\_id}                            | Reads details of a file           |
| GET /me/drive/items/{file\_id}/thumbnails/0/large/content | Reads thumbnail of a file         |
| POST /items/{file\_id}/preview                            | Reads preview of a file           |
| POST /me/drive/items/{file\_id}/createLink                | Creates link for a file           |
| GET /shares/{item}/driveItem                              | Reads metadata from a shared link |
| GET /shares/{item}/root/thumbnails/0/large/content        | Reads thumbnail for a shared link |
| GET /me/drive//items/{{file\_id}}/permissions             | Reads permissions for a file      |
