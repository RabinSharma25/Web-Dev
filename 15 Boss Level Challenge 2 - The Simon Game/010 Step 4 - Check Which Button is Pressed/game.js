var buttonColours = ["red", "blue", "green", "yellow"]; // the four basic colors
var gamePattern = []; // stores random  colors 
var randomChosenColour = buttonColours[nextSequence()];
var userClickedPattern = [];
gamePattern.push(randomChosenColour);


// random number generator 
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    return randomNumber;
}

$("#" + randomChosenColour).fadeOut(100).fadeIn(100) // to have a flashing effect 
playSound(randomChosenColour); // to play the sound of the chosen color // currently not working for some reason


// event listener to store the user clicked buttons in an array
$(".btn").click(function (event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})


// random number generator 
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    return randomNumber;
}

function playSound(name) {
    // to make the sound for button clicks 
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
