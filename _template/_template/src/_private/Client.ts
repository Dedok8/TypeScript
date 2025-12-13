export default class Client {
  #balance = 0
  constructor(public name: string, readonly accountNumber: string) {}

  get Balance() {
    return this.#balance
  }

  public addMoney(val: number) {
    if (val < 0) throw new Error('Error: val<0')
    this.#balance += val
  }
  public withdrawMoney(val: number) {
    if (val < 0) throw new Error('Error: val<0')
    if (this.#balance < val) throw Error('Not enough money')
    this.#balance -= val
    return val
  }
}
