import Handler from "./Handler.js";
import ApiRequest from "./ApiRequest.js";

export default class TokenValidationHandler extends Handler {
  handle(request: ApiRequest): void {
    if (!request.token) {
      console.log("Токен загубився");
      return;
    }
    super.handle(request);
  }
}
