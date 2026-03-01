---
title: "Dedicated Instance network and security requirements"
product: "Dedicated Instance"
article_id: "nquhruk"
url: "https://help.webex.com/en-us/article/nquhruk/Dedicated-Instance-Network-and-Security-Requirements"
last_updated: "2025-12-15"
description: "Network and security requirements for Dedicated Instance solution is the layered
approach to the features and functionality that provide secure physical access,
network, endpoints, and Cisco UC applications. It describes the network
requirements and lists the addresses, ports, and protocols used for connecting
your endpoints to the services."
tags: ["dedicated-instance", "webex-calling"]
source: "help.webex.com"
---

# Dedicated Instance network and security requirements

## Network requirements for Dedicated Instance

Webex Calling Dedicated Instance is part of the Cisco Cloud Calling portfolio, powered by the Cisco Unified Communications Manager (Cisco Unified CM) collaboration technology. Dedicated Instance offers voice, video, messaging and mobility solutions with the features and benefits of Cisco IP phones, mobile devices, and desktop clients that connect securely to the Dedicated Instance.

This article is intended for network administrators, particularly firewall and proxy security administrators who want to use Dedicated Instance within their organization. 

## Security overview: Security in layers

Dedicated Instance uses a layered approach for security. The layers include:

- Physical access
- Network
- Endpoints
- UC applications

The following sections describe the layers of security in Dedicated Instance deployments.

### Physical security

It is important to provide physical security to Equinix Meet-Me Room locations and Cisco Dedicated Instance Data Center facilities. When physical security is compromised, simple attacks such as service disruption by shutting down power to a customer’s switches can be initiated. With physical access, attackers could get access to server devices, reset passwords, and gain access to switches. Physical access also facilitates more sophisticated attacks such as man-in-the-middle attacks, which is why the second security layer, the network security, is critical.

Self-Encrypting drives are used in Dedicated Instance Data Centers that host UC applications.

For more information on general security practices, refer to the documentation at the following location: <https://www.cisco.com/c/en/us/solutions/enterprise/design-zone-security/index.html>.

### Network security

Partners need to ensure that all the network elements are secured in Dedicated Instance infrastructure (which connects via Equinix). It is partner’s responsibility to ensure security best practices such as:

- Separate VLAN for voice and data
- Enable Port Security which limits the number of MAC addresses allowed per port, against CAM table flooding
- IP Source Guard against spoofed IP addresses
- Dynamic ARP Inspection (DAI) examines address resolution protocol (ARP) and gratuitous ARP (GARP) for violations (against ARP spoofing)
- 802.1x limits network access to authenticate devices on assigned VLANs (phones do support 802.1x)
- Configuration of quality of service (QoS) for appropriate marking of voice packets
- Firewall ports configurations for blocking out any other traffic

### Endpoints security

Cisco endpoints support default security features such as signed firmware, secure boot (selected models), manufacturer installed certificate (MIC), and signed configuration files, which provide a certain level of security for endpoints.

In addition, a partner or customer can enable additional security, such as:

- Encrypt IP phone services (via HTTPS) for services such as Extension Mobility
- Issue locally significant certificates (LSCs) from the certificate authority proxy function (CAPF) or a public certificate authority (CA)
- Encrypt configuration files
- Encrypt media and signaling
- Disable these settings if they are not used: PC port, PC Voice VLAN Access, Gratuitous ARP, Web Access, Settings button, SSH, console

Implementing security mechanisms in the Dedicated Instance prevents identity theft of the phones and the Unified CM server, data tampering, and call-signaling / media-stream tampering.

Dedicated Instance over the network:

- Establishes and maintains authenticated communication streams
- Digitally signs files before transferring the file to the phone
- Encrypts media streams and call signaling between Cisco Unified IP phones
**Default security setup**

Security by default provides the following automatic security features for Cisco Unified IP phones:

- Signing of the phone configuration files
- Support for phone configuration file encryption
- HTTPS with Tomcat and other Web services (MIDlets)

For Unified CM Release 8.0 later, these security features are provided by default without running the Certificate Trust List (CTL) client.

**Trust verification service**

Because there are large number of phones in a network and IP phones have limited memory, Cisco Unified CM acts as a remote trust store through the Trust Verification Service (TVS) so that a certificate trust store does not have to be placed on each phone. The Cisco IP phones contact TVS server for verification because they cannot verify a signature or certificate through CTL or ITL files. Having a central trust store is easier to manage than having the trust store on each Cisco Unified IP phone.

TVS enables Cisco Unified IP phones to authenticate application servers, such as EM services, directory, and MIDlet, during HTTPS establishment.

**Initial trust list**

The Initial Trust List (ITL) file is used for the initial security, so that the endpoints can trust Cisco Unified CM. ITL does not need any security features to be enabled explicitly. The ITL file is automatically created when the cluster is installed. The Unified CM Trivial File Transfer Protocol (TFTP) server’s private key is used to sign the ITL file.

When the Cisco Unified CM cluster or server is in non-secure mode, the ITL file is downloaded on every supported Cisco IP phone. A partner can view the contents of an ITL file using the CLI command, admin:show itl.

By default, the partner admin is granted Level 1 access for CLI. Refer to [About CLI](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/cli%5Fref/15/cucm%5Fb%5Fcli%5Freference%5Fguide%5Frelease%5F15/cucm%5Fb%5Fcli%5Freference%5Fguide%5Frelease%5F1401%5Fchapter%5F01.html) for more information and to see which commands are allowed at Level 1\. 

Cisco IP phones need the ITL file to perform the following tasks:

- Communicate securely to CAPF, a prerequisite to supporting the configuration file encryption
- Authenticate the configuration file signature
- Authenticate application servers, such as EM services, directory, and MIDlet during HTTPS establishment using TVS
**Cisco CTL**

Device, file, and signaling authentication rely on the creation of the Certificate Trust List (CTL) file, which is created when the partner or customer installs and configures the Cisco Certificate Trust List Client.

The CTL file contains entries for the following servers or security tokens:

- System Administrator Security Token (SAST)
- Cisco CallManager and Cisco TFTP services that are running on the same server
- Certificate Authority Proxy Function (CAPF)
- TFTP server(s)
- ASA firewall

The CTL file contains a server certificate, public key, serial number, signature, issuer name, subject name, server function, DNS name, and IP address for each server.

Phone security with CTL provides the following functions:

- Authentication of TFTP downloaded files (configuration, locale, ringlist, and so on) using a signing key
- Encryption of TFTP configuration files using a signing key
- Encrypted call signaling for IP phones
- Encrypted call audio (media) for IP phones
**Security for Cisco IP Phones in Dedicated Instance**

Dedicated Instance provides endpoint registration and call processing. The signaling between Cisco Unified CM and endpoints is based on Secure Skinny Client Control Protocol (SCCP) or Session Initiation Protocol (SIP) and can be encrypted using Transport Layer Security (TLS). The media from/to the endpoints is based on Real-time Transport Protocol (RTP) and can also be encrypted using Secure RTP (SRTP).

Enabling mixed mode on Unified CM enables encryption of the signaling and media traffic from and to the Cisco endpoints.

### Secure UC applications

**Enabling mixed mode in Dedicated Instance**

Mixed mode is enabled by default in Dedicated Instance.

Enabling mixed mode in Dedicated Instance enables the ability to perform encryption of the signaling and media traffic from and to the Cisco endpoints.

From Cisco Unified CM release 12.5(1), a new option to enable encryption of signaling and media based on SIP OAuth instead of mixed mode / CTL was added for Jabber and Webex clients. Therefore, in Unified CM release 12.5(1), SIP OAuth and SRTP can be used to enable encryption for signaling and media for Jabber or Webex clients. Enabling mixed mode continues to be required for Cisco IP phones and other Cisco endpoints at this time. There is a plan to add support for SIP OAuth in 7800/8800 endpoints in a future release.

**Voice messaging security**

Cisco Unity Connection connects to Unified CM through the TLS port. When the device security mode is non-secure, Cisco Unity Connection connects to Unified CM through the SCCP port.

To configure security for Unified CM voice-messaging ports and Cisco Unity devices that are running SCCP or Cisco Unity Connection devices that are running SCCP, a partner can choose a secure device security mode for the port. If you choose an authenticated voicemail port, a TLS connection opens, which authenticates the devices by using a mutual certificate exchange (each device accepts the certificate of the other device). If you choose an encrypted voicemail port, the system first authenticates the devices and then sends encrypted voice streams between the devices.

For more information on Security Voice messaging ports, see _Voice-Messaging Security_ section of [Security Guide for Cisco Unified Communications Manager](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/security/15%5F0/cucm%5Fb%5Fsecurity-guide-release-15/cucm%5Fb%5Fsecurity-guide-1251SU2%5Fchapter%5F010001.html).

## Security for SRST, Trunks, Gateways, CUBE/SBC

A Cisco Unified Survivable Remote Site Telephony (SRST) enabled gateway provides limited call-processing tasks if the Cisco Unified CM on Dedicated Instance cannot complete the call.

Secure SRST-enabled gateways contain a self-signed certificate. After a partner performs SRST configuration tasks in Unified CM Administration, Unified CM uses a TLS connection to authenticate with the Certificate Provider service in the SRST-enabled gateway. Unified CM then retrieves the certificate from the SRST-enabled gateway and adds the certificate to the Unified CM database.

After partner resets the dependent devices in Unified CM Administration, the TFTP server adds the SRST-enabled gateway certificate to the phone cnf.xml file and sends the file to the phone. A secure phone then uses a TLS connection to interact with the SRST-enabled gateway.

It is recommended to have secure trunks for the call originating from Cisco Unified CM to the gateway for outbound PSTN calls or traversing through the Cisco Unified Border Element (CUBE).

SIP trunks can support secure calls both for signaling as well as media; TLS provides signaling encryption and SRTP provides media encryption.

### Securing communications between Cisco Unified CM and CUBE

For secure communications between Cisco Unified CM and CUBE, partners/customers need to use either self-signed certificate or CA-signed certificates.

For self-signed certificates:

1. CUBE and Cisco Unified CM generate self-signed certificates
2. CUBE exports certificate to Cisco Unified CM
3. Cisco Unified CM exports certificate to CUBE

For CA-signed certificates:

1. Client generates a key-pair and sends a Certificate Signing Request (CSR) to the Certificate Authority (CA)
2. The CA signs it with its private key, creating an Identity Certificate
3. Client installs the list of trusted CA Root and Intermediary Certificates and the Identity Certificate

## Security for remote endpoints

With Mobile and Remote Access (MRA) endpoints, the signaling and media is always encrypted between the MRA endpoints and Expressway nodes. If the Interactive Connectivity Establishment (ICE) protocol is used for MRA endpoints, signaling and media encryption of the MRA endpoints is required. However, encryption of the signaling and media between Expressway-C and the internal Unified CM servers, internal endpoints, or other internal devices, require mixed-mode or SIP OAuth.

Cisco Expressway provides secure firewall traversal and line-side support for Unified CM registrations. Unified CM provides call control for both mobile and on-premises endpoints. Signaling traverses the Expressway solution between the remote endpoint and Unified CM. Media traverses the Expressway solution and is relayed between endpoints directly. All media is encrypted between the Expressway-C and the mobile endpoint.

Any MRA solution requires Expressway and Unified CM, with MRA-compatible soft clients and/or fixed endpoints. The solution can optionally include the IM and Presence Service and Unity Connection.

### Protocol summary

The following table shows the protocols and associated services used in the Unified CM solution.

__Table 1\. Protocols and associated services__
| Protocol | Security | Service                                                        |
| -------- | -------- | -------------------------------------------------------------- |
| SIP      | TLS      | Session Establishment: Register, Invite, etc.                  |
| HTTPS    | TLS      | Logon, Provisioning/Configuration, Directory, Visual Voicemail |
| Media    | SRTP     | Media: Audio, Video, Content Sharing                           |
| XMPP     | TLS      | Instant Messaging, Presence, Federation                        |

For more information on MRA configuration, see: _MRA Deployment Scenarios_section of [Mobile and Remote Access Through Cisco Expressway Deployment Guide](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/expressway/config%5Fguide/X12-5/exwy%5Fb%5Fmra-expressway-deployment-guide/exwy%5Fb%5Fmra-expressway-deployment-guide%5Fchapter%5F011.html).

## Configuration options

The Dedicated Instance provides Partner with flexibility to customize services for end users through full control of day two configurations. As a result, the Partner is solely responsible for proper configuration of Dedicated Instance service for end user’s environment. This includes, but not limited to:

- Choosing secure/un-secure calls, secure/unsecure protocols such as SIP/sSIP, http/https etc and understanding any associated risks.
- For all MAC addresses not configured as secure-SIP in Dedicated Instance, an attacker can send SIP Register message using that MAC address and be able to make SIP calls, resulting in toll fraud. The perquisite is that the attacker can register their SIP device/software to Dedicated Instance without authorization if they know the MAC address of a device registered in Dedicated Instance.
- Expressway-E call policies, transform and search rules should be configured to prevent toll fraud. For more information on preventing toll fraud using Expressways refer to Security for Expressway C and Expressway-E section of [Collaboration SRND](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/srnd/collab12/collab12/gateways.html?bookSearch=true#45435).
- Dial plan configuration to ensure users can only dial destinations that are permitted e.g., prohibit national/international dialing, emergency calls are routed properly etc.  
For more information on applying restrictions using dial plan for Cisco Unified Communications Manager 12.x and above, refer to [Dial Plan](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/srnd/collab12/collab12/dialplan.html?bookSearch=true) section of Collaboration SRND.  
For more information on tested and recommended deployment models, refer to [Preferred Architecture for Cisco Collaboration Release 15 On-Premises Deployments](https://www.cisco.com/c/dam/en/us/td/docs/solutions/PA/overview/15x/clbpa15x.pdf).

## Certificate requirements for secure connections in Dedicated Instance

For Dedicated Instance, Cisco will provide the domain and sign all the certificates for the UC Applications using a public Certificate Authority (CA).

## Dedicated Instance – port numbers and protocols

The following tables describe the ports and protocols that are supported in Dedicated Instance. Ports that are used for a given customer depend on the Customer’s deployment and solution. Protocols depend on the customer’s preference (SCCP vs SIP), existing on-premises devices and what level of security to determine which ports are to be used in each deployment.

Dedicated Instance doesn't allow Network Address Translation (NAT) between endpoints and Unified CM as some of the call flow features won't work, for example the mid-call feature.

**Dedicated Instance – Customer Ports** 

The ports available for customers - between the Customer on-premises and Dedicated Instance is shown in Table 1 **Dedicated Instance Customer Ports**. All the ports listed below are for customer traffic traversing the peering links.

SNMP port is open by default only for Cisco Emergency Responder to support its functionality. As we don’t support partners or customers monitoring the UC applications deployed in the Dedicated Instance cloud, we don’t allow opening of SNMP port for any other UC applications. 

The SNMP port is enabled for the Singlewire (Informacast) application (only for Unified CM application). When submitting a request, make sure that the IP addresses associated with the Singlewire application are explicitly mentioned in the Reason to allow section of the request. Refer to [ Raise Service Request](https://help.webex.com/nvfve88) for more information.

Ports in the range 5063–5080 are reserved by Cisco for other cloud integrations, partner, or customer administrators are recommended not to use these ports in their configurations. 

__Table 2\. Dedicated Instance Customer ports__
| Protocol                                          | TCP/UDP     | Source            | Destination                                                    | Source Port       | Destination Port  | Purpose                                                                                                                                                                               |
| ------------------------------------------------- | ----------- | ----------------- | -------------------------------------------------------------- | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SSH                                               | TCP         | Client            | UC applications Not allowed for Cisco Expressway applications. | Greater than 1023 | 22                | Administration                                                                                                                                                                        |
| TFTP                                              | UDP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 69                | Legacy Endpoint Support                                                                                                                                                               |
| LDAP                                              | TCP         | UC applications   | External Directory                                             | Greater than 1023 | 389               | Directory sync to customer LDAP                                                                                                                                                       |
| HTTPS                                             | TCP         | Browser           | UC applications                                                | Greater than 1023 | 443               | Web access for self-care and administrative interfaces                                                                                                                                |
| Outbound Mail (SECURE)                            | TCP         | UC Application    | CUCxn                                                          | Greater than 1023 | 587               | Used to compose and send secure messages to any designated recipients                                                                                                                 |
| LDAP (SECURE)                                     | TCP         | UC applications   | External Directory                                             | Greater than 1023 | 636               | Directory sync to customer LDAP                                                                                                                                                       |
| H323                                              | TCP         | Gateway           | Unified CM                                                     | Greater than 1023 | 1720              | Call signaling                                                                                                                                                                        |
| H323                                              | TCP         | Unified CM        | Unified CM                                                     | Greater than 1023 | 1720              | Call signaling                                                                                                                                                                        |
| SCCP                                              | TCP         | Endpoint          | Unified CM, CUCxn                                              | Greater than 1023 | 2000              | Call signaling                                                                                                                                                                        |
| SCCP                                              | TCP         | Unified CM        | Unified CM, Gateway                                            | Greater than 1023 | 2000              | Call signaling                                                                                                                                                                        |
| MGCP                                              | UDP         | Gateway           | Gateway                                                        | Greater than 1023 | 2427              | Call signaling                                                                                                                                                                        |
| MGCP Backhaul                                     | TCP         | Gateway           | Unified CM                                                     | Greater than 1023 | 2428              | Call signaling                                                                                                                                                                        |
| SCCP (SECURE)                                     | TCP         | Endpoint          | Unified CM, CUCxn                                              | Greater than 1023 | 2443              | Call signaling                                                                                                                                                                        |
| SCCP (SECURE)                                     | TCP         | Unified CM        | Unified CM, Gateway                                            | Greater than 1023 | 2443              | Call signaling                                                                                                                                                                        |
| Trust Verification                                | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 2445              | Providing trust verification service to endpoints                                                                                                                                     |
| CTI                                               | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 2748              | Connection between CTI applications (JTAPI/TSP) and CTIManager                                                                                                                        |
| Secure CTI                                        | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 2749              | Secure connection between CTI applications (JTAPI/TSP) and CTIManager                                                                                                                 |
| LDAP Global Catalog                               | TCP         | UC Applications   | External Directory                                             | Greater than 1023 | 3268              | Directory sync to customer LDAP                                                                                                                                                       |
| LDAP Global Catalog                               | TCP         | UC Applications   | External Directory                                             | Greater than 1023 | 3269              | Directory sync to customer LDAP                                                                                                                                                       |
| CAPF Service                                      | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 3804              | Certificate Authority Proxy Function (CAPF) listening port for issuing Locally Significant Certificates (LSC) to IP phones                                                            |
| SIP                                               | TCP         | Endpoint          | Unified CM, CUCxn                                              | Greater than 1023 | 5060              | Call signaling                                                                                                                                                                        |
| SIP                                               | TCP         | Unified CM        | Unified CM, Gateway                                            | Greater than 1023 | 5060              | Call signaling                                                                                                                                                                        |
| SIP (SECURE)                                      | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 5061              | Call signaling                                                                                                                                                                        |
| SIP (SECURE)                                      | TCP         | Unified CM        | Unified CM, Gateway                                            | Greater than 1023 | 5061              | Call signaling                                                                                                                                                                        |
| SIP (OAUTH)                                       | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 5090              | Call signaling                                                                                                                                                                        |
| XMPP                                              | TCP         | Jabber Client     | Cisco IM&P                                                     | Greater than 1023 | 5222              | Instant Messaging and Presence                                                                                                                                                        |
| HTTP                                              | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 6970              | Downloading configuration and images to endpoints                                                                                                                                     |
| HTTPS                                             | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 6971              | Downloading configuration and images to endpoints                                                                                                                                     |
| HTTPS                                             | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 6972              | Downloading configuration and images to endpoints                                                                                                                                     |
| HTTP                                              | TCP         | Jabber Client     | CUCxn                                                          | Greater than 1023 | 7080              | Voicemail notifications                                                                                                                                                               |
| HTTPS                                             | TCP         | Jabber Client     | CUCxn                                                          | Greater than 1023 | 7443              | Secure voicemail notifications                                                                                                                                                        |
| HTTPS                                             | TCP         | Unified CM        | Unified CM                                                     | Greater than 1023 | 7501              | Used by Intercluster Lookup Service (ILS) for certificate-based authentication                                                                                                        |
| HTTPS                                             | TCP         | Unified CM        | Unified CM                                                     | Greater than 1023 | 7502              | Used by ILS for password-based authentication                                                                                                                                         |
| IMAP                                              | TCP         | Jabber Client     | CUCxn                                                          | Greater than 1023 | 7993              | IMAP over TLS                                                                                                                                                                         |
| HTTP                                              | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 8080              | Directory URI for Legacy Endpoint Support                                                                                                                                             |
| HTTPS                                             | TCP         | Browser, Endpoint | UC applications                                                | Greater than 1023 | 8443              | Web access for self-care and administrative interfaces, UDS                                                                                                                           |
| HTTPS                                             | TCP         | Phone             | Unified CM                                                     | Greater than 1023 | 9443              | Authenticated contact search                                                                                                                                                          |
| HTTPs                                             | TCP         | Endpoint          | Unified CM                                                     | Greater than 1023 | 9444              | Headset Management Feature                                                                                                                                                            |
| Secure RTP/SRTP                                   | UDP         | Unified CM        | Phone                                                          | 16384 to 32767 \* | 16384 to 32767 \* | Media (audio) - Music On Hold, Annunciator, Software Conference Bridge (Open based on call signaling)                                                                                 |
| Secure RTP/SRTP                                   | UDP         | Phone             | Unified CM                                                     | 16384 to 32767 \* | 16384 to 32767 \* | Media (audio) - Music On Hold, Annunciator, Software Conference Bridge (Open based on call signaling)                                                                                 |
| COBRAS                                            | TCP         | Client            | CUCxn                                                          | Greater than 1023 | 20532             | Back up and Restore Application Suite                                                                                                                                                 |
| ICMP                                              | ICMP        | Endpoint          | UC applications                                                | n/a               | n/a               | Ping                                                                                                                                                                                  |
| ICMP                                              | ICMP        | UC applications   | Endpoint                                                       | n/a               | n/a               | Ping                                                                                                                                                                                  |
| DNS                                               | UDP and TCP | DNS forwarder     | Dedicated Instance DNS servers                                 | Greater than 1023 | 53                | Customer Premise DNS forwarders to Dedicated Instance DNS servers. See [DNS requirements](#Cisco%5FGeneric%5FTopic.dita%5F596d2109-d2ef-42a3-b690-c9c8b854cf7e) for more information. |
| \* Certain special cases may use a greater range. |             |                   |                                                                |                   |                   |                                                                                                                                                                                       |

****Dedicated Instance – OTT ports** 

The following port can be used by Customers and Partners for Mobile and Remote Access (MRA) setup:

__Table 3\. Port for OTT__
| Protocol        | TCP/UCP | Source       | Destination | Source Port       | Destination Port | Purpose                            |
| --------------- | ------- | ------------ | ----------- | ----------------- | ---------------- | ---------------------------------- |
| SECURE RTP/RTCP | UDP     | Expressway C | Client      | Greater than 1023 | 36000-59999      | Secure Media for MRA and B2B calls |

**Inter-op SIP trunk between Multi-Tenant and Dedicated Instance (only for registration-based trunk)** 

The following list of ports needs to be allowed on the customer's firewall for the registration-based SIP trunk connecting between the Multi-Tenant and Dedicated Instance.

__Table 4\. Port for registration-based trunks__
| Protocol | TCP/UCP | Source                     | Destination | Source Port       | Destination Port | Purpose                               |
| -------- | ------- | -------------------------- | ----------- | ----------------- | ---------------- | ------------------------------------- |
| RTP/RTCP | UDP     | Webex Calling Multi-Tenant | Client      | Greater than 1023 | 8000-48198       | Media from Webex Calling Multi-Tenant |

**Dedicated Instance – UCCX ports** 

The following list of ports can be used by Customers and Partners for configuring UCCX.

__Table 5\. Cisco UCCX ports__
| Protocol   | TCP / UCP   | Source                   | Destination | Source Port       | Destination Port  | Purpose                                                                                                          |
| ---------- | ----------- | ------------------------ | ----------- | ----------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| SSH        | TCP         | Client                   | UCCX        | Greater than 1023 | 22                | SFTP and SSH                                                                                                     |
| Informix   | TCP         | Client or Server         | UCCX        | Greater than 1023 | 1504              | Contact Center Express database port                                                                             |
| SIP        | UDP and TCP | SIP GW or MCRP server    | UCCX        | Greater than 1023 | 5065              | Communication to remote GW and MCRP nodes                                                                        |
| XMPP       | TCP         | Client                   | UCCX        | Greater than 1023 | 5223              | Secure XMPP connection between the Finesse server and custom third-party applications                            |
| CVD        | TCP         | Client                   | UCCX        | Greater than 1023 | 6999              | Editor to CCX applications                                                                                       |
| HTTPS      | TCP         | Client                   | UCCX        | Greater than 1023 | 7443              | Secure BOSH connection between the Finesse server and agent and supervisor desktops for communication over HTTPS |
| HTTP       | TCP         | Client                   | UCCX        | Greater than 1023 | 8080              | Live-data reporting clients connect to a socket.IO server                                                        |
| HTTP       | TCP         | Client                   | UCCX        | Greater than 1023 | 8081              | Client browser trying to access the Cisco Unified Intelligence Center web interface                              |
| HTTP       | TCP         | Client                   | UCCX        | Greater than 1023 | 8443              | Admin GUI, RTMT, DB access over SOAP                                                                             |
| HTTPS      | TCP         | Client                   | UCCX        | Greater than 1023 | 8444              | Cisco Unified Intelligence Center web interface                                                                  |
| HTTPS      | TCP         | Browser and REST clients | UCCX        | Greater than 1023 | 8445              | Secure port for Finesse                                                                                          |
| HTTPS      | TCP         | Client                   | UCCX        | Greater than 1023 | 8447              | HTTPS - Unified Intelligence Center online help                                                                  |
| HTTPS      | TCP         | Client                   | UCCX        | Greater than 1023 | 8553              | Single sign-on (SSO) components access this interface to know the operating status of Cisco IdS.                 |
| HTTP       | TCP         | Client                   | UCCX        | Greater than 1023 | 9080              | Clients trying to access HTTP triggers or documents / prompts / grammars / live data.                            |
| HTTPS      | TCP         | Client                   | UCCX        | Greater than 1023 | 9443              | Secure port used to respond to clients trying to access HTTPS triggers                                           |
| TCP        | TCP         | Client                   | UCCX        | Greater than 1023 | 12014             | This is the port where live-data reporting clients can connect to the socket.IO server                           |
| TCP        | TCP         | Client                   | UCCX        | Greater than 1023 | 12015             | This is the port where live-data reporting clients can connect to the socket.IO server                           |
| CTI        | TCP         | Client                   | UCCX        | Greater than 1023 | 12028             | Third-party CTI client to CCX                                                                                    |
| RTP(Media) | TCP         | Endpoint                 | UCCX        | Greater than 1023 | Greater than 1023 | Media port is opened dynamically as needed                                                                       |
| RTP(Media) | TCP         | Client                   | Endpoint    | Greater than 1023 | Greater than 1023 | Media port is opened dynamically as needed                                                                       |

## Client security

### Securing Jabber and Webex with SIP OAuth

Jabber and Webex clients are authenticated through an OAuth token instead of a locally significant certificate (LSC), which doesn’t require certificate authority proxy function (CAPF) enablement (for MRA as well). SIP OAuth working with or without mixed mode was introduced in Cisco Unified CM 12.5(1) and later, Jabber 12.5 and later, and Expressway X12.5.

In Cisco Unified CM 12.5 and later, we have a new option in Phone Security Profile that enables encryption without LSC/CAPF, using single Transport Layer Security (TLS) + OAuth token in SIP REGISTER. Expressway-C nodes use the Administrative XML Web Service (AXL) API to inform Cisco Unified CM of the SN/SAN in their certificate. Cisco Unified CM uses this information to validate the Exp-C cert when establishing a mutual TLS connection.

SIP OAuth enables media and signaling encryption without an endpoint certificate (LSC).

Cisco Jabber uses Ephemeral ports and secure ports 6971 and 6972 ports via HTTPS connection to the TFTP server to download the configuration files. Port 6970 is a non-secure port for download via HTTP.

More details about SIP OAuth configuration: [SIP OAuth Mode](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/admin/cucm%5Fb%5Ffeature-configuration-guide-for-15/cucm%5Fm%5Fsip-oauth-mode-on-unified.html).

## DNS requirements

For Dedicated Instance Cisco provides the FQDN for the service in each region with the following format <customer>.<region>.wxc-di.webex.com for example, xyz.amer.wxc-di.webex.com.

The ‘customer’ value is provided by the administrator as part of the First Time Setup Wizard (FTSW). For more information refer to [Dedicated Instance Service Activation](https://help.webex.com/en-US/article/nefkee9/How-to-Activate-Dedicated-Instance#concept%5F23289D3D5A5EE17E30A4CC56EACAC13D).

DNS records for this FQDN needs to be resolvable from the customer’s internal DNS server to support on-premise devices connecting to the Dedicated Instance. To facilitate resolution, the customer needs to configure a Conditional Forwarder, for this FQDN, on their DNS server pointing to the Dedicated Instance DNS service. The Dedicated Instance DNS service is regional and can be reached, via the peering to Dedicated Instance, using the following IP addresses as mentioned in the below table [ Dedicated Instance DNS Service IP Address](#DNS%5FIP%5FAddress).

__Table 6\. Dedicated Instance DNS Service IP Address__
| Region/DC | Dedicated Instance DNS Service IP Address | Conditional Forwarding Example |
| --------- | ----------------------------------------- | ------------------------------ |
| **AMER**  | <customer>.amer.wxc-di.webex.com          |                                |
| LAX       | 69.168.17.100                             |                                |
| IAD       | 69.168.17.228                             |                                |
| **EMEA**  | <customer>.emea.wxc-di.webex.com          |                                |
| LON       | 178.215.138.100                           |                                |
| AMS       | 178.215.138.228                           |                                |
| **EU**    | <customer>.eu.wxc-di.webex.com            |                                |
| FRA       | 178.215.131.100                           |                                |
| AMS       | 178.215.131.228                           |                                |
| **APJC**  | <customer>.apjc.wxc-di.webex.com          |                                |
| SIN       | 103.232.71.100                            |                                |
| TKY       | 103.232.71.228                            |                                |
| **AUS**   | <customer>.aus.wxc-di.webex.com           |                                |
| MEL       | 178.215.128.100                           |                                |
| SYD       | 178.215.128.228                           |                                |
| **UK**    | <customer>.uk.wxc-di.webex.com            |                                |
| LON       | 178.215.135.100                           |                                |
| MAN       | 178.215.135.228                           |                                |
| **KSA**   | <customer>.sa.wxc-di.webex.com            |                                |
| JED       | 178.215.140.100                           |                                |
| RHU       | 178.215.140.228                           |                                |

The ping option is disabled for the above mentioned DNS server IP addresses for security reasons.

Until the conditional forwarding is in place, devices will not be able to register to the Dedicated Instance from the customers internal network via the peering links. Conditional forwarding is not required for registration via Mobile and Remote Access (MRA), as all the required external DNS records to facilitate MRA will be pre-provisioned by Cisco.

When using the Webex application as your calling soft client on Dedicated Instance, a UC Manager Profile needs be configured in Control Hub for each region’s Voice Service Domain (VSD). For more information refer to [UC Manager Profiles in Cisco Webex Control Hub](https://help.webex.com/en-US/article/n51zz9x/UC-Manager-Profiles-in-Cisco-Webex-Control-Hub). The Webex application will be able to automatically resolve the customer’s Expressway Edge without any end user intervention.

Voice Service Domain will be provided to the customer as part of the partner access document once the service activation is completed.

## Use a local router for phone DNS resolution

For phones that don’t have access to the corporate DNS servers, it’s possible to use a local Cisco router to forward DNS requests to the Dedicated Instance cloud DNS. This removes the need to deploy a local DNS server and provides full DNS support including caching.

_**Example configuration**_ :

_!_ 

_ip dns server_ 

_ip name-server <DI DNS Server IP DC1> <DI DNS Server IP DC2>_ 

_!_ 

The DNS usage in this deployment model is specific to phones and can only be used to resolve FQDN’s with the domain from the customers Dedicated Instance.

## References

- [Solution Reference Network Design (SRND)](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/srnd/collab12/collab12.html), Cisco Collaboration 12.x and above.
- [Preferred Architecture for Cisco Collaboration Release 15 On-Premises Deployments](https://www.cisco.com/c/dam/en/us/td/docs/solutions/PA/overview/15x/clbpa15x.pdf).
- [Security Guide for Cisco Unified Communications Manager](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/security/15%5F0/cucm%5Fb%5Fsecurity-guide-release-15.html)
