/*
A higher-order function is a function that does one of the following:
-> Takes another function as an argument.
-> Returns another function as its result.
*/
 
let numbers=[1,2,3,4,5];

let result=numbers.map((numbers)=>{   
    return numbers*2;
})
console.log(result);

//another example.....
const n = [1, 2, 3, 4, 5];
const even = n.filter((num) => num % 2 === 0);
console.log(even);