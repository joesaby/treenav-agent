---
title: "Upgrade Webex Meetings Using the Microsoft Windows Installer (MSI)"
product: "Webex Meetings"
article_id: "4oqmiw"
url: "https://help.webex.com/en-us/article/4oqmiw/Upgrade-Cisco-Webex-Meetings-Using-the-Microsoft-Windows-Installer-MSI"
last_updated: "2024-09-15"
description: "Upgrade Webex Meetings Using the Microsoft Windows Installer (MSI)"
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Upgrade Webex Meetings Using the Microsoft Windows Installer (MSI)

Users with administrator privileges on their computers can download and install the Webex Meetings desktop application. The Microsoft Windows Installer (MSI) file is available from the Webex Meetings  \> Support  \> Downloads  page of the Webex site.

When you update the Webex Meetings desktop application version for your site, the version already installed on the user’s computer does not automatically update. When that user joins a meeting on their Webex site, a browser plug-in installs a separate package, which contains the updated application version.

The MSI-installed version appears under Programs and Features  as Cisco Webex Meetings Desktop App with the Webex Meetings desktop application version listed. The second installation appears as Cisco Webex Meetings with no version listed, because it can include multiple application versions from multiple sites.

We recommend that you install the updated MSI package whenever you upgrade the application version for your Webex site. You can automate this process by using a remote management tool, such as Microsoft System Center Configuration Manager (previously Systems Management Server).
