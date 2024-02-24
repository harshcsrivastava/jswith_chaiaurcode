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