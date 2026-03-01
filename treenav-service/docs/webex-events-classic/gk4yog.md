---
title: "Link Webex App to Microsoft Outlook for users"
product: "Webex Events (Classic)"
article_id: "gk4yog"
url: "https://help.webex.com/en-us/article/gk4yog/Enable-Webex-App-Users-Status-to-Display-in-Microsoft-Outlook"
last_updated: "2024-09-15"
description: "This article describes how to link Webex App to Microsoft Outlook for your
users. They can then see each other&#x27;s status in Outlook, and use Webex to call
or send messages to their contacts."
tags: ["webex-events-(classic)", "webex-meetings", "webex-webinars"]
source: "help.webex.com"
---

# Link Webex App to Microsoft Outlook for users

## Windows user requirements

User must be using Webex App on Windows 10 or later. 

They must use one of these email clients:

- Microsoft Outlook 2016 or later
- Microsoft Office 365 (version 16.0.9001 or later)  
New Outlook for Windows doesn't support Outlook presence integration with Webex App.

## Windows administrator tasks

- Add a SIP address for each user in Active Directory.  
Use the `proxyAddresses` attribute and the SIP address in the format `SIP:username@example.com`.  
(Where _username@example.com_ is the email address that identifies the user in Webex.)
- Install with ENABLEOUTLOOKINTEGRATION msi flag. See [Webex App installation and automatic upgrade](https://help.webex.com/en-us/article/nw5p67g/Webex-App-%7C-Installation-and-automatic-upgrade#Cisco%5FReference.dita%5Fde4f9295-316d-4e1c-8f47-329ddfdb984d).  
Specifies whether Webex App registers with Microsoft Outlook for presence integration. You need administrative privileges to change it.  
or  
Register the file `spark-windows-office-integration.dll` on each PC.  
This action requires administrator privileges on the computer. Examples here use `regsvr32.exe`. After you register the .dll file, users can [ integrate Webex App status with Microsoft Outlook](https://help.webex.com/yf1gc7/).  
`spark-windows-office-integration.dll` is included with the Webex App installation, and is stored in the `\dependencies\` subfolder of your Webex installation folder.  
Example of silently registering the DLL:  
```  
        regsvr32.exe /s "path/to/spark-windows-office-integration.dll"  
        
```  
Location of the DLL file depends on how the Webex App is installed. The following are the possible locations of the DLL files.

  - `C:\Users\_<user-id>_\AppData\Local\Programs\Cisco Spark\dependencies`
  - `C:\Program Files\Cisco Spark\dependencies`
  - `C:\Users\_<user-id>_\AppData\Local\CiscoSparkLauncher\_<product-version>{guid}_\dependencies`

## User tasks

- Windows users: After the DLL is registered [integrate Webex status in Outlook](https://help.webex.com/yf1gc7/).
- Mac users: The integration is enabled by default, unless another app integrates its status with Outlook. In that case, users can [integrate Webex status in Outlook](https://help.webex.com/yf1gc7/) to override the existing integration.
- All users: Restart both Webex App and Outlook.

## Removing the integration

- Windows: Unregister the DLL file for users in your organization.  
Example using regsvr32.exe:  
```  
        regsvr32.exe /s /u path/to/spark-windows-office-integration.dll  
        
```
- Mac users: [Change the setting ](https://help.webex.com/yf1gc7/) in the Webex App
- Users with a free account can choose to remove the integration in the Webex App.

## Troubleshooting

**Elevated mode (Windows)**

If Outlook for Windows or the Webex App are running in elevated mode, Outlook won't show Webex App user status.

**Conflicts with other app integrations**

You must only maintain one app that integrates with Outlook for status. Having more than one app integrated with Outlook can cause conflicts. Before enabling Webex App status integration with Outlook, users must quit and unregister any other instant messaging apps that they use to connect with Outlook.
