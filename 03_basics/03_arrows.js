const user = {
    username: "Harsh",
    price: 334,

    welcomeMessage: function(){ //As a property
        console.log(`${this.username} Welcome buddy`); //taki is scope ki use ho lekin hard coding nahi
    }
}
// user.welcomeMessage()
//in "node" environment "this" console log krne pe context empty hai 
//browser ke andar "window object hai"
// function huhu(){
//     username: "hahah"
//     console.log(this.username); //undefined
//     //cause only obj me work karta function me nhi hai
// }


//Arrow FUn
const huhu = () =>{
    let username  = "HArsh"
    // console.log(this.username)
}
// huhu()

//Another way (implicit return)

const addTwo = (num1, num2) => num1 + num2 //curly bracs lagane me return likhna padega

//if object reutrn karna to paranthesis use karna padega
// console.log(addTwo(2,5));

const num = [22,78, 43,57]
