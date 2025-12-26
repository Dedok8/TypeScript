import Red from "./Red.js";
export default class Green {
    next(light) {
        light.setState(new Red());
    }
    signal() {
        return "Green";
    }
}
