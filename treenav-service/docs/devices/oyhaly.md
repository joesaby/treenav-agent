---
title: "Use the Key Expansion Module (KEM) to add buttons to your Cisco 8800 series phone"
product: "Devices"
article_id: "oyhaly"
url: "https://help.webex.com/en-us/article/oyhaly/Add-Buttons-to-Your-Phone-8800-Series"
last_updated: "2024-11-25"
description: "The Cisco 8800 IP Phone&#x27;s Key Expansion Module enhances the phone by providing
additional programmable buttons. These buttons can be configured as either
speed-dial buttons or phone feature buttons."
tags: ["devices", "webex-calling"]
source: "help.webex.com"
---

# Use the Key Expansion Module (KEM) to add buttons to your Cisco 8800 series phone

## Cisco 8800 series Key Expansion Module setup overview 

**_Key Expansion Module with Single LCD Screen_** 

|                                                                                                                                                                                              |                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/390001-400000/394001-395000/394009.jpg)**_Cisco IP Phone 8851/8861 Key Expansion Module with Dual Screen_** | ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/390001-400000/393001-394000/393993.jpg)**_Cisco IP Phone 8865 Key Expansion Module with Dual Screen_** |

The Cisco IP Phone 8800 Key Expansion Module adds extra programmable buttons to the phone. The programmable buttons can be set up as phone speed-dial buttons, or phone feature buttons. 

There are 3 expansion modules available: 

- Cisco IP Phone 8800 Key Expansion Module—Single LCD screen module, 18 line keys, 2 pages, two-column display only.
- Cisco IP Phone 8851/8861 Key Expansion Module—Dual LCD screen module for audio phones, 14 line keys, 2 pages, one-column display only.
- Cisco IP Phone 8865 Key Expansion Module—Dual LCD screen module for video phones, 14 line keys, 2 pages, one-column display only.

The Cisco IP Phone 8851/8861 Key Expansion Module and the Cisco IP Phone 8865 Key Expansion Module require Firmware Release 11.2(3) or later.

You can use more than one expansion module per phone. But each module must be the same type. You cannot mix Cisco IP Phone 8800 Key Expansion Module with a Cisco IP Phone 8851/8861 Key Expansion Module or with a Cisco IP Phone 8865 Key Expansion Module. You cannot mix audio expansion modules with video expansion modules. You also cannot use a video expansion module on an audio phone or an audio expansion module on a video phone. 

The following table lists the phones and the number of key expansion modules that each model supports.

__Table 1\. Cisco IP Phones and Supported Cisco IP Phone 8800 Key Expansion Module__
| Cisco IP Phone Model | Supported Number of Key Expansion Modules and Buttons                 |
| -------------------- | --------------------------------------------------------------------- |
| Cisco IP Phone 8851  | 2; single LCD screen, 18 line keys, two pages, providing 72 buttons   |
| Cisco IP Phone 8861  | 3; single LCD screen, 18 line keys, two pages, providing 108 buttons  |
| Cisco IP Phone 8865  | 3; single LCD screen, 18 line keys, two pages, providing 108 buttons, |

__Table 2\. Cisco IP Phones and Supported Cisco IP Phone 8851/8861 Key Expansion Module and Cisco IP Phone 8865 Key Expansion Module__
| Cisco IP Phone Model | Supported Numbers of Key Expansion Modules and Buttons            |
| -------------------- | ----------------------------------------------------------------- |
| Cisco IP Phone 8851  | 2; dual LCD screen, 14 line keys, two pages, providing 56 buttons |
| Cisco IP Phone 8861  | 3; dual LCD screen, 14 line keys, two pages, providing 84 buttons |
| Cisco IP Phone 8865  | 3; dual LCD screen, 14 line keys, two pages, providing 84 buttons |

## Key Expansion Module power information

 If you use a key expansion module with your IP phone, then Power over Ethernet (PoE) is enough to power your expansion modules. But, your phone must have an IP address in order to charge the expansion module.

A power cube is needed for smartphone or tablet charging when your key expansion module is attached.

A key expansion module uses 48V DC, 5W per module. If you are charging a smartphone or a tablet, note the following: 

- Side USB: Up to 500mA/2.5W charging
- Back USB: Fast charging, Supports up to 2.1A/10.5W charging

__Table 3\. Power-Supply Compatibility for Cisco IP Phone 8800 Key Expansion Module__
| Configuration                     | 802.3af Power over Ethernet (PoE) | 802.3at PoE                  | Cisco IP Phone Power Cube 4 |
| --------------------------------- | --------------------------------- | ---------------------------- | --------------------------- |
| 8851 with 1 key expansion module  | Yes                               | Yes                          | Yes                         |
| 8851with 2 key expansion modules  | No                                | No See the third note below  | Yes                         |
| 8861 with 1 key expansion module  | No                                | Yes                          | Yes                         |
| 8861 with 2 key expansion modules | No                                | Yes See the first note below | Yes                         |
| 8861 with 3 key expansion modules | No                                | Yes See the first note below | Yes                         |

- The fast-charging feature on the back USB does not work when more than one key expansion module is attached to a Cisco IP Phone 8861 using 802.3at PoE.
- The fast-charging feature on the back USB doesn’t work when more than one key expansion module is attached to a Cisco IP Phone 8861, unless Cisco Universal PoE (UPoE) is used.
- Cisco IP Phone 8851 with 2 key expansion modules works on 802.3at PoE only with v08 or later hardware. You can find the phone version information on the lower back of the phone as part of the TAN and PID label. Version information is also located on the individual phone packaging.

__Table 4\. Power-Supply Compatibility for Cisco IP Phone 8851/8861 Key Expansion Module and Cisco IP Phone 8865 Key Expansion Module__
| Configuration                              | 802.3af Power over Ethernet (PoE) | 802.3at PoE                  | Cisco IP Phone Power Cube 4 |
| ------------------------------------------ | --------------------------------- | ---------------------------- | --------------------------- |
| 8851 with 1 key expansion module           | Yes                               | Yes                          | Yes                         |
| 8851with 2 key expansion modules           | No                                | Yes See the third note below | Yes                         |
| 8861 and 8865 with 1 key expansion module  | No                                | Yes                          | Yes                         |
| 8861 and 8865 with 2 key expansion modules | No                                | Yes See the first note below | Yes                         |
| 8861 and 8865 with 3 key expansion modules | No                                | Yes See the first note below | Yes                         |

- The fast-charging feature on the back USB does not work when more than one key expansion module is attached to a Cisco IP Phone 8861 and 8865 using 802.3at PoE.
- The fast-charging feature on the back USB doesn’t work when more than one key expansion module is attached to a Cisco IP Phone 8861 and 8865, unless Cisco Universal PoE (UPoE) is used.
- Cisco IP Phone 8851 with 2 key expansion modules works on 802.3at PoE only with v08 or later hardware. You can find the phone version information on the lower back of the phone as part of the TAN and PID label. Version information is also located on the individual phone packaging.

## Key Expansion Module buttons and hardware

**_Cisco IP Phone Key Expansion Module (Single LCD) Buttons and Hardware_**

**_Cisco IP Phone Key Expansion Module (Dual LCD) Buttons and Hardware_**

__Table 5\. Key Expansion Modules Buttons and Hardware__
|   | LCD screen—Displays the phone number, speed-dial number (or name or other text label), phone service, or phone feature assigned to each button. Icons that indicate line status resemble (in both appearance and function) the icons on the phone to which the key expansion module is attached.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | Lighted buttons—Line buttons. Each button or pair of buttons corresponds to one line. The lights beneath each button indicate the state of the corresponding line as follows: ![Line button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/380001-390000/381001-382000/381329.jpg) light off—Button is not configured. ![Line button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/390001-400000/393001-394000/393038.jpg) green steady LED—Line is configured correctly is in idle state. ![Line button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/390001-400000/393001-394000/393040.jpg) red steady LED—Line in use and have an active call on it. ![Line button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/390001-400000/393001-394000/393039.jpg) amber steady/blinking LED—A configuration error occurred when this feature was being set up. |
| 2 | Shift buttons—2 buttons. The button for page 1 is labeled as 1 and the button for page 2 is labeled as 2. The lights in each button indicate the state of the page as follows: ![Page 1 button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/390001-400000/393001-394000/393123.jpg) green steady LED—Page is in view. ![Page 1 button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/390001-400000/393001-394000/393126.jpg) light off—Page is not in view. ![Page 1 button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/390001-400000/393001-394000/393124.jpg) amber steady LED—Page is not in view with one or more alerting calls on the page.                                                                                                                                                                                                                                      |

## Column modes 

If you are using the Cisco IP Phone 8800 Key Expansion Module, two-column mode is the default on the Cisco IP Phone 8800 Key Expansion Module.

The Cisco IP Phone 8851/8861 Key Expansion Module and the Cisco IP Phone 8865 Key Expansion Module only support one-column mode and these key expansion modules do not support two-column mode.

### One-Column Mode

One-column mode in Cisco IP Phone 8851/8861 Key Expansion Module and Cisco IP Phone 8865 Key Expansion Module—Each button on the right of the screen is assigned to a speed-dial number (or name or other text label), phone service, or phone feature. In this configuration, the key expansion module displays up to 14 items on page 1, and up to 14 items on page 2.

| ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/390001-400000/394001-395000/394001.jpg)**_Cisco IP Phone 8851/8861 Key Expansion Module_** | ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/390001-400000/394001-395000/394002.jpg)**_Cisco IP Phone 8865 Key Expansion Module_** |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### Two--Column Mode

If you are using Cisco IP Phone 8800 Key Expansion Module single-LCD screen expansion module, you can set up the module in two-column mode. 

In two-column mode, each button on the left and right of the screen is assigned to a speed-dial number (or name or other text label), phone service, or phone feature. In this configuration, the key expansion module displays up to 18 items on page 1, and up to 18 items on page 2

**_Cisco IP Phone 8800 Key Expansion Module_**

## Allocate a Key Expansion Module type with the phone menu

You can assign the type of key expansion module that the phone supports.

| 1 | Press Applications ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/380001-390000/381001-382000/381337.jpg). |
| - | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select User preferences \> Attendant console preferences \> KEM type.                                                                        |
| 3 | Select the key expansion module type.                                                                                                        |
| 4 | Press Save.                                                                                                                                  |

## Adjust the screen brightness

You can change the brightness of the phone screen to make it easier to read.

You can change the brightness of the key expansion module screen to make it easier to read.

| 1 | Press Applications ![the Applications button](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/300001-400000/370001-380000/371001-372000/371845.jpg). |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select User preferences \> Attendant console preferences.                                                                                                           |
| 3 | Press the Navigation cluster left to decrease, or right to increase, the brightness.                                                                                |
| 4 | Enter a number between 4-15.                                                                                                                                        |
| 5 | Press Save.                                                                                                                                                         |
| 6 | Press Set.                                                                                                                                                          |

## Modify a speed dial on a Key Expansion Module

If one of the line keys on the key expansion module is configured as a speed dial, you can press the line key to change the speed-dial number. You can also verify this change by checking the Unit field on the phone web page. When the line keys on the key expansion module are configured as a blf, blf+call pickup, blf+call park, or call park, you cannot change the speed-dial number when you press the line key. 

| 1 | Press a key expansion module speed-dial key for at least 2 seconds.                                                                |
| - | ---------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Speed Dial window, add the speed-dial name and phone number to call when you press the key expansion module speed-dial key. |
| 3 | Press Save.                                                                                                                        |
