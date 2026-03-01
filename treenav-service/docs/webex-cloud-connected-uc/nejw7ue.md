---
title: "Migrate Jabber users with Cloud-Connected UC to Webex App"
product: "Webex Cloud-Connected UC"
article_id: "nejw7ue"
url: "https://help.webex.com/en-us/article/nejw7ue/Migrate-Jabber-Users-with-Cloud-Connected-UC-to-Webex-app"
last_updated: "2026-01-09"
description: "Now you can migrate Jabber users (with UCM calling) or Jabber messenger users
with Cloud-Connected UC to Webex App for a better, more seamless collaboration
experience."
tags: ["webex-cloud-connected-uc"]
source: "help.webex.com"
---

# Migrate Jabber users with Cloud-Connected UC to Webex App

## Migrate Jabber users with Cloud-Connected UC to Webex App 

The migration wizard on Control Hub allows you to migrate Jabber users to the Webex App. After you migrate, the Webex App provides the users with an easy-to-use experience that allows them to make calls, send messages, share files, schedule meetings, display availability status, and so on. 

The steps outlined here is applicable to Dedicated Instance also.

**Prerequisite**

Before you plan to migrate users to the Webex App, make sure that you meet the following requirements:

- Access to Control Hub with full administrator privileges—The Webex App is primarily managed from Control Hub, which is the management interface for the Webex platform. For more information, see [Assign Organization Account Roles in Control Hub.](https://help.webex.com/en-us/fs78p5/Assign-Organization-Account-Roles-in-Cisco-Webex-Control-Hub)
- Onboard your organization to Cloud-Connected UC—Onboard your organization to Cloud-Connected UC to gather the required information about the users and clusters that you plan to migrate. For more information, see [Set Up Cloud-Connected UC for On-Premises Devices](https://help.webex.com/en-us/nzt6c0b/Set-Up-Cisco-Webex-Cloud-Connected-UC-for-On-Premises-Devices).
- Enable Deployment Insights services—Enable Deployment Insights service on all the Unified CM and Instant Messaging and Presence clusters. This enables sending the configuration details to the cloud, required for migration. For more information, see [Enable Cloud-Connected UC Services](https://help.webex.com/en-us/n0fsmzab/).
- Install or upgrade to Cisco Unified Communications Manager version 11.5 or later.
- If you deploy the hybrid Calling in your organization, you must remove it for your users before you start the migration. For more information, see [Remove Hybrid Calling Configuration From Users](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/wbxt/ucmcalling/unified-cm-wbx-teams-deployment-guide/unified-cm-wbx-teams-deployment-guide%5Fchapter%5F011.html#id%5F101502).
- Synchronize all your organization's directory users to an identity service.  
After migration, users on the Webex App (with identity service) won't be able to contact users still on Jabber (without identity service).
- If CCUC isn’t enabled, the **Get Started** tile directs you to the **Manage Unified Communications User Data** dialog box, where you can manually create and upload .csv files in bulk. For more information, see [Set up calling behavior](https://help.webex.com/en-us/article/1lvb42/Set-up-calling-behavior).

The following table lists the Unified CM user status across the organization.

__Table 1\. Unified CM user status__
| Users                                    | Description                                                                                                                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Migrated users                           | The total number of users in identity service who are migrated to the Webex App.                                                                                                                      |
| Users in Unified CM                      | The total number of users in the Unified CM directory.                                                                                                                                                |
| Unified CM users in identity service     | The total number of users who are synchronized from Unified CM directory to identity service.                                                                                                         |
| Unified CM users not in identity service | The total number of users who aren’t synchronized from Unified CM directory to identity service. You can't migrate these users to the Webex App. Click the Download list, to download the CSV report. |

**Limitations and Restrictions**

Consider the following limitation before you start your migration:

**Migration Task**: You can migrate in batches all the Unified CM users in identity service (CI). You can create multiple tasks, but can perform only one migration task at a time. Make sure that there are no migration tasks running in the background when you start a new one, otherwise you might encounter errors during the migration.

## Task flow

The migration wizard in Control Hub helps you to perform the following tasks to complete the migration.

| 1 | Sign in to [Control Hub](https://admin.webex.com), go to Services \> Updates.                              |
| - | ---------------------------------------------------------------------------------------------------------- |
| 2 | On the Migrate Jabber to Webex app card, click Get started. The Migrate Jabber to Webex app  page appears. |

[Enter Task Name](#task%5FB1596737AEE4EF2B33F834EE943E2895)

Provide a unique task name for your migration task. Having a unique name makes it easy to monitor the progress of your migration tasks.

| 1 | On the Migrate Jabber to Webex app page, click Create a new task. The Enable users for Webex app with UCM calling service page appears.                                                                                                                                        |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Enter the name of the task in the Task name field. The task name should contain a minimum of 8 characters. You can use a combination of cluster name, creation date, and user type. For example, ABC02CI.                                                                      |
| 3 | Read the on-screen prerequisite text, and if you have completed all the prerequisite tasks, check the Prerequisites check boxes, and then click Next to proceed. You can proceed only after you have completed all the prerequisite tasks. The Cluster selection page appears. |

[Select Cluster](#task%5F49BC0170484F870DBE5A63AD8A97B266)

From the Cluster selection page, choose a cluster from where you want to migrate users to Webex app. You can also view a list of clusters and the user details on this page. 

Only onboarded clusters are visible on the Cluster selection page and you can migrate only one cluster at a time. After migration, the users can’t contact the non-Common Identity users available on Jabber from Webex app.

The following table lists the Unified CM user status across the organization.

__Table 2\. Unified CM User Status__
| Users                                   | Description                                                                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Migrated users                          | The total number of users in Common Identity who are migrated to Webex app.                                                                  |
| Users in Unified CM                     | The total number of users in Unified CM directory.                                                                                           |
| Unified CM users in Common Identity     | The total number of users who are synchronized from Unified CM directory to Common Identity.                                                 |
| Unified CM users not in Common Identity | The total number of users who are not synchronized from Unified CM directory to Common Identity. You can't migrate these users to Webex app. |

The Cluster selection page also provides the cluster details, such as the name of the cluster, available users, planned users, migrated users, and the Unified CM profile. 

__Table 3\. Cluster Details__
| Cluster/User Details | Description                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cluster name         | The name of the Unified CM cluster.                                                                                                                                                                   |
| Available users      | The total number of Unified CM users in Common Identity, who are not migrated or planned for migration.                                                                                               |
| Planned users        | The total number of users in Common Identity who are included as part of the draft or in progress task.                                                                                               |
| Unified CM profile   | The set of attributes, services, or features associated with the device. When a profile is not associated with the respective cluster, the Unified CM profile status of that cluster appears as None. |

| 1 | On the Cluster selection page, choose the cluster that you want to migrate, and click the corresponding row. |
| - | ------------------------------------------------------------------------------------------------------------ |
| 2 | Click Next. The Settings page appears.                                                                       |

[Choose Settings](#task%5FEC32AEB432963F58A39CEB02A283934B)

On the Settings page, you can set the calling options and behavior when users make calls from Webex app. You can either configure the settings or override the default settings if your users have different calling needs.

| 1 | Choose one of the following options: Calling in Webex (Unified CM) Use my user’s email domain—Click this option to include your user’s email domain. The email domain is used to locate the Unified CM server. You need not specify the Unified CM profile if you choose this option. Use UC Manager Profile for calling—Click this option and choose a profile from the drop-down list. The Unified CM profiles are defined in Control Hub, based on the voice-mail domain. This helps the client to locate the Unified CM home cluster. The selected Unified CM profile impacts only the users whose migration hasn't started yet and are available in the draft status. However, the Unified CM profile changes won't be applicable to the migrated users or users whose migration task is in progress. Open Cisco Jabber from Webex app—Click this option to allow Unified CM users to make calls from Cisco Jabber or launch Jabber while making calls from Webex app. |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | After you finish configuring the settings, click Next. The User list page appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

[Select User](#task%5F2DC440FC019526E38AAC8A6415BC48CB)

On the User list page, you can search for users or set a filter to categorize users and move them to the Chosen for migration list. You can add users or remove users from the Chosen for migration list. You can also view the details, such as the name of the user, email ID, user ID, phone number, service profile, Active Directory groups, service profile, and the messaging and calling capabilities of the user. 

The following table lists and describes the user list options.

__Table 4\. User List Options__
| Options              | Description                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Available users      | This tab includes the total number of Unified CM users in Common Identity, who are not migrated or planned for migration.                                                                            |
| Chosen for migration | This tab includes users whom you’ve chosen for migration. You can choose only users available in Common Identity for migration. You can also remove the users after you’ve added them for migration. |

| 1 | You can filter users based on the Service profile or Active Directory (AD) groups. To filter users based on the Service profile—click the Filter by Service profile drop-down list and check the required service profile. The users based on the Service profiles are listed. To filter users based on AD groups—click the Filter by AD groups drop-down list and check the required AD group. The users based on the AD groups are listed.                                                                                                                                                                                                                                             |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | You can add single, multiple, or all users to the Chosen for migration list. To add a single user to the Chosen for migration list, hover your mouse over a row and click ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/456001-457000/456056.jpg). To add multiple users to the Chosen for migration list, choose one of the following options: Check the individual check boxes to select the respective users. Check the check box displayed on the header of the user list to select all users. To add selected users to the Chosen for migration list, click Add to migration list  displayed at the right corner of the user list. |
| 3 | Click Next. The Review page appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

[Review Migration](#task%5F63F9FE494B060E62B4E02E56F158D280)

The Review page lists the error and warning messages and also provides you with the necessary suggestions and solutions to resolve them. You are required to resolve the errors before you proceed. Though warnings can be ignored, we recommend you to resolve them before you proceed.

| 1 | Choose one of the following options to continue with the migration: To resolve the errors and continue with the migration, click How to fix this?. The How to fix this ? link directs you to the [Troubleshooting Phone Services on Unified CM for Webex app](https://help.webex.com/en-us/nhhp8z7/) article. To continue with the migration without resolving the errors, click the ellipsis (⋮) icon next to How to fix this? and choose one of the following options: Remove affected users—Click this option, and then click Remove on the confirmation dialog box. The user is removed and added back to the Available list on the User list page. Download list—Click this option to download the CSV file, and check if the file contains any errors. |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click Refresh for the changes to take effect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

[Start Migration](#task%5F73B2DB184BB23DC5149B87E0002E2CD4)

After you've reviewed the migration task and resolved the errors, you can start the migration. 

| 1 | Choose one of the following options: Migrate now—to start the migration immediately. Perform the following procedure to start the migration immediately. Click Migrate now.The Start migration confirmation dialog box appears. Read the on-screen text on the dialog box and click Migrate now. Don't cancel the task from the background task monitor as this causes incomplete migration. The Migration successfully started message appears. Click Done. Proceed to step 2\. Schedule migration—to schedule and start the migration sometime later. You cannot schedule two tasks at the same time. Perform the following procedure to schedule and start the migration sometime later. Click Schedule migration.The Schedule this migration  dialog box appears. Enter the following details: Click the Select date field, and choose the date using the date picker. Click the Select start time field, and choose the time using the time picker. Choose your time zone from the Time zone drop-down list. Click Schedule migration.  Proceed to step 2\. |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | The Migrate Jabber to Webex app page appears. You can view the migration tasks and the status, such as Draft, In-Progress, and Completed. For more details, see [Migration Status](#reference%5F2A05BADB80B6EF2A958266498AEFDDF8). You can click the migration status to view the following details in the respective tabs: Error—Click to view the total number of users who are not migrated. You can also view the name of the user, email ID, service profile, and the error message. You can either troubleshoot the error or contact Cisco TAC for assistance. Pending—Click to view the total number of users who are not yet migrated. Successful—Click to view the total number of users who are successfully migrated.                                                                                                                                                                                                                                                                                                                                 |

[Migration Status](#reference%5F2A05BADB80B6EF2A958266498AEFDDF8)

On the Migration task status page, you can track the status of your migration tasks, view the cluster and user details, and review errors.

The following table lists the migration status, description, and the corresponding actions.

__Table 5\. Migration Status__
| Migration Status | Description                                                                                                    | Actions                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft            | The migration hasn’t started yet. However, the migration details are saved.                                    | Click the ellipsis (⋮) icon on the Draft task status and you can perform the following tasks: Download the CSV file with user details. Delete the task. Draft task works as a Lock and unlock mechanism, the admin who last modified the draft task should close the task. If the session times out or browser is closed without closing the task, then the task will be locked for 1 day. The draft task unlock and lock both could be performed by the same admin. |
| In Progress      | The migration has started and is in progress.                                                                  | You can’t perform any tasks while the migration is in progress.                                                                                                                                                                                                                                                                                                                                                                                                      |
| Completed        | The migration is complete. If there are any errors, you can view them and if required, take necessary actions. | Click the ellipsis (⋮) icon on the Completed task status and you can perform the following tasks: Download the CSV file with user details. Resolve any configuration errors or raise a support case with TAC for assistance.                                                                                                                                                                                                                                         |

## Troubleshooting Migration Issues 

This section provides the necessary information and solutions to resolve some of the common issues that you might face before you plan to migrate or during the migration to Webex app.

### Missed Notifications

The database change notifications are not automatically sent to Cloud-Connected UC when you add, update, or delete information from Unified CM during one of the following scenarios:

- Inventory synchronization
- COP file installation or upgrade
- Bulk operations in Unified CM

The information that you’ve added or updated might take approximately 4 to 5 hours to be effective in Cloud-Connected UC. However, for delete operations, you might have to manually delete the information from Cloud-Connected UC. 

### Service Enablement

After you enable Deployment Insights, the updated data might take approximately 8 to 9 hours to reflect in the Migration tasks. 

### Bulk Updates on Control Hub or On-Premises

After you perform the bulk updates on Control Hub or on the on-premises nodes, the updated data might take approximately 8 to 9 hours to reflect in the Migration tasks. 

### User List Page Timeout Error

After you select a cluster and navigate to the User list page, the page might fail to load, if the number of Available users in the cluster is more than 30K. Close the task and reopen it to resolve the issue.
