export default interface IAudioPlayer {
  init(): void;
  setVolume(level: number): void;
  play(): void;
}
