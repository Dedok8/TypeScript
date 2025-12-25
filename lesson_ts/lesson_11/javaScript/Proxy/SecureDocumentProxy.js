export default class SecureDocumentProxy {
    constructor(service, role) {
        this.service = service;
        this.role = role;
    }
    readDocument(id) {
        if (this.role === "admin") {
            return this.service.readDocument(id);
        }
        if (this.role === "user" && id !== 2) {
            return this.service.readDocument(id);
        }
        return "Ви не маєте прав для читання цього документа";
    }
}
