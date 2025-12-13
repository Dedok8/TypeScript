export type Order = {
  title: string
  time: number
}
//----
export default class Invoice {
  constructor(
    readonly invoiceNumber: string,
    readonly orders: Order[],
    readonly money: number
  ) {}
  toString() {
    return `${this.invoiceNumber}, orders number: ${this.orders.length}, monety:${this.money}`
  }
  valueOf() {
    return this.money
  }
  [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case 'string':
        return this.toString()
      case 'number':
        return this.valueOf()
      default:
        this.valueOf()
    }
  }
  toHtmlEl(elTag: string) {
    const el = document.createElement(elTag)
    el.innerText = this.toString()
    return el
  }
}
