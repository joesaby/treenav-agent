---
title: "Bulk manage the Call pickup groups"
product: "Webex Calling"
article_id: "nag58uo"
url: "https://help.webex.com/en-us/article/nag58uo"
last_updated: "2025-08-05"
description: "Call pickup allows users to pick up incoming calls within their own group. You
can add and manage call pickup groups in bulk using a call pickup CSV."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Bulk manage the Call pickup groups

Here’s a list of specific fields and values needed for the CSV upload of Webex Calling call pickup groups.

## Known limitations and requirements

- Before uploading your call pickup CSV, make sure to read [Bulk provisioning Webex Calling elements using CSV](https://help.webex.com/en-US/article/nu0oia0/) to understand the CSV conventions.
- You can either export your current call pickup groups, which allows you to add, delete, or modify your existing data set, or you can export a sample set of call pickup groups. Once modified, you can upload the file through the bulk features.
- It’s important to know the mandatory and optional columns, and information that you need to provide when filling out the CSV template. The specific fields for the call pickup CSV are found in the following table.
- The maximum amount of rows is 1,000 (not including the header).  
Exporting more than 1000 records will export the data in a zip file format. The zip file contains a single CSV with all the data and multiple files less than 1000 records. The files less than 1000 records are generated for the administrators to quickly import any updates, as importing is limited to CSV of less than 1000 records.
- A call pickup group can have users and/or workspaces. These are referred to as agents. If you're adding or editing a user, enter the user’s email address. For workspaces, enter the workspace name.  
A user or workspace can only be assigned to one call pickup. A call pickup can only have users from the same location.
- Each row can hold a maximum of 50 agents. For more information, see _Add or edit more than 50 agents at a time_.

## Prepare your CSV

Use this table to see what fields are mandatory or optional, and what you need to determine when adding or editing the call pickup in bulk.

| Column                              | Mandatory or optional                                            | Description                                                                                                                                                                                                                                                                                   | Supported values                                                        |
| ----------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Name                                | Mandatory                                                        | Enter the name of the call pickup group. Call pickup group names within the same location need to be uniquely identifiable. If call pickup groups are in a different location, they can have the same name.                                                                                   | Example: San Jose Call Pickup Character length: 1—30                    |
| Location                            | Mandatory                                                        | Enter the location to assign this call pickup group.                                                                                                                                                                                                                                          | Example: San Jose Location must be on the Locations tab in Control Hub. |
| Agent Action                        | Optional\* \*If you specify any agents, this field is mandatory. | Enter **ADD** to add the agents you list in this row. Enter **REMOVE** to remove the agents you list in the row. Enter **REPLACE**to remove all previously entered agents and replace it with the agents you’re adding in this row only.                                                      | ADD, REMOVE, REPLACE                                                    |
| Agent1 ID, Agent2 ID… Agent50 ID    | Optional                                                         | Enter the agents that you’d like to assign to the call pickup group. Agents can be users or workspaces. For users, enter their email address. For workspaces, enter the workspace name.                                                                                                       | Example: test@example.com Character length: 1-161                       |
| Notification Type                   | Optional                                                         | For an incoming call on your call pickup group: Enter **NONE** not to receive any notification. Enter **AUDIO\_ONLY** to receive an audio notification. Enter **VISUAL\_ONLY** to receive a visual notification. Enter **AUDIO\_AND\_VISUAL** to receive both audio and visual notifications. | NONE, AUDIO\_ONLY, VISUAL\_ONLY, AUDIO\_AND\_VISUAL Default: NONE.      |
| Notification Delay Timer In Seconds | Optional                                                         | Specify the delay for an incoming call to be notified in your call pickup group. Enter an integer value in seconds.                                                                                                                                                                           | Example: 30 Range: 1—60\. Default: 6.                                   |

## Add or edit more than 50 agents at a time

Each row can hold a maximum of 50 agents. To add or edit more than 50 agents, using the CSV file, follow these steps.

| 1 | Enter the 50 agents that you’d like to add or edit on the first row for the call pickup you’re adding or editing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the next row, you only have to enter information in the following columns to add or edit additional agents: Name—Enter the same name as the row above to add or edit more agents. Location—Enter the same location as the row above to add or edit more agents. Agent Action—Enter ADD to add the agents you list in this row. Enter REMOVE to remove the agents you list in this row. If you enter REPLACE, you will remove all previously entered agents and replace with the agents you are adding in this row only. Agent1, Agent2, etc.—Enter the user’s email or workspace name that you’d like to add, remove, or replace. You can leave all other columns blank. |
| 3 | Continue to do this until you have added all of the agents you need to add or edit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Bulk add call pickup groups

To add call pickup groups in bulk, you’ll simply download and fill out a blank CSV template.

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/), go to Services, and choose Calling \> Features.                                                                                               |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to the Call Pickup card.                                                                                                                                                                                                  |
| 3 | Click on the Call Pick up card. On the Prefer to create Call Pick up in bulk message, click Open the bulk editor.                                                                                                            |
| 4 | The Manage Call Pickup window displays. Select a location for the call pickup group you'd like to add.                                                                                                                       |
| 5 | Click Download Data or Download .csv templateto verify that your CSV file is properly formatted, making sure to fill in the required information.                                                                            |
| 6 | Upload the CSV file by dragging and dropping or clicking Choose a file.                                                                                                                                                      |
| 7 | Click View Import history/Tasks to view the status of your CSV import and see whether you've encountered any errors. When successfully uploaded, you can click See Tasks Page for details to view the status of the changes. |

## Bulk edit call pickup groups

To modify call pickup groups in bulk, you’ll simply download the current CSV data and make the necessary changes to the spreadsheet.

| 1 | From the customer view in [https://admin.webex.com](https://admin.webex.com/), go to Services, and choose Calling \> Features.                                                                        |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to the Call Pickup card and click  Manage. From the Call Pickup window, click on Manage and select Bulk Manage from the drop-down list                                                             |
| 3 | The Manage Call Pickup window displays. Select a location for the call pickup group you’d like to modify.                                                                                             |
| 4 | Click Download data. If the data for the call pickup group you’ve selected exceeds the maximum (more than 10,000 rows for each CSV), you will receive a zipped file with multiple CSV files included. |
| 5 | Make the necessary changes to the spreadsheet.                                                                                                                                                        |
| 6 | Upload the modified CSV file by dragging and dropping or clicking Choose a file.                                                                                                                      |
| 7 | Click Upload. When successfully uploaded, you can click See Tasks Page for details to view the status of the changes.                                                                                 |
