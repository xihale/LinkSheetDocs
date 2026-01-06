---
layout: home

hero:
  name: "LinkSheet"
  text: "Restore Link Control on Android"
  tagline: Reimplementing Pre-Android 12 system link handling behavior.
  actions:
    - theme: brand
      text: Get Started
      link: /features/
    - theme: alt
      text: View on GitHub
      link: https://github.com/LinkSheet/LinkSheet

features:
  - title: Link Management
    details: Choose which app to open links in, restoring control taken away in Android 12.
  - title: Privacy Integrations
    details: Built-in support for ClearURLs, LibRedirect, and FastForward rules.
  - title: Material Design
    details: A modern, customizable UI that fits perfectly with the latest Android aesthetics.
---

## Introduction

LinkSheet reimplements the Pre-Android 12 system link handling behavior in a standalone app, allowing users to choose which app to open links in.

> **IMPORTANT:** LinkSheet is rapidly evolving. Please use the [Nightly Builds](https://github.com/LinkSheet/nightly/releases/latest) for the latest features and fixes.
>
> **NOTE:** This documentation is aligned with commit [c167fe7](https://github.com/LinkSheet/LinkSheet/commit/c167fe7a30bd9de34a664c337c94a0b60b1a4d4d), which is the current HEAD of the master branch.

## Key Features

* **Browser Selection:** always list all browsers, only list native apps, or whitelist specific ones.
* **App Handling:** Set preferred apps for specific hosts.
* **Privacy:** Remove tracking parameters and redirect to privacy-friendly frontends.
* **Multi-Profile Support:** Seamlessly work across personal and work profiles.
* **Customization:** Search, Grid/List views, and detailed theme options.
