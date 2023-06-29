/*
whos is paying the lunch code challenge
*/

var names =["Rabin","Siddhart","Ashwin","Rohit","Rohan"];
function whosPaying(){
   var index = randomInt(0,names.length -1);
   console.log(names[index] +" is paying for the lunch");

}

function randomInt(min ,max){ // both min and max inclusive
    return Math.floor(Math.random() *(max-min+1) + min); 
}

whosPaying();