// const gameUser = new Object()
//Singleton obj bnta hai niche vale se singleton nhi bnta (dono empty obj nhi banate)

const gameUser = {}
gameUser.riotID = "MasterChief#HALOO"
gameUser.name = "MasterChief"
gameUser.valCoins = 2050
//riotID, name ye sab KEYS kehlayengi while MasterChief Values
// console.log(gameUser);

const regUser = {
    email:"whatzup@rockit.in",
    fullname: { //object bana diya
        userFullName: {
            firstName: "Harsh",
            middleName: "Chandra",
            lastName: "Srivastava"
        }
    }
}
//Jab API Calling hogi to fullname ke baad "?" lagate ki ye fullname exist krta to age ke function karo `fullname?.userFullName`
// console.log(regUser.fullname.userFullName.lastName);
// console.log(regUser["fullname"]["userFullName"]['middleName']);

const target = { 1: "a" , 2:"b"}
const source = { 2: "c", 4:"b"}

// const obj3 = {obj1 , obj2} //dono object ko nhi jodta
// const obj3 = Object.assign({},target,source) 
//{} => isko target mante and baki ko source mante taki jo sab return kr rhe vo isme kr rrhe, ye act as a target and rest source
// we will use this less, use spread operator
const obj3 = {...target, ...source}// {more use}
// console.log(obj3);

// console.log(gameUser);
// console.log(Object.keys(gameUser));
// console.log(Object.values(gameUser));
console.log(Object.entries(gameUser));//Array bana deta key aur value ko

//agar loopthrough kiya obj me ki ye key hai iske pass
console.log(gameUser.hasOwnProperty("riot"));//riot naam se koi key ya property exist nhi krti

// Object destructuring 
const course = {
    name: "ChaiaurCode Marketing",
    amount: 4999,
    instructor: "Hitesh Ji"
}

// Suppose ki hame iske property ko baar baar access karna hai
 const {instructor: instruct} = course //chota kar diyaa, kuch bhi likh skte 
 console.log(instruct);

/* 
Direct `({company})` use hota REACT me (Destructure yani bade ko chota me likha) =. a useful JavaScript feature to extract properties from objects and bind them to variables
const navbar = ({props.company = company}) => {

}
navbar(company = "HoooLa

=====API thora====
api aisi dikhti jisme keys bhi strings jaise hote
{
    "name" : "Harsh",
    "isloggedIn" : true,
    "id": 24586652
}
ye obj form json hai


kabhi kabhi arrat form me ata hai
*/
