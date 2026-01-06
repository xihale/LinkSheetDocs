# 第三方集成

LinkSheet 包含几个实验性集成，以增强隐私和实用性。

## ClearURLs

**集成:** [ClearURLs](https://github.com/ClearURLs)
**目的:** 从 URL 中移除追踪参数。

LinkSheet 可以自动从 URL 中剥离已知的追踪参数（如 `utm_source`），然后再打开它们。这有助于保护你在网络上的隐私。

*报告问题:* [clearurlkt](https://github.com/1fexd/clearurlkt)

## FastForward

**集成:** [FastForward](https://github.com/FastForwardTeam/FastForward)
**目的:** 绕过链接缩短器和追踪重定向。

LinkSheet 集成 FastForward 规则，从中间重定向中提取最终目标 URL，为你节省时间并避免潜在的追踪器。

*报告问题:* [fastforwardkt](https://github.com/1fexd/fastforwardkt)

## LibRedirect

**集成:** [LibRedirect](https://github.com/libredirect/libredirect)
**目的:** 将流量从流行的专有服务重定向到隐私友好的前端。

**特性:**

* 将 YouTube, Twitter, Instagram 等服务重定向到 Invidious, Nitter, Piped 等实例。
* **Pro 功能:** 本地解析重定向，或通过托管在 supabase.com 的隐私聚焦 API 解析。

*报告问题:* [libredirectkt](https://github.com/1fexd/libredirectkt)
