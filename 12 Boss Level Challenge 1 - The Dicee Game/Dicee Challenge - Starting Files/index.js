var randomNumber1;
var randomNumber2;
var path1;
var path2; 

// for left dice 
randomNumber1 = randomNumberGenerator(1,6);
path1 = "./images/dice"+randomNumber1+".png"; 
document.getElementsByClassName("img1")[0].setAttribute("src", path1);

// for right dice 
randomNumber2 = randomNumberGenerator(1,6);
path2 ="./images/dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src", path2);

if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML="🚩Player1 Wins";
}

else if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").innerHTML="Player2 Wins🚩";
}
else {
    document.querySelector(".container h1").innerHTML="Draw!";
}


// this function returns random number between 1 and 6 (both inclusive)
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*

// This function can generate the random path too...

function imagePathGenerator(ranNum) {
    var path;
    if (ranNum === 1) {
        path = "./images/dice1.png";
    }
    else if (ranNum === 2) {
        path = "./images/dice2.png";
    }
    if (ranNum === 3) {
        path = "./images/dice3.png";
    }
    else if (ranNum === 4) {
        path = "./images/dice4.png";
    }
    if (ranNum === 5) {
        path = "./images/dice5.png";
    }
    else if (ranNum === 6) {
        path = "./images/dice6.png";
    }
    return path;
}

*/