---
title: "Connect your Board, Desk, or Room Series device to a proxy server"
product: "Devices"
article_id: "no5dwuq"
url: "https://help.webex.com/en-us/article/no5dwuq/Connect-your-Board-Desk-or-Room-Series-device-to-a-proxy-server"
last_updated: "2025-06-06"
description: "Find out how you can connect your Board, Desk, or Room Series device to a proxy
server. A proxy server can help you apply an extra measure of security or apply
company policies such as limiting internet usage."
tags: ["devices"]
source: "help.webex.com"
---

# Connect your Board, Desk, or Room Series device to a proxy server

You can configure a Board, Desk, or Room Series device running RoomOS to use a proxy server for HTTPS and WebSocket traffic. 

You can add your proxy server details manually or by using auto discovery. Auto discovery uses a URL to locate a configuration file containing the relevant proxy server details.

RoomOS supports the following types of authentication:

- None
- Basic
- Digest

If you want media traffic to go through a proxy server, you also need to set the configuration _Webex Meetings HttpProxyForMedia Mode_ to _Auto_. Keep in mind that this may lead to lower media quality. To keep media quality as best as possible, the proxy needs to support the bitrates that are used by the deployed devices in the environment, and total round-trip time from the device to the media server should be as low as possible.

1. Access the proxy settings.  

  - **New or factory reset device:** Select Proxy options on the registration screen. You might have to select a call service in the First Time Setup Wizard first - choose Cisco Webex.
  - **Registered device:** Open the Device Settings. Scroll to Network and service and tap Network connection. On the next screen, select Advanced network settings and scroll down to HTTP Proxy.
2. Add the proxy server details manually, by autodiscovery (WPAD), or use a PAC URL script.

  - **Manual configuration:** Choose Manual from the Proxy options. Enter the Proxy Host IP address/FQDN and the Proxy Port number. To use digest authentication (optional), toggle Proxy server requires authentication ON. Enter a Username and a Passphrase.
  - **WPAD:** When you choose WPAD from the Proxy options, the HTTP-proxy is fully autoconfigured. Your device gets the Proxy Server's address from DNS or DHCP.
  - **PAC URL:** Choose PAC URL from the Proxy options and then Enter PAC URL for the PAC (Proxy Auto Configuration) script.
3. When you're finished, tap Apply.

## DX80

1. Access the proxy settings.

  - **New or factory reset device:** Select Proxy options on the registration screen. You might have to select a call service first - choose Cisco Webex.
  - **Registered device:** Open the Settings menu. Scroll to Network and service and select Network connection. On the next screen, select Advanced network settings and scroll down to Proxy.
2. Add the proxy server details manually or by auto discovery.

  - **Manual configuration:** Choose Manual from the Proxy options. Enter the Proxy Host IP address/FQDN and the Proxy Port number. To use digest authentication (optional), toggle Proxy server requires authentication ON. Enter a Username and a Passphrase.
  - **Auto discovery:** Choose Auto from the Proxy options. Use Auto Discovery (WPAD) is toggled ON by default. Leave this setting on if your device gets the Proxy Server's address from DNS or DHCP. Or, you can toggle the setting off and then type in the PAC URL where the endpoint can get the Proxy server address.
3. When you're finished, tap the checkmark on the top right of the screen.
