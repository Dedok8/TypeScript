import IRenderer from "../interfaces/IRenderer.js";

export default class Markdown implements IRenderer {
  render(content: string) {
    console.log(`Markdown ${content}`);
  }
}
