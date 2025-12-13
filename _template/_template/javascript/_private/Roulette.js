export default class Roulette {
    constructor(_rouletteCellNumber, _minScoreValue, _maxScoreValue) {
        this._rouletteCellNumber = _rouletteCellNumber;
        this._minScoreValue = _minScoreValue;
        this._maxScoreValue = _maxScoreValue;
        this.scoresList = [];
        this.generateScoresList();
    }
    // ----- Методи ----------
    getRandomScore() {
        return (this._minScoreValue +
            Math.floor(Math.random() * (this._maxScoreValue - this._minScoreValue + 1)));
    }
    // генерування полів рулетки (приватне)
    generateScoresList() {
        this.scoresList = [];
        for (let i = 0; i < this._rouletteCellNumber; i++) {
            this.scoresList.push(this.getRandomScore());
        }
    }
    // виведення списку згенерованих значень (відкрите)
    printScoresList() {
        console.log(this.scoresList.join(', '));
    }
    // приведення до рядка (відкрите)
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'string':
                return this.scoresList.join(', ');
            case 'number':
                return this._rouletteCellNumber;
            default:
                return this._rouletteCellNumber;
        }
    }
    // знаходженя середнього значення для списку згенерованих балів (відкрите)
    getAverage() {
        const sum = this.scoresList.reduce((prevSum, el) => prevSum + el, 0);
        return sum / this.scoresList.length;
    }
    // крутити рулетку (отримання випадкового балу) (відкрите)
    rotateRoulette() {
        const randomIndex = Math.floor(Math.random() * this.scoresList.length);
        return this.scoresList[randomIndex];
    }
}
