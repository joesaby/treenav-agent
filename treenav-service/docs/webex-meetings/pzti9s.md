---
title: "Deploy and configure the Webex Scheduler for Microsoft Outlook"
product: "Webex Meetings"
article_id: "pzti9s"
url: "https://help.webex.com/en-us/article/pzti9s"
last_updated: "2025-11-12"
description: "Microsoft Outlook users can use the Webex Scheduler to schedule Webex meetings
or Webex Personal Room meetings directly from Microsoft Outlook, in any browser.
Use the Microsoft Store to deploy the Webex Scheduler to users. Use Webex
Administration or Control Hub to configure the settings."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Deploy and configure the Webex Scheduler for Microsoft Outlook

To deploy the Webex Scheduler for Microsoft Outlook, install it from the [Microsoft AppSource](https://appsource.microsoft.com/product/office/WA104382035) and follow the instructions in [Deploy add-ins in the admin center](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-deployment-of-add-ins?view=o365-worldwide). You can also [install it locally](https://help.webex.com/ngjh53x/).

[Prepare your environment](#concept-template%5F6bad8f11-c525-4ba2-a243-0e431b7f0c17)

Before you deploy the Webex Scheduler for Microsoft Outlook, check to make sure you meet the minimum system requirements. See the [list of requirements and the current known issues and limitations](https://help.webex.com/n194fs/).

You may need to configure your network to allow the Webex Scheduler to access these URLs:

- `https://appsforoffice.microsoft.com/lib/1/hosted/office.js` (for OfficeJS library).

[Configure the Webex Scheduler for Microsoft 365 (commercial)](#id%5F97473)

### Webex Scheduler authorization options

This page describes how to use your Microsoft 365 tenant administrator account to authorize the Webex Scheduler for everyone in your tenant.

If you prefer that individual users should authorize Webex to access their M365 accounts, do not Add New Authorization as suggested below.

See the [permissions required for authorization](https://help.webex.com/nkyzq38/).

### Enable and authorize the Webex Scheduler for your site:

1. Open your site options page.
  - **Webex Administration:**  
  Sign in to Webex Administration and go to Configuration \> Common Site Settings \> Options.
  - **Control Hub:**
    1. From the customer view in <https://admin.webex.com>, go to Services \> Meeting.
    2. On the Sites tab, select a Webex site, and then click Settings.
    3. From the menu, select Common Settings \> Site Options.
2. In the Third-Party Integration section, find _Microsoft (Microsoft 365 and Microsoft Teams)_.
3. (Recommended) Check the box Automatically link users with this Webex site if their Webex account email address matches their Microsoft 365 email address to simplify user sign-in.
4. Authorize Webex to access Microsoft 365:
  1. Click Add New Authorization.  
  A new window opens where you can sign in. You may need to select an account.
  2. Sign in with your Microsoft administrator account.  
  After successful sign in, you can see what permissions you are granting to Webex.
  3. Review the Permissions requested, and click Accept.  
  (If you prefer to Cancel, see the section _Enable Webex Scheduler for Exchange (or M365 without authorization)_ for the alternate procedure.)

You can see the updated Tenant ID and Tenant Domains fields when you refresh the page.

[Enable Webex Scheduler for Exchange (or M365 without authorization)](#id%5F136582)

1. Open your site options page.
  - **Webex Administration:**  
  Sign in to Webex Administration and go to Configuration \> Common Site Settings \> Options.
  - **Control Hub:**
    1. From the customer view in <https://admin.webex.com>, go to Services \> Meeting.
    2. On the Sites tab, select a Webex site, and then click Settings.
    3. From the menu, select Common Settings \> Site Options.
2. In the Third-Party Integration section, find _Microsoft Outlook Integrations without Microsoft 365 Authorization_.
3. Check Enable Microsoft Outlook integration while disallowing Webex Meetings from accessing Microsoft 365 account information.
4. (Webex Administration only) Click Update.

[Configure the Webex Scheduler for Microsoft 365 (GCC or GCC High)](#task-template%5F5b2a2a70-3cff-4ec3-b8f7-47f47757b706)

This is about enabling the Webex Scheduler for Microsoft GCC or GCC High environments. If your organization is not bound by US government regulations, see _Configure the Webex Scheduler for Microsoft 365 (conmmercial)_ in this article.

Before you begin

This task describes how to use your Microsoft 365 GCC / GCC High tenant administrator account to authorize the Webex Scheduler for everyone in your US government-related organization.

If you prefer that individual users should authorize Webex to access their M365 accounts, do not Add New Authorization as suggested below. See the [permissions required for authorization](https://help.webex.com/nkyzq38/).

| 1 | Open your site options page: **Webex Administration**: Sign in to Webex Administration and go to Configuration \> Common Site Settings \> Options. **Control Hub:** From the customer view in <https://admin.webex.com>, go to Services \> Meeting.On the Sites tab, select a Webex site, and then click Settings.From the menu, select Common Settings \> Site Options.                                                                                                                                    |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Third-Party Integration section, find _Microsoft (Microsoft 365 and Microsoft Teams)_. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/463001-464000/463237.jpg)                                                                                                                                                                                                                                                                                      |
| 3 | Select GCC or GCC High. Your choice depends what level of FedRAMP authorization your organization requires (Moderate or High).                                                                                                                                                                                                                                                                                                                                                                              |
| 4 | (Recommended) Check the box Automatically link users with this Webex site if their Webex account email address matches their Microsoft 365 email address to simplify user sign-in.                                                                                                                                                                                                                                                                                                                          |
| 5 | Authorize Webex to access Microsoft 365: Click Add New Authorization. A new window opens where you can sign in. You may need to select an account. Sign in with your Microsoft administrator account. Your account must be authorized to match your choice of GCC or GCC High. After successful sign in, you can see what permissions you are granting to Webex. Review the Permissions requested, and click Accept. You can see the updated Tenant ID and Tenant Domains fields when you refresh the page. |
