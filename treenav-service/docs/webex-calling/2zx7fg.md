---
title: "Validate Cisco Local Gateway configuration through Control Hub"
product: "Webex Calling"
article_id: "2zx7fg"
url: "https://help.webex.com/en-us/article/2zx7fg/Validate-Cisco-Local-Gateway-Configuration-through-Control-Hub"
last_updated: "2025-09-23"
description: "After enrolling your managed gateway device to the Webex Control Hub and
assigning a local gateway service, use the Config Validation option available in
Control Hub to validate your configuration."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Validate Cisco Local Gateway configuration through Control Hub

[Overview](#Cisco%5FConcept.dita%5F7aa7a207-3b4f-4dc2-af8a-3f4de4a77116)

As a Webex Calling administrator, one of your key requirements is to configure your local gateways. The Config Validation option available in the Control Hub lets you validate your configuration. It identifies any misconfigurations and provides guidance on corrections, before they cause issues for your users. Using this Config Validation, you can revalidate your configuration until it's error free.

- To perform this Config Validation, it's mandatory that you enroll your managed gateway with Control Hub and assign Local Gateway as a service.
- Supports Config Validation only for Registration-Based local gateways.

[Validate your Cisco Local Gateway configuration](#Cisco%5FTask.dita%5F173f7e71-71ca-44b7-86d7-09b6c816ab8f)

Perform the following steps to validate the configuration of your Cisco Local Gateway:

| 1 | In the gateway summary page, click Validate in the Config Validation section to start the validation. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469560.jpg) A message is displayed to confirm that the validation is in progress. The gateway card also displays the details of your request.                                                                                             |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click Refresh to display the latest status of your validation. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469549.jpg) You can request a new validation only after an ongoing validation is complete.                                                                                                                                                                                       |
| 3 | If the validation is successful, the options Validateand View results are displayed. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469550.jpg)                                                                                                                                                                                                                                                |
| 4 | Click View results to display the configuration in the Validated Configuration page and verify if there are any misconfigurations. For more information, see [Know your configuration validation results](#Cisco%5FConcept.dita%5Fae7d3a06-c70a-4b28-989d-a1f534b31d2c). Configuration validation results are stored for two years. However, the gateway configuration data is removed from the platform that runs the validation application after 8 hours. |
| 5 | Click Close to exit the Validated Configuration page. The gateway summary page displays. You can access the results of config validation during the data retention period. However, you'll not be able to View results post this period. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469562.jpg)                                                                                            |
| 6 | If the validation is unsuccessful, click Validate to retry validation of your configuration. You can View results only when the validation request is successful. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/460001-470000/469001-470000/469561.jpg) You can revalidate your gateway configuration using Validate, irrespective of whether the previous validation is successful or not.                               |

[Know your configuration validation results](#Cisco%5FConcept.dita%5Fae7d3a06-c70a-4b28-989d-a1f534b31d2c)

Once you click Validate, your gateway configuration is validated against a recommended configuration to analyze if there are any issues. To achieve this, each section of the configuration is validated individually, and their validation results are displayed likewise.

Following are the different sections of configurations that are being validated currently:

- voice class tenant used to register with Webex Calling cloud
- voice class sip-profile associated with the tenant
- voice service voip
- sip-ua
- Global configuration for name-server and crypto pki trustpoint configuration
- Webex Calling dial-peers—inbound and outbound dial peers towards Webex Calling  
Only dial-peer configurations on the Webex Calling side are validated. The complete dial-plan, PSTN, and dial-peer configurations on the local PBX side aren’t validated.

For example, your configuration could have a voice sip profile, sip-ua, or voice class tenant section. Each of these configurations is analyzed as separate sections and their corresponding results are displayed separately. Also, details such as report date, total number of sections that are validated, and total number of sections with issues are displayed in the page.

The following statuses are displayed as part of your validation result:

- No issues found—The configuration section that you have validated is valid and can be used as is.
- Missing—There are gaps or missing steps in the configuration that you have validated. Revalidate your configuration after addressing the gaps.
- Misconfigured—There are errors in the configuration that you have validated. Revalidate your configuration after fixing the errors.
- Ordering—The configuration that you have validated has all the steps. However, the order in which you have run them isn’t recommended. Revalidate your configuration after reordering the configuration steps.

Irrespective of whether your configurations are accurate or not, it provides a reference configuration for each of the validated sections. You can refer to the same to update your configuration. 

Also, provides a Copy option against each of the valid configuration sections. This lets you copy these configurations into your clipboard. 

Use Webex Calling configuration as the reference for configuration validation and recommendations. The configurations aren’t validated based on Unified Communications Manager or PSTN trunking configurations.

[Troubleshoot](#troubleshoot-your-configuration)

If your Config Validation fails, you can perform the following as an administrator:

- Refer to the Events History page in Control Hub to get a summary of issues with connectors.
- Navigate to the on-premises connector management page (https://<connector ip address>) to ensure that management and telemetry connectors are in Running and Connected state. For more information about connector states, see [Gateway Connector States](https://help.webex.com/en-us/article/xftgfc/Enroll-Cisco-IOS-Managed-Gateways-to-Webex-Cloud#Cisco%5FConcept.dita%5Fd4821402-8cfe-4d5f-9229-4cfa9388dacd).
- On the gateway device, ensure that the NETCONF session is active using the command show netconf-yang sessions. The following is a sample for an active NETCONF session.  
```  
Router#show netconf-yang sessions  
Number of sessions : 1  
session-id  transport    username             source-host            global-lock  
--------------------------------------------------------------------------------  
32          netconf-ssh  lab                  10.65.125.133          None  
Router#  
```  
If the NETCONF session isn't active, ensure that the gateway credentials (username and password) are the same as that you have configured during connector installation. If gateway credentials are modified, run the TCL script. Select `v : View and Modify Cloud Connector Settings` followed by `c : Update Gateway Credentials` to configure your modified credentials.
- If the issues still persist, get in touch with the Cisco TAC support team. Collect and share the following:

  - Tracking ID details of the failed Config Validation request from Control Hub. Alternatively, you can use the command copy debug info to collect the ID details.
  - Logs from the connectors Run the TCL script and select.`l : Collect Logs`
