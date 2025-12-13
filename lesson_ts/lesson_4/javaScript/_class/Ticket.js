// Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата).
// Створити функції для перевірки цього типу (Type Guard, Assert)
export default class Ticket {
    constructor(data) {
        this._ticket = data;
    }
    static isTicket(val) {
        return (!!val &&
            typeof val === "object" &&
            "location" in val &&
            typeof val.location === "string" &&
            "price" in val &&
            typeof val.price === "number" &&
            "fullname" in val &&
            typeof val.fullname === "string" &&
            "date" in val &&
            val.date instanceof Date);
    }
    static isAssertTicket(val) {
        if (!Ticket.isTicket(val)) {
            throw new Error("Це не білет");
        }
    }
    toString() {
        const { location, price, fullname, date } = this._ticket;
        return `До куди їдемо: ${location} ціна:${price} ПІБ:${fullname} Дата:${date}`;
    }
}
