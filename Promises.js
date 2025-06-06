//

function movie() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ticket = true;
            if (ticket) {
                resolve("I got a ticket")
            } else {
                reject("I did not get a ticket")
            }
        }, 4000);
    })
}

function park() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let play = true;
            if (play) {
                resolve("I was in the park")
            } else {
                reject("I wasn't in the park")
            }
        }, 500);
    })
}

const a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = true;
            if (a) {
                resolve("Function a is executed");
            } else {
                reject("A is not executed")
            }
        }, 3000);
    })
}

const b = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let b = false;
            if (b) {
                resolve("Function b is executed");
            } else {
                reject("B is not executed");
            }
        }, 2000);
    })
}


async function result() {
    try {
        console.log("Sucess loading...........");

        const result1 = await movie();
        console.log(result1);
        const result2 = await park();
        console.log(result2);
        const result3 = await a();
        console.log(result3);
        const result4 = await b();
        console.log(result4);
    } catch (a) {
        console.log("Error loading...........");
        console.log(a);

    }
}
result();


async (params) => {
    
}

