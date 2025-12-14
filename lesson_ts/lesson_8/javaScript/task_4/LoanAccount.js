// 🏦 Клас LoanAccount створений лише для кредитів, але змушений реалізовувати інші методи.
// class LoanAccountBad implements BankServiceBad {
//   deposit(a: number) {
//     throw new Error("❌ Loan account cannot accept deposits directly!");
//   }
//   withdraw(a: number) {
//     throw new Error("❌ Loan account cannot withdraw funds directly!");
//   }
//   transfer(to: string, a: number) {
//     throw new Error("❌ Loan account cannot make transfers!");
//   }
//   loanRequest(a: number) {
//     console.log(`LoanAccount: Loan of ${a} requested`);
//   }
// }
export default class LoanAccount {
    constructor() {
        this.loanBalance = 0;
    }
    loanRequest(amount) {
        this.loanBalance += amount;
        return console.log(`LoanAccount: Loan of  ${this.loanBalance} requested`);
    }
    getLoanBalance() {
        return this.loanBalance;
    }
}
