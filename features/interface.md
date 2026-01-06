# User Interface & Interaction

LinkSheet offers extensive customization options to tailor the look and feel of the bottom sheet and how you interact with it.

## Visual Customization

### Theme & Layout

* **Theme Mode:**
  * **System:** Follows your system's light/dark mode setting.
  * **Light/Dark:** Force a specific theme.
  * **Pure Black (Amoled):** Uses a pitch-black background for OLED screens to save battery.
  * **Dynamic Color (Material You):** On Android 12+, LinkSheet adapts to your system wallpaper colors.
* **Grid Layout:** Switch between a compact list view and a grid view for your apps.
* **Search:** Built-in search bar in the bottom sheet to quickly find a specific app.
* **Package Names:** Option to always show the full package name (e.g., `com.android.chrome`) under the app name for precise identification.

### Bottom Sheet Content

* **URL Preview 🌐 [Impact: Medium]:**
  * Shows a preview of the processed URL.
  * **OpenGraph Preview 🌐:** If enabled, LinkSheet fetches the website's metadata (title, image, description). This requires a network request and will delay the bottom sheet until the metadata is retrieved or times out.
* **App Info on Long Press:** View detailed information about an app directly from the selection sheet.
* **Clipboard Card:** Optionally displays the current clipboard content on the main screen if it detects a URL.
* **Hide Choice Buttons:** You can hide the "Just Once" and "Always" buttons to save space.
* **Hide Referring App:** Prevents the app that opened the link from appearing in the list, even if it can handle the link itself.
* **Full Expansion:** Automatically expand the bottom sheet to its full height when opened.

## Interaction

### Tap Customization

You can define specific actions for different gesture types on an app entry:

* **Gestures:** Single Tap, Double Tap, Long Press.
* **Actions:**
  * **Open App:** Simply open the link in the selected app.
  * **Set as Default & Open:** Set the app as the preferred handler for this host and open it.
  * **Open App Settings:** Quickly navigate to the system settings page for that app.
  * **No Action:** Disable the gesture.

### Automation

* **Auto-hide:** Automatically close the bottom sheet after performing an action like "Copy Link" or "Download".
* **Expand on Selection:** Automatically expand the sheet when you tap an app, revealing more options or confirmation buttons.

## Notifications (Toasts)

Customize which actions trigger a system "toast" message:

* **URL Copied:** When you copy a link.
* **Download Started:** When the built-in downloader starts.
* **App Auto-launched:** When LinkSheet automatically forwards a link to a preferred app.
* **Resolve Status:** Notifications for success or failure when resolving redirects via external services.
