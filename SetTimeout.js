//settimeout 


//sync

function a() {
    setTimeout(() => {
        console.log("Function is executed")
    }, 2000);
}
a();

function b() {
    setTimeout(() => {
        console.log("function b is executed");
        
    }, 3000);
}
b();

const c = ()=>{
    setTimeout(() => {
        console.log("Function  c is executed")
    }, 5000);
}
c();

function d() {
    setTimeout(() => {
        console.log("Function d is executed");
        
    }, 6000);
}

