const dsecriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// console.log(dsecriptor);

const car = {
    carName : "Range Rover",
    price : "12 crore",
    isAvailable : true,

    orderCar : function(){
        console.log("Car is not available");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(car, "carName"));

Object.defineProperty(car, "carName", {
    // writable : false,
    enumerable : true
})

// car.carName = 'BMW'
// console.log(car.carName);



// console.log(Object.getOwnPropertyDescriptor(car, "carName"));

for (const [key, value] of Object.entries(car)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        
    }
}





