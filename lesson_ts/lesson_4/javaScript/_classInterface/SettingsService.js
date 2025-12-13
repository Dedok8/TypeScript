// 1. Сервіс налаштувань користувача ⚙️
// Інтерфейс: IUserSettings – визначає структуру налаштувань, які потрібно зберігати (theme: 'dark' | 'light', language: string, notifications: boolean).
// Клас: SettingsService – містить метод loadSettings(): IUserSettings та saveSettings(settings: IUserSettings).
//  Клас не є самими налаштуваннями, але оперує об'єктами цього типу.
export default class SettingsService {
    constructor() {
        this.localKey = "UserSetting";
    }
    loadSettings() {
        const key = localStorage.getItem(this.localKey);
        if (!key) {
            return {
                theme: "light",
                language: "uk",
                notifications: true,
            };
        }
        return JSON.parse(key);
    }
    saveSettings(settings) {
        localStorage.setItem(this.localKey, JSON.stringify(settings));
    }
}
