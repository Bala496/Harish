//hell

function a(ab) {
    setTimeout(() => {
        console.log("Function a is executed");
        ab();
    }, 5000);
}

const b = (abinash) => {
    setTimeout(() => {
        console.log("Function b is executed");
        abinash();
    }, 3000);
}

const c = (ganesh) => {
    setTimeout(() => {
        console.log("Function c is executed");
        ganesh();
    }, 500);
}

const d = (divya) => {
    setTimeout(() => {
        console.log("Function d is executed");
        divya();
    }, 2000);
}

function e() {
    setTimeout(() => {
        console.log("Fuction e is executed");

        let day = ["monday", "tuesday", "wednesday", "thursday", "friday"];

        //end of the array
        //push
        day.push("Saturday");
        console.log("Push : ", day);

    }, 1000);
}


a(() => {
    b(() => {
        c(() => {
            d(e)
        })
    })
});



//hell

function a() {
    setTimeout(() => {
        console.log("Function a is executed");
    }, 5000);
}
a();
const b1 = () => {
    setTimeout(() => {
        console.log("Function b is executed");
    }, 3000);
}
b1()
const c1 = () => {
    setTimeout(() => {
        console.log("Function c is executed");
    }, 500);
}
c1();
const d1 = () => {
    setTimeout(() => {
       
    }, 2000);
}
d1();

function e() {
    setTimeout(() => {
        console.log("Fuction e is executed");

        let day = ["monday", "tuesday", "wednesday", "thursday", "friday"];

        //end of the array
        //push
        day.push("Saturday");
        console.log("Push : ", day);

    }, 1000);
}
e();



