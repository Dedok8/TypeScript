import ApiRequest from "./ApiRequest.js";

export default abstract class Handler {
  protected nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: ApiRequest): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}
