import ILearningUIFactory, {
  ILessonView,
  IProgressTracker,
  IQuizComponent,
} from "./LearningUIFactory";

class WebLessonView implements ILessonView {
  renderLessonView(): void {
    console.log("Урок відображається у веб додатку");
  }
}

class WebQuizComponent implements IQuizComponent {
  renderQuizComponent(): void {
    console.log("Квіз відображається у веб додатку");
  }
}

class WebProgressTracker implements IProgressTracker {
  renderProgressTracker(): void {
    console.log("Трекер прогресу відображається у веб додатку");
  }
}

export default class WebLearningUIFactory implements ILearningUIFactory {
  createLessonView(): ILessonView {
    return new WebLessonView();
  }
  createQuizComponent(): IQuizComponent {
    return new WebQuizComponent();
  }
  createProgressTracker(): IProgressTracker {
    return new WebProgressTracker();
  }
}
