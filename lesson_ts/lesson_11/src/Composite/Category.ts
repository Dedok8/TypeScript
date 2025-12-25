import IProductComponent from "./IProductComponent";

export default class Category implements IProductComponent {
  private arrProd: IProductComponent[] = [];

  constructor(private readonly name: string) {}

  add(component: IProductComponent): void {
    this.arrProd.push(component);
  }

  remove(component: IProductComponent): void {
    this.arrProd = this.arrProd.filter((comp) => comp !== component);
  }
  getTotalPrice(): number {
    return this.arrProd.reduce((sum, el) => sum + el.getTotalPrice(), 0);
  }
}
