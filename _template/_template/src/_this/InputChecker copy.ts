export default class InputChecker {
  private _inpEl: HTMLInputElement | null = null
  constructor(readonly limitValue: number) {}
  // 1 -- bind
  //   private onInput() {
  //     const val = Number(this._inpEl?.value)
  //     if (val > this.limitValue) this._inpEl!.style.backgroundColor = 'green'
  //     else this._inpEl!.style.backgroundColor = 'red'
  //   }
  // 2 --
  private onInput = () => {
    const val = Number(this._inpEl?.value)
    if (val > this.limitValue) this._inpEl!.style.backgroundColor = 'green'
    else this._inpEl!.style.backgroundColor = 'red'
  }
  startChecking(inpEl: HTMLInputElement) {
    this._inpEl = inpEl
    // inpEl.oninput = this.onInput.bind(this) //1
    inpEl.oninput = this.onInput //2
  }
}
