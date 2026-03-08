---
title: "Delete a customer organization in Control Hub"
product: "Webex Support"
article_id: "npf3a8e"
url: "https://help.webex.com/en-us/article/npf3a8e"
last_updated: "2026-03-05"
description: "You can permanently delete your organization in Control Hub. All data will be
lost. This is irreversible."
tags: ["webex-support", "webex-events-(classic)", "webex-events", "webex-contact-center", "webex-webinars", "webex-training"]
source: "help.webex.com"
---

# Delete a customer organization in Control Hub

[Before you delete your organization](#id%5F96495)

- Partners can’t delete organizations for their customers. Only customer administrators can delete their own organizations.
- The ability to delete your organization depends on your permissions and how your organization is configured. For example, you cannot delete your organization if [Directory Sync](https://help.webex.com/np2gdab/) is enabled.
- If you have a free Webex account, [follow these steps](https://help.webex.com/article/5m4i4y/) to delete your account.
- As a full administrator, if you've signed up for a Webex trial from <http://www.webex.com>, or if a partner created a trial for you, then you can delete your organization from the Cisco identity system.

**Deleting your organization will result in data loss and is irreversible.** 

**Deleting your organization permanently deletes all of the information associated with your organization, including data for all users**. Data such as Webex App messages and files, and all Webex Meetings data including Webex Meetings URLs and meeting recordings, will be lost.

Your organization must meet this criteria in order to be deleted:

- It has no active partner-led, online, or free trials, and no other types of subscriptions.
- If a trial is still active, then you must [cancel that trial](https://help.webex.com/s7c24d/) first.

Deleting an organization may fail with a HTTP 409 Conflict response, and you may encounter one or more of these errors. Resolve these conditions to allow the organization to be deleted.

- Org cannot be deleted as it has [linked sites](https://help.webex.com/341eud/).
- Org cannot be deleted as it has active subscriptions or licenses.
- Org cannot be deleted as Directory Synchronization is enabled.
- Org cannot be deleted as it has more than one user.
- Org cannot be deleted as it has more than one managed by relationship.
- Org cannot be deleted as it has managed orgs.

### Automatic deletion of organizations with no activity

Organizations that haven't had any activity for 60 days are [automatically deleted](https://help.webex.com/vq3e39/). 

[Delete your organization](#id%5F96150)

If you're a full administrator of an organization with only free subscriptions, a pop-up is shown when you sign in that gives you a choice to either Delete Organization or Remind Me Later.

You'll get an error if you're trying to add users who used their email address to create a trial account. The users have to delete their organization first before you're able to add them to your organization.

| 1 | [Sign in to Control Hub](https://admin.webex.com), then under Management, select Account \>  Info.                                                             |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Delete Organization from Cisco's identity system section, click Delete Organization.                                                                    |
| 3 | In the Delete Organization window, check all the boxes to acknowledge that you're aware that your users will be deleted, and that this choice is irreversible. |
| 4 | Click Delete Organization.                                                                                                                                     |
