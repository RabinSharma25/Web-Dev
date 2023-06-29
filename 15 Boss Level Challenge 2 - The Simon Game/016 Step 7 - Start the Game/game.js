var buttonColours = ["red", "blue", "green", "yellow"]; // the four basic colors
var gamePattern = []; // stores random  colors 
var userClickedPattern = [];
var randomChosenColour;
var level = 0;
// console.log("outside "+level);
// if (level ===0) {
//     console.log(level);
//     $("body").keydown(nextSequence);
// }
while(level===0){
    // console.log(level);
    $("body").keypress(nextSequence); 
    console.log(level);
    level++;
}
$("body").unbind("keypress");





// random number generator 
function nextSequence() {
    $("#level-title").text("level " + level);
    var randomNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100) // to have a flashing effect 
    playSound(randomChosenColour); // to play the sound of the chosen color // currently not working for some reason
    
    // console.log("inside "+level);

}


// event listener to store the user clicked buttons in an array
$(".btn").click(function (event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    // console.log(userClickedPattern);
})


// random number generator 

function playSound(name) {
    // to make the sound for button clicks 
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// animating the button presses 
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () { $("#" + currentColour).removeClass("pressed") }, 100);

}


