---
title: "Customize the emergency call disclaimer for your customers"
product: "Webex for Cisco BroadWorks"
article_id: "ng395hw"
url: "https://help.webex.com/en-us/article/ng395hw/Emergency-Call-Disclaimer"
last_updated: "2025-02-11"
description: "The emergency call disclaimer displays on Webex App, advising users of the
importance of accurate location information in directing emergency calls and of
the limitations for Webex App in providing this information. As a partner, you
can customize the disclaimer settings for your customers."
tags: ["webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# Customize the emergency call disclaimer for your customers

Service provider administrators can configure an emergency services disclaimer that displays to Webex App users. The disclaimer informs Webex App users of the importance of accurate user location information so that, in the event of an emergency, operators can send emergency services to the correct location. If they have a location service, the disclaimer also provides users with the opportunity to update their location information.

Administrators can customize the following settings for the disclaimer:

- The language of the disclaimer (the default is English)
- The text of the disclaimer
- Which device types (desktop, mobile or tablet) display the disclaimer
- How often the disclaimer appears to the user (first login, every login, never)
- Whether the disclaimer includes Location updates

To configure this feature:

| 1 | Sign in to Partner Hub.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Settings and select Branding.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3 | Select the Advanced customization tab and click Customize Branding.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 4 | Click the Emergency Call Disclaimer tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5 | Optional. If you want to customize the message text, click Add a custom message and do the following: If you don't customize the message, the disclaimer displays a default message based on your language and location. From the Select a Langauge drop-down, select the langauge that you want to use for the custom message. In the Header Text and Emergency call disclaimer text boxes, enter the header text and body text that you want to display in the disclaimer window.               |
| 6 | Under Devices, configure how often the disclaimer popup window appears: For each device type for which you want users to see the disclaimer, enable the adjacent toggle. The options are Desktop, Mobile and Tablet. If you leave a device type toggle disabled, users on that device type will not see the disclaimer. For each device type on which you've enabled the disclaimer, select First sign in or Every sign in to configure how often users on those device types see the disclaimer. |
| 7 | Optional. If you have a location service and want to include location updates with the disclaimer, enable the Location URL toggle and enter the URL of the location service.                                                                                                                                                                                                                                                                                                                      |
| 8 | Click Publish Changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

This document's content is specific to Webex Calling/Webex for BroadWorks deployments and does not apply to on-premises Unified CM for Webex Calling.

**Location Updates**

If you have a Location service, you can add an Update location button to the disclaimer that, when clicked by the user, updates the user’s location information in the database. In the event of an emergency, this information gets used to route 911 calls to the most appropriate emergency response center and, if needed, to send emergency services to the user’s physical location. 

The disclaimer, and the location update, can be configured to display at first login or every login. In addition, logged-in users can access the disclaimer, and update their location, by going to the About menu and selecting the Emergency Services Disclaimer. However, if you leave the disclaimer disabled on a specific device type, users on those devices have no option to access the disclaimer and update their location, either during login or via the About menu.
