---
title: "Join Meetings from Video Systems without Host PINs or Keys"
product: "Webex Meetings"
article_id: "nq6xdk7"
url: "https://help.webex.com/en-us/article/nq6xdk7/Join-Meetings-from-Video-Systems-without-Host-PINs-or-Keys"
last_updated: "2024-09-21"
description: "You can join Cisco Webex Meetings easily from your video conferencing system
without compromising security. Video systems within the same company can now
connect to meetings without being prompted for a host PIN or key."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Join Meetings from Video Systems without Host PINs or Keys

You can ensure that only the cloud-registered and on-premises video systems in your organization can join your Webex meetings without the need for PINs and keys. For more information on joining a Webex meeting from a standards-based video system, see [Use the Join Webex Button on a Video Device to Join Webex Meetings](https://help.webex.com/36bbgm/).

Follow the relevant sections as listed below:

## Administrators

If you're a Webex site administrator, follow these steps:

1. Check Allow Users to Host Meetings from a Video Conferencing System Without a PIN in Cisco Webex [Control Hub](https://help.webex.com/ebbjqz/) and Webex [Site Administration](https://help.webex.com/nfgr7ux/).
2. You can also make templates available on your site by configuring them in [Control Hub](https://help.webex.com/ebbjqz/) and [Site Administration](https://help.webex.com/nfgr7ux/).
3. If your standards-based video systems use the Session Initiation Protocol (SIP), follow these steps:  

  - Complete the domain verification process as described in [Domain Verification Process for SIP Video Conferencing Systems](https://help.webex.com/nrasz4w/).
  - Make sure that you configure your enterprise edge ( [Cisco Expressway-E](https://help.webex.com/notkgfab/)) with a mTLS certificate with a Subject Alternative Name field that contains your SIP video domain, such as, `example.com`.

## End Users

If you are a user who wants to allow alternate hosts to join meetings from a standards-based video system, follow these steps:
1. To create and save a template for joining meetings without a PIN, see [Create and Save a Template for Joining Meetings without a PIN](https://help.webex.com/jajhvw/).
2. To allow others to start your Personal Room meetings from a video system without a PIN, see [Allow Others to Start My Personal Room Meetings from a Video Device without a PIN](https://help.webex.com/nf4pzap/).
