import RangeNumber from './RangeNumber.js';
export default class MyTime {
    constructor(hours, minutes) {
        this._hours = null;
        this._minutes = null;
        this._hours = new RangeNumber(hours, 0, 23);
        this._minutes = new RangeNumber(minutes, 0, 59);
    }
    get Hours() {
        var _a;
        return (_a = this._hours) === null || _a === void 0 ? void 0 : _a.Value;
    }
    get Minutes() {
        var _a;
        return (_a = this._minutes) === null || _a === void 0 ? void 0 : _a.Value;
    }
    addMinutes(val) {
        var _a, _b;
        const diffHours = (_a = this._minutes) === null || _a === void 0 ? void 0 : _a.addValue(val);
        if (diffHours)
            (_b = this._hours) === null || _b === void 0 ? void 0 : _b.addValue(diffHours);
    }
    addHours(val) {
        var _a;
        (_a = this._hours) === null || _a === void 0 ? void 0 : _a.addValue(val);
    }
    toString() {
        var _a, _b;
        return `${(_a = this.Hours) === null || _a === void 0 ? void 0 : _a.toString().padStart(2, '0')} : ${(_b = this.Minutes) === null || _b === void 0 ? void 0 : _b.toString().padStart(2, '0')}`;
    }
}
