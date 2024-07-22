//for

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}
// console.log(element);


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop value ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray = ["Ironman", "Spider-Man", "Captain America"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

//break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break;
//     }

//     console.log(`Value of i is ${i}`);
    
// }


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;
    }

    console.log(`Value of i is ${i}`);
    
}