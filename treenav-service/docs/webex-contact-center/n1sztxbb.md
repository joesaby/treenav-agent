---
title: "Integrate Webex Contact Center with Microsoft Teams"
product: "Webex Contact Center"
article_id: "n1sztxbb"
url: "https://help.webex.com/en-us/article/n1sztxbb/Integrate-Webex-Contact-Center-with-Microsoft-Teams"
last_updated: "2025-12-19"
description: "Agents can connect directly to subject matter experts in real-time. Setting up
Microsoft Teams connector allows agents to quickly identify the right subject
matter expert, understand their availability, and contact them to seek help
during a customer interaction."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Integrate Webex Contact Center with Microsoft Teams

## Integrate Webex Contact Center with Microsoft Teams

Administrators can integrate Microsoft Teams for their organization by setting up a Microsoft Teams connector.

The Microsoft Teams connector is compatible with the next-generation media platform. While it may work with other media platforms, Cisco TAC support is exclusive to the next-generation media platform.

In addition to agents, supervisors can connect with subject matter experts in real-time.

The system automatically turns ON the Presence sync toggle (in Microsoft Teams integration, under Calling Services) when the MS Teams connector is created. If an administrator disables this toggle by turning it OFF, the integration disrupts, and the connector does not function properly. To enable or verify presence sync:

1. Sign in to [Control Hub](https://admin.webex.com/?%5Fgl=1%2A1ytsw9w%2A%5Fgcl%5Fau%2AMTU2MDE4MjUwNC4xNzYyMjMxMzU4LjM4NzQ5MDc3MS4xNzYyOTkwNTg5LjE3NjI5OTA2MDQ.).
2. Go to Services \> Calling \> Settings.
3. Select the Webex App tab.
4. In the Microsoft Teams integration section, toggle on Presence sync if it is currently OFF.

Before you begin

You must have a Microsoft Azure account with one of the following roles to grant permission:

- Global Administrator
- Privileged Role Administrator

| 1 | Log in to the Control Hub with the required privileges.                                                                          |
| - | -------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Choose Contact Center under Services.                                                                                            |
| 3 | In the Contact Center page, select Integrations under Tenant Settings. The Connectors tab displays all the available connectors. |
| 4 | Choose Set Up for Microsoft Teams connector.                                                                                     |
| 5 | Choose Authorize to authenticate with your Microsoft Azure account. Enable the browser pop-up.                                   |
| 6 | Choose Accept to accept the requested permissions.                                                                               |
| 7 | Choose Close.                                                                                                                    |

The status of the connector shows as Active after the setup. 

## View or edit the details of Microsoft Teams connector

Before you begin

 Your Microsoft Azure account should have:

- Business phone number defined in E.164 format.
- A defined job title and department.

| 1 | Sign in to [Control Hub](https://admin.webex.com/login) with the required privileges.                                                                                                                                                                                             |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Contact Center under Services.                                                                                                                                                                                                                                             |
| 3 | In the Contact Center page, select Integrations under Tenant Settings. All the available connectors are displayed under the **Connectors** tab.                                                                                                                                   |
| 4 | Select **View/Edit details** of Microsoft Teams connector to view or edit the details.                                                                                                                                                                                            |
| 5 | (Optional) Toggle ON the **Display user details** setting in **Desktop features**to enable the agents to view the presence of the subject matter experts and search by name, department, and role of the users from Microsoft Teams when initiating consult or transfer of calls. |

## Deactivate or reactivate Microsoft Teams connector

| 1 | Sign in to [Control Hub](https://admin.webex.com/login) with the required privileges.                                                                                                                                                                                                        |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Contact Center under Services.                                                                                                                                                                                                                                                        |
| 3 | In the Contact Center page, select Integrations under Tenant Settings. The Connectors tab displays all the available connectors.                                                                                                                                                             |
| 4 | Select **View/Edit details** of Microsoft Teams connector.                                                                                                                                                                                                                                   |
| 5 | Select **Deactivate** in the Deactivate section to deactivate the connector. A pop-up appears asking you to confirm the deactivation of the connector. Click Deactivate to proceed with the deactivation. The status of the connector shows as **Inactive** upon deactivating the connector. |
| 6 | (Optional) Click **Reactivate** to reactivate the connector. A pop-up appears asking you to confirm the reactivation of the connector. Click Reactivateto proceed with the reactivation of the connector.                                                                                    |

## Delete Microsoft Teams connector

| 1 | Sign in to [Control Hub](https://admin.webex.com/login) with the required privileges.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Contact Center under Services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3 | In the Contact Center page, select Integrations under Tenant Settings. The Connectors tab displays all the available connectors.                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4 | Select **View/Edit details** of Microsoft Teams connector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5 | Select Delete to delete the connector. A pop-up appears asking you to confirm the deletion of the connector. Click Delete to proceed with the deletion. You must deactivate the connector before deleting it. Deleting the connector will remove all the integration ability with Microsoft Teams. Deleting the connector will remove the connector from the Webex Contact Center. The authorization from Microsoft Azure will remain active for the Webex Contact Center. Make sure to delete the enterprise application from Microsoft Azure. |

## Synchronize Microsoft Teams states with Webex Contact Center idle codes

An agent can have different presence statuses in the Microsoft Teams and Webex Contact Center as per the agent's current activity. Administrator can configure presence synchronization so that the agent's presence is automatically updated across both the platforms, lowering the chances of RONA. Agents are no longer required to manually indicate themselves as unavailable when engaged in non-contact center activities. For example, if an agent is busy on a non-contact center customer call on Microsoft Teams, then the agent's status is automatically synchronized in the Webex Contact Center desktop and the calls are not routed to the agent.

To synchronize agent's presence state between both the applications, administrator maps the Microsoft Teams states with the Webex Contact Center idle codes. This mapping is used to route calls to the agent. The agent states in Microsoft Teams available for mapping with Webex Contact Center are Do not disturb, On a call, and Presenting.

| 1 | Login to Control Hub with the required privileges.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Contact Center under Services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3 | In the Contact Center page, select Integrations under Tenant Settings. All the available connectors are displayed under the **Connectors** tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4 | Select **View/Edit details** of Microsoft Teams connector to view or edit the details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 5 | Toggle ON the **State synchronization** setting in **Desktop features** to synchronize agent's presence state between both the applications. Turn off the State synchronization and Display user details toggles in the Webex App before using Microsoft Teams connector. For more information, see 'Manage Webex App' section of [Desktop Settings for Webex Contact Center](https://help.webex.com/en-us/article/preview/nu0du4c/Desktop-settings-for-Webex-Contact-Center#task-template%5F7373a9e4-2a36-40bf-af91-c9fe3234b0bd). When an agent signs in for the first time, there could be a delay up to 40 minutes for the presence to start synchronizing. This delay doesn’t affect agent’s operations. There could be a delay up to 12 seconds for the presence to synchronize across both the platforms. |
| 6 | (Optional) Turn on the Display user details toggle in Webex App to enable the agents to view the presence of the subject matter experts and search by name of the users from Webex App when initiating consult or transfer of calls. Only the subject matter experts who have a business phone number assigned will appear in the search list. To enable State synchronization and Display user details for your agents, see [Manage desktop profiles](https://help.webex.com/en-us/article/nvaf71f/Manage-desktop-profiles)                                                                                                                                                                                                                                                                                     |
| 7 | Enable the respective toggle (Microsoft Teams or Webex App) in the desktop profile. For more information, see Microsoft Teams/Webex App in the 'Create a desktop profile' section of [Manage desktop profiles](https://help.webex.com/en-us/article/nvaf71f/Manage-desktop-profiles#wcc%5Ft%5Fcreate%5Fdesktop%5Fprofiles%5Fch).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

The following table displays the mapping of states in Microsoft Teams and Webex Contact Center.

When a call is active in MS Teams, the Agent Desktop (AD) is automatically set to the 'Idle' state via presence synchronization. After the call ends in MS Teams, the AD should transition back to the 'Available' state through the same presence synchronization.

This behavior depends on the following:

- If the last state change was triggered by presence sync, then the transition back to next 'Available' or 'Idle' via presence sync occurs as expected.
- If the last state on Desktop was set by the agent, supervisor, RONA, or any non-presence-related cause, the next state received from MS Teams is not applied.
