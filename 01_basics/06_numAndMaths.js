const bal = new Number(100);
// // const bal = 100
// console.log(bal);

// toString()

// console.log(bal.toFixed(3));
// toFixed(decimal_places)

// toPrecision(between 1-21) returns a string
// 123.8945 for 3=>124 for 4=>123.9]
// 1123.896 for 3=> exponential

const val = 1123.896
// console.log(val.toPrecision(3));


// // toLocalString() {default US Standard, For Indian use `en-IN`}
const hundreds = 10000000
// console.log(hundreds.toLocaleString()); //US Standard
// console.log(hundreds.toLocaleString('en-IN')); //Indian Standard Representation

//  ================= Maths =================

// console.log(Math.ceil(val)); //Go in google console to see more propoerties like Math.PI or Math.random
// Math.abs => absolute {Negative to Positive only}
// Math.round => 4.3 => 4 {Round-OFF}
// Math.ceil {4.42 se jyada kuich bhi to 5} and Math.floor{mtlb 4.32 se jyada kuch bhi to to 4}
// Math.sqrt, Math.pow
// Math.max and Math.min

// **Math.random => ALWAYS between 0 amd 1
const min = 1
const max = 6

console.log(Math.floor(Math.random()*10 + 1));
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 

