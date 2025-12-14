import IRenderChart from "../IRenderChart.js";

export default class LineChart implements IRenderChart {
  constructor(data: number[]) {}
  render(data: number[]): void {
    console.log("Rendering line chart with", data);
  }
}
