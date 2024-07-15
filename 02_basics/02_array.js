const marvel_heros = ["Iron Man", "Spiderman", "Captain America"];

const dc_heros = ["Batman", "Superman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

//concat
// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

//spread method
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

//flat
const new_array= [1, 2, 3,[4, 5, 6,[7, 8, 9]]];
const another_array = new_array.flat(Infinity);

// console.log(another_array);

console.log(Array.isArray("Ayan"));
console.log(Array.from("Ayan"));
console.log(Array.from({name: "Ayan"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));