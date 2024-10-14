 //rest operator

 function addCart(...num){
    return num;
 }
console.log(addCart(100,200,500));




//Spread Operator
let arr1 =[1,2,3,4];
let arr2 =[...arr1,5,6,7,8];

let arr3 =[85,689,...arr2,68,25,...arr1]
console.log(arr3);



function sum(num1,num2,num3,num4){
    return num1+num2+num3+num4;
}

console.log(sum(...arr1));