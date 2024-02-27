const todayDate = new Date();
/*
console.log(todayDate.toString()); 
// to GMT with time
console.log(todayDate.toDateString()); //Only Date in words
console.log(todayDate.toLocaleString()); //in Number and Time in am pm
console.log(todayDate.toISOString());
console.log(todayDate.toJSON());
console.log(todayDate.toLocaleDateString());
console.log(todayDate.toLocaleTimeString());
*/
// let otherDate = new Date(2004, 0, 24, 5, 1)//Month index 0 se start
let oneMoreDate = new Date("09-24-2004");


let myCreatedDate = Date.now()

console.log(myCreatedDate); //This will give time in millisecond from 1 Jan 1970 till now.
console.log(oneMoreDate.getTime());//Can be used to compare between times 
// console.log(Math.floor(oneMoreDate.getTime()/1000));
//Divide by 1000 to convert milisec to seconds

console.log(todayDate.getMonth()); //Index start from 0 for Month



