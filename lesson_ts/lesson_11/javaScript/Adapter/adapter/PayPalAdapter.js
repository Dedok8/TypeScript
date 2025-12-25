export default class PayPalAdapter {
    constructor(paypal) {
        this.paypal = paypal;
    }
    pay(amount) {
        this.paypal.sendPayPal(amount);
    }
}
