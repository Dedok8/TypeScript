import IPaymentStrategy from "../IPaymentStrategy";

export default class PayPalPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Оплата пройшла через PayPal ${amount}`);
  }
}
