//object literal

const mySym = Symbol()

const JsUser = {
    name: "Ayan",
    "full name": "Ayan Shaikh",
    age: 20,
    [mySym]: "mykey1",
    location: "Kalyan",
    email: "ayyanjsk@gamil.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "ayyanshaikh47@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)

JsUser.email = "ayyanewemail@gamil.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());