---
title: "Provision Webex Go"
product: "Webex Calling"
article_id: "ns2be4t"
url: "https://help.webex.com/en-us/article/ns2be4t/Provision-Webex-Go"
last_updated: "2025-12-18"
description: "Webex Go turns a user&#x27;s own mobile device into a Webex Calling device. Enable
Webex Go by adding and assigning a phone number to a user."
tags: ["webex-calling", "webex-go"]
source: "help.webex.com"
---

# Provision Webex Go

You provision Webex Go by adding a phone number to a location as a mobile number type, and then assign the number to a user to activate the service.

Make sure you meet all prerequisites before provisioning Webex Go. For details, see [Prerequisites for Webex Go](https://help.webex.com/article/n2fha94/What-is-Webex-Go#task-template%5Fc5feb6e5-a6f3-40e1-844c-055252b16bb0).

Users must purchase a Webex Calling–enabled phone number and a mobile subscription from a certified mobile provider. Certified providers are listed on the Connection Type page in Control Hub.

To enable Webex Go for a user in Control Hub, follow these steps:

1. Identify the Webex Go providers supported for your organization.
2. Add a mobile number from a supported provider to the appropriate location.
3. Assign the mobile number to the user.

 For additional details on Webex Go, see [What is Webex Go](https://help.webex.com/en-us/article/n2fha94/What-is-Webex-Go).

## Determine the provider

You can find the supported Webex Go providers at: <https://admin.webex.com/calling/pstn/providers>.

The provider screen displays various provider cards with their supported service types. The Providers section includes :

- Preferred Calling Providers
- Certified Calling Providers
- Calling Providers

The card view displays the list of PSTN providers available to the Webex Calling customers before configuring the PSTN location. The PSTN view displays both providers and orders.

You can apply the search filter to narrow down the content by service type and market. Use the toggle option to switch the view from Compact to Table. In Compact view, the card resizes to show provider details without the service information.

Click Learn More on the card to view the provider details. Use the search field to select the PSTN service provider based on Cisco’s business relationship preference, such as Certified Provider and Calling Provider.

The provider details include the following:

- Provider summary
- List of locations configured with this provider
- List of markets where the provider is available for the supported services

If the customer has PSTN locations where Calling services aren’t set up, the Select this provider action bar is displayed. Select this option to configure the services for the PSTN location.

To view the providers, filter the list by the service type, as shown below:

Filter the list by the Webex Go service type to view the Webex Go providers, as shown below:

## Add mobile numbers

Steps to add Webex Go mobile operator numbers in the Control Hub.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), go to Services \> PSTN & Routing \> Numbers.                                                                                                                                                                                                                                                                                                                                                                                                       |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click Manage \>  Add. ![UI screen of Control Hub displaying PSTN & Routing numbers.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/490001-500000/494001-495000/494141.png)                                                                                                                                                                                                                                                                                              |
| 3 | Choose a location from the Location drop-down menu. The mobile number must be added to the correct location of the intended Webex Calling subscriber to be assigned properly.                                                                                                                                                                                                                                                                                                                          |
| 4 | Under Number type, select Mobile Number. For more information, see [Manage phone numbers in Control Hub](https://help.webex.com/wkj3f0). ![Choose a location to add numbers.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/488001-489000/488878.jpg)                                                                                                                                                                                                     |
| 5 | Choose a mobile operator from the Mobile operator drop-down menu. If you select AT&T, see [Webex Go with AT&T](https://help.webex.com/nst9txu).                                                                                                                                                                                                                                                                                                                                                        |
| 6 | Click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 7 | Enter the mobile number that you want to add, separated by a comma. You can add up to 1000 numbers.Mobile numbers are automatically validated when you add a comma or click Save and continue.Numbers with issues are highlighted in red. Hover over the numbers to see tooltips that explain why validation failed for these numbers. ![Image describing Entering PSTN numbers.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/488001-489000/488879.jpg) |
| 8 | Click Save and continue. After the numbers are provisioned successfully, you'll see that the mobile phone numbers appear in the number list. You'll also see a badge next to each number that indicates that it is a Webex mobile number. Mobile numbers that appear in an inactive state are automatically activated after you assign them to a user.                                                                                                                                                 |

## Assign the mobile number to a user 

After you add Webex Go mobile operator numbers to the number management inventory in Control Hub, assign them to users.

Steps to assign a Webex Go mobile number to a user

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the user you want to assign the mobile number to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Select Calling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4 | Under Directory Numbers, click Add Number. If a primary number is already assigned, click Primary to replace it with the Webex mobile number. ![User's profile in Control Hub on the Calling tab showing Numbers information for a user.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/481001-482000/481395.jpg)                                                                                                                                                                                                                                                                                                                                                                                                            |
| 5 | From the Phone number drop-down list, select the mobile number to assign. The drop-down list includes all available numbers. Use the Webex mobile tag to filter and see which mobile numbers are available to assign to users. ![Add MO to user](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/481001-482000/481937.jpg) If you see a Number activation pending message, check the status again after 2 hours. If you receive a Mobile number activation error message, check the activation error details on the PSTN Orderspage. ![Directory number section with primary number and extension fields](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/488001-489000/488910.jpg) |
| 6 | Click Save. The Webex Go mobile device is automatically assigned to the user and available on the user's Devices tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Provision Webex Go alternate identity

In some cases, the mobile number assigned to a device may not match the user's preferred Webex Calling identity. For example, a user may want to keep a published business number but cannot or does not want to port it to a Webex-certified provider. To support this scenario, assign an alternate identity to the Webex Go user.

Users in Webex Calling can have multiple numbers. Administrators can assign the existing published business number (from the example above) as a secondary number. When someone calls that number, all of the user’s devices ring, including the Webex Godevice. Webex Calling supports this simultaneous ringing across assigned devices. For instructions on assigning numbers to users, see [Assign phone number to a user and workspace](https://help.webex.com/en-us/article/n4kem8b/Assign-phone-number-to-a-user-and-workspace).

You can use the External Calling Line Identity policy to present any of the user’s numbers as the CLID for calls. In the example above, the published business number assigned as a secondary number can be configured in the policy.

Use the Webex Calling External Calling Line Identity policy to present any of the user’s numbers as the CLID for outgoing calls. For example, you can configure a published business number that is assigned as a secondary number as the number used in the External CLID policy. For instructions, see [Specify caller ID options for users and workspaces](https://help.webex.com/en-us/article/nh3x9zt/Specify-caller-ID-options-for-users-and-workspaces#id%5F133333).

The user's location PSTN provider routes the call to its destination. Both the mobile operator and the PSTN provider may record usage or apply metering.
