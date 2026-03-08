---
title: "Cisco Desk Phone 9800 Key Expansion Module"
product: "Devices"
article_id: "ngr795j"
url: "https://help.webex.com/en-us/article/ngr795j"
last_updated: "2025-04-22"
description: "The Cisco Desk Phone 9800 Key Expansion Module (KEM) enhances the phone by
providing additional extension lines and programmable buttons. These buttons can
be configured as line keys, speed-dial buttons, or other supported phone feature
buttons."
tags: ["devices"]
source: "help.webex.com"
---

# Cisco Desk Phone 9800 Key Expansion Module

## Key Expansion Module overview

**_Cisco Desk Phone 9800 Series and Key Expansion Module_**

The Cisco Desk Phone 9800 Key Expansion Module (KEM) supports 40 lines, with two pages of 20 buttons each. 

You can use more than one expansion module per phone on the 9861 and 9871 models. But each module must be the same type. The following table lists the phones and the number of key expansion modules that each model supports.

__Table 1\. Cisco Desk Phone 9800 Series and supported Key Expansion Module__
| Phone model           | Supported total number of KEMs and lines                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| Cisco Desk Phone 9851 | Supports 1 KEM and 46 lines (6 lines on phone)                                                     |
| Cisco Desk Phone 9861 | Supports up to 3 KEMs and 130 lines (10 lines on phone)                                            |
| Cisco Desk Phone 9871 | Supports up to 3 KEMs and 124-128 lines, depending on configuration (4 or 8 lines on phone screen) |

- When your 9861 and 9871 phones are powered over Ethernet (PoE), you can only connect one KEM to each phone. To connect two or three KEMs, use an adapter to power your phone from an electrical outlet.
- The calling system that your phone is registered to restricts the maximum number of SIP lines available on the phone. The supported lines in the table above include both SIP lines and feature line keys (PLK).

## **Key Expansion Module buttons and hardware** 

The following table describes the features of the key expansion module.

__Table 2\. Key Expansion Modules Buttons and Hardware__
| Hardware          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1\. Line keys     | Each button corresponds to one line. The light of each button indicates the state of the corresponding line as follows: ![the line key in the not-configured status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478723.png) Light off—Line is idle or not configured. ![the line key in the idle status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478724.png) Green steady—Line is in use. ![the line key in the busy status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478726.png) Red steady—Shared line or monitored line is in use remotely. ![the line key in the busy status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478726.png) Red flashing—Line has calls on hold. ![the line key with an incoming call alerting](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478725.png) Amber blinking—Line has an incoming call. The LEDs also reflect the status of the extended features assigned to the buttons. |
| 2\. LCD screen    | LCD screen—Displays the phone number, speed-dial number (or name or other text label), phone service, or phone feature assigned to each button. Icons that indicate line status resemble (in both appearance and function) the icons on the phone to which the KEM is attached.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3\. Shift buttons | Shift buttons—2 buttons. The button for page 1 is labeled as 1 and the button for page 2 is labeled as 2\. The lights in each button indicate the state of the page as follows: ![the image of shift button -green](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479555.png) Green steady LED—Page is in view. ![the image of the shift button-Off](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479554.png) Light off—Page is not in view. ![the image of shift button -Amber](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479556.png) Amber steady LED—Page is not in view with one or more alerting calls on the page.                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Install Key Expansion Module

Connect the Key Expansion Module (KEM) to the phone. Depending on the calling system that your phone is registered with, you may need to contact your administrator to enable the KEM before you can use it.

| 1 | Remove the accessory connector cover. ![the graphic of remove port cover from the phone](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479376.png)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Firmly press the USB connector attached to the module to the phone. ![the graphic of install KEM to the phone](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479377.png)                                                                                                                                                                                                                                                                                                                                                                                            |
| 3 | Fasten the screw into the phone. ![the graphic for screwing KEM to the phone](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478871.png) After you firmly attach the module to the phone, the front screen of the phone and KEM appears as following. ![the graphic of 9800 phone with KEM connected](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/479001-480000/479375.png) An automatic upgrade will initiate if the firmware version on the KEM is lower than that on the phone. Wait until the update is complete. |

## Configure speed dials on KEM 

The line keys on the Key Expansion Module (KEM) function similarly to the line keys on the phone itself. Depending on your phone settings, you can configure idle line keys with speed dials.

For more information about how to configure and use speed dials on line keys, see [Use speed dials on your phone](https://help.webex.com/n0pf1t7/).

## Change KEM screen settings

The wallpaper, color theme, and brightness settings on phone also apply to the KEM screen. 

For information about how to adjust screen brightness and change the screen appearance, see [Customize the phone screen settings](https://help.webex.com/article/25oy59/).

## Administration for KEM

- [On Control Hub](#%5F030434c2-66e7-4662-8293-406bf0346b7d)
- [On Unified CM](#generic-template%5Faaf82fcb-9369-47c6-a3b5-3b6c7c7823e8)
- [On phone web page](#reference-template%5F81dce6ff-65b6-44a0-85de-f5bb0db7a986)

If your Cisco Desk Phone 9800 Series is registered to Webex Calling, follow the information in this section to set up the line keys on the attached Key Expansion Modules.

[Move additional lines to KEM (9871 only)](#task-template%5Fb19fb9e8-7642-4b8e-a3e1-cffb7a0ca45c)

Cisco Desk Phone 9871 natively supports up to 32 virtual line keys on the touchscreen. With three KEMs connected, it can support up to 124 or 128 lines depending on the Unified CM configurations. When a KEM is attached, you can specify whether to retain 4 lines or 8 lines on the phone, and move the additional lines to the KEM.

Before you begin

Connect your KEM to the the phone. 

| 1 | From the customer view in [Control Hub](https://admin.webex.com/), go to Devices, and then select your phone.                                                                                      |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select All configurations.                                                                                                                                                                         |
| 3 | In the Att Console section, choose 4 or 8 for Maximum Lines On Phone With KEM. By default, the field is set to 4. The additional extension lines and feature lines are moved to the attached KEMs. |
| 4 | Select Next.                                                                                                                                                                                       |
| 5 | Review your changes and select Apply.                                                                                                                                                              |
| 6 | Select Close to close the page.                                                                                                                                                                    |

[Configure KEM line keys](#task-template%5F4f796a9e-fabe-4e95-8ec0-3c501c6ece48)

The KEM line keys can be configured as primary or shared lines, as well as feature keys.

Use the custom layout to individually customize the KEM line keys.

To help you customize your phone layout, the portal alerts you if the quantities on the device’s shared line list or your monitoring list don't match your active layout. The alerts are called advisories and appear just above the layout area. Advisories are informational messages only and don't prevent you from saving the layout that you create. You can clear advisories by either adding more PLK positions of the required type to your layout or by reducing the entries in the device’s shared line list or the user’s monitoring list.

Before you begin

Connect your KEM to the phone. 

| 1 | From the customer view in [Control Hub](https://admin.webex.com/), go to Devices, and then select your phone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Device Management, select Configure Layout and then select Custom Layout.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3 | Do one of the following action based on your phone model: ![Label for 9851 and 9861](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483834.png) At the bottom of the page, select Configure KEM Keys. ![for 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483152.png) Go to Step 4.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4 | Choose one of the following options for each line key you'd like to modify: **Open**—No value specified. **Primary line**—Setting a primary line clears all extended line key functions like monitoring or speed dial values that may exist in a PLK from a previous configuration. **Shared / Virtual line**—Shared Line Appearance (SLA) positions populate from the values set in configure lines. SLAs populate PLK positions to the layout from top-left to bottom-right. A warning displays if the number of SLA in the configure lines list exceeds the available shared line positions in the layout. **Monitored line**—Monitoring (BLF) positions populate from the values set in the monitoring list. Monitoring entries populate the defined monitoring PLKs first followed by open PLKs. A warning displays if the number of monitoring entries in your monitoring list exceeds the available monitoring positions in the layout. **Speed dial**—Speed dial entries require a name and destination extension, telephone number or SIP URI ( [example@webex.com](mailto:example@webex.com)). SIP URI destinations aren’t routable. Speed dials defined here aren’t customizable on the device. Closed—The key is disabled. |
| 5 | Select Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

[Configure line key labels](#task-template%5F193010d6-0944-426d-83ec-d93a1ab02d2f)

You can choose a predefined number/name format for the line labels (including the primary line and any other lines) that display on the phone screen by using Control Hub.

The configurations are also applicable for Key Expansion Module (KEM).

The following example shows the positions of the configurable line key labels:

**_Example: Configurable line key labels on Cisco Desk Phone 9861 with multiple lines_**

__Table 3\. Configurable line key labels__
| Index | Label Name               | Description                                                                                                                             |
| ----- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Display Name             | For the primary line only. It shows on the top left of the phone screen.                                                                |
| 2     | Line Key Label           | For any other lines (except for the primary line) on the phone with multiple lines. The first line when the secondary label is enabled. |
| 3     | Line Key Secondary Label | For all lines. It shows as the second line label for the primary line and line keys.                                                    |

| 1 | From the customer view in [Control Hub](https://admin.webex.com), go to Devices, and then select your phone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Ensure that the value of Line Label is set to default or empty.Select Configure Lines in the Device Management section.Clear the value of Line Label for the configured lines.The parameter Line Label takes precedence over Line Key Label. If Line Label is configured, the phone will show the configured line label instead.If you allow the phone to show multiple appearances of a shared line, configure the parameter Appearances with a value greater than 1\. If configured, Line Key Label will be suffixed with -1, -2, and so on.This configuration is also applicable for Key Expansion Module (KEM).Click Save. |
| 3 | On the device details page, select All Configurations under the Configurations section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4 | Under the Phone section, configure the parameters Display Name, Line Key Label, and Line Key Secondary Label.For more information about the parameters, see [Parameters for configurable line key labels on Control Hub](#reference-template%5Fff6369f1-07b6-46e3-8ee1-e0dbc3bd6c99).                                                                                                                                                                                                                                                                                                                                          |
| 5 | Click Next, review your changes, and then click Apply.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Parameters for configurable line key labels on Control Hub

| Parameter                | Default and options                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display Name             | Default: For 9841/9851: User Phone Number / Location Number / User Extension For 9861/9871/8875: User Name (First Name Last Name) Options:User Phone Number / Location Number / User Extension User Name (First Name Last Name) User Name (Last Name First Name) | For the option User Phone Number / Location Number / User Extension, the display priority is: User Phone Number > Location Number > User Extension. If User Phone Number is empty, then the phone will display Location Number. Meanwhile, if the Location Number is also empty, then the phone will display User Extension. If the actual values of "Display Name" and "Line Key Label" are identical, the secondary line label on the primary line doesn't display. |
| Line Key Label           | Default: User Name (First Name Last Name)Options:User Extension / First NameUser Name (First Name Last Name)User Name (Last Name First Name)                                                                                                                     | For the option User Extension / First Name, the display priority is: User Extension > First Name If User Extension is empty, then the phone will display First Name.                                                                                                                                                                                                                                                                                                  |
| Line Key Secondary Label | Default: User Phone Number / Location Number / User ExtensionOptions:User Extension / First NameUser Name (First Name Last Name)User Name (Last Name First Name) User Phone Number / Location Number / User ExtensionNone                                        | If set to None, the phone doesn't display the secondary label on the line key. In this case, only one line label displays on the phone (including the primary line on the upper left corner of the phone screen).If the actual values of "Line Key Label" and "Line Key Secondary Label" are identical, the secondary label on the line key will only display the string "Line".                                                                                      |

If your Cisco Desk Phone 9800 Series is registered to Cisco Unified Communications Manager (Unified CM), follow the information in this section to set up the attached Key Expansion Modules.

[Enable a KEM for the phone](#task-template%5F124e3338-76b5-42ff-853f-99183d20168b)

Enable the KEMs that are attached to the phone on Cisco Unified CM Administration before your users can use them.

Before you begin

- Connect your KEM to your phone.
- Make sure the side USB port is enabled.

| 1 | On Cisco Unified CM Administration, choose Device \> Phone.                                                                                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Find and use the filters to search for your phone.                                                                                                                                                 |
| 3 | Click the device name of your phone to open the Phone Configuration page.                                                                                                                                |
| 4 | In the Expansion Module Information section, choose your KEM in the module drop-down list. By default, the fields are set to None. The module appears in the list only when it's connected to the phone. |
| 5 | Click Save.                                                                                                                                                                                              |
| 6 | Click Apply Config.                                                                                                                                                                                      |

[Move additional lines to KEM (9871 only)](#task-template%5F59ca97df-497f-466f-9d22-18a02eef2c2a)

Cisco Desk Phone 9871 natively supports up to 32 virtual line keys on the touchscreen. With three KEMs connected, it can support up to 124 or 128 lines depending on the Unified CM configurations. When a KEM is attached, you can specify whether to retain 4 lines or 8 lines on the phone, and move the additional lines to the KEM.

| 1 | On Cisco Unified CM Administration, choose Device \> Phone.                                                                                                                      |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Find and use the filters to search for your phone.                                                                                                                         |
| 3 | Click the device name of your phone to open the Phone Configuration page.                                                                                                        |
| 4 | In the Maximum lines on phone with KEM field, choose 4 or 8. By default, the field is set to 4. The additional extension lines and feature lines are moved to the attached KEMs. |
| 5 | Click Save.                                                                                                                                                                      |
| 6 | Click Apply Config.                                                                                                                                                              |

[Assign an extension number to a line key on KEM](#task-template%5F04a57102-426e-4c8c-a3d8-940400676e3a)

The Key Expansion Module (KEM) line keys function similarly to the line keys on the phone itself. You can configure the KEM line keys following the same steps. When the number of lines exceeds the phone's maximum capacity, they extend to the attached KEMs.

You can use the phone button template to arrange the sequence of the extension lines and feature lines.

Cisco Unified Communications Manager (Unified CM) supports up to 126 SIP lines on a phone. If you have three KEMs attached to Cisco Desk Phone 9861 and 9871, keep the following limitation in mind:

- - **9861**: Don't assign extension numbers to the last four line keys on the third KEM. Instead, you can add features on them.
  - **9871**: Don't assign extension numbers to the last two line keys on the third KEM. Instead, you can add features on them.

| 1 | On Cisco Unified CM Administration, choose Device \> Phone.                                                       |
| - | ----------------------------------------------------------------------------------------------------------------- |
| 2 | Use the filters to find your phone to configure.                                                                  |
| 3 | Click the device name of your phone to open the Phone Configuration page.                                         |
| 4 | Click Line \[n\] - Add a new DN in the Association pane on the left.                                              |
| 5 | In the Directory Number Configuration window, enter a dialable phone number in the Directory Number field.        |
| 6 | (Optional) Select a partition in the Rout Partition field.                                                        |
| 7 | (Optional) Select a calling search space in the Calling Search Space field in the Directory Number Settings area. |
| 8 | Click Save.                                                                                                       |

[Add features to KEM line keys](#reference-template%5F0004c1f8-f10a-440d-b8a1-03c8e4ae9e88)

You can add the features listed in the following table to line keys on Cisco Desk Phone 9800 Series and their attached KEMs.

__Table 4\. Supported features on line keys__
| Feature name         | Description                                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BLF with Call Park   | Use the Call Park BLF feature in the phone button template to control this shortcut.                                                                                             |
| BLF with Call Pickup | Use the Speed Dial BLF feature in the phone button template and enable the checkbox Call Pickup in the Busy Lamp Field Speed Dial Configuration window to control this shortcut. |
| BLF with Speed Dial  | Use the Speed Dial BLF feature in the phone button template to control this shortcut.                                                                                            |
| DND                  | Use the Do Not Disturb feature in the phone button template to control this shortcut.                                                                                            |
| Hunt Group           | Use the Hunt Group Logout feature in the phone button template to control this shortcut.                                                                                         |
| Intercom             | Use the Intercom feature in the phone button template to control this shortcut.                                                                                                  |
| Meet Me              | Use the Meet Me Conference feature in the phone button template to control this shortcut.                                                                                        |
| Privacy              | Use the Privacy feature in the phone button template to control this shortcut.                                                                                                   |
| Queue Status         | Use the Queue Status feature in the phone button template to control this shortcut.                                                                                              |
| Redial               | Use the Redial feature in the phone button template to control this shortcut.                                                                                                    |
| Speed Dial           | Use the Speed Dial feature in the phone button template to control this shortcut.                                                                                                |
| XSI Service          | Use the Service URL feature in the phone button template to control this shortcut.                                                                                               |

We recommend using a phone button template to configure KEM line keys. These templates work for both phones and KEMs, allowing additional lines beyond the phone's maximum to flow to the KEM line keys.

#### Configure feature line keys with a phone button template

You can use the Phone Button Template on Cisco Unified Communications Manager Administration to configure the feature line keys for different features. Each feature line key takes up a line position. You can change the order of the feature.

| 1 | On Cisco Unified CM Administration, choose Device \> Device Settings \> Phone Button Template.                                                                                                                                                                                      |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Find to display list of supported phone templates.                                                                                                                                                                                                                            |
| 3 | Perform the following steps if you want to create a new phone button template; otherwise, proceed to the next step. Select a default template for the model of phone and click Copy. In the Phone Button Template Information field, enter a new name for the template. Click Save. |
| 4 | Perform the following steps if you want to add phone buttons to an existing template. Click Find  and enter the search criteria. Choose an existing template.                                                                                                                       |
| 5 | From the Line drop-down list, choose feature that you want to add to the template.                                                                                                                                                                                                  |
| 6 | Click Save.                                                                                                                                                                                                                                                                         |
| 7 | Perform one of the following tasks: Click Apply Config if you modified a template that is already associated with devices to restart the devices. If you created a new button template, associate the template with the devices and then restart them.                              |

####  Apply a button template to a phone

| 1 | On Cisco Unified Communications Manager Administration, choose Device \> Phone.                                     |
| - | ------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Find to display the list of configured phones.                                                                |
| 3 | Choose the phone to which you want to add the phone button template.                                                |
| 4 | In the Phone Button Template drop-down list, choose the phone button template that contains the new feature button. |
| 5 | Click Save. A message prompts for clicking Reset to update the phone settings.                                      |
| 6 | Click Reset.                                                                                                        |

[Apply the custom wallpaper and logo](#reference-template%5F1743b2f7-f3b3-468d-ae53-eb6032e3c3fd)

The wallpaper and color theme on the phone screen also applies to the attached Key Expansion Modules (KEM). The logo displays only on the phone screen and does not appear on the KEM screen. 

To deploy your custom wallpaper and logo to your phones, follow this workflow: 

1. Prepare your wallpaper and logo images
2. Upload the images files to the TFTP server
3. Create a general management file _List.xml_
4. Upload the _List.xml_ to the TFTP server
5. Restart the TFTP server
6. Configure the wallpaper settings on Cisco Unified Communications Manager Administration

See the following for procedures:

#### Prepare your wallpaper and logo images

To get the best experience, keep the following tips in mind when choosing or designing your images:

- Avoid using clustered images that can make it hard for you to identify phone lines on the home screen. Simplicity is key when selecting wallpapers.
- Ensure that your chosen wallpapers match your phone's color scheme. Opt for wallpapers that complement either the dark or light color palettes. Dark images are best suited for dark mode, while light images work well for light mode.
- Avoid using high contrast images as wallpapers. The extreme contrast can make it challenging to see the logo and other screen elements against the background.
- Avoid using dynamic images as wallpapers.
- The logo displays on the phone screen only, and it doesn't display on the KEM screen. When multiple lines are configured on Cisco Desk Phone 9841, 9851, and 9861, the logo and the logo setting in the Settings menu are unavailable.
- To use custom wallpaper on phones with Key Expansion Modules (KEM) attached, prepare both phone wallpaper and KEM wallpaper.

__Table 5\. The specifications for wallpaper and logo images on different call control systems__
| Image               | Supported format (Unified CM)                                                                                                                                                      | Recommended dimensions (pixels)                                                                                                          | Description                                                                                                                                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logo                | PNG                                                                                                                                                                                | Cisco Desk Phone 9851: 190x125 Cisco Desk Phone 9861: 380x250 Cisco Desk Phone 9871: 494x325 / 418x275 Cisco Video Phone 8875: 380x250   | Images that don't match the recommended dimensions will be scaled proportionally.You don't need to create a separate thumbnail image for the logo. The system automatically scales the logo image to fit the dimensions of the thumbnail. |
| Wallpaper           | Cisco Desk Phone 9851: 480x240 Cisco Desk Phone 9861: 800x480 Cisco Desk Phone 9871: 1280x720 Cisco Desk Phone 9800 Key Expansion Module: 480x800 Cisco Video Phone 8875: 1024x600 | Images that don't match the recommended dimensions may be scaled to fit the phone screen, which may cause the image to become distorted. |                                                                                                                                                                                                                                           |
| Wallpaper thumbnail | Cisco Desk Phone 9851: 100x56 Cisco Desk Phone 9861: 150x90 Cisco Desk Phone 9871: 228x128 Cisco Video Phone 8875: 180x100                                                         | Images that don't match the recommended dimensions may cause certain issues on the phone.                                                |                                                                                                                                                                                                                                           |

Due to the storage limitation on the Cisco Desk Phone 9851, make sure that the limit size (250KB x 10) is not reached. Otherwise, certain issues might occur on the phones. See the following table for details:

__Table 6\. Limit size of customized wallpapers on each phone model__
| Phone Model            | Maximum size per image | Maximum number of images | Limit size |
| ---------------------- | ---------------------- | ------------------------ | ---------- |
| Cisco Desk Phone 9851  | 250KB                  | 10                       | 250KB x 10 |
| Cisco Desk Phone 9861  | 1MB                    | 20                       | 1MB x 20   |
| Cisco Desk Phone 9871  | 1MB                    | 20                       | 1MB x 20   |
| Cisco Video Phone 8875 | 1MB                    | 20                       | 1MB x 20   |

| 1 | Choose your desired logo and wallpaper images.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Format the images to meet the required specifications as described in the table above.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Rename the wallpaper image files in this format: For phone wallpaper and KEM wallpaper images, use _wallpaper-xxx.png_. Replace _xxx_ with your desired name. For example, _wallpaper-blue.png_, _wallpaper-darkgreen.png_.For phone wallpaper thumbnail images, use _thumbnail-xxx.png_. Replace _xxx_ with your desired name. For example, _thumbnail-blue.png_, _thumbnail-darkgreen.png_. The system cannot utilize wallpaper files that are named using different patterns. However, for the logo file, you have the flexibility to name it as per your requirements.Make sure that the phone wallpaper and KEM wallpaper have the same filename. Otherwise, the system will fail to load the KEM wallpaper and use the system default wallpaper for KEM.For the _xxx_ in the filename, do not use special characters. Only use letters and numbers.Thumbnail images for logo and KEM wallpapers are not required. |

#### Create a general management file

The system uses the _List.xml_ file to manage the wallpaper and logo files. In the file, you can specify the wallpapers and the logo available in the phone custom wallpaper settings. The _List.xml_ file must be uploaded to the repository where you store the image files for a particular phone model.

Here is an example of the definitions in a general management file:

```
<CiscoIPPhoneImageList version="1.0">
<!-- Please Add Images to the end of the list-->

<ImageItem Name="Blue"
Image="TFTP:Desktops/DP-9871/wallpaper-blue.png"
Thumbnail="TFTP:Desktops/DP-9871/thumbnail-blue.png"
Theme = "dark"/>

<ImageItem Name="Purple"
Image="TFTP:Desktops/DP-9871/wallpaper-purple.png"
Thumbnail="TFTP:Desktops/DP-9871/thumbnail-purple.png"
Theme = "dark"/>

<ImageItem Name="logo"
Image="TFTP:Desktops/DP-9871/logo.png"/>

</CiscoIPPhoneImageList>
```

__Table 7\. Elements in the List.xml file__
| Element                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Example                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Root element           | Make sure you include the root element CiscoIPPhoneImageList in your XML file. If you upload a new XML file or update the existing one, make sure to do the following actions:Increment the version number. For example, 1.1, 1.2, and so on.Restart the TFTP server.Otherwise, the phone won't download the latest version of the XML file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <CiscoIPPhoneImageList version="1.0"> </CiscoIPPhoneImageLis>                                                                                 |
| Wallpaper item element | You can add multiple ImageItem elements. Each element contains the information for a particular wallpaper file and has the following four parameters: Name=: The display name of the wallpaper in the custom wallpaper settings. Image=: Specifies the TFTP path of the image file as TFTP:Desktops/DP-9871/wallpaper-xxx.png, where replace _wallpaper-xxx.png_ with your wallpaper filename. Thumbnail=: Specifies the file path of the wallpaper thumbnail file as TFTP:Desktops/DP-9871/thumbnail-xxx.png, where replace _thumbnail-xxx.png_ with your actual thumbnail filename. Theme=: Specifies the default color theme when the phone uses the default custom wallpaper that the administrator specifies. If the color mode isn't specified, it defaults to the light theme. This parameter doesn't apply when access to the custom wallpaper settings is enabled. Options: dark, light | <ImageItem Name="Blue" Image="TFTP:Desktops/DP-9871/wallpaper-blue.png" Thumbnail="TFTP:Desktops/DP-9871/thumbnail-blue.png" Theme = "dark"/> |
| Logo item element      | Your phone supports only one logo to be added. The logo item element also uses the ImageItem element but has the following two parameters. Name="logo": Include Name="logo" as is in your XML file. Don't change the value. The system uses it to identify the logo file. Image=: Specifies the TFTP path of the logo file as TFTP:Desktops/model-name/xxx.png. Replace the _model-name_ with the name of your phoen model, such as DP-9871, DP-9851, DP-9861NR, etc. And, replace _xxx.png_ with your actual logo filename.                                                                                                                                                                                                                                                                                                                                                                     | <ImageItem Name="logo" Image="TFTP:Desktops/DP-9871/logo.png"/>                                                                               |

The following figure shows the **Logo** and Custom wallpaper setting screens:

When multiple lines are configured on Cisco Desk Phone 9841, 9851, and 9861, the logo and the logo setting in the menu are unavailable.

Before you begin

Obtain the file path on the TFTP server that you've uploaded the wallpaper and logo images to. 

| 1 | Create a new file with your text editor or XML editor.                                                                                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Add the elements with the information of your image files included. The file path and file names are case-sensitive. Make sure you enter them correctly. |
| 3 | Save the file as _List.xml_.                                                                                                                             |

#### Upload files to the TFTP server

Upload the _List.xml_ file and all your wallpaper and logo image files to the path `Desktops/1024x600x24` on the TFTP server. After you apply the custom wallpaper settings on Cisco Unified Communications Manager, your phones download the images from the server.

| 1 | On Cisco Unified Communications Manager Administration, select Cisco Unified OS Administration in the Navigation field and click Go. ![the graphic for switching to Unified OS Administration](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/475001-476000/475747.png) |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Software Updates \> TFTP File Management \> Upload File.                                                                                                                                                                                                                                                     |
| 3 | Click Choose File and select the file to upload in your local drive.                                                                                                                                                                                                                                                |
| 4 | Specify the upload directory for the wallpaper image.                                                                                                                                                                                                                                                               |
| 5 | Click Upload File.                                                                                                                                                                                                                                                                                                  |
| 6 | Repeat Step 3 through Step 5 to upload more files.                                                                                                                                                                                                                                                                  |

What to do next

Restart the TFTP server.

#### Restart the TFTP server

To apply the changes that you've made, restart the TFTP server.

| 1 | On Cisco Unified Communications Manager Administration, select Cisco Unified Serviceability in the Navigation field and click Go. |
| - | --------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Tools \> Control Center - Feature Services.                                                                           |
| 3 | Select your server and click Go.                                                                                                  |
| 4 | Select Cisco TFTP in the CM Services section.                                                                                     |
| 5 | Click Restart.                                                                                                                    |

#### Configure the wallpaper settings on Cisco Unified Communications Manager Administration

As an administrator, you can designate the wallpaper image that will be applied to the deployed phones. If you grant users access to the appearance settings on their phones, they can choose whether to display the logo and select their preferred wallpaper from the provided options. However, if you do not grant them access, the appearance settings will be hidden on the phones.

Before you begin

Before you start configuring the wallpaper settings on Cisco Unified Communications Manager Administration, finish the following actions first:

- Prepare your wallpaper and logo images
- Create a general management file (_List.xml_)
- Upload the _List.xml_ file and the image files to the TFTP server

| 1 | Log in to Cisco Unified Communications Manager Administration.                                                                                                                                                                                                                                           |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Navigate to Device \> Device Settings \> Common Phone Profile.                                                                                                                                                                                                                                           |
| 3 | Locate and click the profile that your phones are using.                                                                                                                                                                                                                                                 |
| 4 | In the Common Phone Profile Information section, check the check box of Enable End User Access to Phone Background Image Setting if you want to allow users to change the phone screen background image. Otherwise, leave the check box unchecked.                                                       |
| 5 | Go to the Product Specific Configuration Layout section and enter the filename of the wallpaper image file in the Background Image field. It's important to enter the exact filename that you specified in the List.xml file. If you enter a wrong filename, the system will fail to load the wallpaper. |
| 6 | Click Save and then Apply Config.                                                                                                                                                                                                                                                                        |
| 7 | Restart the phones.                                                                                                                                                                                                                                                                                      |

If your Cisco Desk Phone 9800 Series is registered to Cisco BroadWorks, follow the information in this section to set up the attached Key Expansion Modules.

[Enable or disable a KEM for the phone](#reference-template%5F36ac54b6-0e0c-427f-b403-4cf2fb624a17)

The 9851 phone supports one Key Expansion Module (KEM); the 9861 and 9871 phones support up to three KEMs. You can specify the number of KEMs that can be used on the 9861 and 9871 phones. You can also disable the attached KEMs. 

Before you begin

- Access the phone web interface.
- Make sure the side USB port on the phone is enabled.

| 1 | Select Voice \> Att Console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the General section, select an option from the drop-down list of Number of Units. Setting the value to 0 disables all the connected KEMs. Setting the value to 2 for a phone with three KEMs disables the third KEM. Default: 1 (for 9851); 3 (for 9861 and 9871) Options for 9851: 0, 1 Options for 9861 and 9871: 0, 1, 2, 3 You can also configure this parameter in the phone configuration file (cfg.xml). Enter a string in this format: <Number\_of\_Units ua="na">3</Number\_of\_Units> |
| 3 | Click Submit All Changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

[Move additional lines to KEM (9871 only)](#task-template%5F1f7da320-a233-4859-b414-a98866aae434)

Cisco Desk Phone 9871 natively supports up to 32 virtual line keys on the touchscreen. With three KEMs connected, it can support up to 124 or 128 lines depending on the Unified CM configurations. When a KEM is attached, you can specify whether to retain 4 lines or 8 lines on the phone, and move the additional lines to the KEM.

Before you begin

Access the phone administration web page.

| 1 | Select Voice \> Att Console.                                                                                                                                                                                                                                                                                                                          |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Number of Phone Lines field, choose 4 or 8. By default, the field is set to 4. The additional extension lines and feature lines are moved to the attached KEMs. You can also configure this parameter in the phone configuration file (cfg.xml). Enter a string in this format: <Number\_of\_Phone\_Lines ua="na">4</Number\_of\_Phone\_Lines> |
| 3 | Click Submit All Changes.                                                                                                                                                                                                                                                                                                                             |

[Assign an extension number to a line key on KEM](#task-template%5F2d8c4c4c-a356-474c-9fbe-3c5f19e60554)

You can assign an extension number to a key expansion module line key so that the line key can be used as a SIP line. 

Cisco BroadWorks supports up to 16 SIP lines on a phone. You can configure a line key as the primary line or as a shared line that shares a SIP number with other line keys.

Before you begin

Access the phone administration web page.

| 1 | Access the KEM settings in the way that's applicable to your phone model. ![Label for 9851 and 9861](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483834.png) Select Voice \> Att Console. ![for 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483152.png) Select Voice \> Phone.                                                                                                                                                                                                                                                                                   |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Go to the section of the KEM line key that you want to configure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3 | Select a number from 1 to 16 in the Extension drop-down list. You can also configure this parameter in the phone configuration file (cfg.xml). Enter a string in this format: ![Label for 9851 and 9861](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483834.png) <Unit\_n\_Extension\_m\_ ua="na">3</Unit\_n\_Extension\_m\_> where, replace the _n_ and _m_ with the corresponding unit number and line key number. ![for 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483152.png) <Extension\_n\_ ua="na">8</Extension\_n\_> where, _n_ is the line key number. |
| 4 | Click Submit All Changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

[Add an extended feature to a KEM line key](#task-template%5F60eca7e3-6f17-4d5d-b4e8-a52f57d6b541)

You can add a feature to a line key of the attached KEM. Then, the user can press the line key to access the feature. For the supported features, see [Programmable features on line keys](https://help.webex.com/article/n2bsfgj/Feature-line-keys-and-softkeys#reference-template%5F8c2c0de9-b529-4480-bd3d-890bba561187).

Before you begin

Access the phone administration web page.

| 1 | Access the KEM settings in the way that's applicable to your phone model. ![Label for 9851 and 9861](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483834.png) Select Voice \> Att Console. ![for 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483152.png) Select Voice \> Phone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to the section of the KEM line key that you want to configure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3 | Enter a string in the Extended Function field in this format: fnc=blf+sd+cp;sub=<BLF\_URI>;ext=$USER@$PROXY; For the supported features on line keys and the valid string syntax, see [Programmable features on line keys](https://help.webex.com/article/n2bsfgj/Feature-line-keys-and-softkeys#reference-template%5F8c2c0de9-b529-4480-bd3d-890bba561187). You can also configure this parameter in the phone configuration file (cfg.xml). Enter a string in this format: ![Label for 9851 and 9861](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483834.png) <Unit\_n\_Key\_m\_ ua="na">fnc=blf+sd+cp;sub=<BLF\_URI>;ext=$USER@$PROXY;</Unit\_n\_Key\_m\_> where, replace the _n_ and _m_ with the corresponding unit number and line key number. ![for 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483152.png) <Extended\_Function\_n\_ ua="na">fnc=blf+sd+cp;sub=<BLF\_URI>;ext=$USER@$PROXY;</Extended\_Funcction\_n\_> where, replace _n_ with the KEM line key number. |
| 4 | Click Submit All Changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

[Enable users to configure features on KEM](#task-template%5Fd2977d05-a264-4ae4-a3d0-e4f12766640c)

You can enable the user to configure features on the line keys of the key expansion module. The user can access the list of available features by pressing the line key and configure it with their desired feature.

Before you begin

Access the phone administration web page.

| 1 | Select Voice \> Att Console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the General section, configure the Customizable PLK Options parameter with the codes of your desired features. You can configure multiple features for line keys and separate each feature code with a semicolon. The user can add a feature to an empty line key, as well as edit or remove the existing feature. Table 8\. User-configurable features on KEM line keysFeatureCodeUser options on line keyBLF with Speed dialblf;sd Create or edit Speed dialCreate or edit BLF + Speed dialReplace the existing feature with anotherRemove the existing feature BLF with Call pickupblf;cp Create or edit BLF + Call pickupRemove the existing feature BLF with Speed dial and Call pickupblf;sd;cp Create or edit Speed dialCreate or edit BLF + Speed dialCreate or edit BLF + Speed dial + Call pickupReplace the existing feature with anotherRemove the existing feature Call forwardcfwd Create Call forwardRemove the existing feature If assigned with the call forward feature, pressing the line key opens the call forward settings window. The user can configure forward settings for each extension line on both the phone and KEM. Do not disturbdnd Create Do not disturbRemove the existing feature If assigned with the DND feature, pressing the line key toggles DND on or off. Redialredial Create RedialRemove the existing feature If assigned with the redial feature, pressing the line key redials the last called number. Speed dialsd Create or edit Speed dialRemove the existing feature You can also configure this parameter in the phone configuration file (cfg.xml). Enter a string in this format: <Customizable\_PLK\_Options ua="na">blf;sd;dnd</Customizable\_PLK\_Options> |
| 3 | Click Submit All Changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

[Shut down a line key on KEM](#task-template%5F46f340d6-14f4-4729-8edc-ea9347f936e5)

You can shut down a line key on a KEM by setting it to Inert mode through the phone's web page. When a KEM line key is in Inert mode, it is completely disabled. For example, the LED on the line key is turned off, no icons or text are displayed next to the line key, and the line button is unresponsive. In short, it is completely unavailable.

Before you begin

Access the phone administration web interface.

| 1 | Access the KEM settings in the way that's applicable to your phone model. ![Label for 9851 and 9861](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483834.png) Select Voice \> Att Console. ![for 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483152.png) Select Voice \> Phone.                                                                                                                                                                                                                                                                                                                                         |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Go to the section of the KEM line key that you want to shut down.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3 | Enter fnc=inert in the Extended Function field. fnc=inert means function=inert. You can also configure this parameter in the phone configuration file (cfg.xml). Enter a string in this format: ![Label for 9851 and 9861](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483834.png) <Unit\_n\_Key\_m\_ ua="na">fnc=inert</Unit\_n\_Key\_m\_> where, replace the _n_ and _m_ with the corresponding unit number and line key number. ![for 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483152.png) <Extended\_Function\_n\_ ua="na">fnc=inert</Extended\_Function\_n\_> where, replace _n_ with the KEM line key number. |
| 4 | Click Submit All Changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
