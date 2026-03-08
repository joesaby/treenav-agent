---
title: "Configure Google CCAI connector"
product: "Webex Contact Center"
article_id: "9zvadfb"
url: "https://help.webex.com/en-us/article/9zvadfb"
last_updated: "2024-09-08"
description: "Use this article to set up the Google CCAI connector to integrate Google
Dialogflow application with the Contact Center solutions."
tags: ["webex-contact-center", "webex-contact-center-enterprise"]
source: "help.webex.com"
---

# Configure Google CCAI connector

The Google Contact Center AI (Google CCAI) connector helps your organization establish a trust relationship between your Google Cloud Platform (GCP) account and the Cisco product to use Google services.

Ensure to disable the pop-up blocker on the browser before configuring a connector.

Before you begin

- Create the GCP Project ID and agent application with your relevant account.

  - For more information about creating a GCP Project ID, see _[https://Dialogflow.cloud.google.com/cx/projects](https://dialogflow.cloud.google.com/cx/projects)_.
  - For more information about creating a Dialogflow agent, see _<https://cloud.google.com/dialogflow/cx/docs/quick/build-agent>_.
- Place the Contact Center Order on Cisco Commerce Workspace (CCW). For more information, see the Ordering Guide for your contact center solution on [Cisco Collaboration Ordering Guides](https://www.cisco.com/c/en/us/partners/tools/collaboration-ordering-guides.html).
- The A2Q process will be initiated as part of the order process to ensure the overall solution is eligible to support CCAI services.
- During the A2Q process, the CCAI provisioning form will be shared on the customer’s email address to be filled at <https://app.smartsheet.com/b/form/5c705d899adf412692d74e0b2f16e810>. This step is required to map the GCP Project ID with Cisco’s service account. Also, GCP Project ID credentials are validated in the backend before further mappings take place.
- Share the Project ID and the email address (that is used to sign in and create GCP Project) with a Cisco representative. This is done to create a primary Service Account for billing and enabling all Cisco-entitled AI services for the account.
- This completes the allow-listing process for billing and an email is sent to the customer with the subject _CCAI Onboarding Provision Status Update_. The contents of the email includes the updated GCP credentials to use for onboarding purposes.
- Complete the Assessment to Quality (A2Q) process for Contact Center AI (CCAI) and procure Cisco subscription Flex SKU.
- As part of order completion, if organization is not available, credentials to set up the customer organization for your Contact Center solution will be provided.
- Set up the customer organization for your Contact Center solution.

| 1  | Log in to your customer organization at <https://admin.webex.com> and navigate to Services \> Contact Center \> Tenant Settings \> Integrations \> Connectors.                                                                                                            |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | On the Google Contact Center AI card, click Set Up or Add More. A new tab opens on the browser.                                                                                                                                                                           |
| 3  | Click Sign In with Google to authenticate with Google to access the Google Cloud Platform. A Google Cloud Sign-in dialog box appears.                                                                                                                                     |
| 4  | Sign in to Google with the same ID that you used to create the Google CCAI project.                                                                                                                                                                                       |
| 5  | Grant permissions to view and manage your data. On successful sign-in, a confirmation message appears.                                                                                                                                                                    |
| 6  | On the Google Contact Center AI page, enter a name that identifies the purpose of your connector.                                                                                                                                                                         |
| 7  | Choose the CCAI Project Name from the drop-down list that you created on the Google Cloud Platform.                                                                                                                                                                       |
| 8  | Choose a billable GCP project name from the Billable Project Name drop-down list. You must have received the billable project name in an email notification. To use your own GCP project, the **CCAI Project Name** and the **Billable Project Name** should be the same. |
| 9  | Choose Billable Service Account from the drop-down list. You must have received the service account details in an email notification.                                                                                                                                     |
| 10 | Click Save.                                                                                                                                                                                                                                                               |
| 11 | Click Refresh to view the new connector on the Google Contact Center AI card.                                                                                                                                                                                             |

What to do next

Create a Contact Center AI configuration on the Features tab. For more information, see the article [Create a Contact Center AI configuration](https://help.webex.com/en-us/article/npbt02j).
