---
title: "Emergency Callback Number (ECBN) in Control Hub"
product: "Webex Calling"
article_id: "nzqvtyq"
url: "https://help.webex.com/en-us/article/nzqvtyq/Emergency-Callback-Number-in-Control-Hub"
last_updated: "2025-04-01"
description: "Configure users with a specified Emergency Callback Number (ECBN). The Public
Safety Answer Point (PSAP) uses the configured ECBN when responding to emergency
calls made by a user."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Emergency Callback Number (ECBN) in Control Hub

When the user makes an emergency call, the system presents the Emergency Callback Number (ECBN) configuration to the PSTN provider. It routes all emergency calls to the Public Safety Answering Point (PSAP) and then maps the call to the assigned Emergency Service Address (ESA). The PSAP receives the ESA as the address indicating the location of the emergency caller.

When a user makes an emergency call from a line assigned to a different location, the system sends the ECBN configured for that line. The callback number may not always match the caller's actual number, depending on the ECBN configuration. For more information, see [Configuration of shared lines and virtual lines across locations](https://help.webex.com/c5cgxd).

# Requirements and recommendations

- We recommend configuring users with their own telephone number to use as their ECBN.
- Configure users that don’t have their own telephone number for an ECBN with their close location. Configure with one of the following: the main number for their location, an assigned ECBN for the location, or any telephone number owned by the location.
- Configure the telephone number of an actual user as the ECBN, to facilitate a call back from the Public Safety Answering Point.
- Configure users who don't have a device assigned to them (for example, users who only have a soft client assigned) with a telephone number for call back. This configuration facilitates a callback from the Public Safety Answering Point to the device used to call.
- Few workspaces prevent inbound calls from PSTN into the workspace devices. When using a workspace device to dial an emergency call, the outbound call works but Public Safety Answering Point can’t call back the device due to the inbound restriction. To deliver emergency callbacks, Webex Calling allows call back for incoming call with a Priority header as emergency. Webex Calling also relaxes the blocking rule for the device that dialed the emergency number for 60 minutes.
- For larger locations, for example, with multiple floors, we recommend configuring multiple ECBNs.
- The Assigned Number option allows administrators to select a user, workspace, virtual line, or a Hunt Group telephone number associated with a location as ECBN.

  - The agent who called the emergency service and the agent answering the call may be different and sometimes unaware of the emergency.  
  If a Hunt group has Call Forwarding and Advance when busy enabled, then this can prevent the Hunt Group from alerting agents about the emergency.
  - You can’t change a phone number of a Hunt Group assigned as an ECBN number to a tollfree or service number. A warning displays if you change and the Control Hub doesn’t allow this change.
- If you select a toll-free number as the location's main number, a warning appears, as a toll-free number doesn’t have an emergency service address.

# Options for ECBN configuration

When you're configuring ECBN for a location or a user, the following options are available.

Direct the Location Default ECBN and Assigned Number from the User's Location to a live answering point, such as a receptionist or other person within the location. These options can't be an Auto Attendant, Interactive Voice Response (IVR), or other service.

1. User’s telephone number—Returned calls from the Public Safety Answering Point goes directly to the user. The Emergency Service Address configured by the PSTN to the user’s phone is specific to the user’s location.
2. Location Default ECBN—Each location can have an ECBN configured that’s different from the location’s main number. Configure Location Default ECBN for users without dedicated telephone numbers or with only an extension.
3. Assigned Number from User’s Location—This lets you configure one user with another user’s telephone number as an ECBN. Use this option in place of a location’s main number when the location has multiple floors or buildings. This allows the ECBN assigned to have a more accurate Emergency Service Address associated with it.

# Configure a location number as the ECBN

Set the number that police, fire departments, or other first responders can call when responding to an emergency at this location.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), go to Management \> Locations and select the location to configure ECBN.                                                                                                                                                                                                                                                                                                                                                         |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Select the Calling tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3 | Click the right arrow against the Emergency Callback Number from the Numbers section.                                                                                                                                                                                                                                                                                                                                                                                                |
| 4 | Select one of the options listed to set as the ECBN for the location. Location main numberAssigned number—Select a number that's attended within this location. If you choose a toll-free number as the location's main number, a warning appears, as a toll-free number doesn’t have an emergency service address. ![Set the location main number as the ECBN](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/455001-456000/455563.jpg) |
| 5 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

# Configure a user's number as ECBN

Use these steps to configure an emergency callback number for a user. You can set the user, workspace, virtual line, or Hunt group number associated with the location as ECBN. 

| 1 | Sign in to [Control Hub](https://admin.webex.com/), go to Management\> Click Users, and then select the user to edit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click Calling, click the right arrow against the Emergency Callback Number from the Numbers section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3 | Select one of the options listed to set as the ECBN: User’s phone number—Choose the user's number as the ECBN If the user has only the extension, the User’s phone number option doesn't appear. Location default emergency callback number—Choose the locations number of the user as the ECBN. Assigned number from a user's location—Choose the user, workspace, virtual line, or a Hunt Group number belonging to the location as ECBN. If the user, workspace, virtual line, or Hunt group has only the extension, the Assigned number from a user's location drop down does not display these entries for selection. Consider this pointer while selecting the options: Configure users without their own telephone number, like extension-only users, to make emergency calls with an accurate ECBN and Emergency service address. Configure these users to use the location default ECBN or an assigned number from the user's location. |
| 4 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

# Configure a workspace number as ECBN

Follow these steps to use the workspace number as the Emergency Callback Number:

| 1 | Sign in to [Control Hub](https://admin.webex.com/), go to Management \> Workspace, and then select the workspace to configure the ECBN.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Calling, then Emergency Callback Number from the Numbers section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3 | Select one of the options listed to set as the ECBN for the workspace. Workspace number—Choose the workspace number as the ECBN If the workspace has only the extension, the Workspace number option doesn't appear. Location default emergency callback number—Choose the locations number of the user as the ECBN. Assigned number from a user's location—Choose the user, workspace, virtual line, or a Hunt Group number belonging to the location as ECBN. If the user, workspace, virtual line, or Hunt group has only the extension, the Assigned number from a user's location drop down does not display these entries for selection. When you can select a workspace number or the virtual line as the ECBN number, a warning displays on selection. |
| 4 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

# Configure virtual lines as ECBN

| 1 | Sign in to [Control Hub](https://admin.webex.com/), go to Services \> Calling \> Virtual Lines.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the virtual line to configure for ECBN.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3 | Click Calling and then click Emergency callback number from the Numbers section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4 | Select one of the options listed to set as the ECBN for the virtual line. User's phone number—Choose the user's number as the ECBN. If the user has only the extension, the User's phone number option doesn't appear. Location default emergency callback number—Choose the locations number of the user as the ECBN. Assigned number from the virtual line's location—Choose the user, workspace, virtual line, or a Hunt Group number belonging to the location as ECBN. If the user, workspace, virtual line, or Hunt group has only the extension, the Assigned number from the virtual line's location drop down doesn’t display these entries for selection. |
| 5 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Non-fixed (soft) devices and ECBN

Users with non-fixed (soft) devices, devices other than desk phones, are often mobile. It’s difficult to provide an accurate Emergency Service Address (ESA) when making emergency calls for a mobile user. It’s recommended that all users with non-fixed devices have a phone number and use that phone number for their ECBN to ensure a call back is directed to the user.

Soft clients on a non-fixed device with cellular capability will always pass an emergency call to the native dialer. In those cases, the calls never go to Webex Calling or the location’s PSTN. Webex Calling doesn’t detect the call, so there’s no record or any other processing of the call provided.

When installing non-fixed devices, the administrator is provided a warning about making emergency calls from these devices. Emergency calls made from non-fixed devices without cellular capability won’t provide an accurate address.

**_ECBN Notification_**

The RedSky integration can provide accurate address information for non-fixed devices if desired. For more information, see [RedSky Emergency 911 Service for Webex Calling](https://help.webex.com/en-us/av6oo3/RedSky-Emergency-911-Service-for-Webex-Calling).

# Deleting key users or numbers

A key user is one whose direct telephone number is assigned to another user for ECBN. If you delete a key user/number, a warning displays advising that the ECBN is in use. 

**_Delete User Notification_**

If you delete a key user, the impacted ECBN user automatically defaults to one of the following for ECBN:

1. Their own telephone number, if one is assigned.
2. The location default ECBN if they don’t have their own telephone number.

# Specifications

The following applies for Webex Calling ECBN service:

- Webex Calling doesn’t know or store the Emergency Service Address for an emergency call. The Emergency Service Address is provided by the PSTN provider, typically by a static mapping to the ECBN received.
- Configuration of multiple fixed devices at different locations isn’t supported. However, RedSky can support multiple fixed devices in different locations (based on device capabilities).
- 933 is an emergency test call number in North America, allowing testing of 911 call configuration without initiating a call to the Public Safety Answering Point. Many PSTN providers provide an IVR that repeats the ECBN and Emergency Service Address.

# Support

## Contact Partner Help Desk 

Contact Partner Help Desk (PHD) for Partner how-to and/or documentation inquiries about the Cisco Calling Plan offering.

PHD contact information:

- North America: 1-844-613-6108
- EMEA: +44 129 366 10 20
- APAC: +61 3 7017 7272
- Email: webexcalling-phd@cisco.com

## Cisco Technical Assistance Center

Contact Cisco Technical Assistance Center (TAC) for:

- Issues with Control Hub functionality
- Issues with service, such as dropped calls, call quality issues, or service outages

Cisco TAC resources:

- [Technical Services Resource Guide](https://www.cisco.com/c/en/us/support/web/tac/technical-services-resource-guide.html)
- [Open a support case](https://mycase.cloudapps.cisco.com/case)
