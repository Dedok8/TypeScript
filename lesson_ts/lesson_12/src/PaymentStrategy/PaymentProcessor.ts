// Задача 1. Обробка платежів різними способами
// Опиши базовий інтерфейс PaymentStrategy з методом pay(amount: number).
//  Створи реалізації для різних варіантів оплати: CreditCardPayment, PayPalPayment, CryptoPayment.
//  Контекст PaymentProcessor має використовувати будь-яку стратегію залежно від вибору користувача.

import IPaymentStrategy from "./IPaymentStrategy.js";

export default class PaymentProcessor {
  constructor(private strategy: IPaymentStrategy) {}

  setStrategy(strategy: IPaymentStrategy): void {
    this.strategy = strategy;
  }

  processPayment(amount: number): void {
    this.strategy.pay(amount);
  }
}
