function yearsLeft(age) {
    var days =(90*365) -365*age;
    var weeks = (90*52) - 52*age;
    var months =(90*12) - 12*age;
    console.log("You have "+days+" days, "+weeks+" weeks and "+months+" months left.")
}
yearsLeft(21);
