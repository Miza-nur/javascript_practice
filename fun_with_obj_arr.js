//function with object....
const myAddress={
    name: "Mizanur",
    age:25,
    location: "chittagong",
    hobby: ["playing","writting"]
}

function showAddress(anyObject){
    console.log(`My name is : ${anyObject.name}  My age : ${anyObject.age} Location : ${anyObject.location} Hobby : ${anyObject.hobby}`)
}
showAddress(myAddress);

//another way..........


//object in all function.
function showAddress(anyObject){
    console.log(`My name is : ${anyObject.name}  My age : ${anyObject.age} Location : ${anyObject.location} Hobby : ${anyObject.hobby}`)
}

showAddress({
    name: "Mizanur",
    age:25,
    location: "chittagong",
    hobby: ["playing"," writting"]
});




//function with Array....
const myArray=[100,200,300,400,800];

function showArray(anyObject){
    console.log(`Array first element is ${myArray[0]}`);
}
showArray(myArray);



//another way..........
function showArray(anyObject){
    console.log(`Array first element is ${myArray[2]}`);
}
showArray([100,200,300,400,800]);
