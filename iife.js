/*
Immediately Invoked Function Expressions (IIFE) are JavaScript functions that 
are executed immediately after they are defined. They are typically used to 
create a local scope for variables to prevent them from polluting the global scope
*/
//()();
//()()

(function myFun(){
    //name iife
    console.log('DB Connected');
})();

( (name)=>{
    console.log(`My name is ${name}`);
})('mizan')