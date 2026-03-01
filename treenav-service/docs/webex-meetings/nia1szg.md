---
title: "Enable origins allowed list for CORS"
product: "Webex Meetings"
article_id: "nia1szg"
url: "https://help.webex.com/en-us/article/nia1szg/Enable-origins-allowed-list-for-CORS"
last_updated: "2024-09-21"
description: "As an administrator, you can set up an allowed list for cross-origin resource
sharing (CORS). The domains in the allowed list can use the XML API to access
meeting data. In earlier versions of Webex meeting services, administrators had
to request assistance from TAC to configure CORS."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Enable origins allowed list for CORS

- [Site Administration](#task%5FDA90CD2446B4FA6DE894355C792EB358)
- [Control Hub](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F8ead4cdb-70de-4a07-a854-0452f834c37c)

| 1 | Sign in to Webex Site Administration and go to Configuration \> Common Site Settings \> Options.                                                                                                                                                                                                                        |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Security Options section, check Enable cross-origin resource sharing (CORS). ![Enable cross-origin resource sharing (CORS) option, and the corresponding text box for listing the domains.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/465001-466000/465191.jpg) |
| 3 | In the text box, type your list of trusted domains; use a comma to separate domain names.                                                                                                                                                                                                                               |

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/login), go to Services, and under Meeting, select Sites.                                                                                                                                                                                                                    |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Choose the Webex site to change the settings for, and click Configure Site.                                                                                                                                                                                                                                                                             |
| 3 | Under Common Settings, click Site Options.                                                                                                                                                                                                                                                                                                              |
| 4 | In the Security Options section, check the corresponding check box for Enable cross-origin resource sharing (CORS). ![Enable cross-origin resource sharing (CORS) option, and the corresponding text box for listing the domains.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/465001-466000/465192.jpg) |
| 5 | In the text box, type your list of trusted domains; use a comma to separate domain names.                                                                                                                                                                                                                                                               |
| 6 | Click Update.                                                                                                                                                                                                                                                                                                                                           |
