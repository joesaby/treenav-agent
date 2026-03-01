---
title: "Sending HTTP requests from Board, Desk, and Room Series devices"
product: "Devices"
article_id: "nthg6le"
url: "https://help.webex.com/en-us/article/nthg6le/Sending-HTTP-Requests-from-a-Board-Room-or-Desk-Device"
last_updated: "2018-12-13"
description: "This feature enables Board, Desk, or Room Series devices to initiate and receive
HTTP(S) requests with an HTTP(S) server. These devices support methods such as
Post, Put, Patch, Get, and Delete, allowing for different interactions with the
server."
tags: ["devices"]
source: "help.webex.com"
---

# Sending HTTP requests from Board, Desk, and Room Series devices

With macros, you can send data to an HTTP(S) server whenever you need to. You have control over what data is sent and how it's organized, making it simple to adapt the data for use with existing services.

Security measures:

- The HTTP(S) client request feature is disabled by default. A system administrator must explicitly enable the feature by setting HttpClient  \> Mode  to **On** ( `xConfiguration HttpClient Mode: On `).
- The system administrator can prevent the use of HTTP by setting HttpClient  \> AllowHTTP  to **False** ( `xConfiguration HttpClient AllowHTTP: False `).
- The system administrator can specify a list of HTTP(S) servers that the device is allowed to send data to. (See the `xCommand HttpClient Allow Hostname ` commands.)
- The number of concurrent HTTP(S) requests is limited.

The configurations referred in this article are available both from the web interface of the device and in the API. Commands are available through the API. Read the [Advanced Settings article ](https://help.webex.com/article/n5pqqcm) for information how to access the web interface and use the API.

## List of Allowed HTTP(S) Servers

The system administrator can use these commands to set up and maintain a list of up to ten allowed HTTP(S) servers (hosts):

- `xCommand HttpClient Allow Hostname Add Expression: <Regular expression that matches the host name or IP address of the HTTP(S) server> `
- `xCommand HttpClient Allow Hostname Clear `
- `xCommand HttpClient Allow Hostname List `
- `xCommand HttpClient Allow Hostname Remove Id: <id of an entry in the list> `

If the list contains server entries, you can only send HTTP(S) requests to those servers. However, if the list is empty, you can send requests to any HTTP(S) server.

The check against the list of allowed servers is performed both when using insecure (HTTP) and secure (HTTPS) transfer of data.

## HTTPS without certificate validation

When sending requests over HTTPS, the device checks the certificate of the HTTPS server by default. If the HTTPS server certificate is not found to be valid, you get an error message. The device doesn’t send any data to that server.

We recommend using HTTPS with certificate validation. If certificate validation is not possible, the system administrator can set HttpClient  \> AllowInsecureHTTPS  to **On** ( `xConfiguration HttpClient AllowInsecureHTTPS: On `). This allows the use of HTTPS without validating the certificate of the server.

## Sending HTTP(S) requests

Once the HTTP(S) client request feature is enabled, you can use the following commands to send requests to an HTTP(S) server. `<method> ` is either `Post `, `Put `, `Patch `, `Get `, or `Delete `.

- `xCommand HttpClient <Method> [AllowInsecureHTTPS: <True/False>] [Header: <Header text>] [ResponseSizeLimit: <Maximum response size>] [ResultBody: <None/PlainText/Base64>] [Timeout: <Timeout period>] Url: <URL to send the request to> `

Adding header fields is optional, and you can add up to 20 fields. 

The `AllowInsecureHTTPS ` parameter has an effect only if the system administrator has allowed the use of HTTPS without validating the certificate of the server. If so, you can send data to the server without validating the server certificate if the parameter is set to `True `. If you leave out the parameter, or set it to `False `, data is not sent if the certificate validation fails.

The `ResposenSizeLimit ` parameter is the maximum payload size (bytes) that the device accepts as a response from the server. If the response payload is larger than this maximum size, the command returns a status error. The error message says that the maximum file size is exceeded. However, this has no effect on the server side; the server has received and processed the request properly.

Use the `ResultBody ` parameter to decide how to format the body of the HTTP response from the server in the command result. You have three options:

- `None `: Don't include the body of the HTTP response in the command result.
- `Base64 `: Base64 encode the body before including it in the result.
- `PlainText `: Include the body in the result as plain text. If the response contains non-printable letters, the command returns a status error with a message saying that non-printable data was encountered.

Use the `Timeout ` parameter to set a timeout period (seconds). If the request is not completed during this period, the API returns an error.

Enter the payload (data) right after you have issued the command. Anything that you enter, including line breaks, is part of the payload. When done, finish with a line break (“\\n”) and a separate line containing just a period followed by a line break (“.\\n”). Now the command is executed, and the data is sent to the server.

## Examples

The body of the message is JSON in both these examples. It could be any format, depending on the expected format of the service that is receiving the messages.

**Example 1: IoT device control using HTTP Post** 

Here is a macro function that turns on a light that is connected to a Philips Hue Bridge:

```

     function hue_command(data) { var url = 'http://192.0.2.10/api/'ZXlU4tUtQ23Pjbdyl-kiyCjTs0i5ANDEu1ypJq0-/lights/1/state'; var headers = 'Content-Type: application/json'; var command = '{"on":true}'; xapi.command('HttpClient Put', { 'Url': url, 'Header': headers }, command); } 
   
```

You can do the same at the command line using the API:

```

     xcommand HttpClient Put Header: "Content-Type: application/json" URL: "http://192.0.2.10/api/'ZXlU4tUtQ23Pjbdyl-kiyCjTs0i5ANDEu1ypJq0-/lights/1/state" {"on":true} . 
   
```

**Example 2: Posting data to a monitoring tool using HTTP Post** 

```

     xcommand HttpClient Post Header: "Content-Type: application/json" URL: "https://mymonitoringserver.com/service/devicemonitoring" {"Message":"A user reported an issue with this system","systemName":"BoardRoom 4th floor","softwareVersion":"ce9.6.0","softwareReleaseDate":"2018-12-13","videoMonitors":"Dual"} . 
   
```

## Further Information

Find more details about how to use HTTP client requests in the [Customization guide ](https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-installation-and-configuration-guides-list.html). Choose the latest version.

Cisco support (TAC) doesn’t support debugging of third-party code, including macros. Please check <https://roomos.cisco.com> if you need help with macros and third-party code.
