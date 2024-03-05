const myArr = [1, 22, "Harsh", true, 24]
console.log("Array Type: ",typeof myArr);//Type Object

/* 
Shallow => Shallow copy always share the same reference that is change will reflect in the original items
Deep Array => They donot share the same reference. That is copy is created.

Goto console>create array> run the name> and see array prototypes and methods.
*/

// =========================== Array Methods ============================

myArr.push("Srivastava")
/*
myArr.push("Yoy")
myArr.pop()

myArr.unshift(0) //inserted at array start, we also have shift jo rev karta
myArr.shift()
console.log(myArr.includes(22));
console.log(myArr.indexOf("Harsh"));

const newArr = myArr.join() //Converts array in form of string
console.log(myArr);
console.log(typeof newArr);
*/

// Slice(bas portion print karta nikalta nhi, and index include nhi karta during print) and Splice(Portion nikaal deta hai and right index value is included) methods
let ekArr = myArr.slice(1,3)
console.log("Sliced = ", ekArr);
console.log("org Arr = ", myArr);
let doArr = myArr.splice(1,3)
console.log("Spliced = ", doArr);
console.log("org Arr = ", myArr);
