class MobileLessonView {
    renderLessonView() {
        console.log("Урок відображається у мобільному додатку");
    }
}
class MobileQuizComponent {
    renderQuizComponent() {
        console.log("Квіз відображається у мобільному додатку");
    }
}
class MobileProgressTracker {
    renderProgressTracker() {
        console.log("Трекер прогресу відображається у мобільному додатку");
    }
}
export default class MobileLearningUIFactory {
    createLessonView() {
        return new MobileLessonView();
    }
    createQuizComponent() {
        return new MobileQuizComponent();
    }
    createProgressTracker() {
        return new MobileProgressTracker();
    }
}
