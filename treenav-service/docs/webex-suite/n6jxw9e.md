---
title: "Claim users to your organization (\"convert\" users)"
product: "Webex Suite"
article_id: "n6jxw9e"
url: "https://help.webex.com/en-us/article/n6jxw9e"
last_updated: "2026-03-05"
description: "If people used an email domain that you own to sign up for a personal Webex
account, or if they belong to other Control Hub organizations, you may be able
to claim them into your organization. Individuals can choose to keep their
personal accounts by using a different email address for your site."
tags: ["webex-suite", "webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# Claim users to your organization ("convert" users)

As of February 25th 2025, delayed claim users in enterprise organizations can't transfer old Webex conversations to their new accounts from their free trials. The Delayed claim option was initially created to help businesses manage pre-existing Webex users within their organization. It allowed users to either keep using their personal account and data, or transfer their data to a new organization. However, this option cannot be supported when data is moving between clusters. To minimize confusion and errors, we’ve removed the delay claim feature from Webex. If they haven't already, we suggest alerting all claimed users to [migrate their Webex conversations](https://help.webex.com/nceb8tm/#id%5F134144).

Control Hub organizations should plan to have all claimed users migrated by the end of March 2025.

**If your organization has Site Administration-managed sites** 

We highly recommend that you claim users before [updating your site from Site Admin to Control Hub](https://help.webex.com/dowv6t). If you claim users into your organization after the site has been updated to Control Hub, then those users can lose access to meetings and meeting assets in the site.

As a workaround, you can do the following to make sure that users won't lose access to meetings and meeting assets in the site after the site has been updated to Control Hub:

- For users with external admin privileges to the organization or site:
  1. Remove all external admin access to the organization and site.
  2. Remove the meeting site license.
  3. After you claim the user, re-license that user to the site. You can also restore their external admin privileges.
- For regular users:  
  1. Remove the meeting site license.
  2. Claim the user to your organization.
  3. Re-license that user to the site.

**Read this before you try to claim users:** 

1. [Disable directory synchronization in the Directory Connector](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/hybridservices/directoryconnector/cmgt%5Fb%5Fdirectory-connector-guide-admins/cmgt%5Fb%5Fdirectory-connector-guide-admins%5Fchapter%5F01010.html#task%5FCC9D9C5D06B1CD6F7CAFCFBB88BE7A06) before claiming users. Only reenable synchronization after your claims are complete.  
If you run a synchronization and the claimed users aren’t in your directory, the synchronization process could delete the claimed users. We recommend that you test with a [dry-run synchronization](https://help.webex.com/en-us/article/zqvufbb/Deployment-Guide-for-Directory-Connector#task%5F7C36D44B8BAAD8338BEA4C6634D2262D) after you claim users.
2. [Verify your domains](https://help.webex.com/cd6d84) in Control Hub, so you can claim any users whose accounts use those domains in their email addresses.  
You don't have to claim the domains to claim the users. For more information, see [Manage your domains](https://help.webex.com/cd6d84).
3. Decide whether to allow users to migrate content from their old account to their new account.  

  - To allow migration, enable the Allow users to bring their Webex conversations with them setting in the Claim users page or the Organization Settings page.
  - If you enable this setting, Webex uses the delayed claim process to claim users that are eligible to migrate their content.  
  This feature applies only to personal Webex accounts. You can migrate a user from one enterprise organization to another, but you can't transfer their Webex conversations. Deleting your original organization permanently deletes all of the information associated with your organization, including data for all users. You'll lose data like Webex App messages and files, and all Webex Meetings data including Webex Meetings URLs and meeting recordings.
4. If you allow users to bring their content, you can claim them using one of the following options:

  - Immediate claim—Webex adds the accounts to your organization right away, and you can start managing and assigning licenses to them. Users can decide what to do with their old user account the next time they sign in.
  - Delayed claim—Users have 14 days to decide whether to migrate their Webex conversations from their old account to their new account. If they don't make a decision in 14 days, Webex automatically moves their accounts and Webex conversations to your organization. If you don't want users to bring their Webex conversations with them, you can [disable the delayed claim option](https://help.webex.com/e4ektc/).  
  Beginning on February 25th 2025, enterprise customers no longer have access to the Delayed claim option. Webex for Government customers should plan on having all delayed claims migrated by the end of March 2025.  
  Not all users are eligible for delayed claim. Users in the following organizations won't have the delayed claim option available and **will lose their content if you claim them to your organization**:

    - Users in organizations created after May 5, 2020\. For more information, see [New Webex App Data Center for North American Region](https://help.webex.com/njdgd42/).
    - Users in enterprise organizations.
5. Choose one of the following methods to claim users:

  - Method 1: Claim users—Shows you a list of up to 100 users that you can claim outside your organization.
  - Method 2: Bulk claim or modify users with a CSV file—Exports a CSV file of all users outside your organization that you can claim. You can edit the CSV file to choose who you want to claim.

[Method 1: Claim users](#id%5F134130)

You can see a list of users that you can claim. If there are more than 100 eligible users, export the list to a CSV file and follow the instructions in _Bulk claim or modify users with a CSV file_.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then under Management, select Users and click the down arrow next to Add users.                                                                                                                                                                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Claim users. This option only shows when there are users available to claim.                                                                                                                                                                                                                                                                                                                            |
| 3 | Click Selectable list, then click Next.                                                                                                                                                                                                                                                                                                                                                                       |
| 4 | (Optional) Use the drop-down menu to sort your list of users by domain.                                                                                                                                                                                                                                                                                                                                       |
| 5 | Select the users that you want to claim, then click Next.                                                                                                                                                                                                                                                                                                                                                     |
| 6 | Follow the wizard to assign licenses to users, then click Next. If you use [automatic license assignment](https://help.webex.com/ndl247o), Webex assigns licenses to the new users. ![Automatic license assignment page. Review which licenses will be assigned to users automatically.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479374.jpg) |
| 7 | (Optional) Review the new users that you've selected and the licenses you're assigning to them. This screen isn't shown if you use automatic license assignments.                                                                                                                                                                                                                                             |
| 8 | Check I understand that claiming these users is permanent and agree to proceed, then click Claim users.                                                                                                                                                                                                                                                                                                       |

[Method 2: Bulk claim or modify users with a CSV file](#id%5F134131)

If you need to claim more than 100 users at once, you must use a CSV file. Export users to a CSV file, modify the file, then import the CSV to claim them.

To switch between immediate claim or delayed claim for a user, you must export a different CSV file after enabling or disabling Allow users to bring their Webex conversation with them.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then under Management, select Users and click the down arrow next to Add users.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Manage users by CSV.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3 | Do one of the following: Click Generate a new CSV to download all potential claimable users in a CSV file.Click Download CSV template to manually add the users you want to claim.                                                                                                                                                                                                                                                                                                                                                                         |
| 4 | Modify users in the CSV file as needed. See [Manage multiple users in Control Hub with the CSV template](https://help.webex.com/nlkiw8e/) for more information.                                                                                                                                                                                                                                                                                                                                                                                            |
| 5 | Click Choose a file and select your modified CSV file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 6 | Choose one of the following options under Select CSV import behavior: Add services only—Select this option if you're only adding services to claimed users. Users are assigned licenses when service fields such as Webex Meetings or Webex Calling are marked as TRUE in the CSV file. Control Hub ignores any service fields marked FALSE. Add and remove services—Select this option if you're both adding and removing services from claimed users. In the CSV file, designate services you want to add as TRUE and those you want to remove as FALSE. |
| 7 | Click Upload. If you use [automatic license assignment](https://help.webex.com/article/ndl247o), Webex assigns licenses to these imported users automatically.                                                                                                                                                                                                                                                                                                                                                                                             |
| 8 | (Optional) Check the status of the import in progress. Track the CSV import status in the Organization Tasks tab on the top-right side of Control Hub.                                                                                                                                                                                                                                                                                                                                                                                                     |

[Retract claim for a user](#Cisco%5FTask.dita%5F14fa4fb1-207d-48a1-b18e-9a85552d2c02)

 When you retract your claim on a user, that user goes back to their previous organization and keeps their previous status.

You can retract a claim if the user has not yet signed in (which activates their account in your organization) **and** no more than 14 days have elapsed since the claim was made.

If users have been claimed by your organization, the retract claim option is not available.

The following table describes some conditions that affect whether you can retract a user claim.

__Table 1\. Conditions for retracting immediate or delayed claim users__
| Conditions                                                              | Can I retract claim from delayed-claimed user? | Can I retract claim from immediate-claimed user? |
| ----------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ |
| User has signed in and selected an option.                              | No                                             | No                                               |
| User has not signed in and 14 days have passed since the claim.         | No                                             | No                                               |
| User has not signed in and it's been less than 14 days since the claim. | Yes                                            | Yes                                              |
|                                                                         |                                                |                                                  |

Before you begin

If you want to retract the claim for a user with the same domain, your organization **cannot have the domain claimed** in Control Hub. If the domain is claimed, you can temporarily release the domain, retract the user, and then claim the domain again.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then under Management, select Users.                                                                                                                                                                                                                                                                                                                                                                        |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Sort the list of users by Status.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3 | Depending on how you claimed the user, choose one of these options: Delayed-claimed users—Select a user with the Delayed Claim status, then select Click Here. Immediate-claimed users—Click ![More menu](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/451001-452000/451601.jpg) next to a recently claimed user, then select Retract User Claim. Users that were immediate-claimed have the Not Verified status. |
| 4 | Select Retract.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

[Claimed user's experience](#id%5F134144)

When you claim a user, Control Hub sends the user an email notification letting them know that their company now manages their Webex account. It also provides a link to more information about any changes they can expect to experience.

The user can then choose what to do with their old account before moving to your organization. Depending on how you claimed the account, the user can choose from the following options:

**Immediate claim** 

Users that were immediate claimed have two options that they can choose from:

- Change their email address and keep the original account.
- Delete the original account.

**Delayed claim**

Starting on February 25th 2025, delayed claim users can't transfer old Webex conversations to their new accounts from their free trials. If they haven't already, we suggest alerting all claimed users to [migrate their Webex conversations](https://help.webex.com/nceb8tm/#id%5F134144).

Any delayed claims in Webex for Government organizations need to complete their migrations by the end of March 2025.

Users with the Delayed claim status can do the following:

- Change email address and keep the original account.
- Transfer content from original account to new account.
- Delete the original account.

In some cases, users may only have the option to change the name associated with the account. If the user does change the account name, that choice consumes a paid license in another organization.

If another organization claims a user from your organization, you could see that user's email address ends in `.convert-user.local`.

You can't delete users claimed by another organization. Their status automatically updates after they choose what to do with their old accounts.

[Frequently asked questions](#id%5F134380)

**Do all claimed users show up as Active in my organization?**

Claimed users match the status they had in their previous organization. For example, if a user's status was **Not Verified** in their previous organization, then their status is **Not Verified** when you bring them into your organization.

**Does my organization's retention policy apply to claimed users when they migrate their content?**

Yes, your organization's retention policy applies to all spaces and content of the users you claim.

**What happens if a delayed claim user takes no action during the 14-day period?**

A user has **Delayed Claim** status until they decide what to do with their old account. If the user takes no action within 14 days, Webex automatically migrates their account and previous Webex content into your organization.

**How do I check the status of my claimed users?**

Open the Users page in your organization to see the claimed users. Immediate claimed users appear with the status that they had in their previous organization. Delayed claim users have the **Delayed Claim** status for up to 14 days. This means they can still choose how to proceed with their old account.

**Why don't I see some users with my organization's domain in the list of eligible users to claim?**

- You can't claim a user from a domain that is verified by another organization, _even if you’ve verified the same domain in your organization_. If any one of your verified domains is claimed in another organization, that organization and its users is ineligible from being claimed.  
Example: If you manage multiple organizations and try to claim users with the domain `example.region.com` but another organization (where the user exists) also has an overlapping domain such as `region.example.com` that is verified, the system excludes that organization and you won’t see those users as eligible. To resolve this, remove overlapping domains from the organizations you manage, perform the necessary user claims, and then reverify the domain if needed.  
For more information, see [Manage your domains](https://help.webex.com/cd6d84).
- You can't claim a user from an organization that uses single sign-on (SSO).
- You can't claim a user from an organization that uses directory synchronization.

**What happens if the user signs in to their account after the claim has happened? Does the administrator still get to retract the claim?**

No. After the user signs in, you can't retract the claim.

**How do I locate the exact set of users that are eligible to retract the claim?**

Filter the user list by Status.

**Can the organization that I'm claiming a user from retract a claim that my organization made?**

No. The organization that initiated the claiming process can retract the claim.

**Can I retract the claim from users in bulk?**

No. You can retract the claim for each affected user.
