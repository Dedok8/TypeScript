import CoffeeDecorator from "./CoffeeDecorator.js";
export default class MilkDecorator extends CoffeeDecorator {
    getCost() {
        return this.coffee.getCost() + 10;
    }
    getDescription() {
        return `${this.coffee.getDescription()}, молоко`;
    }
}
