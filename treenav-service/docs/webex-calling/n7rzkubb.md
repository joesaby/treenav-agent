---
title: "Known Issues with Control Hub for Customer Administrators"
product: "Webex Calling"
article_id: "n7rzkubb"
url: "https://help.webex.com/en-us/article/n7rzkubb/Known-Issues-with-Cisco-Webex-Control-Hub-for-Customer-Administrators"
last_updated: "2024-09-15"
description: "If you&#x27;re experiencing an issue with Control Hub, check to see if it&#x27;s something
that we already know about and have a recommended workaround."
tags: ["webex-calling", "webex-meetings", "webex-messaging"]
source: "help.webex.com"
---

# Known Issues with Control Hub for Customer Administrators

- The Reports content on the Overview page is incorrect.  

**Workaround**: Go to the Reports page for a more accurate view.
- In Control Hub, you cannot assign administrative privileges in some cases. This issue occurs when two different partners made orders for the organization. When you try to access the Webex site through **Control Hub > Services > Webex site**, the error "You are not entitled to access this site" appears. To obtain access to the Webex site, [open a case with support](https://collaborationhelp.cisco.com/contact).
- For customers using the Cisco Directory Connector for directory synchronization: If a synchronized account has a matching email address in the consumer (free) organization, that email address is not added to the customer organization. You'll see the following error message in the Event Log of the Cisco Directory Connector host: <username/email address> could not be converted. Contact support for assistance converting this user.

**Workaround**: [Convert all accounts from the consumer organization to the customer organization ](https://www.cisco.com/go/hybrid-services-directory) before you enable directory synchronization. As always, perform dry runs to validate the outcome before you perform a live synchronization.
- Only some users are listed for large organizations. To find the remaining users, use the search function.
- Sorting by first, last, display name, and email sorts only the users visible in the list of users.
- If directory synchronization is enabled, you can only use this method to add or remove users for your organization. If you attempt to convert users using Control Hub, you'll receive the following error: <username/email address> could not be converted. Contact support for assistance converting this user.

**Workaround**: Disable directory synchronization and try the conversion again.
- If you assigned services to a user account, and the organization is configured for Directory Synchronization, the services don't appear as assigned until the person signs in.
- If administrator accounts don't have the first, last, or display name set, they receive a "Sign in failed" when attempting to sign into Control Hub.
- If you can't configure services for an active Webex App user, or the user can't sign in to a Webex site for which users are managed in the cloud, make sure that the user has signed in to Webex App for Web at <https://web.webex.com>. After the user signs in, retry your operation.
- Exporting the user list through CSV displays random characters if the First, Last, or Display Name fields contain double-byte characters.

**Workaround**: Save the file, rename the extension to .txt, then open the file using Microsoft Excel.
- It can take up to 24 hours for Control Hub to reflect updates made to Webex service license counts.
