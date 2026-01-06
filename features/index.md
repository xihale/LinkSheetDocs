# Core Features

## Browser Management

Control exactly which web browsers are presented to you and how they are handled.

### Modes

- **Always Ask:** The standard behavior. LinkSheet lists all available browsers and lets you choose every time.
- **Single Browser (Specify):** Skips the selection list entirely and always opens links in one specific browser you choose. Useful if you want LinkSheet for app handling but have a single preferred browser.
- **Whitelisted:** Only displays browsers you have explicitly selected. Useful to hide "webview" browsers or secondary browsers you rarely use.
- **None (Native Only):** Hides all browsers from the list. If a native app (e.g., Reddit) is found, it is shown; otherwise, fallback behavior applies.

### Unified vs. Split Settings

- **Unified:** Use the same browser preferences for both standard links and "In-App" links (links opened from inside other apps).
- **Split:** Configure different behaviors for In-App links. For example, you might want a lightweight browser for quick checks inside apps, but your full browser for main browsing.

### Auto-Launch

- **Single App:** If LinkSheet detects only one valid app to handle a link (and it's a native app, not a generic browser), it can launch it automatically without showing the sheet.

## App Handling

LinkSheet excels at restoring the "Open with" functionality for native apps.

### Preferred Apps

- **Host Preferences:** You can assign specific apps to handle specific domains.
    - _Example:_ Set `twitter.com` to always open in "Fenix" instead of the official Twitter app or Chrome.
- **Domain Verification (Android 12+):**
    - **The Problem:** Android 12+ "locks" links to their official apps (e.g., YouTube links always open in YouTube) if they are "Verified", bypassing LinkSheet.
    - **The Solution:** LinkSheet lists these apps and provides a shortcut to **disable** their "Open supported links" setting in Android Settings, allowing LinkSheet to intercept those links again.

### LinkSheet Compat

- **Native Interception:** Some apps (like Google Search) hardcode checks for the official YouTube app. **LinkSheet Compat** is a feature that pretends to be these official apps, intercepting the intent and routing it back to LinkSheet, giving you back control.
    - _Setup:_ Requires selecting "LinkSheet Compat" as the handler for specific domains if prompted.

### Sorting & Usage

- **Usage Stats [Impact: Low/Local]:**
    - Sorts the app list by your most frequently used apps.
    - _Requirement:_ Requires granting **"Usage Access"** permission in Android System Settings.

- **Last Used:** Highlights or suggests the app you used last for a specific domain.

- **History Sorting:** Sort your link history by date, frequency, or alphabetically.

- **Bottom Sheet Search:** Quickly find the app you need with a built-in search bar in the app selection sheet.

## Performance & Network Impact 🌐

To help you balance functionality and speed, features that interact with the network are marked with 🌐.

| Feature | Impact | Why? |
| :--- | :--- | :--- |
| **URL Metadata** | Medium | Fetches site title/image (requires 1 request) |
| **Redirect Resolution** | High | Follows multiple HTTP jumps |
| **External Resolver** | High | Requests a 3rd party API (Supabase) |
| **MIME Detection** | Low | Optimized HEAD request to detect file types (e.g., .apk, .zip) |
| **Amp2Html (Remote)** | Medium | Requests an external conversion service |

_Note: All network requests respect your system's data and battery saving settings._
