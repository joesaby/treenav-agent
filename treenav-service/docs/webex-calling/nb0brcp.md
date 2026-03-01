---
title: "Configure layouts for Cisco phones in Control Hub"
product: "Webex Calling"
article_id: "nb0brcp"
url: "https://help.webex.com/en-us/article/nb0brcp/Configure-Layouts-for-Cisco-MPP-Devices-in-Control-Hub"
last_updated: "2025-12-04"
description: "Use the configure layouts feature to view a phone’s default layout or customize
the programmable line keys (PLK) on the phone and on any attached Key Expansion
Modules (KEM)."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Configure layouts for Cisco phones in Control Hub

## Overview of default and custom layout modes

Cisco IP phones offer both default and customizable layout modes for various functionalities like line appearances, speed dials, and feature access. 

Default layouts are pre-configured, while custom layouts allow administrators to configure the phone's interface to specific needs, such as assigning lines, speed dials, and features to physical or virtual keys. 

Prerequisites

- Supported on Cisco Video Phone 8875 and Cisco 6800, 7800, 8800, and 9800 Series phones
- Supported on Cisco Key Expansion Modules (KEM) for Cisco Desk Phones 9851, 9861, and 9871, Cisco 6800 and 8800 Series phones

Configurations

- Use the Configure Lines feature to configure the Primary and shared lines for the user’s phone
- Add the monitoring users and/or call park extensions to the user’s Monitoring list

## Customize the layout for a phone

Use the custom layout to customize the programmable line keys individually on a device.

To customize your phone layout, the phone alerts when the device's shared line list and your active layout don't match. The alerts are called advisories and appear just above the layout area. Advisories are informational messages only and don't prevent you from saving the layout that you create. To clear the advisories, you can:

- Add more PLK positions of the required type to your layout.
- Reduce the entries in the device’s shared line list or the user’s monitoring list.

Here are the enhanced updates for the Custom Layout mode in the Configure Layout and Template:

- When you assign shared or virtual line appearance positions to line key positions in a layout or template, include the specific line index value associated with the line in Configure Lines.
- Assigning multiple line keys with the same shared or virtual line index results in the same line appearing on each of the line keys.
- Assigning more or fewer specific line indexes to a shared or virtual line may result in a yellow layout advisory.
- If supported, assign primary and shared lines to KEMs.

The custom layout for Cisco Desk Phone 9871 uses the following logic:

- For Cisco Desk Phone 9871, you can use the customized layout line key configuration to customize both the programmable line keys on a phone, and key expansion module.
- The phone supports a total of 16 programmable virtual line keys which can be primary lines, shared lines, or both. You can assign these 16 lines to a maximum of 128 line key positions.
- The phone supports a maximum of 3 key expansion modules. A KEM can support up to 40 programmable line keys.
- If one or more KEMs are attached to the phone, you can configure the phone to show either 4 or 8 line keys on the All screen, and the remaining line keys appear on the KEMs. The first 4 line keys appear on the home screen of the phone.
- If no KEM is attached to the phone, then the phone shows the 16 line keys on the All screen, with the first 4 line keys appearing on the Main screen.

Before you begin

- You can't change the default value for the first PLK as it’s the primary line.
- You can't drag the primary line appearance in the first PLK to any other position.
- Overflow from the monitoring list fills up the open PLK positions.
- You can manually provision a speed dial on open PLKs on the phone.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Management \> Devices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3 | Select a device to modify.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4 | Under Device Management, click Configure Layout.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5 | Click Custom Layout.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 6 | Choose one of the following options for each line key that you'd like to modify: Open—No value specified. Primary line—Setting a primary line clears all extended line key functions like monitoring or speed dial values that may exist in a PLK from a previous configuration. Shared / Virtual line—Shared Line Appearance (SLA) positions populate from the values set in configure lines. SLAs populate PLK positions to the layout from top-left to bottom-right. A warning displays if the number of SLA in the configure lines list exceeds the available shared line positions in the layout. Monitored line—Monitoring (BLF) positions populate from the values set in the monitoring list. Monitoring entries populate the defined monitoring PLKs first followed by open PLKs. A warning displays if the number of monitoring entries in your monitoring list exceeds the available monitoring positions in the layout. Speed dial—Speed dial entries require a name and destination extension, telephone number, or SIP URI ( [example@webex.com](mailto:example@webex.com)). SIP URI destinations aren’t routable. Speed dials defined here aren’t customizable on the device. Call Park Extension—Call Park Extensions are dedicated park locations. To assign Call Park Extensions to phones, add the extensions to a User's Monitor List. To create an extension, see [Call park extensions](https://help.webex.com/n68wmidb)To assign an extension, see [Monitor other user's line status and call park extensions](https://help.webex.com/vz1hgfb) |
| 7 | Click Reset Line Keys if you want to reset to the default line key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 8 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Configure lines for a Key Expansion Module (KEM)

You can use the custom layout to configure lines on a KEM. You can assign primary lines, shared lines, monitored lines, and speed dials.

The 18 key KEM configuration doesn't support primary and shared lines. Therefore, these lines aren’t available for use within the KEM device.

Before you begin

- Supported on Cisco Key Expansion Modules (KEM) for Cisco Desk Phone 9851, 9861, 9871, and Cisco 6800 and 8800 Series phones.
- Depending on the KEM model, each KEM has 28, 36, or 40 programmable keys. If you have more than one KEM, keys are listed on consecutive pages.
- The maximum combined capacity for unique primary, shared, and virtual lines on phones with KEMs is 16 lines across both the phone and KEM. KEM keys configured as monitored lines do not count toward this 16-line limit. You can assign multiple appearances of the same unique line across the phone and KEM; these do not reduce the total unique line capacity.
- A user’s Configured Lines and Monitor List overflow to the provisioned KEMs.

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                              |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Management \> Devices.                                                                                                                                                                                                                                    |
| 3 | Select a device to modify.                                                                                                                                                                                                                                      |
| 4 | Under Device Management, click Configure Layout.                                                                                                                                                                                                                |
| 5 | Click Custom Layout.                                                                                                                                                                                                                                            |
| 6 | Click Configure KEM Keys. Monitored lines configure all open lines in this sequence: First fills the specified monitored line slots in the line key configuration. KEM key configuration                                                                        |
| 7 | Assign primary lines, shared lines, monitored lines, or speed dials to the line key assignments. Monitored lines configure all open lines in this sequence: First fills the specified monitored line slots in the line key configuration. KEM key configuration |
| 8 | (Optional) You can remove the existing KEM key configurations by clicking Reset KEM Keys.                                                                                                                                                                       |
| 9 | Click Save.                                                                                                                                                                                                                                                     |

## Validate configurations using the Preview layout

Use the preview mode to see how the layout appears when you apply changes to the device. The preview helps verify the layout based on the line keys, speed dials, and shortcuts you populate. Preview mode is available for phones with and without physical line keys.

For the Cisco Video Phone 8875 and Cisco Desk Phone 9871, the preview uses the following tabs to simulate the touchscreen interface:

- Main screen—View the order of the first four line key assignments.
- All—View all the configured line keys, speed dials, and shortcuts.
- Lines—View the configured lines.
- Speed dials—View the configured speed dials.
- Shortcuts—View the configured Call Park Extensions.

If you don't perform any action in the configure layout screen, the phone automatically uses the default layout that uses the following logic: 

- The first-line key position (upper left PLK) is always the primary owner of the phone.
- The remaining PLKs populate in the following order starting from the second PLK (from Left side down and then right side top to bottom):  

  - Any additional primary and shared lines that are specified in the configure lines section are applied.
  - Any monitoring list entries (top-down) are applied to any remaining empty PLKs.
  - If a KEMs is attached to the device, additional monitoring entries overflow to the first available KEM key starting on the top-left to the KEM bottom-right, and from KEM page 1 to page 2, and so on.

- When in the default layout, the preview layout is the only available view.
- Any keys not populated automatically by the layout are considered open PLK and KEM keys.

### Known issues and workarounds

In custom layout mode, changing existing monitor or speed dial assignments to open or changing the layout mode back to default may not remove the current monitor or speed dial values on the phone. This results in a mismatch between the layout displayed in the Control Hub and what is showing on the phone. Sometimes, the old monitor entries on the phone may cause a conflict on the phone resulting in a blank line key with a blinking amber LED. To resolve the issue, use one of these workarounds: 

- Admin clearing the stale monitor or speed dial line keys  
From the Configure layout screen, clear the stale monitor or speed dial line keys remotely by temporarily changing the line key entries to the primary line option. Then save the entries and apply the changes. On updating the phone, set the desired line keys to use the open option to clear the keys.
- Phone user manually clearing stale monitor or speed dial line keys  
The phone provisioning administrator must do this workaround. Clear the Stale Monitor or Speed Dial entries on the phone through a long button press of the line key and then select the None option from the menu.  
This workaround isn’t applicable to remove call park extension.
