import * as vscode from 'vscode';
import { Configuration, OpenAIApi } from 'openai';

export class AIProvider {
  private openai: OpenAIApi;

  constructor(private context: vscode.ExtensionContext) {
    const apiKey = this.getApiKey();
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }

  private getApiKey(): string {
    const configApiKey = vscode.workspace.getConfiguration().get<string>('ingotai.openaiApiKey');
    if (configApiKey) {
      return configApiKey;
    }
    vscode.window.showErrorMessage('请在设置中配置您的 OpenAI API 密钥。');
    return '';
  }

  // 聊天功能
  public async chatWithAI() {
    const userInput = await vscode.window.showInputBox({ prompt: '向 IngotAI 提问' });
    if (!userInput) return;

    vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: 'IngotAI 正在思考...',
        cancellable: false,
      },
      async () => {
        try {
          const response = await this.openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userInput }],
          });

          const aiMessage = response.data.choices[0].message?.content;

          vscode.window.showInformationMessage(`IngotAI: ${aiMessage}`);
        } catch (error) {
          vscode.window.showErrorMessage('与 OpenAI API 通信时出错。');
          console.error(error);
        }
      }
    );
  }

  // 代码解释功能
  public async explainCode() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage('请先打开一个文件以使用 IngotAI。');
      return;
    }

    const selection = editor.selection;
    const code = editor.document.getText(selection);

    if (!code) {
      vscode.window.showInformationMessage('请选中需要解释的代码。');
      return;
    }

    const prompt = `请解释以下代码的作用：\n\n${code}`;

    vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: 'IngotAI 正在分析代码...',
        cancellable: false,
      },
      async () => {
        try {
          const response = await this.openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
          });

          const explanation = response.data.choices[0].message?.content;

          vscode.window.showInformationMessage(`IngotAI 解释：${explanation}`);
        } catch (error) {
          vscode.window.showErrorMessage('与 OpenAI API 通信时出错。');
          console.error(error);
        }
      }
    );
  }

  // 内联补全功能
  public async provideInlineCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    context: vscode.InlineCompletionContext,
    token: vscode.CancellationToken
  ): Promise<vscode.InlineCompletionItem[]> {
    const textBeforeCursor = document.getText(new vscode.Range(new vscode.Position(0, 0), position));

    try {
      const response = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: textBeforeCursor,
        max_tokens: 50,
        temperature: 0.5,
        stop: ['\n'],
      });

      const suggestion = response.data.choices[0].text?.trim();

      if (suggestion) {
        return [new vscode.InlineCompletionItem(suggestion)];
      } else {
        return [];
      }
    } catch (error) {
      console.error('内联补全出错：', error);
      return [];
    }
  }
}
