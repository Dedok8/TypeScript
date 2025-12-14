// Задача 2. Побудова графіків:
// Клас ChartRenderer створює різні типи графіків: лінійний, стовпчиковий, круговий.
// Якщо потрібно додати новий тип графіка, код доведеться змінювати.
// ❌ Неправильна реалізація — порушення принципу відкритості/закритості
// class ChartRendererBad {
//   renderChart(type: string, data: number[]) {
//     if (type === "line") {
//       console.log("Rendering line chart with", data);
//     } else if (type === "bar") {
//       console.log("Rendering bar chart with", data);
//     } else if (type === "pie") {
//       console.log("Rendering pie chart with", data);
//     } else {
//       console.log("Unknown chart type");
//     }
//   }
// }

import IRenderChart from "./IRenderChart";

export default class ChartRenderer {
  constructor(private chart: IRenderChart) {}

  render(data: number[]) {
    this.chart.render(data);
  }
}
