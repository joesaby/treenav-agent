---
title: "Borderless CTI for Dedicated Instance"
product: "Dedicated Instance"
article_id: "6yojgab"
url: "https://help.webex.com/en-us/article/6yojgab/Borderless-CTI-for-Dedicated-Instance"
last_updated: "2025-02-17"
description: "Computer Telephony Integration (CTI) allows WebexApp users to manage calls and
access customer data, both on-premise and remotely. The Borderless CTI feature
enables Deskphone control and Extend &amp; Connect functionality for remote users
over the internet by default."
tags: ["dedicated-instance", "webex-calling"]
source: "help.webex.com"
---

# Borderless CTI for Dedicated Instance

## Overview

Computer telephony integration (CTI) enables you to use Webex App to leverage computer-processing functions while making, receiving, and managing telephone calls. CTI applications allow you to retrieve customer information from a database on the basis of information provided from the caller ID. CTI applications also enable you to use information that interactive voice response (IVR) system captures, so that the call is routed to the appropriate customer service representative or the information is provided to the individual who is receiving the call.

Currently, you can use Webex App to control Deskphone of the Desk IP phones or Remote Phones(Extend & Connect) using CTI when the Webex App is on premise.

When you work remotely from home will not be able to do Deskphone control of the Desk IP phones when the Webex App is connected over MRA without VPN as Cisco Expressway does not support it. You want to use Webex App to make and receive calls using a home or hotel phone (Extend & Connect), because their PC hardware or available network connection does not support VoIP will not work over MRA as Cisco Expressway does not support it.

Borderless CTI feature provides support to you over internet (MRA users). This feature enables you to control Desk-phone control and Extend and Connect. Borderless CTI provides:

- Deskphone control: You want to connect Webex App to desk phone to handle calls (dial digits, make calls, end calls and so on )​
- Extend & Connect : You want to use Webex App to make and receive calls which use home or hotel phone, because your PC hardware or available network connection does not support VoIP.​ Refer [Extend and Connect](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/admin/14/systemConfig/cucm%5Fb%5Fsystem-configuration-guide-14su2.html).

## Support Versions and Phone Types

- This feature is supported on DI version of 14.2SU(2) and above, Webex App 42.7 and above.
- Cisco IP Phone 8800 Series, Cisco IP Phone 7800 Series, Cisco Webex Desk Series (DX), Deskpro are the list of phone types supported.  
Other phone types like 69XX and SCCP phones are not supported.
- Webex App Mobile and Tablet are not supported.
