---
title: "RoomOS 9 known and resolved issues"
product: "Devices"
article_id: "llygcp"
url: "https://help.webex.com/en-us/article/llygcp/RoomOS-9-known-and-resolved-issues"
last_updated: "2025-06-06"
description: "Here you can read what we have fixed in the latest releases of RoomOS 9. You can
also find an overview of which issues we’re still working on and possible
workarounds."
tags: ["devices"]
source: "help.webex.com"
---

# RoomOS 9 known and resolved issues

**From January 2021 RoomOS 9.15 and later only supports DX, MX, and SX Series products.** This change is automatic with the January 2021 software update. For Board, Desk, and Room Series, see [Known and resolved issues for RoomOS 11 article ](https://help.webex.com/ndws09o/).

For a list of new capabilities that have been added, see [What's new in RoomOS ](https://help.webex.com/en-us/6ger7db/What-s-new-in-RoomOS)

- From June 1, 2025 only DX80 is supported on RoomOS 9.15.
- RoomOS 9 December 2021 (RoomOS 9.15.9.10 4e2d9b9f6aa) release was rolled back due to possible crashes when network connection is unstable.
- From October 2021, RoomOS 9 software upgrades no longer follow a monthly cadence.

## Resolved issues

You can find the fixed customer found caveats on [this bug search tool ](https://bst.cloudapps.cisco.com/bugsearch/). 

Use your cisco.com user ID and password to log in, and search for a specific product and software version. You can find a list of RoomOS releases in this article.

Depending on the RoomOS version, use the format _RoomOS release version release ID_ or _RoomOS-year-month-drop number_, for example: RoomOS 9.15.0.6 15d5b622f65 or RoomOS-2019-10-Drop2.

**Resolved issues in RoomOS 9 March 2024 (RoomOS 9.15.18.5 ed6b7b134c0)** 

- CSCwi21676 - Cisco TelePresence Collaboration Endpoint and RoomOS Information Disclosure Vulnerability.

To find out which issues were resolved in previous RoomOS releases, read [this article ](https://help.webex.com/npzzh6m/).

## Known issues

- If the device fails to get an IP address through DHCP when configuring 802.1x, the last configured IP address shows up as the IP address although the device has no network connection. At the same time, the Touch 10 controller and on-screen display home screens show a message about missing network.
- When 802.1x is configured, the configuration isn’t applied immediately. Instead, the system tells that no network is connected until the WPA supplicant has been updated. It can take up to 30 seconds to see the change. Workaround: Wait for the 802.1x authorization to finish or make sure that 802.1x is configured correctly.

## Limitations

- Cloud-registered Webex devices have an internal 30 minute timeout setting, after which they will disconnect from a meeting if no participants have joined. It's not possible to override this behaviour, and the Control Hub setting 'Automatically end meetings if there is only one participant' does not impact it.

## RoomOS releases

- RoomOS 9 March 2024  
Software version: RoomOS 9.15.18.5 ed6b7b134c0
- RoomOS 9 March 2023  
Software version: RoomOS 9.15.17.4 54a79c58dda
- RoomOS 9 January 2023  
Software version: RoomOS 9.15.16.5 5d66bd5601f
- RoomOS 9 October 2022  
Software version: RoomOS 9.15.15.4 52ab5233aad
- RoomOS 9 June 2022  
Software version: RoomOS 9.15.14.9 c372c95682d
- RoomOS 9 June 2022  
Software version: RoomOS 9.15.14.7 528a976e70d
