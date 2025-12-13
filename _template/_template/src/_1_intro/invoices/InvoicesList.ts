import Invoice, { Order } from './Invoice.js'

export default class InvoicesList {
  private _invoicesList: Invoice[] = []
  constructor(readonly title: string) {}
  addInvoice(invoiceNumber: string, orders: Order[], money: number) {
    this._invoicesList.push(new Invoice(invoiceNumber, orders, money))
  }
  private getHTMLList() {
    const olEl = document.createElement('ol')
    this._invoicesList.forEach((inv) => {
      olEl.append(inv.toHtmlEl('li'))
    })
    return olEl
  }
  private getHeaderHTMLEl() {
    const hederEl = document.createElement('h1')
    hederEl.innerText = this.title
    return hederEl
  }
  getHTMLEl() {
    const containerEl = document.createElement('div')
    containerEl.append(this.getHeaderHTMLEl())
    containerEl.append(this.getHTMLList())
    return containerEl
  }
}
