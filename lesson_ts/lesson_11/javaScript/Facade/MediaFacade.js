// 🧩 1. Фасад для мультимедійного плеєра
// Реалізуй систему з кількох компонентів (AudioPlayer, VideoPlayer, Equalizer, PlaylistManager).
//  Створи клас MediaFacade, який спрощує взаємодію з усією системою - наприклад,
// надає метод playMovie(filename: string), що всередині
// виконує всі потрібні кроки (ініціалізація, налаштування звуку, запуск відео).
export default class MediaFacade {
    constructor(audioPlayer, videoPlayer, equalizer, playlistManager) {
        this.audioPlayer = audioPlayer;
        this.videoPlayer = videoPlayer;
        this.equalizer = equalizer;
        this.playlistManager = playlistManager;
    }
    playMovie(filename) {
        console.log(`${filename} Запуск фільму`);
        this.audioPlayer.init();
        this.videoPlayer.init();
        this.equalizer.setPreset("movie");
        this.audioPlayer.setVolume(70);
        this.playlistManager.addToPlaylist(filename);
        this.videoPlayer.load(filename);
        this.audioPlayer.play();
        this.videoPlayer.play();
    }
}
