const id = 232701077
let name = "Aeophics"
var city = "Seoul"
ability = "nothing"
/*
Always use const and let. 
var keyword is not in use due to issues in block scope
Values of a const cannot be altered.
*/
// Adding some changes
name = "Harsh Srivastava"
city = "Prayagraj"
ability = "Binge Watching"


console.log(id)
// MultiWay Display Method
console.table([id, name, city, ability])