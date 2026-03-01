---
title: "Manage a Customer's Computer in Webex Support"
product: "Webex Support"
article_id: "n4fthy8"
url: "https://help.webex.com/en-us/article/n4fthy8/Manage-a-Customer-s-Computer-in-Cisco-Webex-Support"
last_updated: "2024-09-21"
description: "After you are able to access a customer&#x27;s computer and view the system
information, you can determine what is to be done. You can create or run a
script during a session if you recognize what the issue is."
tags: ["webex-support"]
source: "help.webex.com"
---

# Manage a Customer's Computer in Webex Support

## View a Customer's System Information

During a support session, with the customer's permission, you can view detailed information about your customer's computer. This information can help you to diagnose and repair the customer's computer. If you or your customer change the system, you can restart the customer's computer remotely, and then view the changes to the system information.

Once you display information about a customer's computer, you can either print it or save it to a file.

| 1 | Do one of the following: On the CSR dashboard, under Customer Information, select System Information. On the icon tray, select Customer System Information. In the multisession window, select the System Information tab for the customer. The customer is asked for permission to view the system information. After the customer grants permission, the System Information window appears. |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | (Optional) In the list on the left, select a category to view a panel that contains the corresponding information.                                                                                                                                                                                                                                                                            |
| 3 | (Optional) To view the latest system information, select Refresh.                                                                                                                                                                                                                                                                                                                             |

## View a List of Available Scripts

A custom script is a script that you or another CSR can create to run on a customer's computer. Such a script, once created, is often useful in other support sessions.

You can create such frequently used scripts and then store them in the Custom Scripts Library for selection and upload, as required, during a support session. 

| 1 | Sign in to your Webex Support site.                                                                                                                                                             |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the left navigation bar, select Scripts Library. You can create, modify, publish, or delete customer scripts from the Custom Scripts Library. Select any column heading to sort the scripts. |

### Create and Publish a Custom Script

You can edit or delete any custom script that you create. 

| 1 | Select Add New Script.                                                                                                                                                                                                            |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | For Script Name, enter a unique name.                                                                                                                                                                                             |
| 3 | Choose a category. Your site administrator creates categories.                                                                                                                                                                    |
| 4 | (Optional) Enter a description to clarify the purpose of the script.                                                                                                                                                              |
| 5 | If you want to have this script available to yourself and other CSRs during support sessions, select Publish to Script Library.                                                                                                   |
| 6 | Select Browse to navigate to the script execution file.                                                                                                                                                                           |
| 7 | If another script is required as input to the execution script, select Browse.                                                                                                                                                    |
| 8 | Select Submit or OK. If the script contains errors, for example, if the script name exists, you can correct the errors. Once the script is successfully submitted, the new script is created and displayed in the Script Library. |

### Modify or Delete a Custom Script

| 1 | Log in to your Webex Support site.                                                                                                                                                                                                                                                                                      |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the left navigation bar, select Scripts Library.                                                                                                                                                                                                                                                                     |
| 3 | Under the Actions column, select Edit or Delete. Edit‑modify the script definition, including changing the script execution file or the input file required by the execution file, if any. Delete‑confirm the delete request to delete the script from the library. You can delete only those scripts that you created. |

### Run a Custom Script During a Session

While you are in a session with a customer, you can upload and execute one or more custom scripts on your customer's computer to quickly evaluate and resolve problems.

- Scripts can be up to 1 MB in size.
- Multiple scripts run sequentially in the order you specify here.
- In a multisession window, script execution can proceed concurrently across multiple sessions.
- Select on any column heading to sort the script library.

| 1 | On the CSR console menu, choose Customer computer \> Custom Scripts Library.                                                                                                                                                                                                                                                                                                                                                                          |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Use the Move Up or Move Down keys to order scripts.                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3 | Select Run Scripts. Scripts are run in temporary folders. Nothing remains on the customer’s computer once the script execution is complete. The customer is asked to grant permission. After permission is received, the scripts are executed on the customer's computer. The log output of the script is displayed in the Chat window along with any errors that may have been encountered. The log is also available in the Session Details report. |

## Save and Print Information About a Customer's Computer

If you view information about a customer's computer, you can either:

- Save the information to a text file (.txt).
- Print the information on a printer connected to your computer.

Support Manager displays categories of information about a customer's computer on separate panels. However, the saved file or printout includes the system information in all the categories. You need not save or print each category of information individually. 

| 1 | Display information about the customer's computer. For instructions, see [View a Customer's System Information](#ID%5F2627%5F00000450).            |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the System Information window, do one of the following: To save the information to a file, select Save. To print the information, select Print. |

## Logging on to a Customer's Computer as a Different User Overview

During a support session, you can log on to a customer's computer as another user. For example, you may want to log on to the computer using an administrator account so you can perform more activities on the computer. If the customer's computer is attached to an internal network, log on using an account on that network.

Logging on as a different user temporarily logs the customer off the computer. For Windows 7 and Vista users, all applications that were running on the customer's computer is closed.

You can log off the customer's computer at any time during the session, and automatically log the customer back on the computer. If you are logged on to the customer's computer when you end the session, Support Manager automatically logs the customer back on to their computer.

### Log on to a Customer's Computer as a Different User

| 1 | Do one of the following: On the CSR dashboard, under Customer Information, select Log On as Different User. On the icon tray, or in the multisession window, select the Session button, then choose Customer Computer \> Log On As Different User. A message appears, informing you that the customer has received your request to log on to their computer. Your request appears in a message box on the customer's screen. The customer must grant permission to you by selecting OK in the message box. |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select OK to close the message box on your computer. If the customer approved your request, the Log On to Customer Computer dialog box appears.                                                                                                                                                                                                                                                                                                                                                            |
| 3 | Provide the required account information, and then select OK.                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Restart a Customer's Computer

During a support session, you can restart a customer's computer remotely. Once the customer's computer restarts, the customer can rejoin the support session automatically, without having to provide the session number or other information. 

| 1 | Do one of the following: On the CSR dashboard, under Customer Information, select Reboot Computer. On the icon tray, or in the multisession window, select the Session button, then select Customer Computer \> Reboot. A message appears, informing you that the customer has received your request to restart their computer. Your request appears in a message box on the customer's screen. The customer must grant permission to you by selecting OK in the message box. |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select OK to close the message box on your computer. The customer's computer restarts. The customer must then log back in to their computer or network. A message then appears on the customer's screen, allowing the customer to rejoin the support session.                                                                                                                                                                                                                 |
