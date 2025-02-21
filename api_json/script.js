function dataLoad(){
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(Response => Response.json())
    .then(data => dataDisplay(data))
}

function dataDisplay(data){
    console.log(data);
    data.map(user=>console.log(user.email));
}