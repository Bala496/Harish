//function

function a() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let a1 = true;
            if (a1) {
                resolve("a is executed")
            } else {
                reject("a is not executed")
            }
        }, 4000);
     })
}

const b = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a2 = true;
            if (a2) {
                resolve("b is executed")
            } else {
                reject("b is not executed")
            }
        }, 500);
    })
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a3 = false;
            if (a3) {
                resolve("c is executed")
            } else {
                reject("c is not executed")
            }
        }, 3000);
    })
}

async function result(){
       try {
          console.log("Success is loading...........");
          
          const result1 = await a();
          console.log(result1);
          const result2 = await b();
          console.log(result2);
          const result3 = await c();
          console.log(result3);
          
       } catch (a) {
         console.log("Error is loading...............");
         
         console.log(a);
         
       }
}
result();
