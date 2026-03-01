---
title: "Cisco Webex Meetings for Microsoft Power Automate"
product: "Webex Meetings"
article_id: "nv1s5rm"
url: "https://help.webex.com/en-us/article/nv1s5rm/Cisco-Webex-Meetings-for-Microsoft-Power-Automate"
last_updated: "2024-09-21"
description: "With the Cisco Webex Meetings connector for Microsoft Power Automate, you can
make scheduling a Webex meeting part of your workflow. You can create a workflow
for yourself that automatically schedules a Webex meeting when triggered by a
designated event. Then, add an action that uses dynamic content from the newly
scheduled Webex meeting, such as the meeting topic or password."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Cisco Webex Meetings for Microsoft Power Automate

Here are some examples of ways you might add scheduling and modifying Webex meetings to your workflow:

- Automatically add new Webex meetings to your calendar app.
- Automatically update your Webex meeting when it is updated from your calendar app.
- Send a customized note in your team chat app whenever a new Webex meeting is created.
- Create tasks in your to-do list app or task management software whenever a new Webex meeting is created.
- Create documents with templates in your note-taking or word processing app for each new Webex meeting.

## Create a Workflow to Schedule a Webex Meeting

Microsoft Power Automate supports the Cisco Webex Meetings **Schedule a meeting** action in workflows.

| 1 | In Microsoft Power Automate, go to Create and select Automated flow to create a workflow for yourself. ![Create automated flow](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/440001-441000/440158.jpg)                                                                                                                                                                                                              |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Search for the event that will trigger a Webex meeting to be scheduled and select Create. For example, the event could be when a new email message arrives in Gmail or when a new subscription is added in Inoreader. ![Choose flow trigger](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/440001-441000/440159.jpg)                                                                                                 |
| 3 | Select New step, enter Cisco Webex Meetings in the search box, and select Schedule a meeting from the Actions list. ![Select Schedule a meeting action](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/440001-441000/440160.jpg)                                                                                                                                                                                      |
| 4 | If you haven't already connected your Webex Meetings account to Microsoft Power Automate, a prompt to sign in appears: Select Sign in, enter the email address that you use for your Webex Meetings account, and select Next. Choose which Webex site you want to use for meetings, enter your Webex Meetings password, and select Continue. Accept the permissions to access your Webex Meetings meeting data.                                                   |
| 5 | Enter the meeting details under Schedule a meeting. You can enter the start and end time using the YYYY-MM-DDTHH:MM format or the YYYY-MM-DDTHH:MM:ss:000z format. When you use the YYYY-MM-DDTHH:MM format, your Webex preferences determine your time zone. ![Enter the meeting details](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/440001-441000/440161.jpg)                                                   |
| 6 | If you want an action to occur after the Webex meeting, select New step \> Add an action. You can add dynamic content from the Webex meeting. Search for dynamic content such as the meeting topic, join meeting link, and meeting password under Add dynamic content from the apps and connectors used in this flow. ![Add dynamic content](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/440001-450000/440001-441000/440163.jpg) |
| 7 | When you're finished creating your flow, select Save.                                                                                                                                                                                                                                                                                                                                                                                                             |

## Configure Cisco Webex Meetings for Microsoft Power Automate

Before you begin

Before you can use the Cisco Webex Meetings connector, you must have a Webex Meetings host account. If you don't have an account, you can go to [https://www.webex.com](https://www.webex.com/) to sign up for an account for you or your company.

Webex administrators must enable third-party applications to integrate with Webex Meetings using REST APIs before Microsoft Power Automate account users can use Webex Meetings in Microsoft Power Automate. If necessary, [contact your Webex administrator for assistance](https://help.webex.com/7ksvf1/).

| 1 | Webex site administrators can do one of the following: If you manage your Webex site in Cisco Webex Control Hub, from the customer view in [https:/​/​admin.webex.com](https://admin.webex.com/), go to Services. Under Meeting, select Sites, choose your site, and then select Configure Site. Under Common Settings, select Site Options.If you manage your Webex site in Cisco Webex Administration, sign in to Webex Site Administration and then go to Configuration \> Common Site Settings \> Options. |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Under Third-Party Integration, check  Enable 3rd party apps and developers to integrate with Webex Meetings using REST APIs.                                                                                                                                                                                                                                                                                                                                                                                   |
| 3 | Select Update.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
