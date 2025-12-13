export default class Product {
  title: string
  price: number
  quantity: number
  storePricePerDay: number
  constructor(
    title: string,
    price: number,
    quantity: number,
    storePricePerDay: number
  ) {
    this.title = title
    this.price = price
    this.quantity = quantity
    this.storePricePerDay = storePricePerDay
  }
  // визначення загальної вартості наявної кількості одиниць
  getTotalPrice(): number {
    return this.price * this.quantity
  }
  get TotalPrice() {
    return this.price * this.quantity
  }
  // визначити вартість зберігання для заданої кількості днів
  getTotalStorePrice(daysNumber: number) {
    return this.storePricePerDay * daysNumber
  }
  // зменшення ціни на вказану кількість відсотків
  reducePrice(percentageDiscount: number): void {
    this.price *= 1 - percentageDiscount / 100
  }
  // збільшення ціни на вказану кількість відсотків
  increasePrice(percentageVal: number) {
    this.price *= 1 + percentageVal / 100
  }
  [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case 'string':
        return `${this.title} - ${this.price}`
      case 'number':
        return this.price
      default:
        return this.price
    }
  }
  //   toString() {
  //     return `${this.title} - ${this.price}`
  //   }
}
