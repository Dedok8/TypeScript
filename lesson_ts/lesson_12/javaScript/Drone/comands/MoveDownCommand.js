export default class MoveDownCommand {
    constructor(drone) {
        this.drone = drone;
    }
    execute() {
        this.drone.moveDown();
    }
    undo() {
        this.drone.moveUp();
    }
}
