

function car(brand, seat, value, owner) {
    this.brand = brand;
    this.seat = seat;
    this.value = value;
    this.owner = owner;
}

const newCar = new car("Mercedes", 4, 100000, "Tung");

document.getElementById("demo").innerHTML = newCar.brand + ", " +
    newCar.seat + ", " + newCar.value + ", " + newCar.owner;


const newCar2 = new car("BMW", 4, 90000, "Tung");
const demoElement = document.getElementById("demo2").onclick = 
function setNewValue(){
    const newValue = 0;
    if(newCar2.brand == "Mercedes" && newCar2.value >= 9000000){
        return newValue = newCar2.value * 2;
    }else{
        return newCar2.value;
    }
};

if(demoElement){
    demoElement.innerHTML = `${newCar2.brand}, ${newCar2.seat},
    ${newCar2.value}, ${newCar2.owner}`;
}else{
    console.error("Not found");
}