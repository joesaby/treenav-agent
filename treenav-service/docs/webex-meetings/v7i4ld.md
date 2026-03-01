---
title: "Send email alerts for recording status updates"
product: "Webex Meetings"
article_id: "v7i4ld"
url: "https://help.webex.com/en-us/article/v7i4ld/Send-email-alerts-for-recording-status-updates"
last_updated: "2024-09-21"
description: "Recording owners aren&#x27;t always aware of site policies for the reassignment and
deletion of recordings. To help owners track recording status changes, you can
turn on recording status updates. When the status of a recording changes,
because of deletion or reassignment, the recording owner receives an email
notification."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Send email alerts for recording status updates

If you enable this feature, hosts (or recording owners) receive notification emails when the following status changes occur for their recordings.

- Automatic deletion—Webex automatically deletes recordings older than the set retention policy for your site. This process runs daily and moves the deleted recordings to the trash. Webex automatically deletes recordings stored in the trash for more than 30 days.
- Reassignment—Administrators can assign ownership of recordings to a new owner. Reassignment is useful to preserve recordings when the original owner leaves the organization. Webex sends an email to the new owner, and if the account is still active, to the original owner.
- Move to, or restore from the trash (Recording Management) page—Administrators can move recordings to the trash, or restore them from the trash.
- Delete from, or empty the trash (Recording Management) page—Administrators can delete specific recordings from the trash, or empty the trash to delete them all.
- Delete recordings (Edit User page)—Administrators can delete all recordings belonging to a user. If the user account is active, Webex moves the recordings to the trash and sends an email. If the account isn't active, Webex deletes the recordings permanently.

For more information about recording management, see the following articles:

- [Manage Recordings with Cisco Webex Site Administration](https://help.webex.com/en-us/article/nt5imhbb/Manage-Recordings-with-Cisco-Webex-Site-Administration)
- [Manage Recordings with Cisco Webex Control Hub](https://help.webex.com/article/dmsu2c)
- [Enable the Auto-Deletion Policy for Webex Recordings](https://help.webex.com/en-us/article/nue0dlp/Enable-the-Auto-Deletion-Policy-for-Webex-Recordings)

- [Site Administration](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fc60a0db5-cf62-4468-a8cf-ec3094b8a790)
- [Control Hub](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F51905b62-213b-4701-a264-1122378dd860)

| 1 | Sign in to Webex Site Administration, and go to Configuration \> Common Site Settings \> Options.                                                                                                                                                                                              |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Scroll to Site Options, and check the Send an email alert for all recording status updates check box. ![Send an email alert for all recording status updates, check box.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/465001-466000/465182.jpg) |
| 3 | Click Update.                                                                                                                                                                                                                                                                                  |

| 1 | From the customer view in <https://admin.webex.com>, go to Services and under Meeting, select Sites.                                                                                                                                                               |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Select the Webex site that you want to change the settings for, and click Configure Site.                                                                                                                                                                          |
| 3 | Under Common Settings, select Site Options.                                                                                                                                                                                                                        |
| 4 | Check the Send an email alert for all recording status updates check box. ![Send an email alert for all recording status updates, check box.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/465001-466000/465182.jpg) |
| 5 | Click Update.                                                                                                                                                                                                                                                      |

[Example](#Cisco%5FReference.dita%5F511ffde4-753f-4aa6-8ef6-37bb094a9f28)

The following example includes a sample email, and also the corresponding email template. In this example, the email provides notification that Webex permanently deleted a recording, according to the automatic deletion policy for the site.

For more information about how to configure email templates for your site, see [Customize Email Templates](https://help.webex.com/en-us/article/1k50f/Customize-Email-Templates).
