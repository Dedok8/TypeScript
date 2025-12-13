// 4. Обробка Фінансових Транзакцій 💳
// Клас: Transaction (Транзакція).
// Містить поля: id, amount, date, type, description. Містить метод для валідації суми.
// Enum: TransactionType (ТипТранзакції). Визначає напрямок або вид транзакції: DEPOSIT (Поповнення), WITHDRAWAL (Зняття), TRANSFER (Переказ).
import { TransactionType } from "./TransitionType";

export default class Transition {
  constructor(
    readonly id: number | string,
    readonly amount: number = 300,
    readonly date: Date,
    private type: TransactionType,
    private description: string
  ) {
    this.validateAmount(amount);
  }

  private validateAmount(val: number): void {
    if (typeof val !== "number" || Number.isNaN(val)) {
      throw new Error("Данні повинні бути числом");
    }
    if (val <= 0) {
      throw new Error("Данні не повинні бути від'ємними");
    }
  }

  [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case "string":
        return `UserId:${this.id}, amount = ${this.amount}, date:${this.date}, type:${this.type}, description:${this.description}`;
      case "number":
        return this.amount;
      default: {
        return `UserId:${this.id} amount = ${this.amount}`;
      }
    }
  }
}
