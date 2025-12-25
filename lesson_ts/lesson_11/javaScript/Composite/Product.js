export default class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getTotalPrice() {
        return this.price;
    }
}
