// 🧠 5. Інтерфейси навчальної платформи (веб / мобільна / десктопна)
// Завдання:  Створи LearningUIFactory, яка створює:
// LessonView,
// QuizComponent,
// ProgressTracker.
// Реалізуй фабрики:
// WebLearningUIFactory,
// MobileLearningUIFactory,
// DesktopLearningUIFactory.
// Мета: моделювання кросплатформного інтерфейсу, де для кожної платформи створюються свої реалізації компонентів.

export interface ILessonView {
  renderLessonView(): void;
}

export interface IQuizComponent {
  renderQuizComponent(): void;
}

export interface IProgressTracker {
  renderProgressTracker(): void;
}

export default interface ILearningUIFactory {
  createLessonView(): ILessonView;
  createQuizComponent(): IQuizComponent;
  createProgressTracker(): IProgressTracker;
}
