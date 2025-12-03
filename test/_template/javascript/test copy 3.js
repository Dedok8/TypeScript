"use strict";
//============ never
// З клавіатури номер робочого дня. Ввисти скільки залишилось до кінця тижня. Передбчати генерування виглючних ситуацій якщо номер дня некоректний і коли номер дня коректний, але це не є робочим днем (використати функцію з never для генерування виключиних ситуацій)
// function raiseError(message: string): never {
//   throw new Error(message)
// }
// ;(function handleWorkdayLeft() {
//   const inputRaw = prompt('Введіть номер дня тижня (1=Пн ... 7=Нд):') ?? ''
//   const dayNum = Number(inputRaw.trim())
//   try {
//     if (!Number.isInteger(dayNum)) raiseError('Потрібно ввести ціле число 1-7')
//     if (dayNum < 1 || dayNum > 7)
//       raiseError('Номер дня має бути в діапазоні 1-7')
//     if (dayNum === 6 || dayNum === 7) raiseError('Це вихідний день, не робочий')
//     const daysLeftToFriday = 5 - dayNum // скільки робочих днів лишилось включно до Пт
//     document.write(
//       `<p>Залишилось робочих днів до кінця тижня: ${daysLeftToFriday}</p>`
//     )
//   } catch (e) {
//     const msg = e instanceof Error ? e.message : String(e)
//     document.write(`<p style="color:red">Помилка: ${msg}</p>`)
//   }
// })()
//------
// type Season = 'spring' | 'summer' | 'autumn' | 'fall' | 'winter'
// function recommendClothes(season: Season): string {
//   switch (season) {
//     case 'spring':
//       return 'Легка куртка та дощовик'
//     case 'summer':
//       return 'Футболка, шорти, капелюх від сонця'
//     case 'autumn':
//     case 'fall':
//       return 'Тепла кофта та вітровка'
//     case 'winter':
//       return 'Пуховик, шапка, рукавички'
//     default:
//       const _test: never = season
//       throw new Error('Err')
//   }
// }
// document.write(recommendClothes('summer'))
// З клавіатури вводиться пора року. Створити функцію, яка виводить у консоль  рекомндований одяг (використати never).
//============ overloading
// Передається або номер дня, або назву дня на англійькій. Треба сказати чи вихідний чи робочий.
// type DayName =
//   | 'monday'
//   | 'tuesday'
//   | 'wednesday'
//   | 'thursday'
//   | 'friday'
//   | 'saturday'
//   | 'sunday'
// function isWeekend(input: number): 'workday' | 'weekend'
// function isWeekend(input: string): 'workday' | 'weekend'
// function isWeekend(input: number | string): 'workday' | 'weekend' {
//   if (typeof input === 'number') {
//     if (!Number.isInteger(input) || input < 1 || input > 7)
//       return raiseError('День має бути числом 1-7')
//     return input >= 6 ? 'weekend' : 'workday'
//   }
//   const name = input.toLowerCase().trim() as DayName
//   return name === 'saturday' || name === 'sunday' ? 'weekend' : 'workday'
// }
// document.write(isWeekend('saturday'))
//============= array
// Планувальник відпусток. Дано масив імен водіїв і масив номерів, коли можна йти у відпустку. Потрібно випадково вибрати ім’я водія і випадково вибрати номер місяця для відпустки.
//============= array (union)
// Сформувати масив значень ігрового барабана. Це або виграшна сума, або «Пауза», «Банкрот», «Супер приз»
//============= array
// Сформувати двовимірний масив (5*5) ігрового поля. Усі елементи нулі, або 1-корабель (4 штуки), або ‘block’- земля (5 штук)
// =========== Tuple
// Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими
// Дано масив маркерів на картів [lat, long, city]. Визначити найближче місто до вказаних координат
// ========== Enum
// Створіть enum TrafficLight зі значеннями "Red", "Yellow", "Green"
// Потрібно ввести стать студента ("male", "female"). У залежносі від цього додати Mr, Ms.
// Вводиться статус відповіді. Потрібно визначити рядкове представлення ("success" ,  "error")
// Вводиться сума грошей і позначення валюти. Потрібно перевести кількість гривень у кількість обраної валюти ("USD" ,  "EUR" , "UAH")
// ========== Objects
// Описати користувача сайту. Створіть type або interface для об’єкта користувача з полями: id, username, email.
// Модель автомобіля. Опишіть Car з властивостями: brand, model, year, electric (boolean).
// ========== Objects extends
// Розширення об’єкта. Опишіть базовий Product (назва, ціна) і розширте його FoodProduct з додатковим полем expirationDate.
// Створіть тип Point2D з полями x і y. Потім зробіть тип Point3D, що розширює Point2D.
// ========== Objects Optional
// Опишіть форму реєстрації з полями id (тільки для читання), name, email, а також опціональним phone
// ========== Declaration merging
// Declaration mergingСтворіть два окремих оголошення інтерфейсу Book.у першому - title: stringу другому - author: stringПеревірте, що після злиття можна створити об’єкт із обома властивостями.
// ========== Augmentation
// Розширення глобального Window. Додайте у глобальний об’єкт Window властивість appName: string.Потім у коді виведіть її в консоль.
// ========== is value Type
// Написати функцію перевірки типу для
// type User = { name: string; email: string };
// За допомогою цієї функції перевірити тип
// const value: unknown = { name: 'Andrii', email: 'a@b.c' };
//---------------
// type User = { name: string; email: string }
// function isUser(obj: any): obj is User {
//   return (
//     obj &&
//     typeof obj === 'object' &&
//     typeof obj.name === 'string' &&
//     typeof obj.email === 'string'
//   )
// }
// const value: unknown = { name: 'Andrii', email: 'a@b.c' }
// if (isUser(value)) {
//   // ✅ value: User
//   console.log(value.email)
// } else {
//   // ❌ value: не User
// }
//----------------------------
// type Circle = { kind: 'circle'; r: number }
// type Square = { kind: 'square'; side: number }
// function isCircle(shape: Circle | Square): shape is Circle {
//   return shape.kind === 'circle'
// }
// function getArea(s: Circle | Square) {
//   if (isCircle(s)) {
//     return Math.PI * s.r ** 2 // ✅ Circle
//   } else {
//     return s.side ** 2 // ✅ Square
//   }
// }
// ==========
// type User = {
//     id: number;
//     name: string;
//     age: number;
//   };
//   const user = {
//     id: 1,
//     name: 'Andrii',
//   } satisfies User;
// ==========
// ==========
var Day;
(function (Day) {
    Day["Monday"] = "monday";
    Day["Tuesday"] = "tuesday";
    Day["Wednesday"] = "wednesday";
})(Day || (Day = {}));
function isDay(value) {
    console.log(Object.values(Day));
    return Object.values(Day).includes(value);
}
console.log(isDay('monday')); // true
console.log(isDay('friday')); // false
