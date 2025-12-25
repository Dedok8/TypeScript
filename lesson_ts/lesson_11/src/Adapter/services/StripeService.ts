export default class StripeService {
  sendStripe(amount: number): void {
    console.log(`Оплата через stripe ${amount}`);
  }
}
