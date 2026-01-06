# Developer Guide

Welcome to the LinkSheet developer documentation. This section is intended for contributors and those wishing to build LinkSheet from source.

## Prerequisites

* **Android Studio:** Latest stable version recommended.
* **JDK:** JDK 17 or higher (standard for modern Android builds).
* **Android SDK:** Ensure you have the latest SDK tools and platforms installed.

## Building from Source

### Clone the Repository

```bash
git clone https://github.com/LinkSheet/LinkSheet.git
cd LinkSheet
```

### Open in Android Studio

Open the project directory. Gradle sync should start automatically.

### Build Variants

LinkSheet uses **product flavors** and **build types** to create different variants:

#### Product Flavors

The project has two product flavors:

* **foss** - Free and Open Source Software version (no proprietary services)
* **pro** - Pro version with additional features and services

#### FOSS vs Pro

> **Important:** It is recommended to build the **FOSS** variant for development and contributions.

##### FOSS (Recommended for Developers)

* Does not include proprietary services or analytics
* Uses `NoOpAnalyticsClient` which disables all telemetry and analytics
* Fully open source with all dependencies transparent
* Suitable for privacy-focused users and contributors who want to avoid proprietary dependencies

##### Pro

* Includes proprietary services and features:
  * Aptabase Analytics for crash reporting and usage statistics
  * Advanced redirect resolution via external APIs
  * Other premium features
* Requires valid API keys for certain services to function correctly
* Application ID suffix: `.pro`
* Version name suffix: `-pro`

#### Build Types

The project defines several build types:

* **debug** - Debug builds with `.debug` suffix and debuggable enabled
* **release** - Standard release builds with ProGuard/R8 minification
* **nightly** - Rolling release builds with `.nightly` suffix (used for regular releases)
* **releaseDebug** - Release build with debugging enabled (`.release_debug` suffix)
* **migrate** - Migration build type (`.migrate` suffix)
* **benchmark** - Benchmark builds for performance testing

### Available Build Variants

The combination of flavors and build types creates the following variants:

#### FOSS Variants

* `fossDebug` - Debug build of FOSS version
* `fossRelease` - Release build of FOSS version
* `fossNightly` - Nightly build of FOSS version (recommended for testing)
* `fossReleaseDebug` - Release-debug build of FOSS version
* `fossBenchmark` - Benchmark build of FOSS version

#### Pro Variants

* `proDebug` - Debug build of Pro version (with `.pro` application ID suffix)
* `proRelease` - Release build of Pro version
* `proNightly` - Nightly build of Pro version
* `proReleaseDebug` - Release-debug build of Pro version
* `proBenchmark` - Benchmark build of Pro version

### Building Specific Variants

To build a specific variant in Android Studio:

1. Click **Build** → **Select Build Variant**
2. Choose the desired variant from the list
3. Click **Run** or **Build** → **Build Bundle(s) / APK(s)**

Or use Gradle from the command line:

```bash
# Build FOSS release
./gradlew assembleFossRelease

# Build FOSS nightly
./gradlew assembleFossNightly

# Build Pro release
./gradlew assembleProRelease

# Build Pro nightly
./gradlew assembleProNightly
```

### Recent Build Configuration Changes

#### Analytics Configuration

The project has been updated to handle missing or invalid Aptabase API keys gracefully:

1. **NoOpAnalyticsClient**: A no-operation analytics client that safely disables all analytics when no API key is configured. This is the default for the FOSS flavor.

2. **AptabaseAnalyticsClient Improvements**:

  * Improved API key parsing to extract the region from the key format (`{project}-{region}-{key}`)
  * Added validation to check if the region is valid before attempting to use the API
  * Gracefully falls back to `NoOpAnalyticsClient` if:
    * The API key is null or empty
    * The API key format is invalid
    * The extracted region is not supported

This ensures that:

* FOSS builds (without API keys) work correctly with analytics disabled
* Pro builds with invalid API keys fall back gracefully instead of crashing
* The app functions normally even if telemetry services are unavailable

### Signing Configuration

The project supports automatic signing via environment variables:

* **Debug builds** use the default debug keystore
* **Nightly builds** use the `env` signing configuration (expects environment variables for release signing)
* **Release builds** use the release signing configuration

### Nightly Builds

The project uses a nightly release model. GitHub Actions are configured to automatically build and release changes. Check `.github/workflows/build-nightly.yml` for details on the CI pipeline.

Nightly builds are regularly released to the [LinkSheet/nightly](https://github.com/LinkSheet/nightly) repository.

### Output Locations

Built APKs are placed in the following directories:

* `app/foss/nightly/` - FOSS nightly builds
* `app/pro/nightly/` - Pro nightly builds
* `app/build/outputs/apk/` - Other build variants

### Troubleshooting

#### App crashes after self-building
If the application crashes immediately after a self-build, it is likely due to the cloud data collection (analytics) failing to initialize (e.g., missing API keys or connectivity issues).

You can refer to the commits in [this branch](https://github.com/xihale/LinkSheet/tree/self-build) to temporarily remove or disable the cloud data collection features to ensure the app runs correctly in your local environment.

### License

LinkSheet is licensed under **LPL** (excluding strings).
Strings (`strings.xml`, `plural.xml`) are licensed under **GPL-3.0**.
