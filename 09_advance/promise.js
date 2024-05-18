/*
    Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

    A Promise is in one of these states:

    - pending: initial state, neither fulfilled nor rejected.
    - fulfilled: meaning that the operation was completed successfully.
    - rejected: meaning that the operation failed



    JADA TAR PROMISE CONSUME KRRTE HAI

    .then ka connection hai resolve ke sath
*/

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task: ex => setTimeout, setInterval
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//jarurri nhi var me hold kre
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// callback fn hota hai dhyan 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
        // object bheja
    }, 1000)
})
//databheja and consume kiya
promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//callback hell term, and jrooori ek .then ho aur bhi krr skte
promiseFour 
//try to use new line
.then((user) => {
   console.log(user);
   return user.username
   //jab return kiya to var me store ke return  karaya to error ayega,
   //in that case use chaining
}).then((username) => {
   console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// using "async await" : lagbhag same hote .then jaise, bas gracefully catch handle nhi kr skte
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        //obj hai lekin "()" nhi lagenge
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    //try catch => error ko gracefully handle krne ke liye

}

consumePromiseFive()

//data await se lenge

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //Data comes in string form
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json() //to convert in json
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all


// ==============================
const myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Hello");
        resolve()
    },1000)
    
})

async function conMyPromise(){
    try {
        await myPromise

    } catch (error) {
        
    }
}

// microtask QUEUE in web API => high priority line

//agar fetch me koi bhi aya ki "Errror 404", "File not Found" to vo resolved me jayega [onfulfilled]
// aur agar request hi nhi  jaa payi to vo apke RREJECT ME [onRRejection]