---
title: "Create a Webex LTI registration in your LMS"
product: "Webex LTI"
article_id: "8mkws2"
url: "https://help.webex.com/en-us/article/8mkws2/Install-the-Webex-Education-Connector-in-Sakai"
last_updated: "2024-09-30"
description: "You can install Webex LTI in any LMS that supports LTI 1.3. You must configure
Webex LTI in your LMS, generate a client ID, generate a deployment ID, and
create a registration in Registration Hub. You must be an LMS administrator and
a Webex site administrator to complete the registration."
tags: ["webex-lti", "webex-suite", "webex-meetings"]
source: "help.webex.com"
---

# Create a Webex LTI registration in your LMS

## Configure your LMS

### LMS configuration

You can install Webex LTI in any LMS that supports LTI 1.3\. 

This section captures high-level information to configure in your LMS. 

The names of the fields differ between LMSs. This section includes some of the most common field names, but variations may still exist.

Include the following information somewhere in your LMS configuration:

- **LTI version**—Select LTI 1.3

  - Some LMSs call the version LTI Advantage
- **Domain**—Enter `https://lti.webex.com`
- **Launch URL** or **Redirect URL**—Enter `https://lti.webex.com/lti/launch`
- **OIDC Login Initiation URL**—Enter `https://lti.webex.com/lti/login`

  - This is Webex LTI's URL for initiating OpenId Connect third-party login flow.
- **JWKS URL** or **Public Keyset URL**—Enter `https://lti.webex.com/.sec-keys/jwks/json`

  - This is Webex LTI's URL where a JSON Web Key Set can be accessed for verifying the signature of Tool-Originating Messages.
- **LTI Advantage Extensions**—Choose **Name and Role Provisioning Services**.
- Share the **user role in course**, **user name**, and **user email address** with the Webex LTI tool.

### Generate a client ID

A **client ID** is used to identify a specific LTI 1.3 tool in your LMS.

This value might also be called the **Application ID** or **Developer key**.

Your LMS when generate a **client ID** after you successfully register the Webex LTI in your LMS.

Copy this value, as you will enter it in Step 3 of _Create a new Webex LTI registration and configure site-wide settings._

### Generate a deployment ID

A **deployment ID** identifies the specific deployment of an LTI 1.3 tool in your LMS, to define the scope of contexts under which a tool is made available.

Copy this value, as you will enter it in Step 3 of _Create a new Webex LTI registration and configure site-wide settings._

## Create a new Webex LTI registration and configure site-wide settings

After you have configured your LMS, create a new Webex LTI registration in Registration Hub.

The names of the fields differ between LMSs, but all the information exists in an LTI 1.3-compliant LMS.

Refer to any LTI 1.3 configuration documentation provided by your LMS to get these values.

| 1 | In Control Hub, go to Organization Settings \>  Learning Tools Interoperability (LTI), click LTI Registration Hub, and sign in with Webex.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click +Webex LTI registration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Enter the following information: Webex site—Choose the Webex site that you want this registration to be associated with. This Webex site is used when creating content in all features of Webex LTI, such as scheduling meetings or importing recordings. LMS—Select Other. LMS Name—Enter the name of your LMS LMS URL—Enter your LMS URL, including the https://. For example, https://mylms.myschool.edu. Issuer ID—Enter the full issuer ID for your LMS, including the https://. Access token URL—Enter the full access token URL for your LMS, including the https://. Authentication request URL—Enter the full authentication request URL for your LMS, including the https://. Public keyset—Select the public keyset type for your LMS. Public keyset URLPublic keyset OAuth 2 audience—(Optional) Enter the full OAuth 2 audience for your LMS, including the https://. Client ID—Enter the client ID you generated in _Configure your LMS_. Deployment ID—Enter the deployment ID that you generated in _Configure your LMS_. LMS time zone—Select the time zone for your LMS site. |
| 4 | Click Next. You see the registration information for this registration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

What to do next

Enable the features that you want to be available site-wide for your teachers to configure in their courses and click Close.

## Launch Webex LTI and manage course settings

| 1 | Launch Webex LTI in any course.                                  |
| - | ---------------------------------------------------------------- |
| 2 | Customize feature preferences for the course from the Setup tab. |

What to do next

Learn more about the features of Webex LTI in [Webex LTI for teachers](https://help.webex.com/en-us/article/mey5xo/Webex-LTI-for-teachers).
