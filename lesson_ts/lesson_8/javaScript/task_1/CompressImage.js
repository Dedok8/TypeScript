export default class CompressImage {
    constructor(path) {
        this.path = path;
    }
    compress() {
        const compressedPath = `compressed_${this.path}`;
        console.log(`Compressing image: ${this.path}`);
        return compressedPath;
    }
}
