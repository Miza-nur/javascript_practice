
const numbers =[1,5,8,9,7,5,3,6];

const myNum = numbers.filter((num) => num>7);
console.log(myNum);

//................
const someArr =[
    {name:"arif",age:25,prof:"service"},
    {name:"atick",age:28,prof:"student"},
    {name:"taref",age:20,prof:"teacher"},
    {name:"faisal",age:55,prof:"service"},
    {name:"locman",age:60,prof:"retaid"}

];

const myArr=someArr.filter((ar)=>{
    return ar.age>25;
});
console.log(myArr);
