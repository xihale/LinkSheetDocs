# 开发者指南

欢迎阅读 LinkSheet 开发者文档。本部分面向贡献者和希望从源码构建 LinkSheet 的人员。

## 先决条件

* **Android Studio:** 推荐最新的稳定版本。
* **JDK:** JDK 17 或更高版本（现代 Android 构建的标准）。
* **Android SDK:** 确保已安装最新的 SDK 工具和平台。

## 从源码构建

1. **克隆仓库:**

    ```bash
    git clone https://github.com/LinkSheet/LinkSheet.git
    cd LinkSheet
    ```

2. **在 Android Studio 中打开:**
    打开项目目录。Gradle Sync 应该会自动开始。

3. **构建应用:**
    运行 `app` 配置。

## Nightly 构建

该项目使用 Nightly 发布模式。GitHub Actions 配置为自动构建和发布更改。查看 `.github/workflows/build-nightly.yml` 了解 CI 流程详情。

## 问题排查

### 自编译后闪退
如果自编译后的程序出现闪退，通常是由于云端数据收集功能（Analytics）初始化失败（如缺少 API Key 或网络无法连接）导致的。

你可以参考 [这个分支](https://github.com/xihale/LinkSheet/tree/self-build) 中的 commit，暂时删除或禁用相关的云端数据收集功能，以确保程序在本地环境下正常运行。

## 许可证

LinkSheet 根据 **LPL** 许可（不包括字符串）。
字符串 (`strings.xml`, `plural.xml`) 根据 **GPL-3.0** 许可。
