---
title: "Apply a wrap-up reason"
product: "Webex Contact Center"
article_id: "4zxpoz"
url: "https://help.webex.com/en-us/article/4zxpoz/Apply-a-wrap-up-reason"
last_updated: "2024-12-20"
description: "A wrap-up reason describes the purpose of the customer&#x27;s call to the contact
center and your experience assisting the customer in answering their questions.
Your company uses this data to evaluate the contact center&#x27;s performance and
success."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Apply a wrap-up reason

You can apply a wrap-up reason after you end your interactions with customers. Select a wrap-up reason for the following scenarios: 

- When you end an active voice call, chat, or social messaging conversation with a customer.
- When you transfer an active voice call, chat, email, or social messaging conversation request.
- When you send an email reply to a customer.
- When the customer ends an active voice call or chat request.

To apply a wrap-up reason, follow these steps: 

Before you begin

You must have an active interaction with a customer.

| 1 | Click End, Transfer, or Send based on the scenario. The wrap-up reasons dialog box appears. The timer and the wrap-up reasons that appear in the wrap-up reasons dialog box are configured by your administrator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | You can select the required reason from the drop-down list or use the search field to filter the list of wrap-up reasons. You can select only one wrap-up reason at a time. The count-up timer appears next to the wrap-up state, indicating the time elapsed since you ended the interaction. The countdown timer appears on the wrap-up reasons dialog box, indicating the remaining time before the interaction is auto-wrapped up. If you don’t select a wrap-up reason before the timer reaches zero, the default wrap-up reason is submitted during auto wrap-up. If the admin has configured the auto wrap-up extension, you’re able to cancel the wrap-up countdown and extend the post call work, and manually wrap up once done. |
| 3 | Click Submit Wrap Up.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Auto wrap-up considerations

Your administrator can configure an auto wrap-up duration for your profile, which automatically ends calls without manual intervention. During the wrap-up state, your web browser initiates a countdown and sends a "wrap-up complete" POST API call to Webex Contact Center. However, the wrap-up timer can extend beyond the configured time under these circumstances:

- Closing the web browser during the wrap-up state extends the timer until reconnection or automatic sign out.
- Refreshing the browser at the end of the wrap-up state extends the timer due to refresh time.
- Losing network connection to Webex Contact Center prolongs the wrap-up time until reconnection.
- Incorrect Network Time Protocol (NTP) time on the computer can lead to miscalculation of the wrap-up completion time.

Any issue with the agent, computer, or network that hinders the browser from timely sending the "wrap-up complete" POST API call may cause the wrap-up timer to exceed its configured duration.
