import ICommand from "./ICommand";

export default class Controller {
  private history: ICommand[] = [];

  executeCommand(command: ICommand): void {
    command.execute();
    this.history.push(command);
  }

  undoLast() {
    const lastCommand = this.history.pop();
    if (!lastCommand) {
      console.log("Більше команд нема");
      return;
    }
    lastCommand.undo();
  }
}
