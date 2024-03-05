/*Based on how data is stored and accessed - datatypes are of two types: Primitive and Non-Primitive

Primitive: String, Number, Boolean, BigInt, null, undefined, Symbol
//Dynamically type Programming Language JS


//Reference(Non-Primitive)
// Array, Objects, Functions
*/
let bigNumber = 1488564864548848454n;


let heros = ["Shik", "Shak"];
let myObj = {
    name:"HArsh",
    age:19,
//Curly ke andar jitna vo object hai, any datatype
}

const meraFun = function () {
    console.log("hello there \n");
}
meraFun();
console.log(typeof myObj);
/* TypeOfDatatype
undefined => undefined
Null => object

Sab Non-Primitive ka Type "Object" hai
specially function ka datatype 'Object Function' hai. return me function me ayega
*/

//Symbol
const id = Symbol('2140')
const anotherId = Symbol('2140')
console.log(id === anotherId); //Both are different even though same jaa rha

/*
Two types of Memory:
Stack(Primitive){Copy milti} and Heap(Non-Primitive){Original Value change, reference milta}
*/

let name = "HIii"
let realName = name
realName = "Harsh"
console.log(name);
console.log(realName);
//Change in Copy

let seniorOfficerOne = {
    email:"Yohoho@onepiece.in",
    crew:"StrawHats",
}

let srOfficerOne = seniorOfficerOne
srOfficerOne.email = "brook@onepiece.in"

console.log(seniorOfficerOne);
console.log(seniorOfficerOne.email);
console.log(srOfficerOne.email);

//Change in reference i.e. Address


// let and const have local scope in curlys while var have global scope in curlys