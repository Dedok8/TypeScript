// 🚗 3. Завод з виробництва транспортних засобів
// Опиши абстрактний клас VehicleFactory з фабричним методом createVehicle().
// Створи кілька фабрик - CarFactory, BikeFactory, TruckFactory,
//  - кожна з яких створює свій тип транспорту (Car, Bike, Truck).
// Мета - показати, як один і той самий інтерфейс фабрики може створювати різні продукти.

interface IVehicle {
  drive(): void;
}

class Car implements IVehicle {
  drive(): void {
    console.log("Car");
  }
}

class Bike implements IVehicle {
  drive(): void {
    console.log("Bike");
  }
}

class Truck implements IVehicle {
  drive(): void {
    console.log("Truck");
  }
}

abstract class VehicleFactory {
  abstract createVehicle(): IVehicle;
}

export class CarFactory extends VehicleFactory {
  createVehicle(): IVehicle {
    return new Car();
  }
}

export class BikeFactory extends VehicleFactory {
  createVehicle(): IVehicle {
    return new Bike();
  }
}

export class TruckFactory extends VehicleFactory {
  createVehicle(): IVehicle {
    return new Truck();
  }
}

export type CarType = "Car" | "Bike" | "Truck";

export const settings = {
  vehicleType: "Car",
};

export function getFactory(type: CarType): VehicleFactory {
  switch (type) {
    case "Car":
      return new CarFactory();
    case "Bike":
      return new BikeFactory();
    case "Truck":
      return new TruckFactory();
    default:
      const handle: never = type;
      throw new Error(`Error ${type}`);
  }
}
