---
title: "Configure sequential ring"
product: "Webex Calling"
article_id: "nca7bucb"
url: "https://help.webex.com/en-us/article/nca7bucb/Configure-and-manage-set-up-sequential-ring-in-the-calling-user-portal"
last_updated: "2024-09-09"
description: "Sequential ring feature allows you to create a list of up to 5 additional
numbers to ring in a specific order when you receive incoming calls following
the schedules you create."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Configure sequential ring

## Feature operation

- When a caller dials a user that has Sequential Ring enabled, they hear an announcement asking them to stay on the line. If the interrupt setting is enabled, the caller also hears a message to press pound to interrupt the search when applicable.
- The caller hears ringing after the first announcement.
- If a call is answered by any of the numbers in the search list, the search is stopped.
- Every 20 seconds, a comfort message is played asking the caller to stay on the line.
- If the interrupt button (#) is pressed, the caller is provided with the subscriber’s no answer processing.
- After all numbers were tried and not answered, the ring back or announcement is interrupted, and the caller is provided with the subscriber’s no answer processing (voicemail in most cases).

## Configure sequential ring

Before you begin

- Your administrator must have enabled this feature for you to access and configure it. If you don’t see this setting, check with your administrator.
- You can configure all the call settings from the User Hub by navigating to Settings \> Calling.  
The Calling option is available only for users with the Webex Calling license. If you don’t see the Calling option, it means you don’t have the Webex Calling license.  
If you want to find out which calling service you’re set up with, you can check from the Webex App. For more details, see [Find out what calling service you have](https://help.webex.com/en-us/nbtgrzx/).

| 1  | Sign in to [User Hub](https://user.webex.com).                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2  | Go to Settings \> Calling \> Call settings.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3  | Go to the Sequential Ring section and turn on the toggle.                                                                                                                                                                                                                                                                                                                                                                                                          |
| 4  | Click Add personal number , and enter a list of 10-digit numbers or E.264 International numbers to be rung in order 1–5\. With each line you input, you can also set the number of rings for each device.                                                                                                                                                                                                                                                          |
| 5  | Select the Number of Rings from the drop-down, then select the Answer Confirmation for each number if you want the called party to press 1 on the keypad to receive the call.                                                                                                                                                                                                                                                                                      |
| 6  | To have a number ring the primary line first, select the Ring Webex Calling Primary Line first. Then, input the number of rings.                                                                                                                                                                                                                                                                                                                                   |
| 7  | To allow callers to go to voicemail, select the Allow calls to go to voicemail check box.                                                                                                                                                                                                                                                                                                                                                                          |
| 8  | Select a predefined schedule from the drop-down list. If you don’t see a schedule that you want to use for this setting, you can add a schedule on the Schedules tab. For more information, see [Create a Schedule to Apply to Call Settings](https://help.webex.com/en-us/df34r8/).                                                                                                                                                                               |
| 9  | Click Add Schedule to set the following parameters: Schedule—Select the predefined schedule for when you want calls to ring sequentially from the drop-down list. Calls from—Select to apply the sequential ring for calls from Any Phone Number or Select Phone Numbers. If you choose Select Phone Numbers, enter the additional details. Ring or Don't ring—Choose whether you want to apply the sequential ring to the calls that fit within these parameters. |
| 10 | Click Save. Your schedule is added to an Ring or Don't ring table. You can edit or delete schedules from the tables, as needed. Don't ring takes precedence over Ring.                                                                                                                                                                                                                                                                                             |
| 11 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Use sequential ring with other calling features

Sequential Ring interacts with the following calling features: 

- Alternate Numbers – Sequential Ring can be used with Alternate Numbers and applies to all alternate numbers for a user.
- Call Forward Always – If Call Forward Always is active at the main location, it takes precedence over Sequential Ring. If Call Forward Always is active on any other destination numbers for the Sequential Ring, the Sequential Ring location rings as usual and hunts to the next location if the call is unanswered.
- Call Forward Busy – Sequential Ring has precedence over Call Forward Busy. If all locations are busy (or if the base location is busy with the Sequential Ring set up not to continue), Call Forward Busy has a chance to execute (otherwise, no-answer processing is always applied). The Sequential Ring locations can have Call Forward Busy, in which case, the call is forwarded if the location is busy.
- Call Forward No Answer – Sequential Ring has precedence over Call Forward No Answer. Even if the base location is configured as a Sequential Ring location, a timeout causes the Sequential Ring to attempt the next location. Once Sequential Ring has finished going over all its locations, normal no-answer processing occurs, and Call Forward No Answer can then forward the call (a no-answer timer isn't restarted prior to that).
- Call Forward Not Reachable – If active, the Sequential Ring runs before the Call Forward Not Reachable service is invoked. If all the destinations, including the base locations, aren't reachable, the Call Forward Not Reachable feature forwards the call to the destination number after the Sequential Ring feature hunts through the list.
- Do Not Disturb – Do Not Disturb takes precedence over Sequential Ring.
- Hunt Group – When a call to a Hunt Group is presented to a user in the Hunt Group, the user’s Sequential Ring service is inhibited.
- Selective Call Acceptance/Selective Call Rejection – These features take precedence over the Sequential Ring.
- Simultaneous Ring – Sequential Ringing takes priority over Simultaneous Ring. However, if the base location is alerted, the Simultaneous Ring triggers and rings any simultaneous locations.
- Voice Messaging – If a Sequential Ring location rolls over to voicemail, the service ends and the caller is connected to voicemail.
