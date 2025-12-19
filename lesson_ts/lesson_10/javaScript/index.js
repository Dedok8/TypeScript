"use strict";
// 1. Чернетка товару:
//  Описати тип Auto (id, марка, колір, рік_випуску, власник).
// Потім описати DraftAuto для збереження неповних описів даних про авто у localStorage.
const autoUser = {
    id: 1,
    brand: "BMW",
    owner: "Ivan",
};
function saveAuto(auto) {
    const json = JSON.stringify(auto);
    localStorage.setItem("data", json);
    return json;
}
const res = saveAuto(autoUser);
console.log(res);
console.log("===============================================");
function GameSetting(setting) {
    console.log(`Your speed: ${setting.speed}, level: ${setting.level}, enemyType: ${setting.enemyType}`);
}
GameSetting({
    speed: 10,
    level: 1,
    enemyType: "easy",
});
console.log("===============================================");
const user = {
    name: "Ivan",
    deportament: "IT",
    salary: 1000,
};
console.log(user);
console.log("===============================================");
function createProduct(title, price, discount) {
    return { title, price, discount };
}
function setProduct(...args) {
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
    saveData(key, data) {
        if (!data)
            return new Error("Дані некоректні або порожні");
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
    readData(key) {
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
    validData(key) {
        const data = this.readData(key);
        return data !== null;
    }
}
const storage = new localStorageFn();
storage.saveData("user", { name: "Ivan", age: 20 });
console.log(storage.readData("user"));
console.log(storage.validData("user"));
