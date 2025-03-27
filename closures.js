//In Closures inner functions have access to the variables of outer scopes
//  can access the variable name declared in the parent function

function outerFun(){
    const num =200;
    function innerFun(){
        console.log(num);
        
    }
    innerFun()
}
outerFun();
console.log(num);//can't access outer function