// Задача 2. Сповіщення про зміни на рахунку в банку
// Створи клас BankAccount, який повідомляє підписані сервіси (SMSNotifier, EmailNotifier, Logger) про зміну балансу.
// Мета - продемонструвати, як одна подія може запускати кілька незалежних дій (надсилання SMS, e-mail, логування).
export default class BankAccount {
    constructor() {
        this.balance = 0;
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
    deposit(amount) {
        this.balance += amount;
        this.notify();
    }
    withdraw(amount) {
        this.balance -= amount;
        this.notify();
    }
    notify() {
        this.observers.forEach((observer) => observer.update(this.balance));
    }
}
