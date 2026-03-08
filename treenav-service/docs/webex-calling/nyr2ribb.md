---
title: "Configurable data storage region for user generated content in Webex Calling"
product: "Webex Calling"
article_id: "nyr2ribb"
url: "https://help.webex.com/en-us/article/nyr2ribb"
last_updated: "2026-01-08"
description: "You can choose where to store user data such as voicemails, call recordings, and
faxes by setting a preferred data storage region in Control Hub."
tags: ["webex-calling", "webex-suite"]
source: "help.webex.com"
---

# Configurable data storage region for user generated content in Webex Calling

## Meeting compliance and data residency needs

Webex Calling now offers a powerful new feature that gives you precise control over where your user-generated content is stored. This enhancement allows you to easily select a preferred data storage region for information like existing voice recording and recording transcripts, voicemails and voicemail transcript, and faxes. This capability helps your organization meet regulatory requirements and maintain data sovereignty.

A centralized and configurable **Data storage region** setting is available within Webex Calling Control Hub allows administrators to define the physical storage location for all user-generated content. The Data storage region feature unifies the storage configuration for Webex Calling user-generated content, replacing the previous separate call recording storage region settings.

**Key benefits for your organization:** 

- **Regulatory compliance**—Easily adhere to local data residency laws and industry-specific regulations by storing data within designated geographical locations (for example, India, Saudi Arabia).
- **Data sovereignty**—Gain greater control and assurance over where your sensitive user-generated content resides.
- **Simplified management**—Streamline your data storage strategy by consolidating settings for various content types, such as voicemails, call recordings and call recording tran, voicemail transcripts, and faxes under a single, unified configuration.

This parameter is available and configurable at both the organization and location levels within Control Hub, allowing for flexible deployment based on your operational structure. 

## Configuring data storage region in Control Hub

### Enable data storage region at the organization level

This setting applies globally to your organization unless overridden by specific location settings.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                         |
| - | -------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Services \> Calling \> Service Settings.                                                                       |
| 3 | Go to the Data storage region section and select your desired region from the drop-down list to store user-generated data. |
| 4 | Click Save.                                                                                                                |

### Enable data storage region at the location level

You can override the organization-level setting for specific locations, providing granular control.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                           |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Management \> Locations. Select the specific location for that you want to override or update the region settings.                                                                                                                |
| 3 | Go to the Calling tab and locate the Calling features settings section.                                                                                                                                                                       |
| 4 | Select Data storage region. To inherit the organization's setting, ensure Use organization settings is enabled. define a specific region for this location, enable Use custom settings and select the desired region from the drop-down list. |
| 5 | Click Save.                                                                                                                                                                                                                                   |

## Special considerations for organization and locations in India

When a new organization is onboarded to Control Hub with its headquarters location as India, the organization-level data storage region is automatically set to India and can't be changed. However, if branch locations are created outside India, the customer administrators at those branch locations can modify the data storage region at the location level to reflect their specific geographic region.

Similarly, for multinational corporation (MNC) customers with branch offices in India, the data storage region for the India locations is fixed to India and can't be changed. This ensures compliance with regional data residency requirements while allowing flexibility for branches outside the headquarters country to select appropriate storage regions.

## Special considerations for organization and locations in Saudi Arabia

When a new organization is onboarded to Control Hub with its headquarters in Saudi Arabia, the organization-level data storage region is automatically set to Saudi Arabia and can't be changed, regardless of whether the customer creates branch locations globally outside Saudi Arabia.

For MNC with branch locations in Saudi Arabia, the location-level data storage setting in Saudi Arabia applies to the storage of call recordings and their associated transcriptions, summaries, and action items. However, voicemail data remains stored in the organization-level data storage region.
