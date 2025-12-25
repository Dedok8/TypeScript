export default class CryptoAdapter {
    constructor(crypto) {
        this.crypto = crypto;
    }
    pay(amount) {
        this.crypto.cryptoSend(amount);
    }
}
