$("h1").css("color","blue");
// or 
// jQuery("h1").css("color","blue");

// Note that jQuery selects all the items with the matched selector
// Example
$("button").css("background-color","purple");


// selecting single element out of multiple matched selector
$($("button").get(2)).css("background-color","red");
// *****************or***************** 
// $($("button")[2]).css("background-color","red")