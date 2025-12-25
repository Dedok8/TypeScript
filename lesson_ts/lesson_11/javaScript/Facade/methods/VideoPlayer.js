export default class VideoPlayer {
    init() {
        console.log("VideoPlayer: ініціалізовано");
    }
    load(filename) {
        console.log(`VideoPlayer: файл "${filename}" завантажено`);
    }
    play() {
        console.log("VideoPlayer: відтворення відео");
    }
}
