export default class LogAction {
  log(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] LOG: ${message}`);
  }
}
