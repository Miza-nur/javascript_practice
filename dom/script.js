function printvalue(){  
    var name=document.form1.name.value;  
    alert("Welcome: "+name);  
    }  

//querySelector
const result=document.querySelector("#hello").innerText="Welcome Programmer"

// css with seclector
document.querySelector("#hello").style.color="red";

//append element.....

let appendEle =document.getElementById("bodyId");

let div =document.createElement("div");
div.innerHTML=`
<h1>This is from javascript</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit assumenda nesciunt praesentium dolor temporibus corrupti, aut in quaerat neque,</p>

<lu>
<li>List-1</li>
<li>List-2</li>
<li>List-3</li>
<li>List-4</li>

</lu>
`,

bodyId.appendChild(div);

//onclick event.......

function forDate(){
    document.getElementById("bodyId").innerText=Date();
}