---
title: "Remove default buttons from the user interface on Board, Desk, and Room Series devices"
product: "Devices"
article_id: "nci847eb"
url: "https://help.webex.com/en-us/article/nci847eb/Remove-default-buttons-from-the-user-interface-on-Webex-Board-Desk-and-Room-Series-devices"
last_updated: "2025-06-06"
description: "You might never use a default button, like keypad or share. Having unused
buttons in the user interface of a device can cause confusion. In these cases,
you can remove the unused buttons."
tags: ["devices"]
source: "help.webex.com"
---

# Remove default buttons from the user interface on Board, Desk, and Room Series devices

If you don't need all the default buttons, there is a set of configurations that you can use to remove them. Custom In-Room Control panels can still be exposed. Removing default buttons and adding custom buttons makes it possible to fully customize the user interface.

For example, remove the Call  and Share  buttons if nobody is going to share content or call from this device. Then, add custom buttons (In-Room Controls) for the tasks that users are going to perform.

## Configurations

Use the following configurations to remove default buttons from the user interface. The configurations are available from the web interface of the device and in the API. Read the [Advanced Settings article](https://help.webex.com/article/n5pqqcm) for information about how to access the web interface and use the API. The web interface is also referred to as the device's  Advanced Settings . 

- UserInterface  \>  Features  \>  Call  \>  Start  ( `xConfiguration UserInterface Features Call Start`): Removes the default _Call_ button (including the directory, favorites, and recent calls lists). Also removes the _Add_ participant button while in a call.
- UserInterface  \>  Features  \>  Call  \>  End  ( `xConfiguration UserInterface Features Call End`): Removes the _End Call_ button.
- UserInterface  \>  Features  \>  Call  \>  JoinMicrosoftTeamsCVI ( `xConfiguration UserInterface Features Call Join JoinMicrosoftTeamsCVI`): Removes the _Microsoft Teams_ button.
- UserInterface  \>  Features  \>  Call  \>  MidCallControls ( `xConfiguration UserInterface Features Call MidCallControls`): Removes the _Hold_, _Resume_, and _Transfer_ in-call buttons.
- UserInterface \>  Features  \>  Call  \>  VideoMute ( `xConfiguration UserInterface Features Call VideoMute`): Removes the _Video On or Off_ button.
- UserInterface \>  Features  \>  Call  \>  Keypad  ( `xConfiguration UserInterface Features Call Keypad`): Removes the _Keypad_ button.
- UserInterface  \>  Features  \>  Call  \>  JoinWebex  ( `xConfiguration UserInterface Features Call JoinWebex`): Removes the _Join Webex_ button.
- UserInterface  \>  Features  \>  Call  \>  JoinZoom  ( `xConfiguration UserInterface Features Call JoinZoom`): Removes the _Join Zoom_ button.
- UserInterface  \>  Features  \>  Call  \>  JoinGoogleMeet  ( `xConfiguration UserInterface Features Call JoinGoogleMeet`): Removes the _Join Google_ button.
- UserInterface  \>  Features  \>  Call  \>  ParticipantList ( `xConfiguration UserInterface Features Call ParticipantList`): Removes the _Participant list_ button in a call.
- UserInterface  \>  Features  \>  Call  \>  LayoutControls  ( `xConfiguration UserInterface Features Call LayoutControls`): Removes the _Layout_ button in a call.
- UserInterface  \>  Features  \>  Share Start  ( `xConfiguration UserInterface Features Share Start`): Choose whether or not to remove button for sharing and previewing content, both in call and out of call.
- UserInterface  \>  Features  \>  Whiteboard Start ( `xConfiguration UserInterface Features Whiteboard Start`): Choose whether or not to remove the default Whiteboard button from the user interface.
- UserInterface  \>  Features  \>  HideAll  ( `xConfiguration UserInterface Features HideAll`): Removes all the default buttons. In-Room Control panels are not removed.

The configurations remove only the buttons, not the functionality as such. You can still share content using the Cisco Webex Teams app, even if you have removed the _Share_ button from the user interface.

## Further Information

Find more details about how to create buttons and customize the user interface [here](https://roomos.cisco.com/doc/TechDocs).
