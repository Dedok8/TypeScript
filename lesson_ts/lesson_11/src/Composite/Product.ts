import IProductComponent from "./IProductComponent";

export default class Product implements IProductComponent {
  constructor(
    private readonly name: string,
    private readonly price: number
  ) {}
  getTotalPrice(): number {
    return this.price;
  }
}
