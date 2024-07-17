let a = 300

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;

    // console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Ayan"
    
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //Gives an Error

    two()
}

// one()


if(true) {
    const username = "Ayan"

    if(username === "Ayan") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website); //Gives an Error
}

// console.log(username); //Gives an Error

// --------------------Interesting---------------------

// console.log(addone(2));

function addone(num) {
    return num + 1
}


// console.log(addtwo(3));

const addtwo = function(num1) {
    return num1 + 2
}
