---
title: "Release Notes for Cisco PhoneOS Phones 9800 and 8875"
product: "Devices"
article_id: "n1trwjh"
url: "https://help.webex.com/en-us/article/n1trwjh"
last_updated: "2026-01-21"
description: "These release notes are for Cisco Desk Phone 9800 Series and Cisco Video Phone
8875 on Webex Calling, Cisco BroadWorks, and Cisco Unified Communications
Manager."
tags: ["devices", "webex-calling"]
source: "help.webex.com"
---

# Release Notes for Cisco PhoneOS Phones 9800 and 8875

Check these release notes for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 running PhoneOS.

The following table describes the individual phone requirements.

__Table 1\. Support requirements for the phones on different platforms__
| Phone                                               | Platform                                                                                                                                                                                                                                                                                                    | Support requirements           |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Cisco Desk Phone 9800 Series Cisco Video Phone 8875 | Cisco BroadWorks                                                                                                                                                                                                                                                                                            | Cisco BroadWorks 24.0 or later |
| Cisco Unified Communications Manager                | Cisco Unified Communications Manager 12.5(1) or later _**Note**_: For PhoneOS 3.2 and later, the features delivered in UCM Device Packages require UCM 14 or later Cisco Unified Communications Manager DST Olsen version D or later SRST 8.0 (IOS load 15.1(1)T) or later Cisco Expressway 12.5.4 or later |                                |

Make sure that the following Manufacture Installed Certificate (MIC) Certificate Authorities (CAs) are correctly installed on your platforms:
- High Assurance SUDI CA: <https://www.cisco.com/security/pki/certs/hasudi.pem>
- Cisco Root CA 2099: <https://www.cisco.com/security/pki/certs/crca2099.pem>

- [PhoneOS 4.0(1) release](#PhoneOS%5FRN%5F401)
- [Features on Cisco Desk Phone 9811](#reference-template%5Fd562034f-bd25-4f14-a4df-60e29e236056)
- [Open and resolved bugs](#task-template%5Ffa78d28d-35e3-40e6-b6f3-f748c127a4f5)
- [Firmware installation (Unified CM)](#%5F11203ca2-9a68-4549-97c4-f75ab900a558)
- [Firmware installation (Webex Calling or BroadWorks)](#%5Fff356cfc-17cd-435c-8878-511522e7ffd8)
- [Limitations and restrictions](#reference-template%5Fbf6db4f4-1c4f-40b6-a800-c7ec682af507)
- [Related documentation](#reference-template%5Fb825aecb-e5de-47f1-aa6c-21324456d586)

## January 20, 2026—PhoneOS 4.0(1) release

This release firmware provides the following new and enhanced features for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875:

__Table 2\. New and enhanced features in PhoneOS 4.0(1) release__
| Feature name                                                                                      | Webex Calling | BroadWorks | Unified CM      |
| ------------------------------------------------------------------------------------------------- | ------------- | ---------- | --------------- |
| New device                                                                                        |               |            |                 |
| [Cisco Desk Phone 9811](#section%5Fv5f%5Fv5j%5Frhc)                                               | ✓             | ✓          | ✓               |
| Calling features                                                                                  |               |            |                 |
| [Feature Line keys improvement](#section%5Ffeature%5Fkey%5Fimprovement)                           |               |            | ✓               |
| [Report a malicious call](#section%5Freport%5Fmalicious%5Fcall)                                   |               |            | ✓               |
| [Conference/transfer with on-hold calls](#conf%5Ftransfer%5Fonhold-calls)                         | ✓             | ✓          | ✓ (since 3.1.1) |
| User experience enhancements                                                                      |               |            |                 |
| [User access improvement to the Settings menu](#section%5Fsettings%5Fmenu%5Faccess%5Fimprovement) |               |            | ✓               |
| Security                                                                                          |               |            |                 |
| [E911 service control](#e911%5Fonprem%5F40)                                                       |               |            | ✓               |

## Cisco Desk Phone 9811

Cisco Desk Phone 9811, a new addition to the 9800 Series, is an essential business phone line, ideal for calling users in branch offices, small and medium businesses, or lobby spaces. This cost-effective phone provides the core features you need, including 2 lines and a customizable action button for quick access to key functions. With intuitive PhoneOS software, it makes everyday calling simple and reliable.

For the features available on the phone, see [_Features on Cisco Desk Phone 9811_](#reference-template%5Fd562034f-bd25-4f14-a4df-60e29e236056).

Make sure that the following Manufacturing Installed Certificate (MIC) and Certificate Authorities (CAs) are properly installed on your call control system:

- Device Identity Basic Assurance Sub CA 2099  
<https://www.cisco.com/security/pki/certs/dibasca2099.pem>
- Device Identity Basic Assurance Root CA 2099  
<https://www.cisco.com/security/pki/certs/dibarca2099.pem>

## Feature Line keys improvement

An administrator can now list Call park, Call pickup, Group pickup, and Other pickup as feature line keys on Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Cisco Unified CM.

For more information about the feature, go to the following link:

- [_Feature keys and BLF on 9800/8875 (Unified CM)_](https://help.webex.com/n770zte/)

## Report a malicious call

You can report troublesome or threatening calls as malicious by using a softkey or a line key. Cisco Unified CM can identify and register the source of the reported calls in the network.

For more information about the feature, go to the following links:

- [_Feature keys and BLF on 9800/8875 (Unified CM)_](https://help.webex.com/n770zte/)
- [_Configure 9800 and 8875 phones on Unified CM_](https://help.webex.com/9geimz/)
- [_Report a malicious call_](https://help.webex.com/n8g6yhh/)
- [_Malicious Call Identification_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/admin/14SU2/cucm%5Fb%5Ffeature-configuration-guide-for-cisco14su2/cucm%5Fmp%5Fmb3563ab%5F00%5Fmalicious-call-identification-12-0.html)

## Conference/transfer with on-hold calls

You can now transfer a call to an on-hold call or add it to a conference. If there are on-hold calls on the phone, the **Calls** tab appears, allowing you to select one during the transfer or conference.

For more details about this feature, see the following links:

- [_Use your phone 9800/8875 for an ad-hoc conference (Multiplatform)_](https://help.webex.com/4yt0sz)
- [_Transfer a call on 9800/8875 (Multiplatform)_](https://help.webex.com/6ouht)

## User access improvement to the Settings menu

This release includes the following user access improvement to the Settings menu on Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Cisco Unified CM.

- The EM (or EMCC) menu is now out of hierarchies. If extension mobility is configured, a user can directly access this menu under Settings.
- When the Settings access is disabled, a user can access the EM (or EMCC) and Network and service menus.
- When the Settings access is restricted, a user can access the EM (or EMCC), Network and service, and Accessibility menus.

For more information about the feature, go to the following links:

- [_Sign in to a shared phone (Extension Mobility)_](https://help.webex.com/nd2drpw/)
- [_Configure 9800 and 8875 phones on Unified CM_](https://help.webex.com/9geimz/)

## E911 service control

In PhoneOS firmware versions earlier than 4.0.1, phones sent HELD requests to third-party E911 service providers when the CUCM Location URL was configured in the Emergency Calling Profile section of the Service Profile.

In this release, a new parameter, HELD Support for Third-Party E911, is introduced. This parameter allows you to enable or disable the E911 service on phones based on your business needs. By default, this setting is disabled.

For phones running earlier firmware versions, the E911 service is disabled after upgrading to PhoneOS 4.0.1\. If you choose to enable this parameter, be aware that it does not work with CER and requires appropriate licensing and provisioning from the third-party E911 service provider.

For more details about E911 configurations, see [_Configure your phones for emergency calls (E911)_](https://help.webex.com/9geimz/Configure-9800-and-8875-phones-on-Unified-CM#task-template%5F962d1501-2dd6-4575-b100-f928e0da65af).

[PhoneOS 3.6(1) release](#PhoneOS%5FRN%5F361)

### November 17, 2025—PhoneOS 3.6(1) release

This release firmware provides the following new and enhanced features for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875:

__Table 3\. New and enhanced features in PhoneOS 3.6(1) release__
| Feature name                                                                                                       | Webex Calling  | BroadWorks     | Unified CM     |
| ------------------------------------------------------------------------------------------------------------------ | -------------- | -------------- | -------------- |
| Calling features                                                                                                   |                |                |                |
| [Disable speakerphone](#section%5Fdisable%5Fspeakerphone)                                                          | ✓              | ✓              | ✓(since 3.2.1) |
| [Reverse name lookup for Webex Personal Contacts](#section%5Freverse%5Fname%5Flookup)                              | ✓              |                |                |
| [Webex companion (Unified CM)](#webex%5Fcompanion)(for 9800 Series only)                                           |                |                | ✓              |
| [Move call to phone](#call%5Fpull%5F3.6)                                                                           | ✓              | ✓              |                |
| Customization features                                                                                             |                |                |                |
| [Support for CiscoIPPhoneStatus XML object](#XML%5Fobject)(for 9851, 9861, 9871, and 8875)                         | ✓(since 3.2.1) | ✓(since 3.2.1) | ✓              |
| [XSI call logs](#xsi%5Fcall%5Flogs%5F3.6)                                                                          |                | ✓              |                |
| Accessibility features                                                                                             |                |                |                |
| [Cloud-assisted transcription in calls](#section%5Ftranscription%5Fin%5Fcalls)(for 9861, 9871, and 8875)           | ✓              |                |                |
| User experience enhancements                                                                                       |                |                |                |
| [User experience improvement on Webex Meeting PIN challenge](#section%5Fjd3%5Fw2q%5Fygc)                           | ✓              |                |                |
| [Optimized directory search performance](#dir%5Fsearch)                                                            |                | ✓              |                |
| [Enhancements for Hot Desking](#dpc)                                                                               | ✓              |                |                |
| Serviceability                                                                                                     |                |                |                |
| [xAPI updates](#xAPI%5F3.6)                                                                                        | ✓              | ✓              | ✓              |
| Security                                                                                                           |                |                |                |
| [Display LLDP-MED TLV location information on your phone](#section%5Fdisplay%5FLLDP%5FMED%5FTLV%5Flocation%5Finfo) |                |                |                |
| [802.1x Custom Device Certificate (CDC) enhancement](#cdc%5F3%5F6)                                                 | ✓              | ✓              |                |

### Display LLDP-MED TLV location information on your phone

After an administrator enabled the E911 geolocation feature on any line and set LLDP-MED as the location source, you can now select About this device \>  Location from the Settings menu on your phone to view the location information.

For more information about the feature, go to the following link:

- [_Use LLDP-MED protocol for emergency calls on 9800/8875_](https://help.webex.com/n8r4x5s/)

### Disable speakerphone

An administrator can now disable the speakerphone functionality and prevent you from re-enabling the speakerphone. However, disabling speakerphone functionality will not affect the handset or headset. You can change the audio path to headset or handset to use lines, speed dials, and softkeys for calling features.

For more information about the feature, go to the following links:

- [_Configure 9800 Series and 8875 Phones on Control Hub_](https://help.webex.com/n72q8yeb/)
- [_Configure calling features on 9800/8875 (BroadWorks)_](https://help.webex.com/mdos1db/)

### Cloud-assisted transcription in calls

Real-time translation and transcription improves accessibility and allows you to have more inclusive communication. Now you can turn on captions and view live transcripts during phone calling on Cisco Desk Phone 9861, Cisco Desk Phone 9871, and Cisco Video Phone 8875.

For more information about the feature, go to the following link:

- [_Use closed captions in phone calls and Webex meetings on 9800/8875 (Webex Calling)_](https://help.webex.com/6aoom1/)

### Reverse name lookup for Webex Personal Contacts

When reverse name lookup searches the phone's external directories, it also searches the Webex Personal Contacts dirctory and resolves self-defined contacts in Webex. When a search succeeds, the caller's name is displayed in the incoming call notifications, the call session and the call history.

For more information about the feature, see [_Configure 9800 Series and 8875 Phones on Control Hub_](https://help.webex.com/n72q8yeb/).

### User experience improvement on Webex Meeting PIN challenge

Users may be prompted for the host key or the meeting password when joining a scheduled Webex meeting from the phone. This feature enhances security by ensuring that only authorized participants can join the session.

The prompt appears under any of the following conditions:

- The administrator has configured the conference system to require a meeting password to join.
- The meeting host didn't include the password in the invitation while scheduling the meeting.
- The user isn't a direct invitee and received the meeting link through forwarding or a mailing list.

For more information about this feature, see [_Check and join a meeting on 9800/8875 (Webex Calling)_](https://help.webex.com/nufqmkg/).

### xAPI updates

In this release, we enhance xAPI capabilities by introducing expanded network statistics, LED status monitoring, detailed per-call metrics, and device operational status. This update offers deeper insights into phone performance and call quality metrics. we added new xStatus and enhanced the xCommand for device booking. For details about the supported xAPIs and the related documentation, see <https://phoneos.cisco.com>.

Administrators can manage devices registered with Webex Calling using the Run xCommand feature in Control Hub. For more information, see [_Run xCommands from Control Hub_](https://help.webex.com/9lk0bf).

### Support for CiscoIPPhoneStatus XML object

Since PhoneOS 3.6 release, the following phones support the `CiscoIPPhoneStatus` XML object:

- Cisco Desk Phone 9851, 9861, and 9871
- Cisco Video Phone 8875

For more information, see the following links:

- [_Cisco Unified IP Phone Services Application Development Notes_](https://cisco.com/go/phonexsiguide)
- [XML applications configuration for 9800 and 8875 phones (BroadWorks)](https://help.webex.com/article/ntypdwb)
- [XML applications and services configuration for 9800 and 8875 phones (Unified CM)](https://help.webex.com/nqxu7eu)

### Webex companion on 9800 Series

The Companion mode allows the phone to participate in video calls and Webex meetings by using the Webex App for video. Users can send and receive video or share content through the Webex App while keeping audio on the phone.

For more information, see the following links:

- [_Video calls and meetings on Desk Phone 9800 Series (Unified CM)_](https://help.webex.com/mk3l4r)
- [_Enable your phone to use the video capability on Webex_](https://help.webex.com/9geimz/Configure-9800-and-8875-phones-on-Unified-CM#task-template%5F501481dc-d3ba-44e4-8514-8424b5d4f545)

### 802.1x Custom Device Certificate (CDC) enhancement

When Security Mode parameter is set to EAP-TLS and Certificate Select parameter is set to Custom installed, the User ID becomes available for configuration on the phone. The Wi-Fi User ID configuration determines the 802.1x EAP-TLS Identity with the following behavior:

- **If a user ID is configured**: The phone will use the specified value as its 802.1x EAP-TLS Identity.
- **If the user ID field is left blank**: The phone will always default to using the MIC (Manufacturer Installed Certificate) or SUDI (Secure Unique Device Identity) Common Name as its 802.1x EAP-TLS Identity. This behavior occurs even if a Common Name has been selected via CDC (Certificate Device Configuration).

For more information on new parameters to support the feature, see _Parameters for SCEP configuration_ section and _Parameters for phone settings on Control Hub_ section in [_Configure 9800 Series and 8875 Phones on Control Hub_.](https://help.webex.com/n72q8yeb/)

### Move call to phone

Users can now use the Call Pull softkey to move an active call from the Webex App or another device directly to their desk phone. This ensures a seamless transition and uninterrupted conversation.

For more information on how to use the feature on the phone, see [_Move a call to your desk phone_](https://help.webex.com/nyt3vp/).

To configure the softkey, see [_Configure call pull on a programmable softkey_](https://help.webex.com/ny1ibtz/Configure-the-programmable-softkeys-on-9800/8875-%28BroadWorks%29#task-template%5Ff75c434a-8ff0-48cf-8450-e5739d083842).

### XSI call logs

You can configure phone to display associated XSI call logs or unassociated XSI call logs. To enable this feature, select an associated line and configure the Display Recents From parameter to XSI Server. 

For more information on how to enable the parameter, see _Configure call logs to display on the phone_ section in [_Configure calling features on 9800/8875 (BroadWorks)_](https://help.webex.com/mdos1db/).

### Enhancements for Hot Desking

The following enhancements are available in this release:

- Beyond ad-hoc booking, the Cisco Desk Phone 9800 Series now supports Hot Desking reservations via Cisco Spaces or third-party booking apps. Reserved phones display reservation details and allow sign-in only by the user who reserved it.
- The Desk Phone Control (DPC) feature is now supported on phones in Hot Desking mode. After signed in, users can control their desk phone from the Webex app, including placing calls, transferring or holding/resuming calls, and joining meetings.

For more information, see [Sign in to a shared phone (Hot Desking)](https://help.webex.com/np9ml9b).

### Optimized directory search performance

In this release, we optimized connection handling to speed up Cisco BroadWorks directory searches and enable directory lookups during mid-call actions like transfers and conferences, improving overall call-handling efficiency.

[PhoneOS 3.5(1) release](#reference-template%5Fada887ce-564d-4e56-a0f7-e2b115516689)

### September 16, 2025—PhoneOS 3.5(1)SR1 release

This maintenance release doesn't include any new or enhanced features.

To view the resolved bugs for this release, see [_Resolved bugs_](https://help.webex.com/n1trwjh/Release-Notes-for-Cisco-PhoneOS-Phones-9800-and-8875#reference-template%5Fd2012984-180e-4628-abc9-a41b887ef15a).

### July 31, 2025—PhoneOS 3.5(1) release

This release firmware provides the following new and enhanced features for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875:

__Table 4\. New and enhanced features in PhoneOS 3.5(1) release__
| Feature name                                                                                                                         | Webex Calling   | BroadWorks      | Unified CM |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------- | --------------- | ---------- |
| Calling features                                                                                                                     |                 |                 |            |
| [Customizable New call softkey for connected call state](#section%5Fdisable%5Fnew%5Fcall)                                            |                 |                 | ✓          |
| [Individual Queue Login](#section%5Fbwl%5Fbw2%5Fcgc)                                                                                 | ✓               |                 |            |
| Customization features                                                                                                               |                 |                 |            |
| [Multiple appearances support for line key labels](#section%5Falb%5Fw4w%5Fpfc)                                                       | ✓               |                 |            |
| [Cisco Smart Power Framework](#section%5Fsmart%5Fpower)                                                                              | ✓               | ✓               | ✓          |
| [Settings menu customization](#section%5Fifg%5Fwx2%5Fxfc)                                                                            | ✓               | ✓               |            |
| Accessibility features                                                                                                               |                 |                 |            |
| [Accessibility voice feedback for multi-languages](#section%5Fpkc%5Frq2%5Fcgc)                                                       | ✓               | ✓               | ✓          |
| User experience enhancements                                                                                                         |                 |                 |            |
| [Always use multi-line mode](#section%5Fmultiline%5Fmode)                                                                            | ✓               | ✓               | ✓          |
| Serviceability                                                                                                                       |                 |                 |            |
| [Diagnostics info on Control Hub](#section%5Fdiagnostic%5Finfo)                                                                      | ✓               |                 |            |
| [Remote factory reset](#remote%5Ffac%5Freset)                                                                                        | ✓ (since 3.0.1) | ✓ (since 3.0.1) | ✓          |
| [xAPI](#xAPI)                                                                                                                        | ✓               | ✓               | ✓          |
| Security                                                                                                                             |                 |                 |            |
| [Common Name configuration for CDC](#section%5Fv3n%5Ftt3%5Fbgc) [User ID configuration for wired 802.1X](#section%5Fv3n%5Ftt3%5Fbgc) | ✓               | ✓               |            |
| ✓                                                                                                                                    | ✓               |                 |            |
| [FIPS 140-3 compliance](#section%5Fyxs%5Fq5h%5Fdgc)                                                                                  | ✓               | ✓               | ✓          |

### Customizable New call softkey for connected call state

Before the release, the New call softkey is always positioned in the third place when the phone is in the connected call state. 

Now you can choose to show or hide the softkey when the phone is in the connected call state. By default, the softkey doesn't display in the state.

For more information about the feature, go to the following links:

- [_Make and answer calls on 9800/8875 (Unified CM)_](https://help.webex.com/article/nqk987h/)
- [_Feature keys and BLF on 9800/8875 (Unified CM)_](https://help.webex.com/article/n770zte/)

### Dialog-based shared line appearance (SLA)

You can now enable dialog-based shared line, so that the phones in the shared line can subscribe to the dialog event package.

For more information see [_Dialog-based shared line appearance (SLA)_](https://help.webex.com/article/n0pxf25/).

### Individual Queue Login

Phone now can join or leave the call queue for Webex Calling. It supports two types of call queues: Call queues and Customer assist.

For more information, see [_Join status of a call queue_](https://help.webex.com/article/nis9shz/).

### Multiple appearances support for line key labels

You can configure multiple appearances of the same line on the phone. So the phone can display the same line multiple times with a suffix (like -1, -2), based on the number of the appearances configured.

The multiple appearances feature is also applicable for the line key labels on KEM.

For more information about the feature, go to the following links:

- [_Configure line key labels for 9800/8875 (Control Hub)_](https://help.webex.com/article/17uew1/)
- [_Cisco Desk Phone 9800 Key Expansion Module_](https://help.webex.com/article/ngr795j/)
- [_Configure and manage Webex Calling devices_](https://help.webex.com/article/n9r1aac/)

### Diagnostics info on Control Hub

You can check the reported issues from the Devices \> Issues & Information section on Control Hub. For all alerts reported by the phones, you can check them in Alerts center on Control Hub.

For more information about the feature, see [_Alerts center in Control Hub_](https://help.webex.com/article/mykour#reference-template%5F9ebd570c-4ad2-454d-bf57-fb9c4c5473ee).

### Cisco Smart Power Framework

The smart power feature allows Cisco Smart Switches to manage the phone's power modes via Power over Ethernet (PoE). You can choose whether to allow the switch to follow or override the office hours and deep sleep settings configured in the phone's calling system.

For more information about the feature, see the following links:

- _[Configure Office Hours for 9800/8875 (Control Hub)](https://help.webex.com/nwwodwp)_
- _[Configure 9800 and 8875 phones on Unified CM](https://help.webex.com/9geimz/Configure-9800-and-8875-phones-on-Unified-CM#reference-template%5F3e240cac-634e-4c80-ad64-ad333cf83dbc)_
- _[Configure phone features for 9800 Series (BroadWorks)](https://help.webex.com/vx7pc7/Configure-phone-features-for-9800-Series-%28BroadWorks%29#reference-template%5F5a6191ea-0688-4d4c-8833-6f5c66281ce2)_

### LLDP-MED TLV location support for emergency calls

Now the phone can support the LLDP-MED protocol to share its location information with the responders during emergency calls.

This feature is only available for the phones on call controllers that support LLDP MED TLV Location Identification Support.

For more information about the feature, see the following links:

- [_Use LLDP-MED protocol for emergency calls on 9800/8875_](https://help.webex.com/article/n8r4x5s/)
- [_Configure calling features on 9800/8875 (BroadWorks)_](https://help.webex.com/article/mdos1db/)

### Settings menu customization

The menu customization feature allows you to enhance usability by displaying only relevant settings to users, and to improve control and security by restricting access to sensitive settings.

By default, all Settings menu items are visible to phone users. You can now customize the Settings menu of your phone by hiding items that you don't want users to access. 

This feature is available on phones registered to Webex Calling or Cisco BroadWorks.

For more information about the feature, see the following links:

- _[Customize the Settings menu for 9800 Series and 8875 phones (Control Hub)](https://help.webex.com/ldydtb/)_
- _[Manage the Settings menu visibility (BroadWorks)](https://help.webex.com/vx7pc7/Configure-phone-features-for-9800-Series-%28BroadWorks%29#task-template%5F2355f99d-b715-4cd7-bcd9-9d40687b35d9)_

### Accessibility voice feedback for multi-languages

When the phone is enabled with voice feedback, it supports multiple languages. Voice feedback is aligned with the configured language if the language is supported for voice feedback. People with vision problem can hear the voice feedback in their own language. It helps them to navigate and use the phone easily. The supported languages for voice feedback are: 

- French (Canada, France)
- Italian
- German
- Spanish (Columbia, Spain)
- English (UK, US)

For more information, see the following links:

- [Accessibility features](https://help.webex.com/article/y552uy/)
- [Enable voice feedback with multi-languages (Control Hub)](https://help.webex.com/article/nqjyxmk/)

### Always use the multi-line layout

This feature is only available on Cisco Desk Phone 9841, 9851, and 9861\. It ensures a consistent user experience by forcing the phone to always display the multi-line layout.

By default, the phone displays the multi-line interface only when multiple lines or other line key features are configured. When Always Use Multi-line Mode is enabled, the phone uses the multi-line layout even if only a single line is configured.

For more information about the feature, see the following links:

- [_Prameters for phone settings on Control Hub_](https://help.webex.com/n72q8yeb/Configure-9800-Series-and-8875-Phones-on-Control-Hub#reference-template%5F7d462fd0-8380-4f6e-8c63-3680df715c45)
- [_Set the phone to always display the multi-line interface (Unified CM)_](https://help.webex.com/9geimz/Configure-9800-and-8875-phones-on-Unified-CM#task-template%5F7b3fe7b9-96c7-4296-93c1-75806e8aba4a)
- [_Set the phone to always display the multi-line interface (BroadWorks)_](https://help.webex.com/vx7pc7/Configure-phone-features-for-9800-Series-%28BroadWorks%29#task-template%5F2469290f-ae30-411f-9c5f-9cd88abc4eac)

### Factory reset from Unified CM

Starting with this release, you can perform a factory reset of your phones remotely through Cisco Unified CM, without needing physical access. This features helps simplify large-scale device reassignments and streamlines troubleshooting. 

For more information about the feature, see [Remotely factory reset 9800 and 8875 phones on Unified CM](https://help.webex.com/article/qpt2c6/). 

### xAPI

xAPI is a set of APIs used to monitor, manage, and control PhoneOS-based devices. In this release, we are introducing xAPI as a new option for customers and partners to manage phones and build custom solutions. Customers and partners can access xAPI through HTTP or HTTPS. 

The following features are now supported on phones registered to Webex Calling, Cisco Unified CM, or Cisco BroadWorks:

- Retrieve basic device information and status, and subscribe to phone events
- Perform device reboot and factory reset
- Simulate hard key presses and screen touch operations
- Capture device screens
- Initiate calls

To use xAPI on the phone, administrators need to

- Enable web access on the phone
- Enable the xAPI account on the server
- Prepare an HTTP client and HTTP server for feedback collection

For information about the supported xAPIs and the related documentation, see <https://phoneos.cisco.com>. 

For information about how to enable xAPI on your phone, see the following links:

- [_Parameters for phone settings on Control Hub_](https://help.webex.com/n72q8yeb/Configure-9800-Series-and-8875-Phones-on-Control-Hub#reference-template%5F7d462fd0-8380-4f6e-8c63-3680df715c45)
- [_Enable xAPI on your phone (Unified CM)_](https://help.webex.com/9geimz/Configure-9800-and-8875-phones-on-Unified-CM#task-template%5F08a12164-057c-4869-9c79-aeebb4d53c81)
- [_Enable xAPI on your phone (BroadWorks)_](https://help.webex.com/vx7pc7/Configure-phone-features-for-9800-Series-%28BroadWorks%29#task-template%5F904b9b42-5964-4a68-a4f8-7f623408a230)

### Common Name configuration for CDC and User ID configuration for wired 802.1X

You can configure the Common Name (CN) for a Custom Device Certificate (CDC) installed by Simple Certificate Enrollment Protocol (SCEP). The CN will be used in the Certificate Signing Request (CSR) in the SCEP process.

If the custom certificate is selected for 802.1X authentication, you can configure the User ID that will be used as the identity for the wired 802.1X. 

The configuration of CN and User ID supports the macro expansion variables.

During the SCEP provisioning via DHCP option 43, you can also utilize DHCP option 15 to provide a domain name. The phone can retrieve the domain name to construct the Common Name and User ID.

From this release, you can configure the SCEP parameters on Control Hub. Besides, the new parameters Certificate Select and User ID are added for 802.1X configuration. 

For more information about the feature, see the following links:

- [_Custom Device Certificate on 9800/8875_](https://help.webex.com/article/jidk3p/)
- [_Cisco IP phone security on 9800/8875 (Multiplatform)_](https://help.webex.com/article/eyjsp2#task-template%5F3f4f5383-4240-49c3-b0cd-df2f50058bb9)
- [_Parameters for phone settings on Control Hub_](https://help.webex.com/article/n72q8yeb#reference-template%5F7d462fd0-8380-4f6e-8c63-3680df715c45)
- [_Macro expansion variables_](https://help.webex.com/article/nsxxojf#ID-3822-000000c3)

### FIPS 140-3 compliance

Federal Information Processing Standards (FIPS) 140-3 is now available on the Desk Phone 9800 Series and Video Phone 8875 to further enhance the security.

[PhoneOS 3.4(1) release](#reference-template%5Ff3da1181-33ae-4270-860d-125fe88051e5)

### April 29, 2025—PhoneOS 3.4(1) release

This release firmware provides the following new and enhanced features for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875:

__Table 5\. New and enhanced features__
| Feature name                                             | Webex Calling | BroadWorks | Unified CM      |
| -------------------------------------------------------- | ------------- | ---------- | --------------- |
| **Onboarding**                                           |               |            |                 |
| NFC onboarding enhancements(for 9800 only)               | ✓             | ✓          | ✓               |
| User settings preservation                               | ✓             | ✓          |                 |
| **Calling features**                                     |               |            |                 |
| Group call pickup notifications                          | ✓             |            |                 |
| **Cloud feature**                                        |               |            |                 |
| Hot Desking enhancements                                 | ✓             |            |                 |
| **Meeting features**                                     |               |            |                 |
| Webex account login for calendar meeting                 |               |            | ✓               |
| Webex companion meeting(for 9800 only)                   | ✓             |            |                 |
| Webex in-meeting summary (for 9861/9871/8875 only)       | ✓             |            |                 |
| **Customization features**                               |               |            |                 |
| Configurable line key labels                             | ✓             |            |                 |
| New settings for the Action button(for 9800 only)        | ✓             | ✓          | ✓               |
| **User experience enhancements**                         |               |            |                 |
| Inline call label or session(for 9841/9851/9861 only)    | ✓             | ✓          |                 |
| **Sustainability**                                       |               |            |                 |
| A new parameter for power saving (Office Hours)          | ✓             | ✓          | ✓               |
| **Security**                                             |               |            |                 |
| Multilevel Precedence and Preemption (MLPP) improvement  |               |            | ✓               |
| TLS 1.3 support                                          | ✓             | ✓          | ✓ (since 3.2.1) |
| Backward compatibility with WPA(for 9861/9871/8875 only) | ✓             | ✓          | ✓               |
| **Configuration management**                             |               |            |                 |
| Migration of 8875 settings(for 8875 only)                | ✓             |            |                 |
| **Unified Communications (UC)**                          |               |            |                 |
| Cisco Unified Mobility                                   |               |            | ✓               |

### New and changed features

The PhoneOS Release 3.4(1) delivers the following new features and enhancements:

**NFC onboarding enhancements**

For the phones (except for 9861NR and 9871NR) that support NFC, the NFC onboarding now can support more configurable items in the predefined NFC data payload. Before this release, you can only configure onboarding method and the related onboarding details. Now you can further configure the following:

- MAC address of the phone (only applicable when the NFC data is signed)
- Wi-Fi network access configurations (such as, SSID, user ID, password)
- Custom Certificate Authority (CA) rule

To secure the NFC onboarding info (Wi-Fi configurations and Custom CA rule) that is transmitted between NFC device and phone, only the following security levels are permitted:

- Signing
- Encryption + Signing

In addition to the configurations in the NFC data payload, users can receive the notification messages that indicate the phone is ready to scan during the onboarding process.

For more information about the feature, go to the following links:

- [_Prepare NFC onboarding data for Desk Phone 9800 Series_](https://help.webex.com/article/5eomso/)
- [_Register your Cisco Desk Phone 9800 Series (with NFC)_](https://help.webex.com/article/xbxgb3/)

**User settings preservation**

The phone now can keep the user settings that are applied before the phone's Out-Of-Box (OOB) registration. Before this release, the user settings are cleared and reset to their factory settings automatically after the phone is registered.

Currently, this feature can preserve the following user settings:

- HTTP proxy settings
- 802.1X authentication state (Enabled or Disabled)

For more information about the feature, go to the following links:

- [_HTTP proxy settings_](https://help.webex.com/article/36bjkdb#reference-template%5Ff211d748-82db-4d0d-ae9d-b3fdfb904a3e)
- [_Set up a proxy server_](https://help.webex.com/article/eyjsp2#task-template%5Fe77cd581-3e43-4545-8074-362d74583eca)
- [_Enable 802.1X authentication_](https://help.webex.com/article/eyjsp2#reference-template%5Fc7aacc29-8f6f-4479-a886-ce1ed4b082e6)
- [_Configure 9800 Series and 8875 Phones on Control Hub_](https://help.webex.com/article/n72q8yeb#reference-template%5F7d462fd0-8380-4f6e-8c63-3680df715c45)

**Group call pickup notifications**

If your administrator has made you a member of a pickup group, you can answer calls for your group members when they are busy or absent. If there are multiple calls queuing in a group, you can answer calls for any of your group members or for a specific coworker as per the configuration. If multiple calls are available for pickup, you'll answer the call that has been ringing for the longest time. You see alerts in both the front arc LED and top LED if your administrator configures the notification alert for both the LEDs.

For configuring the LED alert type on Control Hub, see [_Configure the LED alert type for group call pickup_](https://help.webex.com/article/n72q8yeb#task-template%5F1293fcb1-560c-415f-aa7d-1f543ed5b6ba).

**Hot Desking enhancements**

The Hot Desking feature now supports sign-in via voice portal. Users can use the softkey or dial the Feature Access Code \*30 to sign in to a workspace phone through voice portal authentication. By default, the Hot Desking sign in using voice portal option is enabled in the location-level and user-level configurations.

For more information, go to the following links:

- [_Sign in to a shared phone (Hot Desking)_](https://help.webex.com/article/np9ml9b/)
- [_Configure Hot Desking on Control Hub_](https://help.webex.com/article/eb1du4/)

**Webex account login for calendar meetings**

You can scan a QR code displayed on the phone screen to sign in to a Webex cloud calendar service with a Webex account. After a successful sign-in, you can join a calendar meeting on the phone. The supported meeting types include Webex and Teams.

For more information about the feature, go to the following links:

- [_Check and join a meeting on 9800/8875 (Unified CM)_](https://help.webex.com/article/212ytk/)
- [_Enable calendar meetings on 9800/8875 (Unified CM)_](https://help.webex.com/article/nljy7iz/)

**Webex companion meeting**

During a Webex meeting in companion mode, your phone and Webex App work together as a combined system. When you pair your phone with Webex App, you can join a meeting either from your phone or from Webex App.

During this Webex meeting in companion mode, you can enjoy the following advantages:

- Send and receive a video, view or share content using Webex App, and keep the audio on the phone.
- Mute or unmute the phone audio, or adjust the phone volume using Webex App.

For more information on Webex meeting in companion mode, see [_Webex Companion with Desk Phone 9800 Series (Webex Calling)_](https://help.webex.com/article/7fjgaab/).

**Webex in-meeting summary**

Now the phone supports to generate the Webex meeting summaries by using Cisco AI Assistant. The AI Assistant can analyze the discussion during the meeting in order to provide the meeting minutes and action items. 

On the phone, the meeting hosts or participants (if granted the permission) can start or stop the meeting summary.

Currently, only the hosts using the Webex App can grant the permission to the participants.

For more information about the feature, go to the following links:

- [_Use AI Assistant summaries on 9800/8875 (Webex Calling)_](https://help.webex.com/article/jebzsi/)
- [_Change video layout during a meeting on 8875_](https://help.webex.com/article/lb26ib/)
- [_Programmable softkeys configuration on 9800/8875 (Multiplatform)_](https://help.webex.com/article/ny1ibtz/)
- [_Webex App | Cisco AI Assistant in meetings_](https://help.webex.com/article/nyzkuik/)

**Configurable line key labels**

You can configure the display format (number or name) of lines that display on the phone screen by using Control Hub.

The configured display format can be applied to the following:

- The primary line that displays at the top left corner of the phone screen
- All lines if the phone has multiple lines
- The secondary line label if it's enabled
- All lines on Key Expansion Module (KEM)

For more information about the feature, go to the following link:

- [_Configure line key labels for 9800/8875 (Control Hub)_](https://help.webex.com/article/17uew1/)
- [_Configure 9800 Series and 8875 Phones on Control Hub_](https://help.webex.com/article/n72q8yeb#reference-template%5F7d462fd0-8380-4f6e-8c63-3680df715c45)
- [_Cisco Desk Phone 9800 Key Expansion Module_](https://help.webex.com/article/ngr795j/)
- [_Configure and manage Webex Calling devices_](https://help.webex.com/article/n9r1aac/)

**Enhancements for the Action button**

The following enhancements have been introduced with this release:

- Silent emergency call retrieval  
A new parameter, Allow Silent Emergency Call Retrieval, is now available to control whether users can regain phone functionality during a silent emergency call. Previously, users has to wait for the call recipient to end the call. If this parameter is enabled, users can press any key to restore normal phone operation while maintaining the emergency call. The call audio remains silent unless the user increases the speaker volume using the Volume key.
- A single trigger for multiple events  
Administrators can specify multiple service destinations for the Action button to allow users to initiate multiple events with a single trigger. For example, if configured, pressing the button will not only place an emergency call but also send an alert message to other phones within the organization. This feature streamlines critical workflows, making it easier to respond quickly in certain situations.

For more information, go to the following links:

- [_Use the Action button on 9800_](https://help.webex.com/article/navwhbf/)
- [_Configure the Action button for 9800 (Control Hub)_](https://help.webex.com/article/n22c0wy/)
- [_Configure the Action button for 9800 (Unified CM)_](https://help.webex.com/article/mxwa8f/)
- [_Configure the Action button for 9800 (BroadWorks)_](https://help.webex.com/article/1hrvr5/)

**Inline call label or session**

On Desk Phone 9841, 9851, and 9861 with multiple lines, you can enable the feature to minimize the call window (including incoming call, single call, calls list, new call, etc.) automatically to the inline call label. The inline call label includes the call session information, such as caller/callee name, number, call duration, call state, and call state relevant icons. When the feature is enabled, the status of other lines won't be blocked by the call window. Therefore, you can view the status of all lines on the phone when you have active calls.

This feature is also applicable for the lines on Key Expansion Module (KEM).

For more information about the feature, go to the following links:

- [_Enable inline call label on 9841/9851/9861 (Multiplatform)_](https://help.webex.com/article/nlm43xbb/)
- [_Swap between calls on 9841/9851/9861_](https://help.webex.com/article/nrrmxa0#task-template%5F77e24f67-fa9b-41c7-9436-b1183f7a3e92)
- [_Configure phone features for 9800 Series (BroadWorks)_](https://help.webex.com/article/vx7pc7#task-template%5F6498c456-ebec-406f-80b0-54554a9a726f)
- [_Configure 9800 Series and 8875 Phones on Control Hub_](https://help.webex.com/article/n72q8yeb#reference-template%5F7d462fd0-8380-4f6e-8c63-3680df715c45)

**Display off during office hours**

A new parameter, Display Off During Office Hours, has been added to control whether the phone display turns off when the phone is inactive during office hours. This helps reduce power consumption.

For more information, go to the following links: 

- [_Configure Office Hours for 9800/8875 (Control Hub)_](https://help.webex.com/article/nwwodwp/)
- [_Configure 9800 and 8875 phones on Unified CM_](https://help.webex.com/9geimz#task-template%5F9a444fdb-e9ae-4ce3-b153-6f8cf006863e)
- [_Configure phone features for 9800 Series (BroadWorks)_](https://help.webex.com/article/vx7pc7#task-template%5Fd4daf985-7182-468e-a4d9-abad6c8cefd2)
- [_Configure phone features for 8875 phones (BroadWorks)_](https://help.webex.com/i5h73z#task-template%5Fd4daf985-7182-468e-a4d9-abad6c8cefd2)

**Multilevel Precedence and Preemption (MLPP) improvement**

From this release, the phone that initiates the priority call with a router or translation pattern can also show the special notifications (flag icon + precedence level) on the phone screen. At the same time, the phone plays the precedence ringback tone.

For more information about the feature, go to the following links:

- [_Make and answer priority calls on 9800/8875 (Unified CM)_](https://help.webex.com/article/n6hwxiv/)
- [_Multilevel Precedence and Preemption_](https://help.webex.com/article/ntlf2i6#reference-template%5F46e6cd3c-9f42-4249-bad5-6b4f8aad7588)

**TLS 1.3 support**

The phones registered to Webex Calling or BroadWorks now support the TLS up to the 1.3 version. Before this release, the maximum supported version of TLS is 1.2.

For more information about the feature, go to the following links:

- [_Set the minimum TLS version for client and server_](https://help.webex.com/article/eyjsp2#task-template%5F0df779d8-ecb3-4385-bdcf-bce78879f7fb)
- [_Network Requirements for Webex Services_](https://help.webex.com/article/WBX000028782/)

**Backward compatibility with WPA**

You can enable the backward compatibility for the oldest version of Wi-Fi Protected Access (WPA). If enabled, the phone can connect to the wireless networks or access points that only support WPA. By default, the feature is disabled.

For more information about the feature, go to the following links:

- [_View information about security settings on phone (Unified CM)_](https://help.webex.com/article/ntlf2i6#task-template%5Fe7251113-7332-4a71-8b10-c936abf24576)
- [_View information about security settings on phone (Multiplatform)_](https://help.webex.com/article/eyjsp2#task-template%5Fd8126686-f6dc-412b-a83f-219fcd8e5171)

**Migration of 8875 settings**

The device-level configuration has been moved from Devices \> {device} \> Device Settings to Devices \> {device} \> All configurations. The device settings in Organization-level, Location-level configuration, and Templates have been also moved.

After the initial upgrade from PhoneOS 3.3.1 to 3.4.1, any subsequent upgrades or downgrades won't migrate any changes made to Device Settings.

For more information about how to configure 8875 phone settings on Control Hub, see [_Configure 9800 Series and 8875 Phones on Control Hub_](https://help.webex.com/article/n72q8yeb/).

**Cisco Unified Mobility**

Cisco Unified Mobility offers a set of mobility-related features that allow users to interact with Unified Communications applications no matter where they may be, or which device they are using. Whether the device you are using is a home office phone, a dual-mode Cisco Jabber on iPhone or Android client over a Wi-Fi connection, or a mobile phone from another cellular provider, you can still access Unified Communications features and have the call be anchored in the enterprise.

For more information about the feature, see [_Cisco Unified Mobility_](https://help.webex.com/article/w5u384/).

[PhoneOS 3.3(1) release](#reference-template%5Fafa6111b-8a3e-4b1e-a0b0-71a83c09878c)

### January 23, 2025—PhoneOS 3.3(1) release

This release firmware provides the following new and enhanced features for Cisco Desk Phone 9800 Series:

__Table 6\. Supported features on each platform__
| Feature name                                    | Webex Calling | BroadWorks | Unified CM                       |
| ----------------------------------------------- | ------------- | ---------- | -------------------------------- |
| **Onboarding**                                  |               |            |                                  |
| NFC onboarding                                  | Yes           | Yes        | Yes                              |
| **Call features**                               |               |            |                                  |
| Cisco IP Manager Assistant                      | No            | No         | Yes                              |
| Switch the operating mode                       | Yes           | No         | No                               |
| **Cloud feature**                               |               |            |                                  |
| Faster Hot Desking sign-in                      | Yes           | No         | No                               |
| **Meeting features**                            |               |            |                                  |
| In-meeting transcription (for 9861/9871)        | Yes           | No         | No                               |
| Teams meeting support                           | Yes           | No         | Yes (already supported in 3.1.1) |
| **Customization features**                      |               |            |                                  |
| Action button (multiple triggers and HTTP post) | Yes           | Yes        | Yes                              |
| Add speed dials locally (for 9871)              | No            | No         | Yes                              |
| Custom wallpaper and logo (for 9851/9861/9871)  | Yes           | Yes        | Yes (already supported in 3.0.1) |
| Custom wallpaper setting by XML files           | No            | No         | Yes                              |
| New supported languages                         | Yes           | Yes        | Yes                              |
| **User experience enhancements**                |               |            |                                  |
| Pagination on Cisco Desk Phone (for 9851/9861)  | Yes           | Yes        | No                               |
| User Preference Attribute                       | Yes           | Yes        | NA                               |
| **Serviceability**                              |               |            |                                  |
| Headset upgrade on phone                        | Yes           | Yes        | Yes                              |
| Phone reports in Control Hub                    | Yes           | No         | No                               |
| **Security**                                    |               |            |                                  |
| Device security insights                        | Yes           | Yes        | No                               |
| HTTP proxy                                      | Yes           | Yes        | No                               |
| VPN                                             | No            | No         | Yes                              |

### New and changed features

The PhoneOS Release 3.3(1) delivers the following new features and enhancements:

**NFC onboarding**

Now the phone (except for none-radio model) supports the onboarding process via its NFC tag. By scanning the NFC tag with an app (for example, NFC Tools) running on a mobile phone, the onboarding information can be written to the phone in advance even before it boots up. When the phone boots up and connects to a network, the onboarding process starts automatically and chooses the path depending on the written information. In this way, the phones can be onboarded easily with zero touch for the phone users.

During the onboarding process, you can also scan the NFC tag to fill in the required information (for example, activation code or TFTP server address) if you don't want to manually enter the information on the phone.

For more information about the feature, go to the following links:

- [_Get started with Cisco Desk Phone 9800 Series_](https://help.webex.com/article/29odsb#reference-template%5F152b8965-0f51-4158-a70e-65ba5768d1fc)
- [_Register Cisco Desk Phone 9800 Series_](https://help.webex.com/article/xbxgb3#reference-template%5F152b8965-0f51-4158-a70e-65ba5768d1fc)
- [_Get phones onboard to Cisco Unified Communications Manager_](https://help.webex.com/article/zkxiyb#reference-template%5Fac4a3ebe-0919-4f69-98f7-56e47a0b49ea)
- [_Get phones onboard to a BroadWorks server_](https://help.webex.com/article/n6he59h#reference-template%5Fac4a3ebe-0919-4f69-98f7-56e47a0b49ea)

**Cisco IP Manager Assistant**

The Cisco IP Manager Assistant (Cisco IPMA) feature enables managers and their assistants to work together more effectively. Cisco IPMA supports two modes of operation: proxy line support and shared line support. Both modes support multiple calls per line for the manager.

For more information, go to the following links: 

- [_Use Cisco IP Manager Assistant (IPMA) on phones_](https://help.webex.com/article/kwekcg/)
- [_Configure and Troubleshoot Cisco IP Manager Assistant (IPMA)_ ](https://www.cisco.com/c/en/us/support/docs/unified-communications/ip-manager-assistant-cisco-unified-callmanager-40/200159-Configure-and-Troubleshoot-Cisco-IP-Mana.html)

**Switch the operating mode**

This feature allows you to manage the mode-based forwarding of the specified features on a line key. You can manually switch the operating mode of call queues on your phone. Hence, the incoming calls are effectively routed to different destinations based on the operating mode you've selected.

For more information, go to the following links:

- [_Switching operating mode_](https://help.webex.com/article/n5dkowx)
- [_Call routing based on operating modes in Webex Calling_](https://help.webex.com/article/fozeml/)

**Faster Hot Desking sign-in**

The Hot Desking sign-in process has been optimized to reduce the processing time and remove the need for a device reboot.

**In-meeting transcription**

The phone users now can open the closed captions to display the transcription of the dialogue during a Webex hybrid meeting.

For more information about the feature, go to the following links:

- [_Check and join a meeting on your phone_](https://help.webex.com/article/nufqmkg/)
- [_Use closed captions in Webex meetings_](https://help.webex.com/article/6aoom1/)
- [_Programmable softkeys configuration on 9800/8875 (Multiplatform)_](https://help.webex.com/article/ny1ibtz/)
- [_Configure the Programmable Softkeys for 9800/8875 (Control Hub)_](https://help.webex.com/7ai8eq/)

**Teams meeting support**

The Microsoft Teams meeting now is supported on the phone that is registered to Webex Calling. The Teams meetings can display in the Upcoming meeting and Calendar screens on the phone. Also, users can check details of the Teams meetings. Similar to the Webex meeting, users can directly join a Teams meeting by pressing or tapping the Join softkey or soft button (depending on the phone model).

For more information, go to the following links: 

- [_Check and join a meeting on your phone_](https://help.webex.com/article/nufqmkg/)
- [_Return to a meeting_](https://help.webex.com/article/8mpiieb/)

**Action button (multiple triggers and HTTP post)**

The Action button can now be configured to trigger up to three distinct services, each with its own unique trigger configuration. When configured with custom services, the Action button can also trigger actions through HTTP Post requests.

For more information, go to the following links:

- [_Configure the Action button for 9800 (Control Hub)_](https://help.webex.com/article/n22c0wy/)
- [_Configure the Action button on 9800 (Unified CM)_](https://help.webex.com/article/mxwa8f/)
- [_Configure the Action button on 9800 (Multiplatform)_](https://help.webex.com/article/1hrvr5/)

**Add speed dials locally on Cisco Desk Phone 9871**

Users can add their own speed dials on the phone. The user-added speed dials can be edited and removed from the speed dial list. However, users can't update or remove the speed dials added remotely through Self Care Portal or by administrators in Cisco Unified Communications Manager.

For more information, see [_Manage speed dials_](https://help.webex.com/article/n0pf1t7#add-speed-dials).

**Custom wallpaper and logo**

The users can change the custom wallpaper or logo, or both, on the phone. As the administrator, you can customize or set up the wallpaper and logo from the Control Hub or phone web page. 

For more information about the feature, go to the following links:

- [_Customize the phone screen settings_](https://help.webex.com/article/25oy59)
- [_Cisco Desk Phone 9800 Key Expansion Module_](https://help.webex.com/en-us/article/ngr795j/Cisco-Desk-Phone-9800-Key-Expansion-Module#reference-template%5F3f163841-6964-4bf4-bee2-7c0665c31a5a)
- [_Parameters for phone settings on Control Hub_](https://help.webex.com/article/n72q8yeb#reference-template%5F7d462fd0-8380-4f6e-8c63-3680df715c45)
- [_Customize wallpaper and logo on Control Hub_](https://help.webex.com/article/n72q8yeb#task-template%5F8fb0d23b-43da-44d7-b529-65c1bdc7dd11)
- [_Customize wallpaper and logo on phone web page_](https://help.webex.com/article/vx7pc7#task-template%5Fbfc4f8d8-fed4-4b0e-8d8e-62ebff381e45)

**Custom wallpaper setting by XML files**

As the administrator, you can send an HTTP file that contains an XML body to apply the custom wallpaper on the target phones.

For more information about the feature, see [_Customize wallpaper by sending XML to the phone_](https://help.webex.com/article/9geimz#task-template%5F8cd519e7-90d3-44f5-87ec-fbcdd0ea4f09).

**New supported languages**

Phone now supports the following languages:

- Bulgarian
- Croatian
- Estonian
- Latvian
- Lithuanian
- Slovenian
- Welsh

For more information, see [_Change language for your phone_](https://help.webex.com/article/nezuuhu).

**Pagination**

Screen pagination increases the capacity of the phone and allows to add more extension lines and features on line keys, than the number of physical line keys.

For more information, see [_Pagination on Cisco Desk Phone 9851 and 9861_](https://help.webex.com/article/niwf73f/).

**User Preference Attribute**

The user-pref attribute allows you to set some user preferred value to provide a seamless experience for your user. Users can make further changes from the phone or from the phone administration web page. Any parameter changed by user is marked as user modified with an attribute um. Any changes made by the user are preserved. 

The user-pref attribute can be updated during provisioning using XML configurations delivered with the Profile Rule parameter.

For more information, see [_User Preference Attribute_](https://help.webex.com/article/opwsrv/).

**Headset upgrade on phone**

Your phone now support updating Cisco headsets. When you connect a Cisco headset to the phone, the phone automatically check for updates. 

For Cisco Headset 520 and 530, the phone starts the upgrading process automatically.

For Cisco Headset 300 Series, 560, and 700 Series, you are prompted to start updating or postpone it.

For more information, see [_Upgrade Cisco headset firmware on phones_](https://help.webex.com/article/nqw6me/).

**Phone reports in Control Hub**

Reports for phones are available in the Monitoring section in Control Hub that you can use to help track usage or solve issues for your devices in your organization.

For more information, see [_Reports for Your Cloud Collaboration Portfolio_](https://help.webex.com/nmug598/Reports-for-Your-Cloud-Collaboration-Portfolio#Cisco%5FReference.dita%5Fcefc32ba-1925-4671-b920-03c240bc06a2).

**Device security insights**

Now the phone supports to provide information about the security issues. If any security issues occur on the phone, you can view the detailed information from the Issues and diagnostics screen.

For more information about the feature, see [_Check device security status on the phone_](https://help.webex.com/article/n76ogrbb#task-template%5Fe5284def-8465-4ac0-87ff-91285a598b12).

**HTTP proxy**

You can set up the phone to connect the Internet through a specified HTTP proxy server for security purposes or resovle some HTTP connection issues. The users can either set up a proxy server on the phone or from the phone web page. 

For more information about the feature, go to the following links:

- [_HTTP proxy settings_](https://help.webex.com/article/36bjkdb#reference-template%5Ff211d748-82db-4d0d-ae9d-b3fdfb904a3e)
- [_Register your phone_](https://help.webex.com/article/xbxgb3)
- [_Set up a proxy server_](https://help.webex.com/article/eyjsp2#task-template%5Fe77cd581-3e43-4545-8074-362d74583eca)
- [_Parameters for phone settings on Control Hub_](https://help.webex.com/article/n72q8yeb#reference-template%5F7d462fd0-8380-4f6e-8c63-3680df715c45)

**VPN**

You can enable a VPN connection on the phone from the Settings \> Network and service. The established VPN connection doesn't require you to restart your phone.

For troubleshooting purpose, you can view the VPN statistics from the Issues and diagnostics screen which includes detailed information about current, closed, and failed VPN connections.

For more information about the feature, go to the following links:

- [_Connect to a VPN_](https://help.webex.com/article/36bjkdb#task-template%5F7b543a85-92db-4c1f-9c7e-1b655ebcad44)
- [_Check VPN statistics_](https://help.webex.com/article/n76ogrbb#task-template%5F61937401-e95a-4ec3-96eb-fdad17e57baa)
- [_VPN configuration_](https://help.webex.com/article/ntlf2i6#reference-template%5F7d04bd24-031b-4b90-b3b0-1a5ec07c5090)

[PhoneOS 3.2(1) release](#reference-template%5Fe25f9f5c-ba09-4d17-a48d-8ebd20d9950b)

### October 31, 2024—PhoneOS 3.2(1) release

This release firmware provides the following new and enhanced features for Cisco Desk Phone 9800 Series:

__Table 7\. Supported features on each platform__
| Feature name                                                                       | Webex Calling | BroadWorks | Unified CM |
| ---------------------------------------------------------------------------------- | ------------- | ---------- | ---------- |
| **Onboarding**                                                                     |               |            |            |
| MRA onboarding with domain service                                                 | No            | No         | Yes        |
| User credentials persistent for Expressway sign-in                                 | No            | No         | Yes        |
| **Calling features**                                                               |               |            |            |
| Forced Authorization Code (FAC) and Client Matter Code (CMC)                       | No            | No         | Yes        |
| Multicast PagingMulticast Paging with XML Application Support                      | Yes           | Yes        | No         |
| Support for Call center agent's phone                                              | Yes           | Yes        | No         |
| Switch for UDS directory service on Unified CM                                     | No            | No         | Yes        |
| Top 360 and Front Arc LED for voicemails and missed calls                          | Yes           | Yes        | Yes        |
| **Cloud features**                                                                 |               |            |            |
| Hot Desking sign-in and booking management                                         | Yes           | No         | No         |
| **Meeting features**                                                               |               |            |            |
| Mute status sync in hybrid meeting                                                 | Yes           | No         | No         |
| Recoding indication in meeting                                                     | Yes           | No         | No         |
| Participant list                                                                   | Yes           | No         | No         |
| **Customization features**                                                         |               |            |            |
| Action button supports for custom services                                         | Yes           | Yes        | Yes        |
| More display languages on the phone                                                | Yes           | Yes        | Yes        |
| Support for XML applications on phones on BroadWorks                               | No            | Yes        | No         |
| **Accessibility features**                                                         |               |            |            |
| Voice feedback (in English)                                                        | Yes           | Yes        | Yes        |
| Adjustable font size on phone screen                                               | Yes           | Yes        | Yes        |
| **Accessories supports**                                                           |               |            |            |
| Cisco Headset USB-C Adapter support                                                | Yes           | Yes        | Yes        |
| **Serviceability**                                                                 |               |            |            |
| ThousandEyes integration                                                           | Yes           | No         | Yes        |
| **Sustainability**                                                                 |               |            |            |
| New parameters for Office Hours                                                    | Yes           | Yes        | Yes        |
| **Survivability**                                                                  |               |            |            |
| WxC outbound proxy survivability support                                           | Yes           | Yes        | No         |
| **Security**                                                                       |               |            |            |
| Assured Services SIP (AS-SIP)                                                      | No            | No         | Yes        |
| Certificate Authority Proxy Function (CAPF) with Elliptical Curve (EC) key support | No            | No         | Yes        |
| Custom Device Certificate on 802.1x                                                | Yes           | Yes        | No         |
| Disabling speakerphone, headset, and handset                                       | No            | No         | Yes        |
| Multilevel Precedence and Preemption (MLPP)                                        | No            | No         | Yes        |
| Multi-server (SAN) Tomcat Certificate with Cisco UCM                               | No            | No         | Yes        |
| No password warning                                                                | Yes           | Yes        | No         |
| TLS client/server min version                                                      | No            | No         | Yes        |

### New and changed features

The PhoneOS Release 3.2(1) delivers the following new features and enhancements:

**MRA onboarding with domain service**

You can use the service domain onboarding with Mobile and Remote Access (MRA) when deploying your phones for remote users. When users choose and enter a valid service domain, they will be prompted to enter their user credentials for the MRA authentication. 

For more information about the feature, go to the following links:

- [_Register Cisco Desk Phone 9800 Series_](https://help.webex.com/article/xbxgb3/)
- [_Get phones onboard to Cisco Unified Communications Manager_](https://help.webex.com/zkxiyb/)

**User credentials persistent for Expressway sign-in**

User login credentials can be stored on the phone after the user signs into the Expressway server for Mobile and Remote Access (MRA). If enabled, the users don't need to enter the credentials again even though the phone restarts.

This feature requires UCM 14 or later with Device Packages.

For more information about the feature, see [_Configure user credentials persistent for Expressway sign-in_](https://help.webex.com/article/nt45atdb#task-template%5F75bb3f49-540b-4e3c-a4ec-774fa9857b5a).

**Forced Authorization Code (FAC) and Client Matter Code (CMC)** 

You can configure the phone to require the users to enter FAC or CMC, or both before they dial out a specific phone number. By using FAC and CMC, you can effectively manage call access and accounting. FAC regulates the types of calls that certain users can place, CMC assists with call accounting and billing for clients.

For more information about the feature, go to the following links:

- [_Calls that require authorization code or client matter code_](https://help.webex.com/article/nqk987h#reference-template%5F0fe17ee1-5b37-4870-93ed-a2cb309545b8)
- [_Configure speed dial numbers with Self Care Portal_](https://help.webex.com/article/n0pf1t7#concept-template%5F1aaad082-0226-4900-b7ba-1f546da0bcb1)
- [_Feature Configuration Guide for Cisco Unified Communications Manager_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/admin/12%5F5%5F1/featureConfig/cucm%5Fb%5Ffeature-configuration-guide-1251/cucm%5Fb%5Ffeature-configuration-guide-1251%5Fchapter%5F0101100.html)

**Multicast Paging (with XML Application Support)**

You can set up multicast paging to allow the users to page to phones. The page can go to all phones or a group of phones in the same network. Any phone in the group can initiate a multicast paging session. Only the phones that listen for the paging group can receive the page.

In addition, you can configure the phones to receive pages from an XML server to optionally display an image or other UI elements. With this feature, you can invoke the XML service from multicast paging.

For more information about the feature, go to the following links:

- [_Make and answer a paging call_](https://help.webex.com/article/lv5lcc/Make-and-answer-a-paging-call)
- [_Configure multicast paging_](https://help.webex.com/article/vx7pc7#task-template%5Fa5561a7f-3357-4979-a018-1d96f3dbf237)
- [_XML applications configuration for phones on BroadWorks_](https://help.webex.com/en-us/article/ntypdwb/)
- [_Paging script syntax_](https://help.webex.com/article/n72q8yeb#reference-template%5Ff56fe76a-f56d-49a5-8f97-74aff324b798)
- [_Macro variables supported in XML URLs_](https://help.webex.com/article/n72q8yeb#reference-template%5Faad19c03-6864-45b9-90cf-3dbaf2959b09)

**Support for Call center agent's phone**

Phone can now be enabled with Automatic Call Distribution (ACD) features. This phone acts as a call center agent's phone and can be used to trace a customer call, to escalate any customer call to a supervisor in emergency, to categorize contact numbers using disposition codes, and to view customer call details.

For more information, see [_Configure call center agent phone_](https://help.webex.com/article/n08a4lb/).

**Switch for UDS directory service on Unified CM**

The User Data Service (UDS) is used as the default directory service for phone on Unified CM. You can disable the service either for all phones or for an individual phone if you don't use it. When disabled, users on the phone can't view the personal or corporate contacts provided by UDS.

This feature requires UCM 14 or later with Device Packages.

For more details, see [_Configure directory services for phones on Unified CM_](https://help.webex.com/article/tb5ei1/).

**Top 360 and Front Arc LED for voicemails and missed calls**

From this release, only the Top 360 LED lights up for the voicemails and missed calls. The Front Arc LED doesn't light up any more for the voicemails and missed calls. 

By default, the Top 360 LED doesn't light up for the missed calls. You can enable the LED indication from the call control system.

For more information, go to the following links:

- [_LED indicators overview_](https://help.webex.com/article/r1gu0/)
- [_Parameters for phone settings on Control Hub_](https://help.webex.com/article/n72q8yeb/Configure-Cisco-Desk-Phone-9800-Series-on-Control-Hub#reference-template%5F7d462fd0-8380-4f6e-8c63-3680df715c45) (Webex Calling)
- [_Enable LED indication for missed calls_](https://help.webex.com/article/mdos1db/Configure-calling-features#task-template%5F1c473120-2220-4cb4-bd03-a676a2d59387) (BroadWorks)
- [_Enable LED indication for missed calls_](https://help.webex.com/article/9geimz/Phone-features-and-setup-on-Unified-CM#task-template%5F7406041c-84c1-4010-9f61-37a36927256c) (Unified CM)

**Hot Desking sign-in and booking management** 

The enhancements for the Hot Desking feature include the following:

- Hybrid working users can sign in to Hot Desking enabled phones through either Webex App or a web browser on their mobile devices.
- Administrators can extend user bookings or terminate them on Control Hub.
- The phones can be provisioned as hot-desk-only mode. Only emergency calls are supported on these phones. Users are required to sign in with their Webex account to use the full features.

For more information, go to the following links: .

- [_Sign in to a shared phone (Hot Desking)_](https://help.webex.com/article/np9ml9b/)
- [_Configure Hot Desking on Control Hub_](https://help.webex.com/article/eb1du4/)

**Meeting features**

In this release, we deliver the following meeting related features:

- **Mute status sync in hybrid meeting**: The audio mute status is now synchronized across multiple devices, including the phone, connected headset, and Webex App. This ensures that the user's audio status remains consistent across all devices when they join a meeting with the phone.
- **Recoding indication in meeting**: When a meeting is being recorded, a recording indication pops up on the phone screen to notify the users that the meeting is being recording. Also, the users will receive a notification when the recording is paused, resumed, or stopped.
- **Participant list**: The participant list shows the participants with their roles and the video and audio status. The invitees that aren't present are listed in the lower part of the list.

For more information about the feature, go to the following links:

- [_Check and join a meeting on your phone_](https://help.webex.com/article/nufqmkg/)
- [_Programmable softkeys configuration on 9800/8875 (Multiplatform)_](https://help.webex.com/article/ny1ibtz/)
- [_Configure the Programmable Softkeys for 9800/8875 (Control Hub)_](https://help.webex.com/7ai8eq/)

**Action button supports for custom services** 

The Action button can be configured to either make an emergency call or trigger a custom service. Administrators can customize the service name, which appears in a popup when the button is pressed, helping users identify which service they'll access.

This feature requires UCM 14 or later with Device Packages.

For more information, go to the following links:

- [_Configure the Action button for 9800 (Control Hub)_](https://help.webex.com/article/n22c0wy/)
- [_Configure the Action button on 9800 (Unified CM)_](https://help.webex.com/article/mxwa8f/)
- [_Configure the Action button on 9800 (BroadWorks)_](https://help.webex.com/article/1hrvr5/)

**More display languages on the phone** 

The Cisco Desk Phone 9800 Series now support Thai, Romanian, Serbian, Slovak, Arabic, and Hebrew as display languages.

**Support for XML applications on phones on BroadWorks**

For phones on BroadWorks, administrators can add XML applications and assign softkeys or line keys with XML applications for easy access.

For the supported XML objects, URIs, and configurations, see the following links:

- [_Cisco Unified IP Phone Services Application Development Note_](https://cisco.com/go/phonexsiguide)
- [_XML applications configuration for phones on BroadWorks_](https://help.webex.com/article/ntypdwb/)

**Accessibility features (in English)**

Voice feedback helps people with vision problems to use their phone. When enabled, a voice prompt helps you navigate the phone screen and use or configure phone features.

The voice also reads out incoming caller IDs, touchable area information, screen summary, virtual keyboard keys,hard keys, and softkey information.

To have a better visual experience, you can customize the font size when the phone is taken out-of-box. The customization of the font size does not change few of the texts, such as the texts on the phone header, some descriptional small texts, large text on the phone Home screen, texts in the softkey bar. If key expansion module is connected to a phone, font size of the text in KEM also changes during this customization.

For more information on configuring voice feedback on the phones registered to Cisco BroadWorks or Webex Calling, see [_Configure voice feedback_](https://help.webex.com/article/umgzzi/).

For more information on configuring from phone, see [_Voice feedback (accessibility)_](https://help.webex.com/article/3l43yy/).

For information on font change, see [_Customize font size on your phone_](https://help.webex.com/article/nx0ux3db#task-template%5Fbcd6ac3e-fe41-4c14-a2d1-6eb5eb6eaf72).

**Cisco Headset USB-C Adapter support**

The phones now support Cisco Headset USB-C Adapter for the connection with Cisco wireless headsets.

For more information, see [_Cisco Headset USB Adapter_](https://help.webex.com/article/n75csww#generic-template%5Fe418a4f5-9405-4e4b-b0cc-aa3eeb29d216).

**ThousandEyes integration**

ThousandEyes enables you to monitor and troubleshoot your devices and network. Endpoint Agent has been integrated into the phone firmware. But you need to enable ThousandEyes on your phones to get the agent registered to the ThousandEyes platform.

Only Cisco Desk Phone 9861 and 9871 support this feature.

This feature requires UCM 14 or later with Device Packages.

See the configurations and limitations in the following links: 

- [_ThousandEyes integration for 9800 (Control Hub)_](https://help.webex.com/article/preview/wy8irv/)
- [_Enable ThousandEyes integration for 9800 (Unified CM)_](https://help.webex.com/article/i3evlab/)

**New parameters for Office Hours**

For phones on BroadWorks, administrators can configure random timer for the phone to enter deep sleep and wake up around the schedule. This feature help distribute the load of network and power system when a large number of phones power on and off simultaneously. 

You can control whether to light up the Front Arc LED indicator when the phone enters the Display-Off mode. By default, the LED will turns off. You can change the setting with the LED Indicator in "Display Off Mode" parameter.

This feature requires UCM 14 or later with Device Packages.

See the configurations in the following links: 

- [_Configure Office Hours for 9800 (Control Hub)_](https://help.webex.com/article/nwwodwp/)
- [_Phone features and setup on Unified CM_](https://help.webex.com/article/9geimz/)
- [_Configure phone features on the phone administration page_](https://help.webex.com/article/vx7pc7/)

**WxC outbound proxy survivability support** 

Phone now has the ability to automatically register to the Site Survivability Gateway (SGW) nodes when the network connection to Webex Calling breaks. When the phone connects to the SGW nodes, phone supports only limited set of calling features. When this feature is enabled, user can see the "Limited features available" notification on the phone.

See the configurations in the following links: 

- [_Limited features available notification_](https://help.webex.com/article/n76ogrbb#reference-template%5Fae0868e1-9eda-42f8-a950-4dfe6cbdaa04)
- [_Configure calling features_](https://help.webex.com/article/mdos1db/#task-template%5F80d750a5-731d-4f9c-8059-1d6a282e9e2b)
- [_Site survivability for Webex Calling_](https://help.webex.com/article/d68vi1)

**Assured Services SIP (AS-SIP)**

Assured Services SIP(AS-SIP) is a collection of features and protocols that offer a highly secure call flow for Cisco IP Phones and third-party phones. AS-SIP is often used with Multilevel Precedence and Preemption (MLPP) to prioritize calls during an emergency.

For more information, see [_Assured Services SIP_](https://help.webex.com/article/ntlf2i6#reference-template%5Fe29192f2-340a-42f3-9e74-d5d38ad23655).

**Certificate Authority Proxy Function (CAPF) with Elliptical Curve (EC) key support**

In the previous release, only the RSA key is supported in CAPF. Now, the EC key is also supported. To use the EC key, make sure that the parameter "Endpoint Advanced Encryption Algorithms Support" (from System \> Enterprise Parameter) is enabled.

See the configurations in the following links:

- [_Security Guide for Cisco Unified Communications Manager_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/security/14SU2/cucm%5Fb%5Fsecurity-guide-14su2/cucm%5Fm%5Fcertificate-authority-proxy-function%5Fsu2%5Freorg.html)
- [_CUCM Third-Party CA-Signed LSCs Generation and Import Configuration Example_](https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/118779-configure-cucm-00.html#anc7)
- [_Configure Automatic Certificate Enrollment and Renewal Via CAPF Online CA_](https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/214501-configure-automatic-certificate-enrollme.html)

**Custom Device Certificate on 802.1x**

You can install a Custom Device Certificate (CDC) by using one of the following methods:

- Manual installation by uploading the certificate from phone web page.  
The certificate typically contains a private key and password associated with it.
- Auto installation by a Simple Certificate Enrollment Protocol (SCEP) server.  
You can configure the SCEP parameters by using one of the following methods:

  - Phone web page
  - XML provisioning
  - DHCP option 43

The certificate can be installed for the wired and wireless network with 802.1x authentication.

On the phone web page, you can check the installation status of the certificate, view details of the installed certificate, and remove the installed certificate.

On the phone or phone web page, you can select the certificate type (Manufacturing or Custom) for the 802.1x authentication in wired/wireless network environment. 

For more information about the feature, go to the following links:

- [_Set up Wi-Fi profile_](https://help.webex.com/article/eyjsp2#task-template%5Ff35ebbb5-61b3-416d-bf2f-4380124ac889)
- [_Manually install custom device certificate_](https://help.webex.com/article/eyjsp2#task-template%5F0e356941-db21-414a-816e-3456a00327ad)
- [_Automatically install custom device certificate by SCEP_](https://help.webex.com/article/eyjsp2#task-template%5Ffdde8606-05e5-4e9f-b01f-028098404c2f)
- [_SCEP parameters configuration via DHCP option 43_](https://help.webex.com/article/eyjsp2#reference-template%5F02e94df4-88fe-480e-a702-9a2a362392cc)
- [_Certificate renewal by SCEP_](https://help.webex.com/article/eyjsp2#reference-template%5F70405831-43d6-41ee-b8ae-077326bea700)
- [_Enable FIPS mode_](https://help.webex.com/article/eyjsp2#task-template%5F573b0239-12f1-4267-bb2d-4ae7ddb0eb17)
- [_802.1X Authentication_](https://help.webex.com/article/eyjsp2#CUIP%5FRF%5F8ADF53B2%5F00)

**Disabling speakerphone, headset, and handset** 

You have the options to permanently turn off the speakerphone, headset, and handset on a phone for your user.

This feature requires UCM 14 or later with Device Packages.

For more information, see [_Turn off speakerphone, headset, and handset on a phone_](https://help.webex.com/article/ntlf2i6#task-template%5Fb9ffee42-ba25-495f-abd7-665765b8f4cc).

**Multilevel Precedence and Preemption (MLPP)**

Multilevel Precedence and Preemption (MLPP) allows users to prioritize calls during emergencies or other crisis situations. A priority call takes precedence over a normal call or a lower-priority call.

The user can assign a priority to the outgoing calls that range from 1 to 5\. Incoming calls display a precedence level icon and the receiver will hear a special ring that is faster than usual.

For more information about the feature, go to the following links:

- [_Make and answer priority calls_](https://help.webex.com/article/n6hwxiv/)
- [_Use Do Not Disturb (DND)_](https://help.webex.com/article/nacjvk6/)
- [_Multilevel Precedence and Preemption_](https://help.webex.com/article/ntlf2i6/#reference-template%5F46e6cd3c-9f42-4249-bad5-6b4f8aad7588)

**Multi-server (SAN) Tomcat Certificate with Cisco UCM**

The phone supports Cisco UCM with Multi-server (SAN) Tomcat Certificates configured. The correct TFTP server address can be found in the phone ITL file for phone's registration.

For more information about the feature, go to the following links:

- [_How To Configure Multi-server (SAN) Tomcat certificate with Cisco UCM_](https://community.cisco.com/t5/collaboration-blogs/how-to-configure-multi-server-san-tomcat-certificate-with-cisco/ba-p/4764135)
- [_Security Guide for Cisco Unified Communications Manager_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/security/14SU2/cucm%5Fb%5Fsecurity-guide-14su2/cucm%5Fm%5Fdefault-security-setup%5Fsu2%5Freorg.html#CUCM%5FRF%5FC7069AA4%5F00)

**No password warning**

If you don't configure the user/admin password on the phone, the phone UI and phone web page will display the no password warning. For security concerns, we recommend to set up the password after the phone's first registration or a factory reset. 

In addition, you can't submit the changes from the phone web page until the password is configured.

For more information about the feature, go to the following links:

- [_Set the user and admin password_](https://help.webex.com/article/eyjsp2#task-template%5F693b4bfa-1f75-47e8-a32f-6e4cc8e178b4)

**TLS client/server min version**

You can set up the minimum version required for TLS client and TLS server respectively.

This feature requires UCM 14 or later with Device Packages.

For more information, see [_Set up the supported versions of TLS_](https://help.webex.com/article/ntlf2i6#task-template%5Fcc2392c6-d036-4ce4-b412-307608d4b8cb).

[PhoneOS 3.1(1) release](#reference-template%5Fa05774b2-32a8-4f09-9c96-ce50fefad685)

### August 13, 2024—PhoneOS 3.1(1)SR1 release

This release is a maintenance release and doesn't contain any new or enhanced features.

To view the resolved and open bugs for this release, see _Open and resolved bugs_.

### July 15, 2024—PhoneOS 3.1(1) release

This release firmware introduces Cisco Desk Phone 9861, 9861NR, 9871, and 9871NR. Basically, these phone models support the features for Cisco Desk Phone 9841 and 9851 in the PhoneOS 3.0.1 release. For details, see [PhoneOS 3.0(1) release](#reference-template%5F9aed95b9-a057-4644-857a-68c585426359). In addition, this release firmware provides the following new and enhanced features for Cisco Desk Phone 9800 Series:

__Table 8\. Supported features on each platform__
| Feature name                                                   | Webex Calling | BroadWorks | Unified CM |
| -------------------------------------------------------------- | ------------- | ---------- | ---------- |
| **Onboarding**                                                 |               |            |            |
| Activation code onboarding                                     | Yes           | Yes        | Yes        |
| **Calling features**                                           |               |            |            |
| Conference/transfer with on-hold calls                         | No            | No         | Yes        |
| Call back                                                      | No            | No         | Yes        |
| Noise removal support for incoming audio (for 9861/9871)       | Yes           | Yes        | Yes        |
| Narrowband-to-wideband audio enhancement by AI (for 9861/9871) | Yes           | Yes        | Yes        |
| **Cloud features**                                             |               |            |            |
| Calendar                                                       | Yes           | No         | Yes        |
| One button to push (OBTP)                                      | Yes           | No         | Yes        |
| **Accessibility feature**                                      |               |            |            |
| Voice feedback (for 9841/9851/9861)                            | Yes           | Yes        | Yes        |
| **Wireless supports**                                          |               |            |            |
| Bluetooth (for 9861/9871)                                      | Yes           | Yes        | Yes        |
| Wi-Fi (for 9861/9871)                                          | Yes           | Yes        | Yes        |
| **Accessories supports**                                       |               |            |            |
| Bluetooth headset (for 9861/9871)                              | Yes           | Yes        | Yes        |
| Key Expansion Module (for 9851/9861/9871)                      | Yes           | Yes        | Yes        |
| KEM firmware upgrade                                           | Yes           | Yes        | Yes        |
| KEM intercom                                                   | No            | No         | Yes        |
| KEM PLK                                                        | Yes           | Yes        | Yes        |
| KEM brightness                                                 | Yes           | Yes        | Yes        |
| KEM wallpaper                                                  | Yes           | Yes        | Yes        |
| KEM PRT                                                        | Yes           | Yes        | Yes        |
| **Security**                                                   |               |            |            |
| TLS 1.3 for UCM                                                | No            | No         | Yes        |

[PhoneOS 3.0(1) release ](#reference-template%5F9aed95b9-a057-4644-857a-68c585426359)

### April 9, 2024—PhoneOS 3.0(1)

Cisco Desk Phone 9841 and 9851 running PhoneOS 3.0(1) delivers the following features:

__Table 9\. Supported features on each platform__
| Feature name                                   | Webex Calling | BroadWorks | Unified CM |
| ---------------------------------------------- | ------------- | ---------- | ---------- |
| Activation code onboarding                     | No            | No         | Yes        |
| Action button                                  | Yes           | Yes        | Yes        |
| Adjustable display brightness                  | Yes           | Yes        | Yes        |
| Adjustable ringtones and volume levels         | Yes           | Yes        | Yes        |
| SRST/MRA                                       | No            | No         | Yes        |
| Calendar button (for 9851/9861)                | Yes           | Yes        | Yes        |
| Custom wallpaper and logo (for 9851/9861/9871) | No            | No         | Yes        |
| E911                                           | Yes           | Yes        | Yes        |
| Extension mobility                             | No            | No         | Yes        |
| Help desk (Favorite button)                    | Yes           | Yes        | Yes        |
| Local factory reset, restart                   | Yes           | Yes        | Yes        |
| Multiple languages support                     | Yes           | Yes        | Yes        |
| Native phone migration                         | No            | No         | Yes        |
| Password lock for settings menu                | No            | No         | Yes        |
| Peer firmware sharing                          | Yes           | Yes        | Yes        |
| Problem report tool (local and remote)         | Yes           | Yes        | Yes        |
| System wallpaper (for 9851/9861/9871)          | Yes           | Yes        | Yes        |
| Time and date display                          | Yes           | Yes        | Yes        |
| **Network**                                    |               |            |            |
| Network traverse ICE                           | Yes           | Yes        | No         |
| Network traverse NAT                           | Yes           | Yes        | No         |
| Network traverse STUN                          | Yes           | Yes        | No         |
| 802.1x                                         | Yes           | Yes        | Yes        |
| **Calling features**                           |               |            |            |
| Ad-hoc conference                              | Yes           | Yes        | Yes        |
| Audio mute/unmute                              | Yes           | Yes        | Yes        |
| Noise removal for microphone audio             | Yes           | Yes        | Yes        |
| Basic call                                     | Yes           | Yes        | Yes        |
| BLF call park                                  | Yes           | Yes        | No         |
| BLF with call pickup                           | Yes           | Yes        | No         |
| BLF with speed dial                            | Yes           | Yes        | Yes        |
| BLF with speed dial and call pickup            | Yes           | Yes        | Yes        |
| CBarge                                         | No            | No         | Yes        |
| Caller ID                                      | Yes           | Yes        | Yes        |
| Call forward                                   | Yes           | Yes        | Yes        |
| Call hold/resume                               | Yes           | Yes        | Yes        |
| Call park                                      | Yes           | Yes        | Yes        |
| Call pickup                                    | Yes           | Yes        | Yes        |
| Call preservation mode                         | No            | No         | Yes        |
| Call recording                                 | Yes           | Yes        | Yes        |
| Call waiting                                   | Yes           | Yes        | Yes        |
| Cisco meeting server mute sync                 | No            | No         | Yes        |
| Conference participant list                    | No            | No         | Yes        |
| Confidential access level (CAL)                | No            | No         | Yes        |
| Contacts                                       | Yes           | Yes        | Yes        |
| Dial rules                                     | Yes           | Yes        | Yes        |
| Directory search                               | Yes           | Yes        | Yes        |
| Do not disturb                                 | Yes           | Yes        | Yes        |
| E.164/Plus Dialing                             | Yes           | Yes        | Yes        |
| Feature access code                            | Yes           | Yes        | No         |
| Flexible seating                               | No            | Yes        | No         |
| Group pickup                                   | Yes           | Yes        | Yes        |
| Hold/Park Reversion                            | No            | No         | Yes        |
| Hotline                                        | Yes           | Yes        | No         |
| Hoteling                                       | Yes           | Yes        | No         |
| Hunt group                                     | Yes           | Yes        | Yes        |
| Intercom                                       | No            | No         | Yes        |
| Meet me                                        | No            | Yes        | Yes        |
| Multiple calls                                 | Yes           | Yes        | Yes        |
| Native call queue status                       | No            | No         | Yes        |
| Other pickup                                   | No            | No         | Yes        |
| Programmable line key (PLK) and softkey        | Yes           | Yes        | Yes        |
| Programmable Softkey (PSK) customization       | Yes           | Yes        | No         |
| Recents (call history)                         | Yes           | Yes        | Yes        |
| Redial                                         | Yes           | Yes        | Yes        |
| Reverse phone lookup service                   | Yes           | Yes        | No         |
| Shared linePrivacy callBarge                   | Yes           | Yes        | Yes        |
| Speed dial                                     | Yes           | Yes        | Yes        |
| Transfer                                       | Yes           | Yes        | Yes        |
| Uniform Resources Identifier (URI) dialing     | Yes           | Yes        | Yes        |
| Voicemail                                      | Yes           | Yes        | Yes        |
| **Cloud features**                             |               |            |            |
| Call log                                       | Yes           | No         | No         |
| Hot desking                                    | Yes           | No         | No         |
| Meeting calendar                               | Yes           | No         | No         |
| One button to push (OBTP)                      | Yes           | No         | No         |
| Remote reboot and factory reset                | Yes           | Yes        | No         |
| Webex hybrid meeting                           | Yes           | No         | No         |
| **Serviceability maintenance**                 |               |            |            |
| Firmware upgrade                               | Yes           | Yes        | Yes        |
| **Sustainability**                             |               |            |            |
| Carbon emissions insights                      | Yes           | No         | No         |
| EnergyStar                                     | Yes           | Yes        | Yes        |
| Office hour (display off and deep sleep)       | Yes           | Yes        | Yes        |
| **Security**                                   |               |            |            |
| Media plane security negotiations              | Yes           | Yes        | No         |

See the following table for the features that Cisco Desk Phone 9811 supports on each calling system.

__Table 10\. Features supported on 9811 running PhoneOS 4.0.1__
| Feature                                                                            | Webex Calling | BroadWorks | Unified CM |
| ---------------------------------------------------------------------------------- | ------------- | ---------- | ---------- |
| 802.1x                                                                             | ✓             | ✓          | ✓          |
| Accessibility-voice feedback and adjustable font size                              | ✓             | ✓          | ✓          |
| Action button                                                                      | ✓             | ✓          | ✓          |
| Activation code onboarding                                                         | ✓             | ✓          | ✓          |
| Ad-hoc conference                                                                  | ✓             | ✓          | ✓          |
| Adjustable ringtones and volume levels                                             | ✓             | ✓          | ✓          |
| Always use multi-line mode                                                         | ✓             | ✓          | ✓          |
| Assured Services SIP (AS-SIP)                                                      |               |            | ✓          |
| Audio mute/unmute                                                                  | ✓             | ✓          | ✓          |
| Barge                                                                              | ✓             | ✓          | ✓          |
| Basic call                                                                         | ✓             | ✓          | ✓          |
| BLF call park                                                                      | ✓             | ✓          | ✓          |
| BLF with call pickup                                                               | ✓             | ✓          | ✓          |
| BLF with speed dial                                                                | ✓             | ✓          | ✓          |
| BLF with speed dial and call pickup                                                | ✓             | ✓          | ✓          |
| Call back                                                                          |               |            | ✓          |
| Call forward                                                                       | ✓             | ✓          | ✓          |
| Call hold/resume                                                                   | ✓             | ✓          | ✓          |
| Call index enhancement                                                             | ✓             | ✓          | ✓          |
| Call log                                                                           | ✓             |            |            |
| Call park                                                                          | ✓             | ✓          | ✓          |
| Call pickup                                                                        | ✓             | ✓          | ✓          |
| Call preservation mode                                                             |               |            | ✓          |
| Call recording                                                                     | ✓             | ✓          | ✓          |
| Call waiting                                                                       | ✓             | ✓          | ✓          |
| Caller ID                                                                          | ✓             | ✓          | ✓          |
| CBarge                                                                             |               |            | ✓          |
| Certificate Authority Proxy Function (CAPF) with Elliptical Curve (EC) key support |               |            | ✓          |
| Cisco IP Manager Assistant                                                         |               |            | ✓          |
| Cisco meeting server mute sync                                                     |               |            | ✓          |
| Cisco Smart Power Framework                                                        | ✓             | ✓          | ✓          |
| Conference participant list                                                        |               |            | ✓          |
| Conference/Transfer with active calls                                              |               |            | ✓          |
| Confidential access level (CAL)                                                    |               |            | ✓          |
| Configurable line key labels                                                       | ✓             |            |            |
| Contacts                                                                           | ✓             | ✓          | ✓          |
| Custom Device Certificate on 802.1x                                                | ✓             | ✓          |            |
| Customizable New call softkey for connected call state                             |               |            | ✓          |
| Device security insights                                                           | ✓             | ✓          |            |
| Dial rules                                                                         | ✓             | ✓          | ✓          |
| Directory search                                                                   | ✓             | ✓          | ✓          |
| Disabling speakerphone, headset, and handset                                       |               |            | ✓          |
| Do not disturb                                                                     | ✓             | ✓          | ✓          |
| E.164/Plus Dialing                                                                 | ✓             | ✓          | ✓          |
| E911                                                                               | ✓             | ✓          | ✓          |
| EnergyStar                                                                         | ✓             | ✓          | ✓          |
| Extension mobility                                                                 |               |            | ✓          |
| Feature access code                                                                | ✓             | ✓          |            |
| Firmware upgrade                                                                   | ✓             | ✓          | ✓          |
| Flexible seating                                                                   |               | ✓          |            |
| Forced Authorization Code (FAC) and Client Matter Code (CMC)                       |               |            | ✓          |
| Front Arc LED for voicemails and missed calls                                      | ✓             | ✓          | ✓          |
| Group pickup                                                                       | ✓             | ✓          | ✓          |
| Help desk (Favorite button)                                                        | ✓             | ✓          | ✓          |
| Hold/Park Reversion                                                                |               |            | ✓          |
| Hoteling                                                                           | ✓             | ✓          |            |
| Hotline                                                                            | ✓             | ✓          |            |
| HTTP proxy                                                                         | ✓             | ✓          |            |
| Hunt group                                                                         | ✓             | ✓          | ✓          |
| Inline call label or session                                                       | ✓             | ✓          |            |
| Intercom                                                                           |               |            | ✓          |
| Local factory reset, restart                                                       | ✓             | ✓          | ✓          |
| Media plane security negotiations                                                  | ✓             | ✓          |            |
| Meet me                                                                            |               | ✓          | ✓          |
| MRA onboarding with domain service                                                 |               |            | ✓          |
| Multicast Paging                                                                   | ✓             | ✓          |            |
| Multilevel Precedence and Preemption (MLPP)                                        |               |            | ✓          |
| Multiple calls                                                                     | ✓             | ✓          | ✓          |
| Multiple languages support                                                         | ✓             | ✓          | ✓          |
| Multi-server (SAN) Tomcat Certificate with Cisco UCM                               |               |            | ✓          |
| Native call queue status                                                           |               |            | ✓          |
| Native phone migration                                                             |               |            | ✓          |
| Network traverse ICE/NAT/STUN                                                      | ✓             | ✓          |            |
| Other pickup                                                                       |               |            | ✓          |
| Password warning                                                                   | ✓             | ✓          |            |
| Password lock for settings menu                                                    |               |            | ✓          |
| Peer firmware sharing                                                              | ✓             | ✓          | ✓          |
| Phone reports and analytics in Control Hub                                         | ✓             |            |            |
| Privacy call                                                                       |               |            | ✓          |
| Problem report tool (local and remote)                                             | ✓             | ✓          | ✓          |
| Programmable line key (PLK) and softkey                                            | ✓             | ✓          | ✓          |
| Programmable Softkey (PSK) customization                                           | ✓             | ✓          |            |
| Recents (call history)                                                             | ✓             | ✓          | ✓          |
| Redial                                                                             | ✓             | ✓          | ✓          |
| Remote factory reset                                                               | ✓             | ✓          | ✓          |
| Remote reboot and factory reset                                                    | ✓             | ✓          |            |
| Reverse phone lookup service                                                       | ✓             | ✓          |            |
| RJ-9 headset                                                                       | ✓             | ✓          | ✓          |
| Settings menu customization                                                        | ✓             | ✓          |            |
| Shared line                                                                        | ✓             | ✓          | ✓          |
| Speed dial                                                                         | ✓             | ✓          | ✓          |
| SRST/MRA                                                                           |               |            | ✓          |
| Support for Call center agent's phone                                              | ✓             | ✓          |            |
| Switch for UDS directory service on Unified CM                                     |               |            | ✓          |
| Time and date display                                                              | ✓             | ✓          | ✓          |
| TLS 1.3 support                                                                    | ✓             | ✓          | ✓          |
| TLS client/server min version                                                      |               |            | ✓          |
| Transfer                                                                           | ✓             | ✓          | ✓          |
| Uniform Resources Identifier (URI) dialing                                         | ✓             | ✓          | ✓          |
| User credentials persistent for Expressway sign-in                                 |               |            | ✓          |
| Voicemail                                                                          | ✓             | ✓          | ✓          |
| WxC outbound proxy survivability support                                           | ✓             | ✓          |            |
| XML applications                                                                   | ✓             | ✓          | ✓          |
| XSI call log                                                                       | ✓             | ✓          |            |

Known problems (bugs) are graded according to severity. This article contains descriptions of the following:

- Open bugs of severity 1 to 3
- Resolved bugs of severity 1 to 3

Because defect status continually changes, the list reflects a snapshot of the defects that were open at the time new firmware is released.

Before you begin

You need the following to access the Bug Search Tool:

- An internet connection
- A web browser
- A Cisco.com username and password

| 1 | Open the [Bug Search Tool](https://tools.cisco.com/bugsearch/search).    |
| - | ------------------------------------------------------------------------ |
| 2 | Sign in with your Cisco.com username and password.                       |
| 3 | Enter the bug ID number in the **Search for** field and press **Enter**. |

What to do next

For information on how to search for bugs, create saved searches, and create bug groups, select [**Help**](https://www.cisco.com/c/en/us/support/web/tools/bst/bsthelp/index.html) on the Bug Search Tool page. 

[Open bugs](#reference-template%5F23a477ab-6495-4759-a203-03472349c046)

### Webex Calling or BroadWorks

The following list contains the severity 1, 2, and 3 defects that are open for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that run PhoneOS 4.0.1 and are registered to Webex Calling or BroadWorks:

- CSCws74795, CSCws74794, CSCws74793: Join button missing after canceling host PIN challenge when joining a calendar meeting

### Unified CM

The following list contains the severity 1, 2, and 3 defects that are open for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that run PhoneOS 4.0.1 and are registered to Unified CM:

- CSCwi76138: Onprem OBTP: Cannot display unicode supplementary characters correctly
- CSCwq44009: Occasionally phone can‘t recognize the input number or read volume is high when voice feedback is enabled
- CSCws71475: A beep tone played when making first silent emergency call after phone restart
- CSCws76185: The count of missed calls can be a bit confusing when phone has over 60 missed calls across multiple lines

[Resolved bugs](#reference-template%5Fd2012984-180e-4628-abc9-a41b887ef15a)

### January 20, 2026 (PhoneOS 4.0.1)

**Webex Calling or BroadWorks**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Webex Calling or BroadWorks:

- CSCws74743, CSCws74747, CSCws74750: Dial assist matches outdated display name in new call window, inconsistent with Recents menu
- CSCws74756, CSCws74760, CSCws74786: Booked time slot displays incorrect time after reboot due to timezone being ignored
- CSCwr75381, CSCwr75385, CSCwr75389: Voice feedback does not announce "All Lines selected" when accessing 'Lines' from the 'Recents' screen
- CSCwr75407, CSCwr75412: Scrolling in "About this device" and "Location" is not smooth; right slider size fluctuates
- CSCwr76314, CSCwr76315: Call icon remains green when speakerphone is disabled and phone is on-hook
- CSCwr76778, CSCwr76779: Missed call icon does not display when Agent status is available
- CSCwr76605, CSCwr76609: Blind transfer via speed dial on page 2 fails with pagination enabled

**Unified CM**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Unified CM:

- CSCws74539: 98xx phones play beep tone on Call Waiting when using third party headset (CFD bug)
- CSCwr96909: Cannot enter phone admin web page if "apply config" from CUCM after changing some configuration options

### November 17, 2025 (PhoneOS 3.6.1)

**Webex Calling or BroadWorks**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Webex Calling or BroadWorks:

- CSCwq49671: Update "LineKeyLabel" only via WxC CH does not take effect for SCA
- CSCwq49676: Status descriptions during meetings are truncated for some languages
- CSCwq49899, CSCwq49905, and CSCwq49911: Voice feedback feature reads theme names in English instead of localized language
- CSCwq49927 and CSCwq49933: Voice feedback feature reads UI elements in English instead of localized language
- CSCwq49939: "Desk available" string is slightly truncated on DP-9861 device

**Unified CM**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Unified CM:

- CSCwq44002: Touch phones like 8875, 9871 are unable to hear voice feedback for meeting item in Calendar window when meeting backend is Webex
- CSCwq44029: Touch phones like 8875/9871 are unable to enter letters in local speed dial window

### September 16, 2025 (PhoneOS 3.5.1SR1)

We resolved the following issue in this release for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Webex Calling or BroadWorks:

- CSCwr11741 Phone resyncs multiple times and shows incorrect download status when it tries to upgrade to the same image

We resolved the following issue in this release for Cisco Desk Phone 9841 and 9851:

- CSCwq96873 Very low possibility, instruction corrupted during loading from DDR

### July 31, 2025 (PhoneOS 3.5.1)

**Webex Calling or BroadWorks**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Webex Calling or BroadWorks:

- CSCwo89969, CSCwo89972, and CSCwo89973: Line Label Display Incorrect After Phone Bootup When Changes the line label in offline status
- CSCwo90127: The DTMF tone isn't always heard when pressing keys in the IVR
- CSCwo90136, CSCwo90142, and CSCwo90149: The meeting mutes and unmutes several times after pressing the mute hard key to mute it
- CSCwo90378: Softkey Flashing When Dialing with Full Register Setup in SCA

**Unified CM**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Unified CM:

- CSCwe04756: Shall not keep in 'Configuring...' page during OOB when phone can't get config files
- CSCwn78309: MRA phone not retry to refresh access token if DNS resolve failed, make phone unregistered
- CSCwo88467: phone not apply the new backgraound image if push with same name as the previous image
- CSCwo88475: Failed to establish Wired / Wireless 802.1x TLS Connection when LSC key size is 512 Bits

### April 29, 2025 (PhoneOS 3.4.1)

**Webex Calling or BroadWorks**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Webex Calling or BroadWorks:

- CSCwn78165 and CSCwn78169: Pressing the "Hoteling" causes the phone to reboot if more than 10 lines are enabled with hoteling
- CSCwn78210, CSCwn79724, and CSCwn78218: XSI Failure on DND and Call Forward
- CSCwn78233, CSCwn78236, and CSCwn79725: Call Establishment Failure about 10 minutes after IP Stack Switches to IPv6-Only Mode
- CSCwn78244, CSCwn78249, and CSCwn79726: Setting "Switch Manually" with Long Operation Names in Certain Languages Triggers Reboot Loop
- CSCwn78322 and CSCwn78325: Line Key Unresponsive with Pagination Enabled and KEM Configured but not Attached
- CSCwo66615: Prevent Cisco 8875 phone from crashing when it receives corrupted or faulty H264 RTP packets
- CSCwo27009: 8875 default wallpaper issue after upgrade

**Unified CM**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875 that are registered to Unified CM:

- CSCwn02578: No Voicefeedback about authentication info on FAC/CMC page
- CSCwn79745: XSI command 'setBackground' execute failed if the 'kem' tag is missed in the xml body

### January 23, 2025 (PhoneOS 3.3.1)

**Webex Calling or BroadWorks**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series that are registered to Webex Calling or BroadWorks:

- CSCwn04550 and CSCwn05728: Countdown number briefly changes size and color after pressing action button with voice feedback
- CSCwn04797 and CSCwn04794: The "Personal contact" is not fully displayed when font size is set to large
- CSCwn04803: No scan list displayed after phone connection failed due to incorrect password input
- CSCwn58672: Webui does not display properly from dojo 1.17.3
- CSCwn44305: 98xx Webui does not display properly on Touch supported devices

**Unified CM**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series that are registered to Unified CM:

- CSCwn02762: Phone asks Username/Password again after FIPS is enabled
- CSCwk55531: KEM line and Phone 360 LED are not blinking synchronized
- CSCwk49653: Line 127\~130 of KEM cannot dial out or receive a call due to UCM limitation

### October 31, 2024 (PhoneOS 3.2.1)

**Webex Calling or BroadWorks**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series that are registered to Webex Calling or BroadWorks:

- CSCwk62594: The long email address with long name for the XSI contact is being truncated
- CSCwk63378: Meeting counter fails to update when receiving list outside home page
- CSCwk62759: WiFi page title updates when switching security mode from 'Auto' to another after selecting an SSID
- CSCwk63714 and CSCwk63367: Update Voice VLAN while DHCPv6 service disabled; phone still unregistered after reactivating DHCPv6
- CSCwk63695 and CSCwk62828: Pressing 'navigate down' on the last item of the Recents Details page will read the first item
- CSCwk63702 and CSCwk62847: Voice feedback does not announce "page 1" or "page 2" as expected on KEM
- CSCwk63719 and CSCwk63376: Incorrect pronunciation of "d" and "e" in Voice Feedback

**Unified CM**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series that are registered to Unified CM:

- CSCwk49735：Need to press ’Select’ to wakeup phone since phone back into deep sleep near configured wake up time
- CSCwk55555: After Activation Code onboarding, the activated flag in LCD is still white in light mode
- CSCwk55576: The line key LED for Hunt group is not cleared when phone is unregistered
- CSCwk55583: Voice feedback can't read out the content of Action button guide after Action button config change
- CSCwk67177: Cipher Suites and Signature algs should comply with ECC configuration of UCM
- CSCwk67185: ECC crypto suites not in TLS client-hello msg when register to SRST
- CSCwn00908: Action Button - Long Press+Delay0+SilentEmergencyCall caused Call Looping on receiver phone
- CSCwe04762: User cannot connect EAP-TLS from wifi scan list since the security mode always displayed EAP
- CSCwf11899: Phone Mute LED is not red after changing audio path from usb-headset to 721 BT headset
- CSCwf11900: Sync mute-unmute between MUTE LED and 721 BT headset failed
- CSCwi76174: Bluetooth headset will not sync mute status when mute phone via CMS web client
- CSCwi76224: "Speed dials" quick access screen overlaps "Upcoming meetings" screen
- CSCwn00908: Action Button - Long Press+Delay0+SilentEmergencyCall caused Call Looping on receiver phone

### August 13, 2024 (PhoneOS 3.1.1SR1)

We resolved the following issue in this release for Cisco Desk Phone 9800 Series that are registered to Webex Calling, BroadWorks, or Unified CM:

- CSCwm00114 DHCP6: do not send RS during the IPv6 startup phase

### July 15, 2024 (PhoneOS 3.1.1) 

**Webex Calling or BroadWorks**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series that are registered to Webex Calling or BroadWorks:

- CSCwj54629 For some call records, unable to favorite it under details window after adding to contact
- CSCwj54635 The speaker LED turns green and the dial tone plays after several off-hook/on-hook cycles
- CSCwj54643 The phrase "All lines" displayed in the 'Recents' is not localized
- CSCwj54585 The prompt toast should be "Upgrade in progress"
- CSCwj66661 The softkey list displays incorrectly after the last contact item is deleted
- CSCwj66706 Missed call notifications display on lines mapped to same extension
- CSCwj66709 The start time and end time for a Webinar meeting are incorrectly displaying as identical
- CSCwj66934 BLF (Busy Lamp Field) names are displayed as language unicode characters
- CSCwj66940 Unable to select the first meeting in the calendar list by pressing the '1' key on the phone
- CSCwj66954 Transaction status is Authenticated when 802.1x is enabled on phone but the authentication times out
- CSCwj66984 "Return to call" string is truncated in certain languages
- CSCwj67105 The resync tag value of Line\_label can't be assigned correctly

**Unified CM**

We resolved the following issues in this release for Cisco Desk Phone 9800 Series that are registered to Unified CM:

- CSCwj55473 Phone still shows the IP in network status after power cycle if Disable 802.1x
- CSCwj55483 Incoming call list flashes for a while if end the last hunt group call when another one is waiting
- CSCwj55485 The distance of call sessions on huntgroup with caller name is too close
- CSCwj55490 Phone can't navigate down after subscribing two services
- CSCwj55491 Phone Informacast paging server auth failed
- CSCwj55493 Phone popups an overcurrent toast when connecting 980/700 series to side USB port
- CSCwj55495 The incoming call in call list displays abnormal for single line

### April 9, 2024 (PhoneOS 3.0.1)

This version PHONEOS.3-0-1-0001 is the initial release and has no resolved bugs.

## Installation requirements

Before you install the firmware release, you must ensure that your Cisco Unified Communications Manager is running the latest device package. For more information about how to install a Unified CM device package, see [Cisco Unified Communications Manager Device Package Installation Guide](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/compat/Devpacks%5Fadmin/CMDP%5FBK%5FCD82F19C%5F00%5Fcisco-unified-communications-manager-device/Cisco%5FUnified%5FCommunications%5FManager%5FDevice%5FPackage%5FInstallation%5Fand%5FAdministration.html).

If your Cisco Unified Communications Manager doesn't have the required device package to support this firmware release, the firmware may not work correctly.

[Install the firmware on Cisco Unified Communications Manager](#task-template%5Fba50281c-9fd5-4c8e-904f-b8dc83777063)

Before using the phone firmware release, you must install the latest Cisco Unified Communications Manager on all Cisco Unified CM servers in the cluster. 

| 1 | Go to the [Software Download](https://software.cisco.com/download/home/286037605) for IP Phones.                                                                                                                                                                                      |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Do one of the following actions: Choose Desk Phone 9800 Series, and then choose your phone model.Choose IP Phone 8800 Series \> Video Phone 8875.                                                                                                                                     |
| 3 | Choose Session Initiation Protocol (SIP) Software, if prompted.                                                                                                                                                                                                                       |
| 4 | In the Latest Release folder, choose 4.0(1).                                                                                                                                                                                                                                          |
| 5 | Select the firmware file, click the Download or Add to cart button, and follow the prompts: The firmware filename is cmterm-PHONEOS.4-0-1-0002-64.cop.sha512 If you added firmware to the cart, when you are ready to download the files, click the Cart and then click Download All. |
| 6 | Click the + next to the firmware file name in the Download Cart section to access more information about this file.                                                                                                                                                                   |
| 7 | Click the Readme link to open the installation instructions for the firmware.                                                                                                                                                                                                         |
| 8 | Follow the instructions in the readme file to install the firmware.                                                                                                                                                                                                                   |

[Install the firmware Zip files](#task-template%5F0ae942ca-c68b-4af6-86d3-e4dd504fd3c2)

If a Cisco Unified Communications Manager is not available to load the installer program, the following .zip files are available to load the firmware: cmterm-PHONEOS.4-0-1-0002-64.zip.

Firmware upgrades over the WLAN interface may take longer than upgrades using a wired connection. Upgrade times over the WLAN interface may take more than an hour, depending on the quality and bandwidth of the wireless connection.

| 1 | Go to the [Software Download](https://software.cisco.com/download/home/286037605) for IP Phones.                                                      |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Do one of the following actions: Choose Desk Phone 9800 Series, and then choose your phone model.Choose IP Phone 8800 Series \> Video Phone 8875.     |
| 3 | Choose Session Initiation Protocol (SIP) Software, if prompted.                                                                                       |
| 4 | In the Latest Release folder, choose 3.5(1).                                                                                                          |
| 5 | Select the firmware file, click the Download or Add to cart button, and follow the prompts: The firmware filename is cmterm-PHONEOS.4-0-1-0002-64.zip |
| 6 | Unzip the files.                                                                                                                                      |
| 7 | Manually copy the unzipped files to the directory on the TFTP server.                                                                                 |

[Unified Communications Manager Endpoints Locale Installer](#reference%5Fymh%5Fywg%5Fdwb)

By default, your phones are set up for the English (United States) locale. To use the phones in other locales, you must install the locale-specific version of the Unified Communications Manager Endpoints Locale Installer on every Cisco Unified Communications Manager server in the cluster. The Locale Installer installs the latest translated text for the phone user interface and country-specific phone tones on your system so that they are available for the Phones. 

To access the Locale Installer required for a release, access the [Software Download](https://software.cisco.com/download/home/286037605) page, navigate to your phone model, and select the Unified Communications Manager Endpoints Locale Installer link. 

 For more information, see the documentation for your particular Cisco Unified Communications Manager release.

The latest Locale Installer may not be immediately available; continue to check the website for updates. 

Download the firmware file from cisco.com and then install the firmware with the phone administration web page or using the command in your web browser.

[Download the firmware file](#task-template%5Fe3253095-4716-4259-b84c-efb2cc6e7668)

Before you begin

Obtain your username and password for cisco.com. Firmware downloading requires you to log in to cisco.com.

| 1 | Do one of the following actions: For Desk Phone 9800 Series, go to <https://software.cisco.com/download/home/286037605>, choose Desk Phone 9800 Series, and then your phone model.For Video Phone 8875, go to <https://software.cisco.com/download/home/284729655>, and then choose **Video Phone 8875**. |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Choose Session Initiation Protocol (SIP) Software, if prompted.                                                                                                                                                                                                                                           |
| 3 | In the Latest Release folder, choose 4.0(1).                                                                                                                                                                                                                                                              |
| 4 | (Optional) Place your mouse pointer on the file name to see the file details and checksum values.                                                                                                                                                                                                         |
| 5 | Download the firmware file PHONEOS.4-0-1-0002-64.zip.                                                                                                                                                                                                                                                     |

What to do next

Unzip the `.zip` file that you downloaded from cisco.com and place the files in the appropriate location on your upgrade server.

[Upgrade the firmware on the phone web page](#task-template%5F67fb6944-bea1-489b-a448-40e8e2079475)

Before you begin

Unzip the `.zip` file that you downloaded from cisco.com and place the files in the appropriate location on your upgrade server. The appropriate location is the TFTP, HTTP, or HTTPS download folder, depending on the protocol that you want to use for the upgrade.

| 1 | Log in to the phone administration web page. The URL for your phone web page is http://<phone IP address>/admin/advanced.**Example:**http://10.74.10.225/admin/advanced                                                                                                                         |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Voice \> Provisioning.                                                                                                                                                                                                                                                                    |
| 3 | In the Firmware Upgrade section, enter the load URL in the **Upgrade Rule**. Follow this format when you enter the load file URL: <upgrade protocol>://<upgrade server ip address>\[:<port>\]>/<path>/<file name>.loads **Examples:** http://10.73.10.223/firmware/PHONEOS.4-0-1-0002-64 .loads |
| 4 | Click Submit All Changes.                                                                                                                                                                                                                                                                       |

[Upgrade the firmware with your web browser](#task-template%5Facdb9fe4-ce50-4cd1-89ae-13bc290f827a)

Before you begin

Unzip the `.zip` file that you downloaded from cisco.com and place the files in the appropriate location on your upgrade server. The appropriate location is the TFTP, HTTP, or HTTPS download folder, depending on the protocol that you want to use for the upgrade.

| In the address bar of your web browser, enter the phone upgrade URL in the following format: <phone protocol>://<phone ip address\[:port\]>/admin/upgrade?<load file URL> **Examples:** https://10.74.10.225/admin/upgrade?http://10.73.10.223/firmware/PHONEOS.4-0-1-0002-64.loads Specify the .loads file in the URL. The .zip file contains other files. |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[Phone behavior during times of network congestion](#reference-template%5F51baa786-1e38-4d9b-aa11-ef1119b033c3)

Anything that degrades network performance can affect phone audio and video quality, and in some cases, can cause a call to drop. Sources of network degradation can include, but are not limited to, the following activities: 

- Administrative tasks, such as an internal port scan or security scan.
- Attacks that occur on your network, such as a Denial of Service attack.

[Health-care environment use](#topic%5Fuzt%5Fprg%5Fdwb%5F0123)

This product is not a medical device and uses an unlicensed frequency band that is susceptible to interference from other devices or equipment. 

[On-hook transfer limitation in SIP phones](#reference%5Ff4h%5Flrg%5Fdwb%5F0123)

When the Cisco Unified Communications Manager Transfer On-Hook Enabled field is enabled, users might report a problem with direct call transfer in SIP phones. If the user transfers the call and immediately goes on hook before they hear the ring signal, the call may drop instead of being transferred.

The user needs to hear the ring signal so that they can be sure that the call is being routed.

Use the following sections to obtain related information. 

## Cisco PhoneOS Phones (9800/8875) documentation

See the help information for Cisco Desk Phone 9800 Series on the [help page](https://cisco.com/go/dp9800help).

See the help information for Cisco Video Phone 8875 on the [help page](https://help.webex.com/ld-np2dxyq).

## Cisco Unified Communications Manager Documentation 

See the _Cisco Unified Communications Manager Documentation Guide_ and other publications that are specific to your Cisco Unified Communications Manager release on the [product support](https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/series.html) page.

## Cisco IP Phone Firmware Support Policy 

For information on the support policy for phones, see the [Cisco IP Phone Firmware Support Policy](https://www.cisco.com/c/en/us/support/docs/collaboration-endpoints/unified-ip-phone-7900-series/116684-technote-ipphone-00.html).
