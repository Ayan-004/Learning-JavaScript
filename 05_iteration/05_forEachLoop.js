const coding = ["js", "ruby", "java", "python", "c++"]

// coding.forEach( function(item){
//     console.log(item);
// } );

// coding.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
// } );


const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
    {
        languageName: "Java",
        languageFile: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

