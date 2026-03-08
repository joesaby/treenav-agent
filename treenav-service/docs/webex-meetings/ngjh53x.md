---
title: "Install the Webex Scheduler for Microsoft 365 or on-premises Exchange"
product: "Webex Meetings"
article_id: "ngjh53x"
url: "https://help.webex.com/en-us/article/ngjh53x"
last_updated: "2024-09-21"
description: "The Webex Scheduler is an add-in for Outlook users to schedule, attend, and
track Webex meetings. Follow this article to install it from AppSource (for
Microsoft 365) or with the manifest file (for Microsoft Exchange)."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Install the Webex Scheduler for Microsoft 365 or on-premises Exchange

When you install the Webex Scheduler, a note appears that the Webex Scheduler uses the permission Read/write mailbox. The Webex Scheduler uses this permission to make Exchange Web Services API calls.

## Install the Webex Scheduler from Microsoft AppSource

Use Microsoft AppSource to install and deploy the Webex Scheduler, so that you automatically get updates to the Webex Scheduler.

You cannot use Microsoft AppSource to install and deploy the Webex Scheduler for Microsoft Exchange.

| 1 | Go to Microsoft AppSource.                               |
| - | -------------------------------------------------------- |
| 2 | Search for the Cisco Webex Scheduler app.                |
| 3 | Select Get it now and follow the on-screen instructions. |

## Install the Webex Scheduler from a manifest file

If you can't use Microsoft AppSource, you can deploy the Webex Scheduler from a manifest file.

This method requires manual updates.

- The Webex Scheduler automatically receives updates to existing features when we update the related services.
- The [manifest file](https://learn.microsoft.com/en-us/office/dev/add-ins/develop/add-in-manifests) itself does not automatically update. So, you need to manually update the manifest file.  
You can [check the manifest file modified date](https://meetings-api.webex.com/wbxaddin/manifest%5Fmodified%5Fdate.txt) to know when it was most recently updated.

- [Microsoft 365](#task%5Fyty%5Fshv%5Fh4b)
- [Exchange Server](#task%5Fcqr%5Fl2y%5Fgpb)

| 1 | Sign in to the [Microsoft 365 Admin Portal](https://admin.microsoft.com).                                                                                                   |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Settings \> Integrated apps and select Upload custom app \> Provide link to manifest file.                                                                      |
| 3 | Enter https://meetings-api.webex.com/wbxaddin/normal/manifest\_official.xml and click Validate. You must include https:// in the URL.                                       |
| 4 | Choose user assignments and deployment method and then select Deploy. The assigned users get the Webex Scheduler add-in when they open the Outlook app and create an event. |

For Exchange 2019, you can install the add-in directly from the URL. 

Before you begin

If you are using Exchange 2013 or 2016, you must save a local copy of the manifest before you start. Get it from <https://meetings-api.webex.com/wbxaddin/normal/manifest%5Fofficial.xml>.

| 1 | Sign in to the [Exchange Admin Center](https://docs.microsoft.com/en-us/exchange/architecture/client-access/exchange-admin-center?view=exchserver-2019).                                                                                                                                                                      |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Organization \> Add-in and select one of: (For Exchange 2019): Click New + \> Add from URL. Enter https://meetings-api.webex.com/wbxaddin/normal/manifest\_official.xml and click Install.(For Exchange 2013 or 2016): Click New + \> Add from file, select your downloaded manifest file and then click Install. |
