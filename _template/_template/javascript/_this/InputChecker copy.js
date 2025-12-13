export default class InputChecker {
    constructor(limitValue) {
        this.limitValue = limitValue;
        this._inpEl = null;
        // 1 -- bind
        //   private onInput() {
        //     const val = Number(this._inpEl?.value)
        //     if (val > this.limitValue) this._inpEl!.style.backgroundColor = 'green'
        //     else this._inpEl!.style.backgroundColor = 'red'
        //   }
        // 2 --
        this.onInput = () => {
            var _a;
            const val = Number((_a = this._inpEl) === null || _a === void 0 ? void 0 : _a.value);
            if (val > this.limitValue)
                this._inpEl.style.backgroundColor = 'green';
            else
                this._inpEl.style.backgroundColor = 'red';
        };
    }
    startChecking(inpEl) {
        this._inpEl = inpEl;
        // inpEl.oninput = this.onInput.bind(this) //1
        inpEl.oninput = this.onInput; //2
    }
}
