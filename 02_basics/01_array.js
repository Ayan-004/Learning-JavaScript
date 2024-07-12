//array

const myArr = [0, 1, 2, 3, 4, 5]
const Heroes = ["Spiderman", "Ironman", "Captain America"]
// console.log(Heroes[0]);

const Arr2 = new Array(1, 2, 3, 4, 5)
// console.log(Arr2[0]);

//Array Methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


//slice and splice


const myn1 = myArr.slice(1, 3)
console.log("A ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3)
console.log("B ", myArr);
console.log(myn2);
