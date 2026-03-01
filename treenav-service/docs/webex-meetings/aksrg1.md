---
title: "Manage Webex WebACD Queues in Cisco Webex Site Administration"
product: "Webex Meetings"
article_id: "aksrg1"
url: "https://help.webex.com/en-us/article/aksrg1/Manage-Webex-WebACD-Queues-in-Cisco-Webex-Site-Administration"
last_updated: "2025-11-27"
description: "Site administrators can finely tune WebACD queues to maximize agent efficiency.
Webex for Government doesn&#x27;t support WebACD queues."
tags: ["webex-meetings", "webex-support"]
source: "help.webex.com"
---

# Manage Webex WebACD Queues in Cisco Webex Site Administration

## Create a New Queue

| 1 | Sign in to Webex Site Administration and go to Configuration \> WebACD \> Queues.                                           |
| - | --------------------------------------------------------------------------------------------------------------------------- |
| 2 | From the Create a new queue for drop-down list, choose Webex Support or Webex Meetings, and then select Create.             |
| 3 | Select the Configuration tab, enter the required information, and then click Next.                                          |
| 4 | On the Users tab, enter the required information, and then click Next.                                                      |
| 5 | On the Entry Form tab, enter the required information, and then click Next.                                                 |
| 6 | On the Entry Link tab, select a button to display when the queue is open, and a button to display when the queue is closed. |
| 7 | Select Next at the bottom of the page or select the Rules tab.                                                              |
| 8 | If you want to set up rules, select Yes. Otherwise, select No—maybe later and then select Finish.                           |

## Options on the Configuration Tab

| Option                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Queue Information              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Service                        | WebACD displays the name of the site's Webex service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Name                           | Enter a descriptive name for this queue. This name displays on the queue list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Description                    | Enter a brief description of the queue.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Queue Settings                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Features                       | Request from customer when the session begins From the list, select application or screen sharing, cobrowsing full control or view only. Open the following URL when the session begins To save time, site administrators can have WebACD display a website of their choice when the session starts. Enter that URL here. Autostart voice call (VoIP) for this queue Automatically start a voice call for this queue. Enable Technical Support features Include System information, Customer scripts, Reboot, and Log on as different user features for customers on this queue. Uncheck to use a Customer Service-only configuration for this queue. |
| While the customer is waiting. | Show the customer’s queue position in the chat window Display the customer’s position in the queue in the chat window. Show the customer’s estimated wait time in the chat window Display the estimated queue wait time for this customer.                                                                                                                                                                                                                                                                                                                                                                                                            |
| Hours of Operation             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Open                           | The queue is preset to accept requests 24 hours a day.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Open on                        | If the "Let me specify hours" option is chosen, site administrators can select specific days and hours of operation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Queue time zone                | Chat messages use this time zone for timestamps.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Request Distribution           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Request distribution           | Everybody: No preset order for taking the call Most Idle: Person who has the longest elapsed period of inactivity receives the next request Round Robin: Calls are distributed to users based on a preset order.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Escalation threshold           | For all queue types: Site administrators can set the number of seconds that elapse before the call is available to all agents. 60 seconds is the preset length of elapsed time. Site administrators can enter a longer or shorter time period (from 30 to 999 seconds).                                                                                                                                                                                                                                                                                                                                                                               |
| Options                        | Select the check box: "Allow users to choose specific customers in the queue," to allow any agents to select a particular caller from a list of waiting customers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Wait Notification              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Wait threshold                 | Site administrators can set the number of minutes that a customer waits before agents are notified (by email message or phone call). 2 minutes is the preset length of waiting time. Site administrators can enter a longer or shorter time period (from 1 to 60 minutes).                                                                                                                                                                                                                                                                                                                                                                            |
| Notification options           | Send email to: Enter the email addresses that will receive an email notification. To save time, select the List of Users button and select the addresses from a list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Leave Message Threshold        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Leave message form             | Select the form that customers will use to leave a message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Wait threshold                 | Site administrators can set the number of minutes that elapse before the email message is sent to the list of selected agents. 5 minutes is the preset length of waiting time. Site administrators can enter a longer or shorter time period (from 1 to 60 minutes). The length of set time is also used as the interval for time-outs.                                                                                                                                                                                                                                                                                                               |
| Notification options           | Send email to: Enter the email addresses to be notified when a customer sends an email form. To save time, select the List of Users button and select the addresses from a list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Form forwarding                | Send completed forms to: Enter the email addresses that will receive an email notification. To save time, select the List of Users button and select the addresses from a list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Shutdown Threshold             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                | Site administrators can set the maximum number of customers that can wait in the queue before the queue shuts down. 200 is the default number of waiting customers. Site administrators can enter a larger or smaller number (from 50 to 999).                                                                                                                                                                                                                                                                                                                                                                                                        |
| Unavailability Threshold       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                | Site administrators can set the number of seconds that elapse before WebACD prompts an agent to set their status to "Unavailable." 30 seconds is the default length of waiting time. Site administrators can enter a longer or shorter time period (from 30 to 120 seconds).                                                                                                                                                                                                                                                                                                                                                                          |

## Options on the Users Tab

Add and remove users from the list of agents that are assigned to this queue. 

| Option           | Description                                                                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Search           | To locate a particular user, type the email or name (or portion of the name) in the box. The results appear in the Search Results box. Site administrators can also search by email address.    |
| Show All         | To display the names of all users, click Show All.                                                                                                                                              |
| Assign >         | In the Search Results box, select a name, and select Assign > to add this user to the list of users who are assigned to this queue. Use Ctrl + select to select several names at once.          |
| < Remove         | In the Assigned to queue box, select a name and select < Remove to remove this user from the list of agents that are assigned to this queue. Use Ctrl + select to select several names at once. |
| Select All       | To select all users, save time by selecting the Select All check box.                                                                                                                           |
| Set other option | To automatically assign all users to this queue, select the Automatically assign all users to this queue check box.                                                                             |

## Options on the Entry Form Tab

Plan ahead and select the fields with care. 

The fields that are selected or added on the Entry Form tab appear on the forms customers submit when they request assistance. WebACD provides these fields on the Entry Form tab:

- First name
- Last name
- Email address
- Phone number

WebACD requires that the customer provides their first name, last name, and email address. Site administrators may already have this information (and other details) about a customer who is stored in a profile. If this information about the customer is supplied in the HTML sent to the server, these fields do not have to be displayed, and the customer will not be required to fill them in. Provide the correct parameters to WebACD.

Site administrators also use these field names later, if rules for routing requests are set up. Set up rules to route requests to specific agents that are based on the information the customer provides on this form. Later, create reports to track problems that customers report and the response by members of your support organization. 

**Example:** Your support group assists customers of Bay City Software. You handle general calls about signing in, problems with accounts, and so on. The group also handles questions about the three services in the enterprise version of the software suite: 

- Human resources
- Finance
- Research

Site administrators can add fields to the entry form that help the customer narrow their problem. Select how WebACD displays these choices to customers: 

- In a text box
- As check boxes
- As option buttons
- In a drop-down list

## Options on the Entry Link Tab

| Option                                     | Description                                                                                                                                                                                                                                                            |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Select Button to Show When Queue is Open   | Select the button style used for the link to support from the web page when the queue is open.                                                                                                                                                                         |
| Select Button to Show When Queue is Closed | Select the button style used for the link to support from the web page when the queue is closed.                                                                                                                                                                       |
| HTML Code                                  | Copy and paste this code to the website. This code includes the images that are selected for the buttons. To use buttons with a company’s logo or branding, site administrators can replace references of image files in the HTML code using names of uploaded images. |

## Options on the Rules Tab

Site administrators can assign agents to answer questions about a particular service or set of features. For instance, a support team fields questions dealing with the following topics:

- General account problems
- Human resource service
- Finance service

Site administrators can assign all agents to cover general account problems, selected agents to handle questions about a human resource service, another group to handle questions about a finance service, and so on. Rules can be set up to route customer requests to the most appropriate agents or queues. 

Two types of rules can be set up: 

- Routing rules: Rules for routing requests to specific agents
- Allocation rules: Rules for routing requests to other queues

Routing rules and allocation rules are mutually exclusive; that is, if there is a routing rule set up for a queue, an allocation rule cannot be set up for the same queue. 

| Option                 | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| Yes                    | For new queues, select Yes to add one or more rules.              |
| No                     | For new queues, select No if you do not want to set up rules now. |
| Create New Rule        | For existing queues, select Create New Ruleto add a new rule.     |
| Edit Rule              | For existing queues, select Edit Rule to change an existing rule. |
| Create Allocation Rule | Select to add a new allocation rule.                              |

## Use Routing Rules

| 1 | Sign in to Webex Site Administration and go to Configuration \> WebACD \> Queues.                                                                                                                                                                                                                                                                                                                                                                     |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | In the Name of Queue column, select the link for the queue for which you want to create routing rules.                                                                                                                                                                                                                                                                                                                                                |
| 3 | Select the Rules tab, and then select Create New Rule, or select a rule from an existing queue to edit.                                                                                                                                                                                                                                                                                                                                               |
| 4 | Set up an "IF" statement. Select a word or phrase from the first drop-down list. The list includes all field names displayed on the entry form (for example, first name, last name, phone number, and all fields you created). Select a condition from the second drop-down list (for example, contains, less than, or greater than). Enter text in the third drop-down list, to complete this "IF" statement. Select from lists and enter text here. |
| 5 | To add more "IF" statements, click the Plus button and the set-up procedure.                                                                                                                                                                                                                                                                                                                                                                          |
| 6 | Set up the "THEN assign to" statement. To assign to a specific agent, type the email address or use the address book to find the address. To assign to all queue agents, select Queue from the drop-down list.                                                                                                                                                                                                                                        |
| 7 | To set up an "ELSE IF" statement, click the Add ELSE IF condition button, and select the conditions and other elements as you did for the "IF" statements.                                                                                                                                                                                                                                                                                            |
| 8 | Set up all the statements and conditions, and then select Save. WebACD provides the final "Else" statement, which applies to all agents assigned to the queue.                                                                                                                                                                                                                                                                                        |

## Use Allocation Rules

Allocation rules automatically distribute customer requests into specified queues. The queues specified for reception of these requests are called subqueues. 

You can use the fields on the Rules tab for routing customer requests to particular subqueues. 

| 1 | Sign in to Webex Site Administration and go to Configuration \> WebACD \> Queues.                                                                                                                                                                                                    |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2 | In the Name of Queue column, select the link for the queue for which you want to use allocation rules.                                                                                                                                                                               |
| 3 | Select the Rules tab.                                                                                                                                                                                                                                                                |
| 4 | Select Create New Allocation Rule  or select Edit to change an existing allocation rule.                                                                                                                                                                                             |
| 5 | (Optional) Select the check box under Reallocation Preference if you want requests to one subqueue to be reallocated to another subqueue if the original subqueue is unavailable.                                                                                                    |
| 6 | (Optional) Enter a number in minutes that a request can wait in a subqueue, before being reallocated to another subqueue.                                                                                                                                                            |
| 7 | Specify the allocation of requests to available queues. You can allocate all (100%) of requests to one queue or allocate all requests over several queues, for example, 30% to one queue, 30% to a second queue, and 40% to a third queue. The Total allocation must add up to 100%. |

## Rules Options

| Option                           | Description                                                                                                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **_Routing Rules_**              |                                                                                                                                                                            |
| Create Allocation Rule link      | Select to change the Rules tab view to set up allocation rules.                                                                                                            |
| IF                               |                                                                                                                                                                            |
| (word or phrase) drop-down list  | Select the word or phrase from the field names displayed on the entry form (for example, first name, last name, phone number, and all fields you created)                  |
| (condition) drop-down list       | Select a condition (for example, contains, less than, or greater than)                                                                                                     |
| text field                       | Enter text to complete the "IF" statement                                                                                                                                  |
| Plus icon                        | Select the Add button to add more "IF" statements. The first "true" If statement is executed.                                                                              |
| Minus icon                       | Select the Delete button to remove an "IF" statement.                                                                                                                      |
| THEN assign to                   |                                                                                                                                                                            |
| CSR selected in drop-down list   | To assign to a specific agent, type the email address or select the Address Book button to find the address                                                                |
| Queue selected in drop-down list | To assign to all queue agents, select Queue from the drop-down list                                                                                                        |
| Address Book button              | For CSR, select the Address Book button to open the Select Users page. For Queues, select the Address Book button to open the Select Queues page.                          |
| Add ELSE IF condition            | Set up an "ELSE IF" statement by selecting Add ELSE IF condition button. Select the conditions and other elements, as you did for the "IF" statements                      |
| **_Allocation Rules_**           |                                                                                                                                                                            |
| Create Routing Rule link         | Select to change the Rules tab view to set up routing rules.                                                                                                               |
| Reallocation Preference          |                                                                                                                                                                            |
| Check box                        | Selecting this check box enables requests to be moved to other subqueues specified in the allocation rule if the current subqueue is unavailable                           |
| wait time                        | Entering a wait time enables a request to be reallocated to another subqueue if the wait time for responding to the request exceeds the specified time interval.           |
| Queue Name                       | Provides a list of available queues to receive requests                                                                                                                    |
| Specify an allocation rule       |                                                                                                                                                                            |
| Allocation (%)                   | Enter a percent (up to 100%) of requests that can be allocated to the named queue. You can allocate 100% to one queue or break out the allocation over two or more queues. |
| Total                            | An allocation rule must total no more or less than 100%                                                                                                                    |

### Select Queue Options

| Option        | Description                                |
| ------------- | ------------------------------------------ |
| Queue         | Select which queue to route the customers  |
| Agents        | Select the number of agents in the queue   |
| Description   | Lists the description of the queue         |
| Service       | Lists the Webex Support queue              |
| Select button | Select to select the queue you have chosen |

## Options for Third-Party Routing

Routing Trigger must be provisioned for your Webex site in order to enable third-party routing of variables. 

| Option                                                                | Description                                                                                                                     |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Enable third-party routing                                            | Check to allow using third-party routing of variables rather than WebACD routing.                                               |
| View All Variables                                                    | Select this link to open a window that shows the list of variables and descriptions for the entry form.                         |
| Routing URL                                                           | Lists the URL to perform the routing trigger.                                                                                   |
| Routing Cancellation URL                                              | Lists the URL to cancel the routing trigger.                                                                                    |
| Leave message threshold                                               | Allows user to define the time-out value for waiting for a CSR until the leave-a-message form is shown.                         |
| Send notification email of routing errors to the following recipients | Check to enable email notification for routing errors. If enabled, enter recipient email addresses separated by semicolons (;). |

## Edit a Queue

| 1 | Sign in to Webex Site Administration and go to Configuration \> WebACD \> Queues.   |
| - | ----------------------------------------------------------------------------------- |
| 2 | In the Name of Queue column, select the link for the queue that you want to change. |
| 3 | On the Configuration tab, make your changes, and then click Save.                   |
| 4 | Select the Users tab, make your changes, and then click Save.                       |
| 5 | Select the Entry Form tab, make your changes, and then click Save.                  |
| 6 | Select the Entry Link tab, make your changes, and then click Save.                  |
| 7 | Select the Rules tab, make your changes, and then click Save.                       |

## Add New Fields to the Entry Form

You can tailor the Entry Form to capture exactly the information you need. You can have customers provide details about the problem or issues found in your product or service. You route the message forms to the person best equipped to take the call. 

| 1 | Sign in to Webex Site Administration and go to Configuration \> WebACD \> Queues.         |
| - | ----------------------------------------------------------------------------------------- |
| 2 | In the Name of Queuecolumn, select the queue for which you want to change the Entry Form. |
| 3 | Select the Entry Form tab.                                                                |
| 4 | To add a new field, select Add New.                                                       |
| 5 | Specify the type of field and other settings, and then select Save.                       |

## Rearrange Fields on the Entry Form

| 1 | Sign in to Webex Site Administration and go to Configuration \> WebACD \> Queues.   |
| - | ----------------------------------------------------------------------------------- |
| 2 | In the Name of Queue column, select the link for the queue that you want to update. |
| 3 | Select the Entry Form tab.                                                          |
| 4 | Select Change Order.                                                                |
| 5 | On the Change Order page, select a field that you want to move.                     |
| 6 | Use the arrows to move the field up or down.                                        |
| 7 | Select Save.                                                                        |

## About the Personal Queue

Each agent has a personal queue. An agent can give a customer or client the URL to this personal queue as a means of following up on unresolved issues. The personal queue has these features:

- All personal queues share the same entry form.
- Changes to this entry form affect all agents.
- As with other entry forms, site administrators can add and remove fields to the personal queue entry form.
- The administrator and the agent can't delete the personal queue. It always appears on the list of queues.
- WebACD Inbox dynamically creates a unique URL for each agent’s personal queue.

## Edit the Personal Queue

| 1 | Sign in to Webex Site Administration and go to Configuration \> WebACD \> Queues. |
| - | --------------------------------------------------------------------------------- |
| 2 | In the Name of Queue column, select Personal Queue.                               |
| 3 | On the Configuration tab, make your changes and then select Save.                 |
| 4 | Select the Entry Form tab.                                                        |
| 5 | On the Entry Form tab, make your changes and then select Save.                    |

## Options on the Configuration Tab (Personal Queue)

Site administrators cannot change the following options: 

- **Queue name**: The name is "Personal Queue".
- **Queue description**: The description is "Personal Queue".
- **Start and end times**: This queue is available 24 hours a day (7:30 am to 7:30 am).
- **Time zone**: the time zone is Pacific Standard Time.

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Queue Settings           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Features                 | "VoIP: WebACD reviews the configuration and selects VoIP if this option applies. Telephony: WebACD reviews the configuration and selects VoIP if this option applies Request from customer when the session begins" From the list, select application or desktop sharing, cobrowsing full control or view only. Open the following URL when the session begins To save time, site administrators can have WebACD display a designated website when the session starts. Enter that URL here. Autostart voice call (VoIP) for this queue Automatically start a voice call for this queue. Enable Call Me Back Allow that the customer can be called back by support agent. |
| Hours of Operation       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Open                     | The queue is preset to accept requests 24 hours a day.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Open on                  | If the "Let me specify hours" option is chosen, site administrators can select specific days and hours of operation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Queue time zone          | Chat messages use this time zone for time stamps.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Leave Message Threshold  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Leave message form       | Select the form that customers will use to leave a message for your team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Wait threshold           | Site administrators can set the number of minutes that elapse before the email message is sent to the list of selected agents. 5 minutes is the preset length of waiting time. Site administrators can enter a longer or shorter time period (from 1 to 99 minutes). The length of time you set is also used as the interval for time-outs.                                                                                                                                                                                                                                                                                                                              |
| Notification options     | Send email to: Enter the email addresses to receive notifications when a customer sends an email form. To save time, select the List of Users button and select the addresses from a list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Form forwarding          | Enter the email addresses of those that will receive an email notification. To save time, select the List of Users button and select the addresses from a list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Shutdown Threshold       | Site administrators can set the maximum number of customers that can wait in the queue before the queue shuts down. 200 is the preset number of waiting customers. Site administrators can enter a larger or smaller number (from 50 to 999)                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Unavailability Threshold | Site administrators can change the user unavailable status if no response is received within the time specified.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
