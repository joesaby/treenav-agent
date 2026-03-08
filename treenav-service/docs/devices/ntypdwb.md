---
title: "XML applications configuration for 9800 and 8875 phones (BroadWorks)"
product: "Devices"
article_id: "ntypdwb"
url: "https://help.webex.com/en-us/article/ntypdwb"
last_updated: "2026-01-19"
description: "This Help article applies to Cisco Desk Phone 9800 Series and Cisco Video Phone
8875 that are registered to Cisco BroadWorks. Read this article for the
supported XML objects, URIs, and the steps for configuring the XSI services on
the phone web page."
tags: ["devices", "webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# XML applications configuration for 9800 and 8875 phones (BroadWorks)

## Overview

XML Services Interface (XSI) is a protocol that allows communication between applications and the phone system. You can add your own XSI services to your phone using the supported XML objects and URIs.

After subscribing the phone to the services, users can access all the configured services on the phone by navigating to Settings \> Network and service \> Cisco XML services. Cisco XML services is the default name. You can also change the name. To provide an easy access for users, you can add the XML applications to softkeys or line keys.

The supported features are:

- Messages (images and text)
- Paging

### Supported XML objects

- CiscoIPPhoneMenu
- CiscoIPPhoneText
- CiscoIPPhoneInput
- CiscoIPPhoneDirectory
- CiscoIPPhoneImage
- CiscoIPPhoneImageFile
- CiscoIPPhoneIconMenu
- CiscoIPPhoneIconFileMenu
- CiscoIPPhoneStatus (except 9811 and 9841)
- CiscoIPPhoneStatusFile (except 9811 and 9841)
- CiscoIPPhoneExecute

### Supported URIs

- Device
- Dial
- EditDail
- Init
- Key
- Play (ringtones only)
- Softkey

For more details about the XSI service configuration, see [Cisco Unified IP Phone Services Application Development Notes](https://cisco.com/go/phonexsiguide).

## Configure a phone to connect to an XML service

| 1 | Access the phone administration web page.                                                                                                                                                                                  |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Voice \> Phone.                                                                                                                                                                                                     |
| 3 | In the XML Service section, configure the XML Application Service Name and XML Application Service URL parameters as defined in [Parameters for XML services](#reference-template%5F519b13a3-807f-4a28-9283-f0dbea4df849). |
| 4 | (Optional) To add authentication for accessing the application service, configure theses fields: XML User Name, XML Password, CISCO XML EXE Enable, and CISCO XML EXE Auth Mode.                                           |
| 5 | Click Save All Changes.                                                                                                                                                                                                    |

## Parameters for XML services

The following table defines the function and usage of the XML application parameters in the XML Service section under the Voice  \> Phone tab in the phone web interface. It also defines the syntax of the string that is added in the phone configuration file (cfg.xml) with XML code to configure a parameter.

__Table 1\. Parameters for XML services__
| Parameter                    | Default and options                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| XML Application Service Name | Default: Empty                                                                  | Name of the XML application. The name displays on the phone as a web application choice. You can also configure this parameter in the phone configuration XML file (cfg.xml) by entering a string in this format:<XML\_Application\_Service\_Name ua="na">XML APP Name</XML\_Application\_Service\_Name>                                                                                                                                                                                                                                                                                                                                                                                                               |
| XML Application Service URL  | Default: Empty                                                                  | The URL where the XML application is located. You can also configure this parameter in the phone configuration XML file (cfg.xml) by entering a string in this format:<XML\_Application\_Service\_URL ua="na">https://server.com/path/app.xml</XML\_Application\_Service\_URL> Macro variables are supported in XML URLs. For the valid macro variables, see [Macro variables supported in XML URLs](#reference-template%5Faad19c03-6864-45b9-90cf-3dbaf2959b09). Only HTTP or HTTPs protocols are supported in the URL.                                                                                                                                                                                               |
| XML User Name                | Default: Empty                                                                  | XML service username for authentication purposes. You can also configure this parameter in the phone configuration XML file (cfg.xml) by entering a string in this format:<XML\_User\_Name ua="na">username</XML\_User\_Name>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| XML Password                 | Default: Empty                                                                  | XML service password for the specified XML User Name. The password you entered in this field shows in the configuration file (cfg.xml) as the following: <!-- <XML\_Password ua="na">\*\*\*\*\*\*\*\*\*\*\*\*\*</XML\_Password> \-->                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| CISCO XML EXE Enable         | Default: No Options: Yes, No                                                    | Specifies whether authentication is required to access the XML application server. You can also configure this parameter in the phone configuration XML file (cfg.xml) by entering a string in this format:<CISCO\_XML\_EXE\_Enable ua="na">Yes</CISCO\_XML\_EXE\_Enable>                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CISCO XML EXE Auth Mode      | Default: Local Credential Options: Trusted, Local Credential, Remote Credential | Specifies the authentication mode for Cisco XML EXE. Trusted—No authentication is performed regardless of the local credential. Local Credential—Authentication is based on the digest authentication using the local credential, if set. If the local credential is not set, then no authentication is performed. Remote Credential—Authentication is based on the digest authentication using the remote credential as set in the XML application on the web page (to access an XML application server). You can also configure this parameter in the phone configuration XML file (cfg.xml) by entering a string in this format:<CISCO\_XML\_EXE\_Auth\_Mode ua="na">Local Credential</CISCO\_XML\_EXE\_Auth\_Mode> |

## Add an XML application to a softkey

Add the frequently used applications to softkeys for users to access the service easily. 

Before you begin

The XML Application Service has been properly configured. 

| 1 | Access the phone administration web page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Voice \> Phone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3 | In the Programmable Softkeys section, set the Programmable Softkey Enable to Yes. You can also configure this parameter in the configuration file (cfg.xml). Enter a string in this format: <Programmable\_Softkey\_Enable ua="na">Yes</Programmable\_Softkey\_Enable>                                                                                                                                                                                                                                                                                                                               |
| 4 | In the Programmable Softkeys section, edit the available fields of PSK1 to PSK16 in this format: fnc=xml;url=_<xml\_app\_path>_;nme=_<app\_name>_ where url is the link where the XML application is stored; nme is the display name of the application on the phone screen. **_Example_** fnc=xml;url=http://10.77.21.37/xmlapp/menu.xml;nme=Menu You can also configure this parameter in the configuration file (cfg.xml). Enter a string in this format: <PSK\_n ua="na">fnc=xml;url=http://10.77.21.37/xmlapp/menu.xml;nme=Menu_<configuration code>_</PSK\_n> where _n_ is the softkey number. |
| 5 | Click Save All Changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Add an XML application to a line key

Add the frequently used applications to line keys for users to access the services easily. 

Before you begin

The XML Application Service has been properly configured. 

| 1 | Access the phone administration web page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Voice \> Phone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3 | Select a line key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4 | Set the Extension parameter to Disabled to disable the extension. If the Direct PLK Configuration feature is disabled, you must disable the extension to add an extended function to the line key. If the feature is enabled, you can skip this step. For details, see [Enable Direct PLK configuration](https://help.webex.com/article/n2bsfgj/#task-template%5Ffb3b5f66-7f3b-4f79-b588-98d6633c936d).                                                                                                                                                                                                    |
| 5 | In the Extended Function parameter, enter a string in this format: fnc=xml;url=_<xml\_app\_path>_;nme=_<app\_name>_ where url is the link where the XML application is stored; nme is the display name of the application on the phone screen. **_Example_** fnc=xml;url=http://10.77.21.37/xmlapp/menu.xml;nme=Menu You can also configure this parameter in the configuration file (cfg.xml). Enter a string in this format: <Extended\_Function\_n\_ ua="na">fnc=xml;url=http://10.77.21.37/xmlapp/menu.xml;nme=Menu_<configuration code>_</Extended\_Function\_n\_> where _n_ is the extension number. |
| 6 | Click Save All Changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Macro variables supported in XML URLs

You can use macro variables in XML URLs. The following macro variables are supported: 

- User ID—UID1, UID2 to UIDn
- Display name—DISPLAYNAME1, DISPLAYNAME2 to DISPLAYNAMEn
- Auth ID—AUTHID1, AUTHID2 to AUTHIDn
- Proxy—PROXY1, PROXY2 to PROXYn
- MAC Address using lowercase hex digits—MA
- Product Name—PN
- Product Series Number—PSN
- Serial Number—SERIAL\_NUMBER

__Table 2\. Supported Macros__
| Macro Name    | Macro Expansion                                                                                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $             | The form $$ expands to a single $ character.                                                                                                                                                                           |
| A through P   | Replaced by general-purpose parameters GPP\_A through GPP\_P.                                                                                                                                                          |
| SA through SD | Replaced by special purpose parameters GPP\_SA through GPP\_SD. These parameters hold keys or passwords used in provisioning. $SA through $SD are recognized as arguments to the optional resync URL qualifier, --key. |
| MA            | MAC address using lowercase hex digits (000e08aabbcc).                                                                                                                                                                 |
| MAU           | MAC address using uppercase hex digits (000E08AABBCC).                                                                                                                                                                 |
| MAC           | MAC address using lowercase hex digits with a colon to separate hex digit pairs (00:0e:08:aa:bb:cc).                                                                                                                   |
| PN            | Product Name; for example, Video Phone 8875, Desk Phone 9851.                                                                                                                                                          |
| PSN           | Product Series Number; for example, 8875, 9841, 9861                                                                                                                                                                   |
| SN            | Serial Number string; for example, 88012BA01234.                                                                                                                                                                       |
| CCERT         | SSL Client Certificate status, installed or not installed.                                                                                                                                                             |
| IP            | IP address of the phone within its local subnet; for example, 192.168.1.100.                                                                                                                                           |
| EXTIP         | External IP of the phone, as seen on the internet; for example, 66.43.16.52.                                                                                                                                           |
| SWVER         | Software version string. For example, _PHONEOS.3-2-1-0104-37_                                                                                                                                                          |
| HWVER         | Hardware version string. For example, 2.0.1                                                                                                                                                                            |
| PRVST         | Provisioning State (a numeric string): \-1 = explicit resync request 0 = power-up resync 1 = periodic resync 2 = resync failed, retry attempt                                                                          |
| UPGST         | Upgrade State (a numeric string): 1 = first upgrade attempt 2 = upgrade failed, retry attempt                                                                                                                          |
| UPGERR        | Result message (ERR) of previous upgrade attempt; for example http\_get failed.                                                                                                                                        |
| PRVTMR        | Seconds since last resync attempt.                                                                                                                                                                                     |
| UPGTMR        | Seconds since last upgrade attempt.                                                                                                                                                                                    |
| REGTMR1       | Seconds since Line 1 lost registration with SIP server.                                                                                                                                                                |
| REGTMR2       | Seconds since Line 2 lost registration with SIP server.                                                                                                                                                                |
| UPGCOND       | Legacy macro name.                                                                                                                                                                                                     |
| SCHEME        | File access scheme, one of TFTP, HTTP, or HTTPS, as obtained after parsing resync or upgrade URL.                                                                                                                      |
| SERV          | Request target server host name, as obtained after parsing resync or upgrade URL.                                                                                                                                      |
| SERVIP        | Request target server IP address, as obtained after parsing resync or upgrade URL, possibly following DNS lookup.                                                                                                      |
| PORT          | Request target UDP/TCP port, as obtained after parsing resync or upgrade URL.                                                                                                                                          |
| PATH          | Request target file path, as obtained after parsing resync or upgrade URL.                                                                                                                                             |
| ERR           | Result message of resync or upgrade attempt. Only useful in generating result syslog messages. The value is preserved in the UPGERR variable in the case of upgrade attempts.                                          |
| UIDn          | The contents of the Line n UserID configuration parameter.                                                                                                                                                             |
| ISCUST        | If unit is customized, value=1, otherwise 0. Customization status is viewable on Web UI Info page.                                                                                                                     |
| INCOMINGNAME  | Name associated with first connected, ringing, or inbound call.                                                                                                                                                        |
| REMOTENUMBER  | Phone number of first connected, ringing, or inbound call. If there are multiple calls, the data associated with the first call found is provided.                                                                     |
| DISPLAYNAMEn  | The contents of the Line N Display Name configuration parameter.                                                                                                                                                       |
| AUTHIDn       | The contents of the Line N auth ID configuration parameter.                                                                                                                                                            |
