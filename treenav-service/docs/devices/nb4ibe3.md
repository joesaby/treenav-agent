---
title: "Webex Share certificate management"
product: "Devices"
article_id: "nb4ibe3"
url: "https://help.webex.com/en-us/article/nb4ibe3/Webex-Share-Certificate-Management"
last_updated: "2024-09-14"
description: "If your organization uses enhanced security, you can generate certificates to
complete authentication of a new device with your corporate network."
tags: ["devices"]
source: "help.webex.com"
---

# Webex Share certificate management

## About certificates

Most Cisco devices support wireless connection using X.509 certificates in addition to a password. If your company uses certificates for wireless connection, then you deploy the certificates before activating the device.

You create and manage certificates from the device setup web page, which you access by entering the device's IP address into a browser. When the device registers with Control Hub, the setup page becomes the device web page. If you don't see the setup page, then do a factory restart and return the device to the factory state.

If you decide to use certificates after deployment, then do a factory reset and delete the device from Control Hub. Reactivate the device by generating a second activation code. But don't register the device with Control Hub until after you deploy the certificates.

[Generate a Certificate](#task%5F85886E102E960E53A2A793B50101AD07)

You generate the certificate before you activate your device. If you want to use EAP-TLS for Wi-Fi or for 802.1x, obtain a device certificate and then load the CA certificates to your device.

Before you begin

- Connect your device to your network.
- Obtain the device IP address.

| 1 | Open a web browser and enter the following URL, where _IP address_ is the IP address for your device: http://_IP address_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate Setup \> Add certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Select Enroll Certificates.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4 | Fill in the fields: Common Name—The room name or name that identifies the device. Organizational Unit Name—The department name making the certificate request. For example Finance or IT. Organizational Name—The full legal company name making the certificate request. Include any suffixes such as Ltd. or Corp. Location—The city or town where the company is located. State—The full state name where the company is located. Do not abbreviate. Country—The two-letter ISO code for the country where your organization is located. For example, US, GB, FR. Key size: 2048 or 4096 Key size: 2048 or 4096 Certificate Usage—Check one or more of the following EAP/TLS for wireless connections 802.1x for wired connections Extended Key Usage options—Select both of the following extensions: serverAuth for server authentication clientAuth for client authentication |
| 5 | Click Generate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

What to do next

Get the certificate signed.

[Download and sign the certificate](#task%5FA9EF63B8C5ACFC9E4FD86086556C4BF4)

After you generate your certificate, download the certificate signing request (CSR) so it can be completed.

Before you begin

You have generated an unsigned certificate request for this device. 

Obtain the device IP address for your device.

| 1 | Open a web browser and enter the following URL, where _IP address_ is the IP address of the device: http://_IP address_ |
| - | ----------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate Setup \> Add certificate.                                                                                      |
| 3 | Select Manage Certificates.                                                                                             |
| 4 | Click Download. The certificate downloads to your computer.                                                             |
| 5 | Get the downloaded certificate signing request (CSR) signed. Follow your organization's customary procedure.            |

What to do next

After you get the CSR signed, upload the signed certificate.

[Upload the certificate](#task%5FD53EF48CEE18F48D4895055B3E43B00E)

Upload a certificate to your server. The appropriate authority must sign it first.

Before you begin

Obtain the device IP address.

Verify that the certificate is in Privacy-Enhanced Mail(PEM) format.

| 1 | Open a web browser and enter the following URL, where _IP address_ is the IP address of the device: http://_IP address_                                         |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate Setup \> Add certificate.                                                                                                                              |
| 3 | Select Manage Certificates.                                                                                                                                     |
| 4 | Under Upload signed certificate, click Upload. Navigate to the certificate's location. If you upload the wrong certificate, find the correct one and upload it. |

[Add a certificate authority or root certificate](#task%5F6EE19952420812E11C095D6AA59A90FF)

Before you begin

You have a certificate authority (CA) or root certificate to upload to be used with wifi or 802.1x authentication.

Obtain the device IP address.

| 1 | Open a web browser and enter the following URL, where _IP address_ is the IP address of the device: http://_IP address_ |
| - | ----------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate Setup \> Add certificate.                                                                                      |
| 3 | Click Add CA/root Certificate.                                                                                          |
| 4 | Choose at least one of the following: 802.1x EAP/TLS Digital Signage                                                    |
| 5 | Click Upload certificate.                                                                                               |

[Configure Wi-Fi settings to support certificates](#task%5FB407DEC301C903235E49070F11229C9C)

After you upload the signed certificates, configure the Wi-Fi settings and select your certificate.

Before you begin

Obtain the device IP address.

| 1  | Open a web browser and enter the following URL, where _IP address_ is the IP address of the device: http://_IP address_ |
| -- | ----------------------------------------------------------------------------------------------------------------------- |
| 2  | Navigate Setup \> Add certificate.                                                                                      |
| 3  | Go to Network \> Wi-Fi.                                                                                                 |
| 4  | Choose an SSID.                                                                                                         |
| 5  | Click the first drop-down list box to show the supported protocols.                                                     |
| 6  | Choose EAP-TLS.                                                                                                         |
| 7  | In Choose Client Certificate, choose a certificate.                                                                     |
| 8  | In Choose CA Certificate, choose a certificate.                                                                         |
| 9  | (Optional) Fill in a username.                                                                                          |
| 10 | Click Join.                                                                                                             |

[Enroll an Ethernet 802.1X certificate](#task%5F9ACBF07F840780D0067C3EDB8E800331)

You need an Ethernet 802.1x certificate for devices that use Wi-Fi.

Obtain the device IP address.

Before you begin

Generate a certificate with the 802.1x protocol and get it signed.

| 1 | Open a web browser and enter the following URL, where _IP address_ is the IP address of the device: http://_IP address_ |
| - | ----------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate Setup \> Add certificate.                                                                                      |
| 3 | Select Ethernet 802.1X Certificate.                                                                                     |
| 4 | Select the certificate from the drop-down list.                                                                         |
| 5 | Click Select.                                                                                                           |

[View available certificates](#task%5F261636D1B8EC4244EBA555AFACFE8B18)

After you upload a certificate, you can view the certificate information. This is useful when troubleshooting an issue. 

Before you begin

Obtain the device IP address.

| 1 | Open a web browser and enter the following URL, where _IP address_ is the IP address of the device: http://_IP address_                                                                                                                                   |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate Setup \> Add certificate.                                                                                                                                                                                                                        |
| 3 | Select Enroll Certificates.                                                                                                                                                                                                                               |
| 4 | Click Info to view information about a certificate. Each certificate shows: Common Name—The fully qualified domain name Cert Type—Values are CSR certificate, Local, CA/Root Cert Usage—Lists the protocols that a certificate supports (802.1x, EAP/TLS) |
| 5 | (Optional) If needed, click Delete to delete a certificate.                                                                                                                                                                                               |
