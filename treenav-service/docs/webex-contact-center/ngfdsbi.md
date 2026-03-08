---
title: "Manage global variables"
product: "Webex Contact Center"
article_id: "ngfdsbi"
url: "https://help.webex.com/en-us/article/ngfdsbi/Manage-global-variables"
last_updated: "2025-09-19"
description: "Global variables are custom variables that you define from Webex Contact Center
control hub and these are accessible throughout a flow."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Manage global variables

## Overview

Global variables are specific to the Webex Contact Center voice channel. They collect one of the following types of data values:

- Caller-entered data: Data that a customer enters using IVR during a call, such as an account number.
- Agent-entered data: Data that an agent enters into the Interaction Control pane of the Desktop during an active call with a customer, such as a case number or action code.

You can create any number of global variables. However, you can enable only up to 100 global variables for reporting at a time. 

By default, you can view only active global variables. To view inactive global variables, check the Show Inactive Global Variables check box.

- Global variable values are visible to users who have access to historical records on the Control Hub. Never store secure data such as credit card numbers, personal identification numbers, or social security numbers using global variables.
- You can't delete global variables, but you can deactivate a global variable that isn’t in use in any flow. You can’t use an inactive global variable to store data.
- Flow developers can add global variables to the flow as required. However, they can only map a global variable from the main flow to a local variable in the subflow (and can't add global variables directly in the subflow). For more information, see [Global Variables in Flow Designer](https://help.webex.com/en-us/article/nhovcy4/Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5F0a32bcfc-1bfc-4413-bf75-7e941b228a81).

### System-defined variables

System-defined variables are the predefined global variables used by the Webex Contact Center.

You can edit the system-defined variables; but you can’t create or deactivate system-defined variables.

Webex Contact Center uses the following system-defined variables:

- Global\_FeedbackSurveyOptin: Indicates whether the customer chooses to participate in (opt-in) or not participate in (opt-out) a post call survey. The Variable Type is defined as String; while the default value is `uninitialized`, meaning there’s no initial value.
- Global\_Language: Indicates the language that a customer uses in the flow. The Variable Type is defined as String; and the default value is `en-US`. For more information, see [Webex Experience Management Language Support](https://help.webex.com/en-us/article/nlu4x20/Experience-Management---Configure-surveys-for-IVR-and-Digital-Channels-for-WebexContact-Center#concept-template%5F35dcdf96-3359-4b9c-9308-8d4b8dadf41d).
- Global\_VoiceName: Indicates the output-recorded name used in the flow. The Variable Type is defined as String; while the default value is `Automatic`. When the value is `Automatic`, Google Dialogflow chooses the voice name for a given language.

## Create a global variable

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Navigate to Services > Contact Center.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3 | From the Contact Center navigation pane, select Flows > Global Variables .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4 | Click Create a new global variable and provide the name and description for the variable. Once you create a name, you can't change it. You can use letters, numbers, and underscores, but no spaces.The name can be up to 80 characters long, but only 50 characters show. To see the full name, hover your mouse over it for a tooltip.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5 | Choose one of the following types from the Variable Type drop-down list and specify the variable value. Variable typeDefault value Boolean Select True or False. String Enter a string value. The string can be a maximum of 256 characters long for each variable. Strings support alphanumeric characters, special characters, and spaces. Integer Enter an integer value. Decimal Enter a decimal value. Date Time Enter a date in Tenant Timezone in one of the supported formats: YYYY-MM-DD YYYY-MM-DDThh:mm You can’t edit the variable type after the variable is created.                                                                                                                                                                                                                                                                                                                                                         |
| 6 | (Optional) Toggle Make Reportable on to display the variable in the Analyzer for reporting purposes. You can enable up to 100 global variables for reporting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 7 | (Optional) In the Desktop settings option, toggle Make agent viewable on to display the variable on the Desktop along with the value entered as part of the flow. When you toggle Make agent viewable on, you can view and configure following options: Desktop Label: This label appears on the Desktop in place of the variable name. Enter a clearer label than the variable name itself, so that agents can understand the data that is being passed to them. The desktop label supports a maximum of 50 characters. Edit on Desktop: Enable this toggle button when you want the agent to be able to edit the value of the variable as part of the interaction session. Any updates to the variable that is made in the Desktop are available in the flow. The agent can edit the variable and click the Savebutton in the Desktop. If the call gets disconnected before the edits are saved, the variable update doesn’t take place. |
| 8 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## Edit a global variable

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                          |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Services > Contact Center.                                                                                                                                       |
| 3 | From the Contact Center navigation pane, select Flows > Global Variables .                                                                                                   |
| 4 | Click the global variable that you want to edit. You can't edit the Name and Variable type of a global variable.You can enable only upto 100 global variables for reporting. |
| 5 | Update the details and click Save.                                                                                                                                           |

## Activate or deactivate a global variable

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                             |
| - | ------------------------------------------------------------------------------- |
| 2 | Navigate to Services > Contact Center.                                          |
| 3 | From the Contact Center navigation pane, select Flows > Global Variables .      |
| 4 | Click the global variable that you want to activate or deactivate.              |
| 5 | Toggle **Active/Inactive** to perform the desired action.                       |
| 6 | Click Save to save the modified state else click Cancel to discard the changes. |
