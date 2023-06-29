// love calculaor using if else
var name1 = prompt("Enter your name");
var name2 = prompt("Enter your name");
var random = Math.floor(Math.random()*100)+1;
// console.log("The percentage of your love is " +random);
if(random>=70)
{
    console.log("Your love score is "+ random+"% and you love each other immensely");
}

else if(random>=30 && random<70){
    console.log("Your love score is "+ random+"% and you love each other averagely");
    
}

else{
    console.log("Your love score is "+ random+"% and you two run like oil and water");

}