// Задача 1. Створити два інтерфейс студента (піб, курс, факультет).
//  На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)
interface Student {
  name: string;
  course: number;
  faculty: string;
}

interface GroupLeader extends Student {
  group: number;
}

const groupLeader = {
  name: "Ivan",
  course: 4,
  faculty: "Food Technology",
  group: 110,
};

const task1 = document.getElementById("task1");

if (task1) {
  task1.innerHTML = `
    <p><strong>Name:</strong> ${groupLeader.name}</p>
    <p><strong>Course:</strong> ${groupLeader.course}</p>
    <p><strong>Faculty:</strong> ${groupLeader.faculty}</p>
    <p><strong>Group:</strong> ${groupLeader.group}</p>
  `;
}

// Задача 2. Створіть union-тип для трьох типів :
// car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива).
// Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт.

type Transports =
  | { type: "car"; model: string; owner: string }
  | { type: "bus"; company: string; numberSeats: number }
  | { type: "airplane"; speed: number; fuelType: string };

function getTransports(transports: Transports): string {
  let infoTransport = "";

  switch (transports.type) {
    case "car":
      infoTransport = `Тип транспорту: ${transports.type} , модель: ${transports.model} , власник: ${transports.owner}`;
      break;
    case "bus":
      infoTransport = `Тип транспорту: ${transports.type} , компанія: ${transports.company} , кількіть сидінь: ${transports.numberSeats}`;

      break;
    case "airplane":
      infoTransport = `Тип транспорту: ${transports.type} , швидкість: ${transports.speed} , тип палива: ${transports.fuelType}`;
      break;

    default:
      const _tr: never = transports;
      break;
  }

  return infoTransport;
}

const userCar: Transports = {
  type: "car",
  model: "BMW M5",
  owner: "Ivan",
};

const userBus: Transports = {
  type: "bus",
  company: "mercedes",
  numberSeats: 25,
};

const task2 = document.getElementById("task2");
if (task2) {
  task2.textContent = getTransports(userBus);
}
// Задача 3. Задача “Події календаря”.
// Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note).
// Кожна подія може бути mandatory або optional.
// Створити тип CalendarEvent, який об’єднує тип події та її важливість, використовуючи перетини та об’єднання типів.

interface Meeting {
  type: "meeting";
  participants: string[];
}

interface Deadline {
  type: "deadline";
  dueDate: Date;
}

interface Reminder {
  type: "reminder";
  note: string;
}

type EventImportance = "mandatory" | "optional";

type CalendarEvent =
  | (Meeting & { importance: EventImportance })
  | (Deadline & { importance: EventImportance })
  | (Reminder & { importance: EventImportance });

const meeting: CalendarEvent = {
  type: "meeting",
  participants: ["Ivan", "Olga", "Baba Galya"],
  importance: "mandatory",
};

const deadline: CalendarEvent = {
  type: "deadline",
  dueDate: new Date("04.12.2025"),
  importance: "optional",
};

const remainder: CalendarEvent = {
  type: "reminder",
  note: "Купити продукти",
  importance: "mandatory",
};

function formatEvent(event: CalendarEvent): string {
  switch (event.type) {
    case "meeting":
      return `Meeting: ${event.participants.join(", ")} (${event.importance})`;

    case "deadline":
      return `Deadline: ${event.dueDate.toLocaleDateString()} (${event.importance})`;

    case "reminder":
      return `Reminder: ${event.note} (${event.importance})`;
  }
}

const task3_1 = document.getElementById("task3-1");
const task3_2 = document.getElementById("task3-2");
const task3_3 = document.getElementById("task3-3");

if (task3_1 && task3_2 && task3_3) {
  task3_1.textContent = formatEvent(meeting);
  task3_2.textContent = formatEvent(deadline);
  task3_3.textContent = formatEvent(remainder);
}

// Задача 4. Є продукти: Book (має author), Electronics (має warranty), Clothes (має size).
// Продукти можуть бути onSale або regularPrice.
//  Створити тип ShopProduct, який об’єднує тип продукту та його статус, використовуючи & і |.

interface Book {
  author: string;
}

interface Electronics {
  warranty: number | string;
}

interface Clothes {
  size: number;
}

type typeProduct = { status: "onSale" | "regularPrice" };

type ShopProduct = (Book | Electronics | Clothes) & typeProduct;

const product: ShopProduct = {
  author: "Ivan",
  status: "regularPrice",
};

const task4 = document.getElementById("task4");

if (task4) {
  task4.textContent = JSON.stringify(product);
}

// Задача 5.  У localStorage зберігається об’єкт у форматі JSON.
//  Проаналізувати чи є цей об'єкт
//  типу Product{     title:string,     price:number }

interface Product {
  title: string;
  price: number;
}

const productLocal: Product = {
  title: "apple",
  price: 30,
};

localStorage.setItem("data", JSON.stringify(productLocal));

const dataFromStorage = localStorage.getItem("data");
const objFromStorage: Product | null = dataFromStorage
  ? JSON.parse(dataFromStorage)
  : null;

function isProduct(obj: any): obj is Product {
  return (
    obj !== null &&
    typeof obj === "object" &&
    typeof obj.title === "string" &&
    typeof obj.price === "number"
  );
}

const task5 = document.getElementById("task5");

if (isProduct(objFromStorage) && task5) {
  task5.textContent = "true";
} else if (task5) {
  task5.textContent = "false";
}

// Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата).
//  Створити функції для перевірки цього типу (Type Guard, Assert)

interface TypeTicket {
  type: string;
  price: number;
  fullName: string;
  date: Date;
}

function isTicket(ticket: unknown): ticket is TypeTicket {
  if (!ticket || typeof ticket !== "object") return false;
  const t = ticket as any;
  return (
    typeof t.type === "string" &&
    typeof t.price === "number" &&
    typeof t.fullName === "string" &&
    t.date instanceof Date
  );
}

function assertTicket(ticket: unknown): asserts ticket is TypeTicket {
  if (!isTicket(ticket)) throw new Error("Це не квиток");
}

const validTicket = {
  type: "Kyiv",
  price: 500,
  fullName: "Іван Петренко",
  date: new Date("05.12.2025"),
};

const task6 = document.getElementById("task6");

if (task6) {
  if (isTicket(validTicket)) {
    task6.textContent = `Квиток валідний: ${validTicket.type}, ${validTicket.price} грн`;
  } else {
    task6.textContent = "Квиток невалідний";
  }
}

// Задача 7. Описати тип «журнал учня» (3 поля-масиви з оцінками ).
// Потім на основі цього типу створити тип «менеджер оцінок»
// (додати методи знаходження середньої оцінки і найбільшої оцінки)

interface StudentJournal {
  english: number[];
  biology: number[];
  chemistry: number[];
}

interface ScoreManager extends StudentJournal {
  getAllScore(this: ScoreManager): number[];
  getAverageScore(this: ScoreManager): number;
  getMaxScore(this: ScoreManager): number;
}

const journal: ScoreManager = {
  english: [5, 4, 3],
  biology: [4, 4, 5],
  chemistry: [3, 5, 4],

  getAllScore() {
    return [...this.english, ...this.biology, ...this.chemistry];
  },

  getAverageScore() {
    const allScore = this.getAllScore();
    const sum = allScore.reduce((prevSc, curSc) => prevSc + curSc);
    return sum / allScore.length;
  },

  getMaxScore() {
    return Math.max(...this.getAllScore());
  },
};

const task7_1 = document.getElementById("task7-1");
const task7_2 = document.getElementById("task7-2");
const task7_3 = document.getElementById("task7-3");

if (task7_1)
  task7_1.textContent = `Всі оцінки: ${journal.getAllScore().join(", ")}`;
if (task7_2)
  task7_2.textContent = `Середня оцінка: ${journal.getAverageScore().toFixed(2)}`;
if (task7_3) task7_3.textContent = `Найбільша оцінка: ${journal.getMaxScore()}`;
