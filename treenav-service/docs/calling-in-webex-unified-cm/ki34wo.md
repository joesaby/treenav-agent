---
title: "Auto-Provisioning of Webex App for Calling in Webex (Unified CM)"
product: "Calling in Webex (Unified CM)"
article_id: "ki34wo"
url: "https://help.webex.com/en-us/article/ki34wo/Auto-Provisioning-of-Webex-App-for-Calling-in-Webex-Unified-CM"
last_updated: "2025-10-29"
description: "Auto-Provisioning of Webex App for Calling in Webex (Unified CM)"
tags: ["calling-in-webex-(unified-cm)"]
source: "help.webex.com"
---

# Auto-Provisioning of Webex App for Calling in Webex (Unified CM)

## Overview of Auto-Provisioning of Webex App

The auto-provisioning feature in Control Hub allows the users to self-provision the devices for Calling in Webex (Unified CM) with zero or minimal intervention. This feature avoids over-provisioning of multiple devices in Unified CM that helps to minimize the impact on cluster scaling and licensing usage. Devices are auto created in Unified CM, when a user provisioned for Calling in Webex (Unified CM) signs in with their registered email address or User ID to Webex App.

Administrators don't need to go to Unified CM to pre-provision any of the Webex App devices for users in their organization. When the user signs in to the Webex App with any device for the first time, and if the device isn’t already available in the Unified CM server, the new device type is auto created for the user. 

This feature allows auto-provisioning of following devices types in Unified CM for the users when they sign into Webex App from various device platforms:

- Android Device (BOT)
- Chromebook/iPad Devices (TAB)
- Windows/MAC Devices (CSF)
- iPhone Device (TCT)

After the deletion of a device, it is recommended that you wait for 5-10 minutes before you auto-provision a device of the same type. Also, you can reset the device from Webex App before you auto-provision it again (Go to Help > Health Checker and click the Reset button.)

## Prerequisite

Before you plan to allow auto-provision of Webex App for the users, make sure that you meet the following requirements:

- Activate Cloud-Connected UC and set up the on-premises devices in your organization to communicate with the Control Hub. For more information, see [Set Up Cloud-Connected UC for On-Premises Devices](https://help.webex.com/en-us/nzt6c0b/Set-Up-Webex-Cloud-Connected-UC-for-On-Premises-Devices).
- Assign the Register to Unified Communications Manager license to the user account in Control Hub.  
Do not assign a Webex Calling license unless the user is using Webex Calling services. Otherwise, the Webex app will register to Webex Calling instead of Unified CM.
- Cisco Unified Communications Manager clusters should be version 11.5 or above. See the supported Unified CM version for Calling in Webex (Unified CM) at [Deployment Guide for Calling in Webex (Unified CM)](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/wbxt/ucmcalling/unified-cm-wbx-teams-deployment-guide/unified-cm-wbx-teams-deployment-guide%5Fchapter%5F011.html#id%5F107859).
- The minimum supported Webex App version is 41.12 and higher.
- The minimum supported Cisco Expressway Release version is X14.0.2\. If the Expressway version is below the recommended version, Expressway should add the following URLs manually to the Allow List to allow external clients (Cisco Jabber or Webex App) to access the Unified Communications nodes discovered having MRA configuration:

  - **POST**: `https://{{cucmip}}:8443/devicemanagement/v1/clientAutoProv/createDevice`
  - **GET**: `https://{{cucmip}}:8443/ucmservices/v1/supportedServices`
- Ensure that the User ID or email ID of Unified CM users matches with the User ID of the user records entity in Webex Identity Service. Also, the users configured in the Unified CM server should be available in the organizations’ Webex Identity Service.

[Activate Auto-provisioning Service](#task%5FCBF5405190FBC9550951B1697AB1DCBF)

You need to activate Webex app Provisioning for Unified CM Calling service in Webex Cloud-Connected UC to allow the auto-provisioning of the Webex App for Unified CM calling. This service should be activated for at least one of the Unified CM clusters so that the auto-provisioning feature settings are visible in Webex Control Hub, under Calling > Client Settings > Unified CM Settings > Allow auto-provisioning for Webex).

| 1 | From the customer view in Control Hub, go to Services > Connected UC. On the UC Management card, click Inventory. The list of cluster groups with the description, status, clusters, and nodes appear.                     |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Details next to the cluster group to which the node belongs. The Inventory page appears, showing the list of clusters belonging to the selected cluster group.                                                       |
| 3 | Click Details next to the cluster to which the Unified CM node belongs. The Node name with the version, product, and status appears.                                                                                       |
| 4 | Click the ellipsis ⋮ icon next to Event History and choose Service Management. The Service Management page appears with the list of services.                                                                              |
| 5 | Use the toggle button to enable the Webex app Provisioning for Unified CM Calling service.                                                                                                                                 |
| 6 | Click Submit.                                                                                                                                                                                                              |
| 7 | Agree to the Data Collection Confirmation policy and click Submit to activate the service. If you already agreed to the policy as part of any other Webex Cloud-Connected UC feature activation, this banner won’t appear. |

[Enable or Disable Auto-provisioning for Webex App](#task%5FB15F9EB74AE83A3227E22953C86C5AD3)

This feature lets you to enable or disable the auto-provisioning of Webex app devices for Calling in Webex (Unified CM) at the organization level. By default, this option is disabled even if the Cisco Webex app provisioning for Unified CM calling service is turned on for provisioning.

| 1 | From the customer view in Control Hub (https://admin.webex.com), go to Services > Calling > Client Settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Unified CM Settings, use the toggle button to enable the Allow auto-provisioning for Webex feature. Here, the feature is enabled for automatic device provisioning when a Unified Communications Manager user signs in with their registered User ID or email address.                                                                                                                                                                                                                                                                                                                                   |
| 3 | Define the policy to determine which devices are allowed for Auto-provisioning. Choose from an option: Desktop and mobile Desktop only Mobile only You can configure auto-provisioning Webex app for users on desktop, mobile, or both. You can also change this setting at the user level for specific users in Control Hub. For user level settings, see [Modify Auto-provisioning Settings for Webex App for a Single User](#task%5FFB767BEA3E3DDC825B0185B6DADE6EBE). The user level settings take priority over the organization’s default level settings for the auto-provisioning of Webex app feature. |

Modify Auto-provisioning Settings for Webex App for a Single User

### Modify Auto-provisioning Settings for Webex App for a Single User

You can customize the auto provisioning settings for Webex app devices for an individual user in a cluster.

Assign the Register to Unified Communications Manager license to the user account in Control Hub.

| 1 | From the customer view in https://admin.webex.com, go to Management > Users.                                                                                                                                                                                                                                                         |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Select the user to modify and click Calling.                                                                                                                                                                                                                                                                                         |
| 3 | Under Unified Communications Manager settings, use the toggle button to decide whether you want to enable or disable the Allow auto-provisioning for Webex feature for this user.                                                                                                                                                    |
| 4 | Select the allowed device option from the drop-down list. You can choose one of these: Desktop only or Mobile only or both.                                                                                                                                                                                                          |
| 5 | On Unified CM Administration page, check if the user has a Primary Extension associated. If the user does not have a Primary Extension and any device associated, add a Primary Extension to the user. Go to User Management > User/Phone Add > Quick User/Phone Add. Find the user and add an extension in the Extensions settings. |

[Delete Inactive Auto-provisioned Devices for Webex App](#task%5F6C858DED06F026B426E2FE11D5B757EB)

You can set the period to delete the inactive auto-provisioned devices in your Unified CM clusters. This option reduces administration overhead to delete auto created devices. 

Auto cleanup and deletion of auto-provisioned devices is supported from Unified CM Release version 12.5 or above.

Only devices that are auto created is deleted. 

| 1 | From the customer view in Control Hub (https://admin.webex.com), go to Services > Calling > Client Settings.  Under Unified CM Settings, use the toggle button to enable the Allow auto-provisioning for Webex feature. |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | To set a deletion period, select Delete after and enter the number of days after which the inactive device (devices which are not in the registered state) can be deleted from the Unified CM cluster.                  |
| 3 | If you don’t wish to delete any inactive devices, select Don't delete inactive devices.                                                                                                                                 |

[Set Expiration Timer for OAuth Refresh Token](#task%5FBE050C5C502079BA0FA8ED0AE07FB9CA)

You can configure the new OAuth refresh token expiry timer in days for client applications. Refresh tokens issued after the change uses the new expiry timer and previously issued refresh tokens cease to be valid, which will force all clients applications using old refresh token to re-authenticate. Else, you need to re-authenticate for a new token when this timer expires for all the users.

| 1 | To set the expiration timer, sign into Control Hub, click Services > Calling > Client Settings and then go to Unified CM Settings.                                                                                                                                                                                                                                                               |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Enter the number of days in Expiration timer for OAuth refresh token to set the expiration timer. Allowed range is from 1-1825 days. Default value is 60. Updates to this field take effect immediately. After changing the expiry timer setting initially from Control Hub, you can change this setting again at the individual cluster level. The cluster-level settings always take priority. |

[Device Type and Template Settings](#reference%5F172433142EE94B0AC642218DBC97CE41)

Following table lists the scenarios and the template settings used when a new device is created.

| Scenarios                                                           | Existing Devices    | Settings Used for New Device                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| User logs in for the first time from a new mobile or desktop device | No device available | **Device Settings**—User profile device template is used in the following order of preference. Mobile and desktop Universal Device Template (UDT) Cisco IP Phone (desk phone) UDT Auto-registration template (system defined) of the cluster is used, if UDT isn't available. Device creation fails if none of the above 3 options are available. **Phone Button Template**—Standard Model Specific Template |
| User logs in for the first time from a new mobile or desktop device | Any device          | **Device Settings**—Users' existing device settings is used for the new device in the following order of preference: Mobile, Desktop, or Cisco IP Phone. **Phone Button Template**—Standard Model Specific Phone Button Template                                                                                                                                                                             |

### Phone Security Data for New Devices Provisioned

Based on the old phone security profile, the new phone chooses one of these new profiles for a newly created device.

| Old Security Profile Settings                         | New Mapped Profile Name                               |
| ----------------------------------------------------- | ----------------------------------------------------- |
| Universal Security Profile (model independent)        | Universal Security Profile (model independent)        |
| Standard Model Specific Security Profile              | Standard New Model Specific Security Profile          |
| Custom Model Specific Security Profile                | Standard New Model Specific Security Profile          |
| Custom Universal Security Profile (model independent) | Custom Universal Security Profile (model independent) |
