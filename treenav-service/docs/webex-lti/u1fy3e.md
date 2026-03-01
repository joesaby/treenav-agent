---
title: "Create a Webex LTI registration in Brightspace by D2L"
product: "Webex LTI"
article_id: "u1fy3e"
url: "https://help.webex.com/en-us/article/u1fy3e/Install-the-Webex-Education-Connector-in-Brightspace-by-D2L"
last_updated: "2024-09-30"
description: "To install Webex LTI, you must register a tool, create a deployment, and create
a link in D2L, and then create the registration in Registration Hub. You can
create a brand-new Webex LTI registration or create a Webex LTI registration
that is linked to an existing Webex LTI Legacy registration. You need a D2L
administrator and a Webex site administrator to complete the registration."
tags: ["webex-lti", "webex-meetings", "webex-suite"]
source: "help.webex.com"
---

# Create a Webex LTI registration in Brightspace by D2L

## Register a tool

Before you begin

D2L only allows one enabled Webex LTI tool at a time. If you have an active Webex LTI registration, disable the existing tool and deployment when indicated in the following installation steps. 

You can have both a Webex LTI Legacy and a Webex LTI tool at the same time, but only one of each.

| 1 | Sign into D2L as an administrator.                                                                                                                                                                                                                                                                                                                                                                                                              |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the Settings icon and go to Organization Related \> Manage Extensibility.                                                                                                                                                                                                                                                                                                                                                                 |
| 3 | Go to the LTI Advantage tab. If you have an enabled Webex LTI tool, click the name of the tool, turn the Enabled toggle off, and click Save and close.                                                                                                                                                                                                                                                                                          |
| 4 | Click Register Tool.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 5 | Choose Standard and then fill in the following information: Name—Enter any name Domain—Enter https://lti.webex.com Redirect URLs—Enter https://lti.webex.com/lti/launch OpenID Connect Login URL—Enter https://lti.webex.com/lti/login Target Link URI—Enter https://lti.webex.com/lti/launch Keyset URL—Enter https://lti.webex.com/.sec-keys/jwks.json Extensions—Check Name and Role Provisioning Services Roles—Check Send Institution Role |
| 6 | Click Register.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 7 | Copy the Client ID to use later, and click Done.                                                                                                                                                                                                                                                                                                                                                                                                |

## Create a deployment

| 1 | Click the Settings icon and go to Organization Related \> External Learning Tools \> LTI Advantage. If you already have an enabled Webex LTI deployment, click the name of the deployment, turn the Enabled toggle off, and click Save and close.                                                                                                                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click New Deployment.                                                                                                                                                                                                                                                                                                                                                            |
| 3 | Enter the following information: Tool—Select the name of the tool from Step 5 of _Register a tool_. Name—Enter a name for the deployment. Security Settings—Check the boxes for Org Unit Information, User Information, Link Information, and Classlist including users not known to this deployment. Click Add Org Units, choose where you want to add the tool, and click Add. |
| 4 | Click Create Deployment.                                                                                                                                                                                                                                                                                                                                                         |
| 5 | Copy the Deployment ID to use later and click Done.                                                                                                                                                                                                                                                                                                                              |

## Create a link

| 1 | Click the name of the deployment from the list.                                                                                                                                    |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Scroll to the bottom of the screen and click View Links.                                                                                                                           |
| 3 | Click New Link.                                                                                                                                                                    |
| 4 | Enter the following information: Name—Enter any name. This is the name of the tool that students and teachers will see in their course. URL—Enter https://lti.webex.com/lti/launch |
| 5 | Click Save and Close.                                                                                                                                                              |

What to do next

If you want to create a new Webex LTI registration, go to _Create a new Webex LTI registration and configure site-wide settings._ 

If you want to create a linked Webex LTI registration, go to _Create a linked Webex LTI registration and configure site-wide settings._

## Create a new Webex LTI registration and configure site-wide settings

Create a brand-new Webex LTI registration to install in Brightspace by D2L using LTI 1.3.

| 1 | In Control Hub, go to Organization Settings \>  Learning Tools Interoperability (LTI), click LTI Registration Hub, and sign in with Webex.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click +Webex LTI registration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3 | Enter the following information: Webex site—Choose the Webex site that you want this registration to be associated with. This Webex site is used when creating content in all features of Webex LTI, such as scheduling meetings or importing recordings. LMS—Select D2L. LMS URL—Enter your LMS URL, including the https://. For example, https://myschool.brightspace.com. Client ID—Enter the Client ID that you copied in Step 6 of _Register a tool_. Deployment ID—Enter the Deployment ID that you copied in Step 5 of _Create a deployment_. LMS time zone—Select the time zone for your LMS site. |
| 4 | Click Next. You see the registration information for this registration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

What to do next

Enable the features that you want to be available site-wide for your teachers to configure in their courses and click Close.

To start using Webex LTI in a course, go to _Add Webex LTI to a course and manage course settings_.

## Create a linked Webex LTI registration and configure site-wide settings

Create a Webex LTI registration that is linked to an existing Webex LTI Legacy registration. The linked Webex LTI registration inherits all the data and settings from its linked Webex LTI Legacy registration. This allows your students and teachers to transition from Webex LTI Legacy to Webex LTI without having to recreate all their meetings, recordings, and more.

| 1 | In Control Hub, go to Organization Settings \>  Learning Tools Interoperability (LTI), click LTI Registration Hub, and sign in with Webex.                                                                                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | In the list of registrations, find the Webex LTI Legacy you want to link, and click +Linked registration.                                                                                                                                                                                                                            |
| 3 | Some of the information is prepopulated from your existing Webex LTI Legacy registration and cannot be modified. Enter the following additional information: Client ID—Enter the client ID that you copied in Step 6 of _Register a tool_. Deployment ID—Enter the Deployment ID that you copied in Step 5 of _Create a deployment_. |
| 4 | Click Next. You see the registration information for the newly created Webex LTI registration, and details about the linked Webex LTI Legacy registration.                                                                                                                                                                           |

What to do next

Enable the features that you want to be available site-wide for your teachers to configure in their courses and click Close.

By default, the settings that are enabled in the registration are the ones that were enabled in the linked Webex LTI Legacy registration.

When registrations are linked, the Webex LTI Legacy registration becomes read-only, and any changes to the Webex LTI registration settings will also apply to the Webex LTI Legacy registration.

## Add Webex LTI to a course and manage course settings

| 1 | In D2L, navigate to a course and select Content.                                                                             |
| - | ---------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Add a module and enter a name. If you have a module created already, click the name of the module.                     |
| 3 | Click Existing Activities \> External Learning Tools.                                                                        |
| 4 | Select the name of the link you created in Step 4 of _Create a link_.                                                        |
| 5 | Click the link name to launch Webex LTI in your course and customize feature preferences for your course from the Setup tab. |

What to do next

Learn more about the features of Webex LTI in [Webex LTI for teachers](https://help.webex.com/en-us/article/mey5xo/Webex-LTI-for-teachers).
