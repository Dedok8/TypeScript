// 🏡 3. Будівельник для об’єкта "Будинок" (HouseBuilder)
// Опиши процес будівництва будинку з етапами: фундамент, стіни, дах, вікна, двері.
// Реалізуй HouseBuilder, який дозволяє послідовно задавати ці частини,
// а потім методом build() отримати готовий об’єкт House.

import IHouseBuilder from "./IHouseBuilder";

export class House {
  constructor(
    public foundation: string,
    public walls: string,
    public roof: string,
    public windows: number,
    public doors: number
  ) {}
}

export default class HouseBuilder implements IHouseBuilder {
  private foundation: string = "невизначений фундамент";
  private walls: string = "невизначені стіни";
  private roof: string = "без даху";
  private windows: number = 0;
  private doors: number = 0;

  setFoundation(type: string): this {
    this.foundation = type;
    return this;
  }
  setWalls(type: string): this {
    this.walls = type;
    return this;
  }
  setRoof(type: string): this {
    this.roof = type;
    return this;
  }
  setWindows(count: number): this {
    if (count <= 0) {
      throw new Error("Кількість вікон не може біти менше за 0");
    }

    this.windows = count;
    return this;
  }
  setDoors(count: number): this {
    if (count <= 0) {
      throw new Error("Кількість дверей не може біти менше за 0");
    }
    this.doors = count;
    return this;
  }

  build(): House {
    return new House(
      this.foundation,
      this.walls,
      this.roof,
      this.windows,
      this.doors
    );
  }
}
