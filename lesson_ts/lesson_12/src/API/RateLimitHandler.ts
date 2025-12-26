import Handler from "./Handler.js";
import ApiRequest from "./ApiRequest.js";

export default class RateLimitHandler extends Handler {
  constructor(private limit: number) {
    super();
  }

  handle(request: ApiRequest): void {
    if (request.requestCount > this.limit) {
      console.log("Ви достигли ліміту");
      return;
    }
    super.handle(request);
  }
}
