// Задача 5. Рендеринг сторінок:
// PageRenderer напряму залежить від HTMLTemplateRenderer, тому не можна підставити інший тип рендерингу (Markdown, PDF).

import IRenderer from "./interfaces/IRenderer.js";

export default class PageRenderer {
  constructor(private renderer: IRenderer) {}

  renderPage(page: string): string {
    return this.renderer.render(page);
  }
}
