//function 

//function declaration

function Divya() {
    console.log("Function executed");
}
Divya();

function Abinash(name) {
    console.log("My name is " + name);

}
Abinash("abbs");

function a(name) {
    name = "Bala";
    console.log("My name is " + name);
}
a();

function n() {
    let a = 24;
    console.log("My age is " + a);

}
n();

//function expression
const c = function () {
    console.log("Anonymous function is executed");
}
c();

const d = function (rent, petrol, movie) {
    console.log("My total month expnse is " + (rent + petrol + movie));

}
d(5000, 1500, 2000);

const e = function () {
    let parlour = 2000;
    let hair = 1000;
    let beauty = 3000;
    console.log("The total expenses is " + (parlour + hair + beauty));

}
e();

//arrow function
const f = () => {
    console.log("Arrow function is executed");

}
f();

//iife

(function g() {
    console.log("IIFE Executed");

})
();


