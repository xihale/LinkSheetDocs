# Advanced & System

For power users, LinkSheet provides deep system integration and developer tools.

## Shizuku Integration

LinkSheet uses [Shizuku](https://shizuku.rikka.app/) to perform system-level operations without root access.

* **Manage App Links:**
  * Allows you to **batch enable or disable** the "Open supported links" setting for multiple apps at once.
  * This is much faster than manually navigating to each app's system settings page to revoke link handling permissions.
* **Verification Reset:**
  * **Purpose:** Forces Android to re-verify app links (Intent Filters).
  * **Use Case:** Useful when app associations get stuck, corrupted, or when you've installed a new app that isn't capturing its links correctly.
* **Requirements:** Shizuku app installed and service running (via Root or Wireless Debugging).

## Downloader 🌐

* **Enable:** Adds a "Download" button to the bottom sheet.
* **MIME Type Detection 🌐 [Impact: Low]:** Automatically detects file types (e.g., `.jpg`, `.pdf`) from the URL by sending a HEAD request to the server.

## Multi-User & Profiles

LinkSheet supports Android's multi-user and work profile features.

* **Profile Switching:** Seamlessly switch between Personal and Work profiles when selecting an app to handle a link.
* **App Detection:** Automatically detects apps installed in different profiles and presents them in the selection sheet.

## Domain Exclusion

Fine-tune how LinkSheet handles specific domains.

* **Exclusion List:** You can specify domains that should be excluded from certain processing logic, such as redirect resolution or tracking protection, to ensure compatibility with complex web applications.

## Import / Export

Backup your configuration or transfer it to another device.

* **Export:** Saves your settings, preferred apps, and rules to a JSON file.
  * *Options:* Include history, Include log hash key.
* **Import:** Restore settings from a file. Note that this overwrites current settings.

## Logging & Debugging

* **Log Viewer:** View internal app logs to diagnose issues.
* **Redaction:** Exported logs can be automatically redacted to remove sensitive info like exact URLs and package names before sharing.
* **Crash Logs:** Option to include stack traces for crash reporting.

## Feature Flags & Experiments

Access the "Experiments" section to try bleeding-edge features that are still in development. These are divided into several groups:

### Improved Bottom Sheet

* **LibRedirect QuickJS engine**: Uses the QuickJS JavaScript engine to execute LibRedirect rules.
  * *Default:* Uses a **Native Kotlin implementation**. The Kotlin version is lighter and faster but may not support all complex redirection rules that require actual JavaScript execution.
* **Ignore accidental taps**: Prevents accidental clicks while the bottom sheet is animating.
* **Manual redirect resolving**: Adds manual controls for triggering redirect resolution.
* **Disable state save**: Prevents the bottom sheet from remembering its state between opens.
* **Aggressive follow redirects**: Attempt to follow redirects even on suspicious or complex URL patterns.

### System & Logic

* **LinkEngine**: A new core engine for matching and processing links.
* **New VLH Page**: A redesigned interface for managing Verified Link Handlers.
* **Disable Log Persistence**: Stops saving internal logs to device storage to save IO and space.

*Note:* These features may be unstable, change frequently, or be moved to stable settings once they are fully tested.
