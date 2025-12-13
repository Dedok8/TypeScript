var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Client_balance;
class Client {
    constructor(name, accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
        _Client_balance.set(this, 0);
    }
    get Balance() {
        return __classPrivateFieldGet(this, _Client_balance, "f");
    }
    addMoney(val) {
        if (val < 0)
            throw new Error('Error: val<0');
        __classPrivateFieldSet(this, _Client_balance, __classPrivateFieldGet(this, _Client_balance, "f") + val, "f");
    }
    withdrawMoney(val) {
        if (val < 0)
            throw new Error('Error: val<0');
        if (__classPrivateFieldGet(this, _Client_balance, "f") < val)
            throw Error('Not enough money');
        __classPrivateFieldSet(this, _Client_balance, __classPrivateFieldGet(this, _Client_balance, "f") - val, "f");
        return val;
    }
}
_Client_balance = new WeakMap();
export default Client;
