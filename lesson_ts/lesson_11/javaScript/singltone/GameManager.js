// 💬 4. Глобальний стан гри
// Розроби клас GameManager, який зберігає поточний рівень, кількість очок, життя гравця тощо.
// Використай Singleton, щоб цей стан був спільним для всієї гри.
class GameManager {
    constructor(level, experience, heardes) {
        this.level = level;
        this.experience = experience;
        this.heardes = heardes;
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new GameManager(1, 0, 3);
        }
        return this._instance;
    }
}
export default GameManager;
