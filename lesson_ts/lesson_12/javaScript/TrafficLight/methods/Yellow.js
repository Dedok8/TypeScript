import Green from "./Green.js";
export default class Yellow {
    next(light) {
        light.setState(new Green());
    }
    signal() {
        return "Yellow";
    }
}
