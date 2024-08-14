class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`New Course are added by ${this.username}`);
    }
}

const userInfo = new Teacher("Ayan", "ayanteacher@gmail.com", "123")

userInfo.addCourse()
userInfo.logMe()

const userDetail = new User("Ayan Shaikh")

userDetail.logMe()

console.log(userInfo instanceof Teacher);
