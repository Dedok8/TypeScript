export default class Controller {
    constructor() {
        this.history = [];
    }
    executeCommand(command) {
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
