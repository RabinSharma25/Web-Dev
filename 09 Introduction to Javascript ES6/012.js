
var name = prompt("Enter your name");
name=name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase();
console.log(name);
alert("Hello " +name);