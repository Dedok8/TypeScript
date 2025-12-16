// Задача 2. Менеджер операцій.
// Створи клас OperationManager<T>,
// який зберігає список операцій будь-якого типу
//  і має метод executeAll(callback: (item: T) => void) для виконання їх усіх.

export default class OperationManager<T> {
  constructor(private operationArr: T[]) {}

  executeAll(callback: (item: T) => void) {
    return this.operationArr.map((operation) => callback(operation));
  }
}
