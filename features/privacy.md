# Link Processing & Privacy 🌐

LinkSheet includes powerful tools to clean, resolve, and secure the links you open. Features marked with 🌐 involve network requests and may affect the speed of the bottom sheet appearance.

## Redirect Resolution 🌐

LinkSheet can "unroll" shortened links and tracking redirects before they reach your browser.

* **Follow Redirects 🌐:** Automatically follows HTTP redirects.
  * **Local Cache:** Caches results locally to speed up future clicks.
  * **External Service 🌐 [Impact: High]:** Uses a privacy-preserving API (hosted at supabase.com) to resolve redirects without exposing your IP address to the destination server immediately. This adds a network round-trip.
* **Known Trackers Only:** Option to only trigger redirect resolution for known tracking domains, preserving battery and data for normal links.

## Amp2Html 🌐

Automatically converts AMP (Accelerated Mobile Pages) links to their standard, canonical HTML versions.

* **Local/External 🌐:** Like redirects, this can be done locally or via an external service to avoid direct interaction with AMP servers.

## Tracking Protection

### ClearURLs Integration

Uses the [ClearURLs](https://github.com/ClearURLs) rule set to strip tracking parameters (like `utm_source`, `fbclid`) from URLs. This is a local operation (fast).

### FastForward Integration

Uses [FastForward](https://github.com/FastForwardTeam/FastForward) rules to bypass link shorteners and intermediate landing pages.

### LibRedirect Integration

Redirects traffic from popular proprietary platforms to privacy-friendly, open-source frontends.

* **Example:** YouTube -> Invidious, Twitter -> Nitter.

## Privacy Settings

* **LinkSheet Referrer:** By default, LinkSheet hides itself as the "referrer" when opening apps.
* **Hide after Copy:** Automatically close the bottom sheet after you copy a link to the clipboard.
* **Incognito Mode:** (If using a supported browser) LinkSheet can request to open links directly in Incognito/Private mode.

## Telemetry 🌐

LinkSheet collects minimal data by default but respects your choice.

* **Levels:** Disabled, Minimal, Standard, Exhaustive.
* **Impact:** Small network request on app start or event trigger.
* **Transparency:** You can view exactly what is being logged.
