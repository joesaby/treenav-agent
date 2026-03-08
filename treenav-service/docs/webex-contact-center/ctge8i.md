---
title: "Configure Google connector for Webex Contact Center"
product: "Webex Contact Center"
article_id: "ctge8i"
url: "https://help.webex.com/en-us/article/ctge8i"
last_updated: "2024-09-26"
description: "Use this article to configure the Google connector to integrate Google Cloud
Text-to-Speech (TTS) AI services with the Webex Contact Center."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Configure Google connector for Webex Contact Center

Use the Google connector to enable the text-to-speech (TTS) capability in the Flow Designer. 

You can add up to ten connectors for your organization. 

Before you begin

Perform the following configurations in Google Cloud Platform: 

- Ensure to download the authentication key (JSON file). For more information, see [Google documentation](https://cloud.google.com/text-to-speech/docs/before-you-begin#:~:text=Select%20the%20Cloud%20Text%2Dto,Text%2Dto%2DSpeech%20API).
- Enable the Cloud Text-to-Speech API in the Google Cloud Platform Console.

| 1 | Log in to your customer organization at <https://admin.webex.com>.                                      |
| - | ------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Services \> Contact Center.                                                                 |
| 3 | From the Contact Center navigation page, select **Tenant Settings** \> **Integrations**.                |
| 4 | On the **Integrations** tab, select **Connectors** and click the Google card. Click Set Up or Add More. |
| 5 | In the Name field, enter a unique name for the connector (for example, Offers and Discounts Page).      |
| 6 | Click Upload Authentication Key.                                                                        |
| 7 | Click Done to save the connector details and then click Close.                                          |

What to do next

After you successfully save the connector, you can use it to configure the Menu activity in the Flow Designer. For more information, see the [_Menu_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FConcept.dita%5F8a8f0369-60b9-4d31-af05-9338f7aa54be) section in the _Working with Flow Designer_ chapter of [_Cisco Webex Contact Center Setup and Administration Guide_](https://www.cisco.com/c/en/us/support/customer-collaboration/webex-contact-center/series.html).
