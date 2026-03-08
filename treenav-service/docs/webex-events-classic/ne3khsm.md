---
title: "Webex App support policy"
product: "Webex Events (Classic)"
article_id: "ne3khsm"
url: "https://help.webex.com/en-us/article/ne3khsm"
last_updated: "2026-03-05"
description: "Webex App support policy provides a clear roadmap of scheduled releases and
supported app versions."
tags: ["webex-events-(classic)", "webex-meetings", "webex-webinars"]
source: "help.webex.com"
---

# Webex App support policy

- [Desktop](#reference-template%5F30e21154-75e8-4fe7-8371-b11a8906ccd8)
- [Mobile](#reference-template%5F77a44da3-fcae-4bac-ae78-9f2a90772f27)

Due to unforeseen circumstances, the planned End of Life (EOL) for version 45.5 has been rescheduled to Wednesday, March 11, 2026.

## Channels

The two channels available for Webex App desktop updates are:

- Latest (monthly releases)
- Slow (releases every 4 months)—This option is only available on request. If you want to request access to slow channel (cadence) for Webex App updates for your organization, contact your Cisco representative or Cisco support.

Deferral settings are available for both channels. For more information, see [Webex App desktop update controls](https://help.webex.com/article/wlgw73/).

## Schedule for releases

The latest channel version is released typically on the first Tuesday of each calendar month.

The slow channel version is released typically on the last Tuesday of the month. In 2026, slow channel releases will be in March (46.3), June (46.6) and October (46.10).

The releases roll out gradually over 7 days.

For security updates or significant bugs, a patch typically rolls out over three days.

## Versions supported

To ensure a high level of security and access to the latest features, Webex enforces a limited lifespan for its desktop clients. It mandates a new minimum version every four months.

**End of Support**

**End of Support** means that we’ll stop releasing patches for this version, and technical support teams will no longer support that version.

Webex App supports the latest two versions per channel (n and n-1). 

For example: 

- In September of a typical year, the Latest channel supports 4x.9 and 4x.8, and the Slow channel supports 4x.6 and 4x.2.
- In September 2026, the Latest channel will support 46.9 and 46.8, and the Slow channel will support 46.6 and 46.3, due to 2026's modified Slow Channel schedule.

Versions older than the minimum supported version will continue to function until they reach their End of Life date, typically 10 months after initial release. 

## Latest channel

We encourage all customers to stay on the latest release whenever possible. 

| **Version**    | **Release**    | **End of Life (Warning)** | **End of Life**   |
| -------------- | -------------- | ------------------------- | ----------------- |
| 46.3           | March 2026     | December 2026             | February 2027     |
| 46.2 (current) | February 2026  | November 2026             | December 2026     |
| 46.1           | January 2026   | October 2026              | November 2026     |
| 45\. 12        | December 2025  | September 2026            | October 2026      |
| 45.11          | November 2025  | August 2026               | September 2026    |
| 45.10          | October 2025   | July 2026                 | August 2026       |
| 45.9           | September 2025 | June 2026                 | July 2026         |
| 45.8           | August 2025    | May 2026                  | June 2026         |
| 45.7           | July 2025      | April 2026                | May 2026          |
| 45.6           | June 2025      | March 2026                | April 7, 2026     |
| 45.5           | May 2025       | February 2026             | March 3, 2026     |
| 45.4           | April 2025     | December 2025             | February 3, 2026  |
| 45.3           | March 2025     | December 2025             | February 3, 2026  |
| 45.2           | February 2025  | November 2025             | December 3, 2025  |
| 45.1           | January 2025   | October 2025              | November 4, 2025  |
| 44.12          | December 2024  | September 2025            | October 13, 2025  |
| 44.11          | November 2024  | August 2025               | September 3, 2025 |
| 44.10          | October 2024   | August 2025               | September 3, 2025 |
| 44.9           | September 2024 | June 2025                 | July 1, 2025      |
| 44.8           | August 2024    | May 2025                  | June 3, 2025      |
| 44.7           | July 2024      | April 2025                | May 7, 2025       |
| 44.6           | June 2024      | March 2025                | April 8, 2025     |

## Slow channel

| **Version**     | **Released** | **End of Life (Warning)** | **End of Life**   |
| --------------- | ------------ | ------------------------- | ----------------- |
| 46.3 (future)   | March 2026   | January 2027              | February 2027     |
| 45.10 (current) | October 2025 | July 2026                 | August 2026       |
| 45.4            | April 2025   | January 2026              | February 3, 2026  |
| 44.10           | October 2024 | August 2025               | September 3, 2025 |
| 44.6            | June 2024    | March 2025                | April 8, 2025     |

**End of Life** means that this version will be blocked from use, and technical support teams won’t support that version. 

- You'll be encouraged to update your app to the latest version approximately 30 days before the End of Life.
- If you attempt to use Webex App after the End of Life, you’ll see this prompt, and the app will become unusable. You’ll need to upgrade to a supported version before you can join meetings, make calls, send messages, or use other features.

## VDI environments

Webex App operating in VDI mode will not provide warnings or lock out users running unsupported versions. Administrators should ensure that the Webex App is consistently updated to a supported version.

Regularly updating the Webex App in VDI mode is crucial for maintaining security and optimizing the user experience.

## Schedule for releases

Webex App for mobile releases typically on the first Tuesday of each calendar month. The releases roll out gradually over 14 days.

Slow channel doesn’t apply to mobile apps. Use MDM solution to manage the versions on devices. For more information, see [here](https://help.webex.com/article/alsshfb/).

## Versions supported

Webex enforces a limited lifespan for its mobile clients to ensure a high level of security and access to the latest features.

- We recommend using the latest versions of the apps that are available on the iOS and Android app stores.
- If you are on a version of the app that’s more than six months old, you may be forced to sign out of the app.

## OS requirements

- **iPhone and iPad**  

  - We support the two latest major releases of iOS and iPadOS, visionOS and watchOS.  
  Webex App 45.9, scheduled for release in September 2025, will be the last version supporting iOS 16, iPadOS 16, visionOS 1.0, and watchOS 9.0\. Starting with Webex App 45.10 (October 2025 release), these operating systems wont't be supported.  
  Starting October 7, 2025, Webex App 45.10 and later versions will support the following operating systems:

    - iOS 17 and iPadOS 17 (and newer versions)
    - visionOS 2.0 and watchOS 10 (and newer versions)  
  The supported devices for these operating systems include:
    - [iOS 17 Supported iPhones](https://support.apple.com/en-gb/guide/iphone/iphe3fa5df43/17.0/ios/17.0)
    - [iPadOS 17 Supported iPads](https://support.apple.com/en-gb/guide/ipad/ipad213a25b2/17.0/ipados/17.0)
    - [watchOS 10 Supported Devices](https://support.apple.com/en-us/118490)
- **Android Smartphones**  

  - We support the five latest major releases of Google’s Android OS. We do not support any other versions of Android, like Android Go or Xiaomi HyperOS.  
  Webex App will not be supported on Android 10 from April 2025 since Google announced end of life for security support for Android 10 in March 2023\. Webex App 45.4 will be the last version supporting Android 10\.  
  Starting April 2026, Webex App will not be supported on Android 11\. Webex version 46.4 will be the last version supporting Android 11\.
  - Minimum memory requirement: 4 GB of RAM
  - Minimum memory recommended: 6 GB of RAM
- You won't get Webex App updates from the app store if you're using an unsupported OS. You may be signed out of the mobile app after six months. We encourage you to stay on the latest supported OS versions & Webex App versions.

## New OS releases

We aim to support the new OS from the day of release. Any limitations are included in the release notes.

We proactively monitor upcoming iOS and Android versions and validate Webex App for compatibility with OS beta releases. We make our best effort to address any blocking issues or incompatibilities discovered during testing.

**Example**: iOS 18 is planned to release in September 2024\. We validate the current version of Webex App (iOS) for compatibility with iOS 18 beta versions. If we discover blocking issues, they're fixed and released in an updated version of Webex App (iOS) before the iOS 18 GA release date. If there are no blocking issues, the current Webex App version is considered compatible with iOS 18.

Fixes are incorporated as per the Cisco support and maintenance policy.

Once a new OS version is officially released, we validate the latest version of Webex App on the newly released version of the OS. Any issues we discover are addressed as part of the next regular feature or maintenance Webex App release.

**Example**: iOS 18 released in September 2024\. Webex App for iOS is validated on iOS 18 GA version and designated as supporting iOS 18.

## End of Life enforcement schedule

We encourage all customers to stay on the latest release. 

| **Version**     | **Release**    | **End of Life**   |
| --------------- | -------------- | ----------------- |
| 45.12 (current) | \-             | \-                |
| 45.11           | \-             | \-                |
| 45.10           | October 2025   | May 1, 2026       |
| 45.9            | September 2025 | April 1, 2026     |
| 45.8            | August 2025    | March 1, 2026     |
| 45.7            | July 2025      | February 1, 2026  |
| 45.6            | June 2025      | January 5, 2026   |
| 45.5            | May 2025       | November 1, 2025  |
| 45.4            | April 2025     | October1, 2025    |
| 45.3            | March 2025     | September 1, 2025 |
| 45.2            | February 2025  | September 1, 2025 |
| 45.1            | January 2025   | August 1, 2025    |
| 44.12           | December 2024  | August 1, 2025    |
| 44.11           | November 2024  | August 1, 2025    |
| 44.10           | October 2024   | August 1, 2025    |
| 44.9            | September 2024 | July 1, 2025      |
| 44.8            | August 2024    | July 1, 2025      |
| 44.7            | July 2024      | July 1, 2025      |
| 44.6            | June 2024      | July 1, 2025      |
| 44.5            | May 2024       | July 1, 2025      |
| 44.4            | April 2024     | July 1, 2025      |
| 44.3            | March 2024     | February 1, 2025  |
| 44.2            | February 2024  | February 1, 2025  |
| 44.1            | January 2024   | February 1, 2025  |
| 43.12           | December 2023  | February 1, 2025  |
| 43.11           | November 2023  | February 1, 2025  |
| 43.10           | October 2023   | February 1, 2025  |

**End of Life** means that this version will be blocked from use, and technical support teams won’t support that version. 

## Webex App and Webex Meetings mobile app

Customers who migrate to the Webex Suite meeting platform joins meetings on the Webex App. However, customers not on the Webex Suite meeting platform will continue to use the Webex Meetings mobile app to join meetings or webinars.

Mobile users need [Webex Meetings app for iOS](https://apps.apple.com/us/app/webex-meetings/id298844386) or [Webex Meetings app for Android](https://play.google.com/store/apps/details?id=com.cisco.webex.meetings) to join webinars and to join meetings that aren't hosted on the Webex Suite meeting platform. Webex mobile app doesn't allow joining these.
