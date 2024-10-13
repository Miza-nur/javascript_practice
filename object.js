//declaration
var objName = {};
console.log(objName)

// like real declaration
var myObj = {
    name: "Mizan",
    age:25,
    height: 5.1,
    location:"chottagram",
    isSingle: true,
    friend:["Hero","younus"]

 };

console.log(myObj)       
console.log(myObj.name) 
console.log(myObj["age"])
console.log(myObj.friend[1])

//another process

Object.create
//more 

var detaisObj={
    user:"karim",
    email:"abc@gmail.com",
    myObj:{
        name: "Mizan",
        age:25,
        height: 5.1,
        location:"chottagram",
        isSingle: true,
     }

};

detaisObj.myObj.friend=["Hero","younus"];

console.log(detaisObj)

//nothing change
// Object.freeze(detaisObj)

