function getMilk(money){
    costPerBottle = 1.5;
    console.log("The robot can but "+(Math.floor(money/1.5)) +" bottles of milk with $"+money);
    return money%1.5;// too know how much we have saved
    }
var saved = getMilk(7);
console.log(saved);