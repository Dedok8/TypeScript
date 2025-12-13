import Invoice from './Invoice.js';
export default class InvoicesList {
    constructor(title) {
        this.title = title;
        this._invoicesList = [];
    }
    addInvoice(invoiceNumber, orders, money) {
        this._invoicesList.push(new Invoice(invoiceNumber, orders, money));
    }
    getHTMLList() {
        const olEl = document.createElement('ol');
        this._invoicesList.forEach((inv) => {
            olEl.append(inv.toHtmlEl('li'));
        });
        return olEl;
    }
    getHeaderHTMLEl() {
        const hederEl = document.createElement('h1');
        hederEl.innerText = this.title;
        return hederEl;
    }
    getHTMLEl() {
        const containerEl = document.createElement('div');
        containerEl.append(this.getHeaderHTMLEl());
        containerEl.append(this.getHTMLList());
        return containerEl;
    }
}
