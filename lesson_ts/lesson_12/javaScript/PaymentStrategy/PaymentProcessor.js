// Задача 1. Обробка платежів різними способами
// Опиши базовий інтерфейс PaymentStrategy з методом pay(amount: number).
//  Створи реалізації для різних варіантів оплати: CreditCardPayment, PayPalPayment, CryptoPayment.
//  Контекст PaymentProcessor має використовувати будь-яку стратегію залежно від вибору користувача.
export default class PaymentProcessor {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    processPayment(amount) {
        this.strategy.pay(amount);
    }
}
