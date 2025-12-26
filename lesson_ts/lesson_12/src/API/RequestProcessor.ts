import Handler from "./Handler.js";
import ApiRequest from "./ApiRequest.js";

export default class RequestProcessor extends Handler {
  handle(_: ApiRequest): void {
    console.log("Реквест!");
  }
}
