---
title: "Track Your Webex Events Attendees"
product: "Webex Events (Classic)"
article_id: "nzgyjep"
url: "https://help.webex.com/en-us/article/nzgyjep/Track-Your-Cisco-Webex-Events-Attendees"
last_updated: "2024-09-16"
description: "You can track the attendees of your event by associating source IDs with certain
vendors and obtaining event URLs to analyze the data from your event."
tags: ["webex-events-(classic)"]
source: "help.webex.com"
---

# Track Your Webex Events Attendees

## Track Your Attendees Overview

Gauge the effectiveness of your event marketing efforts by tracking from which sources attendees join or register for your events. 

**Example**: You use vendors to promote your events. You can assign a source ID for each vendor that sends invitation or recording email messages for you. Webex Events captures the source ID when an attendee selects the URL link in the event, program, or recording email messages from a particular vendor. 

You or your site administrator can then generate an attendance, a registration, or a recording report that shows each attendee’s source ID. You can compare and analyze which marketing method is more effective than another. 

There are two ways to append a source ID to an event, a program, or a recording URL: 

- Manually append a source ID by adding _&SourceId=_ to the event URL, and publish this new URL in your email messages.
- Associate a source ID with a vendor’s email address, if you use vendors to forward your email messages to potential attendees.

## Manually Append a Source ID to Your URL

| 1 | Obtain the attendee URL.                                                                                                                                                                                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Add &SourceId=xxx at the end of the URL, and then publish it in your email message. You can specify up to 512 characters, in either letters or numbers, for a source ID. **Example**: An event URL with a source ID can be https://\[eventURL\]&SourceId=CompanyWebsite or https://\[eventURL\]&SourceId=anynumber |

## Obtain URLs for Your Event, Program, or Recording

| 1 | Sign in to your Webex site and select Webex Events (classic).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Do one of the following: To obtain an event URL, expand Host an Event, select Site Events, check the Show past events check box if you want to see past events scheduled on your site, and then select the name of the event to view the Event information page. To associate source IDs, use the event address for attendees. To obtain a program URL, expand Manage Programs on the left navigation bar of your Webex Events site, then select List of Programs.  Select the name of the program to see the Program URL. To obtain a recording URL, expand Host an Event on the left navigation bar of your Webex Events site, then select My Event Recordings. Select the name of the recording to see the Playback/Download link. |

## Associate Source IDs with Vendors for an Event

| 1 | Expand Host an Event and then select Site Events.                                                                                                                                                                                                                                                                                              |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | (Optional) Check the Show past events check box to see past events scheduled on your site.                                                                                                                                                                                                                                                     |
| 3 | Select the name of the event and then click Send Emails. If you just finish scheduling an event, the Send Event Emails portion displays immediately.                                                                                                                                                                                           |
| 4 | Check the Vendors check box.                                                                                                                                                                                                                                                                                                                   |
| 5 | Enter up to three vendors’ email addresses and source IDs.                                                                                                                                                                                                                                                                                     |
| 6 | Select Send Now. The vendors receive an invitation email message that they can forward to potential attendees. The email message includes an event URL with the source ID that you associated with a particular vendor. If an attendee selects the link from the vendor’s email message, Webex Events captures the source ID for the attendee. |

## Associate Source IDs with Vendors for a Program

| 1 | On the left navigation bar of your Webex Events website, select Manage Programs \> List of Programs.                                                                                                                                                                                                                                          |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the name of the program.                                                                                                                                                                                                                                                                                                               |
| 3 | On the program page, select Send to Vendor.                                                                                                                                                                                                                                                                                                   |
| 4 | Enter up to three vendors’ email addresses and source IDs.                                                                                                                                                                                                                                                                                    |
| 5 | Select Send. The vendors receive an invitation email message that they can forward to potential attendees. The email message includes the program URL with the source ID that you associated with a particular vendor. If an attendee selects the link from the vendor’s email message, Webex Events captures the source ID for the attendee. |

## Associate Source IDs with Vendors for an Event Recording

| 1 | On the left navigation bar of your Event Center website, select Host an Event \> My Event Recordings.                                                                                                                                                                                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select the name of the recording.                                                                                                                                                                                                                                                                                                               |
| 3 | On the Recording Information page, select Send to Vendor.                                                                                                                                                                                                                                                                                       |
| 4 | Enter up to three vendors’ email addresses and source IDs.                                                                                                                                                                                                                                                                                      |
| 5 | Select Send. The vendors receive an invitation email message that they can forward to potential attendees. The email message includes the recording URL with the source ID that you associated with a particular vendor. If an attendee selects the link from the vendor’s email message, Webex Events captures the source ID for the attendee. |
