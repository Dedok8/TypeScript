export default class AudioPlayer {
    init() {
        console.log("AudioPlayer: ініціалізовано");
    }
    setVolume(level) {
        console.log(`AudioPlayer: гучність = ${level}`);
    }
    play() {
        console.log("AudioPlayer: відтворення аудіо");
    }
}
