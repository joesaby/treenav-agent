---
title: "Register a device to Cisco Webex using API or local web interface"
product: "Devices"
article_id: "n25jyr8"
url: "https://help.webex.com/en-us/article/n25jyr8/Register-a-Device-to-Cisco-Webex-Using-API-or-Local-Web-Interface"
last_updated: "2025-06-06"
description: "You can register a Cisco device to Cisco Webex remotely, so you don’t need to be
in the same room as the device. You can do this either through the API or the
local web interface, instead of using the on-screen setup assistant."
tags: ["devices"]
source: "help.webex.com"
---

# Register a device to Cisco Webex using API or local web interface

To register a device, you need to create an activation code in Control Hub first. To learn how to create an activation code, see [Add Shared Devices and Services to a Workspace ](https://help.webex.com/en-us/1mqb9cb/Add-Shared-Devices-to-a-Place#task%5F54A23541404783D5992FE25F72CFD1B0).

From the local web interface, you can only register a device that has not been previously registered. 

If the device has not been registered before or it has been factory reset, you must set up the time zone and language settings from the wizard. If the wizard times out, default settings will be applied. 

## Limitations 

Some of the configurations, commands, and statuses that are available in the API only apply to on-premises registered devices. They don’t apply to Webex registered devices. In the [API guide's ](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/ce98/collaboration-endpoint-software-api-reference-guide-ce98.pdf)_Supported Commands Matrix_, these items are marked with “On-prem only”. 

Among the non-applicable configurations, commands and statuses, are all those related to H.323, H.320, SIP, NTP, CUCM, LDAP, Proximity, and Far End Camera Control. 

We recommend you not to program against API commands in these categories.

## From the API

Read the [Advanced Settings ](https://help.webex.com/en-us/n5pqqcm/Advanced-Settings-for-Room-and-Desk-Devices) article to find out more about how to access the API. 

```

     xCommand Webex Registration Start 
   
```

**Parameters:** 

_ActivationCode_ (required) <String: 16, 19>

The activation code that has been created in Control Hub for this device. 

_SecurityAction_ (required) <Harden, NoAction>

Harden: Deactivates all local users that have been created for this device and deactivates Macros. 

NoAction: Doesn’t remove any configurations. Use NoAction if you wish to keep existing integrations. 

**Description:** Start registering a device to Cisco Webex by entering the activation code that has been created in Control Hub. You must choose whether to keep local users and integrations.

You get a confirmation that the registration has been successful or failed. 

```

     xCommand Webex Registration Cancel 
   
```

**Description:** Cancel device registration to Cisco Webex. This command only works in the short period after the registration is started with xCommand Webex Registration Start.

## From the local web interface

To register a device, you need to create an activation code on Control Hub first.

Open a web browser. Enter the IP address of the device in the address bar and sign in to the web interface When the device is new, or has been factory reset, the user name is admin and the password is blank.

If the device is not registered, you can click the Click here to register to Webex...  button. A pop-up appears and you can enter the activation code that you have created on Control Hub.

All local users and any integrations that have been created for this device will be deactivated.
