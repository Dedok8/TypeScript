import CoffeeDecorator from "./CoffeeDecorator.js";

export default class SugarDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 5;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, цукор`;
  }
}
