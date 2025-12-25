import CoffeeDecorator from "./CoffeeDecorator.js";
export default class SugarDecorator extends CoffeeDecorator {
    getCost() {
        return this.coffee.getCost() + 5;
    }
    getDescription() {
        return `${this.coffee.getDescription()}, цукор`;
    }
}
