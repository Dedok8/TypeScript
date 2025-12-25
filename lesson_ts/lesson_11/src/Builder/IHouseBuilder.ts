import { House } from "./HouseBuilder";

export default interface IHouseBuilder {
  setFoundation(type: string): this;
  setWalls(type: string): this;
  setRoof(type: string): this;
  setWindows(count: number): this;
  setDoors(count: number): this;
  build(): House;
}
