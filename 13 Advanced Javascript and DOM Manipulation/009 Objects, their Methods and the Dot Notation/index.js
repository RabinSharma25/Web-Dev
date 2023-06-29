// Objects in javascript
var bellBoy1 = {
    name: "Timmy",
    age: 19,
    hasWorkingPermit: true,
    languages: ["French","English"],
    moveSuitcase: function(){
        alert("Moving the suticase");
    }
}

// accessing the object, object's property value and methods
console.log(bellBoy1);
console.log(bellBoy1.name);
bellBoy1.moveSuitcase();


// creating objects using constructor function
function BellBoy(name, age, hasWorkingPermit, languages){ // constructor function
    this.name = name;
    this.age = age;
    this.hasWorkingPermit = hasWorkingPermit;
    this.languages = languages;
    this.moveSuitcase = function(){
        alert("Moving the suticase");
    }
}

// creating or initializing objects using the constructor function
var bellBoy2 = new BellBoy("Rabin", 19, true, ["Hindi","Nepali","English"]);
console.log(bellBoy2);
console.log(bellBoy2.name);
console.log(bellBoy2.languages);
bellBoy2.moveSuitcase();

