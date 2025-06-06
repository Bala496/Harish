//class

class Bike {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    result() {
        //    return(`My bike model is ${this.model} & it costs ${this.price}`);
        console.log(`My bike model is ${this.model} & it costs ${this.price}`)
    }
}

const bike1 = new Bike("RE", 300000);
const bike2 = new Bike("RC", 350000);
const bike3 = new Bike("KTM", 250000);

bike1.result();
bike2.result();
bike3.result();
// console.log(bike1.result());
// console.log(bike2.result());
// console.log(bike3.result());

