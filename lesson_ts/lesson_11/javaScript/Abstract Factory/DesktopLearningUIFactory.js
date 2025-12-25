class DesktopLessonView {
    renderLessonView() {
        console.log("Урок відображається на комп'ютері");
    }
}
class DesktopQuizComponent {
    renderQuizComponent() {
        console.log("Квіз відображається на комп'ютері");
    }
}
class DesktopProgressTracker {
    renderProgressTracker() {
        console.log("Трекер прогресу відображається на комп'ютері");
    }
}
export default class DesktopLearningUIFactory {
    createLessonView() {
        return new DesktopLessonView();
    }
    createQuizComponent() {
        return new DesktopQuizComponent();
    }
    createProgressTracker() {
        return new DesktopProgressTracker();
    }
}
