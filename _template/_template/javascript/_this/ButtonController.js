export default class ButtonController {
    constructor(minVal, maxVal) {
        this.minVal = minVal;
        this.maxVal = maxVal;
        this.getRandomNumberArrow = () => {
            console.log(this);
            console.log(this.minVal + Math.floor(Math.random() * (this.maxVal - this.minVal + 1)));
        };
    }
    getRandomNumber() {
        console.log(this);
        console.log(this.minVal + Math.floor(Math.random() * (this.maxVal - this.minVal + 1)));
    }
}
