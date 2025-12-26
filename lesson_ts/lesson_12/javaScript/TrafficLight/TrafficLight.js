import Red from "./methods/Red.js";
export default class TrafficLight {
    constructor() {
        this.state = new Red();
    }
    setState(state) {
        this.state = state;
    }
    next() {
        this.state.next(this);
    }
    signal() {
        console.log(this.state.signal());
    }
    autoCycle(steps) {
        for (let i = 0; i < steps; i++) {
            this.signal();
            this.next();
        }
    }
}
