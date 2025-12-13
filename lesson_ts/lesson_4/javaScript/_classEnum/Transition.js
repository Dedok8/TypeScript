export default class Transition {
    constructor(id, amount = 300, date, type, description) {
        this.id = id;
        this.amount = amount;
        this.date = date;
        this.type = type;
        this.description = description;
        this.validateAmount(amount);
    }
    validateAmount(val) {
        if (typeof val !== "number" || Number.isNaN(val)) {
            throw new Error("Данні повинні бути числом");
        }
        if (val <= 0) {
            throw new Error("Данні не повинні бути від'ємними");
        }
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case "string":
                return `UserId:${this.id}, amount = ${this.amount}, date:${this.date}, type:${this.type}, description:${this.description}`;
            case "number":
                return this.amount;
            default: {
                return `UserId:${this.id} amount = ${this.amount}`;
            }
        }
    }
}
