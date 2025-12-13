//----
export default class Invoice {
    constructor(invoiceNumber, orders, money) {
        this.invoiceNumber = invoiceNumber;
        this.orders = orders;
        this.money = money;
    }
    toString() {
        return `${this.invoiceNumber}, orders number: ${this.orders.length}, monety:${this.money}`;
    }
    valueOf() {
        return this.money;
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'string':
                return this.toString();
            case 'number':
                return this.valueOf();
            default:
                this.valueOf();
        }
    }
    toHtmlEl(elTag) {
        const el = document.createElement(elTag);
        el.innerText = this.toString();
        return el;
    }
}
