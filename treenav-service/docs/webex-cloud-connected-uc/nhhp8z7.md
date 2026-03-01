---
title: "Troubleshooting Phone Services on Unified CM for Webex app"
product: "Webex Cloud-Connected UC"
article_id: "nhhp8z7"
url: "https://help.webex.com/en-us/article/nhhp8z7/Troubleshooting-Phone-Services-on-Unified-CM-for-Webex-app"
last_updated: "2025-05-16"
description: "Troubleshooting Phone Services on Unified CM for Webex app"
tags: ["webex-cloud-connected-uc", "calling-in-webex-(unified-cm)"]
source: "help.webex.com"
---

# Troubleshooting Phone Services on Unified CM for Webex app

The troubleshooting procedures help you to diagnose and resolve issues when you're migrating from Cisco Jabber to Webex app. Each section covers a solution that helps you to diagnose the issue and continue with the migration.

[Configure UC services](#id%5F132407)

Add Cisco Unified Communications Manager services to specify the address and other settings for the service.

The CTI UC service provides Webex App with the location of the CTI service, which retrieves a list of devices that are associated with the user. The voicemail service ties into your existing Unity Connection deployment and provides voicemail retrieval to users when they are associated with the corresponding service profile.

| 1  | Open the Cisco Unified CM Administration interface.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2  | Select User Management \> User Settings \> UC Service. The Find and List UC Services window opens.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3  | Select Add New. The UC Service Configuration window opens.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4  | In the Add a UC Service section, select CTI from the UC Service Type drop-down list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 5  | Select Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 6  | Provide details for the CTI service as follows: Specify a name for the service in the Name field. The name you specify displays when you add services to profiles. Ensure the name you specify is unique, meaningful, and easy to identify. Specify the CTI service address in the Host Name/IP Address field. Enter the address in the form of a hostname, IP address, or fully qualified domain name (FQDN). This value corresponds to the Unified CM publisher that's running the CTI Manager service. You'll create a second service for the subscriber. Specify the port number for the CTI service in the Port field. |
| 7  | Save your changes, return to User Management \> User Settings \> UC Service, and then click Add New.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 8  | Choose Voicemail and then click Next.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 9  | Provide details for the Voicemail service as follows: Specify a name for the service in the Name field. The name you specify displays when you add services to profiles. Ensure the name you specify is unique, meaningful, and easy to identify. Specify the voicemail address in the Host Name/IP Address field. Enter the address in the form of a fully qualified domain name (FQDN). Otherwise, the certificate validation step fails. By default, the client always uses port 443 and the HTTPS protocol to connect to the voicemail server. For this reason, any value you specify does not take effect.             |
| 10 | Save your changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

What to do next

Add UC services to the service profile.

[Configure service profile with UC services](#id%5F132420)

After you add and configure Cisco Unified Communications Manager services, you add them to a service profile. You can apply additional configuration in the service profile.

| 1 | Open the **Cisco Unified CM Administration** interface.                                                                            |
| - | ---------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select **User Management** \> **User Settings** \> **Service Profile**.                                                            |
| 3 | Enter a name for the service profile in the **Name** field.                                                                        |
| 4 | Select **Make this the default service profile for the system** if you want the service profile to be the default for the cluster. |
| 5 | Add your UC services under Voicemail Profile and CTI Profile.                                                                      |
| 6 | Set Credential source for voicemail service to Unified CM - IM and Presence.                                                       |
| 7 | Complete any additional configuration and then click Save.                                                                         |

What to do next

You must assign the configured service profile to end user accounts in Unified CM.

[Configure Unified CM servers with Fully Qualified Domain Name](#task%5FCDE5E73273C25D9739B2FFC88AFCB7A7)

Configure Cisco Unified Communications Manager servers using a Fully Qualified Domain Name (FQDN), otherwise you might face issues during migration. 

| 1 | From Cisco Unified CM Administration, choose System \> Server.                                                                                                                           |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Change the IP address in the HostName/IP Address field to FQDN. ![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/450001-460000/457001-458000/457377.jpg) |
| 3 | Enter the command show status to view the status and the hostname.                                                                                                                       |
| 4 | Enter the command show network eth0 to obtain the domain name.                                                                                                                           |
| 5 | Repeat step 1 for all the servers that you want to configure with FQDN.                                                                                                                  |
| 6 | Restart Cisco TFTP service on all the nodes to update the configuration files.                                                                                                           |
| 7 | Restart Cisco Unified Communications Manager service on all the nodes to push the updated configuration files to the registered devices.                                                 |
