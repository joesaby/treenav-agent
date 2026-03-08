---
title: "Webex App desktop update controls"
product: "Webex Suite"
article_id: "wlgw73"
url: "https://help.webex.com/en-us/article/wlgw73"
last_updated: "2025-07-30"
description: "You can set the frequency for Webex App updates for users in your organization."
tags: ["webex-suite"]
source: "help.webex.com"
---

# Webex App desktop update controls

These features give you control over your regular Webex software updates. Please note that we occasionally need to apply critical patches to all users with immediate effect. We consider such patches to be outside the scope of normal upgrades, and they cannot be controlled by your upgrade configuration.

Control Hub administrators can access desktop app update controls which allow you to choose when the desktop version of the Webex App is updated for your users.

You can defer the deployment of these updates by up to 4 weeks for the latest cadence. This deferral window will allow the administrator to pass any required internal validation checks and also allow for the creation of any collateral to support a company wide update or roll out of Webex. Specified users, such as IT admins, can receive updates as soon as they're published by Cisco. [Webex App release notes](https://help.webex.com/mqkve8) are available for you to read about what changed in an update.

This balanced approach empowers administrators to meet the needs of stakeholders, such as their security team, but at the same time realize the benefits of managed continuous delivery. 

As normal, end users will receive the standard update icon in Webex and the desktop app will continue to auto update on restart.

This article applies to desktop versions of the Webex App. The following articles are about managing mobile versions of Webex:

- [Mobile application management license agreement](https://help.webex.com/n4b78j9/)
- [Sign up for the mobile application management program](https://help.webex.com/j6gys3)
- [Webex App | Secure mobile devices](https://help.webex.com/alsshfb)

[Configure Webex App update schedule](#Cisco%5FReference.dita%5F88bfac24-f00d-456c-a10b-bd2761e787ba)

The desktop app update controls for the Webex App has moved from the **Messaging**section to **Organization Settings**. In addition, these are the changes to how the controls work:

- 1-month frequency is called **Latest** (cadence).
- 3-month frequency is called **Slow** (cadence), and the behavior changed from 3 months to a 4 months frequency. Organizations that need to control updates due to security or change controls in their environment can utilize this channel to manage updates within their environment. This change is in line with how the current slow channel works for Webex Meetings sites.

  - Slow channel (cadence) is only available by request. If you want to request access to slow channel (cadence) for Webex App updates for your organization, contact your Cisco representative or Cisco support.  
  Changes you make in this configuration takes effect immediately. If an update is available, clients will get the update configuration over the next 24 hours.  
  For example, if you select a channel whose version is newer than the version your organization is using, users will see updates within 24 hours.
- Partners can now configure the desktop app update controls for all their customers or for specific customers.
- Partners can now block or allow their customers from changing desktop app update controls.

### Apply update controls to groups

To apply update controls to groups of users.

1. Sign in to [Control Hub](https://admin.webex.com) and go to Organization Settings.
2. Click Templates and select an existing template to edit it or click Create Template to create a new template.
3. In the template Settings section, scroll down to Recurring software updates for Webex app.
4. Choose the update type for your group. You can update the Webex app automatically with every new version or schedule updates by cadence and deferment.
  - Automatic updates (Controlled by Cisco)—Your users are automatically updated each month when the desktop app update becomes available.
  - Custom scheduled updates with deferrals—You can decide when your users are updated using the following options:
    - Cadence—Choose from the options available, your users are updated using this frequency.

      - Latest—1 month.
      - Slow—4 months.
    - Deferral —You can optionally choose a deferral period. When the desktop app update is available, your deferral window begins and your users are automatically upgraded when the deferral window ends. You can defer updates for up to 4 weeks for latest channel or 12 weeks for slow channel.  
      For example, if there was a new release on April 4 and your deferral was configured to 2 weeks, then updates to users in your organization will start on April 18.  
The next scheduled upgrade is calculated and shown in Control Hub.
5. Click Download Webex builds to see the desktop app updates that are available.

 For more information about how templates work, see: [https://help.webex.com/article/n5uf91x/Configure-settings-templates](https://help.webex.com/en-us/article/n5uf91x/Configure-settings-templates) 

 For more information about Group Management in Control Hub, see: [https://help.webex.com/article/7eedy0/Group-management](https://help.webex.com/en-us/article/7eedy0/Group-management) 

The Webex Meetings experience in the Webex App is controlled by the Meetings site version. [Meetings site updates are configured separately](https://help.webex.com/nblo8zfb/).

### Apply update controls to individual users

To apply update controls to individual users.

1. Sign in to [Control Hub](https://admin.webex.com) and go to Management \>  Users.
2. Click on the user you want to edit and go to General.
3. In the Recurring software updates for Webex app, choose the update type for your user. You can update the Webex App automatically with every new version or schedule updates by cadence and deferment.
  - Inherit (Default)—Your users’ updates follow your organization’s settings or any group-specific update controls you have specified.
  - Automatic updates (Controlled by Cisco)—Your users are automatically updated each month when the desktop app update becomes available.
  - Custom scheduled updates with deferrals—You can decide when your users are updated using the following options:
    - Cadence—Choose from the options available, your users are updated using this frequency.

      - Latest—1 month.
      - Slow—4 months.
    - Deferral —You can optionally choose a deferral period. When the desktop app update is available, your deferral window begins and your users are automatically upgraded when the deferral window ends. You can defer updates for up to 4 weeks for latest channel or 12 weeks for slow channel.  
      For example, if there was a new release on April 4 and your deferral was configured to 2 weeks, then updates to users in your organization will start on April 18.  
The next scheduled upgrade is calculated and shown in Control Hub.
4. Click Download Webex builds to see the desktop app updates that are available.

The Webex Meetings experience in the Webex App is controlled by the Meetings site version. [Meetings site updates are configured separately](https://help.webex.com/nblo8zfb/).

### Known issues

The current version and updated dates are only correctly reflected if the same channel (automatic, latest, or slow) is selected at the time of the last update. Those values should be ignored if a different channel is selected.

[Legacy settings to configure Webex App update schedule](#id%5F131854)

 If this setting is still in the **Messaging** tab, then the update schedule changes mentioned earlier in this article doesn't apply to your organization yet and you must continue to follow these steps.

Before you begin

- The desktop app update schedule is for every user in your organization.
- Desktop app updates are supported for up to 3 months and 2 weeks.
- There is no option to revert users to earlier desktop app updates.

| 1 | Sign in to [Control Hub](https://admin.webex.com) and go to Messaging \>  Webex app software release management.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Choose from the following: Automatic software updates (Controlled by Cisco)—Your users are automatically updated each month when the desktop app update becomes available. Custom update schedule—You can decide when your users are updated using the following options:Frequency—Choose from the options available, your users are updated using this frequency.1 month3 monthsDeferral period—You can optionally choose a deferral period. When the desktop app update is available, your deferral window begins and your users are automatically upgraded when the deferral window ends. The next scheduled upgrade is calculated and shown in Control Hub. |
| 3 | Click Builds available for download to see the desktop app updates that are available.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

The Webex Meetings experience in the Webex App is controlled by the Meetings site version. [Meetings site updates are configured separately](https://help.webex.com/nblo8zfb/).
