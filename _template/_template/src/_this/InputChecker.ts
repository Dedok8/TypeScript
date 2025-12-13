export default class InputChecker {
  constructor(readonly limitValue: number) {}
  private onInput = (event: Event) => {
    const inpEl = event.target as HTMLInputElement
    const val = Number(inpEl?.value)
    if (val > this.limitValue) inpEl!.style.backgroundColor = 'green'
    else inpEl!.style.backgroundColor = 'red'
  }
  startChecking(inpEl: HTMLInputElement) {
    inpEl.oninput = this.onInput
  }
}
