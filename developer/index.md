# Developer Guide

::: danger CRITICAL: Build Crashes
If the application crashes immediately after a self-build, it is likely due to the cloud data collection (analytics) failing to initialize (e.g., missing API keys or connectivity issues).

**Solution:** Refer to the commits in [this branch](https://github.com/xihale/LinkSheet/tree/self-build) to temporarily remove or disable the cloud data collection features for local development.
:::

## Prerequisites

* **Android Studio:** Latest stable version.
* **JDK:** JDK 17 or higher.
* **Android SDK:** Latest SDK tools and platforms.

## Building from Source

1. **Clone:** `git clone https://github.com/LinkSheet/LinkSheet.git`
2. **Open:** Open the project in Android Studio and wait for Gradle sync.
3. **Run:** Select a build variant and click **Run**.

## Build Variants

LinkSheet uses **product flavors** and **build types**:

* **Flavors:**
    * `foss`: Recommended for developers. No proprietary services or telemetry.
    * `pro`: Includes Aptabase Analytics and advanced redirect features. Requires API keys.
* **Types:** `debug`, `release`, `nightly`, `benchmark`.

To build via CLI:
```bash
./gradlew assembleFossDebug
```

## Nightly Builds

The project uses a nightly release model via GitHub Actions. Builds are released to the [LinkSheet/nightly](https://github.com/LinkSheet/nightly) repository.

## License

LinkSheet is licensed under **LPL** (excluding strings). Strings are licensed under **GPL-3.0**.
