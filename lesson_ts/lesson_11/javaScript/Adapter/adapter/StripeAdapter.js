export default class StripeAdapter {
    constructor(stripe) {
        this.stripe = stripe;
    }
    pay(amount) {
        this.stripe.sendStripe(amount);
    }
}
