class User  {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ayyan`.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const ayan = new User("ayyan123@gmail.com", "abc")
console.log(ayan.email);
console.log(ayan.password);
