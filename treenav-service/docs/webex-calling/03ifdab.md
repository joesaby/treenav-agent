---
title: "Set up sequential ring for users and workspaces"
product: "Webex Calling"
article_id: "03ifdab"
url: "https://help.webex.com/en-us/article/03ifdab"
last_updated: "2025-08-05"
description: "With the Sequential Ring feature, you can set up to 5 additional numbers to ring
in a specific order when a user receives incoming calls."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Set up sequential ring for users and workspaces

## Feature operation

- When a caller dials a user that has Sequential Ring enabled, they hear an announcement asking them to stay on the line. If the interrupt setting is enabled, the caller also hears a message to press pound to interrupt the search when applicable.
- The caller hears ringing after the first announcement.
- If a call is answered by any of the numbers in the search list, the search is stopped.
- Every 20 seconds, a comfort message is played asking the caller to stay on the line.
- If the interrupt button (#) is pressed, the caller is provided with the subscriber’s no answer processing.
- After all numbers were tried and not answered, the ring back or announcement is interrupted, and the caller is provided with the subscriber’s no answer processing (voicemail in most cases).

## Set up sequential ring

Before you begin

To set up this feature for workspaces, ensure that workspaces have a professional license assigned. To find out more about the features that are available with workspace licenses, see [Features available by license type for Webex Calling](https://help.webex.com/n1qbbp7).

| 1  | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Go to the respective path. For Users: Go to Management \> Users. Then, select a user. For Workspaces: Go to Management \> Workspaces. Then, select a workspace.                                                                                                                                                                                                                                                                                                                                                                                         |
| 3  | Click the Calling tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4  | Go to the Call handling section and select Sequential Ring.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 5  | Turn on the toggle, and enter a list of 10-digit numbers or E.264 International numbers to be rung in order 1–5\. With each line you input, you can also set the number of rings for each device.                                                                                                                                                                                                                                                                                                                                                       |
| 6  | Select the Number of Rings from the drop-down list, then check Answer Confirmation for each number if you want the called party to press 1 on the keypad to receive the call. If the 1 isn’t pressed, the call continues to ring through the list of sequential ring.                                                                                                                                                                                                                                                                                   |
| 7  | If you want the primary line to ring first, check Ring Webex Calling Primary Line first and then input the number of rings.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 8  | Check Continue if Webex Calling primary line is busy if applicable to redirect the calls to the list of numbers entered if the primary line is busy or you're unable to answer the call.                                                                                                                                                                                                                                                                                                                                                                |
| 9  | To allow callers to go to voicemail, check Enable calls to go to voicemail.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 10 | Select a predefined schedule from the drop-down list. If you don’t see a schedule that you want to use for this setting, you can add a schedule on the Schedules page. For more information, see [Create Schedules](https://help.webex.com/nbelebf/).                                                                                                                                                                                                                                                                                                   |
| 11 | Click Add Schedule to set the following parameters: Schedule—Select the predefined schedule for when the calls to ring sequentially from the drop-down list. If you're a location administrator, only the schedules pertaining to your assigned locations appear. Calls from—Select to apply the sequential ring for calls from Any Phone Number or Select Phone Numbers. If you choose Select Phone Numbers, enter the additional details. Alert or Don't Alert—Choose whether to apply the sequential ring to calls that fit within these parameters. |
| 12 | Click Save to save your priority notification parameters. Your schedule is added to an Alert or Don't Alert table. You can edit or delete schedules from the tables, as needed. Don't Alert takes precedence over Alert.                                                                                                                                                                                                                                                                                                                                |
| 13 | Click Save. A user can also set up sequential ring on their own in the user portal. For more details, see [Configure sequential ring](https://help.webex.com/nca7bucb). Any changes made to these settings by the user will be reflected in both the user portal and Control Hub. The comfort messages played during sequential ring are standard system announcements and cannot be customized or disabled by users or administrators.                                                                                                                 |

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
