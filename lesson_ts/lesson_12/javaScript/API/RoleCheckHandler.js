import Handler from "./Handler.js";
export default class RoleCheckHandler extends Handler {
    constructor(allowedRoles) {
        super();
        this.allowedRoles = allowedRoles;
    }
    handle(request) {
        if (!request.role || !this.allowedRoles.includes(request.role)) {
            console.log("Ви не маєте доступу з данною ролю");
            return;
        }
        super.handle(request);
    }
}
