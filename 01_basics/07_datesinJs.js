//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let MyCreatedDate = new Date(2024, 0, 25);
// let MyCreatedDate = new Date(2024, 0, 25, 5, 3);
// let MyCreatedDate = new Date("2024-01-25");
let MyCreatedDate = new Date("01-25-2004");
// console.log(MyCreatedDate.toDateString());

let MyTimeStamp = Date.now()
// console.log(MyTimeStamp);
// console.log(MyCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    era:"long"
})); 