---
title: "Set up automatic license assignment templates for Webex Calling users"
product: "Webex Calling"
article_id: "n8iptxg"
url: "https://help.webex.com/en-us/article/n8iptxg/Set-up-automatic-license-assignment-templates-for-Webex-Calling-users"
last_updated: "2025-06-10"
description: "Webex users today can set up automatic licensing. Unlike most other Webex
services, Webex Calling has more detailed requirements for automatic licensing."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Set up automatic license assignment templates for Webex Calling users

[How automatic license assignment works for Webex Calling](#Cisco%5FConcept.dita%5F4a8eae3d-7b3d-45bb-ac66-6edc04f7f4b5)

Similar to other services, Webex Calling provides [automatic license assignment via Control Hub](https://help.webex.com/en-us/article/n3ijtao/Set-up-automatic-license-assignments-in-Control-Hub#%5Ffbab7c23-fd01-43e0-9056-633f2e8d3904). Automatic license assignment avoids a slower, manual method of assigning licenses. Unlike other Webex services, Webex Calling requires additional information before provisioning users. In order to entitle a user with Webex Calling, that user must be assigned to a location and provisioned with an extension and/or number. 

- For [directory synchronization scenarios](https://help.webex.com/en-us/article/nj34yk2/Ways-to-add-users-to-your-Control-Hub-organization), including Active Directory, Azure, OKTA, and CCUC synchronization, the automatic provisioning process uses the user's work phone number in the customer's directory service to look up a pre-provisioned number in Webex Calling. If a number is found in Webex Calling, then the automatic provisioning process will look up the location associated with that number in the Webex Calling location. See Automatic licensing via directory synchronization for more information.
- For [manual update scenarios](https://help.webex.com/en-us/article/nj34yk2/Ways-to-add-users-to-your-Control-Hub-organization) the automatic provisioning process will prompt the administrator for the location and number assignment for new users. For existing users, the process will attempt to provision all existing users assigned to a valid, pre-provisioned Webex Calling number. See Automatic licensing assignment via manual user updates for more information.

- [Automatic Licensing via Directory Synchronization](#Cisco%5FConcept.dita%5F9604a6f0-d779-4a96-8a60-0575122aac41)
- [Automatic Licensing via Manual User Updates](#Cisco%5FConcept.dita%5Fc5438810-15f2-4a59-a89b-27ccd804e4c8)

Automatic license assignment via directory synchronization requires that the source of the synchronization (Active Directory, Azure, etc.) provides a work phone number field associated with the user. The automatic licensing assignment will use the work phone number field to look up the location to which that user should be assigned in Webex Calling. 

The phone number must be:

- In E.164 format
- Pre-provisioned and assigned to a valid location within Webex Calling
- Not assigned to any other user or service in Webex Calling

If any of the validation fails or if the number is not included, then that user is not provisioned with Webex Calling. For more information on identifying and correcting cases where users are not entitled with Webex Calling because of validation errors or number issues, see [Correcting Webex Calling auto-license issues](https://help.webex.com/en-us/article/n8iptxg/Set-up-automatic-license-assignment-templates-for-Webex-Calling-users#Cisco%5FTask.dita%5Fa165d5cf-ca2a-4a2a-bb18-78180d6f1bc6).

Automatic license assignment via manual user addition will automatically apply a license to users that are associated with a Webex Calling license template. When a Webex Calling template is in place, the administrator will be prompted to assign the location and number for users assigned to that template. 

 The administrator will not be prompted for location and number (and, thus, not entitling with Webex Calling) for users not assigned to that template. If the administrator wants to assign a Webex Calling license for users no assigned to that template, the administrator may [Edit Service Licenses in Control Hub for Individual Users](https://help.webex.com/en-us/article/9dmqgv/Edit-Service-Licenses-in-Control-Hub-for-Individual-Users). 

[Identifying Webex Calling Auto-License Issues](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fb0949a93-96e1-4399-a099-f61ada3d7cec)

You cannot assign users to Webex Calling if you do not meet the following two conditions.

- If you fail to provision users in Webex Calling even after setting up the auto assign template at the group level or at the org level.
- If you do not assign the users to a valid location with a pre-provisioned number available (unassigned) in Webex Calling

| 1 | To identify any user who is not provisioned through the auto assign template, From the customer view in [https://admin.webex.com](https://admin.webex.com/), go to **Users**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click **Manage Users**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3 | Select **Export user list** on the **CSV Add or Modify Users** tile.  The user.csv file downloads automatically.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4 | Click **Export** if the user.csv file does not download automatically.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 5 | Open the file upon download.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 6 | Filter the **user.csv** file to display all users where the **Webex Calling VAR Professional** is set to **FALSE**. The filtered list shows all users that have failed authentication.If a number is available in the Phone Number column, then the number in Active Directory for that user is not available for Webex Calling. (Number is either an invalid number format, exists but is assigned to another service or user, or is not available in a provisioned location).If a number is not available in the Phone Number column, then no number was assigned to that user, which is a pre-requisite for automatic license assignment. |

[Correcting Webex Calling Auto-License Issues](#Cisco%5FConcept.dita%5F2ea670bf-1690-4a9c-988f-d961329e2c84)

Failures to auto provision will usually be due to an invalid or an unassigned work phone number field. The automatic licensing assignment for existing users will use the work phone number field to lookup the location to which that user should be assigned in Webex Calling. 

The phone number must be:

- In E.164 format
- Pre-provisioned and assigned to a valid location within Webex Calling
- Not assigned to any other user or service in Webex Calling

There are multiple ways to update a valid work phone number field depending on the type of auto license process:

- **Setting the Webex Calling Auto Assign License Number for Manual Users**. The work phone number field may be [set via Control Hub](https://help.webex.com/en-us/article/nvjt3ce/Change-Users'-Phone-Numbers#Cisco%5FTask.dita%5Fe96da205-5ba3-453e-a840-f31548fcc9ab). Alternately, the work phone number or the Webex Calling entitlement itself may be updated [via the User CSV template](https://help.webex.com/en-us/article/e2okky/Modify-Users-in-Control-Hub-with-the-CSV-Template).
- **Setting the Webex Calling Auto Assign License Number for Directory Synchronization Users.**The automatic licensing assignment for existing users will use the work phone number field synchronized into Control Hub.  
Already provisioned Webex Calling users will not be impacted by phone number changes via directory synchronization. If, for example, the user is provisioned against a valid Webex Calling number 555-555-1212, then the user will not be re-provisioned against a new number even if active directory is updated with a new number.

After updating a user’s or users’ work phone number field, the template can be re-applied against existing users. In the auto-assign license template, the administrator has the ability to [Apply scope to existing users](https://help.webex.com/en-us/article/n3ijtao/Set-up-automatic-license-assignments-in-Control-Hub#task%5F3F6112D420DD147521130F843602545D). This will apply the template against all applicable users (users assigned to the template) that are not already assigned Webex Calling. For those unassigned Webex Calling must have a valid Webex Calling phone number.

If the administrator Apply scope to Existing users, there is an option provided to not preserve existing licensing on the existing users. Unchecking “Preserve licenses for existing users” will remove the calling licenses from the users if WebEx Calling is not checked in the Auto Template settings. This option needs to be very carefully selected, as this is not a reversible operation. Removing Webex Calling will permanently remove voicemail settings, number assignment and calling services. The administrator needs to acknowledge that the operation is well intended.
