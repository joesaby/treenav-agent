---
title: "Resource Groups for Hybrid Services"
product: "Hybrid Services"
article_id: "kkibf0"
url: "https://help.webex.com/en-us/article/kkibf0/Resource-Groups-for-Cisco-Webex-Hybrid-Services"
last_updated: "2024-09-15"
description: "In an Expressway-based Hybrid Services deployment, resource groups can help you
define a subset of users and Expressway clusters for a specific purpose."
tags: ["hybrid-services", "webex-calling", "webex-meetings"]
source: "help.webex.com"
---

# Resource Groups for Hybrid Services

[Resource Group and Release Channel Use Cases](#concept%5F8F7AFC2AFB9FC99CFBDF100238170AE2)

- This feature is intended for early trial or beta tester groups. We recommend that you do not set up a resource group for typical users; instead, use the default, unassigned state.
- Without resource groups, users are automatically assigned to the best available cluster. With resource groups, users are assigned to a specific cluster and remain that way unless you manually reassign them.
- Understand the risk of assigning a user to a resource group. If a cluster within a resource group fails, users are mapped to another cluster within that resource group. But if no other cluster exists, users are out-of-service until the cluster is brought back up.

Resource groups can help you define a subset of users and connector-hosting Expressway clusters for a specific purpose.

### Beta or Field Trial Testing

You may want to identify a group of users as early adopters or beta testers, so that they can try out new features before you roll them out to the rest of your users. You can set up a resource group of Expressway clusters and users who connect to them just for this non-production release channel.

Hybrid Services use release channels to promote connector software builds. Release channels follow this flow:

**Internal Cisco release channels (1-3) \> Beta (4-5) \> Stable (6-7)** 

- You can select beta or stable release channels.
- The stable channel is the default; the beta channel is restricted to early adopters.
- Builds remain in beta for two weeks before we promote them to the stable channel.
- The beta channel is an opportunity for you as a partner to test new features before they're rolled out further to your customers.
- Send us feedback about the early adopter testing so that we can make improvements.

To enable an early adopter test, use resource groups to tie clusters to the test. Also, define a subset of users that should be treated differently from most users within your organization.

- Create resource groups from the clusters page.
- Add the beta release channel to the resource groups.
- Add the resource group tag to users. Users can belong to multiple resource groups.

You cannot mix and match release channels on one Expressway cluster. For example, if the calendar connector is on the beta channel, the call connector must also be on the beta channel. As a result, every user either has stable or beta. If you want to have a subset of users on stable and another on beta, you must deploy a second Expressway cluster.

### Class of Service

You may have a selection of servers that have a higher resiliency than the others in your deployment. In that case, you can use resource groups to assign users to the servers in those clusters. You can name the resource groups based on department, location, or another relevant identifier. Resource groups ensure that assigned users are only hosted on those specified clusters.

### Regulation or Data Sovereignty

If you have distributed Expressways, you can assign users to specific ones if they shouldn't be queried in certain locations. For example, a user in Germany can be assigned to a resource group cluster in Germany, which ensures that the user never lands on a cluster in a different location.

If there are no specific requirements for user assignment, let the automatic user assignment happen and do not use resource groups. With automatic assignment, users can automatically be sent to clusters that have capacity if there is a failure on a specific cluster.

[Create a Resource Group](#task%5F9C3F47EF667616B79E1BC0917129D000)

Resource groups organize clusters around your early adopter testing effort. Assign resources (Expressway clusters) to resource groups. These clusters automatically inherit the release channel that you assign at the resource group level.

Resource groups organize Expressway hybrid clusters around a specific purpose and isolate the clusters from the others that host hybrid services. To build a resource group, assign resources (Expressway clusters) to the resource group and give it a name that identifies its purpose (class of service, geography, or data sovereignty).

Before you begin

- Consider the goal of the resource group and what you want to use it for:

  - For beta or development channel testing, we recommend a resource group with a subset of users assigned to it.
  - For production users with the stable release channel, do not create a resource group.
- You cannot mix and match release channels on one Expressway cluster. For example, if the calendar connector is on the beta channel, the call connector must also be on the beta channel. As a result, every user either has stable or beta. If you want to have a subset of users on stable and another on beta, you must deploy a second Expressway cluster.

| 1 | From the customer view in <https://admin.webex.com>, go to **Services**, and then choose **On-Premises Resources** from the cluster list card.                                 |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click Expressway to filter on the resources for Expressway-based hybrid services.                                                                                              |
| 3 | Click ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/410001-420000/414001-415000/414887.jpg), and then choose **Create new Resource Group**. |
| 4 | Follow the on-screen directions to enter the name (the resource group purpose) and choose a release channel, and then click **Done**.                                          |
| 5 | Follow the link to assign clusters to the resource group. Read any caution notes to understand potential service impacts, and then click **Done**.                             |
| 6 | (Optional) If an update is available, choose whether to upgrade the clusters now.                                                                                              |

[Assign Users to a Resource Group](#task%5F6B18326E14D815A3E9495D4915EA915C)

You can update users individually or in bulk so that they're assigned to the resource group for early adopter testing. This step identifies the users as pre-production, beta software testing candidates in the group. 

Before you begin

By default, users are automatically assigned to the best available cluster. You do not need to create resource groups to match users with the appropriate cluster.

| From the customer view in <https://admin.webex.com>, go to **Users**, and then choose one: For individual users, click the individual username to open the overview page, choose the Call or Calendar Service, and then in the Resource Group drop down, choose the resource group to associate that user to for the specific hybrid service. For multiple users, follow the directions in [Modify Users in Cisco Webex Control Hub with the CSV Template](https://collaborationhelp.cisco.com/article/e2okky) to assign multiple users to resource groups. The resource groups are listed in the CSV file. Under a Call or Calendar resource group column, enter **TRUE** to assign a user to the resource group. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

[Set the Default Release Channel](#task%5F52154A08CD824C8D016B879C3F818C90)

You can choose the default release channel that you want to use for your Expressway Hybrid Service clusters. 

| 1 | From the customer view in <https://admin.webex.com>, go to **Services**, and then click **View** from the On-Premises Resources card.                                                            |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click Expressway to filter on the resources for Expressway-based hybrid services.                                                                                                                |
| 3 | To the right of Expressway, click settings ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/410001-420000/414001-415000/414887.jpg).                             |
| 4 | Scroll to Release Channel, choose a release channel from the drop-down, and then click **Save**. The release channel is changed for Expressway clusters that are not a part of a resource group. |

[Export the Resource Group User List](#task%5FE3D907EFAE44846232E8B3C5B4961522)

For your reference, you may need a filtered list of users that you assigned to resource group users. You can obtain this list as a .csv file from Control Hub.

| 1 | From the customer view in <https://admin.webex.com>, go to **Services**, and then choose a Hybrid Service card. |
| - | --------------------------------------------------------------------------------------------------------------- |
| 2 | Click **User Status Report** and then check the activated users check box.                                      |
| 3 | Click **Export to CSV**.                                                                                        |
| 4 | Open the csv file. The resource group column shows which clusters that users are assigned to.                   |

[Manage Resource Groups](#task%5F905E9A473B6388FB412B88A240DE9131)

From one place, you can make changes to your resource groups after you create them. 

Before you begin

Some changes that you make may affect running services.

| 1 | From <https://admin.webex.com>, go to **Services**, and then click **All Resources** from the On-Premises Resources card.                                                                                                                                                                 |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Expressway to filter on the resources for Expressway-based hybrid services.                                                                                                                                                                                                         |
| 3 | Scroll to the resource group card, and then click settings ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/410001-420000/414001-415000/414887.jpg).                                                                                                      |
| 4 | From the settings page, do these steps as needed: Add more clusters to the resource group.Enable users for the resource group, individually or in bulk.Change the release channel for the resource group.Rename the resource group.Remove the resource group, if it contains no clusters. |
