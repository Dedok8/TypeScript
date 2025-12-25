import ILearningUIFactory, {
  ILessonView,
  IProgressTracker,
  IQuizComponent,
} from "./LearningUIFactory";

class MobileLessonView implements ILessonView {
  renderLessonView(): void {
    console.log("Урок відображається у мобільному додатку");
  }
}

class MobileQuizComponent implements IQuizComponent {
  renderQuizComponent(): void {
    console.log("Квіз відображається у мобільному додатку");
  }
}

class MobileProgressTracker implements IProgressTracker {
  renderProgressTracker(): void {
    console.log("Трекер прогресу відображається у мобільному додатку");
  }
}

export default class MobileLearningUIFactory implements ILearningUIFactory {
  createLessonView(): ILessonView {
    return new MobileLessonView();
  }
  createQuizComponent(): IQuizComponent {
    return new MobileQuizComponent();
  }
  createProgressTracker(): IProgressTracker {
    return new MobileProgressTracker();
  }
}
