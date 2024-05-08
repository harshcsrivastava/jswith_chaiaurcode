// Immediately Invoked Fn Expression
// global scope ke pollution se problem hoti to use hatane ke liye use kiya
// Named IIFE
(function logMsg(){
    console.log("DB Connected");
})(); //semi colon needed varna do iifee execute nhi honge


// (fn definition)(execution call)

// Unnamed IIFE 
( (name) => {
    console.log("Hul;laa " + name);
})('Harsh')


// ===============JAVASCRIPT EXECUTION CONTEXT
/* 

{} => - Global Exec Context
- Fn execu cont
- Eval exe con
JS => Single threaded
global execution context banta hai jo this keyword se refer h0ta
har encvironment me alag hotas
browswer jo hai => this ki value : windowed obj

1. Global Execution Phase - this me allocate
    
2. Memory creation phase/Creation Phase
    val1 -> undefined
    val2 -> undefined
    fn addNum -> definition
    result1 -> undef
    result2 -> undefined

3. Execution Phase
    val1->10
    val2->5
    addNum ---> new var environment + execution thread (jitni baar execute hota utni baar new sandbox create)
        -Memory Phase
            *val1 - undefined
            *val2 - undefined
        -Execution Context
            *num1-10
            *num2-5
            *total-
            
Afterwards delete and reuse when jaroori 
*/