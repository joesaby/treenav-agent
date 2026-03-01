---
title: "Hands-on Lab Administration"
product: "Webex Training"
article_id: "idk5my"
url: "https://help.webex.com/en-us/article/idk5my/Hands-on-Lab-Administration"
last_updated: "2024-09-21"
description: "You can use Webex Hands-on Lab Administration to set up and maintain the labs
and computers for Hands-on Lab sessions."
tags: ["webex-training", "webex-support"]
source: "help.webex.com"
---

# Hands-on Lab Administration

## Hands-on Lab Administration

With Hands-on Lab Administration you can:

- Create new labs
- Edit existing labs
- Delete labs
- View lab schedules
- Set up lab computers for Hands-on Lab sessions
- Move computers to other labs
- Remove computers from a lab
- Connect to available lab computers
- Disconnect from lab computers that are in session
- View a computer's status
- Generate Hands-on Lab usage reports

## Logging In

To sign in to Hands-on Lab administration, you must be a user with lab administration privileges. If you have questions about user accounts, contact your Cisco Webex Training site administrator.

| 1 | Go to your Hands-on Lab administration website. The URL for your site is in the following format, where your\_company is the brand name for your Webex Training site.  http://your\_company.webex.com/your\_company/labadmin.php If you see the Not a lab admin user error, contact your system Administrator. System Administrators can assign lab administration privileges: [Control Hub](https://help.webex.com/en-us/nbqlzeu/Manage-Webex-Meetings-Users-in-Cisco-Webex-Control-Hub) [Site Administration](https://help.webex.com/en-us/nfyyg60/Manage-User-Account-Privileges-in-Cisco-Webex-Site-Administration) |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Login page, enter your username in the Username box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3 | Enter your password in the Password box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4 | Click Login.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Logging Out

| 1 | On the navigation bar, click Log out.     |
| - | ----------------------------------------- |
| 2 | In the dialog box that appears, click OK. |

## About the Manage Labs Page

The Manage Labs page appears when you click Manage Labs on the navigation bar. This page lists all existing labs. You can create a new lab, or select an existing lab to modify or delete. You can also view the schedule for a selected lab.

The following table lists the columns that appear on the page and provides a description for each column.

__Table 1\. Manage Labs Page__
| Column               | Description                                                                                                                                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lab Name             | The name of the lab (set by the lab administrator)  Training Manager automatically creates a lab called the Maintenance Room. Use this lab to store lab computers that require maintenance or repair. You cannot delete or modify the Maintenance Room. |
| Description          | A description of the lab (set by the lab administrator)                                                                                                                                                                                                 |
| Total Computers      | The number of computers that exist in a lab                                                                                                                                                                                                             |
| Computers in Session | The number of computers in a lab, in active sessions                                                                                                                                                                                                    |
| Lab Schedule         | Corresponding links to the schedule for each lab                                                                                                                                                                                                        |

## Creating a New Lab

To set up Hands-on Lab, you must first create a lab in which the Hands-on Lab computers will reside. After you create a new lab, the training session host can select it for conducting a Hands-on Lab session. The new lab appears on the Hands-on Lab page when the host clicks Hands-on Lab on the navigation bar of your Webex Training site.

| 1 | Log in to your Hands-on Lab administration website.                                                                                               |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the navigation bar, click Manage Labs.                                                                                                         |
| 3 | On the Manage Labs page, click Create New Lab.                                                                                                    |
| 4 | On the Create New Lab page, in the Lab Namebox, enter a name for the new lab.                                                                     |
| 5 | (Optional) In the Lab Descriptionbox, enter a description for the lab.  The description appears on the Manage Labs page and the Lab Details page. |
| 6 | Click Add.                                                                                                                                        |

## Editing a Lab

 After you create a new lab, you can edit its name or description.

 You cannot modify the Maintenance Room lab.

| 1 | On the navigation bar, click Manage Labs.                                                                              |
| - | ---------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Manage Labs page, check the check box beside the name of the lab that you want to edit.                         |
| 3 | Click Edit Lab.                                                                                                        |
| 4 | To change the name of the lab, on the Edit Lab page, enter a new name in the Lab Name box.                             |
| 5 | To add or change the description of the lab, on the Edit Lab page, enter a new description in the Lab Description box. |
| 6 | Click Update.                                                                                                          |

## Deleting a Lab

After you delete a lab, the lab is no longer available for conducting a Hands-on Lab session

 You cannot delete the Maintenance Room lab.

Before you begin

Delete all computers from the lab that you want to delete.

| 1 | On the navigation bar, click Manage Labs.                                                                                                                                                         |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Check the check box beside the name of the lab that you want to delete.                                                                                                                           |
| 3 | Click Delete Lab.  If there are computers in the lab that you want to delete, an error message appears to remind you to remove the computers first. Otherwise, a confirmation dialog box appears. |
| 4 | In the confirmation dialog box, click OK.                                                                                                                                                         |

## Viewing Lab Schedules

With lab schedules you can keep track of which labs and computers are reserved for training sessions.

| 1 | On the navigation bar, click Manage Labs.                                                                                                                                  |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Next to the lab that you want to view, click View Schedule. To view a lab schedule from the Lab Details page, click the name of the lab, and then click the calendar icon. |
| 3 | On the Lab Schedule page, point to a time slot to view details of the lab schedule.                                                                                        |
| 4 | When you are finished, click Close.                                                                                                                                        |

## Managing Lab Computers

With Hands-on Lab, you can perform the following management tasks for lab computers:

- Set up computers in labs
- Move computers to a lab
- Remove computers from a lab
- Connect to or disconnect from a computer
- View a computer's status

## System Requirements for Local and Remote Computers

With Webex Access Anywhere, you can remotely access a computer by using another computer, which is connected to the Internet. Install the Access Anywhere Agent on each computer that is in the Hands-on Lab, and on any computer that you use to access the lab.

Before you set up a computer for Access Anywhere, ensure that each remote computer and local computer meets the minimum [Webex Meetings Suite System Requirements](https://help.webex.com/nki3xrq/).

## Setting up a Computer for Hands-on Lab

Install Access Anywhere Agent to set up a computer. After you set up a computer in a lab, you don't need to log on as an administrator to use Access Anywhere.

A computer can belong to only one lab. If you have already set up a computer in one lab, and then you set up the same computer in a second lab, the computer moves from the first lab to the second lab.

Before you begin

- You have already created the lab, in which you want to set up the computer.
- If Access Anywhere Agent is already installed on the computer that you want to set up, uninstall Access Anywhere Agent and restart the computer.

| 1 | On the navigation bar, click Manage Labs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Manage Labs page, click the name of the lab in which you want to set up the computer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3 | On the Lab Details  page, click Set Up Computer. If Access Anywhere Agent is already installed on the computer, setup prompts you to uninstall it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4 | To continue with the installation, click Next. If you see a prompt to uninstall an existing installation of Access Anywhere Agent, click OK to exit setup. After you uninstall the previous installation of Access Anywhere, begin this procedure again from step 1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 5 | Follow the Webex Access Anywhere Setup Wizard prompts; provide information and set options on the following screens: Section Description Account Information  Specify a nickname name for the computer, and then enter the password that you use to log in to your Webex Training site. Options Set the options that you want to take effect when you access the computer remotely. You can change any of these options when you are using Access Anywhere. If you are unsure which options to select, accept the default settings. Applications  Select the specific applications that you want to access on the remote computer. Alternatively, you can choose to access the entire desktop of the remote computer. Authentication Set the security options that you want to use when accessing the computer remotely. You can choose one of these methods: Access code authentication, in which you enter an access code on a Web page. Phone authentication, in which you receive a phone call at a phone number that you specify, and then key in a pass code. |
| 6 | Click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 7 | On the Setup Complete screen, click Finish to install the agent on your computer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Viewing a Computer's Status

The Lab Details page displays the list of computers set up for that specific lab.

| 1 | On the navigation bar, click Manage Labs.                                                                                                |
| - | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Manage Labs page, click the lab name.                                                                                             |
| 3 | On the Lab Details page, locate the computer for which you want to check the status. The computer's status appears in the Status column. |

## Computer Status Descriptions

| Status     | Description                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| Available  | The computer is available for connection. Click Connect to control the Hands-on Lab computer.                 |
| In Session | The computer is currently being used in a Hands-on Lab session. Click In Session to view the session details. |
| Offline    | The computer is not connected and is not available.                                                           |
| Blocked    | The computer is blocked and is not available for connection.                                                  |

## Moving a Computer

You can move a computer to a different lab if the computer is not in session or reserved. To prevent a computer from being reserved, move the computer to the Maintenance Room. The Maintenance Room is a storage area for computers that require repair, upgrade, or other maintenance.

After you move a computer, it appears in the list of computers in the new lab.

| 1 | On the navigation bar, click Manage Labs.                                                                                 |
| - | ------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Manage Labs page, click the name of the lab from which you want to move a computer.                                |
| 3 | On the Lab Details page, check the check box beside the name of the computer that you want to move.                       |
| 4 | Click Move To.                                                                                                            |
| 5 | In the Move Computers dialog box, from the Move To drop-down list, select the lab to which you want to move the computer. |
| 6 | Click OK to move the computer to the new lab.                                                                             |

## Removing a Computer from a Lab

You can remove a computer that has an Available status from a lab at any time. After you remove a computer, it no longer appears on the Hands-on Lab page and is no longer available for a Hands-on Lab session.

You cannot remove a computer that is reserved or that has an In Session status.

| 1 | On the navigation bar, click Manage Labs.                                                              |
| - | ------------------------------------------------------------------------------------------------------ |
| 2 | On the Manage Labs page, click the link to the lab containing the computer that you want to remove.    |
| 3 | On the Lab Details page, check the check box beside the name of each computer that you want to remove. |
| 4 | Click Remove.                                                                                          |
| 5 | Click OK to confirm that you want to remove the computer or computers.                                 |

## Connecting to an Available Computer

You can connect to and control available computers from the Manage Labs page. When you connect to an available computer, you cannot use it to conduct a Hands-on Lab session.

| 1 | On the navigation bar, click Manage Labs.                                               |
| - | --------------------------------------------------------------------------------------- |
| 2 | On the Manage Labs page, click the name of the lab that contains the computer.          |
| 3 | On the Lab Details page, click Connect beside the computer that you want to connect to. |

## Disconnecting a Computer

You can disconnect computers with the In Session status. Disconnecting a computer ends the Access Anywhere session and changes the computer's status to Available. You can then use it for a Hands-on Lab session.

| 1 | On the navigation bar, click Manage Labs.                                                  |
| - | ------------------------------------------------------------------------------------------ |
| 2 | On the Manage Labs page, click the name of the lab that contains the computer.             |
| 3 | On the Lab Details page, click Disconnect beside the computer that you want to disconnect. |

## Generate a Hands-on Lab Usage Report

You can generate and view Hands-on Lab usage reports for the past three months, if this option is available for your Hands-on Lab site.

Before you begin

The Super Administrator must enable the Hands-on Lab report option; otherwise the Reports link does not appear.

| 1 | On the navigation bar, click Reports.                                                                                         |
| - | ----------------------------------------------------------------------------------------------------------------------------- |
| 2 | From the Select lab drop-down list, select the lab for which you want to generate the report.                                 |
| 3 | In the From and To drop-down lists, select the start and end date for the period for which you want to view the usage report. |
| 4 | In the Sort Results By drop-down list, select how you want to sort the search results.                                        |
| 5 | Select Display Report.                                                                                                        |

## Typical Contents of a Hands-on Lab Usage Report

The following information typically appears in a Hands-on Lab usage report. You can sort the information by clicking the column headings.

__Table 2\. Report Contents__
| Column            | Description                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Lab               | The name of the lab where the computer resides                                                                              |
| User Name         | The Webex User ID                                                                                                           |
| Full Name         | The full name of the user                                                                                                   |
| Computer Name     | The name of the remote computer                                                                                             |
| Status Change     | The status changes of the remote computer during the selected period (Available, In Session, Blocked, or Offline)           |
| Change At         | The time at which the status changed                                                                                        |
| Duration          | The duration that the computer remained in this status                                                                      |
| Client IP Address | IP address of the client computer—that is, the computer connected to the remote computer (only valid for In Session status) |
