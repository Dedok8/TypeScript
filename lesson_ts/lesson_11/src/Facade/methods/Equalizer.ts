import IEqualizer from "../interfaces/IEqualizer";

export default class Equalizer implements IEqualizer {
  setPreset(preset: "movie" | "music" | "voice"): void {
    console.log(`Equalizer: пресет "${preset}"`);
  }
}
