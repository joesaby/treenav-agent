---
title: "Enable room booking for shared mode devices"
product: "Devices"
article_id: "nzp31jb"
url: "https://help.webex.com/en-us/article/nzp31jb/Enable-room-booking-for-shared-mode-Board-and-Room-Series-devices"
last_updated: "2026-02-27"
description: "With room booking, users can book meeting spaces directly through a shared
device, eliminating the need to search for available rooms on a calendar."
tags: ["devices", "webex-suite"]
source: "help.webex.com"
---

# Enable room booking for shared mode devices

- Board and Desk Series—Room booking is only available for shared devices that are cloud- registered or linked with [Webex Edge for Devices](https://help.webex.com/en-us/article/cy2l2z/Webex-Edge-for-Devices).
- Make sure [Device configurations for Board, Desk, and Room Series devices](https://help.webex.com/n5pqqcm/) are set up if the device is linked with Edge for Devices.
- Desk Series—Outside room booking is available for shared devices that are cloud-registered. The device can't have hot-desking enabled.
- You can't enable room booking while the device is in a call.

To enable Room Booking, make sure to follow these steps in the following order: 

1. Configure Hybrid Calendar.
2. Configure scheduling account.
3. Configure devices with calendar in Control Hub.

You can also enable local Room bookings without the Webex calendar. See [Room Navigator as a standalone device](https://help.webex.com/en-us/article/iq6aw6/Room-Navigator-as-a-stand-alone-device#task-template%5F8af1bb26-4570-4344-bd7d-97f7e899acb9) for more information.

## Configure Hybrid Calendar

To enable Room Booking, you need to configure Hybrid Calendar for your organization. You can configure it for Microsoft Exchange, Microsoft 365, or Google Calendar.

See the [Deployment Guide for Hybrid Calendar](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/hybridservices/calendarservice/cmgt%5Fb%5Fdeploy-spark-hybrid-calendar-service.html). 

If meeting schedulers aren’t enabled for the Hybrid Calendar service, and the only invitees that are enabled for the service are room resources, you must ensure that Exchange doesn’t have a policy to automatically delete meeting comments. Set _Delete Comments_ to _False_

## Microsoft Exchange: Configure scheduling account

It’s necessary to configure a scheduling account to allow room devices to schedule meetings.

The scheduling account is used as the meeting organizer for all meetings booked from RoomOS devices. This account books the room the same way as a user normally does. By booking meetings from the scheduling account and inviting a room, room policies in the calendaring system are respected. Ensure that you have entered a valid email address that has permissions to book the rooms for which you will enable Room Booking.

Since this account is used to book meetings for all the rooms for a given Exchange configuration, it’s important to make sure that its mailbox is regularly cleaned up. The clean-up is necessary to avoid exceeding Exchange limits. If your Exchange is already set up with a suitable retention policy, make sure it applies to this account. If not, you must configure the mailbox so that all default folders (emails, sent items, and meetings) are automatically deleted after a number of days. The clean-up ensurers that the account can keep scheduling meetings on behalf of the room devices.

Check the following resources for Exchange:

- [Instructions and more detailed information about retention policies](https://docs.microsoft.com/en-us/exchange/security-and-compliance/messaging-records-management/messaging-records-management)
- [Exchange 2019 policy and compliance information](https://docs.microsoft.com/en-us/Exchange/policy-and-compliance/mrm/mrm?view=exchserver-2019)
- [Exchange 2016 policy and compliance information](https://docs.microsoft.com/en-us/Exchange/policy-and-compliance/mrm/mrm?view=exchserver-2016)
- [Exchange 2013 policy and compliance information](https://docs.microsoft.com/en-us/exchange/messaging-records-management-exchange-2013-help)
- [Exchange 2010 policy and compliance information](https://docs.microsoft.com/en-us/previous-versions/exchange-server/exchange-140/bb123548%28v%3dexchg.140%29)

| 1 | Log in to the Expressway web interface.                                                                                                                                                                                         |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Applications \> Hybrid Services  \> Calendar Service \> Microsoft Exchange Configuration.                                                                                                                                 |
| 3 | Under Scheduling, enter a valid scheduling account email address that is used book your meeting rooms. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/457001-458000/457668.jpg) |

## Microsoft 365: Configure scheduling account

It’s necessary to configure a scheduling account to allow room devices to schedule meetings.

The scheduling account is used as the meeting organizer for all meetings booked from RoomOS devices. This account books the room the same way as a user normally does. By booking meetings from the scheduling account and inviting a room, room policies in the calendaring system are respected. Ensure that you have entered a valid email address that has permissions to book the rooms for which you will enable Room Booking.

To configure the scheduling account for Microsoft 365 from Control Hub: 

1. Sign in to [Control Hub](https://admin.webex.com/), then go to Services \> Hybrid.
2. On the Hybrid Calendar card for Microsoft 365, click Edit settings.
3. Check the box to allow workspaces to schedule meetings.
4. Enter a valid email address for the scheduling account.

The email domain needs to be verified or claimed in Control Hub to configure a scheduling account.

## Google Calendar: Configure scheduling account

It’s necessary to configure a scheduling account to allow room devices to schedule meetings. 

The scheduling account is used as the meeting organizer for all meetings booked from RoomOS devices. This account books the room the same way as a user normally does. By booking meetings from the scheduling account and inviting a room, room policies in the calendaring system are respected. Ensure that you have entered a valid email address that has permissions to book the rooms for which you will enable Room Booking.

To configure the scheduling account for Google Calendar from Control Hub: 

1. Sign in to [Control Hub](https://admin.webex.com/), then go to Services \> Hybrid.
2. On the Hybrid Calendar card for Google, click Edit settings.
3. Check the boxes to allow your organization to use calendar resources and to allow workspaces to schedule meetings.
4. Make sure that you have configured an ACL account, and enter the email for that account.

## Enable room booking from Control Hub

Before you enable Room Booking, you need to check that One Button to Push (OBTP) has been enabled for those devices. If you want the people in your organization to use voice commands for room booking and other device controls, enable Webex Assistant.

Check that the calendar is enabled for the workspaces for which you are enabling room booking.

- [One Button to Push with Microsoft Exchange](https://help.webex.com/y5stdw/)
- [Enable Webex Assistant for devices](https://help.webex.com/hzd1aj/) (optional)

| 1 | Sign in to [Control Hub](https://admin.webex.com/), then go to Management \> Workspaces.                                      |
| - | ----------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the workspaces you want to configure from the workspaces list and click Edit.                                          |
| 3 | To enable In-Room Booking for a workspace, click the workspace, then in the Scheduling section, check the Ad-hoc booking box. |

## Enable book ahead

```
Bookings AdhocBooking BookAhead Enabled: <True, False> (Default:False)
```

Book Ahead allows users to schedule shared spaces for future times. Previously, shared spaces could only be booked for immediate use, where the start time is the current time. Now, with Book Ahead, users can book rooms for times later in the day, even if the space is currently booked, through a controller, board, or scheduler.

**_Book ahead OFF_**

**_Book ahead ON_**

The time slot size for scheduling bookings can be configured, allowing for 15, 30, or 60-minute intervals. The time slot size refers to the predetermined intervals at which you can select the start or end time of a booking

```
UserInterface Bookings AdhocBooking TimeSlotSize: <15, 30, 60> (Default:30)
```

**_15-minute time slots_**

**_30-minute time slots_**

Additionally, the calendar now displays available slots, showing users the time intervals during which a space can be booked ahead. These slots allow users to easily identify open time slots and schedule meetings in advance for the designated time intervals. After selecting a slot, the time can be adjusted if needed.

**_Scheduler room calendar_**

**_Controller room calendar_**

## Enable check in and check out

A significant percentage of meetings result in ghost meetings, meaning no one shows up and the meeting resources are wasted during the booking. Enabling the Check in option helps alleviate this problem. The users can check in to their booking when they arrive to the meeting room which confirms the booking. If no one arrives for the booking, the meeting room is released and others can book the free meeting room.

Check in and out is available on shared bookable devices and standalone Room Navigator.

When enabled, a check in button appears on the inside and outside-room touch panel. A check out button appears on the inside-room for paired touch panels. For a standalone Room Navigator, check out buttons also appears on the outside-room panel. If a joinable meeting has been booked (OBTP), the check in button is only visible outside the room.

Starting 5 minutes before a booking, a check in button appears on the outside-room and in-room touch panels.

A user has 10 minutes from the start time of a booking to check in. If no one checks in during the 10 minutes, manually or automatically, the room is automatically released. 30 seconds before the end of the check in window, a 30-second countdown automatic-room-release alert appears on the touch panel. The check in window is configurable.

When a room is checked in and a call ends (at least five minutes after meeting start), an alert pops up reminding the user to check out if they wish to. If the user cancels or ignores the alert, the room is left booked. If a user extends a booking, the room device stays checked in for the time the booking is extended.

When a booking has reached the last 5 minutes of its scheduled time and there is a back to back meeting, a notification pops up informing the user that the booking will be ending soon. 

Once the booking is released, a notification is sent to the host to inform them about the canceled booking.

**Automatic check in**

Automatic check in starts 4 minutes after the booking has started.

Room device will automatically check in for: 

- Ad hoc bookings
- Joining a call
- Share session started (wired to wireless)
- People count is 1 or more (People count is considered 1 or more after 1 minute of continuous room in us.)

**Manual check in**

A user can manually select to check in by tapping the check in button.

### Configure check in and check out

Enable to let user check in to the rooms they have booked to confirm that the room is in use. If the user doesn’t check in, manually or automatically, the room booking is released and the organizer gets an email informing about the cancellation.

Starting 5 minutes before a booking, a check in button appears on the outside-room and in-room touch panels and it stays there for the duration set with `Bookings CheckIn WindowDuration`.

```
Bookings CheckIn Enabled: <True/False>
```

Default: False

Check in window is the time the check in option is available on the touch panel. Check-in window duration can be specified to 5, 10, 15, 20, 30 or 60 minutes. 

```
Bookings CheckIn WindowDuration: <5, 10, 15, 20, 30, 60>
```

 Default: 10

Configure whether the check out button is shown outside and inside the room, inside the room, or not at all.

```
Bookings AllowDecline: <All, InsideOnly, None>
```

 Default: All

## Enable hot desking

Pre-booking support for hot desking allows hot desking as a calendar feature. This allows a user to book a hot desking space before walking into the office, using a desk reservation solution such as Cisco Spaces, a third-party booking service, or the workspace hybrid calendar such as Outlook or Gmail.

**Hybrid calendar**

The workspace hybrid calendar can be used to reserve desks or quiet rooms, like conference rooms, and integrates seamlessly with RoomOS devices. 

If your organization uses a hybrid calendar, you can configure a quiet room with a hot desking-enabled device. Users can then book the device through Outlook, and if ad-hoc booking is enabled, they can sign in ad hoc and book it directly at the device. The booking will automatically synchronize with Exchange/Office 365 or Google Calendar.

When a user walks up and books a device ad hoc, the booking is associated with their account and reserves the room. On the user's calendar, their status will appear as 'Free' for the duration of the hot desk booking. To remote book a space with hybrid calendar, a user can simply add the workspace to their booking as an invitee.

The users can scan the QR code using their mobile phone to confirm booking and sign into the pre-booked hot desking device. 

The hot desking device will show the user's personal calendar meetings when signed in: 

Only the user who booked the space is permitted to sign in, as access is verified by matching the organizer's email address. 

For walk-up bookings, users have the option to sign in ad hoc and book the device.

Ad-hoc booking can be disabled to prevent walk-ups. When no one has booked the device and ad-hoc booking is disabled the user gets a message to book the device in advance.

**Local booking**

Enables the creation of bookings directly on the device's calendar. If the hybrid calendar is not enabled for a workspace, local bookings will be utilized instead. 

When ad-hoc booking is enabled, users can sign in on the device and book directly. These bookings are stored locally on the device. If ad-hoc booking is disabled to prevent walk-ins, either Cisco Spaces or a third-party booking solution must be used to reserve the space.

**Cisco Spaces**

Cisco Spaces provides a desk reservation solution that supports pre-booking through mobile and integrates seamlessly with RoomOS devices.

For more information on Cisco workspaces, see <https://spaces.cisco.com/smart-workspaces/>

**Third-party booking services**

RoomOS offers extensive xAPIs for remote pre-booking, enabling third-party booking services to integrate with the devices through workspace integrations. 

For more information, see <https://developer.webex.com/docs/workspace-integrations>
