import Drone from "../Drone";
import ICommand from "../ICommand";

export default class TurnRightCommand implements ICommand {
  constructor(private drone: Drone) {}
  execute(): void {
    this.drone.turnRight();
  }
  undo(): void {
    this.drone.turnLeft();
  }
}
