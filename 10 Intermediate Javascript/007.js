// arrays in  javascript
var guestList = ["Rabin","Rohit","Cat","Dog","Rohan"];
console.log(guestList);
console.log(guestList.length); 
var name = prompt("Enter the name");
if(guestList.includes(name)){
console.log("Welcome")
}
else{
    console.log("Sorry next time");
}