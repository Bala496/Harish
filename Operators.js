//arithmetic

const arithmetic = () => {
    let a = 10;
    let b = 5;
    let c = a + b;
    console.log(c);  //add
    console.log(a - b);  //sub
    console.log(a * b); //mul
    console.log(a / b);  //div
    console.log(a % b);  //modulus
    a++;  //a+1     //increment
    console.log(a);
    b--;  //b-1      //decrement
    console.log(b);

}
arithmetic();

//equality
function equality() {
    let a = "20";
    let b = 20;
    console.log(a == b);  //it checks value only 
    console.log(a === b); //it checks value & datatypes

}
equality();

//comparison

function comparison() {
    let a = 20;
    let b = 10;
    let c = a < b;
    console.log(c);
    console.log(a <= b);
    console.log(a > b);
    console.log(a >= b);
    console.log(a != b);
}
comparison();

//logical operator
const logical = () => {
    let a = true;
    let b = false;
    console.log(a && b);  //both value/condition must be true
    console.log(a || b);  //any one value/condition must be true
    console.log(!a);    //it returns opposite value 
}
logical();

//assignment operator
const assignment = () => {
    let a = 10;
    console.log(a += 20);  //a=a+20
}
assignment();

//ternary operator

function ternary() {
    let a = true;
    let b = false;
    const result = (a && b) ? "It is and operator" : "It is or operator";
    console.log(result);
}
ternary();