---
title: "Delete a user from your organization in Control Hub"
product: "Webex Calling"
article_id: "hglkq6"
url: "https://help.webex.com/en-us/article/hglkq6/Bulk-Delete-Users"
last_updated: "2025-03-04"
description: "As a full administrator, you can delete a user if, for example, a user has left
your company."
tags: ["webex-calling", "webex-contact-center", "webex-meetings"]
source: "help.webex.com"
---

# Delete a user from your organization in Control Hub

- [Control Hub user](#task%5FE2F71A93B2FF81A6C9A84C34925B5320)
- [Active Directory user](#task-template%5F8cca62bf-8616-418e-a1f2-a5f7a7bd1f36)

When you delete a user, they can no longer sign in to your Webex site, all their assigned Webex services are removed, and they are removed from any spaces or teams that they were participating in. Any content that they created in spaces is not deleted, and the content is subject to the retention policy that each space owner has implemented.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Management \> Users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Do one of the following: Select ![More menu](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/451001-452000/451601.jpg) next to the user, then select Delete user.Select the user, then click Actions \> Delete User. If you're deleting a user assigned an MPP phone, when the user is deleted, the phone is also deleted and a factory reset is performed on the phone to clear any existing configuration. This only applies if the phone is online. If the phone is offline or can't be contacted, you should manually factory reset it before reusing it. Learn how to manually factory reset a device in [Factory reset your Webex Calling multi-platform phones](https://help.webex.com/article/708ce3/). After the factory reset, the phone returns to its Activation Code screen. |

If your organization uses directory synchronization and you delete user accounts from your Active Directory, deleted users appear in Control Hub. Webex marks them as Inactive, and deletes them permanently after 7 days. You can delete them before that 7-day period expires using the Deleted users tab, which immediately frees up their user license.

Permanently deleted users can no longer sign in to your Webex site, all their assigned Webex services are removed, and they are removed from any spaces or teams that they were participating in. Any content that they created in spaces is not deleted, and the content is subject to the retention policy that each space owner has implemented.

- If you're deleting a user assigned an MPP phone, when the user is deleted, the phone is also deleted and a factory reset is performed on the phone to clear any existing configuration. This only applies if the phone is online. If the phone is offline or can't be contacted, you should manually factory reset it before reusing it. Learn how to manually factory reset a device in [Factory reset your Webex Calling multi-platform phones](https://help.webex.com/article/708ce3/). After the factory reset, the phone returns to its Activation Code screen.
- This procedure applies only to Active Directory users synced by Directory Connector. It does not apply to users in cloud directories such as Azure Active Directory.

| 1 | Sign in to [Control Hub](https://admin.webex.com) and go to Management \> Users \> Deleted users.                                                                                                                                                                                                                                                     |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Do one of the following: Click ![More menu](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/451001-452000/451601.jpg) beside the user you want to permanently delete, click Delete permanently, then click Delete to confirm.Click Permanently delete all to permanently delete all the users in the list. |
