const name = "Ayan"
const repoCount = 10

// console.log(name + repoCount + " value");  //outdated syntax of concatenat

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //mordern way of concatenation

const newName = new String('Ayan-shaikh') 
console.log(newName[0]);
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.toLowerCase());
console.log(newName.charAt(3));
console.log(newName.indexOf('y'));
console.log(newName.endsWith('n'));
console.log(newName.trim());
console.log(newName);

const newString = newName.substring(0, 2)
console.log(newString);

const anotherString = newName.slice(1,3)
console.log(anotherString);

console.log(newName.replace('A', 'R'));

console.log(newName.includes('S'));

console.log(newName.split('-'));