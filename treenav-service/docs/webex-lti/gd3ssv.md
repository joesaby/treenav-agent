---
title: "Create a Webex LTI registration in Blackboard"
product: "Webex LTI"
article_id: "gd3ssv"
url: "https://help.webex.com/en-us/article/gd3ssv/Install-the-Webex-Education-Connector-in-Blackboard"
last_updated: "2024-09-30"
description: "To install Webex LTI, you must register the application, configure your
Blackboard site, manage the tool placement, and then create a registration in
Registration Hub. You can create a brand-new Webex LTI registration or create a
Webex LTI registration that is linked to an existing Webex LTI Legacy
registration, and you can create a registration in either Blackboard Learn or
Blackboard Ultra. You must be a Blackboard administrator and a Webex site
administrator to complete the registration."
tags: ["webex-lti", "webex-suite", "webex-meetings"]
source: "help.webex.com"
---

# Create a Webex LTI registration in Blackboard

## Register an application

| 1 | Go to <https://developer.blackboard.com/portal/applications> and sign in as an administrator.                                                                                                                                                                                                                                                                                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click My Applications. If you have existing applications already, click +.If you don't have any applications yet, click Register a REST or LTI application.                                                                                                                                                                                                                                  |
| 3 | Enter the following information: Application name—Enter Webex LTI Description—Enter any description Domain—Enter lti.webex.com My domain supports LTI 1.3—Toggle this on Login Initiation URL—Enter https://lti.webex.com/lti/login Tool Redirect URL(s)—Enter https://lti.webex.com/lti/launch Tool JWKS URL:—Enter https://lti.webex.com/.sec-keys/jwks.json Signing Algorithm—Select R256 |
| 4 | Click Register and copy the Application ID, as you'll need this later.                                                                                                                                                                                                                                                                                                                       |

## Configure your Blackboard site

Before you begin

Blackboard only allows one Webex LTI tool at a time. If you have an active Webex LTI tool in Blackboard, delete the existing tool when indicated in the following installation steps. 

You can have both a Webex LTI Legacy and a Webex LTI tool at the same time, but only one of each.

| 1 | Sign into your Blackboard site as an administrator and click System Admin. If you have an existing Webex LTI tool, click the arrow next to the tool's name to open the drop-down list, click Delete, and click OK in the confirmation prompt.                                                                                                     |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Integrations, click LTI Tool Providers \> Register LTI 1.3/Advantage Tool.                                                                                                                                                                                                                                                                  |
| 3 | In the Client ID field, enter the Application ID that you copied in Step 4 of _Register an application_ and click Submit.                                                                                                                                                                                                                         |
| 4 | Blackboard automatically populates most of the information on this page. In addition to this information, do the following: Copy the value in the Default Deployment ID field, as you need it later. Tool status—Choose Approved. User fields to send—Check Role in Course, Name, and Email Address. Allow membership service access:—Choose Yes. |
| 5 | Click Submit.                                                                                                                                                                                                                                                                                                                                     |

## Manage tool placement

| 1 | On the same LTI Tool Providers page, click the arrow next to your tool's name to open the drop-down list.                                                                                                                                                                |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Choose Manage Placements from the drop-down list and click Create Placement.                                                                                                                                                                                             |
| 3 | Enter the following information: Label—Enter any label This is the name of the tool that is visible in courses. Handle—Enter Webex Availability—Select Yes Type—Select Course Tool and check Allow Student Access Target Link URI—Enter https://lti.webex.com/lti/launch |
| 4 | Click Submit.                                                                                                                                                                                                                                                            |

What to do next

If you want to create a new Webex LTI registration, go to _Create a new Webex LTI registration and configure site-wide settings._ If you want to create a linked Webex LTI registration, go to _Create a linked Webex LTI registration and configure site-wide settings._

## Create a new Webex LTI registration and configure site-wide settings

Create a brand-new Webex LTI registration to install in Blackboard using LTI 1.3.

| 1 | In Control Hub, go to Organization Settings \>  Learning Tools Interoperability (LTI), click LTI Registration Hub, and sign in with Webex.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click +Webex LTI registration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3 | Enter the following information: Webex site—Choose the Webex site that you want this registration to be associated with. This Webex site is used when creating content in all features of Webex LTI, such as scheduling meetings or importing recordings. LMS—Select Blackboard and then choose either Blackboard Learn or Blackboard Ultra. LMS URL—Enter your LMS site URL, including the https://. For example, https://myschool.blackboard.com. Client ID—Enter the Application ID that you copied in Step 4 of _Register an application_. Deployment ID—Enter the Deployment ID that you copied in Step 4 of _Configure your Blackboard site_. LMS time zone—Select the time zone for your LMS site. |
| 4 | Click Next. You see the registration information for this registration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

What to do next

Enable the features that you want to be available site-wide for your teachers to configure in their courses and click Close.

To use Webex LTI in a Blackboard Learn course, go to _Launch Webex LTI in Blackboard Learn and manage course settings_.

To use Webex LTI in a Blackboard Ultra course, go to _Launch Webex LTI in Blackboard Ultra and manage course settings_.

## Create a linked Webex LTI registration and configure site-wide settings

Create a Webex LTI registration that is linked to an existing Webex LTI Legacy registration. The linked Webex LTI registration inherits all the data and settings from its linked Webex LTI Legacy registration. This allows your students and teachers to transition from Webex LTI Legacy to Webex LTI without having to recreate all their meetings, recordings, and more.

| 1 | In Control Hub, go to Organization Settings \>  Learning Tools Interoperability (LTI), click LTI Registration Hub, and sign in with Webex.                                                                                                                                                                                                                   |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | In the list of registrations, find the Webex LTI Legacy you want to link, and click +Linked registration.                                                                                                                                                                                                                                                    |
| 3 | Some of the information is prepopulated from your existing Webex LTI Legacy registration and cannot be modified. Enter the following additional information: Client ID—Enter the Application ID that you copied in Step 4 of _Register an application_. Deployment ID—Enter the Deployment ID that you copied in Step 4 of _Configure your Blackboard site_. |
| 4 | Click Next. You see the registration information for the newly created Webex LTI registration, and details about the linked Webex LTI Legacy registration.                                                                                                                                                                                                   |

What to do next

Enable the features that you want to be available site-wide for your teachers to configure in their courses and click Close.

By default, the settings that are enabled in the registration are the ones that were enabled in the linked Webex LTI Legacy registration.

When registrations are linked, the Webex LTI Legacy registration becomes read-only, and any changes to the Webex LTI registration settings will also apply to the Webex LTI Legacy registration.

## Launch Webex LTI in Blackboard Learn and manage course settings

| 1 | Navigate to a course and click Tools in the course navigation menu.                                                   |
| - | --------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the name of the label that you entered in Step 3 of _Manage tool placement_ to launch Webex LTI in that course. |
| 3 | Customize feature preferences for the course from the Setup tab.                                                      |

What to do next

Learn more about the features of Webex LTI in [Webex LTI for teachers](https://help.webex.com/en-us/article/mey5xo/Webex-LTI-for-teachers). 

## Launch Webex LTI in Blackboard Ultra and manage course settings

| 1 | In Blackboard, navigate to a course, find Books & Tools, and click View course & institution tools.                                   |
| - | ------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the + next to the name of the label that you entered in Step 3 of _Manage tool placement_ to add the tool to your course.       |
| 3 | Click the name of the tool to launch Webex LTI and customize feature preferences for the course from the Setup tab.                   |
| 4 | Optional: If the drop-down under the tool's name says Hidden from students, click the drop-down to make the tool Visible to students. |

What to do next

Learn more about the features of Webex LTI in [Webex LTI for teachers](https://help.webex.com/en-us/article/mey5xo/Webex-LTI-for-teachers).
