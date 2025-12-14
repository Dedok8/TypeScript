// 💰 Клас SavingsAccount підтримує лише внесення, зняття та переказ,

import Balance from "./balance/Balance.js";
import IDeposit from "./interfaces/IDeposit.js";
import ITransfer from "./interfaces/ITransfer.js";
import IWithdrawable from "./interfaces/Withdrawable.js";

// але не може оформлювати кредити.
// class SavingsAccountBad implements BankServiceBad {
//   deposit(a: number) {
//     console.log(`SavingsAccount: Deposited ${a}`);
//   }
//   withdraw(a: number) {
//     console.log(`SavingsAccount: Withdrawn ${a}`);
//   }
//   transfer(to: string, a: number) {
//     console.log(`SavingsAccount: Transferred ${a} to ${to}`);
//   }
//   loanRequest(a: number) {
//     throw new Error("❌ Savings account cannot request loans!");
//   }
// }

export default class SavingsAccount
  extends Balance
  implements IDeposit, IWithdrawable, ITransfer
{
  transfer(to: string, amount: number): void {
    if (this.checkDepositAvailability(amount)) {
      this.balance -= amount;
      return console.log(`CheckingAccount: Transferred ${this.balance}`);
    }
  }
  withdraw(amount: number): void {
    if (this.checkDepositAvailability(amount)) {
      this.balance -= amount;
      return console.log(`SavingsAccount: Transferred ${this.balance}`);
    }
  }

  deposit(amount: number): void {
    this.balance += amount;
    return console.log(`SavingsAccount: Deposited ${this.balance}`);
  }
}
