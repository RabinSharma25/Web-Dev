var buttonColours = ["red", "blue", "green", "yellow"]; // the four basic colors
var gamePattern = []; // stores random colors 
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);


// random number generator 
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    return randomNumber;
}