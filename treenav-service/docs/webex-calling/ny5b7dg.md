---
title: "Control termination of Ad hoc conference"
product: "Webex Calling"
article_id: "ny5b7dg"
url: "https://help.webex.com/en-us/article/ny5b7dg/Control-termination-of-Ad-hoc-conference"
last_updated: "2024-08-31"
description: "Webex Calling administrators can control preserving the conference behavior
after the host leaves and allow other participants to continue the conference."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Control termination of Ad hoc conference

This feature applies to a 3-way call and adds the 3-way call service to workspaces to provide a consistent experience. 

To access the feature, follow these steps: 

1. From the administrator view in [https://admin.webex.com](https://admin.webex.com/), go to Calling, and choose the organization to apply the setting. Select Service Settings.
2. Scroll to Continue conference calls when the host leaves setting, to configure handling the conference calls when the host leaves the conference.
3. Use the toggle to:  

  - Enable this setting to allow the conference call to continue for participants when the host leaves.
  - Disable this setting, if the conference must end when the host leaves. This is the default behavior.

These changes in call behavior apply:

- An attended transfer is performed for the calls to the remaining participants. This action leaves the participants directly connected. However, the conference resources are released.
- Call controls such as mute, hold, or call recording that the host performed before leaving the conference, won’t apply after the attended transfer.
- The CDRs for the calls to the remaining participants continue to track these calls for billing until the conference call is released.
