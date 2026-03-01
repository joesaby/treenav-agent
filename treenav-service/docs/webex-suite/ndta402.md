---
title: "Add a User with Existing Free Webex App Account"
product: "Webex Suite"
article_id: "ndta402"
url: "https://help.webex.com/en-us/article/ndta402/Add-a-User-with-Existing-Free-Webex-Account"
last_updated: "2025-04-17"
description: "When you try to add a user to your organization in Control Hub, but that user
already signed up for a free Webex App account with an email domain that you do
not own, you&#x27;ll see an error message. To bring that user into your Control Hub
organization, you can ask the user for a different email address, or to delete
their free Webex App account so you can reuse the email address."
tags: ["webex-suite"]
source: "help.webex.com"
---

# Add a User with Existing Free Webex App Account

| 1 | Contact the affected users and explain why you cannot yet add them to your Webex organization. (There's an explanation of the problem at the end of this procedure.)                                                                                                                                                                                                            |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Invite users to choose between: providing a different email address to use in your organizationdeleting their free account, so you can reuse the email address they originally signed up with You must warn users that their current Webex App data (all files and messages) will be deleted with the second choice. They are starting again, as if they were new to Webex App. |
| 3 | If users want to use the same email address with your organization, they must delete their free Webex App accounts. This is explained in <https://help.webex.com/yjrmmp/>.                                                                                                                                                                                                      |
| 4 | Add the users to your organization in Control Hub, using the new or the existing email addresses provided by the users. See <https://help.webex.com/v71ztb/>.                                                                                                                                                                                                                   |

**Why did I see an error about the domain not being converted?** 

Webex uses email addresses as primary identities, so each email address can only be for one user account. Typically you would [claim your email domain](https://help.webex.com/nxz79m5), then add all your users' email addresses. If some of your users were already in Webex App using that email domain, you could [claim those users for your organization](https://help.webex.com/nceb8tm) and optionally bring their existing Webex App data along.

In some cases, your users have private email accounts, with email domains that you do not own and cannot claim. For example, free email accounts from third-party service providers, like Google or Yahoo. You can still [manually add those users to your organization](https://help.webex.com/v71ztb), _unless they are already using Webex App with that email address_.

In that case:

- You can ask the users for different email addresses to add to your organization; the users can still access their free accounts on the original email address. Webex considers these as two distinct users: data and functionality are not common to both accounts.
- You can ask the users to [delete their existing (free) Webex App accounts](https://help.webex.com/yjrmmp); **this option deletes all a user's Webex data and configuration**. However, the user can use the same email address with Webex App, and becomes a new account in your licensed organization (rather than in the general, free Webex organization).
