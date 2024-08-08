const promiseOne = new Promise(function(resolve, reject) {
    //Do async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved"); 
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ayan", email: "ayyanjsk@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        error = true
        if(!error){
            resolve({username: "Ayan Shaikh", password: 123})
        }else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(() => console.log("The promise is either resolved or rejected"))


const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        error = true
        if(!error){
            resolve({username: "JavaScript", password: 123})
        }else {
            reject("E: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);   
    } catch (error) {
        console.log(error);  
    }
}

consumePromiseFive()


// async function getAllUser(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//          const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
// }

// getAllUser()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data); 
})
.catch((error) => {
    console.log(error);
    
})