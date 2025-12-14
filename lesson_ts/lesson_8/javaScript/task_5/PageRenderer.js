// Задача 5. Рендеринг сторінок:
// PageRenderer напряму залежить від HTMLTemplateRenderer, тому не можна підставити інший тип рендерингу (Markdown, PDF).
export default class PageRenderer {
    constructor(renderer) {
        this.renderer = renderer;
    }
    renderPage(page) {
        return this.renderer.render(page);
    }
}
