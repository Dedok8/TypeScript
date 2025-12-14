import IRenderer from "../interfaces/IRenderer.js";

export default class PDF implements IRenderer {
  render(content: string) {
    console.log(`PDF ${content}`);
  }
}
