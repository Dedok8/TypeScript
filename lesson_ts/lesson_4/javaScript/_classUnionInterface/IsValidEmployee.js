export function isValidManager(employee) {
    return "department" in employee && "subordinates" in employee;
}
export function isValidEngineer(employee) {
    return "stack" in employee && "level" in employee;
}
