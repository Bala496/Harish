//if condition 

let a = true;
let b = false;

if (a && b) {
    //it is executes only true condition
    console.log("IT is and operator");
}

console.log("It is OR operator");


//condition ? "true" : "false" ;


//if else 

let c = 20;
let d = 10;

const result = (c < d) ? "It is less" : "It is greater";
console.log(result);


if (c < d) {
    // Code to be executed if the condition is true

    console.log("It is less");

} else {
    // Code to be executed if the condition is false

    console.log("It is greater")
}

//else if 

let e = 20;
let f = 10;

if (e == f) {
    console.log("It is equal");

} else if (e === f) {
    console.log("It is not equal");

} else if (e < f) {
    console.log("It is less")
} else if (e <= f) {
    console.log("It less eqaul")
} else {
    console.log("Printed");

}