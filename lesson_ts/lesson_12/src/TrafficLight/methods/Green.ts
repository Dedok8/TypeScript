import ITrafficLightState from "../ITrafficLightState.js";
import TrafficLight from "../TrafficLight.js";
import Red from "./Red.js";

export default class Green implements ITrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new Red());
  }

  signal(): string {
    return "Green";
  }
}
