import Ticket from "./_class/Ticket.js";
import Transition from "./_classEnum/Transition.js";
import { TransactionType } from "./_classEnum/TransitionType.js";
import SettingsService from "./_classInterface/SettingsService.js";
import CompanyDirectory from "./_classUnionInterface/CompanyDirectory.js";
import ValidData from "./_classStatic/validData/ValidData.js";
// ------------------------------------------------------------------
const task1Valid = new Ticket({
    location: "Kiev",
    price: 300,
    fullname: "Іваненко Іван Іванович",
    date: new Date("2025-03-10"),
});
console.log("--------------------------------------------------------");
console.log(task1Valid);
// ------------------------------------------------------------------
let user1 = new Transition(1, 200, new Date(), TransactionType.DEPOSIT, "susses");
console.log("--------------------------------------------------------");
console.log(user1);
// ------------------------------------------------------------------
const settingsService = new SettingsService();
const settings = settingsService.loadSettings();
settings.theme = "dark";
settingsService.saveSettings(settings);
console.log("--------------------------------------------------------");
console.log(settingsService.loadSettings());
// ------------------------------------------------------------------
const directory = new CompanyDirectory();
directory.addEmployee({
    id: 1,
    name: "Ivan",
    department: "IT",
    subordinates: 5,
});
directory.addEmployee({
    id: 2,
    name: "Anna",
    stack: ["TS", "React"],
    level: "senior",
});
console.log("--------------------------------------------------------");
console.log(directory.getManagers());
console.log(directory.getEngineers());
// ------------------------------------------------------------------
const name = "Ivan";
const age = 25;
if (ValidData.isValid(name, age)) {
    console.log("--------------------------------------------------------");
    const data = new ValidData(name, age);
    console.log(String(data));
}
else {
    console.log("--------------------------------------------------------");
    console.error("Некоректні дані: вік менше 18 або ім'я порожнє");
}
