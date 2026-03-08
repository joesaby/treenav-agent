---
title: "Secure your Board, Desk, or Room Series devices with a user based PIN lock"
product: "uncategorized"
article_id: "nokp2m5"
url: "https://help.webex.com/en-us/article/nokp2m5"
last_updated: "2025-09-01"
description: "Enhance the security of all your devices, including hot desking stations, by
enabling user-based PIN locks. This ensures your data remains protected and your
notifications stay private and discreet."
source: "help.webex.com"
---

# Secure your Board, Desk, or Room Series devices with a user based PIN lock

## User-based PIN lock 

Users can securely log in to all their devices using a single PIN. This feature enables seamless access and supports locking hot desk devices in shared environments, ensuring convenience and security across multiple devices. 

Users can update their PIN codes either directly on their devices or through the user hub, providing flexible and convenient management of their access credentials. 

When this feature is enabled, all existing device-based PINs will be seamlessly migrated to user-based PINs, ensuring a smooth transition and consistent access across devices. Please refer to the section [Migrating from a device PIN to a user PIN](#section%5Fwjq%5Fcgp%5Fhgc) for more information.

## User PIN setup

There are three ways to set up a personal PIN code: 

1. When onboarding a personal device for the first time, the setup wizard will prompt the user to create a user PIN. If a user onboards a second device, they will not be prompted to create a new PIN. The existing user PIN will continue to be applicable and valid on the additional device, enabling consistent and streamlined access across all devices associated with the user.
2. When signing into a hot desk, if the screen lock policy is enforced by the administrator for either the organization or the hot desk device, the user will be prompted to create a PIN immediately after booking the desk. Once the user creates a PIN, the same PIN will be applicable and used across all devices associated with that user, ensuring consistent and seamless access.  
If the screen lock policy is enforced and a user chooses not to create a screen lock PIN, their booking will be cancelled. This enforcement ensures that users must set a PIN to continue using the device or service, maintaining security and compliance with the policy. Failure to create the required screen lock PIN results in cancellation of the booking to prevent unauthorized access.
3. Users can create or reset their user PIN through the User Hub at user.webex.com.  
Sign in to the User Hub ( user.webex.com)  
Navigate to Settings > Devices > Advanced options > Screen lock PIN and click **Create PIN**.

## Migrating from a device PIN to a user PIN 

A personal device with an existing device PIN will automatically migrate to a user PIN when the user either changes the screen lock PIN via the device’s PIN options menu or creates a user PIN through the User Hub or during the hot desk sign-in process.

In the initial release (September: 11.32.1.x), if a user has a PIN set for screen lock but the admin-enforced screen lock policy is not enabled, the user must manually enable the screen lock after signing into a hot desk. To do this, the user should open the status menu (top right corner), navigate to PIN options, and enable the screen lock.

Starting with the next monthly release (October: 11.33.1.x), if a user PIN is set, the screen lock will be enabled automatically by default when the user signs into a hot desk.

This update improves user privacy by ensuring screen lock activation without requiring manual steps when a PIN is configured.
