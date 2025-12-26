import ITrafficLightState from "../ITrafficLightState.js";
import TrafficLight from "../TrafficLight.js";
import Green from "./Green.js";

export default class Yellow implements ITrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new Green());
  }

  signal(): string {
    return "Yellow";
  }
}
