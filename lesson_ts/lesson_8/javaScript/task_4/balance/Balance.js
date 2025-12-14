export default class Balance {
    constructor() {
        this.balance = 0;
    }
    getBalance() {
        return this.balance;
    }
    checkDepositAvailability(amount) {
        if (this.balance >= amount) {
            return true;
        }
        console.log(`Balance: $${this.balance}, Required: $${amount}`);
        return false;
    }
}
