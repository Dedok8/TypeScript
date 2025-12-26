import Handler from "./Handler.js";
import ApiRequest from "./ApiRequest.js";

export default class RoleCheckHandler extends Handler {
  private allowedRoles: string[];

  constructor(allowedRoles: string[]) {
    super();
    this.allowedRoles = allowedRoles;
  }

  handle(request: ApiRequest): void {
    if (!request.role || !this.allowedRoles.includes(request.role)) {
      console.log("Ви не маєте доступу з данною ролю");
      return;
    }
    super.handle(request);
  }
}
