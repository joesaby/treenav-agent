---
title: "Toll-free and non-geographical numbers support for Webex Calling"
product: "Webex Calling"
article_id: "g1gtsdb"
url: "https://help.webex.com/en-us/article/g1gtsdb/Toll-free-and-non-geographical-numbers-support-for-Webex-Calling"
last_updated: "2026-01-13"
description: "Use this article to know the toll-free numbers supported by Webex Calling for
each location. Also, know the restrictions when making outbound calls from
non-geographic numbers."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Toll-free and non-geographical numbers support for Webex Calling

## Toll-free and non-geographical numbers support

Use toll-free numbers to place calls at no charge. Such numbers allow callers to reach businesses and individuals out of the area without being charged a long-distance fee for the call.

Outbound dialing to toll-free numbers is supported in all countries. Use this article to know the list of countries where you can add toll-free numbers to Webex Calling, to receive inbound calls and also for using toll-free numbers as caller IDs.

For country specific dial plan numbers, see [Dial plans by Country](https://help.webex.com/757iyo).

Toll-free numbers have a badge in the Control Hub.

You can assign toll-free numbers to Webex services like Auto-Attendant, Hunt Group, Call Queue and so on. However, you can’t assign toll-free numbers as the number of a user or a workspace. You can use toll-free numbers as a main number for a Webex location and use it as a caller ID for a user or a workspace.

Non-geographic numbers, like toll-free numbers, facilitate businesses allowing users to reach easily from long distances without having to pay the full long-distance calling charges. Unlike toll-free numbers, these numbers have a cost to the caller. They are accessible around the country, and they have no city prefixes. While these numbers are of little use to individuals, they are highly lucrative for businesses with customers across the country. Non-geographic phone numbers don’t have a badge indication in the Control Hub.

Some countries have restrictions when making outbound calls from certain non-geographic numbers along with restrictions where they can’t be assigned to end users. The restrictions for non-geographic numbers in these countries are the same as the toll-free numbers. See [Dial plans by Country](https://help.webex.com/757iyo) article for details on the restrictions. Non-geographic numbers with restrictions are indicated using **§**.

Some countries have variable length number patterns, For example: 050-xxxxxx to 050-xxxxxxxxxxx.

- Non-geographic numbers aren't supported with Cisco Calling Plans.
- Currently, toll-free numbers are supported with Cisco Calling Plans in U.S. and Canada locations only.
- When using a premises-based PSTN or Cloud Connected PSTN, check with your PSTN provider for offerings related to toll-free and non-geographic numbers.
- You can’t assign toll-free and restricted non-geographical numbers to a user, workspace, or virtual line.

## Toll-free and non-geographic country list

Toll-Free and non-geographic number ranges apply to the following countries that use the respective country numbering plan: 

|                 | Country/Region                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Africa          | Algeria, Egypt, South Africa, Zimbabwe                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| North America   | American Samoa, Anguilla, Antigua and Barbuda, Bahamas, Barbados, Bermuda, British Virgin Islands, Cayman Islands, Canada, Dominica, Dominican Republic, Grenada, Guam, Jamaica, Mexico, Montserrat, Northern Mariana Islands, Puerto Rico, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, Sint Maarten, Trinidad and Tobago, Turks and Caicos Islands, US Virgin Islands, United States                                                                                 |
| Europe          | Austria, Belgium, Bulgaria, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Netherlands, Norway, Portugal, Poland, Romania, Serbia, Spain, Sweden, Switzerland, Slovenia, Slovakia, Malta, Turkey, Ukraine, United Kingdom Toll-free support doesn't apply to Austria region.                                                                                                                                       |
| Asia            | China, Hong Kong, India, Indonesia, Japan, Malaysia, Philippines, Qatar, Saudi Arabia, Singapore, South Korea, Thailand, UAE, Vietnam For details on the supported Toll-free and non-geographic numbers, see the respective country dial plan in the [Dial plans by country](https://help.webex.com/757iyo)article. The customer administrator is responsible to understand and use toll-free and non-geographical numbers in a country and assign them appropriately as per local regulations. |
| Australia       | Australia, New Zealand, Solomon Islands                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Central America | Costa Rica, El Salvador, Honduras                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| South America   | Argentina, Bolivia, Chile, Colombia, Brazil, Peru, Uruguay                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Enable toll-free numbers for Cisco PSTN

Webex Calling offers support for Inbound toll-free (IBTF) capability, allowing customers with Cisco Calling plan as their PSTN connection to order and provision inbound toll-free numbers.

Cisco Calling plan (Cisco PSTN) supports creating a new order, port order, move order for Inbound toll-free numbers along with the existing DID or regular numbers through the Control Hub interface.

Toll-free numbers are not available for ordering until you purchase a separate license with toll-free availability. If you do not have an IBTF license, a tooltip appears in the Control Hub for you to know that an IBTF license is required.

Purchase a license (BCIBTFTN) to provision toll-free numbers in the Cisco Calling plan. Contact your _Cisco Sales Agent and/or Support team_ to purchase the required license.

Toll-free provisioning is not allowed for the trial customers.

The following are the supported use cases:

- You can search for available inbound toll-free numbers and place an order for a new inbound toll-free number. To order for new numbers, see [Get Started with the Cisco Calling Plans](https://help.webex.com/en-us/article/nousk9ab/Get-Started-with-the-Cisco-Calling-Plans#task%5F8A6009CE34ECC3CC096B67F8335D8F5B).
- You can create port orders to port existing toll-free numbers from a previous carrier to Cisco PSTN. To port existing numbers, see [Get Started with the Cisco Calling Plans](https://help.webex.com/en-us/article/nousk9ab/Get-Started-with-the-Cisco-Calling-Plans#task%5FF86AA0031DB850D5AF722B9F6E356F49).
- You can create move orders to move toll-free numbers from one location to another location. To move numbers from one location to another, see [Manage phone numbers in Control Hub](https://help.webex.com/en-us/article/wkj3f0/Manage-phone-numbers-in-Control-Hub).  
Both the locations must have IBTF license configured in the subscription.
- You can see the Inbound Toll-free license and usage under the subscription in the Control Hub. To review your subscriptions, see [Subscriptions in Control Hub](https://help.webex.com/en-us/article/3z1b8z/Subscriptions-in-Control-Hub).
