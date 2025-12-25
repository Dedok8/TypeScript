import ILearningUIFactory, {
  ILessonView,
  IProgressTracker,
  IQuizComponent,
} from "./LearningUIFactory";

class DesktopLessonView implements ILessonView {
  renderLessonView(): void {
    console.log("Урок відображається на комп'ютері");
  }
}

class DesktopQuizComponent implements IQuizComponent {
  renderQuizComponent(): void {
    console.log("Квіз відображається на комп'ютері");
  }
}

class DesktopProgressTracker implements IProgressTracker {
  renderProgressTracker(): void {
    console.log("Трекер прогресу відображається на комп'ютері");
  }
}

export default class DesktopLearningUIFactory implements ILearningUIFactory {
  createLessonView(): ILessonView {
    return new DesktopLessonView();
  }
  createQuizComponent(): IQuizComponent {
    return new DesktopQuizComponent();
  }
  createProgressTracker(): IProgressTracker {
    return new DesktopProgressTracker();
  }
}
