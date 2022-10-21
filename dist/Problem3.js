"use strict";
var Value;
(function (Value) {
    Value[Value["small"] = 0] = "small";
    Value[Value["medium"] = 1] = "medium";
    Value[Value["large"] = 2] = "large";
    Value[Value["xl"] = 3] = "xl";
})(Value || (Value = {}));
class Pizza {
    constructor(pSize, value, ham, pepp, pina, exCheese) {
        this.pSize = pSize;
        this.value = value;
        this.ham = ham;
        this.pepp = pepp;
        this.pina = pina;
        this.exCheese = exCheese;
    }
    get getPSize() {
        return this.pSize;
    }
    set setPSize(pSize) {
        this.pSize = pSize;
    }
    get getValue() {
        return this.value;
    }
    set setValue(value) {
        this.value = value;
    }
    get getHam() {
        return this.ham;
    }
    set setHam(ham) {
        this.ham = ham;
    }
    get getPepp() {
        return this.pepp;
    }
    set setPepp(pepp) {
        this.pepp = pepp;
    }
    get getPina() {
        return this.pina;
    }
    set setPina(pina) {
        this.pina = pina;
    }
    get getExCheese() {
        return this.exCheese;
    }
    set setExCheese(exCheese) {
        this.exCheese = exCheese;
    }
    genCost() {
        let price;
        let base = [10, 12, 14, 18];
        let toppingMultiplier = [2, 2, 3, 4];
        let cheeseMultiplier = [2, 4, 6, 6];
        price = base[this.getValue] + (toppingMultiplier[this.getValue] * (this.getHam + this.getPepp + this.getPina));
        if (this.getExCheese == true) {
            price = price + cheeseMultiplier[this.getValue];
        }
        return price;
    }
    orderSummary() {
        return console.log(`
        ++++++++ Order Summary +++++++++
        size: ${this.pSize}
        ---Toppings---
        ham: ${this.ham}
        pepperoni: ${this.pepp}
        pineapple: ${this.pina}
        has extra cheese: ${this.exCheese}
        ***Final Price: ${this.genCost()}***`);
    }
}
console.log(Value.small);
const smallPizza = new Pizza("small", 0, 2, 2, 2, true);
const smallPizza1 = new Pizza("small", 0, 3, 3, 3, true);
const smallPizza2 = new Pizza("small", 0, 4, 4, 4, true);
const smallPizza3 = new Pizza("small", 0, 1, 4, 3, true);
const mediumPizza = new Pizza("medium", 1, 1, 4, 3, true);
const largePizza = new Pizza("large", 2, 1, 4, 3, true);
const xlPizza = new Pizza("xl", 3, 1, 4, 3, true);
// Loging to the console
console.log(smallPizza.orderSummary());
console.log(smallPizza1.orderSummary());
console.log(smallPizza2.orderSummary());
console.log(smallPizza3.orderSummary());
console.log(mediumPizza.orderSummary());
console.log(largePizza.orderSummary());
console.log(xlPizza.orderSummary());
