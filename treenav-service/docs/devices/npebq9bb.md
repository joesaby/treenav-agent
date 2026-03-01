---
title: "Factory Reset | Secure Data Wipe"
product: "Devices"
article_id: "npebq9bb"
url: "https://help.webex.com/en-us/article/npebq9bb/Factory-Reset-Secure-Data-Wipe"
last_updated: "2025-06-06"
description: "In some circumstances it might be necessary to reset a Board, Desk, or Room
Series device to its default factory settings. For example, if there is a severe
problem with the device, factory reset is a last resort. Factory reset is also a
secure method of completely erasing all data from the device."
tags: ["devices"]
source: "help.webex.com"
---

# Factory Reset | Secure Data Wipe

The file system on Board, Desk, and Room Series devices is encrypted using Linux Unified Key Setup (LUKS), the standard for Linux hard disk encryption. The file system encryption key is saved in either NVRAM or NOR-flash. During a factory reset, the key is overwritten and cannot be recovered, rendering anything on the disk unreadable. This makes factory reset a secure method of deleting and purging data in compliance with US DOD 5220.22M and NIST 800-88r1\. 

During a factory reset:

- Call logs are deleted
- Passphrases are reset to default
- All device parameters are reset to default values
- All files that have been uploaded to the device are deleted
- The previous (inactive) software image is deleted
- Option keys are not affected

You can’t undo a factory reset. Make certain that it’s necessary to do so, before you start.

We recommend that you use the web interface or user interface to factory reset the device. You should back up the log files, configurations, and custom elements of the device before you perform a factory reset; otherwise this data will be lost. Refer to the [ Administration Guide ](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/roomos-1011/desk-room-board-administration-guide-roomos-1011.pdf) for information about the different ways to back up and reset your device.

## NIST 800-88r1

The [NIST standard 800-88r1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-88r1.pdf) specifies three levels of sanitization:

- **Clean:** Guard against noninvasive recovery techniques
- **Purge:** Make data recovery infeasible
- **Destroy:** Make data recovery infeasible and prevent future use

Section 2.6 of the standard talks about the use of Cryptographic Erase (CE) and how it can be applied to meet the Purge level.

Section 2.6.1 and 2.6.2 lists the conditions for when to (not) consider CE:

- Do not use CE to purge media if the encryption was enabled after sensitive data was stored on the device without having been sanitized first.
- Do not use CE if it is unknown whether sensitive data was stored on the device without being sanitized prior to encryption.
- Consider using CE when all data intended for CE is encrypted prior to storage on the media (including the data, as well as virtualized copies).
- Consider using CE when we know the location(s) on the media where the encryption key is stored (be it the target data's encryption key or an associated wrapping key) and can sanitize those areas using the appropriate media-specific sanitization technique, ensuring the actual location on media where the key is stored is addressed.
- Consider using CE when we can know that all copies of the encryption keys that are used to encrypt the target data are sanitized.
- Consider using CE when the target data's encryption keys are, themselves, encrypted with one or more wrapping keys and we are confident that we can sanitize the corresponding wrapping keys.
- Consider using CE when we are confident of the ability of the user to clearly identify and use the commands that are provided by the device to perform the CE operation.

In RoomOS, the encrypted file systems that are used for customer data are set up and encrypted early in the initial boot, prior to the creation of any sensitive data. The key is stored as described above either in eeprom (older software) or using the SoC's trust zone mechanisms, and can be securely sanitized.

The key is never backed up and there is no key escrow mechanism.

With all this in mind, Cisco asserts that the factory reset mechanism in RoomOS is compliant with the Purge level in NIST 800-88r1\. 

## Customer data encryption

**Disk Encryption**

The devices use a flash device for mass storage, where secure deletion is impossible to guarantee. All customer data on the devices is therefore stored on encrypted file systems, and when a reset to factory defaults is performed, only the encryption key is deleted, rendering the customer data inaccessible.

To facilitate this, we create a suitably large file on the main flash and use the standard Linux tool cryptsetup to create a loopback device. On this device we create a standard ext4 file system. Details on where we store the encryption key is in the next section.

The loop device is created using LUKS1 with a key size of 512 bits and the aes-xts-plain64 cipher:

```
 $ cryptsetup status /dev/mapper/config
 /dev/mapper/config is active and is in use.
 type: LUKS1
 cipher: aes-xts-plain64
 keysize: 512 bits
 key location: dm-crypt
 device: /dev/loop5
 loop: /mnt/base/image1/rwfs/config.img
 sector size: 512
 offset: 4096 sectors
 size: 61440 sectors
 mode: read/write
```

During regular operation of the device, the cryptsetup is used to decrypt the file systems before they are mounted. When the encryption key is deleted, it is no longer possible to set up the loop device and mount the file systems.

The encryption key we use is a read of 20 bytes from /dev/urandom which is run-through sha1sum to get an ascii representation. The key is generated on the first boot after a factory reset and does not change until a new factory reset is performed.

**Data encryption key protection**

We use two different encryption keys on our devices. One for the /data partition inside the Android container (for Microsoft MTR and Zoom) and one for other file systems (used for customer configuration, wall papers, call log, historical logs, and so on).

For the /data partition in Android, the private key has always been stored securely inside the Nvidia TrustZone boundary or, on the Room Navigator, encrypted using the SoC's built-in encryption mechanism.

Up to and including ce-11.25.x, the other key is stored in EEPROM. While EEPROM is inaccessible to users coming through any normal channel, it can be forcibly removed from the device (along with the flash disk) to actually decrypt the contents.

Starting with ce-11.26.x we are moving the regular file system encryption key to Nvidia trusted execution environment (TEE) based on ARM TrustZone\[0\], so the key will not be possible to extract from the Nvidia SoC. Since the only (known) way to circumvent the secure boot process is to replace the entire Nvidia SoC, which would then remove the key, key extraction would be limited to finding vulnerabilities in the CE code to get a root shell with sufficient permissions to obtain the key.

For Room Navigator the migration will be in a later version.
