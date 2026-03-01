---
title: "Audit logging for Webex Calling in India"
product: "Webex Calling"
article_id: "nzm2w1m"
url: "https://help.webex.com/en-us/article/nzm2w1m/Audit-logging-for-Webex-Calling-in-India"
last_updated: "2025-07-15"
description: "With audit logging, the configuration changes to India toll bypass settings get
logged in a log file for auditing."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Audit logging for Webex Calling in India

## To access the audit events log

Before you begin

The Webex Calling administrator can review the logs stored in the Control Hub. Search for specific dates and narrow your results. The administrator can download the logs to a CSV file.

You can adjust the date or filters to reduce the number of events. We retain audit records for 13 months. If you’re searching by date range, your earliest start date is one year ago (from today).

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                        |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click the Admin Activities tab. You can filter by specific administrators, event descriptions, or impacted resources. You can also reduce the date range to help you find specific events. |
| 3 | Click Export to CSV to download the logs to a file. For more information on the events in the activity log, see [Control Hub audit events reference](https://help.webex.com/nq4juobb).     |

## Compliance requirements for Webex Calling

To meet the compliance requirements for Webex Calling customers in India, the audit events are generated for Move, Add, Change, and Delete, operations on the following provisioning items:

- Zones (India Toll-Bypass addition)
- TrustedNetworkEdges (India Toll-Bypass addition)
- ServiceSettings
- Locations
- Trunks
- DialPlans
- RouteGroups
- Other Webex Calling features such as CallQueues, HuntGroups, OfficeAnywhere, and AutoAttendants
