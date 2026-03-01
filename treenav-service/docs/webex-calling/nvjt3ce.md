---
title: "Change Users' Phone Numbers"
product: "Webex Calling"
article_id: "nvjt3ce"
url: "https://help.webex.com/en-us/article/nvjt3ce/Change-Users-Phone-Numbers"
last_updated: "2024-09-20"
description: "Change Users&#x27; Phone Numbers"
tags: ["webex-calling"]
source: "help.webex.com"
---

# Change Users' Phone Numbers

## Overview

You can change one or many users' phone numbers through Control Hub. The changes are committed to the users' records in the Webex identity store.

Here are the scope and limitations of this feature:

- You can only change primary phone numbers through Control Hub.
- Enter numbers only as they should be dialled; we don't normalize the number format.
- You cannot change user numbers that were synchronized to Webex from your Active Directory.  
Edit the numbers in Active Directory instead. See <https://www.cisco.com/go/hybrid-services-directory> for how to configure and run the AD synchronization.
- You can change numbers for users who have Webex Calling, although this is not the only mechanism you can use for Webex Calling, and you could get conflicts.
- You can change numbers for users who have Cisco Webex Free Calling.
- You can change numbers for users who have Calling in Webex (Unified CM).
- You must not use Control Hub to change numbers for Webex for BroadWorks users.

[Change One User's Number](#Cisco%5FTask.dita%5Fe96da205-5ba3-453e-a840-f31548fcc9ab)

| 1 | Sign in to <https://admin.webex.com> and click Users on the navigation menu.                                                                                                                                                                                                        |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Find and select the user. When the user details pane opens, open the Calling settings (different controls depending on the user's calling type). You'll see the user's number/s.                                                                                                    |
| 3 | Change the user's primary number: Change the value in Primary Work NumberOr, if the user has multiple lines: Click Primary \> Edit Line and change the number.                                                                                                                      |
| 4 | Click Save. The user's primary work number is changed in the Webex identity store. You'll see a warning if the number you entered is different to the primary Webex Calling number. If you want to change the Webex Calling number to match, go to Services \> Calling \>  Numbers. |

[Change Many Users' Phone Numbers](#Cisco%5FTask.dita%5Fc95902e7-1aed-49d2-8ae7-5bac5806dc3e)

| 1 | Sign in to <https://admin.webex.com>, then go to Users, click Manage Users, then CSV Add or Modify User.                                                                                                                                                                                                                                             |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Export the CSV file. For users who do not have Webex Calling: The primary work phone number from the identity store populates the Phone Number column. For Webex Calling users: The Phone Number and Extension numbers are populated in the CSV file. See <https://help.webex.com/e2okky> for detailed description of CSV export / import procedure. |
| 3 | Modify the values in the Phone Number column to change the numbers. You can enter the word REMOVE in the Phone Number field if you want to remove the user's number. The keyword "remove" is not case-sensitive.                                                                                                                                     |
| 4 | Import the CSV file. The users' numbers are updated in the Webex identity store. You could see errors with the import. For example, if the numbers are read-only in the identity store (because they came from AD sync), or if the number you gave conflicts with the user's existing Webex Calling number.                                          |
