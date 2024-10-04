import * as vscode from 'vscode';
import { AIProvider } from './aiProvider';

export function activate(context: vscode.ExtensionContext) {
  console.log('IngotAI 扩展已激活');

  const aiProvider = new AIProvider(context);

  // 注册聊天命令
  const chatCommand = vscode.commands.registerCommand('ingotai.chat', async () => {
    await aiProvider.chatWithAI();
  });

  // 注册代码解释命令
  const explainCommand = vscode.commands.registerCommand('ingotai.explainCode', async () => {
    await aiProvider.explainCode();
  });

  // 注册内联补全提供者
  const inlineCompletionProvider = vscode.languages.registerInlineCompletionItemProvider(
    { pattern: '**' },
    {
      provideInlineCompletionItems: aiProvider.provideInlineCompletionItems.bind(aiProvider),
    }
  );

  context.subscriptions.push(chatCommand, explainCommand, inlineCompletionProvider);
}

export function deactivate() {
  console.log('IngotAI 扩展已停用');
}
