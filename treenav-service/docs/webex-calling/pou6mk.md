---
title: "Manage external numbers with Control Hub"
product: "Webex Calling"
article_id: "pou6mk"
url: "https://help.webex.com/en-us/article/pou6mk/Manage-external-numbers-with-Control-Hub"
last_updated: "2025-10-23"
description: "Webex Calling restricts number actions in Control Hub when your phone numbers
are managed externally by a Cloud Connected PSTN Provider (CCPP)."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Manage external numbers with Control Hub

To prevent conflicts that could arise if both Control Hub and your CCPP vendor attempt to manage the same numbers, Webex Calling restricts certain number operations when your organization's phone numbers are managed externally by a CCPP vendor in Control Hub.

An administrator can’t add, delete, activate, or modify numbers through Control Hub if the number is externally managed by a CCPP​. However, you can move mobile numbers between locations within the same country, regardless of the specific PSTN connection option configured for those locations.

Read [Select your PSTN provider](https://help.webex.com/en-us/article/nousk9ab/Get-Started-with-the-Cisco-Calling-Plans#wbxch%5Fr%5Fselect%5Fccp-provider) to understand the PSTN providers available for the Webex Calling customer.

## Bulk management of numbers

**Add numbers**— While adding new PSTN numbers, if the selected location’s carrier has external number management enabled, the system displays a warning message that number management is disabled by the carrier. You see a similar message when you add a mobile number and the selected Mobile Network Operator (MNO) has external number management enabled.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                                                                                                                     |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Services \> PSTN & Routing \> Numbers.                                                                                                                                                                                                                                                                                                                                                                                           |
| 3 | Click Manage \> Add.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4 | Choose a location and enter Number type. Select PSTN number:![Add number with PSTN selection for bulk number management](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/490001-500000/492001-493000/492539.png) Select mobile number![Add mobile number for bulk number management](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/490001-500000/492001-493000/492540.png) |

**Activating and deleting numbers**—When you choose Activate or Delete, the number selection page automatically filters out numbers that are externally managed by your CCPP vendor. This prevents you from inadvertently attempting to activate or delete numbers that are under external control.

| 1 | Sign in to [Control Hub](https://admin.webex.com). |
| - | -------------------------------------------------- |
| 2 | Go to Services \> PSTN & Routing \> Numbers.       |
| 3 | Click Manage and select Activate or Delete.        |

**Move numbers—**You can move mobile numbers along with the Direct Inward Dialling (DID), Service, and Toll Free numbers between locations within the same country. This works even when external number management is enabled. Regular numbers can move only between locations that use the same PSTN connection. Mobile numbers can move to any location that supports the mobile carrier. This provides greater flexibility for managing your mobile number assignments.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                         |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Services \> PSTN & Routing \> Numbers.                                                                                                                                                                                                                               |
| 3 | Select numbers to move.                                                                                                                                                                                                                                                    |
| 4 | Click Manage \> Move.                                                                                                                                                                                                                                                      |
| 5 | Select the location from the Move from field and click Next.                                                                                                                                                                                                               |
| 6 | Select the location from the Move to field and click Move. You can move numbers that have no location to any location that uses the same carrier option. This operation is enabled only when multiple location-less numbers with the same associated carrier are selected. |

## Manage individual numbers

For individual numbers, if the external number management is enabled for the number’s carrier, the Activate, Modify,and Delete options are disabled.

To activate, modify, or delete a phone number:

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Services \> PSTN & Routing \> Numbers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3 | Select the number you want to activate and click ![More Options button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/430001-440000/438001-439000/438667.jpg) in the Action column. ![external number management is enabled so the activate option is disabled.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/490001-500000/492001-493000/492532.png) To understand how to manage phone numbers, refer [Manage phone numbers in Control Hub](https://help.webex.com/en-us/article/wkj3f0/Manage-phone-numbers-in-Control-Hub) article for more detail. **Limitations:** Control Hub doesn’t support the ability to deactivate numbers, irrespective of external management status. A CCPP can block the following number management operations from Control Hub, if external number management is enabled for their PSTN customer: Add number Delete number Activate number Deactivate number Modify |
