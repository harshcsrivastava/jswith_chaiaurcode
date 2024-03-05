const marvel_heros = ["Ironman", "Dr. Strange", "Spiderman"]
const dc_heros = ["Superman", "batman", "Flash", "The Arrow"]

// marvel_heros.push(dc_heros)
//Not what you are expecting but whole dc array will be inserted as a single element with index 3

// OR 

// rather than use Concat but in new Array cause it will not print idk why
// let allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// OR

// Use use spread operator(...) more easy {Glass liya drop kiya, spread hogya}
let allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

let aArray = [1,2,3,[4,5,6], 7, [6,7,[4,5]]]
// aArray.flat(depth) => kitne depth tak flat kare
let simpleArr = aArray.flat(Infinity)
// console.log(simpleArr);

// When we select data from web page it comes in from node list or something else but we need in the form of array so we use this

console.log(Array.isArray("Harsh"));
console.log(Array.from("12345")); //converts to array from elements
console.log(Array.from({name:"Harsh"})); //Interesting

let score1 = 42
let score2 = 234
let score3 = 23
console.log(Array.of(score1, score2, score3));  //Makes Array
