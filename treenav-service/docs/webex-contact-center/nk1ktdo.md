---
title: "Assign external administrator roles in Control Hub"
product: "Webex Contact Center"
article_id: "nk1ktdo"
url: "https://help.webex.com/en-us/article/nk1ktdo"
last_updated: "2025-11-24"
description: "You can add anyone outside your organization as an external administrator. You
can also manage external administrator privileges and define them as an external
full administrator or an external read-only administrator."
tags: ["webex-contact-center", "webex-meetings", "webex-messaging", "webex-calling"]
source: "help.webex.com"
---

# Assign external administrator roles in Control Hub

## External administrator roles

External administrators are administrators from outside your organization.

You can assign external administrators as a way to access your organization in case of emergency sign-in issues, such as if SSO isn't working properly for a SSO-configured organization.

Anyone outside your organization that has access to your organization’s Control Hub is shown in the Users section under the External Administrators tab.

There are three external administrator types:

- External full administrator—External full administrators have many of the same permissions as internal full administrators. External full administrators can manage users, devices, licenses, and troubleshoot issues the same as an internal full administrator.  
External administrators must sign in to Control Hub after being assigned the external full administrator role before they can get admin access to meeting sites.
- External read-only administrator—External read-only administrators are users that can view your organizational settings and templates, but not make any changes. Support staff that access your organization generally have the role of read-only administrator. Read-only administrator access is automatically revoked after some time. You can [grant or deny administrative access to anyone](https://help.webex.com/article/nbhqds0/).
- Provisioning administrator—Provisioning administrators are added when a partner provisions your Webex services orders. Provisioning administrators can provision orders, access your organization's licenses and upgrades, add and delete Webex sites, troubleshoot issues, and access locations.  
The provisioning administrator role is implicitly granted to a [partner administrator](https://help.webex.com/16gmxfb/) as they launch a customer's Control Hub. The role can't be assigned to an external user in the same manner as the external full admin or external read-only admin roles.

Assign external administrators as full or read-only administrators in order to clearly define what their responsibilities are in your organization. Dividing administrative responsibilities can also ensure greater accountability within your organization.

| Access                            | External full administrator | External read-only administrator | Provisioning administrator            |
| --------------------------------- | --------------------------- | -------------------------------- | ------------------------------------- |
| User Management                   | ✔                           | Read-only                        | X                                     |
| Device Management                 | ✔                           | Read-only                        | X                                     |
| Company Policy and Templates      | ✔                           | Read-only                        | X                                     |
| Analytics and Reports             | ✔                           | Read-only                        | X                                     |
| Troubleshooting                   | ✔                           | Read-only                        | ✔ (for the services the partner sold) |
| Support Metrics and Notifications | ✔                           | Read-only                        | X                                     |
| Licenses and Upgrades             | ✔                           | Read-only                        | ✔ (for the services the partner sold) |
| Assign roles                      | ✔                           | Read-only                        | X                                     |
| Provision orders                  | ✔                           | X                                | ✔ (for the services the partner sold) |
| Add and delete sites              | ✔                           | X                                | ✔ (for the services the partner sold) |
| Add external administrators       | X                           | X                                | X                                     |
| Locations                         | ✔                           | Read-only                        | ✔                                     |

## Add external administrators

You can add anyone outside your organization as an external administrator to help maintain your Webex services and users. External administrators can't add additional external administrators to your organization.

There are a few limitations to keep in mind before you add an external administrator.

- You can only add external administrators from the same environment as your organization. For example, while you may [allow external commercial users as guests](https://help.webex.com/qe2kbu/) to your Webex for Government organization, you can't grant them external administrator privileges.
- Users in free self-sign up organizations can be added as external administrators. However, users that are part of the consumer organization can't be added as an external administrator. Control Hub indicates an error when you try to verify the emails of users who are in the consumer organization.
- You can't add external administrators to a Webex Online account (accounts with a my.webex.com domain).

| 1 | Sign in to [Control Hub](https://admin.webex.com/) and go to the Users page.                                                                                                                                                                                                                                                                                                                                                                                 |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Select the External administrators tab and click Add external administrator.                                                                                                                                                                                                                                                                                                                                                                                 |
| 3 | Enter the administrator's email address and click Verify email.                                                                                                                                                                                                                                                                                                                                                                                              |
| 4 | If this user belongs to a partner organization that manages your subscription, choose Full administrator privileges or Provisioning administrator privileges. If they are from any other organization, choose: Full administrator Read-only administrator Contact Center service administrator (if applicable) Webex site administrator (if applicable). You can then choose to assign users as full, read-only, or user administrators for each Webex site. |
| 5 | Click OK.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Manage external administrator privileges

You can choose what information is shared or withheld from external administrators.

As a full administrator of your organization, you can also adjust the administrator privileges for external administrators.

| 1 | [Sign in to Control Hub](https://admin.webex.com/), then open the Users page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Filter the user list by All external administrators to see the list of external admins.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3 | Select the user you want to edit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 4 | Choose one of the following: To promote the administrator to a full administrator, under Administrator roles, check Full administrator privilege. If the administrator was set up with read-only privileges, you can promote them by going under Administrator roles and choosing Full administrator privilege. To demote the administrator to a provisioning administrator, under Administrator roles, uncheck the Full administrator privilege check box. If the administrator was set up with read-only privileges and previously promoted to a full administrator, you can demote them by going under Administrator roles and choosing Read-only administrator privilege. You need to demote all external administrators at once for the system to save the change. To completely revoke administrator privileges, under Revoke admin privilege, click Revoke admin privilege and then select Revoke privilege. Revoking administrator privileges deletes all record of the administrator, and they must be added again to reinstate them. |

## Sign in as an external administrator

Use the following steps to sign in to an organization as an external administrator.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                |
| - | ---------------------------------------------------------------------------------- |
| 2 | Click on the Customers tab.                                                        |
| 3 | Click on the Go to Control Hub button next to the organization you want to manage. |
