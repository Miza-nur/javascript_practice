document.getElementById('update-btn').addEventListener('click',function(){
    const inputfield =document.getElementById('input-filed');
    const inputValue = inputfield.value;

    const defaultText = document.getElementById('defult-text');
    defaultText.innerText=inputfield.value;

    inputfield.value='';

  });



const loginbtn =document.getElementById('Login');
loginbtn.addEventListener('click',function(){
    loginbtn.innerText='Logout';
    loginbtn.style.backgroundColor='green';
})

