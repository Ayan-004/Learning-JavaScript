class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId() {
        return '123'
    }
}

const Ayan = new User("Ayan")
// console.log(Ayan.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const user1 = new Teacher("Ayan", "ayan123@gmail.com")
user1.createId()