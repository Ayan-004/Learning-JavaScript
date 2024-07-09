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

console.log(typeof myFunction);