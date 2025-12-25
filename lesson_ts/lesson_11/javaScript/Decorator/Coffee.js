// Створи базовий клас Coffee, який має метод getCost() і getDescription().
// Реалізуй декоратори (MilkDecorator, SugarDecorator, ChocolateDecorator),
// які додають нові властивості до базового напою.
// Мета - показати, як послідовно додавати функціональність об’єктам без множинного успадкування.
export default class Coffee {
    getCost() {
        return 30;
    }
    getDescription() {
        return "Стандартна кава";
    }
}
