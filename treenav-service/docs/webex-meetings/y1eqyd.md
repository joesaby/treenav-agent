---
title: "Embedded apps in Webex"
product: "Webex Meetings"
article_id: "y1eqyd"
url: "https://help.webex.com/en-us/article/y1eqyd/Embedded-apps-in-Webex"
last_updated: "2025-02-11"
description: "Bring the web apps your users already use into Webex. Your users can use
embedded apps directly in a Webex meeting or space."
tags: ["webex-meetings", "webex-webinars", "webex-support", "webex-training", "webex-messaging", "webex-calling", "webex-events", "webex-events-(classic)", "webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# Embedded apps in Webex

In Control Hub, you can enable public apps or your own private embedded apps. Your users access the apps directly in their Webex meetings and spaces. 

Through the [Webex Developer Portal](https://developer.webex.com/), you create your own apps and register them for use with Webex. See the [Embedded Apps](https://developer.webex.com/docs/embedded-apps) paper for details.

There are  public and  private embedded apps. We have approved  public apps for use by everyone. You can add  private apps and enable them just for your organization.

Webex for Government only supports  private embedded apps. Use <https://developer-usgov.webex.com> instead of the commercial Webex Developer Portal.

- [Authentication](#reference-template%5F5c7e2f84-4858-4591-82f0-7bcc7181bebd)
- [Allow or block public apps](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fembeddedapp2)
- [Approve or deny a private app](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fembeddedapp1)
- [Recommend apps](#task-template%5F38215376-92b8-442d-a763-d38019faef47)
- [Configure groups in the app](#reference-template%5Fefa75960-36cc-4290-9309-8c9c3fe191b0)
- [Configure PII in the app](#task-template%5F9fa56843-b090-4f0d-ad11-f69612065b27)

 At this time, Embedded Apps only supports web-based authentication. The following authentication schemes are not supported:

- Non-web based authentication such as Kerberos.
- Integration authentication via mobile device management such as Microsoft Intune.
- SSO authentication schemes that block the embedded browser.
- Okta multi-factor authentication on MacOS.

We recommend initiating system browser authentication for any authentication that is not supported in the embedded browser. For more information, see: [Third-Party Single Sign-On (SSO) Support](https://developer.webex.com/docs/embedded-apps-guide#thirdparty-single-signon-sso-support).

You can allow or block specific embedded apps for your organization through Control Hub. 

Webex for Government doesn't support public embedded apps.

| 1 | Select Apps \> Embedded Apps. The Embedded Apps page shows the available apps and their status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Public tab, you can click Allow new public apps by default to toggle all public apps and this switch changes the state of all current public apps to the new state. By default, all the apps are enabled.                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | To allow or block a specific app, click that app to open the App Details pane. In the Access section, you can use the following settings to choose who can access that app: All users: To allow all users. The status of the app changes to 'Allowed'. Select Groups: To search and select the groups that you want to allow access. The status of the app changes to 'Limited'. See _'Configure groups in the app'_ tab for information on how to create groups. No users: To restrict any user. The status of the app changes to 'Blocked'. The Details pane provides links for more information about the app. |
| 4 | If the app requires access to PII, see the _'Configure PII in the app'_ tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

Developers create new private embedded apps for your organization in the [Webex Developer Portal](https://developer.webex.com/). When the app is ready, they submit the app for approval through the portal. You approve or deny those requests in Control Hub.

For Webex for Government, use <https://developer-usgov.webex.com>instead of the commercial Webex Developer Portal.

| 1 | Select Apps \> Embedded Apps. By default, the Private tab shows the status of any private app that's submitted for approval. You can also see the apps that developers are working on by clicking Show in-development apps.                                                                                                                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the app that's pending approval to open the Details pane.                                                                                                                                                                                                                                                                                                                                          |
| 3 | Set the Submission status radio button to one of the following: In-development: To show the requests in development. Denied: To show the apps that are denied approval. Approved: To show the approved apps.All users: To show all the approved users.Select groups: To show the approved users of the selected groups. See _'Configure groups in the app'_ tab for information on how to create groups. |
| 4 | If the app requires access to PII, see the _Configure PII in the app_ tab.                                                                                                                                                                                                                                                                                                                               |

The developer sees your decision on the app's page in the [Webex Developer Portal](https://developer.webex.com/).

You can choose up to 3 apps you want to recommend to users by flagging them as _recommended_ in Control Hub. Webex App displays your recommended apps, both public and private, to users under **Suggestions for you**.

Webex for Government doesn't support public embedded apps.

| 1 | Sign in to your administrator account on <https://admin.webex.com>, and choose **Apps**from the left-hand nav. Select the **Embedded Apps** tab and then choose the app you’d like to recommend from the list, either public or private. Enable the **Recommended**check box and then select **Save** at the bottom of the dialog. You can choose a maximum of 3 recommended apps. |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the apps list, a recommended app displays a **Recommended** tag. Webex App displays your recommended apps in the middle of the **Suggestions for you** section following **Recently used**.                                                                                                                                                                                     |

You can create a new group using one of the following options: 

- Perform a group sync by following the steps in [Set up Azure AD Wizard app in Control Hub](https://help.webex.com/en-us/article/heauzeb/Set-up-Azure-AD-Wizard-App-in-Control-Hub#%5F9c79a158-ee26-4fc6-a986-87389351a4e5).
- Use Webex APIs to create a group by following the steps in [Create a group](https://developer.webex.com/docs/api/v1/groups/create-a-group).

Personally Identifiable Information (PII) includes UUID, OrgID, email address, display name, first name, last name, Meeting ID, Meeting Title, Space ID, and Space Title.

By default, the PII restrictions are enabled for the apps. So, users outside of your organization will not be allowed to share any PII with a third-party app.

You can allow your app to share PII with third-party apps using the following steps:

| 1 | Select Apps \> Embedded Apps.                                                                                                                                                                                                                                                                                                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | You can allow PII access to both Public and Private apps. If your app is public, click the Public tab, and click the app from the list. Then, in the PII Restrictions section, disable the toggle.If your app is private, click the Private tab, and click the app from the list. Then, in the PII Restrictions section, disable the toggle. |
