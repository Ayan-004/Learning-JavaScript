// Primitive 
// 7 types:String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedin = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const BigNumber = 874897432948309898220n;

//Reference (Non-Primitive)
//Array, Objects, Functions

const heroes = ["spiderman", "Ironman", "Captain America"]; //Array

let myObj = {
    name:"Ayan",
    age:20
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction);

//-------------------------------------------------------------------------------------------------------------------------------

// Stack(Primitive), Heap(Non-Primitive)

let myUserName = "ayan2004"

let newUserName = myUserName
newUserName = "ayan123"
// console.log(newUserName);
// console.log(myUserName);


let userOne = {
    email:"ayyanjsk@gmail.com",
    age:20
}


let userTwo = userOne
userTwo.email = "ayyansaikh47@gamil.com"
console.log(userTwo.email);
console.log(userOne.email);

