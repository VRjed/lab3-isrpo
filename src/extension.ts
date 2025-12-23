import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "moscowTime.show",
    () => {
      const now = new Date();

      const moscowTime = new Intl.DateTimeFormat("ru-RU", {
        timeZone: "Europe/Moscow",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).format(now);

      vscode.window.showInformationMessage(
        `Текущее московское время: ${moscowTime}`
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
