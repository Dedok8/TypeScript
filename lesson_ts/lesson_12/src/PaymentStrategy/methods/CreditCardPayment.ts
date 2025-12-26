import IPaymentStrategy from "../IPaymentStrategy";

export default class CreditCardPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Оплата пройшла через кредитну картку ${amount}`);
  }
}
