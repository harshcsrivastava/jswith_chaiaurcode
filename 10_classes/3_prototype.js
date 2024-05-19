// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); //high iq vali baat


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//fn, array, string sab obj se honge gujar rrhe to agar Obj me power di to sabke paaas ajani chahiye
//factory function [bydefaultfnjaise" create" jo 
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
//sabhi ko power dedi\
//kya sirf array ko denge to bakiyon pe hogi
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
//teache bhi use ki properrty use kar skta abb
// ?outdated

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()