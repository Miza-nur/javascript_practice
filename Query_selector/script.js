
// querySelector

const selectQuery=document.querySelector('#spantag').innerText='Hello programmer';
console.log(selectQuery);
const selectQuery2=document.querySelector('#ptag');
console.log(selectQuery2.innerHTML='<h1>This is Selector</h1>');


// querySelectorAll
const selectQuery3=document.querySelectorAll('.List-1');

for(let i=0;i<selectQuery3.length;i++){
    console.log(selectQuery3[i].innerText='Hello');
}