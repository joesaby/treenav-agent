---
title: "Buffer Size Calculation"
product: "Webex Cloud-Connected UC"
article_id: "gvlp4ab"
url: "https://help.webex.com/en-us/article/gvlp4ab/Buffer-Size-Calculation"
last_updated: "2024-08-30"
description: "Buffer Size Calculation"
tags: ["webex-cloud-connected-uc"]
source: "help.webex.com"
---

# Buffer Size Calculation

The following table gives examples of the buffer size calculation for various types of publisher nodes.

Default buffer size taken for calculation is 50 MB for Unified CM publisher node and 20 MB for Instant Messaging & Presence (IM&P) publisher nodes.

For all the subscriber nodes, default buffer size is 20 MB.

| Enterprise Node      | Disk Size (GB) | Memory (GB) | CPU Count | Buffer Size (MB) |
| -------------------- | -------------- | ----------- | --------- | ---------------- |
| Unified CM publisher | 70             | 6           | 2         | 30               |
| 80                   | 6              | 1           | 30        |                  |
| 110                  | 8              | 2           | 90        |                  |
| 110                  | 8              | 4           | 100       |                  |
| IM&P publisher       | 80             | 2           | 1         | 20               |
| 80                   | 4              | 1           | 20        |                  |
| 80                   | 4              | 2           | 20        |                  |
| 80                   | 8              | 4           | 20        |                  |
| 80                   | 16             | 6           | 20        |                  |

## What to do next

For information about CCUC system requirements, see [System Requirements for Webex Cloud-Connected UC](https://help.webex.com/en-us/55mug2/).
