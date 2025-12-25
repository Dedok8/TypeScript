import IPaymentProvider from "../IPaymentProvider";
import StripeService from "../services/StripeService";

export default class StripeAdapter implements IPaymentProvider {
  constructor(private stripe: StripeService) {}
  pay(amount: number): void {
    this.stripe.sendStripe(amount);
  }
}
