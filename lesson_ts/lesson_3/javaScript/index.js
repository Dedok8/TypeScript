"use strict";
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
function getTransports(transports) {
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
            const _tr = transports;
            break;
    }
    return infoTransport;
}
const userCar = {
    type: "car",
    model: "BMW M5",
    owner: "Ivan",
};
const userBus = {
    type: "bus",
    company: "mercedes",
    numberSeats: 25,
};
const task2 = document.getElementById("task2");
if (task2) {
    task2.textContent = getTransports(userBus);
}
const meeting = {
    type: "meeting",
    participants: ["Ivan", "Olga", "Baba Galya"],
    importance: "mandatory",
};
const deadline = {
    type: "deadline",
    dueDate: new Date("04.12.2025"),
    importance: "optional",
};
const remainder = {
    type: "reminder",
    note: "Купити продукти",
    importance: "mandatory",
};
function formatEvent(event) {
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
const product = {
    author: "Ivan",
    status: "regularPrice",
};
const task4 = document.getElementById("task4");
if (task4) {
    task4.textContent = JSON.stringify(product);
}
const productLocal = {
    title: "apple",
    price: 30,
};
localStorage.setItem("data", JSON.stringify(productLocal));
const dataFromStorage = localStorage.getItem("data");
const objFromStorage = dataFromStorage
    ? JSON.parse(dataFromStorage)
    : null;
function isProduct(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        typeof obj.title === "string" &&
        typeof obj.price === "number");
}
const task5 = document.getElementById("task5");
if (isProduct(objFromStorage) && task5) {
    task5.textContent = "true";
}
else if (task5) {
    task5.textContent = "false";
}
function isTicket(ticket) {
    if (!ticket || typeof ticket !== "object")
        return false;
    const t = ticket;
    return (typeof t.type === "string" &&
        typeof t.price === "number" &&
        typeof t.fullName === "string" &&
        t.date instanceof Date);
}
function assertTicket(ticket) {
    if (!isTicket(ticket))
        throw new Error("Це не квиток");
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
    }
    else {
        task6.textContent = "Квиток невалідний";
    }
}
const journal = {
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
if (task7_3)
    task7_3.textContent = `Найбільша оцінка: ${journal.getMaxScore()}`;
