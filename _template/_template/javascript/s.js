"use strict";
class InputAnalyzer {
    constructor(threshold, inputSelector) {
        this.threshold = threshold;
        const input = document.querySelector(inputSelector);
        if (!input || !(input instanceof HTMLInputElement)) {
            throw new Error(`Input element not found for selector: ${inputSelector}`);
        }
        this.inputElement = input;
        // Прив'язуємо метод до події input та контексту класу
        this.inputElement.addEventListener('input', this.analyzeInput.bind(this));
        console.log(`Analyzer initialized for ${inputSelector}. Threshold: ${threshold}`);
    }
    // Метод для аналізу вводу
    analyzeInput() {
        const value = parseFloat(this.inputElement.value);
        if (isNaN(value)) {
            this.inputElement.style.backgroundColor = 'white';
            return;
        }
        if (value < this.threshold) {
            this.inputElement.style.backgroundColor = 'red';
        }
        else {
            this.inputElement.style.backgroundColor = 'green';
        }
    }
}
// Приклад використання (уявімо, що у DOM є <input id="myInput">)
// const analyzer1 = new InputAnalyzer(50, '#myInput');
// ===============
Надаю;
розв;
'язки задач та прикладів, використовуючи синтаксис TypeScript.;
Розв;
'язки Задач та Прикладів (TypeScript);
