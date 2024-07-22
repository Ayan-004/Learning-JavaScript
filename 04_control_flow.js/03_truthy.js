const userEmail = []

if(userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length == 0) {
    // console.log("Object is empty");

}

//Nullish Coalescing Operator(??): null, undefined
// let val1 = 5 ?? 10
// let val1 = null ?? 10
// let val1 = undefined ?? 10
let val1 = null ?? 10 ?? 20

// console.log(val1);

// Ternary Operator

let iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");
