import CoffeeDecorator from "./CoffeeDecorator.js";
export default class ChocolateDecorator extends CoffeeDecorator {
    getCost() {
        return this.coffee.getCost() + 15;
    }
    getDescription() {
        return `${this.coffee.getDescription()}, шоколад`;
    }
}
