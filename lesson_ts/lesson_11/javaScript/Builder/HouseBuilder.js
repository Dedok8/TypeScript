// 🏡 3. Будівельник для об’єкта "Будинок" (HouseBuilder)
// Опиши процес будівництва будинку з етапами: фундамент, стіни, дах, вікна, двері.
// Реалізуй HouseBuilder, який дозволяє послідовно задавати ці частини,
// а потім методом build() отримати готовий об’єкт House.
export class House {
    constructor(foundation, walls, roof, windows, doors) {
        this.foundation = foundation;
        this.walls = walls;
        this.roof = roof;
        this.windows = windows;
        this.doors = doors;
    }
}
export default class HouseBuilder {
    constructor() {
        this.foundation = "невизначений фундамент";
        this.walls = "невизначені стіни";
        this.roof = "без даху";
        this.windows = 0;
        this.doors = 0;
    }
    setFoundation(type) {
        this.foundation = type;
        return this;
    }
    setWalls(type) {
        this.walls = type;
        return this;
    }
    setRoof(type) {
        this.roof = type;
        return this;
    }
    setWindows(count) {
        if (count <= 0) {
            throw new Error("Кількість вікон не може біти менше за 0");
        }
        this.windows = count;
        return this;
    }
    setDoors(count) {
        if (count <= 0) {
            throw new Error("Кількість дверей не може біти менше за 0");
        }
        this.doors = count;
        return this;
    }
    build() {
        return new House(this.foundation, this.walls, this.roof, this.windows, this.doors);
    }
}
