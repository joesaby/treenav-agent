---
title: "Configure the SMTP settings of Board and Desk Series"
product: "Devices"
article_id: "nkgc99h"
url: "https://help.webex.com/en-us/article/nkgc99h/Configure-the-SMTP-settings-of-Cisco-Board-and-Desk-series"
last_updated: "2025-06-04"
description: "You can send your whiteboards and annotations by email whether you are in a
Webex space or not. By setting up an SMTP server connection, you can share your
whiteboards and annotations by email with people inside or outside your
organization."
tags: ["devices"]
source: "help.webex.com"
---

# Configure the SMTP settings of Board and Desk Series

The option to send your work by email has to be configured through the web interface in order to be available. Read the [Advanced Settings ](https://help.webex.com/en-us/n5pqqcm/Advanced-Settings-for-Room-and-Desk-Devices) article for more information on how to access the web interface. 

Microsoft has announced they will disable Basic Auth for SMTP with Exchange online, starting September 2025\. This is how Cisco devices authenticate with SMTP servers. From this date, _“send to email”_ will no longer be compatible with Microsoft 365 Exchange online. 

Microsoft has offered two workarounds which we are recommending: 

- Microsoft High Volume Email service, which will maintain Basic Auth for SMTP and can be used for sending email internally in the Microsoft tenant.
- Azure Communications Service, which can be used for both internal and external emails.

| 1 | When the web interface of the device is opened, select the Settings  tab, choose Send Whiteboard to Email , and Start Wizard .                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Enter the server address, encryption method, and port number. The encryption that you select must be supported by the email server.  Both TLS and STARTTLS encryption methods require server certificates. Most often, the server certificates can be validated using the CA list that is preinstalled on the device. After testing the connection, follow the email wizard instructions, and upload the certificates if necessary. If you select None  in the encryption method field, you do not need to upload any certificate. Select Test connection  to go on to the next step. |
| 3 | Enter the username, password, and the email address from where the whiteboards or annotations will be sent. If you selected None  in the encryption method field, you only need to enter the email address.                                                                                                                                                                                                                                                                                                                                                                           |
| 4 | Select Verify and Save . Your device is now configured to send whiteboards and annotations by email.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
