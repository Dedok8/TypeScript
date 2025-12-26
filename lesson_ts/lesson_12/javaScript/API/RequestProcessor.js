import Handler from "./Handler.js";
export default class RequestProcessor extends Handler {
    handle(_) {
        console.log("Реквест!");
    }
}
