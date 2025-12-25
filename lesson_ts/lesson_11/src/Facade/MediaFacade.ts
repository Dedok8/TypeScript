// 🧩 1. Фасад для мультимедійного плеєра
// Реалізуй систему з кількох компонентів (AudioPlayer, VideoPlayer, Equalizer, PlaylistManager).
//  Створи клас MediaFacade, який спрощує взаємодію з усією системою - наприклад,
// надає метод playMovie(filename: string), що всередині
// виконує всі потрібні кроки (ініціалізація, налаштування звуку, запуск відео).

import IAudioPlayer from "./interfaces/IAudioPlayer";
import IEqualizer from "./interfaces/IEqualizer";
import IMediaFacade from "./interfaces/IMediaFacade";
import IPlaylistManager from "./interfaces/IPlaylistManager";
import IVideoPlayer from "./interfaces/IVideoPlayer";

export default class MediaFacade implements IMediaFacade {
  constructor(
    private audioPlayer: IAudioPlayer,
    private videoPlayer: IVideoPlayer,
    private equalizer: IEqualizer,
    private playlistManager: IPlaylistManager
  ) {}

  playMovie(filename: string): void {
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
