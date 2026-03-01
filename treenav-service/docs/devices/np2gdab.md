---
title: "Directory sync from Workspaces in Control Hub"
product: "Devices"
article_id: "np2gdab"
url: "https://help.webex.com/en-us/article/np2gdab/Directory-sync-from-Workspaces-in-Control-Hub"
last_updated: "2026-02-17"
description: "Automatically import rooms from your Directory and create all your workspaces at
scale inside Control Hub. This is to assist you when you’re moving your
deployment to Control Hub."
tags: ["devices"]
source: "help.webex.com"
---

# Directory sync from Workspaces in Control Hub

Directory sync creates workspaces from the rooms that you have set up in your Active Directory. It’s a one-way synchronization from your Directory to Control Hub.

The directory sync creates workspaces based on email address, name, or SIP address. If there are workspaces already in Control Hub with the same email address or name as in your Active Directory, no new workspace gets created. 

To create workspaces with a SIP address, you need to set up Directory Connector to [ synchronize room information to the cloud ](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/hybridservices/directoryconnector/cmgt%5Fb%5Fdirectory-connector-guide-admins/cmgt%5Fb%5Fdirectory-connector-administration-guide%5Fchapter%5F01.html#task%5F657D45200EC581324A7016F8C5C4EB33). Read more about [ Directory connector ](https://www.cisco.com/c/en/us/td/docs/voice%5Fip%5Fcomm/cloudCollaboration/spark/hybridservices/directoryconnector/cmgt%5Fb%5Fdirectory-connector-guide-admins.html).

To create workspaces from Entra ID, you need to [enable Entra ID in Control Hub first. ](https://help.webex.com/heauzeb/)

Workspaces without any devices are deleted from Control Hub if the Directory room is deleted. You can choose to deselect this option during the setup.

 Prerequisites: 
- On-premise Active Directory sync with Directory Connector or Entra ID
- The Directory Synchronization must be enabled with the Directory Connector’s Room import turned on
 Limitations 
- On devices running CE9 software, you can't call from the directory to Workspaces with a SIP address imported from Active Directory.

| 1 | From the customer view in [ admin.webex.com ](http://admin.webex.com), go to  Workspaces . Go to Settings \> Directory Sync.                                                                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Click Setup \> Configure. Choose the calendar service that your organization uses. You can choose to deselect  Delete the workspace when corresponding room is removed from your Directory , if that’s needed. |
| 3 | Click Review and Synchronize. You get a confirmation message that the synchronization is in place.                                                                                                             |
