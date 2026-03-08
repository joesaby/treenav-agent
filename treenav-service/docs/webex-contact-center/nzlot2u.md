---
title: "Configure Partial Response in Dialogflow CX"
product: "Webex Contact Center"
article_id: "nzlot2u"
url: "https://help.webex.com/en-us/article/nzlot2u"
last_updated: "2024-09-07"
description: "Use this article to configure the partial response in Google Dialogflow CX for
the Virtual Agent-Voice feature in Webex Contact Center and Contact Center
Enterprise solutions."
tags: ["webex-contact-center", "webex-contact-center-enterprise"]
source: "help.webex.com"
---

# Configure Partial Response in Dialogflow CX

The partial response feature plays an interim message and engages the caller while the webhook response is processing the request in the background. The webhook request in Dialogflow CX often takes longer to receive a response. If there is no interim response to the caller while the webhook response is processing the request, the caller is kept completely silent and may hang up the phone. To avoid this, use the partial response to notify the caller that their request is still being processed.

- For more information about Partial Response, see the [Partial Response for streaming API](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) documentation.
- For more information about Webhooks, see the [Webhooks](https://cloud.google.com/dialogflow/cx/docs/concept/webhook) documentation.

- If the webhook returns the actual response before or during the partial response, the system stops the partial response and plays the final response to the callers.
- The first prompt response that is received from Dialogflow CX agent does not support partial response.
- Barge-in cannot be enabled for the partial response prompt to allow the callers to interrupt an agent's response.
