# 项目结构

LinkSheet 遵循模块化架构，以分离关注点并缩短构建时间。

## 核心模块

* **`app`**: 主应用程序模块。包含 UI 入口点和胶水代码。

## 功能模块 (`features/`)

* **`browser`**: 检测和管理 Web 浏览器的逻辑。
* **`downloader`**: 处理文件下载。
* **`libredirect`**: LibRedirect 集成的实现。
* **`shizuku`**: Shizuku 服务集成代码。
* **`wiki`**: 可能与应用内文档或帮助相关。
* **`systeminfo`**: 用于检索设备和系统信息的实用程序。
* **`devicecompat`**: 针对不同 Android 版本/ROM 的兼容层。
* **`engine`**: 链接匹配和处理的核心逻辑。
* **`profile`**: 用户配置文件和设置管理。

## 集成模块 (`integration/`)

* **`clearurl`**: ClearURLs 集成的逻辑。
* **`amp2html`**: 将 AMP 链接转换为标准 HTML 的转换器。
* **`embed-resolve`**: 解析嵌入内容的逻辑。

## 库 (`lib/`)

* **`api`**: 通用接口和 API 定义。
* **`common`**: 共享实用程序类和扩展。
* **`compose`**: Jetpack Compose UI 组件和主题。
* **`bottom-sheet`**: 自定义底部栏实现。
