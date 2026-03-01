---
title: "Cisco Calling Plan number porting guidelines and policies"
product: "Webex Calling"
article_id: "01sijg"
url: "https://help.webex.com/en-us/article/01sijg/Cisco-VoIP-Number-Policy"
last_updated: "2025-05-21"
description: "As an administrator, use this article to port existing PSTN numbers to Cisco
easily with the full support of Cisco and our partners."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Cisco Calling Plan number porting guidelines and policies

These guidelines and regulations apply to ported numbers that are ordered or utilized with Cisco Calling Plans.

## Number porting

Number porting is to transfer existing phone numbers from the current Public Switched Telephone Network (PSTN) service provider (“losing carrier”) to another (“winning carrier”).

Porting processes and requirements may differ from one country to another. The listed below is general and aims to cover as much as possible on the subject.

The information applies to the customers porting numbers into or out of the Cisco Calling Plans. Adhere to all applicable laws related to porting activities. Slamming (unauthorized porting to another carrier, whether intentional or in error) activities aren’t allowed. Cisco doesn't alter the telephony service provider for any account without written consent from the authorized account holder.

See [Get Started with the Cisco Calling Plans](https://help.webex.com/en-us/nousk9ab).

### Simplified porting process

For successful number porting, proper coordination between carriers and adherence to the following steps is essential:

| 1 | **Verification**—The customer must verify the portability of the number. This includes ensuring that the number is active, that there are no existing orders against the number(s) being ported, that it is supported in the desired country, and that it is covered in the target region.                                                                                                              |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | **Gathering information**—The customer collects all necessary porting information and relevant documents.                                                                                                                                                                                                                                                                                               |
| 3 | **Creating port order draft** Using the Control Hub, the Customer or Partner creates a port order draft. By creating a draft order within the Control Hub, you have effectively checked the portability of the numbers. Should you have any portability issues, raise a case with the Cisco PSTN Technical Services (PTS) team to investigate further. Complete all requirements, and submit the order. |
| 4 | **Send port request** The Cisco PSTN porting team sends a port request to the losing carrier (the current service provider). Firm Order Commitment (FOC)—The losing carrier responds with a FOC specifying a date and time for the port.                                                                                                                                                                |
| 5 | **Number provisioning** Once FOC is received, the number status changes to “provisioned” and is made available in the Control Hub for configuration. These numbers remain inactive until the porting process is complete.                                                                                                                                                                               |
| 6 | **Activation and transfer** At the confirmed time (as per the FOC), the port activates. The phone numbers transfer from the losing carrier to the winning carrier (the new service provider). There may be a temporary loss of service to the numbers during the port process.                                                                                                                          |
| 7 | **Service termination**—If applicable, the customer terminates service with the losing carrier after the port completes.                                                                                                                                                                                                                                                                                |

### Port order requirements

Adhere to these requirements to ensure a smooth and successful number porting process.
- **License**—If a customer has only one license, they can port only one number. The number of ports cannot exceed the number of licenses purchased.
- **Ownership and authorization**

  - The customer must demonstrate ownership of the numbers they intend to port.
  - Authorization to port to the winning carrier (the new service provider) is crucial.
  - This involves providing a current bill or invoice and a Letter of Agency (LOA). LOA is a letter authorizing Cisco to act on behalf of the customer.
  - Depending on the country, certain Letters of Authorization (LOAs) are electronic (eLOAs) and are autofilled in the Control Hub. Other LOAs require manual completion, which customers can complete, sign, and upload through the Control Hub porting workflow.
- **Country-specific variations**—The specific requirements may vary by country.
- **Proof of ownership and authorization**

  - The bill or invoice serves as evidence of number ownership and active service.
  - The LOA confirms the consent of the customer to the porting process.
- **Avoid rejections**—Customers are responsible for ensuring the information that they provide is accurate to facilitate porting. If the information is inaccurate or incomplete the porting is rejected.
- **Coordinated porting**

  - Numbers associated with the same account must port simultaneously, even if they are part of different orders.
  - Numbers with distinct account information should be on separate port orders.
- **Toll-free numbers**

  - Toll-free numbers must be on separate orders from Direct Inward Dialing (DID) numbers.
  - US or CA only.
- **Pending orders and additional numbers**

  - If there’s a pending order on the same account, additional numbers with the losing carrier can't be submitted for porting. It results in a rejection.
  - When the main number (Billing Telephone Number or BTN) is being ported, a nonported number is designated as the replacement BTN.
- **Timeliness of documentation**—Ensure that the bill or invoice is current, dated within the last 30 days.
- **Additional services**—When a number is ported, the original installation ceases. This includes any additional services (such as broadband, alarms, and so on) provided by the current provider on the telephone line. Once the installation ceases, it may not be possible to reestablish those services.

### Requested port date and time

- **Lead time**—When requesting a port date, it's advisable to allow at least five business days (or 2-3 weeks for larger ports) from the time the request is submitted to the losing carrier.
- **Earliest possible date**—The earliest possible date to request a port varies based on the country, carrier, and order type. It can range 1–35 business days.
- **Latest possible date**—You have up to 30 days from the date of submission to request a port.
- **Port activation timing**—Port activation time can be requested for any time within the supported porting window, between 9 AM and 4 PM on regular business days, but it is not guaranteed until FOC is received and may vary depending on the country.
- **FOC confirmation**—Note that the requested port date and time are not confirmed until the order receives a FOC from the losing carrier.

For a successful and timely number porting process, it is essential to coordinate effectively and adhere to these guidelines.

### Types of port orders

Regardless of order types, if you’re new to porting or working on a large project and need guidance, raise a case with the PTS team. See [Raising a Cisco Calling Plan support case](https://help.webex.com/01sijg/Cisco-Calling-Plan-number-porting-guidelines-and-policies#section%5Foyq%5F24x%5Fkbc) section.

PTS supports Cisco Calling Plan numbering orders including number porting, new number ordering, and addressing any related inquiries.

| Simple                           | Standard                   | Project                                           | Complex (Any of the following) |
| -------------------------------- | -------------------------- | ------------------------------------------------- | ------------------------------ |
| 1 TN (Telephone Number)          | 1-50 TNs                   | \> 50 TNs                                         | \> 1 TN                        |
| 1 BTN (Billing Telephone Number) | 1 BTN                      | 1 BTN                                             | \> 1 BTN                       |
| 1 service address                | 1 service address          | 1 service address                                 | \> 1 service address           |
| 1 losing carrier name            | 1 losing carrier name      | 1 losing carrier name                             | \> 1 losing carrier name       |
| 1 rate center                    | 1 rate center (U.S. or CA) | 1 rate center (U.S. or CA)                        | \> 1 rate center (U.S. or CA)  |
| \--                              | \--                        | CSR (Customer Service Record) needed (U.S. or CA) | CSR needed (U.S. or CA)        |
| \--                              | \--                        | 10-35 business days to process                    | 10-35 business days to process |

PSTN Porting differs from Mobile or Cellular porting.

PSTN porting focuses on ensuring a smooth transition for your trusted landline services. While it may take a bit longer than mobile porting, this careful process helps maintain the reliability and quality you expect from your landline connection. It's all about keeping your communication steady and dependable.

### Tips for successful porting

The following ensures a seamless and successful number porting experience:

- **Active numbers**

  - Ensure that the porting numbers remain active with the losing carrier throughout the process.
  - Don't disconnect services until the number porting is complete and verified.
- **Remove freeze and identify credentials**

  - Remove any account freezes or restrictions.
  - Identify any PINs, passwords, or passcodes associated with the numbers, this is for additional porting information that may be required to place the port request.
- **Review the numbers carefully**

  - Before submitting the order, carefully review all numbers.
  - Once submitted, numbers can’t be added or changed.
- **Consistent porting information**—The porting information must match the records of the losing carrier, regardless of where the numbers are ported to.
- **Customer Service Record (CSR, US or CA)**—Though not always required, obtaining a current Customer Service Record (CSR) from the losing carrier helps in accurate porting information.
- **Identify port type**

  - Identify the type of port: simple, standard, project, or complex.
  - This sets expectations for requirements and processing time.
- **Losing carrier response time**—Anticipate a minimum of five business days for the losing carrier to respond after a port request is submitted or resubmitted.
- **Confirmed port date**—Once a port request receives a FOC from the losing carrier, changing the confirmed date is discouraged as it adds complexity to the order.
- **Porting Out**

  - Ensure the subscription is active, and not in a suspended state for the port out to work properly.
  - Open a support case with Cisco PSTN Technical Services (PTS) for help with Port Out errors.

### Port rejections

- Customers must ensure that the information they provide for port facilitation is accurate and complete. Inaccurate or incomplete information results in the rejection of the ports.
- Rejections can reset the porting SLA depending on the country.
- To speed up the process, we encourage the customers to collaborate with the losing carrier to clear the rejection, then update the rejected order in the Control Hub and resubmit the request for processing.
- Losing carriers decline requests for one reason at a time. If an inactive number request is rejected, a subsequent rejection for BTN may occur when the order is resubmitted.

#### Top rejection reasons

Common reasons a losing carrier may reject a port request include:

- The OSP has a pending LSR on the account (for example, a port out or address change).
- BTN or ATN (Account Telephone Number) do not match.
- Some of the phone numbers can't be ported because they are inactive, disconnected, or aren't part of the end user's account.
- The location information doesn't match.
- A passcode or PIN must be provided for the wireless port.
- An order has already been placed with the losing carrier that is conflicting (for example, a port out or address change).
- Entity name doesn't match.
- For wireless ports that require a passcode or PIN.
- One or more phone numbers are disconnected. Before this port can proceed, the user must reach out to their current carrier to reactivate the phone numbers.
- The account number (AN) doesn't match.
- Person authorizings doesn't match.
- BTN didn't match.
- BTN is one of the phone numbers being ported. User must indicate porting order type, remaining numbers action, and new billing phone number accordingly.
- The full-service address did not match.
- The other service provider (OSP) requires the porting order to be split and submitted as separate orders.
- Entity name (eg. Business name) doesn't match.
- The location information doesn't match with the details on the CSR.
- All data on the port order doesn't match.

### Reselling providers (Resellers)

- Service Providers (SPs) or Resellers may provide phone numbers that belong to the underlying carriers.
- It's common for customers to receive a bill from a phone company without knowing their numbers belong to an underlying carrier.
- When a reseller is involved, the porting information must still match the underlying records of the carrier, regardless of what information is on the bill of the reseller to the customer.
- If a port rejection involves a reseller, the customer must ask their provider (reseller) to obtain the correct information from the underlying carrier.

### Reschedule or cancel a port

The customer has the option to change or cancel their order in the Control Hub before the losing carrier provides a FOC, without the risk of their numbers being ported or affecting their services.

- Anytime = no risk

After the losing carrier has given FOC, the customer can't modify the port order in the Control Hub and must open a support case with Cisco PSTN Technical Services (PTS).

Requesting to change or cancel the port date after FOC carries a risk that the losing carrier may drop the lines as scheduled, disrupting phone service.

- 72 hours = minimal risk
- 48-72 hours = low risk
- 24-48 hours = moderate risk
- < 24 hours = high risk

These details may vary by country.

### Snapback or emergency restore

A snapback, also known as an emergency restore, involves the immediate porting of a number back to the losing carrier.

The time window can range 1–48 hours, depending on losing carrier and country.

- Snapbacks may be a result of an incorrect or unforeseen circumstance during porting, but they may also be due to slamming (unauthorized porting to another carrier, whether intentional or in error).
- The customer must open a PSTN Technical Support (PTS) support case as soon as possible to initiate the snapback request. See [Raising a Cisco Calling Plan support case](https://help.webex.com/en-us/article/01sijg/Porting-and-number-policy-for-Cisco-calling-plans#section%5Foyq%5F24x%5Fkbc).

### Port activation and postport advice

#### Port in - day of port (FOC)

On the scheduled day (FOC Date) for your number porting, it's recommended to perform a few checks to confirm that everything is in order and prepared for the porting process. Ensure that you have—

- Assigned a number or all numbers to the associated users or features that are set to be ported.
- Your system provisioned and any hardware configured and prepared for porting.

#### Port activation

Ports activate automatically at the time of FOC. However, sometimes there may be a slight delay in porting your number(s). Generally, your numbers are ported by FOC, but this can be affected due to the following reasons:

- The Losing Provider (LCP) releasing the numbers.
- The systems between Cisco (Gaining Provider) and the losing provider.
- There may be multiple carriers in between the gaining and losing provider if the code or range holders are different to the current carrier.  
Code or range holders need to add their prefixes within the exchanges for calls to route correctly which may also delay activation timings.
- Unusually high volumes of requests (there may be a slight delay).
- Allow at least 15 minutes (30 minutes for project or complex ports) for numbers to begin working.

If activation takes longer than expected, we would advise the following:

- If numbers aren't working 15–30 minutes after the port activation time, check all the Control Hub configurations, orders, and telephone number statuses.
- After confirming configurations and statuses and the numbers are still not making or receiving calls, open a PTS support case. See [Raising a Cisco Calling Plan support case](https://help.webex.com/en-us/article/01sijg/Porting-and-number-policy-for-Cisco-calling-plans#section%5Foyq%5F24x%5Fkbc). The PTS team troubleshoots and work to resolve the issue as quickly as possible.

### PTS support and hours

- Day of Port – Losing Provider Porting support (dependent on the LCP and country) hours are generally between 9 a.m–4 p.m on standard business days.
- Cisco PSTN Technical Support (PTS) is available 24/5.

  - PTS aim to respond within 2 hours of a newly raised case.
  - The goal of the PTS is to resolve all issues as quickly as possible; all committed times are best effort.

- Issues that originate from the Losing Provider or any third party vendor: Although PTS continuously chases and apply pressure where possible, PTS must also allow a period of time (governed by SLAs) to resolve issues before escalating them internally.
- The support scope of the PTS is Cisco Calling Plan numbering orders including number porting, new number ordering and any inquiries related to the mentioned.

#### Raising a Cisco Calling Plan support case

To raise a Cisco Calling Plan support case, use the link provided in your PSTN order within the Control Hub.

1. Go to Calling \>  PSTN  \> Orders
2. If you don't have an order, you can select your order.  
To start an order, Select your location \>  Order New Numbers \>  Next.  
You do not have to continue beyond selecting numbers stage to have the Open a Cisco Calling Plans support case option.  
To order for new phone numbers, see [Order new phone numbers](https://help.webex.com/en-us/article/nousk9ab/Get-Started-with-the-Cisco-Calling-Plans#task%5FF86AA0031DB850D5AF722B9F6E356F49) section.
3. Click Open a Cisco Calling Plans support case link in the Order/Mock Order to open a PTS support case.  
It launches a ticketing portal.
4. Select the correct category and subcategory and submit.

Alternatively, email us at _pstn-support@cisco.com_ and we can create a case on your behalf.

## Service cancellation

Upon termination or cancellation of the Cisco Calling Plans, you are solely responsible for porting the numbers to another service provider if you wish to retain ownership of them. Numbers that are not ported out will be released after a reasonable period. Cisco cannot guarantee the availability of a phone number once it has been released.
