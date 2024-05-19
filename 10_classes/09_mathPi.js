//Kya JS me jo Math.pi hai uski value 3 ya 4 update kar skte aur kaise?


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
//kisi bhi obj ka description nikal skte hai aur bhi aise hote hai

// console.log(descripter);
//ise ye pata chalega ki writable false hai mtlb itni jada hard checks hai js me c++ me ki ye change nhi hoga

// console.log(Math.PI);
// Math.PI = 5 //Value update nhi hogi aise
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai); 
//ye object hai property nhi to undefined ayega
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//rewrite kr rhe
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}