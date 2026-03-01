---
title: "Detection Tool for Webex Meetings Applications"
product: "Webex Meetings"
article_id: "nldp0hq"
url: "https://help.webex.com/en-us/article/nldp0hq/Detection-Tool-for-Cisco-Webex-Meetings-Applications"
last_updated: "2024-09-13"
description: "The Detection Tool detects Webex Meetings application browser plug-in .dll files
in your local folders that may be vulnerable to security issues."
tags: ["webex-meetings"]
source: "help.webex.com"
---

# Detection Tool for Webex Meetings Applications

The Detection Tool detects Webex Meetings application browser plug-in .dll files in your local folders that may be vulnerable to security issues. The tool is a console application that generates a list of potentially vulnerable files that you should remove from your computer.

1. Download the Detection Tool file from the bottom of this page.
2. Run **`DetectTool.exe`**
3. Open the resulting XML data file, which can be found in the data folder.  
Example output is shown here:
4. Review the output, looking for the files listed under **`<Unsafe_Files>`**. These are older, insecure versions of the meeting application files.
5. Go to the folder locations for each of the files listed under **`<Unsafe_Files>`** and remove the files from your computer immediately.

Download [The Detection Tool for Cisco Webex Meetings Applications](http://www.cisco.com/c/dam/en/us/td/docs/collaboration/webex%5Fcenters/esp/DetectionTool.zip).
