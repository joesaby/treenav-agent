---
title: "Set Webex Access Anywhere Options"
product: "Webex Meetings"
article_id: "fkj3h4"
url: "https://help.webex.com/en-us/article/fkj3h4/Set-Cisco-Webex-Access-Anywhere-Options"
last_updated: "2024-09-15"
description: "Access Anywhere allows you to remotely access your PC from any supported Windows
operating system."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Set Webex Access Anywhere Options

## Require Approval to Set Up Access Anywhere

You can require that users obtain approval for each remote computer that they want to set up for Access Anywhere. If you choose this option, once a user sets up the Access Anywhere Agent on a remote computer, the user receives a message, informing them that the remote computer is unavailable until the site administrator approves the setup request. You can then accept or reject the request, using Site Administration. 

Site Administration can optionally send each setup request to an email address that you specify. 

| 1 | Sign in to Webex Site Administration and go to Configuration \> Access Anywhere \> Options.                                                                           |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Check Require approval for Access Anywhere computer setup.                                                                                                            |
| 3 | (Optional) Specify the email address to which you want Site Administration to send all Access Anywhere setup requests in the Forward Access Anywhere requests to box. |
| 4 | Select Update.                                                                                                                                                        |

## Process Access Anywhere Requests

If you require approval for users' requests to set up a remote computer for Access Anywhere, Site Administration places all requests in a queue that you can view, and sends a request notification email message to the address that you specify. You can either accept or reject each setup request. 

| 1 | Sign in to Webex Site Administration.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On the Site Information page, select the New Access Anywhere requests link. This link appears only if one or more users have requested to set up a remote computer on your site. The Approve Access Anywhere Requests page appears.                                                                                                                                                                                                                             |
| 3 | To accept one or more setup requests, select the check box for each setup request and select Accept. For each accepted setup request, Site Administration automatically: Sends an email message to the user who made the request, indicating that the request was accepted. Adds the computer to the list of remote computers on the Remote Computers page in Site Administration.                                                                              |
| 4 | To reject one or more setup requests, select the check box for each setup request and select Reject. For each rejected registration request, Site Administration sends an email message to the user who made the request, indicating that the request was rejected.  To view detailed information about a user who has requested to set up a remote computer, select the user’s user name in the User Name column on the Approve Access Anywhere Requests page. |

## View a List of Remote Access Anywhere Computers

If your Webex service site has the Access Anywhere option, you can view a list of all the remote computers that users have set up for Access Anywhere. The list indicates 

- Which computers are currently signed in to the Access Anywhere server and when the user logged it in.
- Which computers that users are currently accessing remotely and when the user started the Access Anywhere session.

| 1 | Sign in to Webex Site Administration and go to Configuration \> Access Anywhere \> Remote Computers . The Remote Computers page appears, showing a list of the remote computers that users have set up for Access Anywhere. |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | To update the page with the most current information, select Refresh.                                                                                                                                                       |
| 3 | To display a list of users whose names begin with a particular letter, select the letter.                                                                                                                                   |

## End a User's Access Anywhere Session

| 1 | Sign in to Webex Site Administration and go to Configuration \> Access Anywhere \> Remote Computers.                                                                          |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Locate the user in the list. If a user is currently accessing a remote computer, the date and time at which the user started the session appears in the Session Began column. |
| 3 | Select the check box for the session that you want to end, and then select Disconnect \> OK.                                                                                  |

## Remove a Remote Computer from a User's Account

| 1 | Sign in to Webex Site Administration and go to Configuration \> Access Anywhere \> Remote Computers. |
| - | ---------------------------------------------------------------------------------------------------- |
| 2 | In the Computer column, locate the computer that you want to remove.                                 |
| 3 | Select the check box for the computer that you want to remove, and then select Remove \> OK.         |
