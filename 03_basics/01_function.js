function MyName() {
    console.log("A");
    console.log("y");
    console.log("a");
    console.log("n");
}

// MyName()

function addTwoNumber(number1, number2) {
    // console.log(number1 + number2);

    // let result = (number1 + number2)
    // return result

    return number1 + number2
}

// console.log(addTwoNumber(4,5));

function LogInMessage(username) {
    if(username === undefined) {
        console.log("Please Enter Your Name");
        return
    }
    return`${username} just logged In`
}

// console.log(LogInMessage("Ayan"));
// console.log(LogInMessage());


function CalculateCartPrice(val1, val2,...num1) {
    return num1
}

// console.log(CalculateCartPrice(200, 400, 500, 2000)); 

const user = {
    username: "Ayan",
    email: "ayyanjsk@gamil.com"
}

function handleObject(anyObject){
    console.log( `Username is ${anyObject.username} and Email is ${anyObject.email}`);
}

// handleObject({
//     username: "Ayan",
//     email: "ayyanjsk@gamil.com"
// })

// handleObject(user)


const NewArray = [200, 400, 500, 600]

function handleArray(getArray) {
    return getArray[1]
}

// console.log(handleArray(NewArray));
// console.log(handleArray([200, 400, 500, 600]));