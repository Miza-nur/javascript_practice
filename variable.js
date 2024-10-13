

var mynum=122;
console.log(typeof mynum);

var myName = 'akash';
console.log(typeof myName);

var mybol = true;
console.log(typeof mybol);

var myStr = [1,2,'miss'];
console.log(typeof myStr);


var nameStr = ['ruby','sumi','jami'];
console.log(nameStr.length);

console.log(nameStr.indexOf('sumi'));

console.log(nameStr[2]);

//console.log(mynum,myName,mybol,myStr);


//push And pop shift unshift sort method.....

var friendName = ['karim','rahim','sakib','rakib'];

//add last position
friendName.push('bilkis')
console.log(friendName);

friendName.pop()
console.log(friendName);
//Delete last position


//add first position
friendName.unshift('noman');
console.log(friendName);

//Delete first position
friendName.shift('noman');
 console.log(friendName);


var x =[5,9,5,7,1,3,4]
x.sort()
console.log(x);

var friendName = ['karim','rahim','sakib','rakib'];
friendName.sort()
console.log(friendName)
