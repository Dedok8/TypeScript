import IPaymentProvider from "../IPaymentProvider";
import CryptoGateway from "../services/CryptoGatewayService.js";

export default class CryptoAdapter implements IPaymentProvider {
  constructor(private crypto: CryptoGateway) {}
  pay(amount: number): void {
    this.crypto.cryptoSend(amount);
  }
}
