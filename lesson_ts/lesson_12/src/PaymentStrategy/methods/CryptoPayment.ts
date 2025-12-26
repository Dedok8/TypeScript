import IPaymentStrategy from "../IPaymentStrategy";

export default class CryptoPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Оплата пройшла через Crypto ${amount}`);
  }
}
