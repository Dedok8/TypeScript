export default class TestClass {
  public pubVal: string
  private privateVal: string

  constructor(pubVal: string, privateVal: string) {
    this.pubVal = pubVal
    this.privateVal = privateVal
  }

  public show1() {
    console.log('Ok 111')
  }
  private show2() {
    console.log('Ok 2222')
  }
}
