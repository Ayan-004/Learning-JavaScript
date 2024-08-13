// let name = "AyanShaikh     "
// console.log(name.trim().length);


let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is: ${this.spiderman}`);
        
    }
}

Object.prototype.Ayan = function(){
    console.log("Ayan is present in all objects");
    
}

Array.prototype.HeyAyan = function(){
    console.log("Hey Ayan whatsup");
    
}

// heroPower.Ayan()
// myHero.Ayan()
// myHero.HeyAyan()
// heroPower.HeyAyan()


const user = {
    username: "Ayan",
    email: "ayan123@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

//modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "Ayan        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
    
}

anotherUserName.trueLength()
"hulk".trueLength()