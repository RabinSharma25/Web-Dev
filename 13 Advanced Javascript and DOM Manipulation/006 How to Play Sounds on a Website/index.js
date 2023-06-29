var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick() {
    // wasdjkl
    
    var letter = this.innerHTML; // this line gives the inner html of the button which is clicked
    console.log(letter);

    // to change the color of buttons text to white when the button is clicked
    this.style.color = "white";
}


// playing sounds in javascript

var audio = new Audio("./sounds/tom-1.mp3");
audio.play();