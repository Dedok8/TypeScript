// Сенсори у системі моніторингу (з можливістю вмикати/вимикати):
// Є базовий клас Sensor із методом getValue() і методами увімкнення/вимкнення.
// Підклас OfflineSensor повертає помилку замість числового значення, якщо вимкнений.
// ❌ Порушення LSP — клієнтський код очікує завжди число, але отримує виняток

import IGetValue from "./interfaces/IGetValue";
import IStateSwitcher from "./interfaces/IStateSwitcher";
import ISwitcher from "./interfaces/ISwitch";

// class SensorBad {
//   private _isOn: boolean = true;

//   turnOn() {
//     this._isOn = true;
//     console.log("✅ Sensor turned ON");
//   }
//   turnOff() {
//     this._isOn = false;
//     console.log("⚙️ Sensor turned OFF");
//   }

//   getValue(): number {
//     // навіть якщо сенсор "вимкнений", базовий клас усе одно повертає значення
//     return Math.random() * 100;
//   }
// }

// class OfflineSensorBad extends SensorBad {
//   getValue(): number {
//     // ❌ Порушення LSP — поведінка змінюється: замість числа — помилка
//     throw new Error("Sensor offline! Cannot read value.");
//   }
// }

export default class Sensor implements IGetValue, IStateSwitcher, ISwitcher {
  private _isOn: boolean = true;
  turnOn(): any {
    this._isOn = true;
    console.log("✅ Sensor turned ON");
  }

  turnOff(): any {
    this._isOn = false;
    console.log("⚙️ Sensor turned OFF");
  }

  isOn(): boolean {
    return this._isOn;
  }

  getValue(): number {
    return this._isOn === true ? Math.random() * 100 : 0;
  }
}
