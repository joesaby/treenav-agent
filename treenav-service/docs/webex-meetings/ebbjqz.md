---
title: "Allow users to host meetings from a video device without a PIN"
product: "Webex Meetings"
article_id: "ebbjqz"
url: "https://help.webex.com/en-us/article/ebbjqz/Allow-Users-to-Host-Meetings-from-a-Video-Device-Without-a-PIN-in-Cisco-Webex-Control-Hub"
last_updated: "2025-05-12"
description: "You can allow hosts and attendees to host scheduled and Personal Room meetings
from Cisco Webex video devices. Users will no longer be asked &quot;Are you the
host?&quot; and anyone can start the host&#x27;s meeting from the device."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Allow users to host meetings from a video device without a PIN

## Allow users to let others host their meetings

Enabling this setting allows hosts and attendees to host Webex meetings without a PIN from video devices. If you want to enable this setting for on-premises video devices, you have to [verify your domains](https://help.webex.com/cd6d84) and [configure your Expressways](https://help.webex.com/notkgfab) to use mutual TLS (mTLS) for the `sip.webex.com` domain.

| 1 | From the customer view in <https://admin.webex.com>, go to Services, and under Meeting, select Sites.                                                                                   |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the site that you want to apply this setting for, and click Settings.                                                                                                            |
| 3 | Under Common Settings, select Scheduler.                                                                                                                                                |
| 4 | Scroll to Schedule Meeting Options, and toggle Allow users to let anyone with a host account on this site host their scheduled or Personal Room meetings on.                            |
| 5 | Click Save.                                                                                                                                                                             |
| 6 | (End user settings) Ask the user to go to [Allow Others to Start My Personal Room Meetings from a Video Device without a PIN](https://help.webex.com/b02kdeb).                          |
| 7 | (End user settings) Ask the user to create and save a template for future meetings. See [Create and Save a Template for Joining Meetings without a PIN](https://help.webex.com/jajhvw). |

## Set the default scheduling template

To set the default Webex Meetings scheduling template:

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                          |
| - | --------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Services \> Meeting and click Sites.                                                                                  |
| 3 | Choose the Webex site to change the settings for, and click Settings.                                                       |
| 4 | Under Meetings, select Navigation and Scheduling Templates.                                                                 |
| 5 | Scroll to Standard Scheduling Templates and select the template in the Set as Default  column to make the default template. |
| 6 | Click Save.                                                                                                                 |
