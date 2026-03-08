---
title: "System requirements for Webex Contact Center Desktop"
product: "Webex Contact Center"
article_id: "besrkt"
url: "https://help.webex.com/en-us/article/besrkt"
last_updated: "2026-02-12"
description: "Here&#x27;s everything you need to know about the requirements for using Webex
Contact Center Desktop. Take a look at the minimum browser and operating system
requirements, bandwidth requirements, and supported languages."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# System requirements for Webex Contact Center Desktop

- [Agent Desktop ](#agent-desktop)
- [Supervisor Desktop ](#system-requirements-for-webex-contact-center)

The Desktop requires the following setup to ensure that all features work as expected before you attempt to sign in for the first time. 

##  System requirements

Make sure you're meeting the following minimum system requirements:

- Memory—2GB overall application RAM, excluding the operating system allocation.
- Operating system

  - Windows 10 or Windows 11
  - MAC OS 10.12, 10.13, or 10.14
  - Chrome OS 70 (64-Bit) and later

__Table 1\. Supported browsers__
| Operating system | Browser version                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows 10       | Google Chrome V76.0.3809 and later Firefox Extended Support Release (ESR) V68 and later Edge Chromium (MS Edge V79 and later)                     |
| Windows 11       | Google Chrome V103.0.5060.114 and later Firefox Extended Support Release (ESR) V102.0 and later) Edge Chromium (MS Edge V103.0.1264.44 and later) |
| macOS            | Google Chrome V76.0.3809 and later Firefox Extended Support Release (ESR) V68 and later) Edge Chromium (MS Edge V79 and later)                    |
| Chrome OS        | Chromium V73 and later Google Chrome V76.0.3809 and later                                                                                         |

WebRTC supports Google Chrome, Microsoft Edge, and Mozilla Firefox. However, Virtual Desktop Infrastructure (VDI) does not support WebRTC.

Make sure the following browser settings are configured: 

1. Cookies and site data is enabled.
2. Security level is set to Medium.
3. Image option is enabled.
4. Pop-up blocker is disabled.
5. JavaScript is enabled.

If you are using Firefox Extended Support Release (ESR) V104.0 or later, Windows or macOS, disable Enhanced Tracking Protection toggle in the browser for the Desktop URL. 

## Screen resolution

The Desktop display size must be greater than 500 x 500 pixels (width x height). You must set system scale to 100% and your web browser zoom as well to 100% for the best experience.

## Responsiveness

The title and logo aren't displayed when the viewing area is fewer than 736 pixels wide. Increase the width to 737 pixels or more to view the logo and the title.

If the viewing area is less than 1280 pixels wide, the task list appears on top of the task page and the interaction control pane. Collapse the task list to view the interaction control pane.

## Bandwidth requirements

The bandwidth requirements are as follows: 

1. Optimal performance—Requires a high-speed internet connection with a minimum recommended network bandwidth of 512 kbps (kilobits per second).
2. Data payload requests—The data payloads range from 1-100 kbps on average, and at the peak, the value ranges 2–3 MB.

Data payloads vary based on the nature and frequency of activities and requests. 

## Network and Firewall requirements

After you enable the Desktop option, check the network quality. For more information, see the article [Use CScan to Test Webex Calling Network Quality](https://help.webex.com/en-us/article/y27bej/Use-CScan-to-Test-Webex-Calling-Network-Quality).

For information on Desktop firewall requirements, see the article [Port Reference Information for Webex Calling](https://help.webex.com/en-us/article/b2exve/Port-Reference-Information-for-Webex-Calling). For domain access required for firewalls, see the article [Domain Access Required for Desktop](https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide#Cisco%5FReference.dita%5F3f7e1e63-84fb-48f5-a054-544dc01fc62a).

## Virtual Desktop Infrastructure (VDI)

The Agent Desktop supports third party VDI. Check that the remote system requirements correspond to Desktop system requirements. Agent Desktop supports keyboard shortcuts. However, these keyboard shortcuts might not function as expected in third party VDI environments.

Agent Desktop is supported with VDI, but WebRTC is not.

## Phone requirements

The agents handling voice interactions must have a phone. To ensure connectivity, call your Dial Number (DN) from another phone and validate your voice connectivity. The same DN must be entered in the **Station Credentials** dialog box (Station Credentials \> Dial Number).

## Agent devices

 Webex Contact Center supports the following agent devices for calling:

- Webex Calling desk phone.
- Webex Calling desktop app (computer audio).
- Webex App for mobile.
- Webex App integrated with Webex Calling (computer audio).
- Microsoft Teams softphone.

When you sign in with a calling device, enter the calling extension that your administrator has specified in the station credentials dialog box (Station Credentials \> Extension).

**Webex App** **as client**

The Webex Client can be used as an endpoint device when it is integrated with Webex Calling. To receive or make a voice call you must sign in to the Agent Desktop using the extension (Station Credentials \> Dial Number).

If you are using the extension, you can answer a voice call from Webex App. If you don't answer the phone within the allotted period, the call is returns to the queue, and your status changes to RONA.

The Webex App is accessible within the Desktop, allowing you to collaborate with other agents, supervisors, and subject matter experts (SMEs) of your business without leaving the Desktop. However, call control isn't available. To receive and make calls, you still require the external, non-embedded Webex App.

## Supported languages

The Agent Desktop user interface supports localization in 29 languages. The following languages are supported:

- Bulgarian
- Catalan
- Chinese (China)
- Chinese (Taiwan)
- Croatian
- Czech
- Danish
- Dutch
- English (UK)
- English (U.S.)
- Finnish
- French
- German
- Hungarian
- Italian
- Japanese
- Korean
- Norwegian
- Polish
- Portuguese (Brazil)
- Portuguese (Portugal)
- Romanian
- Russian
- Serbian
- Slovak
- Slovenian
- Spanish
- Swedish
- Turkish
- Ukrainian

The user interface language is determined by your browser's language preferences. For example, if you've set French as your preferred language in the Google Chrome browser, the user interface appears in French when you open it in the Google Chrome browser.

Desktop requires the following setup to ensure that all features work as expected before you attempt to sign in for the first time.

## System requirements

Make sure you're meeting the following minimum system requirements:

- Memory—2GB overall application RAM, excluding the operating system allocation.
- Operating system

  - Windows 10 or Windows 11
  - MAC OS 10.12, 10.13, or 10.14

__Table 2\. Supported browsers__
| Operating system | Browser version                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows 10       | Google Chrome V76.0.3809 and later Firefox Extended Support Release (ESR) V68 and later Edge Chromium (MS Edge V79 and later)                     |
| Windows 11       | Google Chrome V103.0.5060.114 and later Firefox Extended Support Release (ESR) V102.0 and later) Edge Chromium (MS Edge V103.0.1264.44 and later) |
| MAC OS           | Google Chrome V76.0.3809 and later Firefox Extended Support Release (ESR) V68 and later) Edge Chromium (MS Edge V79 and later)                    |
| Chrome OS        | Chromium V73 and later Google Chrome V76.0.3809 and later                                                                                         |

WebRTC supports Google Chrome, Microsoft Edge, and Mozilla Firefox. However, Virtual Desktop Infrastructure (VDI) does not support WebRTC.

Make sure the following browser settings are configured:

1. Allow cookies and site data to be used.
2. Set the level of security to Medium.
3. Select the Image option.
4. Turn off pop-up blockers.
5. Allow JavaScript to run.

If you're using Firefox Extended Support Release (ESR) V104.0 and later on Windows or macOS, disable the Enhanced Tracking Protection toggle in the browser for the Desktop URL. 

## Screen resolution

Desktop display size must be greater than 500 x 500 pixels (width x height). You must set your web browser zoom to 100% for the best experience.

## Responsiveness

The title and logo aren't displayed when the viewing area is fewer than 736 pixels wide. Increase the width to 737 pixels or more to view the logo and the title.

If the viewing area is less than 1280 pixels wide, the task list appears on top of the task page and the interaction control pane. Collapse the task list to view the interaction control pane.

## Virtual Desktop Infrastructure (VDI)

Third-party VDI is supported. Check that the remote system requirements correspond to Desktop system requirements. Keyboard shortcuts are supported by Desktop; however, in third-party VDI systems, some keyboard shortcuts may not work as planned.

Agent Desktop is supported with VDI, but WebRTC is not.

## Phone requirements

Agents handling voice interactions must have a phone. To ensure voice communication, dial your number from another phone. When you sign in, you must provide the same number in the station credentials dialog box (Station Credentials \> Dial Number).

## Supervisor devices

The following agent devices are supported:

- Webex Calling desk phone.
- Webex App for mobile.
- Webex App integrated with Webex Calling (computer audio).

When you sign in with a calling device, enter the calling extension that your administrator has specified in the station credentials dialog box (Station Credentials \> Extension).

**Webex App** **as client**

When combined with Webex Calling, Webex App can be used as an endpoint device. To receive or make a voice call, log in to Desktop with the extension (Station Credentials \> Dial Number).

You can answer a voice call from Webex App, if you are using the extension. If you don't answer the phone within the allotted period, the call returns to the queue and your status changes to RONA.

Webex App may be accessible from within Desktop, allowing you to collaborate with other agents, supervisors, and subject matter experts (SMEs) in your business without leaving Desktop. Call control, however, isn't provided. The external, nonembedded Webex App is required to accept and make calls.

## Supported languages

The Supervisor Desktop user interface supports localization in 30 languages. The following languages are supported:

- Bulgarian
- Catalan
- Chinese (China)
- Chinese (Taiwan)
- Croatian
- Czech
- Danish
- Dutch
- English (UK)
- English (U.S.)
- Finnish
- French
- German
- Hungarian
- Italian
- Japanese
- Korean
- Norwegian
- Polish
- Portuguese (Brazil)
- Portuguese (Portugal)
- Romanian
- Russian
- Serbian
- Slovak
- Slovenian
- Spanish
- Swedish
- Turkish
- Ukrainian

The user interface language is determined by your browser's language preferences. For example, if you've set French as your preferred language in the Google Chrome browser, the user interace appears in French when you open it in the Google Chrome browser.
