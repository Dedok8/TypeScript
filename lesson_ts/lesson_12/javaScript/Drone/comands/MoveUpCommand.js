export default class MoveUpCommand {
    constructor(drone) {
        this.drone = drone;
    }
    execute() {
        this.drone.moveUp();
    }
    undo() {
        this.drone.moveDown();
    }
}
