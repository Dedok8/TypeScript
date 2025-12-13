export default class Predictor {
  private intervalId: number | null = null
  constructor(readonly predictionsList: string[], readonly interval: number) {}

  private getRandomPrediction() {
    const randIndex = Math.floor(Math.random() * this.predictionsList.length)
    return this.predictionsList[randIndex]
  }
  run() {
    this.intervalId = setInterval(() => {
      console.log(this.getRandomPrediction())
    }, this.interval)
  }
  stop() {
    if (this.intervalId) clearInterval(this.intervalId)
  }
}
