const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// let array = [1,2,3]
// array => to see prototypes

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); => empty paranthesis in node env
//browser me this ki value => window obj


// =====================
// Constructor function
// new keyword => naya context banana

function User(username, loginCount, isLoggedIn){
    // convention hai dono same rrkhna
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
    //puri value bhej dega to access krr skte but default hota hai
}

const userOne = new User("hitesh", 12, true)//value overwrite kar dega thatswhy new keyword
const userTwo = new User("ChaiAurCode", 11, false) //alag copy create hogi
// console.log(userOne); 
//new keyword usee krne se empty object create hota jise "instance" kaha jata
console.log(userOne.constructor); //khud hi ka instance deta "User", fn name
//console.log(userTwo);