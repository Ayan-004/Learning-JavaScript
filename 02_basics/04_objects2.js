// const User = new Object();
// const user = {}

const InstaUser = {}

InstaUser.id = "1234"
InstaUser.name = "Ayan"
InstaUser.isLoggedIn = false

// console.log(InstaUser);

const regularUser = {
    email: "ayyanjsk@gmail.com",
    fullname: {
        userfullname: {
            Firstname: "Ayan",
            Lastname: "Shaikh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.Firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "a", 3: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const user = [
    {
        id: 1,
        email: "ayyanjsk@gamil.com"
    },
    {
        id: 2,
        email: "xyz@gamil.com"
    },
    {
        id: 3,
        email: "example@gamil.com"
    }
]

// console.log(user[1].email);

console.log(InstaUser);
console.log(Object.keys(InstaUser));
console.log(Object.values(InstaUser));
console.log(Object.entries(InstaUser));

console.log(InstaUser.hasOwnProperty("isLoggedoff"));