import ITransformer from "../ITransformer";

export default class ToJSON implements ITransformer<object, string> {
  transform(value: object): string {
    return JSON.stringify(value);
  }
}
