---
title: "DHCP options on Board, Desk, and Room Series"
product: "Devices"
article_id: "nbm2d7p"
url: "https://help.webex.com/en-us/article/nbm2d7p"
last_updated: "2025-08-04"
description: "DHCP (Dynamic Host Configuration Protocol) is a network management protocol used
to automatically assign IP addresses and other network configuration parameters
to devices on a network. This allows devices to communicate on an IP network
without requiring manual configuration of IP addresses. DHCP simplifies network
administration by dynamically allocating IP addresses from a defined range and
providing essential information such as subnet mask, default gateway, and DNS
servers to client devices."
tags: ["devices"]
source: "help.webex.com"
---

# DHCP options on Board, Desk, and Room Series

DHCP options are additional parameters that a DHCP server can provide to clients along with the IP address assignment. These options convey important network configuration details beyond just the IP address, such as: 

- Default gateway (router) address
- DNS server addresses
- Subnet mask
- Domain name
- Time server
- Boot file name for network booting
- Other vendor-specific or custom configuration parameters

DHCP options enable more flexible and comprehensive network configuration for client devices, allowing them to receive all necessary settings automatically from the DHCP server to operate correctly on the network.

Refer to the [DHCP Guide](https://www.cisco.com/c/en/us/td/docs/net%5Fmgmt/prime/network%5Fregistrar/11-0/dhcp/guide/DHCP%5FGuide/DHCP%5FGuide%5Fappendix%5F01101.pdf) for detailed information about DHCP options and validation details for the fields.

**RoomOS Default Hostname Format:**

SEP<MAC> — where <MAC> represents the device’s MAC address.

**RoomOS DHCP Option 60 Class Identifier:**

Cisco:Codec:1.0

## RoomOS DHCP Option 55 Parameter Request List

**IPv4 options** 

| Value | Name                        | Description                                                                                                                                                                                                                                             |
| ----- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | subnet-mask                 | The client’s subnet mask. Refer to RFC 2132 for detailed information.                                                                                                                                                                                   |
| 3     | routers                     | Specifies a list of IP addresses for routers on the client’s subnet. Refer to RFC 2132 for detailed information.                                                                                                                                        |
| 6     | domain-name-servers         | Specifies a list of DNS available to the client. Refer to RFC 2132 for detailed information.                                                                                                                                                            |
| 12    | host-name                   | The name of the client. Refer to RFC 2132 for detailed information.                                                                                                                                                                                     |
| 15    | domain-name                 | The domain name that the client should use for DNS hostname resolution. Refer to RFC 2132 for detailed information.                                                                                                                                     |
| 18    | extensions-path             | Specifies a string that identifies a file available for retrieval via TFTP. Refer to RFC 2132 for detailed information.                                                                                                                                 |
| 28    | broadcast-address           | The broadcast address used on the client’s subnet for delivering broadcast packets. Refer to RFC 2132 for detailed information.                                                                                                                         |
| 42    | ntp-servers                 | Specifies a list of IP addresses for Network Time Protocol (NTP) servers available to the client for time synchronization. Refer to RFC 2132 for detailed information.                                                                                  |
| 43    | vendor-encapsulated-options | Vendor options. Refer to RFC 2132 for detailed information.                                                                                                                                                                                             |
| 66    | tftp-server-name            | The TFTP server's address when the 'sname' field in the DHCP header is used to carry DHCP options. This option identifies the TFTP server for the client to contact. Refer to RFC 2132 for detailed information.                                        |
| 119   | domain-search               | Specifies the domain search list option used by clients to resolve hostnames via DNS. This option allows the client to search multiple domains when resolving names. Refer to RFC 3397 for detailed information.                                        |
| 120   | local-sip-servers           | Specifies the DHCP option used to provide the Session Initiation Protocol (SIP) server address to clients. This option enables devices to discover SIP servers dynamically via DHCP. Refer to RFC 3361 for detailed information.                        |
| 150   | cisco-tftp                  | Specifies the DHCP option used to provide an array of Trivial File Transfer Protocol (TFTP) server addresses to clients. This option allows devices to discover multiple TFTP servers dynamically via DHCP. Refer to RFC 5859 for detailed information. |
| 242   | local-tms-server            | Specifies the local IP address of the Telepresence Management Suite (TMS) server, enabling clients to locate and communicate with the TMS for management and provisioning purposes.                                                                     |
| 252   | wpad                        | The location of the Web Proxy Auto-Discovery (WPAD) server that hosts the Proxy Auto-Configuration (PAC) file, enabling clients to automatically discover and configure proxy settings for network access.                                              |

**IPv6 options** 

| Value | Name                        | Description                                                                                                                                                                                                                                    |
| ----- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16    | dhcp6.vendor-class          | Clients use this option to specify the vendor that manufactured the hardware on which they are running, enabling network services to tailor configurations or policies based on the device vendor. Refer to RFC 8415 for detailed information. |
| 17    | dhcp6.vendor-opts           | Clients and servers use this option to exchange vendor-specific information, allowing for customized communication and configuration based on vendor-defined data. Refer to RFC 8415 for detailed information.                                 |
| 21    | dhcp6.sip-servers-names     | Specifies the domain names of the SIP outbound proxy servers used by the client to route SIP signaling traffic. Refer to RFC 3319 for detailed information.                                                                                    |
| 22    | dhcp6.sip-servers-addresses | Specifies the IPv6 addresses of the SIP outbound proxy servers used by the client to route SIP signaling traffic. Refer to RFC 3319 for detailed information.                                                                                  |
| 23    | dhcp6.name-servers          | Specifies the IPv6 addresses of DNS recursive name servers that clients use to resolve domain names into IP addresses. Refer to RFC 3646 for detailed information.                                                                             |
| 24    | dhcp6.domain-search         | Specifies the domain names included in the domain search list that clients use to resolve hostnames without fully qualified domain names. Refer to RFC 3646 for detailed information.                                                          |
| 31    | dhcp6.sntp-servers          | Specifies a list of Simple Network Time Protocol (SNTP) servers available to the client for time synchronization purposes. Refer to RFC 4075 for detailed information.                                                                         |
