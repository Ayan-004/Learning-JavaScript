const myObject = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} for ${myObject[key]}`);
}

const programming = ['js', 'py', 'cpp', 'swift']

for (const key in programming) {
    console.log(programming[key]);
}