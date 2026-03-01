---
title: "Limited Profile Settings Configuration for Deployment Insights"
product: "Webex Cloud-Connected UC"
article_id: "nhp8woe"
url: "https://help.webex.com/en-us/article/nhp8woe/Limited-Profile-Settings-Configuration-for-Deployment-Insights"
last_updated: "2024-08-30"
description: "Limited Profile Settings Configuration for Deployment Insights"
tags: ["webex-cloud-connected-uc"]
source: "help.webex.com"
---

# Limited Profile Settings Configuration for Deployment Insights

## Overview

When you want to filter out the data that is processed and stored in Control Hub, choose the Limited Profile Settings configuration for the Deployment Insights service.

When you switch from Extended Profile Settings to Limited Profile Settings, data that was previously collected from the inventory is not deleted and remains in the system.

## Personal Data Processing

Depending on the type of synchronization, the following information is sent when you enable the Limited Profile Settings for the Deployment Insights service:

**Inventory Synchronization from the Unified CM database**: When you choose this method of synchronization, the Unified CM Enduser table is filtered to send data only for the following fields to the cloud:

- First Name
- Last Name
- Email ID
- Phone Number
- Mobile Number
- UserID

Information about the userprofile, status, and directory\_plugin fields is also sent to enable you to view only relevant data on the User Interface (UI).

**Lightweight Directory Access Protocol (LDAP) Synchronization through Webex Cloud-Connected UC Agent**: When you choose this method of synchronization, all the LDAP objects are filtered to send data only for the following fields to the cloud:

- First Name
- Last Name
- Email ID
- Phone Number
- Mobile Number
- DN

Information about the status field for LDAP User Objects in the Active Directory is also sent to the cloud.
