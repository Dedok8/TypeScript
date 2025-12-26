import Yellow from "./Yellow.js";
export default class Red {
    next(light) {
        light.setState(new Yellow());
    }
    signal() {
        return "Red";
    }
}
