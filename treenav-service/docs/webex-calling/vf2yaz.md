---
title: "Webex App | App Security"
product: "Webex Calling"
article_id: "vf2yaz"
url: "https://help.webex.com/en-us/article/vf2yaz/Webex-App-Security"
last_updated: "2024-09-19"
description: "Webex App uses various security frameworks, including end-to-end encryption, to
protect your data so your files and messages stay safe while in transit and when
they&#x27;re stored in the cloud. You can also manage who can access or view content
in a space."
tags: ["webex-calling", "webex-meetings", "webex-messaging"]
source: "help.webex.com"
---

# Webex App | App Security

## Webex end-to-end encryption

Webex end-to-end encryption uses the Webex Key Management System (KMS) to create and manage encryption keys that are used to secure content shared in Webex Meetings and Messaging. Webex end-to-end encryption is used to encrypt user-generated content such as chat messages, files, calendar meeting information, whiteboards, and annotation

With Webex end-to-end encryption:

- An additional layer of encryption is added to data in transit and at rest.
- Webex App uses end-to-end encryption to encrypt content using the AES-256-GCM cipher before transmitting the content over TLS to the Webex cloud.
- Webex end-to-end encrypted content is stored on content servers in the Webex cloud that use the AES-256-CTR to encrypt data at rest.

By default, our cloud-based KMS generates and distributes encryption keys. You also have an option with Webex Hybrid Data Security (HDS) to manage your own on-premises version of the key management system.

The added layer of security the Webex end-to-end encryption provides, protects both user data in transit from transport layer security (TLS) interception attacks and stored user data from potential bad actors in the Webex cloud.

The Webex cloud can access and use end-to-end encryption keys, but only to decrypt data as required for core services such as:

- Message indexing for search functions
- Data loss prevention
- File transcoding
- eDiscovery
- Data archival

Webex uses Transport Layer Security (TLS) v1.2 or v1.3 to encrypt data in transit between your device and our servers. The TLS cipher selection is based on the Webex server TLS preference.

Using either TLS 1.2 or 1.3, Webex prefers cipher suites using:

- ECDHE for key negotiation
- RSA-based certificates (3072-bit key size)
- SHA2 authentication (SHA384 or SHA256)
- Strong encryption ciphers using 128-bit or 256-bit (such as AES\_256\_GCM, AES\_128\_GCM, and CHACHA20\_POLY1305)

As an example, these are the possible ciphers used depending on the Webex server TLS preference:

- TLS v1.2—TLS\_ECDHE\_RSA\_WITH\_AES\_256\_GCM\_SHA384
- TLS v1.3—TLS\_AES\_256\_GCM\_SHA384

Cisco secures Webex App media streams (audio, video, and screen sharing) using the Secure Real-Time Transport Protocol (SRTP). Webex App uses the AEAD\_AES\_256\_GCM cipher to encrypt media.

For in-depth information on Webex App security, see the [Webex Application Security Technical Paper](https://www.cisco.com/c/dam/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/esp/Cisco-Webex-Apps-Security-White-Paper.pdf).

## Security features in Webex App spaces

 You can add extra security by using moderators for teams and spaces. If teamwork is sensitive, you can moderate the space. Moderators can control who has access to the space, and delete files and messages.

Also, if any spaces include people from outside your company, you'll see some areas in those spaces highlighted, like the border, background, the icon in the message area, and their email addresses.

## Privacy for Files and Messages

Webex App uses advanced cryptographic algorithms to safeguard content you share and send. The only people who can view files and messages in a Webex App space are those invited to that space or authorized individuals.

## Password Security Standards

IT teams can add features that use existing security policies like single sign-on (SSO) or synchronizing Webex App with employee directories. Webex App automatically recognizes when someone has left a company, so former employees won't be able to access company data using Webex App.

Your company can also configure Webex App so that it requires passwords and authentication that match your corporate security standards. Webex App supports identity providers that use Security Assertion Markup Language (SAML) 2.0 and Open Authorization (OAuth) 2.0 protocols.
