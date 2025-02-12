const body =document.getElementById('bodytag');

const div =document.createElement('div');
div.innerText='This is Div';

const head =document.createElement('h1');
head.innerText='This is Heading';

// another way
const div2=document.createElement('div');
div2.style.backgroundColor="#F5FBF0";
div2.style.padding='50px'
div2.innerHTML=`
<h1>This is second div</h1>
<p>lorem ipso jnbh  kmnjnhvklm</p>
<ul>
<li>LIST 1</li>
<li>LIST 1</li>
<li>LIST 1</li>
</ul>
`;


body.appendChild(div2)

div.appendChild(head);
body.appendChild(div);

