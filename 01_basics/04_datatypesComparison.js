console.log("2" > 1); //conversion to Number

/* 
the "==" and other comparison operators ("> , <, <=, >=") work differently.
the Equality operator treat NULL as zero while "==" does not.

For undefined it will always be false
*/

console.log(null >= 0);//true
console.log(null > 0);
console.log(null == 0); //false


// === => Strict check, checks datatype