import ITrafficLightState from "../ITrafficLightState.js";
import TrafficLight from "../TrafficLight.js";
import Yellow from "./Yellow.js";

export default class Red implements ITrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new Yellow());
  }

  signal(): string {
    return "Red";
  }
}
