// Створи базовий клас Coffee, який має метод getCost() і getDescription().
// Реалізуй декоратори (MilkDecorator, SugarDecorator, ChocolateDecorator),
// які додають нові властивості до базового напою.
// Мета - показати, як послідовно додавати функціональність об’єктам без множинного успадкування.

import ICoffee from "./interfaces/ICoffee.js";

export default class Coffee implements ICoffee {
  getCost(): number {
    return 30;
  }

  getDescription(): string {
    return "Стандартна кава";
  }
}
