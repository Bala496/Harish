//callback

function bala(ab) {
    setTimeout(() => {
        console.log("Welcome");
        ab();
    }, 2000);
}

const a = ()=>{
    console.log("Class");
    
}
bala(a);


function BookRoom(a) {
    setTimeout(() => {
        console.log("Booking room........");
        a();
    }, 5000);
}

function checkIn() {
    console.log("I am in the room")
}
BookRoom(checkIn);

