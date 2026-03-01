---
title: "Allow domains for post-meeting and post-webinar landing pages"
product: "Webex Meetings"
article_id: "k8hw3q"
url: "https://help.webex.com/en-us/article/k8hw3q/Allow-domains-for-post-meeting-and-post-webinar-landing-pages"
last_updated: "2026-02-25"
description: "Meeting and webinar hosts can specify a URL to open a landing page, such as a
survey, after the meeting or webinar ends. Hosts can&#x27;t save URLs from domains
that aren&#x27;t on the allowed list. To enable this feature, administrators must
create a list of allowed domains."
tags: ["webex-meetings", "webex-webinars"]
source: "help.webex.com"
---

# Allow domains for post-meeting and post-webinar landing pages

The list of allowed domains is a security measure to ensure that hosts can only specify URLs that resolve to reputable and professional domains. Hosts can then enter these allowed URLs to open a landing page after a meeting or webinar ends.

This feature is not available for webinars in webcast view.

- [Site Administration](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F42d6acc0-4887-4c58-9960-15b587db5955)
- [Control Hub](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F83fe4a09-6252-48bc-bc6d-71e25fce2f90)

| 1 | Sign in to Webex Site Administration and go to Configuration \> Common Site Settings \> Options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | In the Security Options section, enter the domain names to allow in the Allow the following URL domain names text box. Separate the domain names with a comma. Webex always includes the webex.com and script.google.com domains. Hosts can't specify a URL from a domain that isn't in this list. ![Allow the following URL domain names, text box.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/465001-466000/465188.jpg) Do not enter these domains in the larger text box under Enable cross-origin resources sharing (CORS). These URLs apply only to CORS and not to the URL that opens after a meeting or webinar. |
| 3 | Click Update.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

| 1 | Sign in to [https://admin.webex.com](https://admin.webex.com/login).                                                                                                                                                                                                                                                                                                                                                                                                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Services \> Meeting \> Sites.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3 | Under Common Settings, click Security.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4 | Scroll to the Others section, and for Allow these URL domain names enter the domain names you want to allow. Separate the domain names with a comma. Webex always includes the webex.com and script.google.com domains. Hosts can't specify a URL from a domain that isn't in this list. Do not enter these domains in the larger text box under Enable cross-origin resources sharing (CORS). These URLs apply only to CORS and not to the URL that opens after a meeting or webinar. |
| 5 | Click Update.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
