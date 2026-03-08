---
title: "Edit service licenses in Control Hub for individual users"
product: "Webex Meetings"
article_id: "9dmqgv"
url: "https://help.webex.com/en-us/article/9dmqgv"
last_updated: "2026-03-05"
description: "As an administrator with full privileges, you can edit specific service licenses
for individual users in Control Hub."
tags: ["webex-meetings", "webex-webinars", "webex-training", "webex-support", "webex-messaging", "webex-calling", "webex-contact-center", "webex-events", "webex-events-(classic)", "webex-calling-customer-assist"]
source: "help.webex.com"
---

# Edit service licenses in Control Hub for individual users

- [Edit user service details](#task%5FBACFB81DDEDC60AF5DD147BE8713DB47)
- [Edit external users](#task%5Flrc%5F5w1%5Ftsb)

As an administrator with full privileges, you can edit specific service details for individual users in the Control Hub.

You can’t assign both the Webex Calling standard license and Customer Assist license to a user.

You must enable Attendee account for your Webex site to assign users as attendees. If you don't see the Attendee account column in the CSV file, then [contact the Cisco Technical Assistance Center (TAC)](https://www.cisco.com/c/en/us/support/web/tac/technical-services-resource-guide.html) to enable this feature for your Webex site.

The Attendee account type isn't available for users with the [Webex Site Administrator](https://help.webex.com/fs78p5/) role. Remove the users' administrative privileges for that Webex Meetings site if you want to assign these users an attendee account.

| 1 | Sign in to [Control Hub](https://admin.webex.com) and go to Users.                                                                                                                                                                                                                           |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select a user and go to Summary \>  Licenses \>  Edit Licenses. The list of services currently assigned to the user appears.                                                                                                                                                                 |
| 3 | Choose a service from the list. If you select Webex Attendant Console, set the Webex Calling service to Professional license.                                                                                                                                                                |
| 4 | Select the subscription that you want to add or remove, and click Save. If an error is received when selecting the user Calling settings immediately after you've added a Calling license, we recommend that you remove the Webex Calling license and then reassign the license to the user. |
| 5 | (Optional) If you've assigned a Webex Meetings license, choose an account type to assign to the user for each Webex Meetings site, and click Save.                                                                                                                                           |

Want to see how it's done? Watch this [video demonstration](https://youtu.be/HUrIuV-DATE) on how to edit the service license for individual users in the Control Hub.

If you want to assign a different license to an existing external user whose status is [Pending](https://help.webex.com/nikzbgy), you must first delete the user, and then [add them again](https://help.webex.com/article/v71ztb/). When you remove all licenses from an external user, they won’t show up in the External users list anymore.

| 1 | Sign in to [Control Hub](https://admin.webex.com) and go to Users \>  External users. |
| - | ------------------------------------------------------------------------------------- |
| 2 | Select a user and click Services \> Edit Licenses.                                    |
| 3 | Uncheck the licenses, and click Save.                                                 |

What to do next

Add the external user again with the license that you want to change for them.
