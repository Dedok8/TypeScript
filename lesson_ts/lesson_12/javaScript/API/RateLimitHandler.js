import Handler from "./Handler.js";
export default class RateLimitHandler extends Handler {
    constructor(limit) {
        super();
        this.limit = limit;
    }
    handle(request) {
        if (request.requestCount > this.limit) {
            console.log("Ви достигли ліміту");
            return;
        }
        super.handle(request);
    }
}
