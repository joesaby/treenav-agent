---
title: "Webex App | Add Links for Meetings or Spaces with webexteams Protocol"
product: "Webex Messaging"
article_id: "n5yzg8y"
url: "https://help.webex.com/en-us/article/n5yzg8y/Webex-App-Add-Links-for-Meetings-or-Spaces-with-webexteams-Protocol"
last_updated: "2024-09-19"
description: "You can use the webexteams protocol handler to add links for spaces or messages
to an email or a web page. People can then click on the links to get to specific
spaces."
tags: ["webex-messaging"]
source: "help.webex.com"
---

# Webex App | Add Links for Meetings or Spaces with webexteams Protocol

The webexteams protocol handler allows you to create links that you can add to the code in a web page or you could include a hyperlink in your documentation or contact information.

Supported options with webexteams protocol handler:

- Create a space with one person  
`webexteams://im?email= _emailaddress_`
- Open an existing space  
`webexteams://im?space= _spaceid_`  
To get the space id for a space. In the Webex App space, copy the space information to the clipboard:

  - On Windows use Ctrl + Shift + K
  - On Mac use Option + Command + K  
Paste the space information into a text editor and use the space id.  
For more details on space information, see the [developer api ](https://developer.webex.com/docs/api/v1/rooms).

Examples of how to use the webexteams protocol handler: 

- To create a link to a Webex App space in a web page, use one of the following options:

  - You can include your email address with im .  
  `<a href="webexteams://im?email=barbara@example.com">Contact me in a Webex space</a> `  
  When somebody clicks on the link on your web page, Webex App opens a new or existing space with you and that person.
  - You can include the space id for a specific space with im .  
  `<a href="webexteams://im?space=0000aa-a0a0">Join me in the Marketing Webex space</a> `  
  When somebody clicks on the link on your web page, Webex App opens the specified Webex App space. For team spaces, members of the team can open and join the team spaces. For spaces not in a team, only existing members of the space can open the space.
- To create a hyperlink to a Webex App space in a document or email, you can include your email address with **im**, use this format.  
Add the address as: `webexteams://im?email=barbara@example.com ` and add the text to display ` "Contact me in a Webex space" `.  
When somebody clicks on the link, Webex App opens a new or existing space with you and that person.
