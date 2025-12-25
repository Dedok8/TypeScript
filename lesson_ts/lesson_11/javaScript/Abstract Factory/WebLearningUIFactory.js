class WebLessonView {
    renderLessonView() {
        console.log("Урок відображається у веб додатку");
    }
}
class WebQuizComponent {
    renderQuizComponent() {
        console.log("Квіз відображається у веб додатку");
    }
}
class WebProgressTracker {
    renderProgressTracker() {
        console.log("Трекер прогресу відображається у веб додатку");
    }
}
export default class WebLearningUIFactory {
    createLessonView() {
        return new WebLessonView();
    }
    createQuizComponent() {
        return new WebQuizComponent();
    }
    createProgressTracker() {
        return new WebProgressTracker();
    }
}
