/*
Question... 
print numbers form 1 to 100
if number is divisible by 3 print Fizz instead
if number is divisible by 5 print Buzz instead
if number is divisible by both 3 and 5 print FizzBuzz
*/


// my methodd
for (i = 1; i <= 100; i++) {

    if (!(i % 3) && !(i % 5)) {
        console.log("FizzBuzz");
    }
    else if (!(i % 3)) {
        console.log("Fizz");
    }
    else if (!(i % 5)) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


/*
/// tutor method
var output =[];
var count =1;
function fizzBuzz()
{
    if(output[count]%3 ===0 && output[count] %5 ===0){
        output.push("FizzBuzz")
        
    }
    else if(output[count]%3 ===0){
        output.push("Fizz");
    }

    else if(output[count]%5 ===0){
        output.push("Buzz");
    }

    else{
        output.push(count);
    }
    count++;
    console.log(output);
}

fizzBuzz();
console.log(output);*/