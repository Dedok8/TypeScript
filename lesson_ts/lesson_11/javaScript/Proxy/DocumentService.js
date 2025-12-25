export default class RealDocumentService {
    constructor() {
        this.documents = {
            1: "Данні про компанію",
            2: "Звіт налоговій",
            3: "План проекту",
        };
    }
    readDocument(id) {
        var _a;
        return (_a = this.documents[id]) !== null && _a !== void 0 ? _a : "Документу не знайдено";
    }
}
