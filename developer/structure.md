# Project Structure

LinkSheet follows a modular architecture to separate concerns and improve build times.

## Core Modules

* **`app`**: The main application module. Contains the UI entry points and glue code.

## Feature Modules (`features/`)

* **`browser`**: Logic for detecting and managing web browsers.
* **`downloader`**: Handles file downloads.
* **`libredirect`**: Implementation of LibRedirect integration.
* **`shizuku`**: Shizuku service integration code.
* **`wiki`**: likely related to in-app documentation or help.
* **`systeminfo`**: Utilities for retrieving device and system information.
* **`devicecompat`**: Compatibility layers for different Android versions/ROMs.
* **`engine`**: Core processing logic for link matching and handling.
* **`profile`**: User profile and settings management.

## Integration Modules (`integration/`)

* **`clearurl`**: Logic for ClearURLs integration.
* **`amp2html`**: Converter for AMP links to standard HTML.
* **`embed-resolve`**: Logic for resolving embedded content.

## Libraries (`lib/`)

* **`api`**: Common interfaces and API definitions.
* **`common`**: Shared utility classes and extensions.
* **`compose`**: Jetpack Compose UI components and themes.
* **`bottom-sheet`**: Custom bottom sheet implementation.
