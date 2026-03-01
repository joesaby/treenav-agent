---
title: "Update Webex Root CA Certificate for Expressway Hybrid Service Connector Hosts"
product: "Hybrid Services"
article_id: "fta9r7"
url: "https://help.webex.com/en-us/article/fta9r7/Update-Webex-Root-CA-Certificate-for-Expressway-Hybrid-Service-Connector-Hosts"
last_updated: "2024-09-15"
description: "If you use Expressways to host hybrid service connector software, you were
already notified about a certificate change. The deadline of March 31, 2021 has
passed, but this certificate change is still required for your Expressway
connector hosts to function properly. To avoid any disruptions of service,
please complete this update before October 31, 2021."
tags: ["hybrid-services"]
source: "help.webex.com"
---

# Update Webex Root CA Certificate for Expressway Hybrid Service Connector Hosts

The certificate change requires a new Certificate Authority, “IdenTrust Commercial Root CA 1” to be added to your Expressway connector hosts. Please complete the steps below **before October 31, 2021** to upload the new certificate onto a VCS-Control, VCS-Expressway, Expressway Core and Expressway Edge to ensure there is no disruption to the normal functioning of Hybrid Services.

If IdenTrust Commercial Root CA 1 certificates are not uploaded to the Expressway trust store, your Hybrid Services (Hybrid Calendar, Hybrid Message,Serviceability) running on Expressways will not be able to communicate with the Webex Cloud and the services will stop working.

| 1 | [Download the IdenTrust Commercial Root CA 1](https://www.identrust.com/identrust-commercial-root-ca-1) and save it locally with filename identrust\_RootCA1.pem. |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 | On all your Expressways used for hybrid services, navigate to Maintenance > Security > Trusted CA Certificate.                                                    |
| 3 | Go to Browse, upload the identrust\_RootCA1.pem file, and then click Append CA Certificate.                                                                       |
| 4 | Verify the certificate successfully uploaded and is present in the Expressway Trust Store.                                                                        |

[See this document for more information about the original certificate update notice](https://www.cisco.com/c/en/us/support/docs/unified-communications/expressway/216950-cisco-webex-root-ca-certificate-update.html).
