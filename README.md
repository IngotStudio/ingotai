# IngotAI

**IngotAI** 是一个集成了 OpenAI GPT 模型的 Visual Studio Code 扩展，为开发者提供 AI 辅助编程支持。它可以帮助您：

- **智能聊天**：直接在编辑器中与 AI 交流，获取编程建议或解决问题。
- **代码解释**：选中代码片段，IngotAI 会为您解释其功能和作用。
- **代码补全**：根据上下文，提供智能的代码补全建议，提高编码效率。

## **特性**

- 🌐 **AI 聊天助手**：无需离开编辑器，与 AI 进行对话。
- 🧩 **代码解释工具**：快速理解他人代码或回顾自己的逻辑。
- ✨ **智能代码补全**：基于上下文的内联代码补全，加速编码过程。
- 🔧 **自定义配置**：支持自定义 OpenAI API 密钥和模型参数。

## **安装**

1. **通过 VSCode Marketplace 安装**

   打开 VSCode，进入扩展市场，搜索 **IngotAI**，点击安装。

2. **手动安装**

   - 下载最新的 `.vsix` 文件。
   - 在 VSCode 中，打开命令面板（`Ctrl+Shift+P` 或 `Cmd+Shift+P`），输入 `Extensions: Install from VSIX...`，选择下载的文件进行安装。

## **配置**

1. **设置 OpenAI API 密钥**

   - 打开 VSCode 设置（`Ctrl+,` 或 `Cmd+,`）。
   - 搜索 `IngotAI`，找到 `IngotAI: OpenAI Api Key` 设置项。
   - 输入您的 OpenAI API 密钥。

2. **可选设置**

   - **模型选择**：默认使用 `gpt-3.5-turbo`，可在设置中更改。
   - **温度参数**：调整生成文本的创意程度，范围 0-1。

## **使用方法**

### **AI 聊天**

- 打开命令面板，输入 `IngotAI: 聊天`，然后输入您的问题。

### **代码解释**

- 选中需要解释的代码片段。
- 右键菜单选择 `IngotAI: 解释代码`。

### **代码补全**

- 在编辑器中开始编写代码，IngotAI 会根据上下文提供内联补全建议。
- 按下 `Tab` 键接受补全。

## **示例截图**

*（在此添加一些扩展功能的截图，以帮助用户更直观地了解功能）*

## **常见问题**

### 1. 如何获取 OpenAI API 密钥？

- 您需要在 [OpenAI 官方网站](https://beta.openai.com/signup/) 注册账号，并在控制台获取 API 密钥。

### 2. IngotAI 是否免费使用？

- IngotAI 扩展本身是免费的，但使用 OpenAI API 可能会产生费用，请参考 OpenAI 的定价策略。

### 3. 遇到错误如何处理？

- 请确保您的 API 密钥正确且有效。
- 检查网络连接是否正常。
- 查看开发者控制台中的错误日志。

## **贡献**

欢迎对 IngotAI 进行改进！您可以：

- 提交问题或功能请求。
- 克隆仓库，提交 Pull Request。

## **许可协议**

本项目基于 MIT 许可证进行发布。详细信息请参阅 [LICENSE](LICENSE) 文件。

## **联系信息**

- **作者**：IngotStudio
- **邮箱**：xmz20130612@163.com
- **GitHub**：[IngotAI Repository](https://github.com/IngotStudio/ingotai)