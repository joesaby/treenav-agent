---
title: "Customizing Release Management in Webex: A Comprehensive Guide"
product: "Webex for Cisco BroadWorks"
article_id: "j8ei6j"
url: "https://help.webex.com/en-us/article/j8ei6j/Release-Management-Customizations"
last_updated: "2025-02-11"
description: "Learn how to customize release management in Webex. This guide covers
configuration options, best practices, and tips for tailoring release management
to meet your organization&#x27;s needs and enhance software deployment processes."
tags: ["webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# Customizing Release Management in Webex: A Comprehensive Guide

## Release Management Overview

Release Management controls in Partner Hub make it easy for Webex for Cisco BroadWorks Service Providers to manage releases. Service Providers can control the release cadence by which users' Webex Apps upgrade to the latest software. With this feature, partner administrators can:

- Configure customized release schedules with set deferrals from the Cisco-default release schedule.
- Configure a single release schedule and cascade that schedule to all customer organizations that they manage.
- Assign different release schedules to different customer organizations.

The scheduling options are as follows:

- Automatic Upgrades—Cisco-controlled monthly releases (this setting is the default)
- Latest Release—Customized release deferral of up to four weeks after the Automatic upgrade date
- Slow Release—Customized release deferral of up to 12 weeks after the Automatic upgrade date

This feature applies to desktop clients only.

## Configure Release Schedule (for Partners)

Partner administrators can configure a single release schedule and cascade that schedule as the default to all of their customers.

| 1 | Sign in to Partner Hub.                                                                                                                                                                                                                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click Settings.                                                                                                                                                                                                                                                                                                                                  |
| 3 | Under Software upgrades for Webex, choose one of the following: Automatic updates (Controlled by Cisco)—Customer organizations use Cisco’s monthly release schedule. Custom scheduled updates with deferrals—Customer organizations use the custom release schedule that you define in the next step.                                            |
| 4 | If you chose Custom schedule, configure the schedule: Cadence—Select Latest (up to a 4-week deferral past the Automatic upgrade date) or Slow (up to a 12-week deferral). Deferrals—Select the number of weeks that you want to defer the release past the Cisco monthly release. The maximum deferral depends on the Cadence that you selected. |
| 5 | Enable or disable the Allow all Customers to Override Setting toggle: Enabled—Customer administrators can override partner release settings by setting their own schedule. Disabled—Customer administrators can view release settings, but can’t edit them.                                                                                      |

## Configure Release Schedule (for Customer Organizations)

Using the Customer View, partner administrators can assign a release schedule to a specific customer organization. For this organization, this new setting overrides the partner-level default setting. 

| 1 | In Partner Hub, open the Customer View for a specific customer organization.                                                                                                                                                                                                                                                                                                        |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Organization Settings.                                                                                                                                                                                                                                                                                                                                                       |
| 3 | Under Software updates for Webex, choose one of the following: Automatic updates (Controlled by Cisco)—Choose this option to apply the Cisco-controlled monthly release schedule to this organization. Custom scheduled updates with deferrals—Choose this option to set up a custom release schedule for this organization.                                                        |
| 4 | If you chose a custom schedule, configure the following: Cadence—Select from Latest (up to a 4-week deferral past the Automatic upgrade date) or Slow (up to a 12-week deferral) Deferrals—Select the number of weeks to defer releases past the Cisco monthly release. The maximum deferral depends on how you configured.Cadence                                                  |
| 5 | Enable or disable the Allow all customers to override settings toggle according to whether you want an administrator from this organization to be able to override your release schedule: Enabled—Customer administrators can override partner release settings and set their own release schedule. Disabled—Customer administrators can view release settings but can’t edit them. |

## Customer Override

With the Allow all customers to override this setting toggle, partner administrators can prevent customer administrators from overriding partner-level release settings. For partner administrators, this toggle appears in two places:

- Partner Hub Settings view (Partner-level settings)
- Customer View (Organization Settings for a specific customer organization

The following conditions apply to the override:

- The override in the Customer View (Organization Settings) for a customer organization overrides the partner-level setting for that customer organization.
- If a partner administrator disables the customer override, the partner administrator can still configure customized schedules for individual customers from Partner Hub's Customer View. However, customer administrators cannot edit release management settings.
- If a customer organization has a release schedule that is different from the partner-level default, the organization no longer inherits the partner-level release settings. This may occur because the customer administrator edited the default release settings or because the partner administrator assigned a uniquq release schedule to that organization.  
If a partner administrator edits Release Management settings at the partner level, the updates won't apply to that customer organization.

## Override Custom Schedule (for Users)

If a custom release schedule is configured for a customer organization, you can override this setting by assigning Automatic upgrades to specific users.

- This option is available only if a custom release schedule (Latest or Slow) is applied to the customer organization. In this case, you can override this setting and assign Automatic upgrades to specific users. An example where this may be used is if you want a few users to be able to test the latest release before it becomes available to the entire organization.
- There is no option to apply a unique custom release schedule to specific users.

| 1 | In Partner Hub, open the Customer View for a specific customer organization.    |
| - | ------------------------------------------------------------------------------- |
| 2 | Select Users.                                                                   |
| 3 | Select the user for which you want to apply a release schedule update.          |
| 4 | Under Software updates for Webex set the Allow Automatic Upgrades toggle to on. |

## Download Webex App Bundle

Within the Release Management controls in Partner Hub, partner administrators can download the latest Webex App bundle.

| 1 | Sign in to Partner Hub.                                                             |
| - | ----------------------------------------------------------------------------------- |
| 2 | Click Settings.                                                                     |
| 3 | Under Software upgrades for Webex, click Download Webex builds.                     |
| 4 | In the popup window, click the platform and version file that you want to download. |

## Release Management Conflicts

If a configuration conflict exists for a customer organization, the Cisco default (Automatic upgrades) gets applied. A conflict could happen if two different Partners deliver non-conflicting Webex services to the same customer organization (for example, Webex Calling and Webex for Cisco BroadWorks), and the two Partners configure Release Management differently for that organization.

## Release Schedule Changes

The following conditions apply when you change an existing release schedule between a slower cadence and faster cadence:

| Type of Change      | What happens                                                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| To a faster cadence | The client upgrades to the latest faster release, provided that release is newer than the release that you are running. Otherwise, the client upgrades when the next release comes out at the faster cadence. |
| To a slower cadence | The client remains on the latest release that was running at the time of the change until the next release at the slower cadence. The client then upgrades using the slower release cadence.                  |

A change in the settings (for example, changing from Latest to Slow) may take up to 24 hours to process. However, a change in the number of weeks for deferral processes immediately.

## Migration to Updated Feature

Partner-level Release Management changes the pre-existing Release Management feature for customer organizations as follows:

- For customer organizations, the Software Updates for Webex section moves from the Messaging tab to Organization Settings.
- The Cadence setting replaces Frequency.
- One-month release deferrals in the pre-existing settings get assigned to the Latest channel.
- Three-month release deferrals in the pre-existing settings get assigned the Slow channel.

From a customer organization perspective, migration occurs after the organization administrator clicks Organization Settings for the first time following the feature release.
