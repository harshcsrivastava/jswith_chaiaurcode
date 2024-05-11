// if statement
// if(condition){

// }
// if(false){} execute nhi krega
// <,>,<=,>=,==, !=,!==, ===

// && ||

// ===========SWITCH CASE

// switch(expression){
//     case value:

//         break;

//     default: ;
// }
let val = 5
switch(val){
    case 1:
        console.log(`hola`);
        break;
        // Shift + alt + down arrow to duplicate
    case 3:
        console.log(`fwfhola`);
        break;
    case 5:
        console.log(`paanch`);
        break;

    default: console.log("even");
    break;
}
//OR
let vaal = "jain"
switch(vaal){
    case "jain":
        console.log(`hola`);
        break;
        // Shift + alt + down arrow to duplicate
    case "har":
        console.log(`ekf`);
        break;

    default: console.log("def");
    break;
}
// if value is string use ""

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined,NaN

// Truthy Value 
// "0", 'false', " ",[], {}, function() {}

const emptyObj = {}

if(Object.keys(emptyObj).lengfth === 0){
    console.log("Object empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1
// val1 = 5 ?? 10 //5 hi value jayegi
//cause jab data base call krne me directly nahi ati, 2 ati, chahe null chahe undefined, if null ho to null assign ho

// val1 = null ?? 10 
// val1 = undefined ?? 10 
val1 = null ?? 10 ?? 15 //FALLBACK hai
console.log(val1);

// =================================

//Terniary Operator
//condn ? true : false

const icePrice = 80
icePrice>=80 ? console.log("Mahnga") : console.log("sasta")


