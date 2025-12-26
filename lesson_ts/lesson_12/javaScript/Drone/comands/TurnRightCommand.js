export default class TurnRightCommand {
    constructor(drone) {
        this.drone = drone;
    }
    execute() {
        this.drone.turnRight();
    }
    undo() {
        this.drone.turnLeft();
    }
}
