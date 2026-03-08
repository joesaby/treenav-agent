---
title: "Manage organization contacts in Control Hub"
product: "Webex Messaging"
article_id: "hkgw56"
url: "https://help.webex.com/en-us/article/hkgw56/Manage-organization-contacts-in-Control-Hub"
last_updated: "2026-01-28"
description: "Create and modify organization contacts that aren&#x27;t your Webex users or don&#x27;t
have Webex licenses, such as supply chain partners or service vendors. Your
users can then search for and view these contacts in Webex App. Add and manage
contacts in your organization either with a CSV file or through the Control Hub
interface."
tags: ["webex-messaging", "webex-calling", "calling-in-webex-(unified-cm)", "webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# Manage organization contacts in Control Hub

##  View contacts

View and sort organization contacts in Control Hub. You can apply various filters to find the contact you want to view or modify. You can also search for a contact from the list with the search box at the top of the page.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Users \> Contacts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Apply any of the following filters to select the source of the contacts: Control Hub: View the contact details such as phone number, Email, SIP URI, and address. You can also view the source of the contact and edit or delete the contact. BroadWorks: View the contact details such as phone number, Email, SIP URI, and address. You can also view the source of the contact. You can’t edit or delete the contact. LDAP: View contact details such as phone number, Email, SIP URI, and address. You can also view the source of the contact. You can’t edit or delete the contact. UCM: View contact details such as phone number, Email, SIP URI, and address. You can also view the source of the contact. You can’t edit or delete the contact. |
| 4 | Click on the contact you want to view.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Manually add a new contact

Easily add up to 10 external contacts at one time through the Control Hub interface. After you create your new contacts, you can assign them to groups in your organization.

| 1 | Sign in to [Control Hub](https://admin.webex.com) and go to Users \> Contacts.                                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click the Manage Contacts dropdown and select Create contacts.                                                                                                                                                           |
| 3 | Fill in the contact fields. Each new contact must include the following fields: Display name Email Phone number                                                                                                          |
| 4 | (Optional) Click Add a new contact at the top of the contacts list on the left side of the screen for each new contact you want to add. You can add up to 10 contacts at a time.                                         |
| 5 | Click Create. If you don't want to assign your new contacts to groups in your organization, click Done.                                                                                                                  |
| 6 | (Optional) Click Assign contacts to a group to assign your new contacts to the appropriate user groups. You can add all your new contacts to a single group or individually match new contacts to the appropriate group. |

## Edit a single contact

Change information details for individual contacts. If you need to make changes to multiple contacts at once, you may find it easier to use the [contacts CSV file](https://help.webex.com/hkgw56/#task%5Fdvn%5Fbdb%5Fnsb).

| 1 | Sign in to [Control Hub](https://admin.webex.com) and go to Users \> Contacts.    |
| - | --------------------------------------------------------------------------------- |
| 2 | Click on the contact you want to edit and select Actions \> Edit contact details. |
| 3 | Change the contact details you want to modify.                                    |
| 4 | Click Save.                                                                       |

## Modify contacts in Control Hub

You can modify the following fields in the contact CSV file:

__Table 1\. Contact CSV file reference__
| Field             | Description                                                                                                                                                                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display name      | The name that displays under the contact. This field is required for all contacts.                                                                                                                                                                                                                                              |
| First name        | The contact's first name.                                                                                                                                                                                                                                                                                                       |
| Last name         | The contact's last name.                                                                                                                                                                                                                                                                                                        |
| Phone number      | The contact's phone number. You can include up to five phone numbers for a single contact. A phone number is required if no contact email is included.                                                                                                                                                                          |
| Phone number type | The type of phone number. For example, "work," "home," etc.                                                                                                                                                                                                                                                                     |
| Contact email     | The contact's email address. This field is required if no phone number is included for the contact.                                                                                                                                                                                                                             |
| SIP URI           | The contact's SIP URI.                                                                                                                                                                                                                                                                                                          |
| Title             | The contact's job title.                                                                                                                                                                                                                                                                                                        |
| Company name      | The name of the contact's company.                                                                                                                                                                                                                                                                                              |
| Address street    | The contact's street address.                                                                                                                                                                                                                                                                                                   |
| Address state     | The contact's state or province.                                                                                                                                                                                                                                                                                                |
| Address country   | The contact's country.                                                                                                                                                                                                                                                                                                          |
| Address zip       | The contact's postal code.                                                                                                                                                                                                                                                                                                      |
| Group ID          | A group's unique identifier in Webex. You can assign contacts to specific groups in your organization. When you assign a Group ID to a contact, only Webex users in that group can see the contact. The contact will be hidden from Webex users outside of that group. You can assign a contact to up to five different groups. |

| 1 | Sign in to [Control Hub](https://admin.webex.com/) and go to Users \> Contacts.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the Manage Contacts tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3 | Select Create via CSV.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 4 | In the CSV bulk add or edit contacts  page, select one of the following options from the drop-down list: All editable contacts: Click Download to download the CSV file containing editable contacts. In the downloaded file, add or edit the contacts. Sample CSV template: Click Download to download the sample template.                                                                                                                                                                                                                 |
| 5 | In the Upload CSV data section, click Choose a file or drag and drop the CSV file to upload. You can upload up to 10,000 contacts at once.                                                                                                                                                                                                                                                                                                                                                                                                   |
| 6 | If the selected file is a CSV file, click Next. The Task page appears, displaying the import status. If the import is successful, the page displays Completed status and the number of contacts are added or updated. If the import is unsuccessful, the page displays the number of errors. Click the Errors tab in the left pane to view the error details. Click Export errors to CSV  to download the error list. For a list of likely error messages, see [Error messages](https://help.webex.com/hkgw56/#reference%5Frwv%5Fwrq%5Fnsb). |
| 7 | Click Close.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Delete contacts in Control Hub

| 1 | To delete an individual contact, check the check box on the left of the contact.                                                                                                                                                                                                                                                                                |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Delete in the Delete Contacts dialog box .                                                                                                                                                                                                                                                                                                                |
| 3 | To delete all contacts sourced from Control Hub, click the Select all users option in the action bar after checking the check box and click Delete in the Delete Contacts dialog box. When you select this option, the contacts that are sourced from BroadWorks, LDAP, and UCM are disabled. Only the contacts that are sourced from Control Hub are selected. |

## Error messages

The following are the error messages that you may encounter while uploading the CSV files:

- `_DISPLAYNAMEMANDATORYERRORMESSAGE_ = "Display Name is mandatory in Input CSV."`
- `_INVALIDPHONENUMBERTYPEERRORMESSAGE_ = "Invalid Phone_Number type in Input CSV."`
- `_CONTACTMETHODREQUIREDERRORMESSAGE_ = "At least 1 contact method is mandatory in Input CSV."`
- `_INTERNALEXCEPTIONERRORMESSAGE_ = "Internal Server error."`
