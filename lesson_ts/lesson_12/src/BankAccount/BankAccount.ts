// Задача 2. Сповіщення про зміни на рахунку в банку
// Створи клас BankAccount, який повідомляє підписані сервіси (SMSNotifier, EmailNotifier, Logger) про зміну балансу.
// Мета - продемонструвати, як одна подія може запускати кілька незалежних дій (надсилання SMS, e-mail, логування).

import IAccountObserver from "./IAccountObserver";

export default class BankAccount {
  private balance = 0;
  private observers: IAccountObserver[] = [];

  subscribe(observer: IAccountObserver): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: IAccountObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  deposit(amount: number): void {
    this.balance += amount;
    this.notify();
  }

  withdraw(amount: number): void {
    this.balance -= amount;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.update(this.balance));
  }
}
