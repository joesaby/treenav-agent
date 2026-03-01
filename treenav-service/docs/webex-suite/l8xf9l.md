---
title: "Configure multi call window for Calling in Webex App (Unified CM)"
product: "Webex Suite"
article_id: "l8xf9l"
url: "https://help.webex.com/en-us/article/l8xf9l/Configure-multi-call-window-for-Calling-in-Webex-App-Unified-CM"
last_updated: "2024-09-22"
description: "The multi call window is a separate, floating window that helps Webex App users
to manage multiple or shared lines. As well as making and receiving calls on
multiple or shared lines, users can see the status of all lines, and they also
have better access to features like hold, transfer, and barge, without changing
to another window."
tags: ["webex-suite"]
source: "help.webex.com"
---

# Configure multi call window for Calling in Webex App (Unified CM)

- [Overview](#Cisco%5FConcept.dita%5F3ce86402-c0cd-439d-a544-81ff04542428)
- [Prerequisites](#Cisco%5FReference.dita%5F170e0781-dd5b-46a5-b2ac-eab204042c97)
- [Configure features](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F9263a4e1-1c10-4c14-b497-3b640a56c6bd)
- [Limitations](#Cisco%5FConcept.dita%5F07eca7f2-f5ae-47ff-9834-5d014ec0447f)

The multi call window is useful for people who have multiple lines, but it can also be used by any enterprise calling users with a single line. This article describes how to configure the underlying features for users in your organization.

Users can read [Webex App | Manage your phone calls in the Multi Call window](https://help.webex.com/n3t2z74) for details of how to interact with this window.

If the users have an enterprise calling license, and you have given them multiple lines, they see the multi call window by default. Users can also show or hide the window for themselves, in their Webex App calling settings (Settings \> Calling \> Show Multi Call window). 

**_The multi call window in Webex App_**

Multi call window is available for Webex App users, if your deployment meets the following prerequisites:

- **Calling offer**: Calling in Webex App (Unified CM). See [Deployment guide for Calling in Webex App (Unified CM)](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/wbxt/ucmcalling/unified-cm-wbx-teams-deployment-guide.html) for details.
- **User licensing**: Enterprise calling license.
- **Client platforms**: Webex App for Windows desktop, Webex App for VDI.
- **Unified CM**: Release 11.5 SU3 onwards.
- **Unified CM configuration**: multiple lines, barge, privacy, voicemail, message waiting indicator (MWI).  
To support message waiting indicator (MWI) per line, and privacy settings, you must use Unified CM release 12.5 SU6 or 14.1 SU1 onwards.  
If you're on an earlier version of Unified CM, you must [download and extract this COP file](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/wbxt/ucmcalling/adminfiles/cmterm-webex-desktop-multi-call-220620-k4-cop.zip) and [install it using Cisco Unified OS Administration](https://www.cisco.com/web/software/284006014/130523/Readme.pdf).
- **Control Hub**: Users' calling set to Calling in Webex App (Unified CM).

You should configure Unified CM for Message Waiting Indicator (MWI), Privacy, and Barge so that users see these features on the multi call window. You may also need to install a COP file on Unified CM. See the information in the _Prerequisites_ section of this article.

These features are not _required_ for the multi call window, but they are part of the calling experience for the people who benefit from this feature. You may already have configured these features with Calling in Webex App (Unified CM) for your organization. 

Review the following sections and the linked documentation for details:

[Configure Voicemail and MWI](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fcff6bd39-9f7a-41c4-8db6-4f2a85748bcb)

Voicemail and MWI rely on Cisco Unity Connection being integrated with your Unified CM environment. Use the following documents if you need to configure Cisco Unity Connection:

- _Cisco Unified Communications Manager SIP Integration Guide for Cisco Unity Connection_ for your release at <https://www.cisco.com/c/en/us/support/unified-communications/unity-connection/products-installation-and-configuration-guides-list.html>
- "Managing the Phone System Integrations in Cisco Unity Connection" in the _System Administration Guide for Cisco Unity Connection_ for your release at <https://www.cisco.com/c/en/us/support/unified-communications/unity-connection/products-maintenance-guides-list.html>.
- [Understanding & Troubleshooting MWI on Unity Connection](https://community.cisco.com/t5/collaboration-voice-and-video/understanding-troubleshooting-mwi-on-unity-connection/ta-p/3162948)

[Configure privacy](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fdbd91177-f2de-471f-af21-e94ff326aaba)

See the Privacy chapter in the _Feature Configuration Guide for Cisco Unified Communications Manager_ for your release at <https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/products-installation-and-configuration-guides-list.html>.

The Privacy settings are at the device level. When Privacy is on, other members of the shared lines cannot see the calling information and they cannot barge into the remote-in-use call of the shared line.

[Configure barge](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F90b51815-ff81-43b8-98b0-4f3385e09860)

This task enables the Barge button in the multi call window of a remote-in-use call at a shared line. Clicking the Barge button, a Barge call is set up by using the built-in conference bridge, if available.

Before you begin

See the Barge chapter in the _Feature Configuration Guide for Cisco Unified Communications Manager_ for your release at <https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/products-installation-and-configuration-guides-list.html>.

| Configure the CucmCallBargeMode client configuration parameter. You can configure this parameter with one of these 2 values: **OFF** (default)—The barge button does not show in the Webex App. **BARGE**—The barge initiator sends a barge invite, and the barge target acts as a conference server. Example: <CucmCallBargeMode>BARGE</CucmCallBargeMode> |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

- **Calling offers**: Some midcall features can't be controlled from the multi call window when the Webex App uses Webex Calling, or Webex for Service Providers.
- **Client platforms**: The multi call window is not available on MacOS or Linux versions of Webex App.
- **Dialing**: The number entry field does not support contact search. You can search for, enter, or paste phone numbers to make calls from the multi call window.
