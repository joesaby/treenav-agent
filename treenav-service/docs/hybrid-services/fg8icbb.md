---
title: "User and Workspace email conflict in Hybrid Calender Service"
product: "Hybrid Services"
article_id: "fg8icbb"
url: "https://help.webex.com/en-us/article/fg8icbb/User-and-Workspace-email-conflict-in-Hybrid-Calender-Service"
last_updated: "2024-09-15"
description: "We have found that there is a finite set of email conflicts between Users and
Workspaces in a limited set of Webex organizations. In the process of cleaning
this up, we need help from the organizations in question to resolve the email
conflict."
tags: ["hybrid-services"]
source: "help.webex.com"
---

# User and Workspace email conflict in Hybrid Calender Service

Starting from June 1, 2022, we have put in place in production mechanisms that disqualifies creation of accounts, if its calendar email has an identical match already existing in our Webex Identity. This mechanism applies to both User and Workspace account creation.

We will give until of October 1, 2022 to have you resolve the email conflicts internally. At what point we need to force the matter operationally.

After this date, if no action has been take to resolve the email conflict, Webex Operations will take the following action to resolve the conflict. If there is a conflict between a User email and a Workspace email, the Webex Operations team deletes the email from the Workspace account. This can cause issues for features like room booking and one button to push meeting join.

All impacted organizations will be contacted about this issue directly by email, by Webex App, and by in product messaging in Control Hub.
