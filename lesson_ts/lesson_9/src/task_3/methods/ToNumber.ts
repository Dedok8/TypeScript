import ITransformer from "../ITransformer.js";

export default class ToNumber implements ITransformer<string, number> {
  transform(value: string): number {
    return parseInt(value);
  }
}
