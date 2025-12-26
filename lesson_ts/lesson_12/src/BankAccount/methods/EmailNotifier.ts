import IAccountObserver from "../IAccountObserver";

export default class EmailNotifier implements IAccountObserver {
  update(balance: number): void {
    console.log(`Email: Баланс рахунку оновлено: ${balance} грн`);
  }
}
