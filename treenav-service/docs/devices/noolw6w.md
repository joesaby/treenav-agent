---
title: "Workspaces in Control Hub"
product: "Devices"
article_id: "noolw6w"
url: "https://help.webex.com/en-us/article/noolw6w"
last_updated: "2025-08-15"
description: "Workspaces in Control Hub represent physical spaces, such as meeting rooms or
huddle spaces, in your organization. Workspaces offers visibility into how
spaces and devices are being utilized. You can view usage analytics, devices and
peripherals associated with the workspace, device&#x27;s online status, and more for
each workspace."
tags: ["devices"]
source: "help.webex.com"
---

# Workspaces in Control Hub

Workspaces provide a comprehensive platform for managing and monitoring these spaces and their associated devices and peripherals remotely. Key features include usage analytics to understand how spaces are used, proactive issue detection, and workspace customization. Workspaces enable effective utilization and management of an organization's devices and spaces.

The Workspaces page provides an overview of all the workspaces in your organization. It's a centralized location where you can manage and monitor all workspaces and their associated devices. On this page you can create and manage workspaces with [shared devices](https://help.webex.com/1mqb9cb/) or [without devices](https://help.webex.com/grkis6/).

In the Workspace list you can:

- **View all workspaces**: You can see a list of all workspaces along with some basic details such as workspace name, type, location, and associated devices.
- **Sort and filter**: You can sort the list by various parameters or apply filters to find specific workspaces quickly.
- **Bulk actions**: Depending on your platform, you may be able to perform bulk actions on multiple workspaces at once, like updating settings for location, room type and capacity, meetings, and scheduling type.
- **Edit workspaces**: You can select a workspace from the list and edit its details, such as the name, type, location, and associated devices.
- **Monitor workspace status**: The list provides information about the status of each workspace, such as whether it's active or inactive, online or offline, and if there are any issues that need attention.

You can customize the workspaces list to show the information that's important to you. Click on the cogwheel icon on the top of the list and select the information you want to see on the workspaces list. Click Reset to apply the changes.

The changes to the workspaces list are persistent and you'll see the same view next time you log in. You're changes are not visible to other Control Hub administrators.

You can choose from:

|               |                        |                   |
| ------------- | ---------------------- | ----------------- |
| All           | SIP address            | Hide from search  |
| Name          | Planned Maintenance    | Indoor navigation |
| Devices       | Directory Synced       | Floor             |
| Scheduling    | Device Hosted Meetings |                   |
| Calling       | Device Platform        |                   |
| Actions       | Notes                  |                   |
| Email Address | Issue type             |                   |

On the Workspaces page you also have access to the following tabs:

- **Insights**: Workspace insights provide analytics and data about the usage of workspaces and associated devices in your organization. This feature helps you understand how your rooms and devices are being used, enabling you to make informed decisions about resource allocation, workspace planning, and device management. Read more about [Insights](https://help.webex.com/yuzsuw/).
- **Integrations**: For full administrator users, the integrations framework provides a way to enable a third-party vendor to interact with the Webex APIs in a transparent and controlled manner. Read more about [workspace integrations](https://developer.webex.com/docs/workspace-integrations).
- **Settings**: From this page you can enable [Directory sync](https://help.webex.com/np2gdab/) and enable workspace metrics.

## Workspace details page

Editing workspaces allows you to manage and customize each workspace according to your needs. On the details page for the workspace, you can among other things edit the way it's been set up, view data from that workspace, and monitor the devices that are connected to it.

**Devices and peripherals in a workspace** 

On the workspace details page, you can see images and the online status of the devices that are connected to the workspace. In the devices section we show devices and peripherals, such as displays, cameras, microphones, and touch panels. 

The Cisco devices show which platform those are registered to. When you hover over a Cisco device, you can see details of the device such as IP address, serial number, and MAC address. 

Room Navigators that are in [stand-alone mode](https://help.webex.com/iq6aw6/) show up as a larger icon with the Cisco or Microsoft logo. Room Navigators that are [connected to a device](https://help.webex.com/fqm3au/) are shown as smaller icon without a logo.

Third-party peripherals that we can’t verify through our [Cisco certification program](https://help.webex.com/7sw4gab/), are shown as generic icons that reflect the device type. 

 Displays

 Cameras

 Microphones

 Headsets

For third-party microphones, only USB microphones are reported in the devices overview. Analog microphones are not shown.

If you are using displays that are a part of the [Cisco certification program](https://help.webex.com/7sw4gab/), you can see more detailed information:

- Product type
- Image of the device provided by the vendor
- The connection type and port used
- Display size
- Resolution
- Frame rate
- Software version
- Serial number

To see detailed information for displays in a workspace, we highly recommend that the configuration _Video Output Connector \[n\] CEC Mode_ is set to _On_ on the collaboration device so that the displays are able to send their metadata.

**Actions available on the workspace details page** 

These actions are available on the workspace details page:

- Change workspace name, type, and capacity
- Upload an image of the workspace
- [Lock the settings menu](https://help.webex.com/z0ybrr/)
- [Calling and calendar services](https://help.webex.com/zgjezbb/)
- View historical data for the workspace to see the sound level, ambient noise, temperature, air quality, and humidity. You can also see information on occupancy and number of people in the space and how that compares to the set capacity. Read more about [historical data](https://help.webex.com/nc6od6r/).
- [Add or edit location](https://help.webex.com/ajh6iy/)
- Delete a workspace
