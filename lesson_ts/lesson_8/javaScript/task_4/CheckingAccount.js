// 💳 Клас CheckingAccount (поточний рахунок) не може оформлювати кредити,
import Balance from "./balance/Balance.js";
// але все одно змушений реалізувати метод loanRequest().
// class CheckingAccountBad implements BankServiceBad {
//   deposit(a: number) {
//     console.log(`CheckingAccount: Deposited ${a}`);
//   }
//   withdraw(a: number) {
//     console.log(`CheckingAccount: Withdrawn ${a}`);
//   }
//   transfer(to: string, a: number) {
//     console.log(`CheckingAccount: Transferred ${a} to ${to}`);
//   }
//   loanRequest(a: number) {
//     throw new Error("❌ Checking account cannot request loans!");
//   }
// }
export default class CheckingAccount extends Balance {
    transfer(to, amount) {
        if (this.checkDepositAvailability(amount)) {
            this.balance -= amount;
            return console.log(`CheckingAccount: Transferred ${this.balance}`);
        }
    }
    withdraw(amount) {
        if (this.checkDepositAvailability(amount)) {
            this.balance -= amount;
            return console.log(`CheckingAccount: Withdrawn ${this.balance}`);
        }
    }
    deposit(amount) {
        this.balance += amount;
        return console.log(`CheckingAccount: Deposited ${this.balance}`);
    }
}
