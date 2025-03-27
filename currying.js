/*
Currying is used in JavaScript to break down complex function calls into
smaller, more manageable steps. It transforms a function with multiple 
arguments into a series of functions, each taking a single argument.

=> It converts a function with multiple parameters into a sequence of functions.
=> Each function takes a single argument and returns another function 
    until all arguments are received.
=> Helps in functional programming by enabling function reusability and 
    composition.
*/ 


//  function multiply(a,b,c){
//     return a*b*c
//  }

 function curryingFun(a){
    return function(b){
        return function(c){
            return a*b*c;
        };
    };
 }
 
 console.log(curryingFun(2)(5)(4));