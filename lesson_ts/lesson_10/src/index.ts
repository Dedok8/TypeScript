// 1. Чернетка товару:
//  Описати тип Auto (id, марка, колір, рік_випуску, власник).
// Потім описати DraftAuto для збереження неповних описів даних про авто у localStorage.

interface IAuto {
  id: number;
  brand: string;
  color: string;
  yearManufacture: number;
  owner: string;
}

type DraftAuto = Partial<IAuto>;

const autoUser: DraftAuto = {
  id: 1,
  brand: "BMW",
  owner: "Ivan",
};

function saveAuto(auto: DraftAuto) {
  const json = JSON.stringify(auto);
  localStorage.setItem("data", json);
  return json;
}

const res = saveAuto(autoUser);
console.log(res);

console.log("===============================================");

// 2. Налаштування гри GameSettings (швидкість, рівень, тип ворогів).
// Потім на  основі цього типу створити тип, що не можна змінювати під час гри.

interface IGameSetting {
  speed: number;
  level: number;
  enemyType: "easy" | "normal" | "hard";
}

function GameSetting(setting: Readonly<IGameSetting>) {
  console.log(
    `Your speed: ${setting.speed}, level: ${setting.level}, enemyType: ${setting.enemyType}`
  );
}

GameSetting({
  speed: 10,
  level: 1,
  enemyType: "easy",
});

console.log("===============================================");

// 3. Мінімальні дані для таблиці.
//  Дано тип Employee, що містить опис (перелік) полів,
// що можуть бути у працівника (ім'я, рік_народження, заробітна плата, стаж, підрозділ, адреса, спеціальність).
// Потім на основі цього типу  створи новий тип даних, що буде містити тільки ім'я, підрозділ та заробітну плату)

interface IEmployee {
  name: string;
  yearOfBirth: number;
  salary: number;
  experience: number;
  deportament: string;
  address: string;
  specialty: string;
}

type mainUserInfo = Pick<IEmployee, "name" | "deportament" | "salary">;

const user: mainUserInfo = {
  name: "Ivan",
  deportament: "IT",
  salary: 1000,
};

console.log(user);
console.log("===============================================");

// 4. Використовуючи тип параметрів createProduct (title, price,discount) розробити функцію, яка б формувала параметри для створення продукту.
interface ICreateProduct {
  title: string;
  price: number;
  discount: number;
}

function createProduct(title: string, price: number, discount: number) {
  return { title, price, discount };
}

type CreateProductParams = Parameters<typeof createProduct>;

function setProduct(...args: CreateProductParams): ICreateProduct {
  const [title, price, discount] = args;
  return { title, price, discount };
}

const product = setProduct("iPhone", 30000, 10);
console.log(product);
console.log("===============================================");

// 5. Розробити функції для збереження/зчитування/перевірки якихось даних у localStorage.
// Додати опис у коментарях та створити автоматично документацію.

/**
 * @class localStorageFn
 * @description Клас для збереження, зчитування та перевірки даних у localStorage.
 **/

class localStorageFn {
  /**
   * Зберігає дані під вказаним ключем.
   * @param {string} key - ключ для збереження даних
   * @param {object} data - об'єкт, який потрібно зберегти
   * @returns {true | Error} Повертає true у разі успіху, або Error при некоректних даних
   *
   * @example
   * saveData("user", { name: "Ivan", age: 20 });
   */

  public saveData(key: string, data: object): true | Error {
    if (!data) return new Error("Дані некоректні або порожні");
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }

  /**
   * Зчитує дані із localStorage.
   * @param {string} key - ключ для отримання даних
   * @returns {any | null} Повертає дані або null, якщо їх немає чи сталася помилка
   *
   * @example const user = readData("user");
   */

  public readData(key: string): any | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  /**
   * Перевіряє чи існують коректні дані за ключем.
   * @param {string} key - ключ для валідації даних
   * @returns {boolean} true якщо дані існують, інакше false
   * @example
   * validData("user");
   */

  public validData(key: string): boolean {
    const data = this.readData(key);
    return data !== null;
  }
}

const storage = new localStorageFn();

storage.saveData("user", { name: "Ivan", age: 20 });

console.log(storage.readData("user"));

console.log(storage.validData("user"));
