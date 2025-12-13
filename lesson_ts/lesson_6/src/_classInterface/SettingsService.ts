// 1. Сервіс налаштувань користувача ⚙️
// Інтерфейс: IUserSettings – визначає структуру налаштувань, які потрібно зберігати (theme: 'dark' | 'light', language: string, notifications: boolean).
// Клас: SettingsService – містить метод loadSettings(): IUserSettings та saveSettings(settings: IUserSettings).
//  Клас не є самими налаштуваннями, але оперує об'єктами цього типу.

import IUserSettings from "./IUserSetting.js";

export default class SettingsService {
  readonly localKey = "UserSetting";

  loadSettings(): IUserSettings {
    const key = localStorage.getItem(this.localKey);

    if (!key) {
      return {
        theme: "light",
        language: "uk",
        notifications: true,
      };
    }
    return JSON.parse(key) as IUserSettings;
  }

  saveSettings(settings: IUserSettings): void {
    localStorage.setItem(this.localKey, JSON.stringify(settings));
  }
}
