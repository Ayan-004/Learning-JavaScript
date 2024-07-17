const user = {
    username: "Ayan",
    age: 20,

    WelcomeMessage: function() {
        console.log(`${this.username}, Welcome to the website`);
        // console.log(this)
    }

}

// user.WelcomeMessage();
// user.username = "Sam";
// user.WelcomeMessage();

// console.log(this);


// function chai() {
//     const username = "Ayan"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     const useranme = "Ayan"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     const username = "Ayan"
//     console.log(this);
// }

// chai()

const addnum = (num1, num2) => {
    return num1 + num2
}

// console.log(addnum(5, 5))

// const addtwonum = (num1, num2) => num1 + num2

// const addtwonum = (num1, num2) => (num1 + num2)

const addtwonum = (num1, num2) => ({username: "Ayan"})


// console.log(addtwonum(5, 5))

const myArray = [2, 3, 4, 5, 6]

// myArray.forEach()