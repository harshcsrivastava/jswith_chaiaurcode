/*
Objects can be declared in two ways: 
- Literals(Constructors se singleton nhi banta, multiple instances ban jate)
- Constructors(Jab Constructors ese banate hai to singleton banta hai)

Values can be overwritten.
It can be freezed using 
*/
// Singleton
// Object.create(Constructor method)


// Symbol Declaration
const mySym = Symbol("key1");
// ek symbol lo use object ki key me add kro aur print kar ke dikhao

// Object Literals
const jsUser = {
    name: "Harsh Srivastava",//Name ko ye string trah process karta hai, like index ki trah, utna matlb nhi
    "full name": "Harsh Chandra Srivastava",
    age: 19,
    // mySym: "myKey1",//Not used as symbol but a string, therefore use []
    // [mySym]: "mykey1", Value same, correct syntax (***)
    email: "harshsrivastava@gmail.com",
    isLoggedIn: true,
    lastLoginDay: ["Mon","Thursday"]
}

console.log(jsUser.name);
console.log(jsUser["name"]);//Why we use this?
// Because we cant access full name var with dot operator
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym]);
