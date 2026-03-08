---
title: "Use speed dials on your phone"
product: "Devices"
article_id: "n0pf1t7"
url: "https://help.webex.com/en-us/article/n0pf1t7"
last_updated: "2026-01-13"
description: "This Help article is for Cisco Desk Phone 9800 Series and Cisco Video Phone 8875
registered to BroadWorks, Webex Calling, or Unified CM. Use speed dials on your
phone to quickly and easily reach frequently dialed numbers without having to
look up the phone number each time."
tags: ["devices"]
source: "help.webex.com"
---

# Use speed dials on your phone

The speed dials allow you to reach a frequent contact with a single key on phone or on the connected Key Expansion Modules (KEM). Busy Lamp Field (BLF) keys with speed dial not only allow you to quickly dial the number but also enable you to monitor the status of your coworker's line. If the key is also configured with the Call Pickup feature, you're able to answer calls for your coworkers when they're unavailable.

The speed dials appear differently from phone models.

- [9811 / 9841 / 9851 / 9861 ](#generic-template%5Fb4e59f80-a554-48dc-9c6b-864378947228)
- [8875 / 9871](#generic-template%5F83dc0fbf-7e32-4f1e-9a36-818fadfd3448)

## Status indicators

The following table lists the status indicators for BLF with speed dial on different phone models.

__Table 1\. Status indicators for BLF + Speed dial on Cisco Desk Phone 9811, 9841, 9851, and 9861__
| Icon (9811 / 9841)                                                                                                                                               | Icon (9851)                                                                                                                                                            | Icon (9861)                                                                                                                                                            | Line key LED                                                                                                                                                                   | Status       | Description                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![the icon of BLF with speed dial](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478708.png)          | ![the icon of BLF with speed dial idel](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478714.png)           | ![the icon of BLF with speed dial idel](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478714.png)           | ![the line key in the not-configured status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478723.png)LED off       | Idle         | The monitored line is in idle mode. You can press the line key to call the speed dial number.                                                                                                                                                     |
| ![the icon of BLF with speed dial alerting](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478710.png) | ![the icon of BLF with speed dial alerting](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478715.png)       | ![the icon for BLF speed dial alerting](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473710.png)           | ![the line key with an incoming call alerting](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478725.png)Solid amber | Alerting     | A call is alerting on the monitored line. The alerting status is only available on phones that are registered to Cisco BroadWorks or Webex Calling.                                                                                               |
| ![the icon of BLF with speed dial in use](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478709.png)   | ![the icon of BLF with speed dial in use](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478716.png)         | ![the icon for BLF speed dial in use](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473711.png)             | ![the line key in the busy status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478726.png)Solid red               | In use       | The monitored line is on a call. If you press the line key, a call is placed to the speed dial number. You’ll hear a busy tone or be redirected to the voicemail depending on the configuration on your coworker's line.                          |
| ![the icon of BLF with speed dial DND](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478711.png)      | ![the icon of BLF with speed dial DND](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478717.png)            | ![the icon for BLF speed dial DND state](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473712.png)          | ![the line key in the busy status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478726.png)Solid red               | DND          | The monitored line is set to Do Not Disturb (DND). The calls to the line don't alert. The DND status of the monitored line is only available on phones that are registered to Cisco Unified Communications Manager.                               |
| ![The BLF Uncognized icon for 9841](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/482001-483000/482198.png)         | ![BLF Unrecognized icon for 9851, 9861, and 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/482001-483000/482199.png) | ![BLF Unrecognized icon for 9851, 9861, and 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/482001-483000/482199.png) | ![the line key in the not-configured status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478723.png)LED off       | Unrecognized | The server can't retrieve the status information of the monitored line. The unrecognized status is only available on phones that are registered to Cisco BroadWorks or Webex Calling.                                                             |
| ![the icon of speed dial](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478713.png)                   | ![the icon of speed dial](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478719.png)                         | ![the icon of speed dial](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478719.png)                         | ![the line key in the not-configured status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478723.png)LED off       | Unknown      | The server can't retrieve the status information of the monitored line. The unknown status is only available on phones that are registered to Cisco Unified Communications Manager.                                                               |
| ![the icon of speed dial](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478713.png)                   | ![the icon of speed dial](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478719.png)                         | ![the icon of speed dial](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478719.png)                         | ![the line key in the not-configured status](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478723.png)LED off       | Local DND    | The DND is enabled on the local phone. The BLF speed dial key doesn't show any status of the monitored line, including idle status. The Local DND status is only available on phones that are registered to Cisco Unified Communications Manager. |

For more information about the BLF with both speed dial and call pickup, see [Answer calls for your coworkers](https://help.webex.com/article/n8trc96/) (on Unified CM) or [Answer calls for your coworkers](https://help.webex.com/article/p2ritg/) (on BroadWorks or Webex Calling).

## Add speed dials to a line key

You can add a speed-dial number on any idle line key on phone and on connected KEMs. After you configure the speed dial, you can press the line key to call the speed dial number.

Before you begin

Your administrator allows you to configure features on line keys.

| 1 | Press any idle line key for at least two seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Do one of the following actions on your phone: If your phone is registered on BroadWorks, do one of the following actions as needed: To only assign a speed-dial number on the line key, select Create Speed dial and enter the required information.To monitor a line and also speed dial the monitored line, select Create BLF + Speed dial, and then enter or select a user ID. To monitor a line, speed dial the monitored line, and also answer incoming calls to the monitored line, select Create BLF + Speed dial + Call pickup, and then enter or select a user ID. You can consult your administrator for the user ID of the person if you want to manually enter the user ID. Also, you can select a user ID from the user ID list if available. If your phone is registered on the Unified CM, do the following:Enter the contact name and phone number.To switch between number and alphabet inputs, press 123 or ABC.Press Save. |

## Edit speed dials

An updated list of speed dials makes your communication more efficient. You can either edit the existing speed dial on a line key, or create a new one to replace the existing one.

| 1 | Press the line key configured with a speed dial for at least two seconds.                                                                                                                                                                                                                                                                      |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select an options to edit the speed dial information or replace it with another feature. The availability of these options vary from phone settings and the calling system that it is registered to. Edit speed dialEdit BLF + Speed dialEdit BLF + Speed dial + Call pickupReplace with speed dialReplace with BLF + Speed dial + Call pickup |
| 3 | Update the speed dial with the desired information.                                                                                                                                                                                                                                                                                            |
| 4 | Select Save.                                                                                                                                                                                                                                                                                                                                   |

## Remove speed dials from your phone

When a speed-dial number is no longer a frequently used contact, remove it from the designated line key.

| 1 | Press the line key configured with a speed dial for at least two seconds. |
| - | ------------------------------------------------------------------------- |
| 2 | Select Remove.                                                            |
| 3 | Confirm the removal when prompted.                                        |

## Configure speed dial numbers with Self Care Portal

You can customize the speed dial feature with the Cisco Unified Communications Self Care Portal, which you access from your computer. The Self Care Portal is part of your organization's Cisco Unified Communications Manager.

Your administrator gives you the URL to access the Self Care Portal, and provides your user ID and password. For more information, see [_Cisco Unified Communications Self Care Portal User Guide, Release 12.5(1) or later_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/useroptions/12%5F5%5F1/cucm%5Fb%5Fselfcare-user-guide-1251/cucm%5Fm%5Fphones.html#CUCM%5FTK%5FSBB32D1D%5F00).

### Tips for special speed dial numbers

When you dial a number on your phone, you enter a series of digits. When you set up a speed dial number, it must contain all the digits you need to make the call. For example, if you need to dial 9 to get an outside line, you enter the number 9 and then the number you want to dial.

You can also add other dialed digits to the number. Examples of additional digits include a meeting access code, an extension, a voicemail password, an authorization code, and a billing code.

The dial string can contain the following characters:

- 0 to 9
- Pound (#)
- Asterisk (\*)
- Comma (,)—This is the pause character, and gives a 2 second delay in the dialing. You can have several commas in a row. For example, two commas (,,) represent a pause of 4 seconds.

The rules for dial strings are:

- Use the comma (,) to separate the parts of the dial string.
- An authorization code must always precede a billing code in the speed-dial string.
- A single comma is required between the authorization code and the billing code in the string.
- A speed-dial label is required for speed dials with authorization codes and additional digits.

Before you configure the speed dial, try to dial the digits manually at least once to ensure that the digit sequence is correct.

Your phone does not save the authorization code, billing code, or extra digits from the speed dial in the call history. If you try to redial a number after you connect to a speed-dial destination, the phone prompts you to enter any required authorization code, billing code, or additional digits manually.

**Example** 

To set up a speed dial number to call a person at a specific extension, and if you need an authorization code and billing code, consider the following requirements:

- You need to dial **9** for an outside line.
- You want to call **5556543**.
- You need to input the authorization code **1234**.
- You need to input the billing code **9876**.
- You must wait for **4** seconds.
- After the call connects, you must dial the extension **56789#**.

In this scenario, the speed-dial number is **95556543,1234,9876,,56789#**.

The maximum number of speed dials allowed depends on the number of supported lines on your phone and the connected KEMs.

## Status indicators

The following table lists the status indicators for BLF with speed dial on Cisco Desk Phone 9871.

__Table 2\. Status indicators for BLF with speed dial on Cisco Video Phone 8875 and Cisco Desk Phone 9871__
| Icon                                                                                                                                                                   | Status       | Description                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![the icon of BLF with speed dial idel](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/478001-479000/478714.png)           | Idle         | The monitored line is in idle mode. You can tap the shortcut to call the speed dial number.                                                                                                                                                       |
| ![the icon for BLF speed dial alerting](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473710.png)           | Alerting     | A call is alerting on the monitored line. The alerting status is only available on phones that are registered to Cisco BroadWorks or Webex Calling.                                                                                               |
| ![the icon for BLF speed dial in use](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473711.png)             | In use       | The monitored line is on a call. If you tap the shortcut, a call is placed to the speed dial number. You’ll hear a busy tone or be redirected to the voicemail depending on the configuration on the monitored line.                              |
| ![the icon for BLF speed dial DND state](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473712.png)          | DND          | The monitored line is set to Do Not Disturb (DND). The calls to the line don't alert. The DND status is only available on phones that are registered to Cisco Unified Communications Manager.                                                     |
| ![BLF Unrecognized icon for 9851, 9861, and 9871](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/482001-483000/482199.png) | Unrecognized | The server can't retrieve the status information of the monitored line. The unrecognized status is only available on phones that are registered to Cisco BroadWorks or Webex Calling.                                                             |
| ![the icon for BLF speed dial unregistered](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473713.png)       | Unknown      | The server can't retrieve the status information of the monitored line. The unknown status is only available on phones that are registered to Cisco Unified Communications Manager.                                                               |
| ![the icon for BLF speed dial unregistered](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473713.png)       | Local DND    | The DND is enabled on the local phone. The BLF speed dial key doesn't show any status of the monitored line, including idle status. The Local DND status is only available on phones that are registered to Cisco Unified Communications Manager. |

For more information about the BLF with both speed dial and call pickup, see [Answer calls for your coworkers](https://help.webex.com/article/n8trc96/) (on Unified CM) or [Answer calls for your coworkers](https://help.webex.com/article/p2ritg/) (on BroadWorks or Webex Calling).

For more information about the line key behavior on Key Expansion Module, see [Cisco Desk Phone 9800 Key Expansion Module](https://help.webex.com/article/ngr795j/).

## Make a call with speed dial

You can find your speed dials on the pull-down speed dial list or on the Speed dials tab.

When you are on a phone with multiple lines configured, you can choose the line that you want to use to make the call. Otherwise, the primary line is used.

| Use the primary line                                                                                                                                                                | Use a specific line                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![the graphic for using the primary line to call a speed dial](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/475001-476000/475861.png) | ![the graphic for using a specific line to call a speed dial](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/475001-476000/475869.png) |

Before you begin

Speed dial numbers have been added to your phone. 

| Follow the steps that are applicable to the configuration on your phone: **To use the primary line** Swipe down from the top of any screen on the phone to open the speed dials list. Tap a speed dial button to call the associated extension. **To use a specific line on a phone with multiple lines** Tap the line that you want to use on the Home screen or on the Lines tab. Swipe down from the top of any screen on the phone to open the speed dials list. Tap a speed dial button to call the associated extension. **To call a speed dial assigned to a line key on the Key Expansion Module (KEM)** Press the line key with speed dial to place the call with the primary line. Select the line key that you want to use and then press the line key with speed dial on KEM |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Manage speed dials (Unified CM)

You can add, edit, and remove speed dials in the speed dial list only on phones that are registered to Cisco Unified Communications Manager. The speed dials you add are for dialing purposes only and don't support Busy Lamp Field (BLF) functionality.

Speed dials will be added after the last configured line key. If the last line on the phone (without a KEM) or on the last connected KEM has already been configured, no additional speed dials can be added to the phone. The maximum number of speed dials allowed depends on the number of supported lines on your phone and the connected KEMs.

- You can edit and remove only the speed dials you added locally on the phone. Speed dials added remotely through the Self Care Portal or by your administrator on Cisco Unified Communication Manager cannot be edited or removed directly on the phone.
- The speed dials you’ve added on the phone can be overwritten by the line key feature configured by the administrator for the same position.

| 1 | Swipe down from the top of any screen on the phone to open the speed dials list.                                                                                                                                                                                                                                                                                                                                                                     |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Do one of the following actions as needed: **Add a speed dial**Tap Add speed dial or Add, depending on the option available.Enter the contact name and phone number, then tap Save.**Update a speed dial**Long-press the speed dial in the list and then select Edit speed dial.Change the information as needed and tap Save.**Remove a speed dial**Long-press the speed dial in the list and then select Remove.Tap Remove to confirm the removal. |

## Configure speed dial numbers with Self Care Portal

You can customize the speed dial feature with the Cisco Unified Communications Self Care Portal, which you access from your computer. The Self Care Portal is part of your organization's Cisco Unified Communications Manager.

Your administrator gives you the URL to access the Self Care Portal, and provides your user ID and password. For more information, see [_Cisco Unified Communications Self Care Portal User Guide, Release 12.5(1) or later_](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cucm/useroptions/12%5F5%5F1/cucm%5Fb%5Fselfcare-user-guide-1251/cucm%5Fm%5Fphones.html#CUCM%5FTK%5FSBB32D1D%5F00).

### Tips for special speed dial numbers

When you dial a number on your phone, you enter a series of digits. When you set up a speed dial number, it must contain all the digits you need to make the call. For example, if you need to dial 9 to get an outside line, you enter the number 9 and then the number you want to dial.

You can also add other dialed digits to the number. Examples of additional digits include a meeting access code, an extension, a voicemail password, an authorization code, and a billing code.

The dial string can contain the following characters:

- 0 to 9
- Pound (#)
- Asterisk (\*)
- Comma (,)—This is the pause character, and gives a 2 second delay in the dialing. You can have several commas in a row. For example, two commas (,,) represent a pause of 4 seconds.

The rules for dial strings are:

- Use the comma (,) to separate the parts of the dial string.
- An authorization code must always precede a billing code in the speed-dial string.
- A single comma is required between the authorization code and the billing code in the string.
- A speed-dial label is required for speed dials with authorization codes and additional digits.

Before you configure the speed dial, try to dial the digits manually at least once to ensure that the digit sequence is correct.

Your phone does not save the authorization code, billing code, or extra digits from the speed dial in the call history. If you try to redial a number after you connect to a speed-dial destination, the phone prompts you to enter any required authorization code, billing code, or additional digits manually.

**Example** 

To set up a speed dial number to call a person at a specific extension, and if you need an authorization code and billing code, consider the following requirements:

- You need to dial **9** for an outside line.
- You want to call **5556543**.
- You need to input the authorization code **1234**.
- You need to input the billing code **9876**.
- You must wait for **4** seconds.
- After the call connects, you must dial the extension **56789#**.

In this scenario, the speed-dial number is **95556543,1234,9876,,56789#**.

The maximum number of speed dials allowed depends on the number of supported lines on your phone and the connected KEMs.
