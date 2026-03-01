---
title: "Add features to Cisco Room Phone and Webex Share"
product: "Devices"
article_id: "nz3l3sm"
url: "https://help.webex.com/en-us/article/nz3l3sm/Add-Features-to-Webex-Room-Phone"
last_updated: "2026-01-23"
description: "Your device is fully functional out of the box. But you can customize it to suit
your needs."
tags: ["devices"]
source: "help.webex.com"
---

# Add features to Cisco Room Phone and Webex Share

Many settings and features are enabled by default. But you can customize these items to suit your needs. 

[Control Hub parameters](#reference%5F598295E3BF46AEA43E6A833581542F49)

Customize your device from Control Hub so it suits your needs.

If you use Standby, then note the following limitations:

- Standby requires Consumer Electronics Control (CEC) so connect your device to a display port that supports HDMI-CEC.
- Some HDMI display screens support HDMI-CEC, but don't support Standby.
- Don't deploy a HMI switch between your display screen and the device.
- You may have to enable Standby on the display screen and configure the feature settings in Control Hub .

Refer to the HDMI display screen documentation for additional information about Standby.

The following table describes the features available in Control Hub. Use this information as you configure your features.

__Table 1\. Features and parameters__
| Parameter             | Field Type or Choices | Default                 | Description                                                                                                                                                                                                                                        |
| --------------------- | --------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DigitalSignageServer  | —                     | —                       | Allows you to show custom content on your display screen.                                                                                                                                                                                          |
| Language              | Pull down menu        | English (United States) | Select your preferred display language. Configure Language from Cisco Unified Communications Manager (Unified CM) if you deploy for Unified CM Calling with Control Hub.                                                                           |
| Maintenance > Restart | Do Nothing Restart    | Do Nothing              | Restarts your device. It doesn't affect your settings and it retains the log files.                                                                                                                                                                |
| Standby > Control     | On Off                | On                      | Allows the display to enter power save mode. When set to On, your display sleeps when idle. Disable this parameter if your display screen doesn't support HDMI-CEC. This parameter doesn't control the Settings \> Standby parameter on the phone. |
| Standby > Delay       | Slider                | 10 minutes              | Sets the delay before your device enters and the screen display turns off. Standby modeIf you configure Digital signage, then this parameter resets to 120 minutes.                                                                                |
| Time Zone             | Pull down menu        | Automatic               | Configure your local time zone. If you deploy for Unified CM Calling with Control Hub, then configure Time Zone from Unified CM.                                                                                                                   |
| UltrasoundVolume      | Slider                | 100                     | Detects Webex App devices in the room. We recommend that you leave this field at the default setting.                                                                                                                                              |

[Set up features for a single device](#task%5F3AA06DEBF41902EA521E22F9755E4F64)

All Cloud-based features are configured and controlled from Control Hub. You can enable different features as your needs change. 

| 1 | From the customer view in <https://admin.webex.com/>, go to Devices. |
| - | -------------------------------------------------------------------- |
| 2 | Select your device from the inventory.                               |
| 3 | Scroll down and select Advanced Configurations.                      |
| 4 | Select the feature and configure the settings.                       |
| 5 | Click Apply.                                                         |
| 6 | Click Close.                                                         |

[Configure Digital signage](#task%5FAE05F8D3C0A0D741B9D043B725FF24E7)

Digital signage allows you to show customized content on your device when it is idle. You can display advertising content and promote your brand, but also show visitor and internal employee announcements or information.

Signage mode occurs after several minutes of inactivity. Images don’t appear during meetings, screen sharing, or during upcoming scheduled calendar events.

Note the following specifications:

- The maximum resolution is 1920x1080\. If you upload an image that is bigger, AppSpace resizes it.
- The supported static image file formats are .png and .jpeg.

Your screen display settings affect your Digital Signage images. If your static images appear distorted or of a poor quality, then change your TV's display settings. For example, some display manufactures let you lower your Sharpness setting or change Picture Mode to Computer or the equivalent. For additional information, see the documentation that came with your TV.

After you configure Digital Signage, the following Standby settings change:

- Standby \> Control resets to On.
- Standby \> Delay resets to 120 minutes and Standby mode. This is the delay before the device enters Standby mode.

HTML5 is not supported. 

For more information, see the Appspace documentation for Digital Signage at <https://docs.appspace.com/latest/how-to/configure-wallpaper-for-cisco-webex-share/>

Before you begin

You need an AppSpace administrator account and an HTTPS URL for your AppSpace channel.

| 1 | From the customer view in <https://admin.webex.com/>, go to Devices.    |
| - | ----------------------------------------------------------------------- |
| 2 | Select your device from the inventory and open Advanced Configurations. |
| 3 | Select DigitalSignageServer.                                            |
| 4 | Enter your AppSpace URL in the field.                                   |
| 5 | Click Apply.                                                            |
