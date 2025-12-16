// Задача 3. Інтерфейс для перетворювача.
// Створи інтерфейс Transformer<T, U> з методом transform(value: T): U.
// Реалізуй кілька прикладів трансформацій: — рядок у число, — число у рядок, — об’єкт у JSON.

export default interface ITransformer<T, U> {
  transform(value: T): U;
}
