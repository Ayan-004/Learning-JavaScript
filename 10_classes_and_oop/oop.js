const user = {
    username: "Ayan Shaikh",
    loginCount: 10,
    signedIn: true,

    getUserDetail: function(){
        // console.log(`Username ${this.username}`);
        // console.log(this);
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());


function User(username, loginCount, isLoggedIn) {
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.user}`);
        
    }
    return this
}

const userOne = new User("Ayan", 8, true)
const usertwo = new User("peter", 5, false)
console.log(userOne.constructor);
// console.log(usertwo);
