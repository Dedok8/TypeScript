import IDocumentAccess from "./IDocumentAccess";

export default class RealDocumentService implements IDocumentAccess {
  private documents: Record<number, string> = {
    1: "Данні про компанію",
    2: "Звіт налоговій",
    3: "План проекту",
  };

  readDocument(id: number): string {
    return this.documents[id] ?? "Документу не знайдено";
  }
}
