// 🧠 4. Клонування ігрових персонажів
// Завдання:  Створи клас GameCharacter з властивостями name, level, skills, inventory.  Реалізуй метод clone(),
// який дозволяє створювати копії персонажів з незначними змінами (наприклад, інший рівень або зброя).
//  Мета - показати, як створювати “шаблони” ігрових об’єктів для швидкого наповнення світу.

import IClonable from "./IClonable.js";

export default class GameCharacter implements IClonable<GameCharacter> {
  constructor(
    public name: string,
    public level: number,
    public skills: string[],
    public inventory: string[]
  ) {}
  clone(): GameCharacter {
    return new GameCharacter(
      this.name,
      this.level,
      [...this.skills],
      [...this.inventory]
    );
  }
}
