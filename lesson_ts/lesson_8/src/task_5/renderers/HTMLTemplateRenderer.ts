import IRenderer from "../interfaces/IRenderer.js";

export default class HTMLTemplateRenderer implements IRenderer {
  render(content: string) {
    console.log(`HTMLTemplateRenderer ${content}`);
  }
}
