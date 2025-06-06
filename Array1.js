//map

let a = [2,3,4,5,6,7];

const result = a.map((ab)=>{
    return( ab+5);
    
});
console.log(result);

const result1 = a.map((ab)=>ab+10);
console.log(result1);

//filter
let b = [12,34,57,6,3,4,2,4]
const result2 = b.filter((bb)=>{
    return(bb>12)
});
console.log(result2);

//reduce 
let c = [12,34,5,6,4,34,6,6];

const result3 = c.reduce((accumulator,currentValue)=>{
       return (accumulator+currentValue);
})
console.log(result3);


