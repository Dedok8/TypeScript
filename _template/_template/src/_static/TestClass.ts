export default class TestClass {
  static objectNumber: number
  static {
    this.objectNumber = 0
  }

  constructor(public val1: number, public val2: number) {
    TestClass.objectNumber++
  }

  static showObjectNumber() {
    console.log(this.objectNumber)
  }
}
