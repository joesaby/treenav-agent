---
title: "Bulk provisioning Webex Calling elements using CSV"
product: "Webex Calling"
article_id: "nu0oia0"
url: "https://help.webex.com/en-us/article/nu0oia0/Bulk-provisioning-Webex-Calling-elements-using-CSV"
last_updated: "2026-01-30"
description: "Webex Calling leverages Comma Separated Value (CSV) files to quickly export and
import provision-able elements to the cloud. By importing a file, the Webex
Calling system either creates, updates, or deletes the associated elements based
on the field values."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Bulk provisioning Webex Calling elements using CSV

CSV uploads adhere to the following conventions:

Never remove columns and header from the CSV file when preparing. But, you can clear values from columns you do not wish to modify and the blank cells in CSV during import means "no change".

- Each line of the CSV file represents a record that consists of field values with a comma (,) between each field. To escape commas within fields, prefix the comma with a backslash (\\), for example, a field with the value "Smith, Barney, and Weston" must be encoded as "Smith\\, Barney\\, and Weston".
- The first row of the CSV is the header row with CSV data is the field names that specify the field order and the number of fields for all the subsequent data rows in the CSV. Rows with a different number of fields will be rejected with an error.
- Any field left blank (not included) is ignored.
- If you want to clear a setting, enter REMOVE in that column.
- If a field is mandatory, then that field must be included for each record. If it is not included, then that record is flagged for error.
- Certain fields are designated as identity (ID) fields (also known as an identify field). Identity fields can’t be modified, and stay fixed for the life of that record. If you attempt to change an identity field, then more than likely, that record is flagged for error, as the system is unable to identify the record with an incorrect ID field.
- CSV files support Unicode characters.
- Only E.164 numbers are allowed for CSV import.

  - Some spreadsheet editors remove the + sign from cells when the CSV is opened. We suggest you use a text editor to make CSV updates. If you use a spreadsheet editor, make sure to set the cell format to text, and add back any + signs that were removed.
  - When you open a CSV file in Microsoft Excel, the date format automatically changes to the MM/DD/YYYY format based on your system settings. Webex Calling requires dates in the YYYY-MM-DD format, so importing the file with the wrong format will fail. To avoid this, edit the CSV in a text editor or ensure dates are set to YYYY-MM-DD before importing.
