// 🧠 4. Клонування ігрових персонажів
// Завдання:  Створи клас GameCharacter з властивостями name, level, skills, inventory.  Реалізуй метод clone(),
// який дозволяє створювати копії персонажів з незначними змінами (наприклад, інший рівень або зброя).
//  Мета - показати, як створювати “шаблони” ігрових об’єктів для швидкого наповнення світу.
export default class GameCharacter {
    constructor(name, level, skills, inventory) {
        this.name = name;
        this.level = level;
        this.skills = skills;
        this.inventory = inventory;
    }
    clone() {
        return new GameCharacter(this.name, this.level, [...this.skills], [...this.inventory]);
    }
}
