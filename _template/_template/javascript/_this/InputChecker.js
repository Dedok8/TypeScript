export default class InputChecker {
    constructor(limitValue) {
        this.limitValue = limitValue;
        this.onInput = (event) => {
            const inpEl = event.target;
            const val = Number(inpEl === null || inpEl === void 0 ? void 0 : inpEl.value);
            if (val > this.limitValue)
                inpEl.style.backgroundColor = 'green';
            else
                inpEl.style.backgroundColor = 'red';
        };
    }
    startChecking(inpEl) {
        inpEl.oninput = this.onInput;
    }
}
