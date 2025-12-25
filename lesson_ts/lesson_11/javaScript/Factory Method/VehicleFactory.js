// 🚗 3. Завод з виробництва транспортних засобів
// Опиши абстрактний клас VehicleFactory з фабричним методом createVehicle().
// Створи кілька фабрик - CarFactory, BikeFactory, TruckFactory,
//  - кожна з яких створює свій тип транспорту (Car, Bike, Truck).
// Мета - показати, як один і той самий інтерфейс фабрики може створювати різні продукти.
class Car {
    drive() {
        console.log("Car");
    }
}
class Bike {
    drive() {
        console.log("Bike");
    }
}
class Truck {
    drive() {
        console.log("Truck");
    }
}
class VehicleFactory {
}
export class CarFactory extends VehicleFactory {
    createVehicle() {
        return new Car();
    }
}
export class BikeFactory extends VehicleFactory {
    createVehicle() {
        return new Bike();
    }
}
export class TruckFactory extends VehicleFactory {
    createVehicle() {
        return new Truck();
    }
}
export const settings = {
    vehicleType: "Car",
};
export function getFactory(type) {
    switch (type) {
        case "Car":
            return new CarFactory();
        case "Bike":
            return new BikeFactory();
        case "Truck":
            return new TruckFactory();
        default:
            const handle = type;
            throw new Error(`Error ${type}`);
    }
}
