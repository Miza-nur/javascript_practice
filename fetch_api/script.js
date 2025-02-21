

function displayData(){
    fetch('http://127.0.0.1:1462/fetch_api/demo.txt')
    .then(Response => Response.text())
    .then(data =>{
    const pTag=document.getElementById('para')
    pTag.innerText=data;
    })
}