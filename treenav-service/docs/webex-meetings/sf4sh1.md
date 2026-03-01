---
title: "Webex App | Security Best Practices"
product: "Webex Meetings"
article_id: "sf4sh1"
url: "https://help.webex.com/en-us/article/sf4sh1/Webex-App-Security-Best-Practices"
last_updated: "2024-09-17"
description: "Webex App uses various security frameworks, to protect your files and messages
while in transit and when they&#x27;re stored in the cloud. You can also manage who
can view content or join meetings."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Webex App | Security Best Practices

## Create spaces with the right people

Webex App brings messaging, meetings, and calling together in one place from the spaces and teams you create with other people. You can also invite people outside your organization, such as vendors and customers, to collaborate with you. Because it’s so easy to bring people together, think about how you want to control who’s in the space.

The Webex App app uses advanced cryptographic algorithms to safeguard content you share and send. The only people who can view files and messages in a space are those invited to that space or authorized individuals. 

### Moderate spaces

 You can add extra security by [adding moderators](https://help.webex.com/en-us/xuwad5/Make-Someone-a-Moderator-on-a-Team) for teams and spaces with sensitive information. Moderators can control who has access to the space, who can add others, who sees the information that's shared and can delete files and messages.

Free Webex App users can create Teams and add moderators to the General space, but can’t add moderators to regular spaces.

### Check if there are people outside your organization

Check if there are [external users](https://help.webex.com/en-us/no3o617/External-Users-in-the-Cisco-Webex-Teams-App) in a space before you send messages, so you don't accidentally share confidential information. 

If spaces include people from outside your company, you'll see areas in the spaces highlighted, like the border, background, the icon in the message area, and their email addresses.

## Join and host secure meetings

Depending on whether you have a Webex Meetings and Webex App account, or Webex App account only, there are several ways you can secure meetings - lock meetings, restrict access. 

### Check who's in the meeting

When you [schedule a space meeting](https://help.webex.com/nu5w9x3/), it includes everyone in your space at a specified date and time, whether it's a space with one or more people. Check who is in the space before you schedule a meeting. You can also [find out who joined your meeting](https://help.webex.com/gdcry/).

### Lock your meeting

Available with a Webex Meetings enabled account.

You can [lock meetings](https://help.webex.com/zcvgyc/) after you start it from Webex App. If you don't lock your meeting, anyone who has the meeting link can join it. No one can enter the room until you unlock it or [let them in](https://help.webex.com/3gt73c/).

### Remove uninvited people from the meeting

Available with a Webex Meetings enabled account.

If someone who wasn't invited join's a meeting, you can [expel them](https://help.webex.com/en-us/WBX30745/How-Do-I-Expel-a-Meeting-Participant) from a meeting at any time.

## Things site administrators can do

Site administrators have the option to set up features in their organization that use existing security policies: 

### Synchronize employee directories

[Synchronize employee directories](https://help.webex.com/en-us/aumpbz/Synchronize-Azure-Active-Directory-Users-into-Cisco-Webex-Control-Hub) with Webex App. Automatically recognizes when someone has left a company, so former employees won't be able to access company data using Webex App.

### Enable single sign-on (SSO)

Single sign-on (SSO) which uses one unique identifier to give people in your organization access to all enterprise applications. Administrators can [configure SSO](https://help.webex.com/en-us/lfu88u/Single-Sign-On-Integration-in-Cisco-Webex-Control-Hub) for Cisco Webex applications.

### Enforce password security standards

When you've configured SSO, you can also ensure that Webex App requires passwords and authentication. The Webex App app supports identity providers that use Security Assertion Markup Language (SAML) 2.0 and Open Authorization (OAuth) 2.0 protocols.

[Levels of encryption security](#id%5F134644)

The Webex App app encrypts messages, files, and names of spaces on your device before sending them to the cloud. When the data arrives at our servers, it's already encrypted. It's processed and stored until it's decrypted on your device. However, the app can’t provide strong encryption for messages and files linked to in-app automation tools like bots or integrations or to Adobe Acrobat PDF and Microsoft Word documents sent to spaces from Box.

We use Secure Hypertext Transfer Protocol (HTTPS) to encrypt data while in transit between your device and our servers, which protects the identities of both senders and receivers.

Our strong encryption uses Advanced Encryption Standard (AES) 128, AES256, Secure Hash Algorithm (SHA) 1, SHA256, and RSA.

For audio, video, and screen sharing, we encrypt shared content using the Secure Real-Time Transport Protocol (SRTP).

### Other Resources

[Cloud Collaboration Security Technical Paper Series - Cisco Webex Application Security](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/esp/Cisco-Webex-Apps-Security-White-Paper.pdf)

[Cisco Webex Security and Privacy](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/esp/cisco-spark-security-white-paper.pdf)

[Cisco Webex Tech Ops and Security - Frequently Asked Questions (FAQs)](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/esp/Cisco-Spark-Security-Frequently-Asked-Questions.pdf)

[Cisco Webex Meetings Security Technical Paper](https://www.cisco.com/c/dam/en/us/products/collateral/conferencing/webex-meeting-center/white-paper-c11-737588.pdf?dtid=osscdc000283)
