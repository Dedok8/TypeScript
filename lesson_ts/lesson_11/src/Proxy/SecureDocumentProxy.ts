import IDocumentAccess from "./IDocumentAccess";
import RealDocumentService from "./RealDocumentService";

export default class SecureDocumentProxy implements IDocumentAccess {
  constructor(
    private service: RealDocumentService,
    private role: "admin" | "guest" | "user"
  ) {}

  readDocument(id: number): string {
    if (this.role === "admin") {
      return this.service.readDocument(id);
    }

    if (this.role === "user" && id !== 2) {
      return this.service.readDocument(id);
    }

    return "Ви не маєте прав для читання цього документа";
  }
}
