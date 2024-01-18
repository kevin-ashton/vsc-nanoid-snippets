import * as vscode from "vscode";
import { SnippetString } from "vscode";

export async function activate(context: vscode.ExtensionContext) {
  const nanoidModule = await import("nanoid");
  // https://zelark.github.io/nano-id-cc/
  // 129M for 1% chance of collision
  const alphabet =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nanoid = nanoidModule.customAlphabet(alphabet, 10);

  for (let i = 0; i < 10; i++) {
    context.subscriptions.push(
      vscode.commands.registerTextEditorCommand(
        `nanoid-snippets.insert-snip${i}`,
        (textEditor, edit) => {
          const editor = vscode.window.activeTextEditor;
          if (!editor) {
            console.log("No editor");
            return;
          }
          textEditor.selections.forEach((selection) => {
            const config = vscode.workspace.getConfiguration("nanoid-snippets");

            let snip: string | undefined = config.get(`snip${i}`);

            if (!snip) {
              console.log("No snip");
              return;
            }

            const now = new Date();
            snip = snip.replace(
              "__HOURS_MINUTES_SECONDS__",
              `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`
            );

            snip = snip.replace("__NANOID__", nanoid());

            editor.insertSnippet(new SnippetString(snip));
          });
        }
      )
    );
  }
}

// This method is called when your extension is deactivated
export function deactivate() {}
