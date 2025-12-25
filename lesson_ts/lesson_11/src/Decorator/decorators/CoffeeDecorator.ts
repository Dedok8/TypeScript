import ICoffee from "../interfaces/ICoffee.js";

export default abstract class CoffeeDecorator implements ICoffee {
  constructor(protected coffee: ICoffee) {}

  abstract getCost(): number;
  abstract getDescription(): string;
}
