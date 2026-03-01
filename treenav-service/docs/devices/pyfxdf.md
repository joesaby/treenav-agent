---
title: "Device configurations for Board, Desk, and Room Series devices"
product: "Devices"
article_id: "pyfxdf"
url: "https://help.webex.com/en-us/article/pyfxdf/Configuration-templates-for-Webex-devices"
last_updated: "2026-01-30"
description: "To set up certain features, you need to access the device’s configurations. You
can access them either directly from Control Hub or use the device web
interface."
tags: ["devices"]
source: "help.webex.com"
---

# Device configurations for Board, Desk, and Room Series devices

## Introduction

Configurations are set in a hierarchical manner. You can set configurations on organizational level, location level, or on device level, either individually or in bulk. The location level configurations override organization level configurations. Device level configurations override both location and organization level configurations.

For a configuration to be applied, the device needs to be online. If the device is offline, the configuration is applied the next time that the device comes online. In the configurations overview in Control Hub, the configuration shows up as pending until it is applied. It can take a few minutes from the configuration is set until it is applied. If a large number of devices are configured at the same time, it can take up to 6 hours for these to be applied.

### Control Hub

You can access a subset of device configurations for individual or multiple Board, Desk, and Room Series devices directly from Control Hub. To configure multiple devices, you can use configuration templates or set default configurations for the entire organization or location. With default configurations, all devices you add later on get the same set of configurations automatically.

Setting default configurations for the entire organization or location is also supported for Desk Phone 9800 Series.

You have read access to the configurations that can't be changed from Control Hub.

You can configure all the devices in your organization that are running RoomOS or are linked with Webex Edge for Devices. Configurations can be changed no matter the state the devices are in, and the changes will be applied when the devices come online.

In Control Hub, you can see the changes that are made to configurations in the [device's history](https://help.webex.com/jhkg7ab/). On the configuration page for the individual device, you can see the values that have been changed from the default values.

### Device web interface

You can access all the configurations and see all the status parameters from the device web interface. In addition, you can choose predefined device configurations, such as briefing room and presenter tracking. You’re also presented with a range of tools for integrators, such as the UI Extensions Editor and Macro Editor. 

### Devices linked with Webex Edge for Devices

For devices linked with Webex Edge for Devices running CE9.15.3 and later, you can have read and write access to the device configurations from Control Hub. To enable write access for Webex Edge for Devices, go to Devices \> Settings \> Webex Edge for Devices and toggle on Allow Control Hub to manage configurations.

When you allow configuration management from Control Hub, the device ignores configurations from the provisioning system, such as Customization Provisioning settings (macros and branding). This doesn’t apply to configurations that aren’t available from Control Hub, such as network and calling configurations. If you disable configuration management from Control Hub and the configuration control mode is set to Unified CM, configurations are set back to reflect changes made from the provisioning system. To read more about configuration control mode, see [Feature Configuration Guide for Unified CM](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/admin/12%5F5%5F1SU1/cucm%5Fb%5Ffeature-configuration-guide-for-cisco1251SU1/cucm%5Fb%5Ffeature-configuration-guide-for-cisco1251SU1%5Fchapter%5F01001110.html).

Read access is also available without allowing Control Hub to manage configurations.

### Requirements

- You need access to Control Hub.
- The device must be in the same organization as Control Hub.
- For the device web interface, you need IP connectivity to the devices, which normally means that you have to be on the same network.

### Limitations

- You can't access the device web interface from Control Hub if you’re using Internet Explorer.

### Troubleshooting

If a configuration fails to get applied to a device, try the following:

- Check that the device is online.
- Check the configuration value on local device web interface.
- Try to reboot the device.
- Try to set a new configuration value and see if it applies.

For information on configuring Desk Phone 9800 Series, see the [Configure phones in Control Hub](https://help.webex.com/n72q8yeb/) article.

## Configure individual devices

| 1 | From the customer view on <https://admin.webex.com>, go to Devices and select the device you wish to configure.                                                                                                                                                                                                                                                                                                                             |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Configurations and select All Configurations. You can either search for the configurations you want to change or navigate to them. Use the Default toggle if you don't want to set specific value for the configuration. It will then follow the default value for the device, and automatically change if the default changes in a future software update.                                                                           |
| 3 | Once you have selected or written the value that you wish to set, select Next. The Review configurations section shows all configuration changes you have made. Each entry shows both the old and the new value for a changed configuration. Configurations that could not be changed, for example because of problems on the server side, appear in red. You can edit or delete the changes. Select Apply to save the changes you've made. |

## Configure multiple devices

Bulk device configurations allows you to change configurations on multiple Board, Desk, and Room Series devices at once.

| 1 | From the customer view in [admin.webex.com](https://admin.webex.com), go to Devices. Select the devices that you want to configure from the devices list.                                                                                                                                                                                                                                                                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Edit Devices. Then select Device Configurations from the right-hand menu.                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3 | In the bulk configuration wizard, you can either search for configurations or browse in the list. If you search, you can select from the results to go straight to the specific configuration. If you’re browsing the list, click the configuration to see the parameters. In the configuration list, you can see all the configurations that are available for all the devices you selected. Hover over Products to see which devices the configuration or value range applies to. |
| 4 | Use either the drop-down list, slider, or input field to change the parameters. If the devices you have selected have different value ranges, you see them as separate instances. To go back on the change you just made, click Clear. If you want to revert to the default value, toggle on Default.                                                                                                                                                                               |
| 5 | When you’ve set all the configurations that you want to change, select Next in the bottom-right corner.                                                                                                                                                                                                                                                                                                                                                                             |
| 6 | You can review the changes and select Apply to confirm the changes you’ve made. On the review page, you can also delete or edit changes. To delete changes, select the delete icon. To edit, select the pen icon. Edit the configuration and click next to get back to the review page.                                                                                                                                                                                             |
| 7 | After you’ve applied the changes, you can see all the changes you’ve made. You can see the changed configurations in the Admin Activity list. Go to Troubleshooting and click Admin. Select the entry from the list to review the changes. You can save the configurations you've applied as a configuration template to use it later on. To do this, click Save as New Template.                                                                                                   |

## Configuration templates

With configuration templates you can create, save, export as a CSV file, and apply templates to individual or multiple devices. 

Using configuration templates saves you time on configuring devices. You can write a description when you create the template. All the templates you've created are available on Control Hub and you can apply, edit, and copy them later on. 

**Limitations**

- Applying a template is a one time operation. If you edit a template, the configurations on the device it's applied to will not change. You must apply it to the device again for the configurations to be updated.
- Possible performance issues when applying a template to many devices at once and when applying templates with many configurations.
- Available for cloud registered devices and devices connected with Edge for Devices with Control Hub managed configurations enabled running RoomOS 11.1 or later.

[Create templates](#Cisco%5FTask.dita%5F5c3d23a5-d4b3-465f-9ee3-fe609b001d9b)

| 1 | From the customer view on <https://admin.webex.com>, go to Devices and select Templates. Click Create template.                                                                                                                                                                                                                                                                                                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Give the template a unique name. You can also add a description of the template. After this, click Next.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3 | Add the configuration that you want in the template. After you’ve added all the configurations that you need, click next and review the changes. You can also edit and remove configurations from this page. If there are any errors, you get notified of them on this page. Click Create to create and save the template. You can download the template as a CSV file. If you're applying configurations on multiple devices, you get an option to save the configurations as new template you can use at a later date. |

[Apply templates](#Cisco%5FTask.dita%5Fd08ea382-e100-4abb-87da-50bf62727953)

After you have created templates, those are saved to Control Hub and you can apply them to devices.

| 1 | From the customer view on <https://admin.webex.com>, go to Devices and select the device or devices you wish to configure.                                                   |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | For multiple devices, click Edit and select Configuration templates from the right-hand menu. For an individual device, select Configuration templates from the device page. |
| 3 | Select the template that you want to apply from the drop-down list and click Next. Review the changes and click Apply to apply the configurations.                           |

[Edit or delete templates](#Cisco%5FTask.dita%5F218aeeeb-d9aa-4865-b49b-0d264f0e620c)

You can go back and edit the templates that you have created. You can also delete the ones you no longer need. 

| 1 | From the customer view on <https://admin.webex.com>, go to Devices and select Templates. Select the template that you want to change.                                                                                             |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Actions and select either Edit or Delete. Editing the templates follows the same process that you used to create them. When you have edited a template, you must apply it again for the changes to take effect on a device. |

## Default configuration for organization or location

For Cisco collaboration devices, you can set configuration defaults for the whole organization, or for an individual [location](https://help.webex.com/ajh6iy/). These configurations are applied automatically to all devices that are enrolled in an organization, or set to a specific location. This helps you to manage configuration consistency across devices. When default configurations are applied, you can still configure an individual device or a set of devices if needed.

**Access**

Full administrator: You can access organization and location level configuration defaults from Devices \> Settings \> Configurations defaults.

Location administrator: You can access location level configuration defaults under Location \> Specific Location \> Devices configuration module.

**Existing Webex registered devices**

All configurations set on devices, either with templates or device level, have to be changed to default value if you want to apply organization or location defaults to them. You can create configuration templates where you select _default_ as the value and apply to the devices you want to target. After that the devices pick up the default configuration values you have chosen.

**New devices**

When you add new Webex registered devices, these devices get the organization and location configuration defaults apart from the configurations set during installation. Configurations that are applied during installation are device level configurations and they override default configurations. 

When you link a new device with Edge for Devices, that device keeps the configurations that have been set by the management system. Those are interpreted as device level settings. If you want devices that are linked with Edge for Devices to use organization or location configuration defaults, you must set all the configurations to default settings before you link them. 

Supported devices: 

- Room, Boards, and Desk Series devices
- Desk Phone 9800

- If one of your devices doesn't support a specific value, you can't select that value on the organization or location level, even if all other devices support that value. This limitation also applies if one of the devices is running a software version that doesn't support a selected value. This doesn't impact configuring individual or multiple device, or configuration templates.
- Configurations set on location and device levels override organization level device configurations.

| 1 | From the customer view on <https://admin.webex.com>, go to Devices. Select Settings and open the Configuration Defaults tab. If you're a location administrator, go to Location \> Specific Location \> Devices configuration module.                                                                                                                                                                                              |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select: Open org-wide defaults and select Add configurations. Set defaults on location and select a location from the drop-down list. Then select Next.                                                                                                                                                                                                                                                                            |
| 3 | You can either search for the configurations you want to change or navigate to them. Use the Default toggle if you don't want to set a specific value for the configuration. It will then follow the default value for the device, and automatically change if the default changes in a future software update.                                                                                                                    |
| 4 | Once you have selected or written the value that you wish to set, select Next. The Review changes section shows all configuration changes you have made. Each entry shows both the old and the new value for a changed configuration. Configurations that could not be changed, for example because of problems on the server side, appear in red. You can edit the changes. Select Apply changes to save the changes you've made. |

## Sign in to the device web interface with Webex credentials 

Using Webex credentials to sign in to a device’s web interface allows users to sign in to a local device directly, without being signed in through Control Hub. 

Signing in with Webex credentials is available for:

- **Full administrators:** Access to all devices in the organization.
- **Device administrators:** Access to all devices in the organization.
- **Location administrators:** Access to devices in their location.
- Users in the organization that have been added to the access list for a specific device. The level of access to the device is defined by the role that the user has been granted.

By using Webex credentials, access management becomes more secure and streamlined. It also enables more granular access management for devices, and you can manage local user’s access directly from Control Hub.

This is particularly useful for:

- **Local administrators** who need device access.
- **Temporary access** for users within the Webex organization.
- **External users** from other organizations.
- **On-site technicians** setting up a device or performing maintenance.

Signing in with Webex credentials only works for the device web interface. It does not provide access to the device through other entry points such as SSH or WebSocket. 

### User access and roles

Anyone with full administrator, device administrator, or location administrator privileges can log in using their existing Webex sign-in flow without any configuration on the device. They automatically have the role **Admin**. 

Assigning a user role determines the level of access the user has to the device, including restrictions on device web interface configurations.

- **Admin:** Unrestricted access to the device's local web interface. Create and manage users with the _Integrator_ and _RoomControl_ roles on the device’s web interface. The user cannot upload audit certificates and change the security audit settings.
- **Audit:** A user with this role can change the security audit settings and upload audit certificates.
- **RoomControl:** Access the In-Room Control editor and corresponding development tools on the web interface, to create touch interface extensions (in-room controls).
- **Integrator:** A user with this role has access to settings, commands and statuses that are required to set up advanced AV scenarios, and to integrate our devices with third-party equipment. Such a user can also create customized UI panels.
- **User:** Make calls and search the People lists. Modify a few settings, for example adjust the ringtone volume and set the time and date format.

Once a user has been added to the **Access List**, they can log in with their **Webex credentials** and access the device with the assigned role.

### Add users to a device’s access list

With full administrator or device administrator credentials, you can add users to a device's access list. The user that you want to add must be in the organization or you must [add them to the organization](https://help.webex.com/v71ztb/). 

You can assign users access to the device web interface with Webex credentials in Control Hub. Go to the Devices page and select the device. On the device details page, go to Support \> User access and select Manage.

On the Manage access to Local Device Controls page, enter the user's full e-mail and select them from the drop-down list that appears. Then select the roles that you want to grant them, and click Add. 

If the user already has access, such as a device administrator, it’s indicated as Already added.

Select Copy access info to share the device information with the user you have added. 

You can edit the roles that the user has access to from the same page by expanding the user category and selecting the roles drop-down menu. 

If you need to remove a user from the device’s access list, you can do that on the Manage access to Local Device Controls page. You can either select to remove all users that have been granted access in a category of user, such as _Internal users_. Or you can expand a user category and remove individual users.

## Device web interface

You can access the device web interface through the Control Hub or directly from the device. When accessing through Control Hub, a temporary local user, _Webex Admin_, is created. 

**Access the web interface directly:**

Anyone with full administrator, device administrator, or location administrator privileges can log in using their Webex credentials to sign-in to devices in their organization without any configuration on the device. 

If you’ve have been given access to the specific device, either as a location administrator or other user role, you can use your Webex credentials to sign in from the device web interface log in page. You’re access level depends on the role that has been assigned to you.

In a browser, go to the device web interface log in page: _http(s)://<device ip or hostname>._ Select Sign in with Webex and you’re redirected to the Webex sign in flow. If SSO is enabled, it’s integrated into the sign in process. 

Once authenticated and granted access, you’re redirected to the device’s local web interface, signed in as your Webex user. 

For details on the different rolaes and access levels, see the [Sign in to the device web interface with Webex credentials section](#reference-template%5F0e2bb299-d820-4c60-8e32-6e960fe9c481) in this article.

The other option is to create an _Admin_, _Integrator_, _RoomControl_, or _User_ user on the device as described in the [Local user administration](https://help.webex.com/jkhs20/) article. Then, you can access the device web interface directly by opening a web browser and typing in _http(s)://<endpoint ip or hostname>_.

**Access the web interface through Control Hub:**

| 1 | From the customer view in [https:/​/​admin.webex.com](https://admin.webex.com), go to the Devices page, and select your device in the list.                                                      |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Go to Support and click Local device controls.                                                                                                                                                   |
| 3 | A new web browser window opens at _http(s)://<endpoint ip or hostname>_. If the authentication process, which involves both the Control Hub and the device, is successful, a web session starts. |
| 4 | On the device web interface, you find the Configurations and Statuses tabs on the Settings page.                                                                                                 |

## Available configurations

You can find the configurations that are available for your device in the _Administrator guide_ for the on-premises version of your device or on <https://roomos.cisco.com/>. 

Some of the configurations only apply to on-premises registered devices and devices linked with Webex Edge for Devices. Among the nonapplicable configurations for Webex registered devise, are all those related to H.323, H.320, SIP, NTP, CUCM, LDAP, Proximity, and Far End Camera Control.

To find the _Administrator Guides_, go to the series documentation page and navigate to Maintain and Operate Guides. Select the latest version that's available for your product. Some of the features that are described in these guides are not available for Cisco Webex registered devices.

- Board Series <https://www.cisco.com/go/board-docs>
- Desk Series: <https://www.cisco.com/go/desk-docs>
- Room series: <https://www.cisco.com/go/roomkit-docs>

To read more about the individual configurations for the Webex Room Phone, see the [Add features to a Room Phone article](https://help.webex.com/en-US/article/nz3l3sm/Add-Features-to-Webex-Room-Phone).

### Webex registered devices

The following configurations are not available directly from Control Hub for Webex registered devices:

- Network
- Experimental
- H323
- Phonebook
- Provisioning
- Conference DefaultCall Protocol
- Conference Encryption Mode
- UserManagement
- Proximity
- NetworkServices
- RTP
- SystemUnit CrashReporting
- SIP

### Webex Edge for Devices linked devices

When you enable Control Hub to be owner of the configuration, the device stops accepting input from Unified CM for the following configurations:

- Audio DefaultVolume
- CallHistory Mode
- Conference AutoAnswer Mode/Delay
- Conference FarEndControl Mode
- Conference MaxTotalTransmitCallrate
- Conference MaxTotalReceiveCallrate
- Conference MicUnmuteOnDisconnect
- Conference Multipoint Mode
- FacilityService
- NetworkServices Http Mode
- NetworkServices Smtp
- NetworkServices Ssh Mode
- NetworkServices Telnet Mode
- NetworkServices Wifi Allowed
- Serialport Mode/Login
- Standby Control/Delay/Action
- SystemUnit Name
- Time TimeFormat /DateFormat
- UserInterface Accessibility IncomingCallNotification
- UserInterface CustomMessage
- UserInterface Features Call JoinWebex
- UserInterface SettingsMenu Mode
- UserManagement LDAP

The following configurations are set from Unified CM and are read-only from Control Hub:

- NetworkServices Http Proxy
- NetworkServices H323
- NetworkServices Https
- NetworkServices Snmp
- NetworkServices Ssh HostKeyAlgorithm
- NetworkServices Upnp
- NetworkServices Wifi
- SystemUnit CrashReporting
- Conference DefaultCall Protocol
- Conference Encryption Mode
- Phonebook
