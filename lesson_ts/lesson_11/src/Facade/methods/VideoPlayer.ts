import IVideoPlayer from "../interfaces/IVideoPlayer";

export default class VideoPlayer implements IVideoPlayer {
  init(): void {
    console.log("VideoPlayer: ініціалізовано");
  }

  load(filename: string): void {
    console.log(`VideoPlayer: файл "${filename}" завантажено`);
  }

  play(): void {
    console.log("VideoPlayer: відтворення відео");
  }
}
