const id = 232701077
let name = "Aeophics"
var city = "Seoul"
ability = "nothing"
let nothing
//Undefined value, semicolon is optional

/*
Always use const and let. 
var keyword is not in use due to issues in block scope, var can be redeclarred and redefined globally used [baaki redeclare nhi ho skte]
Values of a const cannot be altered.
*/
// Adding some changes
name = "Harsh Srivastava"
city = "Prayagraj"
ability = "Binge Watching"


console.log(id)
// MultiWay Display Method
console.table([id, name, city, ability,nothing])