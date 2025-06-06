//async
function task1() {
    setTimeout(() => {
        console.log("Task1 is executed");
        
    }, 5000);
}
task1();

const task2 = ()=>{
    setTimeout(() => {
        console.log("Task2 is executed");
        
    }, 500);
}
task2();

const task3 = ()=>{
    setTimeout(() => {
        console.log("Task3 is executed");
        
    },3000);
}
task3();

const task4 = ()=>{
    setTimeout(() => {
        console.log("Task4 is executed");
        
    }, 2000);
}
task4();