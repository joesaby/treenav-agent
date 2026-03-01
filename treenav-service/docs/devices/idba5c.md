---
title: "RoomOS software upgrades"
product: "Devices"
article_id: "idba5c"
url: "https://help.webex.com/en-us/article/idba5c/RoomOS-software-upgrades"
last_updated: "2025-11-12"
description: "RoomOS software upgrades"
tags: ["devices"]
source: "help.webex.com"
---

# RoomOS software upgrades

In Control Hub under Devices \>  Software, you can see the different software channels and how many devices in your organization are on which channel. On this page, you can also see the schedule for the different software releases.

On the top of the Software upgrade overview, you can toggle the view to show currently available software versions based on [device compatibility](#reference-template%5Ff397d5e4-71ea-4730-a32a-9359ff2bc514):

- Current Generation
- Previous Generation
- RoomOS 9.15

In Control Hub, you can see the changes to software versions on a single device in the [device's history](https://help.webex.com/jhkg7ab/).

- RoomOS 26 and RoomOS 11 are released on a monthly cadence, but they do not follow the same release schedule.
- The advanced software upgrade option is available for Board, Desk, and Room Series running RoomOS 11 and later.
- The Preview channel doesn’t have the advanced software upgrade option available.
- RoomOS 9 software releases no longer follow a monthly cadence.

## Software support for Cisco collaboration devices

| RoomOS 26 (Current generation)     | RoomOS 11 (Previous generation)                       | RoomOS 9.15 |
| ---------------------------------- | ----------------------------------------------------- | ----------- |
| Board Pro 55/75                    | Room Kit                                              | DX80        |
| Board Pro 55/75 G2                 | Room Kit Plus                                         |             |
| Cisco Desk                         | Room Kit Mini                                         |             |
| Desk Mini                          | Room 55                                               |             |
| Desk Pro                           | Room 55 Dual                                          |             |
| Room Bar                           | Room 70 (Single and Dual)                             |             |
| Room Bar Pro                       | Board 55/70                                           |             |
| Room Kit Pro                       | Board 55S/70S/85S                                     |             |
| Room Kit EQ                        | Room USB                                              |             |
| Room Kit EQX                       | Room Kit Pro with Touch 10 and/or SpeakerTrack 60     |             |
| Room 70 G2                         | Room 70 G2 with Touch 10 and/or SpeakerTrack 60       |             |
| Room Panorama                      | Room Panorama with Touch 10 and/or SpeakerTrack 60    |             |
| Room 70 Panorama                   | Room 70 Panorama with Touch 10 and/or SpeakerTrack 60 |             |
| Room Navigator in stand-alone mode |                                                       |             |

Touch panel support:

- RoomOS 11: Touch 10, Room Navigator in controller mode
- RoomOS 26: Room Navigator in controller and stand-alone mode

### Codec Pro based devices

Room Kit Pro, Room 70 G2, and Room Panorama are supported on RoomOS 26 when a Room Navigator is connected, either directly or over the network. If a Touch 10 is connected to these devices, they remain on RoomOS 11.

If you want to upgrade a Codec Pro based device that has previously been connected to a Touch 10 to RoomOS 26, you need to remove the pairing both physically and from either the device's local web interface or through xAPI. 

On the device's local web interface, go to Settings \> Audio and Video - All Peripherals. Remove any peripherals with type _Cisco TelePresence Touch_ and reboot the device. As the device powers up again it upgrades to the latest Stable version of RoomOS 26\. Connect a Room Navigator to the device.

If the upgrade fails, you need to contact Cisco's Technical Assistance Center (TAC).

## Software upgrade on devices

Your device comes with RoomOS pre-installed, and updates are installed by default automatically. Automatic software upgrade ensures you have the latest release of RoomOS installed.

 The device checks for new software every 15 minutes. If there’s new software available, the device downloads the software. After completing the download, the device checks the urgency level of the upgrade. 

- Low: The device waits until midnight to prompt the user to upgrade.
- Medium: The user gets a prompt to upgrade the device when the device is idle.

The software upgrade prompt lets the user to choose to postpone the upgrade with 6 hours. If the local user doesn’t respond to the upgrade dialog within 60 seconds, the device starts the upgrade. The upgrade takes 1-3 minutes, and the device can’t be used while upgrading.

If a new software version is available on the device and you want to upgrade immediately, go to _Settings > About the device > Software updates_.

The upgrade service tells the device what software it should have and the urgency of the upgrade. The upgrade service also has a rollout phase to distribute the upgrades within an organization over a time. 

Typically, all the devices that are online when a new stable software is deployed download the new software within 2 hours of rollout. In addition, there’s a possible 15 minutes of delay before devices poll for new upgrades. The upgrade is initially low urgency. After 24 hours the upgrade service changes the urgency to medium. 

## Advanced software upgrade

By default, the Stable channel is on automatic software upgrade and the devices on that channel receive monthly upgrades. With advanced software upgrade, you can control which software release is deployed in the Stable, Trial, and Verification channels. Trial and Verification channels are only available when advanced software upgrade is enabled. For each of these channels, you can choose automatic upgrades or select one of the available releases.

For example, it’s possible to have the Verification channel on automatic software upgrades and to have the Stable channel on manually selected upgrade. 

Releases are available for six months for both RoomOS 26 and RoomOS 11.

When advanced software upgrade is enabled, you can select from the six most recent monthly releases of RoomOS for the Stable, Trial, and the Verification channels. This will be a rolling window and a software release automatically expires after six months. For example, if the most recent release is RoomOS October, then you can select from the releases from May to October. When RoomOS November is released, the May release expires.

We may withdraw a release or apply critical patches without advance notice automatically if there’s a critical security or device issue. Your devices will then receive a software upgrade with a patched release. Bugs and issues in features will be fixed in regularly scheduled releases.

### What happens if you don’t upgrade a selected software release?

On the _Software_ page on Control Hub, you can see the expiry date for the software release you have chosen for each channel. Typically, a release expires six months after it’s released. You can create an alert to notify when the software version you've selected is about to expire (see the Set an alert for software expiry section in this article).

If no action is taken before the release expires, the channel reverts to automatic software upgrades. This means that the devices on that channel get the latest stable software release. 

## Enable advanced software upgrade

Enabling advanced software upgrade is a global setting for all devices on RoomOS 10 and later in your organization. It doesn't change the software release on the devices. When you enable advanced software upgrade, you get the option to choose one of the available releases for the Stable, Trial, and Verification channels. See the next section on how to select a software release for a channel.

| From the customer view on <https://admin.webex.com>, go to Devices \> Software \> Management and select Advanced Software Upgrade. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/464001-465000/464177.jpg) |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Manually select a software release for a channel

If you have devices that are supported on different main software branches, you need to select the correct branch under Software upgrade \> Device Compatibility. The software that you pin to the channel only applies to the selected device generation, not all your devices. You'll need to repeat the steps for each device generation. 

| 1 | From the customer view on <https://admin.webex.com>, go to Devices \> Software and select Manage Software for the channel you want to change the software release for.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Manually Select Software and choose the release that you want to use from the drop-down menu. Click Save. You can select the time for when the selected release is installed on the devices: Install at night-time (between midnight and 6AM local time of the device). Note that if you change the software channel for a workspace and it's been more than 4 days since the software version for the channel was changed, the device upgrades when it's online and idle. Install immediately: When the device is online and idle the selected release will be pushed to the device. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/464001-465000/464176.jpg) |

## Set an alert for software expiry

When you’re using Advanced Software Control, you can set an alert to be explicitly notified when their devices are running a software version that is about to go out of support. The notifications are sent through the Alert center in Control Hub. You can see the notification automatically in Control Hub. You can choose to also receive the notifications by email, Webex App space, or Webhook.

To read more about alerts, see the [Alert center in Control Hub](https://help.webex.com/en-us/article/mykour/) article.

| 1 | From the customer view on [https://admin.webex.com](https://admin.webex.com/), go to Alerts center. Select Manage \> All rules  and click Create rule. You can also go to Devices \> Software \> Management and click Create alert rule. |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On Service, select Devices. On Type, select Software version expiry. Then toggle on Enabled. You can also select the Severity and give the alert a title to make it easier to recognize.                                                 |
| 3 | Select the Software channel(s) you want to get alerted on.                                                                                                                                                                               |
| 4 | Select Delivery channel and enter the required information.  You can choose one or more of the delivery methods: email, Webex App space, Webhook.                                                                                        |

## Software channels

### Stable channel

- The default software channel for RoomOS.
- Software update typically once a month:

  - Software deployed in the first week of the month.
  - The software is deployed at nighttime (between midnight and 6AM) according to the device's local time.
- Automatic software upgrade:

  - You always get the latest software release to your devices.
  - Schedule can be found in Control Hub.
- Advanced software upgrade:

  - You can select a specific software release for up to six months.
- Fully supported by TAC.

### Verification channel

- Available when advanced software control is enabled.
- Software update typically once a month:

  - Software deployed in the first week of the month.
  - The software is deployed at nighttime (between midnight and 6AM) according to the device's local time.
- Automatic software upgrade:

  - You always get the latest software release to your devices.
  - Schedule can be found in Control Hub.
- Advanced software upgrade:

  - You can select a specific software release for up to six months.
- Fully supported by TAC.

### Trial channel

Trial channel is an additional channel that gives you more flexibility when managing the software on your deployment. It can be used as an additional testing channel or for example home office devices or complex meeting rooms.

- Available when advanced software control is enabled.
- Software update typically once a month:

  - Software deployed in the first week of the month.
  - The software is deployed at nighttime (between midnight and 6AM) according to the device's local time.
- Automatic software upgrade:

  - You always get the latest software release to your devices.
  - Schedule can be found in Control Hub.
- Advanced software upgrade:

  - You can select a specific software release for up to six months.
- Fully supported by TAC.

### Preview channel

- Preview of the upcoming stable release.
- Contains fixes to the software. New features are only available on stable releases.
- Software updates happen at least twice a month:

  - No set day or time.
  - Automatic software update. The software is deployed at nighttime (between midnight and 6AM) according to the device's local time.
- Not supported by TAC.
- You can report regressions on the preview software from Control Hub. Go to _Devices > Software > Preview software_ and click _Report Problem_.

## Change the software channel for one device

If it's been more than four days since the software version for the channel was selected, the device upgrades when it's online and idle.

| 1 | Sign in to [admin.webex.com](http://admin.webex.com/). Go to Devices and select the device you want to change the software channel for from the list. |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the device details page under Software, click the cogwheel icon.                                                                                   |
| 3 | From the Webex Upgrade Channel drop-down list, select a channel and click Done.                                                                       |

## Change the software channel for several devices

To change the software channel in Control Hub for several devices at a time, you can either:

- Set the configuration on multiple devices.
- Use configuration templates.
- Use default configurations for your organization or location.

Set the configuration _Webex UpgradeChannel_ with the software channel that you wish to apply. 

For more details on the different ways to set configurations, see the [Device configurations for Board, Desk, and Room Series devices](https://help.webex.com/n5pqqcm/) article.

If it's been more than four days since the software version for the channel was selected, the devices upgrade when they are online and idle.

|  |
|  |
