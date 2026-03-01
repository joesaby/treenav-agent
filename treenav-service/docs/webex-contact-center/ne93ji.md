---
title: "Webex Contact Center administrator roles and privileges"
product: "Webex Contact Center"
article_id: "ne93ji"
url: "https://help.webex.com/en-us/article/ne93ji/Administrator-Roles-for-Webex-Contact-Center"
last_updated: "2025-06-23"
description: "Use this article to understand the administrator roles and privileges for Webex
Contact Center."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Webex Contact Center administrator roles and privileges

## Introduction

Cisco Webex Contact Center provides a dedicated _Contact Center Service Administrator_ role that allows you to administer and manage the contact center service and licenses. This role can be assigned to external administrators, and users within the customer organization.

This role is in addition to all existing roles that apply to partner and customer organizations, as described in the article [_Assign organization account roles in Cisco Webex Control Hub_](https://help.webex.com/en-us/fs78p5/Assign-Organization-Account-Roles-in-Cisco-Webex-Control-Hub).

## Administrator roles for Webex Contact Center

A Webex Contact Center administrator may belong to a customer organization, a partner organization that manages your subscription, or any other organization. 

The following table describes the Contact Center-specific privileges of all Control Hub administrator roles:

__Table 1\. Contact Center-specific privileges__
| Role                                 | Customer Organization                                                                                                                                                                                                                                                                                                                                                                                                       | Partner Organization                                                                                                                                                                                                                                                                                                               | Any Other Organization                                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Full Administrator                   | Administer all Webex Contact Center features available in the Contact Center service on Control Hub and Management Portal. Perform all Webex Contact Center user management activities, such as: add or remove users in the customer organization send activation email assign, edit, or remove Contact Center licenses from users add or revoke the Contact Center Service Administrator role from external administrators | Administer all Webex Contact Center features available in the Contact Center service on Control Hub and Management Portal. Perform all Webex Contact Center user management activities, such as: add or remove users in the customer organization send activation email assign, edit, or remove Contact Center licenses from users | Administer all Webex Contact Center features available in the Contact Center service on Control Hub and Management Portal. Perform all Webex Contact Center user management activities, such as: add or remove users in the customer organization send activation email assign, edit, or remove Contact Center licenses from users |
| Contact Center Service Administrator | Administer all Webex Contact Center features available in the Contact Center service on Control Hub and Management Portal. Perform all Webex Contact Center user management activities, such as: send activation email assign, edit, or remove Contact Center licenses from users add or revoke the Contact Center Service Administrator role from external administrators                                                  | Not Applicable                                                                                                                                                                                                                                                                                                                     | Administer all Webex Contact Center features available in the Contact Center service on Control Hub and Management Portal. Perform all Webex Contact Center user management activities, such as: send activation email assign, edit, or remove Contact Center licenses from users                                                  |
| Provisioning Administrator           | Not Applicable                                                                                                                                                                                                                                                                                                                                                                                                              | Administer all Webex Contact Center features available in the Contact Center service on Control Hub and Management Portal. Can’t perform any user management activities. Can only view the list of other external administrators in the organization.                                                                              | Not Applicable                                                                                                                                                                                                                                                                                                                     |
| Read-only Administrator              | Can't access the Webex Contact Center service on Control Hub and sign in to Management Portal.                                                                                                                                                                                                                                                                                                                              | Can access the Webex Contact Center service on Control Hub and sign in to Management Portal in read-only mode only.                                                                                                                                                                                                                | Can access the Webex Contact Center service on Control Hub and sign in to Management Portal in read-only mode only.                                                                                                                                                                                                                |
| Supervisor                           | Has limited access to Control Hub, only to business hours. A supervisor can manage all business hours-related activities, such as: manage shifts and holidays update overrides The supervisor's access to only business hours is controlled by user profiles.                                                                                                                                                               | Not Applicable                                                                                                                                                                                                                                                                                                                     | Not Applicable                                                                                                                                                                                                                                                                                                                     |

If you assign a full administrator role to a user with a Webex Contact Center standard license, administrative features on the Management Portal aren't accessible to that user. Such users can only sign in to the Agent Desktop.

## Assign the Contact Center Service Administrator role to a user

The following table describes the different user roles that can assign and revoke the Contact Center Service Administrator role and the key points to remember for this role.

You can assign a user with only one of these roles: Contact Center Service Administrator, Full Administrator, or Read-only Administrator.

__Table 2\. User Roles__
|                                      | Customer Organization                                                                                                                                                                                                                                                                                                                                                                                                                                  | Partner Organization                                                                                                              | **Any Other Organization**                                                                                                                                                                                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Full Administrator                   | Assign the Contact Center Service Administrator role to a user either from the customer organization or an external organization. Webex Contact Center doesn’t support adding a Contact Center Service Administrator from an external organization, if the external organization also has Contact Center service enabled. You can’t assign the Contact Center Service Administrator role to an external user from a provisioning partner organization. | Assign the Contact Center Service Administrator role to a user either from the customer organization or an external organization. | Assign the Contact Center Service Administrator role to a user either from the customer organization or an external organization.                                                                                                                              |
| Contact Center Service Administrator | Assign the Contact Center Service Administrator role to a user either from the customer organization or an external organization. Webex Contact Center doesn’t support adding a Contact Center Service Administrator from an external organization, if the external organization also has Contact Center service enabled. You can’t assign the Contact Center Service Administrator role to an external user from a provisioning partner organization. | Not Applicable                                                                                                                    | Assign the Contact Center Service Administrator role to a user from the customer organization. You can't assign the Contact Center Service Administrator role to another external user; you can assign the role to a user from the customer organization only. |

For more information on how to assign roles to a Contact Center user, see the article [_Ways to Add Users for Cisco Webex Contact Center_](https://help.webex.com/en-us/52ulis/Ways-to-Add-Users-for-Cisco-Webex-Contact-Center) article.

## Contact Center Service Administrator Privileges

As a Contact Center Service Administrator, you can:

- perform Contact Center-specific administration activities on Control Hub as explained in the following sections.
- access all features in the Contact Center Services tab on Control Hub and on Management Portal.

For more details about configuring Webex Contact Center, see [_Webex Contact Center Documentation_](https://help.webex.com/ld-sa4udab-CiscoWebexContactCenter/Cisco-Webex-Contact-Center).

As a Contact Center Service Administrator, you can't access the Services Set-Up Wizard. 

### Identify the Contact Center platform

1. Sign into [Control Hub](https://admin.webex.com).
2. From the Services section of the navigation pane, choose Contact Center \> Settings \> General  \> Service Details.
3. The Webex Contact Center platform details field shows 1.0 for Webex Contact Center 1.0 and New platform for Webex Contact Center.

### Set up Webex Contact Center

After a full administrator successfully completes the Services Set-Up Wizard, you can set up Webex Contact Center.

1. Access the Contact Center Service Configurations.
2. Click Set up Webex Contact Center.  
This is applicable only if the Webex Contact Center platform details field in the Service details section shows 1.0.

### User management

The Management \> Users menu enables you to manage contact center users. For information about users and administrators, see the [Cisco Webex Contact Center Setup and Administration Guide](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F01000.html).

All users

You can view the list of all users in your organization, including users of other services.

### Resend the activation email to an unverified user

If a user can't find the activation email, you can send a new email.

1. Click the  (ellipsis) button beside the user's name.
2. Click Resend Invitation.

### User services and roles

As the Service Administrator, you can view the users of the organization. You can't add, delete, activate or deactivate users from the organization. 

You can assign or unassign only the Contact Center Service Administrator role for a user.

### View the user details

1. In Control Hub, select Management \>  Users.
2. Click a user in the list.
3. Click Edit licenses to update the Contact Center service configuration and license information for the user.  
On Webex Contact Center 1.0, the licensing options appear as shown.  
On Cisco Webex Contact Center, the licensing options appear as shown.
4. Click Administrator roles to view the administrator roles for the user. You can assign or unassign only the Contact Center Service Administrator role for a user.

### Manage users

In the CSV template, you can set only the Webex Contact Center premium and Webex Contact Center standard columns to True or False.

1. In Control Hub, select Management \>  Users.
2. Click Manage users.
3. Perform one of the following tasks:

  - Click Manually add or modify users to manually update Contact Center license information and the associated roles for users.
  - Click Csv add or modify users to update the information by importing a `.csv` file.

### View the Webex Contact Center Administrators

As a Contact Center Service Administrator, you can view only other Contact Center Service Administrator users. You can't view full administrators or administrators of other services in the organization. 

1. On the Users page, click the Filter icon and do one of the followng:

  - Choose Administrators to view the administrators in the customer organization.
  - Choose All external administrators to view Contact Center service administrators.
2. Click an administrator user row.
3. Update this information:

  - User Details
  - Licenses
  - Administrator Roles

### View the Contact Center Service Administrators

If you are an external administrator with the Contact Center Service Administrator role, you can perform the following tasks:

- View and update the Contact Center Service Administrator role for a user in the customer organization.
- Add, remove, or edit Contact Center licenses for users in the customer organization.

If you are an external administrator with the Contact Center Service Administrator role, you can't perform the following tasks:

- Add another external Contact Center Service Administrator to the organization.
- Assign the Contact Center Service Administrator role to an external user who is from a provisioning partner organization.
- View external administrators with roles other than the roles of Contact Center Service Administrator.
1. On the Users page, click the Flter icon and choose All external administrators.
2. Perform one of the following tasks:

  - Click the corresponding row to view and update the Contact Center Service Administrator role for an external administrator.
  - Click Add external admin to add an external user and assign the Contact Center Service Administrator role to the user.

### Manage a Customer Account

1. Click Management \> Account.
2. Click the Info tab to view the organization account details.
3. Click the Subscriptions tab to view the Contact Center license usage and trial and subscription information for your organization.

### View the Webex Service Status and Supported Resources

1. Click Monitoring \> Troubleshooting.
2. Click a Webex service to view the service status.
