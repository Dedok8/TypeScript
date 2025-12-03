"use strict";
//============ never
// З клавіатури номер робочого дня. Ввисти скільки залишилось до кінця тижня. Передбчати генерування виглючних ситуацій якщо номер дня некоректний і коли номер дня коректний, але це не є робочим днем (використати функцію з never для генерування виключиних ситуацій)
// З клавіатури вводиться пора року. Створити функцію, яка виводить у консоль  рекомндований одяг (використати never).
function raiseError(message) {
    throw new Error(message);
}
// Task 1: робочий день (1-5) і скільки залишилось до кінця робочого тижня
;
(function handleWorkdayLeft() {
    var _a;
    const inputRaw = (_a = prompt('Введіть номер дня тижня (1=Пн ... 7=Нд):')) !== null && _a !== void 0 ? _a : '';
    const dayNum = Number(inputRaw.trim());
    try {
        if (!Number.isInteger(dayNum))
            raiseError('Потрібно ввести ціле число 1-7');
        if (dayNum < 1 || dayNum > 7)
            raiseError('Номер дня має бути в діапазоні 1-7');
        if (dayNum === 6 || dayNum === 7)
            raiseError('Це вихідний день, не робочий');
        const daysLeftToFriday = 5 - dayNum; // скільки робочих днів лишилось включно до Пт
        document.write(`<p>Залишилось робочих днів до кінця тижня: ${daysLeftToFriday}</p>`);
    }
    catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        document.write(`<p style="color:red">Помилка: ${msg}</p>`);
    }
})();
function recommendClothes(season) {
    switch (season) {
        case 'spring':
            return 'Легка куртка та дощовик';
        case 'summer':
            return 'Футболка, шорти, капелюх від сонця';
        case 'autumn':
        case 'fall':
            return 'Тепла кофта та вітровка';
        case 'winter':
            return 'Пуховик, шапка, рукавички';
        default:
            return raiseError('Невідома пора року');
    }
}
;
(function handleSeasonClothes() {
    var _a;
    const raw = ((_a = prompt('Введіть пору року (spring/summer/autumn/fall/winter):')) !== null && _a !== void 0 ? _a : '')
        .toLowerCase()
        .trim();
    try {
        const rec = recommendClothes(raw);
        document.write(`<p>Рекомендований одяг: ${rec}</p>`);
    }
    catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        document.write(`<p style="color:red">Помилка: ${msg}</p>`);
    }
})();
function isWeekend(input) {
    if (typeof input === 'number') {
        if (!Number.isInteger(input) || input < 1 || input > 7)
            return raiseError('День має бути числом 1-7');
        return input >= 6 ? 'weekend' : 'workday';
    }
    const name = input.toLowerCase().trim();
    const map = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7,
    };
    if (!(name in map))
        return raiseError('Невірна назва дня (monday..sunday)');
    return map[name] >= 6 ? 'weekend' : 'workday';
}
;
(function handleWeekendOverload() {
    var _a, _b, _c;
    const mode = ((_a = prompt('Введіть 1 для номера дня або 2 для назви дня:')) !== null && _a !== void 0 ? _a : '').trim();
    try {
        let result;
        if (mode === '1') {
            const num = Number(((_b = prompt('Введіть номер дня (1=Mon..7=Sun):')) !== null && _b !== void 0 ? _b : '').trim());
            result = isWeekend(num);
        }
        else if (mode === '2') {
            const name = ((_c = prompt('Введіть назву дня англійською (monday..sunday):')) !== null && _c !== void 0 ? _c : '').trim();
            result = isWeekend(name);
        }
        else {
            return raiseError('Потрібно обрати 1 або 2');
        }
        const label = result === 'weekend' ? 'Вихідний' : 'Робочий';
        document.write(`<p>Результат: ${label}</p>`);
    }
    catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        document.write(`<p style="color:red">Помилка: ${msg}</p>`);
    }
})();
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
// ==========
// ==========
// ==========
// ==========
