//methods

let a = "Welcome to Javascript"; 

//length
console.log(a.length);

//upper
let a1 = a.toUpperCase();
console.log("UpperCase :",a1);

//lowercaser
let a2 = a.toLowerCase();
console.log("Lowercase:",a2);

//charat
let a3 = a.charAt(12);
console.log("Charat:",a3);

//indexof 
let a4 = a.indexOf(' ');
console.log("Indexof:",a4);

//lastindexof
let a5 = a.lastIndexOf('a');
console.log("Lastindexof : ",a5);

//Includes
let a6 = a.includes("to");
console.log("Includes :",a6);

//startswith 
let a7 = a.startsWith('Welcome');
console.log("StartsWith : ",a7);

//endswith
let a8 = a.endsWith('Javascript');
console.log("Endswith :",a8);

//replace
let a9 = a.replace("Javascript","Git");
console.log("Replace :",a9);

//splice
let a10 = a.slice(5,13);
console.log("Slice : ",a10);

//split
let a11 = a.split('e');
console.log("Split: ",a11);

//concat 
let a12 = a.concat(" and continue the playwright class");
console.log("Concat :",a12);

//trim 
let b = "        Javascript and git and    api       ";
console.log(b);

let a13 = b.trim();
console.log(a13);


