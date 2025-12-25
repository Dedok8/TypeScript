import CoffeeDecorator from "./CoffeeDecorator.js";

export default class ChocolateDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 15;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, шоколад`;
  }
}
