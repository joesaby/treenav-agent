---
title: "Add users manually in Control Hub"
product: "Webex Calling"
article_id: "v71ztb"
url: "https://help.webex.com/en-us/article/v71ztb"
last_updated: "2026-01-13"
description: "You can manually add users at a time your organization by entering their email
addresses. You can also manage external users who are in different organizations
already by assigning a Webex Meetings license to them."
tags: ["webex-calling", "webex-messaging", "webex-meetings", "webex-contact-center", "webex-calling-customer-assist"]
source: "help.webex.com"
---

# Add users manually in Control Hub

- [Add users](#CMGT%5FTK%5FA04C710D%5F00)
- [Manage external users](#task%5Fj2q%5Fwph%5Ftsb)

You can manually add up to 25 users at a time if your organization hasn't marked [user attributes as required](https://help.webex.com/nxrfr9v), including user profile or custom attributes. If your organization marked a user attribute as required, then you can only add 1 user at a time.

- If you're synchronizing your users from a directory such as Active Directory, you can’t add users manually in Control Hub. Use [Directory Connector](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/hybridservices/directoryconnector/cmgt%5Fb%5Fdirectory-connector-guide-admins.html) to add your users.
- If you've purchased a subscription through Webex Online (my.webex.com), you need to add users through Webex User Hub.

Before you begin

If you get an error when trying to add users who used their email address to create a trial account, have the users [delete their organization](https://help.webex.com/npf3a8e) first before adding them to your organization.

| 1  | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2  | Click Users \> Add user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3  | Choose one of the following: Email address. Names and Email address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4  | **Create a list**: Create a list of users you want to add or modify, then click Next. If you're just using email addresses, you can separate them with commas. If you're adding names as well, click + after each entry to add it to the list. You can add users who are eligible to be claimed to your organization. You can’t add existing users in your organization or users that already have a Webex account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 5  | **Assign licenses**: If you’re using automatic license assignment, you can see which services those users are getting. If you want to override the automatic license assignment for these users, click Assign license manually and select the services to assign. When you select Webex Attendant Console, set the Webex Calling service to Professional license. You can’t assign both the Webex Calling standard license and Customer Assist license to a user. If you're not using automatic license assignment, select the services to assign to the users in your list. If you have multiple subscriptions, choose which subscription supplies the licenses. If you’re assigning licenses for Contact Center, select Webex Teams \> Customer Care with the Premium and Standard Agent option. To add a supervisor, select both Premium and Supervisor options. A user is treated as an agent unless you make them a supervisor. If you added Calling to the user, you can assign a location, phone number, and extension. |
| 6  | **Assign tracking codes**: If you gave your new users Meeting licenses, and if their Meeting sites require tracking codes, add those tracking codes to the users on the next screen of the wizard: ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/463001-464000/463244.jpg) Read about [managing tracking codes](https://help.webex.com/izu2ty/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 7  | **Assign content management**: If global access is selected for your enterprise content management, then content management is automatically assigned to users, and you won't see this screen.Otherwise, choose a content management option for each user.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/433001-434000/433539.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 8  | Review the list of users and services when you see the Reviewscreen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 9  | Click Add Users. Webex processes your list of users and licenses, and shows you a summary of the results. If you’re using automated welcome emails, Webex sends those emails to the new users from your list. You can [toggle activation emails on or off](https://help.webex.com/nqj88gt/) in the Organization Settings. The new users are in Control Hub, showing as Pending until they sign in for the first time. Each license you grant is taken from your subscription when the user first signs in to Webex.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 10 | Review the summary page of records processed, and click Finish to exit the wizard. You may get an error when trying to access Calling Settings for a newly added user. We recommend that you remove the Webex Calling license and then reassign the calling license to the user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

What to do next

You can assign administrative privileges to people in your organization. See [Assign organization account roles in Control Hub](https://help.webex.com/fs78p5).

You can assign host or attendee Webex Meetings licenses to users outside of your organization. To do this, navigate to the external users tab and either add them or [select existing external users to edit them](https://help.webex.com/9dmqgv). Users may already exist in the external users list if they already have a Webex Meetings license for a site in your organization.

Invitations to accept or reject a license expire after 15 days. If users outside of your organization reject the invitation or 15 days have passed, those users will disappear from the external users list, unless they have another Webex Meetings license in your organization.

Make sure you invite the correct user to your organization before sending out the invitation. If you accidentally invited someone to your organization, you need to wait for them to accept first before you can edit the user to remove their license. Otherwise, you'd have to wait for them to reject the invitation or wait for the invitation to expire after 15 days.

If a meeting invitation expires, then you can choose to send them another invite by assigning them a Webex Meetings license again.

Webex Meetings licenses aren't consumed until the user accepts the invitation.

If you don't want your users to get a host or attendee account on sites managed by other organizations, then you can [disable this setting](https://help.webex.com/g84jdt).

**Webex Meetings policies that apply to external users** 

Currently, external users follow their own [organization's collaboration restriction policies](https://help.webex.com/nlapmibb). In the future, external users will get the most restrictive value of the policies set by their own organization and the site-owning organization.

Before you begin

The organization that the external users are in must [allow cross-organization licensing](https://help.webex.com/g84jdt) before you can add those users to your organization.

Automatic license assignment doesn't apply to external users.

| 1 | From the customer view in <https://admin.webex.com>, go to Users, and then select External users.                                                                                            |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Add external user.                                                                                                                                                                    |
| 3 | Enter up to 25 email addresses. You can only add email addresses that are associated with an account in Webex. Email addresses that aren't associated with a Webex account will be rejected. |
| 4 | Select the licenses to assign, and click Next.                                                                                                                                               |
| 5 | Select which account type to assign, and then click Save. An email is sent to each external user with an invite to join.                                                                     |

## Add external users with a CSV file

The CSV template enables you to add a large number of external users and assign services all at the same time.

| 1 | From the customer view in [Control Hub](https://admin.webex.com), go to Users \> External users.                                                                                                                   |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Select the drop-down arrow next to Add external user and select Manage external users by CSV.                                                                                                                      |
| 3 | Click Download CSV or Download CSV template.                                                                                                                                                                       |
| 4 | Enter new users' information in new lines in the CSV file. The User ID/Email (Required) column is the only required field.To assign a service, add TRUE in that service's column. To exclude a service, add FALSE. |
| 5 | Click Import, select your updated CSV file, and click Next.                                                                                                                                                        |
| 6 | Click Submit.                                                                                                                                                                                                      |

## Remove external users

You can remove an external user who has accepted a license by removing all the licenses assigned to that user from your organization.

Before you begin

You can’t remove a user who has a pending invitation. You may need to wait up to 15 days until their invitation expires before that user is removed from your organization. If a user only has a license invitation from your organization and the invitation expires, then that user is automatically removed from your organization.

| 1 | From the customer view in <https://admin.webex.com>, go to Users, and then select External users. |
| - | ------------------------------------------------------------------------------------------------- |
| 2 | Click on an external user and select Edit licenses.                                               |
| 3 | Uncheck all the assigned licenses and click Save.                                                 |
