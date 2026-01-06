# 开发者指南

::: danger 重要：自编译闪退预警
如果自编译后的程序出现闪退，通常是由于云端数据收集功能（Analytics）初始化失败（如缺少 API Key 或网络无法连接）导致的。

**解决方法：** 参考 [此分支](https://github.com/xihale/LinkSheet/tree/self-build) 中的 commit，暂时删除或禁用相关的云端数据收集功能，以确保程序在本地环境下正常运行。
:::

## 先决条件

* **Android Studio:** 推荐最新稳定版。
* **JDK:** JDK 17 或更高版本。
* **Android SDK:** 确保已安装最新的 SDK 工具和平台。

## 从源码构建

1. **克隆仓库:** `git clone https://github.com/LinkSheet/LinkSheet.git`
2. **在 Android Studio 中打开:** 打开项目目录并等待 Gradle 同步。
3. **运行:** 选择所需的构建变体并点击 **Run**。

## 构建变体

LinkSheet 使用 **产品变体 (Flavors)** 和 **构建类型 (Build Types)**：

* **变体 (Flavors):**
    * `foss`: **推荐开发者使用**。不含闭源服务或遥测，完全开源。
    * `pro`: 包含 Aptabase 数据收集和高级重定向功能，需要有效的 API Key。
* **类型 (Types):** `debug`, `release`, `nightly`, `benchmark`。

使用命令行构建示例：

```bash
./gradlew assembleFossDebug
```

## Nightly 构建

该项目通过 GitHub Actions 使用 Nightly 发布模式。构建产物会定期发布到 [LinkSheet/nightly](https://github.com/LinkSheet/nightly) 仓库。

## 许可证

LinkSheet 根据 **LPL** 许可（不包括字符串）。字符串 (`strings.xml`, `plural.xml`) 根据 **GPL-3.0** 许可。
