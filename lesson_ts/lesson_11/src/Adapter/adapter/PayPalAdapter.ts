import IPaymentProvider from "../IPaymentProvider";
import PayPalService from "../services/PayPalService";

export default class PayPalAdapter implements IPaymentProvider {
  constructor(private paypal: PayPalService) {}
  pay(amount: number): void {
    this.paypal.sendPayPal(amount);
  }
}
