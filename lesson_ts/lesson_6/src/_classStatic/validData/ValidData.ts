// Валідація величин без створення екземпляра.
// Статичний метод дозволяє перевіряти дані перед створенням об’єкта.

export default class ValidData {
  constructor(
    public name: string,
    public age: number
  ) {}

  static isValid(name: string, age: number): any {
    return name.trim().length > 0 && age >= 18;
  }

  [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case "string":
        return `Name: ${this.name}, Age: ${this.age}`;
      case "number":
        return this.age;
      default:
        return `${this.name} (${this.age})`;
    }
  }
}
