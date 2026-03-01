---
title: "Set Up Interoperability for Webex App and Jabber"
product: "Webex Messaging"
article_id: "nzx9su0"
url: "https://help.webex.com/en-us/article/nzx9su0/Set-Up-Interoperability-for-Cisco-Webex-and-Jabber"
last_updated: "2024-09-20"
description: "When your users are in Webex App and also in Cisco Jabber, you can use the
interoperability setting to allow people in both apps to communicate with each
other."
tags: ["webex-messaging"]
source: "help.webex.com"
---

# Set Up Interoperability for Webex App and Jabber

## Interoperability for Webex App and Jabber

This article provides interoperability between your cloud-based Jabber deployment and Webex App. This is different to the interoperability between on-premises Jabber deployments and Webex App users (see <https://www.cisco.com/go/hybrid-services-message> for more on that deployment).

With the **Webex App / Jabber Interop** setting enabled:

- People can send or receive messages between Webex App and Jabber apps.
- Jabber users see a status of _On Webex App_, when their contact is using Webex App.

### Deployment Requirements

Supported for Cisco Jabber cloud deployments only.

Before you enable this setting, check the following:

- Your organization must be added to the Cisco Platform identity service. You can check in Control Hub to see if your organization has been added. If your organization hasn't been added, [contact Cisco Customer Support](https://help.webex.com/en-us/contact) to request that your organization be added to the Cisco Platform identity service. This process to add users to the identity service takes some time to complete.  
Jabber (Webex Messenger) and Webex App domains must be identical for the Webex Messenger org to be synched into the Cisco Platform identity service.  
Cisco Directory Connector must be disabled in Control Hub, as this method of managing users is not compatible with how users are managed in a Jabber cloud deployment.

- If you use Single Sign On (SSO) for Webex Messenger, then you must set up SSO for Cisco Platform identity service. For more information about configuring SSO, see the [Install and Upgrade Guides](http://www.cisco.com/c/en/us/support/unified-communications/webex-messenger/products-installation-guides-list.html).

### Known Limitations

- Users can only send text between Jabber and Webex App. Sending any other content is not supported.
- You can only send messages in a space with one person; you can't send messages in group spaces.
- End-to-end AES encryption is not supported.
- All users must have the **Webex App / Jabber Interop** setting enabled.  
When a Jabber user without interop enabled attempts to send a message to an interop-enabled user who isn't signed in to Jabber, they receive this message: _This user is currently offline in Jabber and the message cannot be delivered_.

### Jabber Requirements

- Cisco Jabber clients 11.9 or later.
- Ensure the following parameter is set to `False` in the `jabber-config.xml` file:`<Persistent_Chat_Enabled>False</Persistent_Chat_Enabled>`
- AES encryption must be disabled in Cisco Webex Messenger Administration Tool (Org Admin). In the Policy Editor tab, disable the Support End-To-End Encryption for IM setting.

### Control Hub Settings

You can enable the **Webex App / Jabber Interop** setting in Control Hub for your entire organization and then for specific people. The setting is also available as one of the services to choose in the CSV file user setup.

## Set up messaging between Webex App and Jabber for your organization

When your users are in both Webex App and Jabber, you can use this setting to allow everyone in both apps to communicate with each other.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Services and select Message \> **Webex Messenger**. If you don't see this option, contact [Cisco Customer Support](https://help.webex.com/en-us/contact) to request that your organization be added to the Cisco Platform identity service. The process to add users to the identity service takes some time to complete. |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Scroll to Options, click **Webex App / Jabber Interop**, and then click Save.                                                                                                                                                                                                                                                                                                            |

## Set up messaging between Webex App and Jabber for a user

When your users are in both Webex App and Jabber, you can use this setting to allow a person to communicate with people in both.

Before you begin

You must set up messaging between Webex App and Jabber for your organization before you see this setting for users.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Users. |
| - | --------------------------------------------------------------------- |
| 2 | Select the user's name, then click Message Free or Message Paid.      |
| 3 | Click **Webex App / Jabber Interop**, then click Save.                |

## Set Up Messaging between Webex App and Jabber for Many Users

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Users and click Manage Users.   |
| - | ---------------------------------------------------------------------------------------------- |
| 2 | Select Export and import users with a CSV template, then click Next.                           |
| 3 | Click Export.                                                                                  |
| 4 | In the CSV file, update the **Webex App / Jabber Interop** column with TRUE and save the file. |
| 5 | Click Import, select your file and click Open.                                                 |
| 6 | Select either Add services only or Add and remove services, then click Submit.                 |
