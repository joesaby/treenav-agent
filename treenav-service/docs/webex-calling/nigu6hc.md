---
title: "Reset user access to Webex App"
product: "Webex Calling"
article_id: "nigu6hc"
url: "https://help.webex.com/en-us/article/nigu6hc"
last_updated: "2024-09-12"
description: "With Webex Pro Pack, you can use Control Hub to reset access for a user when
they leave your organization or lose a device. Cached content is deleted from
the user&#x27;s mobile devices."
tags: ["webex-calling", "webex-contact-center", "webex-meetings", "webex-messaging"]
source: "help.webex.com"
---

# Reset user access to Webex App

When you reset a user's access in Control Hub, we revoke that user's access token. When the access token expires, the Webex App automatically signs the user out.

If you need to immediately (and permanently) remove a user's access, you must [delete the user](https://help.webex.com/0qse04).

To revoke a user's access token:

| 1 | Sign in to Control Hub at <https://admin.webex.com>, then go to Users and select a user. The user details page opens on the user's Summarytab. |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Security panel, click Reset Access. Within the access token expiry period, the Webex App automatically signs the user out.              |

What to do next

If you need to change the expiry time for access tokens, read [Token policy settings in Control Hub](https://help.webex.com/d2xpgm).

If you need to programmatically reset user access, read about the [Authorizations API](https://developer.webex.com/docs/api/v1/authorizations).
