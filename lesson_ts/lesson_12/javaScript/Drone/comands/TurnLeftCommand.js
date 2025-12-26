export default class TurnLeftCommand {
    constructor(drone) {
        this.drone = drone;
    }
    execute() {
        this.drone.turnLeft();
    }
    undo() {
        this.drone.turnRight();
    }
}
