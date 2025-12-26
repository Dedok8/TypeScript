// Задача 5. Перевірка доступу до API
//  Завдання:  Реалізуй ланцюг безпеки для API-запиту:
//  TokenValidationHandler - перевіряє, чи токен існує;
//  RoleCheckHandler - перевіряє, чи користувач має потрібну роль (admin, user);
//  RateLimitHandler - перевіряє, чи не перевищено ліміт запитів.
//  Якщо всі перевірки пройдені, запит обробляє RequestProcessor.
//  Мета: моделювати middleware-ланцюг у стилі Express.js / NestJS.

// ?? Цю задачу вирішив з допомогою ШІ, так як більшість не знаю як працює

export type UserRole = "admin" | "user";

export default interface ApiRequest {
  token?: string;
  role?: UserRole;
  requestCount: number;
}
