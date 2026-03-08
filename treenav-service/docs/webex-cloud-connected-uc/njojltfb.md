---
title: "Migrate your Phone to Webex Calling"
product: "Webex Cloud-Connected UC"
article_id: "njojltfb"
url: "https://help.webex.com/en-us/article/njojltfb/Migrate-your-Phone-and-Personal-Contacts-to-Webex-Calling--FedRAMP"
last_updated: "2025-04-29"
description: "This article helps to update the existing applicable migration services to be
deployed to the Webex for Government environment."
tags: ["webex-cloud-connected-uc"]
source: "help.webex.com"
---

# Migrate your Phone to Webex Calling

## Overview

The migration takes place at the FedRAMP environment, to allow for the usage of the following tools in FedRAMP:

**Device Migration** \- "Migrate Enterprise phones to Multiplatform (MPP) firmware"

**Personal Contacts Migration** \- "Migrate Personal Contacts to Webex App"

## Migrate your Phone to Webex Calling

Perform the new and automated device firmware migration from Control Hub, so that you can migrate your enterprise devices to cloud. You can migrate the required Enterprise Firmware phones to Multiplatform Phone (MPP) Firmware from Control Hub under FedRAMP environment. MPP phones are powered by Webex Calling solutions. 

## Prerequisites

Before you perform the device firmware migration, make sure that you meet the following requirements:

1. To generate license on FedRAMP, enable the "wxc-migration-services-fedramp-support-org" toggle in commercial org .
2. To process the enablement of FedRAMP org, reach out to the Accounts team.
3. Check the supported Cisco IP Phone models.  
You can migrate only the supported Cisco IP Phone models. For more information, See [Supported Cisco IP Phone Models](https://help.webex.com/en-us/article/n19c71/Migrate-Your-Phone-to-Webex-Calling#reference%5F8D414CFFB3C932B90401A54185BA16E2).

## License Generation

Generate the licence to prepare the devices on migration.

Use the migration wizard on Control Hub to prepare the devices for migration. Using the wizard you can perform tasks, such as create a migration task, add devices, generate device licenses, check the device eligibility, and so on

The task flow for Migration:

- Task Name
- Add Devices
- Verify Devices

### Task Name

Add the task name to migrate your enterprise phones to webex users or workspace.

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/).                                                                                                                                                                                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Go to **Services** and then **Updates & Migrations.**                                                                                                                                                                                                                                                                                                                    |
| 3 | Click on the **Migrate Enterprise phones to Multiplatform (MPP) firmware** Card.                                                                                                                                                                                                                                                                                         |
| 4 | Click **Start new task+** to start a new migration task. At any given time, only one task is with the In Progress status is allowed. If you start a new task with its status **In Progress** and **Prepare For Migration**, a new task can be created but the button is disabled until the **In Progress** task completes.                                               |
| 5 | Enter the task name in the **Task name**  field.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/481001-482000/481454.png)  You may use a combination of cluster name, date of creation, user type etc to easily recognize your task. Do not use a space in the migration task name. Replace the space with an underscore. |
| 6 | Select the **Generate Device License Only**migration option from the drop-down list.                                                                                                                                                                                                                                                                                     |

### Add Devices

Add the devices to migrate your enterprise phones to webex users or workspace.

| 1 | Download and edit the CSV template file, and then upload the edited version to add devices.                                                                                                                                                                                                |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | In the **Add devices** page, go to the **Download template files** section to download the CSV template. Refer to [CSV file Parameters](https://help.webex.com/en-us/article/n19c71/Migrate-Your-Phone-to-Webex-Calling#task%5FB4C798E9C3849A883D0CFF9836312A54) to know about the fields. |
| 3 | Drag and drop the updated CSV file in the upload section.                                                                                                                                                                                                                                  |
| 4 | Click **Next**.                                                                                                                                                                                                                                                                            |

### Verify Devices

Verify the list of devices are eligible to migrate to Webex Calling. See [Firmware Migration (Overview)](https://help.webex.com/en-us/article/n19c71/Migrate-Your-Phone-to-Webex-Calling#concept%5FB892DC7274B6C20B23011B4B7F8FDD8A) to manually verify the device migration eligibility.

| 1 | Once the list of devices is verified, click **Prepare for Migration**. In the **Firmware Upgrade** pane, you can see the status of the task. |
| - | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the **three dots** of the specific task and then click **Download license file**.                                                      |

## License Upload

Upload the license for migration under FedRAMP environment.

The task flow for Migration:

- Task Name
- Upload Device

### Task Name

Add the task name to migrate your enterprise phones to webex users or workspace.

| 1 | Log in to <https://admin-usgov.webex.com>.                                                                                                                              |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to **Services** and then **Updates & Migrations.**                                                                                                                   |
| 3 | **Click on the Migrate Enterprise phones to Multiplatform (MPP) firmware** Card.                                                                                        |
| 4 | Click **Start new task+** to start a new migration task.                                                                                                                |
| 5 | Enter the task name in the **Task name** field.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/481001-482000/481455.png) |
| 6 | Select the **Upload License** migration option from the drop-down list.                                                                                                 |

### Upload License

Upload the license to migrate your enterprise phones to webex users or workspace.

| 1 | In the **Upload License** card, upload the Upload phone migration license file. |
| - | ------------------------------------------------------------------------------- |
| 2 | Click **Submit**.                                                               |
