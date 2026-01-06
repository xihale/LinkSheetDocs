# Shizuku 集成 (WIP)

::: warning 开发中 (WIP)
此功能目前正在开发中，可能无法完全正常工作，或者在某些构建版本中不可用。
:::

LinkSheet 使用 [Shizuku](https://shizuku.rikka.app/) 来执行通常需要 root 权限或 ADB 命令的高级系统操作。

## 目的

Shizuku 允许 LinkSheet 直接与 Android 系统 API 交互以实现以下功能：

- **管理应用链接：** 以编程方式启用或禁用其他应用程序的"打开支持的链接"设置。
- **系统状态：** 比标准权限允许的更深入地查询已验证链接的状态和应用功能。

## 设置

1. 安装并配置 [Shizuku 应用](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api)。
2. 启动 Shizuku 服务（通过 Root 或无线调试）。
3. 在 Shizuku 中授权 LinkSheet。

*注意：此功能对于想要完全自动化接管系统应用的链接处理行为的用户至关重要。*
