import IPrintable from "./IPrintable.js";

function printAll<T extends IPrintable>(items: T[]) {
  return items.forEach((item) => item.print());
}

export default printAll;
