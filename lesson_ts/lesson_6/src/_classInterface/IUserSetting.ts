// Інтерфейс: IUserSettings – визначає структуру налаштувань,
// які потрібно зберігати (theme: 'dark' | 'light', language: string, notifications: boolean).

export default interface IUserSettings {
  theme: "dark" | "light";
  language: string;
  notifications: boolean;
}
