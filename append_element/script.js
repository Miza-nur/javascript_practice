const body =document.getElementById('bodytag');

const div =document.createElement('div');
div.innerText='This is Div';

const head =document.createElement('h1');
head.innerText='This is Heading'

div.appendChild(head);
body.appendChild(div);

