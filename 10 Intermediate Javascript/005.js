// leap year challenge .. find whether a given year is leap or not

var year = 2000;
if (!(year % 4) && !(year % 100) && !(year % 400)) { //all divisible
    console.log("The year is a leap year")
}
else if (!(year % 4) && (year % 100)) { //divisible by first but not divisible by the second
    console.log("The year is a leap year");

}

else {
    console.log("The year is not a leap year");
}