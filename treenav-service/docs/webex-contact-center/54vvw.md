---
title: "Integrate Webex Contact Center with ServiceNow (Version 1—Legacy)"
product: "Webex Contact Center"
article_id: "54vvw"
url: "https://help.webex.com/en-us/article/54vvw/Integrate-Webex-Contact-Center-with-ServiceNow"
last_updated: "2026-02-25"
description: "When you integrate Webex Contact Center with the ServiceNow CRM console, you can
launch Webex Contact Center Desktop from within ServiceNow."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Integrate Webex Contact Center with ServiceNow (Version 1—Legacy)

- [Requirements](#Cisco%5FReference.dita%5F5abd99b2-db77-438f-b877-d48a886c732d)
- [Integrate](#Cisco%5FReference.dita%5Fbe0ca691-4dcd-449e-89b7-b026d1766e9b)
- [Use](#Cisco%5FReference.dita%5F525c863b-d6a5-4b59-91ec-a10800420518)
- [Customize](#customize)
- [Important updates](#concept-template%5Fac93b49e-a5eb-4942-a734-26c8da471aae)

## Prerequisites

The minimum supported size for the softphone interface is 500px. Any value lower than 500px may result in display or functionality issues.

Before you integrate Webex Contact Center with the ServiceNow CRM console, ensure that you have the following:

- Access to Webex Contact Center.
- Administrator access to the Control Hub at <https://admin.webex.com> and the Webex Contact Center Management Portal. The URLs for the Management Portal are specific to your region.
- An agent with access to the Desktop. The URL for the Desktop is specific to your region.
- Agent access to the following domain that is added in the Content Security Policy Allowed List:

  - \*.service-now.com  
For more information on how to define the allowed list, see the article [Security Settings for Webex Contact Center](https://help.webex.com/en-us/article/3srgv1/Security-Settings-for-Webex-Contact-Center#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F2de9d95e-9195-4abb-afe0-cef74f18d9cc).
- A ServiceNow developer portal account. To create an account, go to the ServiceNow developer portal at <https://developer.servicenow.com/dev.do> and click Sign up and Start Building.
- Access to the following files at <https://github.com/CiscoDevNet/webex-contact-center-crm-integrations/tree/main/ServiceNow>:

  - ServiceNow Update Set (XML)
  - ServiceNow Contact Center Desktop Layout (JSON)
- The ServiceNow editions that Webex Contact Center supports are Vancouver, Utah, Tokya, Washington, and Xanadu. For more information, see [Webex Contact Center Integration with ServiceNow](https://store.servicenow.com/sn%5Fappstore%5Fstore.do#!/store/application/6c8e2a4edbc73410e1c75e25ca961947/1.0.9?referer=%2Fstore%2Fsearch%3Flistingtype%3Dallintegrations%25253Bancillary%5Fapp%25253Bcertified%5Fapps%25253Bcontent%25253Bindustry%5Fsolution%25253Boem%25253Butility%25253Btemplate%25253Bgenerative%5Fai%25253Bsnow%5Fsolution%26q%3Dwebex%2520contact%2520center&sl=sh).

Follow one of the two methods below:

- For developer instances, we recommend following the steps under the developer instance guide.
- If you own an enterprise-licensed instance, follow the guidelines for enterprise-licensed instances.

We do not recommend mixing the enterprise-licensed app with developer sandbox instances.

Digital channels such as chat and email are not supported with CRM connectors. This applies to all CRM integrations using these connectors. Please plan your deployment and customer engagement workflows accordingly.

[Install ServiceNow for developer instances](#Cisco%5FReference.dita%5Fc5f425ec-2150-4b38-9eb7-e4a5f968a3e9)

The following sections describe the steps to install the ServiceNow connector for developer instances.

[Install the OpenFrame Interface](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F72365521-0e32-49f3-ab58-d0c200c0a83d)

| 1 | Sign in to your ServiceNow developer portal account and open the Administration console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From the My Instance area of the Account menu, click Start Building. ![ServiceNow developer portal screenshot with ‘Start Building’ button highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/461001-462000/461682.jpg)                                                                                                                                                                                                                                                                                          |
| 3 | On your developer instance, from the Filter navigator field at the upper left of the window, navigate to Plugins. ![ServiceNow developer instance showing a search for ‘plugins’ filter navigator.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/461001-462000/461681.jpg)                                                                                                                                                                                                                                               |
| 4 | Search for the Openframe plugin that has the title Openframe. You may need to scroll through the list. ![ServiceNow developer instance on the Applications screen, showing the search and results for ‘OpenFrame.’](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/461001-462000/461680.jpg)                                                                                                                                                                                                                               |
| 5 | Click Install to install the Openframe plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 6 | In the Activate Plugin dialog box, click Activate. ![ServiceNow developer instance showing OpenFrame plugin popup with the ‘Activate’ button highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469969.jpg)                                                                                                                                                                                                                                                                                        |
| 7 | When the plugin activation is completed, click Close & Reload Form in the Plugin Activation dialog box. ![ServiceNow developer instance showing OpenFrame plugin activation loading.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469970.jpg) ![ServiceNow developer instance showing OpenFrame plugin activation success window with the ‘Close & Reload Form’ button highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469971.jpg) |
| 8 | To verify the plugin activation, from the Filter navigator field at the upper left of the window, navigate to OpenFrame.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 9 | Click Configurations and ensure that the OpenFrame plugin appears in the OpenFrame Configurations list. ![ServiceNow developer instance showing OpenFrame Configurations in the filter navigator search.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469972.jpg)                                                                                                                                                                                                                                         |

[Commit the Update Set](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F5590222d-2a60-4c24-9e48-14d371733580)

| 1 | Download the latest System Update Set XML file available on the github repo at this location : <https://github.com/CiscoDevNet/webex-contact-center-crm-integrations/tree/main/ServiceNow>. **File Name**: webexcc-servicenow-update-setV(X).xml ![Github repo screenshot for Webex Contact Center CRM integrations – ServiceNow.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473069.jpg)                                                                        |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | On your ServiceNow instance, from the Filter navigator field at the upper left of the window, navigate to System Update Sets \> Update Sets to Commit. ![ServiceNow developer instance showing a search in the filter navigator on the ‘All’ tab for ‘Update set’ and ‘Update Sets to Commit’ option highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469973.jpg)                                                                                        |
| 3 | Click the Import Update Set from XML link. ![ServiceNow developer instance on the Update Sets results page with ‘Related Links: Import Update Set from XML’ highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/461001-462000/461671.jpg)                                                                                                                                                                                                                                 |
| 4 | Click Choose File, select the System Update Set XML file, and then click Upload. ![ServiceNow developer instance import XML screen.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469976.jpg) ![ServiceNow developer portal retrieved update sets list.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/472001-473000/472988.jpg) The update set appears in the Retrieved Update Sets list and is in the Loaded state. |
| 5 | From the Retrieved Update Sets list, click the Update Set File Name (link) to open the Update Set. ![ServiceNow developer portal retrieved update sets list for an updated file.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469978.jpg)                                                                                                                                                                                                                         |
| 6 | At the upper right of the window, click Preview Update Set to check the update set for issues. ![ServiceNow developer portal retrieved update sets list for an updated file with the ‘Preview Update Set’ button highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469979.jpg)                                                                                                                                                                            |
| 7 | Click Close on the Update Set Preview dialog box once preview is completed. ![ServiceNow developer portal with the update set preview success notification.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469980.jpg)                                                                                                                                                                                                                                              |
| 8 | Click Commit Update Set. ![ServiceNow developer portal retrieved update sets list for an updated file with the ‘Commit Update Set’ button highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469981.jpg)                                                                                                                                                                                                                                                   |
| 9 | Click Close on the Update Set Commit dialog box once committing of Update Set is completed. ![ServiceNow developer portal with the update set commit success notification.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469982.jpg)                                                                                                                                                                                                                               |

[Edit the System Properties](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fcf3bdb5e-306f-4ee7-b056-5215683cb88d)

| 1 | In the Filter navigator field at the upper left of the window, type sys\_properties.list and press enter. ![ServiceNow developer instance showing a search in the filter navigator on the ‘All’ tab for ‘sys_properties.list’](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469983.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the System Properties page, sort the properties by updated date. Ensure that you can see the following Webex Contact Center properties: ![ServiceNow developer instance system properties page.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/472001-473000/472989.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3 | Click agentdesktop\_url to open the  System Property agentdesktop\_url page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4 | In the Value field, enter the URL for the Webex Contact Center Desktop according to the region of operation. North America: <https://desktop.wxcc-us1.cisco.com> UK: <https://desktop.wxcc-eu1.cisco.com> EU: <https://desktop.wxcc-eu2.cisco.com> APJC: <https://desktop.wxcc-anz1.cisco.com> ![ServiceNow developer instance system property details for agentdesktop_url.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/462001-463000/462007.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5 | Click Update to save the changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 6 | (Optional) To change the Activity table name, edit the webexccactivitytable properties as required. On the System Properties page, click on webexccactivitytable. Change the Value field as required. ![ServiceNow developer instance system property details for webexactivitytable.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/472001-473000/472990.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 7 | (Optional) Add User Groups in the following ways: In the Filter navigator field at the upper left of the window, navigate to Groups under System Security.![ServiceNow developer instance filter navigator search for ‘Groups’ under ‘System Security’](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/472001-473000/472992.jpg) Create a new user group or use an existing one. ![ServiceNow developer instance group page for WebexccAgentsGroup.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/472001-473000/472993.jpg) Click Edit. Search for sn\_openframe\_user under Collection and move it to your user group. ![ServiceNow developer instance group edit members page showing a search for a collection.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/472001-473000/472994.jpg) ![ServiceNow developer instance group edit members page showing a collection moved into the roles list.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/472001-473000/472995.jpg) Click Save. Add the user as a group member. ![ServiceNow developer instance group page with user roles assigned.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/472001-473000/472996.jpg) |

[Create the OpenFrame Configuration](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F0a68181e-2d0b-4e2e-b619-26992194685c)

| 1 | From the Filter navigator field, navigate to OpenFrame \> Configurations. ![ServiceNow developer instance filters navigator with ‘openframe’ in the search field and ‘Configurations’ under ‘OpenFrame’ highlighted in the results.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469993.jpg)                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click New. ![ServiceNow developer instance OpenFrame Configurations page with ‘New’ highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469994.jpg)                                                                                                                                                                                                              |
| 3 | Enter the following properties for the URL: Name: Webex Contact Center Desktop Title: Webex Contact Center Width: 550 (Recommended) Height: 600 (Recommended)                                                                                                                                                                                                                                                                       |
| 4 | To the right of the URL field, click the Lock button and add agentdesktop.do as the URL. (Do this step to point configuration to the UI Page) ![ServiceNow developer instance OpenFrame Configurations – New Record page with the lock icon highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469995.jpg)                                                      |
| 5 | (Optional) Select the User / Agent Group(s) to assign the configuration. ![ServiceNow developer instance OpenFrame Configurations – New Record user group selection.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469996.jpg)                                                                                                                                          |
| 6 | Click Submit. The URL appears as a link. ![ServiceNow developer instance OpenFrame Configurations – New Record page showing the URL link that appears after submitting the user group selections.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/470001-471000/470038.jpg)                                                                                                             |
| 7 | Before you attempt to use the OpenFrame phone, ensure that you upload the ServiceNow custom Desktop Layout JSON file to the Webex Contact Center Management Portal. For more information, see [Set Up the ServiceNow Desktop Layout on Webex Contact Center](https://help.webex.com/en-us/article/54vvw/Integrate-Webex-Contact-Center-with-ServiceNow#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F48d22abc-4c56-465f-9bbe-f07342c6a17f). |

[Set up the ServiceNow Desktop Layout on Webex Contact Center](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F48d22abc-4c56-465f-9bbe-f07342c6a17f)

| 1 | Download the Desktop layout for ServiceNow from <https://github.com/CiscoDevNet/webex-contact-center-crm-integrations/tree/main/ServiceNow>. ![Github screen for Webex Contact Center CRM Integrations – Desktop Layouts – ServiceNow.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/470001-471000/470002.jpg) |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Update the properties in the Desktop Layout file, if required.                                                                                                                                                                                                                                                                                               |
| 3 | Go to the Webex Contact Center Management Portal.                                                                                                                                                                                                                                                                                                            |
| 4 | From the Management Portal navigation bar, choose Provisioning \> Desktop Layout. ![Webex Contact Center Management Portal provisioning page with Desktop Layout highlighted in the left navigation.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/470001-471000/470003.jpg)                                   |
| 5 | Click New Layout and enter the details for the desktop layout.                                                                                                                                                                                                                                                                                               |
| 6 | Upload the ServiceNow Desktop Layout JSON file.                                                                                                                                                                                                                                                                                                              |
| 7 | Click Save to save the configuration. You can now start the Webex Contact Center Desktop within the ServiceNow console.                                                                                                                                                                                                                                      |
| 8 | From the Filter navigator field, navigate to Service Operations Workspace. ![ServiceNow home page with Webex Contact Center Agent Desktop integrated with ServiceNow.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483243.jpg)                                                                  |

[Install ServiceNow for licensed enterprise instances](#Cisco%5FConcept.dita%5Fe98d3ea6-95a0-4a2f-a0da-24d8da65e376)

The following sections describe the steps to install the ServiceNow connector for licensed enterprise instances.

[Install the OpenFrame Interface](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F72365521-0e32-49f3-ab58-d0c200c0a83d)

| 1 | Sign in to your ServiceNow developer portal account and open the Administration console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From the My Instance area of the Account menu, click Start Building. ![ServiceNow developer portal screenshot with ‘Start Building’ button highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/461001-462000/461682.jpg)                                                                                                                                                                                                                                                                                          |
| 3 | On your developer instance, from the Filter navigator field at the upper left of the window, navigate to Plugins. ![ServiceNow developer instance showing a search for ‘plugins’ filter navigator.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/461001-462000/461681.jpg)                                                                                                                                                                                                                                               |
| 4 | Search for the Openframe plugin that has the title Openframe. You may need to scroll through the list. ![ServiceNow developer instance on the Applications screen, showing the search and results for ‘OpenFrame.’](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/461001-462000/461680.jpg)                                                                                                                                                                                                                               |
| 5 | Click Install to install the Openframe plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 6 | In the Activate Plugin dialog box, click Activate. ![ServiceNow developer instance showing OpenFrame plugin popup with the ‘Activate’ button highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469969.jpg)                                                                                                                                                                                                                                                                                        |
| 7 | When the plugin activation is completed, click Close & Reload Form in the Plugin Activation dialog box. ![ServiceNow developer instance showing OpenFrame plugin activation loading.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469970.jpg) ![ServiceNow developer instance showing OpenFrame plugin activation success window with the ‘Close & Reload Form’ button highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469971.jpg) |
| 8 | To verify the plugin activation, from the Filter navigator field at the upper left of the window, navigate to OpenFrame.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 9 | Click Configurations and ensure that the OpenFrame plugin appears in the OpenFrame Configurations list. ![ServiceNow developer instance showing OpenFrame Configurations in the filter navigator search.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469972.jpg)                                                                                                                                                                                                                                         |

[Install the Webex Contact Center application](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F458e1a51-0cb2-473a-ab23-1dbfacf76f25)

Instances that have enterprise licenses can install the Webex Contact Center application directly from the ServiceNow Store.

| Download and install the Webex Contact Center package from the ServiceNow store: <https://store.servicenow.com/sn%5Fappstore%5Fstore.do#!/store/application/6c8e2a4edbc73410e1c75e25ca961947>. ![ServiceNow store with ‘webex contact center’ in the search field.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/470001-471000/470005.jpg) |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[Edit the System Properties](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5Fcf3bdb5e-306f-4ee7-b056-5215683cb88d)

| 1 | In the Filter navigator field at the upper left of the window, enter sys\_properties.list. ![ServiceNow developer instance showing a search in the filter navigator on the ‘All’ tab for ‘sys_properties.list’](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469983.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the System Properties page, sort the properties by updated date. Ensure that you can see the following Webex Contact Center properties: ![ServiceNow developer instance system properties page results.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/472001-473000/473000.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3 | Click agentdesktop\_url to open the  System Property agentdesktop\_url page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4 | In the Value field, enter the URL for the Webex Contact Center Desktop according to the region of operation. North America: <https://desktop.wxcc-us1.cisco.com> UK: <https://desktop.wxcc-eu1.cisco.com> EU: <https://desktop.wxcc-eu2.cisco.com> APJC: <https://desktop.wxcc-anz1.cisco.com> ![ServiceNow developer instance system property details page for agentdesktop_url.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473001.jpg)                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5 | Click Update to save the changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 6 | (Optional) To change the Activity table name, edit the x\_caci\_webexcc.webexccactivitytable properties as required. On the System Properties page, click on **x\_caci\_webexcc.webexccactivitytable**. ![ServiceNow developer instance system properties page results for x_caci_webexcc.webexccactivitytable.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473002.jpg) Change the **Value** field as required. ![ServiceNow developer instance system property page for x_caci_webexcc.webexccactivitytable.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473003.jpg)                                                                                                                                                                                                                                                        |
| 7 | (Optional) Add User Groups in the following ways: In the Filter navigator field at the upper left of the window, navigate to Groups under System Security. ![ServiceNow developer instance filter navigator results for ‘Groups.’](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473004.jpg) ![SeviceNow developer instance group page for webexccagentsgroup.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473005.jpg) Click Edit and add the following roles: sn\_openframe\_user x\_caci\_webexcc.agent agent\_workspace\_user x\_caci\_webexcc.webexcc\_imp\_activity\_user x\_caci\_webexcc.webex\_contact\_center ![SeviceNow developer instance group page for webexccagentsgroup with rolls added.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/473001-474000/473010.jpg) |

[Create the OpenFrame Configuration](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F0a68181e-2d0b-4e2e-b619-26992194685c)

| 1 | From the Filter navigator field, navigate to OpenFrame \> Configurations. ![ServiceNow developer instance filters navigator with ‘openframe’ in the search field and ‘Configurations’ under ‘OpenFrame’ highlighted in the results.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469993.jpg)                                                                           |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click New. ![ServiceNow developer instance OpenFrame Configurations page with ‘New’ highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469994.jpg)                                                                                                                                                                                                              |
| 3 | Enter the following properties for the URL: Name: Webex Contact Center Desktop Title: Webex Contact Center Width: 550 (Recommended) Height: 600 (Recommended)                                                                                                                                                                                                                                                                       |
| 4 | To the right of the URL field, click the Lock button and add x\_caci\_webexcc\_agentdesktop.do as the URL. (Do this step to point configuration to the UI Page) ![ServiceNow developer instance OpenFrame Configurations – New Record page with the lock icon highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469995.jpg)                                    |
| 5 | (Optional) Select the User / Agent Group(s) to assign the configuration. ![ServiceNow developer instance OpenFrame Configurations – New Record user group selection.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469996.jpg)                                                                                                                                          |
| 6 | Click Submit. The URL appears as a link. ![ServiceNow developer instance OpenFrame Configurations – New Record with URL added.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469997.jpg)                                                                                                                                                                                |
| 7 | From the Filter navigator field, navigate to Service Operations Workspace. ![ServiceNow home page with Webex Contact Center Agent Desktop integrated with ServiceNow.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483243.jpg)                                                                                                                                         |
| 8 | (Optional) In the User Group list, move the user groups that can access the Webex Contact Center Desktop from Available to Selected.                                                                                                                                                                                                                                                                                                |
| 9 | Before you attempt to use the OpenFrame phone, ensure that you upload the ServiceNow custom Desktop Layout JSON file to the Webex Contact Center Management Portal. For more information, see [Set Up the ServiceNow Desktop Layout on Webex Contact Center](https://help.webex.com/en-us/article/54vvw/Integrate-Webex-Contact-Center-with-ServiceNow#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F48d22abc-4c56-465f-9bbe-f07342c6a17f). |

[Set up the ServiceNow Desktop Layout on Webex Contact Center](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F48d22abc-4c56-465f-9bbe-f07342c6a17f)

| 1 | Download the Desktop layout for ServiceNow from <https://github.com/CiscoDevNet/webex-contact-center-crm-integrations/tree/main/ServiceNow>. ![Github screen for Webex Contact Center CRM Integrations – Desktop Layouts – ServiceNow.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/470001-471000/470002.jpg) |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Update the properties in the Desktop Layout file, if required.                                                                                                                                                                                                                                                                                               |
| 3 | Go to the Webex Contact Center Management Portal.                                                                                                                                                                                                                                                                                                            |
| 4 | From the Management Portal navigation bar, choose Provisioning \> Desktop Layout. ![Webex Contact Center Management Portal provisioning page with Desktop Layout highlighted in the left navigation.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/470001-471000/470003.jpg)                                   |
| 5 | Click New Layout and enter the details for the desktop layout.                                                                                                                                                                                                                                                                                               |
| 6 | Upload the ServiceNow Desktop Layout JSON file.                                                                                                                                                                                                                                                                                                              |
| 7 | Click Save to save the configuration. You can now start the Webex Contact Center Desktop within the ServiceNow console.                                                                                                                                                                                                                                      |
| 8 | From the Filter navigator field, navigate to Service Operations Workspace. ![ServiceNow home page with Webex Contact Center Agent Desktop integrated with ServiceNow.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483243.jpg)                                                                  |

[Configure Click to Dial on Incident Module](#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F20c1891e-362f-4c2e-be03-e8bd446debaa)

| 1 | From the Filter navigator field, navigate to Incidents \> Open Incident.                                                                                                                                                                                                                                                                                   |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Right click on the caller field and click Configure Dictionary. ![ServiceNow developer instance Incidents window with the Configure Directory option highlighted.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/470001-471000/470007.jpg)                                                                    |
| 3 | Add comma separated Attributes “ref\_contributions=show\_phone,. ![ServiceNow developer instance call incident window for a Directory Entry.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/470001-471000/470006.jpg) You can now start using the Webex Contact Center Desktop within the ServiceNow console. |
| 4 | From the Filter navigator field, navigate to Service Operations Workspace. ![ServiceNow home page with Webex Contact Center Agent Desktop integrated with ServiceNow.](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/483001-484000/483243.jpg)                                                                |

- We support signing into Agent Desktop using WebRTC for Salesforce (SFDC) and Microsoft Dynamics (MS Dynamics) Connectors only.
- Currently, this feature is applicable to agents only.

## Agent Desktop in the ServiceNow Console

Before you make outdial calls, ensure that you do the following:

- Create the outdial entry point and set up an outdial entry point strategy.
- Enable outdial ANI for the Agent Profile.
- Set the outdial ANI to a Dial Number-to-Entry Point mapping.

For more information, see the _Provisioning_ chapter of the [_Cisco Webex Contact Center Setup and Administration Guide_](https://www.cisco.com/c/en/us/support/customer-collaboration/webex-contact-center/series.html).

From the Filter navigator field, navigate to Service Operations Workspace.

For information on how to use Desktop, see the [Agent](https://help.webex.com/en-us/landing/ld-xsu6ys-ContactCenter/Agent?type=complex&subTab=Webex-Contact-Center) tab in the Webex Contact Center help.

## Overview

This article covers several ways to customize your business rules for the ServiceNow CRM connector. It details how you can customize the use cases based on business rules that are specific to ServiceNow.

The customer must self manage these use cases on ServiceNow. The configuration is specific to ServiceNow and not Webex Contact Center software or expertise.

This is a reference documentation to aid the modification of business rules. The ServiceNow developers will create and manage the business rules, and provide support.

Cisco only provides sample documentation.

[Set up and Manage Actions Widget](#concept-template%5Fd9ff7a86-af20-4fa6-86d0-03adec9ac18c)

 The following sections provide details about how to set up, enable, and manage Actions widget for developer and enterprise instances.

### Commit the Update Set for Actions Widget

For the licensed enterprise instances, install the latest Webex Contact Center app from the [ServiceNow store](https://store.servicenow.com/sn%5Fappstore%5Fstore).

To set up the Actions widget for the developer instances, download the latest System Update Set XML file available on the github repo at this location: <https://github.com/CiscoDevNet/webex-contact-center-crm-integrations/tree/main/ServiceNow/ActionsWidget>. The file name is webexcc-servicenow-update-setv7-1-ActionsWidget.xml. To commit the update set for the Actions widget, see steps 2 to 9 in [Commit the Update Set](https://help.webex.com/en-us/article/54vvw/Integrate-Webex-Contact-Center-with-ServiceNow#Cisco%5FTask%5Fin%5FList%5FGUI.dita%5F5590222d-2a60-4c24-9e48-14d371733580).

### Enable Actions Widget

Use the **isWidgetDisplayEnabled** property to enable the Actions widget. You must not modify this property's value in the custom desktop layout's headless section. The property is always set to false in the custom desktop layout's headless section. You should update the property's value only in the panel section of the custom desktop layout.

Once you enable the Actions widget in the custom desktop layout, you can perform the following actions:

- Manage activity records—Click View/Edit Activity Record to view the list of activity records associated with the caller.
- Associate CRM objects—Click Associate to activity records to add CRM objects such as call type (inbound or outbound), call object, call notes, and so on to the activity record.
- Manage incidents—Click Create Incident. A new incident is created with the caller details prepopulated. You can make the required updates to the incident. You can choose to modify the record type from incident to case, HR module, and so on based on your requirements. To change the record type, modify the value of the **typeOfRecord** property in the Actions widget configuration. For example:  
```  
{  
              "comp": "md-tab-panel",  
              "attributes": { "slot": "panel", "class": "widget-pane" },  
              "children": [  
                {  
                  "comp": "agentx-custom-desktop",  
                  "script": "https://cx-crmconnector.ciscoccservice.com/servicenow/v5/dist/index.js",  
                  "properties": {  
                    "isWidgetDisplayEnabled": true,  
                    "typeOfRecord" : "Create Incident"  
                  },  
                  "wrapper": {  
                    "title": "SNOW Actions !",  
                    "maximizeAreaName": "app-maximize-area"  
                  }  
                }  
              ]  
            }  
```
- Add live call notes—You can capture additional information about the call in the text area and wrap-up the call. You can see these notes added as call notes in the activity record.

[Auto open incident on a current interaction record](#bxb%5Fxgx%5F5wb)

### Code change on ServiceNow

**The Script Includes changes** 
1. Go to filter navigator and search for script includes.  
Select the Script Includes under System UI.
2. Filter the Name and search for propUtils.
3. Change the method UserGetSysId in the Script.

**Curent:**  
```  
UserGetSysId : function () {  
var opened_for;  
var user = new GlideRecord("sys_user");  
user.addQuery(this.getParameter('field'),this.getParameter('value'));  
user.query();  
if (user.next())  
opened_for=user.sys_id;  
var grInt = new GlideRecord('interaction');  
grInt.initialize();  
grInt.assigned_to= gs.getUserID();  
grInt.type= 'phone';  
grInt.opened_for= opened_for;  
var sysid=grInt.insert();  
return sysid;  
},  
```

**New sample code for the incident:**  
```  
UserGetSysId : function () {  
            var opened_for;  
        //Incident related changes  
             var sysidlist = {};  
            var user = new GlideRecordSecure("sys_user");  
              user.addQuery(this.getParameter('field'),this.getParameter('value'));  
              user.query();  
              if(user.next()) {  
                 opened_for=user.sys_id;//return user.sys_id;  
                    var inc = new GlideRecordSecure('incident');  
                            inc.addQuery('caller_id', opened_for);  
                            inc.addQuery('state','IN','1,2');  
                            inc.orderByDesc('sys_created_on');  
                            inc.query();  
                                if (inc.next()) {  
                                    sysidlist.incsysid=inc.getUniqueValue();  
                               }else{  
                                    inc.initialize();  
                                    inc.caller_id=opened_for;  
                                    inc.contact_type='phone';  
                                    inc.short_description='Call Received From '+ this.getParameter('value');  
                                    sysidlist.incsysid=inc.insert();  
                                }  
              }  
            var grInt = new GlideRecordSecure('interaction');  
                grInt.initialize();  
                grInt.assigned_to= gs.getUserID();  
                grInt.type= 'phone';  
                grInt.opened_for= opened_for;  
            var sysid=grInt.insert();  
            sysidlist.sysid=sysid;  
              
            return JSON.stringify(sysidlist);  
        },  
```
**Method change on UI pages**
1. Go to filter navigator and search for `UI page`.  
Select UI pages under System UI.
2. Filter the Name and search for agentdesktop.
3. Change the screenpop function in Client script.

**Current function:**  
```  
// screen pop  
function screenpop(callerani,callSessionInfo) {  
if(callerani===callSessionInfo.phoneNumber){  
callerani=stripPrefixes(callerani);  
}  
var gaout = new GlideAjax('propUtils');  
gaout.addParam('sysparm_name', 'UserGetSysId');  
gaout.addParam('field', 'phone');  
gaout.addParam('value', callerani);  
gaout.getXMLWait();  
var sysid = gaout.getAnswer();  
    
openFrameAPI.openServiceNowForm({  
entity: 'interaction',  
query: 'sys_id='+sysid  
});  
```

**Sample code for the incident:**  
```  
// screen pop  
function screenpop(callerani,callSessionInfo) {  
     
    if(callerani===callSessionInfo.phoneNumber){  
        callerani=stripPrefixes(callerani);  
    }  
      
    var gaout = new GlideAjax('propUtils');  
        gaout.addParam('sysparm_name', 'UserGetSysId');  
        gaout.addParam('field', 'phone');  
        gaout.addParam('value', callerani);  
        gaout.getXMLWait();  
// For Incident-related change  
      var sysObj = JSON.parse(gaout.getAnswer());  
      
    if(sysObj.incsysid){  
        openFrameAPI.openServiceNowForm({  
        entity: 'incident',  
        query: 'sys_id='+sysObj.incsysid,  
        'interaction_sys_id': sysObj.sysid  
       });  
    }else{  
        openFrameAPI.openServiceNowForm({  
        entity: 'incident',  
        query: 'sys_id=-1',  
        'interaction_sys_id': sysObj.sysid //'a2ba0ba62fd121106446cc96f699b6b8'  
       });  
    }  
     
}  
```

### If the caller information exists in CRM, and there is already a new incident opened with this contact, application opens the inprogress incident

### If the caller information does not exist in CRM, the application opens a new incident

### If the caller information exists in CRM, the application opens a new incident with prefilled details

[Add CAD variable in phone log table](#txn%5Fm2x%5F5wb)

### Overview

This use case details the process to add an extra column to the ServiceNow table - webexcc\_imp\_activity and create sn\_openframe\_phone\_log upon the installation of the Webex CC for ServiceNow CRM Connector.

By default, the table contains certain out of the box system fields and values.

You can create more business-specific variables (CAD Variables) inside of the WebexCC Flow designer and add the CAD variables inside of the ServiceNow post call activity log, as well as persist this to the post call activity table data.

This is a reference documentation only - and shows how to do this for a sample CAD variable called Customer Name that stores the customer name inside the IVR and posts this to ServiceNow.

It is expected that the partner+customer ServiceNow developers will configure and manage this configuration as it is a customization to the existing connector.

Cisco only provides the techniques on how to customize and extend the connector.

As of this article, the Cisco team has validated support for the addition of CAD variable to the Activity Log and Activity Table using the technique described below:

### Add Column to WebexCC IMP Activity

1. Edit the table in the developer version of ServiceNow.
2. Go to the filter navigator and search for studio.  
Select Webex Contact Center  
or
3. Select the WebexCC IMP Activity table
4. Add a new column, for example, CustomerName

### Add Column to Phone Log

1. Edit the phone log table.
2. Add a new column, for example, CustomerName.

### WebexCC Activity Transform Map

Add a new column, for example, CustomerName field mapping.

Personalize List Columns

As Service Now recommends, change the Choice action from create to ignore.

### Configure phone logs list

### Go to Script Include

Add only one line webexcc.u\_customername=actInfo.CustomerName to propUtils.

**Sample script**

See the line: **_webexcc.u\_customername=actInfo.CustomerName;_** with a supporting comment.

```
var propUtils = Class.create();
propUtils.prototype = Object.extendsObject(global.AbstractAjaxProcessor,{
         getWebexccProp : function () {
           var webexccprop = {};
           webexccprop.instanceurl= 'https://'+gs.getProperty('instance_name')+'.service-now.com/';
           webexccprop.url=gs.getProperty('x_caci_webexcc.agentdesktop_url');
          // webexccprop.popupurl=gs.getProperty('x_caci_webexcc.screenpop_url');
           return  JSON.stringify(webexccprop);
      
        },
        UserGetSysId : function () {
            var opened_for;
            var user = new GlideRecord("sys_user");
              user.addQuery(this.getParameter('field'),this.getParameter('value'));
              user.query();
              if (user.next())
                 opened_for=user.sys_id;//return user.sys_id;
//            else
//               return null;
            var grInt = new GlideRecord('interaction');
                grInt.initialize();
                grInt.assigned_to= gs.getUserID();
                grInt.type= 'phone';
                grInt.opened_for= opened_for;
            var sysid=grInt.insert();
            return sysid;
        },
        setWebexcctable : function () {
            var sys_id=0;
             
            var actInfo = JSON.parse(this.getParameter('actInfo'));
            var webexcc = new GlideRecordSecure(gs.getProperty('x_caci_webexcc.webexccactivitytable'));
            webexcc.addQuery("callobject", actInfo.CallObject);
            webexcc.query();
            if(!webexcc.next()) {
                webexcc.ani = actInfo.ani;
                webexcc.dnis =actInfo.dnis;
                webexcc.queuename =actInfo.queuename;
                webexcc.wrapuptime =actInfo.wrapuptime;
                webexcc.callduration =actInfo.CallDurationInSeconds;
                webexcc.ringingtime =actInfo.ringingtime;
                webexcc.activitydate =actInfo.ActivityDate;
                webexcc.callobject =actInfo.CallObject;
                webexcc.calltype =actInfo.CallType;
                webexcc.calldisposition=actInfo.CallDisposition;
                 
                // This line is Added - to capture it in the Activity Log
               webexcc.u_customername=actInfo.CustomerName;
                 
                sys_id=webexcc.insert();
 
                //Activities on Incident record;
                var actInfoString =this.getParameter('actInfo');
                var suser = new GlideRecordSecure("sys_user");
                    suser.addQuery("phone", this.getParameter('ani'));
                    suser.query();
                    if(suser.next()) {
                    var inc = new GlideRecordSecure('incident');
                            inc.addQuery('caller_id', suser.sys_id);
                            inc.orderByDesc('sys_created_on');
                            inc.query();
                                if (inc.next()) {
                                    var jsonPretty = JSON.stringify(JSON.parse(actInfoString),null,2); 
                                    inc.comments =jsonPretty;
                                inc.update();
     
                            }
                    }
            }  
            return sys_id;
       },
 
    type: 'propUtils'
});
```

### Create a CAD variable in Flow designer

### Add the CAD variable to the Desktop Layout

**Example**

```
"CadName1:SnowField1,CadName2:SnowField2"
 CadName1 is CustomerName
 SnowField1 is also used as CustomerName which is part of sample scirpt showen above "actInfo.CustomerName".
```

### Demo screenshots

**View the newly added CAD variable in the WebexCC Activity table.**

[Auto Prefill CAD values in an Incident Record](#a1f%5Fblg%5Fwwb)

### Create CAD variable for Flow Designer

**Incident urgency**

**Incident impact**

### Service Now script update

**Updates to the Script Includes**

1. Go to the filter navigator and search for `script includes`  
Select the Script Includes option under System UI.
2. Filter the Name with `propUtils`.
3. Change the method UserGetSysId in the Script field.

**Current script:**  
```  
UserGetSysId : function () {  
var opened_for;  
var user = new GlideRecord("sys_user");  
user.addQuery(this.getParameter('field'),this.getParameter('value'));  
user.query();  
if (user.next())  
opened_for=user.sys_id;  
var grInt = new GlideRecord('interaction');  
grInt.initialize();  
grInt.assigned_to= gs.getUserID();  
grInt.type= 'phone';  
grInt.opened_for= opened_for;  
var sysid=grInt.insert();  
return sysid;  
},  
```

**New sample code for the incident:**  
```  
UserGetSysId : function () {  
            var opened_for;  
              
            var sysidlist = {};  
            var user = new GlideRecordSecure("sys_user");  
              user.addQuery(this.getParameter('field'),this.getParameter('value'));  
              user.query();  
              if(user.next()) {  
                 opened_for=user.sys_id;//return user.sys_id;  
                    var inc = new GlideRecordSecure('incident');  
                            inc.addQuery('caller_id', opened_for);  
                            inc.addQuery('state','IN','1,2');  
                            inc.orderByDesc('sys_created_on');  
                            inc.query();  
                                if (inc.next()) {  
                                    sysidlist.incsysid=inc.getUniqueValue();  
                               }else{  
                                    inc.initialize();  
                                    inc.caller_id=opened_for;  
                                    inc.contact_type='phone';  
                                    inc.urgency=this.getParameter('IncUrgency');  
                                    inc.impact=this.getParameter('Impact');  
                                    inc.short_description='Call Received From '+ this.getParameter('value');  
                                    sysidlist.incsysid=inc.insert();  
                                }  
              }  
            var grInt = new GlideRecordSecure('interaction');  
                grInt.initialize();  
                grInt.assigned_to= gs.getUserID();  
                grInt.type= 'phone';  
                grInt.opened_for= opened_for;  
            var sysid=grInt.insert();  
            sysidlist.sysid=sysid;  
              
            return JSON.stringify(sysidlist);//sysid;  
        },  
```
**A method change on UI pages**
1. Go to the filter navigator and search for `UI pages`.  
Select the UI Pages option under System UI.
2. Filter the UI Pages with Name and search for `agentdesktop`.
3. Change the screenpop function in the script field.

**Current function:**  
```  
// screen pop  
function screenpop(callerani,callSessionInfo) {  
if(callerani===callSessionInfo.phoneNumber){  
callerani=stripPrefixes(callerani);  
}  
var gaout = new GlideAjax('propUtils');  
gaout.addParam('sysparm_name', 'UserGetSysId');  
gaout.addParam('field', 'phone');  
gaout.addParam('value', callerani);  
gaout.getXMLWait();  
var sysid = gaout.getAnswer();  
    
openFrameAPI.openServiceNowForm({  
entity: 'interaction',  
query: 'sys_id='+sysid  
});  
}  
```

**Sample code for the incident:**  
```  
// screen pop  
function screenpop(callerani,callSessionInfo) {  
     
    var Impact=3;  
    if(callSessionInfo.callAssociatedData.Impact != null && callSessionInfo.callAssociatedData.Impact != undefined)  
    {  
        Impact=callSessionInfo.callAssociatedData.Impact.value;  
    }  
    var IncUrgency=3;  
    if(callSessionInfo.callAssociatedData.Urgency != null && callSessionInfo.callAssociatedData.Urgency != undefined)  
    {  
        IncUrgency=callSessionInfo.callAssociatedData.Urgency.value;  
    }  
    if(callerani===callSessionInfo.phoneNumber){  
        callerani=stripPrefixes(callerani);  
    }  
      
    var gaout = new GlideAjax('propUtils');  
        gaout.addParam('sysparm_name', 'UserGetSysId');  
        gaout.addParam('field', 'phone');  
        gaout.addParam('value', callerani);  
        gaout.addParam('IncUrgency', IncUrgency);  
        gaout.addParam('Impact', Impact);  
        gaout.getXMLWait();  
      // var sysid = gaout.getAnswer();  
      var sysObj = JSON.parse(gaout.getAnswer());  
      
    if(sysObj.incsysid){  
        openFrameAPI.openServiceNowForm({  
        entity: 'incident',  
        query: 'sys_id='+sysObj.incsysid,  
        'interaction_sys_id': sysObj.sysid  
       });  
    }else{  
        openFrameAPI.openServiceNowForm({  
        entity: 'incident',  
        query: 'sys_id=-1',  
        'interaction_sys_id': sysObj.sysid  
       });  
    }  
    window.localStorage.setItem("screenpopinteraction",JSON.stringify(sysObj));  
     
}  
```

### If the caller information exists in CRM, and there is no new or inprogress incident then the application opens a new incident

[Insert interaction number and incident number in phone log table](#xzw%5Fwdk%5Fvwb)

### Change the code on ServiceNow

### Add new columns to the WebexCC IMP Activity table

Open the WebexCC IMP Activity table

Add a new column - InteractionsNumber

Add a new column - IncidentNumber

Click on Update.

### Add new columns to the Phone Log table

Open the Phone Log table

Add a new column - InteractionsNumber

Add a new column - IncidentNumber

### WebexCC Activity Transform Map

Open transform map from the filter navigator

Click on WebexCC Activity TransformMap

Add new - for Interaction Number Map

Add new - for Incident Number Map

Click Update.

### Changes to Script Includes

1. Go to filter navigator and search for "script includes".  
Select the Script Includes under System UI.
2. Filter the Name with propUtils.
3. Change the method setWebexcctable.

**New sample code for Incident:**  
```  
setWebexcctable : function () {  
            var sys_id=0;  
              
            var actInfo = JSON.parse(this.getParameter('actInfo'));  
            var webexcc = new GlideRecordSecure(gs.getProperty('webexccactivitytable'));  
            webexcc.addQuery("u_callobject", actInfo.CallObject);  
            webexcc.query();  
            if(!webexcc.next()) {  
                  
                //Activities on Incident record;  
                //var actInfoString =this.getParameter('actInfo');  
                var incsysid=actInfo.incident_sys_id;  
                var interactionsysid=actInfo.interaction_sys_id;  
                var incnum="";  
                var intenum="";  
                delete actInfo['interaction_sys_id'];  
                delete actInfo['incident_sys_id'];  
                if( interactionsysid!= null && interactionsysid != undefined){  
                    var inte = new GlideRecordSecure('interaction');  
                    //inte.get('sys_id', interactionsysid );  
                      
                    inte.addQuery('sys_id', interactionsysid );  
                    inte.query();  
                    if (inte.next()) {  
                        intenum=inte.number;  
                       // inte.setValue('state','Closed Complete');  
                        inte.work_notes='Update State to closed.';  
                        inte.update();  
      
                    }  
                }  
                if( incsysid!= null && incsysid != undefined){  
                    var inci = new GlideRecordSecure('incident');  
                    inci.addQuery('sys_id', incsysid );  
                    inci.query();  
                    if (inci.next()) {  
                        incnum=inci.number;  
                        var jsonPretty = JSON.stringify(actInfo,null,2); //JSON.stringify(JSON.parse(actInfoString),null,2);  
                        inci.comments =jsonPretty;  
                        inci.update();  
      
                    }  
                }else{  
                  var suser = new GlideRecordSecure("sys_user");  
                    suser.addQuery("phone", this.getParameter('ani'));  
                    suser.query();  
                    if(suser.next()) {  
                    var inc = new GlideRecordSecure('incident');  
                            inc.addQuery('caller_id', suser.sys_id);  
                            inc.addQuery('state','IN','1,2');  
                            inc.orderByDesc('sys_created_on');  
                            inc.query();  
                                if (inc.next()) {  
                                    var jsonPretty = JSON.stringify(actInfo,null,2);  
                                    inc.comments =jsonPretty;  
                                inc.update();  
      
                            }  
                    }  
                }  
                 
                  
                webexcc.u_ani = actInfo.ani;  
                webexcc.u_dnis =actInfo.dnis;  
                webexcc.u_queuename =actInfo.queuename;  
                webexcc.u_wrapuptime =actInfo.wrapuptime;  
                webexcc.u_callduration =actInfo.CallDurationInSeconds;  
                webexcc.u_ringingtime =actInfo.ringingtime;  
                webexcc.u_activitydate =actInfo.ActivityDate;  
                webexcc.u_callobject =actInfo.CallObject;  
                webexcc.u_calltype =actInfo.CallType;  
                webexcc.u_calldisposition=actInfo.CallDisposition;  
                webexcc.u_incidentnumber=incnum;  
                webexcc.u_interactionsnumber=intenum;  
                sys_id=webexcc.insert();  
                  
                              
            }  
            return sys_id;  
       },  
```

### Method changes on UI pages

1. Go to filter navigator and search for UI pages  
Select the UI Pages option under System UI.
2. Filter the UI Pages with Name and search for `agentdesktop`.
3. Change the nowActivities and screenpop function in the script.

**Current function:**  
```  
function nowActivities(actInfo, ani) {  
      
    var gaout = new GlideAjax('propUtils');  
    gaout.addParam('sysparm_name', 'setWebexcctable');  
    gaout.addParam('actInfo', JSON.stringify(actInfo));  
    gaout.addParam('ani', stripPrefixes(ani));  
    gaout.getXML(SetCCsysId);  
}  
```

**Sample code for the incident:**  
```  
function nowActivities(actInfo, ani) {  
    var sysObjstr = window.localStorage.getItem("screenpopinteraction");  
    if(sysObjstr != null && sysObjstr != undefined)  
    {  
        var sysObjjson=JSON.parse(sysObjstr);  
        actInfo.interaction_sys_id=sysObjjson.sysid;  
        actInfo.incident_sys_id=sysObjjson.incsysid;  
    }  
    var gaout = new GlideAjax('propUtils');  
    gaout.addParam('sysparm_name', 'setWebexcctable');  
    gaout.addParam('actInfo', JSON.stringify(actInfo));  
    gaout.addParam('ani', stripPrefixes(ani));  
    gaout.getXML(SetCCsysId);  
}  
function screenpop(callerani,callSessionInfo) {  
     
    if(callerani===callSessionInfo.phoneNumber){  
        callerani=stripPrefixes(callerani);  
    }  
      
    var gaout = new GlideAjax('propUtils');  
        gaout.addParam('sysparm_name', 'UserGetSysId');  
        gaout.addParam('field', 'phone');  
        gaout.addParam('value', callerani);  
        gaout.getXMLWait();  
      // var sysid = gaout.getAnswer();  
      var sysObj = JSON.parse(gaout.getAnswer());  
      
    if(sysObj.incsysid){  
        openFrameAPI.openServiceNowForm({  
        entity: 'incident',  
        query: 'sys_id='+sysObj.incsysid,  
        'interaction_sys_id': sysObj.sysid  
       });  
    }else{  
        openFrameAPI.openServiceNowForm({  
        entity: 'incident',  
        query: 'sys_id=-1',  
        'interaction_sys_id': sysObj.sysid  
       });  
    }  
    window.localStorage.setItem("screenpopinteraction",JSON.stringify(sysObj));  
          
     
}  
```

### Results after the update

[Customizations for legacy versions](#Cisco%5FReference.dita%5Fd6601dd3-1f79-4646-985e-92d90341b0cd)

The following customizations apply to versions 1.0.5 and below. For the customizations for the newer versions 1.0.7 and above, follow the steps above.

### Customization # 1 - Add custom business rules for call flow use cases

**Create a new incident record for every call**

For every new call into the WebexCC CRM connector in ServiceNow, create a New Incident Record.

1. Search for Business Rules on the Filter navigator
2. Click New.

**Sample code for reference:**  
```  
function customcti() {  
            var url = null;  
            var name = sysparm_caller_name;  
            eid = sysparm_caller_id;  
            var phone = sysparm_caller_phone;  
            var taskID = sysparm_task_id;  
            var fQuery = sysparm_query;  
            if (fQuery == null)  
               fQuery = '';  
            var view = sysparm_view;  
            if (view == null || view == '')  
                view = "itil";  
   
            var userID = null;  
            if (eid != null && eid != '') {  
                userID = UserGetSysId("employee_number",eid);  
            }  
            if (userID == null && name != null && name != '') {  
                userID = UserGetSysId("name", name);  
            }  
            if (userID == null && phone != null && phone != '') {  
                userID = UserGetSysId("phone", phone);  
            }  
   
            if (userID != null) {  
                if (fQuery.length > 0)  
                    fQuery += "^";  
                fQuery += "caller_id=" + userID;  
            }  
            if (url == null) {  
                url = "incident.do?sys_id=-1";  
                if (fQuery != null)  
                   url += "&sysparm_query=" + fQuery;  
            }  
            answer = url;  
            return url;  
}  
   
function UserGetSysId(field, value) {  
  var user = new GlideRecord("sys_user");  
  user.addQuery(field, value);  
  user.query();  
  if (user.next())  
     return user.sys_id;  
  else  
     return null;  
}  
```

**Sample configuration of the business rule**
3. Enable Client callable

**Computer Telephony Integration (CTI) Processing For Incident** is marked as **True**.
4. Update the screenpop url with the custom CTI Rule **" [cti.do?sysparm\_cti\_rule=createIncident&sysparm\_caller\_phone=](http://cti.do/?sysparm%5Fcti%5Frule=createIncident&sysparm%5Fcaller%5Fphone=)"**
**Example**

The **sysparm\_cti\_rule=name** where '**name**' is the name of a **function** is to be invoked for **CTI Processing** rather than using the default script.

Define the function in a **sys\_script** entry marked **client callable**.

If you must insert, update, or delete any GlideRecord(s) in the function, call a separate nonclient callable function to perform the updates.

To make a script client-callable, you must check the client-callable check box on the form that displays when the sys\_script entry is displayed.

The client-callable check box doesn't show up by default. To view, you must modify the fields that show on the form using the gear icon and slush bucket mechanism.

**References**
- <https://docs.servicenow.com/en-US/bundle/tokyo-application-development/page/script/business-rules/concept/c%5FBusinessRules.html>
- <https://docs.servicenow.com/bundle/tokyo-platform-administration/page/integrate/incident/reference/r%5FComputerTelephonyIntegration.html>

### Customization # 2 - Add CAD variable in Webex Contact Center activity table

**Overview**

This article details the process to add an additional column to the ServiceNow table - webexcc\_activity that is created upon the installation of the Webex CC for ServiceNow CRM Connector.

By default, the table contains out-of-box system fields and values.

You can potentially create more business-specific variables (CAD Variables) inside the WebexCC Flow designer and add those CAD variables inside the ServiceNow **post call activity log**, and persist this to the **post call activity table** data.

- This is reference documentation only - and shows how to do this for a sample CAD variable called Customer Name that stores the customer name inside the IVR and posts this to ServiceNow.
- The partner+customer ServiceNow developers will configure and manage this configuration as it is a customization to the existing connector.
- Cisco will only provide the techniques on how to customize and extend the connector.
- As of this article, the Cisco team has validated support for the addition of CAD variable to the Activity Log and Activity Table using the technique described below.

**Add column to WebexCC activity**
1. Edit the table in the developer version of ServiceNow.
2. Go to the Studio \> Webex Contact Center.
3. Select WebexCC Activity table.
4. For example, CustomerName.
5. Select List Layout for WebexCC Activity.
**Create a new Script Includes**

This step is not required if you are using the Update Set XML - Only one line is required to be added "_webexcc.u\_customername=actInfo.CustomerName_" to propUtils.

**Sample script**

See the line with:**_webexcc.u\_customername=actInfo.CustomerName;_** with a supporting comment.

```
var propUtils2 = Class.create();
propUtils2.prototype = Object.extendsObject(global.AbstractAjaxProcessor,{
         getWebexccProp : function () {
           var webexccprop = {};
           webexccprop.instanceurl= 'https://'+gs.getProperty('instance_name')+'.service-now.com/';
           webexccprop.url=gs.getProperty('x_caci_webexcc.agentdesktop_url');
           webexccprop.popupurl=gs.getProperty('x_caci_webexcc.screenpop_url');
           return  JSON.stringify(webexccprop);
      
        },
        setWebexcctable : function () {
            var sys_id=0;
             
            var actInfo = JSON.parse(this.getParameter('actInfo'));
            var webexcc = new GlideRecordSecure(gs.getProperty('x_caci_webexcc.webexccactivitytable'));
            webexcc.addQuery("callobject", actInfo.CallObject);
            webexcc.query();
            if(!webexcc.next()) {
                webexcc.ani = actInfo.ani;
                webexcc.dnis =actInfo.dnis; 
                webexcc.queuename =actInfo.queuename;
                webexcc.wrapuptime =actInfo.wrapuptime;
                webexcc.callduration =actInfo.CallDurationInSeconds;
                webexcc.ringingtime =actInfo.ringingtime;
                webexcc.activitydate =actInfo.ActivityDate;
                webexcc.callobject =actInfo.CallObject;
                webexcc.calltype =actInfo.CallType;
                webexcc.calldisposition=actInfo.CallDisposition;
 
               // This line is Added - to capture it in the Activity Log
               webexcc.u_customername=actInfo.CustomerName;
 
                sys_id=webexcc.insert();
  
                // Activities on Incident record;
                var actInfoString =this.getParameter('actInfo');
                var suser = new GlideRecordSecure("sys_user");
                    suser.addQuery("phone", this.getParameter('ani'));
                    suser.query();
                    if(suser.next()) {
                    var inc = new GlideRecordSecure('incident');
                            inc.addQuery('caller_id', suser.sys_id);
                            inc.orderByDesc('sys_created_on');
                            inc.query();
                                if (inc.next()) {
                                    var jsonPretty = JSON.stringify(JSON.parse(acting string),null,2);  
                                    inc.comments =jsonPretty;
                                inc.update();
                                 }
                    } 
            }    
            return sys_id;
       },
 
    type: 'propUtils2'
});
```

**Edit the UI page with a new script name**

**Create a CAD variable in Flow designer**

**Add the CAD variable to the Desktop Layout**

**Demo screenshots**

View the newly added CAD variable in the WebexCC Activity table.

The CRM connector operates based on the version of the widget specified in the desktop layout JSON. It is extremely important to ensure the widget version within the Desktop Layout is kept updated.

Administrators are expected to ensure all desktop layouts for this CRM connector use this widget version. `If the layout is not updated to use the latest version, functionality will no longer be supported and may cease to work correctly.`

- Last ServiceNow update—ServiceNow\_Desktop\_0.1.0\_v5.0.3.json. As of March 2024, package version is 1.0.9
- Last XML update—webexcc-servicenow-update-setv7-1-ActionsWidget.xml, June 2024
