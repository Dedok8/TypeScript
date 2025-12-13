var _a;
class TestClass {
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
        _a.objectNumber++;
    }
    static showObjectNumber() {
        console.log(this.objectNumber);
    }
}
_a = TestClass;
(() => {
    _a.objectNumber = 0;
})();
export default TestClass;
