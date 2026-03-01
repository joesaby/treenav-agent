---
title: "Unified CM call quality grades"
product: "Webex Cloud-Connected UC"
article_id: "nfeu3q7"
url: "https://help.webex.com/en-us/article/nfeu3q7/Unified-CM-Call-Quality-Grades"
last_updated: "2025-05-16"
description: "Learn more about how call quality grades are determined for Unified CM."
tags: ["webex-cloud-connected-uc", "calling-in-webex-(unified-cm)"]
source: "help.webex.com"
---

# Unified CM call quality grades

The Unified CM system generates Call Management Records (CMRs) and Call Detail Records (CDRs). Call quality grading can be done only for endpoints that support CMRs. The information in a CDR is used to grade a call as good, acceptable, or poor.

The following terms are used to grade calls:

- **Concealment**—Voice, and all other data, travels in packets over IP networks with fixed maximum capacity. This system may be more prone to data loss in the presence of congestion. Concealment is the endpoint created audio that is used to mask the effect of packet loss in a voice packet stream.
- **Severely Concealed Seconds (SCS)**—The number of seconds during which a significant amount of concealment (greater than 50 milliseconds) is observed. If the concealment that is observed is greater than 50 milliseconds or approximately 5 percent, then the audio quality may be degraded.
- **Severely Concealed Seconds Ratio (SCSR)**—The ratio of SCS to total call duration.  
SCSR(%)=(SCS/duration)\*100
- **Long call**—A call that lasts 20 seconds or longer.
- **Short call**—A call that lasts less than 20 seconds.

Calls are graded based on the SCSR percentage. The SCSR percentage for a long call and a short call have different threshold values. The following table provides details about call grades based on the SCSR percentage ranges.

__Table 1\. Call Grading Explanation__
| Grade                 | SCSR Threshold Values  |                  |
| --------------------- | ---------------------- | ---------------- |
| Long Call SCSR Ranges | Short Call SCSR Ranges |                  |
| Good                  | Less than 3%           | Less than 20%    |
| Acceptable            | 3%-7%                  | 20%-30%          |
| Poor                  | Greater than 7%        | Greater than 30% |

If the SCSR for a call of 10-second duration is 10%, then it's of good quality.

If the SCSR for a call of 120-second duration is 8%, then it's of poor quality.

## **What to do next** 

For information about CCUC Analytics, see [Analytics for Your Cisco Webex Cloud-Connected UC](https://help.webex.com/en-us/ntm7wvk/).
