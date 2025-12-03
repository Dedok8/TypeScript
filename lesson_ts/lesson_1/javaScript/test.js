"use strict";
var _a, _b;
// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data».
// Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.
const randNum = Math.floor(Math.random() * 30) + 30;
const obj = { field2: Math.random() > 0.4 ? randNum : "text" };
localStorage.setItem("data", JSON.stringify(obj));
const objFromStorage = JSON.parse((_a = localStorage.getItem("data")) !== null && _a !== void 0 ? _a : "{}");
const res1 = document.getElementById("res1");
let result1 = "";
if (typeof objFromStorage.field2 === "string") {
    result1 = `Довжина рядку: ${objFromStorage.field2.length}`;
}
else if (typeof objFromStorage.field2 == "number") {
    result1 =
        `Число: ${objFromStorage.field2}` +
            (objFromStorage.field2 % 2 === 0 ? " Парне" : " Непарне");
}
if (res1) {
    res1.textContent = result1;
}
// Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Вивести на екран усі поля та їх значення.
const obj2 = {
    name: "Ilya",
    age: 20,
    work: true,
};
localStorage.setItem("data", JSON.stringify(obj2));
const objFromStorage2 = JSON.parse((_b = localStorage.getItem("data")) !== null && _b !== void 0 ? _b : "{}");
const res2 = document.getElementById("res2");
let result2 = "";
for (const key in objFromStorage2) {
    result2 += `${key}: ${objFromStorage2[key]} <br>`;
}
if (res2) {
    res2.innerHTML = result2;
}
function createProduct(num) {
    var _a, _b, _c;
    const name = (_a = prompt(`Назва товару ${num}:`)) !== null && _a !== void 0 ? _a : "";
    const price = Number((_b = prompt(`Ціна товару ${num}:`)) !== null && _b !== void 0 ? _b : 0);
    const quantity = Number((_c = prompt(`Кількість товару ${num}:`)) !== null && _c !== void 0 ? _c : 0);
    const cost = price * quantity;
    return [name, price, quantity, cost];
}
function startTask3() {
    if (!confirm("Почати задачу 3?"))
        return;
    const product1 = createProduct(1);
    const product2 = createProduct(2);
    const totalPrice = product1[3] + product2[3];
    const res3 = document.getElementById("res3");
    if (res3) {
<<<<<<< HEAD
        res3.innerHTML = `
      <h3>Чек про покупку товару</h3>
      <p>${product1[0]}: ${product1[2]} × ${product1[1]} грн = <b>${product1[3]} грн</b></p>
      <p>${product2[0]}: ${product2[2]} × ${product2[1]} грн = <b>${product2[3]} грн</b></p>
      <hr>
      <p><b>Разом: ${totalPrice} грн</b></p>
=======
        res3.innerHTML = `
      <h3>Чек про покупку товару</h3>
      <p>${product1[0]}: ${product1[2]} × ${product1[1]} грн = <b>${product1[3]} грн</b></p>
      <p>${product2[0]}: ${product2[2]} × ${product2[1]} грн = <b>${product2[3]} грн</b></p>
      <hr>
      <p><b>Разом: ${totalPrice} грн</b></p>
>>>>>>> c4dfcfd654b7033aac6d87ec7e6b09b5627b967a
    `;
    }
}
const btn3 = document.getElementById("btnTask3");
btn3 === null || btn3 === void 0 ? void 0 : btn3.addEventListener("click", startTask3);
// Задача 4. Вводиться номер дня або назва дня. Створити функцію, яка за цим значенням виводить на екран чи це робочий день.
const workingDay = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця"];
const weekDays = [
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота",
    "неділя",
];
function checkUserDay(dayProps) {
    let dayName;
    if (typeof dayProps === "number") {
        if (dayProps >= 1 && dayProps <= 7) {
            dayName = weekDays[dayProps - 1];
        }
    }
    else {
        const dayNumber = Number(dayProps);
        if (!isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= 7) {
            dayName = weekDays[dayNumber - 1];
        }
        else if (weekDays.includes(dayProps)) {
            dayName = dayProps;
        }
    }
    if (!dayName) {
        return "Невірне значення. Введіть число від 1 до 7 або назву дня";
    }
    return workingDay.includes(dayName)
        ? `${dayName.charAt(0).toUpperCase() + dayName.slice(1)} - Робочий день`
        : `${dayName.charAt(0).toUpperCase() + dayName.slice(1)} - Вихідний день`;
}
const btnTask4 = document.getElementById("btnTask4");
const res4 = document.getElementById("res4");
if (btnTask4) {
    btnTask4.addEventListener("click", () => {
        var _a;
        const input = (_a = prompt("Введіть номер або назву дня тижня")) === null || _a === void 0 ? void 0 : _a.toLowerCase().trim();
        if (input && res4) {
            res4.textContent = checkUserDay(input);
        }
        else if (res4 && !input) {
            res4.textContent = "Ви не ввели значення";
        }
    });
}
// Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок».
// Пірахувати чого було більше чисел чи рядків і вивести останнє значення
let countNum = 0;
let countOk = 0;
let randomNumOrOk;
let lastValue = "";
for (let r = 0; r < 10; r++) {
    const randNum = Math.floor(Math.random() * 30) + 30;
    randomNumOrOk = Math.random() > 0.4 ? randNum : "Ok";
    lastValue = randomNumOrOk;
    if (typeof randomNumOrOk === "number") {
        countNum++;
    }
    else {
        countOk++;
    }
}
// Вивід у HTML
const resNum = document.getElementById("num");
const resRow = document.getElementById("row");
const resMore = document.getElementById("more");
if (resNum)
    resNum.textContent = `Кількість чисел: ${countNum}`;
if (resRow)
    resRow.textContent = `Кількість "Ok": ${countOk}`;
if (resMore) {
    if (countNum > countOk) {
        resMore.textContent = `Більше чисел. Останнє значення: ${lastValue}`;
    }
    else if (countOk > countNum) {
        resMore.textContent = `Більше "Ok". Останнє значення: ${lastValue}`;
    }
    else {
        resMore.textContent = `Кількість чисел і "Ok" однакова. Останнє значення: ${lastValue}`;
    }
}
const btnReload = document.getElementById("btnReload");
btnReload === null || btnReload === void 0 ? void 0 : btnReload.addEventListener("click", () => {
    location.reload();
});
// Задача 6. Вводиться сума грошей і позначення валюти.
// Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH").
// Тобто якщо вводять гривні, то перевести у долари і євро.
//  А якщо вводять долари, то перевести у гривні  і євро. Курси валют – це константи.
const EXCHANGE_RATES = {
    USD_TO_UAH: 41.5,
    USD_TO_EUR: 0.92,
    EUR_TO_UAH: 45.2,
    EUR_TO_USD: 1.09,
    UAH_TO_USD: 0.024,
    UAH_TO_EUR: 0.022,
};
function convertVal(amount, currencyVal) {
    const currency = currencyVal.toLowerCase();
    if (amount < 0) {
        return "Некоректно введені данні";
    }
    let res = "";
    switch (currency) {
        case "uah":
            const UAHToUSD = amount * EXCHANGE_RATES.UAH_TO_USD;
            const UAHToEUR = amount * EXCHANGE_RATES.UAH_TO_EUR;
            res = `UAH ${amount} = USD ${UAHToUSD.toFixed(2)} - EUR ${UAHToEUR.toFixed(2)}`;
            break;
        case "usd":
            const USDToUAH = amount * EXCHANGE_RATES.USD_TO_UAH;
            const USDToEUR = amount * EXCHANGE_RATES.USD_TO_EUR;
            res = `USD ${amount} = UAH ${USDToUAH.toFixed(2)} - EUR ${USDToEUR.toFixed(2)}`;
            break;
        case "eur":
            const EURToUAH = amount * EXCHANGE_RATES.EUR_TO_UAH;
            const EURToUSD = amount * EXCHANGE_RATES.EUR_TO_USD;
            res = `EUR ${amount} = UAH ${EURToUAH.toFixed(2)} - USD ${EURToUSD.toFixed(2)}`;
            break;
        default:
            res = "Невірна валюта. Використовуйте UAH, USD або EUR";
    }
    return res;
}
const btn6 = document.getElementById("btnTask6");
const res6 = document.getElementById("res6");
btn6 === null || btn6 === void 0 ? void 0 : btn6.addEventListener("click", () => {
    const amountVal = prompt("Введіть суму:");
    const currencyVal = prompt("Введіть валюту (UAH, USD, EUR):");
    if (amountVal && currencyVal) {
        const amount = Number(amountVal);
        if (isNaN(amount)) {
            if (res6)
                res6.textContent = "Невірна сума";
        }
        else {
            const res = convertVal(amount, currencyVal.trim());
            if (res6)
                res6.textContent = res;
        }
    }
    else {
        if (res6)
            res6.textContent = "Введіть всі дані";
    }
});
