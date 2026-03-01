---
title: "Create a Webex LTI registration in Moodle"
product: "Webex LTI"
article_id: "pzhlqj"
url: "https://help.webex.com/en-us/article/pzhlqj/Install-the-Webex-Education-Connector-in-Moodle"
last_updated: "2024-09-30"
description: "To install Webex LTI, you must create an external tool in Moodle and then create
the registration in Registration Hub. You can create a brand-new Webex LTI
registration or create a Webex LTI registration that is linked to an existing
Webex LTI Legacy registration. You need a Moodle administrator and a Webex site
administrator to complete the registration."
tags: ["webex-lti", "webex-meetings", "webex-suite"]
source: "help.webex.com"
---

# Create a Webex LTI registration in Moodle

## Create the external tool

| 1 | Sign into Moodle with an administrator account and go to Site Administration.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Plugins \> Activity modules \> External tool \> Manage tools.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3 | On the Manage tools page, in the Add tool box, click configure a tool manually.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4 | In the Tool settings section, enter the following information: Tool name—Enter any name Tool URL—Enter https://lti.webex.com/lti/launch LTI version—Select LTI 1.3 Public key type—Select Keyset URL Public keyset—Enter https://lti.webex.com/.sec-keys/jwks.json Initiate login URL—Enter https://lti.webex.com/lti/login Redirection URI(s)—Enter https://lti.webex.com/lti/launch Tool configuration usage—Select Show as preconfigured tool when adding an external tool Default launch container—Select Embed, without blocks |
| 5 | In the Services section, set the following: IMS LTI Assignment and Grade Services—Select Do not use this service IMS LTI Names and Role Provisioning—Select Use this service to retrieve members’ information as per privacy settings Tool settings—Select Use this service                                                                                                                                                                                                                                                         |
| 6 | In the Privacy section, set the following: Share launcher's name with tool—Select Always Share launcher's email with tool—Select Always Accept grades from the tool—Select Always                                                                                                                                                                                                                                                                                                                                                   |
| 7 | Click Save changes The new tool appears in the Tools section of the Manage tools page.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 8 | Find the tool and click the list icon to view configuration details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 9 | Copy the Client ID value and the Deployment ID value to use later.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

What to do next

If you want to create a new Webex LTI registration, go to _Create a new Webex LTI registration and configure site-wide settings._

If you want to create a linked Webex LTI registration, go to _Create a linked Webex LTI registration and configure site-wide settings._

## Create a new Webex LTI registration and configure site-wide settings

Create a brand-new Webex LTI registration to install in Moodle using LTI 1.3.

| 1 | In Control Hub, go to Organization Settings \>  Learning Tools Interoperability (LTI), click LTI Registration Hub, and sign in with Webex.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click +Webex LTI registration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3 | Enter the following information: Webex site—Choose the Webex site that you want this registration to be associated with. This Webex site is used when creating content in all features of Webex LTI, such as scheduling meetings or importing recordings. LMS—Select Moodle. LMS URL—Enter your LMS URL, including the https://. For example, https://moodle.myschool.edu. Client ID—Enter the Client ID that you copied in Step 9 of _Create the external tool_. Deployment ID—Enter the Deployment ID that you copied in Step 9 of _Create the external tool_. LMS time zone—Select the time zone for your LMS site. |
| 4 | Click Next. You see the registration information for this registration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

What to do next

Enable the features that you want to be available site-wide for your teachers to configure in their courses and click Close.

To start using Webex LTI in a course, go to _Add Webex LTI to a course and manage course settings_.

## Create a linked Webex LTI registration and configure site-wide settings

Create a Webex LTI registration that is linked to an existing Webex LTI Legacy registration. The linked Webex LTI registration inherits all the data and settings from its linked Webex LTI Legacy registration. This allows your students and teachers to transition from Webex LTI Legacy to Webex LTI without having to recreate all their meetings, recordings, and more.

| 1 | In Control Hub, go to Organization Settings \>  Learning Tools Interoperability (LTI), click LTI Registration Hub, and sign in with Webex.                                                                                                                                                                                                         |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the list of registrations, find the Webex LTI Legacy you want to link, and click +Linked registration.                                                                                                                                                                                                                                          |
| 3 | Some of the information is prepopulated from your existing Webex LTI Legacy registration and cannot be modified. Enter the following additional information: Client ID—Enter the Client ID that you copied in Step 9 of _Create the external tool_. Deployment ID—Enter the Deployment ID that you copied in Step 9 of _Create the external tool_. |
| 4 | Click Next. You see the registration information for the newly created Webex LTI registration, and details about the linked Webex LTI Legacy registration.                                                                                                                                                                                         |

What to do next

Enable the features that you want to be available site-wide for your teachers to configure in their courses and click Close.

By default, the settings that are enabled in the registration are the ones that were enabled in the linked Webex LTI Legacy registration.

When registrations are linked, the Webex LTI Legacy registration becomes read-only, and any changes to the Webex LTI registration settings will also apply to the Webex LTI Legacy registration.

## Add Webex LTI to a course and manage course settings

| 1 | In Moodle, open a course.                                                                                                         |
| - | --------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to More \> LTI External Tools.                                                                                                 |
| 3 | Find the tool and enable the toggle in the Show in activity chooser column.                                                       |
| 4 | Click the Course tab and enable Edit mode.                                                                                        |
| 5 | Find the section where you want to add the Webex LTI tool and click Add an activity or resource.                                  |
| 6 | Select the tool and enter an Activity name. Students and teachers will click the activity name in the course to launch Webex LTI. |
| 7 | Click Save and return to course.                                                                                                  |
| 8 | Click the activity name to launch Webex LTI in your course and customize feature preferences for the course from the Setup tab.   |

What to do next

Learn more about the features of Webex LTI in [Webex LTI for teachers](https://help.webex.com/en-us/article/mey5xo/Webex-LTI-for-teachers).
