import IRenderChart from "../IRenderChart";

export default class BarChart implements IRenderChart {
  constructor(data: number[]) {}
  render(data: number[]): void {
    console.log("Rendering bar chart with", data);
  }
}
