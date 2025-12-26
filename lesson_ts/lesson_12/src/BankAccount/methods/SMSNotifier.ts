import IAccountObserver from "../IAccountObserver";

export default class SMSNotifier implements IAccountObserver {
  update(balance: number): void {
    console.log(`SMS: Новий баланс рахунку: ${balance} грн`);
  }
}
