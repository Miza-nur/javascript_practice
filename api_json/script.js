function dataLoad(){
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(Response => Response.json())
    .then(data => dataDisplay(data))
}

function dataDisplay(data){
    const div=document.getElementById('divTag')
    data.map(user=>{
        const p=document.createElement('p')
        p.innerText=user.name;
        div.appendChild(p);
    });
}