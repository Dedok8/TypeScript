import ITrafficLightState from "./ITrafficLightState.js";
import Red from "./methods/Red.js";

export default class TrafficLight {
  private state: ITrafficLightState;

  constructor() {
    this.state = new Red();
  }

  setState(state: ITrafficLightState): void {
    this.state = state;
  }

  next(): void {
    this.state.next(this);
  }

  signal(): void {
    console.log(this.state.signal());
  }

  autoCycle(steps: number): void {
    for (let i = 0; i < steps; i++) {
      this.signal();
      this.next();
    }
  }
}
