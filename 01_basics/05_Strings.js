const name = "Harsh Srivastava"
let level = 1

// console.log(name + level + " is my level"); Not recommended method, use backticks

// console.log(`Hello my name is ${name} and I am at level ${level}`);
//Recommended Method

let gameName = new String('AeoPhics-HCS')

//String Methods
// console.log(name.length);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3)); //passes Index
// console.log(gameName.indexOf('H'));// gives index and Case Sensitive

//For String Extration through Index
// let newStr = gameName.substring(0,5) 5 index char is not included
//Negative values are ignored
// console.log(newStr);

//frequent use
// let anotherStr = gameName.slice(-3)
//negative value accepted that is reverse se hoga print
//-1 me 's' and -3 me 'ics'
// console.log(anotherStr);

//Trim : To remove spaces use trim();
// //to replace something
// let url = "Binks%20Sake"
// console.log(url.replace('%20','uke '));

// .includes() method, returns boolean

console.log(gameName.split('-')); // to extract string in array form using any separator, here "-" is used