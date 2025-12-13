export default class Predictor {
    constructor(predictionsList, interval) {
        this.predictionsList = predictionsList;
        this.interval = interval;
        this.intervalId = null;
    }
    getRandomPrediction() {
        const randIndex = Math.floor(Math.random() * this.predictionsList.length);
        return this.predictionsList[randIndex];
    }
    run() {
        this.intervalId = setInterval(() => {
            console.log(this.getRandomPrediction());
        }, this.interval);
    }
    stop() {
        if (this.intervalId)
            clearInterval(this.intervalId);
    }
}
