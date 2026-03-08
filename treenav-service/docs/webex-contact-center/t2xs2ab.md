---
title: "Configure Salesforce connector for Webex Contact Center"
product: "Webex Contact Center"
article_id: "t2xs2ab"
url: "https://help.webex.com/en-us/article/t2xs2ab"
last_updated: "2025-04-08"
description: "Use this article to configure the Salesforce connector to integrate Salesforce
Connected App with the Webex Contact Center."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Configure Salesforce connector for Webex Contact Center

Configuring a Salesforce Connector is a two-step process. 
1. Create a Salesforce Connected App. For more information, see [Configure Connected App for Webex Contact Center Salesforce Connector](https://help.webex.com/en-us/n26v7heb/). After you create the Salesforce Connected App, the system generates the Client ID (referred to as Consumer Key on Salesforce) and the Private Key.
2. Configure the Salesforce Connector as described below:

You can add up to five Salesforce connectors for your organization.

Before you begin

Ensure to have the Client ID and Private Key of the Salesforce account.

| 1 | Log in to your customer organization at <https://admin.webex.com> and navigate to Services \> Contact Center \> Tenant Settings \> Integrations \> Connectors.                                                                                                                                                                                                                                  |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Salesforce card, click Set Up or Add More.                                                                                                                                                                                                                                                                                                                                               |
| 3 | In the Name field, enter a unique name for the connector.                                                                                                                                                                                                                                                                                                                                       |
| 4 | In the Client ID field, enter the service client ID.                                                                                                                                                                                                                                                                                                                                            |
| 5 | In the Email ID field, enter the email ID of the Salesforce Connected App user. Ensure that this user's profile has access to the Salesforce Connected App.                                                                                                                                                                                                                                     |
| 6 | In the URL field, you can view a default URL for the Salesforce Authorization Server. You can edit this field if the authorization server is hosted on a different URL. For more information, see the _aud_ parameter in the section on how to create a JWT, in the [_Salesforce documentation_](https://help.salesforce.com/s/articleView?id=sf.remoteaccess%5Foauth%5Fjwt%5Fflow.htm&type=5). |
| 7 | In the Private Key field, enter the private key of the digital certificate that is uploaded in the Salesforce Connected App.                                                                                                                                                                                                                                                                    |
| 8 | Click Done to save the connector details and click Close. Webex Contact Center validates connectivity to the Salesforce Connected App. If the connectivity is successful, the credentials are saved and a confirmation message is displayed.                                                                                                                                                    |

[Salesforce IVR Custom HTTP Connector](https://github.com/CiscoDevNet/webex-contact-center-crm-integrations/tree/main/Salesforce/salesforce-ivr-http-connector) 

What to do next

After you successfully save the connector, you can use it in either Flow Designer or Control Scripts.
- For more information on Flow Designer, see the [_HTTP Request Settings_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/b%5Fcc-release-2%5Fchapter%5F0100.html#Cisco%5FGeneric%5FTopic.dita%5Fb1192550-38d4-46e5-be3d-2119794def93%5F%5Fsection%5Fwlt%5Flj1%5Fkrb) section in the _Working with Flow Designer_ chapter of [_Cisco Webex Contact Center Setup and Administration Guide_](https://www.cisco.com/c/en/us/support/customer-collaboration/webex-contact-center/series.html).
