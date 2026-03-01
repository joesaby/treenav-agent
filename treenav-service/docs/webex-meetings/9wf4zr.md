---
title: "Webex Meetings Browser Extension Security"
product: "Webex Meetings"
article_id: "9wf4zr"
url: "https://help.webex.com/en-us/article/9wf4zr/Webex-Meetings-Browser-Extension-Security"
last_updated: "2024-09-21"
description: "Reviewing the warnings from browsers when installing a browser extension can be
concerning. Learn how the Cisco Webex Meetings browser extension for Google
Chrome, Mozilla Firefox, and Safari is secure."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Webex Meetings Browser Extension Security

Browser extensions allow developers to add modules that extend access to browser data for delivering the best app experiences. Webex App extensions for Firefox, Google Chrome, and Safari allow users to launch the Meetings desktop app when they visit a Webex App site to start or join a meeting.

An extension’s access to browser data is limited by how granular the browser platform permissions are. Given that browsers can’t limit permissions to extensions today, when an extension needs access to browsing data, the browser instead shows a **default severe** warning to users to confirm that they trust the extension that they’re installing.

For example, third-party extension installation instructions from Safari (given [here](https://support.apple.com/en-us/HT203051)) show that a severe warning will appear when installing any extension that needs to connect to the page. While malicious extensions can take advantage of the broadened access, extensions from trusted sources are there to safely enhance the user experience. 

Cisco is a leading security company and committed to the protection of our customers’ and partners’ data. Cisco is also committed to building trust by continuous transparency with customers and partners. Read more about our trust, transparency, and accountability [here](https://www.cisco.com/c/en/us/about/trust-center.html#~trustcentertopics).

The Webex App extension is only loaded and brought to action by the browser when the browser detects a specially crafted string in the page being loaded. The extension never reads any data from the page being loaded; it’s used by the page to launch the desktop app. 

Browsers will load the Webex App extension when a user accesses a page on \*.webex.com domains to allow users to start or join meetings.

The source code of the browser extension is deployed on users’ machines, and a technically savvy user can validate the extent of the extension’s activities. Most endpoint security companies and software online reputation companies also watch out for unsafe extensions and notify the community and the end users.

Note that Webex App fully discloses its data collection and privacy policies [here](https://www.cisco.com/c/en/us/about/trust-center/data-protection-and-privacy.html#~featuredcontent).

To summarize:

- Browser extensions can’t request limited permissions for browsing data due to limitations in browsers. Browsers show severe default warnings to ensure that users are aware of what an extension can do and install extensions from trusted sources.
- JavaScript extension code is installed on the desktop and can be reviewed by tech savvy users and security products.
- Webex App is a leading security company trusted by millions of users and is committed to protection of our customers and partners.
- The Webex App extension only interacts with Meetings pages and doesn’t read the content of any web page.
- Cisco has a published data collection and privacy statement.
