export default class RangeNumber {
  private _minValue: number = 0
  private _maxValue: number = 0
  private _value: number = 0

  constructor(initValue: number, _minValue: number, _maxValue: number) {
    this.setLimits(_minValue, _maxValue)

    this.Value = initValue
  }

  private setLimits(_minValue: number, _maxValue: number) {
    if (_minValue > _maxValue) throw new Error('Error: limits are invalid')
    this._minValue = _minValue
    this._maxValue = _maxValue
  }

  get Value() {
    return this._value
  }
  set Value(newValue: number) {
    if (newValue > this._maxValue || newValue < this._minValue)
      throw new Error('Value is invalid')
    this._value = newValue
  }

  addValue(val: number) {
    const sumValue = this.Value + val
    //скільки цілих величин діапазону зараз міститься у сумі
    // (скільки цілих годин, якщо про хвилини)
    // (скільки діб (24 години) якщо це години)
    const overflowUnits = Math.floor(
      (sumValue - this._minValue) / (this._maxValue - this._minValue + 1)
    )
    this.Value =
      ((sumValue - this._minValue) % (this._maxValue - this._minValue + 1)) +
      this._minValue

    return overflowUnits
  }
}
