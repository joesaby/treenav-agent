---
title: "Manage Webex Go Device"
product: "Webex Calling"
article_id: "f88pdeb"
url: "https://help.webex.com/en-us/article/f88pdeb/Manage-Webex-Go-Device"
last_updated: "2024-08-31"
description: "Once a Webex Go device is provisioned, it shows up as a registered Webex Calling
device for the user and you can manage the provisioned Webex Go device."
tags: ["webex-calling", "webex-go"]
source: "help.webex.com"
---

# Manage Webex Go Device

[Generate New Activation Code](#Cisco%5FGeneric%5FTopic.dita%5F739cd409-70ab-4cbb-9f09-a644e5d891c2)

A new activation code can be generated for a user if the existing code doesn’t work, has expired or if the user did not receive the code. It can also be used when a user upgrades their device and wants to add Webex Go on the new phone. 

A new activation code can be generated only when the Webex Go device is in the **Pending Activation** state. Refer to [View Webex Go Device Status](https://help.webex.com/en-us/article/n1uwovt/) to check the device activation status. This can be achieved by the user by removing the Webex Go line from their mobile phone. Refer to [Remove Webex Go Line for Mobile Phone](https://help.webex.com/en-us/article/bcvge4/) for more information. Also, please note that the new code invalidates any previously generated activation code. 

To generate a new activation code:

1. Select the Webex Go device assigned to the user from the **Users** or **Devices** view.
2. Click **Actions** → **Generate new activation code**.

  1. You'll be presented with the new QR code, SM-DP+ address and activation code for Apple devices and network provider code for Android devices.
  2. The activation code along with instructions to enable the device will be emailed directly to the user.  
  The single use activation code expires after 90 days.  
   If organization settings are set to suppress emails, you have the option to copy, email, or print the alphanumeric activation code and send it to the user.

[Lost or Stolen Webex Go Device Support](#Cisco%5FGeneric%5FTopic.dita%5F11190a35-9102-467f-bdf9-aa256558bcd4)

When the mobile phone with Webex Go line is lost or stolen, the business line can be disabled on the lost phone, and new activation details can be generated to onboard Webex Go on the replacement device. 

1. Select the Webex Go device assigned to the user from the **Users** or **Devices** view.
2. Click **Actions** → **Lost/Stolen**.

  1. You'll be presented with the new QR code, SM-DP+ address and activation code for Apple devices and network provider code for Android devices.
  2. The activation code along with instructions to enable the device will be emailed directly to the user.  
  The single use activation code expires after 90 days.  
   If organization settings are set to suppress emails, you have the option to copy, email, or print the alphanumeric activation code and send it to the user.

[Delete Webex Go Device](#Cisco%5FGeneric%5FTopic.dita%5Ffee8437b-ca47-419f-abce-4725399806ad)

The Webex Go device assigned to the user can be deleted using the following steps:

- Select the Webex Go device assigned to the user from the **Users** or **Devices** view.
- Click **Actions** → **Delete**.

Once the device is deleted, the license entitlement will be added back to the available pool. From an end user standpoint, business calls can no longer be made or answered from the native dialer of the mobile phone. The user must, however, manually delete the deactivated Webex Go line on the mobile phone.

[](#Cisco%5FGeneric%5FTopic.dita%5F5949ba07-e414-4689-a2b8-18741c326ba7)

The status of the Webex Go device is available from the user view. 

**Known issue**: The Devices page will always indicate the status as _Status unavailable_.

| Status             | Description                                                                                                                                      | Indicator |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| Pending activation | Activation code has been generated but user has not enabled the service on the mobile phone User deleted an active service from the mobile phone | Grey      |
| Online             | User successfully activated Webex Go and enabled the service on the mobile phone                                                                 | Green     |
| Offline            | User disabled the service on the mobile phone                                                                                                    | Red       |

[Monitor Webex Go Call Volume](#Cisco%5FGeneric%5FTopic.dita%5F40647666-437c-4fe3-a4e1-32a6f3c3700f)

The **Calling Detailed Call History** report can be used to extract all call information and determine if the call was a Webex Go call. Webex Go calls will show up with **sub client type** set to **Mobile\_Network** in the report.
