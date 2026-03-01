---
title: "Configure single sign-on in Control Hub with Okta"
product: "Webex Calling"
article_id: "crd76f"
url: "https://help.webex.com/en-us/article/crd76f/Configure-single-sign-on-in-Control-Hub-with-Okta"
last_updated: "2025-10-21"
description: "You can configure a single sign-on (SSO) integration between Control Hub and a
deployment that uses Okta as an identity provider (IdP)."
tags: ["webex-calling", "webex-contact-center", "webex-meetings", "webex-messaging"]
source: "help.webex.com"
---

# Configure single sign-on in Control Hub with Okta

## Single sign-on and Control Hub

Single sign-on (SSO) is a session or user authentication process that permits a user to provide credentials to access one or more applications. The process authenticates users for all the applications that they are given rights to. It eliminates further prompts when users switch applications during a particular session.

The Security Assertion Markup Language (SAML 2.0) Federation Protocol is used to provide SSO authentication between the Webex cloud and your identity provider (IdP). 

### Profiles

Webex App only supports the web browser SSO profile. In the web browser SSO profile, Webex App supports the following bindings:

- SP initiated POST -> POST binding
- SP initiated REDIRECT -> POST binding

### NameID format

The SAML 2.0 Protocol supports several NameID formats for communicating about a specific user. Webex App supports the following NameID formats.

- `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`
- `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`
- `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`

 In the metadata that you load from your IdP, the first entry is configured for use in Webex.

## Integrate Control Hub with Okta

The configuration guides show a specific example for SSO integration but do not provide exhaustive configuration for all possibilities. For example, the integration steps for `nameid-format urn:oasis:names:tc:SAML:2.0:nameid-format:transient` are documented. Other formats such as `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified or urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` will work for SSO integration but are outside the scope of our documentation.

Set up this integration for users in your Webex organization (including Webex App, Webex Meetings, and other services administered in Control Hub). If your Webex site is integrated in Control Hub, the Webex site inherits the user management. If you can't access Webex Meetings in this way and it is not managed in Control Hub, you must do a separate integration to enable SSO for Webex Meetings. 

Before you begin

- For SSO and Control Hub, IdPs must conform to the SAML 2.0 specification. In addition, IdPs must be configured in the following manner:
- Webex supports only Service Provider (SP) initiated flows. This means users must begin their sessions from the Webex site. This ensures that authentication is properly routed through the Webex platform.

## Download the Webex metadata to your local system

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Go to Management \> Security \> Authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3 | Go to the Identity provider tab and click Activate SSO.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 4 | Select an IdP.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 5 | Choose the certificate type for your organization: **Self-signed by Cisco**—We recommend this choice. Let us sign the certificate so you only need to renew it once every five years. **Signed by a public certificate authority**—More secure but you'll need to frequently update the metadata (unless your IdP vendor supports trust anchors). Trust anchors are public keys that act as an authority to verify a digital signature's certificate. For more information, refer to your IdP documentation. |
| 6 | Download the metadata file. The Webex metadata filename is **idb-meta-<org-ID>-SP.xml**.                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Configure Okta for Webex services

When you set up the Cisco Webex application in the Okta admin portal, configure the default application icon to remain hidden. To do this, go to App Settings \> Application visibility and check Do not display application icon to users and Do not display application icon in the Okta Mobile App.

| 1 | Sign in to the Okta Tenant (example.okta.com, where example is your company or organization name) as an administrator, go to Applications, and then click Add Application.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Search for Cisco Webex and add the application to your tenant. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/438001-439000/438934.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3 | Click Next and then click SAML 2.0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4 | In your browser, open the metadata file that you downloaded from Control Hub. Copy the URLs for the **entityID** (at the top of the file) and the **assertionConsumerService location** (at the bottom of the file). ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/410001-420000/413001-414000/413737.jpg)**_Example of Highlighted entityID in Control Hub Metadata File_** ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/444001-445000/444036.jpg)**_Example of Highlighted assertionConsumerService location in Control Hub Metadata File_** |
| 5 | On the   **Cisco Webex** tab in Okta, scroll to Advanced Settings, and then paste the Entity ID and Assertion Consumer Service values that you copied from the Control Hub metadata file and then save changes. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/410001-420000/413001-414000/413738.jpg)                                                                                                                                                                                                                                                                                            |
| 6 | Click Sign On and then download the Okta metadata file. You'll import this file back into your Control Hub instance. To give users access to their specific Webex site, you can create a custom application in Okta. Set up a web link that directs users to their unique Webex site URL. Ensure to adjust the application visibility settings in Okta so that this custom application icon is visible to users.                                                                                                                                                                                                                    |
| 7 | Click Assignments, choose all the users and any relevant groups that you want to associate with apps and services managed in Control Hub, click Assign and then click **Done**. You can assign a user or a group. Do not skip this step; otherwise, your Control Hub and Okta integration won't work.                                                                                                                                                                                                                                                                                                                               |

## Import the IdP metadata and enable single sign-on after a test

After you export the Webex metadata, configure your IdP, and download the IdP metadata to your local system, you are ready to import it into your Webex organization from Control Hub.

Before you begin

Do not test SSO integration from the identity provider (IdP) interface. We only support Service Provider-initiated (SP-initiated) flows, so you must use the Control Hub SSO test for this integration.

| 1 | Choose one: Return to the Control Hub – certificate selection page in your browser, and then click Next.Reopen Control Hub if it is no longer open in your browser tab. From the customer view in Control Hub, go to Management \> Security \> Authentication, select the IdP, and then choose Actions \> Import Metadata.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Import IdP metadata page, either drag and drop the IdP metadata file onto the page or use the file browser option to locate and upload the metadata file. Click Next. You should use the More secure option, if you can. This is only possible if your IdP used a public CA to sign its metadata. In all other cases, you must use the Less secureoption. This includes if the metadata is not signed, self-signed, or signed by a private CA. Okta does not sign the metadata, so you must choose Less secure for an Okta SSO integration.                                                                                                                                                                                                                           |
| 3 | Select **Test SSO setup**, and when a new browser tab opens, authenticate with the IdP by signing in. If you receive an authentication error there may be a problem with the credentials. Check the username and password and try again. A Webex App error usually means an issue with the SSO setup. In this case, walk through the steps again, especially the steps where you copy and paste the Control Hub metadata into the IdP setup. To see the SSO sign-in experience directly, you can also click Copy URL to clipboard from this screen and paste it in a private browser window. From there, you can walk through signing in with SSO. This step stops false positives because of an access token that might be in an existing session from you being signed in. |
| 4 | Return to the Control Hub browser tab. If the test was successful, select Successful test. Turn on SSO and click Next. If the test was unsuccessful, select Unsuccessful test. Turn off SSO and click Next. The SSO configuration does not take effect in your organization unless you choose first radio button and activate SSO.                                                                                                                                                                                                                                                                                                                                                                                                                                           |

What to do next

Use the procedures in [Synchronize Okta Users into Cisco Webex Control Hub](https://help.webex.com/nmm9pzdb/) if you want to do user provisioning out of Okta into the Webex cloud.

Use the procedures in [Synchronize Azure Active Directory Users into Cisco Webex Control Hub](https://help.webex.com/aumpbz/) if you want to do user provisioning out of Azure AD into the Webex cloud.

You can follow the procedure in [Suppress Automated Emails](https://help.webex.com/article/nqj88gt/) to disable emails that are sent to new Webex App users in your organization. The document also contains best practices for sending out communications to users in your organization.
