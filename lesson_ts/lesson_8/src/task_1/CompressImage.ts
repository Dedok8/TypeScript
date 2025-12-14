export default class CompressImage {
  constructor(private path: string) {}

  compress(): string {
    const compressedPath = `compressed_${this.path}`;
    console.log(`Compressing image: ${this.path}`);
    return compressedPath;
  }
}
