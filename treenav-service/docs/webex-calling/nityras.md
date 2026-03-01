---
title: "Configure dialing behavior for outbound calls"
product: "Webex Calling"
article_id: "nityras"
url: "https://help.webex.com/en-us/article/nityras/Configure-Dialing-Behavior-for-Outbound-Calls"
last_updated: "2025-03-26"
description: "Webex Calling external dialing settings enable you to provide consistent dialing
behavior for call routing, number presentation, and outbound call screening."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Configure dialing behavior for outbound calls

Enterprises typically use outbound dial digit to avoid overlap with other on-net dialing habits. But some enterprises prefer permissive dialing (without the outbound dial digit). The call routing logic in Webex Calling consistently handles different user dialing behavior, with and without an outbound dial digit.

Webex Calling uses E.164 number format for calling, connected number identity, outbound call screening, and contact resolution. To keep numbering consistent, you can set your organization’s phone number format to either E.164 or National for calling and connected number identity. The format you set applies to locations that don't have an outbound dial digit configured.

For organizations with an outbound dial digit configured, permissive dialing is disabled, and the E.164 format is always used even if you set the organization's format to National.

If you configure locations in an organization to use an outbound dial digit, advise users to include the outbound dial digit when making external calls from Webex App, Webex Desk, or Room device.

The local and long-distance call types are merged into a single National call type for determining the outbound call types.

## Configure phone number format for outbound calls

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Services \> Calling \> Service Settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3 | Go to Calling phone number format section and choose one of the following formats: E.164 format—International standard format including country calling code (1–3 digits). National format—National convention for phone numbers, which varies by country. You can set the organization’s phone number format to either E.164 or National for calling and call history. The format you set applies to locations that don't have an outbound dial digit configured. For locations with an outbound dial digit configured, the E.164 format is always used even if you set the organization's format to National. |
| 4 | Click Save.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
