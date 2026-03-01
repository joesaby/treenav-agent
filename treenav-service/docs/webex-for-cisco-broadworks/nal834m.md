---
title: "Known Issues and Solutions for Webex with Cisco BroadWorks"
product: "Webex for Cisco BroadWorks"
article_id: "nal834m"
url: "https://help.webex.com/en-us/article/nal834m/Known-Issues-with-Webex-for-Cisco-BroadWorks"
last_updated: "2025-02-11"
description: "Stay informed about known issues and solutions for Webex integration with Cisco
BroadWorks. This guide provides insights into common issues, troubleshooting
tips, and recommended solutions to enhance your Webex experience."
tags: ["webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# Known Issues and Solutions for Webex with Cisco BroadWorks

Here you can read about known issues that we've identified in the Webex for Cisco BroadWorks solution. Click each of the tabs to read about issues that apply for each of those headings.

For an additional list of user-facing issues that affect Webex users, see [Webex | Known Issues](https://help.webex.com/en-us/bsmvpdb/Webex-Known-Issues#concept%5FAEFAAB7CE0FA19BA7716A4CA4720EDD8).

- [Calling](#Cisco%5FConcept.dita%5Fc75a4d26-520a-477f-801a-e2c69774e859)
- [Clients](#Cisco%5FConcept.dita%5Ff8d7331a-e48d-4130-9738-21cafdc1ee00)
- [Network](#Cisco%5FConcept.dita%5F66eb67f3-8459-40ea-b9c2-1fdeda353064)
- [Webex Services](#Cisco%5FConcept.dita%5F6e1398ba-8b17-482d-9b63-f5459d1c735a)

## Call History Must be Stored in E.164 Format

**Problem Statement**: In some scenarios, Call History can show a contact's email address instead of the phone number. If this occurs, you can not return the call directly from Call History as the Webex app tries to dial the email address instead of the number.

**Mitigation Statement**: When storing a telephone number against any contact, whether it be an external CI contact, local Webex custom contact or a local phone contact, make sure that the stored number is in E.164 format (for example, +4420112323232 or +14085551111) as it will mitigate most cases.

## Unified Call History Issues when Deployed with Hunt Group or Call Center

When Unified Call History is deployed in Hunt Group or Call Center situations, the call logs display errors in the following two scenarios:

_Scenario A: Basic Hunt Group_

- User A and User B are part of a Hunt Group.
- User C calls the Hunt Group number.
- User A answers the call.

The following problems occur:

- When User A answers, the dialer momentarily displays the Hunt Group name.
- Call history logs for User A, show an incoming call from User C with no mention of the Hunt Group number.
- Call history logs for User C show an outgoing call to the Hunt Group number.

_Scenario B: Call Center Issue_

- User A and User B are agents in Call Center premium group.
- User C calls the Call Center.
- User A answers the call.

The following problems occur:

- When User A answers, the dialer momentarily shows the Hunt Group name.
- Call history logs for User A show an incoming call from User C with no mention of a Call Center call.
- Call history logs for User C show an outgoing call to the Call Center with no mention of User A.

## Softphone Users may not see Voicemail option

There is an issue affecting softphone only users whereby the Voicemail option may not display on the Webex App. This issue affects mobile users only.

## Branding—Client Displays Light Mode Logo while in Dark Mode

An issue exists with Dark Mode Branding customizations whereby the Light Mode logo displays while the user is operating in Dark Mode. 

## Double Email Prompt when Logging in to Webex Meetings Sites

When logging into a Webex Meetings site, users with BroadWorks authentication are prompted twice for their email address. This is a limitation of the Webex Meetings site. Other sites and clients should prompt only once.

## Users Unable to Launch Meetings from Webex App

Users with a + in their email address (for example, `firstname+lastname@gmail.com`) are unable to launch Webex Meetings from the Webex app. Android users see a 500000 error, while iOS users see a 102000 error that indicates Unable to launch or start the meeting.

This error occurs only when launching PMR meetings from the Webex app and where the user has a + in their email address. The error does not occur when launching meetings from the Webex Meetings app.

## Unable to start space with External Contacts on Mobile without adding external person as contact on Webex app

Webex mobile app users are unable to locate external contact email addresses for the purpose of starting chat sessions due to a difference in the UI between desktop and mobile clients. The blue text icon does not appear for searches on mobile clients.

## Softphone Users - Android Users unable to login to Multiple User IDs

Android Users cannot login with a different user profile if they have logged in previously as a Softphone user. The user would need to uninstall or reinstall to be able to sign-in as a new user.

This issue affects only power users on Android whom log into one device with multiple user IDs.

## Double Login Required for Android Users

An intermittent issue exists whereby an Android user signs in to the app via the User Activation Portal, they are returned to the Welcome to Webex sign-in page. After entering their credentials a second time, login succeeds.

**Workaround**:

1. Exit the Webex app fully.
2. On the Android device, go to Settings \> AppsWebex App \> Storage.
3. Clear Data & Clear Cache.
4. Restart the app and log in.

## Windows Client - Script Error Appears During Login when Do Not Save Encrypted Files to Disk' is Enabled

A script error appears if you run the Webex app on Windows and the Do Not Save Encrypted Files to Disk advanced security setting is enabled in Internet Explorer. This error occurs if the following conditions are true:

- Webex app is running on Windows (standalone version)
- User attempts to log in as a BroadWorks-authorized user
- In Internet Explorer, the Do Not Save Encrypted Files to Disk advanced security setting is enabled

**Workaound**

Disable the Do Not Save Encrypted Files to Disk setting in Internet Explorer:

1. In Internet Explorer, click the Tools icon and select Internet Options.
2. Click the Advanced tab.
3. Under Security, uncheck the Do Not Save Encrypted Files to Disk check box and click OK.

## Chat Option May Appear in User Searches by Calling-Only Users

When a user with no messaging capability conducts a global user search for a user who has messaging, the Chat icon appears alongside the search results despite the fact that the user who conducted the search does not have messaging.

## Phone Services Displays incorrect Account Information

Under Webex Options \> Phone Services, Webex for Cisco BroadWorks users may see incorrect phone services account information in the Webex App. The App may show that the user is signed in to Cisco Unified Communications Manager rather than BroadWorks.

## Call Push Notifications V1 No Longer Supported

As of version 41.7 of the Webex App V1 Push Notification registrations are no longer supported—you must upgrade to V2 Push Notifications. If you need to upgrade, make sure that you have the following BroadWorks patches installed: 

| For BroadWorks Version... | Install these BroadWorks patches...                                            |
| ------------------------- | ------------------------------------------------------------------------------ |
| R21sp1                    | AP.as.21.sp1.551.ap373276 AP.xsp.21.sp1.551.ap373276 AP.as.21.sp1.551.ap374793 |
| R21sp9                    | AP.xsp.21.sp9.ap373770                                                         |
| R22                       | AP.as.22.0.1123.ap372963 AP.xsp.22.0.1123.ap372963 AP.as.22.0.1123.ap374793    |
| R23                       | AP.as.23.0.1075.ap373271 AP.xsp.23.0.1075.ap373271                             |
| R24                       | No specific patches required                                                   |

After you patch your system, activate feature 22680 with the following CLI command: 

`AS_CLI/system/activatablefeature> activate 22680`

## Disable Video Calling still shows Video Calls

Even if you disable video calling, when you place a call via the dial pad, the call will be a video call by default. This issue is expected to be resolved with release 41.11 of the Webex App.

## Transfer Button Does Not Work on Webex App v41.10

The Transfer button fails intermittently for users on version 41.10 of the Webex App. This issue is expected to be fixed with version 41.11\. Users are recommended to upgrade to the newer version once it's available.

## Emails to Users Onboarding via Untrusted Email Flow are Filtered to Spam

**Problem**—Depending on the user’s email settings, the use of untrusted emails may result in the email getting sent to the user’s Junk or SPAM folder. 

**Workaround**—The administrator may have to change the user’s email settings to allow domains.

## Webex for VDI Media Blocked if Thin Client is Behind a NAT

**Problem**—If you deploy a Virtual Desktop Infrastructure (VDI) environment, and the remote thin client is located behind a NAT, call media may be blocked. When you deploy Webex for VDI in this setup, the Session Border Controller (SBC) for the Data Center where the hosted virtual desktop (HVD) is located does not know the public IP address of the remote thin client, and cannot include the IP address for call media within its SIP signaling. As a result, the SBC may block call media.

**Workaround**—Configure SBCs for Broadworks to allow call media from an IP address that is not present in the SIP signaling.

## PMR Details Not Updating When a User License is Removed

**Problem:**

If a user is provisioned with a Standard or Premium package and subsequently has their package changed, their PMR details may display incorrectly on the Webex app. For example, if a user is provisioned with a Standard package and upgraded to a Premium package or vice versa.

**Workaround**

- Administrators should provision users first to the Basic package before updating the package to the desired package. Following this process during provisioning will reduce the frequency of the issue.
- Additionally, users can enter the PMR details on the Webex app manually.

## Intermittent Issues with Presentation Sharing

Users are experiencing intermittent issues with the Presentation Sharing feature when used between two BroadWorks users. This is due to user ID resolution issues.

## Directory Search Results Affected by 72 Hour Cache

The Webex app contains a cache of approximately 72 hours (plus or minus five hours). This cache can affect the results of directory searches after a user is updated:

- When a new user is synced, the user info is added to the cache and is searchable right away
- If a user is updated on the BroadWorks server, and then a sync occurs, the cache must expire before the results show in searches on the Webex app
- If a user is deleted on the BroadWorks server, and a sync occurs, the cache must expire before the user is removed from directory search
