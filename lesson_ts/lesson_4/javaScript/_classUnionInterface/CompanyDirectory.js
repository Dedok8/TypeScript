// 6. Моделювання співробітників з різними ролями 👨‍💼
// Клас: CompanyDirectory
// Складний тип: Визначення типу Employee.
// BaseEmployee = { id: number, name: string }
// ManagerFields = { department: string, subordinates: number }
// EngineerFields = { stack: string[], level: 'junior' | 'senior' } (Об'єднання для рівня)
// Об'єднання та Перетин: Employee = (BaseEmployee & ManagerFields) | (BaseEmployee & EngineerFields) (Співробітник має або менеджерські, або інженерні поля)
// Метод: getEmployeeDetails(employee: Employee)
import { isValidEngineer, isValidManager } from "./IsValidEmployee.js";
export default class CompanyDirectory {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getManagers() {
        return this.employees.filter(isValidManager);
    }
    getEngineers() {
        return this.employees.filter(isValidEngineer);
    }
}
