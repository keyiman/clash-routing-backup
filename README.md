# Clash Verge 分流规则备份

备份时间：2026-10-28（Asia/Shanghai）
适用配置：Flower_SS，Clash Verge Rev / Mihomo。

## 恢复

1. 先导入自己的 Flower_SS 订阅，并启用规则模式（mode: rule）。
2. 在该订阅的规则增强中导入 `flowerss/rules.yaml`。
3. 在该订阅的合并增强中导入 `flowerss/merge.yaml`。
4. 保存并重新加载配置。该合并增强设置 `find-process-mode: always`。
5. 确认订阅中存在节点 `🇯🇵 日本高级 IEPL 专线 1`。换订阅或节点改名时，先修改 rules.yaml 中的节点名称。

## 路由

- 最高优先级：tongji.edu.cn 及所有子域名，以及同济 API 校内地址 10.67.0.251/32、10.67.0.252/32，走 DIRECT。
- tongji.edu.cn 及所有子域名单独使用校园 DNS 202.120.190.208 和 202.120.190.108。公共 DNS 返回的公网入口会提示“当前网络环境不支持”，DIRECT 本身不能解决这个问题。
- 使用同济 API 时必须连接可访问校内地址和校园 DNS 的校园网络或学校 VPN。
- Claude / Anthropic 域名、claude.exe 和配置中列出的专用程序目录走日本节点。
- codex.exe、ChatGPT.exe，以及 Codex 专用运行目录、插件目录的程序走日本节点。
- ChatGPT / OpenAI 相关域名也优先走日本节点。
- 进程目录匹配不代表任意外部路径下的所有后代进程都会继承规则。

## 内容边界

只备份本次配置的规则增强与合并增强，不包含订阅链接、节点服务器或密码、API Key、应用凭据和完整运行配置。

## 验证记录

- Mihomo 配置语法检查通过，运行时规则已加载。
- ChatGPT、Codex 相关连接曾确认走指定日本节点。
- 同济域名已确认通过校园 DNS 解析到 10.67.0.251/252；使用本机已存凭据验证模型列表成功，未备份凭据。

## 校园 DNS 分流更新

覆盖同济主域名和全部子域名（+.tongji.edu.cn）。校园 DNS：202.120.190.208、202.120.190.108。2026-10-28 已确认 agi.tongji.edu.cn 解析到 10.67.0.251/252，1.tongji.edu.cn 到 192.168.130.211，www.tongji.edu.cn 到 192.168.80.60。

## Canvas 验证

2026-10-28：canvas.tongji.edu.cn 已包含在 +.tongji.edu.cn 校园 DNS 分流和 DOMAIN-SUFFIX,tongji.edu.cn,DIRECT 规则中，无需单独增加规则。校园 DNS 返回 192.168.130.209；HTTPS 请求已到达 Canvas，未登录时返回 HTTP 401。实际登录和课程功能尚未测试。

## 2026-10-29 依赖域名补充

参考 OpenAI 网络说明 https://help.openai.com/en/articles/9247338-network-recommendations-for-chatgpt-errors-on-web-and-apps ，补充 oaistatsig、Cloudflare challenge、WorkOS 等 17 条依赖域名规则。配置校验通过，相关旧连接已重建，新建 ChatGPT/Codex/WebSocket 连接已确认走指定日本节点。同济校园 DNS 解析保持正常。GPT-6 回答加载故障尚待用户实际复测，不能据此认定根因已完全消除。
