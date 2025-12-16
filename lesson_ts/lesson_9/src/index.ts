import GetRandom from "./task_1/GetRandom.js";
import OperationManager from "./task_2/OperationManager.js";
import ToJSON from "./task_3/methods/ToJSON.js";
import ToNumber from "./task_3/methods/ToNumber.js";

import printAll from "./task_4/printAll.js";
import { RolePermissions } from "./task_5/Roles.js";

console.log(GetRandom([1, 2, 3, 4, 5, 6]));
console.log(GetRandom(["Ivan", "Anna", "Inna", "Galia", 1, 2, 3, true, false]));

console.log("===============================================");

const task2 = new OperationManager([1, 2, 3, 4, 5, true, false, "On", "Off"]);
console.log(task2);

console.log("===============================================");

const t1 = new ToJSON();
const t2 = new ToNumber();

console.log(t1.transform({ name: "Ivan", age: 33 }));
console.log(t2.transform("77"));

console.log("===============================================");

const task_4 = printAll([
  {
    print() {
      console.log(1, 2, 3);
    },
  },
  {
    print() {
      console.log("Hello");
    },
  },
  {
    print() {
      console.log(true, false);
    },
  },
]);

console.log("===============================================");

const users: RolePermissions = {
  admin: ["edit", "addUser", "addRoles"],
  editor: ["editUser", "editApp"],
  viewer: ["onlyInteractionWithApp"],
};

console.log(users);
