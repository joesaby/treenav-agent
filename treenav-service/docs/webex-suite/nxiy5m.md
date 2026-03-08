---
title: "Deploy Webex for Intune with an Entra ID Conditional Access app protection policy requirement"
product: "Webex Suite"
article_id: "nxiy5m"
url: "https://help.webex.com/en-us/article/nxiy5m"
last_updated: "2025-05-01"
description: "This article describes the process to deploy Webex for Intune in organizations
using Entra ID with Conditional Access, where an app protection policy is
required to grant access."
tags: ["webex-suite"]
source: "help.webex.com"
---

# Deploy Webex for Intune with an Entra ID Conditional Access app protection policy requirement

## Overview

Webex supports [integration in a Mobile Device Management (MDM) environment](https://help.webex.com/xj3dmu/) that provisions users through Entra ID. However, if your organization [requires an app protection policy in Entra ID](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-grant#require-app-protection-policy), you might encounter challenges when deploying Webex on mobile devices due to policy restrictions on application access.

Typically, administrators define a separate application protection policy in Intune for each managed app in their IT portfolio.

To address these deployment issues, Webex App can use the Microsoft Edge browser to authenticate users, which fulfill Entra ID's [Conditional Access app protection policy](https://learn.microsoft.com/en-us/intune/intune-service/apps/apps-supported-intune-apps#microsoft-apps) requirement. This approach ensures compliance with organizational security standards.

To implement this solution:

1. Create an [application protection policy](https://learn.microsoft.com/en-us/intune/intune-service/apps/app-protection-policy) for Microsoft Edge that complies to the application protection policy of your company, if you haven't already.
2. Next, create Webex for Intune app [application configuration policies](https://help.webex.com/xj3dmu/#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fd94defb1-9ea0-4371-a595-2680558f474a) for iOS and Android that sets the parameter `DefaultBrowserSettingEnabled` to `true`. This ensures that Webex App uses Microsoft Edge when authenticating the application.
3. Finally, you need to [create an applictaion protection policy](https://help.webex.com/xj3dmu/#Cisco%5FTask.dita%5F5659a828-6f0c-433f-9385-9bd48a60846c) for Webex App for Intune that complies to the application policy of your company.

## Sign in to Webex for Intune on Android devices

Your administrator may restrict applications on managed devices to those that satisfy certain security and data protection policies. Follow this procedure to authenticate your Webex account on your managed device.

Before you begin

Make sure you have Microsoft Edge installed on your managed device and is the default browser.

| 1 | Open either Microsoft Company Portal or Microsoft Edge and sign in.                                                                                                     |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Exit the app and open Webex for Intune. Your device should prompt you to authenticate your account.                                                                     |
| 3 | Authenticate to confirm your identity and device compliance. Accept all permissions to complete your sign in.                                                           |
| 4 | In Webex for Intune, enter your email address, and press Next. Your device should open Edge again to authenticate your Webex account.                                   |
| 5 | Authenticate your account in Edge and press Sign in. Now that you’ve authenticated your account through Edge, you can freely use Webex for Intune without interruption. |

## Sign in to Webex for Intune on iOS devices

Follow these steps to sign in to Webex for Intune on a managed iOS device.

Before you begin

Make sure you have Microsoft Edge installed on your managed device and is the default browser.

| 1 | Open the Microsoft Authenticator app and sign in.                                                                                                                       |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Exit Microsoft Authenticator and open Webex for Intune. Your device should prompt you to authenticate your account.                                                     |
| 3 | Authenticate to confirm your identity and device compliance. Accept all permissions to complete your sign in.                                                           |
| 4 | In Webex for Intune, enter your email address, and press Next. Your device should open Edge again to authenticate your Webex account.                                   |
| 5 | Authenticate your account in Edge and press Sign in. Now that you’ve authenticated your account through Edge, you can freely use Webex for Intune without interruption. |
