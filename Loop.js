//while

const a = ()=>{
     let b = 30;               //31,39,40
     while(b<40){              //30<40,31<40,39<40 ,40<40
          console.log(b);     //30 ,31,39
          b++;                //31,32,40
     }
        
}
a();


//do while loop

function b() {
    let c = 30;
    do{
       console.log(c);
       c++;   
    }while(c<20)
}
b();

//for loop

function c() {
    let a1 = 30;
    for (let i = 0; i < a1; i++) {
        console.log(i);
    }

    let a = [30,20,50,25,7,41];   //length starts from 1 & index starts from 0
    for(let i= 0;i<a.length;i++){
        console.log(a[i]);
    }
}
c();

//for of

let s = "Welcome to the class";

for(const result of s){
    console.log(result);
}

//for in 

let h = {
    name : 'Bala',
    age : 24,
    location:"chennai"
}
//console.log(h);

for (const result1 in h) {
//    console.log(result1);
   //    console.log(h[result1]);
   console.log(`${result1} - ${h[result1]}`);
   
}

//for each
let i = [12,34,true,'bala',349.4];

i.forEach(element => {
    console.log(element)
});



