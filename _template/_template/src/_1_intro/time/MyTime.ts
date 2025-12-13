import RangeNumber from './RangeNumber.js'
export default class MyTime {
  private _hours: RangeNumber | null = null
  private _minutes: RangeNumber | null = null
  constructor(hours: number, minutes: number) {
    this._hours = new RangeNumber(hours, 0, 23)
    this._minutes = new RangeNumber(minutes, 0, 59)
  }
  get Hours() {
    return this._hours?.Value
  }
  get Minutes() {
    return this._minutes?.Value
  }
  addMinutes(val: number) {
    const diffHours = this._minutes?.addValue(val)
    if (diffHours) this._hours?.addValue(diffHours)
  }
  addHours(val: number) {
    this._hours?.addValue(val)
  }
  toString() {
    return `${this.Hours?.toString().padStart(
      2,
      '0'
    )} : ${this.Minutes?.toString().padStart(2, '0')}`
  }
}
