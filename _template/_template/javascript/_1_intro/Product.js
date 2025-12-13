export default class Product {
    constructor(title, price, quantity, storePricePerDay) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.storePricePerDay = storePricePerDay;
    }
    // визначення загальної вартості наявної кількості одиниць
    getTotalPrice() {
        return this.price * this.quantity;
    }
    get TotalPrice() {
        return this.price * this.quantity;
    }
    // визначити вартість зберігання для заданої кількості днів
    getTotalStorePrice(daysNumber) {
        return this.storePricePerDay * daysNumber;
    }
    // зменшення ціни на вказану кількість відсотків
    reducePrice(percentageDiscount) {
        this.price *= 1 - percentageDiscount / 100;
    }
    // збільшення ціни на вказану кількість відсотків
    increasePrice(percentageVal) {
        this.price *= 1 + percentageVal / 100;
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'string':
                return `${this.title} - ${this.price}`;
            case 'number':
                return this.price;
            default:
                return this.price;
        }
    }
}
