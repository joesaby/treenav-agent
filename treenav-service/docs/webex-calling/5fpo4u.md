---
title: "Configure music-on-hold settings from Control Hub"
product: "Webex Calling"
article_id: "5fpo4u"
url: "https://help.webex.com/en-us/article/5fpo4u/Configure-music-on-hold-settings-for-your-location"
last_updated: "2025-11-20"
description: "When a user places an incoming call on hold, the caller can listen to selected
music. The music that is played is either the default music that is set at the
location level or custom music that you upload, both of which can be selected
from announcement repository."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Configure music-on-hold settings from Control Hub

## Global playlist management for Music-on-Hold

The music-on-hold feature enables you to create playlists using files from its repository. You also have the option to include playlists in your announcement repository for use as an audio source, then assign these playlists to specific locations. You can select an existing playlist that you want to use from the announcement repository, or create your own playlist. When a caller is placed on hold, a new announcement from the playlist is randomly selected and played. If the playlist contains more than one file, a new file is selected and played when the current announcement finishes.

You can create a playlist using organization or global-level files. However, a created playlist is always saved at the global level. Assigning playlists from the global level overrides any previous assignments at the location or organization levels. If you unassign a playlist from the global level, the location reverts to the default setting.

Location administrators can configure **Music On Hold** to use a playlist in their locations but they can’t create, edit, or delete any playlists.

You can configure up to 1000 playlists, and set music-on-hold with a playlist for specific locations. You can create a maximum of 25 files per playlist. The announcements repository size increased to 5 GB. However, the size for individual locations remains at 1 GB.

To create a playlist:

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                                                                                                    |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Services \> Calling \> Features.                                                                                                                                                                                                                                                                                                                                |
| 3 | Go to Announcements tile and click Manage \> Playlists. You can see a list of playlists along with the details such as the number of files, associated locations, and last modified date and time.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/486001-487000/486001.png)                                            |
| 4 | To view detailed information about a playlist, click its name in the list. This displays the instance name, location, and type of all feature instances that reference it.                                                                                                                                                                                            |
| 5 | Click Create Playlist and provide a playlist name and select a file from the drop-down list to add. You can select all organization level files from the announcement repository or can pick multiple files as needed. Click Create playlist.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/486001-487000/486002.png) |
| 6 | You can also assign, edit, or delete a particular playlist. To assign a playlist, select the playlist and click the three dots right next to the selected playlist and click Assign.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/486001-487000/486003.png)                                                          |
| 7 | Select the location from the drop-down list to assign the playlist. You can add all or pick multiple locations as needed. Click Save.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/486001-487000/486004.png)                                                                                                         |

## Configure Music-on-Hold

1. Sign in to [Control Hub](https://admin.webex.com/).

| Control Hub section | Steps                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Users               | Go to Management \> UsersSelect the user to edit.The details of the user appear in the window.Click the Calling tab and navigate to the Music on Hold section.![Music on hold](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/477001-478000/477221.jpg)Enable the toggle Play music when a call is placed on hold. If the Music on Hold section is disabled, click Enable Music on Hold in location settings to use this feature. |
| Workspaces          | Go to Management \> WorkspacesSelect the workspace to edit.Click the Calling tab and navigate to the Music on Hold section.![MOH workspace](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/477001-478000/477331.jpg)Enable the toggle Play music when a call is placed on hold.                                                                                                                                                   |
| Virtual Lines       | Go to Services \> Calling\> Virtual linesSelect the virtual line to edit and click Calling.Scroll down to the Music on Hold panel.![MOH Virtual lines](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/470001-480000/477001-478000/477330.jpg)Enable the toggle button for Play music when a call is placed on hold.                                                                                                                             |
| Locations           | Go to Management \> LocationsChoose a location and click the Calling tab.Go to the Call handling section, and choose Music on hold or park.Select Call is placed on hold or Call is parked for the audio to apply. The playlist can be applied from Locations \> Calling \> Call Handling \> Music on Hold.                                                                                                                                                                   |
2. Select the Music on Hold source by choosing one of the following options:
  - **Play default music** \- Select this option to play the default music.
  - **Play custom music** \- You must select and upload an audio source file in either .wav or .wma format. You can select a file or playlist that is already created at Organization level.  
  This is applicable for location level Music-on-Hold settings only.

    1. Click Select musicto open the announcement repository.
    2. You can either select a preuploaded file or click Upload to add a new file.
    3. Click Select file to assign the selected custom music.  
      See [Manage Announcement Repository](https://help.webex.com/n5y120ab) to upload or record the announcement files.  
  You can also select an existing playlist that you want to use from the announcement repository, or create your own playlist.

The music-on-hold feature enables you to create playlists using files from its repository. You can also configure up to 1000 playlists, and set music-on-hold with a playlist for specific locations. The announcements repository size increased to 5 GB. However, the size for individual locations remains at 1 GB.

**Limitations:** 

- When a playlist is in use, you cannot delete it.
- You cannot delete an announcement from the repository if it is currently in use.
- When you remove a playlist, your location automatically switches to the system default music-on-Hold source.
- The playlist option works at the Location level only and is not supported for Call Queues, Users, or Workspaces.

## Configure bulk update of Music-on-Hold

1. Sign in to [Control Hub](https://admin.webex.com).
2. Go to Services \> Calling \> Service Settings.
3. Scroll down to Manage user calling data panel and click on Manage user calling data.
4. Click Download Data, where you can select the specific user calling service feature that you can download.
5. Check the Music on Hold Source check box and click Download.
6. Click View import history/tasks to know the status of the download and download the user .csv records with music-on-hold columns having the MOH attributes listed in the table. You can edit the attributes and upload the .csv file to change the custom settings for a group of users.

| Attribute                   | Value                    |
| --------------------------- | ------------------------ |
| MOH Active                  | True or False            |
| MOH Announcement Type       | CUSTOM or DEFAULT        |
| MOH Announcement Media Type | WAV or WMA               |
| MOH Announcement Level      | ORGANIZATION or LOCATION |

## Default music for Music-on-Hold

As an administrator, you can choose Webex Calling Theme 1 or 2 as the default MOH for Webex Calling at the organization level. The Webex Calling Theme 1 is the original MOH music and Webex Calling Theme 2 is Opus No. 1, the popular Cisco Unified Communications Manage music for MOH. New customers see Webex Calling Theme 2 as the default MOH music, and existing customers can change the default music for their organization in the Control Hub.

To set the default music for music-on-hold:

| 1 | Sign in to [Control Hub](https://admin.webex.com).                                                                                                                                                                                                                                            |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | Go to Services \> Calling.                                                                                                                                                                                                                                                                    |
| 3 | Click the Service Settings tab and navigate to the Default music for Music-on-Hold section.![](https://cisco-api.ingeniuxondemand.com/DITA/content/en/us/td/i/400001-500000/480001-490000/486001-487000/486269.jpg)                                                                           |
| 4 | Select your MOH theme and click Save. Webex Calling Theme 1: Original MOH music for Webex Calling. Webex Calling Theme 2: Opus No. 1, Cisco Unified Communications Manager music for MOH. The Webex Calling Theme 2 file is restricted to built-in use only and isn’t available for download. |
