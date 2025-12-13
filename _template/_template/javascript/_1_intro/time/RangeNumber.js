export default class RangeNumber {
    constructor(initValue, _minValue, _maxValue) {
        this._minValue = 0;
        this._maxValue = 0;
        this._value = 0;
        this.setLimits(_minValue, _maxValue);
        this.Value = initValue;
    }
    setLimits(_minValue, _maxValue) {
        if (_minValue > _maxValue)
            throw new Error('Error: limits are invalid');
        this._minValue = _minValue;
        this._maxValue = _maxValue;
    }
    get Value() {
        return this._value;
    }
    set Value(newValue) {
        if (newValue > this._maxValue || newValue < this._minValue)
            throw new Error('Value is invalid');
        this._value = newValue;
    }
    addValue(val) {
        const sumValue = this.Value + val;
        //скільки цілих величин діапазону зараз міститься у сумі
        // (скільки цілих годин, якщо про хвилини)
        // (скільки діб (24 години) якщо це години)
        const overflowUnits = Math.floor((sumValue - this._minValue) / (this._maxValue - this._minValue + 1));
        this.Value =
            ((sumValue - this._minValue) % (this._maxValue - this._minValue + 1)) +
                this._minValue;
        return overflowUnits;
    }
}
