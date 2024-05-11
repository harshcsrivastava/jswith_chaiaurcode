// three.js LIBRARY

// JS  ka obj nhi balki kis par loop lagana hai
// let arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

//forof loop => to extract data

// const greetings = "What's the problem"
// for (const greet of greetings) {
//     // if(greet == " "){
//     //     continue
//     // } to remove Space
//     console.log(greet);
// }


//MAPS (thorz array type js me)
// MAP OBJ hold key-values pairs, remmbers insertion order of key

const map = new Map()
map.set('IN', "INDIA")
map.set('PRY', "PRAYAGRAJ")
map.set('BSB', "VARANASI")


console.log(map);
// for (const key of map) {
//     console.log(key);
// } array form me ata jo nhi chahiye so object destructuring

for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}

//if india dubara krenge enter to nhi hoga, unique values hoti hai and order maintain rehta, no DUPPLICATION


const myObj = {
    game1: "GTAV",
    game2: "CS2"
}
for (const [key, value] of myObj) { //NOT ITERABLE KUCH AUR USE HOTA, map iterable hai
    console.log(`${key} :- ${value}`);
}