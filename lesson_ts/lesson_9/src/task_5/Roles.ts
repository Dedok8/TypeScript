// Задача 5. Ролі користувачів і їхні дозволи. Опиши тип Roles = "admin" | "editor" | "viewer".
// Створи тип RolePermissions = Record<Roles, string[]>, де кожен ключ містить список дій, які дозволені ролі.

type Roles = "admin" | "editor" | "viewer";

export type RolePermissions = Record<Roles, string[]>;
