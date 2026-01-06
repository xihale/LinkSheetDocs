# Shizuku Integration (WIP)

::: warning WORK IN PROGRESS
This feature is currently under development and may not be fully functional or available in all builds.
:::

LinkSheet utilizes [Shizuku](https://shizuku.rikka.app/) to perform advanced system operations that typically require root access or ADB commands.

## Purpose

Shizuku allows LinkSheet to directly interact with Android system APIs to:

* **Manage App Links:** Enable or disable "Open supported links" settings for other applications programmatically.
* **System State:** Query the state of verified links and app capabilities more deeply than standard permissions allow.

## Setup

1. Install and configure the [Shizuku app](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api).
2. Start the Shizuku service (via Root or Wireless Debugging).
3. Authorize LinkSheet within Shizuku.

*Note: This feature is essential for users who want to fully automate the takeover of link handling from system apps.*
