export default class Roulette {
  public scoresList: number[] = []

  constructor(
    private _rouletteCellNumber: number,
    private _minScoreValue: number,
    private _maxScoreValue: number
  ) {
    this.generateScoresList()
  }
  // ----- Методи ----------
  private getRandomScore() {
    return (
      this._minScoreValue +
      Math.floor(
        Math.random() * (this._maxScoreValue - this._minScoreValue + 1)
      )
    )
  }
  // генерування полів рулетки (приватне)
  private generateScoresList() {
    this.scoresList = []
    for (let i = 0; i < this._rouletteCellNumber; i++) {
      this.scoresList.push(this.getRandomScore())
    }
  }
  // виведення списку згенерованих значень (відкрите)
  public printScoresList() {
    console.log(this.scoresList.join(', '))
  }
  // приведення до рядка (відкрите)
  public [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case 'string':
        return this.scoresList.join(', ')
      case 'number':
        return this._rouletteCellNumber
      default:
        return this._rouletteCellNumber
    }
  }
  // знаходженя середнього значення для списку згенерованих балів (відкрите)
  public getAverage() {
    const sum = this.scoresList.reduce((prevSum, el) => prevSum + el, 0)
    return sum / this.scoresList.length
  }

  // крутити рулетку (отримання випадкового балу) (відкрите)
  public rotateRoulette() {
    const randomIndex = Math.floor(Math.random() * this.scoresList.length)
    return this.scoresList[randomIndex]
  }
}
