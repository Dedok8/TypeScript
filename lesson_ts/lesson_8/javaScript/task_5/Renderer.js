"use strict";
Задача;
5.;
Рендеринг;
сторінок: 
// PageRenderer напряму залежить від HTMLTemplateRenderer, тому не можна підставити інший тип рендерингу (Markdown, PDF).
class HTMLTemplateRendererBad {
    render(content) {
        console.log(`<html>${content}</html>`);
    }
}
class PageRendererBad {
    constructor() {
        this.renderer = new HTMLTemplateRendererBad(); // ❌ залежність від конкретного класу
    }
    showPage(text) {
        this.renderer.render(text);
    }
}
