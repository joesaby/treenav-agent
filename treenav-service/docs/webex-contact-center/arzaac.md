---
title: "Manage skill profile in Webex Contact Center"
product: "Webex Contact Center"
article_id: "arzaac"
url: "https://help.webex.com/en-us/article/arzaac"
last_updated: "2025-09-03"
description: "This article helps you to create, edit, and delete a skill profile."
tags: ["webex-contact-center"]
source: "help.webex.com"
---

# Manage skill profile in Webex Contact Center

A skill profile is a set of skills, each with an assigned value, that you assign to an agent-based team or to an individual agent. For example, you can assign a skill of English, with a high level of proficiency in one skill profile and a lower level in another profile.

In Webex Contact Center, the system uses proficiency skill values to compare and:

- Filter agents for matching with this contact based on the contact skill requirements (in [queues with skill requirements assigned in flow](https://help.webex.com/en-us/article/np2fdx/Understand-Routing-and-Queueing-in-Webex-Contact-Center#skill-requirements-assigned-in-flow))
- Associate agents with skill-based queues having [skill criteria assigned to queue](https://help.webex.com/en-us/article/np2fdx/Understand-Routing-and-Queueing-in-Webex-Contact-Center#skill-criteria-assigned-to-queue)

When the [Best Available](https://help.webex.com/en-us/article/np2fdx/Understand-Routing-and-Queueing-in-Webex-Contact-Center#BestAvailable) routing pattern is used, proficiency skill values also influence how the system routes contacts. Normally, the system uses the actual proficiency value in score calculation, because a higher skill score indicates a stronger match. Except when a skill requirement or criterion uses the less-than-equal-to (<=) condition, the system inverts that specific proficiency value of the agent during score calculation. That is, effective\_skill\_value = (10) minus (actual\_skill\_value). This ensures that a lower score indicates a stronger match.

For more information about skill-based routing, see [Understand Routing and Queueing in Webex Contact Center](https://help.webex.com/en-us/article/np2fdx/Understand-Routing-and-Queueing-in-Webex-Contact-Center).

## Create a skill profile

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                                                                                                                                                                                                                                                                                                                                                                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Select Services \> Contact Center.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3 | From the Contact Center navigation pane, select User Management \> Skill Profile.                                                                                                                                                                                                                                                                                                                                                                                                |
| 4 | Click Create Skill Profile.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5 | Enter following details to create a skill profile. General Settings Description Name Enter a name for the skill profile. Description Enter a description for the skill profile. Active Skills This lists all the skills definition created. Select all that apply and provide the corresponding skill value for the skill selected. For more information, see [Skill Definitions](https://help.webex.com/en-us/article/6rzxls/Manage-skill-definitions-in-Webex-Contact-Center). |
| 6 | Click Create.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Edit or delete a skill profile

| 1 | Sign in to [Control Hub](https://admin.webex.com/).                               |
| - | --------------------------------------------------------------------------------- |
| 2 | Select Services \> Contact Center.                                                |
| 3 | From the Contact Center navigation pane, select User Management \> Skill Profile. |
| 4 | Select the skill profile that you want to edit or delete.                         |
| 5 | Update or edit the name, description, or active skills.                           |
| 6 | Click Save to edit the skill profile.                                             |
| 7 | Click delete icon on the top right side to delete the skill profile.              |
