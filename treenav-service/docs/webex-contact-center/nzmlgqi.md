---
title: "Manage access in Webex Contact Center"
product: "Webex Contact Center"
article_id: "nzmlgqi"
url: "https://help.webex.com/en-us/article/nzmlgqi/Manage-access-in-Webex-Contact-Center"
last_updated: "2026-01-16"
description: "This article helps you understand how access control works in Webex Contact
Center. It&#x27;s all about granting granular permissions to see and manage different
parts of the system to your Webex Contact Center users."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Manage access in Webex Contact Center

**This article helps you understand the following:**

- How administrators can grant users permission to view, edit, or restrict access to resource types (for example: queues, sites, teams, and so on) within the user profile.
- How administrators can group resources into Resource Collections and assign these collections to user profiles: think of Resource Collections as a container of resources.
- About a new construct where you can group resources into containers called **Resource Collections**.
- User profile is where you grant permissions and resource access (through resource collections).
- How a user profile gets assigned to the user.

## User profiles

A user profile decides what a user can edit or view, and which resources they can access through their Resource Collection. There are five types of User Profile that you can create in Webex Contact Center.

- **[Licensed Administrator](#concept-template%5F33aae788-aa3f-4a7d-b73a-88a3c8aabeb7)** : Administrator licensed as a premium agent; can have full or custom access.
- **[Unlicensed Administrator](#concept-template%5F0861e097-ee17-4c72-ac62-9cba435a2d4a)** : Administrator without agent license; can’t access Campaign Manager, Analytics, or most Supervisory features; only custom access is available.
- **[Supervisor](#concept-template%5F419f6b67-dd77-41ae-91ff-3e5463b254e5)** : Licensed supervisor with reduced access compared to Licensed Administrator. A supervisor doesn’t have access to Tenant Settings.
- **[Premium Agent](#concept-template%5Fceb94dab-621a-4e68-9b6d-85ad065c0df9)** : Licensed premium agent.
- **[Standard Agent](#concept-template%5Fb9e54c34-fe5f-40d7-a40d-d80ea1945226)** : Licensed standard agent. Administrators with standard agent license also get mapped to Standard Agent profile.

Following section provides a detail view for each of the profile type.

### Types of a user profile

There are many configurations that are possible in a user profile. However, this article focuses on highlighting the key differences between each user profile to clarify their distinct responsibilities and permissions. 

#### Licensed administrator user profile

A Licensed Administrator User Profile is the highest level of access in the contact center.

You can grant a user with this profile **Full Access** or **Custom Access**. Full Access grants them edit access to everything in the user profile along with any future permissions that are added. Custom Access allows you to pick and choose what they have access to.

##### Configuration access for licensed admins

- You can grant no access, view, or edit permissions to all resource types in Webex Contact Center except for Surveys, AI agent, Topic Analytics, and Digital. Webex Connect has its own access control system.
- View or edit campaign manager if enabled as an add on. This access control is for Acqueon, not for the native campaign manager.
- View or edit Tenant Settings grants you that level of access to all configurations under the Tenant Settings section in the Control Hub.

##### Analytics access for licensed administrators

- Audio Recordings – View grants you the ability to play and download recordings from the Webex Contact Center Management Portal (also referred to as the Tenant Management Portal).
- Tags – Once you grant view access to audio recordings, you can grant no access, view, or edit to Tags which are also available from the Webex Contact Center Management Portal.
- Analyzer permissions – see [Analyzer permissions](#concept-template%5Fc397a829-556e-49cd-9690-f1b3c3b795e9) section for more details.

##### Supervisory and desktop access for licensed administrators

- Call Monitoring – If you grant view access to call monitoring then the following options show.  
  - Their requests only – can only see the monitoring requests they place for the team, site, queue, and agents in their resource collection.
  - All requests – can see all monitoring requests (even outside the ones they place) for the team, site, queue, and agents in their resource collection.
- Call Monitoring – If you grant edit access to call monitoring then these additional options show.  
  - Barge in and Whisper Coach – can take these actions from the Webex Contact Center Management Portal.
- Multimedia – The combination of the multimedia profile assigned to the user and the selections made in the user profile (basic digital or social channels) determines what type of interactions this admin can take if they sign in as agent. If they have voice, chat, and social channels selected in their multimedia profile but then in the user profile, only basic digital is selected, they won’t be able to take social channel interactions. If they have voice in their multimedia profile but then in the user profile, basic and social are selected, they won’t be able to take social channels. Between the multimedia profile assigned and the selections made within the user profile, the least privilege is given.

#### Unlicensed administrator user profile

An Unlicensed Administrator profile doesn’t require a license but only grants you access to a subset of configurations and very limited supervisory access.

This profile grants you access to the following:

- Configurations – except campaign manager
- Threshold rules

#### Supervisor user profile

The Supervisor User Profile has different permissions that are unique to supervisors and supervisor desktop compared to the Licensed Admin.

##### Configuration access for supervisors

- The same as licensed admin except they can’t access Tenant settings which are reserved for the admin.

##### Analytics access for supervisors

- Audio Recordings and Transcripts  
  - Supervisor Desktop – View access grants play access to recordings and view access to transcripts. Download isn’t available.
  - Webex Contact Center Management Portal - View access grants play and download to recordings. Transcripts aren’t available.

##### Supervisory and desktop permissions for supervisors

- Additional Supervisory – If you grant edit access to this, you’ll see a list of supervisory functionality that you can grant the supervisor access to within the supervisor desktop.
- Call Monitoring  
  - Supervisor Desktop  
    - View – View isn’t applicable within supervisor desktop. Call Monitoring requests can only be done in the Webex Contact Center Management Portal.
    - Edit – When edit is selected, you’ll see mid-call monitor and barge in as features you can grant supervisors access to within the desktop. You must select mid-call monitor to barge in within the desktop. You can’t grant access to whisper coach within the desktop.
  - Webex Contact Center Management Portal  
    - View and Edit – same as licensed admin
- Multimedia – same as licensed admin

#### Premium agent user profile

A premium agent has the same multimedia experience as a licensed admin. Refer to licensed admin section to understand this more.

#### Standard agent user profile

A standard agent has the same multimedia experience as a licensed admin except they only see basic digital. This means that standard agents are prevented from taking social channels. This is reserved for premium agents only. Refer to licensed admin section to understand how multimedia permission works.

#### Analyzer permissions

- No access grants you no access to Analyzer, View grants you view access to Analyzer, and edit grants you edit access to Analyzer.
- If you select view access to Analyzer, you can then select no access or view access to each folder within Analyzer. Every new folder created will automatically get view access until you change it in the User Profile.
- If you select edit access to Analyzer, you can then select no access, view, or edit access to each folder within Analyzer. Every new folder created will automatically get edit access until you change it in the User Profile.
- Subfolders can't have a higher access than the parent folder.
- If you change Analyzer permission from view to edit then all folders will automatically change to edit permission. If you change Analyzer permission from edit to view then all subfolders will automatically change to view permission.
- Stock reports are view access to all stock reports and can’t be changed.

#### Default resource collections

After adding one or more resource collections, one of the resource collections will need to be a default. The reasoning for this is because if you grant someone no access or view permissions to resource collections, they don’t have permission to add/change anything in a Resource Collection but if they can’t add something they are creating (Ex: Queue 1 because you gave them edit access to queues) to a resource collection, they will lose access. In this case, Queue 1 will be added to the default resource collection assigned to the user profile. Since this user doesn’t have permission to change resource collections they can't choose which collection the resource goes into, but they are also not losing access to the resource they are creating. This is the main purpose for default resource collections.

#### Resource access

If All resources is selected, the user assigned to this user profile will see all resources for Webex Contact Center.

You can assign up to 5 resource collections to a user profile. This determines the specific resources and data a user can see across Control Hub, Webex Contact Center Management Portal, Flow Designer, Analyzer, and Desktop.

For example, if you assign Resource Collection 1 and 2 to User Profile 1 and those resource collections have Queue 1 and Queue 2\. When an admin logs into Control Hub or Webex Contact Center Management Portal (assuming they have edit/view permissions), they will only be able to see Queue 1 and Queue 2\. If they are creating a flow, they can only create a flow with Queue 1 and Queue 2\. If they go into Analyzer, they can only see data for Queue 1 and Queue 2\. If they are a supervisor, they can only see data for Queue 1 and Queue 2\. If Team 1 and Team 2 are in those resource collections, then the supervisor would only be able to see agents mapped to those teams in their view.

You can’t add a resource collection to a user profile if it already is mapped to 15 other user profiles.

#### Review screen

After adding the permissions and resource access, you’ll then be presented with a single view of the permissions and resources that this user profile has access to. In the review screen, we will flag if you’ve granted view or edit permission to a resource type (Ex: Skill Profiles) but didn’t add any Skill Profiles to a resource collection tied to the User Profile. This would result in the user seeing skill profiles in the left hand Control Hub navigation, clicking into that section, and not seeing any skill profiles. You won’t be blocked from creating/saving but we will show alerts on the review screen.

### Configure a user profile

Before creating a user profile, ensure you understand the various [types of user profiles](#concept-template%5F9fdd5bcd-38c7-4da6-a873-5920f09eac6a) and their associated privileges.

#### Create a user profile

The following steps outline how to create a Licensed user profile. Although the general procedure is similar for all user profile types, specific configuration settings may vary depending on the profile. It’s important to review the details of [each profile type](#concept-template%5F9fdd5bcd-38c7-4da6-a873-5920f09eac6a) before continuing. 

| 1  | Sign into [Control Hub](https://admin.webex.com/?%5Fgl=1%2A2m92sv%2A%5Fgcl%5Fau%2AMTA1NzcyOTA2OS4xNzU0MzEzNzY0).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Go to Contact Center \> User Management\> Access \> User Profiles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3  | Click **Create User Profile**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4  | In the general tab, Provide the name and description for this user profile.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 5  | Select Licensed Admin from the User Profile option, and click **Next**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 6  | In the Permissions, select the type of access that you want to grant: **Full Access:** click this if you want this user profile to have edit access to every current and future permission. Then, click Next to configure Resource access. **Custom Access:** This helps you to set some permissions to off or limited based on what your organization requires.                                                                                                                                                                                                                                                                                      |
| 7  | If you want to set the same permission of all configuration types click **Set all to**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 8  | For each of the permissions (configuration, analytics, and supervisory & desktop) you can set the following rights: **No Access**: The user won’t be able to see that resource type. **View**: The user can see the resource type and view the resources within it. **Edit**: The user can see the resource type, edit existing resources, and create new ones. The only disclaimer with this is that if you have edit access to resource collections and have “all resources” within resource access, you can create new collections. If you have one or more resource collections selected, you can’t create new collections even with edit access. |
| 9  | Click **Next** to allocate resource access to the User Profile.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10 | Select all resources or a resource collection from the list. Refer to the [Resource Collections](#concept-template%5Fb76d93bf-a270-4f1a-b44f-529db2de4b45) section for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 11 | **Review** and **Save** the User profile.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Aggregated view of User’s Permissions and Resource Access

You can find a single view of a user’s permissions and resource access by following these simple steps:

| 1 | Navigate to the Contact Center Users section.                                                                                                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click on the user.                                                                                                                                                                                                                                     |
| 3 | Click view profile details next to their user profile. You must have view or edit access to the user profile permission to see this option. The user profile must be part of your resource collection(s), or you need to have access to all resources. |
| 4 | You’ll see an aggregated view of this user’s permissions and resource access                                                                                                                                                                           |

You can find a single view of a user profile’s permissions and resource access by following these simple steps:

| 1 | Navigate to User Profile section. You must have view or edit access to the user profile permission to see this option. |
| - | ---------------------------------------------------------------------------------------------------------------------- |
| 2 | Click on the user profile.                                                                                             |
| 3 | Click view access details at the bottom of the overview page.                                                          |
| 4 | You’ll see an aggregated view of this user profile’s permissions and resource access.                                  |

## Resource collections

Think of a Resource Collection as a container where you put different resources, like queues or business hours. You can then assign these collections to different users through their user profiles.

- A Resource Collection is like a container or folder for your resources and data.
- You can organize it by department, team, customer, or whatever makes sense for you.
- For example, a Resource Collection might contain Queue A and Queue B. Users with User Profiles with that Resource Collection can only work with those queues.

You can add none, selected, or all for each resource type to a resource collection.

- **None:** No resources of that type are added to the collection. You can't select None for Queues, Teams, Sites, or Channels.
- **Selected:** You can search for specific resources of that type and add them to the collection. You have to pick at least one resource if you choose Selected.
- **All:** All resources of that type in your tenant are added to the collection.

If you select None for a resource type, it can change to Selected if a user assigned to a user profile with the resource collection attached has edit access to the resource type and assigns it to the collection. For example, if you select None for Skill Profiles in Resource Collection 1 that’s mapped to User Profile 1 that has edit access to Skill Profiles. If user 1 that signs in has User Profile 1, they can create a new skill profile (Skill Profile 1) and assign that to Resource Collection 1\. If they complete this action, Skill Profile in Resource Collection 1 will go from None to Selected with Skill Profile 1 added.

You can only add teams into a resource collection based on the sites that are in the resource collection.

We don’t require you to add a user profile to a resource collection. If a resource collection is assigned to a user profile then that user profile automatically gets added to that collection on the backend.

### System limits

To ensure optimal performance and manageability, please note that each collection can contain up to 350 resources (counting only those added to the selected list), and you can have up to 1,000 resource collections in an organization.

### Create/Modify resource collection

You can create or modify a resource collection by navigating to Control Hub \> Contact Center \> User Management \> Access \> Resource Collections.

You can only create a new resource collection if you have edit access to the resource collection permission and have All resources for resource access within the user profile. If you have a resource collection assigned to your user profile, you are a delegated admin and even with edit permission to resource collections, you can only edit the resource collections in your user profile.

### Add resource to a resource collection

- If you have one or more resource collections assigned to your user profile, the resource will be added to your default collection. If you have edit permissions to resource collections, you can go to the resource collection section and change the assignment of the resource to another collection. If you have no access or view access to resource collections, you won’t be able to change the resource collection assignment for your resource from the default.
- If you have access to all resources and edit access to resource collection, you can go to resource collection section and assign the resource to a collection - the resource will not get assigned to a default collection. If you have no access or view access, you won’t be able to assign a resource to a resource collection and it won't get assigned to a default collection.
- If you have a default collection assigned, when you’re creating the resource, we will tell you that it’s being added to your default collection and we will list the collection. If you disagree with the default, you may reach out to your full administrator.
- If you have a default collection assigned and have edit permissions to user profile. If you create a user profile but don’t assign your collection to the user profile, you’ll lose access to the user profile.

### Add resource to multiple resource collections

If you have edit access to resource collections + tenant settings and have access to all resources, then navigate to resource collections and click the dropdown arrow next to create a resource collection. You’ll see update multiple collections in bulk.

Follow this guided flow to add a resource to multiple collections (up to 100) through a single bulk operation. Once you submit, you can see the status from the bulk operations page.

If you have edit access to resource collections but don’t have edit access to tenant settings or only have access to selected resource collections rather than all resources, you can add a resource to multiple collections by navigating into the resource collection, adding the resource, then saving. Repeat this process for each collection.

### Delete resource from resource collection

A user assigned to a user profile with a resource collection rather than All resources can’t deactivate or delete a resource. If this user tries to take either of these actions, the resource can’t be deleted or deactivated because it’s referenced in a resource collection. If this user then tries to go to resource collection and removes the resource from the collection, they will no longer have access to the resource. Only users assigned to a user profile with All resources can deactivate or delete a resource.

### Restricted resources

If you don’t have access to a resource that’s currently populated in a field, you will not be able to see that resource. If it’s a single select field, we will show the value you don’t have access to as restricted, and you can change the selection to a resource that’s in your collection. If it’s a multi select field and you don’t have access to one of the resources, we will hide the resources that aren't in your collection. You can add or remove resources that are in your resource collection and any change you make in a multi select field won’t remove the resources that aren’t in your collection.

If you grant edit access to desktop profiles, you must ensure that the user's resource collection includes the default idle/wrap-up codes, all available idle/wrap-up codes, or full access to all resources. If their assigned resource collection does not contain the default idle/wrap-up codes, the user won't be able to edit or create a desktop profile.

## Migration

Cisco will take the same permissions within the user profile today and apply those in the new user profile experience. We will take the resource access granted within the access rights section of the current user profile experience, create a resource collection with those resources in it, and assign that to the user profile in the new experience.

Cisco will automatically migrate customers to this new User Profile and Resource Collection experience, ensuring users retain the same permission and resource access they have today. There is one exception to this: if a user profile currently has view access for call monitoring—which permits actions such as call monitoring, whisper coach, or barge in—you will need to upgrade that user profile’s permission to edit to continue performing call monitoring actions after migration. Besides this potential call monitoring scenario, your users will retain the same level of permissions and resource access they have today when we migrate.

Your users will retain the same level of permissions and resource access they have today when we migrate. Once migration is done, the admin can then navigate to the new access section and start giving more granular permission and resource access.

Rollback will be supported for 3 months after GA but only by exception and if there is a critical customer issue that we can’t fix. We will be able to put queues, sites, channels, and teams that are in the resource collections attached to the user profile into the access rights section of the user profile if you do roll back. We won’t be able to retain any of the other resources because they aren’t in the former access rights section of the user profile. If you gave more granular permissions once this feature was launched, the rollback of those permissions won’t necessarily be 1:1 but we will grant least privilege. For example, if you gave edit access to queues and view access to teams in this new experience, those can’t be separate permissions in the former experience you’re rolling back to, you can only grant edit for both or view for both – in this case, we will be giving view permission (least privilege) for both since you can’t grant separate access. Please reach out to our support team, sales, or your solution manager if this is required.

A rollback for a single customer organization may take up to 15 minutes. Rolling back the entire data center can take several hours.

## Decommissioning of user profiles in Webex Contact Center Management Portal

Customers will be automatically migrated to the new experience in Control Hub (as mentioned above) and all the user profile features that were in management portal are now in the access experience within Control Hub. The access management experience in control hub is also a 10x experience improvement with the introduction of more granular permissions and resource collections. This aligns with our broader mission to provide admins with a single pane of glass in Control Hub.

There will be banners warning customers of this decommissioning 2 months before GA.

## Permissions Behavior within Webex Contact Center Management Portal

The following permissions will behave differently than expected in Webex Contact Center Management Portal as they are still adhering to the old access control model.

- Routing strategy > Audio prompts and Flows
  - If you grant no access to routing strategy but higher-level permission to audio prompts and/or flows, you won’t see them because you must grant access to routing strategy.
  - If you grant view access to routing strategy, you can grant no access to audio prompts and/or flows but if you grant edit access to either, you will only be granted view access.
  - If you grant edit access to routing strategy, you can grant no access to audio prompts and/or flows but if you grant view access to either, you will be granted edit access.
- Threshold rules and Audit trail  
  - No access means full restriction to this resource.
  - View access means view access.
  - If you grant edit access but if one of the permissions under the provisioning section within the old user profile experience is granted view permissions, you’ll be granted view access.

We are in the process of moving these modules to Control Hub for an improved access management experience.

## Future roadmap items

For all items mentioned below, we couldn’t get to in this release but have them in the backlog to include in the future:

- Surveys, AI agent, and Topic Analytics permissions
- Bulk Operations and Audit Trails for Resource Collections. You can do bulk operations and audit trails for User Profiles but not Resource Collections.
- Stock Report permissions
