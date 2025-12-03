function setError(message: string): never {
  throw new Error(message);
}

// Задача 1. Вводиться перший номер місяця якоїсь пори року(3, 6, 9, 12).
// Визначити пору року.Передбачити перевірку і генерувати помилку якщо некоректний місяць (1-12)
// і генерувати помилку якщо це не перший місяць пори року.Використати never.
``;
type Season = 3 | 6 | 9 | 12;

function setSeason(month: number): string {
  if (month < 1 || month > 12) {
    setError("Місяць повинен бути в діапазоні від 1 до 12");
  }

  if (month !== 3 && month !== 6 && month !== 9 && month !== 12) {
    setError("Це не перший місяць пори року. Введіть 3, 6, 9 або 12");
  }

  switch (month as Season) {
    case 3:
      return "Весна";
    case 6:
      return "Літо";
    case 9:
      return "Осінь";
    case 12:
      return "Зима";
  }
}

const btnTask1 = document.getElementById("btnTask1");
const task1 = document.getElementById("task1");

if (btnTask1 && task1) {
  btnTask1.addEventListener("click", () => {
    const userSeason = prompt(
      "Введіть перший номер місяця пори року (3, 6, 9, 12):"
    );

    if (userSeason === null || userSeason.trim() === "") {
      task1.textContent = "Ви не ввели значення";
      return;
    }

    const month = Number(userSeason);

    try {
      const season = setSeason(month);
      task1.textContent = `Пора року: ${season}`;
    } catch (error) {
      if (error instanceof Error) {
        task1.textContent = `Помилка: ${error.message}`;
      }
    }
  });
}

// Задача 2. Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа.
function searchLastDigitOfSymbolNumber(num: number): number;
function searchLastDigitOfSymbolNumber(num: string): string;
function searchLastDigitOfSymbolNumber(num: number | string): number | string {
  if (typeof num === "number") return num % 10;
  return num.slice(-1);
}

const btnTask2 = document.getElementById("btnTask2");
const task2 = document.getElementById("task2");

if (task2 && btnTask2) {
  btnTask2.addEventListener("click", () => {
    const userNum = prompt("Введіть значення (число або рядок):");

    if (userNum === null || userNum.trim() === "") {
      task2.textContent = "Ви не ввели значення";
      return;
    }
    try {
      const numValue = Number(userNum);

      if (!isNaN(numValue) && userNum.trim() !== "") {
        const res = searchLastDigitOfSymbolNumber(numValue);
        task2.textContent = `Результат (остання цифра числа): ${res}`;
      } else {
        const res = searchLastDigitOfSymbolNumber(userNum);
        task2.textContent = `Результат (останній символ рядка): "${res}"`;
      }
    } catch (error) {
      if (error instanceof Error) {
        task2.textContent = `Помилка: ${error.message}`;
      }
    }
  });
}

// Задача 3. Вводиться номер місяця або назва місяця.
// Створити функцію, яка повинна повертати номер пори року (1-4) якщо передаємо число,
// або назву пори року, якщо було введено назву місяця. Використати перевантаження функцій.

const winter = [12, 1, 2];
const spring = [3, 4, 5];
const summer = [6, 7, 8];
const autumn = [9, 10, 11];

const winterNames = ["Грудень", "Січень", "Лютий"];
const springNames = ["Березень", "Квітень", "Травень"];
const summerNames = ["Червень", "Липень", "Серпень"];
const autumnNames = ["Вересень", "Жовтень", "Листопад"];

function getSeason(month: number): number;
function getSeason(month: string): string;
function getSeason(month: number | string): number | string {
  if (typeof month === "number") {
    if (month < 1 || month > 12) {
      setError("Невірно введений місяць (від 1 до 12)");
    }
    if (winter.includes(month)) return 1;
    if (spring.includes(month)) return 2;
    if (summer.includes(month)) return 3;
    if (autumn.includes(month)) return 4;
  }

  if (typeof month === "string") {
    if (winterNames.includes(month)) return "Зима";
    if (springNames.includes(month)) return "Весна";
    if (summerNames.includes(month)) return "Літо";
    if (autumnNames.includes(month)) return "Осінь";
    setError("Невірна назва місяця");
  }

  setError("Невірні данні");
}

const btnTask3 = document.getElementById("btnTask3");
const task3 = document.getElementById("task3");

if (btnTask3 && task3) {
  btnTask3.addEventListener("click", () => {
    const userNum = prompt(
      "Введіть назву місяця (наприклад, Січень, також з великої літери) або номер місяця (1-12):"
    );

    if (userNum === null || userNum.trim() === "") {
      task3.textContent = "Ви не ввели значення";
      return;
    }

    try {
      const numValue = Number(userNum);

      if (!isNaN(numValue) && userNum.trim() !== "") {
        const seasonNumber = getSeason(numValue);
        task3.textContent = `Номер пори року: ${seasonNumber}`;
      } else {
        const seasonName = getSeason(userNum);
        task3.textContent = `Пора року: ${seasonName}`;
      }
    } catch (error) {
      if (error instanceof Error) {
        task3.textContent = `Помилка: ${error.message}`;
      }
    }
  });
}

// Задача 4. Випадковим чином генерується масив номерів робочих днів, або назв вихідних, або назв святкових днів.
//  Підрахувати чого було більше: святкових чи вихідних.

type WorkDay = number;
type Holyday = string;
type DayType = WorkDay | Holyday;

function generateRandomDay(count: number): DayType[] {
  const workDays: WorkDay[] = [1, 2, 3, 4, 5];
  const holidays: Holyday[] = [
    "Новий рік",
    "Різдво",
    "Великдень",
    "День незалежності",
  ];

  const allDay: DayType[] = [...workDays, ...holidays];
  const res: DayType[] = [];

  for (let i = 0; i < count; i++) {
    const randIndex = Math.floor(Math.random() * allDay.length);
    res.push(allDay[randIndex]);
  }

  return res;
}

const btnTask4 = document.getElementById("btnTask4");
const task4 = document.getElementById("task4");

if (btnTask4 && task4) {
  btnTask4.addEventListener("click", () => {
    const randomDays = generateRandomDay(20);

    let workCount = 0;
    let holidayCount = 0;

    for (const day of randomDays) {
      if (typeof day === "number" && day >= 1 && day <= 5) {
        workCount++;
      }

      if (typeof day === "string") {
        holidayCount++;
      }
    }

    if (holidayCount > workCount) {
      task4.textContent = `Святкових більше (${holidayCount}) ніж робочих (${workCount})`;
    } else if (workCount > holidayCount) {
      task4.textContent = `Робочих більше (${workCount}) ніж святкових (${holidayCount})`;
    } else {
      task4.textContent = `Однакова кількість: ${workCount}`;
    }
  });
}

// Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими

type SettingsList = [string, "enabled" | "disabled"][];

let settingsList: SettingsList = [
  ["darkMode", "enabled"],
  ["autoSave", "disabled"],
  ["notifications", "enabled"],
  ["locationAccess", "disabled"],
  ["backup", "enabled"],
];

function getEnabled(list: SettingsList): string[] {
  const enabled: string[] = [];

  for (const [key, value] of list) {
    if (value === "enabled") enabled.push(key);
  }

  return enabled;
}

const resFn = getEnabled(settingsList);

const task5 = document.getElementById("task5");

if (task5) {
  task5.textContent = resFn.join(", ");
}

// Задача 6. Закінчити задачу, що ми почали на уроці.
// Дано масив маркерів на карті  [lat, long, city].
// Визначити найближче місто до вказаних координат

const task6 = document.getElementById("task6");
const btnTask6 = document.getElementById("btnTask6");

type Marker = [number, number, string];

function haversineDistance(
  lat1: number,
  long1: number,
  lat2: number,
  long2: number
): number {
  const R = 6371;
  const toRad = (x: number) => (x * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLong = toRad(long2 - long1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLong / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function getClosestPlace(
  lat: number,
  long: number,
  markers: Marker[]
): Marker | null {
  if (markers.length === 0) return null;

  let closest = markers[0];
  let minDistance = haversineDistance(lat, long, markers[0][0], markers[0][1]);

  for (let i = 1; i < markers.length; i++) {
    const distance = haversineDistance(lat, long, markers[i][0], markers[i][1]);
    if (distance < minDistance) {
      minDistance = distance;
      closest = markers[i];
    }
  }

  return closest;
}

const markers: Marker[] = [
  [50.45, 30.52, "Київ"],
  [49.84, 24.03, "Львів"],
  [48.46, 35.04, "Дніпро"],
];

if (btnTask6 && task6) {
  btnTask6.addEventListener("click", () => {
    const latInput = prompt("Введіть широту (наприклад 49.8):");
    const longInput = prompt("Введіть довготу (наприклад 24.0):");

    if (!latInput || !longInput) {
      task6.textContent = "Координати не введені";
      return;
    }

    const testLat = Number(latInput);
    const testLong = Number(longInput);

    if (isNaN(testLat) || isNaN(testLong)) {
      task6.textContent = "Некоректні координати";
      return;
    }

    const closest = getClosestPlace(testLat, testLong, markers);

    if (closest) {
      task6.textContent = `Найближче місто до (${testLat}, ${testLong}): ${closest[2]}`;
    } else {
      task6.textContent = "Маркерів немає";
    }
  });
}

// ! Скажу чесно, задачу вирішив з допомогою ШІ

// Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота).
//  Підрахувати кількість кожної з нагород. Використати enum.
// Можете і never якось застосувати

enum Award {
  GOLD = "Золота медаль",
  SILVER = "Срібна медаль",
  BRONZE = "Бронзова медаль",
  CERTIFICATE = "Грамота",
}

type AwardDistribution = {
  [key in Award]: number;
};

function getRandomAward(): Award {
  const awards = [Award.GOLD, Award.SILVER, Award.BRONZE, Award.CERTIFICATE];
  const randIndex = Math.floor(Math.random() * awards.length);
  return awards[randIndex];
}

function generateArrAward(count: number): Award[] {
  const awards: Award[] = [];
  for (let i = 0; i < count; i++) {
    awards.push(getRandomAward());
  }
  return awards;
}

function awardDistribution(awards: Award[]): AwardDistribution {
  const distribution: AwardDistribution = {
    [Award.GOLD]: 0,
    [Award.SILVER]: 0,
    [Award.BRONZE]: 0,
    [Award.CERTIFICATE]: 0,
  };

  for (const award of awards) {
    switch (award) {
      case Award.GOLD:
        distribution[Award.GOLD]++;
        break;
      case Award.SILVER:
        distribution[Award.SILVER]++;
        break;
      case Award.BRONZE:
        distribution[Award.BRONZE]++;
        break;
      case Award.CERTIFICATE:
        distribution[Award.CERTIFICATE]++;
        break;
      default:
        const neverCheck: never = award;
        throw new Error(`Невідома нагорода: ${neverCheck}`);
    }
  }

  return distribution;
}

const task7 = document.getElementById("task7");
const btnTask7 = document.getElementById("btnTask7");

if (btnTask7 && task7) {
  btnTask7.addEventListener("click", () => {
    const userCount = prompt("Введіть кількість нагород:");

    if (!userCount) {
      task7.textContent = "Кількість не введена";
      return;
    }

    const count = Number(userCount);

    if (isNaN(count) || count <= 0) {
      task7.textContent = "Некоректна кількість";
      return;
    }

    const awards = generateArrAward(count);
    const distribution = awardDistribution(awards);

    const awardsList = awards.map((a) => `<li>${a}</li>`).join("");

    const table = `
      <table border="1" cellspacing="0" cellpadding="5" style="margin-top:10px; border-collapse: collapse;">
        <tr><th>Нагорода</th><th>Кількість</th></tr>
        <tr><td>Золота медаль</td><td>${distribution[Award.GOLD]}</td></tr>
        <tr><td>Срібна медаль</td><td>${distribution[Award.SILVER]}</td></tr>
        <tr><td>Бронзова медаль</td><td>${distribution[Award.BRONZE]}</td></tr>
        <tr><td>Грамота</td><td>${distribution[Award.CERTIFICATE]}</td></tr>
      </table>
    `;

    task7.innerHTML = `
      <b>Згенеровані нагороди:</b>
      <ul>${awardsList}</ul>
      <b>Розподіл:</b>
      ${table}
    `;
  });
}
