// Задача 1.  Завантаження зображень:
// Клас і завантажує, і стискає, і логує дії.
// ❌ Неправильна реалізація
// class ImageUploaderBad {
//   uploadImage(filePath: string) {
//     const compressed = this.compressImage(filePath);
//     console.log(`Uploading ${compressed} to server...`);
//     this.logAction(`File ${filePath} uploaded successfully.`);
//   }
//   private compressImage(path: string): string {
//     console.log(`Compressing image: ${path}`);
//     return `compressed_${path}`;
//   }
//   private logAction(message: string) {
//     const timestamp = new Date().toISOString();
//     console.log(`[${timestamp}] LOG: ${message}`);
//   }
// }
import CompressImage from "./CompressImage.js";
import LogAction from "./LogAction.js";
export default class ImageUploader {
    constructor() {
        this.logger = new LogAction();
    }
    uploadImage(filePath) {
        const compressor = new CompressImage(filePath);
        const compressedPath = compressor.compress();
        console.log(`Uploading ${compressedPath} to server...`);
        this.logger.log(`File ${filePath} uploaded successfully.`);
    }
}
