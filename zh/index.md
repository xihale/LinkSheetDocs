---
layout: home

hero:
    name: "LinkSheet"
    text: "重夺 Android 链接控制权"
    tagline: 恢复 Android 12 之前的系统链接处理行为。
    actions:
        - theme: brand
          text: 快速开始
          link: /zh/features/
        - theme: alt
          text: GitHub 仓库
          link: https://github.com/LinkSheet/LinkSheet

features:
    - title: 链接管理
      details: 选择用哪个应用打开链接，夺回 Android 12 剥夺的控制权。
    - title: 隐私集成
      details: 内置 ClearURLs, LibRedirect 和 FastForward 规则支持。
    - title: Material Design
      details: 现代、可定制的 UI，完美契合最新的 Android 美学。
---

## 简介

LinkSheet 作为一个独立应用，重新实现了 Android 12 之前的系统链接处理行为，允许用户自主选择打开链接的应用。

> **重要：** LinkSheet 正在快速迭代中。请使用 [Nightly 构建版](https://github.com/LinkSheet/nightly/releases/latest) 以获取最新的功能和修复。
>
> **注意：** 本文档目前对齐至 commit [c167fe7](https://github.com/LinkSheet/LinkSheet/commit/c167fe7a30bd9de34a664c337c94a0b60b1a4d4d)，这是 master 分支的当前 HEAD。

## 主要特性

- **浏览器选择：** 始终列出所有浏览器、仅列出原生应用，或设置特定白名单。
- **应用处理：** 为特定主机名设置首选应用。
- **隐私保护：** 移除追踪参数并重定向至隐私友好的前端。
- **多用户支持：** 在个人和工作资料 (Work Profile) 之间无缝协作。
- **高度定制：** 搜索、网格/列表视图，以及详细的主题选项。
