function SetUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const User = new createUser("Ayan", "ayan124@email.com", "123")
console.log(User);
