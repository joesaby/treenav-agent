---
title: "View a device's history in Control Hub"
product: "Devices"
article_id: "jhkg7ab"
url: "https://help.webex.com/en-us/article/jhkg7ab"
last_updated: "2025-09-05"
description: "Device history allows you to quickly check what has happened on the device.
Details on changes to configurations, macros, web apps, and software versions
help you when you want to see what has been changed and when you have to
troubleshoot a device."
tags: ["devices"]
source: "help.webex.com"
---

# View a device's history in Control Hub

In the customer view on [admin.webex.com ](http://admin.webex.com), go to **Devices**. Select a device and click the **History** tab on the device details page. 

On this page you can see what changes have been made to:

- [Configurations ](https://help.webex.com/n5pqqcm/)  

  - **Configurations (Change confirmed)**  
  Shows when the device reports back to the cloud that a configuration has changed on the device. The change could come from the device itself, Control Hub, APIs, or any other place where you can update configurations.
  - **Configurations (Factory default updated)**  
  Shows when a configuration value changes because of a RoomOS upgrade.
  - **Configurations (Location default changed)**  
  Shows when a configuration is added or changed at the Location level (where the device is connected). This will only take effect on the device if it is following the location default for this configuration.
  - **Configurations (Organization default changed)**  
  Shows when a configuration is added or changed at the Organization level. This will only take effect on the device if it is following the organization default for this configuration.
  - **Configurations (Value changed)**  
  Shows when you initiate a configuration change successfully, even if the device can’t be reached from the cloud. To get confirmation of the change, you must look at Configurations (Change confirmed).
- [Macros ](https://help.webex.com/gj962f/)
- [Web apps ](https://help.webex.com/h47w6/) (only available on Board and Desk Series devices)
- [Software versions ](https://help.webex.com/idba5c/)

Organization and location default changes show up in Device History even if the device can’t apply them. This can happen if the same configuration is already set on the device level, which takes priority. In this case, the organization or location change won’t take effect until the device’s configuration is set to follow default. 

When a user logs in with their Webex credentials, their actions are logged. For example, the **Control Hub history** may show that a local change was made to a device.

You can filter the results by selecting one or more of the available categories and by whether the change was made by the device or an administrator. You can change the date range in the calendar filter. The maximum date range is 30 days.

Select one of the results to see more details on the changes that have been made on the device.

In the summary and details, you can see what was changed, who made the change, and when and where that change was made.
