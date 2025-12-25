import IAudioPlayer from "../interfaces/IAudioPlayer";

export default class AudioPlayer implements IAudioPlayer {
  init(): void {
    console.log("AudioPlayer: ініціалізовано");
  }

  setVolume(level: number): void {
    console.log(`AudioPlayer: гучність = ${level}`);
  }

  play(): void {
    console.log("AudioPlayer: відтворення аудіо");
  }
}
