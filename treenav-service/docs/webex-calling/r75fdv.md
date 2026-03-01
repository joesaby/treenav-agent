---
title: "Webex App | Error messages for Calling"
product: "Webex Calling"
article_id: "r75fdv"
url: "https://help.webex.com/en-us/article/r75fdv/Webex-App-Error-Messages-For-Calling"
last_updated: "2025-02-13"
description: "If you use phone services in Webex App, you may see an error message in the app
that lets you know if there&#x27;s an issue and the steps you can take to fix it."
tags: ["webex-calling", "webex-for-cisco-broadworks"]
source: "help.webex.com"
---

# Webex App | Error messages for Calling

This is an example error message:

When you click the error, you'll see a more detailed message, typically including a suggested fix.

For a general connection issue, will check network status to provide action as either Reconnect or [Health Checker](https://help.webex.com/en-us/n2g8glg/).

[Find out what calling service you have](https://help.webex.com/en-us/nbtgrzx/) if you are not sure which option to expand.

[Unified CM Errors](#Cisco%5FGeneric%5FTopic.dita%5F1929a8da-1ccf-494e-a95c-b19b7a0931d4)

- [Sign-In](#id%5F138727)
- [Connection](#id%5F138724)
- [Authentication Status](#id%5F138725)
- [Registration Status](#id%5F138726)

The following table lists the sign-in errors you could see when accessing phone services through Webex App. When you see an error like this, try one of:

- In SSO environments, start a new session in the Phone Service settings.
- In non-SSO environments, open Phone Service settings and sign in again.

If the error persists when you sign in, share the error code and this article with your calling administrator or IT help desk.

| Error Code                                       | Message                                                                                                                                       | Fix                                                                                                                                               |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unknown = 1                                      | Unknown Error: 1000:1                                                                                                                         | For SSO environments, start a new session in the Phone Service settings. For non-SSO environments, open Phone Service settings and sign in again. |
| UnknownStartFeatureSetFailure = 2                | Sign into your account to use your phone services. Error: 1000:2                                                                              |                                                                                                                                                   |
| FeatureSetNotProvisioned = 3                     | Sign into your account to use your phone services. Error: 1000:3                                                                              |                                                                                                                                                   |
| UnknownAuthenticator = 4                         | Sign into your account to use your phone services. Error: 1000:4                                                                              |                                                                                                                                                   |
| ErrorReadingConfig = 6                           | Sign into your account to use your phone services. Error: 1000:6                                                                              |                                                                                                                                                   |
| InvalidStartupHandlerState = 7                   | Sign into your account to use your phone services. Error: 1000:7                                                                              |                                                                                                                                                   |
| InvalidLifeCycleState = 8                        | Phone service registration failed. Error:1000:8                                                                                               |                                                                                                                                                   |
| ConfigChangeSignout = 99                         | Sign into your account to use your phone services. Error: 1000:99                                                                             |                                                                                                                                                   |
| ConfigChangeReset = 100                          | Sign into your account to use your phone services. Error:1000:100                                                                             |                                                                                                                                                   |
| InvalidCertRejected = 101                        | Your connection to the server has been rejected due to an invalid certificate. Error: 1000:101                                                |                                                                                                                                                   |
| SSOPageLoadError = 400                           | Can't load SSO browser page. Try again later. Error: 1000:400                                                                                 |                                                                                                                                                   |
| SSOStartSessionError = 500                       | Failed to start a new SSO session. Try again. Error: 1000:500                                                                                 |                                                                                                                                                   |
| SSOUnknownError = 600                            | Can't load SSO browser page. Try again. Error: 1000:600                                                                                       |                                                                                                                                                   |
| SSOCancelled = 601                               | Sign into your account to use your phone services. Error: 1000:601                                                                            |                                                                                                                                                   |
| SSOWebexCloudError = 602                         | Failed to start a new SSO session. Try again. Error: 1000:602                                                                                 |                                                                                                                                                   |
| SSOCertificateError = 603                        | Cannot start a new session due to a certificate problem. Contact your administrator. Error: 1000:603                                          |                                                                                                                                                   |
| SSOInvalidUserSwitch = 604                       | Sign into your account to use your phone services. Error: 1000:604                                                                            |                                                                                                                                                   |
| SSOWhoAmIFailure = 605                           | Failed to start a new session. Try signing into your phone service again. Error: 1000:605                                                     |                                                                                                                                                   |
| SSOSessionExpired = 606                          | Your session has expired. Try signing into your phone service again. Error: 1000:606                                                          |                                                                                                                                                   |
| SSOEdgeConfigNeeded = 607                        | Sign into your account to use your phone services. Error: 1000:607                                                                            |                                                                                                                                                   |
| InvalidBrowserResponse = 608                     | Your session has expired. Try signing into your phone service again. Error: 1000:608                                                          |                                                                                                                                                   |
| CredentialsRequired = 611                        | Sign into your account to use your phone services. Error: 1000:611                                                                            |                                                                                                                                                   |
| CommonIdentityProvisioningUser = 701             | Phone service registration failed. Error:1000:701                                                                                             |                                                                                                                                                   |
| ServiceDiscoveryFailure = 1001                   | Can't find your phone service. Check your phone service preferences. Error: 1000:1001                                                         |                                                                                                                                                   |
| ServiceDiscoveryAuthenticationFailure = 1002     | Incorrect username or password. Error: 1000:1002                                                                                              |                                                                                                                                                   |
| ServiceDiscoveryCannotConnectToCucmServer = 1003 | Can't communicate with Unified CM server. Check your phone service preferences. Error: 1000:1003                                              |                                                                                                                                                   |
| ServiceDiscoveryNoCucmConfiguration = 1004       | Can't find your phone service. Check your phone service preferences. Error: 1000:1004                                                         |                                                                                                                                                   |
| ServiceDiscoveryNoSRVRecordsFound = 1005         | Can't find your SRV record. Check your phone service preferences. Error: 1000:1005                                                            |                                                                                                                                                   |
| ServiceDiscoveryCannotConnectToEdge = 1006       | Cannot communicate with the server. Check your phone service preferences. Error: 1000:1006                                                    |                                                                                                                                                   |
| ServiceDiscoveryNoNetworkConnectivity = 1007     | You're not connected to the internet. Check your network settings. Error: 1000:1007                                                           |                                                                                                                                                   |
| ServiceDiscoveryUntrustedCertificate = 1008      | No service discovered due to an untrusted certificate from server. Error: 1000:1008                                                           |                                                                                                                                                   |
| ServiceDiscoveryPrimaryAuthChanged = 1009        | Your administrator has changed your setup. If you lose your connection, you may need to sign into your phone services again. Error: 1000:1009 |                                                                                                                                                   |
| ServiceDiscoveryNoUserLookup = 1010              | Your account configuration is invalid. Contact your administrator. 1000:1010                                                                  |                                                                                                                                                   |
| ConnectionFailedByMRAPolicy = 1100               | Phone service failed due to MRA policy setting. Error: 1000:1100                                                                              |                                                                                                                                                   |
| ServiceDiscoveryAuthorizationModeChanged = 1012  | Your phone service has been disconnected due to a change in the authorization mode. Try restarting Webex App. Error: 1000:1012                |                                                                                                                                                   |
| ServiceDiscoveryHomeClusterChanged = 1013        | Your phone service has been disconnected because your home Unified CM cluster has changed. Try restarting Webex App. Error: 1000:1013         |                                                                                                                                                   |

__Table 1\. Sign-in error codes__
| Error code | Error                                                    | Description / action                                                                                                                   |
| ---------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1000:1014  | ServiceDiscoveryPolicyNotAllowed                         | Webex is not allowed to run on this device because of a policy configured for your organization in Control Hub.                        |
| 1000:1015  | ServiceDiscoveryLocationUdsConnectionFailure             | Webex failed to connect to CUCM, possibly because of the network.                                                                      |
| 1000:1016  | ServiceDiscoveryLocationUdsRequestFailure                | Webex request to CUCM failed. There may be an HTTP error assocaiated, for example 404.                                                 |
| 1000:1017  | ServiceDiscoveryServersUdsRequestFailure                 | Webex failed to fetch UDS Servers from CUCM.                                                                                           |
| 1000:1018  | ServiceDiscoverySSOQueryFailure                          | Webex failed to query SSO status from CUCM during on-premises connection.                                                              |
| 1000:1020  | ServiceDiscoveryEdgeGetOAuthCbRequestFailed              | Webex failed to query SSO status from Expressway during MRA connection.                                                                |
| 1000:1021  | ServiceDiscoveryEdgeGetEdgeSSORequestFailed              | Webex failed to fetch SSO authenticate URL from Expressway during MRA connection.                                                      |
| 1000:1022  | ServiceDiscoveryProxyAuthenticationFailed                | Failed to authenticate proxy.                                                                                                          |
| 1000:1023  | ServiceDiscoveryGetEdgeConfigServiceNameUnavaliable      | Webex failed to get edge configuration from Expressway during MRA connection.                                                          |
| 1000:1024  | ServiceDiscoveryGetEdgeConfigInvalidEdgeConfiguration    | Webex cannot parse the edge configuration received during MRA connection.                                                              |
| 1000:1025  | ServiceDiscoveryGetEdgeConfigSSLConnectionError          | Webex failed to connect to Expressway using MRA, possibly because of an underlying network issue.                                      |
| 1000:1026  | ServiceDiscoveryManualUCMFlowLocatorAlreadyExists        | The user's home cluster is already manually configured.                                                                                |
| 1000:1027  | ServiceDiscoveryUDSServersQueryUnauthorised              | The UDS query is unauthorised by CUCM. There may be an associated HTTP error, for example 401, from CUCM.                              |
| 1000:1028  | ServiceDiscoveryUDSServersConnectionFailed               | Webex failed to connect to the UDS server.                                                                                             |
| 1000:1029  | ServiceDiscoveryUDSServersInvalidURI                     | The URI for the UDS Server is invalid.                                                                                                 |
| 1000:1030  | ServiceDiscoveryUDSServersQueryRequestFailed             | The request to the UDS Server query failed.                                                                                            |
| 1000:1031  | ServiceDiscoveryLocatorUDSUserIdentifierNotSet           | No User identifier.                                                                                                                    |
| 1000:1032  | ServiceDiscoveryLocatorUDSNoHomeUDSFound                 | No Home cluster found.                                                                                                                 |
| 1000:1033  | ServiceDiscoveryCreateDeviceUserLookupFailed             | Failed to lookup CUCM Server                                                                                                           |
| 1000:1034  | ServiceDiscoveryNoServiceRecord                          | No DNS SRV Record.                                                                                                                     |
| 1000:1035  | ServiceDiscoveryTFTPFileURLSNotSet                       | Cisco TFTP Service is not enabled in CUCM Server.                                                                                      |
| 1000:1036  | ServiceDiscoveryTFTPIllegalState                         | TFTP request failed due to state error.                                                                                                |
| 1000:1037  | ServiceDiscoveryTFTPNoFilesToUpdate                      | TFTP request failed due to no file.                                                                                                    |
| 1000:1038  | ServiceDiscoveryVersionQueryNoServersConfigured          | No CUCM UDS Servers found.                                                                                                             |
| 1000:1039  | ServiceDiscoveryTFTPParsedValueIsEmpty                   | Failed to parse tftp response body                                                                                                     |
| 1000:1040  | ServiceDiscoveryNoLocatorUDS                             | Failed to query home cluster for the email or username.                                                                                |
| 1000:1041  | ServiceDiscoveryCreateDeviceFailedServerURIError         | No valid server url to create device.                                                                                                  |
| 1000:1042  | ServiceDiscoveryCreateDeviceFailedServerError            | Failed to create device and CUCM replied with HTTP 500 error.                                                                          |
| 1000:1043  | ServiceDiscoveryCreateDeviceFailedTemplateNotFound       | Failed to create device because no device template found in CUCM. CUCM replied with HTTP 600 error.                                    |
| 1000:1044  | ServiceDiscoveryCreateDeviceFailedExtensionNotAssociated | Failed to create device because no extension DN is associated with the userId in CUCM. CUCM replied with HTTP 601 error.               |
| 1000:1045  | ServiceDiscoveryCreateDeviceFailedToFetch                | Failed to fetch device configuration.                                                                                                  |
| 1000:1046  | ServiceDiscoveryCreateDeviceFailedToCreate               | Failed to create device and CUCM replied with HTTP 602 error.                                                                          |
| 1000:1100  | ConnectionFailedByMRAPolicy                              | The Edge server refused to provide an access token returning HTTP 403\. Check the user configuration on the Edge service and the CUCM. |

| Error Code                           | Message                                                                                                                                                                                 |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WaitingForConfigFile                 | Waiting for configuration file.                                                                                                                                                         |
| NotStarted                           | Feature set not started.                                                                                                                                                                |
| No Network                           | Failed to connect.                                                                                                                                                                      |
| Failover                             | Connection failover.                                                                                                                                                                    |
| Fallback                             | Connection fallback.                                                                                                                                                                    |
| RegAllFailed                         | Device registration failed.                                                                                                                                                             |
| Shutdown                             | Connection shut down.                                                                                                                                                                   |
| LogoutReset                          | Connection reset due to you signing out.                                                                                                                                                |
| InvalidCredentials                   | Incorrect username or password.                                                                                                                                                         |
| NoCredentialsConfigured              | Incorrect username or password. Try using your Jabber credentials.                                                                                                                      |
| CTIShutdown                          | Can't connect to the Computer Telephony Integration server.                                                                                                                             |
| CTLReset                             | The certificate trust list isn't synchronized with the TFTP server. Contact your administrator.                                                                                         |
| LineRegistrationFailure              | Can't register your phone line.                                                                                                                                                         |
| RegisteredElsewhere                  | Your phone service account is already in use by Jabber or another device. Click to sign into phone service in Webex Teams.                                                              |
| NoRemoteDestinationAvailable         | You must add a remote destination number to proceed.                                                                                                                                    |
| CouldNotActivateRemoteDestination    | That remote destination number is already in use. Add a different number.                                                                                                               |
| NoCtiServersConfigured               | The CTI server isn't configured. Contact your administrator.                                                                                                                            |
| NoTftpServersConfigured              | No TFTP server configured. Contact your administrator.                                                                                                                                  |
| TftpCouldNotConnect                  | Can't reach your phone service. Check your network connection and phone service preferences. [See the Health Checker in the app](https://help.webex.com/n2g8glg/) for more information. |
| NoDeviceConfigured                   | Your administrator hasn't set up your phone service yet.                                                                                                                                |
| InvalidConfig                        | Can't find your server. Check your phone service preferences.                                                                                                                           |
| CouldNotConnect                      | Can't reach your phone service. Check your network connection and phone service preferences. [See the Health Checker in the app](https://help.webex.com/n2g8glg/) for more information. |
| DeviceNotInService                   | Can't connect to a device. Select another device to make calls.                                                                                                                         |
| DeviceRegTimedOut                    | Device registration timed out.                                                                                                                                                          |
| DeviceRegDeviceAlreadyRegistered     | You're already registered to this device.                                                                                                                                               |
| DeviceRegCouldNotConnect             | Can't connect to your phone service.                                                                                                                                                    |
| DeviceRegNoDevicesFound              | Can't connect to your phone service.                                                                                                                                                    |
| DeviceRegAuthenticationFailure       | Device authentication failed.                                                                                                                                                           |
| DeviceRegSelectedDeviceNotFound      | Can't connect to your phone service.                                                                                                                                                    |
| DeviceRegSelectedLineNotFound        | Selected line not found.                                                                                                                                                                |
| DeviceRegCouldNotOpenDevice          | Can't connect to your phone service.                                                                                                                                                    |
| DeviceRegCouldNotOpenLine            | Can't connect to your phone service.                                                                                                                                                    |
| DeviceNotAuthorised                  | You're not authorized to use this device.                                                                                                                                               |
| DirectoryLoginNotAllowed             | Can't connect to your phone service due to a configuration error. Contact your administrator.                                                                                           |
| TLSFailure                           | TLS connection failure                                                                                                                                                                  |
| IpModeMismatch                       | The local IP and Unified CM IP mode don't match.                                                                                                                                        |
| HostResolutionFailure                | Can't resolve server hostname.                                                                                                                                                          |
| ServerError                          | Server isn't currently available.                                                                                                                                                       |
| RequireStorageHelper                 | N/A                                                                                                                                                                                     |
| DeviceConfigurationRetrievalTimedOut | Retrieving phone service configuration file timed out.                                                                                                                                  |
| EdgeIpModeNotSupported               | Edge can't support current IP mode.                                                                                                                                                     |
| DisabledByMRAPolicy                  | Your phone service connection has been disallowed by the MRA policy.                                                                                                                    |

| Error Code                | Message                                                                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InValidConfig             | Can't find your server. Check your phone service preferences.                                                                                                                           |
| InValidCredentials        | Incorrect username or password. Try signing into your phone service again.                                                                                                              |
| InvalidToken              | Invalid token. Try signing into your phone service again.                                                                                                                               |
| ServerCertificateRejected | Service certificate rejected. Can't connect to your phone service.                                                                                                                      |
| ClientCertificateError    | Client certificate error. Can't connect to your phone service.                                                                                                                          |
| NoCredentialsConfigured   | Incorrect username or password. Try using your Jabber credentials.                                                                                                                      |
| CouldNotConnect           | Can't reach your phone service. Check your network connection and phone service preferences. [See the Health Checker in the app](https://help.webex.com/n2g8glg/) for more information. |
| Unknown                   | Can't reach your phone service. Contact your administrator.                                                                                                                             |
| SSLConnectError           | SSL Connection Error.                                                                                                                                                                   |
| ucHybridIncompatability   | You can't use your phone service when it's been enabled for Hybrid Call Service. Contact your administrator.                                                                            |

| Error Code              | Message                                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Connecting              | Telephony device registration in progress…                                                                                            |
| ConnectionTerminated    | Your phone service account is already in use by Jabber or another device. Click to sign into phone service in Webex App to reconnect. |
| EdgeNoDeskphone         | Your desk phone service is not enabled in your environment. You must connect to softphone mode in Webex App.                          |
| UcHybridIncompatability | You can't use your phone service when it's been enabled for Hybrid Call Service. Contact your administrator.                          |

[Webex Calling and Calling hosted by a Service Provider Errors](#Cisco%5FGeneric%5FTopic.dita%5F75337b03-53ae-4845-93ee-845c9b937678)

- [Sign-In](#Cisco%5FReference.dita%5Fdd0f9156-f29d-4d04-bb93-a73115615ae7)
- [Connection](#Cisco%5FReference.dita%5F33e612ee-d49d-484f-8387-0fe8cf9b7466)

The following table displays sign-in error codes that may display in the Webex App app.

This is not an exhaustive list of error codes. The table lists only existing error codes for which the Webex App app does not currently provide clear direction to the user.

| Error Code | Error Message                                                                                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200010     | Failed validating credentials as user unauthorized                                                                                                                                            |
| 200016     | Failed validating credentials as session not found                                                                                                                                            |
| 200018     | Failed validating credentials as user is locked out                                                                                                                                           |
| 200019     | Failed validating credentials as add user failed for self-activation                                                                                                                          |
| 200022     | Failed to send email as user in unauthenticated                                                                                                                                               |
| 200026     | Failed validating email due to pre-check failure or pending user incorrect state for PartnerOrgUUID : {partnerOrgUUID} , BroadoworksUUID : {broadworksUUID} , ConfigSetUUID : {configSetUUID} |
| 200039     | Failed validating email as emailId already in use in a different Org                                                                                                                          |
| 200040     | Failed validating email as configSet is not matching with configSet in customerConfig                                                                                                         |
| 200041     | Failed validating email as user is already entitled for another conflicting service, conflicting entitlements                                                                                 |
| 200042     | Failed validating email as email is already associated with another UserId                                                                                                                    |
| 200043     | Failed validating email as user customer config mapping is incorrect                                                                                                                          |
| 200044     | Failed validating email as userId is already in use on this cluster                                                                                                                           |
| 200045     | Failed adding user through self-activation as user is already part of a different org                                                                                                         |
| 200046     | Failed adding user through self-activation as multiple pending users exists with same userId under same cluster                                                                               |
| 200047     | Failed adding user through self-activation as userId is already in use on this cluster                                                                                                        |
| 200048     | Failed adding user through self-activation as email address was already provisioned with a different userId                                                                                   |
| 200049     | Failed adding user through self-activation as userId is already in use on this cluster                                                                                                        |
| 200050     | Failed adding user through self-activation as provisioningID doesn't match expected provisioningID of subscriber's enterprise                                                                 |
| 200051     | Failed adding user through self-activation as spEnterpriseId specified in this request conflicts with a Service Provider or Enterprise already provisioned from this Cluster                  |
| 200054     | Failed validating email as the region of the customer org and partner org mismatch                                                                                                            |

### Forced Sign out

You can only be signed into Webex App on one desktop and one tablet and one mobile at a time. 

**Desktop**: 

If you already signed into Webex App on a desktop and signs into Webex App on another desktop with the same username, then the Phone Services in the first desktop will be automatically signed out. A message will be displayed on the first desktop allowing you to sign back in on the first desktop (which will sign out the second app). 

**Mobile/Tablet:** 

If you have already signed into Webex App on one mobile device, you can sign into Webex App on a second mobile device, but you cannot receive new call notifications on the first device anymore. You will get a message when a new call comes in on the first device asking if you want to continue to use the first device. If you select Cancel, you can pick up the call on the second device and phone services will be disconnected on the first device. If you select Sign in, then phone services will be disconnected on the second device. 

Same applies to signing in to Webex App on two tablets. 

### Error codes

The following table displays phone services connection error codes that may display in the Webex App.

This is not an exhaustive list of error codes. The table lists only existing error codes for which the Webex App does not currently provide clear direction to the user.

| Error Code | Error Message                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1000:1     | On clicking the phone services banner, error code 1000:1 is displayed. Generally indicates that the Device Configuration was downloaded successfully, but a setting may be missing or incorrect. The most common example that has been observed is that Session Border Controller (SBC) TAGS are set incorrectly or are missing altogether. In this case, the client defaults to trying to register to the BroadCloud instead of to the BroadWorks server. |
| 1000:1501  | Invalid Login Credentials                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1000:1502  | Token Failure                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1000:1503  | Forced Sign Out                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1000:1504  | IPC Not Responding                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1000:1505  | BroadWorks Device Failure This usually indicates that there is a problem downloading a Device Config for the user. Confirm that the correct **Identity/Profile Type** is applied to users under **User** \> **Call Control** \> **Shared Call Appearance**: For Desktop apps, it should be **Business Communicator — PC** For Mobile apps, it should be **Connect — Mobile**                                                                               |
| 1000:1506  | Sign-In Failure                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1000:1507  | BroadWorks Config Download Failure On the BroadCloud or BroadWorks server, check under **Group** \> **Resources** \> **Identity/Device Profiles** \> **Profile** \> **File** and confirm that there is a valid config-wbx.xml config file applied to the client. Note that all support for UCaaS config\_wxt.xaml files is now removed.                                                                                                                    |
| 1000:1508  | SSO Canceled                                                                                                                                                                                                                                                                                                                                                                                                                                               |
