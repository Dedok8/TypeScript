import Drone from "../Drone";
import ICommand from "../ICommand";

export default class TurnLeftCommand implements ICommand {
  constructor(private drone: Drone) {}
  execute(): void {
    this.drone.turnLeft();
  }
  undo(): void {
    this.drone.turnRight();
  }
}
