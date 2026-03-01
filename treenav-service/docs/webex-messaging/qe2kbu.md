---
title: "Allow external users in Webex spaces for your Webex for Government organization"
product: "Webex Messaging"
article_id: "qe2kbu"
url: "https://help.webex.com/en-us/article/qe2kbu/Allow-external-users-in-Webex-spaces-for-your-Webex-for-Government-organization"
last_updated: "2024-09-22"
description: "By default, your Webex for Government organization blocks all external
communication from other organizations. But you can invite users from other
organizations, including users from commercial organizations, as guests to
spaces and meetings if you allow their domains for external communication."
tags: ["webex-messaging"]
source: "help.webex.com"
---

# Allow external users in Webex spaces for your Webex for Government organization

## Communicate with users from Webex for Government and commercial organizations

To help secure your organization's data and prevent data from being shared outside of your organization, Control Hub automatically blocks external communication from other users that aren't in the same Webex for Government organization.

But if you trust specific organizations and want to allow them to communicate with your users, then you can allow users with domains in other Webex for Government and commercial (those outside the Webex for Government cloud) organizations to communicate with anyone in your organization as guests. [As guests, these users have limited access](https://help.webex.com/jx4dom/) once they're invited to spaces and meetings. 

To allow commercial organizations to communicate with your organization, follow the steps in the Allow External Communication with Specific Organizations section.

Both organizations must add each other's domains for users to communicate with each other. If one organization allows a domain, but the other organization blocks all external communication, then both organizations won't be able to communicate with each other.

Keep in mind that if you decide to block a domain from communicating with your organization after allowing it, then:

- Only new spaces are affected. Existing spaces keep all users with the domain if they're already in those spaces.
- Users with the domain who leave group spaces won't be able to rejoin the group spaces.
- The setting doesn't apply to bots.

## How compliance works between Webex for Government and commercial organizations

For [regulatory compliance](https://help.webex.com/nr70c1m/), only Webex for Government administrators and compliance officers can view messages and content exchanged between commercial organizations and Webex for Government organizations. Commercial administrators and compliance officers won't be able to see messages and content sent by commercial users to Webex for Government users.

[Allow external communication with specific domains](#Cisco%5FTask.dita%5F82b712a4-03c0-4e60-aaf0-f9458bbe0788)

You can allow users in your organization to communicate with users in other Webex for Government and commercial organizations (those outside the Webex for Government cloud) if you add the specific domain in the allowed domains list.

Both organizations must add each other's domains for users to communicate with each other. If one organization allows a domain, but the other organization blocks all external communication, then both organizations won't be able to communicate with each other.

| 1 | From the customer view in [https://admin-usgov.webex.com](https://admin.webex.com/), go to Organization Settings.                                                                                                          |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Scroll to External Communication and toggle the Block users from inviting external contacts to Webex spaces and prevent them from joining external Webex spaces switch to on.                                              |
| 3 | Click to confirm the acknowledgment and select Done.                                                                                                                                                                       |
| 4 | Click Manage domains and permissions in the Allow domains for external messaging section.                                                                                                                                  |
| 5 | Click Manually add.                                                                                                                                                                                                        |
| 6 | Enter the domains that you want to allow external communication for and select Check domain  to verify the status of the domains.                                                                                          |
| 7 | Click Add. The status of the domain has no effect on whether users can communicate with that domain. Once you add the domain to the list, users in your organization can start to communicate with users with that domain. |

Users in your organization can now invite users with those domains to spaces and meetings.

[Allow external communication with specific domains and allow users to only join internal group spaces](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F64a7460d-55b4-4e6e-a5ef-760b43f99638)

When you enable the Group Spaces setting, users in your organization can:

- Add people from these external organizations into spaces owned by your organization.
- Create or join spaces with one person from these external organizations.

Users in your organization can't be invited to group spaces owned by another organization. This makes sure that for compliance, your organization has access to all data created by participants across spaces.

| 1 | From the customer view in [https://admin-usgov.webex.com](https://admin.webex.com/), go to Organization Settings                                                              |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Scroll to External Communication and toggle the Block users from inviting external contacts to Webex spaces and prevent them from joining external Webex spaces switch to on. |
| 3 | Click Manage domains and permissions in the Allow domains for external messaging.                                                                                             |
| 4 | Click Manually add.                                                                                                                                                           |
| 5 | Enter the domains that you want to allow external communication for and select Check domain  to verify the status of the domains.                                             |
| 6 | Click Add.                                                                                                                                                                    |
| 7 | Go back to External Communication in Organization Settings.                                                                                                                   |
| 8 | Enable the toggle under Group Spaces to on.                                                                                                                                   |
