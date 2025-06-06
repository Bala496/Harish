//array

let day =["monday","tuesday","wednesday","thursday","friday"];

//end of the array
//push
day.push("Saturday");
console.log("Push : ",day);

let day1 =["monday","tuesday","wednesday","thursday","friday"];

//pop
day1.pop();
console.log("Pop :",day1)

//begining of the array
let day2 =["monday","tuesday","wednesday","thursday","friday"];
//shift
day2.shift();
console.log("Shift :",day2);

let day3 =["monday","tuesday","wednesday","thursday","friday"];
//unshift
day3.unshift("Monday");
console.log("Unshift : ",day3);

//slice
let a = day.slice(2,4);
console.log("Slice :",a);

//includes 
let a2 = day.includes("monday");
console.log("Includes :",a2);

//concat 
let a3 = day.concat(day3);
console.log("concat : ",a3);

let number = [12,34,5,6,43,5,12,6,5];
//indexof
console.log("Indexof :",number.indexOf(5));
//lastindexof
console.log("Lastindexof :",number.lastIndexOf(12));

let week =["monday","tuesday","wednesday","thursday","friday"];

//sort
week.sort();
console.log("Sort :",week);

//reverse 
week.reverse();
console.log("Reverse :",week);

//splice 

let fruits =["apple","oragne","mango","banana"]; //length -4 index-3

fruits.splice(2,2,"berry","cherry","fig");
console.log("Splice : ",fruits);



