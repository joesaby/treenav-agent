---
title: "Configure custom parameters in Dialogflow CX"
product: "Webex Contact Center"
article_id: "cq52gi"
url: "https://help.webex.com/en-us/article/cq52gi/Configure-custom-parameters-in-Dialogflow-CX"
last_updated: "2024-11-20"
description: "Use this article to configure the custom parameters in Google Dialogflow CX for
the Virtual Agent-Voice feature in Webex Contact Center and Contact Center
Enterprise solutions."
tags: ["webex-contact-center", "webex-contact-center-enterprise"]
source: "help.webex.com"
---

# Configure custom parameters in Dialogflow CX

The conversation between the Webex Contact Center caller and the virtual agent takes place through a request-response mechanism. The Webex Contact Center application sends the request from the caller to the Google DialogFlow CX agent through the following ways:

- API calls.
- Event output variables configured in the Virtual Agent V2 activity.

Google Dialogflow CX sends the response messages back to the Webex Contact Center IVR application which then sends the message to the caller. As part of the Google Dialogflow CX fulfillment feature, the system sends custom parameters in the response messages to the IVR application. For example, you can configure the following custom parameters in Google DialogFlow CX. The AI engine picks up these parameters from the responses and processes the parameters for subsequent requests (the next API requests) accordingly.

- `wxRecognitionModelName`–Indicates the name of the model that recognizes speech audio. To set the parameter value, see [Model Selection](https://cloud.google.com/speech-to-text/docs/speech-to-text-requests#select-model). The Google Dialogflow CX application sends the parameter in an API response. This allows processing the audio files using a trained learning model that recognizes speech audio.
- `wxRecognitionModelVariant`–Indicates the variant of the specified speech model. To set the parameter value, see [SpeechModelVariant](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn#speechmodelvariant).
- `wxCallCompletion`– Allows to mark the call as 'Completed' on the Google Dialogflow CX system on any of the exit events such as _Agent Transfer_, _End Session_, or _Caller Hang Up_. If you don't configure this parameter, the call remains connected on the Dialogflow system even if it's terminated on the client side. Therefore, Google analytical reports display incorrect data. Ensure to set the parameter value to 'true' at the start of the Google Dialogflow CX call to terminate the call.  
When you enable this parameter, the system won't allow transitioning to the same virtual agent after the exit event within the same flow.

You can use the Google Dialogflow CX fulfillment feature to set or override parameter values. See [Fulfillment](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment) for more information.

To configure the parameters for fulfillment:

| 1 | On the Google Cloud Platform console, go to the [Dialogflow CX Console](https://dialogflow.cloud.google.com/cx/projects).                                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | On the Dialogflow CX console, choose the project and the agent.                                                                                                                                                                                                    |
| 3 | On the CX agent screen, go to the **Build** tab. Choose the required flow.Choose the required page (Start or End Flow or End Session) in this flow which needs fulfillment from the contact center application.Choose the required **Route** or **Event handler**. |
| 4 | Under the **Fulfillment** configuration pane, go to the **Parameter Presets** section, and click **Add parameter**.                                                                                                                                                |
| 5 | Add the required parameters.                                                                                                                                                                                                                                       |
| 6 | Click **Save**.                                                                                                                                                                                                                                                    |
