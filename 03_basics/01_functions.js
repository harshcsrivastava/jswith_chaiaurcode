// Koi bhi kaam ya code ko baar baar jarurat ho fun. me likh do aur call kar lo jarurat pad
/*
function myName(){
    console.log("HARSH");
}

myName() //Fn ko execute karna
*/

/*
function addTwoNumbers(no1, no2){
    //HERE no1 and  no2 are called => PARAMETERS
    console.log(no1 + no2);
}
let result = addTwoNumbers(3,6)
//Jab quotes me daal diye to JS treat as a string
//HERE no1 and  no2 are called => ARGUMENTS
console.log(`Result : ${result}`);
*/

// Rather use this to not get not defined
function addtn(num1, num2){
    // let result = num1 + num2
    // return result
    // OR

    return num1 + num2
    //return kke baad kuch bhi item nhi hoga excute like kuch log kiya
}
//Scope = result naam se ek fn me bhi var hai
let result = addtn(3,6)

// console.log(`Result : ${result}`);

function userGreetings(username = "NewPet"){
    //Pahle se default value dene ke liye = "Name" and koi value pass hone pe ye overwrite hojayengi
    
// if(username === undefined){
    if(!username){
    console.log("Please enter a name");
    return
}

    return `${username} just logged in`
}

// console.log(userGreetings("Harsh")); //if no value passed to "undefined" output ayega
// console.log(userGreetings("Supes"));

function cartItem(...num){ //idhar ise rest case bolte na ki "SPREAD OPERATOER"
    return num;
}

// OR
function cartItem2(val1, val2, ...num){ //idhar ise rest case bolte na ki "SPREAD OPERATOER"
    return num; //baas array print hoga
}
// console.log(cartItem2(200,2939,23,"harsh"));

const user = {
    name: "Harsh",
    level: "noob",
    rank: 9999
}
function handleObj(inpObj){
    console.log(`User ${inpObj["name"]} just logged in and has experience of ${inpObj["rank"]}`);
}
// handleObj(user)
handleObj({ //Direct object pass kiya
    name:"Hola",
    rank:292
})

const array = [24,42 ,42,424]

function secondValueOfArray(givenArray){
    return givenArray[1]
}
console.log(secondValueOfArray(array));