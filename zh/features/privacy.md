# 链接处理与隐私 🌐

LinkSheet 包含强大的工具来清理、解析和保护你打开的链接。标记为 🌐 的功能涉及网络请求，可能会影响底部栏显示的响应速度。

## 重定向解析 🌐

LinkSheet 可以在链接到达浏览器之前“展开”短链接和追踪重定向。

* **跟随重定向 🌐:** 自动追踪 HTTP 重定向。
  * **本地缓存:** 本地缓存结果以加速未来的点击。
  * **外部服务 🌐 [影响: 高]:** 使用隐私保护 API（托管在 supabase.com）解析重定向，而无需立即向目标服务器暴露你的 IP 地址。这会增加一次网络往返延迟。
* **仅已知追踪器:** 选项：仅对已知追踪域名触发重定向解析，从而为正常链接节省电量和流量。

## Amp2Html 🌐

自动将 AMP (Accelerated Mobile Pages) 链接转换为标准的规范 HTML 版本。

* **本地/外部 🌐:** 与重定向一样，这可以在本地完成，也可以通过外部服务完成，以避免直接与 AMP 服务器交互。

## 追踪保护

### ClearURLs 集成

使用 [ClearURLs](https://github.com/ClearURLs) 规则集从 URL 中剥离追踪参数（如 `utm_source`, `fbclid`）。这是一个本地操作（快速）。

### FastForward 集成

使用 [FastForward](https://github.com/FastForwardTeam/FastForward) 规则绕过链接缩短器和中间着陆页。

### LibRedirect 集成

将流量从流行的专有平台重定向到隐私友好的开源前端。

* **示例:** YouTube -> Invidious, Twitter -> Nitter.

## 隐私设置

* **LinkSheet Referrer:** 默认情况下，LinkSheet 在打开应用时隐藏自己作为“来源 (referrer)”。
* **复制后隐藏：** 将链接复制到剪贴板后自动关闭底部栏。
* **隐身模式:** (如果使用受支持的浏览器) LinkSheet 可以请求直接在隐身/隐私模式下打开链接。

## 遥测 🌐

LinkSheet 默认收集最少的数据，但尊重你的选择。

* **级别:** 禁用, 极简, 标准, 详尽。
* **影响:** 应用启动或事件触发时的小型网络请求。
* **透明度:** 你可以查看正在记录的确切内容。
