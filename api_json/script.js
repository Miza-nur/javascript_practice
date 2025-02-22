function dataLoad(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => dataDisplay(data))
}
dataLoad();
function dataDisplay(data){
    const div=document.getElementById('divTag')

    data.map(user=>{
        const p=document.createElement('div')
        p.innerHTML=`
        <h4>ID: ${user.id}</h4>
        <h2>Title: ${user.title}</h2>
        <p>Body: ${user.body}</p>
        `;
        div.appendChild(p);
    });
}