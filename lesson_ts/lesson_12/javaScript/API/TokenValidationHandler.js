import Handler from "./Handler.js";
export default class TokenValidationHandler extends Handler {
    handle(request) {
        if (!request.token) {
            console.log("Токен загубився");
            return;
        }
        super.handle(request);
    }
}
