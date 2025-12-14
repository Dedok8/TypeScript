import IRenderChart from "../IRenderChart";

export default class PieChart implements IRenderChart {
  constructor(data: number[]) {}
  render(data: number[]): void {
    console.log("Rendering pie chart with", data);
  }
}
