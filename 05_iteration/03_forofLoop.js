const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

let mymap = new Map()
mymap.set('IN', 'India')
mymap.set('USA', 'United State Of America')
mymap.set('FR', 'France')
mymap.set('IN', 'India')

// console.log(mymap);

for (const [key, Value] of mymap) {
    // console.log(key, ':-', Value);
}

const myObject = {
    'game1': 'GTA5',
    'game2': 'Spider-Man Remastered'
}

for (const [key, Value] of myObject) {
    console.log(key, ':-', Value);
} //this gives error