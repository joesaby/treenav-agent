---
title: "Password Management in Control Hub"
product: "Webex Meetings"
article_id: "5tsd9q"
url: "https://help.webex.com/en-us/article/5tsd9q/Password-Management-in-Control-Hub"
last_updated: "2024-12-12"
description: "Password Management in Control Hub"
tags: ["webex-meetings", "webex-webinars"]
source: "help.webex.com"
---

# Password Management in Control Hub

## Overview

You can create a custom password policy for the users in your organization by changing one of the following default settings. The custom password policy applies when:

- The user sets a password for the first time as a new user.
- The users reset their password or their password expires.

This option applies to your organization only if you are using Webex as your Identity Provider. If you synchronize the users from Active Directory, see <https://www.cisco.com/go/hybrid-services-directory>. If you configure SSO with a third party Identity Provider, see [Single sign-on integration in Control Hub](https://help.webex.com/lfu88u/).

You can use the Smart Lockout and Password Policy options explained in the next section to manage the passwords of your organization.

## Password management options

### Smart lockout

This option enables users to recover when they are locked out after entering the wrong password 5 times. They do not need to contact an administrator to help them, they just wait a little while and then they can try again. This feature is on by default.

### Password policy

You can use this option to ensure that all new and changed user passwords comply with the password criteria that you specify.

You can set the requirements using the following options:

- Minimum character length (8-256)—Type the required number in the box to ensure that user passwords have at least the number of characters that you specify. The default value is '8'.
- Contains at least one lowercase letter—Select the check box to ensure that the user includes at least one lowercase letter.
- Contains at least one uppercase letter—Select the check box to ensure that the user includes at least one uppercase letter.
- Contains at least one number—Select the check box to ensure that the user includes at least one numeric character.
- Contains at least one special character—Select the check box to ensure that the user includes at least special character.
- Days between password changes (90-1825)—Select to ensure that the users change passwords after the specified number of days. Default value is '1825' days.
- Can’t be any of the last—Select an option from the drop-down list to ensure that the users don’t use the same password until they exceed the specified number of unique passwords. The default option is '3 passwords.'
- Passwords can't contain any of these words—Type the words in the box to prevent the use of any word in the list, in user passwords. You can edit the list to add or remove words. You can include up to 25 words.

Click Save to save the requirements for your password policy.

### Send users a password reset link

You can send users a password reset link when using Webex as your identity provider (IdP). A user recieves a link from Webex ID and is asked to reset their password. The admin sending the link recieves a confirmation message that it's been received.

If the user is using multiple identity providers and isn't routed to Webex as IdP, the admin sees an error message. In this case, the user is being routed to an IdP for federated single sign-on (SSO), and the user password authentication is stored on another platform.

1. Sign in to [Control Hub](https://admin.webex.com/), then go to Management \> Users.
2. In the list of users, click  next to the user who needs a password reset.  
Alternately, you can select the user in the list, then from the Actions drop-down menu, select Request password reset.
3. Click Send.
