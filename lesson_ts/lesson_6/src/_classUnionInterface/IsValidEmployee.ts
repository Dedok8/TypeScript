import {
  Employee,
  IBaseEmployee,
  IManagerFields,
  IEngineerFields,
} from "./ICompanyEmployee.js";

export function isValidManager(
  employee: Employee
): employee is IBaseEmployee & IManagerFields {
  return "department" in employee && "subordinates" in employee;
}

export function isValidEngineer(
  employee: Employee
): employee is IBaseEmployee & IEngineerFields {
  return "stack" in employee && "level" in employee;
}
