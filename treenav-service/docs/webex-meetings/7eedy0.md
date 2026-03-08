---
title: "Group management"
product: "Webex Meetings"
article_id: "7eedy0"
url: "https://help.webex.com/en-us/article/7eedy0/Group-management"
last_updated: "2025-08-25"
description: "Use Control Hub to manage all aspects of your groups, including group settings,
user management, and template assignments."
tags: ["webex-meetings", "webex-webinars", "webex-events-(classic)"]
source: "help.webex.com"
---

# Group management

Groups help you to organize similar users and bulk manage user assignments, settings templates, and resources. For groups based in specific areas (such as physical office buildings and sites), we recommend using locations.

You can create and manage your Webex organization's groups by:

- Using the Groups pages in Control Hub (this article)
- Synchronizing security groups from Active Directory (see [Directory connector deployment guide](https://www.cisco.com/go/hybrid-services-directory))
- Using the groups API (see [Webex Groups API at developer.webex.com](https://developer.webex.com/docs/api/v1/groups))

We don't synchronize Distribution groups from Active Directory. This is because Distribution groups are used for mass communications, while Security groups are used for granting permissions in AD. Webex follows that model and only uses synchronized Security groups for applying settings templates, licenses, policies, and features to multiple users.

Groups in Control Hub support a maximum of 250,000 members.

## Create a new Webex group

Create a new local user group in Control Hub.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                         |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Groups \> Webex groups and click Create a group.                                                                                                                                                                                                                                                                                                      |
| 3 | Enter a group name, an optional description, and then click Next.                                                                                                                                                                                                                                                                                           |
| 4 | On the Add group members page, search for users and click on their name in the result list to add them. If you want to [add members at a later time](https://help.webex.com/article/7eedy0/Group-management#task-template%5F21fb1c4a-3388-4ff7-bea7-be716f75be5b), click Skip and then click Create without members.                                        |
| 5 | Click Save. After the group is added, you can: Click Assign to go to the Assignments page, where you can apply [licenses](https://help.webex.com/article/n3ijtao) and [settings templates](https://help.webex.com/article/n5uf91x) to your new group.Click Add another group to immediately create another group.Click X to return to the main Groups page. |

## Configure license assignments

Configure license assignments for your group if your organization uses group license assignments. If you're [set up to use license assignments for the entire organization](https://help.webex.com/article/n3ijtao), licenses won't appear as an option on the Assignments tab.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Groups \> Webex groups.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3 | Select the group you want to assign licenses to and click the Assignments tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4 | In the Licenses section, click Set up. If license assignments are already set up, click Edit to update the configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 5 | Select from the available services to assign to this group's new users. Depending on your organization, a combination of Calling, Meetings, Messaging, or Hybrid Services can appear.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 6 | In the Apply scope section, determine the scope of how you want to apply the license change by selecting one of the following: Future users: Select this option if you want to apply licenses to future users only. Existing users: Select this option if you also want to apply license assignment changes to existing users. When you select Existing users, we select Preserve licenses for existing users for you. This means that if you remove licenses from the group assignment, users who already have those licenses are not affected. Clear this box if you want to use the assignment to remove licenses from users. |
| 7 | Click Save. Your license assignment is active. Webex automatically assigns the licenses, so that group members can use those services when they become Active.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Configure settings templates

Use settings templates to apply collections of settings to groups of users. A settings template is a collection of custom settings for a service (general settings, messaging, meeting and calling). See [Configure settings templates](https://help.webex.com/article/n5uf91x) for more information about managing your templates.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                      |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Groups \> Webex groups.                                                                                                                                                                                                            |
| 3 | Select the group you want to assign licenses to and then click the Assignments tab.                                                                                                                                                      |
| 4 | In the Settings templates section, click the **⋮** icon beside the service you want to apply a template to, and then click Edit.                                                                                                         |
| 5 | Select from the available services to assign to this group's new users. Depending on your organization, a combination of Calling, Meetings, Messaging, or Hybrid Services can appear.                                                    |
| 6 | From the list, select the template you want to assign and then click Save. The template you set appears beside the service type. To revert group members to, click the **⋮** icon, click Reset and then click Reset template to confirm. |

## Add or remove group members

You can add or remove members from a group at any time.

Ensure that you are aware of the following impacts when you remove a member from a group:

- Licenses: when you remove a user from a group, [depending on the setting you chose](https://help.webex.com/en-us/article/n3ijtao/Set-up-automatic-license-assignments-in-Control-Hub#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fcf8eec3a-135b-443e-9051-68b6a43e98d6), their licenses are either removed or preserved.
- Settings templates: there is no preservation of templates. If a user belongs to multiple groups, and you remove them from one of the groups, templates apply to the user [according to the hierarchy](https://help.webex.com/en-us/article/n5uf91x/Configure-settings-templates#concept-template%5F2e0b8cab-410d-4da3-a507-a67ec503f162).
- Embedded apps: there is no preservation, users lose access to the embedded apps associated with the group, unless they belong to another group associated with the same apps.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                             |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Groups \> Webex groups and click on the group you want to add members to.                                                                                                 |
| 3 | On the Members tab, click Add members.                                                                                                                                          |
| 4 | On the Add group members page, search for users and click on their name in the result list to add them, and then click Save. The newly added members appear on the Members tab. |
| 5 | To remove a group member, click the **⋮** icon beside the member's name, click Remove from group and the click Remove to confirm.                                               |

## Add or remove group members with a CSV file

You can add or remove up to 1000 members from a group at one time with a CSV file.

Ensure that you’re aware of the following impacts when you remove a member from a group:

- Licenses: when you remove a user from a group, [depending on the setting you chose](https://help.webex.com/en-us/article/n3ijtao/Set-up-automatic-license-assignments-in-Control-Hub#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fcf8eec3a-135b-443e-9051-68b6a43e98d6), their licenses are either removed or preserved.
- Settings templates: there is no preservation of templates. If a user belongs to multiple groups, and you remove them from one of the groups, templates apply to the user [according to the hierarchy](https://help.webex.com/en-us/article/n5uf91x/Configure-settings-templates#concept-template%5F2e0b8cab-410d-4da3-a507-a67ec503f162).
- Embedded apps: there is no preservation, users lose access to the embedded apps associated with the group, unless they belong to another group associated with the same apps.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                            |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Go to Management \> Groups.                                                                                                                                                                                                                                                                                                    |
| 3 | Click ![More menu](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/451001-452000/451601.jpg) next to the group you want to modify and do one of the following: Select Add members by CSV to add members to the group.Select Remove members by CSV to remove members from the group. |
| 4 | Click Download all organization users to download the file.                                                                                                                                                                                                                                                                    |
| 5 | Modify the CSV file to reflect the membership changes you want. The User ID/Email (Required) column is the only required field when adding users.                                                                                                                                                                              |
| 6 | Click Choose a file, select the modified CSV file from your desktop, and click Upload. Control Hub uploads the file and creates your task. You can close this window and your task continues to run. You can [manage your Control Hub tasks](https://help.webex.com/nzq0ztab/) at any time.                                    |

## Edit group settings

| 1 | Sign in to [Control Hub](https://admin.webex.com/) and go to Groups.                                                |
| - | ------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Webex groups tab, click on the group you want to edit.                                                       |
| 3 | On the Overview tab, edit the Name and Description of the group if you need to.                                     |
| 4 | You can also view the group source, its Webex ID, usage, and the last modified date. Copy the Webex ID if required. |
| 5 | Click Save to apply your changes.                                                                                   |

## View your synchronized groups

You can view and manage your synchronized Entra ID or Active Directory groups in the Groups menu in Control Hub. Because these groups are managed outside of Control Hub, you can't change a synchronized group's name, description, or user membership.

If you decide to disable either [Entra ID](https://help.webex.com/en-us/article/heauzeb/Set-up-the-Entra-ID-Wizard-App-in-Control-Hub#task-template%5F6ecacdc4-aac6-4c04-a16c-fdc754a2b4bb) or [Directory Connector](https://help.webex.com/zqvufbb/#task%5FCC9D9C5D06B1CD6F7CAFCFBB88BE7A06) synchronization, any synchronized groups move to the Webex group tab where you can freely edit or [delete the group](https://help.webex.com/7eedy0/#task-template%5F1c99d70a-33df-4399-a02a-84fce33859a2).

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                         |
| - | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Groups \> Synchronized groups.                                                                                                        |
| 3 | Click on a group to view more detailed information about the group including the group's Webex ID, assigned users, and license assignments. |

## Delete a group

Delete groups when they are no longer in use or required. When you delete a group, users are unassigned from the group but the users aren’t deleted.

Ensure you're aware of the following impacts:

- Licenses: when you delete a group, [depending on the setting you chose](https://help.webex.com/en-us/article/n3ijtao/Set-up-automatic-license-assignments-in-Control-Hub#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fcf8eec3a-135b-443e-9051-68b6a43e98d6), user licenses are either removed or preserved.
- Settings templates: there’s no preservation of templates. If a user belongs to multiple groups, and you delete one of the groups, templates apply to the user [according to the hierarchy](https://help.webex.com/en-us/article/n5uf91x/Configure-settings-templates#concept-template%5F2e0b8cab-410d-4da3-a507-a67ec503f162).
- Embedded apps: there’s no preservation, users lose access to the embedded apps associated with the deleted group, unless they belong to another group associated with the same apps.
- Synchronized groups: you can't delete any groups that are being actively [synchronized](https://help.webex.com/7eedy0/#task-template%5F58a572a9-9207-495d-9560-1bcdefedee37) from Directory Connector or Entra ID. When you turn off [Directory Connector](https://help.webex.com/zqvufbb/#task%5FCC9D9C5D06B1CD6F7CAFCFBB88BE7A06) or [Entra ID](https://help.webex.com/en-us/article/heauzeb/Set-up-the-Entra-ID-Wizard-App-in-Control-Hub#task-template%5F6ecacdc4-aac6-4c04-a16c-fdc754a2b4bb) synchronization, synchronized groups automatically move to the Webex groups tab where you can delete them.

| 1 | Sign in to [Control Hub](https://admin.webex.com/) and click on Groups.                                                                                                                                                    |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Webex groups tab, click the **⋮** icon beside the group you want to delete and then click Delete group.                                                                                                             |
| 3 | Select the check box to confirm you understand the consequences of group deletion, and then click Delete. This action can’t be undone. Members of the group may lose access to resources when you delete a group in error. |
