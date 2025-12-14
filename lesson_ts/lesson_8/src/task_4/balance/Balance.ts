export default abstract class Balance {
  protected balance = 0;

  getBalance(): number {
    return this.balance;
  }

  protected checkDepositAvailability(amount: number): boolean | undefined {
    if (this.balance >= amount) {
      return true;
    }
    console.log(`Balance: $${this.balance}, Required: $${amount}`);
    return false;
  }
}
