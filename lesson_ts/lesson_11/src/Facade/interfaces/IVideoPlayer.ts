export default interface IVideoPlayer {
  init(): void;
  load(filename: string): void;
  play(): void;
}
