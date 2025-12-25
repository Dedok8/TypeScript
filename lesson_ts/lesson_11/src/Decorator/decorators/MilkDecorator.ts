import CoffeeDecorator from "./CoffeeDecorator.js";

export default class MilkDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 10;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, молоко`;
  }
}
