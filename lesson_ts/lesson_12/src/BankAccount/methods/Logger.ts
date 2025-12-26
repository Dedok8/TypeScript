import IAccountObserver from "../IAccountObserver";

export default class Logger implements IAccountObserver {
  update(balance: number): void {
    console.log(`Log: Зміна балансу ${balance}`);
  }
}
