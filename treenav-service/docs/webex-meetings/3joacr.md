---
title: "Configure Webex Desktop Application Settings in Cisco Webex Control Hub"
product: "Webex Meetings"
article_id: "3joacr"
url: "https://help.webex.com/en-us/article/3joacr/Configure-Webex-Desktop-Application-Settings-in-Cisco-Webex-Control-Hub"
last_updated: "2024-09-15"
description: "Site administrators in Control Hub can manage settings for the Webex Desktop
App, which makes it easier for users to schedule, start, and join Webex
meetings, events, and training sessions."
tags: ["webex-meetings", "webex-events-(classic)", "webex-training"]
source: "help.webex.com"
---

# Configure Webex Desktop Application Settings in Cisco Webex Control Hub

- [WBS33 - WBS39.5](#id%5F131781)
- [WBS39.6 and Later](#id%5F131870)

## Edit Application Settings

Configure Site Settings for the Webex Desktop App 

| 1 | From the customer view in <https://admin.webex.com>, go to Services \> **Meeting**.                                                                                                                                                                                                                                                                                                                                                                                         |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Sites tab, select a Webex site, and then click Settings.                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3 | Under Common Settings, select Desktop Application, and then toggle on the application setting that you want to change. Important: Allowing automatic updates will ensure that the pre-meeting and in-meeting desktop apps are both using the latest Webex version. This will ensure that your users will have a consistent experience when joining and starting meetings. For WBS39.8 and later versions, the pre-meeting desktop app is mandatory in Cisco Webex Meetings. |
| 4 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Edit Calendar Integration Settings

Configure Calendar Integration Settings 

| 1 | From the customer view in <https://admin.webex.com>, go to Services \> **Meeting**.                                                                                                                                                                                                                 |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Sites tab, select a Webex site, and then click Settings.                                                                                                                                                                                                                                     |
| 3 | Under Common Settings, select Desktop Application, and then toggle on the calendar integration setting that you want to change relating to: Microsoft Outlook for WindowsMicrosoft Outlook for MacMicrosoft Outlook Office 365Google CalendarIBM Lotus Notes                                        |
| 4 | Click Save. Individual features and settings within the programs and features that are integrated cannot be configured or hidden. For example, when the desktop app integration with Microsoft Outlook is enabled, you cannot alter or hide which meeting options appear for hosts when scheduling. |

## Webex Desktop Application Settings

With the WBS39.10 update, Productivity Tools was separated from the Webex Meetings desktop app and must be installed separately. The current desktop app settings are:

- Application Settings—Show install Webex Desktop Application page when the host logs into the site.
- Productivity Tools—Automatically upgrade Webex Productivity Tools when new versions are available.  
For more information on installation and upgrade see, [Webex Meetings Desktop App and Productivity Tools Installation Matrix WBS39.10](https://help.webex.com/mvpx89/).

## Calendar Integration Settings and Application Integration Settings

Calendar and app integration settings were removed from Webex Control Hub. The following options are available for managing these settings: 

- Manually installing the Webex Meetings desktop app installs all integrations for integrated apps that are currently on the device.
- IT administrators can control integration features through parameters listed in the [mass deployment guide](https://help.webex.com/51k9lo/).
- Microsoft Outlook for Windows users can enable or disable the integration by going to File \> Manage COM Add-Ins.
