/* 
SCOPE {} me rehta
3 types: let, const(non-mutable) & var(global scope and mutable)
bracket ke andar => block scope
bahar => global scope

windows- ka scope alag hai & node environment me scope alag hai

*/

// ---------Interesting (Different Declaration) - also known as hoisting

console.log(addone(5));

function addone(num){
    return num + 1
}

// console.log(addTwo(5)); //Error cause is declaration me fn se pahle execute nhi ho skta 
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5)); 