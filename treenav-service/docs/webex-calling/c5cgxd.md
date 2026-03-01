---
title: "Configuration of shared lines and virtual lines across locations"
product: "Webex Calling"
article_id: "c5cgxd"
url: "https://help.webex.com/en-us/article/c5cgxd/Configuration-of-shared-lines-and-virtual-lines-across-locations"
last_updated: "2025-01-16"
description: "This feature increases the scope of line assignment on Webex Calling devices by
enabling an administrator to configure numbers from different Webex Calling
locations."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Configuration of shared lines and virtual lines across locations

Shared lines and virtual lines across locations provide several benefits for Webex Calling, including:

- Improved call handling: Shared lines and virtual lines cross locations can ensure that incoming calls are answered promptly even during busy hours. This reduces call wait time and improves call answer rates.
- Increased scalability: Shared lines and virtual lines across locations can allow businesses to easily add or remove lines as needed to accommodate changes in the call volume or staffing levels.
- Greater cost effectiveness: Shared lines and virtual lines across locations can help businesses reduce the cost of long-distance calls.

## Supported devices

The following table shows the devices that you can configure with shared lines and virtual lines across locations.

| Devices                           | Shared Line | Virtual Line |
| --------------------------------- | ----------- | ------------ |
| MPP devices assigned to users     | **✓**       | **✓**        |
| Webex App                         | **✓**       | **✓**        |
| Wireless phones 840/860           | **✓**       | **✓**        |
| Guest Profiles for Hot desking    | **✓**       | **✓**        |
| DECT handsets                     | **✓**       | **✓**        |
| MPP devices assigned to workspace | **✓**       | **✓**        |
| ATA devices                       | **✓**       | **X**        |

## Impact on call routing

When the end user selects a line for an outbound call or receives a call on a line, the calling dial plan, calling services and policies of that specific line are invoked. For an outbound call, the routing profile of the line’s location is used, hence the PSTN calls are routed based on that location’s assigned PSTN option.

## Emergency calling considerations

The location settings of the line that is selected to place an emergency call determine the routing of emergency calls. For RedSky enabled locations, emergency calls are routed directly to RedSky through the dedicated peering connection. For other locations, emergency calls are routed through the PSTN provider in that location.

HELD/HELD+ is a device function that’s independent of the lines configured on the device. If there's an emergency call, the device provides location information, but the routing of the call to RedSky depends on the line location settings. Note that including location information for a call from a line that is defined in a location without RedSky enablement doesn't trigger routing through RedSky.​

The line that is selected to place an emergency call determine the Emergency Call Back Number (ECBN) selection for emergency calls. Specifically, the line ECBN settings determine the phone number sent to emergency responders.​ The number can be one of three possible values:

- The line phone number​
- The line’s location default ECBN​
- Another user or virtual line in the same location​

For more information on emergency calling and ECBN, see: [Enhanced Emergency Calling for Webex Calling](https://help.webex.com/av6oo3/) and [Emergency Callback Number in Control Hub](https://help.webex.com/nzqvtyq/).

## Survivability considerations

In survivability mode, shared lines and virtual lines from a different Webex Calling location don’t register to the Survivability Gateway (SGW). The device displays the line as unregistered.​ Users can't make outbound calls or receive inbound calls on those lines. If that line is assigned to a device in a different Webex Calling location that is in active mode, then those users can make and receive calls using that line.

In survivability mode, shared lines and virtual lines from the same Webex Calling location register to the SGW. Users can make calls from the device in survivability mode and from the device in active mode. Calls made to the line alert devices that are in active mode. Internal calls from devices in survivability mode alert devices in the same survivability location. LGW-PSTN calls received in the location that is in survivability mode are handed off to the SGW and alert the devices in the same survivability location. Other devices in active mode that share that line aren’t alerted. 

When that Webex Calling location is back in active mode, all lines in that location successfully register to Webex Calling.

## Limitations

- You can't assign a line from a Webex Calling location in India to a device in a different Webex Calling location​.
- You can't assign a line from a different Webex Calling location to a device in a Webex Calling location in India.
