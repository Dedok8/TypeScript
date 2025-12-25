export default class Category {
    constructor(name) {
        this.name = name;
        this.arrProd = [];
    }
    add(component) {
        this.arrProd.push(component);
    }
    remove(component) {
        this.arrProd = this.arrProd.filter((comp) => comp !== component);
    }
    getTotalPrice() {
        return this.arrProd.reduce((sum, el) => sum + el.getTotalPrice(), 0);
    }
}
