---
title: "Single Sign-On Integration in Control Hub"
product: "Webex Calling"
article_id: "ixe4v9"
url: "https://help.webex.com/en-us/article/ixe4v9/Configure-Single-Sign-On-in-Cisco-Webex-Control-Hub"
last_updated: "2025-08-22"
description: "If you have your own identity provider (IdP) in your organization, you can
integrate the SAML IdP with your organization in Control Hub for single sign-on
(SSO). SSO lets your users use a single, common set of credentials for Webex App
applications and other applications in your organization."
tags: ["webex-calling", "webex-meetings", "webex-messaging", "webex-contact-center"]
source: "help.webex.com"
---

# Single Sign-On Integration in Control Hub

- [Overview](#concept-template%5F3ab5965d-c995-4e0d-ae8c-121ea5479488)
- [Tested SSO IdPs](#CMGT%5FRF%5FS9BDF982%5F00)
- [SSO Setup](#CMGT%5FTK%5FS5B42F07%5F00)
- [Manage](#Cisco%5FGeneric%5FTopic.dita%5Feddecfe6-20ef-4420-83da-4882e4ef89f4)
- [Troubleshoot](#id%5F78530)
- [Resources](#generic-template%5F08702c61-428e-4abf-99d9-b33a0c7b3201)

Before integrating single sign-on (SSO), Webex uses basic authentication by default. Basic authentication requires users to enter their Webex username and password each time they sign in. If you have your own identity provider (IdP) in your organization, you can integrate it with your organization in Control Hub for SSO. SSO lets your users use a single, common set of credentials for Webex applications in your organization.

If you prefer using basic authentication, you don't need to act. However, consider that basic authentication may be less secure and less convenient for users than SSO, especially if your organization already uses an IdP. For enhanced security with basic authentication, we recommend using multi-factor authentication (MFA) in Control Hub. For more information, see [Enable multi-factor authentication integration in Control Hub](https://help.webex.com/article/52szeq/).

The following web access management and federation solutions were tested for Webex organizations. The documents linked below walk you through how to integrate that specific identity provider (IdP) with your Webex organization.

These guides cover SSO integration for Webex services that are managed in Control Hub ( <https://admin.webex.com>). If you're looking for SSO integration of a Webex Meetings site (managed in Site Administration), read [Configure Single Sign-On for Cisco Webex Site](https://help.webex.com/g5ey83).

If you want to set up SSO for multiple identity providers in your organization, refer to [SSO with multiple IdPs in Webex](https://help.webex.com/article/ngp4sr8/).

If you don't see your IdP listed below, follow the high-level steps in the _SSO Setup_ tab in this article.

- [Active Directory Federation Services (ADFS)](https://help.webex.com/nyx7kubb)
- [Duo](https://duo.com/docs/sso-webex)
- [F5 Big-IP](https://help.webex.com/ljazkg)
- [Google Apps](https://help.webex.com/brd76f)
- [Microsoft Entra ID](https://help.webex.com/mfu88u)
- [OKTA](https://help.webex.com/crd76f)
- [PingFederate](https://help.webex.com/mjazkg)
- [Shibboleth](https://help.webex.com/kjazkg)
- [SimpleSAML](https://help.webex.com/ubrigo)

Single sign-on (SSO) enables users to sign in to Webex securely by authenticating to your organizations common identity provider (IdP). The Webex App uses the Webex service to communicate with the Webex Platform Identity Service. The identity service authenticates with your identity provider (IdP). 

You start configuration in Control Hub. This section captures high-level, generic steps for integrating a third-party IdP. 

When you configure SSO with your IdP, you can map any attribute to the uid. For example, map the userPrincipalName, an email alias, an alternative email address or any other suitable attribute to the uid. The IdP needs to match one of the user’s email addresses to the uid when signing in. Webex supports mapping up to 5 email addresses to the uid.

We recommend that you include Single Log Out (SLO) to your metadata configuration while setting up Webex SAML federation. This step is crucial to ensure that user tokens are invalidated at both, the Identity Provider (IdP) and the Service Provider (SP). If this configuration is not performed by an administrator, then Webex alerts users to close their browsers to invalidate any sessions left open.

[Requirements for Identity Providers](#CMGT%5FTP%5FS41BS518%5F00)

For SSO and Control Hub, IdPs must conform to the SAML 2.0 specification. In addition, IdPs must be configured in the following manner:

- Set the NameID Format attribute to urn:oasis:names:tc:SAML:2.0:nameid-format:_transient_
- Configure a claim on the IdP according to the type of SSO that you are deploying:

  - SSO (for an organization)—If you are configuring SSO on behalf of an organization, configure the IdP claim to include the _uid_ attribute name with a value that is mapped to the attribute that is chosen in the Directory Connector, or the user attribute that matches the one that is chosen in the Webex identity service. (This attribute could be E-mail-Addresses or User-Principal-Name, for example.)
  - Partner SSO (for Service Providers only)—If you are a Service Provider administrator who is configuring Partner SSO to be used by the customer organizations that the Service Provider manages, configure the IdP claim to include the _mail_ attribute (rather than _uid_). The value must map to the attribute that is chosen in the Directory Connector, or the user attribute that matches the one that is chosen in the Webex identity service.  
For more information on mapping custom attributes for either SSO or Partner SSO, see <https://www.cisco.com/go/hybrid-services-directory>.
- Partner SSO only. The Identity Provider must support multiple Assertion Consumer Service (ACS) URLs. For examples of how to configure multiple ACS URLs on an Identity Provider, see:

  - [PingFederate Example](https://docs.pingidentity.com/bundle/pingfederate-93/page/mck1564003002633.html)
  - [Okta Example](https://support.okta.com/help/s/question/0D51Y00008vfSIs/how-to-redirect-to-specify-requestable-sso-urls-using-acs-index-or-acs-url-after-after-authentication-successfully?language=en%5FUS)
- Use a supported browser: we recommend the latest version of Mozilla Firefox or Google Chrome.
- Disable any popup blockers in your browser.

The configuration guides show a specific example for SSO integration but do not provide exhaustive configuration for all possibilities. For example, the integration steps for `nameid-format urn:oasis:names:tc:SAML:2.0:nameid-format:transient` are documented. Other formats such as `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified or urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` will work for SSO integration but are outside the scope of our documentation.

[Establish a SAML Agreement ](#task%5F64EA6E39EAB1F6FF54A4B66AAC6A15BB)

You must establish a SAML agreement between the Webex Platform Identity Service and your IdP.

You need two files to achieve a successful SAML agreement: 

- A metadata file from the IdP, to give to Webex.
- A metadata file from Webex, to give to the IdP.

This is an example of a PingFederate metadata file with metadata from the IdP.

Metadata file from the identity service.

The following is what you expect to see in the metadata file from the identity service.

- EntityID—This is used to identify the SAML agreement in the IdP configuration
- There is no requirement for a signed AuthN request or any sign assertions, it complies with what the IdP requests in the metadata file.
- A signed metadata file for the IdP to verify that the metadata belongs to the identity service.

[Configure Webex Identity Service](#task%5F127380552522544598BA1E2C526533B1)

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                 |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Management \> Security \> Authentication.                                                                                                                                                                                     |
| 3 | Go to the Identity provider tab and click Activate SSO.                                                                                                                                                                             |
| 4 | Select Webex as your IdP and click Next.                                                                                                                                                                                            |
| 5 | Check I've read and understood how Webex IdP works and click Next.                                                                                                                                                                  |
| 6 | Set up a routing rule. Once you've added a routing rule, your IdP is added and is shown under the Identity provider tab. For more information, refer to [SSO with multiple IdPs in Webex](https://help.webex.com/article/ngp4sr8/). |

Whether you received a notice about an expiring certificate or want to check on your existing SSO configuration, you can use the [Single Sign-On (SSO) management features](https://help.webex.com/article/nstvmyo/) in Control Hub for certificate management and general SSO maintenance activities. 

If you run into problems with your SSO integration, use the requirements and procedure in this section to troubleshoot the SAML Flow between your IdP and Webex.

[Requirements for Troubleshooting SSO](#task%5FD7A74FF72180D0E72B75C4A704FBA806)

- Use the SAML tracer add-on for [Firefox](https://addons.mozilla.org/firefox/addon/saml-tracer/), [Chrome](https://chrome.google.com/webstore/detail/saml-chrome-panel/paijfdbeoenhembfhkhllainmocckace), or [Edge](https://microsoftedge.microsoft.com/addons/detail/saml-wsfederation-and-o/boffpaecgbbojpkboijhbmhecoefdehi).
- To troubleshoot, use the web browser where you installed the SAML trace debug tool and go to the web version of Webex at <https://web.webex.com>.

[Troubleshoot the SAML Flow Between Webex App, Your IdP, and Webex Services](#id%5F78598)

The following is the flow of messages between the Webex App, Webex Services, Webex Platform Identity Service, and the Identity provider (IdP).

| 1 | Go to <https://admin.webex.com> and, with SSO enabled, the app prompts for an email address. ![Control Hub sign in screen.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420197.jpg) The app sends the information to the Webex service which verifies the email address. ![Information sent to Webex service for email address verification.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420198.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | The app sends a GET request to the OAuth authorization server for a token. The request is redirected to the identity service to the SSO or username and password flow. The URL for the authentication server is returned. You can see the GET request in the trace file.![GET request details in the log file.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420199.jpg)In the parameters section the service looks for an OAuth code, email of the user who sent the request, and other OAuth details such as ClientID, redirectURI and Scope.![Parameters section displaying OAuth details such as ClientID, redirectURI and Scope.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420200.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3 | The Webex App requests a SAML assertion from the IdP using a SAML HTTP POST. When SSO is enabled, the authentication engine in the identity service redirects to the IdP URL for SSO. The IdP URL provided when the metadata was exchanged. ![Authentication engine redirects users to the identity provider URL specified during the metadata exchange.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420201.jpg) Check in the trace tool for a SAML POST message. You see an HTTP POST message to the IdP requested by the IdPbroker. ![SAML POST message to the identity provider.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420202.jpg) The RelayState parameter shows the correct reply from the IdP. ![RelayState parameter showing the correct reply from the identity provider.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420203.jpg) Review the decode version of the SAML request, there is no mandate AuthN and the destination of the answer should go to the destination URL of the IdP. Ensure that the nameid-format is correctly configured in the IdP under the correct entityID (SPNameQualifier) ![SAML request showing the nameid-format configured in the identity provider.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420204.jpg) The IdP nameid-format is specified and the name of the agreement configured when the SAML agreement was created. |
| 4 | The authentication for the app happens between the operating system web resources and the IdP. Depending on your IdP and the authentication mechanisms configured in the IdP, different flows are started from the IdP. ![Identity provider placeholder for your organization.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420205.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 5 | The app sends an HTTP Post back to the identity service and includes the attributes provided by the IdP and agreed in the initial agreement. When authentication is successful, the app sends the information in a SAML POST message to the identity service. ![SAML POST message to the identity service.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420206.jpg) The RelayState is the same as the previous HTTP POST message where the app tells the IdP which EntityID is requesting the assertion. ![HTTP POST message indicating which EntityID is requesting the assertion from the identity provider.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420207.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 6 | SAML Assertion from IdP to Webex. ![SAML assertion from the identity provider to Webex.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/410001-420000/419001-420000/419197.jpg) ![SAML assertion from the identity provider to Webex.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/410001-420000/419001-420000/419198.jpg) ![SAML assertion from the identity provider to Webex: NameID format unspecified.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420208.jpg) ![SAML assertion from the identity provider to Webex: NameID format email.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420209.jpg) ![SAML assertion from the identity provider to Webex: NameID format transient.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420210.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 7 | The identity service receives an authorization code that is replaced with an OAuth access and refresh token. This token is used to access resources on behalf of the user. After the identity service validates the answer from the IdP, they issue an OAuth token that allows the Webex App to access the different Webex services. ![OAuth token allowing Webex App to access the different Webex services.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/420001-430000/420001-421000/420211.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

[Related information](#reference-template%5F91e8d545-01f5-43d3-a13b-34ee5e62c03a)

- [Authentication and Authorization for Webex](https://www.ciscolive.com/on-demand/on-demand-library.html?zid=apjc&search=%22Paulo%20Jorge%20Correia%22#/session/1675722353875001tTyl).
- [Troubleshooting SAML SSO on Webex](https://www.ciscolive.com/on-demand/on-demand-library.html?zid=apjc&search=troubleshooting%20SSO%20paul#/session/1686177753767001V9uv).
- [Microsoft Entra ID Single Log Out (SLO) configuration](https://learn.microsoft.com/en-us/entra/identity-platform/single-sign-out-saml-protocol).
- [OKTA Single Log Out (SLO) configuration](https://help.okta.com/en-us/content/topics/apps/apps%5Fsingle%5Flogout.htm).
