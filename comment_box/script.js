document.getElementById('submit-btn').addEventListener('click',function(){
   const commentValue = document.getElementById('comment');
   const commentBoxValue = commentValue.value;

   const commentPlace = document.getElementById('comment-Place');

   const makePtag = document.createElement('span');
   makePtag.innerText = commentBoxValue;

   commentPlace.appendChild(makePtag);
   commentValue.value='';

})