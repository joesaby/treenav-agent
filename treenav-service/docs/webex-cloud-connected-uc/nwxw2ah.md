---
title: "Operations Dashboard"
product: "Webex Cloud-Connected UC"
article_id: "nwxw2ah"
url: "https://help.webex.com/en-us/article/nwxw2ah/Operations-Dashboard"
last_updated: "2025-07-29"
description: "The Operations Dashboard provides a view into the calls that happened in the
on-premises network for the past one hour and serves as a launch point for
Web-based Real Time Monitoring Tool (RTMT)."
tags: ["webex-cloud-connected-uc"]
source: "help.webex.com"
---

# Operations Dashboard

[View the Operations Dashboard](#task%5FF2A6F9C829AF1A7DA14CEB27246B733D)

The Operations Dashboard gives a near real time view of the calls that have happened on the on-premises network. It helps you to see if there are any issues and take corrective action.

Before you begin

- The CallManager service and Cisco AMC service must be running on at least one of the node in the cluster on-boarded to Cloud-Connected UC.
- You must enable Operational Metrics Service on the Service Management page for the desired cluster. For more information, see [Enable Cloud-Connected UC Services in Control Hub](https://help.webex.com/en-US/article/oh49ck/).

| From the customer view in [Control Hub](http://admin.webex.com/), go to Services \> Connected UC. On the Operations card, click Dashboard. A page appears showing call status and call quality for past 1 hour for all the clusters in the deployment. The number within parentheses next to Clusters indicates the total number of clusters in the deployment. You can choose a cluster from the cluster ribbon that is displayed at the top of the page to view information that is related to that cluster. |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### Key Performance Indices (KPIs)

The metrics pane at the top of the page shows the Key Performance Indicators (KPIs). These help you better understand the information shown on the Operations Dashboard.

The following table describes the KPIs.

| Field Title  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Poor Calls   | Count of the total poor calls and the percentage from the total calls in the past 1 hour. A call for which the SCSR value exceeds the long call and short call SCSR threshold is graded as a poor call. For more information, see [Unified CM Call Quality Grades](https://help.webex.com/en-US/article/nfeu3q7/Unified-CM-Call-Quality-Grades) . If you see an unusually high value of poor calls, it indicates that there could be network issues related to bandwidth, QoS settings, and so on. The percentage with the arrow symbol shown indicates the increase or decrease from the average that is recorded in the past 7 days. |
| Failed Calls | Count of the total failed calls and the percentage from the total calls in the past 1 hour. If the origination and termination cause code of a CDR are not one of these values—'0', '1', '2', '3', '16', '17','31','126','127','393216','458752','262144', then a call is graded as a failed call. If you see an unusually high value of failed calls, check the call failure report. The percentage with the arrow symbol shown indicates the increase or decrease from the average that is recorded in the past 7 days.                                                                                                              |

### Charts on the Dashboard

The following table describes the information that is displayed on the various charts.

It may take up to 10 minutes for the information about calls that have completed, to appear here. The refresh time on the charts is 1 minute.

| Card Title   | Description                                                                                                                                                                                                                                                                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Poor Calls   | This card displays a trend chart and data of all the poor calls from the past 1 hour. The drop-down list enables you to filter data and view information for either poor, acceptable, or good calls. By default, the chart displays data for poor calls. The legend on the chart indicates the clusters for which data is displayed.          |
| Failed Calls | This card displays a trend chart and data of all the failed calls from the past 1 hour. The drop-down list enables you to filter data and view information for either failed, dropped, or successful calls. By default, the chart displays data for failed calls. The legend on the chart indicates the clusters for which data is displayed. |

[Access Web RTMT and View the Overview Page](#task%5F9219E79191D6DC82AFBF31BBDF838779)

The web RTMT application enables you to monitor the real-time behavior of the Unified CM, IM and Presence, and Cisco Unity Connection clusters that you've on board.

Web RTMT supports the following Unified CM, IM and Presence, and Cisco Unity Connection versions:
- 11.5 SU9 and later
- 12.5 and later
- 14 and later

Before you begin

- The CallManager service and Cisco AMC service must be running at least one of the nodes in the cluster on board to Cloud-Connected UC.
- From Cisco Unified Communications Manager Administration, Under System \> Server, the servers needs to be configured using their FQDNs or hostnames.  
The **hostnames** can be used only if the Certificate installed on the CUCM cluster, has hostname as CommonName or one of the SAN entries.
- Enable an Operational Metrics service on the Service Management page. For more information, see [Enable Cloud-Connected UC Services in Control Hub](https://help.webex.com/en-US/article/oh49ck/).

| 1 | From the customer view in [Control Hub](http://admin.webex.com/), go to Services \> Connected UC. On the Operations card, click Dashboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the cluster name on the cluster block corresponding to the cluster for which you want to open web RTMT. To view the cluster-specific information, ensure that you connect to the VPN. On the prompt, enter your on-premises UC administration credentials. The web RTMT Overview page appears with the System, Voice/Video, and Device tabs shown. The System tab is chosen by default. Currently, Up to 200 devices are displayed in the Device Search page for a single node in the cluster. Graph View is the default setting for any chart. Click below the card title to toggle between the Graph View and Table View of a chart. If a cluster has more than five nodes, the Graph View of a chart shows data only for five servers. However, the Table View of a chart shows data for all the nodes. Data shown in the charts calculates for each 1-minute interval. The charts display a maximum of 60-minutes data. Click the Zoom icon at the top right of the card to open the Zoom view of a chart. In the Zoom view, you can see data for more than five nodes. |

System

### Alert Summary

The Alert Summary card gives a summary of all active alerts reported by all the nodes in a selected cluster. It shows the count of active alerts for each alert category. The card has the following tabs:

- System: Displays the distribution of all active preconfigured alerts in each category reported by the selected cluster.
- CallManager or Unity Connection: For a Unified CM cluster, this tab is titled CallManager and for a Cisco Unity Connection cluster this tab is titled Unity Connection.
- IM & P: Displays the distribution of all active IM and Presence Service alerts that are reported by the selected cluster.  
This tab is not applicable for a Cisco Unity Connection cluster.
- Custom: Displays the distribution of all active custom alerts that is reported by the selected cluster.

For more information about the previously mentioned alerts, refer to   _Cisco Unified Real-Time Monitoring Tool Administration Guide_ for your respective Unified CM release at:

<https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/products-maintenance-guides-list.html>

The Most Recent Active Alerts section lists the five most recent alerts. Click View All Alerts in the Most Recent Active Alerts section of the Alert Summary card to view information related to all the active alerts.

### System Metrics

This section of the Web RTMT Overview page consists of charts that enable you to monitor the health of the system. The following table describes the information that is displayed on the various charts.

The numbers displayed on these charts are in percentages (%).

| Card Title             | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Virtual Memory Usage   | This card displays a trend chart of the virtual memory usage for each node in the selected cluster.                                                                                                                                                                                                                                                                                           |
| CPU Usage              | This card displays a trend chart of the CPU usage for each node in the selected cluster.                                                                                                                                                                                                                                                                                                      |
| Common Partition Usage | This card displays a trend chart of the common partition usage for each node in the selected cluster. All log files are stored in the common partition. A high usage indicates that some processes are creating large log files. For example, if you’ve enabled debug logging during troubleshooting and forgotten to disable it after you’re done, the common partition usage would be high. |

### Database Metrics

This section of the Web RTMT Overview page consists of charts that provide active database connections and replication information about the node. These charts enable you to track the nodes related to the total number of active client connections, the number of replicates that have been created, and the status of the replication.

The following table describes the information that is displayed on the various charts.

| Card Title                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Total Number of Clients Connected | This card displays a trend chart of the total number of clients that are connected to the database for each node in the selected cluster. A steep rise or fall in this value indicates an issue on the node.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Replicates Created                | This card displays a trend chart of the number of replicates created of the database tables for each node in the selected cluster.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Replication Status                | This card displays a trend chart of the replication status of the database tables for each node in the selected cluster. The chart enables you to diagnose database replication issues. In the Table View, you can view one of the following values for the Replication Status of a node: INIT—Replication process is being set up. If replication is in this state for more than an hour, a setup failure might have occurred. INCORRECT—Setup is still in progress. GOOD—Logical connections are established and the tables are matched with the other servers on the cluster. SUSPECT—Logical connections are established but there is an unsurety whether the tables match. This issue can occur because the other servers are unsure whether there is an update to the User Facing Feature (UFF) that has not been passed from the subscriber to the other device in the cluster. FAILED—Server no longer has an active logical connection to receive any database table across the network. No replication occurs in this state. |

Voice/Video

### Call Activity

This section of the Web RTMT Overview page consists of charts that provide information about the call activity on the Cisco Unified Communications Manager such as completed calls, attempted calls, and calls in progress. This includes all servers in the cluster, if applicable.

The following table describes the information that is displayed on the various charts.

| Card Title                | Description                                                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Calls Completed           | This card displays a trend chart of the calls that are completed for each call processing node in the selected cluster. The chart shows the data for only successful calls.            |
| Calls Attempted           | This card displays a trend chart of the calls that are attempted for each call processing node in the selected cluster. The chart shows the data for both successful and failed calls. |
| Calls in Progress         | This card displays a trend chart of the calls that are in progress for each call processing node in the selected cluster.                                                              |
| Logical Partition Failure | This card displays a trend chart of the total logical partition failures for each node in the selected cluster.                                                                        |

### Gateway Activity

This section of the Web RTMT Overview page consists of charts that provide information about the gateway activity on the Cisco Unified Communications Manager, including active ports, ports in service, and calls completed. This includes all servers in the cluster, if applicable.

The following table describes the information that is displayed on the various charts.

You can view activity for a particular type of gateway using the drop-down list. The default is MGCP FXS gateway.

| Card Title       | Description                                                                                                                                                                                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Calls Completed  | This card displays a trend chart of the calls that are completed for each call processing node that are routed through the selected gateway type.                                                                                                                                                                |
| Ports Active     | This card displays a trend chart of the ports, of the selected gateway type, which are actively registered with each call processing node of the selected cluster. Ideally, the chart should display a flat line. Numerous variations in the chart indicate a network issue which in turn impacts gateway calls. |
| Ports in Service | This card displays a trend chart of the ports in service of the selected gatewayf type, which are actively registered with each call processing node of the selected cluster.                                                                                                                                    |

### Trunk Activity

This section of the Web RTMT Overview page consists of charts that provide information about the trunk activity on the Cisco Unified Communications Manager, including calls in progress and completed calls. This includes all servers in the cluster, if applicable.

The following table describes the information that is displayed on the various charts.

You can view activity for a particular type of trunk using the drop-down list. The default is trunk.

| Card Title        | Description                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Calls in Progress | This card displays a trend chart of the calls that are in progress for each call processing node that is routed through a trunk. |
| Calls Completed   | This card displays a trend chart of the calls that are completed for each call processing node that is routed through a trunk.   |

Devices

### Registered Device Summary

This section of the Web RTMT Overview page consists of charts that provide information about the number of registered phone devices, registered gateway devices, registered media resource devices, and registered other station devices.

The following table describes the information that is displayed on the various charts.

| Card Title             | Description                                                                                                                                                                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phone Devices          | This card displays a trend chart of the number of phone devices that are registered to each node in the selected cluster.                                                                                                                                        |
| Gateway Devices        | This card displays a trend chart of the number of gateway devices that are registered to each node in the selected cluster.                                                                                                                                      |
| Media Resource Devices | This card displays a trend chart of the number of media resource devices that are registered to each node in the selected cluster. Examples of media resource devices are transcoder, Music on Hold (MOH), Media Termination Point (MTP), and conference bridge. |
| Other Station Devices  | This card displays a trend chart of the number of other station devices that are registered to each node in the selected cluster.                                                                                                                                |

### Phone Summary

This section of the Web RTMT Overview page consists of charts that provide information about the number of registered phones, phones that are running SIP, phones that are running Skinny Client Control Protocol (SCCP), partially registered phones, and the number of failed registration attempts.

The following table describes the information that is displayed on the various charts.

| Card Title                   | Description                                                                                                                                                                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phone Devices                | This card displays a trend chart of the number of phones that are registered to each Unified CM server in the selected cluster.                                                                                                           |
| Registered SIP Devices       | This card displays a trend chart of the number of SIP phones that are registered to each Unified CM server in the selected cluster.                                                                                                       |
| Registered SCCP Phones       | This card displays a trend chart of the number of SCCP phones that are registered to each Unified CM server in the selected cluster.                                                                                                      |
| Partially Registered Phones  | This card displays a trend chart of the number of phones that are partially registered to each Unified CM server in the selected cluster. A partially registered phone is a SIP phone which only has some lines registered to the server. |
| Failed Registration Attempts | This card displays a trend chart of the number of failed registration attempts to each Unified CM server made by all the phones in the selected cluster.                                                                                  |

[View the Web RTMT Alert Central Page](#task%5F1113DFDC4EB529A1A2155F44447FC67A)

The Alert Central page shows the active alerts in the system and alert history as well as enables you to configure alert properties and define an email group for alert notification. 

| 1 | From the customer view in [Control Hub](http://admin.webex.com/), go to Services \> Connected UC. On the Operations card, click Dashboard.                                                                            |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the cluster name on the cluster block corresponding to the cluster for which you want to launch Web RTMT. The Web RTMT Overview page appears.                                                                   |
| 3 | Do one of the following: Click View All Alerts in the Most Recent Active Alerts section of the Alert Summarycard.Click Alert Central next to the Overview tab. The Alert Central page appears showing the Active tab. |

### Active

Based on your selection, the Active tab shows the details of the alerts.

You can see the following information on the Active tab:

- Last Alert Raised
- Alert Name
- Severity
- Group
- In Safe Range
- System Cleared

### History

The History tab in Alert Central displays the list of all alerts that the system has generated in the last 30 minutes. This tab has the following columns:

- Time: Time when the alert was raised in the system.
- Alert Name: Name of the alert.
- Description: Detailed description about the alert.
- Severity: Severity of the alert.
- Group: Category of alert. Values are System, Custom, CallManager, IM&P, and Unity Connection.
- Node: Unified CM server on which the alert was seen. For a cluster-wide event, this column displays the cluster name.
- Role: Server type information. For example, CUCM IM and Presence, or CUCM Voice/Video.
- Email: Email recipients to whom alerts are sent from the Alert Central.

### Settings

You can enable or disable preconfigured and custom alerts using the Settings tab in Alert Central. This tab has the following columns:

- Alert Name: Name of the alert.
- Email Group: A group of admins to be notified when alerts occur.
- Status: Can have one of the following values:

  - Enabled
  - Disabled
- Group: Category of alert. Values are System, Custom, CallManager, IM&P, and Unity Connection.

Click on an alert in the Settings tab to get the side panel to view the current settings and modify settings of an alert, if needed.

### Email Group

The Email Group tab in Alert Centraldisplays the list of all email groups to which alert notifications are sent. This tab has the following columns:

- Email Group Name\- Name of the email group.
- Emails\- Email ID to which a notification is sent whenever an alert is raised.
- Description\- Detailed description about the email group.
- Associated Alerts\- Alerts associated with an email group.

### Configure New Email Group

| 1 | On the Alert Central Page, click Email Group tab.                                                                    |
| - | -------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Add.                                                                                                           |
| 3 | In the Email Group Name field, enter a name for the email group.                                                     |
| 4 | In the Emails field, enter all the email IDs belonging to that group.                                                |
| 5 | In the Description field, enter a description for the email group.                                                   |
| 6 | From the Alerts to associate drop-down list, select alerts that need to be associated with the group and click Save. |

### Filter the Alerts Displayed on the Alert Central Page

This procedure is not applicable to the Email Group tab.

| 1 | (Optional) To filter the list based on Alert Name, check the corresponding check box.                                                                |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | (Optional) To filter the list based on Severity, check the corresponding check box. This is not applicable to the Settings tab.                      |
| 3 | (Optional) To filter the list based on the Group, check the corresponding check box.                                                                 |
| 4 | (Optional) To filter the list based on the value of the In Safe Range, check the corresponding check box. This is only applicable to the Active tab. |

### Edit Alert Central Settings

On the Settings tab of the Alert Centralpage, you can enable, disable, reset, delete, or suspend an alert. 

| 1 | To disable an alert, check the corresponding check box, and click Disable.                                                                                     |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | (Optional) To enable a previously-disabled alert, check the corresponding check box, and click Enable.                                                         |
| 3 | (Optional) To reset an alert, check the corresponding check box, and click Reset. This takes the alert settings to the default value.                          |
| 4 | (Optional) To delete an alert, check the corresponding check box, and click Delete.                                                                            |
| 5 | (Optional) To suspend an alert, check the corresponding check box, and click Suspend. You can suspend all alerts for a cluster or a set of nodes in a cluster. |

### Export Alerts

| 1 | Launch the Alert Central page. Depending on the tab that you're in, you can either export the active alerts, alert history, or alert configuration. |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Export.                                                                                                                                       |
| 3 | In the Export page that opens, select the File Type as either PDF or CSV based on your requirement.                                                 |
| 4 | Click Download.                                                                                                                                     |

[View the Web RTMT Performance Page](#task%5FA3E3688FB0AAF242CF3CED3F77665DB1)

Cisco Unified Communications Manager, Cisco Unified Communications Manager IM and Presence Service, and Cisco Unity Connection directly update performance counters (called Perfmon counters). The counters contain simple, useful information about the system and devices on the system, such as number of registered phones, number of active calls, number of available conference bridge resources, and voice messaging port usage.

You can monitor the performance of the components of the system and the components for the application on the system by choosing the counters for any object by using the Web RTMT tool.

| 1 | From the customer view in [Control Hub](http://admin.webex.com/), go to Services Connected UC. On the Operationscard, click Dashboard.                                                                                                                                                                                                                                                                                                                                   |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | Click the cluster name on the cluster block corresponding to the cluster for which you want to view the details. The Web RTMT Overview page appears by default.                                                                                                                                                                                                                                                                                                          |
| 3 | Click the Performance tab. For more information about the fields displayed on this page, see [Details of Performance Page](#reference%5F28B66205224EDB3C7E88554F65E58A27).                                                                                                                                                                                                                                                                                               |
| 4 | (Optional) To add a new dashboard: Click Add New. Enter a name for the dashboard in the Add Dashboard window. Click Create Now. A message confirms the successful creation of the dashboard. You can create a maximum of five dashboards.                                                                                                                                                                                                                                |
| 5 | (Optional) To delete a dashboard, click the title of the dashboard, and then click Delete dashboard.                                                                                                                                                                                                                                                                                                                                                                     |
| 6 | To view the performance details of an existing dashboard, click its title.                                                                                                                                                                                                                                                                                                                                                                                               |
| 7 | To add a counter: From the Servers drop-down list, select one or more servers. From the Categories drop-down list, select a category. From the Counters drop-down list, select a counter. From the Instances drop-down list, select an instance. You can select a maximum of 15 counters and add them to each dashboard. After you select a counter, a card corresponding to it gets added to the dashboard. You can drag cards across the dashboard and rearrange them. |

### Details of Performance Page

The following table describes the fields that are available on the Performance page.

| Field Name | Description                                                                                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Servers    | Name of the Unified CM, and IM and Presence, and Cisco Unity Connection server.                                                                                                                    |
| Categories | Allows you to choose category of perfmon objects in RTMT, such as performance monitoring counters.                                                                                                 |
| Counters   | Allows you to choose counters that belong to a category. When a node is removed from the counter, the changes are reflected only after 1 hour. Until then, the node is displayed without any data. |
| Instances  | Allows you to choose a particular instance of a counter.                                                                                                                                           |

[View the Web RTMT Trace and Log Tab](#task%5F2353CB2BEB57D795A0BAA2B6CE0CF259)

The Trace and Log Web tab of the RTMT page enables you to collect logs either on demand or per a set schedule.

If the Unified CM cluster Cisco Tomcat is self-signed or signed by a private Certificate Authority unknown to the browser, you must ensure that the Certificate Authority is installed and added as a trusted authority on the browser and the client machine.

We recommend that you import the certificates before using the trace and log central option. If you do not import the certificates, the Trace/Log option displays a security certificate for the nodes each time that you sign in to the Web RTMT application and access the Trace/Log option. You cannot change any data that displays for the certificate.

| 1 | From the customer view in [Control Hub](http://admin.webex.com/), go to Services Connected UC. On the Operationscard, click Dashboard.                                                                                                                                                                        |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the cluster name on the cluster block corresponding to the cluster for which you want to view the details. The Web RTMT Overview page appears by default.                                                                                                                                               |
| 3 | Click the Trace/Log tab.                                                                                                                                                                                                                                                                                      |
| 4 | (Optional) To collect the service log files, click the Service Logs tab. By default, Collect Files option is selected.                                                                                                                                                                                        |
| 5 | (Optional) To collect the crash dumps, select Collect Crash Dumps.                                                                                                                                                                                                                                            |
| 6 | (Optional) To collect the system log files, click the System Logs tab. Choose one of the following options: Select Collect Install Logs to collect install logs.From the Select Server Option, select the server for which you want to collect the install log files.Select Audit Logs to collect audit logs. |
| 7 | (Optional) To view a list of jobs scheduled for log collection, click the Job Status tab. You can cancel pending log collection jobs from this tab.                                                                                                                                                           |

[View the Web RTMT Device Search Page](#task%5F16FCA2799460E2E95A42FF29C4DBC1EC)

The Device Search allows you to search for phones and devices in a cluster using various filters.

The table displays a maximum of 3200 rows.

| 1 | From the customer view in [Control Hub](http://admin.webex.com/), go to Services Connected UC. On the Operationscard, click Dashboard.                                                                                           |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click the cluster name on the cluster block corresponding to the cluster for which you want to view the details. The Web RTMT Device Search page appears.                                                                        |
| 3 | From the Device Search drop-down list, select a device type.                                                                                                                                                                     |
| 4 | From the Search By drop-down list, select a value.                                                                                                                                                                               |
| 5 | To filter data, select one or more of the Additional Filters. For more information about the fields displayed on the Device Search page, see [Details of the Device Search Page](#reference%5F1A656873D70B5F9CF57A154191BE34D7). |
| 6 | Click Search. The list of devices that match the search criteria are listed.                                                                                                                                                     |

### Details of the Device Search Page

#### Device Search

The Device Search drop-down comprises the following items on which you can search:

- Phone
- Gateway Devices
- H323 Devices
- CTI Devices
- Voicemail Devices
- Media Resources
- SIP Trunk

Based on your selection, the Specific Device Model field that is described in the table below gets populated.

#### Search By

The Search By drop-down comprises the following items on which you can search:

- Any Name/Address
- Device Name
- Device Description
- IP Address
- IP Subnet
- IPv6 address
- Directory Number

#### Additional Filters

The following table describes the additional filters that you can use to filter out information on this page when you select Phone from the Device Search drop-down list.

The additional filters that are available change based on the selection that you make from the Device Search drop-down list.

| Field Name                   | Description                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Device Status                | Number of registered phones, gateways, and trunks per each node and overall cluster (if applicable). The available values are: Registered Unregistered Partially Registered Rejected Any Status Device only Configured in Database                                                                                                                                          |
| Call Manager                 | Filters out the data based on the name of the Cisco Unified Communications Manager on which the device has been configured.                                                                                                                                                                                                                                                 |
| Download Status              | Filters out the data based on the status of the downloaded data. The available values are: Any Successful Downloading Failed                                                                                                                                                                                                                                                |
| Specific Device Model        | This drop-down list shows the various models of a phone, gateway device, trunk device, media resource device, and so on, based on what you select from the Device Search drop-down list.                                                                                                                                                                                    |
| Monitor following attributes | You can select one or all the check boxes for the attributes that you want to monitor. The list of attributes that you can select are as follows: Name Node IP address IPv6 address LoginUserId Time Stamp ActiveLoadId RequestedLoadId DownloadFailureReason Status Directory Number Description Model Status Reason Protocol InactiveLoadId DownloadStatus DownloadServer |

Export Device Search

### Export Device Search

| 1 | Launch the Web RTMT Device Search page. For more information, see [View the Web RTMT Device Search Page](#task%5F16FCA2799460E2E95A42FF29C4DBC1EC).                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | From the Device Search drop-down list, select a device type.                                                                                                                                                                     |
| 3 | From the Search By drop-down list, select a value.                                                                                                                                                                               |
| 4 | To filter data, select one or more of the Additional Filters. For more information about the fields displayed on the Device Search page, see [Details of the Device Search Page](#reference%5F1A656873D70B5F9CF57A154191BE34D7). |
| 5 | Click Search. The list of devices that match the search criteria are listed.                                                                                                                                                     |
| 6 | Click Export.                                                                                                                                                                                                                    |
| 7 | On the Export page, choose the File Type by selecting either PDF or CSV.                                                                                                                                                         |
