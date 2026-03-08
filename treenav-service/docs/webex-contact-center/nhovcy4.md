---
title: "Build and manage flows with Flow Designer"
product: "Webex Contact Center"
article_id: "nhovcy4"
url: "https://help.webex.com/en-us/article/nhovcy4"
last_updated: "1979-05-27"
description: "Flow Designer is an integral component of Webex Contact Center that enables you
to route real-time calls through a system. You can specify how agents are
assigned to calls and what occurs at each stage of the process through
configuring activities and events."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Build and manage flows with Flow Designer

## Get started

Flow Designer provides an interface to create real-time flows to meet your organizational requirements. Predefined activities related to call handling and flow control serve as building blocks for flow creation. The drag-and-drop interface provides easy configuration of flow components. You can set the properties of each activity that influences flow execution. You can also configure variables and expressions to define flow logic.

Before you use Flow Designer, you must provision several entities from the Webex Contact Center Control Hub. Use these entities directly, as part of Flow Designer (for example, Queues and Audio Files), or indirectly to enable contact routing (for example, Call Distribution in Queue Routing Strategies).

Configure the following items before you build flows in Flow Designer:

- Entry Points
- Queue
- Agents
- User Profile
- Desktop Profile
- Teams
- Virtual Agent
- Audio Files

### Key terminology

Familiarize yourself with the following terms in this article:

- **Activity​**: A node in the Flow Designer interface that represents a single step in a flow, such as playing a message or making an HTTP request. The user drags and drops this element into a flow.  
For activity properties that are drop-down based, the search filter is enabled by default. If a drop-down list contains more options than the default limit, enter a keyword to search and select the desired option from the auto-populated results.
- **Event​**: An event, whether internal or external, triggers a flow or flow path. Events can include Kafka messages, external HTTP requests, or user actions. Flow Designer, an event-driven application, runs flows in response to these triggers, executing them automatically based on configuration.
- **Flow​**: A user-defined sequence of activities that execute in response to an event.
- **Link**: A link is the arrow that connects one activity to another. It indicates the direction of the flow and dependency between events. To delete a link and break the connection between two activities, click on the link to reveal the delete icon, and proceed to delete the line.

### Access Flow Designer

Flow Designer uses single sign-on (SSO) using Cisco Identity Service. If you're signed in to Control Hub, you can access Flow Designer without signing in again. If not, the system prompts you to enter your SSO credentials.

Before you begin

To access the Flow Designer application, you must have a Premium Agent License and a user profile that has rights to edit flows.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                     |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears with the following three tabs: FlowsSubflowsGlobal Variables Click Manage Flows  \> Create Flows. The Flow Creation page appears. See [Create a flow](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F187e6f69-a1da-4aa1-9137-79e9ec8e7cd0) for more details. Click on an existing flow from the list. The specific flow appears. |

### Explore modern and unified Flow Designer canvas

The Webex Contact Center Flow Designer canvas features a modern, unified user interface that aligns with the Webex portfolio's look and feel, there by providing a consistent, accessible, and responsive experience for flow developers.

Whether you try to create a new flow or work on an existing flow, the flow page appears in a modern user interface with the following modal pop-up that helps you discover the new features.

#### User settings

The user settings menu allows you to switch between the modern and the classic UI, switch between UI themes and sign out of the application. 

To switch between modern, unified canvas and the classic canvas:

1. Click the user settings icon at the upper right corner of the canvas.
2. Disable the New look toggle.

To switch between dark mode and light mode:

1. Click the user settings icon at the upper right corner of the canvas.
2. Disable the Dark mode toggle.

### Browser requirements

Use the following table to reference supported browsers:

| Browser             | Microsoft Windows 10  | Microsoft Windows 11      | Mac OS X               | Chromebook          |
| ------------------- | --------------------- | ------------------------- | ---------------------- | ------------------- |
| **Google Chrome**   | 76.0.3809             | 103.0.5060.114            | 76.0.3809 or higher    | 76.0.3809 or higher |
| **Mozilla Firefox** | ESR 68 or higher ESRs | ESR V102.0 or higher ESRs | ESR 68 and higher ESRs | NA                  |
| **Microsoft Edge**  | 42.17134 or higher    | 103.0.1264.44 or higher   | NA                     | NA                  |
| **Chromium**        | NA                    | NA                        | NA                     | 79 or higher        |

Configure the following browser options: 

- Enable cookies and site data.
- Set the security level to _Medium_.
- Enable image option.
- Disable the pop-up blocker.
- Enable JavaScript.

### Email requirements

Flow Designer supports the following email servers:

- Office 365
- Gmail

## Explore the layout

### Activity library

The activity library is where you find all the activities. Drag and drop the activities from the activity library onto the main or event flow canvases to build your flows. It’s organized into the following sections:

- **Call handling**: Use call handling activities to build flows that handle voice interactions. They're specific to the use case of handling calls through Interactive Voice Response (IVR) and virtual or human agents.
- **Flow control**: Flow control activities are agnostic to flow type, and you use them to control the logic in the flow regardless of the use case.

You can hide and expand the activity library, as needed, to increase working space on the canvas between configurations.

### Canvas, main flow, and event flows

The canvas is the gray working space on which you drop the activities. Use the controls in the bottom-left side of the screen to move around the canvas and zoom in and out. There are no constraints on the flow size or canvas usage.

There are two tabs that allow extra canvas space, Main Flow and Event Flows. These tabs logically separate different paths of your flow and create a more organized workspace.

#### Main flow

Use the main flow tab to script the primary flow based on the trigger event defined in the start flow activity. In the main flow tab, configure the complete experience for a caller. This starts from the Cisco Unified IP Interactive Voice Response (IVR) menu, until opting out or wrapping up the call. The flow contains predictable steps that the system runs in a sequence.

#### Event flows

At any point during the execution of the main flow, the system triggers events that interrupt the main flow. For example, when an agent answers a phone call it interrupts the caller’s experience in the queue. If you want to define unique behavior when these events trigger, you can script optional event flows. Event flows are asynchronous to the main flow. You can’t predict when the system triggers an event flow. For this reason, event flows are optional and are an extension to the main flow functionality.

You can configure multiple event handling flows in the event flows canvas. Each event flow must have a unique start and end, with no shared activities.

For more information on event handlers, see [Event flows](#events-in-flow-designer).

#### Zoom toolbar

The zoom toolbar has the following icons:

- **Global properties**—Click the  icon to open the Global properties pane. For more information, see [Properties pane](#Cisco%5FConcept.dita%5F1625f1fa-882c-4e9c-b15f-3dbfe92ad315).
- **Auto arrange**—Click the  icon on the toolbar to organize the activities in the canvas.
- **Undo**—Click the  icon on the toolbar to undo the last performed canvas action.
- **Redo**—Click the  icon on the toolbar to redo the last performed canvas action.  
You can undo and redo up to last 10 canvas actions. You can’t undo and redo the changes performed on attributes and properties.
- **Fit to view**—Click the  icon on the toolbar to adjust the magnification of the canvas so that all the nodes are visible.
- **Zoom-in**—Click the  icon on the toolbar to zoom-in the canvas. When you reach the maximum limit, the icon is disabled.
- **Zoom-out**—Click the  icon on the toolbar to zoom-out the canvas. When you reach the maximum limit, the icon is disabled.

- The Zoom on scroll option allows both panning (default) and zooming (using the Ctrl key). You can continue to zoom by holding the Ctrl key and scrolling the mouse wheel up or down.
- To pan across the canvas, scroll the mouse wheel up or down.
- To pan left to right with the mouse wheel, use Shift + Scroll keys.

#### Canvas control actions and shortcut keys

To enhance the efficiency and productivity of flow developers, the Flow Designer canvas provides the following options:

- **Undo-redo actions**—Use the Undo, Redo icons in the zoom toolbar or use the keyboard shortcuts.
- **Cut, copy, paste, and delete**—Right-click on the canvas for cut, copy, paste, and delete operations. You can cut, copy, and paste the call handling and flow control activities and links as follows:
  - Within and across flows
  - Between main flow and event flows
  - Between flows and subflows  
You can also copy and paste across organizations and browsers.  
There are few restrictions when trying to copy the activities and links from other browsers into FireFox. To enable this functionality, you must set the following preferences to true in Firefox:

  - `dom.events.asyncClipboard.readText`
  - `dom.events.testing.asyncClipboard`  
Type `about:config` in the Firefox address bar. Search for the specified preferences. Modify the values to true to allow pasting from other browsers.
- **Auto arrange**—Use the  icon in the zoom toolbar to automatically organize the activities in the canvas for enhanced understanding and easy maintenance.
- **Snap to grid**—Use to snap the activities in increments of 20 pixels.
- **Keyboard shortcuts**—You can quickly edit the flow using keyboard shortcuts. Click the help icon. Choose Keyboard shortcuts to view the list of available keyboard shortcuts.

#### Keyboard shortcuts

Use the following keyboard shortcuts in the canvas:

| **Shortcut**            | **Windows OS**         | MAC OS                 |
| ----------------------- | ---------------------- | ---------------------- |
| General                 |                        |                        |
| Open keyboard shortcuts | Ctrl + Alt + K         | Control + Alt + K      |
| Tools                   |                        |                        |
| Auto arrange            | Shift + A              | Shift + A              |
| Edit                    |                        |                        |
| Copy                    | Ctrl + C               | Command + C            |
| Cut                     | Ctrl + X               | Command + X            |
| Paste                   | Ctrl + V               | Command + V            |
| Undo                    | Ctrl + Z               | Command + Z            |
| Redo                    | Ctrl + Shift + Z       | Command + Shift + Z    |
| Delete                  | Backspace              | Delete                 |
| Select all              | Ctrl + A               | Command + A            |
| Select multiple         | Shift + Click          | Shift + Click          |
| Select region           | Shift + Click and drag | Shift + Click and drag |
| View                    |                        |                        |
| Zoom in                 | Ctrl + +               | Command + +            |
| Zoom out                | Ctrl + -               | Command + -            |
| Zoom in or out          | Ctrl + Scroll          | Command + Scroll       |
| Zoom to 100%            |                        |                        |
| Fit to view             | Shift + 1              | Shift + 1              |
| Scroll left or right    | Shift + Scroll         | Shift + Scroll         |

### Properties pane

The properties pane appears on the right of the application. You set the parameters for either the flow (global properties) or for a selected activity. You can hide and expand the pane to increase working space on the canvas between configurations.

The global properties pane displays by default when the flow loads. Click the  icon to open the **Global properties** pane. The  icon helps you to open and close the properties pane when you work on flows. You can also click anywhere on the empty canvas to return to the global properties pane view. The global properties pane isn’t visible when you select an activity. 

 The following configurations are contained in the global properties:

- (Optional) Provide a flow description.
- Manage custom and predefined variables. For more information about flow variables, see [Set variable](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c).
- View flow history information, including the owner, last edited date, and flow version number. Click the  icon to close the global properties pane.  
There’s currently no version control feature. The Flow version counts the number of times the flow publishes.

### Header pane

The header displays the name of your flow, which dynamically updates when you edit the flow name from the global properties. The header also has a Sign out button. If you wish to return and continue working later, you can save an existing flow draft. To save your drafts of the flows or to close the application, click Save flow and sign out in the top-right corner of the application.

### Footer pane

The footer has the following:

- Autosave enabled: Flows automatically save to avoid data loss. If autosave is suspended, an error notification appears.  
If you close the browser window while data is autosaving, you can lose data. We recommend you wait a few seconds after you change your flow before you close the browser.
- Application version: The left of the footer displays the version of the application. You can use the version for troubleshooting errors in Flow Designer.
- Flow validation: Flow validation detects errors in a flow’s structure that could prevent it from working. You can enable the validation toggle on the right side of the footer at any time. By default, validation is off, so errors don’t appear. When you enable the toggle, backend validation starts, and any errors in the flow become visible. When the toggle is enabled, the backend validation begins and any errors in the flow appear. For more information about flow validation, see [Validate a flow](#task%5Fgzx%5Fq5k%5F1rb%5F1).
- Flow publishing: Before publishing a flow, you must validate it and fix any errors. If the validation toggle is off, the Publish button stays disabled. After enabling validation, the Publish button remains disabled until you resolve all errors in the flow. For more information about flow publishing, see [Publish a flow](#task%5Fgzx%5Fq5k%5F1rb%5F3).

## Understand activities and events

### Activities in call handling

[Play Music](#Cisco%5FConcept.dita%5Fc5322b24-0803-42ca-b831-3101e8c5b053) 

[Feedback](#reference%5FB06B1EB2FD9E1DFD3C56B0C423252902) 

[Play Message](#Cisco%5FConcept.dita%5F19353180-2d4f-41eb-b081-6d817451470b) 

[Screen Pop](#Cisco%5FGeneric%5FTopic.dita%5F062203a9-f968-491e-b319-8b27e2f990d2) 

[Collect Digits](#Cisco%5FConcept.dita%5F022710c1-5527-4a8a-9d27-d38b615e1f68) 

[Menu](#Cisco%5FConcept.dita%5F8a8f0369-60b9-4d31-af05-9338f7aa54be) 

[Send Digits](#concept-template%5Fd85ae3a7-b755-4ae7-a14d-442530bd0052) 

[Blind Transfer](#Cisco%5FGeneric%5FTopic.dita%5F9762deed-12dd-47c3-a699-2fb28daf0a99) 

[Bridged Transfer](#Cisco%5FGeneric%5FTopic.dita%5F9762deed-12dd-47c3-a699-2fb28daf0a99%5FBT) 

[Virtual Agent](#Cisco%5FGeneric%5FTopic.dita%5F5cc52130-eb2f-4703-b076-72541b0bc4c8) 

[Virtual Agent V2](#concept-template%5F5d758245-dc48-4f67-865d-ca37f01cf327) 

[Callback](#Cisco%5FConcept.dita%5F2a7326f7-67da-4157-bab1-e477b219ec7e) 

[Get Queue Info](#Cisco%5FConcept.dita%5F4bd2ee51-57b1-4741-b37e-7326704c916b) 

[Advanced Queue Information](#Cisco%5FConcept.dita%5F4bd2ee51-57b1-4741-b37e-7326704c916ax) 

[Disconnect Contact](#Cisco%5FConcept.dita%5Fea2e7d53-e7cb-479e-a2bf-610ddde14e4a) 

[Queue Contact](#Cisco%5FGeneric%5FTopic.dita%5Fc93b6399-3cd7-4c86-9e82-48a82469fb8e) 

[Escalate Call Distribution Group](#Cisco%5FConcept.dita%5Fbff1ea60-839c-4337-ac66-60edfcb9541b) 

[Queue To Agent](#Cisco%5FTask.dita%5Fdd8431cd-496d-4bce-99d0-4452d502c3af) 

[Set Caller ID](#wxcc-setcallerid) 

[Call Progress Analysis](#concept-template%5F9659c430-f741-4c58-a54a-441f00b11bc1) 

[Recording Control](#recording-control) 

[Record](#record-activity) 

[Set Announcement](#concept-template%5Faf689dae-3766-43bb-b4f0-e91c224ca437) 

[Set Whisper Announcement](#concept-template%5F30f3a9ea-0833-4298-9536-1416144cb24a) 

[Set Contact Priority](#task-template%5Fe407f934-37d0-4805-b202-ab293bd8d8c7) 

[Schedule Callback](#task-template%5Fecabe669-21be-4bdb-8f27-f7b99da961de) 

[Start Media Stream](#concept-template%5F139a7894-9171-4b5a-b8e1-4cfd9b0e8489) 

[Upload Audio](#concept-template%5Fb902ae1e-ddb1-4dab-b686-6510fe0cfd6e) 

#### Play Music

The Play Music activity plays music when a call arrives or is in a queue. You can choose an audio file to play, when you place a caller on hold. 

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Configure error handling](#Cisco%5FConcept.dita%5F4079aa76-8682-4cbc-b7fd-d84fcb358568).

The following sections enable you to configure the Play Music activity:

- [General Settings](#section%5Fgmj%5F2wz%5Fjrb)
- [Music Settings](#section%5Ffbd%5F2wz%5Fjrb)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Music Settings

If any of the ordered list inputs is empty, the system throws a Flow Error. Resolve these errors before publishing the flow.

| **Parameter**      | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Static Audio File  | Choose this option if you wish to configure the static audio to be played from the Audio Prompt page in the Control Hub. Choose the name of the audio (.wav) file from the Music File drop-down list. For more information, see [Manage audio prompts](https://help.webex.com/en-us/article/be12vp/Manage-audio-prompts).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Dynamic Audio File | Choose this option if you wish to configure the audio to be played dynamically within a single flow. For example, you can configure this variable to play the audio prompt in multiple languages based on the customer's preference during the interaction. To configure the dynamic audio file, enter the audio variable value in the form of a pebble expression. For more information, see [Pebble Template Syntax](#Cisco%5FConcept.dita%5F9a750452-028a-4114-aa7a-7a37fab78b8f). The variable value must match the name of the .wav file that is uploaded to the Control Hub.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Start Offset       | Set the duration in seconds for the music file to play. For example, assume that your music file is 60 seconds long. If the Start Offset is set as 45 seconds and the music duration is 30 seconds, the file plays the last 15 seconds and loops back to the start and plays the first 15 seconds. 0 is the start time. You can enter the start offset as a static number (example: 20) or an expression (example: {{MusicLength + 20}}). Ensure that your input has numeric values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Music Duration     | Specify the duration in seconds for the selected music file. (For example, 30 seconds). You can enter the music duration as a static number (example: 20) or an expression (example: {{MusicLength + 20}}). Ensure that your input has numeric values. If the **Start Offset** and the **Music Duration** are longer than the file length, the music loops back to the start and continues to play. The music plays according to the following rules: If the specified **Music Duration** is less than the length of the audio file, the music plays for the specified duration. For example, if the **Music Duration** is 30 seconds and the audio file is 40 seconds long, the music plays for 30 seconds. If the specified **Music Duration** is greater than the length of the audio file, the music plays for five times the length of the audio file, looping as necessary. For example, if the **Music Duration** is 600 seconds and the audio file is 40 seconds long, the music plays for 200 seconds (five times the length of the audio file). |

When you include the Play Music activity before the [_HTTP Request_](#Cisco%5FGeneric%5FTopic.dita%5Fb1192550-38d4-46e5-be3d-2119794def93) activity in a call flow, the HTTP request executes only after the audio is played fully. 

#### Feedback

Configure the Feedback activity to initiate post-call surveys (powered by Webex Experience Management) to collect feedback from callers. The following types of surveys are available:

- **IVR Post Call Surveys**: Configure the Feedback activity in the Event Flows canvas in the Flow Designer, after the`AgentDisconnected` event. Depending on the setup in Webex Experience Management, the contact center plays an IVR survey to the callers.  
The caller uses the keypad to answer the survey. If the caller partially answers the survey by not responding within the configured timeout duration or by providing invalid input, the contact center sends partial survey responses to Webex Experience Management.  
Ensure that you use the Disconnect Contact activity after the Feedback activity to end the IVR call.
- **Email or SMS Post Call Surveys**: Configure the Feedback activity in the Event Flows tab in the Flow Designer after the `PhoneContactEnded` event. Depending on the dispatch policy rules set up in Webex Experience Management, the contact center sends a survey to callers over email or SMS.  
When you design a flow, a Consult interaction can't include a Post Call Survey Feedback activity.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see Event Flows.

The following sections enable you to configure the Feedback activity:

- [General Settings](#section%5Flzj%5F5sn%5F3rb)
- [Survey](#section%5Fpfs%5F5sn%5F3rb)
- [Language Settings](#section%5Fvc1%5Fvsn%5F3rb)
- [Customer Information](#section%5Fjb3%5Fvsn%5F3rb)
- [Variable Passing](#section%5Fn1n%5Fvsn%5F3rb)
- [Advanced Settings](#section%5Fcyt%5Fvsn%5F3rb)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter the name for the activity.                 |
| Activity Description | (Optional) Enter a description for the activity. |

##### Survey

To administer a survey to the customer, select from a list of questionnaires for Voice, or dispatches for Email or SMS surveys. The questionnaires and invitations that are configured in Webex Experience Management are available in the list.

__Table 1\. Survey Methods__
| **Parameter**   | **Description**                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Voice Based     | To play an inline survey to the customer, do the following: Choose the Voice Based radio button. Choose the voice-based survey from the drop-down list.                          |
| Email/SMS Based | To provide an offline Email/SMS survey to the customer, do the following: Choose the Email/SMS Based radio button. Choose the Email or SMS-based survey from the drop-down list. |

##### Language Settings

Manage the language in which the customer experiences the survey. If the language is not supported in Webex Experience Management, the fallback language is English (US). For more information, see [_Webex Experience Management Language Support_](https://cx.cloudcherry.com/docs/user/getting-help/#webex-experience-management-language-support).

__Table 2\. Language Settings__
| **Parameter**              | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Override Language Settings | Enable the Override Language Settings toggle button to set any custom language for Webex Experience Management. Set Language: Select the preferred language from the drop-down list. The drop-down list displays the languages that Webex Experience Management supports. If the Override Language Settings toggle button is not enabled, the Global\_Language variable is used to define the default Webex Experience Management settings. For more information, see [Global variables](#Cisco%5FGeneric%5FTopic.dita%5F0a32bcfc-1bfc-4413-bf75-7e941b228a81). |

##### Customer Information

Specify the customer information to be passed along with the prefills that Webex Experience Management sends to capture the survey response. Depending on the dispatch configurations set in Webex Experience Management, the contact center sends the prefill information.

__Table 3\. Customer Information__
| **Parameter** | **Description**                                                                 |
| ------------- | ------------------------------------------------------------------------------- |
| Customer ID   | (Optional) Select a unique identifier for the customer from the drop-down list. |
| Email         | (Optional) Select the email of the customer from the drop-down list.            |
| Phone Number  | (Optional) Select the phone number of the customer from the drop-down list.     |

##### Variable Passing

Specify the additional variables as custom prefills that are passed (in addition to survey responses) from Webex Contact Center to Webex Experience Management.

__Table 4\. Key-Value Parameters__
| **Parameter** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Key-Value     | Indicates the optional variable parameters that the contact center passes to Webex Experience Management. The Key and Value columns allow you to enter a variable name and the associated value. The variable value can be either a string, an integer, or an expression with double curly braces syntax (in case of flow variable). For more information, see [Custom Flow Variables](#Cisco%5FConcept.dita%5F79a1216a-2b35-4523-8f68-948c4adf0fbc).To add a variable parameter, click Add New. This adds a row where you can enter the respective key-value pair. To pass any custom variable from contact center, the administrator must create a custom prefill question in Webex Experience Management. For more information on configuring a survey questionnaire, see _[Questionnaires](https://cx.cloudcherry.com/docs/cxsetup/questionnaires/)_ in Webex Experience Management Documentation. The Key parameter in the variable and the Display Name of the prefill question created in Webex Experience Management must be the same. If the Key parameter does not match the Display Name of the prefill question, the contact center doesn't send the Key-Value parameters to Webex Experience Management. If the variable includes personal information, make sure to enable the Mark as Personally Identifiable Information (PII) toggle for that Question in Webex Experience Management.  For more information on PII, see [_PII Handling in Experience Management_](https://cx.cloudcherry.com/docs/cxsetup/guides/pii-handling-experience-management/) in Webex Experience Management Documentation. For more information about custom prefills, see [_Setup Custom Prefills for Post-Call Feedback Surveys_](https://cx.cloudcherry.com/docs/webex%5Fcc/pcs%5Fivr%5Fcustom%5Fprefills/) in Webex Experience Management Documentation. |

##### Advanced Settings

The Feedback activity has the following settings to help validate the expected DTMF responses from the customers.

__Table 5\. Advanced Settings__
| **Parameter** | **Description**                                                                                                             |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Timeout       | Indicates the maximum duration for which the activity waits for response from the customer. The default value is 3 seconds. |

You can configure the maximum number of retry attempts in case of invalid or no DTMF input, as well as audio notification messages (for invalid input, timeout, and maximum retries exceeded) for questionnaires by using Webex Experience Management. 

For more information, see _[Retry And Timeout Settings In Post Call IVR Survey](https://cx.cloudcherry.com/docs/webex%5Fcc/pcs%5Fivr%5Fretry%5Ftimeout/)_ in Webex Experience Management documentation.

#### Play Message

The Play Message activity plays an uninterruptible message to the caller. You can use the Play Message activity with or without the Text-to-Speech capability enabled. The configuration options change accordingly.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Configure error handling](#Cisco%5FConcept.dita%5F4079aa76-8682-4cbc-b7fd-d84fcb358568).

The Play Message activity is uninterruptible for DTMF inputs.

The Play Message activity is interruptible due to agent's availability to answer the call, if included after the [Queue Contact](#Cisco%5FGeneric%5FTopic.dita%5Fc93b6399-3cd7-4c86-9e82-48a82469fb8e) activity in a call flow.

The following sections enable you to configure the Play Message activity:

- [General Settings](#section%5Ffch%5Fgm4%5F3rb)
- [Prompt](#section%5Flqb%5Fhm4%5F3rb)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Prompt

 If you don't wish to use the Text-to-Speech capability in your prompt, disable the **Text‐to‐Speech** toggle button. By default, Text-to-Speech is not enabled.

You can configure up to five audio prompts (audio files and audio prompt variables combined). The full prompt is played to the caller in the configured order, alternating between the audio files and audio prompt variables.

If any of the ordered list inputs is empty, the system responds with a flow error. Resolve these errors before publishing the flow.

__Table 6\. Prompt Configuration without Text-to-Speech Enabled__
| **Parameter**      | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add Audio Files    | To configure the prompt without Text-to-Speech, add at least one prerecorded audio file. Choose the desired audio file from the drop-down list that is labeled as **1**. To add more audio files, click **Add New**. The files play to the caller in the order in which they appear. To remove an audio file from the sequence, click the **Delete** icon that appears next to each drop-down list.                                                                                                                                                                                    |
| Add Audio Variable | Use this option to configure the audio prompt to be played dynamically to the customers. For example, you can configure this variable to play the audio prompt in multiple languages based on the customer's preference during the interaction. To configure the audio variable, click Add Audio Variable. Enter the variable value in the form of a pebble expression. For more information, see [Pebble Template Syntax](#Cisco%5FConcept.dita%5F9a750452-028a-4114-aa7a-7a37fab78b8f). The variable value must match the name of the .wav file that is uploaded to the Control Hub. |
| **Preview prompt** | Click the Preview prompt button to preview the audio file. In the Preview promptdialog box that appears click play to play the chosen audio files.                                                                                                                                                                                                                                                                                                                                                                                                                                     |

To use the Text-to-Speech capability in your prompt, enable the **Text‐to‐Speech** toggle button. You can configure up to a total of five audio prompts (Text-to-Speech messages, audio files, and audio prompt variables combined). The full prompt is played to the caller in the configured order, alternating between the Text-to-Speech messages, audio files, and audio prompt variables.

__Table 7\. Prompt configuration with Text-to-Speech enabled__
| **Parameter**                              | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connector                                  | Indicates the connector to authenticate the Text‐to‐Speech service. The drop-down list displays the name of all Google connectors in the Control Hub. Only the active connectors are displayed. Select the connector from the drop‐down list. Existing customers on Classic voice platform can view only Google TTS connector in the drop-down list. Existing customers on the Next Generation voice platform can view both Cisco Cloud Text-to-Speech and Google TTS connectors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Override Default Language & Voice Settings | Use this toggle button to override the voice settings configured in the Global Voicename variable. This parameter is enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Output Voice                               | Indicates the output voice name. This field appears only if you enable the Override Default Language & Voice Settings toggle button. Select the output voice name from the drop-down list. If the output voice name that is supported by Google isn't available in the Output Voice  drop-down list, disable the Override Default Language & Voice Settings toggle button. Include the [Set Variable](#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c) activity before the Play Message activity in the flow. Configure the Set Variable activity as follows: Set the variable to Global\_VoiceName. Set the variable value to the required output voice name code (for example, en-US-Standard-D). For more information on the supported voices and languages, see the Google [_Supported voices and languages_](https://cloud.google.com/text-to-speech/docs/voices) page.                                                                                                                                                                                                                                                                                                                          |
| Add Audio File                             | To alternate Text-to-Speech messages with prerecorded audio files, click **Add Audio File**. This adds a new row to the configuration where you can choose the desired audio file from the drop-down list. To remove an item from the sequence, click the **Delete** icon that appears next to the corresponding input or drop-down list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Add Text-to-Speech Message                 | To build the prompt, use Text-to-Speech or a mix of prerecorded audio files and Text-to-Speech messages. Click **Add Text-to-Speech Message** to add a new text input field to the prompt creation section. In this field, type the message to be played to the caller in the selected Language and Voice. **Important considerations:**Use a Set Variable activity to set the value of TTS message to a flow variable before using it in the activity.Use single quotes instead of double quotes inside pebble expressions.Use pebble escape filters if your TTS message has more than one line (so that the system plays the message), for example {{ variable \| escape('json')}}. There's no character limit for Cisco Text-to-Speech messages. The field accepts two types of input—raw text (plaintext) or Speech Synthesis Markup Language (SSML)—formatted data. You can also use variables as part of the message to read the dynamic content. For supported SSML tags for Cisco Cloud Text-to-Speech, see the [Text-to-Speech (TTS) in Webex Contact Center](https://help.webex.com/article/ntkjqhw/Text-to-Speech-%28TTS%29-in-Webex-Contact-Center#reference-template%5Fb6eff334-4963-4685-b1dc-17184aaaa308). |
| Add Audio Variable                         | Use this option to configure the audio prompt to be played dynamically to the customers. For example, you can configure this variable to play the audio prompt in multiple languages based on the customer's preference during the interaction. To configure the audio variable, click Add Audio Variable. Enter the variable value in the form of a pebble expression. For more information, see [Pebble Template Syntax](#Cisco%5FConcept.dita%5F9a750452-028a-4114-aa7a-7a37fab78b8f). The variable value must match the name of the .wav file that is uploaded to the Control Hub.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Preview prompt**                         | Click the Preview prompt button to test and preview text-to-speech messages and audio files. In the Preview prompt dialog box that appears, choose the required voice to test the prompt. You can play the messages and audio files as follows: Click Play all to play both audio file and TTS message together. Play only audio files. Play only text-to-speech messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

##### Text-to-speech settings

The text-to-speech settings include the following settings that are used to validate the expected DTMF input from the caller.

__Table 8\. Text-to-speech settings__
| **Parameter** | **Description**                                                                                                                                                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Speaking Rate | Indicates the rate of speech. Increase or decrease the numeric input to maintain the ideal rate of speech and control the output speaking rate. Valid values for the numeric input are in the range of 0.25 to 4.0 words per minute (wpm). The default value is 1.0 wpm. |
| Volume Gain   | Indicates the increase or decrease in volume output. Increase or decrease the numeric input to maintain the ideal volume of output speech. Valid entries for the numeric input are in the range of –96.0 decibels to 16.0 decibels (dB). The default value is 0.0 dB.    |

Don't include only the Play Message activity in loop after the [Queue Contact](#Cisco%5FGeneric%5FTopic.dita%5Fc93b6399-3cd7-4c86-9e82-48a82469fb8e) activity in the call flow. You can use a combination of the [Play Music](#Cisco%5FConcept.dita%5Fc5322b24-0803-42ca-b831-3101e8c5b053) activity and the Play Message activity in loop to make a valid call flow. 

When you include the Play Message activity before the [_HTTP Request_](#Cisco%5FGeneric%5FTopic.dita%5Fb1192550-38d4-46e5-be3d-2119794def93) activity in a call flow, the HTTP request executes only after the audio is played fully.

#### Screen Pop

A Screen Pop is a window or a dialog box that appears in an agent’s Desktop when the agent answers a customer call. The agent gets more information about the caller to proceed further with a conversation. For more information, see the Screen Pop section in [Get started with Agent Desktop](https://help.webex.com/article/itebdl) article.

The Screen Pop activity becomes relevant only after an agent involves in an interaction. It typically uses the `AgentAnswered` event and the `PhoneContactEnded` event.

When you use this activity in the Main Flow, you expose a set of events in the Event Flows tab. For more information on these events, see [Event flows](#events-in-flow-designer).

You can build a single event handling flow for each event. For example, when an agent accepts an inbound call, a Screen Pop displays. The Screen Pop activity contains information that is based on the flow variables. The Screen Pop integrates Webex Contact Center with other business applications such as CRM (Salesforce), ticketing tools, and order entry system. 

 Complete this configuration in the Event Flows tab in Flow Designer. To define different Screen Pop behaviors that are based on Main Flow criteria, use a Condition or Case activity. You can define one Screen Pop for each flow.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](#EventFlows).

Screen Pop for new digital channels must be configured in the Connect Flow Builder. For more information, see <https://help.imiconnect.io/docs/wxcc-overview>.

The following sections enable you to configure the Screen Pop activity:

- [General Settings](#section%5Fjx5%5Fkhz%5Fjrb)
- [URL Settings](#section%5Ff1b%5Flhz%5Fjrb)
- [Display Settings](#section%5Fqk3%5Flhz%5Fjrb)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### URL Settings

Use the URL settings option to define a URL for Screen Pop configurations. To type a variable, use the syntax `{{variables}}`. 

For example, `{{NewPhoneContact.ANI}}`.

__Table 9\. URL Settings__
| **Parameter**            | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Screen Pop URL           | Enter the URL of the intended website, such as <http://www.salesforce.com>. After the agent answers a call, the configured URL populates the Screen Pop in the Desktop.                                                                                                                                                                                                                                                                                                                                                                      |
| Query Parameters         | Enter the various variables in the payload. To add a new query parameter, click Add New. Enter the attribute–value details in the KEY and VALUE fields respectively.                                                                                                                                                                                                                                                                                                                                                                         |
| Screen Pop Desktop Label | Enter a short and intuitive custom display text that replaces the Screen Pop URL on the Agent Desktop. After the agent answers or ends a call, this label appears as a hyperlink in the Screen Pop notification on the Agent Desktop. For example, if the Screen Pop URL is <http://www.salesforce.com> and the Screen Pop Desktop Label is Salesforce, the system displays the hyperlink as [ _Salesforce_ ](http://www.salesforce.com) in the Screen Pop notification. This label also appears in the Screen Pop tab of the Agent Desktop. |

##### Display Settings

__Table 10\. Display Settings__
| **Parameter**           | **Description**                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New browser tab         | The Screen Pop displays in a new browser tab every time without affecting the existing Screen Pop.                                                                                                                                                                                                                                     |
| Existing Screen Pop tab | The Screen Pop displays inside the existing browser tab replacing the previous Screen Pop.                                                                                                                                                                                                                                             |
| Inside Desktop          | The Screen Pop displays as a tab in the Auxiliary Information pane in the Desktop. If the Screen Pop display option is Inside Desktop, the Screen Pop displays in the Auxiliary Information pane for the duration of the call. The Screen Pop is retained even when you select a task from another channel type in the Task List pane. |

If the Screen Pop display option is Inside Desktop or Existing browser tab, data being entered in the Screen Pop for a call is lost if the agent accepts a new call. To prevent the loss of data, configure the display option as New browser tab.

For example, consider that the Screen Pop display option is Inside Desktop. If the agent accepts a new inbound call while entering data in the Screen Pop for a previous call, the data being entered for the previous call is lost when the Screen Pop for the new call pops up.

#### Collect Digits

The Collect Digits activity prompts the caller to enter a Dual-Tone Multi-Frequency (DTMF) input such as an account number. Similar to the Play Message and Menu activities, the Collect Digits activity can use audio files, text-to-speech messages, or a combination of both.

This activity accepts DTMF input digits from 0 through 9 and alphabets A, B, C, and D. The caller can enter # or \* as a termination symbol to indicate the end of DTMF input. 

The caller cannot use the termination symbols for any other scenarios as part of Collect Digit activity such as confirming the amount or customer ID.

By default, Next Generation media platform supports only RFC2833 type DTMF for both inbound and outbound calls.

Next Generation media platform supports in-band DTMF.

This feature is available only if the corresponding feature flag is enabled.

You can also hear in-band DTMF tones during recording and in conference with other parties.

You can configure these error-handling paths to handle flow execution errors:

__Table 11\. Activity execution errors__
| Path            | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entry Timeout   | Indicates the error output path that the flow takes after the entry timeout duration has elapsed. Configuring this path ensures that the caller doesn’t go idle for too long. Modify the entry timeout duration in the Advanced Settings section of the Properties pane. Consider playing a message to clarify what is expected from the caller, and then loop back to the start of the activity. |
| Unmatched Entry | Indicates the error output path that the flow takes if the caller enters a DTMF input that is not configured in the Custom Menu Links section. Configuring this path ensures that the caller is allowed to restart the activity and try again. Consider playing a message to clarify what is expected from the caller, and then loop back to the start of the activity.                           |
| Undefined Error | For more information, see [Configure error handling](#Cisco%5FConcept.dita%5F4079aa76-8682-4cbc-b7fd-d84fcb358568).                                                                                                                                                                                                                                                                               |

You can configure the Collect Digits activity using the following settings:

- [General Settings](#section%5Fy2p%5F2yz%5Fjrb)
- [Prompt settings without text-to-speech enabled](#section%5Fgyd%5F2yz%5Fjrb)
- [Prompt settings with text-to-speech enabled](#section%5Fgyd%5F2z%5Fjrb%5F1)
- [Text-to-speech settings](#section%5Flhv%5Fdyz%5Fjrb)
- [Advanced Settings](#section%5Fhc5%5Flyz%5Fjrb)
- [Output Variables](#section%5Fdsq%5Fbrm%5Fpsb)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Prompt settings without text-to-speech enabled

By default, text-to-speech is not enabled. To configure the prompt without text-to-speech, add at least one prerecorded audio file. Choose the audio file from the drop-down list. You can configure up to a total of five audio prompts (audio files and audio prompt variables combined). The full prompt is played to the caller in the configured order, alternating between the audio files and audio prompt variables. 

If any of the ordered list inputs is empty, the system displays a Flow Error. Resolve these errors before publishing the flow.

__Table 12\. Prompt settings without text-to-speech enabled__
| **Parameter**             | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add Audio File(s)         | To add more audio files, click Add New. The files are played to the caller in the sequence that they are configured. To remove an audio file from the sequence, click the Delete icon that appears beside each drop-down list. The Delete icon doesn’t appear when only one drop-down list is available because you need at least one audio file for the prompt. To manage audio files, see [Upload an Audio Resource File](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#task%5F6559AFD221732805A975ED3E0F3E4FB6).                 |
| Add Audio Variable        | Use this option to configure the audio prompt to be played dynamically to the customers. For example, you can configure this variable to play the audio prompt in multiple languages based on the customer's preference during the interaction. To configure the audio variable, click Add Audio Variable. Enter the variable value in the form of a pebble expression. For more information, see [Pebble Template Syntax](#Cisco%5FConcept.dita%5F9a750452-028a-4114-aa7a-7a37fab78b8f). The variable value must match the name of the .wav file that is uploaded to the Control Hub. |
| **Preview prompt**        | Click the Preview prompt button to preview the audio file. In the Preview promptdialog box that appears click play to play the chosen audio files.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Make Prompt Interruptible | The Make Prompt Interruptible check box allows you to indicate if the configured prompt can be interrupted by the caller's input or event. By default, prompts can't be interrupted. If the prompt is important for the caller to hear, don’t allow it to be interruptible. For the organizations that are provisioned with the new Next Generation platform, the system configures the prompt interruptible by default, irrespective of whether the Make Prompts Interruptible check box is checked or unchecked by the flow developers.                                              |

##### Prompt settings with text-to-speech enabled

By default, text-to-speech isn’t enabled. To use text-to-speech in your prompts, enable the Text-to-Speech toggle button. You can configure up to a total of five audio prompts (text-to-speech messages, audio files, and audio prompt variables combined). The full prompt is played to the caller in the configured order, alternating between the text-to-speech messages, audio files, and audio prompt variables configured.

__Table 13\. Prompt configuration with text-to-speech enabled__
| **Parameter**                              | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connector                                  | The Language and Voice options change based on the selected connector. The selection dictates the language, gender, and tone that the system uses to read text-to-speech messages to the caller. If you’re using Google TTS, you can preview the various options on the [Google Text to Speech](https://cloud.google.com/text-to-speech) page. Existing customers on the Next Generation voice platform can view both Cisco Cloud Text-to-Speech and Google TTS connectors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Override Default Language & Voice Settings | Use this toggle to override the voice settings configured in the Global Voicename variable. This parameter is enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Output Voice                               | Indicates the output voice name. This field appears only if you enable the Override Default Language & Voice Settings toggle button. Select the output voice name from the drop-down list. If the output voice name that is supported by Google isn’t available in the Output Voice  drop-down list, disable the Override Default Language & Voice Settings toggle button. Include the [Set Variable](#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c) activity before the Collect Digits activity in the flow. Configure the Set Variable activity as follows: Set the variable to Global\_VoiceName. Set the variable value to the required output voice name code (for example, en-US-Standard-D). For more information on the supported voices and languages, see the Google [_Supported voices and languages_](https://cloud.google.com/text-to-speech/docs/voices) page.                                                                                                                                                                                                                                    |
| Add Text to Speech Message                 | When you build your prompt, you can use text-to-speech or a mix of prerecorded audio files and text-to-speech messages. Click Add Text-to-Speech Message to add a new text input field to the Prompt section. Here, you can type the message that is read to the caller with the selected language and voice. **Important considerations:** Use a Set Variable activity to set the value of TTS message to a flow variable before using it in the activity. Use single quotes instead of double quotes inside pebble expressions. There's no character limit for Cisco Text-to-Speech messages. The field accepts two types of input: raw text (plaintext) or SSML-formatted data. You can use variables also as part of the message to read the dynamic content. To specify a variable, use this syntax: {{variable}}. For example, {{NewPhoneContact.ANI}}. For supported SSML tags for Cisco Cloud Text-to-Speech, see the [Text-to-Speech (TTS) in Webex Contact Center](https://help.webex.com/en-us/article/ntkjqhw/Text-to-Speech-%28TTS%29-in-Webex-Contact-Center#reference-template%5Fb6eff334-4963-4685-b1dc-17184aaaa308). |
| Add Audio File                             | To alternate text-to-speech messages with prerecorded audio files, click Add Audio File. This adds a new row to the configuration where you can select an audio file from a drop-down list.  To remove an item from the sequence, click the Delete icon next to that item. The Delete icon isn’t visible when only one field is configured, because at least one message or audio file is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Add Audio Variable                         | Use this option to configure the audio prompt to be played dynamically to the customers. For example, you can configure this variable to play the audio prompt in multiple languages based on the customer's preference during the interaction. To configure the audio variable, click Add Audio Variable. Enter the variable value in the form of a pebble expression. For more information, see [Pebble Template Syntax](#Cisco%5FConcept.dita%5F9a750452-028a-4114-aa7a-7a37fab78b8f). The variable value must match the name of the .wav file that is uploaded to the Control Hub.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Preview prompt**                         | Click the Preview prompt button to test and preview the text-to-speech messages and the audio files. In the Preview prompt dialog box that appears, choose the required voice to test the prompt. You can play the messages and audio files as follows: Click Play all to play both the audio file and the message together. Play only the audio files. Play only the text-to-speech messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Make Prompt Interruptible                  | The Make Prompt Interruptible check box allows you to indicate if the configured prompt can be interrupted by the caller's input or event. By default, prompts can't be interrupted. If the prompt is important for the caller to hear, don’t allow it to be interruptible. For the organizations that are provisioned with the new Next Generation platform, the system configures the prompt interruptible by default, irrespective of whether the Make Prompts Interruptible check box is checked or unchecked by the flow developers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

##### Text-to-speech settings

The text-to-speech settings include the following settings that are used to validate the expected DTMF input from the caller.

__Table 14\. Text-to-speech settings__
| **Parameter** | **Description**                                                                                                                                                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Speaking Rate | Indicates the rate of speech. Increase or decrease the numeric input to maintain the ideal rate of speech and control the output speaking rate. Valid values for the numeric input are in the range of 0.25 to 4.0 words per minute (wpm). The default value is 1.0 wpm. |
| Volume Gain   | Indicates the increase or decrease in volume output. Increase or decrease the numeric input to maintain the ideal volume of output speech. Valid entries for the numeric input are in the range of –96.0 decibels to 16.0 decibels (dB). The default value is 0.0 dB.    |

##### Advanced Settings

The Collect Digits activity includes the following advanced settings that are used to validate the expected DTMF input from the caller.

__Table 15\. Advanced Settings__
| **Parameter**       | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No-Input Timeout    | Indicates the maximum duration that the Collect Digits activity waits for input, before proceeding to the Entry Timeout path. The default value is 3 seconds.                                                                                                                                                                                                                                                                                                                                                               |
| Inter-Digit Timeout | Indicates the maximum duration for which the Collect Digits activity waits between digits, before continuing in the flow. This occurs only after at least one digit is entered. The caller can enter the terminator symbol to indicate that the entry is completed, so that the call proceeds without waiting for the Inter-Digit Timeout. Inter-Digit Timeout isn’t applicable for customers using the Voice Services Platform. By default, this parameter isn’t disabled for customers using the Voice Services Platform. |
| Minimum Digits      | Indicates the minimum number of digits that the caller must enter. The default value is 1\. If the caller enters the input that is less than this value, the flow follows the Unmatched Entry path that is configured in the Error Handling section.                                                                                                                                                                                                                                                                        |
| Maximum Digits      | Indicates the maximum number of digits that the caller can enter. The default value is 10\. If the caller enters the input that is more than this value, the flow follows the Unmatched Entry path that is configured in the Error Handling section.                                                                                                                                                                                                                                                                        |
| Terminator Symbol   | Indicates the character that the caller can enter to specify the end of input. The Terminator Symbol can be either # or \* depending on the configuration. By default, the Terminator Symbol is #.                                                                                                                                                                                                                                                                                                                          |

##### Output Variables

The Collect Digits activity includes the `{{CollectDigits.DigitsEntered}}` output variable. When the flow is executed, this variable stores the DTMF input that the caller entered during their interaction with the activity. Use this variable in later activities to control the flow sequence. The variable name dynamically changes based on the label that is associated with the Collect Digits activity. The system must capture multiple variable values if the flow uses more than one Collect Digits activity in the flow. For more information, see [Event Output Variables](#Cisco%5FConcept.dita%5F711df3fb-a535-43b3-b9d2-fdc5322f96d5).

##### Decryption Settings

You can decrypt the output variables of the Collect Digits activity. If decryption is enabled at the flow level, users with debug decryption access can view the unmasked output values of the Collect Digits activity in the flow debug logs. Turn off the Enable decryption toggle to disable decryption at the activity level for additional protection.

#### Menu

The Menu activity allows you to build a Cisco Unified IP Interactive Voice Response (IVR) experience in your flow. The activity plays a prompt that allows the caller to enter a DTMF digit. Based on the digit that the caller enters, the flow can take a different path.

 A Menu can have 1–10 branches, represented by digits 0–9.

You can use the Menu activity with or without text-to-speech enabled. The configuration options change accordingly.

You can configure these error-handling paths to handle flow execution errors:

__Table 16\. Activity execution errors__
| Path             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No-Input Timeout | Indicates the error output path that the flow takes after the entry timeout duration has elapsed. Configuring this path ensures that the caller doesn’t go idle for too long. Modify the No-Input Timeout duration in the Advanced Settings section of the Properties pane. Consider playing a message to clarify the expectations to the caller, and then loop back to the start of the activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Unmatched Entry  | Indicates the error output path that the flow takes after the caller enters a DTMF input that isn't configured in the Custom Menu Links section. Configuring this path ensures that the caller can restart the activity and try again. Consider playing a message to clarify the expectations to the caller, and then loop back to the start of the activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | To loop the call back to the start of the activity for a specified number of times: Add the Set Variable activity after the Menu activity.In the Menu activity, connect No-input timeout and Unmatched Entry nodes to the Set Variable activity.Configure the Set Variable activity as follows: In the Variable field choose Timeout. Set the Variable Value to {{Timeout +1}}. Add the Condition activity after the Set Variable activity.In the Condition activity, enter the following expression: {{Timeout >= n}}, where 'n' is the number of times you want to return the call back to the menu before the call disconnects.For example, if {{Timeout >= 3}}, the configuration returns the call back to the menu thrice before the call disconnects.Add the Play Message activity followed by the Disconnect Contact activity to play the recording and disconnect the call if the caller doesn't select the configured options or time out occurs after n number of times. |

The following sections enable you to configure the Menu activity:

- [General Settings](#section%5Fynz%5Fy5z%5Fjrb)
- [Prompt](#section%5Fpnn%5Fy5z%5Fjrb)
- [Custom Menu Links](#section%5Fabc%5Fdvz%5Fjrb)
- [Text-to-Speech settings](#section%5Fwbm%5Fhvz%5Fjrb)
- [Output Variable](#section%5Fbvt%5Fhvz%5Fjrb)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Prompt

**Prompt settings without text-to-speech**

Text-to-speech isn't enabled by default. To use text-to-speech in your prompt, enable the **Text-to-Speech** toggle button. Choose the audio file from the drop-down list. You can configure up to a total of five audio prompts (audio files and audio prompt variables combined). The activity plays the full prompt to the caller in the configured order, alternating between the audio files, and audio prompt variables configured.

If any of the ordered list inputs is empty, the system throws a Flow Error. Resolve these errors before publishing the flow.

__Table 17\. Prompt settings without text-to-speech enabled__
| **Parameter**             | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add Audio Files           | To configure the prompt without text-to-speech, add at least one pre‐recorded audio file. Choose the file from the drop‐down field labeled **1**. To add more audio files, click **Add New**. To remove an audio file from the sequence, click the **Delete** icon that appears beside the drop‐down list. Because at least one audio file is required, the **Delete** icon is not visible if only one drop‐down field is visible. Manage audio files from the Audio Prompts setting in the Control Hub. For more information, see [Manage audio prompts](https://help.webex.com/en-us/article/be12vp/Manage-audio-prompts). |
| Add Audio Variable        | Use this option to configure the audio prompt to be played dynamically to the customers. For example, you can configure this variable to play the audio prompt in multiple languages based on the customer's preference during the interaction. To configure the audio variable, click Add Audio Variable. Enter the variable value in the form of a pebble expression. For more information, see [Pebble Template Syntax](#Cisco%5FConcept.dita%5F9a750452-028a-4114-aa7a-7a37fab78b8f). The variable value must match the name of the .wav file that is uploaded to the Control Hub.                                       |
| **Preview prompt**        | Click the Preview prompt button to preview the audio file. In the Preview promptdialog box that appears click play to play the chosen audio files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Make Prompt Interruptible | This option allows you to indicate if the configured prompt can be interrupted by the caller's input or event. By default, **Make Prompt Interruptible** is not checked for the Menu activity. If you want the caller to be able to interrupt the menu when they enter their DTMF input, consider making the message interruptible. If your organization is provisioned with the new Next Generation platform, the system configures the prompt interruptible by default, regardless of whether the flow developers have checked or unchecked the Make Prompt Interruptible check box.                                       |

**Prompt settings with text-to-speech**

To use text-to-speech in your prompt, enable the **Text-to-Speech** toggle button. You can configure up to a total of five audio prompts (Text-to-Speech messages, audio files, and audio prompt variables combined). The activity plays the full prompt to the caller in the configured order, alternating between the Text-to-Speech messages, audio files, and audio prompt variables.

__Table 18\. Prompt Settings with Text-to-Speech Enabled__
| **Parameter**                              | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connector                                  | Choose a connector to authenticate the text-to-speech service. The drop‐down list displays the names of the Google connectors that are configured in the Control Hub. Existing customers on Classic voice platform can view only Google TTS connector in the drop-down list. Existing customers on the Next Generation voice platform can view both Cisco Cloud Text-to-Speech and Google TTS connectors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Override Default Language & Voice Settings | Use this toggle button to override the voice settings configured in the Global Voicename variable. This parameter is enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Output Voice                               | Select the output voice name from the drop-down list. If the output voice name that Google supports is not available in the Output Voice drop-down list, disable the Override Default Language & Voice Settings toggle button. Include the [Set Variable](#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c) activity before the Menu activity in the flow. Configure the Set Variable activity as follows: Set the variable to Global\_VoiceName. Set the variable value to the required output voice name code (for example, en-US-Standard-D). For more information on the supported voices and languages, see the Google [_Supported voices and languages_](https://cloud.google.com/text-to-speech/docs/voices) page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Add Audio File(s)                          | To alternate text-to-speech messages with prerecorded audio files, click **Add Audio File**. This adds a new row to the configuration where you can choose an audio file from a drop‐down list. To remove an item from the sequence, click the **Delete** icon near that item. Because at least one message or audio file is required, the **Delete** icon is not visible when only one field is configured.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Add Text to Speech Message                 | When you build your prompt, you can exclusively use text-to-speech or you can use a mix of prerecorded audio files and text-to-speech messages. Click **Add Text-to-Speech Message**  to add a new text input field to the prompt creation section. **Important considerations:** Use a Set Variable activity to set the value of TTS message to a flow variable before using it in the activity. Use single quotes instead of double quotes inside pebble expressions. You can type the message that should be read to the caller using the selected Language and Voice. There's no character limit for Cisco Text-to-Speech messages. The field accepts two types of input: raw text (plain text) or Speech Synthesis Markup Language (SSML)‐formatted data. You can also use variables as part of the message to read the dynamic content. If typing a variable, use this syntax: {{variable}}. For instance, {{NewPhoneContact.ANI}} uses valid variable syntax. For supported SSML tags for Cisco Cloud Text-to-Speech, see the [Text-to-Speech (TTS) in Webex Contact Center](https://help.webex.com/article/ntkjqhw/Text-to-Speech-%28TTS%29-in-Webex-Contact-Center#reference-template%5Fb6eff334-4963-4685-b1dc-17184aaaa308). |
| Add Audio Variable                         | Use this option to configure the audio prompt to be played dynamically to the customers. For example, you can configure this variable to play the audio prompt in multiple languages based on the customer's preference during the interaction. To configure the audio variable, click Add Audio Variable. Enter the variable value in the form of a pebble expression. For more information, see [Pebble Template Syntax](#Cisco%5FConcept.dita%5F9a750452-028a-4114-aa7a-7a37fab78b8f). The variable value must match the name of the .wav file that is uploaded to the Control Hub.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Preview prompt**                         | Click the Preview prompt button to test and preview the text-to-speech messages and the audio files. In the Preview prompt dialog box that appears, choose the required voice to test the prompt. You can play the messages and audio files as follows: Click Play all to play both the audio file and the message together. Play only the audio files. Play only the text-to-speech messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Make Prompt Interruptible                  | This option allows you to indicate if the configured prompt can be interrupted by the caller's input or event. By default, **Make Prompt Interruptible** is not checked for the Menu activity. If you want the caller to be able to interrupt the menu when they enter their DTMF input, consider making the message interruptible. For organizations that are provisioned with the new Next Generation platform, the system configures the prompt interruptible by default, regardless of whether the flow developers have checked or unchecked the Make Prompt Interruptible check box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

##### Custom Menu Links

The Custom Menu Links option allows you to configure one or more menu links based on the organizational requirements.

This capability helps one or more users to select different branches in the flow based on the selected digit.

You can configure up to ten Custom Menu Links.

__Table 19\. General settings__
| **Parameter**    | **Description**                                                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DIGIT            | Choose a number from the drop‐down list. DIGIT corresponds to the DTMF input that the caller enters to indicate which path of the flow to follow. Digits 0‐9 are available for selection, and you can select each option only once.                                                                                      |
| LINK DESCRIPTION | Add a description to indicate what path of the flow the digit corresponds to. For example, if pressing 1 leads the caller to a queue that can help with a sales question, type Sales in the link description. LINK DESCRIPTION has no impact on the call itself, but can help with tracking how the Menu is constructed. |
| Add New          | Click **Add New** to add more menu links. You can add a digit and link description for each row. You can add up to ten links.                                                                                                                                                                                            |

You can configure menu links in both the Properties pane and in the activity itself. This allows for different configuration options that are based on the preference of the user. The system updates the content in real‐time in both locations when an edit is made. 

##### Text-to-Speech settings

The text-to-speech settings include the following settings that are used to validate the expected DTMF input from the caller.

| **Parameter**    | **Description**                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Speaking Rate    | Indicates the rate of speech. Increase or decrease the numeric input to maintain the ideal rate of speech and control the output speaking rate. Valid values for the numeric input are in the range of 0.25 to 4.0 words per minute (wpm). The default value is 1.0 wpm. |
| Volume Gain      | Indicates the increase or decrease in volume output. Increase or decrease the numeric input to maintain the ideal volume of output speech. Valid entries for the numeric input are in the range of –96.0 decibels to 16.0 decibels (dB). The default value is 0.0 dB.    |
| No-Input Timeout | Specifies the maximum time that the activity waits for input before proceeding down the No-Input Timeout path. The default value is 3 seconds.                                                                                                                           |

##### Output Variable

The Menu activity employs the `{{Menu.OptionEntered}}` output variable. When the system executes the flow, this variable stores the DTMF input that the caller entered during their interaction with the Menu.

You can use the `{{Menu.OptionEntered}}` output variable in later activities to control the flow sequence. The variable name dynamically changes based on the label that is associated with the Menu activity. The system can capture multiple variable values when the flow uses more than one Menu activity. For more information about this variable type, see [Activity Output Variables](#Cisco%5FConcept.dita%5Fd2a950f8-5105-4e1e-bace-fd79141f1d8f).

#### Send Digits

You can use the Send Digits activity to configure flows that send DTMF tones to the caller during an IVR interaction. This is useful for:

- **Secure authentication**—Establishing an authenticated call flow by verifying the caller using DTMF.
- **Interacting with external systems**—Communicating with other systems that require DTMF input.
The Send Digits activity enables tone-based authentication and is important in scenarios requiring secure interactions such as verifying the authenticity of the call path. 

The following sections enable you to configure the Send DTMF activity:

##### General settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the Send Digits activity.       |
| Activity Description | (Optional) Enter a description for the activity. |

##### Play DTMF settings

| **Parameter**   | **Description**                                                          |
| --------------- | ------------------------------------------------------------------------ |
| Set Value       | Choose this option if you wish to configure static DTMF digits.          |
| Set to Variable | Choose this option if you wish to configure the DTMF digits dynamically. |

The maximum length of DTMF input is 32 characters. Supported characters are 0-9, A-D, asterisk (\*), hash (#), and comma (,). The character comma (,) signifies one second of delay.

You can use the Send Digits activity only during the first caller leg to IVR. If you use it within an interaction such as consult/transfer to entry point, the system ignores the Send Digits activity.

#### Blind Transfer

The Blind Transfer activity applies when a call should be transferred to an external or third-party DN based on a flow criteria set. The transfer can also be initiated to an external bridge. The configured criterion set triggers the activity.

Use the Blind Transfer node to transfer calls outside of Webex Contact Center, such as to external dial numbers or to those not linked to entry points. You cannot transfer variables with this transfer. Use the GoTo to move contacts within Webex Contact Center, such as between entry points or flows. Use variable mapping to seamlessly transfer data along with the contact.

During blind transfer, the previous skill limitations will be retained when a call is transferred to a skill based queue. This is because skill limitations are calculated when a flow is executed. However, since the flow is not executed in case of blind transfer, the previous skill limitations are retained.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](#EventFlows).

The following sections enable you to configure the Blind Transfer activity.

- [General settings](#section%5Fajs%5Fb5g%5Fnrb)
- [Transfer dial number](#section%5Fszy%5Fb5g%5Fnrb)
- [Add headers](#section%5Fuxf%5Fjdl%5Fw2c)
- [Output failure error codes](#section%5Fo4v%5F533%5Fp1c)

When you design a flow, a Consult interaction can't include a Blind Transfer activity.

You can't add a Blind Transfer activity within the event flows in Flow Control.

##### General settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Transfer dial number

The Transfer Dial Number section indicates the DN that a call is transferred to. You can enter the number manually or select a dynamic number through a variable. 

__Table 20\. Transfer Dial Number Settings__
| **Parameter**        | **Description**                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transfer Dial Number | Enter the DN to which a call should be transferred. This can be a specific number that is manually entered, or a dynamic number that is indicated through a flow variable.       |
| Specific Dial Number | Enter the number to which the call must be transferred.                                                                                                                          |
| Variable Dial Number | Choose the flow variable from the drop-down list. The list displays only variables of the type 'String'. The variable stores the number to which the call should be transferred. |

##### Add headers

The Add Headers section allows you to configure and pass the SIP headers parameters to external systems through the SIP INVITE messages. You can configure up to 20 headers in the outgoing SIP INVITE message.

Use of custom X-Headers is currently supported for organizations using Webex Calling with Local Gateway (LGW) as the telephony option for Webex Contact Center.

- You must avoid including the following sensitive PII information within the SIP headers.  
  - **Full names**—Avoid using full names of individuals.
  - **Social Security Numbers**—Do not include any part of a social security number.
  - **Physical addresses**—Refrain from using home or work addresses.
  - **Financial information**—Exclude credit card numbers, bank account details, etc.
  - **Health information**—Avoid sharing health-related details or data that could be considered PHI.

The following header patterns are reserved for internal use and must not be passed on as custom headers. By default, any headers that match this pattern will be dropped and not passed to Webex Contact Center.

- X-Address
- X-ADD-DIVERSION
- X-BNR-State
- X-BNR-Original-Codec
- X-BNR-Bypassed
- X-BroadWorks-Correlation-Info
- X-FS-Support
- X-Path
- X-RTMS-CID
- X-RTMS-OID
- X-RTMS-CONFID
- X-RTMS-AGENT-LEGID
- X-RTMS-ENTER-SOUND
- X-RTMS-APP-PREFIX
- X-RTMS-No-Lookup
- X-VPOP-DOMAIN

__Table 21\. Add Headers settings__
| **Parameter** | **Description**                                                                             |
| ------------- | ------------------------------------------------------------------------------------------- |
| Key           | Enter the key for a custom X-Header.                                                        |
| Value         | Enter a value for the custom header that will be passed to the outgoing SIP INVITE message. |

##### Output failure error codes

The following table summarizes the output failure codes for the Blind Transfer activity.

| **Failure code** | **Failure description**   | Explanation                                                                                                    |
| ---------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 48               | Unsupported flow activity | The flow can't run the Bridged Transfer activity post-queueing or once an agent has been assigned to the call. |
| 6                | System\_Error             | This code represents miscellaneous errors that don’t fall into the above defined categories.                   |

#### Bridged Transfer

The Bridged Transfer activity allows a call to be temporarily transferred with a flow to an external destination while retaining control of the call. The external destination can be an external bridge or an Interactive Voice Response service (IVR).

When the third-party ends the call, the call flow continues and reengages as required, such as queuing the call to an agent.

Bridged Transfer activity is enhanced to dequeue the contact when sending a contact to a third-party interactive voice response (IVR) or automatic call distribution (ACD). If the contact isn’t handled in the third-party system, it can be taken back to the original queue.

For example, assume a contact center has Webex Contact Center agent resources and agent resources on an external call center/PBX. The customer wants to queue a call against a queue of Webex Contact Center agents for a brief period (say 60 seconds). If no agent is available during that period, the call can then be bridge transferred (with an implicit dequeue) to the external call center for handling to improve the response time to the customer. 

The following sections guide you on how to configure the Bridged Transfer activity.

- [General settings](#section%5Fajs%5Fb5g%5Fnrb)
- [Transfer dial number](#section%5Fszy%5Fb5g%5Fnrb)
- [Transfer timeout settings](#section%5Fi1x%5Fgh3%5Fp1c)
- [Output digit settings](#section%5Fkw3%5Fdqn%5Fmfc)
- [Add headers](#section%5Fy2s%5Fddl%5Fw2c)
- [Output variables](#section%5Fo4v%5F533%5Fp1c)

##### General settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Transfer dial number

The Transfer Dial Number  section indicates the DN to which a call is transferred. Enter the number manually or select a dynamic number through a variable. 

__Table 23\. Transfer dial number settings__
| **Parameter**        | **Description**                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transfer Dial Number | Enter the DN to which a call should be transferred. This can be a specific number that is manually entered, or a dynamic number that is indicated through a flow variable. |
| Specific Dial Number | Enter the number to which the call must be transferred.                                                                                                                    |
| Variable Dial Number | Choose the flow variable from the drop-down list. The variable stores the number to which the call should be transferred.                                                  |

##### Output digit settings

The Output Digit Settings section allows you to outpulse DTMF digits to the destination during a bridged transfer. Use this section to send information or navigate menus on the third-party IVR. To outpulse the DTMF digits, enter the digits manually or select a dynamic digit through a variable. 

__Table 24\. Output digit settings__
| **Parameter**          | **Description**                                                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Send Output Digits     | Turn on the toggle if you want to outpulse the DTMF digits to the destination, after the destination answers the call and before the transfer is completed. |
| Specific output digits | Enter the specific DTMF output digits.                                                                                                                      |
| Variable output digits | Choose the flow variable from the drop-down list. The variable stores the DTMF number.                                                                      |

The maximum length of DTMF digits is 32 characters. Supported characters are 0-9, A-D, asterisk (\*), hash (#), and comma (,). The character comma (,) signifies one second of delay.

##### Transfer timeout settings

The Transfer Timeout Settings section allows you to configure the behavior of a Bridged Transfer activity when the transferred call isn’t answered within a specified time.

__Table 25\. Transfer timeout settings__
| **Parameter** | **Description**                                                                                                                                                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Timeout       | This is how long the system waits for the transferred party to pick up the call. If the recipient doesn’t pick up within this time, the system terminates the call. The duration should be in the range of 1–120 seconds. The default value is 10 seconds. |

##### Add headers

The Add Headers section allows you to configure and pass the SIP headers parameters to external systems through the SIP INVITE messages. You can configure up to 20 headers in the outgoing SIP INVITE message.

Use of custom X-Headers is currently supported for organizations using Webex Calling with Local Gateway (LGW) as the telephony option for Webex Contact Center.

- You must avoid including the following sensitive PII information within the SIP headers.  
  - **Full Names**—Avoid using full names of individuals.
  - **Social Security Numbers**—Do not include any part of a social security number.
  - **Physical Addresses**—Refrain from using home or work addresses.
  - **Financial Information**—Exclude credit card numbers, bank account details, etc.
  - **Health Information**—Avoid sharing health-related details or data that could be considered PHI.

The following header patterns are reserved for internal use and must not be passed on as custom headers. By default, any headers that match this pattern will be dropped and not passed to Webex Contact Center.

- X-Address
- X-ADD-DIVERSION
- X-BNR-State
- X-BNR-Original-Codec
- X-BNR-Bypassed
- X-BroadWorks-Correlation-Info
- X-FS-Support
- X-Path
- X-RTMS-CID
- X-RTMS-OID
- X-RTMS-CONFID
- X-RTMS-AGENT-LEGID
- X-RTMS-ENTER-SOUND
- X-RTMS-APP-PREFIX
- X-RTMS-No-Lookup
- X-VPOP-DOMAIN

__Table 26\. Add Headers settings__
| **Parameter** | **Description**                                                                             |
| ------------- | ------------------------------------------------------------------------------------------- |
| Key           | Enter the key for a custom X-Header.                                                        |
| Value         | Enter a value for the custom header that will be passed to the outgoing SIP INVITE message. |

##### Output variables

Output variables allow you to capture information on the outcome of the transfer.

__Table 27\. Output variables__
| **Parameter**                           | **Description**                                                                                                                                                                                    |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BridgedTransfer\_dxm.FailureCode        | This parameter records error or status codes corresponding to failed attempts at performing a Bridged transfer using the Digital Extension Module (DXM).                                           |
| BridgedTransfer\_dxm.FailureDescription | This parameter stores the description of the failure encountered during an attempted Bridged transfer using the (DXM).                                                                             |
| BridgedTransfer.Headers                 | This parameter stores the SIP headers parsed from BYE message. The headers are stored as a JSON object. Individual headers can be extracted and set into flow or global variables for further use. |

The following table summarizes the Bridged Transfer activity output failure codes.

| **Failure code** | **Failure description**   | Explanation                                                                                                                                                 |
| ---------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                | Invalid\_Number           | The dialed external directory number (DN) is invalid.                                                                                                       |
| 2                | Busy                      | The external DN is either engaged or has rejected incoming calls.                                                                                           |
| 3                | No answer                 | The external DN failed to answer the call within the preset timeout duration.                                                                               |
| 48               | Unsupported flow activity | The flow can't run the Bridged Transfer activity post-queueing or once an agent has been assigned to the call.                                              |
| 5                | Unsupported\_DN           | You can’t use the external DN, if it’s designated as an _EP-DN within the system portal_, or if it _matches the logged in agent's DN on the Agent Desktop_. |
| 6                | System\_Error             | This code represents miscellaneous errors that don’t fall into the above defined categories.                                                                |

Bridged Transfer is available on Next-Generation Voice Media platforms (VPOP and Webex Calling) only.

##### Unsupported flow configurations

- You can't add the Bridged Transfer activity to the Queue Contact activity.
- Don’t introduce a Bridged Transfer activity later in the flow for contacts that are parked, queued, or assigned to an agent, . This may lead to an unsupported flow error.
- You can't use the Bridged Transfer activity in outbound call flows.
- You can't add a Bridged Transfer activity within the event flows in Flow Control.

#### Virtual Agent

The Virtual Agent activity provides a real-time conversational experience for your contact center customers. You can add a Virtual Agent to the call flow to handle customer queries in the conversational format. The Virtual Agent is powered by Google’s Dialogflow capabilities. When a customer speaks, the Dialogflow matches the customer conversation to the best intent in the Virtual Agent. Further, it assists the customer as part of the Interactive Voice Response (IVR) experience.

Before you use a Virtual Agent:

1. Set up a Dialogflow agent. For more information on building a Dialogflow agent in the Google Cloud, see [_Build an agent_](https://cloud.google.com/dialogflow/es/docs/quick/build-agent).  
Include `Hello` as a training phrase in the preferred language for the Dialogflow agent to start a conversation with the caller. You can add this training phrase in the default welcome intent or in any other intent of the Dialogflow agent. For more information, see [_Intents_](https://cloud.google.com/dialogflow/es/docs/intents-overview).  
Depending on the way you set up the Dialogflow agent, you can use the Virtual Agent activity to handle different kinds of use cases.
2. Configure a Virtual Agent in Control Hub.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](#EventFlows).

The following sections enable you to configure the Virtual Agent activity:

- [General Settings](#section%5Fjx4%5Fdp4%5F3rb)
- [Conversational Experience](#section%5Ftyr%5Fclt%5Ffrb)
- [Variable Passing](#section%5Fkvc%5F2p4%5F3rb)
- [Advanced Settings](#section%5Fhl3%5F2p4%5F3rb)
- [Output Variables](#section%5Fuhh%5Fz3t%5Ffrb)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Conversational Experience 

| **Parameter**                              | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Virtual Agent                              | Choose a Virtual Agent in Control Hub. The Virtual Agent powers the natural language conversation as part of the IVR experience with the caller.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Make Prompts Interruptible                 | Enables the customers to interrupt the Virtual Agent to make new requests or end the call.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Override Default Language & Voice Settings | Use this toggle button to override the language and voice settings that are configured in Global\_Language and Global\_VoiceName variables. This parameter is enabled by default. For a flow to work, you need to set the global variables in the flow to configure the default input language and output voice for virtual agent. For more information about how to add global variables in the flow, see [Global variables](#Cisco%5FGeneric%5FTopic.dita%5F0a32bcfc-1bfc-4413-bf75-7e941b228a81).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Input Language                             | Indicates the language that the customer uses while speaking to the Virtual Agent. This field appears only if you enable the Override Default Language & Voice Settings toggle button. If the input language that Google supports is not available in the Input Language drop-down list, disable the Override Default Language & Voice Settings toggle button. Include the [Set Variable](#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c) activity before the Virtual Agent activity in the flow. Configure the Set Variable activity as follows: Set the variable to Global\_language. Set the variable value to the required language code (for example, fr-CA). For more information on the languages, see the Google [_Language reference_](https://cloud.google.com/dialogflow/es/docs/reference/language) page. Virtual Agent voice deployments in Webex Contact Center support only languages with the recognition model as an _enhanced phone call_(see [Supported voices and languages](https://cloud.google.com/text-to-speech/docs/voices) that are available with Dialogflow Essentials (ES) (see [Language reference](https://cloud.google.com/dialogflow/es/docs/reference/language)). |
| Output Voice                               | The default value is Automatic. When the value is Automatic, the Dialogflow chooses the voice name for a given language. Ensure that the voice name configured is as per the chosen language. If the output voice name that Google supports is not available in the Output Voice drop-down list, disable the Override Default Language & Voice Settings toggle button. Include the [Set Variable](#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c) activity before the Virtual Agent activity in the flow. Configure the Set Variable activity as follows: Set the variable to Global\_VoiceName. Set the variable value to the required output voice name code (for example, en-US-Standard-D). For more information on the supported voices and languages, see the Google [_Supported voices and languages_](https://cloud.google.com/text-to-speech/docs/voices) page.                                                                                                                                                                                                                                                                                                                             |

For more information on Text to Speech voices, see [_Supported voices and languages_](https://cloud.google.com/text-to-speech/docs/voices).

##### Variable Passing

The optional parameters in the Virtual Agent activity can contain personally identifiable information (PII). Webex Contact Center sends these parameters to the Google Dialogflow as variables to implement advanced conversational logic with the bot.

__Table 28\. Optional Parameters__
| **Parameter** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Key-Value     | The Key-Value parameter allows you to enter a variable name and the associated value. You can enter variable values by using the double curly braces syntax.For example, if you want to return the account balance of a customer based on the ANI, the key and value can be:Key: ANI Value: {{NewPhoneContact.ANI}}  To add a variable parameter, click Add New. This adds a row where you can enter the respective key-value pair.The contact center sends these parameter values to the Google Dialogflow as a JSON value in the request.query\_param.payload object. The system parses and handles this JSON in the fulfillment application. The system reaches this application through the webhook that is configured in the Dialogflow. For more information, see [_Fulfillment_](https://cloud.google.com/dialogflow/es/docs/fulfillment-overview). |

##### Advanced Settings 

__Table 29\. Advanced Settings__
| **Parameter**                  | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No-Input Timeout               | Indicates the amount of time that the Virtual Agent waits for customer input (voice or DTMF). The default value is 5 seconds. The value can range from 1 to 30 seconds.                                                                                                                                                                                                                                                                                                                               |
| Max No-Input Attempts          | Indicates the number of times the Virtual Agent waits for customer input (voice or DTMF). The default value is 3\. The value can range from 0 to 9.When the maximum number of attempts elapse, the Virtual Agent exits, with the output variable [ErrorCode](#p%5Fv2s%5Fcpf%5Fkrb) set to the value max\_no\_input.                                                                                                                                                                                   |
| Inter-digit Timeout            | The amount of time that the Virtual Agent waits for the next DTMF input from the customer before the Virtual Agent moves on in the conversation flow. The default value is 3 seconds. The value can range from 0 to 30 seconds.                                                                                                                                                                                                                                                                       |
| Terminator Symbol              | The character that the customer can enter to indicate the end of input. The Terminator Symbol can be either # or \* depending on the configuration.                                                                                                                                                                                                                                                                                                                                                   |
| Termination Delay              | Enables the Virtual Agent to complete the last message before the activity stops and moves on to the next step in flow.  For example, if you want the Virtual Agent to indicate something to the caller before the system escalates the call to an agent, consider the time it takes to complete the final message before escalation. The value can range from 1 to 30 seconds. If you configure the **Termination Delay** value as 0, the system does not play the last audio message to the caller. |
| Speaking Rate                  | Indicates the rate of speech. Increase or decrease the numeric input to maintain the ideal rate of speech and control the output speaking rate. Valid values for the numeric input are in the range of 0.25 to 4.0 words per minute (wpm). The default value is 1.0 wpm.                                                                                                                                                                                                                              |
| Volume Gain                    | Indicates the increase or decrease in volume output. Increase or decrease the numeric input to maintain the ideal volume of output speech. Valid entries for the numeric input are in the range of –96.0 decibels to 16.0 decibels (dB). The default value is 0.0 dB.                                                                                                                                                                                                                                 |
| Enable Conversation Transcript | Enables the Desktop to display the transcript of the conversation between the Virtual Agent and the customer. The raw transcript is also available through a dynamic URL. You can use this URL to extract specific sections from the transcript using an HTTP request.                                                                                                                                                                                                                                |

##### Output Variables 

These variables store the output status of the event that occurs during the conversation between the Virtual Agent and the customer.

__Table 30\. Output Variables__
| **Output Variable** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VVA.LastIntent      | Stores the last intent that is triggered by the Virtual Agent before moving to the Escalation or Handled intent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| VVA.TranscriptURL   | Stores the URL that points to the transcript of the conversation between the Virtual Agent and the customer. Use the [Parse](#Cisco%5FGeneric%5FTopic.dita%5Fc1a3583f-39e9-4250-9bf8-d8f419da6b05) activity to extract the parameters from the Virtual Agent transcript.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| VVA.ErrorCode       | Stores the status code whose value depends on the outcome of the conversation between the Virtual Agent and the customer. This variable holds one of the following values: no\_error: Indicates that the Handled and Escalated outputs had no errors. max\_no\_input: Indicates that the customer didn't have any input errors within the specified Max No-Input Attempts. term\_char\_without\_input: Indicates that the customer pressed the termination key without any input (spoken or by key press). The terminator symbol can be either # or \* depending on the configuration. system\_error: Indicates any other error in the system. For example, Dialogflow error, network issue, and so on. To play a custom audio message to notify customers of an error, flow developers must include a Play Message activity (before disconnecting the call) in the flow. For more information on the Play Message activity, see [Play Message](#Cisco%5FConcept.dita%5F19353180-2d4f-41eb-b081-6d817451470b). |

##### Decryption Settings

You can decrypt the output variables of the Virtual Agent activity. If decryption is enabled at the flow level, users with debug decryption access can view the unmasked output values of the Virtual Agent activity in the flow debug logs. Turn off the Enable decryption toggle to disable decryption at the activity level for additional protection.

##### Outcomes

Indicates the output paths for the Virtual Agent that occurs based on the outcome of the conversation between the Virtual Agent and the customer.

- Handled: The Dialogflow takes this path if the system triggers the Handled intent.
- Escalated: The Dialogflow takes this path if the system triggers the Escalation intent.

For more information on the intents in the Dialogflow, see [_Intents_](https://cloud.google.com/dialogflow/es/docs/intents-overview).

##### Error Handling

Indicates the output path of the Virtual Agent that is based on the error that occurs during the conversation between the Virtual Agent and the customer.

**Error**: The flow takes this path in any error scenarios.

If there is an error, the contact center does not play any audio message to notify the customer of the error, by default. The flow developer can configure a Play Message activity either generically or based on the error code as described in the [Output Variables](#section%5Fuhh%5Fz3t%5Ffrb) section. 

The functionality of the output paths depends on the configuration and the flow that is defined by the administrator.

#### Virtual Agent V2

 The Virtual Agent V2 activity provides a real-time conversational experience for your contacts. You can add the Virtual Agent V2 activity to the call flow to handle speech-based AI-enabled conversations. When a caller speaks, the system matches the speech to the best intent in the virtual agent. Further, it assists the caller as part of the Interactive Voice Response (IVR) experience.

##### Configure Virtual Agent V2 activity

The customers who use the Next Generation platform can configure the Virtual Agent V2 activity in the Flow Designer. 

Do not place a Virtual Agent V2 activity after a Queue Contact activity, as this configuration is not currently supported.

**Outcomes** 

Indicates the output paths for the activity that occurs based on the outcome of the conversation between the virtual agent and the caller.

- **Handled**–The outcome is triggered when the virtual agent execution is completed.
- **Escalated**–The outcome is triggered when the call is required to be escalated to the human agent.
**Error Handling** 

Indicates the output path of the activity for any error that occurs during the conversation between the virtual agent and the caller.

**Errored**–The flow takes this path in any error scenarios.

**Default system-level settings** 

The following settings are defined in the system internally by default. These settings don't appear on the user interface and cannot be changed:

- Infinite number of retries for handling invalid or no input errors.
- Barge-in is enabled to interrupt the Virtual Agent during interaction.
- DTMF termination symbol = #. This setting indicates the end of the input.
- DTMF 'No-input timeout' = 5 seconds. This setting indicates the time duration for which the Virtual Agent waits for the caller's input.
- DTMF 'Inter-digit timeout' = 3 seconds. This setting indicates the time duration for which the Virtual Agent waits for the next DTMF input from the caller before the Virtual Agent moves on in the conversation flow.

Before you begin

- Set up a Dialogflow agent. For more information on building a Dialogflow agent in the Google Cloud, see [_Build an agent_](https://cloud.google.com/dialogflow/es/docs/quick/build-agent).
- Configure the Google CCAI connector and create a CCAI configuration in the Control Hub.
- Configure the entry point and choose the routing flow (once the flow is created in the Flow Designer). For more information, see [Set up a channel](https://help.webex.com/en-us/article/ewuay1/Set-up-a-channel).

| 1  | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Navigate to Services \> Contact Center \> Flows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3  | Click **Manage Flows** and then click **Create Flows**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4  | In the Flow Name field, enter a unique name and click Start Building Flow. The Flow Designer window appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 5  | Drag and drop the **Virtual Agent V2** activity from the **Activity Library** to the main flow canvas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 6  | In **General Settings**, perform the following actions: In the **Activity Label** field, enter a name for the activity. In the **Activity Description** field, enter a description for the activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 7  | In the **Conversational Experience** settings, choose one of the following Contact Center AI Config options: **Static**–Choose the CCAI config to handle the conversations within the default PSTN region. The Contact Center AI config is populated based on the CCAI feature that is configured on Control Hub. **Variable**–Choose the CCAI config to handle the conversations within the same location of the caller while the call originates from the remote or non-default PSTN region. This variable maps the PSTN region to the corresponding Google profile region.For more information about how to configure the variable CCAI config, see steps 6 to 8 in the _Configure regional media for Virtual Agent-Voice_ document. For a VAV flow to work, you need to set the global variables in the flow to configure the default input language and output voice for virtual agent. For more information about how to add global variables in the flow, see [Global Variables](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#Cisco%5FGeneric%5FTopic.dita%5F0a32bcfc-1bfc-4413-bf75-7e941b228a81). If you want to override the default input language and output voice for VAV, include the [Set Variable](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c)activity before the Virtual Agent V2 activity in the flow. For custom input language, configure the Set Variable activity as follows: Set the variable to Global\_Language. Set the variable value to the required language code (for example, fr-CA). For custom output voice, configure the Set Variable activity as follows: Set the variable to Global\_VoiceName. Set the variable value to the required output voice name code (for example, en-US-Standard-D). For more information about the supported voices and languages in ES, see [_Supported voices and languages_](https://cloud.google.com/text-to-speech/docs/voices). |
| 8  | In the **State Event** settings, enter the custom event name and the data in the **Event Name - Event Data** columns. The state event is a mechanism to trigger the intent without the need for matched text or spoken input. You can define the custom events to trigger the intent. For information on how to configure the intent for events in Dialogflow ES, see [Google documentation](https://cloud.google.com/dialogflow/es/docs/events-overview). **Event Name**–(optional) Indicates the name of the event that is defined on the integrated third-party AI platform. **Event Data**–(optional) Indicates the JSON data that the system sends (as part of the defined event name) to the integrated third-party AI platform. You can specify the event name and the data in the form of a static value or expression. For expressions, use this syntax: {{ variable }}. The following is an example of the state event that is configured to greet the caller with a custom welcome message. **Event Name**: CustomWelcome **Event Data**: {"Name": "John"}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 9  | In **Advanced Settings**, perform the following actions: In the Speaking Rate field, enter the numeric value or expression to increase or decrease the rate of speech output. Valid values for the numeric input are in the range of 0.25 to 4.0\. The default value is 1.0\. For example, with 0.5 set as the value, the output rate of speech becomes slower than the ideal rate. With 2 set as the value, the output rate of speech becomes faster than the ideal rate. For expressions, you can use the syntax: {{variable}}. In the Volume Gain field, enter the numeric value or expression to increase or decrease the volume of speech output. Valid values for the numeric input are in the range of –96.0 to 16.0 decibels (dB). The default value is 0.0 dB. For expressions, you can use the syntax: {{variable}}. In the Pitch field, enter the numeric value or expression to increase or decrease the pitch of speech output. Valid values for the numeric input are in the range from –20.0 to 20.0 hertz (Hz). The default value is 0.0 Hz. For expressions, you can use the syntax: {{variable}}. In the Termination Delay field, enter the numerical value. This setting enables the virtual agent to complete the last message before the activity stops and moves on to the next step in the flow. For example, if you want the virtual agent to indicate something to the caller before the system escalates the call to an agent, consider the time it takes to complete the final message before escalation. The valid value for the numeric input is in the range from 0 to 30 seconds. The default value is 30 seconds. If you configure the **Termination Delay** value as 0, the system doesn't play the last audio message to the caller. Check the **Enable Conversation Transcript** check box to allow Agent Desktop to display the transcript of the conversation between the virtual agent and the caller. The raw transcript is also available through a dynamic URL. This URL extracts specific sections from the transcript with an HTTP request.                                                                     |
| 10 | With Decryption Settings you can decrypt the output variables of the VAV2 activity, if required. If decryption is enabled at the flow level, users with debug decryption access can view the unmasked output values of the VAV2 activity in the flow debug logs. Turn off theEnable decryption toggle to disable decryption at the activity level for additional protection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 11 | In Activity Output Variables, you can view the list of variables that stores the output status of the event that occurs during the conversation between the virtual agent and the caller. **VirtualAgentV2.TranscriptURL**–Stores the URL that points to the transcript of the conversation between the virtual agent and the caller. Use the [Parse](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cust%5Fcontact/contact%5Fcenter/webexcc/SetupandAdministrationGuide%5F2/b%5Fmp-release-2/wcc-flow-designer.html#Cisco%5FGeneric%5FTopic.dita%5Fc1a3583f-39e9-4250-9bf8-d8f419da6b05) activity to extract the parameters from the Virtual Agent Voice transcript. **VirtualAgentV2.MetaData** and **VirtualAgentV2.StateEventName** variables are not applicable. Currently, en-US is the only supported language. Only the U-law codec is supported. When a call is transferred to a live agent, the transcript of the conversation between the caller and the virtual agent is displayed in the Transcript gadget in the Agent Desktop (only if the Transcript gadget is configured on the Agent Desktop).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Callback

The Callback activity is available only if the preferred queue and the Callback feature are enabled for the enterprise. By default, the Callback activity creates a Courtesy Callback task in the same queue that the call was originally placed. If preferred, you can configure a different queue. If you use the same queue, the task retains its position in the queue until the next agent is available.

When you design a flow, a Consult interaction can't include a Courtesy Callback activity.

If a new queue is preferred, place the task at the bottom of the preferred queue. As an agent accepts the task, the Callback is initiated. If the caller doesn’t answer, the Callback isn’t retried.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](#EventFlows).

The following sections enable you to configure the Callback activity:

- [General Settings](#section%5Fkwv%5F4xg%5Fqfc)
- [Callback Settings](#section%5Frh1%5Ftxg%5Fqfc)
- [Output Variables](#callback%5FoutputVar)
- [Error Codes](#callback%5FerrorCodes)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Callback Settings

| **Parameter**        | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Callback Dial Number | Enter the dial number at which the caller is to receive the Callback. Choose the variable from the drop-down list that contains the Callback number, such as the ANI that is associated with the call. The variable can be a number that is collected in a Collect Digits activity in the call flow. If no selection is made, the caller's ANI is used. The Callback number is stored in the NewPhoneContact.ANI event output variable. By default, the toggle button for **Register callback to different destination?** is set to off. The callback is registered on the same queued destination. If the preferred agent is busy and isn't available, set the toggle button on to select a new callback destination. The destination changes from agent to queue. You can't change the destination directly to another agent, but only to a queue which contains agents.                                                                                                                                                       |
| Callback Queue       | Choose one of the available Callback Queue options from the drop-down list: Static Queue: Choose a static queue in which all Callback requests are placed. Tasks are placed at the bottom of this queue. Manage queues from the Control Hub. Variable Queue: Allows the administrator to indicate a Callback Queue based on the conditions in the flow. Choose a variable from the drop-down list. The list displays only variables of the type 'String'. The default is set to the queue in which the caller is placed, as captured in the contact parked. QueueName output variable is associated with the Queue Contact activity. If needed, choose a different variable from the drop‐down list. Ensure that the variable yields a valid queue selection. When you configure a flow for callback to preferred agent, place the Queue to Agent activity before the Callback activity in the flow.                                                                                                                             |
| Callback ANI         | Enables callback ANI configuration for customers when they receive a callback. Courtesy callback ANI configuration is not mandatory. Choose one of the available options: Static ANI: Choose a callback number from the drop-down list. These dial numbers map to entry points that are configured in the Control Hub. If you don't choose a callback number, Webex Contact Center uses the number that is mapped to the entry point for which you have requested the callback. Variable ANI (optional): Choose a variable from the drop-down list. The list displays only variables of the type 'String'. Ensure the variable provides a valid 10 digit number prefixed with country code. This code must be mapped to an entry point which initiates the callback. For using valid ANI formats, refer to the customized ANI validation table available in this section. If you don't choose a variable, Webex Contact Center considers the number that is mapped to the entry point for which you have requested the callback. |

The **Callback Settings** section defines the Callback Dial Number and the queue in which the caller must be placed for the Callback request. The system reserves the caller's place in the queue until the next agent is available.

You must use a Disconnect Contact activity to terminate a flow branch that uses a Callback activity. Otherwise, the call doesn’t end when a Callback request is placed. 

Flow administrators should test the feature in a non-production environment to make sure that the ANI configured as part of Variable ANI is correct or not. If the ANI provided is incorrect, then the callback switches to the default system ANI. 

These are the scenarios where the customized ANI is configured and validated for Tenant Management and Flow Control. Based on the stack that you use, you can see validations that are applicable to that stack only.

__Table 33\. Customized ANI validation__
| **Description**                                                                                                 | **Tenant Management–ANI input**                              | **PreDial/Courtesy callback–ANI input (Flow Control)**      | **Validation**               |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- | ---------------------------- |
| ANI without country code                                                                                        | Without country code. For example, 2567312213                | Without country code. For example: 2567312213               | Valid ANI. Same ANI is used. |
| Tenant Management ANI input is with country code and Flow Control ANI input is without country code configured. | With country code. For example, +1-2567312213                | Without country code. For example, 2567312213               | Invalid ANI. DNIS is used    |
| Tenant Management ANI input is without country code and Flow Control ANI input is with country code configured  | Without country code. For example, 2567312213                | With country code. For example, +1-2567312213               | Invalid ANI. DNIS is used.   |
| Tenant Management ANI input and Flow Control ANI input have country code configured.                            | With country code. For example, +1-2567312213                | With country code. For example, +1-2567312213               | Valid ANI. Same ANI is used. |
| Tenant Management ANI input does not have space in between and Flow Control ANI input has space in between.     | No space in between the number. For example, +1-2567312213   | Space in between the number. For example, +1-256 7312213    | Valid ANI. Same ANI is used. |
| Tenant Management ANI input does not have hyphens in between and Flow Control ANI input has hyphens in between. | No hyphens in between the number. For example, +1-2567312213 | Hyphens in between the number. For example, +1-256-731-2213 | Valid ANI. Same ANI is used. |
| Flow Control ANI input matches the last few digits of the Tenant Management ANI input.                          | Complete ANI input. For example, +1-2567312213               | Last four digits match. For example, 2213                   | Invalid ANI. DNIS is used.   |
| Flow Control ANI input has more digits configured than Tenant Management ANI input.                             | Partial ANI input. For example, 2213                         | 10-digit ANI input. For example, 2567312213                 | Invalid ANI. DNIS is used.   |
| Tenant Management ANI input is configured and Flow Control ANI input is not configured.                         | Complete ANI input. For example, +1-2567312213               | ANI is not configured.                                      | Invalid ANI. DNIS is used.   |
| Flow Control ANI does not include a plus symbol.                                                                | Plus symbol is used. For example, +1-2567312213              | Plus symbol not used. For example, 12567312213              | Invalid ANI. DNIS is used.   |

##### Output Variables

When Callback triggers, the following variables update:

| Output Variable    | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| FailureCode        | Stores the failure code. The system sets this value only when the activity fails.    |
| FailureDescription | Stores the failure details. The system sets this value only when the activity fails. |

##### Error Codes

The following are the error codes and descriptions for the Callback activity:

__Table 35\. Callback Failure Code Description__
| Failure Code | Failure Code Value                               | Failure Description                                            |
| ------------ | ------------------------------------------------ | -------------------------------------------------------------- |
| 1            | INVALID\_REQUEST                                 | An invalid request was made in the activity.                   |
| 2            | CALLBACK\_NOT\_SUPPORTED\_ON\_CHILD\_INTERACTION | Callback isn’t allowed on a child contact.                     |
| 3            | INVALID\_QUEUE                                   | An invalid queue was specified in the activity.                |
| 4            | INVALID\_DESTINATION                             | The destination number for the callback is invalid.            |
| 5            | FEATURE\_NOT\_ENABLED                            | Feature isn’t enabled in the Webex Contact Center application. |
| 6            | SYSTEM\_ERROR                                    | The system encountered an internal error.                      |

#### Get Queue Info

The Get Queue Info activity provides the caller's current Position in Queue (PIQ) and the Estimated Wait Time (EWT) along with other Activity output variables. You can use these variables to determine agent availability in a queue, and to route calls elsewhere when needed.

Expected Wait Time (EWT) does not apply to queues with team assignment with skills assigned in flow. For contacts in these queues, the EWT output variable always returns -1.

The following sections of the Flow Designer enable you to configure the Get Queue Info activity:

- [General Settings](#section%5Fmrf%5Fkh1%5Fkrb%5F1)
- [Queue Information and Lookback Time](#section%5Ff5k%5Fkh1%5Fkrb%5F2)
- [Output Variables](#getQueueInfo%5FoutputVar)
- [Error Codes](#getQueueInfo%5FerrorCodes)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Queue Information and Lookback Time

| **Parameter**         | **Description**                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Queue Information** | Choose the name of the queue for which you must retrieve a caller's estimated wait time and current position in the queue. You can choose one of the following options:Static Queue: Enter the specific name of the queue.Variable Queue: Choose the flow variable from the drop-down list. The list displays only variables of the type 'String'. You can manage the queues using the Control Hub. |
| **Lookback Time**     | Specify the **Lookback Time** used to calculate the **EWT** after Get Queue Info triggers. Specify the duration in minutes only. Ensure that your input has numeric values only. The accepted value range is 5–240 minutes.                                                                                                                                                                         |

The **Get Queue Info** activity has three types of output flow branches. These branches trigger based on the return status and values of EWT, PIQ, and the real-time statistics for other output variables.

- **Success**: This branch triggers when both the EWT and PIQ API return positive variable values. In this flow, you can retrieve and access valid EWT and PIQ variable values.
- **Insufficient Information Flow**: This branch triggers when the PIQ API returns a valid variable value, and EWT has the value of –1\. In this flow, you can retrieve and access the PIQ value, but the EWT API fails because of insufficient data to calculate the EWT value.
- **Failure**: This branch triggers when PIQ API, EWT API, or one or more of the real-time statistics APIs fail or return invalid values. The EWT API fails because of reasons other than insufficient data to calculate the EWT value.

##### Output Variables

When Get Queue Info triggers, the following variables update:

| Output Variable         | Description                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Position In Queue (PIQ) | Stores the value for the caller's current position in the queue for the selected queue. If the contact isn't queued when the flow invokes this activity, the PIQ value is set to the number of contacts that are currently waiting in the queue + 1\. This identifies the position of the contact in the queue, if the contact is queued after executing the GetQueueInfo activity. |
| EstimatedWaitTime (EWT) | Stores the approximate amount of time a task has to wait in a queue before being answered by an agent. EWT is calculated for each Queue and is based on the average time that previous calls in the same queue waited for an agent. EWT uses the Lookback Time parameter entry and is reported in milliseconds (ms).                                                                |
| LoggedOnAgentsCurrent   | Stores the number of agents in the current Call Distribution Group, for the selected queue, signed in to the desktop. If the activity is used before queueing, the stats for agents in current Call Distribution Group cycle will be returned based on the first Call Distribution Group cycle.                                                                                     |
| LoggedOnAgentsAll       | Stores the total number of agents in all the Call Distribution Groups, for the selected queue, who are signed in to the desktop. This value may change as the Call Distribution Groups change over time in the queue.                                                                                                                                                               |
| AvailableAgentsCurrent  | Stores the number of agents in the current Call Distribution Group, for the selected queue, who are available to accept the contact. If the activity is used before queueing, the stats for agents in current Call Distribution Group cycle will be returned based on the first Call Distribution Group cycle.                                                                      |
| AvailableAgentsAll      | Stores the total number of agents in all the Call Distribution Groups, for the selected queue, who are available to accept the call. This value may change as the Call Distribution Groups change over time in the queue.                                                                                                                                                           |
| CallsQueuedNow          | Stores the total number of calls in the selected queue.                                                                                                                                                                                                                                                                                                                             |
| OldestCallTime          | Stores the number of seconds that the oldest call has been in the selected queue.                                                                                                                                                                                                                                                                                                   |
| FailureCode             | Stores the failure code. The system sets this value only when the activity fails.                                                                                                                                                                                                                                                                                                   |
| FailureDescription      | Stores the failure details. The system sets this value only when the activity fails.                                                                                                                                                                                                                                                                                                |

**Estimated Wait Time Calculation**

The Estimated Wait Time (EWT) is reported in ms.

To calculate EWT, the application collects all statistically valid samples (a sample is the average of wait times for tasks that successfully connected to an agent in a one-minute interval) for the last XX minutes specified by the user-defined Lookback Time. The average value of the samples collected is used as the EWT.

Statistically valid samples are those samples collected, for which the maximum value for CoV (Coefficient of Variance of the wait times for those tasks that got connected to an agent in each one minute interval) falls below 40 percent.

If the percentage of valid samples collected for the user-defined Lookback Time falls below 40 percent, the EWT isn’t computed.

##### Error Codes

The following are the error codes and descriptions for the Get Queue Info activity:

__Table 36\. Get Queue Info Failure Code Description__
| Failure Code | Failure Code Value | Failure Description                                |
| ------------ | ------------------ | -------------------------------------------------- |
| 1            | SYSTEM\_ERROR      | The system encountered an internal error.          |
| 2            | STALE\_DATA        | The data returned is not up-to-date.               |
| 3            | INSUFFICIENT\_DATA | The data returned by the activity is not complete. |
| 4            | INVALID\_QUEUE     | An invalid queue was specified in the activity.    |

#### Advanced Queue Information

The Advanced Queue Information activity returns the real-time count of agents who are in the Available state in a queue and are logged in for a specific set of skills, along with other queue information. Flow developers use the Advanced Queue Information activity to program the flow. Flow designers make decisions based on the Advanced Queue Information activity.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](#events-in-flow-designer).

The following sections of the Flow Designer enable you to configure the Advanced Queue Information activity:

- [General Settings](#section%5Fmrf%5Fkh1%5Fkrb%5F1)
- [Output Variables](#section%5Ffxt%5Fkh1%5Fkrb%5F2)
- [Error Codes](#advancedQueueInfo%5FerrorCodes)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Output Variables 

When the Advanced Queue Information activity is triggered, the following variables are updated:

| Output Variable         | Description                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Position In Queue (PIQ) | Stores the value for the caller's current position in the selected queue. If the contact isn't queued when the flow invokes this activity, the PIQ value is set to the number of contacts that are currently waiting in the queue + 1\. This identifies the position of the contact in the queue if the contact is queued after executing the AdvancedQueueInformation activity. |
| LoggedOnAgentsCurrent   | Stores the number of agents in the current Call Distribution Group for the selected queue logged in to the desktop. The stats for agents in current Call Distribution Group will return -1 after considering the current Call Distribution Group as N/A before queueing.                                                                                                         |
| LoggedOnAgentsAll       | Stores the total number of agents in all the Call Distribution Groups for the selected queue, who are logged in to the desktop. This value may change as the Call Distribution Groups change over time in the queue.                                                                                                                                                             |
| AvailableAgentsCurrent  | Stores the number of agents in the current Call Distribution Group for the selected queue, who are available to accept the contact. The stats for agents in current Call Distribution Group will return -1 after considering the current Call Distribution Group as N/A before queueing.                                                                                         |
| AvailableAgentsAll      | Stores the total number of agents in all the Call Distribution Groups for the selected queue, who are available to accept the call. This value may change as the Call Distribution Groups change over time in the queue.                                                                                                                                                         |
| CurrentGroup            | Stores the value of the current call distribution group where the contact is parked in a particular queue.                                                                                                                                                                                                                                                                       |
| TotalGroups             | Stores the value of the total number of call distribution groups in the queue for the contact.                                                                                                                                                                                                                                                                                   |
| FailureCode             | Stores the failure code. The system sets this value only when the activity fails.                                                                                                                                                                                                                                                                                                |
| FailureDescription      | Stores the failure details. The system sets this value only when the activity fails.                                                                                                                                                                                                                                                                                             |

##### Error Codes

The following are the error codes and descriptions for the Advanced Queue Information activity:

__Table 37\. Advanced Queue Information Failure Code Description__
| Failure Code | Failure Code Value           | Failure Description                                            |
| ------------ | ---------------------------- | -------------------------------------------------------------- |
| 1            | INVALID\_REQUEST             | An invalid request was made in the activity.                   |
| 2            | QUEUE\_NOT\_FOUND            | The queue selected in the activity is not found.               |
| 3            | FEATURE\_NOT\_ENABLED        | Feature isn’t enabled in the Webex Contact Center application. |
| 4            | DATABASE\_OPERATION\_FAILURE | Database operation is failed during the activity execution.    |
| 5            | INVALID\_QUEUE               | An invalid queue was specified in the activity.                |
| 48           | UNSUPPORTED\_FLOW\_ACTIVITY  | An unsupported request was made through the activity.          |

#### Disconnect Contact 

Use this terminating activity to disconnect an active leg of a call. This activity is required if no agents join the call to manually disconnect. 

For instance, use this activity before a call is queued or after scripting an opt-out of the queue experience. You can use as many Disconnect Contact activities as desired when you construct your flow to ensure that the call is terminated no matter which flow path it takes.

You have the option of giving each activity a unique label and description, but no other configuration is required.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](#EventFlows).

__Table 38\. General Settings__
| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

**Output Variables** 

This activity has no Output Variables available.

#### Queue Contact

The Queue Contact activity places a contact in a queue. When you use this activity in the Main Flow, you expose a set of events in the Event Flows tab. For more information on these events, see [Event flows](#events-in-flow-designer).

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](#events-in-flow-designer)

.

The following sections enable you to configure the Queue Contact activity:

- [General settings](#section%5Ffdt%5Ftwz%5Fjrb)
- [Contact handling](#section%5Fnpr%5Fxg3%5Fpsb)
- [Skill requirements](#section%5Fok3%5Fqwz%5Fjrb)
- [Skill relaxation](#section%5Fg54%5Fhxz%5Fjrb)
- [Skill removal](#queue-contact-skill-removal)
- [Output variables](#queueContact%5FoutputVar)
- [Error codes](#queueContact%5FerrorCodes)

##### General settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Contact handling

Use the Contact Handling section to choose if all contacts should go to a single queue, or if queue selection should change based on the value of a flow variable.

When you place an HTTP Request activity immediately after the Queue Contact activity, the HTTP Request may not retrieve the required data. To ensure the required data is available, it is recommended to introduce a short delay—such as by adding a Play Message or Play Music activity—between the Queue Contact and HTTP Request activities.

__Table 39\. Contact handling__
| **Parameter**                     | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Static Queue                      | Click the **Static Queue** radio button to route contacts to the single queue chosen in the **Queue** drop-down list. All contacts coming from the Entry Point associated with the configured workflow route to the chosen queue.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Queue                             | Choose a queue from the **Queue** drop-down list to route the contacts coming from the Entry Point associated to the workflow. You can manage queues in the Control Hub.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Variable Queue                    | Click the **Variable Queue** radio button to use a **Queue Variable** to dynamically select a queue to route contacts. You can also choose a **Fallback Queue** in case the **Queue Variable** fails during the flow execution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Queue Variable                    | Choose a flow variable from the **Queue Variable** drop-down list that yields a valid Queue ID. The flow variable indicates which queue should be dynamically selected during the flow execution. The Fallback queue is used only if the **Queue Variable** fails to return a valid Queue ID. This field appears when you click the **Variable Queue** radio button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Fallback Queue                    | Choose the Queue ID from the **Fallback Queue** drop-down list. In case the **Queue Variable** returns an invalid Queue ID, the contacts are queued to the selected **Fallback Queue**. If you click the Variable Queue radio button, you can’t input the skill requirements for the queue that uses skill-based routing. In such case, the contacts are routed to the Longest Available Agent overriding the selected queue routing algorithm. This field appears only when you click the **Variable Queue** radio button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Check Agent Availability          | Enable the Check Agent Availability toggle button to exclude teams with no available agents from routing as time in the queue progresses. The Call Distribution Group of the selected queue may skip to find an agent sooner. By default, this toggle button is disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Always Check Agent Availability   | Click the Always Check Agent Availability radio button to enable agent availability checking. By default, the radio button is enabled. This option appears only if you enable the **Check Agent Availability** toggle button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Variable Agent Availability Check | Click the **Variable Check Agent Availability** radio button to select a flow variable from the **Check Agent Availability Variable** drop-down list that returns a Boolean. The Boolean determines whether to check the agent availability in the variable queue. This option appears only if you enable the **Check Agent Availability** toggle button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Set Contact Priority              | Enable the **Set Contact Priority** toggle button if you want to assign a priority to queued contacts. By default, this toggle button is disabled. The highest priority contact across all queues (voice and digital) is assigned to the next available agent who is: Signed in to a team that is in the current call distribution group of the contactEligible to pick this contact based on the routing algorithm The contacts are handled as follows: If no priority is assigned to the contact, then the default priority is 10. Contacts with higher priority are handled first. If two contacts have the same priority, then the contact waiting in the queue for the longest duration is handled first. If the agent transfers the call to an entry point, the contact priority changes to the priority assigned to a Queue Contact activity in the new flow. For more information, see [Transfer a Call to an Entry Point](https://help.webex.com/en-us/article/mmcf7p/Manage-your-calls-in-Agent-Desktop#transfer-a-call). |
| Static Priority                   | Set the **Static Priority** if you want to assign a priority before publishing the flow. You can see this field only when the **Set Contact Priority** toggle button is enabled. Choose a priority from the **Static Priority Level** drop-down list. You can set a priority from P1 to P9, where P1 is the highest and P9 is the lowest.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Variable Priority                 | Choose **Variable Priority** if the contact priority should change dynamically with each flow execution. This field appears only when the **Set Contact Priority** toggle button is enabled. Choose a flow variable which returns an Integer with priority from 1 through 9 from the **Contact Priority Variable**drop-down list. If the priority isn’t in the range 1–9, then the default priority is 10.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

##### Skill requirements

If the selected queue uses Skill-based Routing, another sections display to configure skill requirements and skill relaxation. 

You can add one or more skill requirements to assign to a contact in this queue based on the selected queue.

If you don’t specify any skills, all the available agents in the selected queue are eligible to receive contacts.

__Table 40\. Skill settings__
| **Parameter** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Skill         | Choose the desired skill from the drop-down list. You configure the skill definitions in the Control Hub.                                                                                                                                                                                                                                                                                                                            |
| Condition     | Choose the desired condition from the drop-down list. The condition options are based on the chosen skill type. Skill types such as, **Boolean** and **Enum** don’t need a Condition. The available conditions are: IS, IS NOT, >= , <=                                                                                                                                                                                              |
| Value         | Click the **Static Skill Value** radio button to select the static skill values specified in the **Skill Value** field. Click the **Variable Skill Value** radio button to select the skill value from a flow variable listed in the **Variable** drop-down list. If the skill value is invalid, all skill requirements and relaxations that are associated with the contact that came through the QueueContactActivity are dropped. |

##### Skill relaxation

Use the Skill-relaxation settings to reduce or remove the assigned skill requirements to a flow in response to excessive customer wait times. This setting enables you to expand the pool of agents available to serve contacts.

Use common time intervals to align Skill Relaxation with queue logic in the flow and with Call Distribution settings configured for teams in the queue.

To configure skill relaxation: 

1. Enable the Enable Skill Relaxation toggle button to configure skill relaxation.  
Enable this toggle button to copy and display the initial Skill Requirements by default. This allows you to configure the skill relaxation with an ideal set of skills.  
Set the **After waiting in the queue for** field to the duration in seconds that must exceed before the skill relaxation applies in the queue. The default wait time is 60 seconds.
2. You can add, edit, or delete the skill relaxation requirements.

  - Click Add Skill Requirement to add a new skill relaxation requirement.
  - Click Delete to delete the skill relaxation requirement.
  - Click Edit to edit the skill relaxation requirement.
3. Click Add Skill Relaxation Step to add a new skill relaxation group.  
The default skill requirements that appear in step 1 make it easier to set the skill relaxation requirements.

##### Skill removal

When you turn on the **Remove skills on blind transfer** toggle button, it removes skills from the contact after transfer by agent. That means the transferred contact won’t to have any skills and the contact will be offered to the Longest Available agent in the transferred queue.

##### Output variables

When Queue Contact triggers, the following variables update:

__Table 41\. Output variables__
| Output variable    | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| QueueId            | Stores the ID of the queue where the contact is successfully queued.                 |
| FailureCode        | Stores the failure code. The system sets this value only when the activity fails.    |
| FailureDescription | Stores the failure details. The system sets this value only when the activity fails. |

##### Error codes

The following are the error codes and descriptions for the Queue Contact activity:

__Table 42\. Queue Contact Failure Code Description__
| Failure Code | Failure Code Value                          | Failure description                                                                  |
| ------------ | ------------------------------------------- | ------------------------------------------------------------------------------------ |
| 1            | INVALID\_REQUEST                            | The parameters specified in the activity are invalid.                                |
| 2            | INVALID\_ROUTING\_STRATEGY                  | The chosen routing strategy is invalid.                                              |
| 3            | INVALID\_WAIT\_TIME                         | The defined wait time is invalid.                                                    |
| 4            | INVALID\_QUEUE                              | An invalid queue was specified in the activity.                                      |
| 5            | ROUTING\_LIMIT\_EXCEEDED                    | Routing has reached the maximum limit.                                               |
| 6            | SYSTEM\_ERROR                               | The system encountered an internal error.                                            |
| 7            | VTEAM\_TRANSITION\_LIMIT\_REACHED           | The contact has reached its maximum limit from being queued to multiple queues.      |
| 8            | OWNER\_ASSIGNED\_TO\_INTERACTION            | The contact is already assigned to an agent.                                         |
| 9            | INVALID\_SKILL\_NAME                        | The skill name is not valid.                                                         |
| 10           | INVALID\_SKILL\_CONDITION                   | The skill condition is not valid.                                                    |
| 11           | INVALID\_SKILL\_VALUE                       | The skill value is not valid.                                                        |
| 12           | INVALID\_OPERATION\_FOR\_INTERACTION\_STATE | Queueing is not allowed in certain states of the contact such as terminated contact. |

#### Escalate Call Distribution Group

The Escalate Call Distribution Group activity allows administrators to escalate a queued contact to its next or last call distribution group. This provides better control and flexibility to administrators to manage contacts that are parked in a queue.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#events-in-flow-designer).

The following sections of the Flow Designer enable you to configure the Escalate Call Distribution Group activity:

- [General Settings](#section%5Fmrf%5Fkh1%5Fkrb)
- [Output Variables](#escalateCallDist%5FoutputVar)
- [Error Codes](#error%5Fcodes)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Output Variables

When the Escalate Call Distribution Group activity is triggered, the following variables are updated:

__Table 43\. Output Variables__
| Output Variable    | Description                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| CurrentGroup       | Stores the value of the current call distribution group where the contact is parked in a particular queue. |
| TotalGroups        | Stores the value of the total number of call distribution groups in the queue for the contact.             |
| FailureCode        | Stores the failure code. The system sets this value only when the activity fails.                          |
| FailureDescription | Stores the failure details. The system sets this value only when the activity fails.                       |

##### Error Codes

The following are the error codes and descriptions for the Escalate Call Distribution Group activity:

__Table 44\. Escalate Call Distribution Group Failure Code Description__
| Failure Code | Failure Code Value    | Failure Description                                            |
| ------------ | --------------------- | -------------------------------------------------------------- |
| 1            | INVALID\_REQUEST      | An invalid request was made in the activity.                   |
| 2            | CONTACT\_NOT\_QUEUED  | The contact isn’t queued.                                      |
| 3            | FEATURE\_NOT\_ENABLED | Feature isn’t enabled in the Webex Contact Center application. |

#### Queue To Agent

The Queue To Agent activity enables Agent-based Routing. The Queue To Agent activity routes the contacts to the preferred agent directly. For information on Agent-based Routing, see [Agent-based Routing](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#topic%5F0EA6DB9A27706152E4720C70498D1D2E).

The Queue To Agent activity identifies an agent by its Webex Contact Center agent ID or email address.

If the agent is available, you can configure the Queue To Agent activity to route the contact to a preferred agent. If the agent is unavailable, you can configure the Queue To Agent activity to park the contact against that agent until the agent becomes available.

The flow developer can chain a Queue To Agent activity with another Queue To Agent activity to route contacts to consecutive preferred agents. The flow developer can also chain a Queue To Agent activity with a [_Queue Contact_](#Cisco%5FGeneric%5FTopic.dita%5Fc93b6399-3cd7-4c86-9e82-48a82469fb8e) activity to route the contact using a regular Queue when none of the preferred agents are available.

The flow developer can chain a Queue To Agent activity with a [_Callback_](#Cisco%5FConcept.dita%5F2a7326f7-67da-4157-bab1-e477b219ec7e) activity in the Main flow and Event flows. This helps configure callback to preferred agent to whom the call was originally queued as part of Queue To Agent activity.

Use the Callback activity after the Queue Contact or Queue To Agent activity.

The Queue To Agent activity triggers the following events in the Event Flows tab in the Main Flow:

- AgentAnswered: The Queue To Agent activity triggers this event when an agent answers an inbound call.
- AgentDisconnected: The Queue To Agent activity triggers this event when the agent disconnects from a live call.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event Flows](#EventFlows).

The following sections enable you to configure the Queue To Agent activity:

- General Settings
- Contact Handling

To configure Queue To Agent activity:

| 1 | In the Flow Designer, drag and drop the Queue To Agent activity from the Activity Library to the canvas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the Queue To Agent activity to configure the activity settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3 | In the General Settings section, enter the following information: In the Activity Label field, enter a name for the activity. (Optional) In the **Activity Description** field, enter a description for the activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4 | In the Contact Handling section, choose an Agent Variable from the drop-down list. The Queue To Agent activity associates this flow variable with the agent's **Email** or agent's **ID** that you want to choose for each flow execution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 5 | Choose the agent's **Email** or agent's **ID** from the Agent Lookup Type drop-down list to route contacts to the preferred agent. Provide a valid domain name for the agent's email address to ensure that the lookup is successful.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 6 | Enable the Set Contact Priority toggle button to prioritize the contacts waiting in the queue. By default, the toggle button is disabled. The Queue To Agent activity handles the contacts as follows: If you don't assign a priority to the contact, the Queue To Agent activity assigns a default value of 10. The Queue To Agent activity prioritizes the contacts with higher priority. If one or more contacts have the same priority, the Queue To Agent activity routes the contact waiting for the longest duration to that agent first. Set the **Static Priority** to prioritize a contact before publishing the flow. Enable the **Set Contact Priority** toggle button to view the **Static Priority** field in the Queue To Agent activity. Choose a priority from the **Static Priority Value** drop-down list. You can set a priority from P1—P9, where P1 is the highest and P9 is the lowest. Choose **Variable Priority** if the contact priority changes dynamically with each flow execution. Enable the **Set Contact Priority** toggle button to view the **Variable Priority** field in the Queue To Agent activity. Choose a flow variable which returns an integer with priority 1–9 from the Contact **Priority Variable** drop-down list. If the priority isn't in the range 1-9, then the default priority is 10. |
| 7 | Choose a queue ID from the **Reporting Queue** drop-down list. The Queue To Agent activity reports the contact's details using the reporting queue: The reporting queue also specifies the configuration for: Permit monitoring Permit recording Record all calls Pause and resume enabled Service level threshold Maximum time in queue Default music in queue Time zone                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 8 | Enable the Park Contact if Agent is unavailable toggle button if you want to park the contact to a preferred agent until the agent becomes available. If the agent is unavailable and the Park Contact if Agent is unavailable toggle button is disabled, the contact fails to reach the agent. The Queue To Agent activity exits the failure branch to the next activity in the flow with the corresponding output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 9 | Choose the recovery queue ID from the **Recovery Queue** drop-down list. The Queue To Agent activity queues contacts to the recovery queue when: The Queue To Agent activity fails to deliver a contact to the preferred agent. The agent doesn’t answer the contact. A preferred agent rejects the contact. You can configure the recovery queue with the Longest Available Agent. The recovery queue doesn't support Skills-based Routing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

The Queue To Agent activity is successful when the contact connects to the preferred agent. An error scenario occurs when a contact fails to reach the agent.

**Error Scenarios**

A contact fails to reach the agent when:

- A preferred agent is unavailable and parking is disabled for the contact.
- A variable lookup can't find the preferred agent.

**Activity Output Variables**

The Activity Output Variables store the data that is captured from activities and are automatically created when you add specific activities to the canvas.

The queue to agent activity has the following output variables:

__Table 45\. Output Variables__
| Output Variable                 | Description                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------------ |
| QueueToAgent.AgentId            | Stores the agent ID to which the contact is queued.                                        |
| QueueToAgent.FailureDescription | Stores the description for the error scenario when the contact fails to get queued.        |
| QueueToAgent.FailureCode        | Stores the failure code value for the error scenario when the contact fails to get queued. |
| QueueToAgent.AgentState         | Stores the states of the preferred agent when trying to queue the contact.                 |
| QueueToAgent.AgentIdleCode      | Stores the description for the idle code of the preferred agent.                           |

The QueueToAgent.FailureCode output variable contains one of the following values when a failure occurs. Each value indicates a failure code and a failure description.

__Table 46\. Queue To Agent Failure Code Description__
| Failure Code | Failure Code Value                          | Failure Description                                                                     |
| ------------ | ------------------------------------------- | --------------------------------------------------------------------------------------- |
| 1            | AGENT\_UNAVAILABLE                          | Agent is currently not in the available state.                                          |
| 2            | AGENT\_NOT\_FOUND                           | The Queue To Agent activity is unable to find the agent by agent’s id or email address. |
| 3            | AGENT\_NOT\_LOGGED\_IN                      | Agent is currently not logged in.                                                       |
| 4            | FEATURE\_NOT\_ENABLED                       | The Agent-based Routing feature isn’t enabled.                                          |
| 5            | INVALID\_VTEAM\_ERROR                       | The reporting or recovery queue is invalid.                                             |
| 6            | AGENT\_BUSY                                 | The agent is available, but engaged in another call.                                    |
| 7            | VTEAM\_TRANSITION\_LIMIT\_REACHED           | The contact has reached its maximum limit from being queued to multiple queues.         |
| 8            | INVALID\_OPERATION\_FOR\_INTERACTION\_STATE | Queueing is not allowed in certain states of the contact such as terminated contact.    |

The following table shows the applicable QueueToAgent.AgentState and QueueToAgent.AgentIdleCode values. 

__Table 47\. AgentState and AgentIdleCode Values__
| Use Case                                                                                                 | AgentState      | AgentIdleCode                                                            |
| -------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------ |
| Invalid queue Invalid agent Agent isn't signed in                                                        | NOT\_APPLICABLE | NOT\_APPLICABLE                                                          |
| Agent is reserved for this call.                                                                         | AVAILABLE       | NOT\_APPLICABLE                                                          |
| Park Contact if Agent is unavailable toggle button is On and the agent is idle                           | Idle            | <AuxCode Name> The idle code selected by the agent in the Agent Desktop. |
| Park Contact if Agent is unavailable toggle button is On and the agent channel is busy                   | AVAILABLE       | NOT\_APPLICABLE                                                          |
| Park Contact if Agent is unavailable toggle button is Off and the agent is idle                          | Idle            | <AuxCode Name> The idle code selected by the agent in the Agent Desktop. |
| Park Contact if Agent is unavailable toggle button is Off, agent is available, and agent channel is busy | AVAILABLE       | NOT\_APPLICABLE                                                          |

#### Set Caller ID

Use the Set Caller ID activity to define the caller ID that displays during a call. The Set Caller ID activity is to be used only on Event Flows. The Set Caller ID is a terminal activity that marks the end of an occurred PreDial event flow. The Set Caller ID activity helps configure the ANI for the following scenarios:

- Inbound calls
- Outdial calls
- Courtesy callback
- Preview campaign
- Web callback
- Execute flow
- Transfer to dial number
- Consult to dial number
- Consult to agent
- Consult to EP-DN/queue
- Transfer to EP/queue

You can configure this activity next to a PreDial event handler. The required ANI can be configured using Set Caller ID activity based on the Dialed Number Identification Service (DNIS), operation type, or participant type.

You can configure the agent's DN as a customized ANI, so that the callee agent can see the caller agent DN/extension number when they are contacted. This reduces the chances of internal calls getting dropped. For example, when a front office user (the contact center agent) calls a back-office user (an internal employee), the back-office user can see the internal caller id (contact number/extension) of the agent, hence minimizes call rejections.

For this purpose, the caller can see the contact number/extension only when the callee agent is contacted through outdial, consult, or transfer to DN, and the DN is added to the list of contact numbers.

You must add the contact number to the list of internal numbers for an organization in Control Hub. For more information on how to add a contact number, see [Create contact number or extension](#task-template%5Ffbfcd08f-9f73-4240-9c0a-67afb759a9a9).

- If you enter a random number, the system checks this number with the default EP-DN mapping that is configured on Control Hub or Management Portal. If there is a mismatch, the system routes it back to the default ANI. For more information on Customized ANI validation, see [Callback](#Cisco%5FConcept.dita%5F2a7326f7-67da-4157-bab1-e477b219ec7e).
- To ensure the original numbers remain available for analysis in the reports, the ANI displayed in reports is not changed to the customized ANI.

__Table 48\. Caller ID Settings__
| **Parameter**      | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Static Caller ID   | Choose a Dial Number that is mapped to an Entry Point, from the drop-down list. If you don't select a number, the system considers the default value depending on the call scenario.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Variable Caller ID | Choose a valid variable (a E.164 number, with a valid EP-DN mapping) from the drop-down list. If you don't select a number, the system considers the default value depending on the call scenario. If you provide a number that is not in the E.164 number format, the system uses the default value, depending on the call scenario. To allow internal extensions as customized ANI for the callers, when you configure the predial flow for customer/consulted agent or dn/transferred agent or dn, choose Predial.otherPartyDn variable from the dropdown as Variable Caller ID. Since this variable contains the primary agent's DN, it will be a valid custom ANI shown on the receiver's device. |

ANI customization has a dependency on regulatory requirements. Consider the regional dependencies before deployment of the environment.

A PreDial event handler that is used to customize the caller ID overrides the ANI that you have selected earlier such as agent selected outdial ANI, courtesy callback with customize ANI, or any similar scenario.

Flow support is required for any inbound or outbound scenario to customise the ANI.

For use cases having dependencies on service providers such as country-code based decisions, regional restrictions, etc., consider testing the flows with the service providers first.

For ANI to work as expected in different call scenarios, you require a Next Generation environment.

The ANI usage for multiple scenarios that are applicable in the Next Generation environment are:

__Table 49\. ANI usage for multiple scenarios in a Next Generation environment__
| **Scenario**            | Configuration                                                                                          | **Result ANI**                                                                                                                                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Customer calls in       | PreDial event handler is not configured                                                                | ANI of the contact is presented on the agent's device EP-DN is presented on the contact's device                                                                                                                                                       |
| Customer calls in       | PreDial event handler is configured                                                                    | ANI is presented on the agent's device - as defined in the Set Caller ID activity                                                                                                                                                                      |
| Agent Outdial           | PreDial event handler is not configured                                                                | The contact's device and the agent's device are both presented with Agent selected Outdial ANI if the agent selects an Outdial ANI on the Desktop. Otherwise the contact's device and agent's device are both presented with the tenant's default ANI. |
| Agent Outdial           | PreDial event handler is configured                                                                    | For each participant's device, either the Agent selected Outdial ANI can be retained, if selected, or can be customised, as defined in the Set Caller ID activity.                                                                                     |
| Courtesy callback       | Customer ANI defined in Callback activity                                                              | ANI defined at the Callback activity is presented to the contact's device.                                                                                                                                                                             |
| Courtesy callback       | Customer ANI defined in Callback activity PreDial event handler is configured for customer leg         | Set Caller ID activity configured will take precedence.                                                                                                                                                                                                |
| Courtesy callback       | Customer ANI defined in Callback activity PreDial event handler is not configured for customer leg     | ANI defined at the Callback activity is presented to the contact's device. If ANI is defined at the Set Caller ID activity, it is presented to the agent's device.                                                                                     |
| Courtesy callback       | Customer ANI not defined in Callback activity PreDial event handler is not configured for customer leg | Tenant default ANI is presented on the contact's device.                                                                                                                                                                                               |
| Agent transfer, consult | PreDial event handler is configured                                                                    | Configured Set Caller ID is displayed on transferred consulted Agent-2 device.                                                                                                                                                                         |

##### **Create contact number or extension** 

You can add a contact number to the list of internal numbers for your organization. The customized ANIs will be visible to these added contacts. You can either add a single contact number at a time, or use Bulk operations to upload contact numbers as a CSV file.

For more information on how to perform bulk operations to create, modify, import, or export configuration objects in Control Hub, see [Bulk Operations in Webex Contact Center](https://help.webex.com/en-us/article/31e39g/Bulk-Operations-in-Webex-Contact-Center).

To add a contact number or extension:

| 1 | Sign in to your customer organization using the Control Hub URL <https://admin.webex.com/>.                                                                                                                                                                                |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \>  Tenant Settings \>  Voice \>  Contact Number.                                                                                                                                                                                                     |
| 3 | Click **Add more** to add a new contact number/extension to the list. You can create contact number/extension in a range between 2 to 9 digits. The contact number/extension can start with 0\. You can add a maximum of 5000 contact numbers/extensions per organization. |

#### Call Progress Analysis

Use the _Call Progress Analysis_ activity to set the CPA parameters to perform a voicemail/answering machine detection (AMD) for a callback.

You can place the _Call Progress Analysis_ activity in the following areas:

- In the main flow, at any point after the Callback activity.
- In the event flow, on the CallbackFailed event handler only.
- In the main flow, at any point for scheduled callback or personal scheduled callback.

When you attempt a callback, if the call hits AMD/voicemail, the system marks the call as unsuccessful. The result of AMD detection is captured in the reason output variable of the CallbackFailed event handler. If the `CallbackFailed.reason` value is AMD, it indicates that AMD/voicemail was detected for the customer. Based on this output variable, you can configure callback retries. 

This activity is available only if the preferred queue and the callback features are enabled for the enterprise.

If you’ve configured a postcall customer survey in your flow, it won't be initiated if the call is answered by an AMD or voicemail, preventing unnecessary surveys.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](#events-in-flow-designer).

##### General settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Advanced Parameters

This section enables you to configure the following CPA parameters:

| Parameter              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Minimum Silence Period | This indicates the minimum silence period (in milliseconds) required to classify a call as voice detected. If multiple answering machine calls are passed through to agents as voice, then increase this value for longer pauses in answering machine greetings. You can set this value between 100–1000 ms with the default value as 608 ms.                                                                                                                            |
| Analysis Period        | This indicates the time duration (in milliseconds) spent for analyzing a call. If there’s a short agent greeting on an answering machine, then a longer value categorizes that the answering machine call as voice. If the call is to a business where the operator has a longer scripted greeting, a shorter value categorizes the long and live greeting as an answering machine call. You can set this value between 1000–10000 ms with the default value as 2500 ms. |
| Minimum Valid Speech   | This indicates the minimum time duration (in milliseconds) of voice required to classify a call as voice detected. You can set this value between 50–500 ms with the default value as 112 ms.                                                                                                                                                                                                                                                                            |
| Maximum Time Analysis  | This indicates the maximum time duration (in milliseconds) allowed for analysis before identifying a problem analysis as dead air or low volume. You can set this value between 1000–10000 ms with the default value as 3000 ms.                                                                                                                                                                                                                                         |

##### Output variables

When an AMD or voicemail detection completes, the following variables are updated:

| Output variable    | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| FailureCode        | Stores the failure code. The system sets this value only when the activity fails.    |
| FailureDescription | Stores the failure details. The system sets this value only when the activity fails. |

#### Recording Control

Flow Designer provides a Recording Control activity for the purpose of capturing recording consent from the user or caller. Recording consent is one of the configuration properties that is available as part of this activity. Use a Menu activity to capture user consent into a Boolean flow variable. During an interaction, if you want to capture the consent value to generate a report, use the Boolean variable as an input to the Recording Control activity's consent property value. Then you can mark the variable used to capture the caller consent as reportable.

The flow developer can determine whether the recording consent for a call needs to be captured or not, for reporting purposes. When a customer wants to capture the consent for recording, then use global variables to generate a consent report. When a customer does not want to capture the consent for recording, use local variables. This offers better flexibility for tenants and customers to manage the use of variables.

You can configure Recording Control using these steps:

1. In the Flow Designer, drag and drop the Recording Control activity from the Activity Library to the canvas.
2. Click the Recording Control activity to configure the activity settings.
3. In General Settings, enter a name for the activity in Activity Label.
4. (Optional) In the Activity Description field, enter a description for the activity.
5. In Recording Control Settings, select a flow variable from the drop-down list for Enable Recording.

A Menu activity for IVR (Interactive Voice Response) and a Recording Control activity when used together in the flow enables capture of recording consent. Priority is given to user consent setting in the flow compared to tenant level or queue level or recording schedule level configuration settings.

Recording control can be managed in the following scenarios:

- If the user consent configuration is set to Yes in the flow, then the call is recorded, regardless of the recording configuration set at the tenant or queue or recording schedule level.
- If the user does not consent and the configuration is set to No in the flow, then the call is not recorded, regardless of the recording configuration set at the tenant or queue or recording schedule level.
- If the user consent is not configured in the flow, but a configuration is set to Yes at any one of the other levels such as tenant or queue or recording schedule, then the call is recorded.
- If the user consent is not configured, and a configuration is set to No at all levels such as tenant, queue and recording schedule, the call is not recorded.

In addition, other recording configurations such as Continue On Transfer, Pause Resume Enabled and Pause Duration and so on, are still applied based on the existing hierarchy such as tenant, queue, or recording schedule level.

**Output Variables** 

This activity has no output variables.

#### Record

The Record activity records the speech input or utterance of callers that can be referenced in the same call flow. This activity is available only for customers who use the Next Generation media platform. The system stores the recorded audio files only during the call, after which those files are automatically deleted from the system. Currently, the recorded audio files are in an un-encrypted format. We do not recommend recording sensitive information using this feature.

If you don't see the Record activity, contact Cisco Support to enable the corresponding feature flag. 

Do not use the Record activity as part of event flows, especially after the Agent Disconnected event. Adding Record activity in the event flow removes audio files that are recorded through the Webex Contact Center Recording Management module.

| 1 | Sign in to [Control Hub](https://admin.webex.com/), choose **Services** \> **Contact Center** \> **Flows**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click **Manage Flows** and then click **Create Flows**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Click **Start Fresh**. The **Flow Designer** window appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4 | In the **Flow Name** field, enter a unique name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 5 | Drag and drop the **Record** activity from the **Activity Library** to the main flow canvas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 6 | In **General Settings**, perform the following actions: In the **Activity Label** field, enter a name for the activity. In the **Activity Description** field, enter a description for the activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 7 | In **Record Settings**, configure the following fields: Check or uncheck the **Start tone** check box to enable or disable the short beep sound to indicate the start of the recording. By default, the check box is enabled.In the **Silence timeout** field, enter the numerical value between 1 to 120 seconds. This indicates the maximum interval of silence allowed any time after the recording has started. The default value is 4 seconds. The recording stops when there is silence for the silence timeout. In the **Maximum record time** field, enter the numerical value between 1 to 120 seconds to indicate the maximum time allowed to record the caller’s utterance. The default value is 30 seconds. The recording stops when the recording reaches the maximum record time.In the **Termination symbol** field, choose either the character symbol # or \* that the end user can use to end a recording. By default, the terminator symbol is #.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 8 | In the **Output Variables** section, view the following variables: **Record\_audioFileData**–Stores the details of the recorded audio files.**Record\_errorCode**–Stores the error status code of the errors that occur while initiating or during the recording of the caller's utterance.**Record\_errorDescription**–Stores the description of the errors that occur while initiating or during the recording of the caller's utterance. You can use the **Record\_audioFileData** output variable in activities such as [Play Message](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FConcept.dita%5F19353180-2d4f-41eb-b081-6d817451470b), [Menu](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FConcept.dita%5F8a8f0369-60b9-4d31-af05-9338f7aa54be), and [Collect Digits](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FConcept.dita%5F022710c1-5527-4a8a-9d27-d38b615e1f68) in a call ﬂow. This output variable can be conﬁgured as an audio variable in the **Prompt** settings of the IVR activities to play the recorded audio to the callers. The variable value can be in the form of a pebble expression: {{Record\_activity\_label.audioFileData.name}}. You can use the **Record\_audioFileData** output variable in the [HTTP Request](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5Fb1192550-38d4-46e5-be3d-2119794def93) activity to upload the recorded audio to the external third-party server or API. This can be done by choosing the **Content Type** as **File** and the Record activity output variable from the **Content** drop-down in the Request Body. The following table lists the error codes and descriptions for the Record activity: Error Code Error Description Reason 1001 INVALID\_SILENCE\_TIMEOUT The configured Silent timeout is not in the valid range between 1 and 120 seconds. 1002 INVALID\_MAXIMUM\_RECORDING\_DURATION The configured Maximum record time is not in the valid range between 1 and 120 seconds. 1003 INVALID\_TERMINATION\_SYMBOL The configured Termination symbol is not one of the allowed characters \* or #. 1004 RECORD\_API\_FAILURE An error that is occurred in the API to initiate the recording. 1005 FEATURE\_DISABLED\_FOR\_ORG The feature is not enabled for the organization. 1006 No input audio is detected to record. The recorded audio file may contain silence. 1007 An error that is occurred in the media services while recording. |

#### Start Media Stream

The Start Media Stream activity is used to enable streaming of voice media from active call conversations between a caller and an agent.

For more details on how to use the activity in call flows, see [Enable media streaming for specific queues](https://help.webex.com/en-us/article/n5jhgdi/Enabling-media-streaming-for-specific-queues).

#### Set Announcement

A Set Announcement activity configures announcements played upon call connection to an agent. When enabled, you can configure a prerecorded message as a compliance message with legal information, or personalized agent greeting, or both. You can use this activity for both inbound and outbound calls.

- For inbound flows—Configure the announcement activity _before_ the Queue Contact activity for optimal performance. Alternatively, you can configure it within the Pre-Dial Event in an Event Flow.
- For outbound flows—The announcement activity _must_ be configured within the Pre-Dial Event. Ensure that the Set Caller ID activity is the terminal activity for the Pre-Dial Event.

The Set Announcement activity supports the following announcement types:

- Compliance message
- Agent greeting
- Whisper announcement

See the [Enhance efficiency with pre-recorded messages](https://help.webex.com/en-us/article/uf3wou/Enhance-efficiency-with-pre-recorded-messages) for more details.

To configure the Set Announcement activity, perform the following steps:

1. Sign in to [Control Hub](https://admin.webex.com/).
2. Navigate to Contact Center \>  Customer Experience \>  Flows.
3. Choose the required flow and click the Go to Flow Settings icon to open the required flow.
4. Drag and drop the Set Announcement activity to the main flow canvas.
5. In the General Settings tab, configure the following parameters:
  1. In the **Activity Label** field, enter a name for the activity.
  2. In the **Activity Description** field, enter a description for the activity.
6. To configure agent greeting, turn on the Enable Agent Greetingtoggle. In the Greeting Purpose field, enter the name of the greeting purpose.
7. To configure compliance message, turn on the Enable Compliance Message toggle. Choose the requied audio file from the drop-down list.
8. Click Save.
9. Click Publish to publish the flow.

#### Set Whisper Announcement

The Set Whisper Announcement activity plays a brief, prerecorded message to an agent just before the agent connects with a caller. The announcement plays only to the agent; the caller hears the default ringing while the whisper announcement plays.

The content of the announcement can contain information about the caller that helps prepare the agent to handle the call. 

By providing agents with this information upfront, whisper announcements help them handle calls more efficiently, leading to shorter call handling times and improved customer satisfaction.

When a whisper plays, you can’t: 

- Put the call on hold, transfer, or conference.
- Request supervisor assistance

These features become available again after the announcement completes. 

A whisper announcement:

- Is applicable to incoming calls and blind transfer to EP.
- Can be a prompt or (text-to-speech) TTS string.
- Can be combined with compliance message and agent greeting, in which case the whisper plays first.
- Isn’t included in the call recording.
- Supports all agent endpoint types like phone, soft client, and WebRTC.

To configure a whisper announcement:

1. Sign in to [Control Hub](https://admin.webex.com/?%5Fgl=1%2A1my2ru7%2A%5Fgcl%5Fau%2AMTUyNTY4OTY3OC4xNzUzOTM3NTQy).
2. Navigate to Services \> Contact Center. Click Customer Experience \> Flows.
3. Choose the required flow for which you need to add a whisper announcement.
4. Drag and drop the Set Whisper Announcement activity from the Activity Library to the main flow canvas.
5. Configure the following parameters:

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Whisper Announcement

When you switch on the Enable Text-to-Speech toggle, you can choose the required connector. 

- If you choose Google TTS connector, you must have set up a Google Cloud account and configure the Text-to-Speech service. For more information, refer [Text-to-speech](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F0f25b19d-e7d6-4a30-bb9f-8d080a9149fb) section in Webex Contact Center Setup and Administration Guide.
- If you choose Cisco TTS connector, you can skip the Google Cloud account configuration.

| **Parameter**                              | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connector                                  | Indicates the connector to authenticate the Text‐to‐Speech service. The drop-down list displays the name of all Google connectors in the Control Hub. Only the active connectors are displayed. Select the connector from the drop‐down list. Existing customers on Classic voice platform can view only Google TTS connector in the drop-down list. Existing customers on the Next Generation voice platform can view both Cisco Cloud Text-to-Speech and Google TTS connectors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Override Default Language & Voice Settings | Use this toggle button to override the voice settings configured in the Global Voicename variable. This parameter is enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Output Voice                               | Indicates the output voice name. This field appears only if you enable the Override Default Language & Voice Settings toggle button. Select the output voice name from the drop-down list. If the output voice name that is supported by Google isn't available in the Output Voice  drop-down list, disable the Override Default Language & Voice Settings toggle button. Include the [Set Variable](#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c) activity before the Play Message activity in the flow. Configure the Set Variable activity as follows: Set the variable to Global\_VoiceName. Set the variable value to the required output voice name code (for example, en-US-Standard-D). For more information on the supported voices and languages, see the Google [_Supported voices and languages_](https://cloud.google.com/text-to-speech/docs/voices) page.                                                                                                                                                                   |
| Add Audio File                             | To alternate Text-to-Speech messages with prerecorded audio files, click **Add Audio File**. This adds a new row to the configuration where you can choose the desired audio file from the drop-down list. To remove an item from the sequence, click the **Delete** icon that appears next to the corresponding input or drop-down list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Add Text-to-Speech Message                 | To build the prompt, use Text-to-Speech or a mix of prerecorded audio files and Text-to-Speech messages. Click **Add Text-to-Speech Message** to add a new text input field to the prompt creation section. In this field, type the message to be played to the caller in the selected Language and Voice. **Important considerations:** Use a Set Variable activity to set the value of TTS message to a flow variable before using it in the activity. Use single quotes instead of double quotes inside pebble expressions. There's no character limit for Cisco Text-to-Speech messages. The field accepts two types of input—raw text (plaintext) or Speech Synthesis Markup Language (SSML)‐formatted data. You can also use variables as part of the message to read the dynamic content. For supported SSML tags for Cisco Cloud Text-to-Speech, see the [Text-to-Speech (TTS) in Webex Contact Center](https://help.webex.com/article/ntkjqhw/Text-to-Speech-%28TTS%29-in-Webex-Contact-Center#reference-template%5Fb6eff334-4963-4685-b1dc-17184aaaa308). |
| Add Audio Variable                         | Use this option to configure the audio prompt to be played dynamically to the customers. For example, you can configure this variable to play the audio prompt in multiple languages based on the customer's preference during the interaction. To configure the audio variable, click Add Audio Variable. Enter the variable value in the form of a pebble expression. For more information, see [Pebble Template Syntax](#Cisco%5FConcept.dita%5F9a750452-028a-4114-aa7a-7a37fab78b8f). The variable value must match the name of the .wav file that is uploaded to the Control Hub.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Preview prompt**                         | Click the Preview prompt button to test and preview text-to-speech messages and audio files. In the Preview prompt dialog box that appears, choose the required voice to test the prompt. You can play the messages and audio files as follows: Click Play all to play both audio file and TTS message together. Play only the audio files. Play only the text-to-speech messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Set Contact Priority

Use the Set Contact Priority activity to assign priority levels to contacts. You can set priorities using numbers from 1 (highest) to 9 (lowest). Contacts with a higher priority are routed first. For more information about routing and queuing, see the [Set Contact Priority](https://help.webex.com/en-us/article/np2fdx/Understand-Routing-and-Queueing-in-Webex-Contact-Center#concept-template%5F678ebab2-d692-49b8-adbd-7f675f4aafdd) section in Understand Routing and Queueing in Webex Contact Center. 

The following sections enable you to configure the Set Contact Priority activity:

- **General Settings**
- **Contact Priority Settings**
- **Activity Output Variables**

| 1 | In the Flow Designer, drag and drop the Set Contact Priority activity from the Activity Library to the canvas.                                                                                                                                    |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the activity to configure the activity settings.                                                                                                                                                                                            |
| 3 | In the General Settings section, enter the following information: In the Activity Label field, enter a name for the activity. (Optional) In the Activity Description field, enter a description for the activity.                                 |
| 4 | In the Contact Priority Settings section, set the priority of the contact. You can configure a static priority value from the drop-down list. If you want the priority to change dynamically, configure a variable priority using flow variables. |

**Activity output variables**

The Activity Output Variables store the data that is captured from activities and are automatically created when you add specific activities to the canvas.

The Set Contact Priority activity has the following output variables:

- SetContactPriority.FailureCode: Stores the failure code. The system sets this value only when the activity fails.
- SetContactPriority.FailureDescription: Stores the failure details. The system sets this value only when the activity fails.

**Error codes**

The following are the error codes and descriptions for the Set Contact Priority activity:

| Failure code | Failure code value        | Failure description                                                                                 |
| ------------ | ------------------------- | --------------------------------------------------------------------------------------------------- |
| 6            | SYSTEM\_ERROR             | This code represents the miscellaneous errors (that don't fall into any of the defined categories). |
| 48           | Unsupported flow activity | The Set Contact Priority is unsupported for outdial and campaign contacts.                          |

#### Schedule IVR callbacks

The scheduled callback feature enables customers to schedule callback using IVR. Customers can request callbacks independently, without speaking to an agent, resulting in more efficient contact center operations. To support scheduled callback capabilities to the customers, the Flow Designer module provides the Schedule Callback activity within the flow.

##### Schedule Callback

 Use the Schedule Callback activity to enable callers to easily schedule callbacks through the IVR system. You can use specific DTMF prompts to capture scheduling details from the caller and pass this information as input to the Schedule Callback activity.

The following sections enable you to configure the Schedule Callback activity:

- **General Settings**
- **Schedule Callback Settings**
- **Activity Output Variables**

Before you begin

Ensure to configure the callback entry point in the Control Hub. See [Setup a callback entry point](https://help.webex.com/en-us/article/ewuay1/Set-up-a-channel#task-template%5F18bff0fa-e0d8-47b7-9a2a-1cb81c4ec20a) section for details.

| 1 | In the Flow Designer, drag and drop the Schedule Callback activity from the Activity Library to the canvas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the activity to configure the activity settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3 | In the General Settings section, enter the following information: In the Activity Label field, enter a name for the activity. (Optional) In the Activity Description field, enter a description for the activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 4 | In the Schedule Callback Settings section, configure the following details: Callback Dial Number: The phone number to which callback is to be scheduled. The number can include an optional country code and digits (0-9), along with allowed special characters: space ( ), hyphen (-), parentheses (()), and period (.). The total length of the number must be between 7 and 15 characters. Callback Queue: A unique identifier representing the queue associated with the callback. You can assign a static queue value or configure a dynamic value using flow variables. Customer Name (Optional): The name of the customer who receives the callback. If there is no name, then the callback dial number is used to identify the customer. Schedule Date: The date on which the customer wishes to receive the callback. The Schedule Date must be provided in ISO-8601 format (YYYY-MM-DD). It must be a valid date in the specified time zone, and should fall within 31 days from the current date. Schedule Start Time: The preferred start time for receiving the callback, specified in ISO-8601 format (HH:mm:ss). The start time must be at least 30 minutes ahead of the current time. Schedule End Time: The preferred end time by which the callback should be completed, also in ISO-8601 format (HH:mm:ss). The end time must be at least 30 minutes after the start time and can't exceed 8 hours after the start time. Schedule Timezone: The customer’s time zone relevant to the date and time provided. This must be a valid IANA time zone name (for example America/New\_York). You can assign a static time zone or configure a dynamic value using flow variables. Include a series of IVR activities (Menu, Collect Digits) to gather this information from the caller and pass it on to the Scheduled Callback activity. To make this easy, see the [Scheduled Callback Subflow](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#scheduled-callback-subflow) for details. |

**Activity Output Variables**

The Activity Output Variables store the data that is captured from activities and are automatically created when you add specific activities to the canvas.

The Schedule Callback activity has the following output variables:

- ScheduleCallback.FailureCode: Stores the failure code. The system sets this value only when the activity fails.
- ScheduleCallback.FailureDescription: Stores the failure details. The system sets this value only when the activity fails.

The following are the error codes and descriptions for the Scheduled Callback activity:

| Failure code | Failure code value | Failure description                                                                                 |
| ------------ | ------------------ | --------------------------------------------------------------------------------------------------- |
| 1            | INVALID\_REQUEST   | For any invalid inputs.                                                                             |
| 3            | INVALID\_QUEUE     | For invalid queue details.                                                                          |
| 6            | SYSTEM\_ERROR      | This code represents the miscellaneous errors (that don't fall into any of the defined categories). |

What to do next

Use the Disconnect Contact activity to terminate the call flow after scheduling a callback.

#### Upload Audio

Use the Upload Audio activity in the flow to enable uploading agent greetings.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                           |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Contact Center \>  Customer Experience \>  Flows.                                                                                                                                                                                                                                                                                                                                 |
| 3 | Choose the required flow and click the Go to Flow Settings icon to open the required flow.                                                                                                                                                                                                                                                                                                    |
| 4 | Drag and drop the Upload Audio activity to the main flow canvas.                                                                                                                                                                                                                                                                                                                              |
| 5 | In the General Settings section, configure the following parameters: In the **Activity Label** field, enter a name for the activity. In the **Activity Description** field, enter a description for the activity.                                                                                                                                                                             |
| 6 | In the Audio File Information tab, configure the following parameters: Audio File Type—Choose the audio file type. Currently, only Agent Personal Greeting is supported. Greeting Purpose—Enter the name of the greeting purpose which is used for creating the agent greeting. Recording Data—The audio file recorded. Agent ID—Unique user id assigned to each agent in the contact center. |

###  Activities in flow control

[Start Flow](#Cisco%5FConcept.dita%5F83924e55-5a22-4bc1-b721-cea3a225ea73) 

[End Flow](#Cisco%5FGeneric%5FTopic.dita%5Fee6fc933-dcc1-4c03-8ef5-57e33dd51758) 

[Set Variable](#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c) 

[BRE Request](#Cisco%5FGeneric%5FTopic.dita%5F1f2a1a18-837b-49dc-9586-03db2b3a9a94) 

[HTTP Request](#Cisco%5FGeneric%5FTopic.dita%5Fb1192550-38d4-46e5-be3d-2119794def93) 

[Parse](#Cisco%5FGeneric%5FTopic.dita%5Fc1a3583f-39e9-4250-9bf8-d8f419da6b05) 

[Condition](#Cisco%5FGeneric%5FTopic.dita%5F833d4535-beb6-49e9-816d-e5cbd01b18cc) 

[Case](#Cisco%5FGeneric%5FTopic.dita%5F5b84496c-fa1d-407e-bebd-fa25d2bc0f49) 

[GoTo](#Cisco%5FReference.dita%5F73019837-1eec-4f05-b490-7b9ae5568683) 

[Business Hours](#Cisco%5FConcept.dita%5F5ba6029e-c256-4c16-8fbf-40f8370bd968) 

[Wait](#wait-activity) 

[Percentage Allocation](#task-template%5F2da0579d-5c10-4021-8b5d-61e8220bf5da) 

[Support for workflows in Outdial Entry Point](#support-for-workflows-in-outdial-entry-point) 

#### Start Flow

The only Flow Trigger Event currently available is `NewPhoneContact`. The system triggers this event when a new call reaches a telephony entry point in the contact center. You can use flows that are triggered by the NewPhoneContact event in **Entry Point Routing Strategies.** The Flow Trigger Event is currently selected by default and cannot be edited. Additional events will be exposed in the future.

The Start Flow activity is automatically labeled with the name of the selected Flow Trigger Event. This allows you to quickly see what type of flow is being built.

**Output Variables** 

The number and type of Output Variables associated with the Start Flow activity depend on the selected Flow Trigger Event. These variables store data that is captured at the moment the flow is triggered. For example, the output variables described below are exposed through the `NewPhoneContact` event.

Use these variables in later activities to control the flow sequence.

- `**NewPhoneContact.ANI**`  
Automatic Number Identification (ANI) is a feature of a telecommunications network to automatically determine the originating phone number of a call. This variable stores the phone number of the caller who triggered the `NewPhoneContact` event.
- `**NewPhoneContact.DNIS**`  
Dialed Number Identification Service (DNIS) is a service that identifies the originally dialed telephone number of a call. This variable stores the phone number that the caller dialed to trigger the `NewPhoneContact`event.
- `**NewPhoneContact.InteractionID**`  
An unique Webex Contact Center identifier that is associated with each interaction triggered by the `NewPhoneContact` event.  
You can display the Interaction ID on Desktop. For more information, see _Example: Display Interaction ID on Desktop_ in the [Create Custom Flow Variables](#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e) section.
- `**NewPhoneContact.PSTNRegion**`  
The PSTN region that is configured in Entry Point (EP)- Dial Number (DN) mapping for regional voice media services. This variable is supported only on the Next Generation voice platform.
- `**NewPhoneContact.FlowVersionLabel**`  
Version label of the flow that is generated during flow execution. Flow developers can create different behaviors for different flow versions such as 'Dev', 'Test', 'Live', and 'Latest'. Using the `**NewPhoneContact.FlowVersionLabel**` variable, developers can modify the flow logic dynamically by accessing the version labels within the flow.
- `**NewPhoneContact.FlowId**`  
Unique identifier of the currently executing flow.
- `**NewPhoneContact.EntryPointId**`  
Unique identifier of the Entry Point that starts the flow.
- `**NewPhoneContact.OrgId**`  
Unique identifier of the organization.
- Callback variables:
  - `**NewPhoneContact.CallbackReason**`  
  The callback reason provided at the time of scheduling a callback. You can make the callback reason available on the incoming popover on Agent Desktop by assigning this to a Agent Viewable variable.
  - `**NewPhoneContact.CallbackType**`  
  Stores the value as 'scheduled' for a scheduled callback or 'scheduled\_personal' for personal scheduled callback.
  - `**NewPhoneContact.ScheduleSourceInteractionId**`  
   The Interaction ID from where the callback was originally requested.  
These variables will have values only for scheduled callback and will remain empty for other call types.
- `**NewPhoneContact.Headers**`  
Stores the Session Initiation Protocol (SIP) header details of the incoming call in JSON format. Flow developers can extract and use the incoming SIP custom X-Headers for making routing decisions and for integrating Webex Contact Center with third-party IVR systems. When a customer calls the Webex Contact Center, the system parses the flow data and extracts the SIP header.  

**Prerequisites**

  - Extracting SIP headers is available only for tenants on the RTMS (Next Generation Voice Media platform).
  - Use of custom X-Headers is currently supported for organizations using Webex Calling with Local Gateway (LGW) as the telephony option for Webex Contact Center.

**Example** Consider the following SIP invite:  
```  
INVITE sip:12345@domain.com SIP/2.0 ​  
Via: SIP/2.0/UDP client.atlanta.example.com;branch=z9hG4bK74bf9 Max-Forwards: 70 ​  
From: "Alice" <sip:alice@atlanta.example.com>;tag=9fxced76sl ​  
To: <sip:12345@domain.com> ​  
Call-ID: 2xTb9vxSit55maQjcU@atlanta.example.com ​  
CSeq: 314159 INVITE ​  
Contact: <sip:alice@pc33.atlanta.example.com> ​  
Diversion: <sip:john.doe@example.com>;reason=unconditional;privacy=off;screen=no​  
Content-Type: application/sdp ​  
Content-Length: 143 ​  
X-Customer-ID: 987654321 ​  
X-Call-Reason: Support ​  
X-Priority: High  
```  
In this example, the system extracts the following details:

**X-Customer-ID: 987654321** ​

**X-Call-Reason: Support**​

**X-Priority: High**  
The system converts the SIP headers to lower case. Use the Set Variable activity to assign one or more SIP headers to variables defined within the system.  
The following header patterns are reserved for internal use and must not be passed on as custom headers. By default, any headers that match this pattern will be dropped and won't be passed to the Webex Contact Center.

  - X-Address
  - X-ADD-DIVERSION
  - X-BNR-State
  - X-BNR-Original-Codec
  - X-BNR-Bypassed
  - X-BroadWorks-Correlation-Info
  - X-FS-Support
  - X-Path
  - X-RTMS-CID
  - X-RTMS-OID
  - X-RTMS-CONFID
  - X-RTMS-AGENT-LEGID
  - X-RTMS-ENTER-SOUND
  - X-RTMS-APP-PREFIX
  - X-RTMS-No-Lookup
  - X-VPOP-DOMAIN  
​**Important considerations:**

  - The system parses the caller name as Caller\_ID\_Name.
  - The system can extract up to 20 headers from the incoming SIP invite message. If the number of headers is more than 20, then the system extracts only the first 20 alphabetically sorted headers.
  - There's a limit of 1000 bytes for all header information.  
To add and parse SIP headers to external IVR systems, use the following activities:

  - [Bridged Transfer](#Cisco%5FGeneric%5FTopic.dita%5F9762deed-12dd-47c3-a699-2fb28daf0a99%5FBT)
  - [Blind Transfer](#Cisco%5FGeneric%5FTopic.dita%5F9762deed-12dd-47c3-a699-2fb28daf0a99)

#### End Flow

End Flow is a terminating activity that marks the end of a flow path. You can use any number of End Flow activities to construct your flow to ensure that all flow paths terminate.

Don't use the End Flow activity in an IVR flow. End Flow use with IVR may result in dead air and the call may not disconnect.

You can give each activity a unique label and description.

__Table 52\. General Settings__
| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

#### Set Variable

Use the Set Variable activity to set values to variables. You can modify the values of the variables based on your requirement or according to the flow.

You can configure multiple variables within a single Set Variable activity. This eliminates the need to configure multiple individual Set Variable activities in the canvas, thus enabling the flow developers to build and modify flows faster.

Specify the type of variable you wish to select. For more information, see [Custom variables](#Cisco%5FConcept.dita%5F79a1216a-2b35-4523-8f68-948c4adf0fbc) and [Predefined variables](#Cisco%5FConcept.dita%5F17d11d97-7ae7-44f2-9bbb-39c111456177).

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Configure error handling](#Cisco%5FConcept.dita%5F4079aa76-8682-4cbc-b7fd-d84fcb358568). If you don't configure the error-handling path, the global error handler handles the flow execution error.

The following sections enable you to configure the Set Variable activity:

- [General settings](#section%5Funs%5Fjl1%5Fkrb)
- [Variable settings](#section%5Fn5w%5Frl1%5Fkrb)

##### General settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Variable settings

| **Parameter**  | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Variable       | Choose the variable from the drop‐down list. You can only set custom flow variables to custom values. Predefined Variables have fixed values as dictated by the flow execution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Variable Value | Click the **Set Value** radio button to set the variable to a specific value. The input field type changes based on the data type of the selected variable. To learn more about variable data types, see [Create Custom Flow Variables](#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e).  If the value is a string, you can enter basic text or an expression.To enter an expression, use the {{variable}} syntax.Click the **Set to Variable** radio button to set the variable value to the value of another variable in the flow. Choose a variable from the drop‐down list. All variables in the flow are available for selection. |
| Add New        | Click Add New to add new variables. Define the Variable and Variable Value. Don't include complex expressions when configuring multiple variables within a single Set Variable activity. You can configure up to 10 variables within a single Set Variable activity. You can reorder the variables within the Set Variable activity.                                                                                                                                                                                                                                                                                                              |

#### BRE Request

Use the BRE Request activity to retrieve the data from your organization's Business Rules Engine (BRE) to use in the flow. The BRE Request activity uses standard HTTP protocols to fetch data from the BRE.

The following sections enable you to configure the BRE Request activity:

- [General Settings](#section%5Fn3m%5Fpn1%5Fkrb)
- [Query Parameters](#section%5Fehb%5F2n1%5Fkrb)
- [Parse Settings](#section%5Ftvp%5Fhn1%5Fkrb)
- [Output Variables](#section%5Fpkc%5Fjn1%5Fkrb)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Query Parameters

As part of the BRE Request, you can pass the parameters that are provided in the API call to the BRE. In the Key‐Value columns, you can enter the key for the query and the associated value to send along with the query. You can also use the double curly braces syntax to pass variable values.

The BRE activity has one predefined Query Parameter: `context`. This query parameter is passed in the API call to the BRE.

The `TenantID` is automatically injected as a parameter and does not need to be configured.

__Table 53\. Query Parameters__
| **Parameter**     | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Context           | Contains the reason for the request. This mandatory parameter can't be edited or deleted. This parameter must contain the same value as the value specified in the Attribute context in BRE. For more information, see the Creating a Set of Rules section in the [_Cisco Webex Contact Center Business Rules Engine User Guide_](https://www.cisco.com/c/en/us/support/customer-collaboration/webex-contact-center/products-installation-and-configuration-guides-list.html). |
| ANI               | Contains the originating phone number of the call. This is a default parameter that you can edit or delete, based on the rules configuration in the BRE. A sample value for ANI is {{NewPhoneContact.ANI}}                                                                                                                                                                                                                                                                     |
| Response Timeout  | Specifies the connection timeout for the BRE Request. Default is set at 2000 milliseconds.                                                                                                                                                                                                                                                                                                                                                                                     |
| Number of Retries | Specifies the number of times the BRE Request is attempted after failure.  This parameter is used if the status code is 5xx; for example, 500 or 501.                                                                                                                                                                                                                                                                                                                          |

To add a query parameter, click Add New. This adds a row where you can enter the key value pairs. You can add as many query parameters as required as part of the BRE Request.

##### Parse Settings

This section enables you to parse the response from the BRE Request into different variables:

| **Parameter**     | **Description**                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Response Variable | Choose a variable to which you want to extract a particular section from the BRE Request response object. You can choose only Custom Flow variables from the drop-down list.                                                                                                                                                                                                            |
| Path Expression   | Define the Path Expression for parsing the response object. Depending on the kind of data structure of the response object and the use cases for extracting a subset of that information, the Path Expression varies. Data is normalized to an object hierarchy before Path Expression execution, so JSONPath is used in the response object regardless of the configured Content Type. |

##### Decryption Settings

You can decrypt the output variables of the BRE Request activity. If decryption is enabled at the flow level, users with debug decryption access can view the unmasked output values of the BRE Request activity in the flow debug logs. Turn off the Enable decryption toggle to disable decryption at the activity level for additional protection.

##### Output Variables

The BRE Request returns two output variables:

- `BRERequest1.httpResponseBody`: Returns the response body for the BRE Request.
- `BRERequest1.httpStatusCode`: Returns the status code of the BRE Request.  
These response codes are classified into the following categories:  

  - Informational responses (100–199)
  - Successful responses (200–299)
  - Redirects (300–399)
  - Client errors (400–499)
  - Server errors (500–599)

##### Content Type Formats

The following examples describe sample input Content Type formats and the JSON response.

##### Content Type XML

Use this tool to convert XML into JSON format <https://codeshack.io/xml-to-json-converter/>.

XML Input Format: 

```
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Test application</body>
</note>

```

Data/JSON Normalized Response

```
{
   "note": {
      "to": "Tove",
      "from": "Jani",
      "heading": "Reminder",
      "body": "Test application"
   }
}

```

Example JSON Path Expression: Use `$.note.from` to get the value as `Jani`.

##### Content Type TOML

Use this tool to convert TOML to JSON format <https://www.convertjson.com/toml-to-json.htm>.

TOML Input Format: 

```
title = "TOML Example"
[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00

```

Data/JSON Normalized Response

```
{
   "title": "TOML Example",
   "owner": {
      "name": "Tom Preston-Werner",
      "dob": "1979-05-27T15:32:00.000Z"
   }
}

```

Example JSON Path Expression: Use `$.owner.name` to get the value as `‘Tom Preston-Werner’`.

##### Content Type YAML

Use this tool to convert YAML to JSON format <https://www.convertjson.com/yaml-to-json.htm>.

YAML Input Format: 

```
# An employee record
martin:
  name: Martin D'vloper
  job: Developer
  skill: Elite

```

Data/JSON Normalized Response

```
{
   "martin": {
      "name": "Martin D'vloper",
      "job": "Developer",
      "skill": "Elite"
   }
}

```

Example JSON Path Expression: Use `$.martin.job` to get the value `Developer`. 

##### Content Type JSON

Use the JSON Expression Evaluator <https://jsonpath.com/>.

JSON Input Format: 

```
{
   "martin": {
      "name": "Martin D'vloper",
      "job": "Developer",
      "skill": "Elite"
   }
}

```

Data/JSON Normalized Response

```
{
   "martin": {
      "name": "Martin D'vloper",
      "job": "Developer",
      "skill": "Elite"
   }
}

```

Example JSON Path Expression: Use `$.martin.job` to get the value `Developer`.

#### HTTP Request

The HTTP Request activity fetches information from an external data source such as a CRM using standard HTTP protocols.

Basic Auth and OAuth 2.0 attributes are supported for authenticated endpoints. 

The following sections enable you to configure the HTTP Request activity:

- [General settings](#section%5Fx5q%5F1k1%5Fkrb)
- [HTTP Request settings](#section%5Fwlt%5Flj1%5Fkrb)
- [Parse Settings](#section%5Flrd%5Fyj1%5Fkrb)
- [Output Variables](#section%5Fckv%5F5j1%5Fkrb)

##### General settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the HTTP Request activity.      |
| Activity Description | (Optional) Enter a description for the activity. |

##### HTTP Request settings

| **Parameter**                                              | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use Authenticated Endpoint                                 | Enables the ability to make an HTTP request to an authenticated endpoint. By default, this toggle button is on.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Connector                                                  | Choose the Connector from the drop-down list. The drop-down list displays the name of the Connectors configured in the Control Hub. The Connector provides a common location to store credentials for the service you want to access. For example, the Salesforce Connector validates and allows connectivity to the Salesforce account. You can then reference this Connector from within the HTTP Request activity to make a request. This essentially creates the domain section of the URL. To configure a connector on the Control Hub, see the [Set Up Integration Connectors for Webex Contact Center](https://help.webex.com/en-us/article/7fuy63/Set-Up-Integration-Connectors-for-Webex-Contact-Center) article.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Request Path                                               | Enter the request path for the HTTP request. This field displays when the **Use Authenticated Endpoint**toggle button is on.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Request URL                                                | Defines the request URL which spans both domain and request paths for unauthenticated endpoints. This field displays when the **Use Authenticated Endpoint**toggle button is off.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Method Types: GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD | Defines the HTTP request activity that supports the following popular methods: GET: Request data from a specified resource. POST: Send data to a server to create or update a resource. PUT: Replaces all current representations of the target resource with the request payload. PATCH: Apply partial modifications to a resource. DELETE: Delete the specified resource. OPTIONS: Describe the communication options for the target resource. HEAD: Asks for a response identical to that of a GET request, but without the response body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Query Parameters                                           | Defines parameters that you pass as part of the HTTP Request. The web server provides these extra parameters to use, for example, to make a GET Request. In the Key‐Value columns, enter the key for the query and the associated value that you need to send with the query. The parameters are a list of key-value pairs that are separated with the ampersand (&) symbol. You can also use the variable values in the double curly braces syntax to pass variable values.For example, if you want to fetch the account balance of a customer based on the ANI, depending on the data store service APIs, the key, and value can be:Key: ANI Value: {{NewPhoneContact.ANI}}  To add a query parameter, click **Add New**. This adds a row where you can enter the respective key-value pairs. You can add as many query parameters as required as part of the HTTP Request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| HTTP Request Headers                                       | Defines the HTTP headers that let the client pass additional information with an HTTP request. Request headers such as Accept, Accept‐\*, or If‐\* allow to perform conditional requests along with other headers such as Cookie and User‐Agent.  For example, as part of a GET Request, use: GET /home.html HTTP/1.1  Host: developer.mozilla.org  User Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0)  Gecko/20100101 Firefox/50.0  Accept: text/html,application/xhtml+xml,application/xml;q=0.9,\*/\*;q=0.8  Accept Language: en‐US,en;q=0.5 Accept Encoding: gzip, deflate, br  Referer: https://developer.mozilla.org/testpage.html  Connection: keep‐alive  Upgrade‐Insecure‐Requests: 1  If‐Modified‐Since: Mon, 18 Jul 2016 02:36:04 GMT  If‐None‐Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a" Cache‐Control: max‐age=0 To add an HTTP Header, click **Add New**. This adds a row where you can enter the respective key‐value pairs. You can add as many HTTP headers as required as part of the HTTP Request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Content Type                                               | Specifies the expected content type of the request body. The supported Content Types include: Application/ JSON Form URL Encoded TOML XML File YAML Form Data GraphQL Other                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Request Body Value                                         | Specifies the data bytes transmitted in an HTTP transaction message, immediately following the headers if there are any. In certain types of HTTP Requests such as a POST or PUT request, you can send a request body that specifies the content to update at the target resource. Choose the Content Type as File. The CONTENT and FILE NAME columns appear. The CONTENT drop-down displays the list of JSON variables from the flow and output variables from the Record activities.CONTENT—Choose the recorded audio file from the drop-down list. The audio file is populated based on the output variables configured in the [Record](#record-activity)activities. The system sends this audio file to the third-party server or API. FILE NAME—Enter the name of the audio file. This file name appears on the destination server or API. The **Form Data** content type captures form data in key-value pairs. This field supports uploading of files and form data, and is useful for uploading audio files. If you choose the content type as **Form Data**, the following fields appear: Key—Use this as the key to access the data. It is also used in the **Content-Disposition** header.Type—The type can be either Text or File.Value—Configure the value (Text in JSON format defines the **Content-Type** along with other parameters such as the name for the file and so on. **&& File** contains the actual file data. Form Data supports referencing the file name from the Record activity for use in recording prompts and greetings via flow. For 'File' choose the variable that yields the file name corresponding to the record activity's output variable. If you choose the Content Typeas GraphQL , the Query and GraphQL Variables field appear. These fields are used to capture the data and variables.Query—The query parameter is required and should contain the source text of a GraphQL document.GraphQL Variables—The variables represent the dynamic values for the query. With GraphQL support, you can make requests to any API that supports GraphQL natively, such as when using the WebexCC API Connector to call the Search API. This enables use cases where reporting data can be used for custom logic and routing decisions. If you choose the Content Typeas Other, then you can specify the content type that you need (if the API requires a Content Typeheader that is not available in the flow designer). Thus, you can choose a different content type than the standard types supported. |
| Response Timeout                                           | Specifies the connection timeout for the HTTP Request. Default is set at 2000 milliseconds, however it can have any unlimited value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Number of Retries                                          | Specifies the number of times the HTTP Request is attempted after failure. Retry for service is unavailable. You can give any unlimited value for number of retries. This parameter is used if the status code is 5xx; for example, 500 or 501.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

##### Parse Settings

This section enables you to parse the response generated from the HTTP Request into different variables. This configuration is optional because not all HTTP Request scenarios require parsing.

__Table 54\. Parse Settings__
| **Parameter**   | **Description**                                                                                                                                                                                                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Content Type    | Specifies the expected content type of the response body. The content types include: JSON TOML XML YAML are the supported content types.                                                                                                                                                                                                                     |
| Output Variable | Choose a variable to contain the data from a specific section of the HTTP Request response object.                                                                                                                                                                                                                                                           |
| Path Expression | Define the Path Expression for parsing the response object. Depending on the response object data structure and the reason to extract a subset of information, the Path Expression varies. Data is normalized to an object hierarchy before Path Expression execution, so JSONPath is used in the response object regardless of the configured Content Type. |

##### Output Variables

The HTTP Request returns the following output variables:

- **`HTTPRequest1.httpStatusCode`**: Returns the status code of the HTTP.  
These response codes are classified into five main categories:  

  - Informational responses (100–199)
  - Successful responses (200–299)
  - Redirects (300–399)
  - Client errors (400–499)
  - Server errors (500–599)
- **`HTTPRequest1.httpResponseBody`**: Returns the response body for the HTTP Request.
- **`HTTPRequest1.httpResponseHeaders`**: Returns the header information from the response.

##### Decryption Settings

You can decrypt the output variables of the HTTP Request activity. If decryption is enabled at the flow level, users with debug decryption access can view the unmasked output values of the HTTP Request activity in the flow debug logs. Turn off the Enable decryption toggle to disable decryption at the activity level for additional protection.

##### Content Type Formats

The following examples describe sample input Content Type formats and the JSON response.

##### Content Type XML

Use this tool to convert XML into JSON format <https://codeshack.io/xml-to-json-converter/>.

XML Input Format: 

```
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Test application</body>
</note>

```

Data/JSON Normalized Response

```
{
   "note": {
      "to": "Tove",
      "from": "Jani",
      "heading": "Reminder",
      "body": "Test application"
   }
}

```

Example JSON Path Expression: Use `$.note.from` to get the value as `Jani`.

##### Content Type TOML

Use this tool to convert TOML to JSON format <https://www.convertjson.com/toml-to-json.htm>.

TOML Input Format: 

```
title = "TOML Example"
[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00

```

Data/JSON Normalized Response

```
{
   "title": "TOML Example",
   "owner": {
      "name": "Tom Preston-Werner",
      "dob": "1979-05-27T15:32:00.000Z"
   }
}

```

Example JSON Path Expression: Use `$.owner.name` to get the value as `‘Tom Preston-Werner’`.

##### Content Type YAML

Use this tool to convert YAML to JSON format <https://www.convertjson.com/yaml-to-json.htm>.

YAML Input Format: 

```
# An employee record
martin:
  name: Martin D'vloper
  job: Developer
  skill: Elite

```

Data/JSON Normalized Response

```
{
   "martin": {
      "name": "Martin D'vloper",
      "job": "Developer",
      "skill": "Elite"
   }
}

```

Example JSON Path Expression: Use `$.martin.job` to get the value `Developer`. 

##### Content Type JSON

Use the JSON Expression Evaluator <https://jsonpath.com/>.

JSON Input Format: 

```
{
   "martin": {
      "name": "Martin D'vloper",
      "job": "Developer",
      "skill": "Elite"
   }
}

```

Data/JSON Normalized Response

```
{
   "martin": {
      "name": "Martin D'vloper",
      "job": "Developer",
      "skill": "Elite"
   }
}

```

Example JSON Path Expression: Use `$.martin.job` to get the value `Developer`.

##### Activity Wait Settings

In certain cases, should an HTTP response experience a notable delay, the caller experience a period of silence. To mitigate this scenario, it's feasible to upload an audio file. This file will be played to the caller during the interim of HTTP response retrieval. Additionally, it's possible to configure the duration of the delay before this audio is played.

| Parameter            | Description                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enable Audio on Wait | Toggle this setting to play the selected audio file in a continous loop ensuring an uninterrupted playback while system retrieves HTTP response. |
| Audio File           | Choose an audio file. System plays this audio file to the caller to fill the silence while it retrieves an HTTP response.                        |
| Delay                | Set the delay time value in milliseconds according to requirements. The default value is preset to 2000 milliseconds.                            |

It's best to keep the delay setting above 2 seconds and try to optimize the HTTP query response time. This ensures that the audio doesn't play unnecessarily while ensuring a minimum delay for dead air to the caller.

##### Related flow templates

The following templates use the HTTP Request activity:

- [Avoid duplicate callback](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#reference-template%5F8c8999ce-6d11-4168-ae8f-36085618f364)
- [Audio prompt and recording](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#reference-template%5F794e1a63-811d-4dd9-9eab-d5fd6488ea90)
- [Last agent routing template](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5Ff7da7919-b062-4ec3-8ed3-df9d8a4cd7ab)
- [Microsoft Dynamics HTTP(S) data dip](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5F5e2fc3c7-8137-4ae2-ba49-9b2972bcc4ec)
- [Salesforce HTTP(S) data dip](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5Fbaf8dd9a-2b54-42df-b87d-ad2301a7787c)
- [ServiceNow HTTP(S) data dip](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5F22ab73db-0b66-4ef3-b190-9a16575fcbfa)
- [Zendesk HTTP(S) data dip](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5Fa004ee33-3f02-4dea-98d6-9b1bc3e9f3af)

#### Parse

Use the Parse activity to extract information from the data object. The Parse activity takes input string (JSON, TOML, XML, and YAML) and converts it into a JSON structure based on the specified data. You can then assign the JSON structure to a variable using a JSON path expression. 

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Configure error handling](#Cisco%5FConcept.dita%5F4079aa76-8682-4cbc-b7fd-d84fcb358568).

The following sections enable you to configure the Parse activity:

- [General Settings](#section%5Fvts%5Fw31%5Fkrb)
- [Content Type Formats](#section%5Fgfn%5F3dx%5Fl4b)

##### General Settings

| **Parameter**        | **Description**                                 |
| -------------------- | ----------------------------------------------- |
| Activity Label       | Enter a name for the activity.                  |
| Activity Description | (Optional) Enter a description for the activity |

##### Parse Settings

| **Parameter**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Input Variable  | Specifies the variable that stores the data object to use for parsing.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Content Type    | Specifies the expected content type of the data object. JSON, TOML, XML, and YAML are supported content types.                                                                                                                                                                                                                                                                                                                                                                                  |
| Output Variable | Choose a variable to contain the data from a specific section of the HTTP Request response object.                                                                                                                                                                                                                                                                                                                                                                                              |
| Path Expression | Define the Path Expression for parsing the response object. Depending on the response object data structure and the reason to extract a subset of information, the Path Expression varies. Data is normalized to an object hierarchy before Path Expression execution, so JSONPath is used in the response object regardless of the configured Content Type. Path Expressions should confirm to Jayway JSONPath expressions. For more information, see <https://github.com/json-path/JsonPath>. |

##### Content Type Formats

The following examples describe sample input Content Type formats and the JSON response.

##### Content Type XML

Use this tool to convert XML into JSON format <https://codeshack.io/xml-to-json-converter/>.

XML Input Format: 

```
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Test application</body>
</note>

```

Data/JSON Normalized Response

```
{
   "note": {
      "to": "Tove",
      "from": "Jani",
      "heading": "Reminder",
      "body": "Test application"
   }
}

```

Example JSON Path Expression: Use `$.note.from` to get the value as `Jani`.

##### Content Type TOML

Use this tool to convert TOML to JSON format <https://www.convertjson.com/toml-to-json.htm>.

TOML Input Format: 

```
title = "TOML Example"
[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00

```

Data/JSON Normalized Response

```
{
   "title": "TOML Example",
   "owner": {
      "name": "Tom Preston-Werner",
      "dob": "1979-05-27T15:32:00.000Z"
   }
}

```

Example JSON Path Expression: Use `$.owner.name` to get the value as `‘Tom Preston-Werner’`.

##### Content Type YAML

Use this tool to convert YAML to JSON format <https://www.convertjson.com/yaml-to-json.htm>.

YAML Input Format: 

```
# An employee record
martin:
  name: Martin D'vloper
  job: Developer
  skill: Elite

```

Data/JSON Normalized Response

```
{
   "martin": {
      "name": "Martin D'vloper",
      "job": "Developer",
      "skill": "Elite"
   }
}

```

Example JSON Path Expression: Use `$.martin.job` to get the value `Developer`. 

##### Content Type JSON

Use the JSON Expression Evaluator <https://jsonpath.com/>.

JSON Input Format: 

```
{
   "martin": {
      "name": "Martin D'vloper",
      "job": "Developer",
      "skill": "Elite"
   }
}

```

Data/JSON Normalized Response

```
{
   "martin": {
      "name": "Martin D'vloper",
      "job": "Developer",
      "skill": "Elite"
   }
}

```

Example JSON Path Expression: Use `$.martin.job` to get the value `Developer`.

#### Condition

The Condition activity represents a decision. The flow takes the True or False path depending on whether the condition is met. 

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](#EventFlows).

The following sections enable you to configure the Condition parameters and outputs:

- [General Settings](#section%5Fuw5%5F131%5Fkrb)
- [Expression](#section%5Fnl4%5F131%5Fkrb)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Expression 

Wrap each expression as follows: `{{Enter Expression}}`.

Example: `{{HTTPRequest1.httpStatusCode == 200}}`

If you use an expression without braces, the system throws a Flow Error.

__Table 56\. Expression__
| **Condition** | **Description**                                                                                                                                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Condition     | Choose the Condition from the drop‐down list: < (less than) != (not equal) \> (greater than) \== (equal to) \>= (greater than or equal to) <= (less than or equal to) \* (multiplied by) / (divided by) \+ (add) ‐ (subtract) |

#### Case

Use the Case activity if there are multiple possibilities or outcomes at a certain decision point in your call flow.

For example, you can use a Case activity to define different screen pops for different agent teams depending on the team name. Each Case becomes a branch from which you define the appropriate paths. The flow proceeds down the path that evaluates as true for a particular instance of the flow. Each Case activity has a default that the system uses for any undefined case. If none of the cases are true, the default Case is evaluated as true and the flow proceeds along that branch.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event Flows](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#events-in-flow-designer).

The following sections enable you to configure the Case activity:

- [General Settings](#section%5Fv4k%5Fxk1%5Fkrb)
- [Case](#section%5Fisg%5Fcl1%5Fkrb)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Case

__Table 57\. Case settings__
| **Parameter** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Variable      | Choose a variable against which you want to evaluate the different cases. Choose the variable from the drop-down list.                                                                                                                                                                                                                                                                                                                                             |
| Expression    | Enter an expression to evaluate the different cases against. Use the Pebble Template syntax to define the expression. For more information on the Pebble Template Syntax, see [Pebble template syntax](#Cisco%5FConcept.dita%5F9a750452-028a-4114-aa7a-7a37fab78b8f).                                                                                                                                                                                              |
| Case          | Defines the different cases to compare to the variable or expression. You can add up to 20 case statements per activity. Click **Add New** to add a new case statement block to compare against a static value, a variable, or an expression. If you use a variable or expression, use the Pebble Template Syntax. For more information on the Pebble Template Syntax, see [Pebble template syntax](#Cisco%5FConcept.dita%5F9a750452-028a-4114-aa7a-7a37fab78b8f). |

__Table 58\. Activity Outcomes__
| **Output** | **Description**                           |
| ---------- | ----------------------------------------- |
| **True**   | Path to take if the condition is met.     |
| **False**  | Path to take if the condition is not met. |

#### GoTo

Flow chaining gives you the ability to chain multiple flows. To achieve flow chaining, you can add the GoTo terminating activity to the canvas and indicate if the current flow should go to an entry point or another flow. For more information, see [Link multiple flows (with GoTo)](#Cisco%5FConcept.dita%5F9ec1dcdf-ce8c-4112-b7ff-c8a517be85be).

Use the GoTo node to move contacts within Webex Contact Center, such as between entry points or flows. Use flow variable mapping to seamlessly transfer data along with the contact.

If the activity library does not display the GoTo activity, contact Cisco Support to have the corresponding feature flag enabled.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see [Event flows](#EventFlows).

The following sections enable you to configure the GoTo activity:

- [General Settings](#section%5Fycx%5F4m1%5Fkrb)
- [Flow Destination Settings](#section%5Fafc%5Frm1%5Fkrb)
- [Flow Variable Mapping](#section%5Fcb5%5Fqm1%5Fkrb)
- [Goto Activity Error Codes](#section%5Fylt%5Fbmq%5Ffcc)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Flow Destination Settings

You can modify the caller's experience based on time (if handing off the call to an entry point), or to reuse a single flow in multiple scenarios (if handing off the call to a flow). 

Based on the GoTo option, the flow variables are passed on from the current flow as follows:

- Go to Entry Point: The custom flow variables and global variables with the same name and data type are copied from the current flow to the flow that is associated with the entry point.
- Go to Flow: The flow variables that are configured in the [Variable Mapping](#section%5Fcb5%5Fqm1%5Fkrb) section are copied from the current flow to the new flow.

__Table 59\. Flow Destionation Settings__
| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Go to Entry Point** | Choose this option if the current flow should go to an entry point. In the combo box, enter the entry point if the flow logic should change based on the active routing strategy at the time of transfer. The custom flow variables and global variables with the same name and data type are copied from the first flow to the new flow associated with the entry point. Only the telephony entry points that are created in the Webex Contact Center Control Hub are displayed. **Static Entry Point:** Choose an entry point from the list of pre-configured entry points. Only entry points of the same channel type are valid. **Dynamic Entry Point:** Choose a variable that maps to a valid entry point ID from the Control Hub. Only entry points of the same channel type are valid. |
| **Go to Flow**        | Choose this option if the current flow should go to another flow. In the combo box, choose the destination flow from the drop-down list. The destination drop-down list lists only the published flows. You can view the desired flow in a separate tab. To view a flow, you can either click the **View** option that appears while you are selecting a flow from the list or click **View Selected Flow**option after you have selected a flow in the GoTo Flow option. You can manually map variables across two flows in the **Flow Variable Mapping** section. **Static Flow:** Select a flow from the list of pre-configured flows. **Dynamic Flow:** Choose a variable that maps to a valid Flow ID. You can locate the Flow ID on the Flow Settings under the General Settings pane.   |

##### Flow Variable Mapping

If you choose the **Go To Flow** option, the Flow Variable Mapping section is displayed. Flow variables and global variables with the same name and same data type between flows are automatically mapped for inbound calls. For outbound calls only global variables are mapped automatically; automatic mapping of flow variables is not supported.

This feature helps you to edit, delete, or add more variable mappings between the current flow and the destination flow.

You can't map variables for Flows in a GoTo Activity when using Variable Flows. You can only map variables to Static flow targets. Refer to the table below for the behavior of variable mapping with Variable Flows. 

When you map a JSON variable from a main flow to the target flow in GoTo activity, store the JSON output in another variable such as a string or any other variable type, and map that to the same type of variable in the target flow.

__Table 60\. Flow Variable Mapping__
| **Parameter**               | **Description**                                                                                                                                                                                                                                                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Map Current Variables**   | Lists all the flow variables and global variables in the current flow. You can map the same variable to multiple variables in the destination flow. In the combo box, enter the variable to be mapped.                                                                                                                                              |
| **To Destination Variable** | List of all the flow variables and global variables in the destination flow that will be copied from the current flow after hand-off. In the combo box, enter the variable that is mapped in the destination flow. You can map the variables in the destination flow only once, while you can map the variables in the current flow multiple times. |

To add, edit, or delete variable mappings:

- To edit a variable mapping, choose the appropriate flow from the drop-down list.  
After you choose a variable in either the **Map Current Variables** or **To Destination Variable** drop-down lists, the other drop-down list displays only the variables of the same data type.  
For example, if you choose `customerId` of type `Integer` from the **Map Current Variables**drop-down list, the **To Destination Variable** drop-down list displays only variables of type `Integer` in the new flow.
- Click the Delete icon to delete a variable mapping.
- Click **Add New** to add a new variable mapping. Choose the variables to be mapped in the **Map Current Variables** and **To Destination Variable** drop-down lists.

##### Variable Details

The **Current Flow Variable Details** section displays all of the flow and global variables in the current flow.

The **Destination Flow Variable Details** section displays all of the flow and global variables in the destination flow.

 You can click on the tag for information about a variable. When you select a variable for mapping, the variable turns green that helps you see what has already been mapped.

To ensure seamless information accessibility and interaction throughout the call lifecycle, variable mapping is crucial during flow execution. It involves the strategic alignment of Global Variables with both local and Agent Viewable Flow variables, tailored for both static and dynamic flow types:

Variable mapping is important during Flow Chaining. The table below explains key differences between using static and dynamic GoTo options.

| **Static**  | **GoTo Flow:** It handles the Variables mapped in the Flow Variable Mappings section. **GoTo Entry Point:** Agent viewable Flow variables and Global Variables are mapped automatically when transferring to an entry point. |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dynamic** | **GoTo Flow:** Agent viewable Flow variables and Global Variables are mapped automatically. **GoTo Entry Point:** Agent viewable Flow variables and Global Variables are mapped automatically                                |

##### Goto Activity Error Codes

| **Failure Code** | **Failure Description** | Explanation                                                                          |
| ---------------- | ----------------------- | ------------------------------------------------------------------------------------ |
| 1                | FailureCode             | Stores the failure code. The system sets this value only when the activity fails.    |
| 2                | FailureDescription      | Stores the failure details. The system sets this value only when the activity fails. |

#### Business Hours

The Business Hours activity enables you to use working and nonworking hours such as holidays, and overrides in your organization that are defined in Control Hub. You can add the Business Hours activity into a flow and assign that flow to an entry point. Using this activity, you can consume working hours, holidays, and overrides to consolidate multiple routing strategies for all their schedules into a single flow.

Use the Business Hours activity to program a schedule of operation in a flow. This activity determines if a certain schedule is active at any given time and routes the execution of the flow accordingly.

Administrators can manage business hours entities from Control Hub. For more information, see [Set up Business Hours](https://help.webex.com/en-us/article/dqekw4/Set-up-business-hours-for-Webex-Contact-Center).

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during the flow execution. For more information, see [Configure error handling](#Cisco%5FConcept.dita%5F4079aa76-8682-4cbc-b7fd-d84fcb358568).

The following sections enable you to configure the Business Hours activity:

- [General settings](#section%5Fgmj%5F2wz%5Fjrb-1)
- [Schedule details](#section%5Ffbd%5F2wz%5Fjrb-2)
- [Output variables](#section%5Fbvt%5Fhvz%5Fjrb-5)

##### General settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the activity.                   |
| Activity Description | (Optional) Enter a description for the activity. |

##### Schedule details

In the Schedule Details section, you can choose a business hour from the drop-down list to define when different paths of the flow are executed. Schedule indicates the shift that is defined in the working hours object of the chosen business hour. The flow gets executed primarily based on the timeframe defined in the shift of the chosen business hour. Other business hours entities like holiday lists and overrides take precedence over the working hours if the timings coincides with the current shift timing.

- **Static Business Hours:** Choose a Business hour from the Control Hub.
- **Variable Business Hours:** Choose a variable that maps to a valid Business Hour from the Control Hub.  
The variable must contain the correct Business Hour ID obtained from Control Hub. If the ID is invalid, the flow moves to the error path.

If any of the ordered list inputs is empty, Flow Designer throws a flow validation error. You must resolve these errors before publishing the flow.

##### Business hours nodes

You can configure the following nodes in the Business Hours activity:

| **Parameter** | **Description**                                                                                                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Overrides     | If the current time is defined as an override as in the Overrides list, the activity takes the Override branch regardless of the shift timings mentioned in the chosen working hours.                                 |
| Holidays      | If the current day is a holiday as defined in the Holidays List, the activity takes the Holidays branch regardless of the shift timings mentioned in the chosen working hours.                                        |
| Working Hours | This is the primary node that considers the shift timing mentioned in the selected business hour in the Schedule Details section. The activity takes this branch if the current time matches the chosen shift timing. |
| Default       | The activity takes the Default branch if none of the above evaluates.                                                                                                                                                 |

##### Output variables

The Business Hours activity employs the following output variables.

__Table 62\. Business Hour activity output__
| Variable name           | Description                                                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| WorkingHoursShift\_name | During the flow execution, this variable stores the name of the shift defined in the working hour.                                       |
| Holidays\_Name          | During the flow execution, this variable stores the name of the holiday if the current day is a holiday as defined in the Holidays List. |
| Overrides\_Name         | During the flow execution, this variable stores the name of the override that matches with the current time as defined in the Overrides. |
| status                  | This variable stores which of the node was chosen during the flow execution, such as working hours, holidays, override, or default.      |

#### Wait

The Wait activity enables you to pause the flow execution for a specified duration. When you configure this activity with the wait period, the flow execution pauses for the duration specified in the Wait activity in the execution path.

We don't recommend usage of the Wait activity when an IVR session is active as it may cause the IVR session to time out. In such cases, contact will experience dead air resulting in call failures. We strongly recommend flow designers to use the Wait activity in the `CallbackFailed` event and specify the wait period.

The Wait activity is generic in nature. When you design a flow, you can place this activity after any activity as per your requirement. For example, during callback retry, this activity pauses the flow execution and retries the callback.

The following sections enable you to configure the Wait activity:

- [General Settings](#section%5Fx5q%5F1k1%5Fwait)
- [Wait Settings](#section%5Fwlt%5Flj1%5Fwait%5Fsettings)
- [Output Variables](#section%5Fckv%5F5j1%5Fkrb%5Fwait)

##### General Settings

| **Parameter**        | **Description**                                  |
| -------------------- | ------------------------------------------------ |
| Activity Label       | Enter a name for the Wait activity.              |
| Activity Description | (Optional) Enter a description for the activity. |

##### Wait Settings

| **Parameter** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duration      | Choose a duration in HH:MM:SS format to specify the time duration for which the flow execution pauses with a minimum of 10 seconds and a maximum of 72 hours.Click on the Duration field to set the time. If you enter the minutes and seconds fields to more than 59, it automatically defaults to 59\. If you set the hours field to more than 72, it prompts you to enter the duration between 00:00:10 and 72:00:00.Currently there’s a deviation up to a few milliseconds while executing this activity. Don't use the wait activity in use cases that require high precision. |

##### Output Variables

No output variable is available in this activity.

#### Percentage Allocation

The Percentage Allocation activity enables you to distribute call traffic across different paths in a flow. You can use this activity as a flow branching mechanism across multiple flow paths and create multiple exit paths to allocate contacts to different queues, sites, and external servers.

The system uses a Weighted Round Robin (WRR) algorithm to distribute traffic and this may create imbalances. The algorithm resets every time you publish the flow. We recommend you to test the flow execution before deploying changes into production.

Let's take an example of a percentage distribution of 50%, 30% and 20% respectively to understand the distribution of 10 calls under WRR. Eventually, the system will distribute calls evenly, such as 5 in exit path 1, 3 in exit path 2, 2 in exit path 3\. However, this happens dynamically in an adjusted manner with the weights of 5:3:2\. One possible outcome of distribution is as follows, taking 10 consecutive calls such as Path1, Path2, Path1, Path2, Path3, Path1, Path2, Path3\. It is important to note that this is one possible distribution and that contact distributions are adjusted with varying load distributions.

The percentage allocation activity now allows percentage values ranging from 0 to 100\. Administrators can utilize the 0% setting to create switchboard use cases. This allows the traffic to be turned off by default. However, you can activate these connections later to allocate distributions greater than 0%.

Moreover, you can add the Percentage Allocation activity before the Feedback activity to configure how you want to manage the call traffic. You can allocate 50% of feedback via email, 30% from SMS, and 20% from survey.

Similarly, in a geographically diverse environment, you can configure the Percentage Allocation activity to send 10% of contacts to Boston, 5% to Chicago, and distribute the remaining 85% to another set of locations.

You can configure an error-handling path (Undefined Error) to handle system errors that may occur during flow execution. For more information, see Error Handling. 

Before you begin

| 1 | In Flow Designer, drag and drop the Percentage Allocation activity from the Activity Library to the main canvas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the Percentage Allocation activity to configure the activity settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3 | In General Settings: In the Activity Label, enter a name for the activity. (Optional) In the Activity Description field, enter a description for the activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 4 | In Percent Allocation, create the required allocation paths. Initially, the system sets the allocation default path to 100%. You can edit the percent value and description, and also add new paths. Click Add New to create a new path. Enter the percentage and path name. You can allocate a minimum of 0% and a maximum of 100% per exit path. Ensure that all the allocations add up to 100%. The system throws an error while validating the flow if the allocation percentage does not meet or exceed 100%. You can add a maximum of 10 paths. (Optional) Click the Delete icon beside a path to remove the record. You may choose to adjust the percentage with the required set of connections and delete the additional ones as well. The system throws an error if the total allocations aren't adding up to 100%. The percentage allocation activity has the following output variables: **Percentallocation.percentage** \- Stores the next percentage route. **Percentallocation.description** \- Stores the description. |

#### Support for workflows in Outdial Entry Point

The following activities and events are supported when you create workflows for outdial voice contacts: 

- HTTP Request
- Condition
- Parse
- Set Variable
- Business Hours
- End Flow
- Screen Pop
- PreDial event

All event handlers as applicable are supported. Event handlers such as PreDial event, Agent Offered and so on, will be populated based on the activities that you add in the main flow. Global variables and local variables are supported as part of the flow.

The following activities are not supported when you create workflows for outdial voice contacts:

- Queue Contact
- Queue To Agent
- Callback
- Queue Lookup
- Advanced Queue Information
- Blind Transfer
- Escalate Call Distribution Group
- IVR message
- Menu
- Survey

Based on the above activities, the system will gracefully support the error and success paths seamlessly.

- When you design a flow for Outdial Entry Point, don't include a Disconnect Contact activity at the end of the flow. If you use a Disconnect Contact activity in the flow, this causes the flow to end the call and prompt a wrap-up, while the outdial call is actually active and connected.

### Event flows

The [Event flows](#EventFlows) tab contains the following event handlers that you use across different activities:

- [OnGlobalError](#section%5Fz35%5Fx1s%5F3hc)
- [AgentAnswered](#section%5Fxlf%5Fbbs%5F3hc)
- [PhoneContactEnded](#section%5Fity%5Fcbs%5F3hc)
- [AgentOffered](#section%5Fvdf%5Fhbs%5F3hc)
- [AgentDisconnected](#section%5Fy5s%5F3bs%5F3hc)
- [CallbackFailed](#section%5Fyx3%5Fkbs%5F3hc)
- [PreDial](#section%5Fkpb%5Ftbs%5F3hc)
- [ContactAniUpdated](#section%5Fum3%5Fzbs%5F3hc)
- [OutboundCampaignCallResult](#section%5Fbww%5Ffcs%5F3hc)

#### OnGlobalError

This event facilitates the global error handling. The system triggers this event when you don't configure the error path links on an activity. All [_Activities in Call Handling_](#Cisco%5FGeneric%5FTopic.dita%5F7cfdcd9f-093c-4f7e-a72b-4d452543926c) and [_Activities in Flow Control_](#Cisco%5FGeneric%5FTopic.dita%5Fd3319a95-e796-43d4-8e2d-c77d61d3c4d5) expose this event. For more information, see [_OnGlobalError Workflow_](#Cisco%5FReference.dita%5F3bf850b3-4cd8-4334-b7af-85eaa3749453).

#### AgentAnswered

The system triggers this event when an agent answers an inbound call and interrupts the contact's experience in a queue. This event is triggered directly for progressive, predictive, and preview campaign calls once the agent answers the call.

Activities that open up this event are [_Screen Pop_](#Cisco%5FGeneric%5FTopic.dita%5F062203a9-f968-491e-b319-8b27e2f990d2) and [_Queue Contact_](#Cisco%5FGeneric%5FTopic.dita%5Fc93b6399-3cd7-4c86-9e82-48a82469fb8e).

#### PhoneContactEnded

The system triggers this event when a live call disconnects, and removes all participants. The event is available if you use selected call handling activities in a flow such as [_Screen Pop_](#Cisco%5FGeneric%5FTopic.dita%5F062203a9-f968-491e-b319-8b27e2f990d2) and [_Feedback_](#reference%5FB06B1EB2FD9E1DFD3C56B0C423252902). This event doesn't require escalation to an agent.

When you create a flow, don’t add any IVR activity after the `PhoneContactEnded` event. During the flow execution, the flow won't work when you add an activity after the contact ends.

Only the [_Queue Contact_](#Cisco%5FGeneric%5FTopic.dita%5Fc93b6399-3cd7-4c86-9e82-48a82469fb8e) activity exposes this event.

#### AgentOffered

The system triggers this event when a voice contact is offered to an agent. This event allows the flow developer to configure multiple supported activities that are part of event handling. For example, a flow developer can configure a Screen Pop activity against an AgentOffered event. This configuration provides customer-related information to the agent, before the agent takes or answers a call. This event is associated with `NewPhoneContact`.

 The `AgentOffered` event isn't supported for progressive, predictive, and preview campaigns.

You can view the related variables in [Event Output Variables](#Cisco%5FConcept.dita%5F711df3fb-a535-43b3-b9d2-fdc5322f96d5).

#### AgentDisconnected

The system triggers this event when the last agent disconnects from a live call, leaving the customer alone on the line.

The [_Queue Contact_](#Cisco%5FGeneric%5FTopic.dita%5Fc93b6399-3cd7-4c86-9e82-48a82469fb8e) activity exposes this event.

#### CallbackFailed

The system triggers this event when a courtesy callback or a scheduled callback or a personal scheduled callback fails.

- The system retries a callback only when a callback fails from the contact's end. The callback fails when the contact is busy or unavailable, or there's no answer from an agent.
- Also, the call fails from the agent end when an agent's phone isn't reachable or the agent declines the call. The call moves back to the queue and routes again to an available agent.
- Also, for scheduled callbacks, the callback fails when the scheduled end time has reached without the call being routed to an agent. For personal scheduled callbacks, the callback fails also when the assigned agent is not logged in.

To use a retry callback in a flow, configure a local flow variable (using SetVariable activity) with value 0 and increment it as required. Ensure that the value is less than the Retry variable count value.

You can attach other events that you require in the flow to attempt a callback retry. Include a [Wait](#wait-activity) activity followed by a [_Callback_](#Cisco%5FConcept.dita%5F2a7326f7-67da-4157-bab1-e477b219ec7e) or any of the queuing activities such as Queue To Agent and Queue Contact in the flow. Use these activities in any combination or order after the Wait activity.

To end the retries:

- For a true condition, use End Flow activity. Don't use a Disconnect activity.
- For a false condition, use a Disconnect after a Retry variable is configured in the flow. In this case, all the retry attempts are complete and there are no retries available.

The maximum number of callback retry attempts are 10\. The maximum time the interaction can stay in the system is 14 days. Whichever occurs first is considered as the life of an interaction for configuring a retry.

When you use a Wait activity, the minimum delay interval between retry is 10 seconds, and the maximum delay interval between retry is 72 hours.

When the state of a contact is in parked timeout, and if retry attempts are available, a CallbackFailed event generates. The configured event handler in the flow continues to retry the callback for the remaining attempts.

When a callback to a contact fails, the contact is dequeued, and the CallbackFailed event generates. The retry handler can queue it again using any of the activities like Callback (same or different destination), Queue Contact, and/or Queue To Agent.

If callback is configured to a different destination in `CallbackFailed` event handler, skills won't be carried forward.

For scheduled callback or personal scheduled callback–in the retry flow–use NewPhoneContact.DNIS in the Callback activity if configured.

#### PreDial

As part of NewPhoneContact, the PreDial event enables the flow developer to set or customize the caller ID using the Set Caller ID activity.

When you create a workflow, this event is available on the Event Flows tab of Flow Designer. This is an event which is terminated by configuring Set Caller ID activity. This event is triggered for both agent and customer based on the call scenario. 

For campaign calls to succeed, the agent calls and customer calls must be made from the same media region. The media region is selected based on the ANI/CLID of the call when presented to media. The mapping between the ANI and the media region is performed in Control Hub. The ANIs which are selected on the agent call and the customer call, if controlled via the PreDial event in the flow, should be chosen such that both calls emanate from the same region.

For example, if an agent is located in Singapore, but the customer calls are to be made in the United States, the ANI for the customer call may be selected such that the media region is the US. Similarly, the ANI selected for the agent call in the PreDial event should also be chosen such that the media region selected is the US.

The following table provides the list of operation types and the corresponding participant types for `PreDial.operationType`.

__Table 63\. PreDial.operationType related operation and participant types__
| PreDial.OperationType | PreDial.ParticipantType |
| --------------------- | ----------------------- |
| INBOUND               | Agent                   |
| OUTDIAL               | Agent, Customer         |
| COURTESY\_CALLBACK    | Agent, Customer         |
| PREVIEW\_CAMPAIGN     | Agent, Customer         |
| WEB\_CALLBACK         | Agent, Customer         |
| TRANSFER\_TO\_DN      | DN                      |
| TRANSFER\_TO\_AGENT   | Agent                   |
| CONSULT\_TO\_DN       | DN                      |
| CONSULT\_TO\_AGENT    | Agent                   |
| CONSULT\_TO\_QUEUE    | Agent                   |
| CONSULT\_TO\_EP\_DN   | EP-DN                   |

Customize ANI is not applicable for Supervisor when call monitoring is configured.

Configure every PreDial event handler path with Set Caller ID as a terminal activity, otherwise the contact can be abandoned.

Flow support is required for any inbound or outbound scenario to use PreDial event handler.

Do not use flow activities that queue a contact with the PreDial event handler.

For ANI configured against an outbound contact, the call is routed through the region the Agent ANI is mapped to regardless of the region where the contact is located. For example, if an organization has contact centers in the US and Australia and an outbound call is triggered for a contact that is located in the US with the Agent ANI mapped to the Australia region, the call is routed through Australia.

Refer to the table _ANI usage for multiple scenarios in a Next Generation environment_ in [Set Caller ID](#wxcc-setcallerid) section for ANI usage in various call scenarios.

You can view the related variables in [Event Output Variables](#Cisco%5FConcept.dita%5F711df3fb-a535-43b3-b9d2-fdc5322f96d5).

#### ContactAniUpdated

The system triggers this event when ANI of the caller changes. For example, if a customer's call first goes to an operator desk and is then sent to the agent, the agent's desktop, agent device, and all related information are automatically updated with the caller's ANI. This ensures that the original caller's ID and correct details are always shown.

Only call transfers initiated from desk phones or Jabber clients on-premises reflect the final CLI. Transfers performed via the Webex App on Webex Calling do not update to show the final CLI.

#### OutboundCampaignCallResult

As part of `NewPhoneContact`, this event is triggered if the contact is connected to an answering machine or is about to be abandoned. In either case, you can play a message prior to disconnecting the contact. The system abandons the call if the agent isn't available.

Only _Play Music_ and _Play Message_ activities are supported for this handler and the call must then be disconnected.

You can further add additional call control activities such as Play Music, Disconnect Contact, etc. to this event as per the Call Progress Analysis (CPA) result. CPA results can be one of the following:

- AMD - indicates an answering machine is detected.
- ABANDONED - indicates the call has been abandoned due to unavailability of an agent.
- LIVE\_VOICE - indicates an live voice of a customer is detected in an IVR campaign.

If you want to configure IVR in an outbound campaign call: 

1. Identify flows that use the `OutboundCampaignCallResult`event.
2. Place a GoTo activity to map the flow to a second flow.
3. Use IVR steps configured with Virtual Agent activity in the second flow.

Ensure that you perform these steps, as you cannot use a Virtual Agent activity directly with a` OutboundCampaignCallResult`.

 You can view the related variable in [Event Output Variables](#Cisco%5FConcept.dita%5F711df3fb-a535-43b3-b9d2-fdc5322f96d5). 

#### OnGlobalError Workflow

While you create a flow, you can set the error path of an activity to handle an activity error or a generic error that you get during the flow execution.

**_OnGlobalError Workflow_**

If you get an error during the flow execution, the execution continues with the next activity defined in the error path. If you don't configure the error path in the Main Flow, you can still set the `OnGlobalError` event available in the Event Flows tab to handle the flow execution error.

If you fail to define error paths in both **Main Flow** and **Event Flows**, the flow ends when an error occurs during the flow execution.

Let's consider a scenario where you configure the **Set Variable** activity in a flow.

**_Set Variable Activity in Main Flow_**

You can set the **Undefined Error** node of the **Set Variable** activity on the **Main Flow** to handle any system errors during the flow execution. If you don't want to define the error path in the main flow, you can still go to the **Event Flow** tab and configure the `OnGlobalError` event flow.

**_OnGlobalError Event Flow_**

In the above example, **Play Message** is appended to the `OnGlobalError` event handler. If there’s a system error during the execution of **Set Variable** activity in **Main Flow**, the system will consider the configuration made in the **Set Variable** activity first. If there's no error path defined, the system checks the `OnGlobalError` event handler in the **Event Flow**. Since a **Play Message** activity is attached to the `OnGlobalError` event in the above example, the system plays the message and ends the flow.

## Use variables and expressions

Flow Designer has the following types of variables:

- [Custom variables](#Cisco%5FConcept.dita%5F79a1216a-2b35-4523-8f68-948c4adf0fbc)
- [Predefined variables](#Cisco%5FConcept.dita%5F17d11d97-7ae7-44f2-9bbb-39c111456177)
- [Global variables](#Cisco%5FGeneric%5FTopic.dita%5F0a32bcfc-1bfc-4413-bf75-7e941b228a81)

### Custom variables

**Custom Flow Variables** are configurable variables of different data types that you can use throughout the flow. You can create as many Flow Variables as you need to satisfy the logic in your flow.

**Secure Variables** 

You can mark flow variables as Secure to prevent logging and storing of any sensitive information (these values will also be masked in the Flow Debugging pane). You can set secure variables as Agent Viewable or Agent Editable to control how these variables are presented on the Agent Desktop.

By default, all existing variables in the deployed flows behave as nonsecure variables. Open these flows in edit mode to review and retain the secure variables as needed.

In flow variable mapping, you cannot map a secure variable to a nonsecure variable in the GoTo activity.

You can't mark global variables as secure.

- [Create Custom Flow Variables](#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e)
- [Edit Custom Flow Variables](#task%5Fgzx%5Fq5k%5F1rb)
- [Delete Custom Flow Variables](#task%5Fgzx%5Fq5k%5F1rb)

#### Create Custom Flow Variables

| 1  | Sign in to [Control Hub](https://admin.webex.com/login).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3  | Click the Go to Flow Designer icon beside the flow. The **Flow Designer** window appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4  | From the Configuration panel, open the Variable Definition section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 5  | Click **Add Flow Variable**. You can add a maximum of 30 variables in a flow that are reportable and agent viewable. This count includes global variables and flow variables. However, you can add any number of non-agent viewable flow variables or non-reportable global variables in the flow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 6  | Enter the **Name** and **Description** of the variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 7  | Choose a **Variable Type** from the drop-down list. You cannot change the Variable Type after you create the variable. The supported variable types are: **Variable Type** **Variable Value** Boolean Choose True or False. String Enter the string value. If you want to use a variable in an expression, use the syntax: {{variable}} Integer Enter the integer value. Decimal Enter the decimal value. Date Time Enter the date and time in one of the supported formats: yyyy-MM-ddTHH:mm:ss.SSSZ yyyy-MM-ddTHH:mm:ssZ yyyy-MM-ddTHH:mmZ {{now()}} Don't use now() function to get the current time in milliseconds as it uses the SimpleDateFormat. However, you can use the epoch timestamp pebble filter to fetch the current time in milliseconds. For more information, see [Custom Pebble filters](#Cisco%5FReference.dita%5F21f4d1cd-91cb-46f0-b037-bb128558939c). JSON Enter a valid JSON variable value using the format: {"Key":"Value"}. For example, {"CompanyName":"Cisco"}. JSON variable can hold simple or nested data. The maximum size limit for the JSON variable value can be up to 16 KB. You can create a maximum of five JSON variables in a flow.For more information on how to configure JSON variable, see [JSON variables](#Cisco%5FReference.dita%5F5a83383c-f7a5-4904-919b-68d991262719). When you select JSON as the variable type from the list, the Contains Sensitive Information and Mark Agent Viewable toggle buttons will not be visible. JSON variables are not allowed in flow chaining. |
| 8  | Specify the Default Value of the variable as per the chosen variable type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 9  | (Optional) Turn on the Enable External Override toggle button. By enabling this option, you expose the variable on the channel configuration page. This allows administrators and supervisors to override the configured variable value from the Control Hub. In other words, they can change the value of the flow variable for a specific channel without opening the flow from the Flow Designer module. For more information on overriding variables from the Control Hub, see [Set up a channel](https://help.webex.com/en-us/article/ewuay1/Set-up-a-channel). When you configure the variable type as a string, the Resource Type drop-down list appears with the following options. Choose the resource type that you want to allow the administrators to override during channel configuration. Audio Prompt—To override the audio prompt settings configured in the variable. For example, the welcome prompt or a text-to-speech message.Business Hours—To override the business hours in case of an emergency shutdown.Entry Point—To change the entry point settings.Dial Number—To change the dialed number.Flow—To change the flow.Queue—To change the queue. You cannot override variables that are marked as 'Secure'.You can configure a maximum of 15 variables that can be overridden.                                                                                                                                                                                                                          |
| 10 | (Optional) If you turn-on the Contains Sensitive Information toggle button, the system marks the variable as a secure variable. During flow execution, the system doesn't log or store any information that is passed through this variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 11 | (Optional) If you enable the Make Agent Viewable toggle button, the variable appears on the Desktop along with the value captured as part of the flow. When you enable the **Make Agent Viewable** toggle button, the following fields appear: Desktop Label: Specify the label that is associated with this variable when it appears on the Desktop. Enter a clear label other than the variable name itself, so that the agent can understand the data that is passed to them. Agent Editable: Check this check box if you want the agent to be able to edit the value of the variable as part of the interaction session. When the agent updates the variable, the system passes back those changes to the Flow Designer. The agent can edit the flow variable and click the **Save** button from the Desktop. If the call gets disconnected before the agent saves the changes, the variable update does not take place.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 12 | Click Save. When you save a Custom Flow Variable, the variable is saved as a tag in the Global Properties Panel on the Desktop. If you marked the variable as Agent Viewable, the tag displays a headset icon for easy identification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

##### Example: Order of Flow Variables Displayed on the Desktop

When you create variables that are marked as Agent Viewable, the desktop displays these variables in a particular order. 

For example, if you create the following flow variables: CustomerType, SubscribedCustomer, CustomerCount, CallRatio, dob, Datetest. 

The Desktop receives these variables from Flow Designer in the following order: CallRatio, CustomerCount, CustomerType, SubscribedCustomer, ANI, DN, dob, ronaTimeout, Datetest.

The Desktop displays the variables in the following order, from left to right, on the user interface:

1. The Customer variables _Phone Number, DN, Queue, RONA Time_  
.
2. The flow variables are sorted in alphabetical order with variables beginning with uppercase first, followed by variables with lowercase: CallRatio, CustomerCount, CustomerType, Datetest, SubscribedCustomer, dob.

##### Example: Display Interaction ID on Desktop

An Interaction ID (Contact Session ID) is a system-generated unique ID that identifies a given interaction. You can fetch the Interaction ID from the analyzer reports and use the ID for troubleshooting issues related to call failures. To display the Interaction ID on Desktop:

1. Open the required flow and choose **Add Flow Variables**.
2. Set the **Default Value** field to **NewPhoneContact.interactionId**.
3. Enable the Make Agent Viewable toggle button.

When the agent receives a call, the Interaction ID appears on Desktop.

#### Edit Custom Flow Variables

If the variable is already in use, then you cannot edit the Variable Type. Doing so may have major implications on the flow. So, this action is prohibited. In this case, the Variable Type drop-down field is disabled and a warning message appears.

Upon successfully editing a variable, the changes that are made appears throughout the flow, and in the pop-over that appears when you click a flow variable in the Global Properties pane. 

To edit a custom flow variable, perform the following steps:

| 1 | Sign in to your customer organization using the Control Hub URL <https://admin.webex.com/>.                                                                                                                                                     |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears.                                                                                                                                                                 |
| 3 | Click the Go to Flow Designer icon beside the flow. The **Flow Designer** window appears.                                                                                                                                                       |
| 4 | Click **Edit** in the upper-right corner of the pop-over. The Edit Flow Variable dialog box appears. If the variable is not used in the flow, then all the fields are editable. You can modify the variable name, description, type, and value. |
| 5 | Click the Information icon in this message to see a list of the activities where the variable is used. If you want to proceed with editing the variable, remove the variable from all flow configurations before trying to edit again.          |
| 6 | Make the necessary changes. The Save button remains disabled until you make a change.                                                                                                                                                           |
| 7 | Click Save.                                                                                                                                                                                                                                     |

#### Delete Custom Flow Variables

If the variable is used in a flow, then you cannot delete it. Doing so has major implications on the flow. In this case, the **Delete** button in the Delete Variable window is disabled, and a list of activities where the variable is being used appears.

The activities are grouped based on whether they appear in the Main Flow or Event Flows tab. If you want to delete a variable that is in use, remove it from all flow configurations before you try to delete. 

To delete a custom flow variable, perform the following steps:

| 1 | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears.                                    |
| - | ------------------------------------------------------------------------------------------------------------------ |
| 2 | Click the Go to Flow Designer icon beside the flow. The **Flow Designer** window appears.                          |
| 3 | In the **Global Properties Pane**, click the Delete icon that appears on the variable tag that you want to delete. |

### Override flow settings

The override flow settings feature within the Flow Designer module enables authorized users to modify certain predefined settings of a flow from the Control Hub. This feature enables the administrators and supervisors to easily change certain flow parameters such as business hours, audio prompts, or queue assignments without opening the required flow.

To override flow settings:

- You must configure certain variables with in the flow as externally configurable. See [Create Custom Flow Variables](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e) section for configuration details.
- The administrators and supervisors must then make the required changes to these variables. The configured flow variables appear on the channel configuration page in the Control Hub. See [Set up a channel](https://help.webex.com/en-us/article/ewuay1/Set-up-a-channel) section for more details.

The override flow settings feature provides the following advantages:

- **Flow reusability**: Administrators can use the same flow for different organizations. They can configure different values for the same variable for different channels without modifying the default value defined in the flow.
- **Faster response times**: Changes made to the variable values are applied immediately, even to the calls that are already in progress.
- **Reduced errors**: Eliminates the risk of mistakes when modifying complex flows.
- **Simplified task management**: Without this feature, the administrators must perform the following tasks which may be complex and time-consuming for non technical users:
  1. Sign in to [Control Hub](https://admin.webex.com/login).
  2. Open the Flow Designer module.
  3. Navigate to the required flow and find the relevant path of the flow.
  4. Make the required changes.
  5. Republish the flow.

### Predefined variables

Flow Designer automatically creates predefined variables when you use certain events and activities in a flow.

A list of the available predefined variables appears in the Predefined Variables section in the Global Flow Properties pane. They also appear in the Properties pane for the selected Event or Activity.

Click on each variable to open a pop-up window that explains what type of data the variable stores, so you know how to use the variable in your flow. 

While most attributes of an Event Output Variable are predefined and cannot be edited, you can edit the variable to modify the global variable designation.

#### Event Output Variables 

Event Output Variables are specifically associated with events and take on the nomenclature: **`<EventName>.<VariableName>`**.

All of the Event Output Variables available for use in a flow automatically appear in the Global Properties pane after an event is introduced to the flow, and also in the Properties pane for the associated Event Handler activity. 

The available Event Output Variables are: 

- `NewPhoneContact.ANI `
- `NewPhoneContact.DNIS `
- `NewPhoneContact.InteractionID `
- `NewPhoneContact.PSTNRegion`
- `AgentAnswered.AgentID `
- `AgentAnswered.AgentName `
- `AgentAnswered.AgentEmailId `
- `AgentAnswered.AgentSessionID `
- `AgentAnswered.QueueID `
- `AgentAnswered.QueueName `
- `AgentAnswered.TeamID `
- `AgentAnswered.TeamName`
- `AgentAnswered.TenantID`
- `AgentAnswered.CAD `
- `PhoneContactEnded.AgentID `
- `PhoneContactEnded.AgentEmailID `
- `PhoneContactEnded.TeamID`
- `PhoneContactEnded.QueueID`
- `PhoneContactEnded.InboundChannel `
- `PhoneContactEnded.RoutingStrategyID `
- `AgentOffered.agentId`
- `AgentOffered.agentName`
- `AgentOffered.agentEmailId`
- `AgentOffered.agentSessionId`
- `AgentOffered.queueId`
- `AgentOffered.queueName`
- `AgentOffered.teamId`
- `AgentOffered.teamName`
- `AgentOffered.tenantId`
- `AgentOffered.callAssociatedData`
- `AgentOffered.AgentID`
- `AgentOffered.AgentName`
- `AgentOffered.AgentSessionID`
- `AgentOffered.QueueID`
- `AgentOffered.QueueName`
- `AgentOffered.TeamID`
- `AgentOffered.TeamName`
- `AgentOffered.TenantID`
- `AgentOffered.CAD`
- `PreDial.direction`
- `PreDial.participantType`
- `PreDial.dialNumber`
- `PreDial.otherPartyDn`
- `PreDial.epDn`
- `PreDial.agentSelectedAni`
- `PreDial.operationType`
- `OutboundCampaignCallResult.CPAResult`
- `OutboundCampaignCallResult.CPAResultCode`
- `AgentDisconnected.AgentId`
- `AgentDisconnected.AgentEmailId`
- `AgentDisconnected.QueueId`
- `AgentDisconnected.TeamId`
- `AgentDisconnected.InboundChannel`
- `AgentDisconnected.RoutingStrategyId`

In certain cases, the `AgentEmailId` variable may be null. Flow developers should validate this variable before using it, especially in scenarios involving cache lookup issues.

##### Customize System Variables

You can customize the desktop label of Phone Number and DNIS (Dialed Number Identification Service) variables only. You can create an alias of these variables and configure it using the **Set Variable** activity in the flow.

| 1  | Sign in to your customer organization using the Control Hub URL <https://admin.webex.com/>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3  | Click the Go to Flow Designer icon beside the flow. The **Flow Designer** window appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4  | From the Global Flow Properties pane, open the Variable Definition section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 5  | Click the Configuration tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 6  | Click **Add Flow Variable**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 7  | Enter the **Name** and **Description** of the variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 8  | Choose **String** in the **Variable Type** drop-down list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 9  | Enable the Make Agent Viewable toggle button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 10 | In the Desktop Label field, enter the desired desktop label for the variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 11 | Click Save. This creates the variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 12 | From the Activity Library, drag the Set Variable activity into the canvas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 13 | In the **Variable Settings** section in the **Activity Settings** pane, do the following: From the **Variable** drop-down list, choose the variable that you have created in Step 10. In the **Variable Value** section, choose the **Set to Variable** radio button. Select the system variable that you want to edit such as NewPhoneContact.ANI for Phone Number or NewPhoneContact.DNIS for DNIS. When you publish the flow, the newly created flow variable replaces the chosen system variable. During the flow execution, the Desktop Label of the newly created variable appears in the Incoming popover and Interaction pane of the Desktop. |

#### Activity Output Variables

Activity Output Variables store the data captured from activities and are automatically created when you add specific activities to the canvas. Activity Output Variables use the following syntax: **`<ActivityName>.<VariableName>`** where the ActivityName dynamically changes based on the activity. 

If a flow uses an activity multiple times, each activity has a unique instance of each associated Activity Output Variable. All the Activity Output Variables available for use in a flow automatically appear in the Global Properties pane when you introduce an activity to the flow, and also in the Properties pane for the associated activity.

The available Activity Output Variables are: 

- `**Menu.OptionEntered**`: Stores the menu option that the caller selected during the Menu activity instance. This is a single digit from 0 to 9.
- `**CollectDigits.DigitsEntered**`: Stores the digits entered by the caller during the Collect Digits activity instance. The number of digits depends on the activity configuration.
- `**HTTPRequest.HTTPStatusCode**`: Stores the status code received when the HTTP Request is attempted.
- `**HTTPRequest.HTTPResponseBody**`: Stores the response when the HTTP Request is successfully triggered.
- `**HTTPRequest.ResponseHeaders**`: Stores the headers that are sent as part of the HTTP Request.
- `**VirtualAgent.IntentTriggered**`: Stores the intent that triggered the conversational experience to be either handled or escalated.
- `**GetQueueInfo.EWT**`: Stores the value for the estimated wait time for the selected queue.
- `**GetQueueInfo.PIQ**`: Stores the value for the position in a queue for the selected queue.

### Global variables

Global variables are custom variables that you can view and access when creating flows. Administrator creates global variables in the Provisioning module of the Control Hub. For more information, see [Global Variables](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#Cisco%5FConcept.dita%5F9d97954c-91b5-404f-bf98-f597622d124e) section in the Webex Contact Center Setup and Administration Guide.

As a flow developer, you can consume these variables as per your requirement. You can add these variables in a flow. You can also edit and remove a global variable after adding it to the flow.

#### Add Global Variable in a Flow

You can add a maximum of 30 variables in a flow that are reportable and agent viewable. This count includes global variables and flow variables. However, you can add any number of non-agent viewable flow variables or non-reportable global variables in the flow.

If you want to add more variables beyond the maximum limit, you must delete an equal number of the existing variables. For more information about how to delete a global variable, see [Remove Global Variables from a Flow](#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e-3).

During flow creation, a global variable of type String can be initialized with a maximum length of 256 characters. But during flow execution, the variable can be updated to hold up to 1024 characters. Exceeding this limit can have undesirable behavior such as call failures and invalid values.

To add global variables in a flow:

| 1 | Sign in to your customer organization using the Control Hub URL <https://admin.webex.com/>.                                                                                                                                                                                                                                                                                                                                                                                                         |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3 | Click the Go to Flow Designer icon beside the flow. The **Flow Designer** window appears.                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4 | In the Global Flow Properties pane, scroll down to Variable Definition \> Predefined Variables section.                                                                                                                                                                                                                                                                                                                                                                                             |
| 5 | In the Global Variables section, click Add Global Variables. The **Add Global Variables** dialog box appears. It shows all global variables that the administrator created in the Provisioning module.                                                                                                                                                                                                                                                                                              |
| 6 | (Optional) Use the Search Global Variables field to filter and search for the required global variables from the list.                                                                                                                                                                                                                                                                                                                                                                              |
| 7 | Check the check boxes of the required global variables from the list and click Add. The system displays the chosen variables in the **Global Variables**section.By default, each variable carries administrator-defined metadata fields such as, Reportable, Agent Viewable, Agent Editable, and Desktop Label. If administrator changes any metadata values while the global variable is in use, the changes made in the Control Hub reflects across flows (with a cache expiry delay of 8 hours). |

#### Edit Global Variable in a Flow

When you edit a global variable, you cannot change any metadata value of a global variable in the flow designer. However, you can change the default value using the Overwrite Default Value toggle button.

To edit a global variable in a flow:

| 1 | Sign in to your customer organization using the Control Hub URL <https://admin.webex.com/>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3 | Click the Go to Flow Designer icon beside the flow. The **Flow Designer** window appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4 | In the Global Flow Properties pane, scroll down to Variable Definition \> Predefined Variables section.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 5 | In the Global Variable panel, click on a global variable and click the edit (![Edit button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/446001-447000/446489.jpg)) icon. The **Edit Global Variables** dialog box appears. It shows the details of the chosen global variable such as, Variable Type, Default Value, Desktop Label, and Agent Editable.                                                                                                                                                     |
| 6 | (Optional) Enable the Overwrite Portal Configurationstoggle button to overwrite the existing values that are configured in Control Hub. This enables you to modify field values such as Default Value, Agent Viewability, Agent Editable, and Desktop Label. Enter the necessary value in the Default Value as per the chosen variable type. For example, if the variable type is Boolean, this field appears as a drop-down list. The default value entered for a global variable of type string that is agent reportable must not exceed 256 characters. |
| 7 | Make the necessary changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 8 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Remove Global Variables from a Flow

You can remove a global variable that is not in use in any flow.

If you cannot remove a global variable, contact your administrator to enable the feature flag to remove global variables from the flow.

To remove a global variable from a flow:

| 1 | Sign in to your customer organization using the Control Hub URL <https://admin.webex.com/>.                                                                   |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears.                                                                               |
| 3 | Click the Go to Flow Designer icon beside the flow. The **Flow Designer** window appears.                                                                     |
| 4 | In the Global Flow Properties pane, scroll down to Variable Definition \> Predefined Variables section.                                                       |
| 5 | In the Global Variables panel, click the remove (x) icon of the global variable that you want to remove. A pop-up message prompts you to confirm your action. |
| 6 | Click Delete. This removes the selected global variable from the list.                                                                                        |

### Desktop viewable variables

You can configure the following variable types for the incoming popover and Interaction pane of the Desktop for incoming and outgoing voice calls:

- System Variables such as Phone Number, DNIS (Dialed Number Identification Service), Queue Name, and RONA Timeout
- Global Variables that are created and managed in Control Hub.
- Custom Flow Variables that are created and managed in Flow Designer

You can configure only those variables that are marked as Agent Viewable.

You can configure these variables on the new flows as well as on the existing flows. However, the existing flows continue to show the default popover variables such as Phone Number, DNIS, and Queue Name. You can edit these flows to add more variables by using this feature.

The steps to configure variables for incoming popover and Interaction pane for incoming and outgoing calls are the same.

You need to build separate flows for inbound and outbound call scenarios to configure variables for incoming popover and interaction pane.

**Incoming popover on the Desktop**

The incoming popover appears when an agent receives an incoming call or dials an outgoing call. It displays key information about the customer according to the variables configured in Flow Designer. You can set an order of appearance of each of these variables in the incoming popover that can include any combination of the system, global and custom flow variables. You can also edit the desktop label of these variables.

You can customize the desktop label of the system variables such as Phone Number and DNIS. For more information, see [Customize System Variables](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fc49332af-b558-4c4e-8d77-c5ff743db13f).

For incoming and outgoing calls, you can choose a minimum of three and a maximum of six variables. For consult calls, the consulted agent would view an additional three variables such as Agent Name, Agent DN, and Agent Team that are added to the list by default.

You cannot configure variables that contain sensitive information in the incoming popover on the Desktop.

For more information on how to configure variables for the incoming popover, see [Configure variables for incoming popover](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F52087032-9c77-46c7-b4f8-d9c73d427860).

**Interaction pane**

The Interaction pane on the Desktop appears after the agent accepts the incoming or outgoing call. It displays information set in the Interaction pane variables that are configured in Flow Designer. You can choose a maximum of 30 variables. You can set an order of appearance of each of these variables in the interaction pane that can include any combination of the system, global and custom flow variables. You can also edit the desktop label of these variables.

Webex Contact Center Desktop does not currently support the translation of labels of dynamic variables.

You can customize the desktop label of the system variables such as Phone Number and DNIS. For more information, see [Customize System Variables](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fc49332af-b558-4c4e-8d77-c5ff743db13f).

For more information on how to configure variables for the Interaction pane, see [Configure variables for Interaction pane](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F362535bd-3300-45bf-9f29-a8a0b18a60e3).

#### Configure variables for incoming popover

Before you begin

Configure variables on incoming popover for incoming and outgoing calls.

- You must create variables that you want to add in the incoming popover of the Desktop. For more information, see [Create a Global Variable](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#Cisco%5FConcept.dita%5F9d97954c-91b5-404f-bf98-f597622d124e) and [Create Custom Flow Variables](#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e).
- You must mark variables as Agent Viewable. For more information on how to mark a Global Variable as Agent Viewable, see [Edit Global Variable in a Flow](#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e-2).

| 1  | Sign in to your customer organization using the Control Hub URL <https://admin.webex.com/>.                                                                                                                                                                                                                                                                                                              |
| -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                          |
| 3  | Click the Go to Flow Designer icon beside the flow. The Flow Designer window appears.                                                                                                                                                                                                                                                                                                                    |
| 4  | From the Global Flow Properties pane, open the Variable Definition section.                                                                                                                                                                                                                                                                                                                              |
| 5  | Click the Desktop Viewability & Order tab.                                                                                                                                                                                                                                                                                                                                                               |
| 6  | In the Incoming Popover section, click Select Variables for Incoming Popover. The Select Variables on Incoming Popover window appears. It shows all variables that include four default system variables such as Phone Number, DNIS, Queue Name, and RONA Timeout. System variables such as Phone Number, DNIS, and Queue Name are selected by default that you can uncheck when you add more variables. |
| 7  | Use the following search options to filter the list: Enter a few words in the Search Variables field to search a specific variable by its name. Choose a variable type from the Select Variable Type drop-down list. The list is autopopulated with variables as per your criteria entries.                                                                                                              |
| 8  | Check the check boxes of the variables that you want to choose for the incoming popover. You can choose a minimum of three and a maximum of six variables.                                                                                                                                                                                                                                               |
| 9  | Click Save. You can skip this step if you enable the Autosave toggle button. The chosen variables appear in the Incoming Popover section.                                                                                                                                                                                                                                                                |
| 10 | Use the handle icon (![handle icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/489001-490000/489249.svg)) beside a variable to move it up and down the list to set the order of appearance in the incoming popover of the Desktop.                                                                                                                       |
| 11 | (Optional) Click the **x** icon beside a variable to remove that variable from the list.                                                                                                                                                                                                                                                                                                                 |

#### Configure variables for Interaction pane

Before you begin

Configure variables on the Interaction pane for incoming and outgoing calls.

- You must create variables that you want to add in the incoming popover of the Desktop. For more information, see [Create a Global Variable](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#Cisco%5FConcept.dita%5F9d97954c-91b5-404f-bf98-f597622d124e) and [Create Custom Flow Variables](#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e).
- You must mark variables as Agent Viewable. For more information on how to mark a Global Variable as Agent Viewable, see [Edit Global Variable in a Flow](#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e-2).

| 1  | Sign in to your customer organization using the Control Hub URL <https://admin.webex.com/>.                                                                                                                                                                                                 |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears.                                                                                                                                                                                                             |
| 3  | Click the Go to Flow Designer icon beside the flow. The **Flow Designer** window appears.                                                                                                                                                                                                   |
| 4  | From the Global Flow Properties pane, open the Variable Definition section.                                                                                                                                                                                                                 |
| 5  | Click the Desktop Viewability and Order tab.                                                                                                                                                                                                                                                |
| 6  | In the Interaction Pane section, click Select Variables for Interaction Pane. The Select Variables on Interaction Pane window appears. It shows all variables along with four system variables such as Phone Number, DNIS, Queue Name, and RONA Timeout.                                    |
| 7  | Use the following search options to filter the list: Enter a few words in the Search Variables field to search a specific variable by its name. Choose a variable type from the Select Variable Type drop-down list. The list is autopopulated with variables as per your criteria entries. |
| 8  | Check the check boxes of the variables that you want to choose for the Interaction pane. You can choose a maximum of 30 variables.                                                                                                                                                          |
| 9  | Use the handle icon (![handle icon](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/489001-490000/489249.svg)) beside a variable to move it up and down the list to set the order of appearance in the Interaction pane of the Desktop.          |
| 10 | Click Save. You can skip this step if you enable the Autosave toggle button. The chosen variables appear in the Interaction Pane section.                                                                                                                                                   |
| 11 | (Optional) Click the **x** icon beside a variable to remove that variable from the list.                                                                                                                                                                                                    |

### JSON variables

JSON variables are custom flow variables of type JSON. You can create JSON variables in Flow Designer. For more information, see [Create Custom Flow Variables](#Cisco%5FTask.dita%5Fc4fc38d6-4804-43f5-9511-5aa33a63256e).

You can use the following activities to store the data in JSON variable: **HTTP Request**, **Parse**, and **Set Variable**.

In **HTTP** and **Parse** activities, you can extract data using JSON path filter expression and store it in JSON variable.

In **Set Variable** activity, you can use the JSON variable in the **Set Value** option in the following ways:

- Type in the JSON value in the text box. For example:  
```  
{  
    "userId":"rirani",  
    "jobTitleName":"Developer",  
    "firstName":"Romin",  
    "lastName":"Irani",  
    "preferredFullName":"Romin Irani",  
    "employeeCode":"E1",  
    "region":"CA",  
    "phoneNumber":"408-xxxxx67",  
    "emailAddress":"rirani@xyz.com"  
}  
```
- Use a **Pebble expression**.

#### Usage of JSON Variables in Pebble Expression

- **Dot(.) separated access:** You can use dot(.) separated access in Pebble expression for JSON variable in call handling and flow control activities.  
Syntax: `{{ jsonVariableName.fieldName }}` where, `jsonVariableName.fieldName` should evaluate to a field in JSON variable.  
In the previous sample code snippet, if you extract the employee to a variable called `empvar` using HTTP or Parse:  
use `{{empvar.employeeCode}}` to get the value as `E1`.
- **Index access of JSON array:** You can access a specific index from the JSON array similar to Pebble Syntax. For more details on Index Access in Pebble, visit <https://pebbletemplates.io/wiki/guide/basic-usage/>, for example:  
```  
{  
    "Employees" : [  
        {  
        "userId":"rirani",  
        "jobTitleName":"Developer",  
        "firstName":"Romin",  
        "lastName":"Irani",  
        "preferredFullName":"Romin Irani",  
        "employeeCode":"E1",  
        },  
        {  
         "userId":"thanks",  
         "jobTitleName":"Program Manager",  
         "firstName":"Tom",  
         "lastName":"Hanks",  
         "preferredFullName":"Tom Hanks",  
         "employeeCode":"E3",  
         "directReports":[  
            {  
               "userId":"John",  
               "jobTitleName":"Developer",  
               "firstName":"John",  
               "lastName":"Irani",  
               "preferredFullName":"John Irani",  
               "employeeCode":"E2"  
            },  
            {  
               "userId":"Sam",  
               "jobTitleName":"Developer",  
               "firstName":"Sam",  
               "lastName":"Das",  
               "preferredFullName":"Sam Das",  
               "employeeCode":"E2"  
            }  
         ]  
      }  
   ]  
}  
```  
If you extract the Employees JSON array into a variable called `var` using HTTP or Parse:  
  - Use `{{ var[0]}}` to get the employee details of `rirani` who is a manager.
  - Use `{{ var[1].directReports[0] }}` to get the employee details of `John` who is a direct reportee of the manager.
  - Use `{{ var[1].directReports[0].preferredFullName }}` to get the value as `John Irani`.
  - Use `{{ var[0].preferredFullName }}` to get the value as `Romin Irani`.

#### Usage of JSON variable in HTTP request

To use a JSON variable as request body of a HTTP request, use the **Set Variable** activity first to convert the JSON variable to a string. For example, in the **Set Variable** activity **Variable Settings** section, set a variable `jsonString` with value as `{{ jsonVariable }}`.

Use this variable as an input to the HTTP settings. For example, in the **HTTP Request Settings** section, set the **Request Body** as `{{ jsonString }}`.

### Writing expressions 

Most text input fields in Flow Designer support writing expressions. Expressions are not required, but they allow for powerful scripting functionality through variables for advanced users. You can also enter basic text and numbers in the same input fields for simple flows if you do not need expressions. 

Wrap each expression in double curly brackets as seen here: {{Enter Expression}}

For example, if you want to combine two string variables together, you must use {{var1+var2}}. For more information see: <https://pebbletemplates.io/>.

### Pebble template syntax 

All input fields in the Flow Designer use an open-source expression syntax called Pebble Templates: <https://pebbletemplates.io/>.

The following are supported symbols in Pebble Templates: ==, !=, <, >, <=, >=, +, -, \*, / . To type custom variables in an expression, use this syntax: {{variable}}

In Pebble Template syntax, variable names must start with a letter, an underscore (\_) or a dollar sign ($), but not a number. For instance, 311\_Promo is invalid, while Promo\_311 is valid.

Logic operators are also supported. For more information, see <https://pebbletemplates.io/wiki/operator/logic/>. 

We recommend that you review the Pebble Template documentation before you use expressions in Flow Designer. For information on writing expressions, see the documents at: <https://pebbletemplates.io/wiki/>. 

For example, in this basic condition use case, the expression checks to see if the caller’s AccountNumber is greater than or equal to a certain value. Based on how the expression evaluates for a given flow execution, the flow can take the True or the False path. 

#### Custom Pebble filters

##### Epoch Time Stamp

You can use the following Pebble filters to return the epoch time stamp for Now or a given date string:

Epoch time stamp for Now:

```
{{ now() | epoch }}   => default UTC timezone and in seconds
{{ now() | epoch(inMillis=true) }} => default UTC timezone and in milliseconds
Example:
{{ now() | epoch }} -> 1667471488
{{ now() | epoch(inMillis=true) }} -> 1667471522829
```

Epoch Time Stamp for a specific date:

```
{{ '2017-10-19 16:18:03.779' | epoch(format='yyyy-MM-dd HH:mm:ss.SSS', inMillis=true) }} => custom format and in milliseconds
{{ '2017-10-19 16:18:03.779' | epoch(format='yyyy-MM-dd HH:mm:ss.SSS', inMillis=true, timeZone='America/Phoenix') }} => custom format with timezone and in milliseconds
Example:
{{ '2017-10-19 16:18:03.779' | epoch(format='yyyy-MM-dd HH:mm:ss.SSS', inMillis=true) }} -> 1508429883779
{{ '2017-10-19 16:18:03.779' | epoch(format='yyyy-MM-dd HH:mm:ss.SSS', inMillis=true, timeZone='America/Phoenix') }} -> 1508455083779
```

### Validate expressions 

If an input field detects that an expression is being used (that is the {{ }} syntax is entered), a blue icon appears in the lower-right corner of the field. 

Click the blue icon to open a modal where you can test and modify the expression until you get the desired outcome. 

The Test Expression modal contains the following fields: 

- **Expression**: Shows the expression that was initially entered in the input field from the activity configuration.
- **Variable Fields:** Each variable used in the expression has a supporting field where you can enter a sample variable value. Enter a value for each variable, then click **Test** to see the results if the expression is executed with the entered parameters.  
To set variables in an expression, use the format {{variable name}} only. For instance, {{NewPhoneContact.ANI}} is a variable syntax.
- **Result:** Shows the result of the expression after you click **Test**. If the results are different than expected, modify the Expression as desired. If you make changes to the configuration, click **Apply Changes** to update the expression in the activity configuration.

## Use flow templates

Flow templates are pre-made flows designed for specific use cases. These templates are readily available in the Flow Designer canvas, enabling flow developers to quickly build and publish flows with minimal effort.

To create flows using flow templates, select the desired template, customize it for your business requirements, validate, publish, and begin using the flow. For more details, see [Create flows from flow templates](#task-template%5F05c77f3a-aed2-43ad-aee4-c65b777a870c).

### Business hours usage

Use this flow designer template for business hours management in Webex Contact Center. Callers are greeted with a message, and their calls are routed based on the business hours, holidays, and emergency conditions set for the organization.

This flow routes calls based on the contact center's working hours, holiday lists, and emergency overrides, ensuring an optimal caller experience and efficient handling of non-working hours. If the contact center is closed, the caller is notified of the closure.

Key features include the following:

- Centralized management of working hours, holidays, and emergency overrides.
- Automatic routing based on business hours configuration.
- Cisco Text-to-Speech (TTS) is used for all audio prompts, though custom audio files can be uploaded.
- The default music on hold is `defaultmusic_on_hold.wav`, but this can be customized.

#### Prerequisites 

- **Business hours setup**: Create working hours, holiday lists, and overrides in Control Hub.
- **Audio files**: Upload the required audio files for prompts such as the `BusinessHoursOpen.wav` or use the Cisco TTS feature.
- **Queue, teams, and entry point mapping**: Configure these elements in the Webex Contact Center Management Portal.

#### Flow breakdown 

The following table describes the various flow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Flow element              | Description                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| Call received             | A call is initiated and enters the flow.                                                               |
| Business hours evaluation | The system checks if the current time falls within working hours, holidays, or an override condition.  |
| Handling open hours       | If the contact center is open, a welcome message is played, and the call is routed to the agent queue. |
| After hours               | If the contact center is closed, a closed hours message is played, and the call is disconnected.       |
| Emergency overrides       | If an emergency override is active, the emergency message is played, and the call is disconnected.     |

#### Flow activities

The following table describes the sequence of flow activities.

| Flow activity                               | Description                                                                                                                           |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Start (New Phone Contact)                   | The flow begins when a new phone contact is received.                                                                                 |
| Business hours check (BusinessHours)        | The system checks whether the contact center is within regular working hours, a holiday, or an emergency override.                    |
| Working hours prompt (WorkingHours\_Prompt) | During working hours, a message is played to inform the caller that the contact center is open (default file: BusinessHoursOpen.wav). |
| Queue contact(Agent\_Queue)                 | The caller is placed in the queue to be routed to an available agent.                                                                 |
| Hold music(HoldMusic)                       | Music is played while the caller waits in the queue (default file: defaultmusic\_on\_hold.wav).                                       |
| Holiday closed (Holiday\_Closed)            | If it’s a holiday, a message is played informing the caller that the office is closed.                                                |
| After hours prompt (AfterHours\_Prompt)     | If it’s after business hours, a message is played to inform the caller that the office is closed.                                     |
| Emergency override (Override\_Emergency)    | In the case of an emergency override, an emergency message is played.                                                                 |
| Disconnect contact(DisconnectContact)       | After the message is played (whether it’s after hours, a holiday, or an emergency), the call is disconnected.                         |

#### Additional resources

For more information on configuring business hours, holiday lists, and overrides, refer to the [Webex Contact Center Setup and Administration Guide](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide).

### Comprehensive inbound contact

Use this flow designer template in Webex Contact Center for comprehensive handling of incoming calls, business hours checks, position in queue announcements, and callback options.

This flow demonstrates a comprehensive inbound voice call scenario for Webex Contact Center. It includes handling business hours, holidays, emergency overrides, self-service options, position in queue (PIQ) announcements, and customer callback options. It's suitable for environments where basic self-service and call queuing are essential.

 Modify the flow to fit specific organization needs and to handle unknown conditions gracefully.

This flow uses Cisco Text-to-Speech (TTS) for audio activities requiring prompts (if any). For music, it defaults to the `defaultmusic_on_hold.wav` file provided out-of-box.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this flow:

- Create entry points, queues, teams, and entry point mappings, and any other organization-specific configurations such as connectors, outdial ANI, and more.
- Set up working hours, holiday lists, and emergency overrides from Control Hub → Services → Contact Center Setup → Business Hours.
- Upload static audio files if custom audio prompts are used instead of Cisco Text-to-Speech (TTS).

For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

#### Flow breakdown

The following table describes the various flow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Flow element                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Call is received               | Call enters the flow at the **NewPhoneContact** activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Check business hours           | The flow checks the current time against the defined business hours using the **BusinessHours** activity.**Working Hours**: The call is routed to the **Work\_Non\_WorkHours\_Match** activity, and further handled based on conditions such as open hours or after-hours. **Holidays**: The **Holiday\_Closed** message plays, informing the caller that the office is closed due to a holiday, followed by disconnection.**Emergency Override**: The **Override\_Emergency** activity plays an emergency override message, followed by disconnection.**After Hours:** The **AfterHours\_Prompt** activity plays a closed-hours message, and the call is disconnected. |
| Self service options           | During open hours, the **WelcomeMenu** (IVR Menu) activity plays a menu offering basic self-service options to callers:**Press 1 for Customer Support:** The call is queued for the support team. **Press 2 for Sales:** The call is queued for the sales team.                                                                                                                                                                                                                                                                                                                                                                                                         |
| Queue placement                | The caller is placed in a queue using the **Queue** activity.The **GetPositioninQueue** activity retrieves the caller’s position in the queue, and this information is announced to the caller using the **PlayPIQ**activity.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Callback and voicemail options | If the caller chooses to leave a voicemail or request a callback, the **FinalMenu** activity is triggered:**Press 1 for Callback**: The **Callback\_guf** activity is used to schedule a callback. **Press 2 for Voicemail:** The call is transferred to voicemail using the **VoiceMail** activity.                                                                                                                                                                                                                                                                                                                                                                    |
| Hold music                     | The flow ensures that if a caller loops too many times (through the **CallLoopCycle** and **LoopCycle** activities), they are directed to the final menu options (callback or voicemail).                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Loop handling                  | The flow is designed to handle unexpected issues by terminating gracefully, with fallback routes available.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Call disconnnection            | After all steps are completed or if the caller chooses to exit, the call is disconnected using the **DisconnectContact** activities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Flow activities

The following table describes the sequence of flow activities involved in this flow template.

| Flow activity                               | Description                                                                                                                                                                                                                                    |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start (NewPhoneContact)                     | Starts the flow when the call is received.                                                                                                                                                                                                     |
| Business Hours Check (BusinessHours)        | Checks if the call is during business hours, holidays, or emergency override situations.                                                                                                                                                       |
| IVR Menu (WelcomeMenu)                      | Plays a menu with options for self-service (Press 1 for Support, Press 2 for Sales).                                                                                                                                                           |
| Queue Handling                              | **Queue**: Places the caller in a queue for the appropriate team (for example, support or sales).**GetPositioninQueue**: Retrieves and announces the caller's position in the queue.**PlayPIQ**: Announces the caller’s position in the queue. |
| Hold Music (MusicOnHold)                    | Plays hold music while the caller waits in the queue.                                                                                                                                                                                          |
| Loop Handling (CallLoopCycle and LoopCycle) | Ensures that calls looping too many times are directed to the final menu.                                                                                                                                                                      |
| Disconnection (DisconnectContact)           | Disconnects the call after messages or when the caller chooses to end the interaction.                                                                                                                                                         |

#### Additional resources

For more information, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

### CSAT DTMF survey

This flow template contains the functionality for an Interactive Voice Response (IVR) powered Post-Call Survey (PCS) system. The survey is designed to capture customer satisfaction ratings efficiently and effectively using a basic menu and touch-tone IVR.

This flow helps Webex Contact Center to efficiently gather customer feedback through a simple automated post-call survey using Dual-Tone Multi-Frequency (DTMF) tones. Customers rate their call experience when they get a prompt for rating. The system collects the customer responses in a global variable used for reporting. The survey captures customer satisfaction ratings on a scale of 1—5\. 

This flow is built to easily set up post call surveys in a couple of simple steps. It comes pre-packaged with all the required building blocks including speech to text connector. 

#### Usage

To use this flow effectively as a post-call survey flow, connect a **GoTo Flow** from the **AgentDisconnected** event on your Main Flow. This ensures that when the agent disconnects the call, the caller is presented with a post-call Interactive Voice Response (IVR) survey that captures Customer Satisfaction (CSAT) response. 

This flow includes messages that can be played to customers. You can customize the messages as required.

#### Prerequisites

Before configuring this flow, create the following variables:

- **CounterSurvey**

  - **Type**—INTEGER
  - **Default value**—0
  - **Description**—Tracks the number of survey attempts and increments with each invalid or timeout response.
- **Global\_FeedbackSurveyResponse**

  - **Type**—INTEGER
  - **Default value**—0
  - **Source**—Global variable
  - **Make Reportable**—Toggle on.
  - **Description**—Stores the customer's rating response or 'NoResponse' if there's an invalid/timeout scenario.

#### Flow activities

The following table describes the activities used in the flow.

| Flow activity                | Description                                                                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Start** NewPhoneContact    | Starts the survey when a new phone contact is initiated.                                                                                              |
| **SurveyOptions (IVR Menu)** | Prompts the user to select a rating (1—5). The numbers 1, 2, 3, 4, 5 correspond to satisfaction levels. Timeout or invalid response leads to a retry. |
| **SetSurveyResponse**        | Captures the user’s selection and stores it in the Global\_FeedbackSurveyResponse variable.                                                           |
| **SetCounterSurvey**         | Increments the CounterSurvey variable after a timeout or invalid response.                                                                            |
| **CheckCounterSurvey**       | Validates if the number of retries exceeds 2 using the following condition CounterSurvey > 2. Ends the survey if retries are exhausted.               |
| **SetVariable\_r3k**         | Assigns 'NoResponse' to SurveyResponse if retries are exhausted.                                                                                      |
| **PlaySurveyRecorded**       | Plays a thank you message after capturing the response.                                                                                               |
| **DisconnectContact**        | Ends the call gracefully.                                                                                                                             |

### DialogFlow ES virtual agent

This Webex Contact Center flow designer template demonstrates the data flow between Google DialogFlow ES and Webex Contact Center, focusing on how to pass data to and from both platforms during an interaction.

This flow showcases how data is passed between Webex Contact Center and DialogFlow ES for processing customer interactions. It provides a foundational flow where data is exchanged with DialogFlow ES for natural language processing and automated agent fulfillment. The integration with DialogFlow enables the bot to understand customer intents and take appropriate actions based on the conversation. Additionally, the flow includes error handling to ensure a smooth customer experience, even when unexpected conditions arise.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this flow:

- A Google DialogFlow ES agent with relevant intents for the conversation.
- Create entry points, queues, teams, and entry point mappings.
- Enable Webhook Fulfillment in DialogFlow ES and use the sample node.js code in the inline editor.
- Cisco Text-to-Speech (TTS) is enabled for generating custom messages dynamically. Upload static audio files if custom audio prompts are used instead of Cisco Text-to-Speech (TTS).

#### Flow breakdown

The following table describes the various flow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Flow element                    | Description                                                                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Customer initiates contact      | The call is received by Webex Contact Center.                                                                                            |
| Data is passed to DialogFlow ES | A custom greeting, which includes customer details such as name and reason for calling, is sent to the DialogFlow ES bot for processing. |
| Bot interaction with DialogFlow | DialogFlow processes the input and responds based on configured intents.                                                                 |
| Music in queue                  | While the bot processes the request, the customer is placed in a queue with hold music.                                                  |
| Disconnect                      | The interaction ends once the dialog is completed.                                                                                       |

#### Flow activities

The following table describes the sequence of flow activities involved in this flow template.

| Flow activity   | Description                                                                                                                                                                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start           | This activity marks the beginning of the flow. It's triggered when a new call is received.                                                                                                                                                                                                |
| Set Language    | The flow uses a Set Variable activity to configure the language code (en-US) for the entire interaction. This ensures all voice interactions align with the caller's language preference.                                                                                                 |
| Custom Greeting | This activity passes customer details such as name, email, and reason for calling to the DialogFlow ES bot. The greeting is dynamically generated using Cisco Text-to-Speech (TTS). Example data passed:customerName: Jane Doe customerEmail: customer@email.com customerReason: Bookings |
| Queue to Agent  | If the interaction requires escalation, the customer is placed in a queue, and hold music is played using the defaultmusic\_on\_hold.wavfile.                                                                                                                                             |
| Play Music      | Music is played while the caller waits in the queue. The flow uses Cisco’s default hold music but can be customized by uploading different music files.                                                                                                                                   |
| Disconnect      | This activity disconnects the call once the flow is complete, ensuring a seamless end to the interaction.                                                                                                                                                                                 |

#### Flow specifics

The flow JSON used in this example contains variables and activities essential for interaction handling, error processing, and communication between Webex Contact Center and DialogFlow. The key variables used include:

| Flow variable               | Description                                                 |
| --------------------------- | ----------------------------------------------------------- |
| Global\_FeedbackSurveyOptIn | Tracks whether the customer opts in for a post-call survey. |
| customerName                | Captures the customer's name for personalization.           |
| customerEmail               | Captures the customer’s email.                              |
| customerReason              | Records the reason for the customer's call.                 |
| Global\_Language            | Configures the default language (en-US).                    |
| Global\_VoiceName           | Determines the voice used for text-to-speech.               |

#### Additional resources

For more information on this integration, see the [Working with Data on Google DialogFlow ES with Webex Contact Center](https://app.vidcast.io/share/491d0e41-99ab-44cf-a48b-18949c406d73) video.

Refer to [Webex Contact Center Developer Documentation](https://developer.webex.com/) and [DialogFlow ES Documentation](https://cloud.google.com/dialogflow/es/docs/reference) for further guidance.

#### Developer support 

For any support regarding this integration, open a ticket with the Webex Contact Center Developer Support team through the [Webex Developer Portal](https://developer.webex.com/explore/support).

For further discussions, visit the [Webex Contact Center APIs Developer Community](https://community.cisco.com/t5/contact-center/bd-p/j-disc-dev-contact-center).

### Dynamic variable support

This template provides an advanced, dynamic inbound voice flow that retrieves external settings, setting the flow variables with those settings and routes calls based on the variable configurations.

The flow dynamically fetches flow settings through an HTTP request and sets variables that guide the rest of the flow. These variables manage routing decisions, queue handling, prompts, and error management. This is often used for scenarios requiring flexibility in call handling based on real-time business conditions like working hours or holidays—where a single flow can be reused across different use cases using dynamic variable-based routing.

The flow ensures a smooth and efficient caller experience by playing appropriate messages, handling working hours or error cases, and providing routing based on the organization's specific requirements.

The flow uses Cisco Text-to-Speech (TTS) for all the audio activities requiring prompts. Custom music on hold or messages can be configured by updating the flow variables.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this flow:

- Create entry points, queues, teams, entry point mappings, and any other organization-specific configuration activities like connectors, outdial ANI, and more.
- Ensure that any required static audio files or custom TTS prompts are uploaded to the system.
- Have a valid API endpoint to fetch the flow settings

For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

#### Flow breakdown

The following table describes the various flow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Flow element                                   | Description                                                                                                                                   |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| New Phone Contact                              | The flow begins when a call is received at the entry point.                                                                                   |
| HTTP Request                                   | The flow makes an HTTP request to fetch flow settings dynamically based on the call’s DNIS.                                                   |
| Business Hours Check                           | Depending on the flow settings, the flow checks business hours, holidays, and overrides to route the call appropriately.                      |
| Play Message (Welcome)                         | Based on the fetched settings, a welcome message is played using TTS or a pre-recorded prompt.                                                |
| Queue Activity                                 | If necessary, the call is placed in a queue based on dynamic variables.                                                                       |
| Play Music (Queue Management & Music in Queue) | While the caller waits in the queue, hold music is played, which can be dynamically set.                                                      |
| Error Handling                                 | If any error occurs, the call is redirected to an error handling flow or a different entry point using the GoTo enabled by dynamic variables. |

#### Flow activities

The following table describes the sequence of flow activities involved in this flow template.

| Flow activity          | Description                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Start                  | The flow starts when a call is received through the NewPhoneContact activity.                                                                                                  |
| HTTP Request           | The FetchFlowSettings activity makes an HTTP request to retrieve all necessary flow settings, such as business hours, prompts, and queue configurations.                       |
| IVR Menu (WelcomeMenu) | Plays a menu with options for self-service (Press 1 for Support, Press 2 for Sales).                                                                                           |
| Set Variables          | The SetVariable activity stores the data retrieved from the HTTP request and assigns values to flow-related variables like businessHours, queue, welcomePrompt, and holdMusic. |
| Business Hours         | The BusinessHours activity checks the working schedule, holidays, and overrides, directing the flow based on the current time.                                                 |
| Play Message           | The PlayMessage activity plays a welcome message to the caller. This can be set dynamically or pre-configured.                                                                 |
| Queue Contact          | The QueueContact activity places the caller in the appropriate queue, utilizing dynamic variables for queue management and fallback handling.                                  |
| Play Music             | The PlayMusic activity plays hold music to callers waiting in the queue, configured based on the holdMusic variable.                                                           |
| Go To                  | Multiple Go To activities are used to navigate between different parts of the flow or handle specific conditions like holidays or errors.                                      |
| Disconnect             | After all necessary steps are completed, the flow ends with the appropriate disconnect or redirection.                                                                         |

### Hello World

Use this template to create a simple inbound voice flow where callers are greeted with a message and then disconnected. This flow is often used during closed hours.

This flow provides a simple flow that plays an announcement to the caller. Modify the flow to ensure a smooth caller experience by handling any errors or unknown conditions.

The subflow uses Cisco Text-to-Speech for any audio prompts. For music, it defaults to the built-in file (`defaultmusic_on_hold.wav`), for music on hold. 

#### Prerequisites 

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this flow:

- Create entry points, queues, teams, and entry point mappings and any other organization-specific configuration activities like connectors, outdial ANI, and more.
- Upload static audio files if custom audio prompts are used instead of Cisco-Text-to-Speech (TTS).  
For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/en-us/n5595zd/).

#### Flow breakdown

1. Call is received and enters the flow.
2. A welcome message is played to the caller.
3. The caller is placed in a queue.
4. Hold music is played while the caller waits.

#### Flow activities

The following table describes the sequence of flow activities involved in this flow template.

| Flow activity | Description                                                                                                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start         | The flow begins when a call is received                                                                                                                                                                  |
| Play Message  | The call is directed to the **WelcomeMessage** activity, which plays a welcome message to the caller.This uses TTS but can be a pre-recorded message, greeting the caller or providing some information. |
| Disconnect    | After the welcome message, the call is directed to the disconnect activity. This activity disconnects the call, ending the interaction after the message has been played.                                |

#### Additional resources

For more information, see [Webex Contact Center setup and administration guide](https://help.webex.com/en-us/n5595zd/).

### Menu auto attendant

Use this Webex Contact Center flow designer template to create a menu-driven system for efficient call routing. It automates inbound actions, directing callers to the right teams or services for a smoother experience.

This flow automates the initial interaction with the caller, allowing them to navigate through various menu options. It includes dynamic error handling, multilingual support, and a polite disconnection process in case of errors or unrecognized inputs.

This flow uses Cisco Text-to-Speech (TTS) for any audio prompts. For music, it defaults to the built-in file (`defaultmusic_on_hold.wav`), for music on hold.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this flow:

- Create entry points, queues, teams, and entry point mappings.
- Upload static audio files if custom audio prompts are used instead of Cisco Text-to-Speech (TTS).

For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

#### Flow breakdown

The following table describes the various flow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Flow element                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Call received (New Phone Contact) | The flow is triggered when a new phone contact is initiated by an inbound call.                                                                                                                                                                                                                                                                                                                                                                     |
| Welcome message (Welcome Prompt)  | A greeting message is played: **Welcome to the Webex Contact Center!**                                                                                                                                                                                                                                                                                                                                                                              |
| Main menu (IVR Menu)              | The caller is presented with a set of menu options. The menu is read aloud using TTS, guiding the caller through different service options: Press 1 for services teamPress 2 for sales teamPress 3 for overseas teamPress 4 for hours of operationPress 5 for frequently asked questionsPress 6 for prerequisitesPress 7 for billing issuesPress 8 for a representativePress 9 for general informationPress # to repeat the menuPress \* to hang up |
| Routing based on selection        | Based on the selected option, the caller is either transferred to a specific team (blind transfer) or placed in a queue to wait for the next available agent.                                                                                                                                                                                                                                                                                       |
| Error handling                    | Invalid inputs are addressed with an error message, and the caller is prompted to try again.                                                                                                                                                                                                                                                                                                                                                        |
| Music on hold (Play Music)        | While waiting in a queue, the default hold music (defaultmusic\_on\_hold.wav) is played.                                                                                                                                                                                                                                                                                                                                                            |
| Disconnect                        | The flow concludes by disconnecting the call.                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Flow activities

The following table describes the sequence of flow activities.

| Flow activity                           | Description                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New phone contact (Start)               | This is the starting point of the flow when a new phone contact is initiated by an inbound call.                                                                                                                                                                                                                                                                            |
| Play message (Welcome Prompt)           | The customer is greeted with a message: **Welcome to the Webex Contact Center!** This step uses Cisco Cloud Text-to-Speech (TTS) to generate the message.                                                                                                                                                                                                                   |
| Main menu (IVR Menu)                    | A menu is presented to the caller with various options: Press 1 for services teamPress 2 for sales teamPress 3 for overseas teamPress 4 for hours of operationPress 5 for frequently asked questionsPress 6 for prerequisitesPress 7 for billing issuesPress 8 for a representativePress 9 to speak to the services team againPress # to repeat the menuPress \* to hang up |
| Routing based on selection (Conditions) | Based on the selected option, the caller is either transferred to a specific team (blind transfer) or placed in a queue to wait for the next available agent. Blind transfer to the services or sales teams.Queue the caller for a representative, with hold music playing during the wait.                                                                                 |
| Play music (Music on Hold)              | For queued calls, the system plays hold music while the caller waits for the next available agent.                                                                                                                                                                                                                                                                          |
| Error handling                          | If an invalid option is selected or the input times out, the system plays a message prompting the caller to try again.                                                                                                                                                                                                                                                      |
| Disconnect                              | After the interaction is complete or an error occurs, the flow disconnects the call using the **Disconnect Contact** activity.                                                                                                                                                                                                                                              |

#### Additional use cases

- **Sub-menus**: There’s a language selection menu, where users can choose their preferred language by pressing 1 for English or 2 for Spanish. The menu repeats if the caller presses #.
- **Error messages**: When invalid input is received, an error message is played. For critical errors, the system apologizes and disconnects the caller.

#### Additional resources

For more information, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

### Microsoft Dynamics HTTP(S) data dip

Use this flow designer template to create an IVR flow in Webex Contact Center that connects with MS Dynamics using an HTTP connector. This flow retrieves customer and case details using ANI from the CRM, greets the caller with a personalized message, and routes the call.

With this flow, the caller is greeted with a personalized message based on the CRM data, and if no case is found, the call is transferred to an agent. The agent is provided with the customer or case details in real time through a screen pop. The flow interacts with MS Dynamics through two HTTP requests:

1. Fetches customer details by performing an ANI lookup.
2. Retrieves the most recent case details based on the customer ID. If no customer or case information is found, the call is routed to an agent, and the appropriate message is played to the caller. The agent receives a screen pop showing either a **New Case**form or the details of the last created case for the customer.

Screen pops are enabled to ensure agents are equipped with the necessary information when answering calls.

#### Prerequisites

Ensure that the following requirements are met before implementing this flow:

- Application registered in Azure for MS Dynamics CRM.
- OAuth 2.0 and connector setup in Control Hub must be configured beforehand.
- Import the template into Flow Designer.
- Adjust the flow variables, queues, and any specific configurations based on your organizational needs.

The flow uses Cisco Text-to-Speech (TTS) for dynamic prompts. If static audio is required, users can upload audio files. Default hold music is used from the Webex repository.

#### Flow breakdown

The following table describes the various flow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Flow element                        | Description                                                                                                                                             |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Call received                       | The caller's ANI is captured.                                                                                                                           |
| Strip ANI                           | The **+** country code is removed from the ANI.                                                                                                         |
| Fetch customer info                 | An HTTP request is made to MS Dynamics CRM to look up customer details using the stripped ANI.                                                          |
| Conditional check - customer exists | If the customer exists, another HTTP request is made to fetch their case details. If the customer doesn't exist, a **No Case Found** message is played. |
| Play personalized case info         | If a case is found, the caller is greeted with details of their last case.                                                                              |
| Route to agent or disconnect        | The caller is then offered the option to speak to an agent or disconnect.                                                                               |
| Screen pop for agent                | When the agent answers, the case details or new case form is presented in a new browser tab.                                                            |

#### Flow activities

The following table describes the sequence of flow activities for an IVR flow that connects with MS Dynamics using an HTTP connector.

| Flow activity                       | Description                                                                                                                                             |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start                               | Initiates the flow when the call is received.                                                                                                           |
| Strip ANI                           | Strips the **+** country code from the ANI to prepare for the MS Dynamics lookup.                                                                       |
| Get customer info                   | An HTTP GET request is sent to retrieve the customer’s full name and contact ID based on the ANI.                                                       |
| Conditional check - customer exists | Checks if the customer exists in MS Dynamics. If true, fetches the case details. If false, plays a message informing the caller that no case was found. |
| Get case info                       | Retrieves the case title and case number using the customer’s ID from the previous step.                                                                |
| Play personalized message           | Greets the caller by name and provides case details using TTS (Text-to-Speech).                                                                         |
| Play no case found                  | Plays a message if no case is found for the caller and informs them they will be transferred to an agent.                                               |
| Main menu                           | Offers the caller the choice to connect with an agent or disconnect the call.                                                                           |
| Queue contact                       | Routes the caller to an available agent based on predefined queue settings.                                                                             |
| Play music                          | Plays hold music while the caller waits in the queue.                                                                                                   |
| Disconnect contact                  | Ends the call if the caller chooses to disconnect.                                                                                                      |
| Screen pop                          | Pops up the case information or new case form for the agent when the call is answered.                                                                  |

#### Additional resources

For step-by-step instructions on configuring flows, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

For an MS Dynamics integration demonstration, see [how to configure a custom connector for MS Dynamics CRM](https://app.vidcast.io/share/17b06533-8391-4327-b51f-0716076b8ea3).

For more information on API tools to authenticate to Microsoft Dataverse environments, see [Use Insomnia with Dataverse Web API](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/insomnia).

### Percentage allocation and A/B distribution

Use this Webex Contact Center flow designer template to distribute calls by percentage across different queues, ensuring smooth operation and minimizing drop-offs during high call volumes.

This flow distributes incoming calls based on a percentage-based allocation. Specifically, 90% of contacts are routed to the main queue, 0% to overflow support (inactive), and 10% to an offsite queue. After allocation, callers are played a message indicating their queue assignment, followed by music on hold until an agent is available. You can modify the flow to suit your organization’s needs.

This flow uses Cisco Text-to-Speech (TTS) for any audio prompts. For music, it defaults to the built-in file (`defaultmusic_on_hold.wav`), for music on hold.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this flow:

- Create entry points, queues, teams, and entry point mappings.
- Upload static audio files if custom audio prompts are used instead of Cisco Text-to-Speech (TTS).

For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

#### Flow breakdown

The following table describes the various flow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Flow element          | Description                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| Call receipt          | The call enters the flow at the **NewPhoneContact** point.                                       |
| Percentage allocation | 90% of calls are routed to the **Main Queue**. 10% of calls are routed to the **Offsite Queue**. |
| Play queue message    | After the percentage allocation, the caller hears a message indicating their allocation path.    |
| Queue contact         | The caller is placed in the assigned queue.                                                      |
| Hold music            | While waiting in the queue, callers hear hold music.                                             |
| Agent assignment      | Calls are routed to the available agent in their assigned queue.                                 |

#### Flow activities

The following table describes the sequence of flow activities.

| Flow activity     | Description                                                                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| NewPhoneContact   | This is the starting point when a new phone contact is received.                                                                               |
| PercentAllocation | Allocates the incoming contact based on the percentage distribution: 90% directed to the **Main Queue**.10% directed to the **Offsite Queue**. |
| SetVariable       | Captures the percentage allocated (90%, 10%) into a variable called **PercentageAllocated**.                                                   |
| SetVariable       | Captures the exit path (**Main Queue** or **Offsite**) the call took into a variable called **PercentageExitPath**.                            |
| PlayMessage       | Plays a message using Cisco TTS informing the caller of their allocation, such as: **You’ve reached 90% allocation! Branch 1 Main Queue.**     |
| QueueContact      | Queues the contact based on the allocated path (**Main Queue** or **Offsite**).                                                                |
| PlayMusic         | Plays hold music (defaultmusic\_on\_hold.wav) while the caller waits in the queue.                                                             |

#### Additional resources

For more information, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

### Salesforce HTTP(S) data dip

Use this flow designer template to create an IVR flow in Webex Contact Center that connects to Salesforce through an HTTP connector, enabling dynamic routing and data extraction for managing Salesforce cases.

This flow uses Webex Contact Center's HTTP connector to retrieve customer information from Salesforce using an ANI lookup. The flow fetches the customer's account, contact, and case information from Salesforce and routes the call accordingly.

This flow uses Cisco Text-to-Speech (TTS) for any audio prompts. For music, it defaults to the built-in file (`defaultmusic_on_hold.wav`), for music on hold.

#### Prerequisites

Before configuring this flow, ensure the following:

- Create entry points, queues, teams, entry point mappings, and any other organization-specific configuration activities like connectors, outdial ANI, and more.
- Configure the Salesforce connector using OAuth2\. For detailed steps, see [Configure the connected app for Webex Contact Center Salesforce connector](https://help.webex.com/n26v7heb/).
- Import the attached flow `Salesforce_HTTP_Connector.json` into the Webex Contact Center flow designer.
- Use the [Salesforce API collection](https://developer.salesforce.com/docs/atlas.en-us.api%5Frest.meta/api%5Frest/intro%5Frest.htm) to explore the REST APIs.
- To manually generate the OAuth access token, use the following command:  
```  
curl --location --request POST 'https://abcde-dev-ed.my.salesforce.com/services/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'client_id=clientId' \
--data-urlencode 'client_secret=clientSecret' \
--data-urlencode 'username=yourLogin@salesforce.com' \
--data-urlencode 'password=yourPassword'  
```

#### Use case

This example integration demonstrates how this flow ensures seamless customer service by integrating Salesforce with Webex Contact Center, ensuring that relevant information is readily available to both customers and agents.

1. A customer calls into Webex Contact Center and their phone number is captured.
2. The system performs an ANI lookup in Salesforce to find matching account and contact information.
3. Based on the data retrieved, the customer is greeted with a personalized IVR message.
4. If there’s an open case associated with the customer, the agent receives this information on their desktop.
5. After the call, Webex Contact Center posts call details and comments back to the Salesforce case.

#### Flow breakdown

The following table describes the various flow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Flow element           | Description                                                                                                                                                                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ANI lookup and routing | The flow begins by capturing the customer's phone number. The phone number is formatted, and a Salesforce API call retrieves the account and contact associated with the ANI. If the customer is found, they’re routed based on the associated Salesforce case. |
| Post-call updates      | Once the agent completes the call, Webex Contact Center posts information such as call comments and call IDs to the relevant Salesforce case.                                                                                                                   |

#### Flow activities

The following table describes the sequence of flow activities.

| Flow activity                     | Description                                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Start (NewPhoneContact)           | Captures the incoming call details and begins the flow.                                                          |
| Set phone number (SetPhoneNumber) | Formats the captured phone number for Salesforce API lookup.                                                     |
| Account lookup (AccountByANI)     | Performs an HTTP GET request to Salesforce, retrieving the customer’s account details based on the phone number. |
| Contact lookup (ContactByANI)     | Fetches the contact associated with the phone number through a Salesforce SOQL query.                            |
| Case lookup (CasebyContactId)     | Retrieves the open cases linked to the contact, fetching case details including case number and ID.              |
| Queue contact (QueueContact)      | Routes the call to the appropriate agent based on the retrieved Salesforce information and customer priority.    |
| Play music (Music)                | Plays hold music while the customer waits to be connected to an agent.                                           |
| Screen pop (ScreenPopAccount)     | Opens the customer’s Salesforce account page on the agent's desktop when the call is answered.                   |
| Post comment (PostComment)        | Posts the call details to the relevant Salesforce case once the interaction is complete.                         |
| End flow (EndFlow)                | Ends the flow after completing all tasks.                                                                        |

#### Additional resources

For more information on configuring Salesforce with Webex Contact Center, see [Salesforce REST API introduction](https://developer.salesforce.com/docs/atlas.en-us.api%5Frest.meta/api%5Frest/intro%5Frest.htm) and [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

For a comprehensive video configuration walkthrough, watch this two-part series:

- [Part 1 of 2: Configure Salesforce HTTP Connector](https://app.vidcast.io/share/51d8f1c7-f1ae-4963-97c2-73102a85fbf3)
- [Part 2 of 2: Configure Salesforce HTTP Connector](https://app.vidcast.io/share/82e9adf5-cd50-43ce-9ac4-3a34d7a23e03)

### ServiceNow HTTP(S) data dip

Use this flow designer template to securely retrieve and update incidents and other object types in ServiceNow through Webex Contact Center.

This flow integrates Webex Contact Center with ServiceNow using an HTTP connector to route decisions and retrieve incident details through ServiceNow’s REST APIs. It handles inbound voice calls, performs an ANI lookup, fetches relevant information, and delivers personalized service. The process flow is as follows:

1. A call is received by Webex Contact Center.
2. A welcome message is played to the caller, mentioning their incident details.
3. The system performs a lookup in ServiceNow using the ANI to fetch the caller's `sys_id` to get the caller's object identifier on ServiceNow.
4. Based on the `sys_id`, the system looks up the active incident for the caller.
5. The incident number is played back to the caller.
6. The call is queued for the next available agent, prioritized based on incident severity.
7. Hold music is played while the caller waits in the queue.
8. Once the call is connected to an agent, the incident information is displayed on the agent's desktop.
9. Post-call, Webex Contact Center posts call information back to the relevant incident in ServiceNow.

#### Prerequisites

Before configuring this flow, ensure the following:

- **OAuth2 setup**: Configure OAuth2 in ServiceNow and Webex Contact Center, following the [video tutorial](https://app.vidcast.io/share/22e511b2-cb81-474d-a6c6-982214d0e473).
- **Admin setup**: Log in to [admin.webex.com](http://admin.webex.com) and configure the connector. Go to Contact Center \> Connectors \> Custom Connector \> OAuth2. Enter the necessary credentials as outlined in the [video tutorial](https://app.vidcast.io/share/22e511b2-cb81-474d-a6c6-982214d0e473).

#### Use case example

This example integration demonstrates how Webex Contact Center can enhance customer experience through personalized interactions, while leveraging ServiceNow for ANI lookups and incident management:

1. **Inbound call**: Customer calls into Webex Contact Center.
2. **ANI lookup**: Webex performs an ANI lookup in ServiceNow to identify the caller.
3. **Incident lookup**: ServiceNow retrieves the associated Incident ID based on the caller's details.
4. **Personalized greeting**: Customer is greeted with a personalized message, referencing their active incident.
5. **Routing and prioritization**: Calls are routed based on the incident's severity, ensuring critical issues are addressed first.
6. **Agent assignment**: The call is routed to an available agent, with incident details displayed on the agent's desktop.
7. **Post-call updates**: Webex Contact Center posts relevant call information, including call identifiers, to ServiceNow using event flows.

#### Flow activities

The following table describes the activities used in the flow and their role in the integration.

| Flow activity                           | Description                                                                                                                                     |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Start (New Phone Contact)               | The flow begins when an inbound call is received.                                                                                               |
| Play message (Greeting)                 | Plays a welcome message using Cisco Cloud Text-to-Speech, such as: **Welcome to ServiceNow demo. Your incident number is:** **{{incidentNum}}** |
| Set variable (Digit Strip ANI)          | Strips the international code (+1) from the ANI for exact matching.                                                                             |
| Set variable (Format ANI)               | Formats the ANI into ServiceNow's required format for queries: (123) 456-7890.                                                                  |
| HTTP request (Lookup User)              | Looks up the user’s sys\_id in ServiceNow using their ANI.                                                                                      |
| HTTP request (Lookup Incident)          | Uses the sys\_id to retrieve the caller's active incident from ServiceNow.                                                                      |
| Play message (Incident Number)          | Announces the incident number to the caller using Text-to-Speech.                                                                               |
| Queue contact (Queue to agent)          | Places the caller in the queue for the next available agent, based on incident severity.                                                        |
| Play music (Hold music)                 | Plays hold music while the caller is in the queue.                                                                                              |
| Post call (Post Comments to ServiceNow) | Posts the call information, including the incident number, back to ServiceNow once the call ends.                                               |

#### Additional resources

To explore and test the REST APIs, you can import the ServiceNow API Postman collection (`ServiceNow API Collection.postman_collection.json`) into Postman. This helps in understanding which APIs are available and how they interact with Webex Contact Center.

- ServiceNow REST API documentation: [REST API docs](https://docs.servicenow.com/bundle/paris-application-development/page/integrate/inbound-rest/concept/c%5FRESTAPI.html)
- ServiceNow table API documentation: [Table API docs](https://developer.servicenow.com/dev.do#!/reference/api/sandiego/rest/c%5FTableAPI)

For more information on Webex Contact Center flows, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

### Simple inbound call to queue

Use this flow designer template in Webex Contact Center to provide a simple process for handling inbound calls. Callers are greeted, queued to an agent, and hear hold music while waiting.

This flow provides a straightforward process for handling inbound calls in a contact center:

1. A call is received and enters the flow through the entry point.
2. A welcome message is played to the caller.
3. The caller is placed in a queue for the next available agent.
4. While waiting in the queue, hold music is played to the caller.
5. This flow ensures a smooth experience by placing error-handling mechanisms and allowing fallback scenarios in case agents aren’t available.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this flow:

- Create entry points, queues, teams, and entry point mappings.
- Upload static audio files if custom audio prompts are used instead of Cisco Text-to-Speech (TTS).

For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

#### Flow activities

The following table describes the sequence of flow activities involved in this flow template.

| Flow activity                 | Description                                                                                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start (New Phone Contact)     | The flow begins when a call is received through the entry point. The call is accepted into the flow and proceeds to the next step.                                                                                              |
| Play message (Welcome Prompt) | A message is played to welcome the caller. In this flow, the message says: **Welcome to Webex Contact Center**! This message is configured using Cisco TTS, but it can be replaced with custom recordings.                      |
| Queue (Direct Contact)        | After the welcome message, the call is placed into a queue. The queue is set to direct the call to the **Q\_arubhatt** queue, which routes the caller to the longest available agent.                                           |
| Play music (Music on Hold)    | While waiting in the queue, the flow plays hold music (defaultmusic\_on\_hold.wav). It plays for 30 seconds before looping.                                                                                                     |
| Play message (Hold Message)   | A secondary message is played while the caller is waiting: **Thank you for your patience. Please wait while we find you an expert.** This message is configured using Cisco TTS, but it can be replaced with custom recordings. |
| End flow                      | The flow terminates upon agent connection or if an error occurs. It ensures the caller is smoothly handled, whether they are connected to an agent or if the flow needs to end due to an error.                                 |
| Error handling                | The flow is designed to handle unexpected issues by terminating gracefully, with fallback routes available.                                                                                                                     |

#### Additional resources

For more information, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

### Virtual agent with Google DialogFlow CX

Use this flow designer template to integrate Google DialogFlow CX with Webex Contact Center. This flow provides enhanced customer interaction with flexible and dynamic data handling.

This flow demonstrates how to pass data from Webex Contact Center to Google DialogFlow CX, allowing you to leverage advanced virtual agent capabilities. It includes examples for handling caller inputs such as names, appointments, and call reasons, with a focus on transferring data seamlessly between both platforms.

This flow uses Cisco Text-to-Speech (TTS) for audio prompts, if any.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this subflow:

- Create entry points, queues, teams, entry point mappings, and any other organization-specific configuration activities like connectors.
- Upload static audio files if custom audio prompts are used instead of Cisco Text-to-Speech (TTS).
- Set up the Google DialogFlow CX virtual agent and configure necessary webhook integrations.

#### Flow breakdown

1. Call is received and enters the flow.
2. The caller is directed to an API that retrieves their name from a mock endpoint.
3. A welcome message is played to the caller, including their name, with the help of Google DialogFlow CX.
4. DialogFlow CX virtual agent interacts with the caller to gather inputs such as appointment dates and times.
5. The customer data is passed back to Webex Contact Center for potential further processing.
6. Based on the interaction, the call either escalates or ends.
7. If escalated, the caller is placed in a queue.
8. Hold music is played while the caller waits for an agent.

#### Flow activities

The following table describes the sequence of flow activities.

| Flow activity                  | Description                                                                                                                                                                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Start                          | The flow begins when a call is received, initiated through the NewPhoneContact activity.                                                                                                                                                   |
| HTTP request (GetCustomerName) | The system makes an API request to retrieve the customer's name from an external system through HTTP request. The result is stored in a global variable (DF\_CustomerName) that is used for further interaction with Google DialogFlow CX. |
| Virtual agent                  | The flow invokes the VirtualAgent activity to pass the customer's name and interact with Google DialogFlow CX. The virtual agent gathers information, including call reason, appointment details, and more.                                |
| Parse                          | This activity parses the response received from DialogFlow CX and updates the flow variables (Call\_Reason, appointment\_date, appointment\_time) accordingly.                                                                             |
| Set variable - appointment     | The appointment date and time gathered from DialogFlow CX are formatted and stored in a global variable (DF\_Appointment).                                                                                                                 |
| Queue contact                  | After the virtual agent interaction, the customer is placed into a queue to wait for the next available agent.                                                                                                                             |
| Play music                     | While the caller waits in the queue, the system plays default hold music (defaultmusic\_on\_hold.wav).                                                                                                                                     |
| Disconnect contact             | If no further action is required, the call is disconnected using the DisconnectContact activity.                                                                                                                                           |

#### Additional resources

For more details on integrating Webex Contact Center with Google DialogFlow CX, see [Google DialogFlow CX developer documentation](https://cloud.google.com/dialogflow/cx/docs) and [Configure virtual agent-voice in Webex Contact Center](https://help.webex.com/n6gaghu/).

For support, visit [Webex Contact Center developer support](https://developer.webex.com/explore/support) or join the [Webex Contact Center APIs developer community](https://community.cisco.com/t5/contact-center/bd-p/j-disc-dev-contact-center).

### Zendesk HTTP(S) data dip

This template uses Webex Contact Center’s HTTP connector to integrate with Zendesk. Use this flow designer template to perform customer data lookups, manage tickets in Zendesk, and efficiently.

This flow uses Zendesk’s APIs to enhance Webex Contact Center by extracting customer data based on ANI (Automatic Number Identification) and fetching ticket details. It routes calls based on incident severity or agent availability, improving customer interactions. The system can perform several actions:

- Lookup a Zendesk user based on ANI (the caller's number).
- Retrieve the user’s most recent unresolved ticket.
- Present relevant ticket details to the customer through IVR.
- Route the call to an agent based on predefined criteria or let the customer opt to disconnect.

This flow uses Cisco Text-to-Speech (TTS) for any audio prompts. For music, it defaults to the built-in file (`defaultmusic_on_hold.wav`), for music on hold.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this flow:

- Ensure API authentication is enabled in the Zendesk instance. Follow the steps: Admin \> Apps and Integrations \> APIs \> Enable API authentication.
- The Zendesk HTTP connector must be configured using BasicAuth.
- Create entry points, queues, teams, and any other organization-specific configuration activities.
- Upload static audio files if custom audio prompts or music files are used instead of Cisco Text-to-Speech (TTS).

For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

#### Use case

Use this example to understand more about how this flow works.

1. A customer calls into Webex Contact Center.
2. An ANI lookup is performed to fetch the customer details from Zendesk.
3. The most recent ticket associated with the customer is retrieved.
4. The customer is greeted through an IVR and informed of the status of their ticket.
5. The customer can either:
  - Connect to an agent.
  - Disconnect if they choose not to speak to an agent.
6. Post-call, the system can update the Zendesk ticket with relevant call information.

#### Flow breakdown

The following table describes the various flow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Flow element           | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| Call received          | The call enters the system and the Zendesk connector starts.          |
| Lookup user in Zendesk | The system performs a lookup in Zendesk using the caller's number.    |
| Fetch ticket details   | The system retrieves the most recent unresolved ticket for the user.  |
| Present ticket details | The customer is informed of the ticket status through an IVR message. |
| Menu options           | The customer can choose to speak to an agent or disconnect.           |

#### Flow activities

The following table describes the sequence of flow activities.

| Flow activity           | Description                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| Start                   | The flow begins when a call is received.                                                               |
| Lookup user (Zendesk)   | This activity performs an HTTP request to Zendesk, searching for the user based on their ANI.          |
| Fetch ticket details    | Another HTTP request is made to Zendesk to retrieve the most recent ticket for the user.               |
| Present ticket details  | A message is played to the caller through TTS, providing information about their ticket's status.      |
| Confirmation menu       | The system presents a menu to the customer, allowing them to either connect to an agent or disconnect. |
| Queue contact           | If the customer chooses to connect to an agent, they’re placed in a queue.                             |
| Play music              | Hold music is played while the customer waits for an agent.                                            |
| Post comments (Zendesk) | After the call, the system posts a comment on the Zendesk ticket summarizing the interaction.          |
| Disconnect              | The system disconnects the call if the customer opts to disconnect or after the call is completed.     |

#### Additional resources

This flow leverages Webex Contact Center's HTTP connector to interact with Zendesk’s APIs. For more information, see [Zendesk API documentation](https://developer.zendesk.com/documentation/developer-tools/working-with-the-zendesk-apis/exploring-zendesk-apis-with-postman/) and [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

### Avoid duplicate callback

This flow template demonstrates how to prevent duplicate callback entries within Webex Contact Center by leveraging the enhanced HTTP Activity with support for `Content-Type: GraphQL`. It uses the WebexCC APIs HTTP connector to interact with the Search API, enabling the flow to check for existing callback requests from the same caller. This template improves efficiency and customer experience by avoiding redundant callbacks.

This flow template checks if a customer has already placed a callback request in the system. It utilizes the Search API via GraphQL to determine if an active callback task exists for the caller's ANI (Automatic Number Identification).

It uses the feature that enhances the HTTP Activity within Webex Contact Center by adding support for `Content-Type: GraphQL` \- Ability to use the WebexCC APIs HTTP connector to use the Search API via the new GraphQL content type, including variable substitution.

#### Prerequisites

Ensure that the following requirements are met before implementing this flow:

- Configure a Connector to Webex Contact Center APIs.
- Ensure the Webex Contact Center environment is properly set up: Entry Point, Entry Point Mapping, Queues, etc.

#### Flow breakdown

| Flow element                          | Description                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Call is received                      | Call enters the flow at the **NewPhoneContact** activity.                                                                                                                                                                                                                                                                                                                               |
| Initial greeting                      | The **PlayMessage\_wgk** activity plays an initial greeting message to the caller.                                                                                                                                                                                                                                                                                                      |
| Extract Current Time                  | The **SetVariable\_7a1** activity extracts the current time in epoch milliseconds and stores it in the currentTime variable.                                                                                                                                                                                                                                                            |
| Calculate Time Hours Ago              | The **SetVariable\_8t9** activity calculates the time 24 hours prior to the current time in epoch milliseconds and stores it in the goback\_by\_a\_day variable.                                                                                                                                                                                                                        |
| Trim the ANI                          | The **SetVariable\_ak4** activity trims the ANI (caller's phone number) to remove the "+1" prefix for lookup purposes.                                                                                                                                                                                                                                                                  |
| Search API Call (GraphQL)             | The **SearchAPIRequest** activity makes a call to the Webex Contact Center Search API using GraphQL to find any existing active callback tasks based on the ANI. It uses the goback\_by\_a\_day and currentTime variables to search within the last 24 hours. The GraphQL query searches for tasks matching the caller's ANI or trimmed ANI that are active and have a callback status. |
| Check API Response                    | The **SetVariable\_xye** activity combines the HTTP status code, callback status, and HTTP response body from the Search API call into the apiOutput variable. The **Condition\_ts8** activity checks if the HTTP response body from the Search API call contains "Not Processed", indicating no duplicate callback.                                                                    |
| Handle Duplicate Callback (If Found)  | If a duplicate callback is found (the API response contains a callback), the **PlayMessage\_99x** activity informs the caller that a callback is already scheduled and then the **DisconnectContact\_mx8** activity disconnects the call.                                                                                                                                               |
| Schedule New Callback (If Not Found): | If no duplicate callback is found, the flow proceeds to the **Menu\_lsi**activity, which presents the caller with options to schedule a callback or wait in the queue.                                                                                                                                                                                                                  |
| Schedule Callback                     | If the caller chooses to schedule a callback (presses 1), the **Callback\_20e** activity schedules a callback using the caller's ANI. A confirmation message is played via **PlayMessage\_ysw** and then **DisconnectContact\_mx8\_2bg** disconnects the call.                                                                                                                          |
| Wait in Queue                         | If the caller chooses to wait in the queue (presses 2), the **SetVariable\_c0y** increments a counter. The call is then queued to an agent via **QueueContact\_95e** and music is played on hold via **PlayMusic\_qne**. The call loops back to the **Menu\_lsi** activity.                                                                                                             |

#### Variables

- **callBackStatus:** (STRING) - The status of the callback.
- **counter:** (INTEGER) - A counter variable.
- **currentTime:** (STRING) - The current time in milliseconds since epoch.
- **goback\_by\_a\_day:** (STRING) - The time 24 hours ago in milliseconds since epoch.
- **apiOutput:** (STRING) - The combined HTTP status code, callback status, and HTTP response from the Search API.
- **ANITrim:** (STRING) - The trimmed ANI (phone number) of the caller.
- **response:** (STRING) - The HTTP response from the Search API.

#### Flow activities

The following table describes the sequence of flow activities involved in this flow template.

| Flow activity                                   | Description                                                                                                                                                       |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start (NewPhoneContact)                         | Starts the flow when the call is received.                                                                                                                        |
| **Actions**                                     |                                                                                                                                                                   |
| **PlayMessage**                                 | Plays a message to the caller.                                                                                                                                    |
| **Callback**                                    | Schedules a callback for the caller.                                                                                                                              |
| **PlayMusic**                                   | Plays music on hold.                                                                                                                                              |
| **QueueContact**                                | Queues the call to an agent.                                                                                                                                      |
| **HTTP**                                        | Makes an HTTP request to the Search API using GraphQL.                                                                                                            |
| **DisconnectContact**                           | Disconnects the call.                                                                                                                                             |
| **Set Variable**                                | **SetVariable:** Sets various variables, including current time, time 24 hours ago, trimmed ANI, and API output.                                                  |
| **Conditions**                                  | **Condition:** Checks if the HTTP response body contains "Not Processed". **Menu:** Provides the caller with options to schedule a callback or wait in the queue. |
| **Hold Music (MusicOnHold)**                    | Plays hold music while the caller waits in the queue.                                                                                                             |
| **Loop Handling (CallLoopCycle and LoopCycle)** | Ensures that calls looping too many times are directed to the final menu.                                                                                         |
| **Disconnection (DisconnectContact)**           | Disconnects the call after messages or when the caller chooses to end the interaction.                                                                            |

#### Additional resources

For more information on using HTTP requests with GraphQL and other activities within Webex Contact Center, refer to the [HTTP Request](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5Fb1192550-38d4-46e5-be3d-2119794def93) activity section.

Also refer to the [Webex Contact Center APIs documentation](https://developer.webex.com/webex-contact-center/docs/webex-contact-center) for details on the Search API and GraphQL queries.

### Audio prompt recording and management

This flow template provides a streamlined method for administrators to record and manage audio prompts within Webex Contact Center via a Telephony User Interface (TUI). It leverages enhanced HTTP Activity capabilities, including support for \`Content-Type: Form Data\` to interact with Webex Contact Center's Audio File (Prompt) APIs. This template replicates functionalities familiar from on-premises systems, improving customer experience and operational efficiency. 

#### Prerequisites

- Create and Entry Point, and configure the Entry Point Mapping from the Control Hub settings page for Webex Contact Center. Refer to the [Webex Contact Center Setup and Administration Guide](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#Cisco%5FGeneric%5FTopic.dita%5Fe338e055-64b0-4973-bd52-8a5581dcb0ee).
- Configure a Connector to Webex Contact Center APIs.
- If Cisco Text-to-Speech (TTS) is not enabled for prompts, upload the required static audio files.

#### Flow Breakdown

| Flow element                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Call is Received                        | Call enters the flow at the **NewPhoneContact** activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| (OPTIONAL) Admin Authentication via OTP | The flow developer can implement an optional authentication barrier for the administrator, using a secure method like OTP delivered via SMS to the ANI, or a randomly generated number/PIN. This can be added before the main menu.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Main Menu                               | The **MainMenu** activity (IVR Menu) presents the administrator with the following options: **Press 1 to create a new prompt.** **Press 2 to update an existing prompt.** **Press 3 to delete an existing prompt.** **Press 4 to exit the flow**                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Create Prompt (Option 1)                | The **PlayMessage\_kcx** activity prompts the administrator to record a new audio prompt. The **Record\_e0j** activity records the audio input from the administrator. The recorded audio is then sent to the Webex Contact Center API using the **CreatePrompt** HTTP request activity with Content-Type: Form Data. The **Parse\_gke** activity parses the response to extract the id and blobId of the newly created prompt. This is needed in case one needs to update the same prompt. The **PlayMessage\_q16** activity confirms that the message has been created. The system plays back the recorded prompt for confirmation using **PlayRecordedMessage**. |
| Update Prompt (Option 2)                | The **RecordPromptAfterTone** activity prompts the administrator to record an updated prompt. The **Record\_e38** activity records the new audio. The flow then renames the file to be deleted using **RenameFileToDelete**. This ensures references to this audio file are removed wherever audio files are referred by name. The updated audio is sent to the Webex Contact Center API using the **HTTPRequest\_13n** HTTP request activity with Content-Type: Form Data. The system confirms the update and plays back the new prompt using **PlayMessage\_q16\_jpg\_03l** and **PlayMessage\_0l6**.                                                             |
| Delete Prompt (Option 3)                | The **DeleteConfirm** activity confirms the deletion. The flow renames the file to be deleted using **RenameFileToDelete**. The **HTTPRequest\_raf** activity sends a DELETE request to the Webex Contact Center API to delete the prompt. The system confirms the deletion using **DeleteConfirm**.                                                                                                                                                                                                                                                                                                                                                                |
| Exit (Option 4)                         | The **Goodbye** activity plays a thank you message. The call is disconnected using the **DisconnectContact\_cz4** activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Variables

| Variable      | Type   | Description                                                               |
| ------------- | ------ | ------------------------------------------------------------------------- |
| blobId        | STRING | The Blob ID of the audio file                                             |
| audioFileName | STRING | The name of the audio file (default: "EmergencyDemo.wav").                |
| id            | STRING | The ID of the audio file.                                                 |
| status        | STRING | The status of the API request.                                            |
| newFileName   | STRING | The name of the updated audio file (default: "updatedFile.wav").          |
| response      | STRING | The HTTP response from the API requests. This is optional, for debugging. |

#### Activities Used

| Flow activity | Description                                                                                                                                                                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start         | **NewPhoneContact:** Starts the flow when the call is received.                                                                                                                                                                                                                                                                                                     |
| IVR Menu      | **MainMenu:** Plays a menu with options for prompt management.                                                                                                                                                                                                                                                                                                      |
| Create Prompt | **PlayMessage:** Prompts the administrator to record a new prompt. **Record:** Records the audio input. **HTTP Request:** HTTP request to create the audio prompt using Content-Type: FORM-DATA. **Parse:** Parses the HTTP response to extract the id and blobId. **PlayMessage:** Confirms the message creation. **PlayMessage:** Plays back the recorded prompt. |
| Update Prompt | **Menu:** Prompts the administrator to record an updated prompt. **Record\_e38:** Records the audio input. **HTTP Request:** HTTP request to update the audio prompt using Content-Type: FORM-DATA. **PlayMessage:** Confirms the message update. **PlayMessage:** Plays back the updated prompt.                                                                   |
| Delete Prompt | **Menu:** Confirms the deletion of the audio prompt. **HTTP Request:** Renames the file to be deleted. Needs Id of the prompt to be defined. **HTTP Request:** HTTP request to delete the audio prompt using Content-Type: Application/JSON and DELETE request.                                                                                                     |
| Other         | **Wait:** Wait activity. **SetVariable:** Sets variables. **DisconnectContact:** Disconnects the call.                                                                                                                                                                                                                                                              |

#### Additional Details

For more information on using the Record Activity, HTTP requests and Recording controls within Webex Contact Center, refer to the [HTTP Request](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5Fb1192550-38d4-46e5-be3d-2119794def93) activity section.

### Last agent routing template

The last agent routing template demonstrates how to implement Last Agent Routing within Webex Contact Center by leveraging the enhanced HTTP Activity with support for `Content-Type: GraphQL`. It uses the WebexCC APIs HTTP connector to interact with the Search API, enabling routing calls to the last agent who handled the call. This template enhances customer experience by connecting them with a familiar agent.

This flow template checks if a customer has called within the last 24 hours and, if so, routes the call to the same agent. It utilizes the Search API via GraphQL to find the last agent who handled the call based on the caller's ANI (Automatic Number Identification).

It uses the feature that enhances the HTTP Activity within Webex Contact Center by adding support for `Content-Type: GraphQL` \- Ability to use the WebexCC APIs HTTP connector to use the Search API via the new GraphQL content type: including variable substitution.

#### Prerequisites

- Configure a Connector to Webex Contact Center APIs.
- Ensure the Webex Contact Center environment is properly set up: Entry Point, Entry Point Mapping, Queues, etc.

#### Flow Breakdown

1. Call is Received:

  - Call enters the flow at the **NewPhoneContact** activity.
2. Initial Greeting:

  - The **PlayMessage** activity plays an initial greeting message to the caller.
3. Extract Current Time:

  - The **CurrentTime** activity extracts the current time.
4. Calculate Time 24 Hours Ago:

  - The **Goback\_By\_a\_day** activity calculates the time 24 hours prior to the current time.
5. Trim the ANI:

  - The **SetVariable** activity trims the ANI (caller's phone number) to remove the "+1" prefix for lookup purposes.
6. Search API Call (GraphQL):

  - The **SearchAPILastAgent** activity makes a call to the Webex Contact Center Search API using GraphQL to find the agent who handled the previous call based on the ANI.
  - It uses the `goback_by_a_day` and `currentTime` variables to search within the last 24 hours.
  - The GraphQL query searches for tasks matching the caller's ANI or trimmed ANI that are not active and extracts the owner ID (agent ID) of the task.
7. Debug Logging:

  - The **DebugLog** activity logs the HTTP status code and response body from the Search API call.
  - The **Debug\_Log** activity logs the extracted agent ID.
8. Check API Response:

  - The **Condition\_kxu** activity checks if the HTTP status code from the Search API call is 200 (success).
9. Check if Agent ID is Extracted:

  - The **Condition\_jtn** activity checks if an agent ID was successfully extracted from the Search API response.
10. Route to Last Agent (If Found):

  - If an agent ID is found, the **PlayMessage\_ee8** activity plays a confirmation message to the caller, informing them that they are being transferred to the same agent they spoke with previously.
  - The **QueueToAgent\_xh1** activity queues the call to the agent with the extracted agent ID.
11. Route to Default Queue (If Not Found):

  - If no agent ID is found (either the API call failed or no previous call was found within 24 hours), the **QueueToDefault** activity queues the call to a default queue.
12. Play Music on Hold:

  - The **PlayMusic\_i73** activity plays music on hold while the caller is waiting in the queue.

#### Variables

- **agentId:** (STRING) - The ID of the last agent who handled the call.
- **currentTime:** (STRING) - The current time in milliseconds since epoch.
- **goback\_by\_a\_day:** (STRING) - The time 24 hours ago in milliseconds since epoch.
- **Response:** (STRING) - The HTTP response from the Search API.
- **ANITrim:** (STRING) - The trimmed ANI (phone number) of the caller.

#### Flow activities

The following table describes the sequence of flow activities involved in this flow template.

| Flow activity                                   | Description                                                                                                                                                                                                                                                                           |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start (NewPhoneContact)                         | Starts the flow when the call is received.                                                                                                                                                                                                                                            |
| **Actions**                                     |                                                                                                                                                                                                                                                                                       |
| **PlayMessage**                                 | Plays a message to the caller.                                                                                                                                                                                                                                                        |
| **QueueToAgent**                                | Queues the call to a specific agent.                                                                                                                                                                                                                                                  |
| **PlayMusic**                                   | Plays music on hold.                                                                                                                                                                                                                                                                  |
| **Queue**                                       | Queues the call to a default queue.                                                                                                                                                                                                                                                   |
| **HTTP**                                        | Makes an HTTP request to the Search API using GraphQL.                                                                                                                                                                                                                                |
| **PlayMessage**                                 | Plays a message indicating the caller is being routed to the last agent.                                                                                                                                                                                                              |
| **Set Variable**                                | **CurrentTime:** Sets a variable to the current time. **Goback\_By\_a\_day:** Sets a variable to the time 24 hours ago. **DebugLog:** Logs the API response for debugging. **Debug\_Log:** Logs the extracted agent ID for debugging. **SetVariable\_7b4:** Trims the ANI for lookup. |
| **Conditions**                                  | **Condition\_jtn:** Checks if an agent ID is extracted. **Condition\_kxu:** Checks if the HTTP status code is 200.                                                                                                                                                                    |
| **Hold Music (MusicOnHold)**                    | Plays hold music while the caller waits in the queue.                                                                                                                                                                                                                                 |
| **Loop Handling (CallLoopCycle and LoopCycle)** | Ensures that calls looping too many times are directed to the final menu.                                                                                                                                                                                                             |
| **Disconnection (DisconnectContact)**           | Disconnects the call after messages or when the caller chooses to end the interaction.                                                                                                                                                                                                |

#### Additional resources

For more information on using HTTP requests with GraphQL and other activities within Webex Contact Center, refer to the [HTTP Request](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FGeneric%5FTopic.dita%5Fb1192550-38d4-46e5-be3d-2119794def93) activity section.

Also refer to the [Webex Contact Center APIs documentation](https://developer.webex.com/webex-contact-center/docs/webex-contact-center) for details on the Search API and GraphQL queries.

### AI Agent Autonomous (Package Tracking)

This flow utilizes an autonomous AI agent to manage voice interactions related to package tracking. The flow provides an option to escalate to human agents when necessary or on AI Agent errors.

The flow is designed to handle customer interactions about package tracking via an autonomous AI agent. The AI agent consists of an action to track package and a knowledge base related to general shipping queries. Customers can ask to speak to a human agent at any time.

#### Prerequisites

To use this flow, ensure the following are set up:

- An autonomous AI Agent configured with the appropriate action (along with fulfillment) and knowledge documents. A sample fulfillment flow is available in Webex Connect flow templates.
- Entry Point, Queue, Teams, and Entry Point Mapping configured in the Control Hub settings page for Webex Contact Center.
- Cisco Text-to-Speech (TTS) is enabled for generating custom messages dynamically.
- Upload static audio files if you are not using Cisco’s default audio.

#### Integration Breakdown

1. **Caller initiates contact**: The call is received by Webex Contact Center and directed to the autonomous AI agent.
2. **AI agent interaction**: The AI agent processes the caller’s request related to package tracking.
3. **Queue to Agent**: If escalation is required on customer request or due to AI Agent errors, the caller is placed in a queue for a human agent.
4. **Disconnect**: The interaction ends once the caller’s request is handled or the caller is transferred to an agent.

#### Activities Used in the Flow

| Flow activity             | Description                                                                                                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start (New Phone Contact) | This activity marks the beginning of the flow, triggered by a new call.                                                                                                                       |
| Virtual Agent V2 (VAV2)   | The activity responsible for the interaction between the flow and the AI Agent. Interaction. The same activity is used to initiate the conversation and to send state events to the AI agent. |
| Play Message              | Provides system messages using Cisco Text-to-Speech. Used to play an error message before escalation to human agent in case of VAV2 activity errors.                                          |
| Queue to Agent            | Manages queueing logic for escalation to human agents.                                                                                                                                        |
| Play Music                | Hold music played during queueing when the caller awaits agent connection.                                                                                                                    |
| Disconnect                | Ends the interaction after completion of tasks or if escalated to a human agent.                                                                                                              |

#### Error Handling

The flow includes error management strategies to handle unexpected issues gracefully, ensuring the caller is informed and redirected appropriately.

#### Developer Support

For deeper insights into using Webex Contact Center with autonomous AI agents, refer to related documentation:

- [Set up Autonomous Agents on Webex AI Agent Studio](https://help.webex.com/en-us/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide#Set-up-autonomous-AI-agent)
- [Webex Contact Center Flow Designer Guide](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer)

#### Additional Resources

For support related to this flow, contact the Webex Contact Center Developer Support team via the [Webex Contact Center developer support](https://developer.webex.com/explore/support) .

For further discussions, visit the [Webex Contact Center APIs Developer Community](https://community.cisco.com/t5/contact-center/bd-p/j-disc-dev-contact-center).

### AI Agent Scripted (Package Tracking)

This flow is designed to handle voice interactions related to package tracking using a scripted virtual agent. This flow demonstrates the simplest way to perform fulfilment for a scripted agent. In addition to that, the flow demonstrates queueing customers to different agent queues based on the last active intent and custom reports for AI Agents in Analyser.

This flow leverages a scripted Webex AI Agent to interact with customers regarding package tracking. The VAV2 (Virtual Agent V2) activity exits through its 'Handled' edge when the scripted agent raises a custom event to track the package. The flow uses a package tracking API to achieve this. This API is available to developers for testing and demos. The output data is parsed in the flow and passed back to the Agent via a State Event. More information on [configuring fulfilment for scripted agents for voice.](https://help.webexconnect.io/docs/configure-fulfilment-flows-for-ai-agent-actions)

#### Prerequisites

To use this flow, ensure the following are set up:

- A Webex AI Agent configured to handle package tracking inquiries. This agent is available to import while creating a new agent.
- Entry Point, Queue, Teams, and Entry Point Mapping configured in the Control Hub settings page for Webex Contact Center.
- Ensure Cisco Text-to-Speech (TTS) is enabled for generating dynamic audio messages.
- Upload static audio files for custom system notifications if necessary.

#### Integration Breakdown

| Integration Breakdown                             | Description                                                                                                                                                                                                            |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Caller initiates contact                          | The call is received by Webex Contact Center and directed to the scripted AI agent.                                                                                                                                    |
| Interaction state is logged using Global Variable | The flow sets CustomAIAgentInteractionOutcome global variable to log the state of customer's interaction with the AI agent. This is updated at various points and is used to build custom reports using visualiser.    |
| AI agent interaction                              | The AI agent processes customer input and responds based on configured intents. If the user intends to track a package and provides a valid package number, the control is handed back to the flow via a custom event. |
| AI agent metadata parsing and fulfilment          | The customer's package number is extracted from the VAV2 metadata and used in the HTTP activity.                                                                                                                       |
| Fulfilment response conditions                    | The flow checks if the package information is found or not and sets appropriate responses.                                                                                                                             |
| AI agent interaction is resumed\*                 | Depending on the fulfilment response, the message that should be sent to the customers is sent back to scripted agent via event data under 'State event'.                                                              |
| Agent handover and case activity                  | Determines the next steps based on the previous intent, guiding the flow to different queues based on previous intent.                                                                                                 |
| Queue to Agent                                    | If escalation is required or in case of errors, the caller is placed in a queue for a human agent.                                                                                                                     |
| Disconnect                                        | The interaction ends once the caller’s request is handled or the caller is transferred to an agent.                                                                                                                    |

#### Activities Used in the Flow

| Flow activity                    | Description                                                                                                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start                            | Initiates the flow when a new call is received.                                                                                                                 |
| Set Interaction Outcome Variable | Use the set variable activity to update CustomAIAgentInteractionOutcome global variable to store the latest state of the interaction with AI agent.             |
| AI Agent Interaction             | Manages package tracking inquiries using scripted interactions.The same activity is used to initiate the conversation and to send state events to the AI agent. |
| Parse Package Details            | Extracts package number from the metadata provided by the virtual agent.                                                                                        |
| HTTP Request for Package Info    | Sends a request to the logistics API to retrieve package status and estimated delivery. Use ABC123456 as a sample package number.                               |
| Conditional Logic                | Determines the response based on the package status or the HTTP status code of the API call.                                                                    |
| Set Response Variables           | Configures responses to communicate whether the package was found or the delivery details.                                                                      |
| Play Message                     | Provides system error messages using Cisco Text-to-Speech, especially in cases of system errors.                                                                |
| Case Activity                    | Guides the flow based on the previous intent, deciding on routing to specific queues.                                                                           |
| Queue to Agent                   | Manages queueing logic for escalation to human agents.                                                                                                          |
| Play Music                       | Hold music played during queueing when the caller awaits agent connection.                                                                                      |
| Disconnect                       | Ends the interaction after completion of tasks or if escalated to a human agent.                                                                                |

#### Flow Specifics

The flow JSON used in this example contains variables and activities essential for interaction handling, error processing, and communication between Webex Contact Center and DialogFlow. The key variables used include:

| Variable                        | Description                                                                                                                        |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| event\_name                     | Name of the event sent to the AI Agent.                                                                                            |
| event\_data                     | Event payload sent to the AI Agent.                                                                                                |
| status                          | Status of the package based on the HTTP response.                                                                                  |
| estimatedDelivery               | Estimated delivery date and time for the package based on the HTTP response.                                                       |
| packageResp                     | Response to be sent back to the customer based on HTTP activity response.                                                          |
| Global\_VoiceName               | Determines the voice used for text-to-speech.                                                                                      |
| CustomAIAgentInteractionOutcome | Logs the state of interaction - abandoned, handled, escalated, or errored - based on the customer's interaction with the AI agent. |

#### Error Handling

The flow includes error management strategies to handle unexpected issues gracefully, ensuring the caller is informed and redirected appropriately.

#### Additional Resources

For deeper insights into using Webex Contact Center with scripted AI agents, refer to related documentation:

- [Webex Contact Center Developer Documentation](https://developer.webex-cx.com)
- [Webex Contact Center Flow Designer Guide](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide)
- [Manage-custom-reports-for-AI-agents](https://help.webex.com/en-us/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide#Manage-custom-reports-for-AI-agents)
- [Configuring fulfilment for scripted agents for voice (in flow designer)](https://help.webexconnect.io/docs/configure-fulfilment-flows-for-ai-agent-actions)
- [API collection to track and create packages with examples](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/WEbEx-AI-Template-API/template%5FAPIs.postman%5Fcollection.json)

#### Developer Support

For support related to this flow, contact the Webex Contact Center Developer Support team via the [Webex Contact Center developer support](https://developer.webex.com/explore/support) .

For further discussions, visit the [Webex Contact Center APIs Developer Community](https://community.cisco.com/t5/contact-center/bd-p/j-disc-dev-contact-center).

### AI Agent Scripted (Doctor's Appointment Booking)

This template demonstrates the data flow between Webex Contact Center and Webex AI Agent Studio for an interaction that leverages a scripted agent. The flow contains several integrations with external systems. These are invoked based on custom events sent by AI Agent and the fulfillment data is passed back to the agent.

This flow showcases how data is passed between Webex Contact Center and Webex AI Agent Studio using custom events. This flow facilitates automated scheduling and management of doctor's appointments through a scripted AI agent. It integrates with external systems to check availability, create appointments, look up existing appointments, and cancel appointments. The flow ensures seamless communication between the caller and the AI agent, with escalation options to human agents when necessary.

#### Prerequisites

To use this flow, ensure the following are set up:

- A scripted AI Agent configured with relevant intents to handle appointment booking and cancellation. This can be imported from templates while creating a new scripted agent in the AI Agent Studio platform.
- Entry Point, Queue, Teams, and Entry Point Mapping configured in the Control Hub settings page for Webex Contact Center.
- APIs to interface with the external appointment management system.
- Cisco Text-to-Speech (TTS) is enabled for generating dynamic audio messages.
- Upload static audio files if you are not using Cisco's default audio.

#### Integration Breakdown

| Integration Breakdown                          | Description                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Caller initiates contact                       | The call is received by Webex Contact Center and directed to the AI agent.                                                                                                                                                                                                                                                                               |
| Interaction with AI agent                      | The AI agent processes customer input and responds based on configured intents.                                                                                                                                                                                                                                                                          |
| Switching of control between AI agent and flow | The control of the conversation is exchanged between the AI Agent and the flow at various steps. AI agent hands the control to the flow via custom events, the flow carries out appropriate fulfillment based on the event name and hands the control back to the AI Agent along with fulfillment data via State Event in the Virtual Agent V2 Activity. |
| Queue to Agent                                 | If escalation is required, the caller is placed in a queue for a human agent.                                                                                                                                                                                                                                                                            |
| Disconnect                                     | The interaction ends once the task is completed or the caller is transferred to an agent.                                                                                                                                                                                                                                                                |

#### Activities Used in the Flow

| Flow activity           | Description                                                                                                                                                                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start                   | This activity marks the beginning of the flow, triggered by a new call.                                                                                                                                                                                              |
| Virtual Agent V2 (VAV2) | The activity responsible for AI Agent interaction. The same activity is used to initiate the conversation and to send state events to the AI agent.                                                                                                                  |
| Parse                   | Used to parse event payload from the VAV2 activity.                                                                                                                                                                                                                  |
| Case                    | Used to check the event name sent by the VAV2 activity and branch to appropriate HTTP request activities.                                                                                                                                                            |
| HTTP Request            | Interacts with external systems to perform operations like checking availability, creating, looking up, or canceling appointments using HTTP requests based on the event name sent by the VAV2 activity. The activity also parses the response for the HTTP request. |
| Condition               | Evaluates the outcome of HTTP requests, directing the flow based on success or error conditions.                                                                                                                                                                     |
| Set Variable            | Used to configure variables like event name and event data, which are essential for re-invoking the VAV2 activity with appropriate state event parameters.                                                                                                           |
| Play Message            | Provides system messages using Cisco Text-to-Speech. Used to play an error message before escalation to human agent in case of VAV2 activity errors.                                                                                                                 |
| Queue to Agent          | Manages queueing logic for escalation to human agents.                                                                                                                                                                                                               |
| Play Music              | Hold music played during queueing when the caller awaits agent connection.                                                                                                                                                                                           |
| Disconnect Contact      | Ends the interaction after completion of tasks or if escalated to a human agent.                                                                                                                                                                                     |

#### Flow Specifics

The flow JSON used in this example contains variables and activities essential for interaction handling, error processing, and communication between Webex Contact Center and DialogFlow. The key variables used include:

| Variable            | Description                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| event\_name         | Name of the event sent to the AI Agent.                                    |
| event\_data         | Event payload sent to the AI Agent.                                        |
| event\_data\_string | String version of event\_data since the VAV2 activity accepts string only. |
| http\_input         | Request body for the HTTP activity based on VAV2 metadata.                 |
| Global\_VoiceName   | Determines the voice used for text-to-speech.                              |

#### Error Handling

The flow includes error management strategies to handle unexpected issues gracefully, ensuring the caller is informed and redirected appropriately.

#### Additional Resources

For deeper insights into setting up your AI Agents on Webex AI Agent Studio and using them with Webex Contact Center, refer to the [Webex AI Agent Studio Administration Guide](https://help.webex.com/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide).

#### Developer Support

- For any support regarding this integration, open a ticket with the Webex Contact Center Developer Support team via the [Webex Contact Center developer support](https://developer.webex.com/explore/support) .
- For further discussions, visit the [Webex Contact Center APIs Developer Community](https://community.cisco.com/t5/contact-center/bd-p/j-disc-dev-contact-center).

## Use subflow templates

Subflow templates function similarly to flow templates. These templates streamline the creation of subflows that can be integrated into multiple flows, reducing redundancy and development time.

To create subflows using subflow templates, choose the appropriate template, modify it to fit your needs, validate, publish, and incorporate it into your workflows. For more details, see [Create flows from flow templates](#task-template%5F05c77f3a-aed2-43ad-aee4-c65b777a870c).

### Collect callback info

Use this template to create a callback info collection subflow, enabling callers to stay in the queue or request a callback for flexible service options.

This subflow provides a menu that allows callers to opt for a callback or remain in the queue. If the callback option is chosen, it collects the necessary information for a callback, either using the caller's current number or an alternate number. You can modify the subflow to ensure a smooth caller experience by handling errors or unknown conditions, such as timeouts and invalid inputs.

This subflow uses Cisco Text-to-Speech (TTS) for any audio prompts. For music, it defaults to the built-in music-on-hold file, defaultmusic\_on\_hold.wav.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this subflow:

- Create entry points, queues, teams, entry point mappings, and any other organization-specific configuration activities like connectors, outdial ANI, and more.
- Upload static audio files if custom audio prompts are used instead of Cisco Text-to-Speech (TTS).
- Ensure that the callback variables (for example: callbackNumber, callbackNumberEntered, stayInQueue) are mapped correctly to your system to capture the appropriate data.

For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

#### Subflow inputs

- callbackNumber - STRING: The number to use for the callback (either the one the calleris calling from or a new number).
- stayInQueue - BOOLEAN: Indicates whether the caller chose to remain in the queue (True) or request a callback (False).

#### Subflow outputs

- callbackNumberEntered - STRING: The number that the caller entered for the callback,if they chose to provide an alternate number.
- stayInQueue - BOOLEAN: Whether the caller opted to stay in the queue or receive a callback.

#### Subflow breakdown

The following table describes the various subflow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Subflow element | Description                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start subflow   | The call enters the subflow.                                                                                                                                                        |
| Opt-out menu    | The caller is presented with an option to either stay in the queue or receive a callback. **Press 1** for callback.**Press 2** to stay in the queue.                                |
| Number menu     | If the caller chooses to receive a callback, they are presented with the option to: **Press 1** to use the number they are calling from.**Press 2** to enter a new callback number. |
| Collect digits  | If the caller chooses to enter a new callback number, they’re prompted to input their 10-digit number followed by the pound key (#).                                                |
| Set variable    | The collected callback number is stored in the callbackNumberEntered variable.                                                                                                      |
| End subflow     | The subflow ends after collecting the callback information or handling any errors.                                                                                                  |

#### Subflow activities

The following table describes the sequence of subflow activities for collecting callback info.

| Subflow activity | Description                                                                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start subflow    | The subflow begins when invoked.                                                                                                                                              |
| Opt-out menu     | This presents an option to the caller to either stay in the queue or receive a callback. This uses TTS to ask the caller to press 1 for a callback or 2 to stay in the queue. |
| Number menu      | If the caller chooses a callback, they’re prompted to either use their current number or enter a new one.                                                                     |
| Collect digits   | If the caller chooses to enter a new number, this activity collects their 10-digit number followed by the pound sign (#).                                                     |
| Set variable     | The collected number is stored in the callbackNumberEntered variable for further use.                                                                                         |
| End subflow      | The flow concludes after handling the caller's choices and collecting the necessary information.                                                                              |

#### Additional resources

For more information on configuring subflows, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

### Error handling

Use the error handling subflow template in Webex Contact Center to manage errors like queue handling issues or API request failures. It can be attached to specific activities or configured as a global error handler, ensuring that the system continues operating smoothly and provides users with feedback on any issues.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this subflow:

- Ensure that Cisco Text-to-Speech (TTS) is enabled for the contact center to use text-to-speech for error prompts.
- Map the errorMessage variable to dynamically handle the appropriate error messages in your workflow.

For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

#### Subflow inputs

- errorMessage - STRING: The error message to play dynamically, indicating the issue encountered by the caller.

#### Subflow outputs

- N/A: This subflow does not produce outputs as it is used to handle errors and provide feedback to the caller.

#### Subflow breakdown

The following table describes the various subflow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Subflow element          | Description                                                                                                                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start subflow            | The subflow is triggered when an error occurs.                                                                                                                                                                  |
| Play error message       | The system plays a dynamic error message defined by the errorMessage variable using Cisco Cloud TTS. For example, the message might be: **We are experiencing technical difficulties. Please try again later.** |
| End subflow (Normal End) | If the error is handled successfully, the subflow ends gracefully.                                                                                                                                              |
| End subflow (Error End)  | If further issues arise (for example, the error message fails to play), the subflow ends in an escalation state to indicate a critical failure.                                                                 |

#### Subflow activities

The following table describes the sequence of subflow activities for managing errors.

| Subflow activity         | Description                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Start subflow            | The subflow starts when an error occurs, kicking off the error-handling sequence.                                                     |
| Play error message       | Plays the error message to the caller using Cisco Cloud TTS. The message content is defined dynamically by the errorMessage variable. |
| End subflow (Normal End) | Ends the subflow if the error is resolved without further issues.                                                                     |
| End subflow (Error End)  | Ends the subflow with an escalation if additional errors occur during the error-handling process.                                     |

#### Additional resources

For more information on configuring subflows, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

### HTTP data dip

Use this subflow template to fetch customer account information through an HTTP request. It supports account ID confirmation, manual entry if the request fails, and handles timeouts, invalid inputs, and critical errors—ideal for automated customer account lookups in contact centers.

This subflow provides a dynamic experience where customer account information is fetched using an HTTP request. If the lookup is successful, the customer is asked to confirm the account ID. If it fails, or the caller prefers, they can enter their account number manually. The flow gracefully handles errors such as invalid inputs, timeouts, and critical failures, with appropriate prompts.

This subflow uses Cisco Text-to-Speech (TTS) for any audio prompts.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this subflow:

- Create entry points, queues, connectors, teams, entry point mappings, and any other organization-specific configuration activities.
- Upload static audio files if custom audio prompts are used instead of Cisco Text-to-Speech (TTS).
- Ensure that the HTTP request URL and parameters are correctly set based on your organization's needs.

For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

#### Subflow inputs

- errorMessage - STRING: A message that will be played in case of an error during the subflow.

#### Subflow outputs

- outputVariable - STRING: Stores the confirmed or manually entered account number.

#### Subflow breakdown

The following table describes the various subflow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Subflow element                                          | Description                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start subflow (Initialization)                           | The subflow starts the process of fetching customer data.                                                                                                                                                                                                                                                |
| Please wait (Comfort message)                            | The caller is informed that the system is retrieving their information using a TTS prompt: **Please wait while we look up your information.**                                                                                                                                                            |
| HTTP request (Fetch Customer Info)                       | The system sends an HTTP GET request to retrieve customer information from a specified API endpoint. If successful, the response contains the customer ID.                                                                                                                                               |
| Check HTTP status (Evaluate Response)                    | The HTTP response is evaluated based on the status code. If the request was successful, the process moves to the next step.                                                                                                                                                                              |
| Confirmation menu (Request Confirmation or Manual Entry) | The caller is prompted to confirm the fetched account ID or manually enter their account number if it’s incorrect.                                                                                                                                                                                       |
| Set variable (Store Account ID)                          | If the caller confirms the account ID, the value is stored in the outputVariable.                                                                                                                                                                                                                        |
| Collect digits (Manual Account Entry)                    | If the request fails or the caller chooses to re-enter their account number, they’re prompted to input a 6-digit account number followed by the pound key (#).                                                                                                                                           |
| Error handling (StillThere, Invalid, Critical)           | The subflow handles timeouts, invalid inputs, and critical errors with respective prompts: StillThere: Asks, **Are you still there?**, in case of a timeout.Invalid: Notifies the caller of invalid input and asks them to try again.Error: A critical error prompt informing, **Something went wrong.** |
| End subflow (Conclusion)                                 | The subflow ends either after confirming the account number or handling an error.                                                                                                                                                                                                                        |

#### Subflow activities

The following table describes the sequence of subflow activities for this template.

| Subflow activity  | Description                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Start subflow     | The subflow begins when invoked.                                                                                       |
| Please wait       | Plays a message using TTS, asking the caller to wait while their information is retrieved.                             |
| HTTP request      | Sends an HTTP GET request to retrieve the customer's account information.                                              |
| Check HTTP status | Evaluates the HTTP response to determine if the request was successful.                                                |
| Confirmation menu | Prompts the caller to confirm the retrieved account ID or re-enter it if incorrect.                                    |
| Set variable      | Stores the confirmed or manually entered account number.                                                               |
| Collect digits    | Collects a 6-digit account number from the caller if the HTTP request fails or they opt to enter a new account number. |
| Error handling    | Several prompts handle timeouts, invalid inputs, and critical errors during the subflow.                               |
| End subflow       | The flow concludes after the account number is confirmed or an error occurs.                                           |

### Queue treatment

Use this subflow template to automate queue treatment in Webex Contact Center, keeping callers engaged with music and message prompts.

This subflow plays queue music followed by a message, repeating the sequence up to a set number of times (default is three). It ensures smooth queue handling and an engaging caller experience. You can customize variables like music choice, message content, and loop count.

This subflow uses Cisco Text-to-Speech (TTS) for any audio prompts. For music, it defaults to the built-in file (`defaultmusic_on_hold.wav`), for music on hold.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this subflow:

- Create entry points, queues, connectors, teams, entry point mappings, and any other organization-specific configuration activities.
- Ensure proper queue treatment logic and error-handling configurations.
- Upload static audio files if custom audio prompts or music files are used instead of Cisco Text-to-Speech (TTS).

For detailed steps, see [Webex Contact Center setup and administration guide](https://help.webex.com/n5595zd/).

#### Subflow inputs

- queueMessage - STRING: The message to be played between music tracks (default: **Please wait**).
- queueMusic1 - STRING: The first music file to be played while the caller waits (default: `defaultmusic_on_hold.wav`).
- queueMusic2 - STRING: The second music file to be played between messages (default: `defaultmusic_on_hold.wav`).
- counter - INTEGER: A counter to track the number of loops (default: 0).
- musicDuration - INTEGER: The duration for which each music track is played (default: 10 seconds).

#### Subflow outputs

None

#### Subflow breakdown

The following table describes the various subflow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Subflow element    | Description                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start subflow      | The subflow begins.                                                                                                                               |
| Condition check    | The subflow checks if the counter is less than 2\. If true, the flow continues to the music and message sequence. If false, the subflow ends.     |
| Play music 1       | The first music file (queueMusic1) is played for the duration defined by musicDuration.                                                           |
| Play message       | After the first music file, a message is played using Cisco TTS, with the content defined by queueMessage.                                        |
| Play music 2       | After the message, the second music file (queueMusic2) is played for the defined duration.                                                        |
| Increment counter  | The counter variable is incremented by 1 after the second music file is played.                                                                   |
| Re-check condition | After the counter is incremented, the flow rechecks if the counter is still less than 2\. If true, the loop repeats; otherwise, the subflow ends. |
| End subflow        | Once the counter reaches 2, the subflow ends.                                                                                                     |

#### Subflow activity

The following table describes the sequence of subflow activities.

| Subflow activity  | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| Start subflow     | Initializes the subflow process.                                                            |
| Condition check   | A condition is checked to ensure the counter is less than 2, allowing the loop to continue. |
| Play music 1      | Plays the first music file for the duration specified by musicDuration.                     |
| Play message      | Plays a message using Cisco TTS with content provided by queueMessage.                      |
| Play music 2      | Plays the second music file for the duration specified by musicDuration.                    |
| Increment counter | Increments the counter variable by 1 to control the loop.                                   |
| End subflow       | Ends the subflow once the counter reaches the predefined limit.                             |

### Scheduled Callback Subflow template

Use this template to create a subflow that allows callers to schedule a callback for a specific date and time, including timezone selection.

This subflow guides the caller through a series of prompts to gather all necessary information for a scheduled callback. It asks for the desired date, a start and end time for the callback window, and the caller's timezone. The subflow includes validation for date and time inputs to ensure accuracy. If an invalid format is entered, the caller is re-prompted. Once all information is successfully collected, it is used to schedule the callback in the system.

This subflow uses Cisco Text-to-Speech (TTS) for all audio prompts.

#### Prerequisites

Ensure that the following requirements are met in the Webex Contact Center Management Portal before implementing this subflow:

- Create entry points, queues, teams, entry point mappings, and any other organization-specific configuration activities such as connectors, outdial ANI, and more.
- Upload static audio files if custom audio prompts are used instead of Cisco Text-to-Speech (TTS).
- For detailed steps, see the [Webex Contact Center setup and administration guide](https://help.webex.com/en-us/article/ni3wlvw/Webex-Contact-Center-Setup-and-Administration).

#### Subflow Inputs

| Variable Name  | Type   | Description                                             |
| -------------- | ------ | ------------------------------------------------------- |
| CallbackNumber | STRING | The phone number to use for the callback.               |
| CustomerName   | STRING | The name of the customer requesting the callback.       |
| CallbackQueue  | STRING | The queue to which the scheduled callback will be sent. |

#### Subflow Outputs

| Variable Name             | Type   | Description                                                            |
| ------------------------- | ------ | ---------------------------------------------------------------------- |
| CallbackScheduleDate      | STRING | The date for which the callback is scheduled, formatted as YYYY-MM-DD. |
| CallbackScheduleTimezone  | STRING | The IANA timezone identifier for the callback (e.g., America/Chicago). |
| CallbackScheduleStartTime | STRING | The start time for the callback window, formatted as HH:mm:ss.         |
| CallbackScheduleEndTime   | STRING | The end time for the callback window, formatted as HH:mm:ss.           |

#### Subflow Breakdown

The following table describes the various subflow elements involved in the call process, detailing the actions and responses that occur during each stage.

| Subflow Element     | Description                                                                                                                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start Subflow       | The call enters the subflow.                                                                                                                                                                         |
| Schedule Date       | The caller is prompted to enter their preferred callback date in YYYYMMDD format. The subflow validates the input to ensure it is a real date. If invalid, the prompt is repeated.                   |
| Schedule Start Time | The caller is prompted to enter the start time for their callback window in HHMM (24-hour) format. The subflow validates the input to ensure it is a valid time. If invalid, the prompt is repeated. |
| Schedule End Time   | The caller is prompted to enter the end time for their callback window in HHMM (24-hour) format. The subflow validates the input to ensure it is a valid time. If invalid, the prompt is repeated.   |
| Schedule Timezone   | The caller is presented with a menu to select their timezone.- Press 1 for IST (Indian Standard Time).- Press 2 for Central Time.- Press 3 for Eastern Time.                                         |
| Schedule Callback   | Using all the collected information (CallbackNumber, CustomerName, CallbackQueue, and the scheduled date, time, and timezone), the subflow officially schedules the callback in the system.          |
| End Subflow         | The subflow ends after successfully scheduling the callback.                                                                                                                                         |

#### Subflow Activities

The following table describes the sequence of subflow activities for scheduling a callback.

| Subflow Activity  | Description                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start Subflow     | The subflow begins when invoked.                                                                                                                                                                  |
| ScheduleDate      | Collects the caller's preferred callback date. The TTS prompt is: "Please enter your preferred date in YYYYMMDD format". The input is validated to ensure it is a correct date format.            |
| ConvertDateFormat | Once a valid date is entered, this activity converts the YYYYMMDD input into a YYYY-MM-DD format and stores it in the CallbackScheduleDate variable.                                              |
| ScheduleStartTime | Collects the start time for the callback window. The TTS prompt is: "Please enter the start time for your callback in HHMM format". The input is validated to ensure it is a correct time format. |
| ConvertStartTime  | Converts the HHMM start time input into a HH:mm:ss format and stores it in the CallbackScheduleStartTime variable.                                                                                |
| ScheduleEndTime   | Collects the end time for the callback window. The TTS prompt is: "Please enter the end time for your callback in HHMM format". The input is validated to ensure it is a correct time format.     |
| ConvertEndTime    | Converts the HHMM end time input into a HH:mm:ss format and stores it in the CallbackScheduleEndTime variable.                                                                                    |
| ScheduleTimeZone  | Presents a menu to select a timezone.                                                                                                                                                             |
| ScheduleCallback  | This final action takes all the collected and formatted variables and creates the scheduled callback request in the system.                                                                       |
| End Subflow       | The flow concludes after the callback has been successfully scheduled.                                                                                                                            |

#### Additional Resources

For more information on configuring subflows, see the [Webex Contact Center setup and administration guide](https://help.webex.com/en-us/article/ni3wlvw/Webex-Contact-Center-Setup-and-Administration).

## Create and manage flows

### Create a flow

You can create and manage flows using the routing resources module. When you design a flow, a consult interaction can't contain a courtesy callback, postcall survey feedback, or blind transfer activity.

When you create a flow, if the number of nodes exceeds 100, you may experience latency in the Flow Designer. In such cases, we recommend that you use the Flow Chaining and Dynamic Variables features to break down a large flow into easily manageable smaller flows. For more information, see [Link multiple flows (with GoTo)](#Cisco%5FConcept.dita%5F9ec1dcdf-ce8c-4112-b7ff-c8a517be85be)and [Queue Contact](#Cisco%5FGeneric%5FTopic.dita%5Fc93b6399-3cd7-4c86-9e82-48a82469fb8e).

| 1  | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Go to Contact Center  \> Customer Experience  \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3  | On the Flows page, click Manage flows. Choose Create flows from the drop-down list. The Create a new flow wizard appears with the option to choose from Flow or Subflow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 4  | Click Flow. Click Subflow to create a subflow. The process of creating a subflow is similar to that of creating a flow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 5  | Choose the required option for creating the flow: Start fresh—Use this option to create a new flow from the beginning.Flow templates—Use this option to create a flow from flow templates. For more information, see [Create flows from flow templates](#task-template%5F05c77f3a-aed2-43ad-aee4-c65b777a870c).Import—Use this option to import flows from a local storage. For more information, see [Import a flow](#Cisco%5FTask.dita%5F0e76fcdd-29a3-47c3-8544-f6613dfeb8f0 "You can import an exported flow from another tenant instead of recreating it.").                                                                                                                                                                                                                                                                                                                                                             |
| 6  | Click Start fresh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 7  | In the Flow name field, enter a unique name. The flow name can't contain spaces. The only allowed special character is \_ (underscore). The allowed length is 80 characters. For example, NewContact\_01.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 8  | Click Create flow. The Flow Designer window appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 9  | In the General settings section, enter the description of the flow. You can't modify the description later.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 10 | (Optional) Configure the following settings in the Diagram settings section. Curved links—Enable or disable to toggle between curved links and right-angled links for each flow. You can enable curved links to enhance the view of the connection between activities. In complex flows, curved links provide better readability as compared to straight lines which tend to overlap. Link color—Choose the color from the drop-down color palette to indicate the links. Error path color—Choose the color from the drop-down color palette to indicate the error paths. Selection color—Choose the color from the drop-down color palette to indicate the chosen link and the connected activities. Thickness—Specify the value to increase or decrease the thickness of the link and the connected activities. Thickness measures in pixels and the default value is 1 pixel. The maximum thickness supported is 3 pixels. |
| 11 | In the Flow Decryption Settings section, turn on the Enable flow decryption toggle to allow decryption of sensitive information in the flow. A Debug Details Data Disclosure pop-up appears. Check I agreeand click Save. You will now be able to decrypt sensitive information from the flow logs at the time of debugging flows. See the [Trace Flows](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Ffeaf392e-32a2-45b5-ac35-ca0c500086fc) section for details.                                                                                                                                                                                                                                                                                                                                                                              |
| 12 | Perform the following tasks to create the flow: Configure [Understand activities and events](#Cisco%5FGeneric%5FTopic.dita%5F90c427c5-ea75-4ceb-b40c-ca753f238bb0) [Enable or disable autosave](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F6d89bda8-140b-4139-b741-237f9c804008) [Copy and paste activities](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F3b469383-0464-4fe0-870d-f1bf1ca8467c) [Validate a flow](#task%5Fgzx%5Fq5k%5F1rb%5F1) [Publish a flow](#task%5Fgzx%5Fq5k%5F1rb%5F3)                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Create flows from flow templates

Flow templates give you out-of-the-box flows for common use cases. To create flows from flow templates:

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                         |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Services \> Contact Center.                                                                                                                                                                                                                                                                    |
| 3 | From the Contact Center navigation pane, click Customer Experience  \> Flows.                                                                                                                                                                                                                              |
| 4 | On the Flows page, click Manage flows and click the Create flows drop-down list. The Create a new flow wizard appears with the option to choose from Flow or Subflow.                                                                                                                                      |
| 5 | Click Flow. To create a subflow, click Subflow. The process of creating a subflow is similar to that of creating a flow.                                                                                                                                                                                   |
| 6 | From the Choose a method, click Flow templates.                                                                                                                                                                                                                                                            |
| 7 | Choose your template from the available list of templates. Click Next. Click View details to see a detailed preview of the template. Refer to the [View flow template details](#task-template%5F3497ca89-3108-4a15-8610-1988a2872932) section for more information.                                        |
| 8 | In the Flow name field, provide a unique name for the flow. Adhere to the naming conventions.                                                                                                                                                                                                              |
| 9 | Click Next. You’ve created a new flow from a flow template. For more information about the flows and if flows require further configuration before testing, use the links available in the flow template listing. See [View flow template details](#task-template%5F3497ca89-3108-4a15-8610-1988a2872932). |

What to do next

Customize the activities and events in the flow as per your requirements. Validate and publish the flow.

#### View flow template details

To view more details about a specific template:

| 1 | From the template collection page, choose the required template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click View details. The Template detailspage appears. The top panel displays a preview of the chosen template. Click the full screen icon to open the template in full screen. Select specific sections of the template and zoom in and out. If needed, you can switch between the main flow and event flows.The bottom pane has the following sections that provide detailed information about the selected flow template:**Description**—Brief description and purpose of the template.**Details**—Key features of the template.**Prerequisites**—Steps that you must configure for the flow template to work as expected.**Flow breakdown**—Details about how the flow starts, what happens in the flow and how the flow ends.**Activities used**—Lists the various activities used in the specific template.**Additional details**—Additional details about the flow template. |

What to do next

Click Select template to proceed with the chosen template.

### Context menu options

Use the context menu for additional actions. To open the context menu from the Flows page, choose the flow and open the flow in the Flow Designer module. Hover over the flow name. A menu appears with the following options: 

- Edit name—Use to rename the flow.
- Export—Use to export the flow.
- Import—Use to import the flow.
- Delete—Use to delete the flow.
- View version history—Use to view the version details of the flow.

### Edit flow variables

You can't edit a variable when it is in use. After creating the variable type, you can't edit the variable type.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                     |
| - | ----------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                           |
| 3 | Click the Go to Flow Designer icon beside the flow that you want to edit. The flow opens in the Flow Designer window.   |
| 4 | Click on a variable tag from the Global propertiespane. A pop-up window displays a summary of the variable information. |
| 5 | Click Edit in the upper-right corner of the pop-up window.                                                              |
| 6 | Select the unused variable in the flow.                                                                                 |
| 7 | Make the necessary changes to the variable name, description, value, and variable configurations.                       |

### Modify a flow

Use the Edit toggle to edit a flow. When enabled, other flow developers can't edit the flow simultaneously. By default, a flow opens in read-only mode.

You can mark variables that contain sensitive information as secure. When you open an existing flow that contains flow variables, you get a prompt to review and mark those variables as secure. For more information on secure variables, see [Secure variables](#Cisco%5FConcept.dita%5F79a1216a-2b35-4523-8f68-948c4adf0fbc).

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears and displays the list of flows with the following fields: Name of the field Description **Flow name** The name of the flow as configured in the Flow Designer application. The flow name must be unique. **Description** The description of the flow as configured in the Flow Designer application. **Status** Indicates whether the flow is published or is still in the draft stage. **Last modified**Date and time when the flow was last modified. **Last edited by** The email ID of the user who last edited the flow. |
| 3 | Click the Go to Flow Designer  icon beside the flow that you want to edit. The flow opens in the Flow Designer window. If the selected flow has flow variables, a message prompts you to mark the variables as secure. You can modify the flow only if the Edit On toggle button is enabled. If the Edit On toggle button is set to off, the flow appears in read-only mode.                                                                                                                                                                                                                               |
| 4 | Flow Decryption Settings: Enable the Flow Decryption Settings to allow decryption of flow. See the [Trace Flows](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Ffeaf392e-32a2-45b5-ac35-ca0c500086fc) section for details.                                                                                                                                                                                                                                                                                                   |
| 5 | Click Go Select Secure Variables to open the Edit Secure Variables dialog box. You can click Skip for now to continue editing the selected flow without marking the secure variables. This dialog box appears the next time you edit the flow. Check the Don't show this message again check box to permanently skip the selection process for the selected flow. Currently this feature isn’t supported.                                                                                                                                                                                                  |
| 6 | Check the check boxes of the variables that contain sensitive information and click Save. The Flow Designer window displays the selected variables with a lock icon beside the variable names. The selected flow opens in read-only mode.                                                                                                                                                                                                                                                                                                                                                                  |
| 7 | Enable the Edit toggle button to change the flow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 8 | Edit the draft flow as desired. When you modify a flow, a consult interaction can't contain a courtesy callback, postcall survey feedback, or blind transfer activity.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 9 | Click Save to save the flow if you disable the Autosave toggle button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Preview audio prompt within the flow

The preview audio prompts feature enables immediate audio playback of .wav files and text-to-speech (TTS) messages within the Flow Designer module. The Preview prompt button with in the following activities provides an enhanced developer experience by reducing the time and effort for validating the audio and text-to-speech messages:

- [Collect Digits](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FConcept.dita%5F022710c1-5527-4a8a-9d27-d38b615e1f68)
- [Menu](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FConcept.dita%5F8a8f0369-60b9-4d31-af05-9338f7aa54be)
- [Play Message](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#Cisco%5FConcept.dita%5F19353180-2d4f-41eb-b081-6d817451470b)
- [Set Whisper Announcement](https://help.webex.com/en-us/article/nhovcy4/Build-and-manage-flows-with-Flow-Designer#concept-template%5F30f3a9ea-0833-4298-9536-1416144cb24a)

Use the Preview prompt button for quick verification of audio prompts, language, and voice selections in TTS messages, along with testing SSML markup for prompt personalization.

- Play Music activity doesn’t support previewing prompt.
- When previewing text-to-speech, voice selection is mandatory.
- You can’t change the TTS connector option when previewing the prompt. Close the preview prompt modal, select a different provider on the activity to test a different TTS provider.
- The Language and Voice settings in the drop-down list when previewing a prompt corresponds to variables Global\_Language and Global\_VoiceName, respectively. You can set these in the flow to change the experience.
- When testing Audio File Variables, ensure that the file path corresponds to an actual .wav file that exists on the system.

### Search entities in a flow

Use the search functionality to search for entities in a flow and access their locations quickly. For flows which are more elaborate and complex, use this search capability to avoid manual effort in finding the desired entities.

You can search the following entities in the flow using this search feature:

- Activity names, descriptions, and inputs
- Variable names
- Pebble expressions
- Flow properties

You can find and replace free text inside fields such as text inputs, descriptions, pebble expressions, and so on.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                               |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                                                     |
| 3 | Click the Go to Flow Designer icon beside the flow that you want to edit. The flow opens in the Flow Designerwindow.                                                                                                                                                                                                                                                                                                              |
| 4 | In the search box that appears in the top-right corner, enter the keyword (activity name, variable name, or string) and press Enter. Alternatively, you can trigger the search box by using the keyboard shortcuts: Cmd + K (for macOS) and Ctrl + k (for Windows). The search results appear in a separate search panel on the left side of the screen.                                                                          |
| 5 | (Optional) Choose one or more entity types from the drop-down list to filter the search results.                                                                                                                                                                                                                                                                                                                                  |
| 6 | To find and replace a text, do the following: Enter the word in the Replace field to replace the chosen keyword. You can either choose the individual search results and replace with the specified keyword or click the Replace all (![Replace all icon.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/474001-475000/474799.png)) icon to replace all occurrences across the flow. |

### Apply version labels to a flow

We recommend adding version labels to build a lifecycle of the flow through various phases such as development, test, and live. Instead of applying changes directly to the flow, you can publish the flow through phases before you deploy the flow to the production. This feature helps you avoid overwriting of your current flow in the production.

When you publish a flow, associate a version label such as 'Live,' 'Test,' or 'Dev' with the new flow version in addition to the flow name. This gives the ability to attach different versions of the same flow to different entry points or GoTo activity. Latest is the default version label that you can't remove from a flow version. You can apply any other version label along with the latest.

Moreover, you can attach multiple versions of the same flow to an entry point. During an entry point configuration, you can choose a flow along with one of its associated version labels.

You can also modify the flow logic dynamically by accessing version labels within the flow using the `**NewPhoneContact**` variable (see [Start Flow](#Cisco%5FConcept.dita%5F83924e55-5a22-4bc1-b721-cea3a225ea73) for details). The `**NewPhoneContact.FlowVersionLabel**` variable displays the flow version label currently in execution: whether 'Dev,' 'Test,' 'Live,' or 'Latest.' Applying a flow version label enables crafting custom logic that tailors to the specific version labels of the flow.

When you open the flow in edit mode, you see the draft version from the latest flow version published. When you publish this draft version, it associates the latest version label to it. At a given time, only one flow has the latest version label associated to it. This corresponds to the last published version of the flow. 

Before you begin

You must publish the flow at least once.

| 1  | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                    |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2  | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                                                                          |
| 3  | Click the Go to Flow Designer  icon beside the flow that you want to edit. The flow opens in the Flow Designer window.                                                                                                                                                                                                                                                                                                                                 |
| 4  | Edit the flow.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 5  | Click Save to save the flow if you disable the Autosave toggle button.                                                                                                                                                                                                                                                                                                                                                                                 |
| 6  | Turn on the Validation toggle button to enable publish.                                                                                                                                                                                                                                                                                                                                                                                                |
| 7  | Click Publish.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 8  | (Optional) In the Publish flow dialog box, enter a note about the version or any information that you want to share with other flow developers.                                                                                                                                                                                                                                                                                                        |
| 9  | By default, the Latest is selected as the version label that indicates the latest version of the flow. You can apply multiple version labels to a flow version such as live, dev, or test from the Add version label drop-down list. If a specific version label is mapped to an entry point, a notification appears beside that version label in the drop-down list that says the label is mapped to an entry point.                                  |
| 10 | Click Publish. After you choose one or more appropriate version labels and publish, use this version of the flow when you assign to an entry point.                                                                                                                                                                                                                                                                                                    |
| 11 | (Optional) Click the timer icon beside the version number to view the version history of the flow. The Version history modal appears that displays the following details for Active Versions and Other Versions of the flow: Publish timeVersion numberVersion label (if applied)Last edit by Publish note Use any of the following keyword search attributes to filter the table: Version numberVersion labelsPublished byPublish noteDate of publish |
| 12 | (Optional) Click the View icon of any row to view the flow published in the chosen version. If you choose to edit when viewing an older flow version, it overwrites the current draft with that specific flow version.                                                                                                                                                                                                                                 |

After you apply the appropriate version label to a flow, you can choose that flow version when you create a queue.

You can add any number of versions to a flow. However, flow version history displays only the most recent 100 versions. Flow versions are deleted only when you delete the flow.

### Enable or disable autosave

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                               |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                                                                                                                                                                     |
| 3 | To create a flow, click New.                                                                                                                                                                                                                                      |
| 4 | To edit an existing flow, click the Go to Flow Designericon beside the flow that you want to edit. The flow opens in the Flow Designerwindow.                                                                                                                     |
| 5 | To enable the autosave option, set the Autosave toggle button to ON.                                                                                                                                                                                              |
| 6 | To disable the autosave option: Set the Autosave toggle button to OFF. A message prompts you to confirm your action. Click Disable autosave. After you disable the autosave option, save your changes manually. Otherwise, you lose the changes made to the flow. |

### Copy and paste activities

Copy and paste an activity or a group of activities in the same flow so that you don't have to configure activities from scratch. For this purpose, you can select a single activity or a group of activities at a time and reuse them in the same flow. When you copy activities, the system creates duplicates of those activities and copies all the configured settings and links.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3 | To create a flow, click Manage Flows \> Create Flows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4 | To edit an existing flow, click the Go to Flow Designericon beside the flow to open the flow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5 | Do either of the following: To copy and duplicate a single activity, select the activity that you want to copy and click the copy icon (![Copy icon.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/500001-600000/510001-520000/510001-511000/510940.jpg)). To copy and duplicate multiple activities, press Shift and select the activities to group them and click the copy icon (![Copy icon.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/500001-600000/510001-520000/510001-511000/510940.jpg)). Alternatively, you can press Ctrl+C on your keyboard to copy the selected activities and press Ctrl+V to paste the selected activities on the canvas. |
| 6 | Rearrange the copied activities, as needed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Validate a flow

Validate a flow to ensure that all required fields are configured and that the structure of the flow is valid. Validation can't determine how the system runs the flow at run-time and doesn't guarantee that the flow runs as expected.

When validation succeeds, leave the Validation toggle on. You can't publish the flow unless validation succeeds.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Click the Go to Flow Designer icon beside the flow that you want to validate. The flow opens in the Flow Designerwindow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 4 | Set the Validation toggle to On. The validation starts and errors display in the window. During validation, the system displays errors in these ways: Flow errors button—A red button appears next to the Validation toggle that shows the number of active errors. If there are no errors (Flow Errors: 0), the button is Green.Activity error styling—If an activity has configuration errors, the activity appears with a red outline and a red information icon in the upper-right corner. Click this icon to show a contextual tooltip that summarizes any errors with the activity. After you address the error, the activity loses the error styling in real time.Validation details window—This pop-up window keeps a running list of active errors in the flow. You can drag and move this window around the canvas. Click the Closeicon in the upper right to close the window.There are two sections within this window:Flow errors section—This section lists all the active errors in the flow and breaks them down by activity. Resolve all these errors before you can publish the flow. For more information, see [Understand error codes](#Cisco%5FConcept.dita%5F8dfd4204-ba10-40de-9d6d-6ce9efaa7eac).Recommendations section—This section lists best practices and reminders for building flows. While you should consider these items before you publish a flow, the recommendations aren’t required.If you don’t want to see the recommendations, click Dismiss recommendations to hide the list. The list stays hidden until you close the Validation details window and open it again. |
| 5 | If you close the Validation details window and want to reopen it, click the Flow errors button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 6 | (Optional) If there are errors, set the Validationtoggle to Off. Fix the errors and restart the validation. Flow validation can't evaluate functions or check to see if variables resolve to expect values. It only checks for structural errors. Double-check your variables to ensure that they work as expected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Copy a flow

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                      |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                                                                                                                                                            |
| 3 | Click the ellipsis icon beside the flow that you want to copy and click Copy. The name of the copied flow has this format: Copy\_FlowName\_FlowID. Flow name is the name of the original flow, and flow ID is a unique identifier for the original flow. |
| 4 | Open the copied flow to edit the name.                                                                                                                                                                                                                   |

### Export a flow

Export a flow to extract a flow definition as a JSON file. Later, you can import the JSON file to create the same flow on a different tenant. To import a flow, see [Import a flow](#Cisco%5FTask.dita%5F0e76fcdd-29a3-47c3-8544-f6613dfeb8f0 "You can import an exported flow from another tenant instead of recreating it.").

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                  |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                                                                        |
| 3 | Click the ellipsis icon beside the flow that you want to export and click Export.                                                                                    |
| 4 | In the dialog box that opens, select Save and click OK to download the flow file. The file downloads to your local system with the existing filename in JSON format. |

### Import a flow

To import a flow from another tenant, you must first export the flow as a JSON file. To export a flow, see [Export a flow](#Cisco%5FTask.dita%5F8504c7bb-b058-4c38-a726-08ce6e555db4 "You can export a flow from another tenant.").

To reuse an existing flow within the same tenant, see [Copy a flow](#task%5Fgzx%5Fq5k%5F1rb%5F2).

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                         |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                                                                                                                               |
| 3 | Under Manage flows click Import.                                                                                                                                                                                            |
| 4 | Choose the flow file that is in JSON format from your local system.                                                                                                                                                         |
| 5 | Click Open to import the file. The flow imports into your tenant. You can import a flow in JSON format only. The JSON file must be a valid flow for the import to be successful. You can import a file size of up to 10 MB. |

What to do next

You can modify or publish the flow. For more information, see [Working with flows](#Cisco%5FGeneric%5FTopic.dita%5Fd32d6ead-60c0-4ae7-8750-9a1ba7663e56).

### Publish a flow

You can publish a flow after the system validates the flow and finds it free of errors. You can use a published flow in entry point routing strategies. 

Before publishing, confirm the flow is properly configured and ready for live contact center use. The system doesn't fully support editing a published flow.

The system disables the Publish flow button while the Validation toggle is off. If any active errors exist, the button remains disabled.

When you click Publish flow, the Publish flow confirmation window appears. Before you publish a flow, ensure that all expressions work and that the flow behaves as desired.

If an error occurs:

- You see a notification window with the `Tracking Id` and `Flow Id`. Contact Cisco Support for assistance with errors. Support requires the `Tracking Id`.
- Click the Retry publish.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                          |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                |
| 3 | Click the Go to Flow Designer icon beside the flow that you want to publish. The flow opens in the Flow Designerwindow.                                                                                                                                                                                                                      |
| 4 | Click Publish. If the flow publishes successfully, a confirmation message appears.                                                                                                                                                                                                                                                           |
| 5 | Select one of the following options: Click Close Flow & Sign Out, if you're done reviewing the flow and want to sign out of Flow Designer.Click Return to Flow, if you'd like to review or edit the flow. If the flow is assigned to entry point routing strategies, editing a published flow could impact live contact center interactions. |

### Delete a flow

If a flow has a status of Published, it can be part of a routing strategy configuration. Know where the flow is in use before you delete it. Otherwise, you could impact live contact center interactions.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                |
| - | ---------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.      |
| 3 | Click the ellipsis icon beside the flow that you want to delete, and click Delete. |
| 4 | Click Yes to confirm.                                                              |

### Entry point routing strategies 

An entry point routing strategy is a configuration that controls the routing behavior of a contact when the contact reaches an entry point. When a contact arrives at an entry point, the routing engine checks to see which entry point routing strategy is active at the given time and follows that configuration. 

The call control section of the entry point routing strategy configuration allows you to choose a flow that controls the experience callers have during their interaction. With Flow Designer, you can configure an end-to-end flow that controls both the initial treatment of the call in the IVR, and the queue experience after the contact is queued.

Choose a flow from the Flow drop-down to indicate the flow that controls this end-to-end call experience during the time interval specified in the routing strategy. Only flows that are published from Flow Designer are available from this drop-down list.

Flows are only available for telephony entry points. You can't override any settings in the flow from the entry point routing strategy.

### Queue routing strategies 

A queue routing strategy is a configuration that controls the routing behavior of a contact when the contact reaches a queue. When a contact arrives at a queue, the routing engine checks to see which queue routing strategy is active at the given time and follows that configuration. 

Customers who have queue routing strategies in Webex Contact Center can access them, but they can't create new strategies. We recommend that all customers transition their configurations to queues. 

## Create and manage subflows

Flow Designer lets you break down large flows into smaller, more manageable parts called subflows. You can reuse subflows across multiple flows to handle specific tasks. This modular approach simplifies flow management and reduces the complexity of building large flows. Here are some key characteristics of subflows:

- You can create subflows at the organization level to make them available internally. For example, you can view and invoke subflows that are available within the same organization. You can create a maximum of 200 subflows per organization.
- You can invoke a subflow from within a flow to run logic without linking to an entry point or leaving the main flow.
- You can reuse subflows multiple times in a main flow or across main flows within the organization.
- You can pass variables between parent flow and subflows and map input and output variables from the main flow to the subflow and the opposite way. This makes these variables in the subflow independent of the variables in the parent flow that invokes the subflow.  
However, the Text-to-Speech (TTS) settings in the main flow don't pass to the subflows. For example, consider a flow in which the main flow variable is `Global_VoiceName: fr-FR-Ariane (French)`. If a subflow triggers to play TTS, the audio plays in English by default. To overcome this, define a subflow variable with the same name that is `Global_VoiceName :fr-FR-Ariane (French)`. Alternatively, you can create a subflow variable `Global_VoiceName` (same as in the main flow) and map the value from the main flow to the subflow. For more information, see [Configure different supported languages and voice names with native text-to-speech inside WxCC subflow](https://www.cisco.com/c/en/us/support/docs/contact-center/webex-contact-center/222681-configure-different-supported-languages.html).  
You can't add global variables to the subflow. However, You can map a global variable from the main flow to a local variable in subflow.
- You can publish subflow independently. However, the changes made in the subflow take effect only after you republish the main flow.
- You can attach a version label such as Live, Dev, and Test to a subflow so that you can perform an end-to-end testing of the main flow in the respective environments.
- Subflows must be invoked from the main flows. You can't invoke another subflow from a subflow.
- You can't link a subflow from an entry point or queue routing strategy.
- You can import and export subflows independently.

### Create a subflow

You can create and manage subflows in Control Hub.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \>  Customer Experience \>  Flows \>  Subflows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3 | Click Manage subflows \>  Create subflow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4 | In the Subflow name field, enter the name of the subflow. The subflow name must be unique. It can't contain spaces. The only special characters allowed are \_ (underscore) and - (hyphen). The maximum length is 80 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 5 | Click Start building subflow. The Flow Designer window appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 6 | In the General settings section, enter the description of the subflow. You can modify this description later.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 7 | In the View settings section, configure features such as curved links, link color, error path color, selection color, and thickness.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 8 | In the Variable definition section, add the required variables for linking to the main flow. Subflow input variable: (Required) This variable takes an input from the main flow.Subflow output variable: (Required) This variable returns an output back to the main flow.Subflow local variable: (Optional) This variable is for logic that is isolated within the subflow and doesn't relate to any of the main flow variables. All the above variables can be of type String, Integer, Date Time, Boolean, Decimal, and JSON.                                                                                                                                                                                                                                                                                                                                                                     |
| 9 | Perform the following tasks to create the subflow: Configure [Understand activities and events](#Cisco%5FGeneric%5FTopic.dita%5F90c427c5-ea75-4ceb-b40c-ca753f238bb0) Currently, event flow-specific activities and queue-specific activities aren't listed in the activity panel for subflows. [Enable or disable autosave](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F6d89bda8-140b-4139-b741-237f9c804008) [Copy and paste activities](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F3b469383-0464-4fe0-870d-f1bf1ca8467c) [Validate a flow](#task%5Fgzx%5Fq5k%5F1rb%5F1) [Publish a flow](#task%5Fgzx%5Fq5k%5F1rb%5F3) Actions such as applying version labels and flow tracing function the same way as they do in the main flow. For more information, [Apply version labels to a flow](#flow-versioning) and [Debug flows](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Ffeaf392e-32a2-45b5-ac35-ca0c500086fc). |

### Edit a subflow

When you edit and publish a subflow, the changes take effect in the main flow only after you publish the main flow.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                              |
| - | ---------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \>  Customer Experience \>  Flows \>  Subflows.                                             |
| 3 | Click on the subflow that you want to edit.                                                                      |
| 4 | Enable the Edit toggle button to change the subflow.                                                             |
| 5 | Make the required changes to the subflow. Click Save to save the flow if you disable the Autosave toggle button. |

### Delete a subflow

If any published main flow uses a subflow, you can't delete it, whether the flow is live or attached to an entry point. To delete the subflow, first remove it from the main flow or delete the main flow entirely.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                            |
| - | ---------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \>  Customer Experience \>  Flows \>  Subflows.                           |
| 3 | Click the vertical ellipsis icon on the subflow row that you want to delete, and click Delete. |
| 4 | Click Yes to confirm.                                                                          |

### Add subflow to a main flow

You can add a subflow across multiple main flows.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Navigate to Contact Center \>  Customer Experience \>  Flows. You can also add a subflow to a main flow from the Management Portal navigation bar. Choose Routing strategy \>  Flows. Click the ellipsis icon beside the flow that you want to edit and click Open.                                                                                                                                                                                                                                          |
| 3 | Click on the flow that you want to modify to add a subflow. The Flow Designer window appears.                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4 | Click the Subflows tab. A list of subflows for the chosen organization/tenant appears.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 5 | Drag and drop the required subflow from the list to the canvas to add it to the main flow. You can view the details of the chosen subflow such as name, subflow version along with the version label, and all variables configured in the subflow. Optionally, click View beside the subflow name to open the subflow in a new tab in the browser.                                                                                                                                                           |
| 6 | In the Subflow version section, choose the required subflow label that you want to add to the main flow, as this isn't configured by default. By default, the Enable automatic updates check box is checked. When enabled, whenever you create a new version of a subflow, the system automatically updates the main flow with the newer version. Uncheck the Enable automatic updates option to disable automatic updates. Ensure to republish the main flow when you create newer versions of the subflow. |
| 7 | In the Subflow input variables section, map the main flow variables to the subflow input variables. Make sure that you map the same data type to enable the subflow to work without error. Similarly, in the Subflow output variables section, map the subflow output variables to the main flow variables with the same data type.                                                                                                                                                                          |
| 8 | Publish the main flow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Create and manage functions

You can create and manage functions within the Flow Designer module. Functions let you write custom source code for performing quick data tasks and orchestrate complex actions. You can write code inline using a code editor and use them across flows.

The functions supplement the Pebble Template framework which the developers use to perform similar tasks. With this capability, the flow developers can:

- Choose the language for writing the code. Supported languages are JavaScript and Python.
- Write custom source code with language-specific static analysis.
- Test custom code with sample values and view outputs and errors before publishing.
- Write flow logic based on activity output variables and status/error codes.
- Parse and set into variables the values of outputs returned by the function, for further use in the flow.
- Reuse functions across multiple flows as an activity.
- Debug flows using the error messages returned by the function output, status and error codes, runtime error handling, flow debug features and analyze features.

### Important considerations

This section highlights a few important considerations to note when working with functions:

- The maximum number of functions supported per organization is 200.
- The maximum memory allocated per function is 128 MB.
- The configurable timeout for audio on wait is 2-5 seconds.

### Create a function

| 1 | Sign in to [Control Hub](https://admin.webex.com/login).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Services \> Contact Center \> Customer Experience \> Functions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3 | On the Functions page, click Create a function. You can also create a function from the Functions tab within the Flow Designer module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4 | On the Create a new function page, choose the required method for creating a function. Start Fresh—Choose this method to create a new function from scratch to perform data parsing or run custom code. On the Create a new function wizard, perform the following tasks: On the Name & Configure page, configure the following settings:Function Name—Provide a name for the function.Function Language—Choose the function language. Available languages include JavaScript and Python. Click Create Function. The new function definition UI page loads with the following panels:Code editor—Enter your custom source code here.Test panel—Test the written code by providing values to any of the defined inputs. Click Test to validate the code. The result appears in the result pane.Properties panel—Consists of the following fields. Function Description—Provide a brief description about the purpose of the function.Variable Definition—Configure and map the input variables to the code. Click the Add Input Variables button. In the  Add Function Variable pop-up, enter the following details: Name—Enter the name of the variable.Description—Provide a description for the variable.Variable Type—Choose the variable type. Available options are String, Integer, Date Time, Boolean, Decimal, JSON.Click Save.Output Variable Definition—Specify the output variables to be returned by the function. This helps the flow developers to use these variables while using your function. The Function Properties at the bottom right of the pane displays the following details: Function Owner—The email id of the user who created the function.Function ID—Autogenerated function id.Last edited—The date when the function was last edited.Function version—The latest available version number of this function. Import—Choose this method to import a function. On the Create a new function wizard, perform the following tasks: You can import only JSON files generated by exporting a function. On the Upload the file page, choose the required file. Alternatively, drag and drop the file. Click Replace to replace the chosen file.Click Next.On the Name & Configure page, configure the following settings:Function Name—Provide a name for the function.Function Language—The programming language of the function that you imported. The system sets this based on the language of the function that you import.Click Create Function.The function page reloads. Repeat the steps described above to create a new function from scratch. |
| 5 | Click Publish Function. On the Publish Function page, enter the following details: Publish Note—Add an optional note as a reference.Add Version Label(s)—Add the required version label to the function. If you don't add a version label, the system automatically adds the label 'Latest'. Use the drop-down button next to the function name on the top left of the page to view the version history of the function. You can also revert to an older version if necessary, similar to how you do for flows. If you publish a function after editing its source code or settings, the system updates the changes immediately to all flows consuming those tagged versions of the function. Therefore, be mindful when publishing tagged versions of a function used in your live production flows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

What to do next

Add the function to a main flow. For more information, see [Add a function to a main flow](#task-template%5F79423860-a6a7-425c-a9b0-7b81739fe265).

### Manage functions

After creating a function, you can copy, export, and delete the function, as required.

| 1 | Sign in to [Control Hub](https://admin.webex.com/login).                                                                                               |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Navigate to Services \> Contact Center \> Customer Experience \> Functions. The functions page displays all the functions created in the organization. |
| 3 | Click the ellipsis icon beside the function. Choose Copy, Delete, or Export as needed.                                                                 |
| 4 | Click the Manage function in flow designer button to open the function in the flow designer module.                                                    |

What to do next

### Add a function to a main flow

You can add a function across multiple main flows. 

| 1 | Sign in to [Control Hub](https://admin.webex.com/login).                                                                                                                                                                                    |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Services \> Contact Center \> Customer Experience \> Flows.                                                                                                                                                                     |
| 3 | Click to open the flow to which you want to add a function.                                                                                                                                                                                 |
| 4 | Toggle on the Edit button.                                                                                                                                                                                                                  |
| 5 | Click the Functions tab from the Activity list pane on the left A list of published functions created for the chosen organization/tenant appears.                                                                                           |
| 6 | Drag and drop the required function from the list to the canvas. Add it to the main flow. You can view the details of the chosen function such as function version label, function input variables, variable details, and output variables. |
| 7 | In the Function Input Variables section, map the main flow variables to the function input variables.  Flow variables created with the same name and data type as the function input variables get automatically mapped to each other.      |
| 8 | In the Function Output Variables section, parse and map the function output variables to the main flow variables with the same data type. You can parse using JSONPath expressions, as detailed on the screen with examples.                |
| 9 | Publish the main flow.                                                                                                                                                                                                                      |

### FAQs

This section answers frequently asked questions about using functions in your organization.

**Which languages does the Flow Designer module support for the Function activity?** 

The Flow Designer module supports JavaScript (Node.js 22.x) and Python (3.13) in the first phase.

**Do we have any limits to the libraries I can use inside the code block?** 

Common native libraries are available. However, there's no support for custom modules.

**Is there any limit on the number of lines of code?** 

Yes. You can type in up to 5000 lines of code.

**Is there any limit on the execution time?** 

Yes. It's limited to 5 seconds to complete execution.

**Can I test my code? Any limitations?** 

Yes. An execution test runner is available with actual outputs or error message returned. Console logs aren't exposed, but one can set and access them using a custom output string array.

**Do we have support for Music on wait for execution waits mid call (silence prevention)** 

Yes, Music on wait setting on flow automatically helps prevent silence to callers. The default value is 2 seconds.

**How does the function work?** 

We use FaaS (Function as a Service) infrastructure to package and run the function. Low latency for voice calls.

**How many input variables can I pass? How many outputs are being set?** 

Ten input variables and one JSON output variable are being set. Individual function outputs can be parsed in the same activity using JSONPath expressions.

**Can I set multiple variables to the code block?** 

Yes. The new enhancement to set multiple variables is similar to the ‘Parse’ activity.

**Can I reuse the function across multiple flows?** 

Yes. You can use the function across your flows as it is centrally available in your organization.

**Who can manage (edit or view) functions?** 

Supervisors and administrators. Supervisors access to the function is controlled by the Function setting (which can be set to Edit, View or None under Customer Experience within the User Profile).

## Configure error handling

The system highlights the error handling path for each activity set up within the specific flow. Configure the error handling path to manage potential errors during flow execution. The system displays this path by default, but configuring it’s optional. If you don't set it up for an activity, the system shows notifications during flow validation. However, you can still publish the flow with these notifications.

The system classifies errors that occur during flow execution into two categories:

- Activity execution errors: Indicate the errors that occur during the functional execution of the activity. For example, an activity error occurs when a customer enters an unmatched entry during execution of the [Menu](#Cisco%5FConcept.dita%5F8a8f0369-60b9-4d31-af05-9338f7aa54be) activity.
- System/Global errors: Indicate the errors that occur in the system during activity execution. For example, system errors occur when there’s an invalid pebble expression during the execution of the [Set Variable](#Cisco%5FGeneric%5FTopic.dita%5F78b7600c-0311-486c-9630-ab281d208a5c)activity.

  - Undefined Error: This error node sets the error output path that the flow takes when there are undefined system errors during flow execution. You can configure the flow for undefined errors by connecting the output path of this activity to appropriate activities.  
  The following Flow Control  activities don't have the Undefined Error node:  

    - Start Flow
    - End Flow
    - HTTP Request
    - Parse  
  If you don't see the Undefined Error node in any activity, contact Cisco Support to enable the corresponding feature flag.

Configure error handling paths to optimize the flow. If you don't configure an error handling path for the activity, the flow defaults to the path set in `OnGlobalError` event handler under the Event Flows tab. For more information about the `OnGlobalError` event handler, see [Event flows](#EventFlows).

### System-enforced self-loop limits for activities

The system enforces self-loop limits on specific activities during the runtime execution of flows. This prevents activities from entering into endless loops within an interaction.

If an activity exceeds the system-enforced limit during execution, a warning message appears indicating that a loop is detected. See the following table for maximum limit values for activities:

| Configurations                   | Self-loop limit |
| -------------------------------- | --------------- |
| Callback                         | 10              |
| Queue Contact                    | 100             |
| Blind Transfer                   | 10              |
| Disconnect Contact               | 0               |
| Queue to Agent                   | 100             |
| Advanced Queue Information       | 1500            |
| Escalate Call Distribution Group | 750             |
| Set Caller ID                    | 100             |
| Recording Control                | 10              |
| Bridged Transfer                 | 75              |
| Call Progress Analysis           | 10              |
| Set Contact Priority             | 100             |
| Schedule Callback                | 10              |

While specific configurations exist for call-handling activities, flow-control activities are subject to system-configured surge limits to ensure stability and prevent infinite looping.

## Link multiple flows (with GoTo)

Flow Designer gives you the ability to link multiple flows (flow chaining). You can modify the caller’s experience by handing calls to an entry point (based on time) or to a flow (for reuse across scenarios). Use [GoTo](#Cisco%5FReference.dita%5F73019837-1eec-4f05-b490-7b9ae5568683) to chain multiple flows. You can map flow variables across flows to ensure that data persists across the end-to-end call experience.

### Vaccination registration

To handle customers participating in a vaccination campaign, you can provide two options: one for premium customers and the other for general customers.

When general customers call, the system hands the call to the flow associated with the entry point handling registrations. Based on the active [Entry point routing strategies](#Cisco%5FConcept.dita%5F06cd62d7-40e5-49d8-b34e-43f8153fd87e), the system routes the call to the appropriate agent to register the general customer.

When premium customers call, the system hands the call to another flow to schedule an appointment.

### Known issues with linking flows

- The system prevents you from deleting an entry point that participates in flow chaining. Delete all associated resources—queues and flows—before removing the entry point.
- The system prevents you from deleting a flow that participates in flow chaining. Remove every flow‑chaining reference before deleting the flow.
- Force-deleting an entry point or flow in flow chaining skips validation and shows no error messages in the user interface.

## Debug flows

Flow debugging is a postcall process in Flow Designer that enables you to get insights into the flow and the path it took for a call. This feature lets flow developers view key information in the control execution path to debug and troubleshoot flow issues.

If you have applied multiple version labels to a flow, you can trace the flow with respect to those version labels as well. For more information, see [Apply version labels to a flow](#flow-versioning).

An interaction summarizes and correlates activities along a contact's journey through a Contact Center. The system generates a unique Interaction ID for each interaction, which traces the journey, helping identify failures and troubleshoot flow execution.

Debug flows to view the call control paths after flow execution in production, ensuring verification of activity settings and dependent flow configurations for successful execution.

**Decrypt flow logs**

To enhance the security and flexibility of flow debugging, decryption controls are available for managing sensitive data exposure during debugging:

- **Decryption at flow level**: Turn on the Enable flow Decryption toggle under Flow Decryption Settings when creating and editing flows. This option is available on the Flow General Settings page. This toggle controls decryption of all activities within the flow. Enabling this toggle decrypts logs across all activities, regardless of activity level decryption.
- **Decryption at activity level**: Turn on the Enable Decryption toggle for more granular control of the activities. You can disable log decryption for the activities if the output is sensitive, even if you have enabled the flow-level decryption. This ensures that confidential data in the activities remains protected during debugging.  
Flow decryption applies only to calls initiated after you publish the flow.

To secure the flow logs:

- Enable the flow-level decryption toggle to allow decryption across all activities.
- For activities requiring extra protection, disable decryption at the activity level. This approach gives you the flexibility to trace and debug flows while maintaining the security of sensitive information as needed.

**Example use case:**

As a flow developer you can enable flow-level decryption to troubleshoot a call path but disable decryption for an activity that processes sensitive customer data using collect digits. This ensures the rest of the flow can be debugged while keeping sensitive outputs protected. 

- If the flow-level decryption isn't enabled, activity-level toggles are kept secured and disabled. The entire flow is secured.
- If flow-level decryption is enabled, users with full administrator permissions on the tenant level can adjust decryption settings to maintain compliance and security for certain activities.

Before you begin

Publish and run flows to establish at least one interaction. For more information, see [Create and manage flows](#Cisco%5FGeneric%5FTopic.dita%5Fd32d6ead-60c0-4ae7-8750-9a1ba7663e56).

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Go to Contact Center \> Customer Experience \> Flows. The Flows page appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3 | Click the Go to Flow Designer icon beside the flow that you want to edit. The flow opens in the Flow Designer window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4 | Click Debug. The Interactions pane appears. A table displays the most recent 100 interactions for the flow. You can see the following details in the table: Timestamp: Displays the date and time of the interaction. You can sort the log entries based on the timestamp. Interaction ID: Indicates the unique ID of the interaction. Version: Displays the flow version along with its applied label, such as Latest, Dev, Live, or Test. Entry Point: Shows the entry points assigned to the flow. Last Executed Activity: Shows the executed activities at the end of the selected interaction. Origin: The origin of the interaction. For example, customer cell number, customer email id, and other similar details. Destination: Destination can be DNIS from Entry Point.                                                                                                                                                                                                                     |
| 5 | (Optional) Use the search option to filter the list with the following search parameters: Interaction ID, ANI, DNIS: Enter an interaction ID to display the flow execution path for that interaction. You can also search based on the ANI or DNIS. Date Range: Choose the start and end dates of the duration for which you want to fetch the interaction IDs. Version Label: Choose one or more labels from this drop-down list to view all flow versions with the chosen version labels.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 6 | Choose an Interaction from the table. The selected activity path gets highlighted in the canvas. A new tab opens, displaying the sequence of activities executed during the interaction, along with the following details: Sequence: Displays the activities in the sequence of their execution. Activity Name: Displays the name of the activity. Outcome: The system marks outcomes as either Success or Failed, highlighting failed instances in red. You can choose multiple interactions that open in separate tabs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 7 | Select an activity to view the following details: Activity Interaction Metadata: Displays the name of the activity, and the start and end times of that activity execution. Activity Inputs: Displays the list of provided inputs in the selected activity. For example, if you select the Play Music activity, inputs include:Music FileStart OffsetDynamic Audio Fileand more. Activity Outputs: Displays the output of the activity. If Decrypt Access is enabled for the flow, you can view the unmasked output variable in the debug logs pane. This option is currently enabled only for the following activities: HTTP Request, BRE Request, Collect Digits, Virtual Agent, and Virtual Agent V2 activity. Modified Variables: The system displays the details of modified variables during execution of the selected activity. For example, using the Set Variableactivity displays the updated flow variable in the Modified Variables section.                                               |
| 8 | Decrypt logs icon: Click the decrypt logs icon to access unmasked logs. You can decrypt the logs and access sensitive information only if you're an authorized user. See the following disclaimer: **Disclaimer** _Enabling Debug Details will expose enhanced diagnostic data that may include sensitive information (e.g., user IDs, call metadata, error traces, and possibly other personal or confidential information)._ _By enabling Debug Details, you acknowledge and confirm that:_ _You are authorized to access detailed debug data within your organization._ _You will use this data solely for troubleshooting purposes._ _You understand that enabling this feature may expose personal or confidential information contained in flow logs._ _You will comply with your organization's security and privacy policies when accessing, handling, and sharing this data._ _If you are unsure about the above you should consult your administrator or compliance team before proceeding._ |
| 9 | (Optional) Click the copy icon (![Copy icon.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/500001-600000/510001-520000/510001-511000/510940.jpg)) to copy the interaction details to your clipboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

You can identify the activities for the failed instances and troubleshoot by editing the flow. For more details, see [Create and manage flows](#Cisco%5FGeneric%5FTopic.dita%5Fd32d6ead-60c0-4ae7-8750-9a1ba7663e56).

## Analyze flows

Analytics in Flow Designer provides an aggregated view of all the calls that went through a particular flow. It displays the execution count for each outgoing port of an activity during a given period. It also calculates the percentage of how many calls that have passed through the _NewPhoneContact_ activity. The denominator for the percentage calculation is the number of calls pass through the _NewPhoneContact_ activity. 

Flow Analytics only considers completed calls within the specified timeframe. The calculation of the total number of calls includes calls that start before and end within the chosen period. The analytics data excludes calls set for a callback or calls continuing for other reasons (such as being ongoing or not closed).

Each activity displays execution counts at its outgoing ports. For activities like menus with multiple branches, each port receives its execution count, and the percentages follow. If the execution count of an outgoing port is not present, it means that there were no calls that touched the port.

The color palette shows how the number of executed calls color-codes the flow paths. In scenarios like call loops, the percentage can exceed 100%.

Even without explicit error handling links, the system displays an execution count in its error port if an error occurred and routed to the _OnGlobalError_ event. You can find it under the _Event_ tab. In such cases, the system displays the analytics data for the _OnGlobalError_ event handler.

By default, Flow Analytics considers the latest version of the flow. If the flow has multiple versions, you can switch between the flows using the _Version History_ table.

Currently, Flow Analytics doesn't support subflows; it only tracks a subflow's addition to a main flow, excluding its internal activity data.

Before you begin

Publish the flow at least once.

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Contact Center \>  Customer Experience \>  Flows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3 | Choose the flow and click the Go to Flow Designer icon. The chosen flow opens in the Flow Designer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4 | Click Analytics. The page refreshes and displays the analytics data. By default, it displays the metrics of all completed contacts within the last 15 minutes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5 | Click the Date widget and choose one of the following options: Last 15 minutesTodayYesterdayLast 7 daysLast 30 daysThis monthCustom - choose the start and end dates to view the flow analytics for a specified period up to the last 30 days. The Flow Analytics page displays the following metrics: Total flow executions \- Displays the total number of flow executions during the selected period. Specifically, if a flow executes twice within a single interaction, the system increments the metric by 2 (number of executions) rather than 1 (number of calls). Average Flow Duration \- Displays the average duration for a flow to executed. The system calculates the average across all main flow activities and event flow activities that have passed through the flow. This value includes executed activities through error paths. The denominator is the total flow executions while calculating the average. Average activities per contact \- Displays the average executed activity per call that has passed through the flow. This average value includes event flow activities as well. This helps in analyzing the flow utilization. This value includes executed activities through error paths. Activity Errors \| Activity Error % \- Displays the number of calls that have taken the error port/path. For the percentage calculation, the denominator is the total number of executed activities, and the numerator is the total execution count of the error ports. |
| 6 | (Optional) To switch between flow versions, go to Version History. Choose a version to view the analytics data for that flow version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 7 | (Optional) Choose an activity in the flow to view the Activity usage details pertaining to that activity for the chosen period. This selection only shows the top 100 interactions with the following limitations: The chosen period's data is not a match.For looping activities, the same interactions show multiple times.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 8 | Click Analytics to close the analytics view and get back to the flow designer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Understand error codes

Flow Designer returns error codes to show the nature or reason for an error. Use the following table to identify the error and its description.

__Table 79\. Flow Designer Error Codes__
| Error Code | Description                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FC1001     | Flow version not found. Refresh the page or create a new flow.                                                                                                                                                                                                                                 |
| FC1002     | Start activity not found. Refresh the page or create a new flow. A Start activity appears by default when you create a new flow.                                                                                                                                                               |
| FC1003     | One or more event flows do not have a valid start. Add an Event Handler activity to the start of each event flow.                                                                                                                                                                              |
| FC1004     | All non-event branches must lead to the end node.                                                                                                                                                                                                                                              |
| FC1005     | One of the variable configurations is invalid. For each variable, ensure that the configured data type and variable value are compatible.                                                                                                                                                      |
| FC1006     | One or more ports in the activity lack connections. Connect all ports to another activity using links.                                                                                                                                                                                         |
| FC1007     | Add a description for the activity.                                                                                                                                                                                                                                                            |
| FC1008     | Some of the variables have the same name. Ensure that all variables have a unique name.                                                                                                                                                                                                        |
| FC1009     | The expression is invalid.                                                                                                                                                                                                                                                                     |
| FC1010     | The condition is invalid.                                                                                                                                                                                                                                                                      |
| FC1011     | The system detects a broken link in the Main Flow. Delete the link to fix the error.                                                                                                                                                                                                           |
| FC1012     | A broken link in the Event Flow causes the error. Delete the link to fix it.                                                                                                                                                                                                                   |
| FC1013     | The system uses the activity in more than one Event Flow. Event Flows cannot share common activities and must have a unique start and end.                                                                                                                                                     |
| FC1014     | Queue Contact must stop flow. The output link can only connect to an End Flow activity.                                                                                                                                                                                                        |
| FC1015     | The system identifies incorrectly configured fields in the activity and shows a link to the failed activity during validation. Click the link to navigate to the activity and the field causing the error. Follow the requirements of each field to correct all errors and enter valid inputs. |
| FC1016     | Another flow uses the same name as this one. Edit the flow name to make it unique.                                                                                                                                                                                                             |
| FC1017     | An activity has arrows that originate from and point to itself.                                                                                                                                                                                                                                |

For more information about GraphQL Server errors, see <https://www.apollographql.com/docs/react/data/error-handling/>.
